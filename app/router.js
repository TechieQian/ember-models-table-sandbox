import EmberRouter from '@ember/routing/router';
import config from 'ember-table/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('clientpaginated');
  this.route('serverpaginated');
});
