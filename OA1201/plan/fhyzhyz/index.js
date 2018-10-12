(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control128_zu6rbn: function (elem) {
      if (elem) {
        var data = [];$(elem).children('label').each(function (fontIdx, font) {
          var obj = {};obj.text = font.textContent.trim();obj.checked = font.querySelector('input[type="radio"]').checked;obj.idx = fontIdx;data.push(obj);
        });return data;
      }
    },
    doAction_uiControl137_MdruBB: function (data, elem) {
      if (data.eventType == 'checkboxClick') {
        $(elem).children('label').children('input[type="radio"]')[data.dataCustom].click();
      } else if (data.eventType == 'handleClose') {
        elem.ownerDocument.defaultView.parent.close();
      }
    },
    getTemplate_uiControl137_MdruBB: function () {
      var selfTemplate = "module.exports = React.createClass({\n  checkboxClick:function(e){\n    if(e.target.checked){\n \t\t\t$(e.target.parentElement.parentElement).siblings().children('label').attr('class','');\n      e.target.parentElement.className='checked';\n    }\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:'checkboxClick'\n    })\n  },\n  handleClose:function(){\n    \n    this.props.customHandler({\n      eventType:'handleClose'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n      <div id='lwdwCon'>\n        <h5>\n          <i className='back' onClick={this.handleClose}>\u8FD4\u56DE</i>\n          \u8BF7\u9009\u62E9\u90E8\u95E8\n        </h5>\n        <div>\n          <ul>\n            {\n              data.map(function(chb,i){\n                return <li>\n                  <label>\n                    {chb.text}<input type='radio' checked={chb.checked} onClick={_this.checkboxClick} data-index={chb.idx}/>\n                </label>\n                </li>\n              })\n            }\n          </ul>\n        </div>\n        \n        \n      </div>\n    )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  checkboxClick: function checkboxClick(e) {\n    if (e.target.checked) {\n      $(e.target.parentElement.parentElement).siblings().children('label').attr('class', '');\n      e.target.parentElement.className = 'checked';\n    }\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: 'checkboxClick'\n    });\n  },\n  handleClose: function handleClose() {\n\n    this.props.customHandler({\n      eventType: 'handleClose'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        'div',\n        { id: 'lwdwCon' },\n        React.createElement(\n          'h5',\n          null,\n          React.createElement(\n            'i',\n            { className: 'back', onClick: this.handleClose },\n            '\\u8FD4\\u56DE'\n          ),\n          '\\u8BF7\\u9009\\u62E9\\u90E8\\u95E8'\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'ul',\n            null,\n            data.map(function (chb, i) {\n              return React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'label',\n                  null,\n                  chb.text,\n                  React.createElement('input', { type: 'radio', checked: chb.checked, onClick: _this.checkboxClick, 'data-index': chb.idx })\n                )\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control129_JBGT2E: function (elem) {
      if (elem) {
        return true;
      } else {
        return false;
      }
    },
    doAction_uiControl139_On42kI: function (data, elem) {
      var doc = elem.ownerDocument;var _href = elem.ownerDocument.defaultView.location.href;if (data.eventType == 'btnClick') {
        if (data.dataCustom == 0) {
          doc.forms[0].NextRole.value = ysp.customHelper.decodeStr(doc.forms[0].NextRole.value.toUpperCase());doc.forms[0].UserDept.value = ysp.customHelper.decodeStr(doc.forms[0].UserDept.value.toUpperCase()); // doc.forms[0].fldSelDept.value = ysp.customHelper.decodeStr(doc.forms[0].fldSelDept.value.toUpperCase());
          // doc.forms[0].deptlist.value = ysp.customHelper.decodeStr(doc.forms[0].deptlist.value.toUpperCase());
          // doc.forms[0].dept.value = ysp.customHelper.decodeStr(doc.forms[0].dept.value.toUpperCase());
        }$(elem).children().children().children('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl139_On42kI: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:\'btnClick\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div onClick={this.btnClick} className=\'btnCon\'>\n\n          <button data-index={1}>\u53D6\u6D88</button>\n          <button data-index={0}>\u786E\u5B9A</button>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: \'btnClick\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { onClick: this.btnClick, className: \'btnCon\' },\n        React.createElement(\n          \'button\',\n          { \'data-index\': 1 },\n          \'\\u53D6\\u6D88\'\n        ),\n        React.createElement(\n          \'button\',\n          { \'data-index\': 0 },\n          \'\\u786E\\u5B9A\'\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  });
})(window, ysp);