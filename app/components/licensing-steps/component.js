import Ember from 'ember';

export const steps = [
  'setup',
  'teachers',
  'location',
  'inspectors',
  'forms'
];

export function laterStep(newRoute, oldRoute) {
  return steps.indexOf(oldRoute.split('.')[1]) < steps.indexOf(newRoute.split('.')[1]);
}

export default Ember.Component.extend({
  steps
});
