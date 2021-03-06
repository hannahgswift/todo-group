import config from 'todo-group/config/environment';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  if (config.environment === 'production') {
    this.timing = 10;
  }

  this.get('/todo-groups');
  this.post('/todo-groups');
  this.get('/todo-groups/:id');
  this.put('/todo-groups/:id'); // or this.patch
  this.patch('/todo-groups/:id'); // or this.patch
  this.del('/todo-groups/:id');

  this.get('/todo-items');
  this.post('/todo-items');
  this.get('/todo-items/:id');
  this.put('/todo-items/:id'); // or this.patch
  this.patch('/todo-items/:id'); // or this.patch
  this.del('/todo-items/:id');
}
