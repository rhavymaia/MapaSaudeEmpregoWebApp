/*
 *  Controlar ações da listagem dos Estabelecimentos.
 */
app.controller('ListarEstabelecimentosDeSaudeCtrl', function ($scope, toastUtil,EstabelecimentosDeSaudeService) {

    $scope.municipio = "";
    $scope.EstabelecimentosDeSaude = [];

    $scope.pesquisar = function (municipio){
        if(municipio.length >= 3) {
            if (municipio.match(/[a-zA-Z]/i) != null) {
                EstabelecimetosDeSaudeService.buscarEstabelecimentosDeSaudePorMunicipio(municipio)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (municipio.length === 0) {
            $scope.estabelecimentosDeSaude = [];
        }
    };

    $scope.ListarEstabelecimetosDeSaude = function() {
          EstabelecimentosDeSaudeService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.municipio = "";
        $scope.estabelecimentosDeSaude = [];
    };

    function onSuccessCallback(response) {
        $scope.estabelecimentosDeSaude = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'municipio',
        limit: 8,
        page: 1
    };

    $scope.listarEstabelecimentosDeSaude();
});
