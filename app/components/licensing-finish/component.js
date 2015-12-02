import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendEmail(email) {
      this.set('sentEmail', true);
    },
    print() {
      window.print();
    }
  }
});
