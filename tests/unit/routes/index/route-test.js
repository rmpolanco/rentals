import { module, test } from 'qunit';
import { setupTest } from 'rentals/tests/helpers';

module('Unit | Route | index/route', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:index/route');
    assert.ok(route);
  });
});
