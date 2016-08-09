import Ember from 'ember';

export default Ember.Controller.extend({
  // done: false,

  actions: {
    destroy(todoItem) {
      todoItem.destroyRecord();
    },

    toggleCheck(todoItem) {
      todoItem.toggleProperty('done');
      // todoItem.set('done', false);
    },

  },
  });
