import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendEmail(/* email */) {
      this.set('sentEmail', true);
    },
    print() {
      window.print();
    },
    reset() {
      this.get('model').destroyRecord().then(() => {
        this.get('changeStep')(-1);
      });
    }
  }
});
