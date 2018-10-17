top = window;
debugger;
$browserInfo$= {
	getBrowserInfo:function(){
		var _userAgent= navigator.userAgent.toLowerCase();
		var rMsie= /(msie\s|trident.*rv:)([\w.]+)/;
		var rFirefox= /(firefox)\/([\w.]+)/;
		var rOpera= /(opera).+version\/([\w.]+)/;
		var rChrome= /(chrome)\/([\w.]+)/;
		var rSafari= /version\/([\w.]+).*(safari)/;

		var match= rMsie.exec(_userAgent);
		if(match != null){
			return {
				type:_toLowerCase_("ie"),
				version:match[2] || "0"
			};
		}
		var match= rFirefox.exec(_userAgent);
		if(match != null){
			return {
				type:_toLowerCase_(match[1]) || "",
				version:match[2] || "0"
			};
		}
		var match= rOpera.exec(_userAgent);
		if(match != null){
			return {
				type:_toLowerCase_(match[1]) || "",
				version:match[2] || "0"
			};
		}
		var match= rChrome.exec(_userAgent);
		if(match != null){
			return {
				type:_toLowerCase_(match[1]) || "",
				version:match[2] || "0"
			};
		}
		var match= rSafari.exec(_userAgent);
		if(match != null){
			return {
				type:_toLowerCase_(match[2]) || "",
				version:match[1] || "0"
			};
		}
		if(match != null){
			return {
				type:"",
				version:"0"
			};
		}
		function _toLowerCase_(str_){
			return str_ ? str_.toLowerCase() : str_;
		}
	}
};