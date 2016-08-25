var server = require("./server.js");
var Route = require("./route.js");

var route = new Route();
route.setName("testRoute");
console.log(route.getName());
server.start(route.routeproc);
