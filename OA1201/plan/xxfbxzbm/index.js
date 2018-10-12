(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control82_KRCEIN: function (elem) {},
    doAction_uiControl83_yDnEp2: function (data, elem) {
      if (data.eventType == 'btnClick') {
        elem.click();
      }
    },
    getTemplate_uiControl83_yDnEp2: function () {
      var selfTemplate = "module.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      eventType:'btnClick'\n    })\n  },\n  render: function() {\n    return (\n      <div onClick={this.btnClick} className='xzbmBtnCon'>\n        <button data-index={0} style={{'z-index':'9999'}}>\u786E\u5B9A</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      eventType: 'btnClick'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { onClick: this.btnClick, className: 'xzbmBtnCon' },\n      React.createElement(\n        'button',\n        { 'data-index': 0, style: { 'z-index': '9999' } },\n        '\\u786E\\u5B9A'\n      )\n    );\n  }\n});";
    },

    getData_control84_SMDCTF: function (elem) {
      if (elem) {
        var data = [];$(elem).children('font').children('label').children('input[type="checkbox"]').each(function (iptIdx, ipt) {
          data.push([ipt.value, ipt.checked, iptIdx]);
        });return data;
      }
    },
    doAction_uiControl85_WZLs0W: function (data, elem) {
      if (data.eventType == 'handleClose') {
        elem.ownerDocument.defaultView.close();
      } else if (data.eventType == 'checkboxClick') {
        $(elem).children('font').children('label').children('input[type="checkbox"]')[data.dataCustom].click();
      }
    },
    getTemplate_uiControl85_WZLs0W: function () {
      var selfTemplate = "module.exports = React.createClass({\n  checkboxClick:function(e){\n    // if(e.target.checked){\n    //   e.target.parentElement.className='checked';\n    // }else{\n    //   e.target.parentElement.className='';\n    // }\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:'checkboxClick'\n    })\n  },\n  handleClose:function(){\n    this.props.customHandler({\n      eventType:'handleClose'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data.length){\n      return (<div id='xxfbdwmcContainer'>\n        <h5>\n          <i className='back' onClick={this.handleClose}>\u8FD4\u56DE</i>\n          \u5355\u4F4D\u540D\u79F0\n        </h5>\n        <div>\n          <ul>\n            {\n              data.map(function(chb,i){\n                return <li>\n                  <label className={chb[1]?'checked':''}>\n                    {chb[0]}<input type='checkbox' checked={chb[1]} onClick={_this.checkboxClick} data-index={chb[2]}/>\n                </label>\n                </li>\n              })\n            }\n          </ul>\n        </div>\n        \n        \n      </div>)\n    }else{\n      return <div></div>\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  checkboxClick: function checkboxClick(e) {\n    // if(e.target.checked){\n    //   e.target.parentElement.className='checked';\n    // }else{\n    //   e.target.parentElement.className='';\n    // }\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: 'checkboxClick'\n    });\n  },\n  handleClose: function handleClose() {\n    this.props.customHandler({\n      eventType: 'handleClose'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.length) {\n      return React.createElement(\n        'div',\n        { id: 'xxfbdwmcContainer' },\n        React.createElement(\n          'h5',\n          null,\n          React.createElement(\n            'i',\n            { className: 'back', onClick: this.handleClose },\n            '\\u8FD4\\u56DE'\n          ),\n          '\\u5355\\u4F4D\\u540D\\u79F0'\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'ul',\n            null,\n            data.map(function (chb, i) {\n              return React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'label',\n                  { className: chb[1] ? 'checked' : '' },\n                  chb[0],\n                  React.createElement('input', { type: 'checkbox', checked: chb[1], onClick: _this.checkboxClick, 'data-index': chb[2] })\n                )\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control89_Uk7N5G: function (elem) {
      if (elem) {
        var data = [];$(elem).children('option').each(function (optIdx, opt) {
          data.push([opt.textContent.trim(), opt.selected, optIdx]);
        });return data;
      }
    },
    doAction_uiControl92_bw3ZZ1: function (data, elem) {
      if (data.eventType == 'handleSelectChange') {
        $(elem).children('option')[data.dataCustom].selected = true;elem.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl92_bw3ZZ1: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleSelectChange:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:'handleSelectChange'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div className='xxfbbmjb'>\n          <b>\u90E8\u95E8\u7EA7\u522B\uFF1A</b>\n          <select onChange={this.handleSelectChange}>\n            {\n              data.map(function(opt,idx){\n                return <option select={opt[1]} value={idx}>{opt[0]}</option>\n              })\n            }\n          </select>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleSelectChange: function handleSelectChange(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: 'handleSelectChange'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        'div',\n        { className: 'xxfbbmjb' },\n        React.createElement(\n          'b',\n          null,\n          '\\u90E8\\u95E8\\u7EA7\\u522B\\uFF1A'\n        ),\n        React.createElement(\n          'select',\n          { onChange: this.handleSelectChange },\n          data.map(function (opt, idx) {\n            return React.createElement(\n              'option',\n              { select: opt[1], value: idx },\n              opt[0]\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    }
  });
})(window, ysp);