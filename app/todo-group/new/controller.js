import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveCategory(formValues) {
      this.store.createRecord('todo-group', formValues)
        .save().then(() => {
          this.transitionToRoute('todo-group.index');
        });
    },
  },
});
