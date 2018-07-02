import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterBy(query) {
      if (!!query && query.length) {
        return this.get('store')
          .query('ingredient', { name: query })
          .then(results => ({ query, results }));
      }
      return this.get('store')
        .findAll('ingredient')
        .then(results => ({ query, results }));
    }
  }
});
