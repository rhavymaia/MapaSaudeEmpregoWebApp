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

      .state('administrador.unidades', {
        url: '/unidades',
        title: 'UNIDADES',
        templateUrl: 'view/administrador/listar-unidades.html',
        controller: 'ListarUnidadesCtrl',
        controllerAs: 'ListarUnidades'
      })

      .state('administrador.empregos', {
        url: '/empregos',
        title: 'EMPREGOS',
        templateUrl: 'view/administrador/listar-empregos.html',
        controller: 'ListarEmpregosCtrl',
        controllerAs: 'ListarEmpregos'
      })

      .state('administrador.profissionais', {
        url: '/profissionais/unidade/:codUnidade',
        title: 'PROFISSIONAIS',
        templateUrl: 'view/administrador/listar-profissionais.html',
        controller: 'ListarProfissionaisCtrl',
        controllerAs: 'ListarProfissionais'
      })

      .state('administrador.remedios', {
        url: '/remedios',
        title: 'REMEDIOS',
        templateUrl: 'view/administrador/listar-remedios.html',
        controller: 'ListarRemediosCtrl',
        controllerAs: 'ListarRemedios'
      })

      .state('administrador.servicosEspecializados', {
        url: '/servicosEspecializados/unidade/:codUnidade',
        title: 'SERVICOSESPECIALIZADOS',
        templateUrl: 'view/administrador/listar-servicosEspecializados.html',
        controller: 'ListarServicosEspecializadosCtrl',
        controllerAs: 'ListarServicosEspecializados'
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
