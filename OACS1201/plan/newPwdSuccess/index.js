(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control132_i9OmUe: function (elem) {
      if (elem) {
        var text = $(elem).children('tr').children('td').children('font').text();return { text: text };
      } else {
        return false;
      }
    },
    doAction_uiControl142_grVCXW: function (data, elem) {
      if (data.eventType == 'handleBtnClick') {
        var btn = $(elem).children().children().children('input[type="button"]')[0];if (btn) {
          btn.click();
        }
      }
    },
    getTemplate_uiControl142_grVCXW: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleBtnClick:function(){\n    this.props.customHandler({\n      eventType:\'handleBtnClick\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div className="changePwdSuccessCon">\n          <p>{data.text}</p>\n          <button onClick={this.handleBtnClick}>\u8FD4\u56DE\u9996\u9875</button>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleBtnClick: function handleBtnClick() {\n    this.props.customHandler({\n      eventType: \'handleBtnClick\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        "div",\n        { className: "changePwdSuccessCon" },\n        React.createElement(\n          "p",\n          null,\n          data.text\n        ),\n        React.createElement(\n          "button",\n          { onClick: this.handleBtnClick },\n          "\\u8FD4\\u56DE\\u9996\\u9875"\n        )\n      );\n    } else {\n      return React.createElement("div", null);\n    }\n  }\n});';
    }
  });
})(window, ysp);