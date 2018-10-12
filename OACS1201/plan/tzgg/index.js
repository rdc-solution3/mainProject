(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control91_sPDvUx: function (elem) {
      if (elem) {
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl94_fkxaLA: function (data, elem) {
      if (data.eventType == 'handleBack') {
        if (ysp.appMain.getActiveWindow().document.readyState == 'complete') {
          // elem.ownerDocument.defaultView.close();
          ysp.appMain.back();
        }
      }
    },
    getTemplate_uiControl94_fkxaLA: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  getInitialState:function(){\n    return {\n      isBack:true\n    }\n  },\n  componentDidMount:function(){\n    var _this=this;\n    setTimeout(function(){\n      _this.setState({\n        isBack:true\n      })\n    },3000)\n  },\n  handleBack:function(){\n    this.props.customHandler({\n      eventType:\'handleBack\'\n    })\n  },\n  render: function() {\n    if(this.state.isBack===true){\n      return <div className=\'back detailBtnBack tzggBackBtn\' onClick={this.handleBack}>\u8FD4\u56DE</div>\n    }else{\n      return null;\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  getInitialState: function getInitialState() {\n    return {\n      isBack: true\n    };\n  },\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n    setTimeout(function () {\n      _this.setState({\n        isBack: true\n      });\n    }, 3000);\n  },\n  handleBack: function handleBack() {\n    this.props.customHandler({\n      eventType: \'handleBack\'\n    });\n  },\n  render: function render() {\n    if (this.state.isBack === true) {\n      return React.createElement(\n        \'div\',\n        { className: \'back detailBtnBack tzggBackBtn\', onClick: this.handleBack },\n        \'\\u8FD4\\u56DE\'\n      );\n    } else {\n      return null;\n    }\n  }\n});';
    },
    getData_control92_CgbxhB: function (elem) {
      if (!elem) return;var $tr = $(elem).find('tbody tr:visible'),
          data = [],
          href = [];$tr.each(function (i, item) {
        var obj = {};obj.id = item.id;obj.title = $(this).find('td:even').text().trim();obj.txt = $(this).find('td:odd').text().trim();obj.display = item.style.display;var aHref = item.querySelectorAll('a');if (obj.title.indexOf("相关附件") > -1 && aHref) {
          for (var j = 0, len = aHref.length; j < len; j += 2) {
            href.push({ txt: aHref[j].textContent.trim(), link: aHref[j + 1].href });
          }href.length && (obj.href = href);
        }data.push(obj); // if (obj.title == '标　　题' || obj.title == '相关附件') {
      });return data;
    },
    doAction_uiControl95_Hq1HTV: function (data, elem) {
      var type = data.eventType;if (type == 'show') {
        var _data = data.customData;var $elem = $(elem.ownerDocument);if (_data == 'close') {
          $elem.find('#hide').click();
        } else if (_data == 'open') {
          $elem.find('#show').click();
        }
      } else if (type == 'click') {
        var tmpurl = data.customData;ysp.customHelper.documentPreview($, tmpurl, true);
      }
    },
    getTemplate_uiControl95_Hq1HTV: function () {
      var selfTemplate = "module.exports = React.createClass({\n  show:function(e){\n    var target = e.target;\n    var oLi = target.parentElement.children[2].children;\n    if(target.className!='close'){\n       target.className='close';\n    }else{\n       target.className='open';\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'show',\n        customData:e.target.className\n      })\n    }\n  },\n  click:function(e){\n    var target = e.target;\n    var href = target.getAttribute('data-href');\n    var tzm = href.split('.')[href.split('.').length-1];\n    var arr = ['jpg','jpeg','png','doc','docx','xlsx','xls','pdf'];\n    if(arr.indexOf(tzm) !=-1){\n      var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          eventType:'click',\n          customData:href\n        })\n      }\n    }else{\n      alert(\"\u4E0D\u652F\u6301\u9884\u89C8\" + tzm + \"\u683C\u5F0F\u7684\u6587\u4EF6\uFF01\")\n    }\n    \n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    var bsty = { \n      display:'inline-block',\n      width:'60px',\n      height:'45px',\n      position:'absolute',\n      right: 0}\n    if(data){\n      var tab = data.map(function(item,i){\n        console.log(item)\n        if(item.href && item.href.length){\n          return(\n             <li data-id={item.id} style={{'display':item.display!='none'?'block':'none'}}>\n              \t<b>{item.title}:</b>\n              \t<div style={{width:'100%'}}>\n               {\n                item.href.map(function(aItem,j){    \n                    return (\n                          <a onClick={_this.click} data-href={aItem.link} style={{display:\"block\",'padding':'5px 0px'}}>{aItem.txt}</a>\n                        )\n                })\n              }\n            \t</div> \n            </li>\n         )\n        }\n         return(\n             <li data-id={item.id} style={{'display':item.display!='none'?'':'none','align-items':\"flex-start\"}}>\n                <b>{item.title}:</b>\n                <span>{item.txt}</span>\n              </li>\n         )\n          \n      \n      })\n    }\n    return (\n      <div className='containerCard tzgg'>\n        <b className='close' onClick={_this.show}></b>\n        <h4>\u57FA\u672C\u4FE1\u606F<i></i></h4>\n        <ul>{tab}</ul>\n      </div>\n    )\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  show: function show(e) {\n    var target = e.target;\n    var oLi = target.parentElement.children[2].children;\n    if (target.className != \'close\') {\n      target.className = \'close\';\n    } else {\n      target.className = \'open\';\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'show\',\n        customData: e.target.className\n      });\n    }\n  },\n  click: function click(e) {\n    var target = e.target;\n    var href = target.getAttribute(\'data-href\');\n    var tzm = href.split(\'.\')[href.split(\'.\').length - 1];\n    var arr = [\'jpg\', \'jpeg\', \'png\', \'doc\', \'docx\', \'xlsx\', \'xls\', \'pdf\'];\n    if (arr.indexOf(tzm) != -1) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\',\n          customData: href\n        });\n      }\n    } else {\n      alert("\u4E0D\u652F\u6301\u9884\u89C8" + tzm + "\u683C\u5F0F\u7684\u6587\u4EF6\uFF01");\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var bsty = {\n      display: \'inline-block\',\n      width: \'60px\',\n      height: \'45px\',\n      position: \'absolute\',\n      right: 0 };\n    if (data) {\n      var tab = data.map(function (item, i) {\n        console.log(item);\n        if (item.href && item.href.length) {\n          return React.createElement(\n            \'li\',\n            { \'data-id\': item.id, style: { \'display\': item.display != \'none\' ? \'block\' : \'none\' } },\n            React.createElement(\n              \'b\',\n              null,\n              item.title,\n              \':\'\n            ),\n            React.createElement(\n              \'div\',\n              { style: { width: \'100%\' } },\n              item.href.map(function (aItem, j) {\n                return React.createElement(\n                  \'a\',\n                  { onClick: _this.click, \'data-href\': aItem.link, style: { display: "block", \'padding\': \'5px 0px\' } },\n                  aItem.txt\n                );\n              })\n            )\n          );\n        }\n        return React.createElement(\n          \'li\',\n          { \'data-id\': item.id, style: { \'display\': item.display != \'none\' ? \'\' : \'none\', \'align-items\': "flex-start" } },\n          React.createElement(\n            \'b\',\n            null,\n            item.title,\n            \':\'\n          ),\n          React.createElement(\n            \'span\',\n            null,\n            item.txt\n          )\n        );\n      });\n    }\n    return React.createElement(\n      \'div\',\n      { className: \'containerCard tzgg\' },\n      React.createElement(\'b\', { className: \'close\', onClick: _this.show }),\n      React.createElement(\n        \'h4\',\n        null,\n        \'\\u57FA\\u672C\\u4FE1\\u606F\',\n        React.createElement(\'i\', null)\n      ),\n      React.createElement(\n        \'ul\',\n        null,\n        tab\n      )\n    );\n  }\n});';
    },

    getData_control94_f7G3qs: function (elem) {
      if (!elem) {
        return;
      } //富文本编辑器
      $(elem).find('img').each(function (imgIdx, img) {
        img.style = '';img.src = img.src;img.style.textIndent = 0;if (img.parentElement && img.parentElement.parentElement) {
          img.parentElement.parentElement.style.textIndent = 0;
        }if (/^file:\/\/\/C:\/Users\/.*/.test(img.src)) {
          $(img).remove();
        }
      });$(elem).find('table').each(function (tableIdx, table) {
        if (table.parentElement.nodeName != 'DIV') {
          table.outerHTML = "<div class='tableCon'>" + table.outerHTML + "</div>"; //table.parentElement.className = 'tableCon';
        }
      });$(elem).find('p').each(function (pIdx, p) {
        if (p.textContent.trim() == '' && p.children.length == 0) {
          $(p).remove();
        }if ($(p).find('img').length != 0) {
          p.style.textIndent = 0;
        }var pTextIndent = parseFloat(getComputedStyle(p).textIndent);if (pTextIndent > 350) {
          p.style.textIndent = 350 + 'px';
        }
      });var _html = elem.innerHTML;return _html;
    },
    doAction_uiControl97_TnBbNi: function (data, elem) {
      if (data.eventType == 'handleImgClick') {
        var tmpurl = data.dataCustom;ysp.customHelper.documentPreview($, tmpurl, false);
      }
    },
    getTemplate_uiControl97_TnBbNi: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount:function(){\n    var _this=this;\n    \n//     setTimeout(function(){\n//       $(\'#xxfb\').find(\'img\').each(function(imgIdx,img){\n//         img.addEventListener(\'click\',function(e){\n//   _this.props.customHandler({data:e.target.src,eventType:\'handleImgClick\'})\n//         })\n        \n//       });\n//     },1000);\n    var t2=setInterval(function(){\n      //\u624B\u673A\u4E0Atable\u5728class\u4E3Atable\u7684p\u6807\u7B7E\u7684\u5916\u9762\n      var tables=document.querySelectorAll(\'#xxfb table\');\n      for(var i=0;i<tables.length;i++){\n        var tablePrevSibling=tables[i].previousElementSibling;\n        if(tablePrevSibling && tablePrevSibling.className==\'tableCon\'){\n             tablePrevSibling.innerHTML=tables[i].outerHTML;\n\t\t\t\t\t\ttables[i].parentElement.removeChild(tables[i]);\n          }else{\n            return;\n          }\n      }\n      \n    },1000);\n  },\n  handleImgClick:function(e){\n    if(e.target.nodeName==\'IMG\'){\n      this.props.customHandler({\n        data:e.target.src,\n        eventType:\'handleImgClick\'\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    return (\n      <div>\n        <div id="xxfb" onBlur={this.handleBlur} dangerouslySetInnerHTML = {{__html: data}} onClick={this.handleImgClick} className=\'tzggCon\'></div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n\n    //     setTimeout(function(){\n    //       $(\'#xxfb\').find(\'img\').each(function(imgIdx,img){\n    //         img.addEventListener(\'click\',function(e){\n    //   _this.props.customHandler({data:e.target.src,eventType:\'handleImgClick\'})\n    //         })\n\n    //       });\n    //     },1000);\n    var t2 = setInterval(function () {\n      //\u624B\u673A\u4E0Atable\u5728class\u4E3Atable\u7684p\u6807\u7B7E\u7684\u5916\u9762\n      var tables = document.querySelectorAll(\'#xxfb table\');\n      for (var i = 0; i < tables.length; i++) {\n        var tablePrevSibling = tables[i].previousElementSibling;\n        if (tablePrevSibling && tablePrevSibling.className == \'tableCon\') {\n          tablePrevSibling.innerHTML = tables[i].outerHTML;\n          tables[i].parentElement.removeChild(tables[i]);\n        } else {\n          return;\n        }\n      }\n    }, 1000);\n  },\n  handleImgClick: function handleImgClick(e) {\n    if (e.target.nodeName == \'IMG\') {\n      this.props.customHandler({\n        data: e.target.src,\n        eventType: \'handleImgClick\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\'div\', { id: \'xxfb\', onBlur: this.handleBlur, dangerouslySetInnerHTML: { __html: data }, onClick: this.handleImgClick, className: \'tzggCon\' })\n    );\n  }\n});';
    },
    getData_control90_FhCk31: function (elem) {
      if (elem) {
        var data = elem.ownerDocument.title;return data;
      } else {
        return null;
      }
    },
    doAction_uiControl93_l52nlt: function (data, elem) {},
    getTemplate_uiControl93_l52nlt: function () {
      var selfTemplate = 'var pageTitle=React.createClass({\n  componentDidMount:function(){\n  },\n  render:function(){\n    var data=this.props.customData;\n    return <div>\n    \t<h3 className="pageTitle tzggPageTitle" style={{\'font-size\':(data.length>=14 && \'16px\'),\'padding-left\':(data.length>=14 && \'30px\')}}>\n        {data}\n      </h3>\n    </div>\n  }\n})\nmodule.exports=pageTitle;';
      return '\'use strict\';\n\nvar pageTitle = React.createClass({\n  displayName: \'pageTitle\',\n\n  componentDidMount: function componentDidMount() {},\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'h3\',\n        { className: \'pageTitle tzggPageTitle\', style: { \'font-size\': data.length >= 14 && \'16px\', \'padding-left\': data.length >= 14 && \'30px\' } },\n        data\n      )\n    );\n  }\n});\nmodule.exports = pageTitle;';
    }
  }, "tzgg");
})(window, ysp);