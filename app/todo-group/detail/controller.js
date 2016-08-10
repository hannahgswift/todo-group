import Ember from 'ember';

export default Ember.Controller.extend({
  // done: false,

  actions: {
    destroy(todoItem) {
      todoItem.destroyRecord();
    },

    toggleCheck(todoItem) {
      todoItem.toggleProperty('done');
      todoItem.save();
      // todoItem.set('done', false);
    },

    // saveItem(formValues) {
    //   this.store.createRecord('todo-item', formValues)
    //     .save().then(() => {
    //       this.transitionToRoute('todo-group.detail');
    //     });
    // },

    saveItem(todoGroup, formValues, reset) {
      const duck = this.store.createRecord('todo-item', formValues);
      duck.set('group', todoGroup);
      duck.save();
      reset();
    },
  },
  });
