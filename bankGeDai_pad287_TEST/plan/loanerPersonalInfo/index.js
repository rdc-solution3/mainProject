(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control59_nUGOTo: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return "";
      }
    },
    doAction_uiControl48_Jv6Uab: function (data, elem) {
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
    getTemplate_uiControl48_Jv6Uab: function () {
      var selfTemplate = "var React = require('react');\nvar {MenuList} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control58_Vk9XA6: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl47_APJcg5: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow:visible').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl47_APJcg5: function () {
      var selfTemplate = "var React = require('react');\nvar {MainCard} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler} scrollTable={true} />)\n  }\n});";
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler, scrollTable: true });\n  }\n});';
    },
    getData_control60_7bBtEs: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl49_otylCP: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow:visible').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl49_otylCP: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control61_1ZQ9bL: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl50_6EKGTH: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow:visible').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl50_6EKGTH: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control62_bRTTD4: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl51_xN8CQN: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl51_xN8CQN: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control63_v5JrJH: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl52_SRyNBf: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow:visible').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl52_SRyNBf: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control64_zXwoWo: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl53_ZrTeTD: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow:visible').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl53_ZrTeTD: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control65_SVTcdm: function (elem) {
      if (elem) {
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl54_l2avN5: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.dispatchEvent(new Event('change'));el.value = value;
      }
    },
    getTemplate_uiControl54_l2avN5: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },

    getData_control74_mzVVhp: function (elem) {
      if (elem) {
        var data = '申请人信息确认';return data;
      }return '';
    },
    doAction_uiControl73_1biLue: function (data, elem) {},
    getTemplate_uiControl73_1biLue: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {SideBar} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<SideBar customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    SideBar = _require.SideBar;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(SideBar, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control4_0LJEBH: function (elem) {
      if (elem) {
        var data = {};data.titles = [];data.curTitle = '借款人信息';if (elem.querySelectorAll('.titlebar').length > 0) {
          $(elem).find('.titlebar:visible').each(function (i, title) {
            data.titles.push(title.textContent.trim());
          });
        }return data;
      }return '';
    },
    doAction_uiControl16_uaP1T4: function (data, elem) {},
    getTemplate_uiControl16_uaP1T4: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount: function(){\n    var _this = this;\n    var refs = _this.refs[\'infoScrollTitle\'];\n    if(refs && refs.ownerDocument.querySelector(\'.loanerInfoRight\')){\n  \t\tvar titles = refs.querySelectorAll(\'.title\');\n      var scrollParent = refs.ownerDocument.querySelector(\'.loanerInfoRight\');\n      scrollParent.onscroll = function(){\n        floor(titles,scrollParent);\n      }\n      function floor(titles,contentParent){\n        var contents = contentParent.querySelectorAll(\'.mainCard .groups\');\n        var scrollTop = parseInt(contentParent.scrollTop)+200;\n        for(var i = 0;i < contents.length;i++){\n          if(i == contents.length-1){\n            if(scrollTop >= contents[i].offsetTop){\n              $(titles[i]).addClass(\'curTitle\');\n              $(titles[i]).siblings(\'.curTitle\').removeClass(\'curTitle\');\n            }\n          }\n          else{\n            if(scrollTop >= contents[i].offsetTop && scrollTop < contents[i+1].offsetTop){\n              $(titles[i]).addClass(\'curTitle\');\n              $(titles[i]).siblings(\'.curTitle\').removeClass(\'curTitle\');\n            }\n          }\n        }\n      }\n    }\n  },\n  componentDidUpdate: function(){\n    var _this = this;\n    var refs = _this.refs[\'infoScrollTitle\'];\n  \tvar titles = refs.querySelectorAll(\'.title\');\n    if(refs && refs.ownerDocument.querySelector(\'.loanerInfoRight\')){\n      var scrollParent = refs.ownerDocument.querySelector(\'.loanerInfoRight\');\n      scrollParent.onscroll = function(){\n        floor(titles,scrollParent);\n      }\n      function floor(titles,contentParent){\n        var contents = contentParent.querySelectorAll(\'.mainCard .groups\');\n        var scrollTop = parseInt(contentParent.scrollTop)+200;\n        for(var i = 0;i < contents.length;i++){\n          if(i == contents.length-1){\n            if(scrollTop >= contents[i].offsetTop){\n              $(titles[i]).addClass(\'curTitle\');\n              $(titles[i]).siblings(\'.curTitle\').removeClass(\'curTitle\');\n            }\n          }\n          else{\n            if(scrollTop >= contents[i].offsetTop && scrollTop < contents[i+1].offsetTop){\n              $(titles[i]).addClass(\'curTitle\');\n              $(titles[i]).siblings(\'.curTitle\').removeClass(\'curTitle\');\n            }\n          }\n        }\n      }\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== \'\' && data.titles && data.titles.length > 0){\n      var titles = data.titles.map(function(title,i){\n        return (\n          <div className={\'title\'+(title==data.curTitle?\' curTitle\':\'\')}>\n          \t{title}\n          </div>\n        )\n      })\n      return (\n        <div className=\'clientInfo_titles\' ref=\'infoScrollTitle\'>\n          {titles}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n    var refs = _this.refs[\'infoScrollTitle\'];\n    if (refs && refs.ownerDocument.querySelector(\'.loanerInfoRight\')) {\n      var floor = function floor(titles, contentParent) {\n        var contents = contentParent.querySelectorAll(\'.mainCard .groups\');\n        var scrollTop = parseInt(contentParent.scrollTop) + 200;\n        for (var i = 0; i < contents.length; i++) {\n          if (i == contents.length - 1) {\n            if (scrollTop >= contents[i].offsetTop) {\n              $(titles[i]).addClass(\'curTitle\');\n              $(titles[i]).siblings(\'.curTitle\').removeClass(\'curTitle\');\n            }\n          } else {\n            if (scrollTop >= contents[i].offsetTop && scrollTop < contents[i + 1].offsetTop) {\n              $(titles[i]).addClass(\'curTitle\');\n              $(titles[i]).siblings(\'.curTitle\').removeClass(\'curTitle\');\n            }\n          }\n        }\n      };\n\n      var titles = refs.querySelectorAll(\'.title\');\n      var scrollParent = refs.ownerDocument.querySelector(\'.loanerInfoRight\');\n      scrollParent.onscroll = function () {\n        floor(titles, scrollParent);\n      };\n    }\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    var _this = this;\n    var refs = _this.refs[\'infoScrollTitle\'];\n    var titles = refs.querySelectorAll(\'.title\');\n    if (refs && refs.ownerDocument.querySelector(\'.loanerInfoRight\')) {\n      var floor = function floor(titles, contentParent) {\n        var contents = contentParent.querySelectorAll(\'.mainCard .groups\');\n        var scrollTop = parseInt(contentParent.scrollTop) + 200;\n        for (var i = 0; i < contents.length; i++) {\n          if (i == contents.length - 1) {\n            if (scrollTop >= contents[i].offsetTop) {\n              $(titles[i]).addClass(\'curTitle\');\n              $(titles[i]).siblings(\'.curTitle\').removeClass(\'curTitle\');\n            }\n          } else {\n            if (scrollTop >= contents[i].offsetTop && scrollTop < contents[i + 1].offsetTop) {\n              $(titles[i]).addClass(\'curTitle\');\n              $(titles[i]).siblings(\'.curTitle\').removeClass(\'curTitle\');\n            }\n          }\n        }\n      };\n\n      var scrollParent = refs.ownerDocument.querySelector(\'.loanerInfoRight\');\n      scrollParent.onscroll = function () {\n        floor(titles, scrollParent);\n      };\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== \'\' && data.titles && data.titles.length > 0) {\n      var titles = data.titles.map(function (title, i) {\n        return React.createElement(\n          \'div\',\n          { className: \'title\' + (title == data.curTitle ? \' curTitle\' : \'\') },\n          title\n        );\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'clientInfo_titles\', ref: \'infoScrollTitle\' },\n        titles\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control24_nrk0ym: function (elem) {
      if (elem) {
        return elem.textContent.trim();
      }return '';
    },
    doAction_uiControl22_TmWRL6: function (data, elem) {},
    getTemplate_uiControl22_TmWRL6: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data !== \'\'){\n      return (\n        <div className=\'loanerCardTitle\'>\n          {data}\n        </div>\n      )\n    }else{\n      return (<div className=\'disnone\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data !== \'\') {\n      return React.createElement(\n        \'div\',\n        { className: \'loanerCardTitle\' },\n        data\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control113_AcBClS: function (elem) {
      var data = [];if (elem.id === 'backBtn') {
        elem = elem.parentElement;
      }if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        $(elem).children('input[type="button"]').each(function (i, btn) {
          data.push(btn.value);
        });
      }return data;
    },
    doAction_uiControl116_uTTnDx: function (data, elem) {
      if (data.eventType == 'click') {
        elem = elem.parentElement;var idx = data.dataCustom;console.log(idx);$(elem).find('input[type="button"]').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl116_uTTnDx: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {LoanBottomBtn} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<LoanBottomBtn customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    LoanBottomBtn = _require.LoanBottomBtn;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(LoanBottomBtn, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    }
  });
})(window, ysp);