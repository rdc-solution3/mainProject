(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control133_Rb47sy: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector(".mini-panel-title").textContent;
    },
    doAction_uiControl120_mAU090: function (data, elem) {
      if (data.eventType == "back") {
        elem.querySelector(".mini-tools-close").click();
      }if (data.eventType == "mount") {
        ysp.appMain.hideLoading();
      }
    },
    getTemplate_uiControl120_mAU090: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nmodule.exports = React.createClass({\n  componentDidMount:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"mount\"\n      })\n    }\n  },\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          \n        </HeaderRight>\n      </Header>\n    );\n  }\n});";
      return "\"use strict\";\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"mount\"\n      });\n    }\n  },\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \"primary\", title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.back },\n          React.createElement(\"span\", { className: \"icon icon-left-nav\" }),\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(_yspInteriorComponents.HeaderRight, null)\n    );\n  }\n});";
    },
    getData_control137_WR4LkW: function (elem) {
      if (!elem) {
        return;
      }var buttons = elem.querySelectorAll("a");var data = [];for (var i = 0; i < buttons.length; i++) {
        data.push(buttons[i].textContent.trim());
      }return data;
    },
    doAction_uiControl124_2pkvqo: function (data, elem) {
      if (data.eventType == "mount") {
        ysp.appMain.hideLoading();
      }if (data.eventType == "clickItem") {
        var buttons = elem.querySelectorAll("a");buttons[data.customData].click();
      }
    },
    getTemplate_uiControl124_2pkvqo: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"mount\"\n      })\n    }\n  },\n  clickItem:function(e){\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if(handler){\n      handler({\n        eventType:\"clickItem\",\n        data:index\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    return (\n      <div style={{padding:\"5px 10px\",textAlign:\"center\"}}>\n        {data.map(function(item,i){\n          return(\n          \t<a className={item==\"\u786E\u5B9A\"?\"btn btn-sm btn-primary\":\"btn btn-sm\"} onClick={me.clickItem} data-index={i}>{item}</a>\n          )\n        })}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"mount\"\n      });\n    }\n  },\n  clickItem: function clickItem(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if (handler) {\n      handler({\n        eventType: \"clickItem\",\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \"div\",\n      { style: { padding: \"5px 10px\", textAlign: \"center\" } },\n      data.map(function (item, i) {\n        return React.createElement(\n          \"a\",\n          { className: item == \"\u786E\u5B9A\" ? \"btn btn-sm btn-primary\" : \"btn btn-sm\", onClick: me.clickItem, \"data-index\": i },\n          item\n        );\n      })\n    );\n  }\n});";
    }
  });
})(window, ysp);