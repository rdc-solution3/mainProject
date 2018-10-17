(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control136_qeOf5u: function (elem) {
      if (elem) {
        var fragment = document.createElement('div');var domain = elem.ownerDocument.defaultView.location.origin;fragment.innerHTML = elem.innerHTML; // 移除打印和回到顶部
        if ($(fragment).find('.icon-print').length > 0) {
          $(fragment).find('.icon-print').parent().remove();
        }if ($(fragment).find('img').length > 0) {
          $(fragment).find('img').each(function (i, img) {
            if (/^\//.test(img.getAttribute('src'))) {
              img.src = domain + img.getAttribute('src');
            }
          });
        }return { url: domain, html: fragment.innerHTML };
      }return '';
    }, doAction_uiControl141_Uoy3ES: function (data, elem) {},
    getTemplate_uiControl141_Uoy3ES: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== \'\'){\n      return (\n        <div className=\'signContractPage\'>\n          <div dangerouslySetInnerHTML={{__html:data.html}}></div>\n        </div>\n      )\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== \'\') {\n      return React.createElement(\n        \'div\',\n        { className: \'signContractPage\' },\n        React.createElement(\'div\', { dangerouslySetInnerHTML: { __html: data.html } })\n      );\n    }\n  }\n});';
    },
    getData_control139_Z6MXsV: function (elem) {},
    doAction_uiControl145_kFVWRI: function (data, elem) {
      if (elem && data.eventType === 'closePage') {
        ysp.appMain.showLoading();elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl145_kFVWRI: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component{\n  closePage (e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'closePage'\n      })\n    }\n  }\n  render (){\n    return(\n      <div style={{height:'10vh'}}>\n        <Header className='backHeader' amStyle=\"primary\" title={this.props.customData}>\n          <HeaderLeft>\n            <AMUI.Button amStyle=\"primary\" onClick={this.closePage.bind(this)}><b className='icon\ticon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'closePage',\n    value: function closePage(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'closePage'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { style: { height: '10vh' } },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { className: 'backHeader', amStyle: 'primary', title: this.props.customData },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.closePage.bind(this) },\n              React.createElement('b', { className: 'icon\\ticon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);