import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { steps } from './components/licensing-steps/component';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('privacy-policy');
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
