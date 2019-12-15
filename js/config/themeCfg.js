/*
 *  Configuração do Tema para Angular Material.
 */
app.config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey', {
            'default': '800',
            'hue-1': '600'})
        .accentPalette('lime')
        .warnPalette('red')
        .backgroundPalette('grey');

});
