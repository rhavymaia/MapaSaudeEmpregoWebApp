/*
 *  Controlar ações da listagem de Profissionais.
 */
app.controller('ListarProfissionaisCtrl', function ($scope, $stateParams, toastUtil, ProfissionaisService) {

    $scope.codUnidade = "";
    $scope.profissionais = [];

    $scope.listarProfissionais = function() {
          var _codUnidade = $stateParams.codUnidade;
          ProfissionaisService.buscarProfissionaisPorCodigoDaUnidade(_codUnidade)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.codUnidade = "";
        $scope.profissionais = [];
    };

    function onSuccessCallback(response) {
        $scope.profissionais = response.data;
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
