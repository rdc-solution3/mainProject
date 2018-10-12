(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control76_ryLOCI: function (elem) {
      if (elem) {
        var text = $(elem).children('legend').text();if (text.indexOf('单位') != -1) {
          return "选择单位";
        } else if (text.indexOf('人员') != -1) {
          return "选择人员";
        } else {
          return '';
        }
      }
    },
    doAction_uiControl77_KWvTHs: function (data, elem) {},
    getTemplate_uiControl77_KWvTHs: function () {
      var selfTemplate = 'var React=require("react");\nvar {PageTitle}=require("ysp-custom-components");\nmodule.exports = React.createClass({\n  render: function() {\n    var title=this.props.customData;\n    return (\n      <PageTitle customData={title} style={{\'display\':title ?\'block\':\'none\'}}/>\n    )\n  }\n});';
      return '"use strict";\n\nvar React = require("react");\n\nvar _require = require("ysp-custom-components"),\n    PageTitle = _require.PageTitle;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var title = this.props.customData;\n    return React.createElement(PageTitle, { customData: title, style: { \'display\': title ? \'block\' : \'none\' } });\n  }\n});';
    },
    getData_control102_PL4FZi: function (elem) {
      if (elem) {
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl105_Wv0KT0: function (data, elem) {
      if (data.eventType == 'handleBack') {
        elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl105_Wv0KT0: function () {
      var selfTemplate = 'var React=require("react");\nvar {BackButton}=require("ysp-custom-components");\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <BackButton customHandler={this.props.customHandler}/>\n    )\n  }\n});';
      return '"use strict";\n\nvar React = require("react");\n\nvar _require = require("ysp-custom-components"),\n    BackButton = _require.BackButton;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(BackButton, { customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control103_kuDoTK: function (elem) {},
    doAction_uiControl106_hbGaGd: function (data, elem) {
      if (data.eventType == 'btnClick') {
        $(elem).children().children().find('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl106_hbGaGd: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:\'btnClick\'\n    })\n  },\n  render: function() {\n    return (\n      <div onClick={this.btnClick} className=\'xzbmBtnCon\'>\n        <button data-index={0}>\u786E\u5B9A</button>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: \'btnClick\'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      { onClick: this.btnClick, className: \'xzbmBtnCon\' },\n      React.createElement(\n        \'button\',\n        { \'data-index\': 0 },\n        \'\\u786E\\u5B9A\'\n      )\n    );\n  }\n});';
    },
    getData_control104_nkuOih: function (elem) {
      if (elem) {
        var title = $(elem).children('legend').children('strong').text().split('：')[0];var options = [];$(elem).children('table').find('select>option').each(function (optIdx, opt) {
          options.push({ text: opt.textContent, selected: opt.selected });
        });return { title: title, options: options };
      } else {
        return null;
      }
    },
    doAction_uiControl107_d4dyw0: function (data, elem) {
      if (data.eventType == 'delBtnClick') {
        $(elem).children('table').find('select>option')[+data.dataCustom].selected = true;$(elem).children('table').children().find('p>input')[0].click();
      }
    },
    getTemplate_uiControl107_d4dyw0: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  delBtnClick:function(e){\n    var target=e.target;\n    if(target.nodeName==\'I\'){\n      this.props.customHandler({\n        data:target.dataset.index,\n        eventType:\'delBtnClick\'\n      })\n    }\n  },\n  addBtnClick:function(){\n    $(\'#dwmcContainer\').css(\'display\',\'block\');\n    $(\'#zsdw\').css(\'display\',\'block\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\',\'\');\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n      <div className=\'dwContainer zsdwCon\' style={{\'bottom\':\'0\'}} id=\'zsdwCon\'>\n        <h4 style={{\'display\':\'flex\',\'justify-content\': \'space-between\'}}>\n          <i></i>\n          <span>{data.title}</span>\n          <div>\n          \t<button onClick={this.addBtnClick}></button>\n          </div>\n        </h4>\n        <section>\n        \t<ul onClick={_this.delBtnClick}>\n          \t{\n              data.options.map(function(opt,optIdx){\n                return <li>\n                \t<span>{opt.text}</span>\n                  <i data-index={optIdx}></i>\n                </li>\n              })\n            }\n          </ul>\n        </section>\n      </div>\n    )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  delBtnClick: function delBtnClick(e) {\n    var target = e.target;\n    if (target.nodeName == \'I\') {\n      this.props.customHandler({\n        data: target.dataset.index,\n        eventType: \'delBtnClick\'\n      });\n    }\n  },\n  addBtnClick: function addBtnClick() {\n    $(\'#dwmcContainer\').css(\'display\', \'block\');\n    $(\'#zsdw\').css(\'display\', \'block\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\', \'\');\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'dwContainer zsdwCon\', style: { \'bottom\': \'0\' }, id: \'zsdwCon\' },\n        React.createElement(\n          \'h4\',\n          { style: { \'display\': \'flex\', \'justify-content\': \'space-between\' } },\n          React.createElement(\'i\', null),\n          React.createElement(\n            \'span\',\n            null,\n            data.title\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\'button\', { onClick: this.addBtnClick })\n          )\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: _this.delBtnClick },\n            data.options.map(function (opt, optIdx) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  opt.text\n                ),\n                React.createElement(\'i\', { \'data-index\': optIdx })\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control105_UfHlwU: function (elem) {
      if (elem) {
        var title = $(elem).children('legend').children('strong').text().split('：')[0];var options = [];$(elem).children('table').find('select>option').each(function (optIdx, opt) {
          options.push({ text: opt.textContent, selected: opt.selected });
        });return { title: title, options: options };
      } else {
        return null;
      }
    },
    doAction_uiControl108_GoDARW: function (data, elem) {
      if (data.eventType == 'delBtnClick') {
        $(elem).children('table').find('select>option')[+data.dataCustom].selected = true;$(elem).children('table').children().find('p>input')[0].click();
      }
    },
    getTemplate_uiControl108_GoDARW: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount:function(){\n    $(\'#zsdwCon\').css(\'bottom\',\'260px\');\n  },\n  delBtnClick:function(e){\n    var target=e.target;\n    if(target.nodeName==\'I\'){\n      this.props.customHandler({\n        data:target.dataset.index,\n        eventType:\'delBtnClick\'\n      })\n    }\n  },\n  addBtnClick:function(){\n    $(\'#dwmcContainer\').css(\'display\',\'block\');\n    $(\'#csdw\').css(\'display\',\'block\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\',\'\');\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n      <div className=\'dwContainer csdwCon\'>\n        <h4 style={{\'display\':\'flex\',\'justify-content\': \'space-between\'}}>\n          <i></i>\n          <span>{data.title}</span>\n          <div>\n          \t<button onClick={this.addBtnClick}></button>\n          </div>\n        </h4>\n        <section>\n        \t<ul onClick={_this.delBtnClick}>\n          \t{\n              data.options.map(function(opt,optIdx){\n                return <li>\n                \t<span>{opt.text}</span>\n                  <i data-index={optIdx}></i>\n                </li>\n              })\n            }\n          </ul>\n        </section>\n      </div>\n    )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    $(\'#zsdwCon\').css(\'bottom\', \'260px\');\n  },\n  delBtnClick: function delBtnClick(e) {\n    var target = e.target;\n    if (target.nodeName == \'I\') {\n      this.props.customHandler({\n        data: target.dataset.index,\n        eventType: \'delBtnClick\'\n      });\n    }\n  },\n  addBtnClick: function addBtnClick() {\n    $(\'#dwmcContainer\').css(\'display\', \'block\');\n    $(\'#csdw\').css(\'display\', \'block\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\', \'\');\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'dwContainer csdwCon\' },\n        React.createElement(\n          \'h4\',\n          { style: { \'display\': \'flex\', \'justify-content\': \'space-between\' } },\n          React.createElement(\'i\', null),\n          React.createElement(\n            \'span\',\n            null,\n            data.title\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\'button\', { onClick: this.addBtnClick })\n          )\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: _this.delBtnClick },\n            data.options.map(function (opt, optIdx) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  opt.text\n                ),\n                React.createElement(\'i\', { \'data-index\': optIdx })\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control107_6zB3Qm: function (elem) {
      if (elem) {
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl110_eKppLV: function (data, elem) {
      if (data.eventType == 'btnClick') {
        elem.click();
      }
    },
    getTemplate_uiControl110_eKppLV: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(){\n    this.props.customHandler({\n      eventType:\'btnClick\'\n    });\t\t$(\'#dwmcContainer\').find(\'input[type="checkbox"]:visible\').each(function(chbIdx,chb){\n      chb.checked=false;\n    });\n    $(\'#dwmcContainer\').css(\'display\',\'none\');\n    $(\'#zsdw\').css(\'display\',\'none\');\n    \n  },\n  render: function() {\n    return (\n      <button id=\'zsdw\' onClick={this.btnClick}>\u786E\u5B9A</button>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick() {\n    this.props.customHandler({\n      eventType: \'btnClick\'\n    });$(\'#dwmcContainer\').find(\'input[type="checkbox"]:visible\').each(function (chbIdx, chb) {\n      chb.checked = false;\n    });\n    $(\'#dwmcContainer\').css(\'display\', \'none\');\n    $(\'#zsdw\').css(\'display\', \'none\');\n  },\n  render: function render() {\n    return React.createElement(\n      \'button\',\n      { id: \'zsdw\', onClick: this.btnClick },\n      \'\\u786E\\u5B9A\'\n    );\n  }\n});';
    },
    getData_control108_Jb3RdK: function (elem) {
      if (elem) {
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl111_sV4opZ: function (data, elem) {
      if (data.eventType == 'btnClick') {
        elem.click();
      }
    },
    getTemplate_uiControl111_sV4opZ: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(){\n    this.props.customHandler({\n      eventType:\'btnClick\'\n    });\n    $(\'#dwmcContainer\').find(\'input[type="checkbox"]:visible\').each(function(chbIdx,chb){\n      chb.checked=false;\n    });\n    $(\'#dwmcContainer\').css(\'display\',\'none\');\n    $(\'#csdw\').css(\'display\',\'none\');\n    \n  },\n  render: function() {\n    return (\n      <button id=\'csdw\' onClick={this.btnClick}>\u786E\u5B9A</button>\n    )\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick() {\n    this.props.customHandler({\n      eventType: \'btnClick\'\n    });\n    $(\'#dwmcContainer\').find(\'input[type="checkbox"]:visible\').each(function (chbIdx, chb) {\n      chb.checked = false;\n    });\n    $(\'#dwmcContainer\').css(\'display\', \'none\');\n    $(\'#csdw\').css(\'display\', \'none\');\n  },\n  render: function render() {\n    return React.createElement(\n      \'button\',\n      { id: \'csdw\', onClick: this.btnClick },\n      \'\\u786E\\u5B9A\'\n    );\n  }\n});';
    },
    getData_control106_8Ta2hI: function (elem) {
      if (elem) {
        var table = $(elem).children('p').children('table')[0] || $(elem).children('table')[0];$(table).find('img').each(function (imgIdx, img) {
          //     img.src = img.src;
          //     if (img.src == 'http://oa.jx-bank.com/icons/ecblank.gif') {
          //       $(img).remove();
          //     }
          img.remove();
        });$(table).find('td').each(function (tdIdx, td) {
          var a = $(td).find('a')[0];var input = $(td).find('input:visible')[0];if (!a && !input) {
            $(td).remove();
          }
        });var outerHTML = '';if (table) {
          outerHTML = table.outerHTML;
        }return outerHTML;
      }
    },
    doAction_uiControl109_EE9ZGs: function (data, elem) {
      if (data.eventType == 'handleInputClick') {
        var target = $(elem).find('table').find('input[value="' + data.dataCustom + '"]')[0];if (target) {
          target.click();
        }
      } else if (data.eventType == 'handleImgClick') {
        var target = $(elem).find('img[alt="' + data.dataCustom + '"]')[0];if (target) {
          target.click();
        }
      }
    },
    getTemplate_uiControl109_EE9ZGs: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount:function(){\n    setInterval(function(){\n      var chbs=document.querySelectorAll(\'#dwmcContainer input[type="checkbox"]\');\n      for(var i=0;i<chbs.length;i++){\n        chbs[i].setAttribute(\'onclick\',\'\');\n        chbs[i].parentElement.className=\'chbParent\'\n      }\n      var as=document.querySelectorAll(\'#dwmcContainer a\');\n      for(var i=0;i<as.length;i++){\n        as[i].href=\'\';\n        as[i].target=\'\';\n        as[i].addEventListener(\'click\',function(e){\n          e.preventDefault();\n        });\n        as[i].parentElement.className=\'aParent\';\n      }\n      \n    },200);\n   \t\n  },\n  handleInputClick:function(e){\n    \n    var target=e.target;\n    if(target.value){\n      this.props.customHandler({\n        data:target.value,\n        eventType:\'handleInputClick\'\n      });\n    }else if(target.tagName==\'IMG\'&&target.alt){\n      this.props.customHandler({\n        data:target.alt,\n        eventType:\'handleImgClick\'\n      });\n    }\n  },\n  handleClose:function(){\n    $(\'#dwmcContainer\').css(\'display\',\'none\');\n    $(\'#zsdw\').css(\'display\',\'none\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\',\'\');\n    this.props.customHandler({\n      eventType:\'handleClose\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div id=\'dwmcContainer\'>\n           <h5>\n          <i className=\'back\' onClick={this.handleClose}>\u8FD4\u56DE</i>\n          \u5355\u4F4D\u540D\u79F0\n        </h5>\n          <div dangerouslySetInnerHTML = {{__html: data}} onClick={this.handleInputClick} className=\'fhfwxzdw\'></div>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    setInterval(function () {\n      var chbs = document.querySelectorAll(\'#dwmcContainer input[type="checkbox"]\');\n      for (var i = 0; i < chbs.length; i++) {\n        chbs[i].setAttribute(\'onclick\', \'\');\n        chbs[i].parentElement.className = \'chbParent\';\n      }\n      var as = document.querySelectorAll(\'#dwmcContainer a\');\n      for (var i = 0; i < as.length; i++) {\n        as[i].href = \'\';\n        as[i].target = \'\';\n        as[i].addEventListener(\'click\', function (e) {\n          e.preventDefault();\n        });\n        as[i].parentElement.className = \'aParent\';\n      }\n    }, 200);\n  },\n  handleInputClick: function handleInputClick(e) {\n\n    var target = e.target;\n    if (target.value) {\n      this.props.customHandler({\n        data: target.value,\n        eventType: \'handleInputClick\'\n      });\n    } else if (target.tagName == \'IMG\' && target.alt) {\n      this.props.customHandler({\n        data: target.alt,\n        eventType: \'handleImgClick\'\n      });\n    }\n  },\n  handleClose: function handleClose() {\n    $(\'#dwmcContainer\').css(\'display\', \'none\');\n    $(\'#zsdw\').css(\'display\', \'none\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\', \'\');\n    this.props.customHandler({\n      eventType: \'handleClose\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { id: \'dwmcContainer\' },\n        React.createElement(\n          \'h5\',\n          null,\n          React.createElement(\n            \'i\',\n            { className: \'back\', onClick: this.handleClose },\n            \'\\u8FD4\\u56DE\'\n          ),\n          \'\\u5355\\u4F4D\\u540D\\u79F0\'\n        ),\n        React.createElement(\'div\', { dangerouslySetInnerHTML: { __html: data }, onClick: this.handleInputClick, className: \'fhfwxzdw\' })\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  });
})(window, ysp);