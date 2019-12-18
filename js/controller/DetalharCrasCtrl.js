/*
 *  Controlar atualização do Campus.
 */
nutrIFApp.controller('DetalharCrasCtrl', function ($scope,
    $stateParams, $state, toastUtil, idCras, CrasService) {

    $scope.cras = {};

    /**
        Carregar os dados iniciais.
     */
    function carregar() {

        let id = idCras;

        if (id <= 0) {
            redirecionarListagem();
        } else {
            CrasService.getById(id)
                .then(function (response) {
                    // Response
                    let cras = response.data;

                    // Cras.
                    $scope.cras = angular.copy(cras);
                })
                .catch(function (error) {
                    toastUtil.showErrorToast(error);
                    redirecionarListagem();
                });
        }
    }

    /**
        Redirecionar para a página de listagem.
     */
    function redirecionarListagem() {
        $state.transitionTo('administrador.cras', {
            reload: true
        });
    }

    carregar();
});
