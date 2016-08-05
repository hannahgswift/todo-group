import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateCategory(duck, formValues) {
      duck.setProperties(formValues);

      duck.save().then(() => {
        this.transitionToRoute('todo-group.index');
      });
    },
  },
});
