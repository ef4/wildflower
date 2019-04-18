import Component from '@ember/component';
import { states } from 'wildflower/lib/states';

export default Component.extend({
  classNames: ['state-selector'],
  init() {
    this._super();
    this.set('states', states);
  },
  byNamePrefix(state, term) {
    return term === '' || state.name.toLowerCase().indexOf(term.toLowerCase());
  }
});
