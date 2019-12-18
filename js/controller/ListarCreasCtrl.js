/*
 *  Controlar ações da listagem do Evento.
 */
app.controller('ListarCreasCtrl', function ($scope, toastUtil, CreasService) {

    $scope.municipio = "";
    $scope.creass = [];

    $scope.pesquisar = function (municipio){
        if(municipio.length >= 3) {
            if (municipio.match(/[a-zA-Z]/i) != null) {
                CreasService.buscarCreasPorMunicipio(municipio)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (municipio.length === 0) {
            $scope.creass = [];
        }
    };

    $scope.listarCreas = function() {
          CreasService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.municipio = "";
        $scope.creass = [];
    };

    function onSuccessCallback(response) {
        $scope.creass = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'nome',
        limit: 8,
        page: 1
    };

    $scope.listarCreas();
});
