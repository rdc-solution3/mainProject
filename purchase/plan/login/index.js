(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control104_WNMoZs: function (elem) {},
    doAction_uiControl90_AOxaMB: function (data, elem) {},
    getTemplate_uiControl90_AOxaMB: function () {
      var selfTemplate = "import { Header } from 'ysp-interior-components';\nexport default () => <div style={{background:\"#fff\",position:\"fixed\",width:\"100%\",height:\"100%\",zIndex:0,top:0}}></div>;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nexports.default = function () {\n  return React.createElement(\"div\", { style: { background: \"#fff\", position: \"fixed\", width: \"100%\", height: \"100%\", zIndex: 0, top: 0 } });\n};";
    },
    getData_control105_2SEvyO: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.user = elem.querySelector("#account").value;data.psw = elem.querySelector("#password").value;return data;
    },
    doAction_uiControl91_6dvTDZ: function (data, elem) {
      if (data.eventType == "changeUser") {
        elem.querySelector("#account").value = data.customData;
      }if (data.eventType == "changePsw") {
        elem.querySelector("#password").value = data.customData;
      }if (data.eventType == "login") {
        elem.querySelector("#login").click();var user = elem.querySelector("#account").value;var psw = elem.querySelector("#password").value;if (user == "" || psw == "") {
          return;
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl91_6dvTDZ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  changeUser:function(e){\n    var val = e.target.value;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"changeUser\",\n        data:val\n      })\n    }\n  },\n  changePsw:function(e){\n    var val = e.target.value;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"changePsw\",\n        data:val\n      })\n    }\n  },\n  login:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"login\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div style={{marginLeft:\"30px\",marginRight:\"30px\",position:\"relative\",zIndex:10}}>\n        <h4 style={{textAlign:\"center\",paddingTop:\"50px\",marginBottom:\"50px\"}}>\u4E91\u5357\u5EFA\u6295<span style={{color:\"#21aca6\"}}> | \u91C7\u8D2D\u5546\u7CFB\u7EDF</span></h4>\n        <ul className=\"am2-list\">\n        \t<li className=\"am2-item am2-item-input\">\n          \t<div className=\"am2-item-media\">\n              <span className=\"am2-icon icon-user\"></span>\n            </div>\n            <div className=\"am2-item-main\">\n            \t<AInput type=\"text\" value={data.user} placeholder=\"\u7528\u6237\u540D\" className=\"am2-field\" onBlur={this.changeUser} />\n            </div>\n          </li>\n          <li className=\"am2-item am2-item-input\">\n          \t<div className=\"am2-item-media\">\n              <span className=\"am2-icon icon-password\"></span>\n            </div>\n            <div className=\"am2-item-main\">\n            \t<AInput type=\"password\" value={data.psw} placeholder=\"\u5BC6\u7801\" className=\"am2-field\" onBlur={this.changePsw} />\n            </div>\n          </li>\n        </ul>\n        <a className=\"btn btn-primary login-btn\" onClick={this.login}>\u767B\u5F55</a>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  changeUser: function changeUser(e) {\n    var val = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"changeUser\",\n        data: val\n      });\n    }\n  },\n  changePsw: function changePsw(e) {\n    var val = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"changePsw\",\n        data: val\n      });\n    }\n  },\n  login: function login() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"login\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { style: { marginLeft: \"30px\", marginRight: \"30px\", position: \"relative\", zIndex: 10 } },\n      React.createElement(\n        \"h4\",\n        { style: { textAlign: \"center\", paddingTop: \"50px\", marginBottom: \"50px\" } },\n        \"\\u4E91\\u5357\\u5EFA\\u6295\",\n        React.createElement(\n          \"span\",\n          { style: { color: \"#21aca6\" } },\n          \" | \\u91C7\\u8D2D\\u5546\\u7CFB\\u7EDF\"\n        )\n      ),\n      React.createElement(\n        \"ul\",\n        { className: \"am2-list\" },\n        React.createElement(\n          \"li\",\n          { className: \"am2-item am2-item-input\" },\n          React.createElement(\n            \"div\",\n            { className: \"am2-item-media\" },\n            React.createElement(\"span\", { className: \"am2-icon icon-user\" })\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"am2-item-main\" },\n            React.createElement(AInput, { type: \"text\", value: data.user, placeholder: \"\\u7528\\u6237\\u540D\", className: \"am2-field\", onBlur: this.changeUser })\n          )\n        ),\n        React.createElement(\n          \"li\",\n          { className: \"am2-item am2-item-input\" },\n          React.createElement(\n            \"div\",\n            { className: \"am2-item-media\" },\n            React.createElement(\"span\", { className: \"am2-icon icon-password\" })\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"am2-item-main\" },\n            React.createElement(AInput, { type: \"password\", value: data.psw, placeholder: \"\\u5BC6\\u7801\", className: \"am2-field\", onBlur: this.changePsw })\n          )\n        )\n      ),\n      React.createElement(\n        \"a\",\n        { className: \"btn btn-primary login-btn\", onClick: this.login },\n        \"\\u767B\\u5F55\"\n      )\n    );\n  }\n});";
    },

    getData_control177_9K0gk4: function (elem) {
      if (!elem) {
        return;
      }if (!elem.querySelector("#errormsg")) {
        return;
      }return elem.querySelector("#errormsg").textContent;
    },
    doAction_uiControl160_hbuuz4: function (data, elem) {
      if (data.eventType == "update") {
        ysp.appMain.hideLoading();
      }if (data.eventType == "Mount") {
        ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl160_hbuuz4: function () {
      var selfTemplate = "module.exports = React.createClass({\n  getInitialState:function(){\n    return({\n      showLoading:true\n    })\n  },\n  componentWillReceiveProps:function(){\n    debugger\n    var text = this.props.customData;\n    if(!text||text.length==0) return;\n    this.setState({\n      showLoading:false\n    })\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"update\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"error-text\">\n        {this.props.customData}\n        <div className=\"login-loading\" style={{display:this.state.showLoading?\"block\":\"none\"}}>\n          <div style={{margin:\"30px auto\"}}>\u81EA\u52A8\u767B\u5F55\u4E2D\u2026</div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  getInitialState: function getInitialState() {\n    return {\n      showLoading: true\n    };\n  },\n  componentWillReceiveProps: function componentWillReceiveProps() {\n    debugger;\n    var text = this.props.customData;\n    if (!text || text.length == 0) return;\n    this.setState({\n      showLoading: false\n    });\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"update\"\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"error-text\" },\n      this.props.customData,\n      React.createElement(\n        \"div\",\n        { className: \"login-loading\", style: { display: this.state.showLoading ? \"block\" : \"none\" } },\n        React.createElement(\n          \"div\",\n          { style: { margin: \"30px auto\" } },\n          \"\\u81EA\\u52A8\\u767B\\u5F55\\u4E2D\\u2026\"\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);