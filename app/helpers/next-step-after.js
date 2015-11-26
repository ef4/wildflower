import Ember from 'ember';
import { steps } from '../components/licensing-steps/component';

export default Ember.Helper.helper(function([step]) {
  return 'licensing.' + steps[(steps.indexOf(step) + 1) % steps.length];
});
