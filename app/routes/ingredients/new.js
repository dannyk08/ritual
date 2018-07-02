import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('ingredient');
  },
  actions: {
    submit() {
      const ingredient = this.modelFor(this.routeName);
      const self = this;
      ingredient.save().then(function () {
        self.transitionTo('ingredients')
      }).catch(err => console.error({ err }))
    }
  }
});
