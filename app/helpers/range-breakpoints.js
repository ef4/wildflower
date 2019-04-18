import { helper as buildHelper } from '@ember/component/helper';

export default buildHelper(function([classroom]) {
  return classroom.ratios.map(r => r[0][1]);
});
