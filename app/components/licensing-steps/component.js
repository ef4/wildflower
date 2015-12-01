import Ember from 'ember';

export const steps = [
  'setup',
  'teachers',
  'location'
];

export function laterStep(newRoute, oldRoute) {
  return steps.indexOf(oldRoute.split('.')[1]) < steps.indexOf(newRoute.split('.')[1]);
}

export function nextRoute(currentRoute, stepSize=1) {
  let step = steps[steps.indexOf(currentRoute.replace(/^licensing\./, '')) + stepSize];
  if (step) {
    return 'licensing.' + step;
  }
}

export default Ember.Component.extend({
  steps
});
