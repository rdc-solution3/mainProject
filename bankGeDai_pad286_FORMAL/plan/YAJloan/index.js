(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control5_xyDpy6: function (elem) {
      var data = [];if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        $(elem).children('input[type="button"]').each(function (i, btn) {
          data.push(btn.value);
        });
      }return data;
    },
    doAction_uiControl6_CneNAS: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = data.dataCustom;var btnElem = $(elem).find('input[type="button"]').eq(idx)[0];if (/GainPaym/.test(btnElem.getAttribute("onclick"))) {
          btnElem.ownerDocument.defaultView.GainPaym("resultDetail");
        } else {
          btnElem.click();
        }
      }
    },
    getTemplate_uiControl6_CneNAS: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {LoanBottomBtn} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<LoanBottomBtn customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    LoanBottomBtn = _require.LoanBottomBtn;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(LoanBottomBtn, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control7_TILSBG: function (elem) {
      var data = {};data.content = [];data.rowsState = [];if ($(elem).children('tbody').children('tr').eq(1).children('.titlebarHUI').length > 0) {
        var thead = [];$(elem).children('tbody').children('tr').eq(1).children('.titlebarHUI').each(function (i, th) {
          thead.push(th.textContent.trim());
        });data.content.push(thead);
      }if ($(elem).children('tbody').children('tr').length > 2) {
        // var tbody = [];
        $(elem).children('tbody').children('tr').each(function (i, tr) {
          if (i > 1) {
            var tds = [];$(tr).children('td').each(function (i, td) {
              tds.push(td.textContent.trim());
            });data.content.push(tds);
          }
        });
      }return data;
    },
    doAction_uiControl8_7gvDit: function (data, elem) {},
    getTemplate_uiControl8_7gvDit: function () {
      var selfTemplate = 'var React=require("react");\nvar {MainTable}=require("ysp-custom-components");\nmodule.exports=React.createClass({\n\trender:function(){\n    var data=this.props.customData;\n    if(data && data.content && data.content.length>0){\n      return (<MainTable customData={data.content} customHandler={this.props.customHandler} titleText="" buttonText="\u9009\u62E9\u5B57\u6BB5" compentName="table1" displaySwitch={false} tableIcon={true} rowsState={data.rowsState} />)\n    }else{\n      return (<div style={{display:"none"}}></div>)\n    }\n  }\n})';
      return '"use strict";\n\nvar React = require("react");\n\nvar _require = require("ysp-custom-components"),\n    MainTable = _require.MainTable;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.content && data.content.length > 0) {\n      return React.createElement(MainTable, { customData: data.content, customHandler: this.props.customHandler, titleText: "", buttonText: "\\u9009\\u62E9\\u5B57\\u6BB5", compentName: "table1", displaySwitch: false, tableIcon: true, rowsState: data.rowsState });\n    } else {\n      return React.createElement("div", { style: { display: "none" } });\n    }\n  }\n});';
    },
    getData_undefined: function (elem) {
      var data = {};if (elem && $(elem).children('tbody').children('tr').eq(0).children('.titleBar').length > 0) {
        data;
      }return data;
    },
    doAction_: function (data, elem) {},
    getTemplate_: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      "\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~"\n    );\n  }\n});';
    },
    getData_control8_3xDP1b: function (elem) {
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
    doAction_uiControl9_OGqtkC: function (data, elem) {},
    getTemplate_uiControl9_OGqtkC: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data.sumTit && data.sumCont){\n        var sumCont = data.sumCont.map(function(cont,i){\n          return (\n          \t<span className=\'sumCont\'>\n            \t<input value={cont.inputVal} readOnly={cont.readOnly} type=\'text\'/>\n              {cont.sumTxt}\n            </span>\n          )\n        })\n      var summaryGrp = data.sumTit.map(function(tit,i){\n        return (\n        \t<div className=\'sumLi\'>\n          \t<span className=\'sumTit\'>{tit}</span>\n            {sumCont[i]}\n          </div>\n        )\n      })\n      return (\n        <div className=\'summaryTab\'>\n          {summaryGrp}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.sumTit && data.sumCont) {\n      var sumCont = data.sumCont.map(function (cont, i) {\n        return React.createElement(\n          \'span\',\n          { className: \'sumCont\' },\n          React.createElement(\'input\', { value: cont.inputVal, readOnly: cont.readOnly, type: \'text\' }),\n          cont.sumTxt\n        );\n      });\n      var summaryGrp = data.sumTit.map(function (tit, i) {\n        return React.createElement(\n          \'div\',\n          { className: \'sumLi\' },\n          React.createElement(\n            \'span\',\n            { className: \'sumTit\' },\n            tit\n          ),\n          sumCont[i]\n        );\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'summaryTab\' },\n        summaryGrp\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control16_XUOAKW: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return '';
      }
    },
    doAction_uiControl13_eP7UpA: function (data, elem) {
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
    getTemplate_uiControl13_eP7UpA: function () {
      var selfTemplate = '\nvar React = require(\'react\');\nvar {MenuList} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function(){\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n})';
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control38_JvG4M1: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl30_6qJe5P: function (data, elem) {
      // debugger;
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrword:visible').eq(idx)[0].children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.value = value;el.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl30_6qJe5P: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control56_JWKpLE: function (elem) {
      if (elem) {
        var data = '新增贷款信息';return data;
      }return '';
    },
    doAction_uiControl46_kin56I: function (data, elem) {},
    getTemplate_uiControl46_kin56I: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {SideBar} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<SideBar customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    SideBar = _require.SideBar;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(SideBar, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control91_Xe4taJ: function (elem) {
      if (elem) {
        return elem.textContent.trim();
      }return '';
    },
    doAction_uiControl89_6cIIk0: function (data, elem) {},
    getTemplate_uiControl89_6cIIk0: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== ''){\n      return (\n        <div className='loanerCardTitle'>\n          {data}\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== \'\') {\n      return React.createElement(\n        \'div\',\n        { className: \'loanerCardTitle\' },\n        data\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    }
  });
})(window, ysp);