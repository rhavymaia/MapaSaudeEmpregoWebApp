/*
 *  Mapeamento de serviço dos Serviços Especializados.
 */
app.factory("servicosEspecializadosService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/servicos/unidade/{codUnidade}";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarServicosEspecializadosPorCodigoDaUnidade = function (codUnidade) {
        return $http.get(_path + "?codUnidade=" + encodeURI(codUnidade));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarServicosEspecializadosPorCodigoDaUnidade: buscarServicosEspecializadosPorCodigoDaUnidade,
        getById: _getById
    };
});
