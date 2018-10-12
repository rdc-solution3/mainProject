//compatibility.js v1.0.0
//支持 2.3.0 以上版本运行时

ysp.appMain.resolveCompatibility = ysp.appMain.resolveCompatibility || function() {};

//activeXObject 
ysp.appMain.resolveCompatibility('activeX', function(win) {
	win.ActiveXObject = function(type) {
		var typename = type.split('.')[1];
		//console.log(typename);
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
				case 'xmldom': {
					return new XMLWebkit();
					break;
				}
				// case 'attachment' : {
				// 	console.log(1111);
				// 	break;
				// }
				default:
					throw 'ActiveXObject ' + type + ' not supported.';
			}
		}
		throw 'ActiveXObject type error.';
	}

	function XML() {}

	function XMLWebkit(){}

	XMLWebkit.prototype = {
		load: function(str) {
			var xmlhttp=new win.XMLHttpRequest();
			xmlhttp.open("GET",str,false);
			xmlhttp.send(null);
			if(xmlhttp.responseXML===null){
				try{
					var parser = new DOMParser();
					this.res = parser.parseFromString(xmlhttp.responseText, "text/xml");
				}catch(err){}
			}else{
				this.res=xmlhttp.responseXML;
			}
			win.xmldoc=xmlhttp.responseXML;
		},
		transformNode:function(xslDoc){
			//定义XSLTProcesor对象
			debugger;
			var xsltProcessor=new XSLTProcessor();   
			xsltProcessor.importStylesheet(xslDoc);   
			// transformToDocument方式
			var rt="";
			for(var i=0; i<this.res.children[0].children.length; i++){
				var result=xsltProcessor.transformToDocument(this.res.children[0].children[i]);
				var xmls=new XMLSerializer();
				rt =rt+xmls.serializeToString(result); 
			} 
			return rt;   
		}
	};

	XML.prototype = {
		load: function(str) {
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

	win.Object.defineProperty(win.Node.prototype,'_childNodes',{
		get: function(){   
			return this.childNodes;
		},
		enumerable: true,
		configurable: true
	});
	try{
		win.Object.defineProperty(win.Node.prototype,'childNodes',{
			get: function(){   
				return this.children;
			},
			enumerable: true,
			configurable: true
		});
	}catch(err){
		console.log(err);
	}
	
	try {
		win.Object.defineProperty(win.Node.prototype,'text',{
			get: function(){
				return this.textContent && this.textContent.trim();
			},
			enumerable: true,
			configurable: true
		});
        
    } catch (err) {
    	console.log(err);
    }
	

	try{
		win.Object.defineProperty(win.document, 'all', {
			get: function() {
				var allNodes = [].slice.call(this.querySelectorAll('*'));
				var ret = {};
				var validNodes = [];
				allNodes.forEach(function(node) {
					if (node.id || node.name) {
						if (node.id) {
							ret[node.id] = node;
						} else {
							if (ret[node.name]) {
								if (ret[node.name] instanceof win.Array) {
									ret[node.name].push(node);
								} else {
									ret[node.name] = [ret[node.name], node];
								}
							} else {
								ret[node.name] = node;
							}
							
						}
						validNodes.push(node);
					}
					
				}, this);

				ret.tags = function(tagName) {
					return validNodes.filter(function(node) {
						return node.tagName === tagName.trim();
					})
				}

				return ret;
			}
		})
	}catch(err){}
	




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

// ysp.appMain.resolveCompatibility('elemProperty', function(win) {
// 	//elemProperty
	
// 	win.Object.defineProperty(win.HTMLSelectElement.prototype,"options",{
// 		get:function(){
// 			var that=this;
// 			return function(){
// 				var options=that.children;
// 				options.selectedIndex=that.selectedIndex;
// 				console.log("2");
// 				return options;
// 			}
// 		}
// 	})
// });

ysp.appMain.resolveCompatibility('element', function(win) {
	//DOM
	var _getElementById = win.document.getElementById;
	var _getElementsByName = win.document.getElementsByName;
	var _getElementsByTagName=win.document.getElementsByTagName;

	
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

	win.document.all.tags=function(el){
		var _childrens= win.document.getElementsByTagName(el);
		return _childrens;
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