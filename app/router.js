import Ember from 'ember';
import config from './config/environment';
import { steps } from './components/licensing-steps/component';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('budget');
  this.route('licensing', function() {
    steps.forEach((step, index) => {
      if (index === 0) {
        this.route(step, { path: '/' });
      } else {
        this.route(step);
      }
    });
  });
});

export default Router;
