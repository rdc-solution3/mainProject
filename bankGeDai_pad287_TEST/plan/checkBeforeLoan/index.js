(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control47_xuOBd7: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return "";
      }
    },
    doAction_uiControl36_1nAeF7: function (data, elem) {
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
    getTemplate_uiControl36_1nAeF7: function () {
      var selfTemplate = "var React = require('react');\nvar {MenuList} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control48_76Kl0V: function (elem) {
      var data = [];if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        $(elem).children('input[type="button"]').each(function (i, btn) {
          data.push(btn.value);
        });
      }return data;
    },
    doAction_uiControl37_ZvOv1F: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = data.dataCustom;console.log(idx);$(elem).find('input[type="button"]').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl37_ZvOv1F: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {LoanBottomBtn} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<LoanBottomBtn customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    LoanBottomBtn = _require.LoanBottomBtn;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(LoanBottomBtn, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control52_MdtLgI: function (elem) {
      if (elem && elem.localName == 'table') {
        var data = {};if (elem.querySelector('.titlebar')) {
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }data.thead = [];data.state = [];data.tbody = [];if ($(elem).children('tbody').children('tr.table-title:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr.table-title:visible').children('td:visible').each(function (i, td) {
            data.thead.push(td.textContent.trim());
          });
        }if ($(elem).children('tbody').children('tr[onclick]:visible').children('td:visible').length > 0) {
          $(elem).children('tbody').children('tr[onclick]:visible').each(function (i, tr) {
            var trs = [];data.state.push(tr.bgColor);if ($(tr).children('td:visible').length > 0) {
              $(tr).children('td:visible').each(function (i, td) {
                if (td.querySelectorAll('input[type="button"]').length == 1) {
                  trs.push({ type: 'button', length: 1, value: td.querySelector('input[type="button"]').value });
                } else if (td.querySelectorAll('input[type="button"]').length == 2) {
                  trs.push({ type: 'button', length: 2, value: [td.querySelectorAll('input[type="button"]')[0].value, td.querySelectorAll('input')[1].value] });
                } else {
                  trs.push({ type: 'text', length: 1, value: td.textContent.trim() });
                }
              });
            }data.tbody.push(trs);
          });
        }return data;
      }return '';
    },
    doAction_uiControl39_Cvsr8t: function (data, elem) {
      if (data.eventType === 'btn1Click') {
        var tri = parseInt(data.dataCustom[0]);var btni = parseInt(data.dataCustom[1]);$(elem).children('tbody').children('tr[onclick]:visible').eq(tri).find('td:visible').eq(btni).find('input[type="button"]')[0].click();
      }if (data.eventType == 'btn2Click') {
        var tri = parseInt(data.dataCustom[0]);var btni = parseInt(data.dataCustom[1]); // if (btni === 1) {
        //   yspUser.openWindow();
        // } else {
        // if (btni !== 1)
        $(elem).children('tbody').children('tr[onclick]:visible').eq(tri).find('td:visible').eq(3).find('input[type="button"]').eq(btni)[0].click(); // }
        // debugger;
      }
    },
    getTemplate_uiControl39_Cvsr8t: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'btn1Click\',\n        data: [e.target.getAttribute(\'data-tri\'),e.target.getAttribute(\'data-index\')]\n      })\n    }\n  },\n  handleClick_2: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'btn2Click\',\n        data: [e.target.getAttribute(\'data-tri\'),e.target.getAttribute(\'data-index\')]\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data!==\'\'){\n      if(data.tbody && data.thead){\n        if(data.thead.length > 0){\n          var tableHead = data.thead.map(function(th,i){\n            return (\n            \t<th>{th}</th>\n            )\n          })\n          if(data.tbody.length > 0){\n            var tableList = data.tbody.map(function(tr,i){\n              var idx = i;\n              var tableLi = tr.map(function(td,i){\n                if(td.type == \'button\'){\n                  if(td.length == 1){\n                    return (\n                    \t<td><span className=\'btn_me\' data-tri={idx} data-index={i} onClick={me.handleClick}>{td.value}</span></td>\n                    )\n                  }else if(td.length === 2){\n                    var spans = td.value.map(function(span,i){\n                      return (<div className=\'btn_me\' data-tri={idx} data-index={i} onClick={me.handleClick_2}>{span}</div>)\n                    })\n                    return (\n                      <td>{spans}</td>\n                    )\n                  }\n                }else if(td.type === \'text\'){\n                  return (\n                    <td>\n                      {td.value}\n                    </td>\n                  )\n                }\n              })\n              return (\n                <tr>\n                  {tableLi}\n                </tr>\n              )\n            })\n          }\n        }\n      }else{\n        var tableHead = \'\u6682\u65E0\u6570\u636E\uFF01\';\n        var tableList = \'\';\n      }\n      return (\n        <div className=\'tableContainer\'>\n          <div className=\'StandardTable\'>\n            <table className=\'btnTable\'>\n              <thead><tr>{tableHead}</tr></thead>\n              <tbody>{tableList}</tbody>\n            </table>\n          </div>\n        </div>\n      )\n    }else{\n\t\t\treturn (<div className=\'disnone\'></div>)\n    }\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'btn1Click\',\n        data: [e.target.getAttribute(\'data-tri\'), e.target.getAttribute(\'data-index\')]\n      });\n    }\n  },\n  handleClick_2: function handleClick_2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'btn2Click\',\n        data: [e.target.getAttribute(\'data-tri\'), e.target.getAttribute(\'data-index\')]\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== \'\') {\n      if (data.tbody && data.thead) {\n        if (data.thead.length > 0) {\n          var tableHead = data.thead.map(function (th, i) {\n            return React.createElement(\n              \'th\',\n              null,\n              th\n            );\n          });\n          if (data.tbody.length > 0) {\n            var tableList = data.tbody.map(function (tr, i) {\n              var idx = i;\n              var tableLi = tr.map(function (td, i) {\n                if (td.type == \'button\') {\n                  if (td.length == 1) {\n                    return React.createElement(\n                      \'td\',\n                      null,\n                      React.createElement(\n                        \'span\',\n                        { className: \'btn_me\', \'data-tri\': idx, \'data-index\': i, onClick: me.handleClick },\n                        td.value\n                      )\n                    );\n                  } else if (td.length === 2) {\n                    var spans = td.value.map(function (span, i) {\n                      return React.createElement(\n                        \'div\',\n                        { className: \'btn_me\', \'data-tri\': idx, \'data-index\': i, onClick: me.handleClick_2 },\n                        span\n                      );\n                    });\n                    return React.createElement(\n                      \'td\',\n                      null,\n                      spans\n                    );\n                  }\n                } else if (td.type === \'text\') {\n                  return React.createElement(\n                    \'td\',\n                    null,\n                    td.value\n                  );\n                }\n              });\n              return React.createElement(\n                \'tr\',\n                null,\n                tableLi\n              );\n            });\n          }\n        }\n      } else {\n        var tableHead = \'\u6682\u65E0\u6570\u636E\uFF01\';\n        var tableList = \'\';\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'tableContainer\' },\n        React.createElement(\n          \'div\',\n          { className: \'StandardTable\' },\n          React.createElement(\n            \'table\',\n            { className: \'btnTable\' },\n            React.createElement(\n              \'thead\',\n              null,\n              React.createElement(\n                \'tr\',\n                null,\n                tableHead\n              )\n            ),\n            React.createElement(\n              \'tbody\',\n              null,\n              tableList\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control72_GDdrtn: function (elem) {
      if (elem) {
        var data = '贷前初审';return data;
      }return '';
    },
    doAction_uiControl67_Co1ddS: function (data, elem) {},
    getTemplate_uiControl67_Co1ddS: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {SideBar} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<SideBar customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    SideBar = _require.SideBar;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(SideBar, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control78_Ls9Igx: function (elem) {
      if (elem) {
        var data = {};if ($(elem).find('input[name="gainChkRes"]').length > 0) {
          data.btn = $(elem).find('input[name="gainChkRes"]')[0].value.trim();
        }if (elem.querySelectorAll('.RinghtTrYellow').length > 0 && elem.querySelectorAll('.RinghtTrword').length > 0 && elem.querySelectorAll('.RinghtTrword input,textarea').length > 0) {
          data.groups = [];$(elem).find('.RinghtTrYellow').each(function (i, td) {
            var value = '';var disabled = false;var readonly = false;if ($(elem).find('.RinghtTrword').eq(i).find('input:visible').length > 0) {
              value = $(elem).find('.RinghtTrword').eq(i).find('input:visible')[0].value.trim();disabled = $(elem).find('.RinghtTrword').eq(i).find('input:visible')[0].disabled;readonly = $(elem).find('.RinghtTrword').eq(i).find('input:visible')[0].readOnly;
            } else if ($(elem).find('.RinghtTrword').eq(i).find('textarea:visible').length > 0) {
              value = $(elem).find('.RinghtTrword').eq(i).find('textarea:visible')[0].value.trim();disabled = $(elem).find('.RinghtTrword').eq(i).find('textarea:visible')[0].disabled;readonly = $(elem).find('.RinghtTrword').eq(i).find('textarea:visible')[0].readOnly;
            }data.groups.push({ key: td.textContent.trim(), value: value, disabled: disabled, readonly: readonly });
          });
        }return data;
      }return '';
    },
    doAction_uiControl79_PkbzfT: function (data, elem) {
      if (data.eventType === 'click') {
        $(elem).find('input[name="gainChkRes"]')[0].click();ysp.appMain.showLoading();
      }if (data.eventType === 'inputChange') {
        var idx = parseInt(data.dataCustom[0]);var val = data.dataCustom[1];if (idx === 0) {
          elem.dispatchEvent(new Event('focus'));elem.querySelector('#CHK_INFO').value = val;elem.dispatchEvent(new Event('change'));elem.dispatchEvent(new Event('blur'));
        } else if (idx === 1) {
          elem.dispatchEvent(new Event('focus'));elem.querySelector('textarea#CHK_DESC').value = val;elem.dispatchEvent(new Event('change'));elem.dispatchEvent(new Event('blur'));
        }
      }
    },
    getTemplate_uiControl79_PkbzfT: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'click\'\n      })\n    }\n  },\n  handleChange: function(e){\n    var handler = this.props.customHandler;\n    if(e.target){\n      if(handler){\n        handler({\n          eventType: \'inputChange\',\n          data: [e.target.getAttribute(\'data-index\'),e.target.value]\n        })\n      }\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data !== \'\' && data.btn && data.groups){\n      var groups = data.groups.map(function(grp,i){\n        return (\n        \t<div className=\'assessGrp\'>\n          \t<span className=\'key\'>{grp.key}</span>\n            <span className=\'value\'>\n              <AInput placeholder=\'\u672A\u586B\u5199\' value={grp.value} type=\'text\' data-index={i} disabled={grp.disabled} readOnly={grp.readonly} onBlur={me.handleChange}/>\n            </span>\n          </div>\n        )\n      })\n      return (\n        <div className=\'getInternalAssess\'>\n\t\t\t\t\t<span onClick={this.handleClick}>{data.btn}</span>\n          <div className=\'assessResultCard\'>{groups}</div>\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  handleChange: function handleChange(e) {\n    var handler = this.props.customHandler;\n    if (e.target) {\n      if (handler) {\n        handler({\n          eventType: \'inputChange\',\n          data: [e.target.getAttribute(\'data-index\'), e.target.value]\n        });\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== \'\' && data.btn && data.groups) {\n      var groups = data.groups.map(function (grp, i) {\n        return React.createElement(\n          \'div\',\n          { className: \'assessGrp\' },\n          React.createElement(\n            \'span\',\n            { className: \'key\' },\n            grp.key\n          ),\n          React.createElement(\n            \'span\',\n            { className: \'value\' },\n            React.createElement(AInput, { placeholder: \'\\u672A\\u586B\\u5199\', value: grp.value, type: \'text\', \'data-index\': i, disabled: grp.disabled, readOnly: grp.readonly, onBlur: me.handleChange })\n          )\n        );\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'getInternalAssess\' },\n        React.createElement(\n          \'span\',\n          { onClick: this.handleClick },\n          data.btn\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'assessResultCard\' },\n          groups\n        )\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control93_TS6IPA: function (elem) {
      if (elem) {
        return elem.textContent.trim();
      }return '';
    },
    doAction_uiControl96_oHKkbT: function (data, elem) {},
    getTemplate_uiControl96_oHKkbT: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== \'\'){\n      return (\n        <div className=\'loanerCardTitle\'>\n          {data}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== \'\') {\n      return React.createElement(\n        \'div\',\n        { className: \'loanerCardTitle\' },\n        data\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    }
  });
})(window, ysp);