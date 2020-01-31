/*
 *  Mapeamento dos serviço de Remédios.
 */
app.factory("RemediosService", function ($http, serviceCfg) {

    var _path = serviceCfg.baseUrl() + "/rest/remedios";

    var _listar = function () {
        return $http.get(_path);
    }

    var _buscarRemedioPorProduto = function (produto) {
        return $http.get(_path + "?produto=" + encodeURI(produto));
    }

    return {
        listar: _listar,
        buscarRemedioPorProduto: _buscarRemedioPorProduto
    };
});
