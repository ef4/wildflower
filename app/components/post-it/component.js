import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  targetAttachment: 'bottom left',
  attachment: 'top left',
  notes: service(),
  allowed: alias('notes.activated'),
  active: computed('allowed', {
    get() {
      return this.allowed;
    },
    set(k,v) {
      return v;
    }
  })
});
