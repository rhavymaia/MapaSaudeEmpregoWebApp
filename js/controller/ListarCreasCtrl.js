/*
 Controlar ações da listagem do Creas.
 */
app.controller('ListarCreasCtrl', function ($scope, $mdDialog, toastUtil,
  CreasService) {

    $scope.municipio = "";
    $scope.creass = [];

    $scope.selectedCreas = [];

    $scope.pesquisar = function (municipio){
        if(municipio.length >= 3) {
            if (municipio.match(/[a-zA-Z]/i) != null) {
                CreasService.buscarCreasPorMunicipio(municipio)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (municipio.length === 0) {
            $scope.crsass = [];
        }
    };

    $scope.listar = function() {
          CreasService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    let limparBusca = function () {
        $scope.municipio = "";
        $scope.creass = [];
    };

    $scope.limparBusca = limparBusca;

    function onSuccessCallback(response) {
        $scope.creass = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    // Adicionar Dia de Refeição.
    $scope.detalharCreas = function (creas) {

        let dialog = {
            controller: 'DetalharCreasCtrl',
            templateUrl: 'view/administrador/modals/detalhar-creas.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: false,
            locals: {
                idCras: creas.idCreas
            }
        };

        $mdDialog.show(dialog)
            .then(function(response) {})
            .catch(function (error) {})
            .finally(limparBusca, function () {
                $scope.selectedCreas = [];
            });
    }

    $scope.query = {
        order: 'municipio',
        limit: 8,
        page: 1
    };

    $scope.listar();
});
