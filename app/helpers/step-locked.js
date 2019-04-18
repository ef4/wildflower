import { helper as buildHelper } from '@ember/component/helper';

// TODO: steps that don't have prerequisites met should be locked
export default buildHelper(function() {
  return false;
});
