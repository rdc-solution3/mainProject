(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control109_uFsEvp: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return '';
      }
    },
    doAction_uiControl104_mOC7TP: function (data, elem) {
      if (data.eventType === 'click') {
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
    getTemplate_uiControl104_mOC7TP: function () {
      var selfTemplate = "var React = require('react');\nvar {MenuList} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function(){\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n})";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control110_aXBi2h: function (elem) {
      var data = [];if (elem) {
        var obj = { value: elem.value, options: [] };$(elem).children("option").each(function (idx, d) {
          obj.options.push({ value: d.value, content: d.textContent });
        });data[0] = obj;
      }return data;
    },
    doAction_uiControl113_4imFhu: function (data, elem) {
      var _document = elem.ownerDocument;if (data.eventType === "change") {
        var value = data.dataCustom;var eventInput = _document.createEvent("HTMLEvents");eventInput.initEvent("change", true, false);elem.value = value;elem.dispatchEvent(eventInput);
      }
    },
    getTemplate_uiControl113_4imFhu: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onChange:function(e){\n    var handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        data: target.value,\n        eventType: "change"\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data && data.length>0){\n      return (<div className="selectPd">\n      \t\u4EA7\u54C1\u540D\u79F0:\n        <select value={data[0].value} onChange={this.onChange}>\n        \t{\n            data[0].options.map(function(d,idx){\n              return (<option value={d.value}>{d.content}</option>)\n            })\n          }\n        </select>\n      </div>)\n    }else{\n      return (<div style={{display:"none"}}></div>)\n    }\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  onChange: function onChange(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        data: target.value,\n        eventType: "change"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.length > 0) {\n      return React.createElement(\n        "div",\n        { className: "selectPd" },\n        "\\u4EA7\\u54C1\\u540D\\u79F0:",\n        React.createElement(\n          "select",\n          { value: data[0].value, onChange: this.onChange },\n          data[0].options.map(function (d, idx) {\n            return React.createElement(\n              "option",\n              { value: d.value },\n              d.content\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement("div", { style: { display: "none" } });\n    }\n  }\n});';
    },
    getData_control111_RMli8A: function (elem) {
      var data = [];if (elem) {
        $(elem).find("img").each(function (idx, d) {
          d.src = d.src;d.parentElement.style.display = "block";d.parentElement.style.textAlign = "center";d.parentElement.style.float = "none";
        });data[0] = elem.outerHTML;
      }return data;
    },
    doAction_uiControl114_231sWd: function (data, elem) {},
    getTemplate_uiControl114_231sWd: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    if(data && data.length>0){\n      return (\n        <div className="detailBox" dangerouslySetInnerHTML={{__html:data[0]}}>\n        </div>)\n    }else{\n      return (<div style={{display:"none"}}></div>)\n    }\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.length > 0) {\n      return React.createElement("div", { className: "detailBox", dangerouslySetInnerHTML: { __html: data[0] } });\n    } else {\n      return React.createElement("div", { style: { display: "none" } });\n    }\n  }\n});';
    }
  });
})(window, ysp);