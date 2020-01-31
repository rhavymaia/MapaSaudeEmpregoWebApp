/*
 *  Detalhar Creas.
 */
app.controller('DetalharCreasCtrl', function($scope,
  $stateParams, $state, $mdDialog, toastUtil, idCreas, CreasService) {

  angular.extend($scope, {
    focoMapa: {},
    marcadores: {}
  });

  $scope.creass = [];

  /**
      Carregar os dados iniciais.
   */
  function carregar() {

    let id = idCreas;

    if (id <= 0) {
      redirecionarListagem();
    } else {
      CreasService.getById(id)
        .then(function(response) {
          // Response
          let creass = response.data;

          // Creas.
          $scope.creass = angular.copy(creass);

          let id = 1;

          for (creas of creass) {
            // Criar ponto no mapa baseado na lat e long do Creas.
            let ponto = {
              lat: creas.lat,
              lng: creas.long,
              focus: true,
              message: creas.nomeCreas + "-" + creas.nomeMunicipio,
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
    $state.transitionTo('administrador.creas', {
      reload: true
    });
  }

  $scope.fechar = function() {
    $mdDialog.cancel();
  }

  carregar();
});
