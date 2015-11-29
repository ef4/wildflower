import Ember from 'ember';

export default Ember.Component.extend({
  haveAnswer: Ember.computed('model.ageRange', 'model.classSize', function() {
    return this.get('model.ageRange') && this.get('model.classSize');
  })
});
