import Ember from 'ember';

export default Ember.Component.extend({
  showButton: Ember.computed('email', function() {
    return /\w@\w/.test(this.get('email'));
  })
});
