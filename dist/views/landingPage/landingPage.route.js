app.config(function($stateProvider, $locationProvider) {
  $stateProvider.state('landingPage', {
    url: '/',
    views: {
      // 'headerNav': {
      //   templateUrl: 'views/headerNav/headerNav.html',
      //   controller: 'HeaderNavController'
      // },
      'pageContent': {
        templateUrl: 'views/landingPage/landingPage.html',
        controller: 'LandingPageController'
      }
    }
  });

  $locationProvider.hashPrefix('');
});
