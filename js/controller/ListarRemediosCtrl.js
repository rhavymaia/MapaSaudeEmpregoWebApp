/*
 Controlar ações da listagem de Remédios.
 */
app.controller('ListarRemediosCtrl', function ($scope, toastUtil,
  RemediosService) {

    $scope.nomeProduto = "";
    $scope.remedios = [];

    $scope.pesquisar = function (nomeProduto){
        if(nomeProduto.length >= 3) {
            if (nomeProduto.match(/[a-zA-Z]/i) != null) {
                RemediosService.buscarRemediosPorNomeDoProduto(nomeProduto)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (nomeProduto.length === 0) {
            $scope.remedios = [];
        }
    };

    $scope.listar = function() {
          RemediosService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.nomeProduto = "";
        $scope.remedios = [];
    };

    function onSuccessCallback(response) {
        $scope.remedios = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'nomeProduto',
        limit: 8,
        page: 1
    };

    $scope.listar();
});
