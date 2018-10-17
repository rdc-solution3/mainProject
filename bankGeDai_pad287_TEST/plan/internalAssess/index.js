(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control84_5odG2V: function (elem) {
      if (elem) {
        return true;
      }return '';
    },
    doAction_uiControl88_Tg3qBz: function (data, elem) {
      if (data.eventType === 'click') {
        elem.ownerDocument.defaultView.opener.frames.location.reload();elem.click();ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl88_Tg3qBz: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div style={{height:'10vh'}}>\n        <div className='backHeader assessHeader'>\n          <div>\n            <span onClick={this.props.customData?this.handleClick:''} className='icon icon-left-nav'>\u5185\u8BC4\u4FE1\u606F</span>\n          </div>\n          <div>\n            <span onClick={this.props.customData?this.handleClick:''} className='icon icon-check_self'></span>\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { style: { height: '10vh' } },\n      React.createElement(\n        'div',\n        { className: 'backHeader assessHeader' },\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            { onClick: this.props.customData ? this.handleClick : '', className: 'icon icon-left-nav' },\n            '\\u5185\\u8BC4\\u4FE1\\u606F'\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement('span', { onClick: this.props.customData ? this.handleClick : '', className: 'icon icon-check_self' })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control85_vWxgkT: function (elem) {
      if (elem) {
        var data = {};if ($(elem).children('tbody').children('tr').length > 2) {
          data.name = $(elem).children('tbody').children('tr').eq(2).children('td').eq(0)[0].textContent.trim();data.id = $(elem).children('tbody').children('tr').eq(2).children('td').eq(1)[0].textContent.trim();
        }return data;
      }return '';
    },
    doAction_uiControl92_AtVRif: function (data, elem) {},
    getTemplate_uiControl92_AtVRif: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data.name && data.id){\n      return (\n        <div className=\'userInfo\'>\n          <div className=\'name_id\'>\n            <span className=\'name\'>{data.name?data.name:\'\'}</span>\n            <span className=\'id\'>{data.id?data.id:\'\'}</span>\n          </div>\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.name && data.id) {\n      return React.createElement(\n        \'div\',\n        { className: \'userInfo\' },\n        React.createElement(\n          \'div\',\n          { className: \'name_id\' },\n          React.createElement(\n            \'span\',\n            { className: \'name\' },\n            data.name ? data.name : \'\'\n          ),\n          React.createElement(\n            \'span\',\n            { className: \'id\' },\n            data.id ? data.id : \'\'\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control87_ZZsFyd: function (elem) {
      /*** elem 重定向 ***/if (elem.ownerDocument.querySelectorAll('.table-class').length > 0) {
        $(elem.ownerDocument).find('.table-class').each(function (i, table) {
          if (/行政记录条数/.test(table.querySelector('.table-title').textContent)) {
            elem = table;
          } else {
            elem = void 0;
          }
        });
      }if (elem) {
        var data = [];if ($(elem).children('tbody').children('tr:visible').length > 0 && $(elem).children('tbody').children('tr:visible').eq(0).children('td:visible').length > 0) {
          var key, value;$(elem).children('tbody').children('tr:visible').eq(0).children('td:visible').each(function (i, key) {
            key = key.textContent.trim();if ($(elem).children('tbody').children('tr:visible').eq(1).children('td:visible').eq(i)[0]) {
              value = $(elem).children('tbody').children('tr:visible').eq(1).children('td:visible').eq(i)[0].textContent.trim();
            }data.push({ key: key, value: value });
          });
        }return data;
      }return '';
    },
    doAction_uiControl87_H24VlK: function (data, elem) {},
    getTemplate_uiControl87_H24VlK: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {AssessTwoLineTable} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<AssessTwoLineTable customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    AssessTwoLineTable = _require.AssessTwoLineTable;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(AssessTwoLineTable, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control88_5ARa59: function (elem) {
      /*** elem 重定向 ***/if (elem.ownerDocument.querySelectorAll('.table-class').length > 0) {
        $(elem.ownerDocument).find('.table-class').each(function (i, table) {
          if (/呆账信息汇总余额/.test(table.querySelector('.table-title').textContent)) {
            elem = table;
          } else {
            elem = void 0;
          }
        });
      }if (elem) {
        var data = [];if ($(elem).children('tbody').children('tr:visible').length > 0 && $(elem).children('tbody').children('tr:visible').eq(0).children('td').length > 0) {
          var key, value;$(elem).children('tbody').children('tr:visible').eq(0).children('td:visible').each(function (i, key) {
            key = key.textContent.trim();if ($(elem).children('tbody').children('tr:visible').eq(2).children('td:visible').eq(i)[0]) {
              value = $(elem).children('tbody').children('tr:visible').eq(2).children('td:visible').eq(i)[0].textContent.trim();
            }data.push({ key: key, value: value });
          });
        }return data;
      }return '';
    },
    doAction_uiControl93_vLCqKL: function (data, elem) {},
    getTemplate_uiControl93_vLCqKL: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {AssessTwoLineTable} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<AssessTwoLineTable customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    AssessTwoLineTable = _require.AssessTwoLineTable;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(AssessTwoLineTable, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control89_3sQmSV: function (elem) {
      /*** elem 重定向 ***/if (elem.ownerDocument.querySelectorAll('.table-class').length > 0) {
        $(elem.ownerDocument).find('.table-class').each(function (i, table) {
          if (/犯罪记录条数/.test(table.querySelector('.table-title').textContent)) {
            elem = table;
          } else {
            elem = void 0;
          }
        });
      }if (elem) {
        var data = [];if ($(elem).children('tbody').children('tr.table-title').length > 0) {
          $(elem).children('tbody').children('tr.table-title').each(function (i, thead) {
            var table = {};table.keys = [];table.values = [];var keys = $(thead).next('tr:visible');if ($(thead).children('td').length > 0) {
              $(thead).children('td').each(function (i, th) {
                table.keys.push(th.textContent.trim());
              });if ($(keys).children('td').length > 0) {
                $(keys).children('td').each(function (i, td) {
                  table.values.push(td.textContent.trim());
                });
              }
            }data.push(table);
          });
        }return data;
      }return '';
    },
    doAction_uiControl94_54Aqh8: function (data, elem) {},
    getTemplate_uiControl94_54Aqh8: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== \'\' && data.length>0){\n      var groups = data.map(function(group,i){\n        var grp;\n        if(group.keys && group.values){\n          grp = group.keys.map(function(key,i){\n            return (\n            \t<div className=\'grp\'>\n                <span className=\'key\'>{key}</span>\n                <span className=\'value\'>{group.values[i]}</span>\n              </div>\n            )\n          })\n        }\n        return (\n        \t<div className=\'assessTwoLineTable\'>\n            {grp}\n          </div>\n        )\n      })\n      return (\n        <div>\n\t\t\t\t\t{groups}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== \'\' && data.length > 0) {\n      var groups = data.map(function (group, i) {\n        var grp;\n        if (group.keys && group.values) {\n          grp = group.keys.map(function (key, i) {\n            return React.createElement(\n              \'div\',\n              { className: \'grp\' },\n              React.createElement(\n                \'span\',\n                { className: \'key\' },\n                key\n              ),\n              React.createElement(\n                \'span\',\n                { className: \'value\' },\n                group.values[i]\n              )\n            );\n          });\n        }\n        return React.createElement(\n          \'div\',\n          { className: \'assessTwoLineTable\' },\n          grp\n        );\n      });\n      return React.createElement(\n        \'div\',\n        null,\n        groups\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control90_a7toQO: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};if ($(elem).children('tbody').find('.titlebar').length > 0) {
          data.thead = [];$(elem).children('tbody').find('.titlebar').each(function (i, td) {
            data.thead.push(td.textContent.trim());
          });
        } else if ($(elem).children('tbody').find('.table-title').length > 0 && /无/.test($(elem).children('tbody').find('.table-title')[0].textContent)) {
          data.info = $(elem).children('tbody').find('.table-title')[0].textContent.trim();
        }if ($(elem).children('tbody').children('tr:visible').children('td:visible').length > 0) {
          data.tbody = [];$(elem).children('tbody').children('tr:visible').each(function (i, tr) {
            var trs = [];if (i > 0) {
              if ($(tr).children('td:visible').length > 0) {
                $(tr).children('td:visible').each(function (i, td) {
                  trs.push(td.textContent.trim());
                });
              }data.tbody.push(trs);
            }
          });
        }return data;
      }return '';
    },
    doAction_uiControl95_ZSkDAy: function (data, elem) {},
    getTemplate_uiControl95_ZSkDAy: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {StandardTable} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<StandardTable customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    StandardTable = _require.StandardTable;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(StandardTable, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    }
  });
})(window, ysp);