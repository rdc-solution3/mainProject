(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control44_OvOvP3: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector(".mini-panel-title").textContent;
    },
    doAction_uiControl38_OW5eV7: function (data, elem) {
      if (data.eventType == "back") {
        elem.querySelector(".mini-tools-close").click();
      }if (data.eventType == "action") {
        var next = $(elem).parent().next()[0].querySelector("iframe").contentWindow.document;if (next) {
          var buttons = next.querySelector(".uc-toolbaroverflow").querySelectorAll("a");$.each(buttons, function (index, item) {
            if (item.textContent.trim() == "确定") {
              item.click();
            }
          });
        }
      }
    },
    getTemplate_uiControl38_OW5eV7: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nmodule.exports = React.createClass({\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  action:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"action\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.action}>\u786E\u5B9A</AMUI.Button>\n        </HeaderRight>\n      </Header>\n    );\n  }\n});\n\n";
      return "\"use strict\";\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  action: function action() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"action\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \"primary\", title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.back },\n          React.createElement(\"span\", { className: \"icon icon-left-nav\" }),\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(\n        _yspInteriorComponents.HeaderRight,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.action },\n          \"\\u786E\\u5B9A\"\n        )\n      )\n    );\n  }\n});";
    },
    getData_control48_qdzt3u: function (elem) {
      if (!elem) {
        return;
      }var iframe = $(elem).parent().next()[0].querySelector("iframe").contentWindow;if (!iframe) return;var target = iframe.document.querySelector(".uc-toolbaroverflow");var data = [];var spans = $(target).children("span");for (var i = 0; i < spans.length; i++) {
        var obj = {};if ($(spans[i]).hasClass("separator")) continue;var input = spans[i].querySelector("input[type=text]");obj.placeholder = input.placeholder;obj.index = i;obj.val = input.value;data.push(obj);
      }return data;
    },
    doAction_uiControl41_R9UAwZ: function (data, elem) {
      var iframe = $(elem).parent().next()[0].querySelector("iframe").contentWindow;if (!iframe) return;var target = iframe.document.querySelector(".uc-toolbaroverflow");var spans = $(target).children("span");var _data = data.customData;if (data.eventType == "changeInput") {
        var target = spans[_data.index].querySelector("input[type=text]");target.value = _data.val;$(target).trigger("change");
      }if (data.eventType == "search") {
        var as = $(target).children("a");as[as.length - 1].click();
      }
    },
    getTemplate_uiControl41_R9UAwZ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  changeInput:function(e){\n    var value = e.target.value;\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"changeInput\",\n        data:{\n          val:value,\n          index:index\n        }\n      })\n    }\n  },\n  search:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"search\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    return (\n      <div className=\"sg-search-box\" style={{background:\"#fff\",paddingBottom:\"1px\"}}>\n        {data&&data.map(function(item,i){\n          return(\n          \t<div className=\"filed-box\">\n              <input type=\"text\" defaultValue={item.value} data-index={item.index} onBlur={me.changeInput} placeholder={item.placeholder}  />\n            </div>\n          )\n        })}\n        <div className=\"filed-box\">\n          <a className=\"btn btn-sm btn-block btn-primary\" onClick={me.search} style={{margin: 0,\n    padding: \".65em 1em\"}}>\u67E5\u8BE2</a>\n        </div>\n        <div style={{clear:\"both\",height:\"0px\"}}></div>\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  changeInput: function changeInput(e) {\n    var value = e.target.value;\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"changeInput\",\n        data: {\n          val: value,\n          index: index\n        }\n      });\n    }\n  },\n  search: function search(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"search\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \"div\",\n      { className: \"sg-search-box\", style: { background: \"#fff\", paddingBottom: \"1px\" } },\n      data && data.map(function (item, i) {\n        return React.createElement(\n          \"div\",\n          { className: \"filed-box\" },\n          React.createElement(\"input\", { type: \"text\", defaultValue: item.value, \"data-index\": item.index, onBlur: me.changeInput, placeholder: item.placeholder })\n        );\n      }),\n      React.createElement(\n        \"div\",\n        { className: \"filed-box\" },\n        React.createElement(\n          \"a\",\n          { className: \"btn btn-sm btn-block btn-primary\", onClick: me.search, style: { margin: 0,\n              padding: \".65em 1em\" } },\n          \"\\u67E5\\u8BE2\"\n        )\n      ),\n      React.createElement(\"div\", { style: { clear: \"both\", height: \"0px\" } })\n    );\n  }\n});";
    },
    getData_control49_roTSdL: function (elem) {
      if (!elem) {
        return;
      }var theads = elem.querySelector(".mini-grid-columns").querySelector(".mini-grid-columns-view").querySelector("tbody").children[1].children;var trs = elem.querySelector(".mini-grid-rows").querySelector(".mini-grid-rows-view").querySelector("tbody").children;var data = [];for (var i = 2; i < trs.length; i++) {
        var tds = trs[i].children;var obj = {};obj.properties = [];if (i == trs.length - 1 && !$(trs[i]).hasClass("mini-grid-row")) {
          continue;
        }$.each(tds, function (index, item) {
          var checkbox = item.querySelector(".mini-grid-radio");if (checkbox) {
            obj.checkbox = true;if ($(trs[i]).hasClass("mini-grid-row-selected")) {
              obj.checked = true;
            }
          } else {
            var title = theads[index].textContent;var val = item.textContent.trim();if (title == "序号" || title == "") return true;if (title == "名称") {
              obj.title = val;obj.properties.unshift([title, val]);
            } else {
              obj.properties.push([title, val]);
            }
          }
        });data.push(obj);
      }return data;
    },
    doAction_uiControl42_SHnoLr: function (data, elem) {
      var trs = elem.querySelector(".mini-grid-rows").querySelector(".mini-grid-rows-view").querySelector("tbody").children;if (data.eventType == "listSelect") {
        var checkbox = trs[Number(data.customData) + 2].querySelector(".mini-grid-radio");var _doc = elem.ownerDocument;var evt = _doc.createEvent("mouseEvents");evt.initEvent("mousedown", true, true);checkbox.dispatchEvent(evt);
      }if (data.eventType == "mount") {
        ysp.appMain.hideLoading();
      }
    },
    getTemplate_uiControl42_SHnoLr: function () {
      var selfTemplate = "const Container = AMUI2.Container;\nconst TodoItemTypeTwo = AMUI2.TodoItemTypeTwo;\nconst Pair = AMUI2.Pair;\nconst ButtonContainer = AMUI2.ButtonContainer;\nconst ButtonGroup = AMUI2.ButtonGroup;\nconst Button = AMUI2.Button;\n\n\nmodule.exports = React.createClass({\n  componentDidMount1:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"mount\"\n      })\n    }\n  },\n  listSelect:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"listSelect\",\n        data:index\n      })\n    }\n  },\n  render: function() {\n  \tvar data = this.props.customData;\n    var me = this;\n    if(!data){\n      return(<div></div>)\n    }\n    return (\n      <Container style={{paddingTop: 0}}>\n\n        {data.map((item, index) => {\n          item.title = <div><label data-index={index} onClick={me.listSelect} className=\"am2-switch am2-select-item-switch\" style={{margin:\"0 10px 2px 0\",pointerEvents:\"auto\"}}><input type=\"checkbox\" value=\"on\" checked={item.checked}/><span data-index={index} className=\"am2-switch-radio listRadio\"></span></label><span data-index={index} onClick={me.listSelect}>{item.title!=\"\"?item.title:\"\u7F16\u53F7:\"+item.number}</span></div>;\n          const {\n            properties,\n            ...others\n          } = item;\n\t\t\t\t\t\n          return (\n            <TodoItemTypeTwo\n              key={index}\n              subtitle=\"\"\n              after={<div style={{width:\"80px\",marginLeft:\"-15px\"}}></div>}\n              {...others}\n            >\n              {item.properties.map((p, i) => {\n                return <Pair key={i} name={p[0]} value={p[1]}/>\n              })}\n            </TodoItemTypeTwo>\n          );\n        })}\n\n        <div style={{height: 10}}/>\n\n      </Container>\n    );\n  }\n});";
      return "\"use strict\";\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar Container = AMUI2.Container;\nvar TodoItemTypeTwo = AMUI2.TodoItemTypeTwo;\nvar Pair = AMUI2.Pair;\nvar ButtonContainer = AMUI2.ButtonContainer;\nvar ButtonGroup = AMUI2.ButtonGroup;\nvar Button = AMUI2.Button;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount1: function componentDidMount1() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"mount\"\n      });\n    }\n  },\n  listSelect: function listSelect(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"listSelect\",\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (!data) {\n      return React.createElement(\"div\", null);\n    }\n    return React.createElement(\n      Container,\n      { style: { paddingTop: 0 } },\n      data.map(function (item, index) {\n        item.title = React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"label\",\n            { \"data-index\": index, onClick: me.listSelect, className: \"am2-switch am2-select-item-switch\", style: { margin: \"0 10px 2px 0\", pointerEvents: \"auto\" } },\n            React.createElement(\"input\", { type: \"checkbox\", value: \"on\", checked: item.checked }),\n            React.createElement(\"span\", { \"data-index\": index, className: \"am2-switch-radio listRadio\" })\n          ),\n          React.createElement(\n            \"span\",\n            { \"data-index\": index, onClick: me.listSelect },\n            item.title != \"\" ? item.title : \"\u7F16\u53F7:\" + item.number\n          )\n        );\n\n        var properties = item.properties,\n            others = _objectWithoutProperties(item, [\"properties\"]);\n\n        return React.createElement(\n          TodoItemTypeTwo,\n          _extends({\n            key: index,\n            subtitle: \"\",\n            after: React.createElement(\"div\", { style: { width: \"80px\", marginLeft: \"-15px\" } })\n          }, others),\n          item.properties.map(function (p, i) {\n            return React.createElement(Pair, { key: i, name: p[0], value: p[1] });\n          })\n        );\n      }),\n      React.createElement(\"div\", { style: { height: 10 } })\n    );\n  }\n});";
    },
    getData_control50_BsRwpP: function (elem) {
      if (!elem) {
        return;
      }var pageC = elem;var targetSpan = pageC.querySelector(".mini-pager-index");var obj = {};var page = Number(targetSpan.querySelector("input").value);var maxPage = Number(targetSpan.querySelector("span").textContent.trim().replace(/\D/g, ""));var pages = [];if (maxPage - page > 1 && page > 2) {
        pages = [page - 2, page - 1, page, page + 1, page + 2];
      } else if (maxPage - page > 2 && maxPage > 4 && page < 3) {
        pages = [1, 2, 3, 4, 5];
      } else if (maxPage - page < 2 && maxPage > 4) {
        pages = [maxPage - 4, maxPage - 3, maxPage - 2, maxPage - 1, maxPage];
      } else {
        for (var i = 1; i < maxPage; i++) {
          pages.push(i);
        }
      }var obj = { page: page, pages: pages, maxPage: maxPage };return obj;
    },
    doAction_uiControl43_eb6ydO: function (data, elem) {
      var pageC = elem;var targetSpan = pageC.querySelector(".mini-pager-index");if (data.eventType == "prePage") {
        $(pageC.querySelector(".mini-pager-prev")).parent().parent().click();
      }if (data.eventType == "nextPage") {
        $(pageC.querySelector(".mini-pager-next")).parent().parent().click();
      }if (data.eventType == "clickPage") {
        var input = targetSpan.querySelector("input");input.value = data.customData;ysp.customHelper.fireKeyEvent(input, "keydown", 13);
      }
    },
    getTemplate_uiControl43_eb6ydO: function () {
      var selfTemplate = "module.exports = React.createClass({\n  prePage:function(){\n    var callBack = this.props.customHandler;          \n    if(callBack) {                                    \n      callBack({\n        eventType:'prePage'                         \n      })\n    }\n  },\n  nextPage:function(){\n    var callBack = this.props.customHandler;          \n    if(callBack) {                                    \n      callBack({\n        eventType:'nextPage'                         \n      })\n    }\n  },\n  clickPage:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    var callBack = this.props.customHandler;          \n    if(callBack) {                                    \n      callBack({\n        data:index,\n        eventType:'clickPage'                         \n      })\n    }\n  },\n  render: function() {\n    var me = this;\n    var page = this.props.customData;\n    if(!page){\n      return(<div></div>)\n    }\n    return (\n      <div className=\"page-ctrl\" style={{paddingBottom:\"30px\"}}>\n        <a className=\"active\" onClick={me.prePage}>\u4E0A\u4E00\u9875</a>\n        {page&&page.pages&&page.pages.map(function(item,i){\n          return(\n            <a onClick={me.clickPage} data-index={item} className={item==page.page?\"active color\":\"\"}>{item}</a>\n          )\n        })}\n        <a className=\"active\" onClick={me.nextPage}>\u4E0B\u4E00\u9875</a>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  prePage: function prePage() {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        eventType: 'prePage'\n      });\n    }\n  },\n  nextPage: function nextPage() {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        eventType: 'nextPage'\n      });\n    }\n  },\n  clickPage: function clickPage(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: index,\n        eventType: 'clickPage'\n      });\n    }\n  },\n  render: function render() {\n    var me = this;\n    var page = this.props.customData;\n    if (!page) {\n      return React.createElement('div', null);\n    }\n    return React.createElement(\n      'div',\n      { className: 'page-ctrl', style: { paddingBottom: \"30px\" } },\n      React.createElement(\n        'a',\n        { className: 'active', onClick: me.prePage },\n        '\\u4E0A\\u4E00\\u9875'\n      ),\n      page && page.pages && page.pages.map(function (item, i) {\n        return React.createElement(\n          'a',\n          { onClick: me.clickPage, 'data-index': item, className: item == page.page ? \"active color\" : \"\" },\n          item\n        );\n      }),\n      React.createElement(\n        'a',\n        { className: 'active', onClick: me.nextPage },\n        '\\u4E0B\\u4E00\\u9875'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);