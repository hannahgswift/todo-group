import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group/edit');

test('visiting /todo-groups/1/edit shows a form to edit a todo-group with id 1', function(assert) {
  const group = server.create('todo-group');
  visit('/todo-groups/1/edit');

  andThen(function() {
    assert.equal(currentRouteName(), 'todo-group.edit',
      'The url /todo-groups/1/edit loads the "todo-group.edit" route.');
    assert.equal(currentURL(), '/todo-groups/1/edit',
      'The "todo-group.edit" route does not redirect without user interaction');
      assert.equal(findWithAssert('.page-title').text().trim(),
        `Editing ${group.title}`,
        'There is an element with a class "page-title" that says "Editing "' +
        ' then the current group title.' +
        'Current title is: ' + group.title);
  });
});
