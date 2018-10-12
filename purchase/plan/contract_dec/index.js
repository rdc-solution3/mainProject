(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control156_hDDbmw: function (elem) {
      if (!elem) {
        return;
      }var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-panel-header-inner");return target.querySelector(".mini-panel-title").textContent;
    },
    doAction_uiControl141_LzLMtm: function (data, elem) {
      if (data.eventType == "back") {
        var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-panel-header-inner");target.querySelector(".mini-tools-close").click();
      }
    },
    getTemplate_uiControl141_LzLMtm: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nmodule.exports = React.createClass({\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          \n        </HeaderRight>\n      </Header>\n    );\n  }\n});";
      return "\"use strict\";\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \"primary\", title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.back },\n          React.createElement(\"span\", { className: \"icon icon-left-nav\" }),\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(_yspInteriorComponents.HeaderRight, null)\n    );\n  }\n});";
    }
  });
})(window, ysp);