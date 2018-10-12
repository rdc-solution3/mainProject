(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control126_5SIzOu: function (elem) {
      if (!elem) {
        return;
      }var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-panel-header-inner");return target.querySelector(".mini-panel-title").textContent;
    },
    doAction_uiControl112_SA4DZX: function (data, elem) {
      if (data.eventType == "back") {
        var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-panel-header-inner");target.querySelector(".mini-tools-close").click();
      }if (data.eventType == "action") {
        var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-panel-header-inner");var next = $(target).parent().next()[0].querySelector("iframe").contentWindow.document;if (next) {
          var buttons = next.querySelector(".mini-toolbar").querySelectorAll("a.mini-button");
          $.each(buttons, function (index, item) {
            if (item.textContent.trim() == "作废" || item.textContent.trim() == "保存") {
              item.click();
            }
          });
        }
      }
    },
    getTemplate_uiControl112_SA4DZX: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nmodule.exports = React.createClass({\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  action:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"action\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          <AMUI.Button amStyle=\"primary\" style={{margin: 0 }} onClick={this.action}>\u786E\u5B9A</AMUI.Button>\n        </HeaderRight>\n      </Header>\n    );\n  }\n});";
      return "\"use strict\";\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  action: function action() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"action\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \"primary\", title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.back },\n          React.createElement(\"span\", { className: \"icon icon-left-nav\" }),\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(\n        _yspInteriorComponents.HeaderRight,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.action },\n          \"\\u786E\\u5B9A\"\n        )\n      )\n    );\n  }\n});";
    },
    getData_control167_GluDto: function (elem) {
      if (!elem) {
        return;
      }var buttons = elem.querySelectorAll("a");var data = [];for (var i = 0; i < buttons.length; i++) {
        data.push(buttons[i].textContent.trim());
      }return data;
    },
    doAction_uiControl152_bTCW6F: function (data, elem) {
      if (data.eventType == "mount") {
        ysp.appMain.hideLoading();
      }if (data.eventType == "clickItem") {
        var buttons = elem.querySelectorAll("a");buttons[data.customData].click();
      }
    },
    getTemplate_uiControl152_bTCW6F: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"mount\"\n      })\n    }\n  },\n  clickItem:function(e){\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if(handler){\n      handler({\n        eventType:\"clickItem\",\n        data:index\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    return (\n      <div style={{padding:\"5px 10px\"}}>\n        {data.map(function(item,i){\n          return(\n          \t<a className={item==\"\u786E\u5B9A\"?\"btn btn-sm btn-primary\":\"btn btn-sm\"} onClick={me.clickItem} data-index={i}>{item}</a>\n          )\n        })}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"mount\"\n      });\n    }\n  },\n  clickItem: function clickItem(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if (handler) {\n      handler({\n        eventType: \"clickItem\",\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \"div\",\n      { style: { padding: \"5px 10px\" } },\n      data.map(function (item, i) {\n        return React.createElement(\n          \"a\",\n          { className: item == \"\u786E\u5B9A\" ? \"btn btn-sm btn-primary\" : \"btn btn-sm\", onClick: me.clickItem, \"data-index\": i },\n          item\n        );\n      })\n    );\n  }\n});";
    }
  });
})(window, ysp);