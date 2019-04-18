import Component from '@ember/component';

export const steps = [
  'setup',
  'teachers',
  'location',
  'forms',
  'templates',
  'finish'
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

export default Component.extend({
  steps
});
