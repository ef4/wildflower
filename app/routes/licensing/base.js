import Ember from 'ember';
import { steps, nextRoute } from 'wildflower/components/licensing-steps/component';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('licensing', 'mine').catch(() => {
      if (this.routeName === 'licensing.' + steps[0]) {
        // On the first step, we will create a new record if one doesn't exit.
        return this.store.createRecord('licensing', { id: 'mine' });
      }
    }).then(model => {
      if (!model) {
        // If we don't already have a model, go to first step.
        this.transitionTo('licensing.' + steps[0]);
      } else {
        return {
          record: model,
          changeStep: (stepSize) => {
            model.save().then(
              () =>this.transitionTo(nextRoute(this.routeName, stepSize))
            );
          }
        };
      }
    });
  }
});
