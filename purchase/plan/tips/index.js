(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({

    getData_control168_Jsz24Q: function (elem) {
      if (!elem) return;var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-messagebox-content-text");if (!target && wins[wins.length - 1].querySelector("iframe")) {
        target = wins[wins.length - 1].querySelector("iframe").contentDocument.querySelector(".mini-fit");
      }return target.textContent.replace("我知道了", "").trim();
    },
    doAction_uiControl153_VEaFfN: function (data, elem) {},
    getTemplate_uiControl153_VEaFfN: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        {this.props.customData}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      this.props.customData\n    );\n  }\n});";
    },
    getData_control169_IOXty2: function (elem) {
      if (!elem) {
        return;
      }var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-messagebox-buttons");if (!target && wins[wins.length - 1].querySelector("iframe")) {
        target = wins[wins.length - 1].querySelector("iframe").contentDocument.querySelector(".mini-button").parentNode;
      }var buttons = target.querySelectorAll("a");var data = [];for (var i = 0; i < buttons.length; i++) {
        data.push(buttons[i].textContent.trim());
      }return data;
    },
    doAction_uiControl154_7NyeDX: function (data, elem) {
      if (data.eventType == "mount") {
        ysp.appMain.hideLoading();
      }if (data.eventType == "clickItem") {
        var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-messagebox-buttons");if (!target && wins[wins.length - 1].querySelector("iframe")) {
          target = wins[wins.length - 1].querySelector("iframe").contentDocument.querySelector(".mini-button").parentNode;
        }var buttons = target.querySelectorAll("a");buttons[data.customData].click();
      }
    },
    getTemplate_uiControl154_7NyeDX: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"mount\"\n      })\n    }\n  },\n  clickItem:function(e){\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if(handler){\n      handler({\n        eventType:\"clickItem\",\n        data:index\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(!data){return(<div></div>)}\n    return (\n      <div style={{padding:\"5px 10px\"}}>\n        {data.map(function(item,i){\n          return(\n          \t<a className={item==\"\u786E\u5B9A\"?\"btn btn-sm btn-primary\":\"btn btn-sm\"} onClick={me.clickItem} data-index={i}>{item}</a>\n          )\n        })}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"mount\"\n      });\n    }\n  },\n  clickItem: function clickItem(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if (handler) {\n      handler({\n        eventType: \"clickItem\",\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (!data) {\n      return React.createElement(\"div\", null);\n    }\n    return React.createElement(\n      \"div\",\n      { style: { padding: \"5px 10px\" } },\n      data.map(function (item, i) {\n        return React.createElement(\n          \"a\",\n          { className: item == \"\u786E\u5B9A\" ? \"btn btn-sm btn-primary\" : \"btn btn-sm\", onClick: me.clickItem, \"data-index\": i },\n          item\n        );\n      })\n    );\n  }\n});";
    },
    getData_control3_AWfrKl: function (elem) {
      if (!elem) return;var wins = elem.querySelectorAll(".mini-window");var target = wins[wins.length - 1];return target.querySelector(".mini-panel-title").textContent;
    },
    doAction_uiControl3_95WveR: function (data, elem) {},
    getTemplate_uiControl3_95WveR: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nmodule.exports = React.createClass({\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          \n        </HeaderRight>\n      </Header>\n    );\n  }\n});";
      return "\"use strict\";\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \"primary\", title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.back },\n          React.createElement(\"span\", { className: \"icon icon-left-nav\" }),\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(_yspInteriorComponents.HeaderRight, null)\n    );\n  }\n});";
    }
  });
})(window, ysp);