(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control145_O0JMgV: function (elem) {},
    doAction_uiControl152_Q7WyJJ: function (data, elem) {
      if (data.eventType === 'clickToClose') {
        try {
          ysp.appMain.getActiveWindow().close();
        } catch (e) {
          var win_d = elem.ownerDocument.defaultView;win_d.close();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl152_Q7WyJJ: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component{\n  clickToClose (e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'clickToClose'\n      })\n    }\n  }\n  render (){\n    \treturn(\n        <div style={{height:'10vh'}}>\n          <Header className='backHeader' amStyle=\"primary\" title={this.props.customData}>\n            <HeaderLeft>\n              <AMUI.Button amStyle=\"primary\" onClick={this.clickToClose.bind(this)}><b className='icon\ticon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n            </HeaderLeft>\n          </Header>\n        </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'clickToClose',\n    value: function clickToClose(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickToClose'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { style: { height: '10vh' } },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { className: 'backHeader', amStyle: 'primary', title: this.props.customData },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.clickToClose.bind(this) },\n              React.createElement('b', { className: 'icon\\ticon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control146_0ftpLv: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl154_v5dSXC: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl154_v5dSXC: function () {
      var selfTemplate = "var React = require('react');\nvar {MainCard} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});\n";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control148_zaQEHN: function (elem) {
      if (elem) {
        elem = elem.ownerDocument.querySelector("#pageNum").parentElement;var data = {};data.buttons = [];$(elem).find("input[type='button']").each(function (i, d) {
          data.buttons.push({ value: d.value, name: d.name });
        });if (elem.querySelectorAll("select").length === 1) {
          data.select = {};data.select.value = elem.querySelector("select").value;data.select.optionsText = [];data.select.optionsValue = [];if (elem.querySelectorAll('select option').length > 0) {
            $(elem).find("select option").each(function (i, d) {
              data.select.optionsValue.push(d.value);data.select.optionsText.push(d.textContent);
            });
          }
        }return data;
      }return "";
    },
    doAction_uiControl157_rTxJTx: function (data, elem) {
      elem = elem.ownerDocument.querySelector("#pageNum").parentElement;if (data.eventType === "btnClick") {
        var name = data.dataCustom;$(elem).find("input[name='" + name + "']")[0].click();
      }if (data.eventType === "pageChange") {
        var value = data.dataCustom;elem.querySelector("select").value = value;elem.querySelector("select").dispatchEvent(new Event("change"));
      }if (data.eventType === "confirmBtn") {
        // 确定按钮
        $(elem.ownerDocument).find("input[name='btnQry']").eq(1)[0].click();
      }
    },
    getTemplate_uiControl157_rTxJTx: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    const {customData,customHandler} = this.props;\n    if(customData && customData.buttons && customData.buttons.length > 0){\n      return (\n        <div className=\"buttons\">\n          {\n            customData.buttons.map(function(btn,i){\n              return (<input type=\"button\" value={btn.value} name={btn.name} onClick={(e)=>{\n                    customHandler && customHandler({\n                      eventType: \"btnClick\",\n                      data: e.target.name\n                    })\n                  }}/>)\n            })\n          }\n          <select value={customData.select?(customData.select.value?customData.select.value:''):''} onChange={(e)=>{\n                customHandler && customHandler({\n                  eventType: \"pageChange\",\n                  data: e.target.value\n                })\n\t            }}>\n          \t{\n              customData.select && customData.select.optionsValue.length > 0 && customData.select.optionsValue.map(function(opt,i){\n\t\t\t\t\t\t\t\treturn (<option value={opt.value}>{customData.select.optionsText[i]}</option>)\n              })\n            }\n          </select>\n          <input name='btnQry2' type=\"button\" value=\"\u786E\u5B9A\" onClick={(e)=>{\n              customHandler && customHandler({\n                eventType: 'confirmBtn'\n              })\n            }}/>\n        </div>\n      )\n    }else{\n\t\t\treturn (<div className=\"disnone\"></div>)\n    }\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var _props = this.props,\n        customData = _props.customData,\n        customHandler = _props.customHandler;\n\n    if (customData && customData.buttons && customData.buttons.length > 0) {\n      return React.createElement(\n        \"div\",\n        { className: \"buttons\" },\n        customData.buttons.map(function (btn, i) {\n          return React.createElement(\"input\", { type: \"button\", value: btn.value, name: btn.name, onClick: function onClick(e) {\n              customHandler && customHandler({\n                eventType: \"btnClick\",\n                data: e.target.name\n              });\n            } });\n        }),\n        React.createElement(\n          \"select\",\n          { value: customData.select ? customData.select.value ? customData.select.value : '' : '', onChange: function onChange(e) {\n              customHandler && customHandler({\n                eventType: \"pageChange\",\n                data: e.target.value\n              });\n            } },\n          customData.select && customData.select.optionsValue.length > 0 && customData.select.optionsValue.map(function (opt, i) {\n            return React.createElement(\n              \"option\",\n              { value: opt.value },\n              customData.select.optionsText[i]\n            );\n          })\n        ),\n        React.createElement(\"input\", { name: \"btnQry2\", type: \"button\", value: \"\\u786E\\u5B9A\", onClick: function onClick(e) {\n            customHandler && customHandler({\n              eventType: 'confirmBtn'\n            });\n          } })\n      );\n    } else {\n      return React.createElement(\"div\", { className: \"disnone\" });\n    }\n  }\n});";
    },
    getData_control143_4gzJcB: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};if (elem.querySelector('.titlebar')) {
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }data.thead = [];data.state = [];data.tbody = [];if ($(elem).children('tbody').find('td.titlebarHUI:visible').length > 0) {
          $(elem).children('tbody').find('td.titlebarHUI:visible').each(function (i, td) {
            data.thead.push(td.textContent.trim());
          });
        }if ($(elem).children('tbody').children('tr[onclick]:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr[onclick]:visible').each(function (i, tr) {
            var trs = [];data.state.push($(tr).attr('bgcolor'));if ($(tr).children('td:visible').length > 0) {
              $(tr).children('td:visible').each(function (i, td) {
                trs.push(td.textContent.trim());
              });
            }data.tbody.push(trs);
          });
        }return data;
      }return '';
    },
    doAction_uiControl149_p6OTZv: function (data, elem) {
      if (data.eventType == 'checkClick') {
        var idx = parseInt(data.dataCustom);console.log(idx);$(elem).children('tbody').children('tr[onclick]:visible').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl149_p6OTZv: function () {
      var selfTemplate = "var React = require('react');\nvar {StandardTable} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<StandardTable customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    StandardTable = _require.StandardTable;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(StandardTable, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    }
  });
})(window, ysp);