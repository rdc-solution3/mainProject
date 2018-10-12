(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control114_3A0Hny: function (elem) {
      if (elem) {
        //alert('该功能未开发，敬请期待！');elem.ownerDocument.defaultView.close();
        return $(elem).children().children('font').text();
      }
    },
    doAction_uiControl118_Qx5Tgc: function (data, elem) {},
    getTemplate_uiControl118_Qx5Tgc: function () {
      var selfTemplate = "var React=require(\"react\");\nvar {PageTitle}=require(\"ysp-custom-components\");\nmodule.exports = React.createClass({\n  render: function() {\n    var title=this.props.customData;\n    return (\n      <PageTitle customData={title} customHandler={this.props.customHandler} />\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require(\"react\");\n\nvar _require = require(\"ysp-custom-components\"),\n    PageTitle = _require.PageTitle;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var title = this.props.customData;\n    return React.createElement(PageTitle, { customData: title, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control116_UVOs4c: function (elem) {
      if (elem) {
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl120_BDNhO6: function (data, elem) {
      if (data.eventType == 'handleBack') {
        elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl120_BDNhO6: function () {
      var selfTemplate = "var React=require(\"react\");\nvar {BackButton}=require(\"ysp-custom-components\");\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <BackButton customHandler={this.props.customHandler}/>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require(\"react\");\n\nvar _require = require(\"ysp-custom-components\"),\n    BackButton = _require.BackButton;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(BackButton, { customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control117_bi0oFA: function (elem) {
      if (elem) {
        return $(elem).children('b').eq(0).text();
      }
    },
    doAction_uiControl121_mT2pne: function (data, elem) {},
    getTemplate_uiControl121_mT2pne: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    return (\n      <div className='cbxxContent'>\n        <b>{data}</b><span>\u60A8\u597D\uFF01</span>\n        <p>\u73B0\u6709\u6587\u4EF6\u6EDE\u7559\u60A8\u5904\uFF0C\u5DF2\u5F71\u54CD\u6574\u4E2A\u6587\u4EF6\u6D41\u8F6C\u8FDB\u7A0B\uFF0C\u8BF7\u5C3D\u5FEB\u529E\u7406\uFF0C\u8C22\u8C22\uFF01</p>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'cbxxContent' },\n      React.createElement(\n        'b',\n        null,\n        data\n      ),\n      React.createElement(\n        'span',\n        null,\n        '\\u60A8\\u597D\\uFF01'\n      ),\n      React.createElement(\n        'p',\n        null,\n        '\\u73B0\\u6709\\u6587\\u4EF6\\u6EDE\\u7559\\u60A8\\u5904\\uFF0C\\u5DF2\\u5F71\\u54CD\\u6574\\u4E2A\\u6587\\u4EF6\\u6D41\\u8F6C\\u8FDB\\u7A0B\\uFF0C\\u8BF7\\u5C3D\\u5FEB\\u529E\\u7406\\uFF0C\\u8C22\\u8C22\\uFF01'\n      )\n    );\n  }\n});";
    },
    getData_control119_qGUvlz: function (elem) {},
    doAction_uiControl124_sJGnFv: function (data, elem) {
      if (data.eventType == 'btnClick') {
        $(elem).children().children('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl124_sJGnFv: function () {
      var selfTemplate = "\n\nmodule.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:'btnClick'\n    })\n  },\n  render: function() {\n    return (\n      <div onClick={this.btnClick} className='btnCon'>\n        \n        <button data-index={1}>\u5173\u95ED</button>\n        <button data-index={0}>\u8FDB\u5165</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: 'btnClick'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { onClick: this.btnClick, className: 'btnCon' },\n      React.createElement(\n        'button',\n        { 'data-index': 1 },\n        '\\u5173\\u95ED'\n      ),\n      React.createElement(\n        'button',\n        { 'data-index': 0 },\n        '\\u8FDB\\u5165'\n      )\n    );\n  }\n});";
    },
    getData_control118_akbTl4: function (elem) {
      if (elem) {
        var data = [];$(elem).children('tbody').children('tr').each(function (trIdx, tr) {
          var arr = {};if (trIdx >= 4 && trIdx <= 10) {
            var lab = $(tr).children('td').eq(0).text();arr.lab = lab;var iptVal = $(tr).children('td').eq(1).find('input').val();arr.iptVal = iptVal;data.push(arr);
          }
        });return { data: data };
      }
    },
    doAction_uiControl122_iGqTad: function (data, elem) {},
    getTemplate_uiControl122_iGqTad: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    var _data=data.data;\n    if(data){\n      return (\n        <div className='cbxxTab'>\n        \t<ul>\n            {\n              _data.map(function(obj,objIdx){\n                if(obj.lab){\n                  return <li>\n                    <b>{obj.lab}</b>\n                    <span>{obj.iptVal}</span>\n                  </li>\n                }\n              })\n            }\n          </ul>\n        </div>\n        \n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var _data = data.data;\n    if (data) {\n      return React.createElement(\n        'div',\n        { className: 'cbxxTab' },\n        React.createElement(\n          'ul',\n          null,\n          _data.map(function (obj, objIdx) {\n            if (obj.lab) {\n              return React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'b',\n                  null,\n                  obj.lab\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  obj.iptVal\n                )\n              );\n            }\n          })\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    }
  });
})(window, ysp);