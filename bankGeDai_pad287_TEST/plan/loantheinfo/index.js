(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control102_Js6MFw: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl101_Omc97m: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1]; // debugger;
      var el = $(elem).find('.RinghtTrword').eq(idx)[0].children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.value = value;el.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl101_Omc97m: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },

    getData_control138_3ggkhF: function (elem) {
      if (elem) {
        return '贷款月供试算器';
      }return '';
    },
    doAction_uiControl144_9syXSV: function (data, elem) {
      if (data.eventType === 'clickToClose') {
        try {
          ysp.appMain.getActiveWindow().close();
        } catch (e) {
          var win_d = elem.ownerDocument.defaultView;win_d.close();
        }ysp.appMain.showLoading();
      }if (data.eventType === 'click') {
        elem.querySelector('input[name="btnSav"]').click();
      }
    },
    getTemplate_uiControl144_9syXSV: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component{\n  handleClick (e){\n    var handler = this.props.customHandler;\n    handler({\n      eventType: 'click'\n    })\n  }\n  clickToClose (e){\n    var handler = this.props.customHandler;\n    if(handler){\n\t\t\thandler({\n        eventType: 'clickToClose'\n      })\n    }\n  }\n  render (){\n    var me = this;\n    \treturn(\n        <div style={{height:'10vh'}}>\n          <Header className='backHeader' amStyle=\"primary\" title={this.props.customData}>\n            <HeaderLeft>\n            <AMUI.Button amStyle=\"primary\" onClick={this.clickToClose.bind(this)}><b className='icon\ticon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n            </HeaderLeft>\n            <span onClick={me.handleClick.bind(this)} className='icon icon-check'  amStyle=\"primary\" style={{position:'absolute',right:'15px',top:'0',bottom:'0',display:'flex',alignItems:'center'}}></span>\n          </Header>\n        </div>\n    )\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handleClick',\n    value: function handleClick(e) {\n      var handler = this.props.customHandler;\n      handler({\n        eventType: 'click'\n      });\n    }\n  }, {\n    key: 'clickToClose',\n    value: function clickToClose(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickToClose'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var me = this;\n      return React.createElement(\n        'div',\n        { style: { height: '10vh' } },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { className: 'backHeader', amStyle: 'primary', title: this.props.customData },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.clickToClose.bind(this) },\n              React.createElement('b', { className: 'icon\\ticon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          ),\n          React.createElement('span', { onClick: me.handleClick.bind(this), className: 'icon icon-check', amStyle: 'primary', style: { position: 'absolute', right: '15px', top: '0', bottom: '0', display: 'flex', alignItems: 'center' } })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);