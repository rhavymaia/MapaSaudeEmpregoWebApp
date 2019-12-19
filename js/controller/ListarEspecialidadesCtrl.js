/*
 *  Controlar ações da listagem de Especialidades.
 */
app.controller('ListarEspecialidadesCtrl', function ($scope, toastUtil, EspecialidadesService) {

    $scope.codUnidade = "";
    $scope.especialidades = [];

    $scope.pesquisar = function (codUnidade){
        if(codUnidade.length >= 3) {
            if (codUnidade.match(/[a-zA-Z]/i) != null) {
                EspecialidadesService.buscarEspecialidadesPorCodigoDaUnidade(codUnidade)
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
            }
        } else if (codUnidade.length === 0) {
            $scope.especialidades = [];
        }
    };

    $scope.listarEspecialidades = function() {
          EspecialidadesService.listar()
                    .then(onSuccessCallback)
                    .catch(onErrorCallback);
    }

    $scope.limparBusca = function () {
        $scope.codUnidade = "";
        $scope.especialidades = [];
    };

    function onSuccessCallback(response) {
        $scope.especialidades = response.data;
    }

    function onErrorCallback(error) {
        toastUtil.showErrorToast(error);
    }

    $scope.query = {
        order: 'codUnidade',
        limit: 8,
        page: 1
    };

    $scope.listarEspecialidades();
});
