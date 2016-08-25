var querystring = require("querystring");
var util = require("util");
var routeBase = require("./routeBase.js");

function route() {
  this.routeproc = function(pathname, query, response) {
    var params = querystring.parse(query);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("pathname is : " + pathname + "<br>");
    response.write("query is : " + query + "<br>");
    response.write("params is : " + util.inspect(params) + "<br>");
    response.write("x is : " + params["x"] + "<br>");
    response.write("y is : " + params["y"] + "<br>");
    response.end();
    console.log("response is sent.");
  }
}
util.inherits(route, routeBase);

module.exports = route;
