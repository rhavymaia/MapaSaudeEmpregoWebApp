/*
 *  Mapeamento dos serviço de Profissionais.
 */
app.factory("ProfissionaisService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/profissionais";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarProfissionaisPorCodigoDaUnidade = function (codUnidade) {
        return $http.get(_path + "/unidade/" + encodeURI(codUnidade));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarProfissionaisPorCodigoDaUnidade: _buscarProfissionaisPorCodigoDaUnidade,
        getById: _getById
    };
});
