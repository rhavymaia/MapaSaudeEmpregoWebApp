/*
 *  Controlar ações da listagem de Profissionais.
 */
app.controller('ListarProfissionaisCtrl', function ($scope, toastUtil, ProfissionaisService) {

    $scope.codUnidade = "";
    $scope.profissionaiss = [];

    $scope.pesquisar = function (codUnidade){
        if(codUnidade.length >= 3) {
            if (codUnidade.match(/[a-zA-Z]/i) != null) {
                EmpregosService.buscarProfissionaisPorCodigoDaUnidade(codUnidade)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (codUnidade.length === 0) {
            $scope.profissionaiss = [];
        }
    };

    $scope.listarProfissionais = function() {
          ProfissionaisService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.codUnidade = "";
        $scope.profissionaiss = [];
    };

    function onSuccessCallback(response) {
        $scope.profissionaiss = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'codUnidade',
        limit: 8,
        page: 1
    };

    $scope.listarProfissionais();
});
