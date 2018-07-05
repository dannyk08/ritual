import Component from '@ember/component';

export default Component.extend({
  value: '',
  queryType: 'name',
  queryTypes: [
    'name',
    'dosage',
    'origin',
    'manufacturer',
    'image',
    // 'benefits',
    // 'naturalSources',
  ],
  init() {
    this._super(...arguments);
    this.get('filter')('').then(({ results }) => this.set('results', results));
  },
  actions: {
    handleQuerySelect(type) {
      this.set('queryType', type)
      this.get('query')(this.get('queryType'));
    },
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
