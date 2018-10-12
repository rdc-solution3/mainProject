(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control71_XXponJ: function (elem) {
      if (!elem) {
        return;
      }var theads = elem.querySelector(".mini-grid-columns").querySelector(".mini-grid-columns-view").querySelector("tbody").children[1].children;var trs = elem.querySelector(".mini-grid-rows").querySelector(".mini-grid-rows-view").querySelector("tbody").children;var data = [];for (var i = 2; i < trs.length; i++) {
        var tds = trs[i].children;var obj = {};obj.properties = []; //if (i == trs.length - 1) break;
        $.each(tds, function (index, item) {
          var checkbox = theads[index].querySelector(".mini-grid-checkbox");if (checkbox) {
            obj.checkbox = true;if ($(trs[i]).hasClass("mini-grid-row-selected")) {
              obj.checked = true;
            }
          } else {
            var title = theads[index].textContent;var val = item.textContent.trim();
            if (title == "序号" || title == "") return true;if (title.indexOf("规格型号") > -1) {
              obj.sign = val;
            }if (title == "物料名称") {
              obj.title = val;obj.properties.unshift([title, val]);
            } else {
              obj.properties.push([title, val]);
            }
          }
        });data.push(obj);
      }return data;
    },
    doAction_uiControl61_UZ2Udb: function (data, elem) {
      var trs = elem.querySelector(".mini-grid-rows").querySelector(".mini-grid-rows-view").querySelector("tbody").children;if (data.eventType == "listSelect") {
        var checkbox = trs[Number(data.customData) + 2].querySelector(".mini-grid-checkbox");var _doc = elem.ownerDocument;var evt = _doc.createEvent("mouseEvents");evt.initEvent("mousedown", true, true);checkbox.dispatchEvent(evt);
      }if (data.eventType == "mount") {
        ysp.appMain.hideLoading();
      }
    },
    getTemplate_uiControl61_UZ2Udb: function () {
      var selfTemplate = "const Container = AMUI2.Container;\nconst TodoItemTypeTwo = AMUI2.TodoItemTypeTwo;\nconst Pair = AMUI2.Pair;\nconst ButtonContainer = AMUI2.ButtonContainer;\nconst ButtonGroup = AMUI2.ButtonGroup;\nconst Button = AMUI2.Button;\n\n\nmodule.exports = React.createClass({\n  componentDidMount1:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"mount\"\n      })\n    }\n  },\n  listSelect:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"listSelect\",\n        data:index\n      })\n    }\n  },\n  render: function() {\n  \tvar data = this.props.customData;\n    var me = this;\n    if(!data){\n      return(<div></div>)\n    }\n    return (\n      <Container style={{paddingTop: 0}}>\n\n        {data.map((item, index) => {\n          item.title = <div><div><label data-index={index} onClick={me.listSelect} className=\"am2-switch am2-select-item-switch checkbox\" style={{margin:\"0 10px 2px 0\",pointerEvents:\"auto\"}}><input type=\"checkbox\" value=\"on\" checked={item.checked}/><span data-index={index} className=\"check-box\"><span data-index={index} className=\"fa fa-check\"></span></span></label><span data-index={index} onClick={me.listSelect}>{item.title!=\"\"?item.title:\"\u7F16\u53F7:\"+item.number}</span></div><div className=\"item-desc\" style={{display:item.sign?\"-webkit-box\":\"none\",paddingLeft:26}}>{item.sign}</div></div>;\n          const {\n            properties,\n            ...others\n          } = item;\n\t\t\t\t\t\n          return (\n            <TodoItemTypeTwo\n              key={index}\n              subtitle=\"\"\n              after={<div style={{width:\"80px\",marginLeft:\"-15px\"}}></div>}\n              {...others}\n            >\n              {item.properties.map((p, i) => {\n                return <Pair key={i} name={p[0]} value={p[1]}/>\n              })}\n            </TodoItemTypeTwo>\n          );\n        })}\n\n        <div style={{height: 10}}/>\n\n      </Container>\n    );\n  }\n});";
      return "\"use strict\";\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar Container = AMUI2.Container;\nvar TodoItemTypeTwo = AMUI2.TodoItemTypeTwo;\nvar Pair = AMUI2.Pair;\nvar ButtonContainer = AMUI2.ButtonContainer;\nvar ButtonGroup = AMUI2.ButtonGroup;\nvar Button = AMUI2.Button;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount1: function componentDidMount1() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"mount\"\n      });\n    }\n  },\n  listSelect: function listSelect(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"listSelect\",\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (!data) {\n      return React.createElement(\"div\", null);\n    }\n    return React.createElement(\n      Container,\n      { style: { paddingTop: 0 } },\n      data.map(function (item, index) {\n        item.title = React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"div\",\n            null,\n            React.createElement(\n              \"label\",\n              { \"data-index\": index, onClick: me.listSelect, className: \"am2-switch am2-select-item-switch checkbox\", style: { margin: \"0 10px 2px 0\", pointerEvents: \"auto\" } },\n              React.createElement(\"input\", { type: \"checkbox\", value: \"on\", checked: item.checked }),\n              React.createElement(\n                \"span\",\n                { \"data-index\": index, className: \"check-box\" },\n                React.createElement(\"span\", { \"data-index\": index, className: \"fa fa-check\" })\n              )\n            ),\n            React.createElement(\n              \"span\",\n              { \"data-index\": index, onClick: me.listSelect },\n              item.title != \"\" ? item.title : \"\u7F16\u53F7:\" + item.number\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"item-desc\", style: { display: item.sign ? \"-webkit-box\" : \"none\", paddingLeft: 26 } },\n            item.sign\n          )\n        );\n\n        var properties = item.properties,\n            others = _objectWithoutProperties(item, [\"properties\"]);\n\n        return React.createElement(\n          TodoItemTypeTwo,\n          _extends({\n            key: index,\n            subtitle: \"\",\n            after: React.createElement(\"div\", { style: { width: \"80px\", marginLeft: \"-15px\" } })\n          }, others),\n          item.properties.map(function (p, i) {\n            return React.createElement(Pair, { key: i, name: p[0], value: p[1] });\n          })\n        );\n      }),\n      React.createElement(\"div\", { style: { height: 10 } })\n    );\n  }\n});";
    },
    getData_control150_n5xoT9: function (elem) {
      if (!elem) {
        return;
      }var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-panel-header-inner");return target.querySelector(".mini-panel-title").textContent;
    },
    doAction_uiControl136_DVFTfi: function (data, elem) {
      if (data.eventType == "back") {
        var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-panel-header-inner");target.querySelector(".mini-tools-close").click();
      }if (data.eventType == "action") {
        var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-panel-header-inner");var next = $(target).parent().next()[0].querySelector("iframe").contentWindow.document;if (next) {
          var buttons = next.querySelector(".mini-toolbar").querySelectorAll("a.mini-button");$.each(buttons, function (index, item) {
            if (item.textContent.trim() == "确定") {
              item.click();
            }
          });
        }
      }
    },
    getTemplate_uiControl136_DVFTfi: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nmodule.exports = React.createClass({\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  action:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"action\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.action}>\u786E\u5B9A</AMUI.Button>\n        </HeaderRight>\n      </Header>\n    );\n  }\n});\n\n\n";
      return "\"use strict\";\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  action: function action() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"action\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \"primary\", title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.back },\n          React.createElement(\"span\", { className: \"icon icon-left-nav\" }),\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(\n        _yspInteriorComponents.HeaderRight,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.action },\n          \"\\u786E\\u5B9A\"\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);