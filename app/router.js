import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('budget');
  this.route('licensing', function() {
    this.route('setup', { path: '/' });
    this.route('teachers');
    this.route('location');
    this.route('inspectors');
    this.route('forms');
  });
});

export default Router;
