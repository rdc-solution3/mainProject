(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control69_wZaIaE: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return "";
      }
    },
    doAction_uiControl57_TGLl1v: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom);$(elem).children('tbody').children('tr').eq(idx).find('a')[0].click();
      }
      if (data.eventType === 'refresh') {
        elem.ownerDocument.defaultView.parent.frames["businessfrm"].location.reload();
      }if (data.eventType === 'backToList') {
        if ($(elem).prev('.trTitle').length > 0 && $(elem).prev('.trTitle').find('a').length > 0) {
          $(elem).prev('.trTitle').find('a')[0].click();
        }
      }
    },
    getTemplate_uiControl57_TGLl1v: function () {
      var selfTemplate = "var React = require('react');\nvar {MenuList} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control128_SuLw0J: function (elem) {
      if (elem) {
        var data = '客户经理补录信息';return data;
      }return '';
    },
    doAction_uiControl132_NHvC15: function (data, elem) {},
    getTemplate_uiControl132_NHvC15: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {SideBar} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<SideBar customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    SideBar = _require.SideBar;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(SideBar, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control129_th4ALa: function (elem) {
      var data = [];if (elem.id === 'backBtn') {
        elem = elem.parentElement;
      }if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        $(elem).children('input[type="button"]').each(function (i, btn) {
          data.push(btn.value);
        });
      }return data;
    },
    doAction_uiControl134_4csoDn: function (data, elem) {
      if (data.eventType == 'click') {
        elem = elem.parentElement;var idx = parseInt(data.dataCustom); // if(idx !== 2)
        $(elem).find('input[type="button"]').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl134_4csoDn: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {LoanBottomBtn} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<LoanBottomBtn customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    LoanBottomBtn = _require.LoanBottomBtn;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(LoanBottomBtn, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control130_g4DsdB: function (elem) {
      if (elem) {
        return elem.textContent.trim();
      }return '';
    },
    doAction_uiControl135_DbxbN6: function (data, elem) {},
    getTemplate_uiControl135_DbxbN6: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== \'\'){\n      return (\n        <div className=\'loanerCardTitle\'>\n          {data}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== \'\') {\n      return React.createElement(\n        \'div\',\n        { className: \'loanerCardTitle\' },\n        data\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control131_S7k653: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl136_qwniwa: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.value = value;el.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl136_qwniwa: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control133_hRf50L: function (elem) {
      if (elem) {
        if ($(elem).find("#NOLIBRARYREASON:visible").length === 1) {
          if ($(elem).find("#ISLIBRARY:visible").length === 1 && $(elem).find("#ISLIBRARY:visible")[0].value !== "N") {
            $(elem).find("#NOLIBRARYREASON:visible").eq(0)[0].setAttribute("must", "false");
          }
        }return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl138_Do9qfR: function (data, elem) {
      if (data.dataCustom && data.dataCustom.length > 0) {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
          el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
        }if (data.eventType == 'optionClick') {
          el.value = value;el.dispatchEvent(new Event('change'));
        }
      }if (data.eventType === "newButtonClick") {
        elem.querySelector("#queryBtnYp").click();
      }
    },
    getTemplate_uiControl138_Do9qfR: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control134_HIfztU: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl139_qETutJ: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl139_qETutJ: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control150_738qil: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl159_3mZ3Wu: function (data, elem) {
      if (data.dataCustom && data.dataCustom.length > 0) {
        var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
          el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
        }if (data.eventType == 'optionClick') {
          el.dispatchEvent(new Event('change'));el.value = value;
        }
      } else {
        if (data.eventType === "newButtonClick") {
          elem.querySelector("#queryBtn2").click();
        }
      }
    },
    getTemplate_uiControl159_3mZ3Wu: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler} />)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    }
  });
})(window, ysp);