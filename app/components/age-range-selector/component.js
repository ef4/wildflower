import Ember from 'ember';

export default Ember.Component.extend({
  placeholder: "What is the age range of your students?",
  ranges: [
    "15 months – 4 1/2 years",
    "5 years – 10 years",
    "11 years – 14 years"
  ],
  classNames: ['age-range-selector']
});
