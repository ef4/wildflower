import DS from 'ember-data';
const { attr } = DS;
export default DS.Model.extend({
  ratios: attr(),
  ageGroups: attr(),
  qualifications: attr()
});
