import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group');

test('visiting /todo-group', function(assert) {
  visit('/todo-group');

  andThen(function() {
    assert.equal(currentURL(), '/todo-group');
  });
});

test('visiting /todo-group shows a list', function(assert) {
  server.createList('todo-group', 2);
  visit('/todo-group');

  andThen(function() {
    findWithAssert('.todo-list');
    assert.equal(findWithAssert('.todo-list__item').length, 2,
      'There should be something, something, something.');
  });
});

test('user can navigate to add new todo from main list', function(assert) {
  visit('/todo-group');
  click('.new-link');

  andThen(function() {
    assert.equal(currentURL(), '/todo-group/new');
    assert.equal(findWithAssert('.page-title').text().trim(), 'New Todo');
  });
});
