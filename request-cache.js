var cache = {};
var size = 0;
var push = function(url) {
	size += 1;
	if(cache.hasOwnProperty(url)){
		cache[url] += 1;
	}
	else {
		cache[url] = 1;
	}
};
var size = function(){
	return size || 0;
};

var clearLog = function() {
	size = 0;
	cache = {};
	console.log(cache.toString());
};

var log = function(request, response, next) {
	if(size >= 10){
		clearLog();
	}
	push(request.url);
	request.cache = cache;
	next();
};

module.exports = log;