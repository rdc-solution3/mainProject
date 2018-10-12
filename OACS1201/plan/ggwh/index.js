(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control61_OIwBhu: function (elem) {
      if (elem) {
        return true;
      }
    },
    doAction_uiControl58_Q6C0Kv: function (data, elem) {
      if (data.eventType == 'handleBtnClick') {
        $(elem).children('td').children('div').children('input')[data.dataCustom].click();
      }
    },
    getTemplate_uiControl58_Q6C0Kv: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleBtnClick:function(e){\n    if(e.target.nodeName==\'BUTTON\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleBtnClick\'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\'btnCon\' onClick={this.handleBtnClick}>\n        <button data-index={1}>\u53D6\u6D88</button>\n        <button data-index={0}>\u786E\u5B9A</button>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleBtnClick: function handleBtnClick(e) {\n    if (e.target.nodeName == \'BUTTON\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleBtnClick\'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      { className: \'btnCon\', onClick: this.handleBtnClick },\n      React.createElement(\n        \'button\',\n        { \'data-index\': 1 },\n        \'\\u53D6\\u6D88\'\n      ),\n      React.createElement(\n        \'button\',\n        { \'data-index\': 0 },\n        \'\\u786E\\u5B9A\'\n      )\n    );\n  }\n});';
    },
    getData_control60_uyzOlg: function (elem) {
      if (elem) {
        var years = [];var wenhao = [];var fawenType = []; //var 
        var dayinfenshuText = '';var dayinfenshu = '';var yearText = '';var wenhaoText = '';var btnText = '';var fawenText = '';yearText = $(elem).children('tr').eq(0).children('td').eq(0).text();$(elem).children('tr').eq(0).children('td').find('select>option').each(function (optIdx, opt) {
          years.push(opt.textContent.trim());
        });wenhaoText = $(elem).children('tr').eq(1).children('td').eq(0).text();$(elem).children('tr').eq(1).children('td').find('select>option').each(function (optIdx, opt) {
          wenhao.push(opt.textContent.trim());
        });btnText = $(elem).children('tr').eq(2).children('td').eq(0).find('input[type="button"]').val();var genggaiwenhao = $(elem).children('tr').eq(2).children('td').children('input').val();fawenText = $(elem).children('tr').eq(3).children('td').eq(0).text();$(elem).children('tr').eq(3).children('td').find('select>option').each(function (optIdx, opt) {
          fawenType.push(opt.textContent.trim());
        });dayinfenshuText = $(elem).children('tr').eq(4).children('td').eq(0).text();dayinfenshu = $(elem).children('tr').eq(4).children('td').find('input').val();return { yearText: yearText, years: years, wenhao: wenhao, wenhaoText: wenhaoText, genggaiwenhao: genggaiwenhao, btnText: btnText, fawenType: fawenType, fawenText: fawenText, dayinfenshuText: dayinfenshuText, dayinfenshu: dayinfenshu };
      } else {
        return false;
      }
    },
    doAction_uiControl54_yIuCb4: function (data, elem) {
      if (data.eventType == 'handleSelectChange') {
        var _index = data.dataCustom.split(',');$(elem).children('tr').eq(+_index[0]).children('td').find('select>option')[+_index[1]].selected = true;$(elem).children('tr').eq(+_index[0]).children('td').find('select>option')[+_index[1]].dispatchEvent(new Event('change'));
      } else if (data.eventType == 'handleBlur') {
        $(elem).children('tr').eq(2).children('td').children('input').val(data.dataCustom);
      } else if (data.eventType == 'btnClick') {
        $(elem).children('tr').eq(2).children('td').children('div').children('input[type="button"]')[0].click();
      } else if (data.eventType == 'handleBlurLast') {
        $(elem).children('tr').eq(4).children('td').find('input').eq(0).val(data.dataCustom);$(elem).children('tr').eq(4).children('td').find('input')[0].dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl54_yIuCb4: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleSelectChange:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'handleSelectChange\'\n    })\n  },\n  handleBlur:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'handleBlur\'\n    })\n  },\n  handleBlurLast:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'handleBlurLast\'\n    })\n  },\n  btnClick:function(e){\n    this.props.customHandler({\n      eventType:\'btnClick\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div className=\'ggwh\'>\n          <ul>\n            <li>\n              <b>{data.yearText}</b>\n              <select onChange={this.handleSelectChange}>\n                {\n                  data.years.map(function(year,idx){\n                    return <option value={[0,idx]}>{year}</option>\n                  })\n                }\n              </select>\n            </li>\n            <li>\n              <b>{data.wenhaoText}</b>\n              <select onChange={this.handleSelectChange}>\n                {\n                  data.wenhao.map(function(val,idx){\n                    return <option value={[1,idx]}>{val}</option>\n                  })\n                }\n              </select>\n            </li>\n            <li>\n              <button onClick={this.btnClick}>{data.btnText}</button>\n              <AInput onBlur={this.handleBlur} value={data.genggaiwenhao}/>\n            </li>\n            <li>\n              <b>{data.fawenText}</b>\n              <select onChange={this.handleSelectChange}>\n                {\n                  data.fawenType.map(function(val,idx){\n                    return <option value={[3,idx]}>{val}</option>\n                  })\n                }\n              </select>\n            </li>\n            {\n              data.dayinfenshuText && <li>\n                \t<b>{data.dayinfenshuText}</b>\n                  <AInput onBlur={this.handleBlurLast} value={data.dayinfenshu}/>\n                </li>\n            }\n          </ul>\n\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleSelectChange: function handleSelectChange(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'handleSelectChange\'\n    });\n  },\n  handleBlur: function handleBlur(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'handleBlur\'\n    });\n  },\n  handleBlurLast: function handleBlurLast(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'handleBlurLast\'\n    });\n  },\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      eventType: \'btnClick\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'ggwh\' },\n        React.createElement(\n          \'ul\',\n          null,\n          React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'b\',\n              null,\n              data.yearText\n            ),\n            React.createElement(\n              \'select\',\n              { onChange: this.handleSelectChange },\n              data.years.map(function (year, idx) {\n                return React.createElement(\n                  \'option\',\n                  { value: [0, idx] },\n                  year\n                );\n              })\n            )\n          ),\n          React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'b\',\n              null,\n              data.wenhaoText\n            ),\n            React.createElement(\n              \'select\',\n              { onChange: this.handleSelectChange },\n              data.wenhao.map(function (val, idx) {\n                return React.createElement(\n                  \'option\',\n                  { value: [1, idx] },\n                  val\n                );\n              })\n            )\n          ),\n          React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'button\',\n              { onClick: this.btnClick },\n              data.btnText\n            ),\n            React.createElement(AInput, { onBlur: this.handleBlur, value: data.genggaiwenhao })\n          ),\n          React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'b\',\n              null,\n              data.fawenText\n            ),\n            React.createElement(\n              \'select\',\n              { onChange: this.handleSelectChange },\n              data.fawenType.map(function (val, idx) {\n                return React.createElement(\n                  \'option\',\n                  { value: [3, idx] },\n                  val\n                );\n              })\n            )\n          ),\n          data.dayinfenshuText && React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'b\',\n              null,\n              data.dayinfenshuText\n            ),\n            React.createElement(AInput, { onBlur: this.handleBlurLast, value: data.dayinfenshu })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  });
})(window, ysp);