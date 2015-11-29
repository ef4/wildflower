import Ember from 'ember';
import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  state: attr(),
  ageRange: attr(),
  classSize: attr(),
  stateRegulation: Ember.computed('state', function() {
    if (this.get('state.name')) {
      return this.store.peekRecord('regulation', this.get('state.name'));
    }
  })
});
