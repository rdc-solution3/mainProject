(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control94_XWCmlJ: function (elem) {
      if (!elem) {
        return;
      }var win = elem.ownerDocument.defaultView;return { arrPois: win.arrPois, startPoint: win.startPoint, endPoint: win.endPoint, motono: win.motono, startaddr: win.startaddr, endaddr: win.endaddr };
    },
    doAction_uiControl80_V2DDH3: function (data, elem) {},
    getTemplate_uiControl80_V2DDH3: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount:function(){\n    this.drawMap();\n  },\n  componentDidUpdate:function(){\n    var self = this;\n    clearTimeout(this.timeer);\n    this.timeer = setTimeout(function(){\n    \tself.drawMap();\n    },1000);\n  },\n  drawMap:function(){\n    var data = this.props.customData;\n    function drawcarlabel(marker,title,point){\n      //\u753B\u8F66\u7684label\u56FE\u6807\n      // \u6807\u6CE8\u65C1label\u533A\u57DF: offset:label\u7684\u504F\u79FB\u91CF\uFF0C\u4E3A\u4E86\u8BA9label\u7684\u4E2D\u5FC3\u663E\u793A\u5728\u70B9\u4E0A,point:label\u7684\u4F4D\u7F6E\n      var myLabel = new BMap.Label(title, {\n          offset : new BMap.Size(-30, -25),\n          position : point\n        });\n      //borderStyle:\"none\", \u65E0\u8FB9\u6846  fontFamily:\"Microsoft YaHei\",\n      myLabel.setStyle({color:\"black\",fontSize:\"12px\",fontWeight:\"600\",\n                        borderColor:\"green\", borderWidth:\"1px\",\n                        borderRadius:\"50px\",borderStyle:\"solid\",\n                        width:\"80px\",\n                        textAlign:\"center\",margin:\"0\"});\n      marker.setLabel(myLabel);\n\n    }\n    this.refs.drawMap.style.height = '400px';\n    var map = new BMap.Map(this.refs.drawMap);\n    map.enableScrollWheelZoom(true);\n    //var point = new BMap.Point(116.400244,39.92556);\n    //map.centerAndZoom(point, 12);\n    //var marker = new BMap.Marker(point);  // \u521B\u5EFA\u6807\u6CE8\n    //map.addOverlay(marker);              // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n    // var point = new BMap.Point(data.startPoint.lng,data.startPoint.lat);\n    // map.centerAndZoom(point, 80);\n    \n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"stopLoading\"\n      })\n    }\n    \n    if(!data.arrPois){\n      var point = new BMap.Point(102.84047627811,24.954348306473);\n      map.centerAndZoom(point, 10);\n      return;\n    }\n    var new_arrPois = [];\n    for(var i=0;i<data.arrPois.length;i++){\n      var newpoint = new BMap.Point(Number(data.arrPois[i].lng),Number(data.arrPois[i].lat));\n\t \t\tnew_arrPois.push(newpoint);\n    }\n    map.addOverlay(new BMap.Polyline(new_arrPois, {\n      strokeColor : '#008B00'\n    }));\n    map.setViewport(data.arrPois);\n    \n    var markerStart=new BMap.Marker(data.startPoint,{\n       icon  : new BMap.Icon(\"https://wl.inja.com/ycihwl/dest_markers.png\", new BMap.Size(27,27),{anchor : new BMap.Size(27, 13), imageSize:new BMap.Size(300, 118)})\n    });\n\n    var markerEnd=new BMap.Marker(data.endPoint,{\n        icon  : new BMap.Icon(\"https://wl.inja.com/ycihwl/car.png\", new BMap.Size(25,25),{anchor : new BMap.Size(12.5,12.5)})\n     });\n\n    map.addOverlay(markerStart);\n    map.addOverlay(markerEnd);\n\t  drawcarlabel(markerEnd,data.motono,data.endPoint);  \n  },\n  close:function(e){\n    e.target.ownerDocument.body.className = e.target.ownerDocument.body.className.replace(\"show-map\",\"\");\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(!data){\n      return(\n      \t<div></div>\n      )\n    }\n    return (\n      <div id=\"map-box\" style={{display:\"block\"}}>\n        <div id='Map' ref=\"drawMap\" style={{\"font-size\":\"12px\"}}></div>\n        \t\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    this.drawMap();\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    var self = this;\n    clearTimeout(this.timeer);\n    this.timeer = setTimeout(function () {\n      self.drawMap();\n    }, 1000);\n  },\n  drawMap: function drawMap() {\n    var data = this.props.customData;\n    function drawcarlabel(marker, title, point) {\n      //\u753B\u8F66\u7684label\u56FE\u6807\n      // \u6807\u6CE8\u65C1label\u533A\u57DF: offset:label\u7684\u504F\u79FB\u91CF\uFF0C\u4E3A\u4E86\u8BA9label\u7684\u4E2D\u5FC3\u663E\u793A\u5728\u70B9\u4E0A,point:label\u7684\u4F4D\u7F6E\n      var myLabel = new BMap.Label(title, {\n        offset: new BMap.Size(-30, -25),\n        position: point\n      });\n      //borderStyle:\"none\", \u65E0\u8FB9\u6846  fontFamily:\"Microsoft YaHei\",\n      myLabel.setStyle({ color: \"black\", fontSize: \"12px\", fontWeight: \"600\",\n        borderColor: \"green\", borderWidth: \"1px\",\n        borderRadius: \"50px\", borderStyle: \"solid\",\n        width: \"80px\",\n        textAlign: \"center\", margin: \"0\" });\n      marker.setLabel(myLabel);\n    }\n    this.refs.drawMap.style.height = '400px';\n    var map = new BMap.Map(this.refs.drawMap);\n    map.enableScrollWheelZoom(true);\n    //var point = new BMap.Point(116.400244,39.92556);\n    //map.centerAndZoom(point, 12);\n    //var marker = new BMap.Marker(point);  // \u521B\u5EFA\u6807\u6CE8\n    //map.addOverlay(marker);              // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n    // var point = new BMap.Point(data.startPoint.lng,data.startPoint.lat);\n    // map.centerAndZoom(point, 80);\n\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"stopLoading\"\n      });\n    }\n\n    if (!data.arrPois) {\n      var point = new BMap.Point(102.84047627811, 24.954348306473);\n      map.centerAndZoom(point, 10);\n      return;\n    }\n    var new_arrPois = [];\n    for (var i = 0; i < data.arrPois.length; i++) {\n      var newpoint = new BMap.Point(Number(data.arrPois[i].lng), Number(data.arrPois[i].lat));\n      new_arrPois.push(newpoint);\n    }\n    map.addOverlay(new BMap.Polyline(new_arrPois, {\n      strokeColor: '#008B00'\n    }));\n    map.setViewport(data.arrPois);\n\n    var markerStart = new BMap.Marker(data.startPoint, {\n      icon: new BMap.Icon(\"https://wl.inja.com/ycihwl/dest_markers.png\", new BMap.Size(27, 27), { anchor: new BMap.Size(27, 13), imageSize: new BMap.Size(300, 118) })\n    });\n\n    var markerEnd = new BMap.Marker(data.endPoint, {\n      icon: new BMap.Icon(\"https://wl.inja.com/ycihwl/car.png\", new BMap.Size(25, 25), { anchor: new BMap.Size(12.5, 12.5) })\n    });\n\n    map.addOverlay(markerStart);\n    map.addOverlay(markerEnd);\n    drawcarlabel(markerEnd, data.motono, data.endPoint);\n  },\n  close: function close(e) {\n    e.target.ownerDocument.body.className = e.target.ownerDocument.body.className.replace(\"show-map\", \"\");\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return React.createElement(\"div\", null);\n    }\n    return React.createElement(\n      \"div\",\n      { id: \"map-box\", style: { display: \"block\" } },\n      React.createElement(\"div\", { id: \"Map\", ref: \"drawMap\", style: { \"font-size\": \"12px\" } })\n    );\n  }\n});";
    },
    getData_control178_iGoHVx: function (elem) {},
    doAction_uiControl161_dARRUR: function (data, elem) {},
    getTemplate_uiControl161_dARRUR: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title=\"\u67E5\u770B\u5730\u56FE\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          \n        </HeaderRight>\n      </Header>\n    );\n  }\n});\n";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: 'primary', title: '\\u67E5\\u770B\\u5730\\u56FE' },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: 'primary', style: { margin: 0 }, onClick: _appRenderer.back },\n          React.createElement('span', { className: 'icon icon-left-nav' }),\n          '\\u8FD4\\u56DE'\n        )\n      ),\n      React.createElement(_yspInteriorComponents.HeaderRight, null)\n    );\n  }\n});";
    }
  });
})(window, ysp);