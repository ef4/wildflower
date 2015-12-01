import Ember from 'ember';
import { steps, nextRoute } from 'wildflower/components/licensing-steps/component';

export default Ember.Route.extend({
  model() {
    let isFirstStep = this.routeName === 'licensing.' + steps[0];
    return this.store.findRecord('licensing', 'mine').catch(() => {
      if (isFirstStep) {
        // On the first step, we will create a new record if one doesn't exit.
        return this.store.createRecord('licensing', { id: 'mine' });
      }
    }).then(model => {
      if (!model || (!isFirstStep && !model.get('stateRegulation'))) {
        // If we don't already have a model with chosen state
        // regulations, go to the first step.
        this.transitionTo('licensing.' + steps[0]);
      } else {
        let changeStep = (stepSize) => {
          model.save().then(
            () =>this.transitionTo(nextRoute(this.routeName, stepSize))
          );
        };
        changeStep.isLast = !nextRoute(this.routeName, 1);
        changeStep.isFirst = !nextRoute(this.routeName, -1);
        return {
          record: model,
          changeStep
        };
      }
    });
  }
});
