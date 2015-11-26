import Ember from 'ember';

export default Ember.Route.extend({
  subHeader: Ember.inject.service(),

  beforeModel() {
    this.get('subHeader').set('title', 'Budget');
  },

  model() {
    return this.store.findRecord('budget', 'template');
  }
});
