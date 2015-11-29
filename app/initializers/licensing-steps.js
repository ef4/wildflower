import { steps } from 'wildflower/components/licensing-steps/component';
import Base from 'wildflower/routes/licensing/base';

export default {
  name: 'licensing-steps',
  initialize(application) {
    steps.forEach(step => {
      application.register('route:licensing.' + step, Base);
    });
  }
};
