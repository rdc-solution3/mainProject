(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control135_7oGwbQ: function (elem) {
      if (elem) {
        return elem.textContent;
      } else {
        return null;
      }
    },
    doAction_uiControl145_tuMQtu: function (data, elem) {},
    getTemplate_uiControl145_tuMQtu: function () {
      var selfTemplate = "var React=require(\"react\");\nvar {PageTitle}=require(\"ysp-custom-components\");\nmodule.exports = React.createClass({\n  render: function() {\n    var title=this.props.customData;\n    return (\n      <PageTitle customData={title} customHandler={this.props.customHandler} />\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require(\"react\");\n\nvar _require = require(\"ysp-custom-components\"),\n    PageTitle = _require.PageTitle;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var title = this.props.customData;\n    return React.createElement(PageTitle, { customData: title, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control136_xLR2aN: function (elem) {
      if (elem) {
        var btns = [];$(elem).children().children().children('input').each(function (iptIdx, ipt) {
          btns.push(ipt.value);
        });return btns;
      } else {
        return null;
      }
    },
    doAction_uiControl147_oQf1Jd: function (data, elem) {
      if (data.eventType == 'btnClick') {
        var index = data.dataCustom;var btn = $(elem).children().children().children('input')[index];btn && btn.click();
      }
    },
    getTemplate_uiControl147_oQf1Jd: function () {
      var selfTemplate = "module.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:'btnClick'\n    })\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(data){\n      if(data.length == 2){\n        return (\n          <div onClick={this.btnClick} className='btnCon'>\n\n            <button data-index={1}>\u53D6\u6D88</button>\n            <button data-index={0}>\u786E\u5B9A</button>\n          </div>\n        )\n      } else if (data.length == 1) {\n        return <div onClick={this.btnClick} className='btnCon'>\n        \t<button data-index={0} style = {{'width':'100%', 'color': '#fff'}}>\u53D6\u6D88</button>\n        </div>\n      }\n    } else {\n      return (\n        <div></div>\n      )\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: 'btnClick'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      if (data.length == 2) {\n        return React.createElement(\n          'div',\n          { onClick: this.btnClick, className: 'btnCon' },\n          React.createElement(\n            'button',\n            { 'data-index': 1 },\n            '\\u53D6\\u6D88'\n          ),\n          React.createElement(\n            'button',\n            { 'data-index': 0 },\n            '\\u786E\\u5B9A'\n          )\n        );\n      } else if (data.length == 1) {\n        return React.createElement(\n          'div',\n          { onClick: this.btnClick, className: 'btnCon' },\n          React.createElement(\n            'button',\n            { 'data-index': 0, style: { 'width': '100%', 'color': '#fff' } },\n            '\\u53D6\\u6D88'\n          )\n        );\n      }\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control137_U1V6eh: function (elem) {
      if (elem) {
        var label = $(elem).children('td').eq(0).text();var value = $(elem).children('td').eq(1).text();return { label: label, value: value };
      } else {
        return null;
      }
    },
    doAction_uiControl148_Gwdsww: function (data, elem) {},
    getTemplate_uiControl148_Gwdsww: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if (data) {\n      return (\n        <div className = 'selectedDep'>\n          <label>{data.label}</label>\n          <span>{data.value}</span>\n        </div>\n      )\n    }else {\n      return <div></div>\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        'div',\n        { className: 'selectedDep' },\n        React.createElement(\n          'label',\n          null,\n          data.label\n        ),\n        React.createElement(\n          'span',\n          null,\n          data.value\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control138_6sA6pS: function (elem) {
      if (elem) {
        var label = $(elem).children('td').eq(0).text();var options = [];$(elem).children('td').eq(1).children('select').children('option').each(function (optIdx, opt) {
          options.push([opt.textContent, opt.selected]);
        });if (options.length) {
          return { label: label, options: options };
        }
      } else {
        return null;
      }
    },
    doAction_uiControl149_Sstta2: function (data, elem) {
      if (data.eventType == 'handleOptChange') {
        var dataCustom = data.dataCustom;$(elem).children('td').eq(1).children('select').children('option')[dataCustom].selected = true;$(elem).children('td').eq(1).children('select').dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl149_Sstta2: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleOptChange:function(e){\n    var target = e.target;\n    this.props.customHandler({\n      data: target.value,\n      eventType: 'handleOptChange'\n    })\n  },\n  render: function() {\n    var data = this.props.customData;\n    if (data) {\n      return (\n        <div className = 'unSelectedDep'>\n          <label>{data.label}</label>\n          <select onChange = {this.handleOptChange}>\n          \t{\n              data.options.map(function(opt, optIdx){\n                return <option selected = {opt[1]} value = {optIdx}>{opt[0]}</option>\n              })\n            }\n          </select>\n        </div>\n      )\n    }else {\n      return <div></div>\n    }\n    \n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleOptChange: function handleOptChange(e) {\n    var target = e.target;\n    this.props.customHandler({\n      data: target.value,\n      eventType: 'handleOptChange'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        'div',\n        { className: 'unSelectedDep' },\n        React.createElement(\n          'label',\n          null,\n          data.label\n        ),\n        React.createElement(\n          'select',\n          { onChange: this.handleOptChange },\n          data.options.map(function (opt, optIdx) {\n            return React.createElement(\n              'option',\n              { selected: opt[1], value: optIdx },\n              opt[0]\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    }
  },'changeDepartment');
})(window, ysp);