let config = function($stateProvider, $urlRouterProvider) {
  
  // If no route matches, go to home route
  $urlRouterProvider.otherwise('/');

  // Set up some States
  $stateProvider
    // Main Root State
    // It is an abstract state because we want a nice way to 
    // manage our layout that will be on all child states
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    // Home State
    .state('root.home', {
      url: '/',
      // Use Controller as Syntax
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    // My Contacts
    .state('root.contacts', {
      url: '/contacts',
      controller: 'ContactsController as vm',
      templateUrl: 'templates/contacts.tpl.html'
    })
    // Add Contact
    .state('root.addContact', {
      url: '/contacts/add',
      controller: 'ContactsAddController as vm',
      templateUrl: 'templates/contacts-add.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;