import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  filledIn: computed('model.{ageRange,classSize}', function() {
    let filledIn = this.get('model.ageRange') && this.get('model.classSize');
    if (filledIn) {
      // This is a handy place to persist the user's work. Elsewhere,
      // we only persist it when moving between steps, but this step
      // "feels complete" once both of these are provided and we
      // display corresponding regulations.
      this.model.save();
    }
    return filledIn;
  }),
  actions: {
    print() {
      window.print();
    }
  }
});
