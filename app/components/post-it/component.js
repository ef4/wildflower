import Ember from 'ember';

export default Ember.Component.extend({
  targetAttachment: 'bottom left',
  attachment: 'top left',
  notes: Ember.inject.service(),
  allowed: Ember.computed.alias('notes.activated'),
  active: Ember.computed('allowed', {
    get() {
      return this.get('allowed');
    },
    set(k,v) {
      return v;
    }
  })
});
