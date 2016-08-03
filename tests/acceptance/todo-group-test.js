import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group');

test('visiting /todo-group', function(assert) {
  visit('/todo-groups');

  andThen(function() {
    assert.equal(currentURL(), '/todo-groups');
  });
});

test('visiting /todo-group shows a list of tasks', function(assert) {
  server.createList('todo-group');
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
  visit('/todo-groups');
  click('.edit-todo');

  andThen(function() {
    assert.equal(currentURL(), '/todo-groups/:id/edit');
    assert.equal(findWithAssert('.delete-todo'));
  });
});
