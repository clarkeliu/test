function routeBase() {
	this.name = "none";
}

routeBase.prototype.setName = function(namestr) {
	this.name = namestr;
}
routeBase.prototype.getName = function() {
	return this.name;
}

module.exports = routeBase;