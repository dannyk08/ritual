import Controller from '@ember/controller';

export default Controller.extend({
  queryType: 'name',
  actions: {
    setQuery(type) {
      this.set('queryType', type);
    },
    filterBy(query) {
      if (!!query && query.length) {
        return this.get('store')
          .query('ingredient', { [this.get('queryType')]: query })
          .then(results => ({ query, results }));
      }
      return this.get('store')
        .findAll('ingredient')
        .then(results => ({ query, results }));
    }
  }
});
