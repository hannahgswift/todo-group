import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group index');

test('visiting /todo-groups', function(assert) {
  visit('/todo-groups');

  andThen(function() {
    assert.equal(currentURL(), '/todo-groups');
  });
});

test('user can see list of todo categories when visiting /todo-groups', function(assert) {
  server.createList('todo-group', 5);
  visit('/todo-groups');

  andThen(function() {
    assert.equal(currentURL(), '/todo-groups');
    assert.equal(currentRouteName(), 'todo-group.index');

    assert.equal(findWithAssert('.page-title').text().trim(),
      'Categories',
      'There is an element with a class "page-title" that says "Categories"');
    assert.equal(findWithAssert('.collection__item').length, 5,
      'There should be a "collection__item" for each "todo-group" record in the API.' +
      'To do this you should load the models from Ember Data into your template');

    const firstGroup = server.db.todoGroups.find(1);
    assert.equal(findWithAssert('.todo-group__title:first').text().trim(), firstGroup.verb,
      'For each "todo-group" pulled from the API, there should be an element with the class' +
      '"todo-group__title" filled with the title of the looped over todo.' +
      '(Note: this only tests the title of the first group, but should give the same result)');
  });
})

// test('visiting /todo-groups shows a list of tasks', function(assert) {
//   server.createList('todo-group', 10);
//   visit('/todo-groups');
//
//   andThen(function() {
//     findWithAssert('.todo-list');
//     assert.equal(findWithAssert('.todo-list__item').length, 10);
//   });
// });

test('user can navigate to new form from /todo-groups', function(assert) {
  visit('/todo-groups');
  click('.new-btn');

  andThen(function() {
    assert.equal(currentRouteName(), 'todo-group.new');
    assert.equal(currentURL(), '/todo-groups/new');
  //   assert.equal(findWithAssert('.page-title').text().trim(), 'New Todo');
  });
});

test('user can navigate to the edit form from /todo-groups', function(assert) {
  server.createList('todo-group', 4);
  visit('/todo-groups');
  click('.edit-btn:eq(2)');

  andThen(function() {
    assert.equal(currentRouteName(), 'todo-group.edit', 'Clicking on the third element with the class "edit-btn" should redirect to the route "todo-group.edit"');
    assert.equal(currentURL(), '/todo-groups/3/edit', 'Clicking on the third element with the class "edit-btn" should redirect to the URL "/todo-groups/3/edit"');
    const todoGroup = server.db.todoGroups.find(1);
  });
});

test('user can delete todo-groups when visiting /todo-groups', function(assert) {
  server.createList('todo-group', 3);
  visit('/todo-groups');
  click('.delete-btn:eq(1)');

  andThen(function() {
    assert.equal(find('.collection__item').length, 2,
      'The deleted item should not show in the list');
    assert.equal(server.db.todoGroups.length, 2,
      'The deleted item should also be deleted in the API!');
    assert.equal(currentURL(), '/todo-groups',
      'The url should change after deleting a category');
  });
});
