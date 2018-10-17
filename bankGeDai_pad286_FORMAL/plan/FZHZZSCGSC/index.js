(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control15_b9DA23: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return "";
      }
    },
    doAction_uiControl11_4BIHAm: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom);$(elem).children('tbody').children('tr').eq(idx).find('a')[0].click();
      }
    },
    getTemplate_uiControl11_4BIHAm: function () {
      var selfTemplate = "var React = require('react');\nvar {MenuList} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n});\n";
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control17_yEaifT: function (elem) {
      if (elem) {
        var data = {};data.menus = [];if ($(elem).children('tbody').children('tr').children('td').length > 0) {
          $(elem).children('tbody').children('tr').children('td').each(function (i, td) {
            if (/ding/.test(td.getAttribute('background'))) {
              data.curMenu = i;
            }data.menus.push(td.textContent.trim());
          });
        }return data;
      }return '';
    },
    doAction_uiControl12_KQenmH: function (data, elem) {},
    getTemplate_uiControl12_KQenmH: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {InboxMenus} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<InboxMenus customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    InboxMenus = _require.InboxMenus;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(InboxMenus, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    }
  });
})(window, ysp);