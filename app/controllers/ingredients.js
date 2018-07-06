import Controller from '@ember/controller';
import { debounce } from '@ember/runloop';

export default Controller.extend({
  fullSidebar: false,
  displaySidebarToggle: false,
  queryType: 'name',
  init() {
    this._super(...arguments);
    setSidebarUI.bind(this)();

    window.addEventListener('resize', setSidebarUI.bind(this))

    function setSidebarUI() {
      if (window.innerWidth < 960) {
        this.set('fullSidebar', false)
        this.set('displaySidebarToggle', true);
      } else {
        this.set('displaySidebarToggle', false);
        this.set('fullSidebar', true);
      }
    }
  },
  willDestroy() {
    window.removeEventListener('resize', () => undefined);
  },
  actions: {
    toggleSidebar() {
      let previousValue = this.get('fullSidebar');
      this.set('fullSidebar', !previousValue)
    },
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
