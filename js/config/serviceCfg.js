/*
 *  Configuração de conexão de serviço.
 */
app.value("serviceCfg", {

	baseUrl: function() {

		var _protocol = "//"
		var _hostAddress = "mobile-aceite.tcu.gov.br";
		var _port = "80";
		var _context = "/mapa-da-saude";

		return _protocol + _hostAddress + ":" + _port + _context;
	}

})
