(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control39_L9NFoU: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return "";
      }
    },
    doAction_uiControl31_Ffyv0M: function (data, elem) {
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
    getTemplate_uiControl31_Ffyv0M: function () {
      var selfTemplate = "var React = require('react');\nvar {MenuList} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control2_pkEwFU: function (elem) {
      if (elem) {
        var data = {};if (elem.ownerDocument.querySelector('#curren-tstep')) {
          data.title = elem.ownerDocument.querySelector('#curren-tstep').textContent.trim();
        }data.content = [];data.rowsState = []; // if (elem.querySelector('.titlebar')) {
        //   data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
        // }
        if ($(elem).find('.titlebarHUI:visible').length > 0) {
          data.rowsState.push(false);var thead = [];$(elem).find('.titlebarHUI:visible').each(function (i, th) {
            thead.push(th.textContent.trim());
          });data.content.push(thead);
        }if ($(elem).children('tbody:visible').children('tr[onclick]:visible').length > 0) {
          var tds = [];$(elem).children('tbody:visible').children('tr[onclick]:visible').each(function (i, tr) {
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
    doAction_uiControl3_1bpAtA: function (data, elem) {
      if (data.eventType == 'checkClick') {
        var idx = parseInt(data.dataCustom) - 1;console.log(idx);$(elem).children('tbody').children('tr[onclick]:visible').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl3_1bpAtA: function () {
      var selfTemplate = 'var React=require("react");\nvar {MainTable}=require("ysp-custom-components");\nmodule.exports=React.createClass({\n\trender:function(){\n    var data=this.props.customData;\n    if(data && data.content && data.content.length>0){\n      return (<MainTable customData={data.content} customHandler={this.props.customHandler} titleText={data.title} buttonText="\u9009\u62E9\u5B57\u6BB5" compentName="table2" displaySwitch={true} tableIcon={false} rowsState={data.rowsState} />)\n    }else{\n      return (<div style={{display:"none"}}></div>)\n    }\n  }\n})';
      return '"use strict";\n\nvar React = require("react");\n\nvar _require = require("ysp-custom-components"),\n    MainTable = _require.MainTable;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.content && data.content.length > 0) {\n      return React.createElement(MainTable, { customData: data.content, customHandler: this.props.customHandler, titleText: data.title, buttonText: "\\u9009\\u62E9\\u5B57\\u6BB5", compentName: "table2", displaySwitch: true, tableIcon: false, rowsState: data.rowsState });\n    } else {\n      return React.createElement("div", { style: { display: "none" } });\n    }\n  }\n});';
    },
    getData_control6_gV0Ngc: function (elem) {
      var data = [];if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        $(elem).children('input[type="button"]').each(function (i, btn) {
          data.push(btn.value);
        });
      }return data;
    },
    doAction_uiControl7_8ULA7o: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = data.dataCustom;console.log(idx);$(elem).find('input[type="button"]').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl7_8ULA7o: function () {
      var selfTemplate = "var React = require('react');\nvar {LoanBottomBtn} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<LoanBottomBtn customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    LoanBottomBtn = _require.LoanBottomBtn;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(LoanBottomBtn, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control41_TpPG8A: function (elem) {
      var data = [];if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        $(elem).children('input[type="button"]').each(function (i, btn) {
          data.push({ value: btn.value, disabled: btn.disabled, readonly: btn.readOnly });
        });
      }return data;
    },
    doAction_uiControl32_2AaXMs: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = data.dataCustom;console.log(idx);$(elem).find('input[type="button"]').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl32_2AaXMs: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onclick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'click\',\n        data: e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data && data.length > 0){\n      var btnGrp = data.map(function(btn,i){\n        return (<span className={\'btn btn-block btn-primary\'} data-gray={(btn.disabled|btn.readonly)?\'gray\':\'\'} id={i==1?\'detail\':i==0?\'add\':\'delete\'} data-index={i} onClick={_this.onclick}>{btn.value}</span>)\n      })\n      return (\n        <div className=\'loanBtns\'>\n          {btnGrp}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onclick: function onclick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data.length > 0) {\n      var btnGrp = data.map(function (btn, i) {\n        return React.createElement(\n          \'span\',\n          { className: \'btn btn-block btn-primary\', \'data-gray\': btn.disabled | btn.readonly ? \'gray\' : \'\', id: i == 1 ? \'detail\' : i == 0 ? \'add\' : \'delete\', \'data-index\': i, onClick: _this.onclick },\n          btn.value\n        );\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'loanBtns\' },\n        btnGrp\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control3_RbOvA0: function (elem) {
      if (elem) {
        var data = '新增借款人信息';return data;
      }return '';
    },
    doAction_uiControl59_Zp1yHs: function (data, elem) {},
    getTemplate_uiControl59_Zp1yHs: function () {
      var selfTemplate = "var React = require('react');\nvar {SideBar} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<SideBar customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    SideBar = _require.SideBar;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(SideBar, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    }
  });
})(window, ysp);