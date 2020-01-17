/*
 Controlar ações da listagem do Cras.
 */
app.controller('ListarCrasCtrl', function ($scope, $mdDialog, toastUtil,
  CrasService) {

    $scope.municipio = "";
    $scope.crass = [];

    $scope.selectedCras = [];

    $scope.pesquisar = function (municipio){
        if(municipio.length >= 3) {
            if (municipio.match(/[a-zA-Z]/i) != null) {
                CrasService.buscarCrasPorMunicipio(municipio)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (municipio.length === 0) {
            $scope.crass = [];
        }
    };

    $scope.listar = function() {
          CrasService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    let limparBusca = function () {
        $scope.municipio = "";
        $scope.crass = [];
    };

    $scope.limparBusca = limparBusca;

    function onSuccessCallback(response) {
        $scope.crass = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    // Adicionar Dia de Refeição.
    $scope.detalharCras = function (cras) {

        let dialog = {
            controller: 'DetalharCrasCtrl',
            templateUrl: 'view/administrador/modals/detalhar-cras.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: false,
            locals: {
                idCras: cras.idCras
            }
        };

        $mdDialog.show(dialog)
            .then(function(response) {})
            .catch(function (error) {})
            .finally(limparBusca, function () {
                $scope.selectedCras = [];
            });
    }

    $scope.query = {
        order: 'municipio',
        limit: 8,
        page: 1
    };

    $scope.listar();
});
