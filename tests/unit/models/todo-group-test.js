import { moduleForModel, test } from 'ember-qunit';

moduleForModel('todo-group', 'Unit | Model | todo group', {
  // Specify the other units that are required for this test.
  needs: ['model:todo-item']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
