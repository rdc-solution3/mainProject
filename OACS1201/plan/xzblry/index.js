(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control68_eNT7CE: function (elem) {
      if (elem) {
        var _href = elem.ownerDocument.defaultView.location.href;if (/frmSendToCycleDept/.test(_href)) {
          return '选择部门';
        } else if (/frmSendToOtherUser/.test(_href)) {
          return '选择人员';
        } else {
          return '　';
        }return true;
      }
    },
    doAction_uiControl65_hOwOfu: function (data, elem) {
      var doc = elem.ownerDocument;var _href = elem.ownerDocument.defaultView.location.href;if (data.eventType == 'btnClick') {
        // if (/frmSendToCycleDept/.test(_href)) {
        //   doc.forms[0].action = decodeURI(doc.forms[0].action);
        //   doc.forms[0].NextRole.value = "会签管理员";
        //   doc.forms[0].cyclejs.value = "总行一般人员";
        //   doc.forms[0].CycTitle.value = "部门会签";
        //   doc.forms[0].Path_Info.value = doc.forms[0].Path_Info.value.replace(/%BB%E1%C7%A9%B9%DC%C0%ED%D4%B1/, "会签管理员").replace(/%D7%DC%D0%D0%D2%BB%B0%E3%C8%CB%D4%B1/, "总行一般人员").replace(/%B2%BF%C3%C5%BB%E1%C7%A9/, "部门会签");
        // }
        $(elem).children().children().children('input')[+data.dataCustom].click();
      } else if (data.eventType == 'handleCancel') {
        elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl65_hOwOfu: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(e){\n    var target=e.target;\n    if(target.nodeName==\'BUTTON\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'btnClick\'\n      })\n    }else if(target.nodeName==\'B\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleCancel\'\n      })\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div onClick={this.btnClick} className=\'tianxieyijian pageTitle\'>\n\t\t\t\t\t<b className=\'back\' data-index={1}>\u8FD4\u56DE</b>\n          <span>{data}</span>\n          <button data-index={0}>\u786E\u5B9A</button>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick(e) {\n    var target = e.target;\n    if (target.nodeName == \'BUTTON\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'btnClick\'\n      });\n    } else if (target.nodeName == \'B\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleCancel\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { onClick: this.btnClick, className: \'tianxieyijian pageTitle\' },\n        React.createElement(\n          \'b\',\n          { className: \'back\', \'data-index\': 1 },\n          \'\\u8FD4\\u56DE\'\n        ),\n        React.createElement(\n          \'span\',\n          null,\n          data\n        ),\n        React.createElement(\n          \'button\',\n          { \'data-index\': 0 },\n          \'\\u786E\\u5B9A\'\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control70_AOZ0Wm: function (elem) {
      if (elem) {
        var _title = $(elem).children('legend').children('strong').text();var _data = []; // var divSelect=$(elem).children('div').find('select')[0];
        // var tableSelect=$(elem).children('table').find('select')[0];
        $(elem).children().find('select>option').each(function (optIdx, opt) {
          _data.push(opt.textContent);
        });var btns = [];var btnCheckedAll = '';$(elem).parent().next().find('div>input[type="button"]').each(function (btnIdx, btn) {
          btns.push(btn.value);btn.value == '全选' && (btnCheckedAll = true);
        });if (_title == '待选人员' || _title == '待选部门' || _title == '待选项' || _title == '待选增加部门' || _title == '待选增加用户：') {
          return { _title: _title, _data: _data, btns: btns, btnCheckedAll: btnCheckedAll };
        }
      } else {
        return null;
      }
    },
    doAction_uiControl66_00yx6l: function (data, elem) {
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
      }
    },
    getTemplate_uiControl66_00yx6l: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleLiClick:function(e){\n    var target=e.target;\n    this.props.customHandler({\n      data:target.dataset.index,\n      eventType:\'handleLiClick\'\n    })\n  },\n  checkedAll:function(){\n    this.props.customHandler({\n      eventType:\'checkedAll\'\n    })\n  },\n  deleteAll:function(){\n    this.props.customHandler({\n      eventType:\'deleteAll\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'dxryContainer\'>\n          <h4>\n            <span>{data._title}</span>\n            <div style={{\'float\':\'right\'}}>\n            \t<button onClick={this.checkedAll}>{data.btnCheckedAll && \'\u5168\u9009\'}</button>\n            </div>\n            \n          </h4>\n          <section>\n            <ul onClick={this.handleLiClick}>\n              {\n\t\t\t\t\t\t\t\tdata._data[0] && data._data.map(function(val,idx){\n                  return <li data-index={idx}>{val}</li>\n                })\n              }\n            </ul>\n          </section>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleLiClick: function handleLiClick(e) {\n    var target = e.target;\n    this.props.customHandler({\n      data: target.dataset.index,\n      eventType: \'handleLiClick\'\n    });\n  },\n  checkedAll: function checkedAll() {\n    this.props.customHandler({\n      eventType: \'checkedAll\'\n    });\n  },\n  deleteAll: function deleteAll() {\n    this.props.customHandler({\n      eventType: \'deleteAll\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'dxryContainer\' },\n        React.createElement(\n          \'h4\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            data._title\n          ),\n          React.createElement(\n            \'div\',\n            { style: { \'float\': \'right\' } },\n            React.createElement(\n              \'button\',\n              { onClick: this.checkedAll },\n              data.btnCheckedAll && \'\u5168\u9009\'\n            )\n          )\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: this.handleLiClick },\n            data._data[0] && data._data.map(function (val, idx) {\n              return React.createElement(\n                \'li\',\n                { \'data-index\': idx },\n                val\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control71_UxXPTu: function (elem) {
      if (elem) {
        //部门会签的
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
    doAction_uiControl68_mx7B2O: function (data, elem) {
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
    getTemplate_uiControl68_mx7B2O: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleDelClick:function(e){\n    if(e.target.nodeName==\'I\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleDelClick\'\n      })\n    }\n  },\n  deleteAll:function(){\n    this.props.customHandler({\n      eventType:\'deleteAll\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'xzryContainer\'>\n          <h4>\n            <span>{data._title}</span>\n            <div style={{\'float\':\'right\'}}>\n              \n            </div>\n            \n          </h4>\n          <section>\n            <ul onClick={this.handleDelClick}>\n              {\n\t\t\t\t\t\t\t\tdata._data.map(function(val,idx){\n                  if(val){\n                    return <li data-index={idx}>\n                      <span>{val}</span>\n                      <i data-index={idx}></i>\n                    </li>\n                  }\n                  \n                })\n              }\n            </ul>\n          </section>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleDelClick: function handleDelClick(e) {\n    if (e.target.nodeName == \'I\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleDelClick\'\n      });\n    }\n  },\n  deleteAll: function deleteAll() {\n    this.props.customHandler({\n      eventType: \'deleteAll\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'xzryContainer\' },\n        React.createElement(\n          \'h4\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            data._title\n          ),\n          React.createElement(\'div\', { style: { \'float\': \'right\' } })\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: this.handleDelClick },\n            data._data.map(function (val, idx) {\n              if (val) {\n                return React.createElement(\n                  \'li\',\n                  { \'data-index\': idx },\n                  React.createElement(\n                    \'span\',\n                    null,\n                    val\n                  ),\n                  React.createElement(\'i\', { \'data-index\': idx })\n                );\n              }\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  });
})(window, ysp);