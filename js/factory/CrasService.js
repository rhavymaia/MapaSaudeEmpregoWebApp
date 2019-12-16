/*
 *  Mapeamento dos serviço de CRAS.
 */
app.factory("CrasService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/assistenciasocial/cras";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarCrasPorMunicipio = function (municipio) {
        return $http.get(_path + "?municipio=" + encodeURI(municipio));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarCrasPorMunicipio: _buscarCrasPorMunicipio,
        getById: _getById
    };
});
