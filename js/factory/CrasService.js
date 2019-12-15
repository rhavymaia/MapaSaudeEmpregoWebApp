/*
 *  Mapeamento dos serviço de CRAS.
 */
app.factory("CrasService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/assistenciasocial/cras";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarPorNome = function (nome) {
        return $http.get(_path + "/nome/" + encodeURI(nome));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarPorNome: _buscarPorNome,
        getById: _getById
    };
});
