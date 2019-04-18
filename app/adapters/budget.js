import { inject as service } from '@ember/service';
import DS from 'ember-data';
import fetch from 'fetch';

export default DS.JSONAPIAdapter.extend({
  blobStore: service(),

  findRecord() {
    return fetch('budget-template.xlsx').then(response => response.arrayBuffer()).then(data => {
      return {
        data: {
          id: 'template',
          type: 'budget',
          attributes: {
            'blob-id': this.blobStore.push(data)
          }
        }
      };
    });
  }
});
