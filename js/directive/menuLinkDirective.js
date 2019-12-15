/*
 *  Diretiva para o Botão do Menu.
 */
app.run(function($templateCache) {
    $templateCache.put('partials/menu-link.tmpl.html',
      '<md-button ng-class="{\'{{section.icon}}\' : true}" ui-sref-active="active" \n' +
      '  ui-sref="{{section.state}}" ng-click="focusSection()"' +
      '  ui-sref-opts="{reload: true}">\n' +
      '  {{section | humanizeDoc}}\n' +
      '  <span  class="md-visually-hidden "\n' +
      '    ng-if="isSelected()">\n' +
      '    current page\n' +
      '  </span>\n' +
      '</md-button>\n' +
      '');
  })
  .directive('menuLink', function() {
    return {
      scope: {
        section: '='
      },
      templateUrl: 'partials/menu-link.tmpl.html',
      link: function($scope, $element) {

        var controller = $element.parent().controller();

        $scope.focusSection = function() {
          // set flag to be used later when
          // $locationChangeSuccess calls openPage()
          controller.autoFocusContent = true;
        };
      }
    };
  });
