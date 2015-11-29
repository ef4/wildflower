import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['notes'],
  noteService: Ember.inject.service('notes'),
  notes: Ember.computed.alias('noteService.activated')
});
