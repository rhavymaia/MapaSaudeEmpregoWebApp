/*
 *  Controlar ações da listagem do Evento.
 */
app.controller('ListarCrasCtrl', function ($scope, toastUtil,
  CrasService) {

    $scope.nome = "";
    $scope.crass = [];

    $scope.pesquisar = function (nome){
        if(nome.length >= 3) {
            if (nome.match(/[a-zA-Z]/i) != null) {
                eventoService.buscarEventoPorNome(nome)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (nome.length === 0) {
            $scope.eventos = [];
        }
    };

    $scope.listar = function() {
          CrasService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.nome = "";
        $scope.crass = [];
    };

    function onSuccessCallback(response) {
        $scope.crass = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'nome',
        limit: 8,
        page: 1
    };

    $scope.listar();
});
