(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control74_CoIC2H: function (elem) {},
    doAction_uiControl75_9ObvsM: function (data, elem) {
      if (data.eventType == 'handleBtnClick') {
        $(elem).children().children().children('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl75_9ObvsM: function () {
      var selfTemplate = "var React=require(\"react\");\nvar {BottomBtn}=require(\"ysp-custom-components\");\n\nmodule.exports = React.createClass({\n  render: function(){\n    return <BottomBtn customHandler={this.props.customHandler}/>\n  }\n});";
      return "\"use strict\";\n\nvar React = require(\"react\");\n\nvar _require = require(\"ysp-custom-components\"),\n    BottomBtn = _require.BottomBtn;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(BottomBtn, { customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control73_LVpBaI: function (elem) {
      if (elem) {
        var data = [];$(elem).children('tr').children('td').children('font').each(function (fontIdx, font) {
          var obj = {};obj.text = font.textContent;obj.checked = font.querySelector('input[type="radio"]').checked;obj.idx = fontIdx;data.push(obj);
        });return data;
      }
    },
    doAction_uiControl73_ZB6gi2: function (data, elem) {
      if (data.eventType == 'checkboxClick') {
        $(elem).children('tr').children('td').children('font').children('input[type="radio"]')[data.dataCustom].click();
      } else if (data.eventType == 'handleClose') {
        elem.ownerDocument.defaultView.parent.close();
      }
    },
    getTemplate_uiControl73_ZB6gi2: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  checkboxClick:function(e){\n    if(e.target.checked){\n \t\t\t$(e.target.parentElement.parentElement).siblings().children(\'label\').attr(\'class\',\'\');\n      e.target.parentElement.className=\'checked\';\n    }\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:\'checkboxClick\'\n    })\n  },\n  handleClose:function(){\n    \n    this.props.customHandler({\n      eventType:\'handleClose\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n      <div id=\'lwdwCon\'>\n        <h5>\n          <i className=\'back\' onClick={this.handleClose}>\u8FD4\u56DE</i>\n          \u6765\u6587\u5355\u4F4D\n        </h5>\n        <div>\n          <ul>\n            {\n              data.map(function(chb,i){\n                return <li>\n                  <label>\n                    {chb.text}<input type=\'radio\' checked={chb.checked} onClick={_this.checkboxClick} data-index={chb.idx}/>\n                </label>\n                </li>\n              })\n            }\n          </ul>\n        </div>\n        \n        \n      </div>\n    )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  checkboxClick: function checkboxClick(e) {\n    if (e.target.checked) {\n      $(e.target.parentElement.parentElement).siblings().children(\'label\').attr(\'class\', \'\');\n      e.target.parentElement.className = \'checked\';\n    }\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: \'checkboxClick\'\n    });\n  },\n  handleClose: function handleClose() {\n\n    this.props.customHandler({\n      eventType: \'handleClose\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { id: \'lwdwCon\' },\n        React.createElement(\n          \'h5\',\n          null,\n          React.createElement(\n            \'i\',\n            { className: \'back\', onClick: this.handleClose },\n            \'\\u8FD4\\u56DE\'\n          ),\n          \'\\u6765\\u6587\\u5355\\u4F4D\'\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'ul\',\n            null,\n            data.map(function (chb, i) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'label\',\n                  null,\n                  chb.text,\n                  React.createElement(\'input\', { type: \'radio\', checked: chb.checked, onClick: _this.checkboxClick, \'data-index\': chb.idx })\n                )\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  });
})(window, ysp);