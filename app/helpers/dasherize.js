import Ember from 'ember';

export default Ember.Helper.helper(function([string]) {
  return Ember.String.dasherize(string);
});
