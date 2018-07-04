import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    const ingredientRecord = this.get('store').hasRecordForId('ingredient', id);
    if (ingredientRecord) {
      return this.get('store').findRecord('ingredient', id)
    }
    return this.transitionTo('ingredients');
  }
});
