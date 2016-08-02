import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group');

test('visiting /todo-group', function(assert) {
  visit('/todo-group');

  andThen(function() {
    assert.equal(currentURL(), '/todo-group');
  });
});
