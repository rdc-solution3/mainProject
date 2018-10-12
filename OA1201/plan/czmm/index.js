(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control98_TtNDc2: function (elem) {
      if (elem) {
        //重置密码页面
        var ipts = [];var _title = $(elem).children('tr').eq(0).text();$(elem).children('tr').eq(1).children().children('input').each(function (idxIpt, ipt) {
          var iptObj = {};iptObj.label = ipt.previousSibling.textContent.trim();iptObj.name = ipt.name;iptObj.type = ipt.type;iptObj.value = ipt.value;ipts.push(iptObj);
        });var redText = $(elem).children('tr').eq(2).text();return { title: _title, ipts: ipts, redText: redText };
      } else {
        return null;
      }
    },
    doAction_uiControl0_yfUFy9: function (data, elem) {
      if (data.eventType == 'handleIptBlur') {
        var dataCustom = data.dataCustom;
        var ipt = $(elem).children('tr').eq(1).children().children('input[name=' + dataCustom.name + ']')[0];ipt && (ipt.value = dataCustom.value);
      }
    },
    getTemplate_uiControl0_yfUFy9: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleIptBlur:function(e){\n    this.props.customHandler({\n      data:{\n        name:e.target.name,\n        value:e.target.value\n      },\n      eventType:'handleIptBlur'\n    })\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data){\n      return (\n        <div className=\"czmmCon\">\n\t\t\t\t\t<p className=\"titleText\">{data.title}</p>\n          <div>\n          \t{\n              data.ipts.map(function(iptObj,idx){\n                return <label>\n                \t<b>{iptObj.label}</b>\n                  <AInput name={iptObj.name} value={iptObj.value} type={iptObj.type} onBlur={_this.handleIptBlur}/>\n                </label>\n              })\n            }\n          </div>\n          <p className=\"redText\">{data.redText}</p>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});";
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleIptBlur: function handleIptBlur(e) {\n    this.props.customHandler({\n      data: {\n        name: e.target.name,\n        value: e.target.value\n      },\n      eventType: \'handleIptBlur\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        "div",\n        { className: "czmmCon" },\n        React.createElement(\n          "p",\n          { className: "titleText" },\n          data.title\n        ),\n        React.createElement(\n          "div",\n          null,\n          data.ipts.map(function (iptObj, idx) {\n            return React.createElement(\n              "label",\n              null,\n              React.createElement(\n                "b",\n                null,\n                iptObj.label\n              ),\n              React.createElement(AInput, { name: iptObj.name, value: iptObj.value, type: iptObj.type, onBlur: _this.handleIptBlur })\n            );\n          })\n        ),\n        React.createElement(\n          "p",\n          { className: "redText" },\n          data.redText\n        )\n      );\n    } else {\n      return React.createElement("div", null);\n    }\n  }\n});';
    },
    getData_control131_XOsDP8: function (elem) {
      if (elem) {
        return true;
      } else {
        return false;
      }
    },
    doAction_uiControl141_aGxwP6: function (data, elem) {
      if (data.eventType == 'btnClick') {
        if (data.dataCustom == 1) {
          // ysp.appMain.closeWindow();
          elem.ownerDocument.defaultView.close();
        } else if (data.dataCustom == 0) {
          $(elem).children().children().children('input')[+data.dataCustom].click();
        }
      }
    },
    getTemplate_uiControl141_aGxwP6: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:\'btnClick\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div onClick={this.btnClick} className=\'btnCon\'>\n\n          <button data-index={1}>\u53D6\u6D88</button>\n          <button data-index={0}>\u786E\u5B9A</button>\n        </div>\n      )\n    }else{\n      return <dir></dir>\n    }\n    \n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: \'btnClick\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { onClick: this.btnClick, className: \'btnCon\' },\n        React.createElement(\n          \'button\',\n          { \'data-index\': 1 },\n          \'\\u53D6\\u6D88\'\n        ),\n        React.createElement(\n          \'button\',\n          { \'data-index\': 0 },\n          \'\\u786E\\u5B9A\'\n        )\n      );\n    } else {\n      return React.createElement(\'dir\', null);\n    }\n  }\n});';
    }
  });
})(window, ysp);