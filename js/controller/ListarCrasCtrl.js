/*
 *  Controlar ações da listagem do Evento.
 */
app.controller('ListarCrasCtrl', function ($scope, toastUtil,
  CrasService) {

    $scope.municipio = "";
    $scope.crass = [];

    $scope.pesquisar = function (municipio){
        if(municipio.length >= 3) {
            if (municipio.match(/[a-zA-Z]/i) != null) {
                CrasService.buscarCrasPorMunicipio(municipio)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (municipio.length === 0) {
            $scope.eventos = [];
        }
    };

    $scope.listar = function() {
          CrasService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.municipio = "";
        $scope.crass = [];
    };

    function onSuccessCallback(response) {
        $scope.crass = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'municipio',
        limit: 8,
        page: 1
    };

    $scope.listar();
});
