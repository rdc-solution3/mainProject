(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control17_IbAlKF: function (elem) {
      if (elem) {
        data = {};data.title_table = [];data.table = [];
        if (elem.querySelectorAll('table').length > 0) {
          $(elem.querySelectorAll('table')).each(function (x, y) {
            if (x == 0) {
              //table
              var obj = {};obj.thead = [];obj.display = [];obj.key = [];obj.value = [];obj.thead.push(elem.querySelector('.titleBar').textContent.trim());obj.display.push(y.style.display);if (y.querySelectorAll('tr').length > 0) {
                $(y.querySelectorAll('tr')).each(function (i, _tr) {
                  if (_tr.style.display == '') {
                    $(_tr.querySelectorAll('.RinghtTrYellow')).each(function (m, n) {
                      //key
                      if (n.textContent.trim() == '' || $(n).find('span').length > 0) {} else {
                        obj.key.push(n.textContent.trim());
                      }
                    });if (i == 13) {
                      return;
                    }$(_tr.querySelectorAll('td')).each(function (m, n) {
                      if (m == 1 || m == 3) {
                        //value
                        if ($(n).find('span').length > 0) {} else {
                          var input_text = $(n).find("input[type='text']");var selected_option = $(n).find("select");var input_checkbox = $(n).find("input[type='checkbox']");var td = [];if (input_text.length > 0) {
                            //input
                            input_text.each(function (index, intx) {
                              var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';td.push(valueobj);
                            });
                          } else {
                            input_text = $(n).find("input")[0];if (input_text && i == 21) {
                              var valueobj = {};valueobj.value = input_text.value;valueobj.type = 'text';td.push(valueobj);
                            }
                          }if (selected_option.length > 0) {
                            //select框
                            selected_option.each(function (index, slop) {
                              var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.options[idx].value;valueobj.text = slop.options[idx].text;valueobj.type = 'select';td.push(valueobj);
                            });if (i == 12) {
                              var inObj = {};var in_tx = $(_tr).next('tr').eq(0).find('td').eq(1).find('input[type=text]');inObj.value = in_tx[0].value;inObj.type = 'text';td.push(inObj);
                            }
                          }if (input_checkbox.length > 0) {
                            //checkbox
                            var cb = {};cb.value = [];cb.tx = [];cb.i = [];cb.type = 'checkbox';input_checkbox.each(function (qq, ww) {
                              cb.value.push(ww.value);var nv = ww.nextSibling == null ? "" : ww.nextSibling.nodeValue;cb.tx.push(nv.trim());cb.i.push(ww.checked ? 1 : 0);
                            });td.push(cb);
                          }if (td.length > 0) {
                            obj.value.push(td);
                          }
                        }
                      }
                    });
                  }
                });
              }data.table.push(obj);
            } else if (x == 3) {
              if (y) {
                var obj = {};obj.thead = [];obj.display = [];obj.key = [];
                obj.value = [];obj.thead.push(y.querySelector('.titleBar').textContent.trim());obj.display.push(y.style.display);if (y.querySelectorAll('tr').length > 0) {
                  $(y.querySelectorAll('tr')).each(function (i, _tr) {
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
                              var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';td.push(valueobj);
                            });
                          }
                          if (selected_option.length > 0) {
                            //select框
                            selected_option.each(function (index, slop) {
                              var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.options[idx].value;valueobj.text = slop.options[idx].text;valueobj.type = 'select';td.push(valueobj);
                            });
                          }if (td.length > 0) {
                            obj.value.push(td);
                          }
                        }
                      });
                    }
                  });
                }
              }data.table.push(obj);
            } else if (x == 1) {
              var obj = {};obj.title = [];obj.display = [];obj.thead = [];
              obj.tbody = [];obj.butval = [];obj.butdis = [];obj.buttype = [];obj.butname = [];obj.title.push(y.querySelector('.titleBar').textContent.trim());obj.display.push(y.style.display); //第一个table是表格内容，第二个是按钮
              $(y.querySelectorAll('.titlebarHUI')).each(function (mm, nn) {
                obj.thead.push(nn.textContent.trim());
              });$(y).children('tbody').children('tr[onclick]:visible').each(function (trm, trn) {
                var trs = [];$(trn).children('td:visible').each(function (mm, nn) {
                  var input_radio = $(nn).find('input[type=radio]');if (mm == 4) {
                    //checkbox
                    var td = [];input_radio.each(function (qq, ww) {
                      var cb = {};cb.type = 'radio';cb.value = ww.value;var nv = ww.nextSibling == null ? "" : ww.nextSibling.nodeValue;cb.tx = nv.trim();cb.i = ww.checked ? 1 : 0;td.push(cb);
                    });trs.push(td);
                  } else {
                    trs.push(nn.textContent.trim());
                  }
                });obj.tbody.push(trs);
              });if ($(y).next('table').find("input[type='button']").length > 0) {
                $(y).next('table').find("input[type='button']").each(function (mm, nn) {
                  obj.butval.push(nn.value);obj.butdis.push(nn.disabled);obj.butname.push(nn.name);obj.buttype.push("button");
                });
              }data.title_table.push(obj);
            }
          });
        }return data;
      } else {
        return "";
      }
    }, doAction_uiControl9_b0zy2E: function (data, elem) {
      if (data.eventType == 'mingxiClick') {
        var idx = parseInt(data.dataCustom);
        $(elem).find('#addrList').find('tr').eq(idx + 2).click();$(elem).find('#addrMoreBtn').click();
      }
    }, getTemplate_uiControl9_b0zy2E: function () {
      var selfTemplate = 'module.exports = React.createClass({\n    mingxiClick:function(e){\n      var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          eventType: \'mingxiClick\',\n          data: e.target.getAttribute(\'data-index\')\n        })\n      }\n     },\n  showButtonClick:function(e){\n     var parentTager;\n     if(e.target.getAttribute("class")==\'showClike\'){\n        parentTager = e.target.parentElement;\n     }else{\n        parentTager = e.target.parentElement.parentElement;\n     }\n     var b = parentTager.firstChild.querySelectorAll(\'.trDiv\').length>0;\n     var trDiv = parentTager.firstChild.querySelectorAll(b?\'.trDiv\':\'.LAtr\');\n     this.showButWhile(trDiv,b?4:0,parentTager);\n   },\n  showButWhile:function(trDiv,num,parentTager){\n     for(var i=num;i<trDiv.length;i++){\n       try{\n          if(trDiv[i].style.display == \'none\'){//\u5C55\u5F00\n            $(trDiv[i]).show(200);\n            $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS1\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS2\');\n          }else{\n            $(trDiv[i]).hide(200);\n            $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u663E\u793A\u66F4\u591A\u5185\u5BB9\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS2\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS1\');\n         }\n       }catch(e){\n      \t\tif(trDiv[i].style.display == \'none\'){//\u5C55\u5F00\n            trDiv[i].style.display = "block";\n          }else{\n            trDiv[i].style.display = "none";\n         }\n       }\n     } \n  },\n  render: function() {\n       var data = this.props.customData;\n       var me = this;\n       var table="";\n       var tableall = "";\n       var t1_value = "";\n       var tableallth="";\n       var tablethead="";\n       var tabletbody="";\n       var childrentbody=""; \n    \n       if(data && data!=\'\'){\n         if(data.table){\n           tableall=data.table.map(function(m,n){ \n                table=m.key.map(function (x,y){\n                  var t1=m.value[y];\n                  t1_value = t1.map(function(val,i){\n                    if(val.type == \'text\'){\n                      if(y==31){\n                        if(i==0){return(<div className="tdDiv"><span>{t1[0].value}</span>\u5E74<span>{t1[1].value}</span>\u6708</div>)}\n                      }else{\n                     \t  return( <div className="tdDiv">{val.value}</div>)\n                      }\n                    }else if(val.type == \'select\'){\n                       if(y==21){\n                        if(i==0){\n                          return(<div className="tdDiv">{t1[0].text}{t1[1].text}{t1[2].text}</div>)     \n                        }\n                      }else{\n                      \treturn(<div className="tdDiv">{val.text}</div>)\n                      }\n                    }else if(val.type == \'checkbox\'){\n                      var checkB=  val.value.map(function(a,b){\n                          return(\n                             <div className="checkB">\n                              <span>{val.tx[b]}</span><div className="imgB" style={{"display":val.i[b] == 0 ? \'none\' : \'\'}}></div>\n                             </div>\n                          )\n                       }) \n                      return(<div>{checkB}</div>)\n                    }\n                  })\n                    return(\n                      <div className="trDiv" style={{"display":y > 3 ? \'none\' : \'\'}}>\n                        <div className="box">{x}</div>{t1_value}\n                      </div>)\n                })  \n               \n                return (\n                  <div className="tableDiv">\n                    <div className=\'tableLi\' style={{"display":m.display[0]}}>\n                         <div className=\'line_\' id=\'line_\'>{m.thead[0]}</div>\n                      \t\t{table} \n                    </div>\n                    <div className="showClike" style={{"display":m.display[0]}} onClick={me.showButtonClick}>\n                      <div className="imgS1"></div>\n                      <div className="txS">\u663E\u793A\u66F4\u591A\u5185\u5BB9</div>\n                    </div>\n                  </div>\n                  )  \n           })\n         }\n         \n         if(data.title_table){\n            tableallth=data.title_table.map(function(m,n){ \n          \n                // tablethead=m.thead.map(function (x,y){ \n                //     return(\n                //      <div className=\'tableThead\'>{x}</div>\n                //     ) \n                // }) \n                tabletbody=m.tbody.map(function (x,y){ \n                   childrentbody=x.map(function(xx,yy){\n                      if(yy==1 || yy == 3){\n                        return(\n                           <div className={\'LAtd\'+yy}>{xx}</div>\n                         )\n                      }else if(yy == 4){\n                       var in_radio = xx.map(function(xxx,yyy){\n                          return(<input type={xxx.type} value={xxx.value} checked={xxx.i==1?\'checked\':\'\'}/>)\n                        })\n\t\t\t\t\t\t\t\t\t\t\t\treturn(<span className={\'LAtd\'+yy}>{in_radio}</span>)\t\n                      }\n                  })\n                  return(\n                      <div className=\'LAtr\' style={{"display":y > -1 ? \'none\' : \'\'}}>\n                        {childrentbody}\n                        <span className="LAimgX" data-index={y} onClick={me.mingxiClick}></span>\n                      </div>\n                   )\n                })\n                return (\n                  <div className="tableDiv">\n                    <div className=\'tableLi\'  style={{"display":m.display[0]}}>\n                      <div className=\'line_\' id=\'line_\'>{m.title[0]}</div>\n                       {tabletbody}\n                    </div> \n                     <div className="showClike" style={{"display":m.display[0]}} onClick={me.showButtonClick}>\n                        <div className="imgS1"></div>\n                        <div className="txS">\u663E\u793A\u66F4\u591A\u5185\u5BB9</div>\n                      </div>\n                   </div>\n                  ) \n                \n            })\n         }\n           \n         return (\n           <div className=\'loan_info\'>\n            <div className=\'StandardTable\'> \n                <div className="tableAll">{tableall}</div>\n                <div className="tableallth">{tableallth}</div>\n             </div>\n           </div>\n          )\n       }\n  }\n});';return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  mingxiClick: function mingxiClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'mingxiClick\',\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  showButtonClick: function showButtonClick(e) {\n    var parentTager;\n    if (e.target.getAttribute("class") == \'showClike\') {\n      parentTager = e.target.parentElement;\n    } else {\n      parentTager = e.target.parentElement.parentElement;\n    }\n    var b = parentTager.firstChild.querySelectorAll(\'.trDiv\').length > 0;\n    var trDiv = parentTager.firstChild.querySelectorAll(b ? \'.trDiv\' : \'.LAtr\');\n    this.showButWhile(trDiv, b ? 4 : 0, parentTager);\n  },\n  showButWhile: function showButWhile(trDiv, num, parentTager) {\n    for (var i = num; i < trDiv.length; i++) {\n      try {\n        if (trDiv[i].style.display == \'none\') {\n          //\u5C55\u5F00\n          $(trDiv[i]).show(200);\n          $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\');\n          $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS1\');\n          $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS2\');\n        } else {\n          $(trDiv[i]).hide(200);\n          $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u663E\u793A\u66F4\u591A\u5185\u5BB9\');\n          $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS2\');\n          $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS1\');\n        }\n      } catch (e) {\n        if (trDiv[i].style.display == \'none\') {\n          //\u5C55\u5F00\n          trDiv[i].style.display = "block";\n        } else {\n          trDiv[i].style.display = "none";\n        }\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    var table = "";\n    var tableall = "";\n    var t1_value = "";\n    var tableallth = "";\n    var tablethead = "";\n    var tabletbody = "";\n    var childrentbody = "";\n\n    if (data && data != \'\') {\n      if (data.table) {\n        tableall = data.table.map(function (m, n) {\n          table = m.key.map(function (x, y) {\n            var t1 = m.value[y];\n            t1_value = t1.map(function (val, i) {\n              if (val.type == \'text\') {\n                if (y == 31) {\n                  if (i == 0) {\n                    return React.createElement(\n                      \'div\',\n                      { className: \'tdDiv\' },\n                      React.createElement(\n                        \'span\',\n                        null,\n                        t1[0].value\n                      ),\n                      \'\\u5E74\',\n                      React.createElement(\n                        \'span\',\n                        null,\n                        t1[1].value\n                      ),\n                      \'\\u6708\'\n                    );\n                  }\n                } else {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    val.value\n                  );\n                }\n              } else if (val.type == \'select\') {\n                if (y == 21) {\n                  if (i == 0) {\n                    return React.createElement(\n                      \'div\',\n                      { className: \'tdDiv\' },\n                      t1[0].text,\n                      t1[1].text,\n                      t1[2].text\n                    );\n                  }\n                } else {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    val.text\n                  );\n                }\n              } else if (val.type == \'checkbox\') {\n                var checkB = val.value.map(function (a, b) {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'checkB\' },\n                    React.createElement(\n                      \'span\',\n                      null,\n                      val.tx[b]\n                    ),\n                    React.createElement(\'div\', { className: \'imgB\', style: { "display": val.i[b] == 0 ? \'none\' : \'\' } })\n                  );\n                });\n                return React.createElement(\n                  \'div\',\n                  null,\n                  checkB\n                );\n              }\n            });\n            return React.createElement(\n              \'div\',\n              { className: \'trDiv\', style: { "display": y > 3 ? \'none\' : \'\' } },\n              React.createElement(\n                \'div\',\n                { className: \'box\' },\n                x\n              ),\n              t1_value\n            );\n          });\n\n          return React.createElement(\n            \'div\',\n            { className: \'tableDiv\' },\n            React.createElement(\n              \'div\',\n              { className: \'tableLi\', style: { "display": m.display[0] } },\n              React.createElement(\n                \'div\',\n                { className: \'line_\', id: \'line_\' },\n                m.thead[0]\n              ),\n              table\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'showClike\', style: { "display": m.display[0] }, onClick: me.showButtonClick },\n              React.createElement(\'div\', { className: \'imgS1\' }),\n              React.createElement(\n                \'div\',\n                { className: \'txS\' },\n                \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n              )\n            )\n          );\n        });\n      }\n\n      if (data.title_table) {\n        tableallth = data.title_table.map(function (m, n) {\n\n          // tablethead=m.thead.map(function (x,y){ \n          //     return(\n          //      <div className=\'tableThead\'>{x}</div>\n          //     ) \n          // }) \n          tabletbody = m.tbody.map(function (x, y) {\n            childrentbody = x.map(function (xx, yy) {\n              if (yy == 1 || yy == 3) {\n                return React.createElement(\n                  \'div\',\n                  { className: \'LAtd\' + yy },\n                  xx\n                );\n              } else if (yy == 4) {\n                var in_radio = xx.map(function (xxx, yyy) {\n                  return React.createElement(\'input\', { type: xxx.type, value: xxx.value, checked: xxx.i == 1 ? \'checked\' : \'\' });\n                });\n                return React.createElement(\n                  \'span\',\n                  { className: \'LAtd\' + yy },\n                  in_radio\n                );\n              }\n            });\n            return React.createElement(\n              \'div\',\n              { className: \'LAtr\', style: { "display": y > -1 ? \'none\' : \'\' } },\n              childrentbody,\n              React.createElement(\'span\', { className: \'LAimgX\', \'data-index\': y, onClick: me.mingxiClick })\n            );\n          });\n          return React.createElement(\n            \'div\',\n            { className: \'tableDiv\' },\n            React.createElement(\n              \'div\',\n              { className: \'tableLi\', style: { "display": m.display[0] } },\n              React.createElement(\n                \'div\',\n                { className: \'line_\', id: \'line_\' },\n                m.title[0]\n              ),\n              tabletbody\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'showClike\', style: { "display": m.display[0] }, onClick: me.showButtonClick },\n              React.createElement(\'div\', { className: \'imgS1\' }),\n              React.createElement(\n                \'div\',\n                { className: \'txS\' },\n                \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n              )\n            )\n          );\n        });\n      }\n\n      return React.createElement(\n        \'div\',\n        { className: \'loan_info\' },\n        React.createElement(\n          \'div\',\n          { className: \'StandardTable\' },\n          React.createElement(\n            \'div\',\n            { className: \'tableAll\' },\n            tableall\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'tableallth\' },\n            tableallth\n          )\n        )\n      );\n    }\n  }\n});';
    },
    getData_control51_etipdq: function (elem) {
      if (elem && elem.querySelector(".location")) {
        var title = elem.querySelector(".location").innerHTML;var data = title.replace(/\s+/g, "").split(/\&gt\;/);return data[data.length - 1];
      }return "";
    },
    doAction_uiControl56_k5reqZ: function (data, elem) {
      if (data.eventType === "back") {
        var win_self = elem.ownerDocument.defaultView;if (win_self) {
          win_self.close();ysp.appMain.showLoading();
        }
      }
    },
    getTemplate_uiControl56_k5reqZ: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component {\n  handleBack (e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(target.localName === \"b\"){\n      target = target.parentElement;\n    }\n    if(handler){\n      handler({\n        eventType: \"back\"\n      })\n    }\n  }\n  render (){\n    \treturn(\n        <div className='customHeader'>\n          <Header amStyle=\"primary\" title={this.props.customData}>\n            <HeaderLeft>\n              <AMUI.Button amStyle=\"primary\" onClick={this.handleBack.bind(this)}><b className='icon\ticon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n            </HeaderLeft>\n          </Header>\n        </div>\n    )\n  }\n\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handleBack',\n    value: function handleBack(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (target.localName === \"b\") {\n        target = target.parentElement;\n      }\n      if (handler) {\n        handler({\n          eventType: \"back\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'customHeader' },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: this.props.customData },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.handleBack.bind(this) },\n              React.createElement('b', { className: 'icon\\ticon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control38_z5SkUH: function (elem) {
      if (elem) {
        var _elem = elem.parentElement.parentElement.parentElement.parentElement;var data = [];if ($(_elem).find("input:visible").length > 0) {
          $(_elem).find("input:visible").each(function (i, d) {
            data.push({ id: d.id, val: d.value });
          });
        }return data;
      }return "";
    },
    doAction_uiControl40_RE1zIC: function (data, elem) {
      if (data.eventType === "btnClick") {
        var id = data.dataCustom; // debugger;
        var _elem = $(elem.ownerDocument).find("table #" + id)[0];_elem.disabled = false;if (id === "seeContract") {
          if (ysp.appMain.isIOS()) {
            ysp.customHelper.openContractPage(data, _elem, document);
          } else {
            _elem.click();
          }
        } else {
          _elem.click();
        }
      }
    },
    getTemplate_uiControl40_RE1zIC: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    const {customData,customHandler} = this.props;\n    if(customData && customData.length > 0){\n      return (\n        <div className={"bottom_btns "+(customData.length==1?"oneBtn":"")}>\n          {\n            customData.map(function(d,i){\n              return (\n                <div className={"butt"+(i+1)}>\n                \t<input type="button" value={d.val} id={d.id} onClick={(e)=>{\n                      customHandler && customHandler({\n                        eventType: "btnClick",\n                        data: e.target.id\n                      })\n                    }}/>\n                </div>\n              )\n            })\n          }\n        </div>\n      )\n    }else{\n      return null;\n    }\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var _props = this.props,\n        customData = _props.customData,\n        customHandler = _props.customHandler;\n\n    if (customData && customData.length > 0) {\n      return React.createElement(\n        "div",\n        { className: "bottom_btns " + (customData.length == 1 ? "oneBtn" : "") },\n        customData.map(function (d, i) {\n          return React.createElement(\n            "div",\n            { className: "butt" + (i + 1) },\n            React.createElement("input", { type: "button", value: d.val, id: d.id, onClick: function onClick(e) {\n                customHandler && customHandler({\n                  eventType: "btnClick",\n                  data: e.target.id\n                });\n              } })\n          );\n        })\n      );\n    } else {\n      return null;\n    }\n  }\n});';
    }
  });
})(window, ysp);