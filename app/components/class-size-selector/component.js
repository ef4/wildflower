import Ember from 'ember';

export default Ember.Component.extend({
  placeholder: "What is the maximum number of students you plan to have?",
  sizes: [ 4, 9, 14, 20, 24],
  classNames: ['class-size-selector']
});
