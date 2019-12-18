/*
 *  Controlar ações da listagem das unidades.
 */
app.controller('ListarUnidadesCtrl', function ($scope, toastUtil, UnidadeaService) {

    $scope.municipio = "";
    $scope.unidadess = [];

    $scope.pesquisar = function (municipio){
        if(municipio.length >= 3) {
            if (municipio.match(/[a-zA-Z]/i) != null) {
                UnidadesService.buscarUnidadesPorMunicipio(municipio)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (municipio.length === 0) {
            $scope.unidadess = [];
        }
    };

    $scope.listarUnidades = function() {
          UnidadesService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.municipio = "";
        $scope.unidadess = [];
    };

    function onSuccessCallback(response) {
        $scope.unidadess = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'municipio',
        limit: 8,
        page: 1
    };

    $scope.listarUnidades();
});
