import { helper as buildHelper } from '@ember/component/helper';

export default buildHelper(function([word]) {
  return /^[aeiou]/i.test(word) ? 'an' : 'a';
});
