/* global saveAs */
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    create() {
      let budget = this.get('budget');
      budget.sheet('START UP COST')
        .write('B7', this.get('salaries'))
        .write('B11', this.get('rent'));
      saveAs(budget.asBlob(), 'wildflower-school-budget.xlsx');
    }
  }
});
