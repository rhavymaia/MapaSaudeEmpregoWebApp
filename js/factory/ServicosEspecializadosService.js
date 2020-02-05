/*
 *  Mapeamento de serviço dos Serviços Especializados.
 */
app.factory("ServicosEspecializadosService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/servicos";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarServicosEspecializadosPorCodigoDaUnidade = function (codUnidade) {
        return $http.get(_path + "/unidade/" + encodeURI(codUnidade)); 
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarServicosEspecializadosPorCodigoDaUnidade: _buscarServicosEspecializadosPorCodigoDaUnidade,
        getById: _getById
    };
});
