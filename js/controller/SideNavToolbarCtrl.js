/*
 *  Controlar ações do menu.
 */
app.controller('SideNavToolbarCtrl', function ($scope, $timeout,
    $rootScope, $state, $location, $mdSidenav, toastUtil) {

    var vm = this;

    vm.user = {};

    function carregamentoInicial() {
    }

    // Inicializar listagem dos campi e níveis.
    carregamentoInicial();
});
