/*
 *  Mapeamento dos serviço de Empregos.
 */
app.factory("EmpregosService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/emprego";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarEmpregosPorMunicipio = function (municipio) {
        return $http.get(_path + "?municipio=" + encodeURI(municipio));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarEmpregosPorMunicipio: _buscarEmpregosPorMunicipio,
        getById: _getById
    };
});
