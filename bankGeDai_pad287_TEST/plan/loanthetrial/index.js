(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control96_TxyW11: function (elem) {
      if (elem) {
        // debugger;
        var data = {};if (elem.querySelector('.titlebar')) {
          // table card 的标题
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }data.groups = [];if (elem.querySelectorAll('.RinghtTrYellow').length > 0) {
          // 判断 名称 是否存在
          $(elem).find('.RinghtTrYellow').each(function (i, key) {
            // 循环名称
            var group = {}; // 定义一组 key-value
            group.key = key.textContent.trim();if ($(key).next().find('input').length > 0) {
              if ($(key).next().find('input')[0].type === 'text') {
                // 判断 key-value 组合中，value值的类型，若为 input-text
                group.name = 'input'; // 做标记
                group.value = $(key).next().find('input')[0].value;
              } else if ($(key).next().find('input')[0].type === 'checkbox') {
                group.name = 'checkbox';group.checked = $(key).next().find('input')[0].checked;
              }group.disabled = $(key).next().find('input')[0].disabled; // 获取对应属性 disabled
              group.readonly = $(key).next().find('input')[0].readOnly; // 获取对应属性 readonly
              if (/star/.test($(key).next().find('input ').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select').length > 0) {
              // 判断 key-value 组合中，value值的类型，若为 select
              group.name = 'select';var curOptvalue = $(key).next().find('select')[0].value;group.disabled = $(key).next().find('select')[0].disabled;group.optionsText = [];group.optionsValue = [];$(key).next().find('select').children('option').each(function (i, opt) {
                group.optionsValue.push(opt.value);group.optionsText.push(opt.textContent.trim()); // if (opt.value == curOptvalue) {
                group.value = opt.textContent; // }
              });group.value = $(key).next().find('select')[0].value;if ($(key).next().find('select').attr('must') == 'true' || /star/.test($(key).next().find('select').next('img').attr('src'))) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            }data.groups.push(group);
          });
        }return data;
      } else {
        return "";
      }
    },
    doAction_uiControl91_QqoSNo: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrword').eq(idx)[0].children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.value = value;el.dispatchEvent(new Event('change'));
      }if (data.eventType == 'check') {
        el.click();
      }
    },
    getTemplate_uiControl91_QqoSNo: function () {
      var selfTemplate = '// MainCard customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\nmodule.exports = React.createClass({\n  componentMountDid:function(){},\n  handleChange: function(e){\n    // debugger;\n    this.handleEvents(e.target,\'changeInput\');\n  },\n  checkChange: function(e){\n    // debugger;\n    this.handleEvents(e.target,\'check\');\n  },\n  handleClick: function(e){\n    //$(e.target).addClass(\'curOption\').siblings(\'.curOption\').removeClass(\'curOption\');\n    this.handleEvents(e.target,\'optionClick\');\n  },\n  handleEvents: function(target,event){ // \u5408\u5E76\u5904\u7406\u4E8B\u4EF6\n    var handler = this.props.customHandler;\n    // console.log(value);\n    if(handler){\n      handler({\n        eventType: event,\n        data: [target.getAttribute(\'data-index\'),target.value]\n      })\n    }\n  },\n  render: function() {\n    // debugger;\n    var data = this.props.customData;\n    var me = this;\n    if(data && data!==\'\' && data.cardTitle && data.groups){\n      var groups = data.groups.map(function(group,i){\n        console.log(data.groups.length);\n        if(group.name == \'input\'){\n           return (\n            <div>\n              <span className=\'key\'>\n                <span style={{color:\'red\'}}>{group.needed?\'*\':\'\'}</span>\n                {group.key}\n              </span>\n              <span className=\'value\'>\n                <AInput data-index={i} value={group.value} type=\'text\' disabled={group.disabled} readOnly={group.readonly} onBlur={me.handleChange}/>\n              </span>\n            </div>\n          ) \n        }else if(group.name == \'checkbox\'){\n           return (\n            <div>\n              <span className=\'key\'>\n                <span style={{color:\'red\'}}>{group.needed?\'*\':\'\'}</span>\n                {group.key}\n              </span>\n              <span className=\'checkvalue\'>\n                <input data-index={i} checked={group.checked} type=\'checkbox\' disabled={group.disabled} readOnly={group.readonly} onClick={me.checkChange}/>\n              </span>\n            </div>\n          )\n       \t}else if(group.name == \'select\'){\n          var optionsPage = group.optionsText.map(function(option,i){ // option \u7EC4\n            return (<option value={group.optionsValue[i]}>{option}</option>)\n          })\n          return (\n            <div>\n              <span className=\'key\'>\n                <span style={{color:\'red\'}}>{group.needed?\'*\':\'\'}</span>\n                {group.key}\n              </span>\n              <span className=\'value\'>\n                <select value={group.value} disabled={group.disabled} onChange={me.handleChange} data-index={i}>\n                  {optionsPage}\n                </select>\n              </span>\n            </div>\n          )\n        }\n      })\n      return (\n        <div className=\'main calcSearch\'>\n          <div className=\'loangroups\' data-value={data.cardTitle?data.cardTitle:\'\'}>\n            {groups}\n          </div>\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\n// MainCard customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentMountDid: function componentMountDid() {},\n  handleChange: function handleChange(e) {\n    // debugger;\n    this.handleEvents(e.target, \'changeInput\');\n  },\n  checkChange: function checkChange(e) {\n    // debugger;\n    this.handleEvents(e.target, \'check\');\n  },\n  handleClick: function handleClick(e) {\n    //$(e.target).addClass(\'curOption\').siblings(\'.curOption\').removeClass(\'curOption\');\n    this.handleEvents(e.target, \'optionClick\');\n  },\n  handleEvents: function handleEvents(target, event) {\n    // \u5408\u5E76\u5904\u7406\u4E8B\u4EF6\n    var handler = this.props.customHandler;\n    // console.log(value);\n    if (handler) {\n      handler({\n        eventType: event,\n        data: [target.getAttribute(\'data-index\'), target.value]\n      });\n    }\n  },\n  render: function render() {\n    // debugger;\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== \'\' && data.cardTitle && data.groups) {\n      var groups = data.groups.map(function (group, i) {\n        console.log(data.groups.length);\n        if (group.name == \'input\') {\n          return React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'span\',\n              { className: \'key\' },\n              React.createElement(\n                \'span\',\n                { style: { color: \'red\' } },\n                group.needed ? \'*\' : \'\'\n              ),\n              group.key\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'value\' },\n              React.createElement(AInput, { \'data-index\': i, value: group.value, type: \'text\', disabled: group.disabled, readOnly: group.readonly, onBlur: me.handleChange })\n            )\n          );\n        } else if (group.name == \'checkbox\') {\n          return React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'span\',\n              { className: \'key\' },\n              React.createElement(\n                \'span\',\n                { style: { color: \'red\' } },\n                group.needed ? \'*\' : \'\'\n              ),\n              group.key\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'checkvalue\' },\n              React.createElement(\'input\', { \'data-index\': i, checked: group.checked, type: \'checkbox\', disabled: group.disabled, readOnly: group.readonly, onClick: me.checkChange })\n            )\n          );\n        } else if (group.name == \'select\') {\n          var optionsPage = group.optionsText.map(function (option, i) {\n            // option \u7EC4\n            return React.createElement(\n              \'option\',\n              { value: group.optionsValue[i] },\n              option\n            );\n          });\n          return React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'span\',\n              { className: \'key\' },\n              React.createElement(\n                \'span\',\n                { style: { color: \'red\' } },\n                group.needed ? \'*\' : \'\'\n              ),\n              group.key\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'value\' },\n              React.createElement(\n                \'select\',\n                { value: group.value, disabled: group.disabled, onChange: me.handleChange, \'data-index\': i },\n                optionsPage\n              )\n            )\n          );\n        }\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'main calcSearch\' },\n        React.createElement(\n          \'div\',\n          { className: \'loangroups\', \'data-value\': data.cardTitle ? data.cardTitle : \'\' },\n          groups\n        )\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control100_ZRPZRy: function (elem) {
      var data = {};if (elem) {
        if ($(elem).children('tbody').children('tr').eq(0).children('.titlebar').length > 0) {
          data.title = $(elem).children('tbody').children('tr').eq(0).children('.titlebar')[0].textContent.trim();
        }if ($(elem).children('tbody').children('tr').eq(1).children('.RinghtTrYellow').length > 0) {
          data.sumTit = [];$(elem).children('tbody').children('tr').eq(1).children('.RinghtTrYellow').each(function (i, tit) {
            data.sumTit.push(tit.textContent.trim());
          });
        }if ($(elem).children('tbody').children('tr').eq(1).children('.RinghtTrword').length > 0) {
          data.sumCont = [];$(elem).children('tbody').children('tr').eq(1).children('.RinghtTrword').each(function (i, cont) {
            if ($(cont).find('input').length > 0) {
              data.sumCont.push({ inputVal: $(cont).find('input')[0].value, readOnly: $(cont).find('input')[0].readOnly, sumTxt: cont.textContent.trim() });
            }
          });
        }
      }return data;
    },
    doAction_uiControl100_mC6M7c: function (data, elem) {},
    getTemplate_uiControl100_mC6M7c: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data.sumTit && data.sumCont){\n        var sumCont = data.sumCont.map(function(cont,i){\n          return (\n          \t<span className=\'sumCont\'>\n            \t<input value={cont.inputVal} readOnly={cont.readOnly} type=\'text\'/>\n              {cont.sumTxt}\n            </span>\n          )\n        })\n      var summaryGrp = data.sumTit.map(function(tit,i){\n        return (\n        \t<div className=\'sumLi\'>\n          \t<span className=\'sumTit\'>{tit}</span>\n            {sumCont[i]}\n          </div>\n        )\n      })\n      return (\n        <div className=\'summaryTab\'>\n          {summaryGrp}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.sumTit && data.sumCont) {\n      var sumCont = data.sumCont.map(function (cont, i) {\n        return React.createElement(\n          \'span\',\n          { className: \'sumCont\' },\n          React.createElement(\'input\', { value: cont.inputVal, readOnly: cont.readOnly, type: \'text\' }),\n          cont.sumTxt\n        );\n      });\n      var summaryGrp = data.sumTit.map(function (tit, i) {\n        return React.createElement(\n          \'div\',\n          { className: \'sumLi\' },\n          React.createElement(\n            \'span\',\n            { className: \'sumTit\' },\n            tit\n          ),\n          sumCont[i]\n        );\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'summaryTab\' },\n        summaryGrp\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },

    getData_control106_N1cGhW: function (elem) {
      var data = [];if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        $(elem).children('input[type="button"]').each(function (i, btn) {
          data.push(btn.value);
        });
      }return data;
    },
    doAction_uiControl106_CHeK2N: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = data.dataCustom;console.log(idx);if ($(elem).find('input[type="button"]').eq(idx)[0].name === 'computer') {
          elem.ownerDocument.defaultView.account('resultDetail');
        } else {
          $(elem).find('input[type="button"]').eq(idx)[0].click();
        }
      }
    },
    getTemplate_uiControl106_CHeK2N: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onclick: function(e){\n    var handler = this.props.customHandler;\n    var idx = parseInt(e.target.getAttribute(\'data-index\'));\n    if(idx === 3){\n      var table = e.target.ownerDocument.querySelector(\'.tableBoxWithIcon .TableBox\');\n      table.style.display = \'block\';\n    }\n    if(handler){\n      handler({\n        eventType: \'click\',\n        data: e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data && data.length > 0){\n      var btnGrp = data.map(function(btn,i){\n        return (<span className=\'button btn btn-block btn-primary \' data-index={i} onClick={_this.onclick}>{btn}</span>)\n      })\n      return (\n        <div className=\'loanBtns loanBottomBtn\'>\n          {btnGrp}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onclick: function onclick(e) {\n    var handler = this.props.customHandler;\n    var idx = parseInt(e.target.getAttribute(\'data-index\'));\n    if (idx === 3) {\n      var table = e.target.ownerDocument.querySelector(\'.tableBoxWithIcon .TableBox\');\n      table.style.display = \'block\';\n    }\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data.length > 0) {\n      var btnGrp = data.map(function (btn, i) {\n        return React.createElement(\n          \'span\',\n          { className: \'button btn btn-block btn-primary \', \'data-index\': i, onClick: _this.onclick },\n          btn\n        );\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'loanBtns loanBottomBtn\' },\n        btnGrp\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control104_lXZKIw: function (elem) {
      if (elem) {
        var data = {};if (elem.ownerDocument.querySelector('#curren-tstep')) {
          data.title = elem.ownerDocument.querySelector('#curren-tstep').textContent.trim();
        } else {
          data.title = '';
        }data.content = [];data.rowsState = []; // if (elem.querySelector('.titlebar')) {
        //   data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        // }
        if ($(elem).find('.titlebarHUI:visible').length > 0) {
          data.rowsState.push(false);var thead = [];$(elem).find('.titlebarHUI:visible').each(function (i, th) {
            thead.push(th.textContent.trim());
          });data.content.push(thead);
        }if ($(elem).children('tbody:visible').children('tr[tid]:visible').length > 0) {
          var tds = [];$(elem).children('tbody:visible').children('tr[tid]:visible').each(function (i, tr) {
            if ($(tr).attr('bgcolor')) {
              var bgcolor = $(tr).attr('bgcolor').toUpperCase();if (bgcolor !== '#FFF' && bgcolor !== '#FFFFFF') {
                data.rowsState.push(true);
              } else {
                data.rowsState.push(false);
              }
            } else {
              data.rowsState.push(false);
            }tds = [];$(tr).children('td:visible').each(function (i, td) {
              tds.push(td.textContent.trim());
            });data.content.push(tds);
          });
        }return data;
      }return '';
    },
    doAction_uiControl103_s7UbpK: function (data, elem) {
      if (data.eventType == 'checkClick') {
        var idx = parseInt(data.dataCustom) - 1;$(elem).children('tbody').children('tr[doname]:visible').eq(idx).children('td')[0].click();
      }
    },
    getTemplate_uiControl103_s7UbpK: function () {
      var selfTemplate = 'var React=require("react");\nvar {MainTable}=require("ysp-custom-components");\nmodule.exports=React.createClass({\n\trender:function(){\n    var data=this.props.customData;\n    if(data && data.content && data.content.length>0){\n      return (<MainTable customData={data.content} customHandler={this.props.customHandler} titleText={data.title} buttonText="\u9009\u62E9\u5B57\u6BB5" compentName="table3" displaySwitch={true} tableIcon={false} rowsState={data.rowsState} />)\n    }else{\n      return (<div style={{display:"none"}}></div>)\n    }\n  }\n})';
      return '"use strict";\n\nvar React = require("react");\n\nvar _require = require("ysp-custom-components"),\n    MainTable = _require.MainTable;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.content && data.content.length > 0) {\n      return React.createElement(MainTable, { customData: data.content, customHandler: this.props.customHandler, titleText: data.title, buttonText: "\\u9009\\u62E9\\u5B57\\u6BB5", compentName: "table3", displaySwitch: true, tableIcon: false, rowsState: data.rowsState });\n    } else {\n      return React.createElement("div", { style: { display: "none" } });\n    }\n  }\n});';
    },
    getData_control105_T3LsEQ: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};data.tbutton = [];data.thead = [];data.state = [];data.tbody = []; // debugger; //titlebar  titlebarHUI resultDetail
        if ($(elem).children('tbody').children('tr:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr:visible').children('td:visible').each(function (i, td) {
            if (td.textContent.trim() == '' || td.textContent.trim() == '结果') {
              data.tbutton.push(td.textContent.trim());
            } else {
              data.thead.push(td.textContent.trim());
            }
          });
        }if ($(elem).children('tbody[id]').children('tr[onclick]:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr[onclick]:visible').each(function (i, tr) {
            var trs = [];data.state.push(tr.bgColor);if ($(tr).children('td:visible').length > 0) {
              $(tr).children('td:visible').each(function (i, td) {
                trs.push(td.textContent.trim());
              });
            }data.tbody.push(trs);
          });
        }return data;
      }return '';
    },
    doAction_uiControl104_FH2mPe: function (data, elem) {},
    getTemplate_uiControl104_FH2mPe: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(e.target.localName == 'td'){\n      e.target = e.target.parentElement;\n    }\n    if(handler){\n      handler({\n        eventType: 'checkClick',\n        data: e.target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data!==''){\n      if(data.tbody && data.thead){\n        if(data.thead.length > 0){\n          var tableHead = data.thead.map(function(th,i){\n            return (\n            \t<th>{th}</th>\n            )\n          })\n          if(data.tbody.length > 0){\n            var tableList = data.tbody.map(function(tr,i){\n              var tableLi = tr.map(function(td,i){\n                return (\n                  <td>\n                    {td}\n                  </td>\n                )\n              })\n              return (\n                <tr onClick={me.handleClick} data-index={i} className={data.state?data.state[i]?(data.state[i].toUpperCase()=='#FEEDEF'?'selectedTr':''):'':''}>\n                  {tableLi}\n                </tr>\n              )\n            })\n          }\n        }\n      }else{\n        var tableHead = data.info?data.info:'\u65E0\u6570\u636E\uFF01';\n        var tableList = '';\n      }\n      return (\n        <div className='tableContainer'>\n          <div className='cardTitle'>{data.cardTitle?data.cardTitle:''}</div>\n          <div className='StandardTable'>\n            <table>\n              <thead><tr>{tableHead}</tr></thead>\n              <tbody>{tableList}</tbody>\n            </table>\n          </div>\n        </div>\n      )\n    }else{\n\t\t\treturn (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (e.target.localName == 'td') {\n      e.target = e.target.parentElement;\n    }\n    if (handler) {\n      handler({\n        eventType: 'checkClick',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== '') {\n      if (data.tbody && data.thead) {\n        if (data.thead.length > 0) {\n          var tableHead = data.thead.map(function (th, i) {\n            return React.createElement(\n              'th',\n              null,\n              th\n            );\n          });\n          if (data.tbody.length > 0) {\n            var tableList = data.tbody.map(function (tr, i) {\n              var tableLi = tr.map(function (td, i) {\n                return React.createElement(\n                  'td',\n                  null,\n                  td\n                );\n              });\n              return React.createElement(\n                'tr',\n                { onClick: me.handleClick, 'data-index': i, className: data.state ? data.state[i] ? data.state[i].toUpperCase() == '#FEEDEF' ? 'selectedTr' : '' : '' : '' },\n                tableLi\n              );\n            });\n          }\n        }\n      } else {\n        var tableHead = data.info ? data.info : '\u65E0\u6570\u636E\uFF01';\n        var tableList = '';\n      }\n      return React.createElement(\n        'div',\n        { className: 'tableContainer' },\n        React.createElement(\n          'div',\n          { className: 'cardTitle' },\n          data.cardTitle ? data.cardTitle : ''\n        ),\n        React.createElement(\n          'div',\n          { className: 'StandardTable' },\n          React.createElement(\n            'table',\n            null,\n            React.createElement(\n              'thead',\n              null,\n              React.createElement(\n                'tr',\n                null,\n                tableHead\n              )\n            ),\n            React.createElement(\n              'tbody',\n              null,\n              tableList\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },
    getData_control105_JBiU2n: function (elem) {
      if (elem) {
        var data = {};if (elem.ownerDocument.querySelector('#curren-tstep')) {
          data.title = elem.ownerDocument.querySelector('#curren-tstep').textContent.trim();
        } else {
          data.title = '';
        }data.content = [];data.rowsState = []; // if (elem.querySelector('.titlebar')) {
        //   data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        // }
        if ($(elem).find('.titlebarHUI:visible').length > 0) {
          data.rowsState.push(false);var thead = [];$(elem).find('.titlebarHUI:visible').each(function (i, th) {
            thead.push(th.textContent.trim());
          });data.content.push(thead);
        }if ($(elem).children('tbody[id]:visible').children('tr:visible').length > 0) {
          var tds = [];$(elem).children('tbody[id]:visible').children('tr:visible').each(function (i, tr) {
            if ($(tr).attr('bgcolor')) {
              var bgcolor = $(tr).attr('bgcolor').toUpperCase();if (bgcolor !== '#FFF' && bgcolor !== '#FFFFFF') {
                data.rowsState.push(true);
              } else {
                data.rowsState.push(false);
              }
            } else {
              data.rowsState.push(false);
            }tds = [];$(tr).children('td:visible').each(function (i, td) {
              tds.push(td.textContent.trim());
            });data.content.push(tds);
          });
        }return data;
      }return '';
    },
    doAction_uiControl104_NVrtVP: function (data, elem) {},
    getTemplate_uiControl104_NVrtVP: function () {
      var selfTemplate = 'var React=require("react");\nvar {MainTable}=require("ysp-custom-components");\nmodule.exports=React.createClass({\n\trender:function(){\n    var data=this.props.customData;\n    if(data && data.content && data.content.length>0){\n      return (<MainTable customData={data.content} customHandler={this.props.customHandler} titleText={data.title} buttonText="\u9009\u62E9\u5B57\u6BB5" compentName="table2" displaySwitch={false} tableIcon={true} rowsState={data.rowsState} hideSelf={true}/>)\n    }else{\n      return (<div style={{display:"none"}}></div>)\n    }\n  }\n})';
      return '"use strict";\n\nvar React = require("react");\n\nvar _require = require("ysp-custom-components"),\n    MainTable = _require.MainTable;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.content && data.content.length > 0) {\n      return React.createElement(MainTable, { customData: data.content, customHandler: this.props.customHandler, titleText: data.title, buttonText: "\\u9009\\u62E9\\u5B57\\u6BB5", compentName: "table2", displaySwitch: false, tableIcon: true, rowsState: data.rowsState, hideSelf: true });\n    } else {\n      return React.createElement("div", { style: { display: "none" } });\n    }\n  }\n});';
    },

    getData_control109_2SJF5F: function (elem) {
      if (elem) {
        var data = {};data.curMenu = '';data.menuLi = [];var links = elem.querySelectorAll('a');data.curMenu = '返回个贷首页';if ($(elem).children('tbody').children('tr').length > 0) {
          $(elem).children('tbody').children('tr').each(function (i, tr) {
            data.menuLi.push(tr.textContent.trim());
          });
        }return data;
      } else {
        return '';
      }
    },
    doAction_uiControl108_NVPRL1: function (data, elem) {
      if (data.eventType === 'click') {
        var idx = parseInt(data.dataCustom);$(elem).children('tbody').children('tr').eq(idx).find('a')[0].click();
      }if (data.eventType === 'refresh') {
        elem.ownerDocument.defaultView.parent.frames["businessfrm"].location.reload();
      }if (data.eventType === 'backToList') {
        if ($(elem).prev('.trTitle').length > 0 && $(elem).prev('.trTitle').find('a').length > 0) {
          $(elem).prev('.trTitle').find('a')[0].click();
        }
      }
    },
    getTemplate_uiControl108_NVPRL1: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'click\',\n        data: e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  clickToRefresh: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'refresh\'\n      })\n    }\n  },\n  menuClick: function(e){\n    var target = e.target;\n    if(/icon/.test(target.className)){ // \u5224\u65AD\u5F53\u524Dtarget\u662F\u5426\u4E3Abars\u7684icon\uFF0C\u662F\uFF0C\u5219\u8FDB\u5165\u6B64\u64CD\u4F5C\n      target.parentElement.nextElementSibling.style.display = target.parentElement.nextElementSibling.style.display!=\'none\'?\'none\':\'\'; // \u6309\u7167\u7ED3\u6784\uFF0C\u627E\u5230menus\uFF0C\u5224\u65ADmenus\u5F53\u524D\u4E3A\u9690\u85CF\u8FD8\u662F\u663E\u793A\uFF0C\u7136\u540E\u53D6\u53CD\n    }\n  },\n  backToList: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'backToList\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data !== \'\'){\n      var menus = data.menuLi.map(function(menu,i){ // \u6E32\u67D3\u51FA\u6BCF\u4E00\u6761menu\n        return (<div className=\'menu\' data-index={i} onClick={me.handleClick}>{menu}</div>)\n      })\n      return (\n        <div className=\'menuList\' onClick={me.menuClick}>\n          <div className=\'header\'>\n            <span className=\'icon icon-left\' onClick={me.backToList}>{data.curMenu}</span>\n            <span className=\'refreshBtn\' onClick={me.clickToRefresh}></span>\n          </div>\n        </div>\n      )\n    }else {\n\t\t\treturn (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  clickToRefresh: function clickToRefresh(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'refresh'\n      });\n    }\n  },\n  menuClick: function menuClick(e) {\n    var target = e.target;\n    if (/icon/.test(target.className)) {\n      // \u5224\u65AD\u5F53\u524Dtarget\u662F\u5426\u4E3Abars\u7684icon\uFF0C\u662F\uFF0C\u5219\u8FDB\u5165\u6B64\u64CD\u4F5C\n      target.parentElement.nextElementSibling.style.display = target.parentElement.nextElementSibling.style.display != 'none' ? 'none' : ''; // \u6309\u7167\u7ED3\u6784\uFF0C\u627E\u5230menus\uFF0C\u5224\u65ADmenus\u5F53\u524D\u4E3A\u9690\u85CF\u8FD8\u662F\u663E\u793A\uFF0C\u7136\u540E\u53D6\u53CD\n    }\n  },\n  backToList: function backToList(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'backToList'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== '') {\n      var menus = data.menuLi.map(function (menu, i) {\n        // \u6E32\u67D3\u51FA\u6BCF\u4E00\u6761menu\n        return React.createElement(\n          'div',\n          { className: 'menu', 'data-index': i, onClick: me.handleClick },\n          menu\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'menuList', onClick: me.menuClick },\n        React.createElement(\n          'div',\n          { className: 'header' },\n          React.createElement(\n            'span',\n            { className: 'icon icon-left', onClick: me.backToList },\n            data.curMenu\n          ),\n          React.createElement('span', { className: 'refreshBtn', onClick: me.clickToRefresh })\n        )\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    }
  });
})(window, ysp);