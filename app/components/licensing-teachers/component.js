import Ember from 'ember';

export default Ember.Component.extend({
  haveAnswer: Ember.computed('ageRange', 'classSize', function() {
    return this.get('ageRange') && this.get('classSize');
  })
});
