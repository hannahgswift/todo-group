import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group outlet');


test('User can see a list of todo categories and a link to add on every page (/todo-groups) :P', function(assert) {
  server.createList('todo-group', 4);
  visit('/todo-groups');

  andThen(function() {
    assert.equal(findWithAssert('.nav__item').length, 5,
      'There should be a "nav__item" for each "todo-group" record in the API.' +
      'And one "nav__item" for the new category link' +
      'To do this you should load the models from Ember Data into your template');

      const firstGroup = server.db.todoGroups.find(1);
      assert.equal(findWithAssert('.nav__item:first').text().trim(), firstGroup.title,
        'For each "todo-group" pulled from the API, there should be an element with the class' +
        '"nav__item" filled with the title of the looped over todo.' +
        '(Note: this only tests the title of the first group, but should give the same result)');

      assert.equal(findWithAssert('.nav__item:eq(1)').attr('href'), '/todo-groups/2',
        'The link for the second item in the nav should be a link-to /todo-groups/2');

      assert.equal(findWithAssert('.nav__item.nav__item--new-link').attr('href'), '/todo-groups/new',
        'The last link in the nav should be a link-to /todo-groups/new');
  });
});
