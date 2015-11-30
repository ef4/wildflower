import DS from 'ember-data';
const { attr } = DS;
export default DS.Model.extend({
  classrooms: attr(),
  ageGroups: attr(),
  qualifications: attr()
});
