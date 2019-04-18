import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['notes'],
  noteService: service('notes'),
  notes: alias('noteService.activated')
});
