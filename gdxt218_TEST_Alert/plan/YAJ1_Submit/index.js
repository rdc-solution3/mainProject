(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control14_JaaClC: function (elem) {
      if (elem) {
        var data = {};data.radios = [];data.buttons = [];if (elem.querySelectorAll('td')) {
          $(elem.querySelectorAll('td')).each(function (x, y) {
            if (x == 1) {
              if ($(y).find('input').length > 0) {
                $(y).find('input:visible').each(function (mm, nn) {
                  if (nn.type == 'radio') {
                    var obj = {};obj.value = nn.nextSibling.textContent.trim();obj.name = nn.name;obj.checked = nn.checked;obj.type = nn.type;data.radios.push(obj);
                  } else if (nn.type == 'button') {
                    var obj = {};obj.value = nn.value;obj.name = nn.name;obj.checked = nn.checked;obj.type = nn.type;obj.display = nn.style.display;data.buttons.push(obj);
                  }
                });
              }
            }
          });return data;
        } else {
          return "";
        }
      } else {
        return "";
      }
    }, doAction_uiControl2_ele5aV: function (data, elem) {
      if (data.eventType == 'saveClick') {
        var idx = data.dataCustom;if (idx) {
          $($(elem).children('tbody').children('tr').children('td')[1]).children('input:visible')[idx].click();
        }
      }if (data.eventType == 'radioClick') {
        var idx = data.dataCustom;$($(elem).find('table')[0]).find('input').eq(idx)[0].click(); // if (idx) {
        //   $($(elem).find('table')[0]).find('input').each(function (x, y) {
        //     if (x == idx) {
        //       y.checked = true;
        //     } else {
        //       y.checked = false;
        //     }
        //   });
        // }
      }
    }, getTemplate_uiControl2_ele5aV: function () {
      var selfTemplate = "module.exports = React.createClass({\n  saveClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'saveClick',\n        data: e.target.getAttribute('data-index')\n      })\n    }\n  },\n  radioClick: function(e){\n    // e.stopPropagation();\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(target.className !== 'cSub'){\n      target = e.target.parentElement;\n    }\n    if(handler && target){\n      handler({\n        eventType: 'radioClick',\n        data: target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var table=[];\n    var divs=[];\n     var _this = this;\n    if(data){\n      table=data.radios.map(function(x,y){\n        if(x.type=='radio'){\n          return(\n            <div className=\"cSub\" onClick={_this.radioClick} data-index={y}>\n              <div className={x.checked?'curRadio':'radioBtn'}></div>\n              <span className='radioValue'>{x.value}</span>\n            </div>\n          )\n        } \n      })\n      //   divs=data.buttons.map(function(x,y){\n      //     if(x.type=='button' && y<2){\n      //     return(\n      //     \t<button type='button' onClick={_this.saveClick}   data-index={y} style={{'display':x.display}}>{x.value}</button>\n      //     )\n      //   }\n      // })\n    return (\n      <div className='opinionSec'>\n        {table}\n      </div>\n    )\n    }else{\n         return (\n        <div> </div>\n      )\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  saveClick: function saveClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'saveClick',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  radioClick: function radioClick(e) {\n    // e.stopPropagation();\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (target.className !== 'cSub') {\n      target = e.target.parentElement;\n    }\n    if (handler && target) {\n      handler({\n        eventType: 'radioClick',\n        data: target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var table = [];\n    var divs = [];\n    var _this = this;\n    if (data) {\n      table = data.radios.map(function (x, y) {\n        if (x.type == 'radio') {\n          return React.createElement(\n            'div',\n            { className: 'cSub', onClick: _this.radioClick, 'data-index': y },\n            React.createElement('div', { className: x.checked ? 'curRadio' : 'radioBtn' }),\n            React.createElement(\n              'span',\n              { className: 'radioValue' },\n              x.value\n            )\n          );\n        }\n      });\n      //   divs=data.buttons.map(function(x,y){\n      //     if(x.type=='button' && y<2){\n      //     return(\n      //     \t<button type='button' onClick={_this.saveClick}   data-index={y} style={{'display':x.display}}>{x.value}</button>\n      //     )\n      //   }\n      // })\n      return React.createElement(\n        'div',\n        { className: 'opinionSec' },\n        table\n      );\n    } else {\n      return React.createElement(\n        'div',\n        null,\n        ' '\n      );\n    }\n  }\n});";
    },
    getData_control63_KPK8K2: function (elem) {},
    doAction_uiControl72_u2zJKf: function (data, elem) {
      if (data.eventType === "back") {
        var win_self = elem.ownerDocument.defaultView;if (win_self) {
          win_self.close();ysp.appMain.showLoading();
        }
      }
    },
    getTemplate_uiControl72_u2zJKf: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component {\n  handleBack (e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \"back\"\n      })\n    }\n  }\n  render (){\n     return(\n        <Header amStyle=\"primary\" >\n          <HeaderLeft>\n            <AMUI.Button amStyle=\"primary\" onClick={this.handleBack.bind(this)}>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      )\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'handleBack\',\n    value: function handleBack(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: "back"\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      return React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \'primary\' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \'primary\', onClick: this.handleBack.bind(this) },\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control64_dvt8IG: function (elem) {
      if (elem) {
        var data = {};data.radios = [];data.buttons = [];if (elem.querySelectorAll('td')) {
          $(elem.querySelectorAll('td')).each(function (x, y) {
            if (x == 1) {
              if ($(y).find('input').length > 0) {
                $(y).find('input:visible').each(function (mm, nn) {
                  if (nn.type == 'radio') {
                    var obj = {};obj.value = nn.nextSibling.textContent.trim();obj.name = nn.name;obj.checked = nn.checked;obj.type = nn.type;data.radios.push(obj);
                  } else if (nn.type == 'button') {
                    var obj = {};obj.value = nn.value;obj.name = nn.name;obj.id = nn.id;obj.type = nn.type;obj.display = nn.style.display;data.buttons.push(obj);
                  }
                });
              }
            }
          });return data;
        } else {
          return "";
        }
      } else {
        return "";
      }
    },
    doAction_uiControl71_vOFGk0: function (data, elem) {
      if (data.eventType == "otherClick") {
        var id = data.customData;elem.querySelector('#' + id).click();
      }if (data.eventType == "saveClick") {
        var value = data.customData;$(elem).find("input[value='" + value + "']")[0].click();
      }
    },
    getTemplate_uiControl71_vOFGk0: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleShowModal:function(e){\n    $(\'#modal\').css(\'display\',\'block\');\n    $(\'.txyjCon>p\').css(\'display\',\'none\');\n  },\n  hanldeCancel:function(){\n    $(\'#modal\').css(\'display\',\'none\');\n    $(\'.txyjCon>p\').css(\'display\',\'block\');\n  },\n  saveClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'saveClick\',\n        data: e.target.value\n      })\n    }\n  },\n  otherClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'otherClick\',\n        data: e.target.getAttribute(\'id\')\n      })\n    }\n  },\n  render: function() {\n   var data = this.props.customData;\n   var me = this;\n   var butts = \'\';\n   var divs = \'\';\n   if(data){\n       butts = data.buttons.map(function(x,y){\n          if(x.type==\'button\' && y<2){\n          return(\n          \t<input type=\'button\' onClick={me.saveClick} data-index={y} value={x.value} />\n          )\n        }\n      })\n     \n       divs = data.buttons.map(function(x,y){\n          if(x.type==\'button\' && y>1){\n          return(\n          \t<div className="rightDiv" onClick={me.otherClick} id={x.id}>{x.value}</div>\n          )\n        }\n      })\n    }\n    \n    return(\n       <div className=\'btnsCon\'>\n         <div className="showBtnCon">\n           {butts}\n         </div>\n         <div className="icon_dian" onClick={this.handleShowModal}></div>\n         <div id="modal">\n           <div>\n             <div>{divs}</div>\n             <p onClick={this.hanldeCancel}>\u53D6\u6D88</p>\n           </div>\n         </div>\n       </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleShowModal: function handleShowModal(e) {\n    $(\'#modal\').css(\'display\', \'block\');\n    $(\'.txyjCon>p\').css(\'display\', \'none\');\n  },\n  hanldeCancel: function hanldeCancel() {\n    $(\'#modal\').css(\'display\', \'none\');\n    $(\'.txyjCon>p\').css(\'display\', \'block\');\n  },\n  saveClick: function saveClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'saveClick\',\n        data: e.target.value\n      });\n    }\n  },\n  otherClick: function otherClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'otherClick\',\n        data: e.target.getAttribute(\'id\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    var butts = \'\';\n    var divs = \'\';\n    if (data) {\n      butts = data.buttons.map(function (x, y) {\n        if (x.type == \'button\' && y < 2) {\n          return React.createElement(\'input\', { type: \'button\', onClick: me.saveClick, \'data-index\': y, value: x.value });\n        }\n      });\n\n      divs = data.buttons.map(function (x, y) {\n        if (x.type == \'button\' && y > 1) {\n          return React.createElement(\n            \'div\',\n            { className: \'rightDiv\', onClick: me.otherClick, id: x.id },\n            x.value\n          );\n        }\n      });\n    }\n\n    return React.createElement(\n      \'div\',\n      { className: \'btnsCon\' },\n      React.createElement(\n        \'div\',\n        { className: \'showBtnCon\' },\n        butts\n      ),\n      React.createElement(\'div\', { className: \'icon_dian\', onClick: this.handleShowModal }),\n      React.createElement(\n        \'div\',\n        { id: \'modal\' },\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'div\',\n            null,\n            divs\n          ),\n          React.createElement(\n            \'p\',\n            { onClick: this.hanldeCancel },\n            \'\\u53D6\\u6D88\'\n          )\n        )\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);