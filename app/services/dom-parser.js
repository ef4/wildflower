import { computed } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  _parser: computed(function() {
    return new DOMParser();
  }),

  _serializer: computed(function() {
    return new XMLSerializer();
  }),


  parse(string, contentType) {
    return this._parser.parseFromString(string, contentType);
  },

  serialize(document) {
    return this._serializer.serializeToString(document);
  }
});
