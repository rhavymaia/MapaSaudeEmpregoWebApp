/*
 *  Mapeamento dos serviço de CRAS.
 */
app.factory("CreasService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/assistenciasocial/creas";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarCreasPorMunicipio = function (municipio) {
        return $http.get(_path + "?municipio=" + encodeURI(municipio));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarCreasPorMunicipio: _buscarCreasPorMunicipio,
        getById: _getById
    };
});
