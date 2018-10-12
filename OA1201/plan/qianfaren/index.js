(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control10_oB71mC: function (elem) {
      if (elem) {
        var options = [];$(elem).children('option').each(function (optIdx, opt) {
          options.push([opt.textContent, opt.selected]);
        });return options;
      } else {
        return null;
      }
    },
    doAction_uiControl8_fr7o5H: function (data, elem) {
      if (data.eventType == 'selectChange') {
        $(elem).children('option')[data.dataCustom].selected = true;elem.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl8_fr7o5H: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleLiClick:function(e){\n    if(e.target.nodeName==\'LI\'){\n      e.target.className=\'selected\';\n      $(e.target).siblings().removeClass(\'selected\');\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'selectChange\'\n      })\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data){\n      return (\n        <div>\n          <ul onClick={this.handleLiClick} className=\'qianfaren\'>\n            {\n              data.map(function(val,idx){\n\t\t\t\t\t\t\t\treturn <li data-index={idx} className={val[1] ? \'selected\' : \'\'}>{val[0]}</li>\n              })\n            }\n          </ul>\n        </div>\n      )\n    }else{\n      return <div></div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleLiClick: function handleLiClick(e) {\n    if (e.target.nodeName == \'LI\') {\n      e.target.className = \'selected\';\n      $(e.target).siblings().removeClass(\'selected\');\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'selectChange\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'ul\',\n          { onClick: this.handleLiClick, className: \'qianfaren\' },\n          data.map(function (val, idx) {\n            return React.createElement(\n              \'li\',\n              { \'data-index\': idx, className: val[1] ? \'selected\' : \'\' },\n              val[0]\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control11_R3yT4q: function (elem) {},
    doAction_uiControl9_BIuKM9: function (data, elem) {
      if (data.eventType == 'btnClick') {
        $(elem).children().children().children('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl9_BIuKM9: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:\'btnClick\'\n    })\n  },\n  render: function() {\n    return (\n      <div onClick={this.btnClick} className=\'btnCon\'>\n        \n        <button data-index={1}>\u53D6\u6D88</button>\n        <button data-index={0}>\u786E\u5B9A</button>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: 'btnClick'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { onClick: this.btnClick, className: 'btnCon' },\n      React.createElement(\n        'button',\n        { 'data-index': 1 },\n        '\\u53D6\\u6D88'\n      ),\n      React.createElement(\n        'button',\n        { 'data-index': 0 },\n        '\\u786E\\u5B9A'\n      )\n    );\n  }\n});";
    },
    getData_control127_WexoJ4: function (elem) {
      if (elem) {
        return elem.textContent.trim();
      }
    },
    doAction_uiControl136_Xu3VDS: function (data, elem) {},
    getTemplate_uiControl136_Xu3VDS: function () {
      var selfTemplate = 'var React=require("react");\nvar {PageTitle}=require("ysp-custom-components");\nmodule.exports = React.createClass({\n  render: function() {\n    var title=this.props.customData;\n    if (title || title==\'\') {\n      return (\n        <PageTitle customData={title} customHandler={this.props.customHandler} />\n      )\n    } else {\n      return null;\n    }\n    \n  }\n});';
      return '"use strict";\n\nvar React = require("react");\n\nvar _require = require("ysp-custom-components"),\n    PageTitle = _require.PageTitle;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var title = this.props.customData;\n    if (title || title == \'\') {\n      return React.createElement(PageTitle, { customData: title, customHandler: this.props.customHandler });\n    } else {\n      return null;\n    }\n  }\n});';
    }
  });
})(window, ysp);