(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control47_W7TNbU: function (elem) {
      if (elem) {
        //贷款信息
        data = {};data.table = [];if (elem.querySelector('.titleBar')) {
          var obj = {};obj.thead = [];obj.display = [];obj.key = [];obj.value = [];obj.thead.push(elem.querySelector('.titleBar').textContent.trim());obj.display.push(elem.style.display);if (elem.querySelectorAll('tr').length > 0) {
            $(elem.querySelectorAll('tr')).each(function (i, _tr) {
              if (_tr.style.display == '') {
                $(_tr.querySelectorAll('.RinghtTrYellow')).each(function (m, n) {
                  //key
                  if (n.textContent.trim() == '') {} else {
                    obj.key.push(n.textContent.trim());
                  }
                });$(_tr.querySelectorAll('.RinghtTrword')).each(function (m, n) {
                  //value
                  if (n.style.display == "none") {} else {
                    var input_text = $(n).find("input[type='text']");var selected_option = $(n).find("select");var td = [];if (input_text.length > 0) {
                      //input
                      input_text.each(function (index, intx) {
                        var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';valueobj.id = intx.id;td.push(valueobj);
                      });
                    }if (selected_option.length > 0) {
                      //select框
                      if (i == 5) {
                        selected_option.each(function (index, slop) {
                          var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.value;valueobj.type = 'select';valueobj.id = slop.id;valueobj.options = [];$(slop).children('option').each(function (o, opt) {
                            var option = {};option.value = opt.value;option.text = opt.textContent;valueobj.options.push(option);
                          });td.push(valueobj);
                        });
                      } else {
                        selected_option.each(function (index, slop) {
                          var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.options[idx].value;valueobj.text = slop.options[idx].text;valueobj.type = 'select';
                          valueobj.id = slop.id;td.push(valueobj);
                        });
                      }
                    }if (td.length > 0) {
                      obj.value.push(td);
                    }
                  }
                });
              }
            });
          }data.table.push(obj);
        }return data;
      } else {
        return "";
      }
    }, doAction_uiControl52_J6Lqc1: function (data, elem) {
      if (data.eventType == 'changeClick') {
        var inputId = data.customData[0];var value = data.customData[1];elem.querySelector('#' + inputId).value = value;
      }if (data.eventType == 'selectClick') {
        var selectId = data.customData[0];var value = data.customData[1];elem.querySelector('#' + selectId).value = value;$(elem).find('#' + selectID).change();
      }if (data.eventType == 'change') {
        var value = data.customData;elem.querySelector('#APPL_DOC_RECV_DATE').value = value;$(elem.querySelector('#APPL_DOC_RECV_DATE')).change();
      }
    }, getTemplate_uiControl52_J6Lqc1: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  calendarClick:function(time){\n    var handler = this.props.customHandler;\n    \n    if(handler){\n       handler({\n         data: time.value,\n         eventType: \'change\'\n       })\n    }\n  },\n  selectClick:function(e){\n    var handler = this.props.customHandler;\n    var selectId = e.target.id;\n    var value = e.target.value;\n    \n    if(handler){\n       handler({\n         eventType:\'selectClick\',\n         data:[selectId,value]\n       })\n    }\n  },\n  changeClick:function(e){\n    var handler = this.props.customHandler;\n    var inputId = e.target.id;\n    var value = e.target.value;\n    \n    if(handler){\n       handler({\n         eventType:\'changeClick\',\n         data:[inputId,value]\n       })\n    }\n  },\n  render: function() {\n       var data = this.props.customData;\n       var me = this;\n       var table="";\n       var tableall = "";\n       var t1_value = "";\n  \n       if(data && data!=\'\'){\n         if(data.table){\n           tableall=data.table.map(function(m,n){ \n                table=m.key.map(function (x,y){\n                  var t1=m.value[y];\n                  t1_value = t1.map(function(val,i){\n                    if(val.type == \'text\'){\n                      if(y==2){\n                        return(\n                          <div className="tdDiv">\n                            <input type=\'text\' id={val.id} value={val.value} onChange={me.changeClick}/>\n                          </div>\n                        )\n                      }else if(y==4){\n                         return(\n                          <div className="tdDiv">\n                            <input type=\'hidden\' id={val.id} value={val.value === \'\' ? \'\' : val.value} onChange={me.changeClick}/>\n                            <AMUI.DateTimeInput dateTime={val.value === \'\' ? \'\u8BF7\u9009\u62E9\' : val.value} format="YYYY/MM/DD" showTimePicker={false} interiorCustomHandler={me.calendarClick}\xA0 />      \n                          </div>\n                        )\n                      }else{\n                        return(<div className="tdDiv">{val.value}</div>)\n                      }\n                    }else if(val.type == \'select\'){\n                      if(y==3){\n                         if(val.options.length>0){\n                         \t\tvar options = val.options.map(function(opt,o){\n                              return(<option value={opt.value} >{opt.text}</option>)\n                            })\n                           return(\n                             <div className="tdDiv">\n                               <select id={val.id} value={val.value} onChange={me.selectClick}>\n                                  {options}\n                               </select>\n                             </div>\n                           )\n                         }\n                      }else{\n                        return(<div className="tdDiv">{val.text}</div>) \n                      }\n                    }else{}\n                  })\n                    return(\n                      <div className="trDiv">\n                        <div className="box">{x}</div>\n                        {t1_value}\n                      </div>)\n                })  \n               \n                return (\n                  <div className="tableDiv">\n                    <div className=\'tableLi\' style={{"display":m.display[0]}}>\n                         <div className=\'line_\' id=\'line_\'>{m.thead[0]}</div>\n                      \t\t{table} \n                    </div>\n                  </div>\n                  )  \n           })\n         }\n         \n         return (\n           <div className=\'loan_info\'>\n            <div className=\'StandardTable\'> \n                <div className="tableAll">{tableall}</div>\n             </div>\n           </div>\n          )\n       }\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  calendarClick: function calendarClick(time) {\n    var handler = this.props.customHandler;\n\n    if (handler) {\n      handler({\n        data: time.value,\n        eventType: \'change\'\n      });\n    }\n  },\n  selectClick: function selectClick(e) {\n    var handler = this.props.customHandler;\n    var selectId = e.target.id;\n    var value = e.target.value;\n\n    if (handler) {\n      handler({\n        eventType: \'selectClick\',\n        data: [selectId, value]\n      });\n    }\n  },\n  changeClick: function changeClick(e) {\n    var handler = this.props.customHandler;\n    var inputId = e.target.id;\n    var value = e.target.value;\n\n    if (handler) {\n      handler({\n        eventType: \'changeClick\',\n        data: [inputId, value]\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    var table = "";\n    var tableall = "";\n    var t1_value = "";\n\n    if (data && data != \'\') {\n      if (data.table) {\n        tableall = data.table.map(function (m, n) {\n          table = m.key.map(function (x, y) {\n            var t1 = m.value[y];\n            t1_value = t1.map(function (val, i) {\n              if (val.type == \'text\') {\n                if (y == 2) {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    React.createElement(\'input\', { type: \'text\', id: val.id, value: val.value, onChange: me.changeClick })\n                  );\n                } else if (y == 4) {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    React.createElement(\'input\', { type: \'hidden\', id: val.id, value: val.value === \'\' ? \'\' : val.value, onChange: me.changeClick }),\n                    React.createElement(AMUI.DateTimeInput, { dateTime: val.value === \'\' ? \'\u8BF7\u9009\u62E9\' : val.value, format: \'YYYY/MM/DD\', showTimePicker: false, interiorCustomHandler: me.calendarClick })\n                  );\n                } else {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    val.value\n                  );\n                }\n              } else if (val.type == \'select\') {\n                if (y == 3) {\n                  if (val.options.length > 0) {\n                    var options = val.options.map(function (opt, o) {\n                      return React.createElement(\n                        \'option\',\n                        { value: opt.value },\n                        opt.text\n                      );\n                    });\n                    return React.createElement(\n                      \'div\',\n                      { className: \'tdDiv\' },\n                      React.createElement(\n                        \'select\',\n                        { id: val.id, value: val.value, onChange: me.selectClick },\n                        options\n                      )\n                    );\n                  }\n                } else {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    val.text\n                  );\n                }\n              } else {}\n            });\n            return React.createElement(\n              \'div\',\n              { className: \'trDiv\' },\n              React.createElement(\n                \'div\',\n                { className: \'box\' },\n                x\n              ),\n              t1_value\n            );\n          });\n\n          return React.createElement(\n            \'div\',\n            { className: \'tableDiv\' },\n            React.createElement(\n              \'div\',\n              { className: \'tableLi\', style: { "display": m.display[0] } },\n              React.createElement(\n                \'div\',\n                { className: \'line_\', id: \'line_\' },\n                m.thead[0]\n              ),\n              table\n            )\n          );\n        });\n      }\n\n      return React.createElement(\n        \'div\',\n        { className: \'loan_info\' },\n        React.createElement(\n          \'div\',\n          { className: \'StandardTable\' },\n          React.createElement(\n            \'div\',\n            { className: \'tableAll\' },\n            tableall\n          )\n        )\n      );\n    }\n  }\n});';
    },
    getData_control50_hShgIK: function (elem) {},
    doAction_uiControl55_Jn4Gd9: function (data, elem) {
      if (data.eventType === "back") {
        var win_self = elem.ownerDocument.defaultView;if (win_self) {
          win_self.close();ysp.appMain.showLoading();
        }
      }
    },
    getTemplate_uiControl55_Jn4Gd9: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component {\n  handleBack (e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \"back\"\n      })\n    }\n  }\n  render (){\n     return(\n        <Header amStyle=\"primary\" >\n          <HeaderLeft>\n            <AMUI.Button amStyle=\"primary\" onClick={this.handleBack.bind(this)}>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      )\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'handleBack\',\n    value: function handleBack(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: "back"\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      return React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \'primary\' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \'primary\', onClick: this.handleBack.bind(this) },\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control37_WTHx9K: function (elem) {
      if (!elem) {
        return;
      }return elem.value;
    },
    doAction_uiControl38_OUGKBu: function (data, elem) {
      var id = data.customData;if (data.eventType == 'toReturnClick') {
        elem.removeAttribute('disabled');elem.click();
      }
    },
    getTemplate_uiControl38_OUGKBu: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  toReturnClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'toReturnClick\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    return (\n      <div className="butt2">\n        <input type=\'button\' value={data} onClick={me.toReturnClick}/>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  toReturnClick: function toReturnClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'toReturnClick\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \'div\',\n      { className: \'butt2\' },\n      React.createElement(\'input\', { type: \'button\', value: data, onClick: me.toReturnClick })\n    );\n  }\n});';
    }
  });
})(window, ysp);