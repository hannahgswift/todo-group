import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    destroy(todoItem) {
      todoItem.destroyRecord();
    },

    toggleCheck(todoItem) {
      todoItem.toggleProperty('done');
      todoItem.save();
    },

    saveItem(todoGroup, formValues, reset) {
      const duck = this.store.createRecord('todo-item', formValues);
      duck.set('group', todoGroup);
      duck.save();
      reset();
    },
  },
});
