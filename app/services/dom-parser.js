import Ember from 'ember';

export default Ember.Service.extend({
  _parser: Ember.computed(function() {
    return new DOMParser();
  }),

  _serializer: Ember.computed(function() {
    return new XMLSerializer();
  }),


  parse(string, contentType) {
    return this.get('_parser').parseFromString(string, contentType);
  },

  serialize(document) {
    return this.get('_serializer').serializeToString(document);
  }
});
