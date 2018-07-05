import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('ingredient');
  },
  afterModel(model, transition) {
    if (!transition.params['ingredients.detail']) {
      this.transitionTo('ingredients.detail', model.get('firstObject'));
    }
  }
});
