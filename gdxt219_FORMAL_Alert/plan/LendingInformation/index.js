(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control15_n79hGb: function (elem) {
      if (elem) {
        //贷款信息
        data = {};data.title_table = [];data.table = [];if (elem.querySelectorAll('table').length > 0) {
          $(elem.querySelectorAll('table')).each(function (x, y) {
            if (y.querySelector('.titleBar')) {
              if ($(y.querySelector('.titleBar').parentNode.parentNode).find('table').length > 1) {
                // //table套了table 
                var obj = {};obj.title = [];obj.display = [];obj.thead = [];
                obj.tbody = [];obj.title.push(y.querySelector('.titleBar').textContent.trim());obj.display.push(y.style.display);$(y).children('tbody').find('table').each(function (m, n) {
                  if (m == 0) {
                    //第一个table是表格内容，第二个是按钮
                    $(n.querySelectorAll('.titlebarHUI')).each(function (mm, nn) {
                      obj.thead.push(nn.textContent.trim());
                    });$(n).children('tbody').children('tr[onclick]:visible').each(function (trm, trn) {
                      var trs = [];$(trn).children('td:visible').each(function (mm, nn) {
                        trs.push(nn.textContent.trim());
                      });obj.tbody.push(trs);
                    });
                  } else if (m == 1) {
                    if ($(n).find("input[type='button']").length > 0) {
                      obj.butval = [];obj.butdis = [];obj.buttype = [];obj.butname = [];$($(n).find("input[type='button']")).each(function (mm, nn) {
                        obj.butval.push(nn.value);obj.butdis.push(nn.disabled);obj.butname.push(nn.name);obj.buttype.push("button");
                      });
                    }
                  }
                });data.title_table.push(obj);
              } else {
                var obj = {};obj.thead = [];obj.display = [];obj.key = [];obj.value = [];obj.thead.push(y.querySelector('.titleBar').textContent.trim());obj.display.push(y.style.display);if (y) {
                  if (y.querySelectorAll('tr').length > 0) {
                    $(y.querySelectorAll('tr')).each(function (i, _tr) {
                      if (_tr.querySelector('table')) {
                        return;
                      } //跳过包含table的
                      //tr
                      if (_tr.style.display == '') {
                        $(_tr.querySelectorAll('.RinghtTrYellow')).each(function (m, n) {
                          //key
                          if (n.textContent.trim() == '' || $(n).find('span').length > 0) {} else {
                            obj.key.push(n.textContent.trim());
                          }
                        });$(_tr.querySelectorAll('.RinghtTrword')).each(function (m, n) {
                          //value
                          if ($(n).find('span').length > 0) {} else {
                            var input_text = $(n).find("input[type='text']");var selected_option = $(n).find("select");var td = [];if (input_text.length > 0) {
                              //input
                              input_text.each(function (index, intx) {
                                var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';if (intx.nextSibling) {
                                  valueobj.txt = intx.nextSibling.textContent.trim();
                                }td.push(valueobj);
                              });
                            }if (selected_option.length > 0) {
                              //select框
                              selected_option.each(function (index, slop) {
                                var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.options[idx].value;valueobj.text = slop.options[idx].text;
                                valueobj.type = 'select';if (slop.nextSibling) {
                                  valueobj.txt = slop.nextSibling.textContent.trim();
                                }td.push(valueobj);
                              });
                            }if (td.length > 0) {
                              obj.value.push(td);
                            }
                          }
                        });
                      }
                    });
                  }
                  data.table.push(obj);
                }
              }
            }
          });
        }return data;
      } else {
        return "";
      }
    }, doAction_uiControl8_Tiobce: function (data, elem) {
      //还款方式信息明细
      if (data.eventType == 'mingxiClick') {
        var idx = parseInt(data.dataCustom);$(elem).find('#returnLoanTable').find('tr').eq(idx + 1).click();$(elem).find('#updateReturnLoanInfoID').click();
      }
    },
    getTemplate_uiControl8_Tiobce: function () {
      var selfTemplate = "var TableMX = require('ysp-custom-components').TableMX;\n\nmodule.exports = React.createClass({\n    showButtonClick:function(e){\n     var parentTager;\n     if(e.target.getAttribute(\"class\")=='showClike'){\n        parentTager = e.target.parentElement;\n     }else{\n        parentTager = e.target.parentElement.parentElement;\n     }\n     var trDiv = parentTager.firstChild.querySelectorAll('.trDiv');\n     for(var i=4;i<trDiv.length;i++){\n          if(trDiv[i].style.display == 'none'){//\u5C55\u5F00\n            try{\n              $(trDiv[i]).show(200);\n              $(parentTager).children('.showClike').children('.txS').text('\u6536\u8D77\u5168\u90E8\u5185\u5BB9');\n              $(parentTager).children('.showClike').children('div').eq(0).removeClass('imgS1');\n              $(parentTager).children('.showClike').children('div').eq(0).addClass('imgS2');\n            }catch(e){\n              trDiv[i].style.display = 'block';\n            }\n          }else{\n            try{\n              $(trDiv[i]).hide(200);\n              $(parentTager).children('.showClike').children('.txS').text('\u663E\u793A\u66F4\u591A\u5185\u5BB9');\n              $(parentTager).children('.showClike').children('div').eq(0).removeClass('imgS2');\n              $(parentTager).children('.showClike').children('div').eq(0).addClass('imgS1');\n            }catch(e){\n              trDiv[i].style.display = \"none\";\n            }\n         }\n     }\n   },\n  render: function() {\n       var data = this.props.customData;\n       var me = this;\n       var table=\"\";\n       var tableall = \"\";\n       var t1_value = \"\";\n  \n       if(data && data!=''){\n         if(data.table){\n           tableall=data.table.map(function(m,n){ \n                table=m.key.map(function (x,y){\n                  var t1=m.value[y];\n                  t1_value = t1.map(function(val,i){\n                    if(val.type == 'text'){\n                      return( \n                        <div className=\"tdDiv\">\n                          {val.value}\n                          {val.txt ? <span style={{float:'right',color:'#999'}}>{val.txt}</span> : \"\"}\n                        </div>\n                      )\n                    }else if(val.type == 'select'){\n                      return(\n                        <div className=\"tdDiv\">\n                          {val.text}\n                        \t{val.txt ? <span style={{float:'right',color:'#999'}}>{val.txt}</span> : \"\"}\n                        </div>\n                      )\n                    }else{}\n                  })\n                    return(\n                      <div className=\"trDiv\"  style={{\"display\":y > 3 ? 'none' : ''}}>\n                        <div className=\"box\">{x}</div>\n                        <div className='select_input'>\n                          {t1_value}\n                        </div>\n                      </div>)\n                })  \n               \n                return (\n                  <div className=\"tableDiv\">\n                    <div className='tableLi' style={{\"display\":m.display[0]}}>\n                         <div className='line_' id='line_'>{m.thead[0]}</div>\n                      \t\t{table} \n                    </div>\n                    <div className=\"showClike\" style={{\"display\":m.display[0]}} onClick={me.showButtonClick}>\n                      <div className=\"imgS1\"></div>\n                      <div className=\"txS\">\u663E\u793A\u66F4\u591A\u5185\u5BB9</div>\n                    </div>\n                  </div>\n                  )  \n           })\n         }\n         \n         return (\n           <div className='loan_info'>\n            <div className='StandardTable'> \n                <div className=\"tableAll\">{tableall}</div>\n                <TableMX data={data} handler={this.props.customHandler} thead={true}/> \n             </div>\n           </div>\n          )\n       }\n  }\n});";
      return "'use strict';\n\nvar TableMX = require('ysp-custom-components').TableMX;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  showButtonClick: function showButtonClick(e) {\n    var parentTager;\n    if (e.target.getAttribute(\"class\") == 'showClike') {\n      parentTager = e.target.parentElement;\n    } else {\n      parentTager = e.target.parentElement.parentElement;\n    }\n    var trDiv = parentTager.firstChild.querySelectorAll('.trDiv');\n    for (var i = 4; i < trDiv.length; i++) {\n      if (trDiv[i].style.display == 'none') {\n        //\u5C55\u5F00\n        try {\n          $(trDiv[i]).show(200);\n          $(parentTager).children('.showClike').children('.txS').text('\u6536\u8D77\u5168\u90E8\u5185\u5BB9');\n          $(parentTager).children('.showClike').children('div').eq(0).removeClass('imgS1');\n          $(parentTager).children('.showClike').children('div').eq(0).addClass('imgS2');\n        } catch (e) {\n          trDiv[i].style.display = 'block';\n        }\n      } else {\n        try {\n          $(trDiv[i]).hide(200);\n          $(parentTager).children('.showClike').children('.txS').text('\u663E\u793A\u66F4\u591A\u5185\u5BB9');\n          $(parentTager).children('.showClike').children('div').eq(0).removeClass('imgS2');\n          $(parentTager).children('.showClike').children('div').eq(0).addClass('imgS1');\n        } catch (e) {\n          trDiv[i].style.display = \"none\";\n        }\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    var table = \"\";\n    var tableall = \"\";\n    var t1_value = \"\";\n\n    if (data && data != '') {\n      if (data.table) {\n        tableall = data.table.map(function (m, n) {\n          table = m.key.map(function (x, y) {\n            var t1 = m.value[y];\n            t1_value = t1.map(function (val, i) {\n              if (val.type == 'text') {\n                return React.createElement(\n                  'div',\n                  { className: 'tdDiv' },\n                  val.value,\n                  val.txt ? React.createElement(\n                    'span',\n                    { style: { float: 'right', color: '#999' } },\n                    val.txt\n                  ) : \"\"\n                );\n              } else if (val.type == 'select') {\n                return React.createElement(\n                  'div',\n                  { className: 'tdDiv' },\n                  val.text,\n                  val.txt ? React.createElement(\n                    'span',\n                    { style: { float: 'right', color: '#999' } },\n                    val.txt\n                  ) : \"\"\n                );\n              } else {}\n            });\n            return React.createElement(\n              'div',\n              { className: 'trDiv', style: { \"display\": y > 3 ? 'none' : '' } },\n              React.createElement(\n                'div',\n                { className: 'box' },\n                x\n              ),\n              React.createElement(\n                'div',\n                { className: 'select_input' },\n                t1_value\n              )\n            );\n          });\n\n          return React.createElement(\n            'div',\n            { className: 'tableDiv' },\n            React.createElement(\n              'div',\n              { className: 'tableLi', style: { \"display\": m.display[0] } },\n              React.createElement(\n                'div',\n                { className: 'line_', id: 'line_' },\n                m.thead[0]\n              ),\n              table\n            ),\n            React.createElement(\n              'div',\n              { className: 'showClike', style: { \"display\": m.display[0] }, onClick: me.showButtonClick },\n              React.createElement('div', { className: 'imgS1' }),\n              React.createElement(\n                'div',\n                { className: 'txS' },\n                '\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9'\n              )\n            )\n          );\n        });\n      }\n\n      return React.createElement(\n        'div',\n        { className: 'loan_info' },\n        React.createElement(\n          'div',\n          { className: 'StandardTable' },\n          React.createElement(\n            'div',\n            { className: 'tableAll' },\n            tableall\n          ),\n          React.createElement(TableMX, { data: data, handler: this.props.customHandler, thead: true })\n        )\n      );\n    }\n  }\n});";
    },

    getData_control52_l454xp: function (elem) {
      if (elem && elem.querySelector(".location")) {
        var title = elem.querySelector(".location").innerHTML;var data = title.replace(/\s+/g, "").split(/\&gt\;/);return data[data.length - 1];
      }return "";
    },
    doAction_uiControl57_h2GVQK: function (data, elem) {
      if (data.eventType === "back") {
        var win_self = elem.ownerDocument.defaultView;if (win_self) {
          win_self.close();ysp.appMain.showLoading();
        }
      }
    },
    getTemplate_uiControl57_h2GVQK: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component {\n  handleBack (e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(target.localName === \"b\"){\n      target = target.parentElement;\n    }\n    if(handler){\n      handler({\n        eventType: \"back\"\n      })\n    }\n  }\n  render (){\n    \treturn(\n        <div className='customHeader'>\n          <Header amStyle=\"primary\" title={this.props.customData}>\n            <HeaderLeft>\n              <AMUI.Button amStyle=\"primary\" onClick={this.handleBack.bind(this)}><b className='icon icon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n            </HeaderLeft>\n          </Header>\n        </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handleBack',\n    value: function handleBack(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (target.localName === \"b\") {\n        target = target.parentElement;\n      }\n      if (handler) {\n        handler({\n          eventType: \"back\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'customHeader' },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: this.props.customData },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.handleBack.bind(this) },\n              React.createElement('b', { className: 'icon icon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control8_eVAiVM: function (elem) {
      if (!elem) {
        return;
      }return elem.value;
    },
    doAction_uiControl7_Bidul4: function (data, elem) {
      var id = data.customData;if (data.eventType == 'toReturnClick') {
        elem.removeAttribute('disabled');elem.click();
      }
    },
    getTemplate_uiControl7_Bidul4: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  toReturnClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'toReturnClick\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    return (\n      <div className="butt2">\n        <input type=\'button\' value={data} onClick={me.toReturnClick}/>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  toReturnClick: function toReturnClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'toReturnClick'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      'div',\n      { className: 'butt2' },\n      React.createElement('input', { type: 'button', value: data, onClick: me.toReturnClick })\n    );\n  }\n});";
    }
  });
})(window, ysp);