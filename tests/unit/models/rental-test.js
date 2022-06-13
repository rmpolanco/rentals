import { module, test } from 'qunit';
import { setupTest } from 'rentals/tests/helpers';

module('Unit | Model | rental', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('rental', {});
    assert.ok(model);
  });
});
