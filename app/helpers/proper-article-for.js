import Ember from 'ember';

export default Ember.Helper.helper(function([word]) {
  return /^[aeiou]/i.test(word) ? 'an' : 'a';
});
