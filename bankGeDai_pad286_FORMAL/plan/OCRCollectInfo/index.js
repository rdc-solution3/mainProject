(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control54_hNCx5Q: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return "";
      }
    },
    doAction_uiControl41_kMRuax: function (data, elem) {
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
    getTemplate_uiControl41_kMRuax: function () {
      var selfTemplate = "var React = require('react');\nvar {MenuList} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control55_ITP9Fc: function (elem) {
      var data = [];if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        $(elem).children('input[type="button"]').each(function (i, btn) {
          data.push(btn.value);
        });
      }return data;
    },
    doAction_uiControl43_k30oZ9: function (data, elem) {
      if (data.eventType === 'click') {
        var idx = parseInt(data.dataCustom);$(elem).find('input[type="button"]').eq(idx)[0].click();
      } else if (data.eventType === 'imgSys') {
        /**
        	<root>
            <business appid="CREDIT" tradecode="JKDS" optiontype="1" tradedate="20171223" tradeuser="cot" objname="XYZ" objpart="XYZ_PART" user="admin" pwd="111" objtoken="" isenc="0" organ="" ip="10.1.8.76" port="9080" dsname="">
                <node theme="GRKH" batchid="">
                    <bsinf attr="BUSI_SERIAL_NO" disp="批次号" isquery="1">MMS201812230078804222</bsinf>
                    <bsinf attr="CREATEDATE" disp="日期" isquery="1">20171223</bsinf>
                </node>
            </business>
        </root>
        <root>
          <business appid="CREDIT" tradecode="JKDS" optiontype="1" tradedate="20171206" tradeuser="cot" objname="GRXD" objpart="GRXD_PART" user="admin" pwd="111" objtoken="" isenc="0" organ="" ip="10.1.8.76" port="9080" dsname="">
              <node theme="GRKH" batchid="">
                  <bsinf attr="BUSI_SERIAL_NO" disp="批次号" isquery="1">MMS20171206111111111</bsinf>
                  <bsinf attr="BUSI_START_DATE" disp="日期" isquery="1">20171206</bsinf>
              </node>
          </business>
        </root>
        <xml version="1.0" encoding="UTF-8">
        <root>
          <business appid="CREDIT" tradecode="JKDS" optiontype="1" tradedate="20180317" tradeuser="cot" objname="GRXD" objpart="GRXD_PART" user="admin" pwd="111" objtoken="" isenc="0" organ="" ip="10.1.8.76" port="9080" dsname="">
            <node theme="GRKH" batchid="">
              <bsinf attr="BUSI_SERIAL_NO" disp="批次号" isquery="1">622827199301060026133214CLOUD</bsinf>
              <bsinf attr="BUSI_START_DATE" disp="日期" isquery="1">20180317</bsinf>
            </node>
          </business>
        </root>
        </xml>
        <root>
          <business appid="CREDIT" tradecode="JKDS" optiontype="1" tradedate="20180317" tradeuser="cot" objname="GRXD" objpart="GRXD_PART" user="admin" pwd="111" objtoken="" isenc="0" organ="" ip="10.1.8.76" port="9080" dsname="">
            <node theme="GRKH" batchid="" version="0">
              <bsinf attr="BUSI_SERIAL_NO" disp="批次号" isquery="1">622827199301060026133214CLOUD</bsinf>
              <bsinf attr="BUSI_START_DATE" disp="日期" isquery="1">20180317</bsinf>
            </node>
          </business>
        </root>
        生产环境IP：10.1.8.76
        测试环境&UAT-IP：10.1.8.76
        // alert(seriaNo + '+' + queryTime);
        // console.log(tradeInfoArg);
        获取——tradedate,批次号，日期**/var seriaNo = elem.querySelector('#seriaNo').value;var queryTime = elem.querySelector('#queryTime').value;var tradeInfoArg = '<root><business appid="CREDIT" tradecode="JKDS" optiontype="1" tradedate="' + queryTime + '" tradeuser="cot" objname="GRXD" objpart="GRXD_PART" user="admin" pwd="111" objtoken="" isenc="0" organ="" ip="10.1.8.76" port="9080" dsname=""><node theme="GRKH" batchid="" version="0"><bsinf attr="BUSI_SERIAL_NO" disp="批次号" isquery="1">' + seriaNo + '</bsinf><bsinf attr="BUSI_START_DATE" disp="日期" isquery="1">' + queryTime + '</bsinf></node></business></root>';yspCheckIn.openImageSys('CREDIT', 'JKDS', tradeInfoArg);
      }
    },
    getTemplate_uiControl43_k30oZ9: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onclick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'click\',\n        data: e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  imgSysClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'imgSys\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data && data.length > 0){\n      var btnGrp = data.map(function(btn,i){\n        return (<span className=\'btn btn-block btn-primary\' data-index={i} onClick={_this.onclick}>{btn}</span>)\n      })\n      return (\n        <div className=\'loanBtns loanBottomBtn btnWithIcon\'>\n          <span className=\'btn btn-block btn-primary iconImgBtn\' onClick={_this.imgSysClick} data-index=\'3\'>\u91C7\u96C6\u5F71\u50CF</span>\n          {btnGrp}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclick: function onclick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  imgSysClick: function imgSysClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'imgSys'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data.length > 0) {\n      var btnGrp = data.map(function (btn, i) {\n        return React.createElement(\n          'span',\n          { className: 'btn btn-block btn-primary', 'data-index': i, onClick: _this.onclick },\n          btn\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'loanBtns loanBottomBtn btnWithIcon' },\n        React.createElement(\n          'span',\n          { className: 'btn btn-block btn-primary iconImgBtn', onClick: _this.imgSysClick, 'data-index': '3' },\n          '\\u91C7\\u96C6\\u5F71\\u50CF'\n        ),\n        btnGrp\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },

    getData_control57_MPSWKT: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector('.titlebar')) {
          data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        }if (elem.querySelectorAll('.titlebarHUI').length > 0) {
          data.thead = [];$(elem).find('.titlebarHUI').each(function (i, th) {
            data.thead.push(th.textContent.trim());
          });if ($(elem).children('tbody').children('tr:visible').length > 2) {
            data.tbody = [];$(elem).children('tbody').children('tr:visible').each(function (i, tr) {
              if (i > 1 && i !== $(elem).children('tbody').children('tr:visible').length - 1) {
                var tds = [];if ($(tr).children('td:visible').length > 0) {
                  $(tr).children('td:visible').each(function (i, td) {
                    if (i == 1) {
                      tds.push({ value: $(td).find('input[type="button"]')[0].value, disabled: $(td).find('input[type="button"]')[0].disabled, readonly: $(td).find('input[type="button"]')[0].readOnly }); // tds.push($(td).find('input[type="button"]')[0].value);
                    } else {
                      tds.push(td.textContent.trim());
                    }
                  });data.tbody.push(tds);
                }
              }
            });
          }
        }return data;
      }return '';
    },
    doAction_uiControl45_6KwLda: function (data, elem) {
      if (data.eventType == 'checkClick') {
        var idx = parseInt(data.dataCustom);var el = $(elem).children('tbody').find('input[type="button"]').eq(idx)[0];if (/已采集/.test(el.value)) {
          el.click();
        } else {
          try {
            yspCheckIn.openCamera('setImg' + idx + '()');
          } catch (e) {} // if (idx === 0) {
          //   yspCheckIn.openCamera('setImg0()');
          // } else if (idx === 1) {
          //   // alert(idx);
          //   yspCheckIn.openCamera('setImg1()');
          // } else if (idx === 2) {
          //   yspCheckIn.openCamera('setImg2()');
          // } else if (idx === 3) {
          //   yspCheckIn.openCamera('setImg3()');
          // } else if (idx === 4) {
          //   yspCheckIn.openCamera('setImg4()');
          // }
        }
      }
    },
    getTemplate_uiControl45_6KwLda: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'checkClick\',\n        data: e.target.parentElement.getAttribute(\'data-index\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data!==\'\'){\n      if(data.tbody && data.thead){\n        if(data.thead.length > 0){\n          var tableHead = data.thead.map(function(th,i){\n            return (\n            \t<th>{th}</th>\n            )\n          })\n          if(data.tbody.length > 0){\n            var tableList = data.tbody.map(function(tr,i){\n              var tableLi = tr.map(function(td,i){\n                return (\n                  <td onClick={(i==1 && !td.disabled && !td.readonly)?me.handleClick:\'\'} data-gray={(td.disabled|td.readonly)?\'gray\':\'\'}>\n                    {td.value||td}\n                  </td>\n                )\n              })\n              return (\n                <tr data-index={i}>\n                  {tableLi}\n                </tr>\n              )\n            })\n          }\n        }\n      }else{\n        var tableHead = \'\u6682\u65E0\u6570\u636E\uFF01\';\n        var tableList = \'\';\n      }\n      return (\n        <div className=\'tableContainer\'>\n          <div className=\'StandardTable\'>\n            <table className=\'infoCollect\'>\n              <thead><tr>{tableHead}</tr></thead>\n              <tbody>{tableList}</tbody>\n            </table>\n          </div>\n        </div>\n      )\n    }else{\n\t\t\treturn (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'checkClick\',\n        data: e.target.parentElement.getAttribute(\'data-index\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== \'\') {\n      if (data.tbody && data.thead) {\n        if (data.thead.length > 0) {\n          var tableHead = data.thead.map(function (th, i) {\n            return React.createElement(\n              \'th\',\n              null,\n              th\n            );\n          });\n          if (data.tbody.length > 0) {\n            var tableList = data.tbody.map(function (tr, i) {\n              var tableLi = tr.map(function (td, i) {\n                return React.createElement(\n                  \'td\',\n                  { onClick: i == 1 && !td.disabled && !td.readonly ? me.handleClick : \'\', \'data-gray\': td.disabled | td.readonly ? \'gray\' : \'\' },\n                  td.value || td\n                );\n              });\n              return React.createElement(\n                \'tr\',\n                { \'data-index\': i },\n                tableLi\n              );\n            });\n          }\n        }\n      } else {\n        var tableHead = \'\u6682\u65E0\u6570\u636E\uFF01\';\n        var tableList = \'\';\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'tableContainer\' },\n        React.createElement(\n          \'div\',\n          { className: \'StandardTable\' },\n          React.createElement(\n            \'table\',\n            { className: \'infoCollect\' },\n            React.createElement(\n              \'thead\',\n              null,\n              React.createElement(\n                \'tr\',\n                null,\n                tableHead\n              )\n            ),\n            React.createElement(\n              \'tbody\',\n              null,\n              tableList\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control73_PxI1c9: function (elem) {
      if (elem) {
        var data = '采集客户资料';return data;
      }return '';
    },
    doAction_uiControl70_vEa5h8: function (data, elem) {},
    getTemplate_uiControl70_vEa5h8: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {SideBar} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<SideBar customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    SideBar = _require.SideBar;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(SideBar, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control94_3SaiRW: function (elem) {
      if (elem) {
        return elem.textContent.trim();
      }return '';
    },
    doAction_uiControl97_QSaffg: function (data, elem) {},
    getTemplate_uiControl97_QSaffg: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== \'\'){\n      return (\n        <div className=\'loanerCardTitle\'>\n          {data}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== \'\') {\n      return React.createElement(\n        \'div\',\n        { className: \'loanerCardTitle\' },\n        data\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    }
  });
})(window, ysp);