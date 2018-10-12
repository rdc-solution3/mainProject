(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control18_TRgmwG: function (elem) {
      if (elem) {
        var _title = $(elem).children('legend').children('strong').text();var _data = []; // var divSelect=$(elem).children('div').find('select')[0];
        // var tableSelect=$(elem).children('table').find('select')[0];
        $(elem).children().find('select>option').each(function (optIdx, opt) {
          _data.push(opt.textContent);
        });var btns = [];var btnCheckedAll = '';$(elem).parent().next().find('div>input[type="button"]').each(function (btnIdx, btn) {
          btns.push(btn.value);btn.value == '全选' && (btnCheckedAll = true);
        });var _href = elem.ownerDocument.defaultView && elem.ownerDocument.defaultView.location.href;var _html = '';if (_href.indexOf('(frmSendToInnerDept)') != -1) {
          //分发功能选择部门页面
          var mainTree = elem.querySelector('iframe');if (mainTree) {
            mainTree = mainTree.contentDocument.querySelector('#mainTree');
          }if (mainTree) {
            $(mainTree).find('img').each(function (imgIdx, img) {
              img.src = img.src;if (img.name == 'ccc') {
                img.setAttribute('data-index', imgIdx);
              }
            }); // $(mainTree).find('input[type="checkbox"]').each(function (chbIdx, chb) {
            //   chb.setAttribute('checked',chb.checked);
            // });
            _html = mainTree.outerHTML;
          }
        }if (_title == '待选人员' || _title == '待选部门' || _title == '待选项' || _title == '待选增加部门' || _title == '待选增加用户：') {
          return { _title: _title, _data: _data, btns: btns, btnCheckedAll: btnCheckedAll, _html: _html };
        }
      } else {
        return null;
      }
    }, doAction_uiControl21_GmTaIT: function (data, elem) {
      if (data.eventType == 'handleLiClick') {
        $(elem).children().find('select>option')[+data.dataCustom].selected = true;if (elem.parentElement.nextElementSibling.querySelector('div>input[type="button"]')) {
          elem.parentElement.nextElementSibling.querySelector('div>input[type="button"]').click();
        } else {
          elem.parentElement.nextElementSibling.nextElementSibling.querySelector('div>input[type="button"]').click();
        }$(elem).children().find('select>option')[+data.dataCustom].selected = false;
      } else if (data.eventType == 'checkedAll') {
        elem.parentElement.nextElementSibling.querySelectorAll('div>input[type="button"]')[1].click();$(elem).children('div').find('select>option').each(function (optIdx, opt) {
          opt.selected = true;
        });
      } else if (data.eventType == 'handleClick') {
        var mainTree = elem.querySelector('iframe').contentDocument.querySelector('#mainTree');var dataCustom = data.dataCustom;var tagName = dataCustom.tagName;var id = dataCustom.id;if (tagName == 'IMG') {
          $(mainTree).find('img')[id].click();
        } else if (tagName == 'INPUT') {
          //$(mainTree).find('input[id="' + id + '"]')[0].onClick = elem.querySelector('iframe').contentDocument.defaultView.selectthis;
          $(mainTree).find('input[id="' + id + '"]')[0].click();
        }
      } else if (data.eventType == 'handleBtnChecked') {
        var btnChecked = elem.parentNode.nextElementSibling.querySelector('input[value="选择"]');if (btnChecked) {
          btnChecked.click(); // var fSelect=document.forms[0].CycleGroupNoSelect;
          // var tSelect=forms[0].CycleGroupSelect;
          // var tmpLst=forms[0].CycleGroupSelectList;
          // b = document.forms[0].units.value;
          // addClick1(b,tSelect,tmpLst)
          // document.forms[0].units.value = "";
          // document.forms[0].unitsFullName.value = "";
        }
      }
    },
    getTemplate_uiControl21_GmTaIT: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleLiClick:function(e){\n    var target=e.target;\n    this.props.customHandler({\n      data:target.dataset.index,\n      eventType:\'handleLiClick\'\n    })\n  },\n  checkedAll:function(){\n    this.props.customHandler({\n      eventType:\'checkedAll\'\n    })\n  },\n  deleteAll:function(){\n    this.props.customHandler({\n      eventType:\'deleteAll\'\n    })\n  },\n  handleClick:function(e){\n    var target=e.target;\n    var data={};\n    if(target.tagName==\'IMG\'){\n      data.tagName=\'IMG\',\n      data.id=target.dataset.index\n    }else if(target.tagName==\'SPAN\'){\n      target=target.querySelector(\'input\');\n      target.click();\n      data.tagName=\'SPAN\',\n      data.id=target.id\n    }else if(target.tagName==\'INPUT\'){\n      data.tagName=\'INPUT\',\n      data.id=target.id\n    }else if(target.tagName==\'TD\'){\n      target=target.previousElementSibling.querySelector(\'input\');\n      target.click();\n      data.tagName=\'TD\',\n      data.id=target.id\n    }\n    this.props.customHandler({\n      data:data,\n      eventType:\'handleClick\'\n    })\n  },\n  handleBtnChecked:function(){\n    this.props.customHandler({\n      eventType:\'handleBtnChecked\'\n    });\n    var mainTree=document.getElementById(\'mainTree\');\n    if(mainTree){\n      var checkboxs=mainTree.querySelectorAll(\'input[type="checkbox"]:checked\');\n      for(var i=0;i<checkboxs.length;i++){\n        checkboxs[i].checked=false;\n      }\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'dxryContainer\'>\n          <h4>\n            <span>{data._title}</span>\n            <div style={{\'float\':\'right\'}}>\n            \t<button onClick={this.checkedAll}>{data.btnCheckedAll && \'\u5168\u9009\'}</button>\n              <button style={{\'display\':(data._data.length==0 && data._html!=\'\')?\'inline\':\'none\'}} onClick={this.handleBtnChecked}>\u9009\u62E9</button>\n            </div>\n            \n          </h4>\n          <section>\n            <ul onClick={this.handleLiClick}>\n              {\n\t\t\t\t\t\t\t\tdata._data[0] && data._data.map(function(val,idx){\n                  return <li data-index={idx}>{val}</li>\n                })\n              }\n            </ul>\n            <div style={{\'display\':(data._data.length==0 && data._html!=\'\')?\'block\':\'none\'}} dangerouslySetInnerHTML = {{__html: data._html}} onClick={this.handleClick}></div>\n          </section>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleLiClick: function handleLiClick(e) {\n    var target = e.target;\n    this.props.customHandler({\n      data: target.dataset.index,\n      eventType: \'handleLiClick\'\n    });\n  },\n  checkedAll: function checkedAll() {\n    this.props.customHandler({\n      eventType: \'checkedAll\'\n    });\n  },\n  deleteAll: function deleteAll() {\n    this.props.customHandler({\n      eventType: \'deleteAll\'\n    });\n  },\n  handleClick: function handleClick(e) {\n    var target = e.target;\n    var data = {};\n    if (target.tagName == \'IMG\') {\n      data.tagName = \'IMG\', data.id = target.dataset.index;\n    } else if (target.tagName == \'SPAN\') {\n      target = target.querySelector(\'input\');\n      target.click();\n      data.tagName = \'SPAN\', data.id = target.id;\n    } else if (target.tagName == \'INPUT\') {\n      data.tagName = \'INPUT\', data.id = target.id;\n    } else if (target.tagName == \'TD\') {\n      target = target.previousElementSibling.querySelector(\'input\');\n      target.click();\n      data.tagName = \'TD\', data.id = target.id;\n    }\n    this.props.customHandler({\n      data: data,\n      eventType: \'handleClick\'\n    });\n  },\n  handleBtnChecked: function handleBtnChecked() {\n    this.props.customHandler({\n      eventType: \'handleBtnChecked\'\n    });\n    var mainTree = document.getElementById(\'mainTree\');\n    if (mainTree) {\n      var checkboxs = mainTree.querySelectorAll(\'input[type="checkbox"]:checked\');\n      for (var i = 0; i < checkboxs.length; i++) {\n        checkboxs[i].checked = false;\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'dxryContainer\' },\n        React.createElement(\n          \'h4\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            data._title\n          ),\n          React.createElement(\n            \'div\',\n            { style: { \'float\': \'right\' } },\n            React.createElement(\n              \'button\',\n              { onClick: this.checkedAll },\n              data.btnCheckedAll && \'\u5168\u9009\'\n            ),\n            React.createElement(\n              \'button\',\n              { style: { \'display\': data._data.length == 0 && data._html != \'\' ? \'inline\' : \'none\' }, onClick: this.handleBtnChecked },\n              \'\\u9009\\u62E9\'\n            )\n          )\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: this.handleLiClick },\n            data._data[0] && data._data.map(function (val, idx) {\n              return React.createElement(\n                \'li\',\n                { \'data-index\': idx },\n                val\n              );\n            })\n          ),\n          React.createElement(\'div\', { style: { \'display\': data._data.length == 0 && data._html != \'\' ? \'block\' : \'none\' }, dangerouslySetInnerHTML: { __html: data._html }, onClick: this.handleClick })\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control22_ewqEOK: function (elem) {
      if (elem) {
        //部门会签的
        var _title = $(elem).children('legend').children('strong').text();var _data = [];$(elem).children().find('select>option').each(function (optIdx, opt) {
          _data.push(opt.textContent);
        });var btns = [];var delBtnIdx = '';var checkedAllBtnIdx = '';var delAllBtnIdx = '';var btn1 = $(elem).parent().prev().find('input[type="button"]').length;if (btn1 != 0) {
          $(elem).parent().prev().find('input[type="button"]').each(function (btnIdx, btn) {
            btns.push(btn.value);btn.value == '删除' && (delBtnIdx = btnIdx);btn.value == '全选' && (checkedAllBtnIdx = btnIdx);btn.value == '全删' && (delAllBtnIdx = btnIdx);
          });
        } else {
          $(elem).find('input[type="button"]').each(function (btnIdx, btn) {
            btns.push(btn.value);btn.value == '删除' && (delBtnIdx = btnIdx);btn.value == '全选' && (checkedAllBtnIdx = btnIdx);btn.value == '全删' && (delAllBtnIdx = btnIdx);
          });
        }return { _title: _title, _data: _data, delBtnIdx: delBtnIdx, checkedAllBtnIdx: checkedAllBtnIdx, delAllBtnIdx: delAllBtnIdx };
      } else {
        return null;
      }
    },
    doAction_uiControl22_Dw7zlw: function (data, elem) {
      if (data.eventType == 'handleDelClick') {
        $(elem).children().find('select>option')[+data.dataCustom].selected = true;var btnDel = elem.parentElement.previousElementSibling.querySelectorAll('input[type="button"]')[2] || elem.parentElement.previousElementSibling.querySelectorAll('input[type="button"]')[1];if (btnDel) {
          var btnVal = '';if (btnDel) {
            btnVal = btnDel.value;
          }if (btnVal == '删除') {
            btnDel.click();
          }$(elem).parent().prev().prev().find('select>option').each(function (optIdx, opt) {
            opt.selected = false;
          });
        } else if ($(elem).children().find('input[value="删除"]')[0]) {
          //选择增加会签部门
          $(elem).children().find('input[value="删除"]')[0].click();
        }
      } else if (data.eventType == 'deleteAll') {
        //elem.parentElement.previousElementSibling.querySelectorAll('input[type="button"]')[3].click();
        var delAllBtn = elem.parentElement.previousElementSibling.querySelector('input[value="全删"]');if (delAllBtn) {
          delAllBtn.click();$(elem).parent().prev().prev().find('select>option').each(function (optIdx, opt) {
            opt.selected = false;
          });
        }
      }
    },
    getTemplate_uiControl22_Dw7zlw: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleDelClick:function(e){\n    if(e.target.nodeName==\'I\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleDelClick\'\n      })\n    }\n  },\n  deleteAll:function(){\n    this.props.customHandler({\n      eventType:\'deleteAll\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'xzryContainer\'>\n          <h4>\n            <span>{data._title}</span>\n            <div style={{\'float\':\'right\',\'display\':data.delAllBtnIdx?\'block\':\'none\'}}>\n\t\t\t\t\t\t\t<button onClick={_this.deleteAll}>\u5168\u5220</button>\n            </div>\n            \n          </h4>\n          <section>\n            <ul onClick={this.handleDelClick}>\n              {\n\t\t\t\t\t\t\t\tdata._data.map(function(val,idx){\n                  if(val){\n                    return <li data-index={idx}>\n                      <span>{val}</span>\n                      <i data-index={idx}></i>\n                    </li>\n                  }\n                  \n                })\n              }\n            </ul>\n          </section>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleDelClick: function handleDelClick(e) {\n    if (e.target.nodeName == \'I\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleDelClick\'\n      });\n    }\n  },\n  deleteAll: function deleteAll() {\n    this.props.customHandler({\n      eventType: \'deleteAll\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'xzryContainer\' },\n        React.createElement(\n          \'h4\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            data._title\n          ),\n          React.createElement(\n            \'div\',\n            { style: { \'float\': \'right\', \'display\': data.delAllBtnIdx ? \'block\' : \'none\' } },\n            React.createElement(\n              \'button\',\n              { onClick: _this.deleteAll },\n              \'\\u5168\\u5220\'\n            )\n          )\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: this.handleDelClick },\n            data._data.map(function (val, idx) {\n              if (val) {\n                return React.createElement(\n                  \'li\',\n                  { \'data-index\': idx },\n                  React.createElement(\n                    \'span\',\n                    null,\n                    val\n                  ),\n                  React.createElement(\'i\', { \'data-index\': idx })\n                );\n              }\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control23_pSa1WA: function (elem) {
      if (elem) {
        var _href = elem.ownerDocument.defaultView && elem.ownerDocument.defaultView.location.href;var title = '';var btns = [];$(elem).children('td').find('input[type="button"]').each(function (btnIdx, btn) {
          var btnVal = btn.value;btnVal && (btnVal = btnVal.replace(/ /g, ''));if (btnVal == '确定' || btnVal == '取消') {
            btns.push([btnVal, btnIdx]);
          }
        });if (/frmSendToCycleDept/.test(_href)) {
          title = '选择部门';
        } else if (/frmSendToOtherUser/.test(_href)) {
          title = '选择人员';
        }var popTitle = elem.ownerDocument.querySelector('.popTitle');if (popTitle) {
          popTitle = popTitle.textContent;popTitle = popTitle.toLocaleUpperCase(); // if (popTitle == '%d6%f7%b0%ec（江西银行）') {
          //   title = '主办（江西银行）';
          // } else if (popTitle == '%c7%eb%b8%a8%b0%ec（江西银行）') {
          //   title = '请辅办（江西银行）';
          // } else if (popTitle == '%d0%d0%c1%ec%b5%bc%d4%c4（%bd%ad%ce%f7%d2%f8%d0%d0）') {
          //   title = '行领导阅（江西银行）';
          // } else if (popTitle == '请选择特送用户') {
          //   title = '请选择特送用户';
          // } else if (popTitle == '%d0%d0%c1%ec%b5%bc%c5%fa%ca%be（%bd%ad%ce%f7%d2%f8%d0%d0）') {
          //   title = '行领导批示（江西银行）';
          // } 
          title = ysp.customHelper.decodeStr(popTitle);if (title.indexOf('（') != -1) {
            title = title.split('（')[0];
          } else if (title.indexOf('(') != -1) {
            title = title.split('(')[0];
          }
        }return { title: title, btns: btns };
      }
    },
    doAction_uiControl25_5ZG8XD: function (data, elem) {
      var doc = elem.ownerDocument;var _href = elem.ownerDocument.defaultView.location.href;if (data.eventType == 'btnClick') {
        if (/frmSendToCycleDept/.test(_href)) {
          doc.forms[0].action = decodeURI(doc.forms[0].action);doc.forms[0].NextRole.value = ysp.customHelper.decodeStr(doc.forms[0].NextRole.value.toUpperCase());doc.forms[0].cyclejs.value = ysp.customHelper.decodeStr(doc.forms[0].cyclejs.value.toUpperCase());doc.forms[0].CycTitle.value = ysp.customHelper.decodeStr(doc.forms[0].CycTitle.value.toUpperCase());doc.forms[0].Path_Info.value = ysp.customHelper.decodeStr(doc.forms[0].Path_Info.value);
        } else if (/frmSendToViewDept/.test(_href)) {
          doc.forms[0].action = decodeURI(doc.forms[0].action);doc.forms[0].ViewRole.value = ysp.customHelper.decodeStr(doc.forms[0].ViewRole.value.toUpperCase());doc.forms[0].ViewTitle.value = ysp.customHelper.decodeStr(doc.forms[0].ViewTitle.value.toUpperCase());doc.forms[0].ViewNextRole.value = ysp.customHelper.decodeStr(doc.forms[0].ViewNextRole.value.toUpperCase());
        }$(elem).children().children().children('input')[+data.dataCustom].click();
      } else if (data.eventType == 'handleCancel') {
        elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl25_5ZG8XD: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(e){\n    var target=e.target;\n    if(target.nodeName==\'BUTTON\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'btnClick\'\n      })\n    }else if(target.nodeName==\'B\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleCancel\'\n      })\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    var btns=data.btns;\n    var btnBack=\'\';\n    var btnTrue=\'\';\n    btns.map(function(btnObj,btnObjIdx){\n//       if(btnObj[0].indexOf(\'\u786E\u5B9A\')>-1){\n//         btnTrue = <button data-index={btnObj[1]}>\u786E\u5B9A</button>\n      \n//     \t}\n    if(btnObj[0].indexOf(\'\u53D6\u6D88\')>-1){\n      btnBack = <b className={data.title.length >=11 ? \'back\' : \'back detailBtnBack\'} data-index={btnObj[1]}>\u8FD4\u56DE</b>\n    }\n    })\n    \n    if(data){\n      return (\n        <div onClick={this.btnClick} className=\'tianxieyijian pageTitle\'>\n\t\t\t\t\t{btnBack}\n          <span style={{\'font-size\':(data.title.length>=11 && \'16px\')}}>{data.title}</span>\n          {btnTrue}\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick(e) {\n    var target = e.target;\n    if (target.nodeName == \'BUTTON\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'btnClick\'\n      });\n    } else if (target.nodeName == \'B\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleCancel\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var btns = data.btns;\n    var btnBack = \'\';\n    var btnTrue = \'\';\n    btns.map(function (btnObj, btnObjIdx) {\n      //       if(btnObj[0].indexOf(\'\u786E\u5B9A\')>-1){\n      //         btnTrue = <button data-index={btnObj[1]}>\u786E\u5B9A</button>\n\n      //     \t}\n      if (btnObj[0].indexOf(\'\u53D6\u6D88\') > -1) {\n        btnBack = React.createElement(\n          \'b\',\n          { className: data.title.length >= 11 ? \'back\' : \'back detailBtnBack\', \'data-index\': btnObj[1] },\n          \'\\u8FD4\\u56DE\'\n        );\n      }\n    });\n\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { onClick: this.btnClick, className: \'tianxieyijian pageTitle\' },\n        btnBack,\n        React.createElement(\n          \'span\',\n          { style: { \'font-size\': data.title.length >= 11 && \'16px\' } },\n          data.title\n        ),\n        btnTrue\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control64_QX0h08: function (elem) {
      if (elem) {
        //行领导会签的
        var _title = $(elem).children('legend').children('strong').text();var _data = [];$(elem).children().find('select>option').each(function (optIdx, opt) {
          _data.push(opt.textContent);
        });var btns = [];var delBtnIdx = '';var checkedAllBtnIdx = '';var btn1 = $(elem).parent().prev().find('input[type="button"]').length;if (btn1 != 0) {
          $(elem).parent().prev().find('input[type="button"]').each(function (btnIdx, btn) {
            btns.push(btn.value);btn.value == '删除' && (delBtnIdx = btnIdx);btn.value == '全选' && (checkedAllBtnIdx = btnIdx);
          });
        } else {
          $(elem).find('input[type="button"]').each(function (btnIdx, btn) {
            btns.push(btn.value);btn.value == '删除' && (delBtnIdx = btnIdx);btn.value == '全选' && (checkedAllBtnIdx = btnIdx);
          });
        }return { _title: _title, _data: _data, delBtnIdx: delBtnIdx, checkedAllBtnIdx: checkedAllBtnIdx };
      } else {
        return null;
      }
    },
    doAction_uiControl63_DErLJ2: function (data, elem) {
      if (data.eventType == 'handleDelClick') {
        $(elem).children().find('select>option')[+data.dataCustom].selected = true;var btnDel = elem.parentElement.previousElementSibling.querySelectorAll('input[type="button"]')[2] || elem.parentElement.previousElementSibling.querySelectorAll('input[type="button"]')[1];if (btnDel) {
          var btnVal = '';if (btnDel) {
            btnVal = btnDel.value;
          }if (btnVal == '删除') {
            btnDel.click();
          }$(elem).parent().prev().prev().find('select>option').each(function (optIdx, opt) {
            opt.selected = false;
          });
        } else if ($(elem).children().find('input[value="删除"]')[0]) {
          //选择增加会签部门
          $(elem).children().find('input[value="删除"]')[0].click();
        }
      } else if (data.eventType == 'deleteAll') {
        elem.parentElement.previousElementSibling.querySelectorAll('input[type="button"]')[3].click();$(elem).parent().prev().prev().find('select>option').each(function (optIdx, opt) {
          opt.selected = false;
        });
      }
    },
    getTemplate_uiControl63_DErLJ2: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleDelClick:function(e){\n    if(e.target.nodeName==\'I\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleDelClick\'\n      })\n    }\n  },\n  deleteAll:function(){\n    this.props.customHandler({\n      eventType:\'deleteAll\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'xzryContainer\'>\n          <h4>\n            <span>{data._title}</span>\n            <div style={{\'float\':\'right\'}}>\n              \n            </div>\n            \n          </h4>\n          <section>\n            <ul onClick={this.handleDelClick}>\n              {\n\t\t\t\t\t\t\t\tdata._data.map(function(val,idx){\n                  if(val){\n                    return <li data-index={idx}>\n                      <span>{val}</span>\n                      <i data-index={idx}></i>\n                    </li>\n                  }\n                  \n                })\n              }\n            </ul>\n          </section>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleDelClick: function handleDelClick(e) {\n    if (e.target.nodeName == \'I\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleDelClick\'\n      });\n    }\n  },\n  deleteAll: function deleteAll() {\n    this.props.customHandler({\n      eventType: \'deleteAll\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'xzryContainer\' },\n        React.createElement(\n          \'h4\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            data._title\n          ),\n          React.createElement(\'div\', { style: { \'float\': \'right\' } })\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: this.handleDelClick },\n            data._data.map(function (val, idx) {\n              if (val) {\n                return React.createElement(\n                  \'li\',\n                  { \'data-index\': idx },\n                  React.createElement(\n                    \'span\',\n                    null,\n                    val\n                  ),\n                  React.createElement(\'i\', { \'data-index\': idx })\n                );\n              }\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control120_c9HUus: function (elem) {},
    doAction_uiControl126_Jnk9EZ: function (data, elem) {
      var doc = elem.ownerDocument;var _href = elem.ownerDocument.defaultView.location.href;if (data.eventType == 'btnClick') {
        if (data.dataCustom == '确定') {
          if (/frmSendToCycleDept/.test(_href)) {
            doc.forms[0].action = decodeURI(doc.forms[0].action);doc.forms[0].NextRole.value = ysp.customHelper.decodeStr(doc.forms[0].NextRole.value.toUpperCase());doc.forms[0].cyclejs.value = ysp.customHelper.decodeStr(doc.forms[0].cyclejs.value.toUpperCase());doc.forms[0].CycTitle.value = ysp.customHelper.decodeStr(doc.forms[0].CycTitle.value.toUpperCase());doc.forms[0].Path_Info.value = ysp.customHelper.decodeStr(doc.forms[0].Path_Info.value);
          } else if (/frmSendToViewDept/.test(_href)) {
            doc.forms[0].action = decodeURI(doc.forms[0].action);doc.forms[0].ViewRole.value = ysp.customHelper.decodeStr(doc.forms[0].ViewRole.value.toUpperCase());doc.forms[0].ViewTitle.value = ysp.customHelper.decodeStr(doc.forms[0].ViewTitle.value.toUpperCase());doc.forms[0].ViewNextRole.value = ysp.customHelper.decodeStr(doc.forms[0].ViewNextRole.value.toUpperCase());
          }
        }$(elem).children().children().children('input').each(function (btnIdx, btn) {
          if (data.dataCustom == btn.value.replace(/ /g, '')) {
            btn.click();
          }
        });
      }
    },
    getTemplate_uiControl126_Jnk9EZ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      data:e.target.textContent,\n      eventType:'btnClick'\n    })\n  },\n  render: function() {\n    return (\n      <div onClick={this.btnClick} className='btnCon'>\n        \n        <button data-index={1}>\u53D6\u6D88</button>\n        <button data-index={0}>\u786E\u5B9A</button>\n      </div>\n    )\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      data: e.target.textContent,\n      eventType: \'btnClick\'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      { onClick: this.btnClick, className: \'btnCon\' },\n      React.createElement(\n        \'button\',\n        { \'data-index\': 1 },\n        \'\\u53D6\\u6D88\'\n      ),\n      React.createElement(\n        \'button\',\n        { \'data-index\': 0 },\n        \'\\u786E\\u5B9A\'\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);