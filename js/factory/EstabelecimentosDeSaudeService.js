/*
 *  Mapeamento dos serviço dos estabelecimetos.
 */
app.factory("EstabelecimentosDeSaudeService", function ($http, EstabelecimentosDeSaudeService) {

    var _path = serviceCfg.baseUrl() + "/rest/assistenciasocial/estabelecimentosDeSaude";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarEstabelecimentosDeSaudePorMunicipio = function (municipio) {
        return $http.get(_path + "?municipio=" + encodeURI(municipio));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarEstabelecimentosDeSaudePorMunicipio: _buscarEstabelecimentosDeSaudePorMunicipio,
        getById: _getById
    };
});
