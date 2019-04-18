import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super();
    this.blobs = {};
    this.counter = 0;
  },
  push(binaryData) {
    let id = this.counter++;
    this.blobs[id] = binaryData;
    return id;
  },
  find(id) {
    return this.blobs[id];
  },
  replace(id, binaryData) {
    this.blobs[id] = binaryData;
    return id;
  }
});
