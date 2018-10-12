(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control26_8TzGoK: function (elem) {
      if (elem) {
        var ths = [];$(elem).children('tbody').children('tr').eq(0).children('th:not(:last-child)').each(function (thIdx, th) {
          ths.push(th.textContent);
        });var lastThImg = $(elem).children('tbody').children('tr').eq(0).children('th:last-child').find('img')[0];if (!lastThImg) {
          ths.push($(elem).children('tbody').children('tr').eq(0).children('th:last-child').text());
        }var trs = [];var sanjiao = []; //当前行是否含有折叠三角
        var number = null; //折叠的层级
        $(elem).children('tbody').children('tr').each(function (trIdx, tr) {
          if (trIdx > 0) {
            var img = $(tr).children('td').children('a').children('img')[0];var obj = {};if (!img) {
              var tds = [];$(tr).children('td').each(function (tdIdx, td) {
                var titleA1 = $(td).children('font').children('a.info')[0]; //第一种标题类型
                var titleA2 = $(td).children('a')[1] || $(td).children('a')[0]; //第二种标题类型
                if (titleA1) {
                  if (titleA1.children[0] && titleA1.children[0].previousSibling && titleA1.children[0].previousSibling.textContent) {
                    obj._title = titleA1.children[0].previousSibling.textContent.trim(); //标题内容
                  } else {
                    if (titleA1.children[0] && titleA1.children[0].tagName == 'SCRIPT') {
                      return;
                    }obj._title = titleA1.textContent.trim(); //标题内容
                  }
                } else if (titleA2) {
                  if (titleA2.target == 'blank') {
                    titleA2.target = '_blank';
                  }if (titleA2.children[0] && titleA2.children[0].previousSibling && titleA2.children[0].previousSibling.textContent) {
                    obj._title = titleA2.children[0].previousSibling.textContent.trim(); //标题内容
                  } else if (titleA2.title && /.*[...]$/.test(titleA2.textContent.trim())) {
                    obj._title = titleA2.title.trim();
                  } else {
                    obj._title = titleA2.textContent.trim(); //标题内容
                  }
                } else {
                  tds.push([td.textContent, tdIdx]);
                }
              });var lastTdImg = $(tr).children('td:last-child').find('img')[0]; // if (!lastTdImg) {
              //   tds.push([$(tr).children('td:last-child').text(), $(tr).children('td').length - 1]);
              // }
              obj.otherData = tds; //其他内容
              obj.trIdx = trIdx;trs.push(obj);trIdx <= 3 && sanjiao.push(false);
            } else {
              trIdx <= 3 && sanjiao.push(true);
            }
          }
        });if (sanjiao[0] == false) {
          number = 0;
        } else if (sanjiao[0] == true && sanjiao[1] == false) {
          number = 1;
        } else if (sanjiao[0] == true && sanjiao[1] == true && sanjiao[2] == false) {
          number = 2;
        } else if (sanjiao[0] == true && sanjiao[1] == true && sanjiao[2] == true) {
          number = 3;
        }var isIos = ysp.appMain.isIOS();return { ths: ths, trs: trs, number: number, isIos: isIos };
      } else {
        return null;
      }
    },
    doAction_uiControl24_QInhkG: function (data, elem) {
      if (data.eventType == 'handleListItemClick') {
        var a = $(elem).children('tbody').children('tr').eq(data.dataCustom).find('td a[onClick]')[0];var _userName = ysp.customHelper.getUserName();if (a) {
          if (a.textContent == '[' && a.nextElementSibling) {
            var _a = a.nextElementSibling;if (_a.getAttribute("onclick") == null) {
              var _url = _a.href;if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
                if (ysp.appMain.isIOS()) {
                  localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1'));ysp.appMain.openWindow(_url + '&_userName=' + _userName);
                } else {
                  _a.click();
                }
              } else {
                _a.click();
              }
            } else {
              var _url = _a.getAttribute("onclick").replace(/.*\('(.*opendocument).*/, '$1');if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
                if (ysp.appMain.isIOS()) {
                  localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1'));ysp.appMain.openWindow(_url + '&_userName=' + _userName);
                } else {
                  _a.click();
                }
              } else {
                _a.click();
              }
            }
          } else {
            if (a.getAttribute("onclick") == null) {
              var _url = a.href;if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
                if (ysp.appMain.isIOS()) {
                  localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1'));ysp.appMain.openWindow(_url + '&_userName=' + _userName);
                } else {
                  a.click();
                }
              } else {
                a.click();
              }
            } else {
              var _url = a.getAttribute("onclick").replace(/.*\('(.*opendocument).*/, '$1');if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
                if (ysp.appMain.isIOS()) {
                  localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1'));ysp.appMain.openWindow(_url + '&_userName=' + _userName);
                } else {
                  a.click();
                }
              } else {
                a.click();
              }
            }
          }
        } else if ($(elem).children('tbody').children('tr').eq(data.dataCustom).find('td a:visible')[1]) {
          var _a = $(elem).children('tbody').children('tr').eq(data.dataCustom).find('td a:visible')[1];if (_a.getAttribute("onclick") == null) {
            var _url = _a.href;if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
              if (ysp.appMain.isIOS()) {
                localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1'));ysp.appMain.openWindow(_url + '&_userName=' + _userName);
              } else {
                _a.click();
              }
            } else {
              _a.click();
            }
          } else {
            var _url = _a.getAttribute("onclick").replace(/.*\('(.*opendocument).*/, '$1');if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
              if (ysp.appMain.isIOS()) {
                localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1'));ysp.appMain.openWindow(_url + '&_userName=' + _userName);
              } else {
                _a.click();
              }
            } else {
              _a.click();
            }
          }
        } else {
          var _a = $(elem).children('tbody').children('tr').eq(data.dataCustom).find('td a:visible')[0];if (_a.getAttribute("onclick") == null) {
            var _url = _a.href;if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
              if (ysp.appMain.isIOS()) {
                localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1'));ysp.appMain.openWindow(_url + '&_userName=' + _userName);
              } else {
                _a.click();
              }
            } else {
              _a.click();
            }
          } else {
            var _url = _a.getAttribute("onclick").replace(/.*\('(.*opendocument).*/, '$1');if (/http/.test(_url) && ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1') !== _url.replace(/^(http.*com).*/, '$1')) {
              if (ysp.appMain.isIOS()) {
                localStorage.setItem("oldHost", ysp.appMain.getActiveUrl().replace(/^(http.*com).*/, '$1'));ysp.appMain.openWindow(_url + '&_userName=' + _userName);
              } else {
                _a.click();
              }
            } else {
              _a.click();
            }
          }
        }try {
          ysp.appMain.showLoading();
        } catch (err) {}
      }
    },
    getTemplate_uiControl24_QInhkG: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount:function(){\n    var listContainer=document.querySelector(\'#listContainer\');\n    // var searchContainer=document.getElementById(\'searchContainer\');\n    if(listContainer){\n      listContainer.addEventListener(\'touchend\',function(){\n        var menu = document.querySelector(\'#classTwo ul\');\n        menu && menu.appendChild(document.createTextNode(\'  \'));\n        var icon_other=document.querySelector(\'.icon_other\');\n        icon_other && icon_other.appendChild(document.createTextNode(\'  \'));\n      },false);\n    }\n  },\n  handleToggle:function(e){\n    var target=e.target;\n    var hideData=target.previousElementSibling;\n    target.className=(target.className==\'icon_close\'?\'icon_open\':\'icon_close\');\n    $(hideData).slideToggle();\n  },\n  handleListItemClick:function(e){\n    if(e.target.nodeName!=\'I\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleListItemClick\'\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      if (data.trs.length) {\n        return (\n          <div className=\'listContainer\' onClick={this.handleListItemClick} id=\'listContainer\'>\n            {\n              data.trs.map(function(tr,trIdx){\n                var showData=[];\n                var hideData=[];\n                if(tr._title && tr._title.trim()){\n                  return <div style={{\'background\':\'#e1e1e1\'}}>\n                    <article className=\'listItem\' data-index={tr.trIdx}>\n                    <h4 data-index={tr.trIdx}>{tr._title}</h4>\n                    <section data-index={tr.trIdx}>\n                      {\n                        tr.otherData.map(function(td,tdIdx){\n\n                          if(td[0]){\n                            if(showData.length<=1){\n                              data.ths[td[1]] && showData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>);\n                            }else{\n                              hideData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>);\n                            }\n                          }\n                        })\n                      }\n                      <div data-index={tr.trIdx}>{showData}</div>\n                      <div className=\'hide\' data-index={tr.trIdx}>{hideData}</div>\n                      <i onClick={_this.handleToggle} className=\'icon_close\' style={{\'display\':(hideData.length==0 ? \'none\' : \'block\')}}></i>\n                    </section>\n\n                  </article>\n                </div>\n                }\n\n              })\n            }\n          </div>\n        )\n      } else {\n        return <div className=\'noSearchResult\'>\u6CA1\u6709\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u7EAA\u5F55</div>\n      }\n      \n    }else{\n      return <div></div>\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    var listContainer = document.querySelector(\'#listContainer\');\n    // var searchContainer=document.getElementById(\'searchContainer\');\n    if (listContainer) {\n      listContainer.addEventListener(\'touchend\', function () {\n        var menu = document.querySelector(\'#classTwo ul\');\n        menu && menu.appendChild(document.createTextNode(\'  \'));\n        var icon_other = document.querySelector(\'.icon_other\');\n        icon_other && icon_other.appendChild(document.createTextNode(\'  \'));\n      }, false);\n    }\n  },\n  handleToggle: function handleToggle(e) {\n    var target = e.target;\n    var hideData = target.previousElementSibling;\n    target.className = target.className == \'icon_close\' ? \'icon_open\' : \'icon_close\';\n    $(hideData).slideToggle();\n  },\n  handleListItemClick: function handleListItemClick(e) {\n    if (e.target.nodeName != \'I\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleListItemClick\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.trs.length) {\n        return React.createElement(\n          \'div\',\n          { className: \'listContainer\', onClick: this.handleListItemClick, id: \'listContainer\' },\n          data.trs.map(function (tr, trIdx) {\n            var showData = [];\n            var hideData = [];\n            if (tr._title && tr._title.trim()) {\n              return React.createElement(\n                \'div\',\n                { style: { \'background\': \'#e1e1e1\' } },\n                React.createElement(\n                  \'article\',\n                  { className: \'listItem\', \'data-index\': tr.trIdx },\n                  React.createElement(\n                    \'h4\',\n                    { \'data-index\': tr.trIdx },\n                    tr._title\n                  ),\n                  React.createElement(\n                    \'section\',\n                    { \'data-index\': tr.trIdx },\n                    tr.otherData.map(function (td, tdIdx) {\n\n                      if (td[0]) {\n                        if (showData.length <= 1) {\n                          data.ths[td[1]] && showData.push(React.createElement(\n                            \'label\',\n                            { \'data-index\': tr.trIdx },\n                            React.createElement(\n                              \'b\',\n                              { \'data-index\': tr.trIdx },\n                              data.ths[td[1]],\n                              \'\\uFF1A\'\n                            ),\n                            React.createElement(\n                              \'span\',\n                              { \'data-index\': tr.trIdx },\n                              td[0]\n                            )\n                          ));\n                        } else {\n                          hideData.push(React.createElement(\n                            \'label\',\n                            { \'data-index\': tr.trIdx },\n                            React.createElement(\n                              \'b\',\n                              { \'data-index\': tr.trIdx },\n                              data.ths[td[1]],\n                              \'\\uFF1A\'\n                            ),\n                            React.createElement(\n                              \'span\',\n                              { \'data-index\': tr.trIdx },\n                              td[0]\n                            )\n                          ));\n                        }\n                      }\n                    }),\n                    React.createElement(\n                      \'div\',\n                      { \'data-index\': tr.trIdx },\n                      showData\n                    ),\n                    React.createElement(\n                      \'div\',\n                      { className: \'hide\', \'data-index\': tr.trIdx },\n                      hideData\n                    ),\n                    React.createElement(\'i\', { onClick: _this.handleToggle, className: \'icon_close\', style: { \'display\': hideData.length == 0 ? \'none\' : \'block\' } })\n                  )\n                )\n              );\n            }\n          })\n        );\n      } else {\n        return React.createElement(\n          \'div\',\n          { className: \'noSearchResult\' },\n          \'\\u6CA1\\u6709\\u627E\\u5230\\u7B26\\u5408\\u6761\\u4EF6\\u7684\\u7EAA\\u5F55\'\n        );\n      }\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control36_1TMe5I: function (elem) {
      if (elem) {
        var classOne = [];var _title = '';$(elem).children('div').children('h3').children('a').each(function (aIdx, a) {
          classOne.push([a.textContent, aIdx]);
        });var classTwo = [];$(elem).children('div.on').find('div>ul>li>a').each(function (aIdx, a) {
          classTwo.push([a.textContent, aIdx, a.className]);
        }); // _title = $(elem).children('div.on').children('h3').text();
        var liText = $(elem).find('.contenttd-sele').text();if (liText == '己办文件') {
          liText = '已办文件';
        } else if (liText == '总行收文管理') {
          liText = '总行收文';
        } else if (liText == '部门收文管理') {
          liText = '部门收文';
        } else if (liText == '公文传阅管理') {
          liText = '公文传阅';
        } else if (liText == '材料传阅管理') {
          liText = '材料传阅';
        } else if (liText == '出差审批单') {
          liText = '出差审批';
        } else if (liText == '业务调整管理') {
          liText = '业务调整';
        } else if (liText == '贷款定价管理') {
          liText = '贷款定价';
        } else if (liText == '存款利率审批') {
          liText = '存款利率';
        } else if (liText == '所有信息发布') {
          liText = '信息发布';
        } else if (liText == '呼叫中心工单') {
          liText = '呼叫工单';
        } else if (liText == '工作协作单管理') {
          liText = '工作协作单';
        } else if (liText == '电子设备申领管理') {
          liText = '设备申领';
        } else if (liText == '总行用印申请') {
          liText = '总行用印';
        } else if (liText == '分支行用印申请') {
          liText = '分支行用印';
        } else if (liText == '发文管理') {
          liText = '发文查询';
        } else if (liText == '签报管理') {
          liText = '签报查询';
        }var isTzgg = false;var indexdata = elem.ownerDocument.defaultView.parent.document.querySelector('#indexdata');if (indexdata) {
          var url = indexdata.contentWindow.location.href;try {
            if (decodeURIComponent(decodeURIComponent(url)).indexOf('通知公告') != -1) {
              isTzgg = true;
            }
          } catch (err) {}
        }return { isTzgg: isTzgg, classOne: classOne, classTwo: classTwo, _title: liText };
      }
    }, doAction_uiControl34_BzV8a4: function (data, elem) {
      if (data.eventType == 'handleClassTwo') {
        var target = $(elem).children('div.on').find('div>ul>li>a')[data.dataCustom];target.ownerDocument.defaultView.chgseletd = ysp.customHelper.chgseletd;setTimeout(function () {
          target.click();
        }, 50); // $(elem).children('div.on').find('div>ul>li>a')[data.dataCustom].click();
        try {
          ysp.appMain.showLoading();
        } catch (err) {}
      } else if (data.eventType == 'handleBack') {
        // elem.ownerDocument.defaultView.parent.document.querySelector('frame:nth-child(2)').contentWindow.location.href = 'http://oacs.jx-bank.com/weboa/windex.nsf/frmcenter?openform';
        var indextop = elem.ownerDocument.defaultView.parent.document.querySelector('#indextop');if (indextop) {
          var navigator = indextop.contentDocument.querySelector('#bar>#navigator>#navigator>a:first-child');if (navigator) {
            navigator.click();try {
              ysp.appMain.showLoading();
            } catch (err) {}
          }
        }
      } else if (data.eventType == 'handleReload') {
        ysp.appMain.getActiveWindow().frames["oaframe"].location.reload();ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl34_BzV8a4: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount:function(){\n    this._scroll();\n  },\n  componentWillUnMount: function(){\n    var data = this.props.customData;\n    // var avtiveId = ysp.runtime.Context.activeContext.model.id;\n    var divRoot = document.querySelector(\'div[data-type="root"]\');\n    if(divRoot){\n      divRoot.classList.remove(\'tzggList\');\n    }\n  },\n  _scroll :function(){\n    var timer = setTimeout(function(){\n      var selected = document.querySelector(\'.classTowNavbar .contenttd-sele\');\n      if(selected){\n        var _offSetLeft = selected.offsetLeft;\n        var screenWidth = document.querySelector(\'#classTwoTitle\').offsetWidth;\n         selected.parentElement.scrollLeft = _offSetLeft - 20;\n//         if(_offSetLeft > screenWidth || selected.parentElement.scrollLeft > screenWidth){\n         \n//         }\n      }\n      clearTimeout(timer);\n    },500);\n  },\n  handleBack:function(){\n    this.props.customHandler({\n      eventType:\'handleBack\'\n    })\n  },\n  handleClassTwo:function(e){\n    var target=e.target;\n    //$(\'#classOne\').show();\n    if(e.target.textContent==\'\u6D41\u7A0B\u8DDF\u8E2A-1\'){\n      alert(\'PC\u7AEF\u5904\u7406\');\n      return;\n    }\n    if(target.nodeName==\'LI\'){\n      this.props.customHandler({\n        data:target.dataset.index,\n        eventType:\'handleClassTwo\'\n      })\n    }\n  },\n  handleOther:function(e){\n    $(\'.menuCon\').fadeIn();\n    $(\'body\').attr(\'class\',\'fixed\');\n    $(\'html\').attr(\'class\',\'fixed\');\n  },\n  handleMenuClick:function(e){\n    var target=e.target;\n    var index=target.dataset.index;\n    if(index==0 || index){\n      this.props.customHandler({\n        data:target.dataset.index,\n        eventType:\'handleClassTwo\'\n      })\n    }\n     this._scroll();\n    $(\'.menuCon\').fadeOut();\n    $(\'body\').attr(\'class\',\'\');\n    $(\'html\').attr(\'class\',\'\');\n  },\n  handleReload:function(){\n    this.props.customHandler({\n      eventType:\'handleReload\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div style={{\'position\':\'relative\'}}>\n          <div className=\'classTwo\' id=\'classTwo\'>\n            <span className=\'back listBtnBack fixedTopBackBtn\' onClick={this.handleBack}>\u8FD4\u56DE</span>\n            <h2 className=\'pageTitle fixedTop\' id=\'classTwoTitle\'>\n              {data.isTzgg ? \'\u901A\u77E5\u516C\u544A\' : data._title}\n              <span className=\'icon_reload\' onClick={this.handleReload}></span>\n            </h2>\n          </div>\n          \n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    this._scroll();\n  },\n  componentWillUnMount: function componentWillUnMount() {\n    var data = this.props.customData;\n    // var avtiveId = ysp.runtime.Context.activeContext.model.id;\n    var divRoot = document.querySelector(\'div[data-type="root"]\');\n    if (divRoot) {\n      divRoot.classList.remove(\'tzggList\');\n    }\n  },\n  _scroll: function _scroll() {\n    var timer = setTimeout(function () {\n      var selected = document.querySelector(\'.classTowNavbar .contenttd-sele\');\n      if (selected) {\n        var _offSetLeft = selected.offsetLeft;\n        var screenWidth = document.querySelector(\'#classTwoTitle\').offsetWidth;\n        selected.parentElement.scrollLeft = _offSetLeft - 20;\n        //         if(_offSetLeft > screenWidth || selected.parentElement.scrollLeft > screenWidth){\n\n        //         }\n      }\n      clearTimeout(timer);\n    }, 500);\n  },\n  handleBack: function handleBack() {\n    this.props.customHandler({\n      eventType: \'handleBack\'\n    });\n  },\n  handleClassTwo: function handleClassTwo(e) {\n    var target = e.target;\n    //$(\'#classOne\').show();\n    if (e.target.textContent == \'\u6D41\u7A0B\u8DDF\u8E2A-1\') {\n      alert(\'PC\u7AEF\u5904\u7406\');\n      return;\n    }\n    if (target.nodeName == \'LI\') {\n      this.props.customHandler({\n        data: target.dataset.index,\n        eventType: \'handleClassTwo\'\n      });\n    }\n  },\n  handleOther: function handleOther(e) {\n    $(\'.menuCon\').fadeIn();\n    $(\'body\').attr(\'class\', \'fixed\');\n    $(\'html\').attr(\'class\', \'fixed\');\n  },\n  handleMenuClick: function handleMenuClick(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    if (index == 0 || index) {\n      this.props.customHandler({\n        data: target.dataset.index,\n        eventType: \'handleClassTwo\'\n      });\n    }\n    this._scroll();\n    $(\'.menuCon\').fadeOut();\n    $(\'body\').attr(\'class\', \'\');\n    $(\'html\').attr(\'class\', \'\');\n  },\n  handleReload: function handleReload() {\n    this.props.customHandler({\n      eventType: \'handleReload\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { style: { \'position\': \'relative\' } },\n        React.createElement(\n          \'div\',\n          { className: \'classTwo\', id: \'classTwo\' },\n          React.createElement(\n            \'span\',\n            { className: \'back listBtnBack fixedTopBackBtn\', onClick: this.handleBack },\n            \'\\u8FD4\\u56DE\'\n          ),\n          React.createElement(\n            \'h2\',\n            { className: \'pageTitle fixedTop\', id: \'classTwoTitle\' },\n            data.isTzgg ? \'\u901A\u77E5\u516C\u544A\' : data._title,\n            React.createElement(\'span\', { className: \'icon_reload\', onClick: this.handleReload })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },

    getData_control67_ayapC5: function (elem) {
      if (elem) {
        return true;
      }
    },
    doAction_uiControl67_bywbm5: function (data, elem) {
      if (data.eventType == 'btnClick') {
        $(elem).children('input')[data.dataCustom].click();try {
          ysp.appMain.showLoading();
        } catch (err) {}
      }
    },
    getTemplate_uiControl67_bywbm5: function () {
      var selfTemplate = "module.exports = React.createClass({\n  btnClick:function(e){\n    if(e.target.nodeName=='BUTTON'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:'btnClick'\n      })\n      try{\n        if(top && top.document && top.document.querySelector(\"#mobileMainContent\")){\n          top.document.querySelector(\"#mobileMainContent\").scrollTop=0;\n        }\n        if(top && top.document && top.document.body){\n          top.document.body.scrollTop=0;\n        }\n      }catch(err){\n        console.log(\"err\")\n      }\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div onClick={this.btnClick} className='changePageBtnCon'>\n          <button data-index={2}>\u4E0A\u4E00\u9875</button>\n          <button data-index={3}>\u4E0B\u4E00\u9875</button>\n        </div>\n    \t)\n    }else{\n      return <div></div>\n    }\n    \n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick(e) {\n    if (e.target.nodeName == \'BUTTON\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'btnClick\'\n      });\n      try {\n        if (top && top.document && top.document.querySelector("#mobileMainContent")) {\n          top.document.querySelector("#mobileMainContent").scrollTop = 0;\n        }\n        if (top && top.document && top.document.body) {\n          top.document.body.scrollTop = 0;\n        }\n      } catch (err) {\n        console.log("err");\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { onClick: this.btnClick, className: \'changePageBtnCon\' },\n        React.createElement(\n          \'button\',\n          { \'data-index\': 2 },\n          \'\\u4E0A\\u4E00\\u9875\'\n        ),\n        React.createElement(\n          \'button\',\n          { \'data-index\': 3 },\n          \'\\u4E0B\\u4E00\\u9875\'\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control69_IKzUMu: function (elem) {
      if (elem) {
        return true;
      }
    },
    doAction_uiControl69_vSOSKZ: function (data, elem) {
      if (data.eventType == 'btnClick') {
        $(elem).children('input')[data.dataCustom].click();try {
          ysp.appMain.showLoading();
        } catch (err) {}
      }
    },
    getTemplate_uiControl69_vSOSKZ: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount:function(e){\n    var t=setInterval(function(){\n      var listContainer=document.getElementById(\'listContainer\');\n      var changePageBtnCon=document.getElementById(\'changePageBtnCon\');\n      if(changePageBtnCon){\n        changePageBtnCon.style.display=(listContainer?\'flex\':\'none\');\n      }\n    },100);\n  },\n  btnClick:function(e){\n    \n    if(e.target.nodeName==\'BUTTON\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'btnClick\'\n      })\n      try{\n        if(top && top.document && top.document.querySelector("#mobileMainContent")){\n          top.document.querySelector("#mobileMainContent").scrollTop=0;\n        }\n        if(top && top.document && top.document.body){\n          top.document.body.scrollTop=0;\n        }\n      }catch(err){\n        console.log("err")\n      }\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div onClick={this.btnClick} className=\'changePageBtnCon\' id="changePageBtnCon">\n          <button data-index={2}>\u4E0A\u4E00\u9875</button>\n          <button data-index={3}>\u4E0B\u4E00\u9875</button>\n        </div>\n    \t)\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount(e) {\n    var t = setInterval(function () {\n      var listContainer = document.getElementById(\'listContainer\');\n      var changePageBtnCon = document.getElementById(\'changePageBtnCon\');\n      if (changePageBtnCon) {\n        changePageBtnCon.style.display = listContainer ? \'flex\' : \'none\';\n      }\n    }, 100);\n  },\n  btnClick: function btnClick(e) {\n\n    if (e.target.nodeName == \'BUTTON\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'btnClick\'\n      });\n      try {\n        if (top && top.document && top.document.querySelector("#mobileMainContent")) {\n          top.document.querySelector("#mobileMainContent").scrollTop = 0;\n        }\n        if (top && top.document && top.document.body) {\n          top.document.body.scrollTop = 0;\n        }\n      } catch (err) {\n        console.log("err");\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { onClick: this.btnClick, className: \'changePageBtnCon\', id: \'changePageBtnCon\' },\n        React.createElement(\n          \'button\',\n          { \'data-index\': 2 },\n          \'\\u4E0A\\u4E00\\u9875\'\n        ),\n        React.createElement(\n          \'button\',\n          { \'data-index\': 3 },\n          \'\\u4E0B\\u4E00\\u9875\'\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control55_Ls0TZZ: function (elem) {
      if (elem) {
        var noMsg = $(elem).find('h2:contains("未找到文档")')[0];if (noMsg) {
          return "未找到文档";
        } else {
          return false;
        }
      } else {
        return null;
      }
    },
    doAction_uiControl36_Ov8i7X: function (data, elem) {},
    getTemplate_uiControl36_Ov8i7X: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div style={{'display':(data=='\u672A\u627E\u5230\u6587\u6863'?'block':'none'),'border-top': '10px solid #e1e1e1','z-index':'99'}} id=\"noText\">\n          {data==\"\u672A\u627E\u5230\u6587\u6863\"?\"\u672A\u627E\u5230\u6587\u6863\":''}\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        'div',\n        { style: { 'display': data == '\u672A\u627E\u5230\u6587\u6863' ? 'block' : 'none', 'border-top': '10px solid #e1e1e1', 'z-index': '99' }, id: 'noText' },\n        data == \"\u672A\u627E\u5230\u6587\u6863\" ? \"\u672A\u627E\u5230\u6587\u6863\" : ''\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control62_HRxBdD: function (elem) {
      if (elem) {
        //没有折叠类型的表格
        var ths = [];$(elem).children('tbody').children('tr').eq(0).children('th:not(:last-child)').each(function (thIdx, th) {
          ths.push(th.textContent);
        });var lastThImg = $(elem).children('tbody').children('tr').eq(0).children('th:last-child').find('img')[0];if (!lastThImg) {
          ths.push($(elem).children('tbody').children('tr').eq(0).children('th:last-child').text());
        }var trs = [];var sanjiao = []; //当前行是否含有折叠三角
        var number = null; //折叠的层级
        $(elem).children('tbody').children('tr').each(function (trIdx, tr) {
          if (trIdx > 0) {
            var img = $(tr).children('td').children('a').children('img')[0];var obj = {};if (!img) {
              var tds = [];$(tr).children('td:not(:last-child)').each(function (tdIdx, td) {
                var titleA1 = $(td).children('font').children('a.info')[0];var titleA2 = $(td).children('a')[1];if (titleA1) {
                  if (titleA1.childNodes[0]) {
                    obj._title = titleA1.childNodes[0].previousSibling.textContent.trim(); //标题内容
                  } else {
                    obj._title = titleA1.textContent.trim(); //标题内容
                  }
                } else if (titleA2) {
                  if (titleA2.childNodes[0]) {
                    obj._title = titleA2.childNodes[0].previousSibling.textContent.trim(); //标题内容
                  } else {
                    obj._title = titleA2.textContent.trim(); //标题内容
                  }
                } else {
                  tds.push([td.textContent, tdIdx]);
                }
              });var lastTdImg = $(tr).children('td:last-child').find('img')[0];if (!lastTdImg) {
                tds.push([$(tr).children('td:last-child').text(), $(tr).children('td').length - 1]);
              }obj.otherData = tds; //其他内容
              obj.trIdx = trIdx;trs.push(obj);trIdx <= 3 && sanjiao.push(false);
            } else {
              trIdx <= 3 && sanjiao.push(true);
            }
          }
        });if (sanjiao[0] == false) {
          number = 0;
        } else if (sanjiao[0] == true && sanjiao[1] == false) {
          number = 1;
        } else if (sanjiao[0] == true && sanjiao[1] == true && sanjiao[2] == false) {
          number = 2;
        } else if (sanjiao[0] == true && sanjiao[1] == true && sanjiao[2] == true) {
          number = 3;
        }return { ths: ths, trs: trs, number: number };
      } else {
        return null;
      }
    },
    doAction_uiControl59_9GShCq: function (data, elem) {
      if (data.eventType == 'handleListItemClick') {
        $(elem).children('tbody').children('tr').eq(data.dataCustom).find('td a[onClick]')[0].click();try {
          ysp.appMain.showLoading();
        } catch (err) {}
      }
    },
    getTemplate_uiControl59_9GShCq: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleToggle:function(e){\n    var target=e.target;\n    var hideData=target.previousElementSibling;\n    target.className=(target.className==\'icon_close\'?\'icon_open\':\'icon_close\');\n    $(hideData).slideToggle();\n  },\n  handleListItemClick:function(e){\n    if(e.target.nodeName!=\'I\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleListItemClick\'\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'listContainer\' onClick={this.handleListItemClick}>\n          {\n            data.trs.map(function(tr,trIdx){\n              var showData=[];\n              var hideData=[];\n              return <article className=\'listItem\' data-index={tr.trIdx}>\n              \t<h4 data-index={tr.trIdx}>{tr._title}</h4>\n                <section data-index={tr.trIdx}>\n                \t{\n                    tr.otherData.map(function(td,tdIdx){\n                      if(tdIdx>=data.number&&tdIdx<data.number+2){\n                        if(td[1]>=data.number){\n                          data.ths[td[1]] && showData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>); \n                        }\n                      }else if(tdIdx>=data.number+2){\n                        hideData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>);\n                      }\n                    })\n                  }\n                  <div data-index={tr.trIdx}>{showData}</div>\n                  <div className=\'hide\' data-index={tr.trIdx}>{hideData}</div>\n                  <i onClick={_this.handleToggle} className=\'icon_close\' style={{\'display\':(hideData.length==0 ? \'none\' : \'block\')}}></i>\n                </section>\n                \n              </article>\n            })\n          }\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleToggle: function handleToggle(e) {\n    var target = e.target;\n    var hideData = target.previousElementSibling;\n    target.className = target.className == \'icon_close\' ? \'icon_open\' : \'icon_close\';\n    $(hideData).slideToggle();\n  },\n  handleListItemClick: function handleListItemClick(e) {\n    if (e.target.nodeName != \'I\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleListItemClick\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'listContainer\', onClick: this.handleListItemClick },\n        data.trs.map(function (tr, trIdx) {\n          var showData = [];\n          var hideData = [];\n          return React.createElement(\n            \'article\',\n            { className: \'listItem\', \'data-index\': tr.trIdx },\n            React.createElement(\n              \'h4\',\n              { \'data-index\': tr.trIdx },\n              tr._title\n            ),\n            React.createElement(\n              \'section\',\n              { \'data-index\': tr.trIdx },\n              tr.otherData.map(function (td, tdIdx) {\n                if (tdIdx >= data.number && tdIdx < data.number + 2) {\n                  if (td[1] >= data.number) {\n                    data.ths[td[1]] && showData.push(React.createElement(\n                      \'label\',\n                      { \'data-index\': tr.trIdx },\n                      React.createElement(\n                        \'b\',\n                        { \'data-index\': tr.trIdx },\n                        data.ths[td[1]],\n                        \'\\uFF1A\'\n                      ),\n                      React.createElement(\n                        \'span\',\n                        { \'data-index\': tr.trIdx },\n                        td[0]\n                      )\n                    ));\n                  }\n                } else if (tdIdx >= data.number + 2) {\n                  hideData.push(React.createElement(\n                    \'label\',\n                    { \'data-index\': tr.trIdx },\n                    React.createElement(\n                      \'b\',\n                      { \'data-index\': tr.trIdx },\n                      data.ths[td[1]],\n                      \'\\uFF1A\'\n                    ),\n                    React.createElement(\n                      \'span\',\n                      { \'data-index\': tr.trIdx },\n                      td[0]\n                    )\n                  ));\n                }\n              }),\n              React.createElement(\n                \'div\',\n                { \'data-index\': tr.trIdx },\n                showData\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'hide\', \'data-index\': tr.trIdx },\n                hideData\n              ),\n              React.createElement(\'i\', { onClick: _this.handleToggle, className: \'icon_close\', style: { \'display\': hideData.length == 0 ? \'none\' : \'block\' } })\n            )\n          );\n        })\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },

    getData_control81_TdHgcO: function (elem) {
      if (elem) {
        var text = null;var plfs = []; //排列方式
        var inputVal = $(elem).children().children().children().eq(1).children('iframe').contents().find('input[name="searchtxt"]').val();if ($(elem).children().children().children().length == 3) {
          text = $(elem).children().children().children('td')[0].childNodes[0];if (text) {
            if (text.nodeName == 'BR') {
              text = text.previousSibling.textContent.trim();
            } else {
              text = text.textContent.trim();
            }
          } else {
            text = $(elem).children().children().children('td').eq(0).text().trim();
          }$(elem).children().children().children().eq(0).children('a').each(function (aIdx, a) {
            plfs.push(a.textContent.trim().replace('|', ''));
          });
        }var select = $(elem).children().children().children().eq(1).children('iframe').contents().find('select:visible');var cxfs = []; //查询方式
        var lsjl = []; //历史记录
        if (select[0]) {
          select.eq(0).children('option').each(function (optIdx, opt) {
            cxfs.push([opt.textContent.trim(), opt.selected]);
          });
        }if (select[1]) {
          select.eq(1).children('option').each(function (optIdx, opt) {
            lsjl.push([opt.textContent.trim(), opt.selected]);
          });
        }if (lsjl.indexOf('流程跟踪') != -1 || lsjl.indexOf('催办信息') != -1) {
          lsjl = [];
        }return { inputVal: inputVal, text: text, plfs: plfs, cxfs: cxfs, lsjl: lsjl };
      }
    },
    doAction_uiControl82_hQOH35: function (data, elem) {
      if (data.eventType == 'handleLiClick') {
        $(elem).children().children().children().eq(0).children('a')[data.dataCustom].click();
      } else if (data.eventType == 'handleSelChange') {
        var selIndex = data.dataCustom.selIndex;var optIndex = data.dataCustom.optIndex;var select = $(elem).children().children().children().eq(1).children('iframe').contents().find('select:visible');select.eq(selIndex).children('option')[optIndex].selected = true;select[selIndex].dispatchEvent(new Event('change'));
      } else if (data.eventType == 'handleBtnClick') {
        var btncx = $(elem).children().children().children().eq(1).children('iframe').contents().find('input[value="查询"]')[0];if (ysp && ysp.customHelper && ysp.customHelper.searchItem) {
          btncx.onClick = ysp.customHelper.searchItem(btncx);var form = elem.ownerDocument.querySelector('form[name="_frmSimpleSearchDisp"]'); //form.submit();
        }
      } else if (data.eventType == 'handleIptChange') {
        var input = $(elem).children().children().children().eq(1).children('iframe').contents().find('input[name="searchtxt"]')[0];if (input) {
          input.value = data.dataCustom;input.dispatchEvent(new Event('change'));
        }
      }
    },
    getTemplate_uiControl82_hQOH35: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount:function(){\n    setInterval(function(){\n      var searchContainer=document.getElementById(\'searchContainer\');\n      var searchConHeight=\'95px\';\n      if(searchContainer){\n        searchConHeight=getComputedStyle(searchContainer).height;\n        var noText=document.getElementById(\'noText\');\n        if(noText){\n          noText.style.top=parseFloat(searchConHeight)+48+\'px\';\n        }\n      }\n    },100);\n    \n  },\n  handleLiClick:function(e){\n    if(e.target.nodeName==\'SPAN\'){\n      ysp.appMain.showLoading();\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleLiClick\'\n      })\n    }\n    \n  },\n  handleSelChange:function(e){\n    this.props.customHandler({\n      data:{\n        selIndex:e.target.dataset.index,\n        optIndex:e.target.value\n      },\n      eventType:\'handleSelChange\'\n    });\n  },\n  handleIptChange:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'handleIptChange\'\n    })\n  },\n  handleBtnClick:function(e){\n    this.props.customHandler({\n      eventType:\'handleBtnClick\'\n    })\n  },\n  handleToggle:function(e){\n    var iconToggle = document.querySelector(\'#searchTitle>i\');\n    if(iconToggle) {\n      iconToggle.className=(iconToggle.className==\'icon_close\'?\'icon_open\':\'icon_close\');\n    }\n    \n    var searchSection=document.getElementById(\'searchSection\');\n    if(searchSection && $){\n      $(searchSection).slideToggle(200);\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      var text=data.text;\n      var plfs=data.plfs;\n      var cxfs=data.cxfs;\n      var lsjl=data.lsjl;\n      if(text){\n        return (\n          <div className=\'searchContainer\' id=\'searchContainer\'>\n            <h4 onClick={this.handleToggle} id = \'searchTitle\'>\n              <span>\u67E5\u8BE2\uFF1A</span>\n              <i className=\'icon_close\'></i>\n            </h4>\n            <section id=\'searchSection\'>\n              <p>{text}</p>\n              <ul onClick={this.handleLiClick}>\n                {\n                  plfs.map(function(opt,optIdx){\n                    var liWidth=null;\n                    switch(plfs.length){\n                      case 1 :liWidth=\'100%\';\n                      break;\n                      case 2 :liWidth=\'50%\';\n                      break;\n                      default:liWidth=\'33.333%\';\n                    }\n                    return <li data-index={optIdx} style={{\'min-width\':liWidth}}>\n                      <span data-index={optIdx}>{opt}</span>\n                    </li>\n                  })\n                }\n              </ul>\n              <div style={{\'display\':cxfs.length?\'flex\':\'none\'}} className=\'selCon\'>\n              \t<span>\u67E5\u8BE2\u65B9\u5F0F:</span>\n                <select data-index={0} onChange={this.handleSelChange}>\n                \t{\n                    cxfs.map(function(opt,optIdx){\n                      return <option value={optIdx} selected = {opt[1]}>{opt[0]}</option>\n                    })\n                  }\n                </select>\n              </div>\n              <div className=\'selCon\'>\n              \t<AInput onBlur={this.handleIptChange} value={data.inputVal}/>\n                <button onClick={this.handleBtnClick}>\u67E5\u8BE2</button>\n              </div>\n              <div style={{\'display\':lsjl.length?\'flex\':\'none\'}} className=\'selCon\'>\n                <span>\u67E5\u770B\u5386\u53F2\u6570\u636E\u5E93:</span>\n              \t<select onChange={this.handleSelChange} data-index={1}>\n                \t{\n                    lsjl.map(function(opt,optIdx){\n                      return <option value={optIdx} selected={opt[1]}>{opt[0]}</option>\n                    })\n                  }\n                </select>\n              </div>\n            </section>\n          </div>\n        )\n      }else{\n        return <div></div>\n      }\n    }else{\n      return <div></div>\n    }\n    \n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    setInterval(function () {\n      var searchContainer = document.getElementById(\'searchContainer\');\n      var searchConHeight = \'95px\';\n      if (searchContainer) {\n        searchConHeight = getComputedStyle(searchContainer).height;\n        var noText = document.getElementById(\'noText\');\n        if (noText) {\n          noText.style.top = parseFloat(searchConHeight) + 48 + \'px\';\n        }\n      }\n    }, 100);\n  },\n  handleLiClick: function handleLiClick(e) {\n    if (e.target.nodeName == \'SPAN\') {\n      ysp.appMain.showLoading();\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleLiClick\'\n      });\n    }\n  },\n  handleSelChange: function handleSelChange(e) {\n    this.props.customHandler({\n      data: {\n        selIndex: e.target.dataset.index,\n        optIndex: e.target.value\n      },\n      eventType: \'handleSelChange\'\n    });\n  },\n  handleIptChange: function handleIptChange(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'handleIptChange\'\n    });\n  },\n  handleBtnClick: function handleBtnClick(e) {\n    this.props.customHandler({\n      eventType: \'handleBtnClick\'\n    });\n  },\n  handleToggle: function handleToggle(e) {\n    var iconToggle = document.querySelector(\'#searchTitle>i\');\n    if (iconToggle) {\n      iconToggle.className = iconToggle.className == \'icon_close\' ? \'icon_open\' : \'icon_close\';\n    }\n\n    var searchSection = document.getElementById(\'searchSection\');\n    if (searchSection && $) {\n      $(searchSection).slideToggle(200);\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      var text = data.text;\n      var plfs = data.plfs;\n      var cxfs = data.cxfs;\n      var lsjl = data.lsjl;\n      if (text) {\n        return React.createElement(\n          \'div\',\n          { className: \'searchContainer\', id: \'searchContainer\' },\n          React.createElement(\n            \'h4\',\n            { onClick: this.handleToggle, id: \'searchTitle\' },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u67E5\\u8BE2\\uFF1A\'\n            ),\n            React.createElement(\'i\', { className: \'icon_close\' })\n          ),\n          React.createElement(\n            \'section\',\n            { id: \'searchSection\' },\n            React.createElement(\n              \'p\',\n              null,\n              text\n            ),\n            React.createElement(\n              \'ul\',\n              { onClick: this.handleLiClick },\n              plfs.map(function (opt, optIdx) {\n                var liWidth = null;\n                switch (plfs.length) {\n                  case 1:\n                    liWidth = \'100%\';\n                    break;\n                  case 2:\n                    liWidth = \'50%\';\n                    break;\n                  default:\n                    liWidth = \'33.333%\';\n                }\n                return React.createElement(\n                  \'li\',\n                  { \'data-index\': optIdx, style: { \'min-width\': liWidth } },\n                  React.createElement(\n                    \'span\',\n                    { \'data-index\': optIdx },\n                    opt\n                  )\n                );\n              })\n            ),\n            React.createElement(\n              \'div\',\n              { style: { \'display\': cxfs.length ? \'flex\' : \'none\' }, className: \'selCon\' },\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u67E5\\u8BE2\\u65B9\\u5F0F:\'\n              ),\n              React.createElement(\n                \'select\',\n                { \'data-index\': 0, onChange: this.handleSelChange },\n                cxfs.map(function (opt, optIdx) {\n                  return React.createElement(\n                    \'option\',\n                    { value: optIdx, selected: opt[1] },\n                    opt[0]\n                  );\n                })\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'selCon\' },\n              React.createElement(AInput, { onBlur: this.handleIptChange, value: data.inputVal }),\n              React.createElement(\n                \'button\',\n                { onClick: this.handleBtnClick },\n                \'\\u67E5\\u8BE2\'\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { style: { \'display\': lsjl.length ? \'flex\' : \'none\' }, className: \'selCon\' },\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u67E5\\u770B\\u5386\\u53F2\\u6570\\u636E\\u5E93:\'\n              ),\n              React.createElement(\n                \'select\',\n                { onChange: this.handleSelChange, \'data-index\': 1 },\n                lsjl.map(function (opt, optIdx) {\n                  return React.createElement(\n                    \'option\',\n                    { value: optIdx, selected: opt[1] },\n                    opt[0]\n                  );\n                })\n              )\n            )\n          )\n        );\n      } else {\n        return React.createElement(\'div\', null);\n      }\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control77_p14M1Q: function (elem) {
      if (elem) {
        //搜索结果的翻页
        var totlePage = $(elem).children('tbody').children('tr').children('td').eq(0).children('font').eq(0).text();var nowPage = $(elem).children('tbody').children('tr').children('td').eq(0).children('font').eq(1).text();var page = [];$(elem).children('tbody').children('tr').children('td').eq(1).children().each(function (nodeIdx, node) {
          if (nodeIdx != 0) {
            page.push({ tagName: node.tagName, text: node.textContent.replace('[', '').replace(']', ''), nodeIdx: nodeIdx });
          }
        });return { totlePage: totlePage, nowPage: nowPage, page: page };
      } else {
        return null;
      }
    },
    doAction_uiControl78_RNtzQG: function (data, elem) {
      if (data.eventType == 'hanndleLiClick') {
        $(elem).children('tbody').children('tr').children('td').eq(1).children()[data.dataCustom].click();try {
          ysp.appMain.showLoading();
        } catch (err) {}
      }
    },
    getTemplate_uiControl78_RNtzQG: function () {
      var selfTemplate = "module.exports = React.createClass({\n  hanndleLiClick:function(e){\n    if(e.target.nodeName=='SPAN' && e.target.className=='A'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:'hanndleLiClick'\n      })\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data && data.page.length){\n      return (\n        <div className='searchPageCon'>\n          <p style={{'display':(!data.totlePage && 'none')}}>\n            \u5171\u6709<span>{data.totlePage}</span>\u6761\u8BB0\u5F55\uFF0C\u5F53\u524D\u7B2C<span>{data.nowPage}</span>\u9875\n          </p>\n          <ul onClick={this.hanndleLiClick}>\n            {\n              data.page.map(function(li,liIdx){\n                if(li.text){\n                  return <li>\n                    <span className={li.tagName} data-index={li.nodeIdx}>{li.text}</span>\n                  </li>\n                }\n                \n              })\n            }\n          </ul>\n        </div>\n      )\n    }else{\n    return <div></div>\n  }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  hanndleLiClick: function hanndleLiClick(e) {\n    if (e.target.nodeName == 'SPAN' && e.target.className == 'A') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: 'hanndleLiClick'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.page.length) {\n      return React.createElement(\n        'div',\n        { className: 'searchPageCon' },\n        React.createElement(\n          'p',\n          { style: { 'display': !data.totlePage && 'none' } },\n          '\\u5171\\u6709',\n          React.createElement(\n            'span',\n            null,\n            data.totlePage\n          ),\n          '\\u6761\\u8BB0\\u5F55\\uFF0C\\u5F53\\u524D\\u7B2C',\n          React.createElement(\n            'span',\n            null,\n            data.nowPage\n          ),\n          '\\u9875'\n        ),\n        React.createElement(\n          'ul',\n          { onClick: this.hanndleLiClick },\n          data.page.map(function (li, liIdx) {\n            if (li.text) {\n              return React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: li.tagName, 'data-index': li.nodeIdx },\n                  li.text\n                )\n              );\n            }\n          })\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control79_2FExGJ: function (elem) {
      if (elem) {
        return "当前暂时没有文件";
      }
    },
    doAction_uiControl80_FL90K5: function (data, elem) {},
    getTemplate_uiControl80_FL90K5: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div style={{\'display\':(data?\'block\':\'none\'),\'border-top\': \'10px solid #e1e1e1\',\'z-index\':\'99\'}} id="noText">\n          {data}\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { style: { \'display\': data ? \'block\' : \'none\', \'border-top\': \'10px solid #e1e1e1\', \'z-index\': \'99\' }, id: \'noText\' },\n        data\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control152_WkAgHn: function (elem) {
      if (elem) {
        // 查询列表返回按钮
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl158_encs3f: function (data, elem) {
      if (data.eventType == 'handleBack') {
        var btn = elem.querySelector('input[value="返回"]');btn.click();ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl158_encs3f: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleBack: function () {\n    this.props.customHandler({\n      eventType: \'handleBack\'\n    })\n  },\n  render: function() {\n    var data = this.props.customData;\n    if (data) {\n      return (\n        <div>\n         <span className=\'back listBtnBack fixedTopBackBtn\' onClick={this.handleBack} style={{\'z-index\': \'999\',\'background-color\': \'#009594\', \'position\': \'fixed\'}}>\u8FD4\u56DE</span>\n        </div>\n      )\n    } else {\n      return null;\n    }\n   }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleBack: function handleBack() {\n    this.props.customHandler({\n      eventType: \'handleBack\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'span\',\n          { className: \'back listBtnBack fixedTopBackBtn\', onClick: this.handleBack, style: { \'z-index\': \'999\', \'background-color\': \'#009594\', \'position\': \'fixed\' } },\n          \'\\u8FD4\\u56DE\'\n        )\n      );\n    } else {\n      return null;\n    }\n  }\n});';
    }
  }, 'list1');
})(window, ysp);