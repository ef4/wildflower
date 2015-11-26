import Ember from 'ember';
export default Ember.Helper.helper(function([step]) {
  if (step === 'setup') {
    return 'Set-Up';
  } else {
    return Ember.String.capitalize(step);
  }
});
