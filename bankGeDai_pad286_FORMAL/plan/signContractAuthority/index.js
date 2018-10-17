(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control104_eF8Ha6: function (elem) {},
    doAction_uiControl107_CyyTr7: function (data, elem) {
      if (data.eventType === 'clickToClose') {
        try {
          ysp.appMain.getActiveWindow().close();
        } catch (e) {
          var win_d = elem.ownerDocument.defaultView;win_d.close();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl107_CyyTr7: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component{\n  clickToClose (e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'clickToClose'\n      })\n    }\n  }\n  render (){\n    return(\n      <div style={{height:'10vh'}}>\n        <Header className='backHeader' amStyle=\"primary\" title='\u4E91\u6309\u63ED\u8D37\u6B3E\u7533\u8BF7(\u4FE1\u7528)'>\n          <HeaderLeft>\n            <AMUI.Button amStyle=\"primary\" onClick={this.clickToClose.bind(this)}><b className='icon\ticon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'clickToClose',\n    value: function clickToClose(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickToClose'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { style: { height: '10vh' } },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { className: 'backHeader', amStyle: 'primary', title: '\\u4E91\\u6309\\u63ED\\u8D37\\u6B3E\\u7533\\u8BF7(\\u4FE1\\u7528)' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.clickToClose.bind(this) },\n              React.createElement('b', { className: 'icon\\ticon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control105_wmOQ8v: function (elem) {
      if (elem) {
        var data = [];if ($(elem).children('.ca-tit').length > 0) {
          $(elem).children('.ca-tit').each(function (i, tit) {
            var title;var list = [];title = tit.textContent.trim();if ($(tit).next('ul').find('li').length > 0) {
              $(tit).next('ul').find('li').each(function (i, li) {
                var pTemp = [];if ($(li).children('p').length > 0) {
                  $(li).children('p').each(function (i, p) {
                    pTemp.push(p.textContent.trim());
                  });
                }list.push(pTemp);
              });
            }data.push({ title: title, list: list });
          });
        }return data;
      }return '';
    },
    doAction_uiControl108_VGbhE1: function (data, elem) {},
    getTemplate_uiControl108_VGbhE1: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== '' && data.length > 0){\n      var authGroup = data.map(function(grp,i){\n        if(grp.list.length > 0){\n          var authValue = grp.list.map(function(list,i){\n            if(list.length > 0){\n              var valueGrp = list.map(function(p,i){\n                return (<p>{p}</p>);\n              })\n            }\n            return(\n              <div>{valueGrp?valueGrp:''}</div>\n            )\n          })\n        }\n        return (\n        \t<div className='authGrp'>\n          \t<div className='authKey'>{grp.title?grp.title:''}</div>\n            <div className='authValue'>{authValue?authValue:''}</div>\n          </div>\n        )\n      })\n      return (\n        <div className='authorityContainer'>\n          {authGroup?authGroup:''}\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== '' && data.length > 0) {\n      var authGroup = data.map(function (grp, i) {\n        if (grp.list.length > 0) {\n          var authValue = grp.list.map(function (list, i) {\n            if (list.length > 0) {\n              var valueGrp = list.map(function (p, i) {\n                return React.createElement(\n                  'p',\n                  null,\n                  p\n                );\n              });\n            }\n            return React.createElement(\n              'div',\n              null,\n              valueGrp ? valueGrp : ''\n            );\n          });\n        }\n        return React.createElement(\n          'div',\n          { className: 'authGrp' },\n          React.createElement(\n            'div',\n            { className: 'authKey' },\n            grp.title ? grp.title : ''\n          ),\n          React.createElement(\n            'div',\n            { className: 'authValue' },\n            authValue ? authValue : ''\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'authorityContainer' },\n        authGroup ? authGroup : ''\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },
    getData_control66_IdkHK8: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl117_MLQTOo: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl117_MLQTOo: function () {
      var selfTemplate = "var React = require('react');\nvar {MainCard} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control114_JDK8Qs: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector('.titlebar')) {
          // table card 的标题
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        } else if (elem.querySelector('.titlebarHUI')) {
          data.cardTitle = elem.querySelector('.titlebarHUI').textContent.trim();
        }data.groups = [];if (elem.querySelectorAll('.RinghtTrYellow').length > 0) {
          // 判断 名称 是否存在
          $(elem).find('.RinghtTrYellow:visible').each(function (i, key) {
            // 循环名称
            var group = {}; // 定义一组 key-value
            group.key = key.textContent.trim();if ($(key).next().find('input[type="text"]').length > 0) {
              // 判断 key-value 组合中，value值的类型，若为 input
              group.name = 'input'; // 做标记
              group.value = $(key).next().find('input')[0].value;group.disabled = $(key).next().find('input')[0].disabled; // 获取对应属性 disabled
              group.readonly = $(key).next().find('input')[0].readOnly; // 获取对应属性 readonly
              if (/star/.test($(key).next().find('input ').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length == 1) {
              // 判断 key-value 组合中，value值的类型，若为 select
              group.name = 'select';group.disabled = $(key).next().find('select')[0].disabled;group.readonly = $(key).next().find('select')[0].readOnly;var curOptvalue = $(key).next().find('select')[0].value;group.optionsText = [];group.optionsValue = [];$(key).next().find('select').children('option').each(function (i, opt) {
                group.optionsValue.push(opt.value);group.optionsText.push(opt.textContent.trim()); // if (opt.value == curOptvalue) {
                // group.value = opt.textContent; 
                // }
              });group.value = $(key).next().find('select')[0].value;if (/star/.test($(key).next().find('select').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length > 1) {
              group.name = 'multi_select';group.selects = [];$(key).next().find('select').each(function (i, sel) {
                var selectGroup = {};var curOptvalue = sel.value;if (sel.nextSibling) {
                  selectGroup.selWord = sel.nextSibling.textContent.trim();
                }selectGroup.disabled = sel.disabled;selectGroup.readonly = sel.readOnly;selectGroup.optionsText = [];selectGroup.optionsValue = [];$(sel).children('option').each(function (i, opt) {
                  selectGroup.optionsValue.push(opt.value);selectGroup.optionsText.push(opt.textContent.trim());
                });selectGroup.value = sel.value;if ($(key).next().find('select').attr('must') == 'true' || /star/.test($(key).next().find('select').next('img').attr('src'))) {
                  selectGroup.needed = true;
                } else {
                  selectGroup.needed = false;
                }group.selects.push(selectGroup);
              });
            } else if ($(key).next().find('input[type="checkbox"]').length > 1) {
              group.name = 'multiCheckbox';group.checkboxes = [];$(key).next().find('input[type="checkbox"]').each(function (i, checkbox) {
                var chbObj = {};chbObj.checked = checkbox.checked;chbObj.value = checkbox.nextSibling.textContent.trim();chbObj.readOnly = checkbox.readOnly;chbObj.disabled = checkbox.disabled;group.checkboxes.push(chbObj);
              });
            } else if ($(key).next().find('input').length > 0 && $(key).next().find('input')[0].type === 'text' && $(key).next().find('input[type="button"]').length > 0) {
              group.name = 'inputButton';group.input = { type: 'text', value: $(key).next().find('input')[0].value, readOnly: $(key).next().find('input')[0].readOnly, disabled: $(key).next().find('input')[0].disabled };group.button = { type: 'button', value: $(key).next().find('input[type="button"]')[0].value, readOnly: $(key).next().find('input[type="button"]')[0].readOnly, disabled: $(key).next().find('input[type="button"]')[0].disabled };
            }data.groups.push(group);
          });
        }return data;
      }return '';
    },
    doAction_uiControl118_v69Wl2: function (data, elem) {
      if (data.eventType == 'changeInput') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];el.dispatchEvent(new Event('change'));el.value = value;
      }if (data.eventType == 'multiSelectChange') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var parentIdx = parseInt(data.dataCustom[2]);var el = $(elem).find('.RinghtTrYellow').eq(parentIdx)[0].nextElementSibling.querySelectorAll('select')[idx];el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType === 'clickOpenTree') {
        var idx = parseInt(data.dataCustom);$(elem).find('.RinghtTrYellow').eq(idx).next().find('input[type="button"]')[0].click();
      }
    },
    getTemplate_uiControl118_v69Wl2: function () {
      var selfTemplate = "var React = require('react');\nvar {MainCardMultiSelect} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCardMultiSelect customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCardMultiSelect = _require.MainCardMultiSelect;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCardMultiSelect, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control115_997tU6: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl119_qOTRfm: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl119_qOTRfm: function () {
      var selfTemplate = "var React = require('react');\nvar {MainCard} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control116_cuUf6k: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector('.titlebar')) {
          // table card 的标题
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        } else if (elem.querySelector('.titlebarHUI')) {
          data.cardTitle = elem.querySelector('.titlebarHUI').textContent.trim();
        }data.groups = [];if (elem.querySelectorAll('.RinghtTrYellow').length > 0) {
          // 判断 名称 是否存在
          $(elem).find('.RinghtTrYellow:visible').each(function (i, key) {
            // 循环名称
            var group = {}; // 定义一组 key-value
            group.key = key.textContent.trim();if ($(key).next().find('input[type="text"]').length > 0) {
              // 判断 key-value 组合中，value值的类型，若为 input
              group.name = 'input'; // 做标记
              group.value = $(key).next().find('input')[0].value;group.disabled = $(key).next().find('input')[0].disabled; // 获取对应属性 disabled
              group.readonly = $(key).next().find('input')[0].readOnly; // 获取对应属性 readonly
              if (/star/.test($(key).next().find('input ').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length == 1) {
              // 判断 key-value 组合中，value值的类型，若为 select
              group.name = 'select';var curOptvalue = $(key).next().find('select')[0].value;group.optionsText = [];group.optionsValue = [];$(key).next().find('select').children('option').each(function (i, opt) {
                group.optionsValue.push(opt.value);group.optionsText.push(opt.textContent.trim()); // if (opt.value == curOptvalue) {
                // group.value = opt.textContent; 
                // }
              });group.value = $(key).next().find('select')[0].value;if (/star/.test($(key).next().find('select').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length > 1) {
              group.name = 'multi_select';group.selects = [];$(key).next().find('select').each(function (i, sel) {
                var selectGroup = {};var curOptvalue = sel.value;if (sel.nextSibling) {
                  selectGroup.selWord = sel.nextSibling.textContent.trim();
                }selectGroup.optionsText = [];selectGroup.optionsValue = [];$(sel).children('option').each(function (i, opt) {
                  selectGroup.optionsValue.push(opt.value);selectGroup.optionsText.push(opt.textContent.trim());
                });selectGroup.value = sel.value;if (/star/.test($(key).next().find('select').next('img').attr('src'))) {
                  selectGroup.needed = true;
                } else {
                  selectGroup.needed = false;
                }group.selects.push(selectGroup);
              });
            } else if ($(key).next().find('input[type="checkbox"]').length > 1) {
              group.name = 'multiCheckbox';group.checkboxes = [];$(key).next().find('input[type="checkbox"]').each(function (i, checkbox) {
                var chbObj = {};chbObj.checked = checkbox.checked;chbObj.value = checkbox.nextSibling.textContent.trim();chbObj.readOnly = checkbox.readOnly;chbObj.disabled = checkbox.disabled;group.checkboxes.push(chbObj);
              });
            } else if ($(key).next().find('input').length > 0 && $(key).next().find('input')[0].type === 'text' && $(key).next().find('input[type="button"]').length > 0) {
              group.name = 'inputButton';group.input = { type: 'text', value: $(key).next().find('input')[0].value, readOnly: $(key).next().find('input')[0].readOnly, disabled: $(key).next().find('input')[0].disabled };group.button = { type: 'button', value: $(key).next().find('input[type="button"]')[0].value, readOnly: $(key).next().find('input[type="button"]')[0].readOnly, disabled: $(key).next().find('input[type="button"]')[0].disabled };
            }data.groups.push(group);
          });
        }return data;
      }return '';
    },
    doAction_uiControl120_SmRrxf: function (data, elem) {
      if (data.eventType == 'changeInput') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];el.dispatchEvent(new Event('change'));el.value = value;
      }if (data.eventType == 'multiSelectChange') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var parentIdx = parseInt(data.dataCustom[2]);var el = $(elem).find('.RinghtTrYellow').eq(parentIdx)[0].nextElementSibling.querySelectorAll('select')[idx];el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType === 'clickOpenTree') {
        var idx = parseInt(data.dataCustom);$(elem).find('.RinghtTrYellow').eq(idx).next().find('input[type="button"]')[0].click();
      }
    },
    getTemplate_uiControl120_SmRrxf: function () {
      var selfTemplate = "var React = require('react');\nvar {MainCardMultiSelect} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCardMultiSelect customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCardMultiSelect = _require.MainCardMultiSelect;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCardMultiSelect, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control117_izMMDx: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl121_HuKyu0: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl121_HuKyu0: function () {
      var selfTemplate = "var React = require('react');\nvar {MainCard} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_undefined: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector('.titlebar')) {
          // table card 的标题
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }data.groups = [];if (elem.querySelectorAll('.RinghtTrYellow').length > 0) {
          // 判断 名称 是否存在
          $(elem).find('.RinghtTrYellow:visible').each(function (i, key) {
            // 循环名称
            var group = {}; // 定义一组 key-value
            group.key = key.textContent.trim();if ($(key).next().find('input[type="text"]').length > 0) {
              // 判断 key-value 组合中，value值的类型，若为 input
              group.name = 'input'; // 做标记
              group.value = $(key).next().find('input')[0].value;group.disabled = $(key).next().find('input')[0].disabled; // 获取对应属性 disabled
              group.readonly = $(key).next().find('input')[0].readOnly; // 获取对应属性 readonly
              if ($(key).next().find('input').attr('must') == 'true' || /star/.test($(key).next().find('input ').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length == 1) {
              // 判断 key-value 组合中，value值的类型，若为 select
              group.name = 'select';var curOptvalue = $(key).next().find('select')[0].value;group.optionsText = [];group.optionsValue = [];$(key).next().find('select').children('option').each(function (i, opt) {
                group.optionsValue.push(opt.value);group.optionsText.push(opt.textContent.trim()); // if (opt.value == curOptvalue) {
                // group.value = opt.textContent; 
                // }
              });group.value = $(key).next().find('select')[0].value;if ($(key).next().find('select').attr('must') == 'true' || /star/.test($(key).next().find('select').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length > 1) {
              group.name = 'multi_select';group.selects = [];$(key).next().find('select').each(function (i, sel) {
                var selectGroup = {};var curOptvalue = sel.value;if (sel.nextSibling) {
                  selectGroup.selWord = sel.nextSibling.textContent.trim();
                }selectGroup.optionsText = [];selectGroup.optionsValue = [];$(sel).children('option').each(function (i, opt) {
                  selectGroup.optionsValue.push(opt.value);selectGroup.optionsText.push(opt.textContent.trim());
                });selectGroup.value = sel.value;if ($(key).next().find('select').attr('must') == 'true' || /star/.test($(key).next().find('select').next('img').attr('src'))) {
                  selectGroup.needed = true;
                } else {
                  selectGroup.needed = false;
                }group.selects.push(selectGroup);
              });
            } else if ($(key).next().find('input[type="checkbox"]').length > 1) {
              group.name = 'multiCheckbox';group.checkboxes = [];$(key).next().find('input[type="checkbox"]').each(function (i, checkbox) {
                var chbObj = {};chbObj.checked = checkbox.checked;chbObj.value = checkbox.nextSibling.textContent.trim();chbObj.readOnly = checkbox.readOnly;chbObj.disabled = checkbox.disabled;group.checkboxes.push(chbObj);
              });
            } else if ($(key).next().find('input').length > 0 && $(key).next().find('input')[0].type === 'text' && $(key).next().find('input[type="button"]').length > 0) {
              group.name = 'inputButton';group.input = { type: 'text', value: $(key).next().find('input')[0].value, readOnly: $(key).next().find('input')[0].readOnly, disabled: $(key).next().find('input')[0].disabled };group.button = { type: 'button', value: $(key).next().find('input[type="button"]')[0].value, readOnly: $(key).next().find('input[type="button"]')[0].readOnly, disabled: $(key).next().find('input[type="button"]')[0].disabled };
            }data.groups.push(group);
          });
        }return data;
      }return '';
    },
    doAction_: function (data, elem) {},
    getTemplate_: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91\"\n    );\n  }\n});";
    },
    getData_control118_HiyDrS: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector('.titlebar')) {
          // table card 的标题
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        } else if (elem.querySelector('.titlebarHUI')) {
          data.cardTitle = elem.querySelector('.titlebarHUI').textContent.trim();
        }data.groups = [];if (elem.querySelectorAll('.RinghtTrYellow').length > 0) {
          // 判断 名称 是否存在
          $(elem).find('.RinghtTrYellow:visible').each(function (i, key) {
            // 循环名称
            var group = {}; // 定义一组 key-value
            group.key = key.textContent.trim();if ($(key).next().find('input[type="text"]').length > 0) {
              // 判断 key-value 组合中，value值的类型，若为 input
              group.name = 'input'; // 做标记
              group.value = $(key).next().find('input')[0].value;group.disabled = $(key).next().find('input')[0].disabled; // 获取对应属性 disabled
              group.readonly = $(key).next().find('input')[0].readOnly; // 获取对应属性 readonly
              if (/star/.test($(key).next().find('input ').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length == 1) {
              // 判断 key-value 组合中，value值的类型，若为 select
              group.name = 'select';var curOptvalue = $(key).next().find('select')[0].value;group.optionsText = [];group.optionsValue = [];$(key).next().find('select').children('option').each(function (i, opt) {
                group.optionsValue.push(opt.value);group.optionsText.push(opt.textContent.trim()); // if (opt.value == curOptvalue) {
                // group.value = opt.textContent; 
                // }
              });group.value = $(key).next().find('select')[0].value;if (/star/.test($(key).next().find('select').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length > 1) {
              group.name = 'multi_select';group.selects = [];$(key).next().find('select').each(function (i, sel) {
                var selectGroup = {};var curOptvalue = sel.value;if (sel.nextSibling) {
                  selectGroup.selWord = sel.nextSibling.textContent.trim();
                }selectGroup.optionsText = [];selectGroup.optionsValue = [];$(sel).children('option').each(function (i, opt) {
                  selectGroup.optionsValue.push(opt.value);selectGroup.optionsText.push(opt.textContent.trim());
                });selectGroup.value = sel.value;if (/star/.test($(key).next().find('select').next('img').attr('src'))) {
                  selectGroup.needed = true;
                } else {
                  selectGroup.needed = false;
                }group.selects.push(selectGroup);
              });
            } else if ($(key).next().find('input[type="checkbox"]').length > 1) {
              group.name = 'multiCheckbox';group.checkboxes = [];$(key).next().find('input[type="checkbox"]').each(function (i, checkbox) {
                var chbObj = {};chbObj.checked = checkbox.checked;chbObj.value = checkbox.nextSibling.textContent.trim();chbObj.readOnly = checkbox.readOnly;chbObj.disabled = checkbox.disabled;group.checkboxes.push(chbObj);
              });
            } else if ($(key).next().find('input').length > 0 && $(key).next().find('input')[0].type === 'text' && $(key).next().find('input[type="button"]').length > 0) {
              group.name = 'inputButton';group.input = { type: 'text', value: $(key).next().find('input')[0].value, readOnly: $(key).next().find('input')[0].readOnly, disabled: $(key).next().find('input')[0].disabled };group.button = { type: 'button', value: $(key).next().find('input[type="button"]')[0].value, readOnly: $(key).next().find('input[type="button"]')[0].readOnly, disabled: $(key).next().find('input[type="button"]')[0].disabled };
            }data.groups.push(group);
          });
        }return data;
      }return '';
    },
    doAction_uiControl122_zv3ITA: function (data, elem) {
      if (data.eventType == 'changeInput') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];el.dispatchEvent(new Event('change'));el.value = value;
      }if (data.eventType == 'multiSelectChange') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var parentIdx = parseInt(data.dataCustom[2]);var el = $(elem).find('.RinghtTrYellow').eq(parentIdx)[0].nextElementSibling.querySelectorAll('select')[idx];el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType === 'clickOpenTree') {
        var idx = parseInt(data.dataCustom);$(elem).find('.RinghtTrYellow').eq(idx).next().find('input[type="button"]')[0].click();
      }
    },
    getTemplate_uiControl122_zv3ITA: function () {
      var selfTemplate = "var React = require('react');\nvar {MainCardMultiSelect} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCardMultiSelect customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCardMultiSelect = _require.MainCardMultiSelect;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCardMultiSelect, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control119_8yhTgs: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector('.titlebar')) {
          // table card 的标题
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        } else if (elem.querySelector('.titlebarHUI')) {
          data.cardTitle = elem.querySelector('.titlebarHUI').textContent.trim();
        }data.groups = [];if (elem.querySelectorAll('.RinghtTrYellow').length > 0) {
          // 判断 名称 是否存在
          $(elem).find('.RinghtTrYellow:visible').each(function (i, key) {
            // 循环名称
            var group = {}; // 定义一组 key-value
            group.key = key.textContent.trim();if ($(key).next().find('input[type="text"]').length > 0) {
              // 判断 key-value 组合中，value值的类型，若为 input
              group.name = 'input'; // 做标记
              group.value = $(key).next().find('input')[0].value;group.disabled = $(key).next().find('input')[0].disabled; // 获取对应属性 disabled
              group.readonly = $(key).next().find('input')[0].readOnly; // 获取对应属性 readonly
              if ($(key).next().find('input').attr('must') == 'true' || /star/.test($(key).next().find('input ').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length == 1) {
              // 判断 key-value 组合中，value值的类型，若为 select
              group.name = 'select';var curOptvalue = $(key).next().find('select')[0].value;group.optionsText = [];group.optionsValue = [];$(key).next().find('select').children('option').each(function (i, opt) {
                group.optionsValue.push(opt.value);group.optionsText.push(opt.textContent.trim()); // if (opt.value == curOptvalue) {
                // group.value = opt.textContent; 
                // }
              });group.value = $(key).next().find('select')[0].value;if ($(key).next().find('select').attr('must') == 'true' || /star/.test($(key).next().find('select').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length > 1) {
              group.name = 'multi_select';group.selects = [];$(key).next().find('select').each(function (i, sel) {
                var selectGroup = {};var curOptvalue = sel.value;if (sel.nextSibling) {
                  selectGroup.selWord = sel.nextSibling.textContent.trim();
                }selectGroup.optionsText = [];selectGroup.optionsValue = [];$(sel).children('option').each(function (i, opt) {
                  selectGroup.optionsValue.push(opt.value);selectGroup.optionsText.push(opt.textContent.trim());
                });selectGroup.value = sel.value;if ($(key).next().find('select').attr('must') == 'true' || /star/.test($(key).next().find('select').next('img').attr('src'))) {
                  selectGroup.needed = true;
                } else {
                  selectGroup.needed = false;
                }group.selects.push(selectGroup);
              });
            } else if ($(key).next().find('input[type="checkbox"]').length > 1) {
              group.name = 'multiCheckbox';group.checkboxes = [];$(key).next().find('input[type="checkbox"]').each(function (i, checkbox) {
                var chbObj = {};chbObj.checked = checkbox.checked;chbObj.value = checkbox.nextSibling.textContent.trim();chbObj.readOnly = checkbox.readOnly;chbObj.disabled = checkbox.disabled;group.checkboxes.push(chbObj);
              });
            } else if ($(key).next().find('input').length > 0 && $(key).next().find('input')[0].type === 'text' && $(key).next().find('input[type="button"]').length > 0) {
              group.name = 'inputButton';group.input = { type: 'text', value: $(key).next().find('input')[0].value, readOnly: $(key).next().find('input')[0].readOnly, disabled: $(key).next().find('input')[0].disabled };group.button = { type: 'button', value: $(key).next().find('input[type="button"]')[0].value, readOnly: $(key).next().find('input[type="button"]')[0].readOnly, disabled: $(key).next().find('input[type="button"]')[0].disabled };
            }data.groups.push(group);
          });
        }return data;
      }return '';
    },
    doAction_uiControl123_Qpphif: function (data, elem) {
      if (data.eventType == 'changeInput') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];el.dispatchEvent(new Event('change'));el.value = value;
      }if (data.eventType == 'multiSelectChange') {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var parentIdx = parseInt(data.dataCustom[2]);var el = $(elem).find('.RinghtTrYellow').eq(parentIdx)[0].nextElementSibling.querySelectorAll('select')[idx];el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType === 'clickOpenTree') {
        var idx = parseInt(data.dataCustom);$(elem).find('.RinghtTrYellow').eq(idx).next().find('input[type="button"]')[0].click();
      }
    },
    getTemplate_uiControl123_Qpphif: function () {
      var selfTemplate = "var React = require('react');\nvar {MainCardMultiSelect} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCardMultiSelect customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCardMultiSelect = _require.MainCardMultiSelect;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCardMultiSelect, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control120_o4t2ZB: function (elem) {
      if (elem) {
        return elem.textContent.trim();
      }return '';
    },
    doAction_uiControl124_Mucm4a: function (data, elem) {
      if (data.eventType === 'btnClick') {
        if (elem) {
          elem.click();
        }
      }
    },
    getTemplate_uiControl124_Mucm4a: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'btnClick'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data !== ''){\n      return (\n        <div className='signBottomBtn'>\n\t\t\t\t\t<span onClick={me.handleClick} className='btn btn-block'>{data}</span>\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'btnClick'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== '') {\n      return React.createElement(\n        'div',\n        { className: 'signBottomBtn' },\n        React.createElement(\n          'span',\n          { onClick: me.handleClick, className: 'btn btn-block' },\n          data\n        )\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },
    getData_control121_WtFxI4: function (elem) {
      if (elem) {
        var data = {};if ($(elem).find('.ui-dialog-title').length > 0) {
          data.title = $(elem).find('.ui-dialog-title')[0].textContent.trim();
        }if ($(elem).find('.ui-dialog-close').length > 0) {
          data.closeBtn = $(elem).find('.ui-dialog-close')[0].textContent.trim();
        }if ($(elem).find('.ui-dialog-content').length > 0) {
          data.content = $(elem).find('.ui-dialog-content')[0].textContent.trim();
        }if ($(elem).find('.ui-dialog-button button').length > 0) {
          var btns = [];$(elem).find('.ui-dialog-button button').each(function (i, btn) {
            btns.push(btn.textContent.trim());
          });data.button = btns;
        }return data;
      }return '';
    },
    doAction_uiControl125_Ds0hXp: function (data, elem) {
      if (data.eventType === 'closeDialog') {
        $(elem).find('.ui-dialog-close')[0].click();
      } else if (data.eventType === 'btnClick') {
        var idx = parseInt(data.dataCustom);$(elem).find('.ui-dialog-button button').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl125_Ds0hXp: function () {
      var selfTemplate = "module.exports = React.createClass({\n  clickClose: function(e){\n    this.handleEvents('closeDialog','');\n  },\n  handleClick: function(e){\n    this.handleEvents('btnClick',e.target.getAttribute('data-index'));\n  },\n\thandleEvents: function(type,data){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: type,\n        data: data\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data !== '' && data.content){\n      var btns;\n      if(data.button && data.button.length > 0){\n        btns = data.button.map(function(btn,i){\n          if(data.button.length ===1){\n            return (<span className='btn' style={{backgroundColor:'#d9534f',color:'#fff'}} onClick={me.handleClick} data-index={i}>{btn}</span>)\n          }else{\n          \treturn (<span className='btn' onClick={me.handleClick} data-index={i}>{btn}</span>)\n          }\n        })\n      }\n      return (\n        <div className='dialog'>\n          <div className='dialogCont'>\n            <header>\n              <span>{data.title?data.title:''}</span>\n              <span onClick={me.clickClose} className='dialogClose'>{\n                  data.closeBtn?data.closeBtn:'\xD7'\n                }</span>\n            </header>\n            <section>{data.content?data.content:''}</section>\n            <footer>\n              {btns?btns:''}\n            </footer>\n          </div>\n        </div>\n      )\n    }else{\n\t\t\treturn (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  clickClose: function clickClose(e) {\n    this.handleEvents('closeDialog', '');\n  },\n  handleClick: function handleClick(e) {\n    this.handleEvents('btnClick', e.target.getAttribute('data-index'));\n  },\n  handleEvents: function handleEvents(type, data) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== '' && data.content) {\n      var btns;\n      if (data.button && data.button.length > 0) {\n        btns = data.button.map(function (btn, i) {\n          if (data.button.length === 1) {\n            return React.createElement(\n              'span',\n              { className: 'btn', style: { backgroundColor: '#d9534f', color: '#fff' }, onClick: me.handleClick, 'data-index': i },\n              btn\n            );\n          } else {\n            return React.createElement(\n              'span',\n              { className: 'btn', onClick: me.handleClick, 'data-index': i },\n              btn\n            );\n          }\n        });\n      }\n      return React.createElement(\n        'div',\n        { className: 'dialog' },\n        React.createElement(\n          'div',\n          { className: 'dialogCont' },\n          React.createElement(\n            'header',\n            null,\n            React.createElement(\n              'span',\n              null,\n              data.title ? data.title : ''\n            ),\n            React.createElement(\n              'span',\n              { onClick: me.clickClose, className: 'dialogClose' },\n              data.closeBtn ? data.closeBtn : '\xD7'\n            )\n          ),\n          React.createElement(\n            'section',\n            null,\n            data.content ? data.content : ''\n          ),\n          React.createElement(\n            'footer',\n            null,\n            btns ? btns : ''\n          )\n        )\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },
    getData_control122_2dDKGl: function (elem) {
      if (elem) {
        var data = {};data.info = [];data.btns = [];if ($(elem).find('.profile .itm').length > 0) {
          $(elem).find('.profile .itm').each(function (i, item) {
            var title, value;if ($(item).find('.tit').length > 0) {
              title = $(item).find('.tit')[0].textContent.trim();
            }if ($(item).find('input:visible').length > 0) {
              value = { inputVal: $(item).find('input:visible')[0].value, inputId: $(item).find('input:visible')[0].id, inputPH: $(item).find('input:visible')[0].placeholder, inputType: $(item).find('input:visible')[0].type, // btnVal: item.querySelector('button') ? item.querySelector('button').textContent.trim() : void 0,
                btnId: item.querySelector('button') ? item.querySelector('button').id : '' };
            }data.info.push({ key: title, value: value });
          });
        }if ($(elem).find('.buttonDiv input[type="button"]:visible').length > 0) {
          $(elem).find('.buttonDiv input[onclick]:visible').each(function (i, btn) {
            data.btns.push(btn.value);
          });
        }return data;
      }return '';
    },
    doAction_uiControl126_AkkQ2c: function (data, elem) {
      if (data.eventType === 'inputChange') {
        var id = data.dataCustom[0];var value = data.dataCustom[1];var el = elem.querySelector('#' + id);if (el) {
          el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
        }
      } else if (data.eventType === 'msgClick') {
        var id = data.dataCustom;elem.querySelector('#' + id) && elem.querySelector('#' + id).click();
      } else if (data.eventType === 'btnClick') {
        var idx = parseInt(data.dataCustom);$(elem).find('.buttonDiv input[onclick]:visible').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl126_AkkQ2c: function () {
      var selfTemplate = "module.exports = React.createClass({\n  getInitialState:function(){\n    return ({\n      codeValue: \"\",\n      codeState: true\n    })\n  },\n  componentDidUpdate:function(){\n    // var data = this.props.customData;\n    // if(data && data.info && data.info.length>0){\n    //   var _value=data.info[1].value.inputVal;\n    //   this.setState({\n    //     codeValue:this.state.codeValue!==_value?_value:this.state.codeValue\n    //   })\n    // }\n  },\n  handleInput: function(e){\n    e.target.scrollIntoView();\n    this.handleEvents('inputChange',[e.target.id,e.target.value]);\n    this.setState({\n      codeValue:e.target.value\n    })\n  },\n  // toggleCode: function(e){\n  //   this.handleEvents('msgClick',e.target.id);\n  //   var target = e.target;\n  //   if(target.className === 'code'){\n  //     target.children[0].style.display = target.children[0].style.display!=='none'?'none':'inline-block';\n  //     target.children[1].style.display = target.children[1].style.display!=='none'?'none':'inline-block';\n  //   }\n  // },\n  handleMsg: function(e){\n    \n    this.handleEvents('msgClick',e.target.id);\n    var target = e.target;\n    var timerCode = target.nextElementSibling;\n    if(target){\n      target.style.display = 'none';\n      if(timerCode.id === 'timerCode'){\n        timerCode.style.display = 'inline-block';\n      }\n      var i = 60;\n      var timer = setInterval(function(){\n        timerCode.innerHTML = (i--)+ '\u79D2\u540E\u91CD\u53D1';\n        if(i <= 0){\n          timerCode.innerHTML = '60\u79D2\u540E\u91CD\u53D1';\n          timerCode.style.display = 'none';\n          target.style.display = 'inline-block';\n          clearInterval(timer);\n        }\n      },1000);\n    }\n  },\n  handleBtn: function(e){\n    this.handleEvents('btnClick',e.target.getAttribute('data-index'));\n  },\n  handleEvents: function(type,data){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: type,\n        data: data\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    console.log(data);\n    var me = this;\n    if(data && data !== '' && data.info && data.btns){\n      var info,btns;\n      info = data.info.map(function(li,i){\n        return (\n          <div>\n          \t<div className='key'>{li.key}</div>\n            <div className='value'>\n              {\n                // i===1?me.state.codeValue:''\n            \t\tli.value? <AInput onBlur={me.handleInput} value={li.value.inputVal} type={li.value.inputType?li.value.inputType:''}  placeholder={li.value.inputPH?li.value.inputPH:''} id={li.value.inputId?li.value.inputId:''} /> :''\n            \t}\n              {\n                // li.value.btnVal ? <button onClick={me.handleMsg} className='btn' id={li.value.btnId}>\u83B7\u53D6\u9A8C\u8BC1\u7801</button>:''\n                i==1 ? <div className='code'><button onClick={me.handleMsg} className='btn' style={{display:'inline-block'}} id={li.value.btnId}>\u83B7\u53D6\u77ED\u4FE1\u9A8C\u8BC1\u7801</button><button id='timerCode' className='btn' style={{display:'none'}}>60\u79D2\u540E\u91CD\u53D1</button></div>:''\n              }\n            </div>\n          </div>\n        )\n      })\n      btns = data.btns.map(function(btn,i){\n        return (<span onClick={me.handleBtn} className='btn' data-index={i}>{btn}</span>)\n      })\n      return (\n        <div className='dialog codeMsg' ref=\"phoneCodeSection\">\n          <div className='dialogCont'>\n            <section>{info?info:''}</section>\n            <footer>{btns?btns:''}</footer>\n          </div>\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  getInitialState: function getInitialState() {\n    return {\n      codeValue: \"\",\n      codeState: true\n    };\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    // var data = this.props.customData;\n    // if(data && data.info && data.info.length>0){\n    //   var _value=data.info[1].value.inputVal;\n    //   this.setState({\n    //     codeValue:this.state.codeValue!==_value?_value:this.state.codeValue\n    //   })\n    // }\n  },\n  handleInput: function handleInput(e) {\n    e.target.scrollIntoView();\n    this.handleEvents('inputChange', [e.target.id, e.target.value]);\n    this.setState({\n      codeValue: e.target.value\n    });\n  },\n  // toggleCode: function(e){\n  //   this.handleEvents('msgClick',e.target.id);\n  //   var target = e.target;\n  //   if(target.className === 'code'){\n  //     target.children[0].style.display = target.children[0].style.display!=='none'?'none':'inline-block';\n  //     target.children[1].style.display = target.children[1].style.display!=='none'?'none':'inline-block';\n  //   }\n  // },\n  handleMsg: function handleMsg(e) {\n\n    this.handleEvents('msgClick', e.target.id);\n    var target = e.target;\n    var timerCode = target.nextElementSibling;\n    if (target) {\n      target.style.display = 'none';\n      if (timerCode.id === 'timerCode') {\n        timerCode.style.display = 'inline-block';\n      }\n      var i = 60;\n      var timer = setInterval(function () {\n        timerCode.innerHTML = i-- + '\u79D2\u540E\u91CD\u53D1';\n        if (i <= 0) {\n          timerCode.innerHTML = '60\u79D2\u540E\u91CD\u53D1';\n          timerCode.style.display = 'none';\n          target.style.display = 'inline-block';\n          clearInterval(timer);\n        }\n      }, 1000);\n    }\n  },\n  handleBtn: function handleBtn(e) {\n    this.handleEvents('btnClick', e.target.getAttribute('data-index'));\n  },\n  handleEvents: function handleEvents(type, data) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    console.log(data);\n    var me = this;\n    if (data && data !== '' && data.info && data.btns) {\n      var info, btns;\n      info = data.info.map(function (li, i) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'key' },\n            li.key\n          ),\n          React.createElement(\n            'div',\n            { className: 'value' },\n\n            // i===1?me.state.codeValue:''\n            li.value ? React.createElement(AInput, { onBlur: me.handleInput, value: li.value.inputVal, type: li.value.inputType ? li.value.inputType : '', placeholder: li.value.inputPH ? li.value.inputPH : '', id: li.value.inputId ? li.value.inputId : '' }) : '',\n\n            // li.value.btnVal ? <button onClick={me.handleMsg} className='btn' id={li.value.btnId}>\u83B7\u53D6\u9A8C\u8BC1\u7801</button>:''\n            i == 1 ? React.createElement(\n              'div',\n              { className: 'code' },\n              React.createElement(\n                'button',\n                { onClick: me.handleMsg, className: 'btn', style: { display: 'inline-block' }, id: li.value.btnId },\n                '\\u83B7\\u53D6\\u77ED\\u4FE1\\u9A8C\\u8BC1\\u7801'\n              ),\n              React.createElement(\n                'button',\n                { id: 'timerCode', className: 'btn', style: { display: 'none' } },\n                '60\\u79D2\\u540E\\u91CD\\u53D1'\n              )\n            ) : ''\n          )\n        );\n      });\n      btns = data.btns.map(function (btn, i) {\n        return React.createElement(\n          'span',\n          { onClick: me.handleBtn, className: 'btn', 'data-index': i },\n          btn\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'dialog codeMsg', ref: 'phoneCodeSection' },\n        React.createElement(\n          'div',\n          { className: 'dialogCont' },\n          React.createElement(\n            'section',\n            null,\n            info ? info : ''\n          ),\n          React.createElement(\n            'footer',\n            null,\n            btns ? btns : ''\n          )\n        )\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },
    getData_control123_frpILM: function (elem) {
      if (elem) {
        return elem.outerHTML;
      }return '';
    },
    doAction_uiControl127_GaVfFW: function (data, elem) {},
    getTemplate_uiControl127_GaVfFW: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== ''){\n      return (\n        <div className='contractCont' dangerouslySetInnerHTML={{__html:data}}>\n        </div>\n      )\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== '') {\n      return React.createElement('div', { className: 'contractCont', dangerouslySetInnerHTML: { __html: data } });\n    }\n  }\n});";
    },
    getData_control124_ozrwKg: function (elem) {
      if (elem) {
        var data = {};data.signBtn = elem.textContent.trim();var doc_d = elem.ownerDocument;if ($(doc_d).find("#contract").find("#signature").find(".draggable").find("img[src]").length > 0) {
          data.baseImg = $(doc_d).find("#contract").find("#signature").find(".draggable").find("img[src]")[0].src;
        }return data;
      }return '';
    },
    doAction_uiControl128_omdWH2: function (data, elem) {
      if (data.eventType === 'signClick') {
        elem.click();
      }
    },
    getTemplate_uiControl128_omdWH2: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'signClick'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    // alert('00');\n    if(data && data !== ''){\n      return (\n        <div id='signatureSection' ref='signatureSection'>\n          <img id=\"base64signature\" src={data.baseImg}/>\n          <div className='signBtn' onClick={me.handleClick}><i></i>{data.signBtn}</div>\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'signClick'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    // alert('00');\n    if (data && data !== '') {\n      return React.createElement(\n        'div',\n        { id: 'signatureSection', ref: 'signatureSection' },\n        React.createElement('img', { id: 'base64signature', src: data.baseImg }),\n        React.createElement(\n          'div',\n          { className: 'signBtn', onClick: me.handleClick },\n          React.createElement('i', null),\n          data.signBtn\n        )\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },

    getData_control137_AZMadO: function (elem) {
      if (elem) {
        return elem.value.trim();
      }return '';
    },
    doAction_uiControl142_uO3m1u: function (data, elem) {
      if (elem && data.eventType === 'btnClick') {
        elem.click();
      }
    },
    getTemplate_uiControl142_uO3m1u: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'btnClick'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== ''){\n      return (\n        <div style={{textAlign:'right'}}>\n          <span style={{borderRadius:'5px'}} onClick={this.handleClick} className='btn'>{data}</span>\n        </div>\n      )\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'btnClick'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== '') {\n      return React.createElement(\n        'div',\n        { style: { textAlign: 'right' } },\n        React.createElement(\n          'span',\n          { style: { borderRadius: '5px' }, onClick: this.handleClick, className: 'btn' },\n          data\n        )\n      );\n    }\n  }\n});";
    },
    getData_control132_Xn26N9: function (elem) {
      if (elem) {
        var data = [];$(elem).find('input[type="button"]').each(function (i, btn) {
          data.push(btn.value);
        });return data;
      }return '';
    },
    doAction_uiControl130_hXRFkm: function (data, elem) {
      if (data.eventType === 'btnClick') {
        var idx = parseInt(data.dataCustom);$(elem).find('input[type="button"]').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl130_hXRFkm: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'btnClick',\n        data: e.target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== '' && data.length > 0){\n      var me = this;\n      return (\n        <div className='checkContractBtns'>\n          {\n            data.map(function(btn,i){\n              return (\n              \t<span onClick={me.handleClick} data-index={i} className='btn'>{btn}</span>\n              )\n            })\n          }\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'btnClick',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== '' && data.length > 0) {\n      var me = this;\n      return React.createElement(\n        'div',\n        { className: 'checkContractBtns' },\n        data.map(function (btn, i) {\n          return React.createElement(\n            'span',\n            { onClick: me.handleClick, 'data-index': i, className: 'btn' },\n            btn\n          );\n        })\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },
    getData_control149_1mnrse: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector('.titlebar')) {
          // table card 的标题
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }if (elem.querySelectorAll(".titlebarHUI").length > 0) {
          data.thead = [];var thead = elem.querySelectorAll(".titlebarHUI");for (var i = 0; i < thead.length; i++) {
            data.thead.push(thead[i].textContent.trim());
          }
        }if ($(elem).find("tr[onclick]").length > 0) {
          data.tbody = [];$(elem).find("tr[onclick]").each(function (i, tr) {
            var trs = [];$(tr).children("td").each(function (i, td) {
              if ($(td).find("input[type='button']").length === 1) {
                trs.push(td.querySelector("input").value);
              } else {
                trs.push(td.textContent);
              }
            });data.tbody.push(trs);
          });
        }return data;
      }return "";
    },
    doAction_uiControl158_dCsWzB: function (data, elem) {
      if (data.eventType === "confirmSignClick") {
        var idx = parseInt(data.dataCustom);$(elem).find("tr[onclick]").eq(idx).find("input[type='button']").click();
      }
    },
    getTemplate_uiControl158_dCsWzB: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(e.target.localName == 'td'){\n      e.target = e.target.parentElement;\n    }\n    if(handler){\n      handler({\n        eventType: 'confirmSignClick',\n        data: e.target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data!==''){\n      if(data.tbody && data.thead){\n        if(data.thead.length > 0){\n          var tableHead = data.thead.map(function(th,i){\n            return (\n            \t<th>{th}</th>\n            )\n          })\n          if(data.tbody.length > 0){\n            var tableList = data.tbody.map(function(tr,i){\n              var tableLi = tr.map(function(td,i){\n                return (\n                  <td onClick={i===data.thead.length-1 ? me.handleClick : \"\"} className={i===data.thead.length-1 ? \"confirmSignBtn\" : \"\"}>\n                    {td}\n                  </td>\n                )\n              })\n              return (\n                <tr data-index={i}>\n                  {tableLi}\n                </tr>\n              )\n            })\n          }\n        }\n      }else{\n        var tableHead = data.info?data.info:'\u65E0\u6570\u636E\uFF01';\n        var tableList = '';\n      }\n      return (\n        <div className='tableContainer' style={{paddingTop:\"15px\",borderTop:\"1px solid #ddd\"}}>\n          <div className='cardTitle'>{data.cardTitle?data.cardTitle:''}</div>\n          <div className='StandardTable'>\n            <table>\n              <thead><tr>{tableHead}</tr></thead>\n              <tbody>{tableList}</tbody>\n            </table>\n          </div>\n        </div>\n      )\n    }else{\n\t\t\treturn (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (e.target.localName == 'td') {\n      e.target = e.target.parentElement;\n    }\n    if (handler) {\n      handler({\n        eventType: 'confirmSignClick',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== '') {\n      if (data.tbody && data.thead) {\n        if (data.thead.length > 0) {\n          var tableHead = data.thead.map(function (th, i) {\n            return React.createElement(\n              'th',\n              null,\n              th\n            );\n          });\n          if (data.tbody.length > 0) {\n            var tableList = data.tbody.map(function (tr, i) {\n              var tableLi = tr.map(function (td, i) {\n                return React.createElement(\n                  'td',\n                  { onClick: i === data.thead.length - 1 ? me.handleClick : \"\", className: i === data.thead.length - 1 ? \"confirmSignBtn\" : \"\" },\n                  td\n                );\n              });\n              return React.createElement(\n                'tr',\n                { 'data-index': i },\n                tableLi\n              );\n            });\n          }\n        }\n      } else {\n        var tableHead = data.info ? data.info : '\u65E0\u6570\u636E\uFF01';\n        var tableList = '';\n      }\n      return React.createElement(\n        'div',\n        { className: 'tableContainer', style: { paddingTop: \"15px\", borderTop: \"1px solid #ddd\" } },\n        React.createElement(\n          'div',\n          { className: 'cardTitle' },\n          data.cardTitle ? data.cardTitle : ''\n        ),\n        React.createElement(\n          'div',\n          { className: 'StandardTable' },\n          React.createElement(\n            'table',\n            null,\n            React.createElement(\n              'thead',\n              null,\n              React.createElement(\n                'tr',\n                null,\n                tableHead\n              )\n            ),\n            React.createElement(\n              'tbody',\n              null,\n              tableList\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    }
  });
})(window, ysp);