import DS from 'ember-data';
import fetch from 'fetch';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  blobStore: Ember.inject.service(),

  findRecord() {
    return fetch('/budget-template.xlsx').then(response => response.arrayBuffer()).then(data => {
      return {
        data: {
          id: 'template',
          type: 'budget',
          attributes: {
            'blob-id': this.get('blobStore').push(data)
          }
        }
      };
    });
  }
});
