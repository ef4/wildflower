import DS from 'ember-data';
const { attr } = DS;
export default DS.Model.extend({
  state: attr(),
  ageRange: attr(),
  classSize: attr()
});
