import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group');

test('visiting /todo-groups', function(assert) {
  visit('/todo-groups');

  andThen(function() {
    assert.equal(currentURL(), '/todo-groups');
  });
});

test('visiting /todo-groups shows a list of tasks', function(assert) {
  server.createList('todo-group', 10);
  visit('/todo-groups');

  andThen(function() {
    findWithAssert('.todo-list');
    assert.equal(findWithAssert('.todo-list__item').length, 10);
  });
});

test('user can navigate to add new todo from main list', function(assert) {
  visit('/todo-groups');
  click('.new-link');

  andThen(function() {
    assert.equal(currentURL(), '/todo-groups/new');
    assert.equal(findWithAssert('.page-title').text().trim(), 'New Todo');
  });
});

test('user can navigate to edit a todo-group', function(assert) {
  server.createList('todo-group', 5);
  server.create('todo-group', {
    todoGroupId: 1,
  });

  visit('/todo-groups');
  click('.edit-todo');

  andThen(function() {
    assert.equal(currentURL(), '/todo-groups/1/edit');
    const todoGroup = server.db.todoGroups.find(1);

    findWithAssert(`:contains(${todoGroup.verb})`);

  });
});

test('user can click a button to delete a todo!', function(assert) {
  server.createList('todo-group', 4);
  visit('/todo-groups');
  click('.delete[data-id=1]');

  andThen(function() {
    assert.equal(find('.todo-list__item').length, 3, 'The deleted item should not show in the list');
    // assert.equal(server.db.todo-groups.find(1), null, 'The deleted author should be removed from the API');
  });
});
