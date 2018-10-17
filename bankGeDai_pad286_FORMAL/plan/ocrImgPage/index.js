(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control103_rRpl06: function (elem) {},
    doAction_uiControl106_p0J6Ib: function (data, elem) {
      if (data.eventType === 'clickToClose') {
        try {
          ysp.appMain.getActiveWindow().close();
        } catch (e) {
          var win_d = elem.ownerDocument.defaultView;win_d.close();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl106_p0J6Ib: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component{\n  clickToClose (e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'clickToClose'\n      })\n    }\n  }\n  render (){\n    \treturn(\n        <div style={{height:'10vh'}}>\n          <Header className='backHeader' amStyle=\"primary\" title={this.props.customData}>\n            <HeaderLeft>\n              <AMUI.Button amStyle=\"primary\" onClick={this.clickToClose.bind(this)}><b className='icon\ticon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n            </HeaderLeft>\n          </Header>\n        </div>\n    )\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'clickToClose',\n    value: function clickToClose(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickToClose'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { style: { height: '10vh' } },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { className: 'backHeader', amStyle: 'primary', title: this.props.customData },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.clickToClose.bind(this) },\n              React.createElement('b', { className: 'icon\\ticon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control100_X5eg35: function (elem) {
      if (elem) {
        return elem.src;
      }return '';
    },
    doAction_uiControl103_csMZdv: function (data, elem) {},
    getTemplate_uiControl103_csMZdv: function () {
      var selfTemplate = "module.exports = React.createClass({\n  dbClick: function(e){\n    // if(e.target.nodeName === \"IMG\"){\n    //   var width = e.target.style.width;\n    //   e.target.style.width = width !== \"90%\" ? \"90%\" : \"1200px\";\n    // }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== ''){\n      return (\n        <div style={{textAlign:'center',padding:'20px',overflow:\"auto\"}}>\n          <img style={{width:'90%',transition:\"all 0.2s\"}} src={data} onDoubleClick={this.dbClick}/>\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  dbClick: function dbClick(e) {\n    // if(e.target.nodeName === \"IMG\"){\n    //   var width = e.target.style.width;\n    //   e.target.style.width = width !== \"90%\" ? \"90%\" : \"1200px\";\n    // }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== '') {\n      return React.createElement(\n        'div',\n        { style: { textAlign: 'center', padding: '20px', overflow: \"auto\" } },\n        React.createElement('img', { style: { width: '90%', transition: \"all 0.2s\" }, src: data, onDoubleClick: this.dbClick })\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    }
  });
})(window, ysp);