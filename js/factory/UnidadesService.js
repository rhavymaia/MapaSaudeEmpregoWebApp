/*
 *  Mapeamento dos serviço de unidades.
 */
app.factory("UnidadesService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/estabelecimentos/";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarUnidadesPorMunicipio = function (municipio) {
        return $http.get(_path + "?municipio=" + encodeURI(municipio));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarUnidadesPorMunicipio: _buscarUnidadesPorMunicipio,
        getById: _getById
    };
});
