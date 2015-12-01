import Ember from 'ember';
import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  state: attr(),
  stateRegulation: Ember.computed('state', function() {
    if (this.get('state.name')) {
      return this.store.peekRecord('regulation', this.get('state.name'));
    }
  }),

  ageRangeDesc: attr(),
  ageRange: Ember.computed('stateRegulation', 'ageRangeDesc', {
    get() {
      let desc = this.get('ageRangeDesc');
      return this.get('stateRegulation.classrooms').find(classroom => classroom.description === desc);
    },
    set(k, v) {
      this.set('ageRangeDesc', v ? v.description : null);
      return v;
    }
  }),

  classSize: attr(),

  minTeachers: Ember.computed('classSize', 'ageRange', function() {
    let ageRange = this.get('ageRange');
    let classSize = this.get('classSize');
    let entry = ageRange.ratios.find(([[fromStudents, toStudents]]) => classSize >= fromStudents && classSize <= toStudents);
    if (entry) {
      return entry[1];
    }
  }),

  adminRequirements: Ember.computed('classSize', 'ageRange', function() {
    let classSize = this.get('classSize');
    let groups = this.get('ageRange.ageGroups');
    return this.get('stateRegulation.administrators').find(
      entry => entry.minStudents <= classSize &&
        entry.maxStudents >= classSize &&
        groups.every(name => entry.ageGroups.indexOf(name) !== -1)
    );
  }),

  minSquareFeet: Ember.computed('classSize', 'ageRange', function() {
    return this.get('classSize') * 50;
  }),

  recommendedSquareFeet: Ember.computed('classSize', 'ageRange', function() {
    return this.get('classSize') * 70;
  })


});
