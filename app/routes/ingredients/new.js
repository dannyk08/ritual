import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('ingredient');
  },
  actions: {
    submit() {
      const ingredientModel = this.modelFor(this.routeName);
      const self = this;

      ingredientModel.save().then(function (savedIngredient) {
        self.transitionTo('ingredients.detail', savedIngredient)
      }).catch(err => console.error({ err }))
    }
  }
});
