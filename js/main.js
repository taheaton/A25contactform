// Import our core files
import angular from 'angular';
import 'angular-ui-router';

// Import config, run & constant, value blocks
import config from './config';

// Import our Controllers
import HomeController from './controllers/home.controller';
import ContactsController from './controllers/contacts.controller';
import ContactsAddController from './controllers/contacts-add.controller';

// Import our Constants
import PARSE from './constants/parse.constant';

// Import our Services
import ContactService from './services/contact.service';

// Call our `angular` global object to add our blocks to
angular
  // Define our Module - common practice is to use 'app'
  .module('app', ['ui.router'])
  // Our Configuration Block
  .config(config)
  // Register our Constants
  .constant('PARSE', PARSE)
  // Register our Controllers
  .controller('HomeController', HomeController)
  .controller('ContactsController', ContactsController)
  .controller('ContactsAddController', ContactsAddController)
  // Register our Services
  .service('ContactService', ContactService)
;