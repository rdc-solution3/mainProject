(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control5_uR0TVF: function (elem) {
      if (elem) {
        var classOne = [];var _title = '';$(elem).children('div').children('h3').children('a').each(function (aIdx, a) {
          classOne.push([a.textContent, aIdx]);
        });var classTwo = [];$(elem).children('div.on').find('div>ul>li>a').each(function (aIdx, a) {
          classTwo.push([a.textContent, aIdx, a.className]);
        });_title = $(elem).children('div.on').children('h3').text();var xqcx = $(elem).find('li>a:contains("需求查询")')[0];var isXqcx = false;if (xqcx) {
          isXqcx = true;
        }var isKuaYu = false;var yinzhangH3On = false;var yinzhang_b_title = $(elem).children('div').children('h3:contains("印章管理")')[0]; //h3
        if (yinzhang_b_title) {
          var h3ParentDiv = yinzhang_b_title.parentElement;yinzhangH3On = /on/.test(h3ParentDiv.className);var yinzhang_b_body = yinzhang_b_title.nextElementSibling;var a = yinzhang_b_body.querySelector('div>ul>li>a');if (a.getAttribute("onclick") == null) {
            var _url = a.href;if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
              if (ysp.appMain.isIOS()) {
                isKuaYu = true;
              }
            }
          } else {
            var _url = a.getAttribute("onclick").replace(/.*(http.*com).*/, '$1');
            if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url) {
              if (ysp.appMain.isIOS()) {
                isKuaYu = true;
              }
            }
          }
        }return { isXqcx: isXqcx, classOne: classOne, classTwo: classTwo, _title: _title, isKuaYu: isKuaYu,
          yinzhangH3On: yinzhangH3On };
      }
    },
    doAction_uiControl4_yJ2Jcf: function (data, elem) {
      if (data.eventType == 'handleClassOne') {
        var index = data.dataCustom;var classOneTitle = $(elem).children('div').children('h3').children('a');var divs = $(elem).children('div');var isClick = divs[index].className.indexOf('on');if (isClick == -1) {
          classOneTitle[index].click();var target = $(elem).children('div.on').find('div>ul>li>a')[0]; // if (/.*(oafh1|oafh2|oafh3|oafh4).*/.test(ysp.appMain.getActiveUrl()) && target.textContent.trim() === "总行用印申请") {
          //   target = $(elem).children('div.on').find('div>ul>li>a')[1];
          // }
          target.ownerDocument.defaultView.chgseletd = ysp.customHelper.chgseletd;setTimeout(function () {
            target.click();
          }, 50);
        } else {
          var target = $(elem).children('div.on').find('div>ul>li>a')[0]; // if (/.*(oafh1|oafh2|oafh3|oafh4).*/.test(ysp.appMain.getActiveUrl()) && target.textContent.trim() === "总行用印申请") {
          //   target = $(elem).children('div.on').find('div>ul>li>a')[1];
          // }
          target.ownerDocument.defaultView.chgseletd = ysp.customHelper.chgseletd;setTimeout(function () {
            target.click();
          }, 50);
        }try {
          ysp.appMain.showLoading();
        } catch (err) {}
      } else if (data.eventType == 'handleTzggClick') {
        var indexdata = elem.ownerDocument.defaultView.parent.document.querySelector('#indexdata');if (indexdata) {
          var a = indexdata.contentDocument.querySelector('#part2>#notice>h3>a');if (a.getAttribute("onclick") == null) {
            var _url = a.href;if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
              if (ysp.appMain.isIOS()) {
                localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1')); // localStorage.setItem("listTitle", "通知公告");
                ysp.appMain.openWindow(_url + '&listTitle=' + encodeURIComponent('通知公告截止'));
              } else {
                a.click();
              }
            } else {
              a.click();
            }
          } else {
            var _url = a.getAttribute("onclick").replace(/.*\('(.*opendocument).*/, '$1');if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
              if (ysp.appMain.isIOS()) {
                localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1')); // localStorage.setItem("listTitle", "通知公告");
                ysp.appMain.openWindow(_url + '&listTitle=' + encodeURIComponent('通知公告截止'));
              } else {
                a.click();
              }
            } else {
              a.click();
            }
          }
        }try {
          ysp.appMain.showLoading();
        } catch (err) {}
      } else if (data.eventType == 'handleXqcxClick') {
        var classOneTitle = $(elem).children('div').children('h3').children('a:contains("查      询")')[0];var xqcx = $(elem).find('li>a:contains("需求查询")')[0];if (classOneTitle) {
          if (classOneTitle.parentElement.parentElement.className.indexOf('on') == -1) {
            classOneTitle.click();setTimeout(function () {
              xqcx && xqcx.click();
            }, 500);
          } else {
            xqcx && xqcx.click();
          }
        }try {
          ysp.appMain.showLoading();
        } catch (err) {}
      } else if (data.eventType == 'handleBack') {
        // elem.ownerDocument.defaultView.parent.close(); 
        // alert('调试:index页的返回'); 
        top.EAPI.closeWindow();
      } else if (data.eventType == 'handleKuayuItemClick') {
        var a = $(elem).children('div.on').find('div>ul>li>a')[data.dataCustom];if (a.getAttribute("onclick") != null) {
          a.click();
        }
      } else if (data.eventType == 'handleKuaYuTitleClick') {
        $(elem).children('div').children('h3').children('a')[data.dataCustom].click();
      }
    },
    getTemplate_uiControl4_yJ2Jcf: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleClassOne:function(e){\n    var target=e.target;\n    if(target.nodeName==\'LI\'){\n      if(target.id !=\'indexKuayuItem\'){\n        if(target.className==\'cx\'){\n          this.props.customHandler({\n            eventType:\'handleXqcxClick\'\n          })      \n        }else if(target.className==\'tzgg\'){\n          this.props.customHandler({\n            eventType:\'handleTzggClick\'\n          })\n        }else{\n          this.props.customHandler({\n            data:target.dataset.index,\n            eventType:\'handleClassOne\'\n          })\n        }\n      }else {\n        this.props.customHandler({\n          data:target.dataset.index,\n        \teventType:\'handleKuaYuTitleClick\'\n        })\n        \n      }\n      \n    } else if (target.nodeName == \'I\') {\n      if(target.className == \'icon_close\'){\n        target.className = \'icon_open\';\n        console.log($(\'#kuayuItemsCon\'))\n        $(\'#kuayuItemsCon\').slideDown();\n      } else if (target.className == \'icon_open\'){\n        target.className = \'icon_close\';\n        $(\'#kuayuItemsCon\').slideUp();\n      }\n      \n    }else if (target.nodeName == \'P\') {\n      this.props.customHandler({\n        data:target.dataset.index,\n        eventType:\'handleKuayuItemClick\'\n      })\n    }\n  },\n  handleBack:function(){\n    this.props.customHandler({\n      eventType:\'handleBack\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this = this;\n    if(data){\n      return (\n        <div>\n          <div className=\'pageIdx classOne\' id=\'classOne\'>\n            <h3 className=\'pageTitle\'>\n              <span className=\'back indexBack\' onClick={this.handleBack}>\u8FD4\u56DE</span>\n              OA\u529E\u516C\n              \n            </h3>\n            <ul onClick={this.handleClassOne} style={{\'display\': \'none\'}}>\n              <li data-index="tzgg" className="tzgg" style={{\'margin-bottom\':\'0\',\'font-size\':\'16px\'}}>\u901A\u77E5\u516C\u544A</li>\n              {\n                data.classOne.map(function(val,idx){\n                  var icon=\'\';\n                  switch(val[0]){\n                    case \'\u6211\u7684\u5DE5\u4F5C\' : icon=\'wdgz\';break;\n                    case \'\u516C\u6587\u7BA1\u7406\' : icon=\'gwgl\';break;\n                    case \'\u65E5\u5E38\u4E8B\u52A1\' : icon=\'rcsw\';break;\n                    case \'\u516C\u5171\u4E8B\u52A1\' : icon=\'ggsw\';break;\n                    case \'\u4E2A\u4EBA\u4E8B\u52A1\' : icon=\'grsw\';break;\n                    case \'\u5370\u7AE0\u7BA1\u7406\' : icon=\'yzgl\';break;\n                    case \'\u67E5\xA0\xA0\xA0\xA0\xA0\xA0\u8BE2\' : icon=\'cx\';break;\n                    default:icon=\'\';\n                  }\n                  var arr=[\'\u6211\u7684\u5DE5\u4F5C\',\'\u516C\u6587\u7BA1\u7406\',\'\u65E5\u5E38\u4E8B\u52A1\',\'\u5370\u7AE0\u7BA1\u7406\'];\n                  if(arr.indexOf(val[0])!=-1){\n                    // val[0] == \'\u5370\u7AE0\u7BA1\u7406\' && (data.isKuaYu = true)\n                    return <li data-index={val[1]} className={icon} id={(data.isKuaYu && val[0] == \'\u5370\u7AE0\u7BA1\u7406\') ? \'indexKuayuItem\' : \'\'}>\n                      {val[0]}\n                      {\n                        /*data.isKuaYu && <i className = \'icon_close\'></i>*/\n                      }\n                      { \n                        \n                        (data.isKuaYu && val[0]==\'\u5370\u7AE0\u7BA1\u7406\' && data.yinzhangH3On) && <div id = \'kuayuItemsCon\'>\n                          {\n                              data.classTwo.map(function(lab, labIdx){\n                                var arr = [\'\u603B\u884C\u7528\u5370\u7533\u8BF7\',\'\u5206\u652F\u884C\u7528\u5370\u7533\u8BF7\',\'\u5370\u7AE0\u7279\u6B8A\u6587\u4EF6\u7BA1\u7406\'];\n                                if (arr.indexOf(lab[0]) != -1){\n                                  return <p data-index={lab[1]}>{lab[0]}</p>\n                                }\n                              })\n                          }\n                        </div>\n                      }\n                    </li>\n                  }\n\n                })\n              }\n              <li data-index="cx" className="cx" style={{\'margin-bottom\':\'0\',\'font-size\':\'16px\', \'display\': data.isXqcx ? \'block\' : \'none\'}}>\u9700\u6C42\u67E5\u8BE2</li>\n            </ul>\n          </div>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClassOne: function handleClassOne(e) {\n    var target = e.target;\n    if (target.nodeName == \'LI\') {\n      if (target.id != \'indexKuayuItem\') {\n        if (target.className == \'cx\') {\n          this.props.customHandler({\n            eventType: \'handleXqcxClick\'\n          });\n        } else if (target.className == \'tzgg\') {\n          this.props.customHandler({\n            eventType: \'handleTzggClick\'\n          });\n        } else {\n          this.props.customHandler({\n            data: target.dataset.index,\n            eventType: \'handleClassOne\'\n          });\n        }\n      } else {\n        this.props.customHandler({\n          data: target.dataset.index,\n          eventType: \'handleKuaYuTitleClick\'\n        });\n      }\n    } else if (target.nodeName == \'I\') {\n      if (target.className == \'icon_close\') {\n        target.className = \'icon_open\';\n        console.log($(\'#kuayuItemsCon\'));\n        $(\'#kuayuItemsCon\').slideDown();\n      } else if (target.className == \'icon_open\') {\n        target.className = \'icon_close\';\n        $(\'#kuayuItemsCon\').slideUp();\n      }\n    } else if (target.nodeName == \'P\') {\n      this.props.customHandler({\n        data: target.dataset.index,\n        eventType: \'handleKuayuItemClick\'\n      });\n    }\n  },\n  handleBack: function handleBack() {\n    this.props.customHandler({\n      eventType: \'handleBack\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'div\',\n          { className: \'pageIdx classOne\', id: \'classOne\' },\n          React.createElement(\n            \'h3\',\n            { className: \'pageTitle\' },\n            React.createElement(\n              \'span\',\n              { className: \'back indexBack\', onClick: this.handleBack },\n              \'\\u8FD4\\u56DE\'\n            ),\n            \'OA\\u529E\\u516C\'\n          ),\n          React.createElement(\n            \'ul\',\n            { onClick: this.handleClassOne, style: { \'display\': \'none\' } },\n            React.createElement(\n              \'li\',\n              { \'data-index\': \'tzgg\', className: \'tzgg\', style: { \'margin-bottom\': \'0\', \'font-size\': \'16px\' } },\n              \'\\u901A\\u77E5\\u516C\\u544A\'\n            ),\n            data.classOne.map(function (val, idx) {\n              var icon = \'\';\n              switch (val[0]) {\n                case \'\u6211\u7684\u5DE5\u4F5C\':\n                  icon = \'wdgz\';break;\n                case \'\u516C\u6587\u7BA1\u7406\':\n                  icon = \'gwgl\';break;\n                case \'\u65E5\u5E38\u4E8B\u52A1\':\n                  icon = \'rcsw\';break;\n                case \'\u516C\u5171\u4E8B\u52A1\':\n                  icon = \'ggsw\';break;\n                case \'\u4E2A\u4EBA\u4E8B\u52A1\':\n                  icon = \'grsw\';break;\n                case \'\u5370\u7AE0\u7BA1\u7406\':\n                  icon = \'yzgl\';break;\n                case \'\u67E5\xA0\xA0\xA0\xA0\xA0\xA0\u8BE2\':\n                  icon = \'cx\';break;\n                default:\n                  icon = \'\';\n              }\n              var arr = [\'\u6211\u7684\u5DE5\u4F5C\', \'\u516C\u6587\u7BA1\u7406\', \'\u65E5\u5E38\u4E8B\u52A1\', \'\u5370\u7AE0\u7BA1\u7406\'];\n              if (arr.indexOf(val[0]) != -1) {\n                // val[0] == \'\u5370\u7AE0\u7BA1\u7406\' && (data.isKuaYu = true)\n                return React.createElement(\n                  \'li\',\n                  { \'data-index\': val[1], className: icon, id: data.isKuaYu && val[0] == \'\u5370\u7AE0\u7BA1\u7406\' ? \'indexKuayuItem\' : \'\' },\n                  val[0],\n                  data.isKuaYu && val[0] == \'\u5370\u7AE0\u7BA1\u7406\' && data.yinzhangH3On && React.createElement(\n                    \'div\',\n                    { id: \'kuayuItemsCon\' },\n                    data.classTwo.map(function (lab, labIdx) {\n                      var arr = [\'\u603B\u884C\u7528\u5370\u7533\u8BF7\', \'\u5206\u652F\u884C\u7528\u5370\u7533\u8BF7\', \'\u5370\u7AE0\u7279\u6B8A\u6587\u4EF6\u7BA1\u7406\'];\n                      if (arr.indexOf(lab[0]) != -1) {\n                        return React.createElement(\n                          \'p\',\n                          { \'data-index\': lab[1] },\n                          lab[0]\n                        );\n                      }\n                    })\n                  )\n                );\n              }\n            }),\n            React.createElement(\n              \'li\',\n              { \'data-index\': \'cx\', className: \'cx\', style: { \'margin-bottom\': \'0\', \'font-size\': \'16px\', \'display\': data.isXqcx ? \'block\' : \'none\' } },\n              \'\\u9700\\u6C42\\u67E5\\u8BE2\'\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },

    getData_control134_PkBDrJ: function (elem) {
      if (elem) {
        return elem.textContent;
      } else {
        return null;
      }
    },
    doAction_uiControl144_JGP7B6: function (data, elem) {
      if (data.eventType == 'handleClick') {
        // elem.click();
        var a = elem;if (a.getAttribute("onclick") == null) {
          var _url = a.href;if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
            if (ysp.appMain.isIOS()) {
              // localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1')); // localStorage.setItem("listTitle", "通知公告");
              ysp.appMain.openWindow(_url);
            } else {
              a.click();
            }
          } else {
            a.click();
          }
        } else {
          var _url = a.getAttribute("onclick").replace(/.*\('(.*WFrmdeptchange.*).*/, '$1');if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
            if (ysp.appMain.isIOS()) {
              // localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1')); // localStorage.setItem("listTitle", "通知公告");
              ysp.appMain.openWindow(_url);
            } else {
              a.click();
            }
          } else {
            a.click();
          }
        }
      }
    },
    getTemplate_uiControl144_JGP7B6: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleClick:function(){\n    this.props.customHandler({\n      eventType:\'handleClick\'\n    });\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className = \'changeDepartment\' onClick = {this.handleClick}>\n        {data}\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClick: function handleClick() {\n    this.props.customHandler({\n      eventType: \'handleClick\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'changeDepartment\', onClick: this.handleClick },\n      data\n    );\n  }\n});';
    },
    getData_control158_1BQ5v4: function (elem) {
      if (elem) {
        var data = [];var dbwjNum = 0;var dygwNum = 0;var zhdbwjNum = 0;$(elem).children('div').each(function (divIndex, div) {
          var menuObj = {};var menuTitle = $(div).children('h3.b_title').text();menuTitle = menuTitle == '我的工作' ? '常用应用' : menuTitle;if (menuTitle == '常用应用' || menuTitle == '公文管理' || menuTitle == '日常事务' || menuTitle == '印章管理') {
            if (menuTitle == '公文管理') {
              menuTitle = '公文查询';
            } else if (menuTitle == '日常事务') {
              menuTitle = '事务查询';
            } else if (menuTitle == '印章管理') {
              menuTitle = '印章查询';
            }menuObj.menuTitle = menuTitle;var menuItems = [];$(div).children('div.b_body').children('ul').children('li').each(function (liIndex, li) {
              var liText = li.textContent;if (liText == '待办文件') {
                var dataNumber = $(li).children('a').attr('data-number');dataNumber && (dbwjNum = dataNumber);
              } else if (liText == '待阅公文') {
                var dataNumber = $(li).children('a').attr('data-number');dataNumber && (dygwNum = dataNumber);
              } else if (liText == '总行待办文件') {
                var dataNumber = $(li).children('a').attr('data-number');dataNumber && (zhdbwjNum = dataNumber);
              }if (liText == '待办文件' || liText == '流程跟踪' || liText == '待阅公文' || liText == '催办信息' || liText == '会议管理' || liText == '总行待办文件' || liText == '总行流程跟踪') {
                liText = li.textContent;menuItems.push({ text: liText, divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '发文管理') {
                menuItems.push({ text: '发文查询', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '签报管理') {
                menuItems.push({ text: '签报查询', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '己办文件') {
                menuItems.push({ text: '已办文件', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '总行收文管理') {
                menuItems.push({ text: '总行收文', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '部门收文管理') {
                menuItems.push({ text: '部门收文', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '公文传阅管理') {
                menuItems.push({ text: '公文传阅', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '材料传阅管理') {
                menuItems.push({ text: '材料传阅', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '出差审批单') {
                menuItems.push({ text: '出差审批', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '业务调整管理') {
                menuItems.push({ text: '业务调整', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '贷款定价管理') {
                menuItems.push({ text: '贷款定价', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '存款利率审批') {
                menuItems.push({ text: '存款利率', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '所有信息发布') {
                menuItems.push({ text: '信息发布', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '呼叫中心工单') {
                menuItems.push({ text: '呼叫工单', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '工作协作单管理') {
                menuItems.push({ text: '工作协作单', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '电子设备申领管理') {
                menuItems.push({ text: '设备申领', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '总行用印申请') {
                menuItems.push({ text: '总行用印', divIdx: divIndex, liIdx: liIndex });
              } else if (liText == '分支行用印申请') {
                menuItems.push({ text: '分支行用印', divIdx: divIndex, liIdx: liIndex });
              }
            });menuObj.menuItems = menuItems;data.push(menuObj);
          }
        });var xqcx = $(elem).find('li>a:contains("需求查询")')[0];var isXqcx = false;if (xqcx) {
          isXqcx = true;
        }return { data: data, isXqcx: isXqcx, dbwjNum: dbwjNum, dygwNum: dygwNum, zhdbwjNum: zhdbwjNum };
      } else {
        return null;
      }
    },
    doAction_uiControl165_ReWoBL: function (data, elem) {
      if (data.eventType == 'handleTzggLiClick') {
        var indexdata = elem.ownerDocument.defaultView.parent.document.querySelector('#indexdata');var indextop = elem.ownerDocument.defaultView.parent.document.querySelector('#indextop');var welcome = indextop.contentWindow.document.querySelector('#welcome');var _userName = '';if (welcome) {
          var welcomeNext = welcome.nextElementSibling;if (welcomeNext.id) {
            var welcomeText = welcome.textContent;_userName = welcomeText.match(/\s+([\u4e00-\u9fa5]{2,6})?/)[1];
          } else {
            var welcomeText = welcomeNext.textContent;_userName = welcomeText.match(/([\u4e00-\u9fa5]{2,6})?/)[0];
          }
        }if (indexdata) {
          var a = indexdata.contentDocument.querySelector('#part2>#notice>h3>a');if (a.getAttribute("onclick") == null) {
            var _url = a.href;if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
              if (ysp.appMain.isIOS()) {
                localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1')); // localStorage.setItem("listTitle", "通知公告");
                ysp.appMain.openWindow(_url + '&listTitle=' + encodeURIComponent('通知公告截止') + '&_userName=' + _userName + 'end');
              } else {
                a.click();
              }
            } else {
              a.click();
            }
          } else {
            var _url = a.getAttribute("onclick").replace(/.*\('(.*opendocument).*/, '$1');if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
              if (ysp.appMain.isIOS()) {
                localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1')); // localStorage.setItem("listTitle", "通知公告");
                ysp.appMain.openWindow(_url + '&listTitle=' + encodeURIComponent('通知公告截止') + '&_userName=' + _userName + 'end');
              } else {
                a.click();
              }
            } else {
              a.click();
            }
          }
        }try {
          ysp.appMain.showLoading();
        } catch (err) {}
      } else if (data.eventType == 'handleXqcxLiClick') {
        var classOneTitle = $(elem).children('div').children('h3').children('a:contains("查      询")')[0];var xqcx = $(elem).find('li>a:contains("需求查询")')[0];if (classOneTitle) {
          if (classOneTitle.parentElement.parentElement.className.indexOf('on') == -1) {
            classOneTitle.click(); // xqcx && xqcx.click();
            if (xqcx) {
              xqcx.ownerDocument.defaultView.chgseletd = ysp.customHelper.chgseletd;setTimeout(function () {
                xqcx.click();
              }, 50);
            }
          } else {
            if (xqcx) {
              xqcx.ownerDocument.defaultView.chgseletd = ysp.customHelper.chgseletd;setTimeout(function () {
                xqcx.click();
              }, 50);
            }
          }
        }try {
          ysp.appMain.showLoading();
        } catch (err) {}
      } else if (data.eventType == 'handleLiClick') {
        var dataCustom = data.dataCustom;var divIdx = dataCustom.split(',')[0] - 0;var liIdx = dataCustom.split(',')[1] - 0;var div = $(elem).children('div')[divIdx];if (div && div.className.indexOf(' on') != -1) {
          var target = $(div).children('div.b_body').children('ul').children('li').eq(liIdx).children('a')[0];target.ownerDocument.defaultView.chgseletd = ysp.customHelper.chgseletd;setTimeout(function () {
            target.click();
          }, 50); // a.click(); //     if (a) {
          //       var __url = a.getAttribute('onclick').replace(/.*(http.*count=20).*/, '$1');
          //       ysp.customHelper.chgseletd(a, __url);
          //     }
          try {
            ysp.appMain.showLoading();
          } catch (err) {}
        } else {
          $(div).children('h3.b_title').children('a')[0].click();var a = $(div).children('div.b_body').children('ul').children('li').eq(liIdx).children('a')[0];a.click();try {
            ysp.appMain.showLoading();
          } catch (err) {}
        }
      }
    },
    getTemplate_uiControl165_ReWoBL: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleLiClick: function(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    if (index == \'tzgg\') {\n\t\t\tthis.props.customHandler({\n        eventType: \'handleTzggLiClick\'\n      })\n    } else if (index == \'xqcx\') {\n      this.props.customHandler({\n        eventType: \'handleXqcxLiClick\'\n      })\n    } else {\n      this.props.customHandler({\n        data:index,\n        eventType: \'handleLiClick\'\n      })\n    }\n  },\n  render: function() {\n    var customData = this.props.customData;\n    var _this = this;\n    if (customData) {\n      var data = customData.data;\n      var isXqcx = customData.isXqcx;\n      var dbwjNum = customData.dbwjNum;\n      var dygwNum = customData.dygwNum;\n      var zhdbwjNum = customData.zhdbwjNum;\n      return (\n        <div className=\'menuContainer\'>\n          {\n            data.map(function(menu, menuIdx){\n              if(menu.menuTitle == \'\u5E38\u7528\u5E94\u7528\'){\n              \tvar dbwjLi = null;\n                var dygwLi = null;\n                var ybwjLi = null;\n                var lcgzLi = null;\n                var cbxxLi = null;\n                var zhdbwjLi = null;\n                var zhlcgzLi = null;\n              \tmenu.menuItems.map(function(item, itemIdx){\n                  if (item.text == \'\u5F85\u529E\u6587\u4EF6\') {\n                    dbwjLi = <li data-index = {[item.divIdx, item.liIdx]} style={{\'position\': \'relative\'}}>\n                        \t\t\t<span className=\'_badge\' style={{\'display\': (dbwjNum <= 0 && \'none\')}}>{dbwjNum}</span>\n                              <i data-index = {[item.divIdx, item.liIdx]} className=\'dbwj\'></i>\n                              <span data-index = {[item.divIdx, item.liIdx]}>{ item.text }</span>\n                            </li>\n                  } else if (item.text == \'\u5DF2\u529E\u6587\u4EF6\') {\n                    ybwjLi = <li data-index = {[item.divIdx, item.liIdx]}>\n                              <i data-index = {[item.divIdx, item.liIdx]} className=\'ybwj\'></i>\n                              <span data-index = {[item.divIdx, item.liIdx]}>{ item.text }</span>\n                            </li>\n                  } else if (item.text == \'\u5F85\u9605\u516C\u6587\') {\n                    dygwLi = <li data-index = {[item.divIdx, item.liIdx]} style={{\'position\': \'relative\'}}>\n                        \t\t\t<span className=\'_badge\' style={{\'display\': (dygwNum <= 0 && \'none\')}}>{dygwNum}</span>\n                              <i data-index = {[item.divIdx, item.liIdx]} className=\'dygw\'></i>\n                              <span data-index = {[item.divIdx, item.liIdx]}>{ item.text }</span>\n                            </li>\n                  } else if (item.text == \'\u50AC\u529E\u4FE1\u606F\') {\n                    cbxxLi = <li data-index = {[item.divIdx, item.liIdx]}>\n                              <i data-index = {[item.divIdx, item.liIdx]} className=\'cbxx\'></i>\n                              <span data-index = {[item.divIdx, item.liIdx]}>{ item.text }</span>\n                            </li>\n                  } else if (item.text == \'\u6D41\u7A0B\u8DDF\u8E2A\') {\n                    lcgzLi = <li data-index = {[item.divIdx, item.liIdx]}>\n                              <i data-index = {[item.divIdx, item.liIdx]} className=\'lcgz\'></i>\n                              <span data-index = {[item.divIdx, item.liIdx]}>{ item.text }</span>\n                            </li>\n                  } else if (item.text == \'\u603B\u884C\u5F85\u529E\u6587\u4EF6\') {\n                    zhdbwjLi = <li data-index = {[item.divIdx, item.liIdx]} style={{\'position\': \'relative\'}}>\n                        \t\t\t<span className=\'_badge\' style={{\'display\': (zhdbwjNum <= 0 && \'none\')}}>{zhdbwjNum}</span>\n                              <i data-index = {[item.divIdx, item.liIdx]} className=\'zhdbwj\'></i>\n                              <span data-index = {[item.divIdx, item.liIdx]}>\u603B\u884C\u5F85\u529E</span>\n                            </li>\n                  } else if (item.text == \'\u603B\u884C\u6D41\u7A0B\u8DDF\u8E2A\') {\n                    zhlcgzLi = <li data-index = {[item.divIdx, item.liIdx]}>\n                              <i data-index = {[item.divIdx, item.liIdx]} className=\'zhlcgz\'></i>\n                              <span data-index = {[item.divIdx, item.liIdx]} style={{\'font-size\':\'12px\'}}>{ item.text }</span>\n                            </li>\n                  }\n                })\n              }\n              \n              return <div className=\'menuItemCon\'>\n              \t<h4 className=\'menuTitle\'>{menu.menuTitle}</h4>\n                <section>\n                \t<ul onClick={_this.handleLiClick}>\n                    {\n                      menu.menuTitle == \'\u5E38\u7528\u5E94\u7528\' && [<li data-index=\'tzgg\'>\n                          <i data-index=\'tzgg\' className=\'tzgg\'></i>\n                          <span data-index=\'tzgg\'>\u901A\u77E5\u516C\u544A</span>\n                        </li>, dbwjLi, (zhdbwjLi && zhdbwjLi), dygwLi, ybwjLi, cbxxLi, lcgzLi, (zhlcgzLi && zhlcgzLi)]\n                    }\n                    {\n                      menu.menuItems.map(function(item, itemIdx){\n                        var icon=\'\';\n                        switch(item.text){\n                            case \'\u5F85\u529E\u6587\u4EF6\' : icon=\'dbwj\';break;\n                            case \'\u5DF2\u529E\u6587\u4EF6\' : icon=\'ybwj\';break;\n                            case \'\u6D41\u7A0B\u8DDF\u8E2A\' : icon=\'lcgz\';break;\n                            case \'\u5F85\u9605\u516C\u6587\' : icon=\'dygw\';break;\n                            case \'\u50AC\u529E\u4FE1\u606F\' : icon=\'cbxx\';break;\n                            case \'\u53D1\u6587\u67E5\u8BE2\' : icon=\'fwgl\';break;\n                            case \'\u603B\u884C\u6536\u6587\' : icon=\'zhsw\';break;\n                            case \'\u90E8\u95E8\u6536\u6587\' : icon=\'bmsw\';break;\n                            case \'\u7B7E\u62A5\u67E5\u8BE2\' : icon=\'qbgl\';break;\n                            case \'\u516C\u6587\u4F20\u9605\' : icon=\'gwcy\';break;\n                            case \'\u6750\u6599\u4F20\u9605\' : icon=\'clcy\';break;\n                          \tcase \'\u4F1A\u8BAE\u7BA1\u7406\' : icon=\'hygl\';break;\n                            case \'\u51FA\u5DEE\u5BA1\u6279\' : icon=\'ccsp\';break;\n                            case \'\u4E1A\u52A1\u8C03\u6574\' : icon=\'ywtz\';break;\n                            case \'\u8D37\u6B3E\u5B9A\u4EF7\' : icon=\'dkdj\';break;\n                            case \'\u5B58\u6B3E\u5229\u7387\' : icon=\'ckll\';break;\n                            case \'\u4FE1\u606F\u53D1\u5E03\' : icon=\'xxfb\';break;\n                            case \'\u547C\u53EB\u5DE5\u5355\' : icon=\'hjgd\';break;\n                            case \'\u5DE5\u4F5C\u534F\u4F5C\u5355\' : icon=\'gzxzd\';break;\n                            case \'\u8BBE\u5907\u7533\u9886\' : icon=\'sbsl\';break;\n                            case \'\u603B\u884C\u7528\u5370\' : icon=\'zhyy\';break;\n                            case \'\u5206\u652F\u884C\u7528\u5370\' : icon=\'fzhyy\';break;\n                            default:icon=\'\';\n                        }\n                        if(menu.menuTitle != \'\u5E38\u7528\u5E94\u7528\'){\n                          return <li data-index = {[item.divIdx, item.liIdx]}>\n                            <i data-index = {[item.divIdx, item.liIdx]} className={icon}></i>\n                            <span data-index = {[item.divIdx, item.liIdx]}>{ item.text }</span>\n                          </li>\n                        }\n                        \n                      })\n                    }\n                    {\n                      (isXqcx && menu.menuTitle == \'\u4E8B\u52A1\u67E5\u8BE2\') && <li data-index=\'xqcx\'>\n                          <i data-index=\'xqcx\' className=\'xqcx\'></i>\n                          <span data-index=\'xqcx\'>\u9700\u6C42\u67E5\u8BE2</span>\n                        </li>\n                    }\n                  </ul>\n                </section>\n              </div>\n            })\n          }\n        </div>\n      )\n    } else {\n      return null;\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleLiClick: function handleLiClick(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    if (index == \'tzgg\') {\n      this.props.customHandler({\n        eventType: \'handleTzggLiClick\'\n      });\n    } else if (index == \'xqcx\') {\n      this.props.customHandler({\n        eventType: \'handleXqcxLiClick\'\n      });\n    } else {\n      this.props.customHandler({\n        data: index,\n        eventType: \'handleLiClick\'\n      });\n    }\n  },\n  render: function render() {\n    var customData = this.props.customData;\n    var _this = this;\n    if (customData) {\n      var data = customData.data;\n      var isXqcx = customData.isXqcx;\n      var dbwjNum = customData.dbwjNum;\n      var dygwNum = customData.dygwNum;\n      var zhdbwjNum = customData.zhdbwjNum;\n      return React.createElement(\n        \'div\',\n        { className: \'menuContainer\' },\n        data.map(function (menu, menuIdx) {\n          if (menu.menuTitle == \'\u5E38\u7528\u5E94\u7528\') {\n            var dbwjLi = null;\n            var dygwLi = null;\n            var ybwjLi = null;\n            var lcgzLi = null;\n            var cbxxLi = null;\n            var zhdbwjLi = null;\n            var zhlcgzLi = null;\n            menu.menuItems.map(function (item, itemIdx) {\n              if (item.text == \'\u5F85\u529E\u6587\u4EF6\') {\n                dbwjLi = React.createElement(\n                  \'li\',\n                  { \'data-index\': [item.divIdx, item.liIdx], style: { \'position\': \'relative\' } },\n                  React.createElement(\n                    \'span\',\n                    { className: \'_badge\', style: { \'display\': dbwjNum <= 0 && \'none\' } },\n                    dbwjNum\n                  ),\n                  React.createElement(\'i\', { \'data-index\': [item.divIdx, item.liIdx], className: \'dbwj\' }),\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': [item.divIdx, item.liIdx] },\n                    item.text\n                  )\n                );\n              } else if (item.text == \'\u5DF2\u529E\u6587\u4EF6\') {\n                ybwjLi = React.createElement(\n                  \'li\',\n                  { \'data-index\': [item.divIdx, item.liIdx] },\n                  React.createElement(\'i\', { \'data-index\': [item.divIdx, item.liIdx], className: \'ybwj\' }),\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': [item.divIdx, item.liIdx] },\n                    item.text\n                  )\n                );\n              } else if (item.text == \'\u5F85\u9605\u516C\u6587\') {\n                dygwLi = React.createElement(\n                  \'li\',\n                  { \'data-index\': [item.divIdx, item.liIdx], style: { \'position\': \'relative\' } },\n                  React.createElement(\n                    \'span\',\n                    { className: \'_badge\', style: { \'display\': dygwNum <= 0 && \'none\' } },\n                    dygwNum\n                  ),\n                  React.createElement(\'i\', { \'data-index\': [item.divIdx, item.liIdx], className: \'dygw\' }),\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': [item.divIdx, item.liIdx] },\n                    item.text\n                  )\n                );\n              } else if (item.text == \'\u50AC\u529E\u4FE1\u606F\') {\n                cbxxLi = React.createElement(\n                  \'li\',\n                  { \'data-index\': [item.divIdx, item.liIdx] },\n                  React.createElement(\'i\', { \'data-index\': [item.divIdx, item.liIdx], className: \'cbxx\' }),\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': [item.divIdx, item.liIdx] },\n                    item.text\n                  )\n                );\n              } else if (item.text == \'\u6D41\u7A0B\u8DDF\u8E2A\') {\n                lcgzLi = React.createElement(\n                  \'li\',\n                  { \'data-index\': [item.divIdx, item.liIdx] },\n                  React.createElement(\'i\', { \'data-index\': [item.divIdx, item.liIdx], className: \'lcgz\' }),\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': [item.divIdx, item.liIdx] },\n                    item.text\n                  )\n                );\n              } else if (item.text == \'\u603B\u884C\u5F85\u529E\u6587\u4EF6\') {\n                zhdbwjLi = React.createElement(\n                  \'li\',\n                  { \'data-index\': [item.divIdx, item.liIdx], style: { \'position\': \'relative\' } },\n                  React.createElement(\n                    \'span\',\n                    { className: \'_badge\', style: { \'display\': zhdbwjNum <= 0 && \'none\' } },\n                    zhdbwjNum\n                  ),\n                  React.createElement(\'i\', { \'data-index\': [item.divIdx, item.liIdx], className: \'zhdbwj\' }),\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': [item.divIdx, item.liIdx] },\n                    \'\\u603B\\u884C\\u5F85\\u529E\'\n                  )\n                );\n              } else if (item.text == \'\u603B\u884C\u6D41\u7A0B\u8DDF\u8E2A\') {\n                zhlcgzLi = React.createElement(\n                  \'li\',\n                  { \'data-index\': [item.divIdx, item.liIdx] },\n                  React.createElement(\'i\', { \'data-index\': [item.divIdx, item.liIdx], className: \'zhlcgz\' }),\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': [item.divIdx, item.liIdx], style: { \'font-size\': \'12px\' } },\n                    item.text\n                  )\n                );\n              }\n            });\n          }\n\n          return React.createElement(\n            \'div\',\n            { className: \'menuItemCon\' },\n            React.createElement(\n              \'h4\',\n              { className: \'menuTitle\' },\n              menu.menuTitle\n            ),\n            React.createElement(\n              \'section\',\n              null,\n              React.createElement(\n                \'ul\',\n                { onClick: _this.handleLiClick },\n                menu.menuTitle == \'\u5E38\u7528\u5E94\u7528\' && [React.createElement(\n                  \'li\',\n                  { \'data-index\': \'tzgg\' },\n                  React.createElement(\'i\', { \'data-index\': \'tzgg\', className: \'tzgg\' }),\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': \'tzgg\' },\n                    \'\\u901A\\u77E5\\u516C\\u544A\'\n                  )\n                ), dbwjLi, zhdbwjLi && zhdbwjLi, dygwLi, ybwjLi, cbxxLi, lcgzLi, zhlcgzLi && zhlcgzLi],\n                menu.menuItems.map(function (item, itemIdx) {\n                  var icon = \'\';\n                  switch (item.text) {\n                    case \'\u5F85\u529E\u6587\u4EF6\':\n                      icon = \'dbwj\';break;\n                    case \'\u5DF2\u529E\u6587\u4EF6\':\n                      icon = \'ybwj\';break;\n                    case \'\u6D41\u7A0B\u8DDF\u8E2A\':\n                      icon = \'lcgz\';break;\n                    case \'\u5F85\u9605\u516C\u6587\':\n                      icon = \'dygw\';break;\n                    case \'\u50AC\u529E\u4FE1\u606F\':\n                      icon = \'cbxx\';break;\n                    case \'\u53D1\u6587\u67E5\u8BE2\':\n                      icon = \'fwgl\';break;\n                    case \'\u603B\u884C\u6536\u6587\':\n                      icon = \'zhsw\';break;\n                    case \'\u90E8\u95E8\u6536\u6587\':\n                      icon = \'bmsw\';break;\n                    case \'\u7B7E\u62A5\u67E5\u8BE2\':\n                      icon = \'qbgl\';break;\n                    case \'\u516C\u6587\u4F20\u9605\':\n                      icon = \'gwcy\';break;\n                    case \'\u6750\u6599\u4F20\u9605\':\n                      icon = \'clcy\';break;\n                    case \'\u4F1A\u8BAE\u7BA1\u7406\':\n                      icon = \'hygl\';break;\n                    case \'\u51FA\u5DEE\u5BA1\u6279\':\n                      icon = \'ccsp\';break;\n                    case \'\u4E1A\u52A1\u8C03\u6574\':\n                      icon = \'ywtz\';break;\n                    case \'\u8D37\u6B3E\u5B9A\u4EF7\':\n                      icon = \'dkdj\';break;\n                    case \'\u5B58\u6B3E\u5229\u7387\':\n                      icon = \'ckll\';break;\n                    case \'\u4FE1\u606F\u53D1\u5E03\':\n                      icon = \'xxfb\';break;\n                    case \'\u547C\u53EB\u5DE5\u5355\':\n                      icon = \'hjgd\';break;\n                    case \'\u5DE5\u4F5C\u534F\u4F5C\u5355\':\n                      icon = \'gzxzd\';break;\n                    case \'\u8BBE\u5907\u7533\u9886\':\n                      icon = \'sbsl\';break;\n                    case \'\u603B\u884C\u7528\u5370\':\n                      icon = \'zhyy\';break;\n                    case \'\u5206\u652F\u884C\u7528\u5370\':\n                      icon = \'fzhyy\';break;\n                    default:\n                      icon = \'\';\n                  }\n                  if (menu.menuTitle != \'\u5E38\u7528\u5E94\u7528\') {\n                    return React.createElement(\n                      \'li\',\n                      { \'data-index\': [item.divIdx, item.liIdx] },\n                      React.createElement(\'i\', { \'data-index\': [item.divIdx, item.liIdx], className: icon }),\n                      React.createElement(\n                        \'span\',\n                        { \'data-index\': [item.divIdx, item.liIdx] },\n                        item.text\n                      )\n                    );\n                  }\n                }),\n                isXqcx && menu.menuTitle == \'\u4E8B\u52A1\u67E5\u8BE2\' && React.createElement(\n                  \'li\',\n                  { \'data-index\': \'xqcx\' },\n                  React.createElement(\'i\', { \'data-index\': \'xqcx\', className: \'xqcx\' }),\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': \'xqcx\' },\n                    \'\\u9700\\u6C42\\u67E5\\u8BE2\'\n                  )\n                )\n              )\n            )\n          );\n        })\n      );\n    } else {\n      return null;\n    }\n  }\n});';
    }
  }, "index");
})(window, ysp);