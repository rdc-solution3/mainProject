(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control27_ln5n4U: function (elem) {
      elem = $(elem).parent('tbody').parent('table')[0];if (elem) {
        var data = {};data.queueList = {};data.queueList.key = $(elem).children('tbody').children('tr').eq(2).children('td').eq(0)[0].textContent.trim().split('：')[0];if ($(elem).children('tbody').children('tr').eq(2).children('td').eq(1).find('select').length > 0) {
          data.queueList.selValue = $(elem).children('tbody').children('tr').eq(2).children('td').eq(1).find('select')[0].value;data.queueList.optionValue = [];data.queueList.optionText = [];$(elem).children('tbody').children('tr').eq(2).children('td').eq(1).find('select').children('option').each(function (i, opt) {
            data.queueList.optionValue.push(opt.value);data.queueList.optionText.push(opt.textContent.trim());
          });
        }return data;
      }return '';
    },
    doAction_uiControl23_0LagrZ: function (data, elem) {
      if (data.eventType == 'selChange') {
        $(elem).children('td').eq(1).find('select')[0].dispatchEvent(new Event('change'));$(elem).children('td').eq(1).find('select')[0].value = data.dataCustom[0];$(elem).children('td').eq(1).find('select').find('option').eq(data.dataCustom[1]).click();
      }
    },
    getTemplate_uiControl23_0LagrZ: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleChange: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'selChange\',\n        data: [e.target.getAttribute(\'data-value\'),e.target.getAttribute(\'data-index\')]\n      })\n    }\n  },\n  showOptionsPage: function(e){ // \u663E\u793A options\n  \te.target.nextElementSibling.style.display = \'block\';\n  },\n  hideOptionsPage: function(e){ // \u9690\u85CFoptions\n    e.target.parentElement.parentElement.style.display = \'none\';\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    var options = \'\';\n    if(data && data!=\'\'){\n      if(data.queueList.optionText){\n        options = data.queueList.optionText.map(function(opt,i){\n          return (\n            <div data-index={i} data-value={data.queueList.optionValue[i]} onClick={me.handleChange} className={data.queueList.optionValue[i]==data.queueList.selValue?\'curOption\':\'\'}>\n              {opt}\n            </div>\n          )\n        })\n      }\n      return (\n        <div className=\'singleSelect\'>\n          <div className=\'singleSelectLi\'>\n            <span className=\'title\'>{data.queueList.key?data.queueList.key:\'\'}</span>\n            <span className=\'value\'>{data.queueList.selValue==\'\'?\'\u8BF7\u9009\u62E9\':data.queueList.selValue}</span>\n            <span className=\'icon icon-right\' onClick={me.showOptionsPage}></span>\n            <div className=\'optionsPage\' style={{display:\'none\'}}>\n            \t<header>\n              \t<span className=\'icon\' onClick={me.hideOptionsPage}>\u8FD4\u56DE</span>\n                {\'\u9009\u62E9\'+data.queueList.key}\n              </header>\n              <div className=\'options\'>\n              \t{options}\n              </div>\n            </div>\n          </div>\n        </div>\n      )\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleChange: function handleChange(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'selChange\',\n        data: [e.target.getAttribute(\'data-value\'), e.target.getAttribute(\'data-index\')]\n      });\n    }\n  },\n  showOptionsPage: function showOptionsPage(e) {\n    // \u663E\u793A options\n    e.target.nextElementSibling.style.display = \'block\';\n  },\n  hideOptionsPage: function hideOptionsPage(e) {\n    // \u9690\u85CFoptions\n    e.target.parentElement.parentElement.style.display = \'none\';\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    var options = \'\';\n    if (data && data != \'\') {\n      if (data.queueList.optionText) {\n        options = data.queueList.optionText.map(function (opt, i) {\n          return React.createElement(\n            \'div\',\n            { \'data-index\': i, \'data-value\': data.queueList.optionValue[i], onClick: me.handleChange, className: data.queueList.optionValue[i] == data.queueList.selValue ? \'curOption\' : \'\' },\n            opt\n          );\n        });\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'singleSelect\' },\n        React.createElement(\n          \'div\',\n          { className: \'singleSelectLi\' },\n          React.createElement(\n            \'span\',\n            { className: \'title\' },\n            data.queueList.key ? data.queueList.key : \'\'\n          ),\n          React.createElement(\n            \'span\',\n            { className: \'value\' },\n            data.queueList.selValue == \'\' ? \'\u8BF7\u9009\u62E9\' : data.queueList.selValue\n          ),\n          React.createElement(\'span\', { className: \'icon icon-right\', onClick: me.showOptionsPage }),\n          React.createElement(\n            \'div\',\n            { className: \'optionsPage\', style: { display: \'none\' } },\n            React.createElement(\n              \'header\',\n              null,\n              React.createElement(\n                \'span\',\n                { className: \'icon\', onClick: me.hideOptionsPage },\n                \'\\u8FD4\\u56DE\'\n              ),\n              \'\u9009\u62E9\' + data.queueList.key\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'options\' },\n              options\n            )\n          )\n        )\n      );\n    }\n  }\n});';
    },
    getData_undefined: function (elem) {
      if (elem && elem.id == 'btQuery') {
        return elem.value.trim();
      } else {
        return '';
      }
    },
    doAction_: function (data, elem) {},
    getTemplate_: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      "\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~"\n    );\n  }\n});';
    },
    getData_control29_pIqhR3: function (elem) {
      if (elem && elem.id == 'btQuery') {
        return elem.value.trim();
      } else {
        return '';
      }
    },
    doAction_uiControl25_MLGBMo: function (data, elem) {
      if (data.eventType == 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl25_MLGBMo: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data!=''){\n      return (\n        <div>\n          <span className='btn btn-block' onClick={me.handleClick}>{data}</span>\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data != \'\') {\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'span\',\n          { className: \'btn btn-block\', onClick: me.handleClick },\n          data\n        )\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control30_ztqPAF: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};data.thead = [];data.state = [];data.tbody = [];if ($(elem).children('tbody').children('tr.table-title:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr.table-title:visible').children('td:visible').each(function (i, td) {
            data.thead.push(td.textContent.trim());
          });
        }if ($(elem).children('tbody').children('tr[onclick]:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr[onclick]:visible').each(function (i, tr) {
            var trs = [];data.state.push(tr.bgColor);if ($(tr).children('td:visible').length > 0) {
              $(tr).children('td:visible').each(function (i, td) {
                trs.push(td.textContent.trim());
              });
            }data.tbody.push(trs);
          });
        }return data;
      }return '';
    },
    doAction_uiControl26_96LtZo: function (data, elem) {
      if (data.eventType == 'checkClick') {
        var idx = parseInt(data.dataCustom);$(elem).children('tbody').children('tr[onclick]:visible').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl26_96LtZo: function () {
      var selfTemplate = "var React = require('react');\nvar {StandardTable} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<StandardTable customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    StandardTable = _require.StandardTable;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(StandardTable, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control35_w5D0lH: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return "";
      }
    },
    doAction_uiControl29_04H0hx: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom);$(elem).children('tbody').children('tr').eq(idx).find('a')[0].click();
      }
    },
    getTemplate_uiControl29_04H0hx: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MenuList} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n});\n';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control12_X4zLgu: function (elem) {
      if (elem) {
        var data = [];data.push(elem.textContent.trim().split(/\s/)[0]);if ($(elem).find('input[type="button"]').length > 0) {
          $(elem).find('input[type="button"]').each(function (i, btn) {
            data.push({ btnTxt: btn.value, btnId: btn.id, btnDisabled: btn.disabled });
          });
        }return data;
      }return '';
    },
    doAction_uiControl10_ZqNgZy: function (data, elem) {
      if (data.eventType == 'click') {
        var id = '#' + data.dataCustom;$(elem).find(id).click();
      }
    },
    getTemplate_uiControl10_ZqNgZy: function () {
      var selfTemplate = "var React = require('react');\nvar {PageBtns} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<PageBtns customData={data} customHandler={this.props.customHandler}/>)\n  }\n});\n";
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    PageBtns = _require.PageBtns;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(PageBtns, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    }
  });
})(window, ysp);