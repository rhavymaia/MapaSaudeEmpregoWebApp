/*
 *  Detalhar Cras.
 */
app.controller('DetalharCrasCtrl', function($scope,
  $stateParams, $state, $mdDialog, toastUtil, idCras, CrasService) {

  angular.extend($scope, {
    focoMapa: {},
    marcadores: {}
  });

  $scope.crass = [];

  /**
      Carregar os dados iniciais.
   */
  function carregar() {

    let id = idCras;

    if (id <= 0) {
      redirecionarListagem();
    } else {
      CrasService.getById(id)
        .then(function(response) {
          // Response
          let crass = response.data;

          // Cras.
          $scope.crass = angular.copy(crass);

          let id = 1;

          for (cras of crass) {
            // Criar ponto no mapa baseado na lat e long do Cras.
            let ponto = {
              lat: cras.lat,
              lng: cras.long,
              focus: true,
              message: cras.nomeCras + "-" + cras.nomeMunicipio,
            }

            // Criar nova chave no dicionário e adicionar ponto no mapa.
            $scope.marcadores["m" + id] = ponto;

            // Definir o foco no mapa.
            if (id == 1) {
              ponto.zoom = 8;
              $scope.focoMapa = ponto;
            }

            // Incrementar a chave do macadares do mapa.
            id++;
          }
        })
        .catch(function(error) {
          toastUtil.showErrorToast(error);
          redirecionarListagem();
        });
    }
  }

  /**
      Redirecionar para a página de listagem.
   */
  function redirecionarListagem() {
    $state.transitionTo('administrador.cras', {
      reload: true
    });
  }

  $scope.fechar = function() {
    $mdDialog.cancel();
  }

  carregar();
});
