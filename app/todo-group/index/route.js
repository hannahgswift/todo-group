import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('todo-group');
  }

});

// Example with id
//
//
// model ({ id }) {
// return this.store.findRecord('author', id);
// }
