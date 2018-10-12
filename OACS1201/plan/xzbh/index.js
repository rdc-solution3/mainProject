(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control72_RyEtXS: function (elem) {},
    doAction_uiControl72_CMV0sV: function (data, elem) {
      if (data.eventType == 'handleBtnClick') {
        $(elem).children().children().children('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl72_CMV0sV: function () {
      var selfTemplate = 'var React=require("react");\nvar {BottomBtn}=require("ysp-custom-components");\n\nmodule.exports = React.createClass({\n  render: function(){\n    return <BottomBtn customHandler={this.props.customHandler}/>\n  }\n});\n';
      return '"use strict";\n\nvar React = require("react");\n\nvar _require = require("ysp-custom-components"),\n    BottomBtn = _require.BottomBtn;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(BottomBtn, { customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control34_sxho8s: function (elem) {
      if (elem) {
        var options = [];var inputs = [];$(elem).children('tr').eq(1).children('td').children('select').children('option').each(function (optIdx, opt) {
          options.push(opt.textContent.trim());
        });$(elem).children('tr').eq(1).children('td').children('input').each(function (iptIdx, ipt) {
          ipt.type == 'text' && inputs.push(ipt.value);
        });var _titleNode = $(elem).children('tr').eq(1).children('td')[0].childNodes[0];var _title = '';_titleNode && (_title = _titleNode && _titleNode.nextSibling && _titleNode.nextSibling.textContent);var buttonText = $(elem).children('tr').eq(1).children('td').children('input[type="button"]').val();return { options: options, inputs: inputs, _title: _title, buttonText: buttonText };
      }
    },
    doAction_uiControl32_o0Quse: function (data, elem) {
      if (data.eventType == 'handleSelChange') {
        $(elem).children('tr').eq(1).children('td').children('select').children('option')[data.dataCustom].selected = true;$(elem).children('tr').eq(1).children('td').children('select').children('option')[data.dataCustom].dispatchEvent(new Event('change'));
      } else if (data.eventType == 'handleBtnClick') {
        $(elem).children('tr').eq(1).children('td').children('input[type="button"]')[0].click();
      } else if (data.eventType == 'handleBlur') {
        var inputs = [];$(elem).children('tr').eq(1).children('td').children('input').each(function (iptIdx, ipt) {
          ipt.type == 'text' && inputs.push(ipt);
        });inputs[data.dataCustom.idx].value = data.dataCustom.val;
      }
    },
    getTemplate_uiControl32_o0Quse: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleSelChange:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'handleSelChange\'\n    })\n  },\n  handleBtnClick:function(e){\n    this.props.customHandler({\n      eventType:\'handleBtnClick\'\n    })\n  },\n  handleBlur:function(e){\n    this.props.customHandler({\n      data:{\n        val:e.target.value,\n        idx:e.target.dataset.index\n      },\n      eventType:\'handleBlur\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'txbh\'>\n          <div>\n            <h4>{data._title}</h4>\n            <select onChange={this.handleSelChange}>\n              {\n                data.options.map(function(option,idx){\n                  return <option value={idx}>{option}</option>\n                })\n              }\n            </select>\n            <div>\n              <button onClick={this.handleBtnClick}>{data.buttonText}</button>\n              <div>\n              \t{\n                  data.inputs.map(function(input,idx){\n                    return <AInput onBlur={_this.handleBlur} value={input} data-index={idx} readOnly={idx==0?true:false}/>\n                })\n              }\n              </div>\n            \t\n            </div>\n          </div>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleSelChange: function handleSelChange(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'handleSelChange\'\n    });\n  },\n  handleBtnClick: function handleBtnClick(e) {\n    this.props.customHandler({\n      eventType: \'handleBtnClick\'\n    });\n  },\n  handleBlur: function handleBlur(e) {\n    this.props.customHandler({\n      data: {\n        val: e.target.value,\n        idx: e.target.dataset.index\n      },\n      eventType: \'handleBlur\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'txbh\' },\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'h4\',\n            null,\n            data._title\n          ),\n          React.createElement(\n            \'select\',\n            { onChange: this.handleSelChange },\n            data.options.map(function (option, idx) {\n              return React.createElement(\n                \'option\',\n                { value: idx },\n                option\n              );\n            })\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'button\',\n              { onClick: this.handleBtnClick },\n              data.buttonText\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              data.inputs.map(function (input, idx) {\n                return React.createElement(AInput, { onBlur: _this.handleBlur, value: input, \'data-index\': idx, readOnly: idx == 0 ? true : false });\n              })\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  });
})(window, ysp);