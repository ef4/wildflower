import { computed } from '@ember/object';
import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  state: attr(),
  stateRegulation: computed('state', function() {
    if (this.get('state.name')) {
      return this.store.peekRecord('regulation', this.get('state.name'));
    }
  }),

  ageRangeDesc: attr(),
  ageRange: computed('stateRegulation', 'ageRangeDesc', {
    get() {
      let desc = this.ageRangeDesc;
      return this.get('stateRegulation.classrooms').find(classroom => classroom.description === desc);
    },
    set(k, v) {
      this.set('ageRangeDesc', v ? v.description : null);
      return v;
    }
  }),

  classSize: attr(),

  minTeachers: computed('classSize', 'ageRange', function() {
    let ageRange = this.ageRange;
    let classSize = this.classSize;
    let entry = ageRange.ratios.find(([[fromStudents, toStudents]]) => classSize >= fromStudents && classSize <= toStudents);
    if (entry) {
      return entry[1];
    }
  }),

  adminRequirements: computed('classSize', 'ageRange', function() {
    let classSize = this.classSize;
    let groups = this.get('ageRange.ageGroups');
    return this.get('stateRegulation.administrators').find(
      entry => entry.minStudents <= classSize &&
        entry.maxStudents >= classSize &&
        groups.every(name => entry.ageGroups.indexOf(name) !== -1)
    );
  }),

  minSquareFeet: computed('classSize', 'ageRange', function() {
    return this.classSize * 50;
  }),

  recommendedSquareFeet: computed('classSize', 'ageRange', function() {
    return this.classSize * 70;
  }),

  completedSteps: computed('stateRegulation', 'classSize', 'ageRange', function() {
    let steps = [];
    if (this.stateRegulation) {
      steps.push('setup');
    }
    if (this.classSize && this.ageRange) {
      steps.push('teachers');
      steps.push('location');
      steps.push('forms');
      steps.push('templates');
    }
    return steps;
  })


});
