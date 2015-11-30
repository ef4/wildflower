import Ember from 'ember';

export default Ember.Component.extend({
  filledIn: Ember.computed('model.ageRange', 'model.classSize', function() {
    let filledIn = this.get('model.ageRange') && this.get('model.classSize');
    if (filledIn) {
      // This is a handy place to persist the user's work. Elsewhere,
      // we only persist it when moving between steps, but this step
      // "feels complete" once both of these are provided and we
      // display corresponding regulations.
      this.get('model').save();
    }
    return filledIn;
  }),
  actions: {
    print() {
      window.print();
    }
  }
});
