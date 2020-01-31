/*
 *  Controlar ações da listagem de Serviços Especializados.
 */
app.controller('ListarServicosEspecializadosCtrl', function ($scope, $stateParams, toastUtil, ServicosEspecializadosService) {

    $scope.codUnidade = "";
    $scope.servicosEspecializados = [];

    $scope.listarServicosEspecializados = function() {
          var _codUnidade = $stateParams.codUnidade;
          ServicosEspecializadosService.buscarServicosEspecializadosPorCodigoDaUnidade(_codUnidade)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.codUnidade = "";
        $scope.servicosEspecializados = [];
    };

    function onSuccessCallback(response) {
        $scope.servicosEspecializados = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'codUnidade',
        limit: 8,
        page: 1
    };

    $scope.listarServicosEspecializados();
});
