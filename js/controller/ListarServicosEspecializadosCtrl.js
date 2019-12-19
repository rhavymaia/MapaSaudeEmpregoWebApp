/*
 *  Controlar ações da listagem de Serviços Especializados.
 */
app.controller('ListarServicosEspecializadosCtrl', function ($scope, toastUtil, ServicosEspecializadosService) {

    $scope.codUnidade = "";
    $scope.servicosEspecializados = [];

    $scope.pesquisar = function (codUnidade){
        if(codUnidade.length >= 3) {
            if (codUnidade.match(/[a-zA-Z]/i) != null) {
                ServicoEspecializadosService.buscarServicosEspecializadosPorCodigoDaUnidade(codUnidade)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (codUnidade.length === 0) {
            $scope.servicosEspecializados = [];
        }
    };

    $scope.listarServicosEspecializados = function() {
          ServicosEspecializadosService.listar()
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

    $scope.ListarServicosEspecializados();
});
