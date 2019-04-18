import Component from '@ember/component';
import saveAs from 'file-saver';
export const budgetConfig = [
  {
    onSheet: 'INPUT ASSUMPTIONS',
    do: [
      { put: 'salaries' , into: 'B2' },
      { put: 'rent' , into: 'B3' }
    ]
  }
];

export default Component.extend({
  filename: 'wildflower-school-budget.xlsx',
  actions: {
    create() {
      let budget = this.budget;
      budgetConfig.forEach(sheetEntry => {
        let sheet = budget.sheet(sheetEntry.onSheet);
        sheetEntry.do.forEach(edit => {
          sheet.write(edit.into, this.get(edit.put));
        });
      });
      saveAs(budget.asBlob(), this.filename);
      this.set('finished', true);
    },
    again() {
      this.set('finished', false);
    }
  }
});
