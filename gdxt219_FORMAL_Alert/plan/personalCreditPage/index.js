(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control66_AThfFz: function (elem) {},
    doAction_uiControl74_Tfm378: function (data, elem) {
      if (data.eventType === "back") {
        var win_self = elem.ownerDocument.defaultView;if (win_self) {
          win_self.close();ysp.appMain.showLoading();
        }
      }
    },
    getTemplate_uiControl74_Tfm378: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component {\n  handleBack (e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(target.localName === \"b\"){\n      target = target.parentElement;\n    }\n    if(handler){\n      handler({\n        eventType: \"back\"\n      })\n    }\n  }\n  render (){\n    \treturn(\n        <div className='customHeader'>\n          <Header amStyle=\"primary\" title={this.props.customData}>\n            <HeaderLeft>\n              <AMUI.Button amStyle=\"primary\" onClick={this.handleBack.bind(this)}><b className='icon\ticon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n            </HeaderLeft>\n          </Header>\n        </div>\n    )\n  }\n\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handleBack',\n    value: function handleBack(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (target.localName === \"b\") {\n        target = target.parentElement;\n      }\n      if (handler) {\n        handler({\n          eventType: \"back\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'customHeader' },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: this.props.customData },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.handleBack.bind(this) },\n              React.createElement('b', { className: 'icon\\ticon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control67_NgSsgs: function (elem) {
      if (elem) {
        var frag = document.createElement("div");frag.innerHTML = elem.innerHTML;var tables = frag.querySelectorAll("table");if (frag.querySelector("script")) {
          $(frag).find("script").remove();
        }for (let i = 0; i < tables.length; i++) {
          tables[i].width = "100%";if (i === 0) {
            tables[i].height = "auto";$(tables[i]).find("table").css("display", "block").attr("height", "auto");$(tables[i]).find("tbody").css("display", "block").attr("height", "auto");$(tables[i]).find("tr").css("display", "block").attr("height", "auto").attr("width", "100%");$(tables[i]).find("td").css("display", "block").attr("height", "auto");$(tables[i]).find("table").eq(0).children("tbody").children("tr").eq(2).find("[align]").attr("align", "left");
          }
        }if (frag.querySelector("input")) {
          frag.querySelector("input").parentElement.innerHTML = '';
        }return frag.innerHTML;
      }return '';
    },
    doAction_uiControl75_vHEJdT: function (data, elem) {},
    getTemplate_uiControl75_vHEJdT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== ''){\n      return (\n        <div style={{padding:\"10px\"}} dangerouslySetInnerHTML={{__html:data}}>\n        </div>\n      )\n    }else{\n      return (<div style={{display:'none'}}></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== '') {\n      return React.createElement('div', { style: { padding: \"10px\" }, dangerouslySetInnerHTML: { __html: data } });\n    } else {\n      return React.createElement('div', { style: { display: 'none' } });\n    }\n  }\n});";
    }
  });
})(window, ysp);