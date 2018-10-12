(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control25_KmWcLo: function (elem) {
      if (elem) {
        var options = [];$(elem).children('option').each(function (optIdx, opt) {
          options.push(opt.textContent.trim());
        });return options;
      } else {
        return null;
      }
    },
    doAction_uiControl29_ikZvBl: function (data, elem) {
      if (data.eventType == 'handleSelectChange') {
        $(elem).children('option')[data.dataCustom].selected = true;elem.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl29_ikZvBl: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleSelectChange:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'handleSelectChange\'\n    })\n    e.target.querySelector(\'option\').selected=true;\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div className=\'txyj\'>\n          <h4>\n          \t<i></i>\n            \u8BF7\u586B\u5199\u610F\u89C1\n          </h4>\n          <div>\n          \t<select onChange={this.handleSelectChange}>\n              {\n                data.map(function(val,idx){\n                  return <option value={idx}>{val}</option>\n                })\n              }\n            </select>\n          </div>\n          \n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleSelectChange: function handleSelectChange(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'handleSelectChange\'\n    });\n    e.target.querySelector(\'option\').selected = true;\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'txyj\' },\n        React.createElement(\n          \'h4\',\n          null,\n          React.createElement(\'i\', null),\n          \'\\u8BF7\\u586B\\u5199\\u610F\\u89C1\'\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'select\',\n            { onChange: this.handleSelectChange },\n            data.map(function (val, idx) {\n              return React.createElement(\n                \'option\',\n                { value: idx },\n                val\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control24_T4OvpT: function (elem) {
      if (elem) {
        return elem.value;
      } else {
        return null;
      }
    },
    doAction_uiControl28_0Od1QD: function (data, elem) {
      if (data.eventType == 'handleChange') {
        elem.value = data.dataCustom;
      }
    },
    getTemplate_uiControl28_0Od1QD: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleChange:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'handleChange\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data==\'\'||data){\n      return (\n        <div className=\'textareaCon\'>\n          <ATextarea onBlur={this.handleChange} value={data}/>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleChange: function handleChange(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'handleChange\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data == \'\' || data) {\n      return React.createElement(\n        \'div\',\n        { className: \'textareaCon\' },\n        React.createElement(ATextarea, { onBlur: this.handleChange, value: data })\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control27_LaZCvD: function (elem) {
      if (elem) {
        var options = [];$(elem).children('option').each(function (optIdx, opt) {
          options.push(opt.textContent.trim());
        });return options;
      } else {
        return null;
      }
    },
    doAction_uiControl30_kEmOl0: function (data, elem) {
      if (data.eventType == 'handleSelectChange') {
        $(elem).children('option')[data.dataCustom].selected = true;elem.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl30_kEmOl0: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleSelectChange:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'handleSelectChange\'\n    })\n    e.target.querySelector(\'option\').selected=true;\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div className=\'txyj\'>\n          <h4>\n          \t<i></i>\n            \u8BF7\u586B\u5199\u9644\u52A0\u610F\u89C1\n          </h4>\n          <div>\n          \t<select onChange={this.handleSelectChange}>\n              {\n                data.map(function(val,idx){\n                  return <option value={idx}>{val}</option>\n                })\n              }\n            </select>\n          </div>\n          \n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleSelectChange: function handleSelectChange(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'handleSelectChange\'\n    });\n    e.target.querySelector(\'option\').selected = true;\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'txyj\' },\n        React.createElement(\n          \'h4\',\n          null,\n          React.createElement(\'i\', null),\n          \'\\u8BF7\\u586B\\u5199\\u9644\\u52A0\\u610F\\u89C1\'\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'select\',\n            { onChange: this.handleSelectChange },\n            data.map(function (val, idx) {\n              return React.createElement(\n                \'option\',\n                { value: idx },\n                val\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control30_oriqfe: function (elem) {
      if (elem) {
        return elem.value;
      } else {
        return null;
      }
    },
    doAction_uiControl35_QSBXsC: function (data, elem) {
      if (data.eventType == 'handleChange') {
        elem.value = data.dataCustom;
      }
    },
    getTemplate_uiControl35_QSBXsC: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleChange:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'handleChange\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data==\'\'||data){\n      return (\n        <div className=\'textareaCon\'>\n          <ATextarea onBlur={this.handleChange} value={data}/>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleChange: function handleChange(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'handleChange\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data == \'\' || data) {\n      return React.createElement(\n        \'div\',\n        { className: \'textareaCon\' },\n        React.createElement(ATextarea, { onBlur: this.handleChange, value: data })\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },

    getData_control32_gKwerp: function (elem) {
      if (elem) {
        return true;
      }
    },
    doAction_uiControl51_byTw3L: function (data, elem) {
      if (data.eventType == 'btnClick') {
        $(elem).children().children().children('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl51_byTw3L: function () {
      var selfTemplate = "module.exports = React.createClass({\n  btnClick:function(e){\n    var target=e.target;\n    if(target.nodeName=='B'||target.nodeName=='BUTTON'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:'btnClick'\n      })\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div onClick={this.btnClick} className='tianxieyijian pageTitle'>\n\t\t\t\t\t<b className='back detailBtnBack' data-index={1}>\u8FD4\u56DE</b>\n          <span>\u586B\u5199\u610F\u89C1</span>\n          <button data-index={0}>\u786E\u5B9A</button>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  btnClick: function btnClick(e) {\n    var target = e.target;\n    if (target.nodeName == 'B' || target.nodeName == 'BUTTON') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: 'btnClick'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        'div',\n        { onClick: this.btnClick, className: 'tianxieyijian pageTitle' },\n        React.createElement(\n          'b',\n          { className: 'back detailBtnBack', 'data-index': 1 },\n          '\\u8FD4\\u56DE'\n        ),\n        React.createElement(\n          'span',\n          null,\n          '\\u586B\\u5199\\u610F\\u89C1'\n        ),\n        React.createElement(\n          'button',\n          { 'data-index': 0 },\n          '\\u786E\\u5B9A'\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control9_qfxZyk: function (elem) {
      if (elem) {
        return true;
      }
    },
    doAction_uiControl10_OTU7LP: function (data, elem) {
      if (data.eventType == 'btnClick') {
        $(elem).children().children().children('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl10_OTU7LP: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(e){\n    var target=e.target;\n    if(target.nodeName==\'B\'||target.nodeName==\'BUTTON\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'btnClick\'\n      })\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div onClick={this.btnClick} className=\'tianxieyijian pageTitle\'>\n\t\t\t\t\t<b className=\'back detailBtnBack\' data-index={1}>\u8FD4\u56DE</b>\n          <span>\u586B\u5199\u9644\u52A0\u610F\u89C1</span>\n          <button data-index={0}>\u786E\u5B9A</button>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick(e) {\n    var target = e.target;\n    if (target.nodeName == \'B\' || target.nodeName == \'BUTTON\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'btnClick\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { onClick: this.btnClick, className: \'tianxieyijian pageTitle\' },\n        React.createElement(\n          \'b\',\n          { className: \'back detailBtnBack\', \'data-index\': 1 },\n          \'\\u8FD4\\u56DE\'\n        ),\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u586B\\u5199\\u9644\\u52A0\\u610F\\u89C1\'\n        ),\n        React.createElement(\n          \'button\',\n          { \'data-index\': 0 },\n          \'\\u786E\\u5B9A\'\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  });
})(window, ysp);