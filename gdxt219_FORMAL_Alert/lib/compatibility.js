//compatibility.js v1.0.0
//支持 2.3.0 以上版本运行时

ysp.appMain.resolveCompatibility = ysp.appMain.resolveCompatibility || function() {};

//activeXObject 
ysp.appMain.resolveCompatibility('activeX', function(win) {
	win.ActiveXObject = function(type) {
		var typename = type.split('.')[1];
		if (typename) {
			typename = typename.toLowerCase();
			switch(typename) {
				case 'xmlhttp': {
					return new win.XMLHttpRequest();
					break;
				}
				case 'xmldocument': {
					return new XML();
					break;
				}
				default:
					throw 'ActiveXObject ' + type + ' not supported.';
			}
		}
		throw 'ActiveXObject type error.';
	}

	function XML() {}

	XML.prototype = {
		loadXML: function(str) {
			var parser = new DOMParser();
			this.doc = parser.parseFromString(str, "text/xml");
		},
		get documentElement() {
			return this.doc.documentElement;
		}
	};

	win.Node.prototype.selectSingleNode = function(selector) {
		return win.document.evaluate(selector, this, null, XPathResult.ANY_TYPE, null).iterateNext();
	};

	win.Node.prototype.selectNodes = function(selector) {
		var result = win.document.evaluate(selector, this, null, XPathResult.ANY_TYPE, null);
		var nodes = result.iterateNext(); //枚举第一个元素
		var ret = [];

		while (nodes){
			ret.push(nodes);
			nodes = result.iterateNext(); //枚举下一个元素
		}

		return ret;
	};
});


ysp.appMain.resolveCompatibility('showModalDialog', function(win) {
	//showModalDialog
	win.showModalDialog = function (url, params) {
		win.open.call(win, url);
		win._dialogArguments = params;
	};

	if (win.opener) {
		win.dialogArguments = win.opener._dialogArguments;
	}
});


ysp.appMain.resolveCompatibility('events', function(win) {
	//event
	win.attachEvent = function(type, cb) {
		if (type.indexOf('on') === 0) {
			type = type.substr(2);
		}
		win.addEventListener(type, cb);
	};

	win.detachEvent = function(type, cb) {
		if (type.indexOf('on') === 0) {
			type = type.substr(2);
		}
		win.removeEventListener(type, cb);
	};

	win.Node.prototype.attachEvent = function(type, cb) {
		if (type.indexOf('on') === 0) {
			type = type.substr(2);
		}
		this.addEventListener(type, cb);
	};

	win.Node.prototype.detachEvent = function(type, cb) {
		if (type.indexOf('on') === 0) {
			type = type.substr(2);
		}
		this.removeEventListener(type, cb);
	};
});

ysp.appMain.resolveCompatibility('element', function(win) {
	//DOM
	var _getElementById = win.document.getElementById;
	var _getElementsByName = win.document.getElementsByName;

	win.document.getElementById = function(id) {
		var ret = _getElementById.call(win.document, id);
		if (!ret) {
			ret = _getElementsByName.call(win.document, id)[0];
		}
		return ret;
	}

	win.document.getElementsByName = function(id) {
		var ret = _getElementsByName.call(win.document, id);
		if (!ret.length) {
			ret = _getElementById.call(win.document, id);
			if (ret) {
				return [ret];
			}
			return [];
		}
		return ret;
	}

	var _createElement = win.document.createElement;
	win.document.createElement = function(str) {
		try {
			var elem = _createElement.call(win.document, str);
			return elem;
		} catch(e) {
			console.warn('can not create element directly');
		}

		try {
			var tags = ['div', 'tr', 'tbody', 'table'];
			var container;
			var ret;

			tags.some(function(tag) {
				container = _createElement.call(win.document, tag);
				container.innerHTML = str;
				if (container.children[0]) {
					ret = container.children[0];
					return true;
				} else {
					console.warn('can not create element in ' + tag);
					return false;
				}
			});
			
			if (!ret) {
				console.warn('can not create element with ' + str);
			}

			return ret;
			
		} catch(e) {}

	};
});