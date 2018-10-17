(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control25_5HHw0Z: function (elem) {},
    doAction_uiControl81_oyCNU7: function (data, elem) {
      if (data.eventType === 'clickToClose') {
        try {
          ysp.appMain.getActiveWindow().close();
        } catch (e) {
          var win_d = elem.ownerDocument.defaultView;win_d.close();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl81_oyCNU7: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component{\n  clickToClose (e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'clickToClose'\n      })\n    }\n  }\n  render (){\n    \treturn(\n        <div style={{height:'10vh'}}>\n          <Header className='backHeader' amStyle=\"primary\" title={this.props.customData}>\n            <HeaderLeft>\n              <AMUI.Button amStyle=\"primary\" onClick={this.clickToClose.bind(this)}><b className='icon\ticon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n            </HeaderLeft>\n          </Header>\n        </div>\n    )\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'clickToClose',\n    value: function clickToClose(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickToClose'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { style: { height: '10vh' } },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { className: 'backHeader', amStyle: 'primary', title: this.props.customData },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.clickToClose.bind(this) },\n              React.createElement('b', { className: 'icon\\ticon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control26_zbIKaq: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};if (elem.querySelector('.titlebar')) {
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }data.thead = [];data.tbody = [];if ($(elem).children('tbody').children('tr:visible').children('.titlebarHUI').length > 0) {
          $(elem).children('tbody').children('tr:visible').children('.titlebarHUI').each(function (i, th) {
            data.thead.push(th.textContent.trim());
          });
        }if ($(elem).children('tbody').children('tr:visible').children('td:not([class]):visible').length > 0) {
          $(elem).children('tbody').children('tr:visible').each(function (i, tr) {
            if ($(tr).children('td:not([class]):visible').length > 0) {
              var trs = [];$(tr).children('td:not([class]):visible').each(function (i, td) {
                trs.push(td.textContent.trim());
              });data.tbody.push(trs);
            }
          });
        }return data;
      }return '';
    },
    doAction_uiControl82_pLgF4U: function (data, elem) {},
    getTemplate_uiControl82_pLgF4U: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data.tbody && data.tbody.length > 0 && data.tbody[0].length > 1){\n      return (\n        <div className='name_id'>\n          <span className='name'>{data.tbody[0][0]}</span>\n          <span className='id'>{data.tbody[0][1]}</span>\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.tbody && data.tbody.length > 0 && data.tbody[0].length > 1) {\n      return React.createElement(\n        'div',\n        { className: 'name_id' },\n        React.createElement(\n          'span',\n          { className: 'name' },\n          data.tbody[0][0]\n        ),\n        React.createElement(\n          'span',\n          { className: 'id' },\n          data.tbody[0][1]\n        )\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },
    getData_control80_bwNNzU: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};if (elem.querySelector('.titlebar')) {
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }data.thead = [];data.tbody = [];if ($(elem).find('.titlebarHUI').length > 0) {
          $(elem).find('.titlebarHUI').each(function (i, th) {
            data.thead.push(th.textContent.trim());
          });
        }if ($(elem).children('tbody').children('tr:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr:visible').each(function (i, tr) {
            if (!tr.querySelector('.titlebarHUI') && i > 0) {
              if ($(tr).children('td:visible').length > 0) {
                var trs = [];$(tr).children('td:visible').each(function (i, td) {
                  // trs.push({
                  //   tdTxt: td.textContent ? td.textContent : '',
                  //   colspan: td.getAttribute('colspan') ? td.getAttribute('colspan') : ''
                  // });
                  trs.push(td.textContent.trim());
                });data.tbody.push(trs);
              } // if (i === 1) {
              //   data.thead = trs;
              // } else {
              // }
            }
          });
        }return data;
      }return '';
    },
    doAction_uiControl83_OoETxF: function (data, elem) {},
    getTemplate_uiControl83_OoETxF: function () {
      var selfTemplate = "var React = require('react');\nvar {StandardTable} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<StandardTable customData={data} customHandler={this.props.customHandler}/>)\n  }\n});\n";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    StandardTable = _require.StandardTable;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(StandardTable, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control81_Gmw65g: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};if (elem.querySelector('.titlebar')) {
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }data.thead = [];data.tbody = [];if ($(elem).children('tbody').children('tr:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr:visible').each(function (i, tr) {
            if (i > 0) {
              var trs = [];if ($(tr).children('td:visible').length > 0) {
                $(tr).children('td:visible').each(function (i, td) {
                  trs.push(td.textContent.trim());
                });
              }if (i === 1) {
                data.thead = trs;
              } else {
                data.tbody.push(trs);
              }
            }
          });
        }return data;
      }return '';
    },
    doAction_uiControl84_EtSZuW: function (data, elem) {},
    getTemplate_uiControl84_EtSZuW: function () {
      var selfTemplate = "var React = require('react');\nvar {StandardTable} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<StandardTable customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    StandardTable = _require.StandardTable;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(StandardTable, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control82_7uqLIg: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};if (elem.querySelector('.titlebar')) {
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }data.thead = [];data.tbody = [];if ($(elem).children('tbody').children('tr:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr:visible').each(function (i, tr) {
            if (i > 0) {
              var trs = [];if ($(tr).children('td:visible').length > 0) {
                $(tr).children('td:visible').each(function (i, td) {
                  trs.push(td.textContent.trim());
                });
              }if (i === 1) {
                data.thead = trs;
              } else {
                data.tbody.push(trs);
              }
            }
          });
        }return data;
      }return '';
    },
    doAction_uiControl85_yvmssb: function (data, elem) {},
    getTemplate_uiControl85_yvmssb: function () {
      var selfTemplate = "var React = require('react');\nvar {StandardTable} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<StandardTable customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    StandardTable = _require.StandardTable;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(StandardTable, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control83_Hb7Kg6: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};if (elem.querySelector('.titlebar')) {
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }data.thead = [];data.tbody = [];if ($(elem).children('tbody').children('tr:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr:visible').each(function (i, tr) {
            if (i > 0) {
              var trs = [];if ($(tr).children('td:visible').length > 0) {
                $(tr).children('td:visible').each(function (i, td) {
                  trs.push(td.textContent.trim());
                });
              }if (i === 1) {
                data.thead = trs;
              } else {
                data.tbody.push(trs);
              }
            }
          });
        }return data;
      }return '';
    },
    doAction_uiControl86_v6V84M: function (data, elem) {},
    getTemplate_uiControl86_v6V84M: function () {
      var selfTemplate = "var React = require('react');\nvar {StandardTable} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<StandardTable customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    StandardTable = _require.StandardTable;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(StandardTable, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    }
  });
})(window, ysp);