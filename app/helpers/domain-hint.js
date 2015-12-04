import Ember from 'ember';

export default Ember.Helper.helper(function([url]) {
  let m = /^.*\/\/([^\/]+)/.exec(url);
  if (m) {
    return m[1];
  }
});
