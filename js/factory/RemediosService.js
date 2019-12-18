/*
 *  Mapeamento dos serviço de Remédios.
 */
app.factory("remediosService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/remedios";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarCrasrNomeDoProduto = function (nomeProduto) {
        return $http.get(_path + "?municipio=" + encodeURI(nomeProduto));
    }

    var _getById = function (id) {
        return $http.get(_path + "/" + encodeURI(id));
    }

    return {
        listar: _listar,
        buscarRemediosPorNomeDoProduto: _buscarRemediosPorNomeDoProduto,
        getById: _getById
    };
});
