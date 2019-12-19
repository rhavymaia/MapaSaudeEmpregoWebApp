/*
 *  Mapeamento dos serviço do Menu.
 */
app.factory("menu", function($location, $rootScope) {

  let sections = {
      "admin": [
        {
          name: 'Início',
          state: 'administrador.home',
          type: 'link'
        },
        {
          name: 'Assitência Social',
          type: 'toggle',
          pages: [{
              name: 'CRAS',
              state: 'administrador.cras',
              type: 'link'
            },
            {
              name: 'CREAS',
              state: 'administrador.creas',
              type: 'link'
            }
          ]
        },
        {
          name: 'Estabelecimentos de Saúde',
          type: 'toggle',
          pages: [{
              name: 'Unidades',
              state: 'administrador.unidades',
              type: 'link'
            },
            {
              name: 'Profissionais',
              state: 'administrador.profissionais',
              type: 'link'
            },
            {
              name: 'Remédios',
              state: 'administrador.remedios',
              type: 'link'
            },
            {
              name: 'Serviços Especializados',
              state: 'administrador.servicosEspecializados',
              type: 'link'
            }
          ]
        },
        {
          name: 'Empregos',
          state: 'administrador.empregos',
          type: 'link'
        }
      ]
    };
var self;

return self = {

  toggleSelectSection: function(section) {
    self.openedSection = (self.openedSection === section ? null : section);
  },

  isSectionSelected: function(section) {
    return self.openedSection === section;
  },

  selectPage: function(section, page) {
    page && page.url && $location.path(page.url);
    self.currentSection = section;
    self.currentPage = page;
  },

  getSectionsByUserRole: function() {
    // let roles = userService.getUser().roles;
    // Fixado nome do perfil do usuário.
    return sections["admin"];
  }
};

function sortByHumanName(a, b) {
  return (a.humanName < b.humanName) ? -1 :
    (a.humanName > b.humanName) ? 1 : 0;
}
});
