import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('ingredient');
  },
  actions: {
    submit() {
      const ingredientModel = this.modelFor(this.routeName);
      const self = this;

      ingredientModel.save()
        .then(({ id }) => self.transitionTo('ingredients.detail', id))
        .catch(err => console.error({ err }))
    },
    willTransition() {
      const record = this.modelFor('ingredients.new');
      if (record.get('isNew')) {
        return record.deleteRecord();
      }
    },
  }
});
