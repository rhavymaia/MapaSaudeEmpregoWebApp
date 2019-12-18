/**
 * Configuração da rota com ui-router.
 */
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/home");

    // Estados
    $stateProvider
      // Home
      .state('home', {
        url: '/home',
        title: 'EscolaApp - Página Principal',
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      // Subrota - Administrador
      .state('administrador', {
        abstract: true,
        controller: 'sideNavCtrl',
        controllerAs: 'sideNav',
        url: '/administrador',
        templateUrl: 'view/administrador/administrador.html'
      })

      // Administrador - Home
      .state('administrador.home', {
        url: '/home',
        title: 'Administrador',
        templateUrl: 'view/administrador/home.html'
      })

      .state('administrador.cras', {
        url: '/cras',
        title: 'CRAS',
        templateUrl: 'view/administrador/listar-cras.html',
        controller: 'ListarCrasCtrl',
        controllerAs: 'ListarCras'
      })

      .state('administrador.creas', {
        url: '/creas',
        title: 'CREAS',
        templateUrl: 'view/administrador/listar-creas.html',
        controller: 'ListarCreasCtrl',
        controllerAs: 'ListarCreas'
      })
      
      .state('administrador.estabelecimetos', {
        url: '/estabelecimetos',
        title: 'ESTABELECIMETOS',
        templateUrl: 'view/administrador/listar-estabelecimetos.html',
        controller: 'ListarEstabelecimetosCtrl',
        controllerAs: 'ListarEstabelecimetos'
      })
  })
  //take all whitespace out of string
  .filter('nospace', function() {
    return function(value) {
      return (!value) ? '' : value.replace(/ /g, '');
    };
  })
  //replace uppercase to regular case
  .filter('humanizeDoc', function() {
    return function(doc) {
      if (!doc) return;
      if (doc.type === 'directive') {
        return doc.name.replace(/([A-Z])/g, function($1) {
          return '-' + $1.toLowerCase();
        });
      }

      return doc.label || doc.name;
    }
  });
