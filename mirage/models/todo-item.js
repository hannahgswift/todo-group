import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  group: belongsTo('todo-group'),
});
