import DS from 'ember-data';

export default DS.Model.extend({
  verb: DS.attr('string'),
  items: DS.hasMany('todo-item'),
});
