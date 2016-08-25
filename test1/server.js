var http = require("http");
var url = require("url");

function start(routeproc) {

	function execute(request, response) {
		console.log("request received.");
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		routeproc(pathname, query, response);
	}

	http.createServer(execute).listen(8888);
	console.log("server started.");
}

exports.start = start;
