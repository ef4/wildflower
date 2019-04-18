import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import DS from 'ember-data';
/* global JSZip */

export default DS.Model.extend({
  blobId: DS.attr(),
  blobStore: service(),
  domParser: service(),

  init() {
    this._super();
    this.documentCache = Object.create(null);
  },

  _blob: computed('blobId', function() {
    return this.blobStore.find(this.blobId);
  }),

  zipFile: computed('blob', function() {
    return new JSZip(this._blob);
  }),

  document(name) {
    let doc = this.documentCache[name];
    if (doc) {
      return doc;
    }
    return this.documentCache[name] = this.domParser.parse(this.zipFile.file(name).asText(), 'text/xml');
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
    let zip = this.zipFile;
    let domParser = this.domParser;
    Object.keys(this.documentCache).forEach(filename => {
      let doc = this.documentCache[filename];
      zip.file(filename, domParser.serialize(doc));
    });
    this.documentCache = Object.create(null);
    return zip.generate({type: 'blob'});
  }
});
