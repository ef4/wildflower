import { capitalize } from '@ember/string';
import { helper as buildHelper } from '@ember/component/helper';
export default buildHelper(function([step]) {
  if (step === 'setup') {
    return 'Set-Up';
  } else {
    return capitalize(step);
  }
});
