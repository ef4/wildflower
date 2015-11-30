import Ember from 'ember';

export const steps = [
  'setup',
  'teachers',
  'location'
];

export function laterStep(newRoute, oldRoute) {
  return steps.indexOf(oldRoute.split('.')[1]) < steps.indexOf(newRoute.split('.')[1]);
}

// Javascript's built-in modulus operator is defined in an unhelpful
// way for negative numbers.
function mod(a,b) {
  return ((a % b)+b)%b;
}

export function nextRoute(currentRoute, stepSize=1) {
  return 'licensing.' + steps[mod(steps.indexOf(currentRoute.replace(/^licensing\./, '')) + stepSize, steps.length)];
}

export default Ember.Component.extend({
  steps
});
