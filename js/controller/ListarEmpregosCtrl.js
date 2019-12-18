/*
 *  Controlar ações da listagem Creas.
 */
app.controller('ListarEmpregosCtrl', function ($scope, toastUtil, EmpregosService) {

    $scope.municipio = "";
    $scope.empregoss = [];

    $scope.pesquisar = function (municipio){
        if(municipio.length >= 3) {
            if (municipio.match(/[a-zA-Z]/i) != null) {
                EmpregosService.buscarEmpregosPorMunicipio(municipio)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (municipio.length === 0) {
            $scope.empregoss = [];
        }
    };

    $scope.listarCreas = function() {
          EmpregosService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.municipio = "";
        $scope.empregoss = [];
    };

    function onSuccessCallback(response) {
        $scope.empregoss = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'municipio',
        limit: 8,
        page: 1
    };

    $scope.listarEmpregos();
});
