(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control41_eQimau: function (elem) {
      if (elem) {
        var data = [];var title = null;var content = [];$(elem).children('tbody').children('tr').each(function (trIdx, tr) {
          var trChildren = $(tr).children('td').length;if (trChildren == 2) {
            title = $(tr).children('td').eq(0).text();
          } else if (trChildren == 3) {
            var arr = [];var checkboxVal = $(tr).children('td').eq(1).text();var chbChecked = $(tr).children('td').eq(1).find('input[type=checkbox]')[0].checked;content.push([$(tr).children('td').eq(1).text(), chbChecked, trIdx]);
          }
        });return { title: title, content: content };
      }
    },
    doAction_uiControl39_zRXSMt: function (data, elem) {
      if (data.eventType == 'checkboxClick') {
        $(elem).children('tbody').children('tr').eq(data.dataCustom).find('input[type="checkbox"]')[0].click();
      } else if (data.eventType == 'handleOpen') {
        //$(elem).children('tbody').children('tr').eq(0).find('a>img')[0].click();
        setTimeout(function () {
          var img = $(elem).children('tbody').children('tr').eq(0).find('a>img')[0];if (img && (img.src.indexOf('plus') != -1 || img.src.indexOf('expand.gif') != -1)) {
            img.parentElement.click();
          }
        }, 300);
      } else if (data.eventType == 'handleClose') {
        $(elem).children('tbody').children('tr').find('input[type="checkbox"]:checked').each(function (chbIdx, chb) {
          chb.click();
        });
      }
    },
    getTemplate_uiControl39_zRXSMt: function () {
      var selfTemplate = 'module.exports = React.createClass({\n   componentDidMount:function(){\n    //var iconToggle=$(\'#dwToggle\');\n    //var iconiconToggleClass=iconToggle.attr(\'class\');\n\t\t\t//if(iconiconToggleClass==\'icon_close\'){\n     \n        this.props.customHandler({\n            eventType:\'handleOpen\'\n        })\n      //}\n\n    \n    \n   },\n  checkboxClick:function(e){\n    if(e.target.checked){\n      e.target.parentElement.className=\'checked\';\n    }else{\n      e.target.parentElement.className=\'\';\n    }\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:\'checkboxClick\'\n    })\n  },\n  handleToggle:function(e){\n    var target=e.target;\n    target.className=(target.className==\'icon_open\'?\'icon_close\':\'icon_open\');\n    this.props.customHandler({\n      eventType:\'handleToggle\'\n    })\n  },\n  handleClose:function(){\n    $(\'#dwmcContainer\').css(\'display\',\'none\');\n    $(\'#zsdw\').css(\'display\',\'none\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\',\'\');\n    this.props.customHandler({\n      eventType:\'handleClose\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data && data.title){\n      return (\n      <div id=\'dwmcContainer\'>\n        <h5>\n          <i className=\'back detailBtnBack\' onClick={this.handleClose}>\u8FD4\u56DE</i>\n          \u5355\u4F4D\u540D\u79F0\n        </h5>\n        <div>\n          <h4>\n            {data.title}\n            <i onClick={this.handleToggle} className=\'icon_close\' id="dwToggle" style={{\'display\':\'none\'}}></i>\n          </h4>\n          <ul>\n            {\n              data.content.map(function(chb,i){\n                return <li>\n                  <label>\n                    {chb[0]}<input type=\'checkbox\' checked={chb[1]} onClick={_this.checkboxClick} data-index={chb[2]}/>\n                </label>\n                </li>\n              })\n            }\n          </ul>\n        </div>\n        \n        \n      </div>\n    )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    //var iconToggle=$(\'#dwToggle\');\n    //var iconiconToggleClass=iconToggle.attr(\'class\');\n    //if(iconiconToggleClass==\'icon_close\'){\n\n    this.props.customHandler({\n      eventType: \'handleOpen\'\n    });\n    //}\n\n  },\n  checkboxClick: function checkboxClick(e) {\n    if (e.target.checked) {\n      e.target.parentElement.className = \'checked\';\n    } else {\n      e.target.parentElement.className = \'\';\n    }\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: \'checkboxClick\'\n    });\n  },\n  handleToggle: function handleToggle(e) {\n    var target = e.target;\n    target.className = target.className == \'icon_open\' ? \'icon_close\' : \'icon_open\';\n    this.props.customHandler({\n      eventType: \'handleToggle\'\n    });\n  },\n  handleClose: function handleClose() {\n    $(\'#dwmcContainer\').css(\'display\', \'none\');\n    $(\'#zsdw\').css(\'display\', \'none\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\', \'\');\n    this.props.customHandler({\n      eventType: \'handleClose\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data.title) {\n      return React.createElement(\n        \'div\',\n        { id: \'dwmcContainer\' },\n        React.createElement(\n          \'h5\',\n          null,\n          React.createElement(\n            \'i\',\n            { className: \'back detailBtnBack\', onClick: this.handleClose },\n            \'\\u8FD4\\u56DE\'\n          ),\n          \'\\u5355\\u4F4D\\u540D\\u79F0\'\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'h4\',\n            null,\n            data.title,\n            React.createElement(\'i\', { onClick: this.handleToggle, className: \'icon_close\', id: \'dwToggle\', style: { \'display\': \'none\' } })\n          ),\n          React.createElement(\n            \'ul\',\n            null,\n            data.content.map(function (chb, i) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'label\',\n                  null,\n                  chb[0],\n                  React.createElement(\'input\', { type: \'checkbox\', checked: chb[1], onClick: _this.checkboxClick, \'data-index\': chb[2] })\n                )\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control42_MpDaxS: function (elem) {
      if (elem) {
        var title = $(elem).children('legend').children('strong').text().split('：')[0];var options = [];$(elem).children('table').find('select>option').each(function (optIdx, opt) {
          options.push({ text: opt.textContent, selected: opt.selected });
        });return { title: title, options: options };
      } else {
        return null;
      }
    },
    doAction_uiControl40_Sh4mAC: function (data, elem) {
      if (data.eventType == 'delBtnClick') {
        $(elem).children('table').find('select>option')[+data.dataCustom].selected = true;$(elem).children('table').children().find('p>input')[0].click();
      }
    },
    getTemplate_uiControl40_Sh4mAC: function () {
      var selfTemplate = "module.exports = React.createClass({\n  delBtnClick:function(e){\n    var target=e.target;\n    if(target.nodeName=='I'){\n      this.props.customHandler({\n        data:target.dataset.index,\n        eventType:'delBtnClick'\n      })\n    }\n  },\n  addBtnClick:function(){\n    $('#dwmcContainer').css('display','block');\n    $('#zsdw').css('display','block');\n    $('#dwmcContainer label.checked').attr('class','');\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n      <div className='dwContainer zsdwCon' style={{'bottom':'0'}} id='zsdwCon'>\n        <h4 style={{'display':'flex','justify-content': 'space-between'}}>\n          <i></i>\n          <span>{data.title}</span>\n          <div>\n          \t<button onClick={this.addBtnClick}></button>\n          </div>\n        </h4>\n        <section>\n        \t<ul onClick={_this.delBtnClick}>\n          \t{\n              data.options.map(function(opt,optIdx){\n                return <li>\n                \t<span>{opt.text}</span>\n                  <i data-index={optIdx}></i>\n                </li>\n              })\n            }\n          </ul>\n        </section>\n      </div>\n    )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  delBtnClick: function delBtnClick(e) {\n    var target = e.target;\n    if (target.nodeName == \'I\') {\n      this.props.customHandler({\n        data: target.dataset.index,\n        eventType: \'delBtnClick\'\n      });\n    }\n  },\n  addBtnClick: function addBtnClick() {\n    $(\'#dwmcContainer\').css(\'display\', \'block\');\n    $(\'#zsdw\').css(\'display\', \'block\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\', \'\');\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'dwContainer zsdwCon\', style: { \'bottom\': \'0\' }, id: \'zsdwCon\' },\n        React.createElement(\n          \'h4\',\n          { style: { \'display\': \'flex\', \'justify-content\': \'space-between\' } },\n          React.createElement(\'i\', null),\n          React.createElement(\n            \'span\',\n            null,\n            data.title\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\'button\', { onClick: this.addBtnClick })\n          )\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: _this.delBtnClick },\n            data.options.map(function (opt, optIdx) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  opt.text\n                ),\n                React.createElement(\'i\', { \'data-index\': optIdx })\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control43_z5eMWr: function (elem) {
      if (elem) {
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl41_s2rSXu: function (data, elem) {
      if (data.eventType == 'btnClick') {
        elem.click();
      }
    },
    getTemplate_uiControl41_s2rSXu: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(){\n    this.props.customHandler({\n      eventType:\'btnClick\'\n    })\n    $(\'#dwmcContainer\').css(\'display\',\'none\');\n    $(\'#zsdw\').css(\'display\',\'none\');\n  },\n  render: function() {\n    return (\n      <button id=\'zsdw\' onClick={this.btnClick}>\u786E\u5B9A</button>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick() {\n    this.props.customHandler({\n      eventType: \'btnClick\'\n    });\n    $(\'#dwmcContainer\').css(\'display\', \'none\');\n    $(\'#zsdw\').css(\'display\', \'none\');\n  },\n  render: function render() {\n    return React.createElement(\n      \'button\',\n      { id: \'zsdw\', onClick: this.btnClick },\n      \'\\u786E\\u5B9A\'\n    );\n  }\n});';
    },
    getData_control44_vIPclB: function (elem) {
      if (elem) {
        var title = $(elem).children('legend').children('strong').text().split('：')[0];var options = [];$(elem).children('table').find('select>option').each(function (optIdx, opt) {
          options.push({ text: opt.textContent, selected: opt.selected });
        });return { title: title, options: options };
      } else {
        return null;
      }
    },
    doAction_uiControl42_c4ttFm: function (data, elem) {
      if (data.eventType == 'delBtnClick') {
        $(elem).children('table').find('select>option')[+data.dataCustom].selected = true;$(elem).children('table').children().find('p>input')[0].click();
      }
    },
    getTemplate_uiControl42_c4ttFm: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount:function(){\n    $(\'#zsdwCon\').css(\'bottom\',\'260px\');\n  },\n  delBtnClick:function(e){\n    var target=e.target;\n    if(target.nodeName==\'I\'){\n      this.props.customHandler({\n        data:target.dataset.index,\n        eventType:\'delBtnClick\'\n      })\n    }\n  },\n  addBtnClick:function(){\n    $(\'#dwmcContainer\').css(\'display\',\'block\');\n    $(\'#csdw\').css(\'display\',\'block\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\',\'\');\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n      <div className=\'dwContainer csdwCon\'>\n        <h4 style={{\'display\':\'flex\',\'justify-content\': \'space-between\'}}>\n          <i></i>\n          <span>{data.title}</span>\n          <div>\n          \t<button onClick={this.addBtnClick}></button>\n          </div>\n        </h4>\n        <section>\n        \t<ul onClick={_this.delBtnClick}>\n          \t{\n              data.options.map(function(opt,optIdx){\n                return <li>\n                \t<span>{opt.text}</span>\n                  <i data-index={optIdx}></i>\n                </li>\n              })\n            }\n          </ul>\n        </section>\n      </div>\n    )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    $(\'#zsdwCon\').css(\'bottom\', \'260px\');\n  },\n  delBtnClick: function delBtnClick(e) {\n    var target = e.target;\n    if (target.nodeName == \'I\') {\n      this.props.customHandler({\n        data: target.dataset.index,\n        eventType: \'delBtnClick\'\n      });\n    }\n  },\n  addBtnClick: function addBtnClick() {\n    $(\'#dwmcContainer\').css(\'display\', \'block\');\n    $(\'#csdw\').css(\'display\', \'block\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\', \'\');\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'dwContainer csdwCon\' },\n        React.createElement(\n          \'h4\',\n          { style: { \'display\': \'flex\', \'justify-content\': \'space-between\' } },\n          React.createElement(\'i\', null),\n          React.createElement(\n            \'span\',\n            null,\n            data.title\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\'button\', { onClick: this.addBtnClick })\n          )\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: _this.delBtnClick },\n            data.options.map(function (opt, optIdx) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  opt.text\n                ),\n                React.createElement(\'i\', { \'data-index\': optIdx })\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control45_F2PPJk: function (elem) {
      if (elem) {
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl43_5OEMm6: function (data, elem) {
      if (data.eventType == 'btnClick') {
        elem.click();
      }
    },
    getTemplate_uiControl43_5OEMm6: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(){\n    this.props.customHandler({\n      eventType:\'btnClick\'\n    })\n    $(\'#dwmcContainer\').css(\'display\',\'none\');\n    $(\'#csdw\').css(\'display\',\'none\');\n  },\n  render: function() {\n    return (\n      <button id=\'csdw\' onClick={this.btnClick}>\u786E\u5B9A</button>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick() {\n    this.props.customHandler({\n      eventType: \'btnClick\'\n    });\n    $(\'#dwmcContainer\').css(\'display\', \'none\');\n    $(\'#csdw\').css(\'display\', \'none\');\n  },\n  render: function render() {\n    return React.createElement(\n      \'button\',\n      { id: \'csdw\', onClick: this.btnClick },\n      \'\\u786E\\u5B9A\'\n    );\n  }\n});';
    },
    getData_control46_2ZhmHo: function (elem) {},
    doAction_uiControl45_p6f5zF: function (data, elem) {
      if (data.eventType == 'btnClick') {
        $(elem).children().children().children('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl45_p6f5zF: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:\'btnClick\'\n    })\n  },\n  render: function() {\n    return (\n      <div onClick={this.btnClick} className=\'xzbmBtnCon\'>\n        <button data-index={0}>\u786E\u5B9A</button>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: \'btnClick\'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      { onClick: this.btnClick, className: \'xzbmBtnCon\' },\n      React.createElement(\n        \'button\',\n        { \'data-index\': 0 },\n        \'\\u786E\\u5B9A\'\n      )\n    );\n  }\n});';
    },
    getData_control47_cUVMX8: function (elem) {
      if (elem) {
        var data = [];$(elem).children('tbody').children('tr').children('td').children('font').each(function (fontIdx, font) {
          var arr = [];arr.push(font.textContent);arr.push($(font).children('input')[0].checked);data.push(arr);return arr;
        });return data;
      }
    },
    doAction_uiControl46_nnSBTQ: function (data, elem) {
      if (data.eventType == 'checkboxClick') {
        $(elem).children('tbody').children('tr').children('td').children('font').eq(data.dataCustom).find('input[type="checkbox"]')[0].click();
      } else if (data.eventType == 'handleClose') {
        $(elem).children('tbody').children('tr').children('td').children('font').find('input[type="checkbox"]:checked').each(function (chbIdx, chb) {
          chb.click();
        });
      }
    },
    getTemplate_uiControl46_nnSBTQ: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  checkboxClick:function(e){\n    if(e.target.checked){\n      e.target.parentElement.className=\'checked\';\n    }else{\n      e.target.parentElement.className=\'\';\n    }\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:\'checkboxClick\'\n    })\n  },\n  handleClose:function(){\n    $(\'#dwmcContainer\').css(\'display\',\'none\');\n    $(\'#zsdw\').css(\'display\',\'none\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\',\'\');\n    this.props.customHandler({\n      eventType:\'handleClose\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data && data.length){\n      return (\n      <div id=\'dwmcContainer\' style={{\'display\':\'none\'}}>\n        <h5>\n          <i className=\'back detailBtnBack\' onClick={this.handleClose}>\u8FD4\u56DE</i>\n          \u5355\u4F4D\u540D\u79F0\n        </h5>\n        <div>\n          <ul>\n            {\n              data.map(function(chb,i){\n                return <li>\n                  <label>\n                    {chb[0]}<input type=\'checkbox\' checked={chb[1]} onClick={_this.checkboxClick} data-index={i}/>\n\n\n                  </label>\n                </li>\n              })\n            }\n        </ul>\n        </div>\n        \n        \n      </div>\n    )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  checkboxClick: function checkboxClick(e) {\n    if (e.target.checked) {\n      e.target.parentElement.className = \'checked\';\n    } else {\n      e.target.parentElement.className = \'\';\n    }\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: \'checkboxClick\'\n    });\n  },\n  handleClose: function handleClose() {\n    $(\'#dwmcContainer\').css(\'display\', \'none\');\n    $(\'#zsdw\').css(\'display\', \'none\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\', \'\');\n    this.props.customHandler({\n      eventType: \'handleClose\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data.length) {\n      return React.createElement(\n        \'div\',\n        { id: \'dwmcContainer\', style: { \'display\': \'none\' } },\n        React.createElement(\n          \'h5\',\n          null,\n          React.createElement(\n            \'i\',\n            { className: \'back detailBtnBack\', onClick: this.handleClose },\n            \'\\u8FD4\\u56DE\'\n          ),\n          \'\\u5355\\u4F4D\\u540D\\u79F0\'\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'ul\',\n            null,\n            data.map(function (chb, i) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'label\',\n                  null,\n                  chb[0],\n                  React.createElement(\'input\', { type: \'checkbox\', checked: chb[1], onClick: _this.checkboxClick, \'data-index\': i })\n                )\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control49_qA0HMX: function (elem) {
      if (elem) {
        var _title = $(elem).children('legend').children('strong').text();var _data = [];$(elem).children('div').find('select>option').each(function (optIdx, opt) {
          _data.push(opt.textContent);
        });if (_title == '待选人员') {
          return { _title: _title, _data: _data };
        }
      } else {
        return null;
      }
    },
    doAction_uiControl48_v3B6ue: function (data, elem) {
      if (data.eventType == 'handleLiClick') {
        $(elem).children('div').find('select>option')[+data.dataCustom].selected = true;elem.parentElement.nextElementSibling.querySelector('div>input[type="button"]').click();$(elem).children('div').find('select>option')[+data.dataCustom].selected = false;
      } else if (data.eventType == 'checkedAll') {
        elem.parentElement.nextElementSibling.querySelectorAll('div>input[type="button"]')[1].click();$(elem).children('div').find('select>option').each(function (optIdx, opt) {
          opt.selected = true;
        });
      }
    },
    getTemplate_uiControl48_v3B6ue: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleLiClick:function(e){\n    var target=e.target;\n    this.props.customHandler({\n      data:target.dataset.index,\n      eventType:\'handleLiClick\'\n    })\n  },\n  checkedAll:function(){\n    this.props.customHandler({\n      eventType:\'checkedAll\'\n    })\n  },\n  deleteAll:function(){\n    this.props.customHandler({\n      eventType:\'deleteAll\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'dxryContainer\'>\n          <h4>\n            <span>{data._title}</span>\n            <div style={{\'float\':\'right\'}}>\n            \t<button onClick={this.checkedAll}>\u5168\u9009</button>\n            </div>\n            \n          </h4>\n          <section>\n            <ul onClick={this.handleLiClick}>\n              {\n\t\t\t\t\t\t\t\tdata._data.map(function(val,idx){\n                  return <li data-index={idx}>{val}</li>\n                })\n              }\n            </ul>\n          </section>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleLiClick: function handleLiClick(e) {\n    var target = e.target;\n    this.props.customHandler({\n      data: target.dataset.index,\n      eventType: \'handleLiClick\'\n    });\n  },\n  checkedAll: function checkedAll() {\n    this.props.customHandler({\n      eventType: \'checkedAll\'\n    });\n  },\n  deleteAll: function deleteAll() {\n    this.props.customHandler({\n      eventType: \'deleteAll\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'dxryContainer\' },\n        React.createElement(\n          \'h4\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            data._title\n          ),\n          React.createElement(\n            \'div\',\n            { style: { \'float\': \'right\' } },\n            React.createElement(\n              \'button\',\n              { onClick: this.checkedAll },\n              \'\\u5168\\u9009\'\n            )\n          )\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: this.handleLiClick },\n            data._data.map(function (val, idx) {\n              return React.createElement(\n                \'li\',\n                { \'data-index\': idx },\n                val\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control50_Greq8B: function (elem) {
      if (elem) {
        var _title = $(elem).children('legend').children('strong').text();var _data = [];$(elem).children('div').find('select>option').each(function (optIdx, opt) {
          _data.push(opt.textContent);
        });return { _title: _title, _data: _data };
      } else {
        return null;
      }
    },
    doAction_uiControl49_Ex9BFQ: function (data, elem) {
      if (data.eventType == 'handleDelClick') {
        $(elem).children('div').find('select>option')[+data.dataCustom].selected = true;elem.parentElement.previousElementSibling.querySelectorAll('input[type="button"]')[2].click();$(elem).parent().prev().prev().find('select>option').each(function (optIdx, opt) {
          opt.selected = false;
        });
      } else if (data.eventType == 'deleteAll') {
        elem.parentElement.previousElementSibling.querySelectorAll('input[type="button"]')[3].click();$(elem).parent().prev().prev().find('select>option').each(function (optIdx, opt) {
          opt.selected = false;
        });
      }
    },
    getTemplate_uiControl49_Ex9BFQ: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleDelClick:function(e){\n    if(e.target.nodeName==\'I\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleDelClick\'\n      })\n    }\n  },\n  deleteAll:function(){\n    this.props.customHandler({\n      eventType:\'deleteAll\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data){\n      return (\n        <div className=\'xzryContainer\'>\n          <h4>\n            <span>{data._title}</span>\n            <div style={{\'float\':\'right\'}}>\n              <button onClick={this.deleteAll}>\u5168\u5220</button>\n            </div>\n            \n          </h4>\n          <section>\n            <ul onClick={this.handleDelClick}>\n              {\n\t\t\t\t\t\t\t\tdata._data.map(function(val,idx){\n                  return <li data-index={idx}>\n                    <span>{val}</span>\n                    <i data-index={idx}></i>\n                  </li>\n                })\n              }\n            </ul>\n          </section>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleDelClick: function handleDelClick(e) {\n    if (e.target.nodeName == \'I\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleDelClick\'\n      });\n    }\n  },\n  deleteAll: function deleteAll() {\n    this.props.customHandler({\n      eventType: \'deleteAll\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'xzryContainer\' },\n        React.createElement(\n          \'h4\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            data._title\n          ),\n          React.createElement(\n            \'div\',\n            { style: { \'float\': \'right\' } },\n            React.createElement(\n              \'button\',\n              { onClick: this.deleteAll },\n              \'\\u5168\\u5220\'\n            )\n          )\n        ),\n        React.createElement(\n          \'section\',\n          null,\n          React.createElement(\n            \'ul\',\n            { onClick: this.handleDelClick },\n            data._data.map(function (val, idx) {\n              return React.createElement(\n                \'li\',\n                { \'data-index\': idx },\n                React.createElement(\n                  \'span\',\n                  null,\n                  val\n                ),\n                React.createElement(\'i\', { \'data-index\': idx })\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control6_LMTl3W: function (elem) {
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
    doAction_uiControl6_dVgq9R: function (data, elem) {},
    getTemplate_uiControl6_dVgq9R: function () {
      var selfTemplate = 'var React=require("react");\nvar {PageTitle}=require("ysp-custom-components");\nmodule.exports = React.createClass({\n  render: function() {\n    var title=this.props.customData;\n    return (\n      <PageTitle customData={title} style={{\'display\':title ?\'block\':\'none\'}}/>\n    )\n  }\n});';
      return '"use strict";\n\nvar React = require("react");\n\nvar _require = require("ysp-custom-components"),\n    PageTitle = _require.PageTitle;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var title = this.props.customData;\n    return React.createElement(PageTitle, { customData: title, style: { \'display\': title ? \'block\' : \'none\' } });\n  }\n});';
    },
    getData_control8_qx2ku3: function (elem) {
      if (elem) {
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl7_w0DwzO: function (data, elem) {
      if (data.eventType == 'handleBack') {
        elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl7_w0DwzO: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleBack:function(){\n    this.props.customHandler({\n      eventType:\'handleBack\'\n    })\n  },\n  render: function() {\n    return (\n      <div className=\'back detailBtnBack\' onClick={this.handleBack}>\n        \u8FD4\u56DE\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleBack: function handleBack() {\n    this.props.customHandler({\n      eventType: \'handleBack\'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      { className: \'back detailBtnBack\', onClick: this.handleBack },\n      \'\\u8FD4\\u56DE\'\n    );\n  }\n});';
    },
    getData_control38_UJE6bP: function (elem) {
      if (elem) {
        //业务需求申请  涉及业务渠道
        var data = [];var title = $(elem).children('legend').text();$(elem).children('p').find('tr').children('td').children('font').each(function (fontIdx, font) {
          var arr = [];arr.push(font.textContent);arr.push($(font).children('input')[0].checked);data.push(arr);return arr; //dwmcContainer
        });return { data: data, title: title };
      } else {
        return null;
      }
    },
    doAction_uiControl19_oxMJtG: function (data, elem) {
      if (data.eventType == 'checkboxClick') {
        $(elem).children('p').find('tr').children('td').children('font').eq(data.dataCustom).find('input[type="checkbox"]')[0].click();
      } else if (data.eventType == 'handleClose') {
        $(elem).children('tbody').children('tr').children('td').children('font').find('input[type="checkbox"]:checked').each(function (chbIdx, chb) {
          chb.click();
        });
      }
    },
    getTemplate_uiControl19_oxMJtG: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  checkboxClick:function(e){\n    if(e.target.checked){\n      e.target.parentElement.className=\'checked\';\n    }else{\n      e.target.parentElement.className=\'\';\n    }\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:\'checkboxClick\'\n    })\n  },\n  handleClose:function(){\n    $(\'#dwmcContainer\').css(\'display\',\'none\');\n    $(\'#zsdw\').css(\'display\',\'none\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\',\'\');\n    this.props.customHandler({\n      eventType:\'handleClose\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData.data;\n    var title=this.props.customData.title;\n    var _this=this;\n    if(data.length && title==\'\u6E20\u9053\u540D\u79F0\'){\n      return (\n      <div id=\'dwmcContainer\'>\n        <h5>\n          <i className=\'back detailBtnBack\' onClick={this.handleClose}>\u8FD4\u56DE</i>\n          \u6E20\u9053\u540D\u79F0\n        </h5>\n        <div>\n          <ul>\n            {\n              data.map(function(chb,i){\n                return <li>\n                  <label style={{\'padding-left\':\'10px\'}}>\n                    {chb[0]}<input type=\'checkbox\' defaultChecked={chb[1]} onClick={_this.checkboxClick} data-index={i}/>\n\n\n                  </label>\n                </li>\n              })\n            }\n        </ul>\n        </div>\n        \n        \n      </div>\n    )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  checkboxClick: function checkboxClick(e) {\n    if (e.target.checked) {\n      e.target.parentElement.className = \'checked\';\n    } else {\n      e.target.parentElement.className = \'\';\n    }\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: \'checkboxClick\'\n    });\n  },\n  handleClose: function handleClose() {\n    $(\'#dwmcContainer\').css(\'display\', \'none\');\n    $(\'#zsdw\').css(\'display\', \'none\');\n    $(\'#dwmcContainer label.checked\').attr(\'class\', \'\');\n    this.props.customHandler({\n      eventType: \'handleClose\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData.data;\n    var title = this.props.customData.title;\n    var _this = this;\n    if (data.length && title == \'\u6E20\u9053\u540D\u79F0\') {\n      return React.createElement(\n        \'div\',\n        { id: \'dwmcContainer\' },\n        React.createElement(\n          \'h5\',\n          null,\n          React.createElement(\n            \'i\',\n            { className: \'back\', onClick: this.handleClose },\n            \'\\u8FD4\\u56DE\'\n          ),\n          \'\\u6E20\\u9053\\u540D\\u79F0\'\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'ul\',\n            null,\n            data.map(function (chb, i) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'label\',\n                  { style: { \'padding-left\': \'10px\' } },\n                  chb[0],\n                  React.createElement(\'input\', { type: \'checkbox\', defaultChecked: chb[1], onClick: _this.checkboxClick, \'data-index\': i })\n                )\n              );\n            })\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  });
})(window, ysp);