export const budgetConfig = [
  {
    onSheet: 'START UP COST',
    do: [
      { put: 'salaries' , into: 'B7' },
      { put: 'rent' , into: 'B11' }
    ]
  }
];

/* global saveAs */
import Ember from 'ember';

export default Ember.Component.extend({
  filename: 'wildflower-school-budget.xlsx',
  actions: {
    create() {
      let budget = this.get('budget');
      budgetConfig.forEach(sheetEntry => {
        let sheet = budget.sheet(sheetEntry.onSheet);
        sheetEntry.do.forEach(edit => {
          sheet.write(edit.into, this.get(edit.put));
        });
      });
      saveAs(budget.asBlob(), this.get('filename'));
      this.set('finished', true);
    },
    again() {
      this.set('finished', false);
    }
  }
});