(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control41_3IE2p6: function (elem) {
      if (elem) {
        data = {};data.title = elem.querySelector('.titleBar').textContent.trim();data.table = [];data.foot = $(elem).find('tr:last').children('td').eq(0).text().trim();if ($(elem).children('tbody').children('tr').length > 0) {
          $(elem).children('tbody').children('tr').each(function (x, y) {
            if ($(y).find('table').length > 0) {
              var $table = $(y).find('table').eq(0);var tableThead = $(y).prev('tr').find('td').first().text().trim();if (tableThead.indexOf('检查信息') > -1) {
                //检查信息
                var obj = {};obj.thead = tableThead;obj.display = $table[0].style.display;obj.value = [];if ($table[0].querySelectorAll('tr').length > 0) {
                  $($table[0].querySelectorAll('tr')).each(function (i, _tr) {
                    if (_tr.style.display == '') {
                      $(_tr.querySelectorAll('td')).each(function (m, n) {
                        var input_text = $(n).find("input[type='text']");var input_checkbox = $(n).find("input[type='checkbox']");var td = [];if (input_checkbox.length > 0) {
                          //checkbox
                          var cb = {};cb.value = [];cb.tx = [];cb.i = [];cb.type = 'checkbox';input_checkbox.each(function (qq, ww) {
                            cb.value.push(ww.value);var nv = ww.nextSibling == null ? "" : ww.nextSibling.nodeValue;cb.tx.push(nv.trim());cb.i.push(ww.checked ? 1 : 0);
                          });td.push(cb);
                        }if (input_text.length > 0) {
                          //input
                          input_text.each(function (index, intx) {
                            var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';td.push(valueobj);
                          });
                        }if (td.length > 0) {
                          obj.value.push(td);
                        }
                      });
                    }
                  });
                }data.table.push(obj);
              }if (tableThead.indexOf('企业基本情况') > -1) {
                //一
                var obj = {};obj.thead = tableThead;obj.display = $table[0].style.display;obj.key = [];obj.value = [];var objtable = {};if ($table.children('tbody').children('tr').length > 0) {
                  $($table.children('tbody').children('tr')).each(function (i, _tr) {
                    if (_tr.style.display == '') {
                      if (_tr.querySelector('.titlebar')) {
                        return;
                      } else if (_tr.querySelector('table')) {
                        //企业相关人员列表
                        objtable.title = $(_tr).prev('tr').find('td').first().text().trim();objtable.display = _tr.querySelector('table').style.display;objtable.thead = [];objtable.tbody = [];$(_tr.querySelector('table').querySelectorAll('.titlebarHUI')).each(function (mm, nn) {
                          objtable.thead.push(nn.textContent.trim());
                        });$(_tr.querySelector('table')).children('tbody').children('tr[onclick]:visible').each(function (trm, trn) {
                          var trs = [];$(trn).children('td:visible').each(function (m, n) {
                            trs.push(n.textContent.trim());
                          });objtable.tbody.push(trs);
                        });
                      } else {
                        //企业基本情况
                        $(_tr.querySelectorAll('td')).each(function (m, n) {
                          //key
                          if (n.getAttribute('class') == 'RinghtTrYellow') {
                            if (n.textContent.trim() == '') {} else {
                              obj.key.push(n.textContent.trim());
                            }
                          }
                        });$(_tr.querySelectorAll('td')).each(function (m, n) {
                          if (m == 1 || m == 3) {
                            //value
                            var input_text = $(n).find("input[type='text']");var selected_option = $(n).find("select");var input_checkbox = $(n).find("input[type='checkbox']");var td = [];if (input_text.length > 0) {
                              //input
                              input_text.each(function (index, intx) {
                                var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';td.push(valueobj);
                              });
                            } else {
                              input_text = $(n).find("input")[0];if (input_text && i == 5) {
                                var valueobj = {};valueobj.value = input_text.value;valueobj.type = 'text';td.push(valueobj);
                              }
                            }if (selected_option.length > 0) {
                              //select框
                              selected_option.each(function (index, slop) {
                                var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.options[idx].value;valueobj.text = slop.options[idx].text;valueobj.type = 'select';td.push(valueobj);
                              });
                            }if (input_checkbox.length > 0) {
                              //checkbox
                              var cb = {};cb.value = [];cb.tx = [];cb.i = [];cb.type = 'checkbox';input_checkbox.each(function (qq, ww) {
                                cb.value.push(ww.value);var nv = ww.nextSibling == null ? "" : ww.nextSibling.nodeValue;cb.tx.push(nv.trim());cb.i.push(ww.checked ? 1 : 0);
                              });td.push(cb);
                            }if (td.length > 0) {
                              obj.value.push(td);
                            }
                          }
                        });
                      }
                    }
                  });
                }data.table.push(obj);data.table.push(objtable);
              }if (tableThead.indexOf('企业资产') > -1) {
                var obj = {};obj.thead = tableThead;obj.display = $table[0].style.display;obj.key = [];obj.value = [];var objtable = {};var objtable1 = {};objtable1.thead = $table[0].querySelector('.titlebar').textContent.trim();objtable1.display = "";objtable1.key = [];objtable1.value = [];if ($table.children('tbody').children('tr').length > 0) {
                  $($table.children('tbody').children('tr')).each(function (i, _tr) {
                    if (_tr.style.display == '') {
                      if (i >= 0 && i <= 5) {
                        $(_tr.querySelectorAll('td')).each(function (m, n) {
                          if (n.getAttribute('class') == 'RinghtTrYellow') {
                            if (n.textContent.trim() == '') {} else {
                              obj.key.push(n.textContent.trim());
                            }
                          }if (m == 1 || m == 3) {
                            var input_text = $(n).find("input[type='text']");var selected_option = $(n).find("select");var td = [];if (input_text.length > 0) {
                              //input
                              input_text.each(function (index, intx) {
                                var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';td.push(valueobj);
                              });
                            }if (selected_option.length > 0) {
                              //select框
                              selected_option.each(function (index, slop) {
                                var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.options[idx].value;valueobj.text = slop.options[idx].text;valueobj.type = 'select';td.push(valueobj);
                              });
                            }if (td.length > 0) {
                              obj.value.push(td);
                            }
                          }
                        });
                      }if (_tr.querySelector('table')) {
                        objtable.thead = _tr.querySelector('table').querySelector('tr').querySelector('td').textContent.trim();objtable.display = _tr.querySelector('table').style.display;objtable.key = [];objtable.value = [];
                        if ($(_tr.querySelector('table')).children('tbody').children('tr').length > 0) {
                          $(_tr.querySelector('table')).children('tbody').children('tr').each(function (x, y) {
                            $(y.querySelectorAll('td')).each(function (m, n) {
                              if (n.getAttribute('class') == 'RinghtTrYellow') {
                                if (n.textContent.trim() == '') {} else {
                                  objtable.key.push(n.textContent.trim());
                                }
                              }if (m == 1 || m == 3) {
                                var input_text = $(n).find("input[type='text']");var selected_option = $(n).find("select");var td = [];if (input_text.length > 0) {
                                  //input
                                  input_text.each(function (index, intx) {
                                    var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';td.push(valueobj);
                                  });
                                }if (selected_option.length > 0) {
                                  //select框
                                  selected_option.each(function (index, slop) {
                                    var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.options[idx].value;valueobj.text = slop.options[idx].text;valueobj.type = 'select';td.push(valueobj);
                                  });
                                }if (td.length > 0) {
                                  objtable.value.push(td);
                                }
                              }
                            });
                          });
                        }
                      }if (i >= 8) {
                        $(_tr.querySelectorAll('td')).each(function (m, n) {
                          if (n.getAttribute('class') == 'RinghtTrYellow') {
                            if (n.textContent.trim() == '') {} else {
                              objtable1.key.push(n.textContent.trim());
                            }
                          }if (m == 1 || m == 3) {
                            var input_text = $(n).find("input[type='text']");var selected_option = $(n).find("select");var td = [];if (input_text.length > 0) {
                              //input
                              input_text.each(function (index, intx) {
                                var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';td.push(valueobj);
                              });
                            }if (selected_option.length > 0) {
                              //select框
                              selected_option.each(function (index, slop) {
                                var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.options[idx].value;valueobj.text = slop.options[idx].text;valueobj.type = 'select';td.push(valueobj);
                              });
                            }if (td.length > 0) {
                              objtable1.value.push(td);
                            }
                          }
                        });
                      }
                    }
                  });
                }data.table.push(obj);data.table.push(objtable);data.table.push(objtable1);
              }if ($table[0].querySelector('.titlebar') && $table[0].querySelector('.titlebar').textContent.indexOf('保证人在本行风险敞口') > -1) {
                var obj = {};obj.thead = $table.children('tbody').children('tr').eq(0).children('td').eq(0).text().trim();obj.display = $table[0].style.display;obj.key = [];obj.value = [];var objtable = {};objtable.thead = $table.children('tbody').children('tr').eq(2).children('td').eq(0).text().trim();objtable.display = $table[0].style.display;objtable.key = [];objtable.value = [];if ($table.children('tbody').children('tr').length > 0) {
                  $($table.children('tbody').children('tr')).each(function (i, _tr) {
                    if (_tr.style.display == '') {
                      if (i == 1) {
                        $(_tr.querySelectorAll('td')).each(function (m, n) {
                          if (n.getAttribute('class') == 'RinghtTrYellow') {
                            if (n.textContent.trim() == '') {} else {
                              obj.key.push(n.textContent.trim());
                            }
                          }if (m == 1 || m == 3) {
                            var input_text = $(n).find("input[type='text']");var selected_option = $(n).find("select");var td = [];if (input_text.length > 0) {
                              //input
                              input_text.each(function (index, intx) {
                                var valueobj = {};valueobj.value = intx.value;valueobj.type = 'text';td.push(valueobj);
                              });
                            }if (selected_option.length > 0) {
                              //select框
                              selected_option.each(function (index, slop) {
                                var valueobj = {};var idx = slop.selectedIndex;valueobj.value = slop.options[idx].value;valueobj.text = slop.options[idx].text;valueobj.type = 'select';td.push(valueobj);
                              });
                            }if (td.length > 0) {
                              obj.value.push(td);
                            }
                          }
                        });
                      }if (i == 3) {
                        $(_tr.querySelectorAll('td')).each(function (m, n) {
                          if (n.getAttribute('class') == 'RinghtTrYellow') {
                            if (n.textContent.trim() == '') {} else {
                              objtable.key.push(n.textContent.trim());
                            }
                          }if (m == 1 || m == 3) {
                            var td = [];var valObj = {};valObj.type = 'text';valObj.value = n.textContent.trim();td.push(valObj);if (td.length > 0) {
                              objtable.value.push(td);
                            }
                          }
                        });
                      }
                    }
                  });
                }data.table.push(obj);data.table.push(objtable);
              }if ($table[0].querySelector('.titlebar') && $table[0].querySelector('.titlebar').textContent.indexOf('风险提示') > -1) {
                var obj = {};obj.thead = $table.children('tbody').children('tr').eq(0).children('td').eq(0).text().trim();obj.display = $table[0].style.display;obj.key = [];obj.value = [];if ($table.children('tbody').children('tr').length > 0) {
                  $($table.children('tbody').children('tr')).each(function (i, _tr) {
                    if (_tr.style.display == '') {
                      if (i == 1) {
                        $(_tr.querySelectorAll('td')).each(function (m, n) {
                          if (n.getAttribute('class') == 'RinghtTrYellow') {
                            if (n.textContent.trim() == '') {} else {
                              obj.key.push(n.textContent.trim());
                            }
                          }if (m == 1 || m == 3) {
                            var td = [];var valObj = {};valObj.type = 'text';valObj.value = n.textContent.trim();td.push(valObj);if (td.length > 0) {
                              obj.value.push(td);
                            }
                          }
                        });
                      }
                    }
                  });
                }data.table.push(obj);
              }
            }
          });
        }return data;
      } else {
        return "";
      }
    }, doAction_uiControl44_sTnr2R: function (data, elem) {}, getTemplate_uiControl44_sTnr2R: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  reButtClick:function(e){\n    var idx =  $(\'.StandardTable\').children(\'.heTongPage\').find(\'.reButt\').attr(\'id\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.tableLi\').eq(parseInt(idx)).css(\'display\',\'none\');\n    $(\'.StandardTable\').children(\'.heTongPage\').css(\'display\',\'none\');\n    $(\'.StandardTable\').children(\'.tableAll\').css(\'display\',\'block\');\n    $(\'#uiControl29_JwTpSvbody\').css(\'display\',\'block\');\n    $(\'#uiControl46_itMJqZ\').css(\'display\',\'block\');\n  },\n  heTongClick:function(e){\n    var idx = e.target.getAttribute(\'data-index\');\n    $(\'.StandardTable\').children(\'.tableAll\').css(\'display\',\'none\');\n    $(\'#uiControl29_JwTpSvbody\').css(\'display\',\'none\');\n    $(\'#uiControl46_itMJqZ\').css(\'display\',\'none\');\n    $(\'.StandardTable\').children(\'.heTongPage\').css(\'display\',\'block\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.tableLi\').eq(parseInt(idx)).css(\'display\',\'block\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.reButt\').attr(\'id\',idx);\n  },\n  showButtonClick:function(e){\n     var parentTager;\n     if(e.target.getAttribute("class")==\'showClike\'){\n        parentTager = e.target.parentElement;\n     }else{\n        parentTager = e.target.parentElement.parentElement;\n     }\n     var b = $(parentTager.firstChild).children(\'.trDiv\').length>0;\n     var a = $(parentTager.firstChild).children(\'.LAtr\').length>0;\n     var trDiv = $(parentTager.firstChild).children(b?\'.trDiv\':a?\'.LAtr\':\'\');\n     this.showButWhile(trDiv,b?4:a?2:0,parentTager);\n   },\n   showButWhile:function(trDiv,num,parentTager){\n     for(var i=num;i<trDiv.length;i++){\n          if(trDiv[i].style.display == \'none\'){//\u5C55\u5F00\n            $(trDiv[i]).show(200);\n            $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS1\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS2\');\n          }else{\n            $(trDiv[i]).hide(200);\n            $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u663E\u793A\u66F4\u591A\u5185\u5BB9\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS2\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS1\');\n         }\n     } \n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    var tableall = "";\n    var tableDiv = "";\n    if(data && data!=\'\'){\n       if(data.table){\n         tableall=data.table.map(function(m,n){\n           if(m.thead.indexOf(\'\u68C0\u67E5\u4FE1\u606F\')>-1){\n             var table = m.value.map(function(t1,nn){\n                  var t1_value = t1.map(function(val,i){\n                    if(val.type == \'text\'){\n                     \t return( <div className="tdDiv">{val.value}</div>)\n                    }else if(val.type == \'select\'){\n                      return(<div className="tdDiv">{val.text}</div>)\n                    }else if(val.type == \'checkbox\'){\n                      var checkB=  val.value.map(function(a,b){\n                          return(\n                             <div className="checkB">\n                              <span>{val.tx[b]}</span><div className="imgB" style={{"display":val.i[b] == 0 ? \'none\' : \'\'}}></div>\n                             </div>\n                          )\n                       }) \n                      return(<div>{checkB}</div>)\n                    }\n                  })\n                  return(\n                      <div className="trDiv">\n                        {t1_value}\n                      </div>)\n                  })\n                return(\n                  <div className="tableDiv">\n                    <div className=\'tableLi\' style={{"display":m.display[0]}}>\n                         <div className=\'line_\' id=\'line_\'>{m.thead}</div>\n                      \t\t{table}\n                     </div>\n                  </div>\n                )\n           }else if(m.title){//\u4F01\u4E1A\u76F8\u5173\u4EBA\u5458\u5217\u8868\n              var tabletbody=m.tbody.map(function (aa,b){\n               var  childrentbody=aa.map(function(xx,yy){\n                    if(yy==0 || yy == 1){\n                      return(\n                         <div className={\'LA1td\'+yy}>{xx}</div>\n                       )\n                    }\n                })\n                return(\n                    <div className=\'LAtr\' style={{"display":b > 1 ? \'none\' : \'\'}}>\n                      {childrentbody}\n                      <span className="LAimgX" data-index={b} onClick={me.heTongClick}></span>\n                    </div>\n                 )\n              })\n              return (\n                <div className="tableDiv">\n                  <div className=\'tableLi\'  style={{"display":m.display}}>\n                    <div className=\'line_\' id=\'line_\'>{m.title}</div>\n                     {tabletbody}\n                  </div> \n                   <div className="showClike" style={{"display":m.display==\'none\'?\'none\':m.tbody.length<2?\'none\':\'\'}} onClick={me.showButtonClick}>\n                      <div className="imgS1"></div>\n                      <div className="txS">\u663E\u793A\u66F4\u591A\u5185\u5BB9</div>\n                    </div>\n                 </div>\n                )      \n           }else{\n               var table=m.key.map(function (x,y){\n                  var t1=m.value[y];\n                  var t1_value = t1.map(function(val,i){\n                    if(val.type == \'text\'){\n                     \t return( <div className="tdDiv">{val.value}</div>)\n                    }else if(val.type == \'select\'){\n                      return(<div className="tdDiv">{val.text}</div>)\n                    }else if(val.type == \'checkbox\'){\n                      var checkB=  val.value.map(function(a,b){\n                          return(\n                             <div className="checkB">\n                              <span>{val.tx[b]}</span><div className="imgB" style={{"display":val.i[b] == 0 ? \'none\' : \'\'}}></div>\n                             </div>\n                          )\n                       }) \n                      return(<div>{checkB}</div>)\n                    }\n                  })\n                    return(\n                      <div className="trDiv" style={{"display":y > 3 ? \'none\' : \'\'}}>\n                        <div className="box">{x}</div>{t1_value}\n                      </div>\n                    )\n                })  \n               \n                return (\n                  <div className="tableDiv">\n                    <div className=\'tableLi\' style={{"display":m.display}}>\n                         <div className=\'line_\' id=\'line_\'>{m.thead}</div>\n                      \t\t{table} \n                    </div>\n                    <div className="showClike" style={{"display":m.display==\'none\'?\'none\':m.key.length<4?\'none\':\'\'}} onClick={me.showButtonClick}>\n                      <div className="imgS1"></div>\n                      <div className="txS">\u663E\u793A\u66F4\u591A\u5185\u5BB9</div>\n                    </div>\n                  </div>\n                  )     \n           }\n         })\n         \n         tableDiv=data.table.map(function(m,n){\n             if(m.title){\n                var tableLi = m.tbody.map(function(a,b){\n                  var trdiv = a.map(function(val,i){\n                       return(\n                         <div className="trDiv">\n                           <div>{m.thead[i]}</div>\n                           <div>{val}</div>\n                         </div>\n                       )\n                   })\n                  return(\n                    <div className="tableLi" data-index={b}>\n                      <div className="line_">\u4F01\u4E1A\u76F8\u5173\u4EBA\u5458\u8BE6\u60C5</div>\n                      {trdiv}\n                    </div>\n                  )\n                 })\n                return(\n                   <div className="tableDiv">\n                     {tableLi}\n                   </div>\n                )\n             }\n           })\n       }\n      return (\n           <div className=\'loan_info\'>\n            <div className=\'StandardTable\'> \n                <div className="tableAll">{tableall}</div>\n              \t<div className="heTongPage">\n                   {tableDiv}\n                   <div className="reButt" onClick={me.reButtClick}><span>\u786E  \u5B9A</span></div>\n                </div>\n             </div>\n           </div>\n      )\n    }\n  }\n});';return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  reButtClick: function reButtClick(e) {\n    var idx = $(\'.StandardTable\').children(\'.heTongPage\').find(\'.reButt\').attr(\'id\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.tableLi\').eq(parseInt(idx)).css(\'display\', \'none\');\n    $(\'.StandardTable\').children(\'.heTongPage\').css(\'display\', \'none\');\n    $(\'.StandardTable\').children(\'.tableAll\').css(\'display\', \'block\');\n    $(\'#uiControl29_JwTpSvbody\').css(\'display\', \'block\');\n    $(\'#uiControl46_itMJqZ\').css(\'display\', \'block\');\n  },\n  heTongClick: function heTongClick(e) {\n    var idx = e.target.getAttribute(\'data-index\');\n    $(\'.StandardTable\').children(\'.tableAll\').css(\'display\', \'none\');\n    $(\'#uiControl29_JwTpSvbody\').css(\'display\', \'none\');\n    $(\'#uiControl46_itMJqZ\').css(\'display\', \'none\');\n    $(\'.StandardTable\').children(\'.heTongPage\').css(\'display\', \'block\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.tableLi\').eq(parseInt(idx)).css(\'display\', \'block\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.reButt\').attr(\'id\', idx);\n  },\n  showButtonClick: function showButtonClick(e) {\n    var parentTager;\n    if (e.target.getAttribute("class") == \'showClike\') {\n      parentTager = e.target.parentElement;\n    } else {\n      parentTager = e.target.parentElement.parentElement;\n    }\n    var b = $(parentTager.firstChild).children(\'.trDiv\').length > 0;\n    var a = $(parentTager.firstChild).children(\'.LAtr\').length > 0;\n    var trDiv = $(parentTager.firstChild).children(b ? \'.trDiv\' : a ? \'.LAtr\' : \'\');\n    this.showButWhile(trDiv, b ? 4 : a ? 2 : 0, parentTager);\n  },\n  showButWhile: function showButWhile(trDiv, num, parentTager) {\n    for (var i = num; i < trDiv.length; i++) {\n      if (trDiv[i].style.display == \'none\') {\n        //\u5C55\u5F00\n        $(trDiv[i]).show(200);\n        $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\');\n        $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS1\');\n        $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS2\');\n      } else {\n        $(trDiv[i]).hide(200);\n        $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u663E\u793A\u66F4\u591A\u5185\u5BB9\');\n        $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS2\');\n        $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS1\');\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    var tableall = "";\n    var tableDiv = "";\n    if (data && data != \'\') {\n      if (data.table) {\n        tableall = data.table.map(function (m, n) {\n          if (m.thead.indexOf(\'\u68C0\u67E5\u4FE1\u606F\') > -1) {\n            var table = m.value.map(function (t1, nn) {\n              var t1_value = t1.map(function (val, i) {\n                if (val.type == \'text\') {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    val.value\n                  );\n                } else if (val.type == \'select\') {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    val.text\n                  );\n                } else if (val.type == \'checkbox\') {\n                  var checkB = val.value.map(function (a, b) {\n                    return React.createElement(\n                      \'div\',\n                      { className: \'checkB\' },\n                      React.createElement(\n                        \'span\',\n                        null,\n                        val.tx[b]\n                      ),\n                      React.createElement(\'div\', { className: \'imgB\', style: { "display": val.i[b] == 0 ? \'none\' : \'\' } })\n                    );\n                  });\n                  return React.createElement(\n                    \'div\',\n                    null,\n                    checkB\n                  );\n                }\n              });\n              return React.createElement(\n                \'div\',\n                { className: \'trDiv\' },\n                t1_value\n              );\n            });\n            return React.createElement(\n              \'div\',\n              { className: \'tableDiv\' },\n              React.createElement(\n                \'div\',\n                { className: \'tableLi\', style: { "display": m.display[0] } },\n                React.createElement(\n                  \'div\',\n                  { className: \'line_\', id: \'line_\' },\n                  m.thead\n                ),\n                table\n              )\n            );\n          } else if (m.title) {\n            //\u4F01\u4E1A\u76F8\u5173\u4EBA\u5458\u5217\u8868\n            var tabletbody = m.tbody.map(function (aa, b) {\n              var childrentbody = aa.map(function (xx, yy) {\n                if (yy == 0 || yy == 1) {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'LA1td\' + yy },\n                    xx\n                  );\n                }\n              });\n              return React.createElement(\n                \'div\',\n                { className: \'LAtr\', style: { "display": b > 1 ? \'none\' : \'\' } },\n                childrentbody,\n                React.createElement(\'span\', { className: \'LAimgX\', \'data-index\': b, onClick: me.heTongClick })\n              );\n            });\n            return React.createElement(\n              \'div\',\n              { className: \'tableDiv\' },\n              React.createElement(\n                \'div\',\n                { className: \'tableLi\', style: { "display": m.display } },\n                React.createElement(\n                  \'div\',\n                  { className: \'line_\', id: \'line_\' },\n                  m.title\n                ),\n                tabletbody\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'showClike\', style: { "display": m.display == \'none\' ? \'none\' : m.tbody.length < 2 ? \'none\' : \'\' }, onClick: me.showButtonClick },\n                React.createElement(\'div\', { className: \'imgS1\' }),\n                React.createElement(\n                  \'div\',\n                  { className: \'txS\' },\n                  \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n                )\n              )\n            );\n          } else {\n            var table = m.key.map(function (x, y) {\n              var t1 = m.value[y];\n              var t1_value = t1.map(function (val, i) {\n                if (val.type == \'text\') {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    val.value\n                  );\n                } else if (val.type == \'select\') {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'tdDiv\' },\n                    val.text\n                  );\n                } else if (val.type == \'checkbox\') {\n                  var checkB = val.value.map(function (a, b) {\n                    return React.createElement(\n                      \'div\',\n                      { className: \'checkB\' },\n                      React.createElement(\n                        \'span\',\n                        null,\n                        val.tx[b]\n                      ),\n                      React.createElement(\'div\', { className: \'imgB\', style: { "display": val.i[b] == 0 ? \'none\' : \'\' } })\n                    );\n                  });\n                  return React.createElement(\n                    \'div\',\n                    null,\n                    checkB\n                  );\n                }\n              });\n              return React.createElement(\n                \'div\',\n                { className: \'trDiv\', style: { "display": y > 3 ? \'none\' : \'\' } },\n                React.createElement(\n                  \'div\',\n                  { className: \'box\' },\n                  x\n                ),\n                t1_value\n              );\n            });\n\n            return React.createElement(\n              \'div\',\n              { className: \'tableDiv\' },\n              React.createElement(\n                \'div\',\n                { className: \'tableLi\', style: { "display": m.display } },\n                React.createElement(\n                  \'div\',\n                  { className: \'line_\', id: \'line_\' },\n                  m.thead\n                ),\n                table\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'showClike\', style: { "display": m.display == \'none\' ? \'none\' : m.key.length < 4 ? \'none\' : \'\' }, onClick: me.showButtonClick },\n                React.createElement(\'div\', { className: \'imgS1\' }),\n                React.createElement(\n                  \'div\',\n                  { className: \'txS\' },\n                  \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n                )\n              )\n            );\n          }\n        });\n\n        tableDiv = data.table.map(function (m, n) {\n          if (m.title) {\n            var tableLi = m.tbody.map(function (a, b) {\n              var trdiv = a.map(function (val, i) {\n                return React.createElement(\n                  \'div\',\n                  { className: \'trDiv\' },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    m.thead[i]\n                  ),\n                  React.createElement(\n                    \'div\',\n                    null,\n                    val\n                  )\n                );\n              });\n              return React.createElement(\n                \'div\',\n                { className: \'tableLi\', \'data-index\': b },\n                React.createElement(\n                  \'div\',\n                  { className: \'line_\' },\n                  \'\\u4F01\\u4E1A\\u76F8\\u5173\\u4EBA\\u5458\\u8BE6\\u60C5\'\n                ),\n                trdiv\n              );\n            });\n            return React.createElement(\n              \'div\',\n              { className: \'tableDiv\' },\n              tableLi\n            );\n          }\n        });\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'loan_info\' },\n        React.createElement(\n          \'div\',\n          { className: \'StandardTable\' },\n          React.createElement(\n            \'div\',\n            { className: \'tableAll\' },\n            tableall\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'heTongPage\' },\n            tableDiv,\n            React.createElement(\n              \'div\',\n              { className: \'reButt\', onClick: me.reButtClick },\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u786E  \\u5B9A\'\n              )\n            )\n          )\n        )\n      );\n    }\n  }\n});';
    }, getData_control57_7zyJQk: function (elem) {
      if (elem) {
        if ($(elem).children('tbody').children('tr').children('td').eq(0)) {
          return $(elem).children('tbody').children('tr').children('td').eq(0).text();
        }
      } else {
        return "";
      }
    },
    doAction_uiControl62_U0AeJE: function (data, elem) {},
    getTemplate_uiControl62_U0AeJE: function () {
      var selfTemplate = 'import { Component} from \'react\';\nimport { Header, HeaderLeft } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nexport default class extends Component{\n\xA0 render (){\n\xA0\xA0\xA0 return(\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 <Header amStyle="primary" title={this.props.customData}>\n          <HeaderLeft>\n          <AMUI.Button amStyle="primary" onClick={back}>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n\xA0\xA0\xA0 )\n\xA0\xA0}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n          value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n          _inherits(_class, _Component);\n\n          function _class() {\n                    _classCallCheck(this, _class);\n\n                    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n          }\n\n          _createClass(_class, [{\n                    key: \'render\',\n                    value: function render() {\n                              return React.createElement(\n                                        _yspInteriorComponents.Header,\n                                        { amStyle: \'primary\', title: this.props.customData },\n                                        React.createElement(\n                                                  _yspInteriorComponents.HeaderLeft,\n                                                  null,\n                                                  React.createElement(\n                                                            AMUI.Button,\n                                                            { amStyle: \'primary\', onClick: _appRenderer.back },\n                                                            \'\\u8FD4\\u56DE\'\n                                                  )\n                                        )\n                              );\n                    }\n          }]);\n\n          return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control62_RQoUPv: function (elem) {
      if (!elem) {
        return;
      }return elem.value;
    },
    doAction_uiControl69_PGxhzq: function (data, elem) {
      var id = data.customData;if (data.eventType == 'toReturnClick') {
        elem.removeAttribute('disabled');elem.click();
      }
    },
    getTemplate_uiControl69_PGxhzq: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  toReturnClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'toReturnClick\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    return (\n      <div className="butt2">\n        <input type=\'button\' value={data} onClick={me.toReturnClick}/>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  toReturnClick: function toReturnClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'toReturnClick\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \'div\',\n      { className: \'butt2\' },\n      React.createElement(\'input\', { type: \'button\', value: data, onClick: me.toReturnClick })\n    );\n  }\n});';
    }
  });
})(window, ysp);