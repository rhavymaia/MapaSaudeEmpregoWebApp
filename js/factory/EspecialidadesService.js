/*
 *  Mapeamento dos serviço de Especialidades.
 */
app.factory("especialidadesService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/especialidades/unidade/{codUnidade}";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarEspecialidadesPorCodigoDaUnidade = function (codUnidade) {
        return $http.get(_path + "?codUnidade=" + encodeURI(codUnidade));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarEspecialidadesPorCodigoDaUnidade: buscarEspecialidadesPorCodigoDaUnidade,
        getById: _getById
    };
});
