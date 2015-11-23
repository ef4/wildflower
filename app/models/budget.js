import Ember from 'ember';
import DS from 'ember-data';
const { $ } = Ember;
/* global JSZip */

export default DS.Model.extend({
  blobId: DS.attr(),
  blobStore: Ember.inject.service(),
  domParser: Ember.inject.service(),

  init() {
    this._super();
    this.documentCache = Object.create(null);
  },

  _blob: Ember.computed('blobId', function() {
    return this.get('blobStore').find(this.get('blobId'));
  }),

  zipFile: Ember.computed('blob', function() {
    return new JSZip(this.get('_blob'));
  }),

  document(name) {
    let doc = this.documentCache[name];
    if (doc) {
      return doc;
    }
    return this.documentCache[name] = this.get('domParser').parse(this.get('zipFile').file(name).asText(), 'text/xml');
  },

  sheet(name) {
    let node = this.document('xl/workbook.xml').querySelector(`sheet[name="${name}"]`);
    if (!node) { return; }
    let sheetId = node.getAttribute('sheetId');
    let sheet = this.document(`xl/worksheets/sheet${sheetId}.xml`);
    return {
      read: (cellName) => $(sheet.querySelector(`[r="${cellName}"] v`)).text(),
      write: function(cellName, value) {
        let cell = sheet.querySelector(`[r="${cellName}"]`);
        while (cell.firstChild) {
          cell.removeChild(cell.firstChild);
        }
        let v = sheet.createElementNS("http://schemas.openxmlformats.org/spreadsheetml/2006/main", 'v');
        $(v).text(value);
        cell.appendChild(v);
        return this;
      }
    };
  },

  asBlob() {
    let zip = this.get('zipFile');
    let domParser = this.get('domParser');
    Object.keys(this.documentCache).forEach(filename => {
      let doc = this.documentCache[filename];
      zip.file(filename, domParser.serialize(doc));
    });
    this.documentCache = Object.create(null);
    return zip.generate({type: 'blob'});
  }
});
