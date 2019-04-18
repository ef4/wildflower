import { dasherize } from '@ember/string';
import { helper as buildHelper } from '@ember/component/helper';

export default buildHelper(function([string]) {
  if (string) {
    return dasherize(string);
  }
});
