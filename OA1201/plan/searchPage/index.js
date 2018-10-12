(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control148_Xzmoh9: function (elem) {
      if (elem) {
        return true;
      } else {
        null;
      }
    },
    doAction_uiControl154_lSqGgT: function (data, elem) {
      if (data.eventType == 'handleBack') {
        var backBtn = elem.contentDocument.querySelector('body>div>input[value="返回"]');var _win = elem.contentWindow;if (_win.GoUrl) {
          _win.GoUrl = function (Aobj, url) {
            try {
              ysp.appMain.getActiveWindow().location.href = url;
            } catch (err) {}
          };
        }setTimeout(function () {
          backBtn && backBtn.click();
        }, 100);
      }
    },
    getTemplate_uiControl154_lSqGgT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleBack:function(){\n    this.props.customHandler({\n      eventType: 'handleBack'\n    })\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(data){\n      return (\n        <div className='classTwo' id='classTwo'>\n              <span className='back listBtnBack fixedTopBackBtn' onClick={this.handleBack}>\u8FD4\u56DE</span>\n              <h2 className='pageTitle fixedTop' id='classTwoTitle'>\n              </h2>\n        </div>\n      )\n    }else{\n      return null;\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleBack: function handleBack() {\n    this.props.customHandler({\n      eventType: 'handleBack'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        'div',\n        { className: 'classTwo', id: 'classTwo' },\n        React.createElement(\n          'span',\n          { className: 'back listBtnBack fixedTopBackBtn', onClick: this.handleBack },\n          '\\u8FD4\\u56DE'\n        ),\n        React.createElement('h2', { className: 'pageTitle fixedTop', id: 'classTwoTitle' })\n      );\n    } else {\n      return null;\n    }\n  }\n});";
    },
    getData_control149_37C7kn: function (elem) {
      if (elem) {
        var table = elem.querySelector('#viewloader>table');if (table) {
          var ths = [];$(table).children('tbody').children('tr').eq(0).children('th:not(:last-child)').each(function (thIdx, th) {
            ths.push(th.textContent);
          });var lastThImg = $(table).children('tbody').children('tr').eq(0).children('th:last-child').find('img')[0];if (!lastThImg) {
            ths.push($(table).children('tbody').children('tr').eq(0).children('th:last-child').text());
          }var trs = [];var sanjiao = []; //当前行是否含有折叠三角
          var number = null; //折叠的层级
          $(table).children('tbody').children('tr').each(function (trIdx, tr) {
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
          }return { ths: ths, trs: trs, number: number };
        }
      } else {
        return null;
      }
    }, doAction_uiControl155_4rfWWH: function (data, elem) {
      if (data.eventType == 'handleListItemClick') {
        var table = elem.querySelector('#viewloader>table');var a = $(table).children('tbody').children('tr').eq(data.dataCustom).find('td a[onClick]')[0];if (a) {
          if (a.textContent == '[' && a.nextElementSibling) {
            a.nextElementSibling.click();
          } else {
            a.click();
          }
        } else if ($(table).children('tbody').children('tr').eq(data.dataCustom).find('td a:visible')[1]) {
          $(table).children('tbody').children('tr').eq(data.dataCustom).find('td a:visible')[1].click();
        } else {
          $(table).children('tbody').children('tr').eq(data.dataCustom).find('td a:visible')[0].click();
        }try {
          ysp.appMain.showLoading();
        } catch (err) {}
      }
    },
    getTemplate_uiControl155_4rfWWH: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleToggle:function(e){\n    var target=e.target;\n    var hideData=target.previousElementSibling;\n    target.className=(target.className==\'icon_close\'?\'icon_open\':\'icon_close\');\n    $(hideData).slideToggle();\n  },\n  handleListItemClick:function(e){\n    if(e.target.nodeName!=\'I\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleListItemClick\'\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'listContainer\' onClick={this.handleListItemClick} id=\'listContainer\'>\n          {\n            data.trs.map(function(tr,trIdx){\n              var showData=[];\n              var hideData=[];\n              if(tr._title && tr._title.trim()){\n                return <div style={{\'background\':\'#e1e1e1\'}}>\n                  <article className=\'listItem\' data-index={tr.trIdx}>\n                  <h4 data-index={tr.trIdx}>{tr._title}</h4>\n                  <section data-index={tr.trIdx}>\n                    {\n                      tr.otherData.map(function(td,tdIdx){\n                        //number\u4E3A\u6298\u53E0\u7684\u5C42\u7EA7\u6570\uFF0C\u8981\u628A\u524Dnumber\u4E2A\u6570\u636E\u53BB\u6389\n                        // if(tdIdx>=data.number&&tdIdx<data.number+2){\n                        //   if(td[1]>=data.number){\n                        //     data.ths[td[1]] && showData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>);\n                        //   }\n                        // }else if(tdIdx>=data.number+2 && data.ths[td[1]]){\n                        //   hideData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>);\n                        // }\n                        if(td[0] && td[0].trim() != \'\'){\n                          if(showData.length<=1){\n                            data.ths[td[1]] && showData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>);\n                          }else{\n                            hideData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>);\n                          }\n                        }\n                      })\n                    }\n                    <div data-index={tr.trIdx}>{showData}</div>\n                    <div className=\'hide\' data-index={tr.trIdx}>{hideData}</div>\n                    <i onClick={_this.handleToggle} className=\'icon_close\' style={{\'display\':(hideData.length==0 ? \'none\' : \'block\')}}></i>\n                  </section>\n\n                </article>\n              </div>\n              }\n              \n            })\n          }\n        </div>\n      )\n    }else{\n      return <div>\u6CA1\u6709\u6570\u636E</div>\n    }\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleToggle: function handleToggle(e) {\n    var target = e.target;\n    var hideData = target.previousElementSibling;\n    target.className = target.className == 'icon_close' ? 'icon_open' : 'icon_close';\n    $(hideData).slideToggle();\n  },\n  handleListItemClick: function handleListItemClick(e) {\n    if (e.target.nodeName != 'I') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: 'handleListItemClick'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        'div',\n        { className: 'listContainer', onClick: this.handleListItemClick, id: 'listContainer' },\n        data.trs.map(function (tr, trIdx) {\n          var showData = [];\n          var hideData = [];\n          if (tr._title && tr._title.trim()) {\n            return React.createElement(\n              'div',\n              { style: { 'background': '#e1e1e1' } },\n              React.createElement(\n                'article',\n                { className: 'listItem', 'data-index': tr.trIdx },\n                React.createElement(\n                  'h4',\n                  { 'data-index': tr.trIdx },\n                  tr._title\n                ),\n                React.createElement(\n                  'section',\n                  { 'data-index': tr.trIdx },\n                  tr.otherData.map(function (td, tdIdx) {\n                    //number\u4E3A\u6298\u53E0\u7684\u5C42\u7EA7\u6570\uFF0C\u8981\u628A\u524Dnumber\u4E2A\u6570\u636E\u53BB\u6389\n                    // if(tdIdx>=data.number&&tdIdx<data.number+2){\n                    //   if(td[1]>=data.number){\n                    //     data.ths[td[1]] && showData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>);\n                    //   }\n                    // }else if(tdIdx>=data.number+2 && data.ths[td[1]]){\n                    //   hideData.push(<label data-index={tr.trIdx}><b data-index={tr.trIdx}>{data.ths[td[1]]}\uFF1A</b><span data-index={tr.trIdx}>{td[0]}</span></label>);\n                    // }\n                    if (td[0] && td[0].trim() != '') {\n                      if (showData.length <= 1) {\n                        data.ths[td[1]] && showData.push(React.createElement(\n                          'label',\n                          { 'data-index': tr.trIdx },\n                          React.createElement(\n                            'b',\n                            { 'data-index': tr.trIdx },\n                            data.ths[td[1]],\n                            '\\uFF1A'\n                          ),\n                          React.createElement(\n                            'span',\n                            { 'data-index': tr.trIdx },\n                            td[0]\n                          )\n                        ));\n                      } else {\n                        hideData.push(React.createElement(\n                          'label',\n                          { 'data-index': tr.trIdx },\n                          React.createElement(\n                            'b',\n                            { 'data-index': tr.trIdx },\n                            data.ths[td[1]],\n                            '\\uFF1A'\n                          ),\n                          React.createElement(\n                            'span',\n                            { 'data-index': tr.trIdx },\n                            td[0]\n                          )\n                        ));\n                      }\n                    }\n                  }),\n                  React.createElement(\n                    'div',\n                    { 'data-index': tr.trIdx },\n                    showData\n                  ),\n                  React.createElement(\n                    'div',\n                    { className: 'hide', 'data-index': tr.trIdx },\n                    hideData\n                  ),\n                  React.createElement('i', { onClick: _this.handleToggle, className: 'icon_close', style: { 'display': hideData.length == 0 ? 'none' : 'block' } })\n                )\n              )\n            );\n          }\n        })\n      );\n    } else {\n      return React.createElement(\n        'div',\n        null,\n        '\\u6CA1\\u6709\\u6570\\u636E'\n      );\n    }\n  }\n});";
    },
    getData_control151_oQGUmm: function (elem) {
      if (elem) {
        var table = elem.querySelector('#viewloader>div>div>table');if (table) {
          //搜索结果的翻页
          var totlePage = $(table).children('tbody').children('tr').children('td').eq(0).children('font').eq(0).text();var nowPage = $(table).children('tbody').children('tr').children('td').eq(0).children('font').eq(1).text();var page = [];$(table).children('tbody').children('tr').children('td').eq(1).children().each(function (nodeIdx, node) {
            if (nodeIdx != 0) {
              page.push({ tagName: node.tagName, text: node.textContent.replace('[', '').replace(']', ''), nodeIdx: nodeIdx });
            }
          });return { totlePage: totlePage, nowPage: nowPage, page: page };
        }
      } else {
        return null;
      }
    },
    doAction_uiControl157_3dIakZ: function (data, elem) {
      if (data.eventType == 'hanndleLiClick') {
        var table = elem.querySelector('#viewloader>div>div>table');$(table).children('tbody').children('tr').children('td').eq(1).children()[data.dataCustom].click();try {
          ysp.appMain.showLoading();
        } catch (err) {}
      }
    },
    getTemplate_uiControl157_3dIakZ: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  hanndleLiClick:function(e){\n    if(e.target.nodeName==\'SPAN\' && e.target.className==\'A\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'hanndleLiClick\'\n      })\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data && data.page.length){\n      return (\n        <div className=\'searchPageCon\'>\n          <p style={{\'display\':(!data.totlePage && \'none\')}}>\n            \u5171\u6709<span>{data.totlePage}</span>\u6761\u8BB0\u5F55\uFF0C\u5F53\u524D\u7B2C<span>{data.nowPage}</span>\u9875\n          </p>\n          <ul onClick={this.hanndleLiClick}>\n            {\n              data.page.map(function(li,liIdx){\n                if(li.text){\n                  return <li>\n                    <span className={li.tagName} data-index={li.nodeIdx}>{li.text}</span>\n                  </li>\n                }\n                \n              })\n            }\n          </ul>\n        </div>\n      )\n    }else{\n    return <div></div>\n  }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  hanndleLiClick: function hanndleLiClick(e) {\n    if (e.target.nodeName == \'SPAN\' && e.target.className == \'A\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'hanndleLiClick\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.page.length) {\n      return React.createElement(\n        \'div\',\n        { className: \'searchPageCon\' },\n        React.createElement(\n          \'p\',\n          { style: { \'display\': !data.totlePage && \'none\' } },\n          \'\\u5171\\u6709\',\n          React.createElement(\n            \'span\',\n            null,\n            data.totlePage\n          ),\n          \'\\u6761\\u8BB0\\u5F55\\uFF0C\\u5F53\\u524D\\u7B2C\',\n          React.createElement(\n            \'span\',\n            null,\n            data.nowPage\n          ),\n          \'\\u9875\'\n        ),\n        React.createElement(\n          \'ul\',\n          { onClick: this.hanndleLiClick },\n          data.page.map(function (li, liIdx) {\n            if (li.text) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  { className: li.tagName, \'data-index\': li.nodeIdx },\n                  li.text\n                )\n              );\n            }\n          })\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control153_udEx0o: function (elem) {
      if (elem) {
        var table = elem.querySelector('#viewloader>div>div>table');if (table && table.textContent == '没有找到符合条件的纪录') {
          return '没有找到符合条件的纪录';
        }
      }
    },
    doAction_uiControl159_qG1ktK: function (data, elem) {},
    getTemplate_uiControl159_qG1ktK: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data){\n      return (\n        <div className=\'noSearchResult\'>\n          \u6CA1\u6709\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u7EAA\u5F55\n        </div>\n      )\n    }else{\n      return null;\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'noSearchResult\' },\n        \'\\u6CA1\\u6709\\u627E\\u5230\\u7B26\\u5408\\u6761\\u4EF6\\u7684\\u7EAA\\u5F55\'\n      );\n    } else {\n      return null;\n    }\n  }\n});';
    }
  }, "searchPage");
})(window, ysp);