import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return this.get('store').findRecord('ingredient', id)
      .then(() => this.get('store').findRecord('ingredient', id))
      .catch(() => this.transitionTo('ingredients'))
  }
});
