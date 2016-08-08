import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group/detail');

test('visiting /todo-groups/1 shows a for to detail a todo-group with id 1', function(assert) {
  const group = server.create('todo-group');
  visit('/todo-groups/1');

  andThen(function() {
    assert.equal(currentRouteName(), 'todo-group.detail',
      'The url /todo-groups/1 loads the "todo-group.detail" route.');
    assert.equal(currentURL(), '/todo-groups/1',
      'The "todo-group.detail" route does not redirect without user interaction');
    assert.equal(findWithAssert('.page-title').text().trim(),
      `${group.verb}`,
      'There is an element with a class "page-title" that says "Editing "' +
      ' then the current group title.' +
      'Current title is: ' + group.verb);
  });
});

test('visiting /todo-groups/1 shows a list of todo-items that belong to todo-group with id 1', function(assert) {
  server.create('todo-group');
  const [item] = server.createList('todo-item', 4, {
    todoGroupId: 1,
  });
  server.create('todo-item', {
    todoGroupId: 2,
  });

  visit('/todo-groups/1');

  andThen(function() {

    assert.equal(findWithAssert('.collection__item').length, 5,
      'There should be a "collection__item" for each "todo-group" record in the API.' +
      'To do this you should load the models from Ember Data into your template');

    assert.equal(findWithAssert('.todo-item__name:first').text().trim(), item.name,
      'For each "todo-group" pulled from the API, there should be an element with the class' +
      '"todo-group__name" filled with the name of the looped over todo.' +
      '(Note: this only tests the name of the first group, but should give the same result)');
  });
});
