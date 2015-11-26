import { laterStep } from './components/licensing-steps/component';

export default function() {
  this.transition(
    this.hasClass('licensing-step-outlet'),
    this.toRoute(laterStep),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
