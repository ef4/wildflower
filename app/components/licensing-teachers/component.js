import Ember from 'ember';

export default Ember.Component.extend({
  filledIn: Ember.computed('model.ageRange', 'model.classSize', function() {
    return this.get('model.ageRange') && this.get('model.classSize');
  }),
  answer: Ember.computed('model.ageRange', 'model.classSize', function() {
    // hard coded for now
    return {};
  }),
  actions: {
    print() {
      window.print();
    }
  }
});
