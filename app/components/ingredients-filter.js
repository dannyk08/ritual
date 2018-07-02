import Component from '@ember/component';

export default Component.extend({
  value: '',
  init() {
    this._super(...arguments);
    this.get('filter')('').then(({ results }) => this.set('results', results));
  },
  actions: {
    handleFilter() {
      const filterInput = this.get('value');
      const filterAction = this.get('filter');
      filterAction(filterInput).then(({ results, query }) => {
        if (query === this.get('value'))
          this.set('results', results)
      });
    }
  }
});
