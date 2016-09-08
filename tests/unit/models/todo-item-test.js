import { moduleForModel, test } from 'ember-qunit';

 moduleForModel('todo-item', 'Unit | Model | todo item', {
   // Specify the other units that are required for this test.
   needs: ['model:todo-group']
 });

 test('it exists', function(assert) {
   let model = this.subject();
   // let store = this.store();
   assert.ok(!!model);
 });
