import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', {
    path: '/'
  }, function() {
    this.route('about');
    this.route('team' );
    this.route('blog' );
    this.route('play' );
    this.route('home' );
  });
});

export default Router;
