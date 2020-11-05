import angular from 'angular';

// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';
import toastr from 'angular-toastr';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-messages';

// Import our templates file (generated by Gulp)
import './config/app.templates';
// Import our app functionaity
import './layout';
import './components';
import './tweet';
import './release';
import './home';
import './profile';
import './article';
import './services';
import './auth';
import './settings';
import './editor';
import './editor_tweets';
import './editor_releases';
import './merch';
import './editor_merch';



// Create and bootstrap application
const requires = [
  'ui.router',
  'ui.bootstrap',
  "ngMessages",
  'templates',
  'app.layout',
  'app.components',
  'app.tweets',
  'app.releases',
  'app.home',
  'app.profile',
  'app.article',
  'app.services',
  'app.auth',
  'app.settings',
  'app.editor',
  'app.editorTweets',
  'app.editorReleases',
  'app.merch',
  'app.editorMerch',
  toastr
];

// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);
angular.module('app').run(appRun);
angular.bootstrap(document, ['app'], {
  strictDi: true
});
