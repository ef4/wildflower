import { helper as buildHelper } from '@ember/component/helper';
import { pluralize } from 'ember-inflector'

export default buildHelper(function([count, word]) {
  if (count === 1) {
    return word;
  } else {
    return pluralize(word);
  }
});
