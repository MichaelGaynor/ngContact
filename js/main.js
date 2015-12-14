import angular from 'angular';
import 'angular-ui-router';
import PARSE from './constants/parse.constant';

import config from './config';

import ContactService from './services/contact.service';

import HomeController from './controllers/home.controller';
import ContactsController from './controllers/contacts.controller';
import AddContactController from './controllers/addcontact.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .service('ContactService', ContactService)
  .controller('HomeController', HomeController)
  .controller('ContactsController', ContactsController)
  .controller('AddContactController', AddContactController)
  ;