import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ingredients/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ingredients/new');
    assert.ok(route);
  });
});
