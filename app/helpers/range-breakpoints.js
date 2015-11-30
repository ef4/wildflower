import Ember from 'ember';

export default Ember.Helper.helper(function([classroom]) {
  return classroom.ratios.map(r => r[0][1]);
});
