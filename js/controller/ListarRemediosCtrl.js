/*
 *  Controlar ações da listagem de Remédios.
 */
app.controller('ListarRemediosCtrl', function ($scope, $stateParams, toastUtil, RemediosService) {

    $scope.produto = "";
    $scope.remedios = [];

    $scope.pesquisar = function (produto){
        if(produto.length >= 3) {
            if (produto.match(/[a-zA-Z]/i) != null) {
                RemediosService.buscarRemedioPorProduto(produto)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (produto.length === 0) {
            $scope.remedios = [];
        }
    };

    $scope.listarRemedios = function() {
          RemediosService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.produto = "";
        $scope.remedios = [];
    };

    function onSuccessCallback(response) {
        $scope.remedios = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'produto',
        limit: 8,
        page: 1
    };

    $scope.listarRemedios();
});
