/*
 *  Controlar ações do SideNav.
 */
app.controller("sideNavCtrl", function ($mdMedia, $mdSidenav, $state,
  $scope) {

    this.isOpened = true;

    this.title = $state.current.title;

    this.logout = function () {
    }

    // Controlar abertura e fechamento do menu.
    this.openOrCloseSideNav = function () {
        if ($mdMedia('gt-md'))
            this.isOpened = !this.isOpened;
        else
            $mdSidenav('sideNav').toggle()
    }
});
