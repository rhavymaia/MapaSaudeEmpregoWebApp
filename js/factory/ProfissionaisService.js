/*
 *  Mapeamento dos serviço de Profissionais.
 */
app.factory("profissionaisService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/profissionais/unidade/{codUnidade}";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarProfissionaisPorCodigoDaUnidade = function (codUnidade) {
        return $http.get(_path + "?codUnidade=" + encodeURI(codUnidade));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarProfissioanaisPorCodigoDaUnidade: buscarProfissionaisPorCodigoDaUnidade,
        getById: _getById
    };
});
