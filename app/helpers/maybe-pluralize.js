import Ember from 'ember';

export default Ember.Helper.helper(function([count, word]) {
  if (count === 1) {
    return word;
  } else {
    return Ember.String.pluralize(word);
  }
});
