import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('ingredients', function () {
    this.route('new');
    this.route('detail', { path: '/:id' });
  });
});

export default Router;
