import Ember from 'ember';

export default Ember.Route.extend({
  subHeader: Ember.inject.service(),

  beforeModel() {
    this.get('subHeader').set('title', 'Licensing');
  },

  model() {
    return this.store.findAll('regulation');
  }

});
