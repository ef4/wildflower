import Component from '@ember/component';

export default Component.extend({
  actions: {
    sendEmail(/* email */) {
      this.set('sentEmail', true);
    },
    print() {
      window.print();
    },
    reset() {
      this.model.destroyRecord().then(() => {
        this.changeStep(-1);
      });
    }
  }
});
