import Ember from 'ember';

export default Ember.Helper.helper(function([string]) {
  if (string) {
    return Ember.String.dasherize(string);
  }
});
