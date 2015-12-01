import Ember from 'ember';
import { steps, nextRoute } from 'wildflower/components/licensing-steps/component';

// You can change this to invalidate older models that users have
// cached in localStorage.
const modelVersion = 'v2';

export default Ember.Route.extend({
  model() {
    let isFirstStep = this.routeName === 'licensing.' + steps[0];
    return this.store.findRecord('licensing', modelVersion).catch(() => {
      if (isFirstStep) {
        // On the first step, we will create a new record if one doesn't exist.
        return this.store.createRecord('licensing', { id: modelVersion });
      }
    }).then(model => {
      // Ensure that all prior steps have been completed
      let completedSteps = model ? model.get('completedSteps') : [];
      for (let i = 0; i < steps.length; i++) {
        let step = steps[i];
        if ('licensing.' + step === this.routeName) {
          break;
        }
        if (completedSteps.indexOf(step) === -1) {
          this.transitionTo('licensing.' + step);
          return;
        }
      }

      let changeStep = (stepSize) => {
        model.save().then(
          () => this.transitionTo(nextRoute(this.routeName, stepSize))
        );
      };
      changeStep.isLast = !nextRoute(this.routeName, 1);
      changeStep.isFirst = !nextRoute(this.routeName, -1);
      return {
        record: model,
        changeStep
      };
    });
  }
});
