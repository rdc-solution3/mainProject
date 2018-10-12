(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control85_CtKMwH: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector(".mini-panel-title").textContent;
    },
    doAction_uiControl71_vXtwmr: function (data, elem) {
      if (data.eventType == "back") {
        elem.querySelector(".mini-tools-close").click();
      }if (data.eventType == "action") {
        var next = $(elem).parent().next()[0].querySelector("iframe").contentWindow.document;if (next) {
          var buttons = next.querySelector(".mini-toolbar").querySelectorAll("a.mini-button");$.each(buttons, function (index, item) {
            if (item.textContent.trim() == "确定") {
              item.click();
            }
          });
        }
      }
    },
    getTemplate_uiControl71_vXtwmr: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nmodule.exports = React.createClass({\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  action:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"action\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.action}>\u786E\u5B9A</AMUI.Button>\n        </HeaderRight>\n      </Header>\n    );\n  }\n});\n\n";
      return "\"use strict\";\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  action: function action() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"action\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \"primary\", title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.back },\n          React.createElement(\"span\", { className: \"icon icon-left-nav\" }),\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(\n        _yspInteriorComponents.HeaderRight,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.action },\n          \"\\u786E\\u5B9A\"\n        )\n      )\n    );\n  }\n});";
    },
    getData_control86_bqndxF: function (elem) {
      if (!elem) {
        return;
      }var iframe = $(elem).parent().next()[0].querySelector("iframe").contentWindow;if (!iframe) {
        return;
      }elem = iframe.document.querySelector(".mini-toolbar");var data = [];var spans = $(elem).children("span");for (var i = 0; i < spans.length; i++) {
        var obj = {};var input = spans[i].querySelector("input[type=text]");if (!input) continue;obj.placeholder = input.placeholder;obj.val = input.value;obj.index = i;data.push(obj);
      }return data;
    },
    doAction_uiControl72_XiB6Rz: function (data, elem) {
      var iframe = $(elem).parent().next()[0].querySelector("iframe").contentWindow;if (!iframe) {
        return;
      }elem = iframe.document.querySelector(".mini-toolbar");var spans = $(elem).children("span");var _data = data.customData;if (data.eventType == "changeInput") {
        var input = spans[_data.index].querySelector("input[type=text]");input.value = _data.val;$(input).trigger("change");
      }if (data.eventType == "search") {
        var as = $(elem).children("a");as[as.length - 1].click();
      }
    },
    getTemplate_uiControl72_XiB6Rz: function () {
      var selfTemplate = "module.exports = React.createClass({\n  changeInput:function(e){\n    var value = e.target.value;\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"changeInput\",\n        data:{\n          val:value,\n          index:index\n        }\n      })\n    }\n  },\n  search:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"search\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    return (\n      <div className=\"sg-search-box\" style={{background:\"#fff\",paddingBottom:\"1px\"}}>\n        {data&&data.map(function(item,i){\n          return(\n          \t<div className=\"filed-box\">\n              <input type=\"text\" defaultValue={item.value} data-index={item.index} onBlur={me.changeInput} placeholder={item.placeholder}  />\n            </div>\n          )\n        })}\n        <div className=\"filed-box\">\n          <a className=\"btn btn-sm btn-block btn-primary\" onClick={me.search} style={{margin: 0,\n    padding: \".65em 1em\"}}>\u641C\u7D22</a>\n        </div>\n        <div style={{clear:\"both\",height:\"0px\"}}></div>\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  changeInput: function changeInput(e) {\n    var value = e.target.value;\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"changeInput\",\n        data: {\n          val: value,\n          index: index\n        }\n      });\n    }\n  },\n  search: function search(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"search\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \"div\",\n      { className: \"sg-search-box\", style: { background: \"#fff\", paddingBottom: \"1px\" } },\n      data && data.map(function (item, i) {\n        return React.createElement(\n          \"div\",\n          { className: \"filed-box\" },\n          React.createElement(\"input\", { type: \"text\", defaultValue: item.value, \"data-index\": item.index, onBlur: me.changeInput, placeholder: item.placeholder })\n        );\n      }),\n      React.createElement(\n        \"div\",\n        { className: \"filed-box\" },\n        React.createElement(\n          \"a\",\n          { className: \"btn btn-sm btn-block btn-primary\", onClick: me.search, style: { margin: 0,\n              padding: \".65em 1em\" } },\n          \"\\u641C\\u7D22\"\n        )\n      ),\n      React.createElement(\"div\", { style: { clear: \"both\", height: \"0px\" } })\n    );\n  }\n});";
    },
    getData_control87_uGAh1U: function (elem) {
      if (!elem) {
        return;
      }var theads = elem.querySelector(".mini-grid-columns").querySelector(".mini-grid-columns-view").querySelector("tbody").children[1].children;var trs = elem.querySelector(".mini-grid-rows").querySelector(".mini-grid-rows-view").querySelector("tbody").children;var data = [];for (var i = 2; i < trs.length; i++) {
        var tds = trs[i].children;var obj = {};obj.properties = [];$.each(tds, function (index, item) {
          var checkbox = item.querySelector(".mini-grid-checkbox");if (checkbox) {
            obj.checkbox = true;if ($(trs[i]).hasClass("mini-grid-row-selected")) {
              obj.checked = true;
            }
          } else {
            var title = theads[index].textContent.trim();var val = item.textContent.trim();if (title == "序号" || title == "") return true;if (title == "物料名称" || title == "囤货合同名称") {
              obj.title = val;obj.properties.unshift([title, val]);
            } else if (title == "分配数量") {
              obj.properties.push([title, val, true]);
            } else {
              obj.properties.push([title, val]);
            }
          }
        });data.push(obj);
      }var _data = {};_data.data = data;var editbox = elem.ownerDocument.querySelector("#ysp-edit-div");if (editbox) {
        var text = editbox.textContent;_data.editTitle = text.split("|")[1];_data.editType = text.split("|")[0];
      }return _data;
    },
    doAction_uiControl73_OlIvEo: function (data, elem) {
      var trs = elem.querySelector(".mini-grid-rows").querySelector(".mini-grid-rows-view").querySelector("tbody").children;var _data = data.customData;var _doc = elem.ownerDocument;var win = _doc.defaultView;if (data.eventType == "listSelect") {
        var checkbox = trs[Number(data.customData) + 2].querySelector(".mini-grid-checkbox");var evt = _doc.createEvent("mouseEvents");evt.initEvent("mousedown", true, true);checkbox.dispatchEvent(evt);
      }if (data.eventType == "mount") {
        ysp.appMain.hideLoading();
      }if (data.eventType == "edit") {
        var target = data_trs[_data.index].children[_data.num];var div = _doc.createElement("DIV");div.id = "ysp-edit-div";div.innerHTML = data.customData.type + "|" + data.customData.title;if (_doc.querySelector("#ysp-edit-div")) {
          _doc.querySelector("#ysp-edit-div").remove();
        }_doc.body.appendChild(div); /*--取消--*/
      }if (data.eventType == "changeEdit") {
        function getName(title) {
          var grid = win.grid ? win.grid : win.mini.get("grid_stock");var cols = grid.columns;var name = "";$.each(cols, function (index, item) {
            if (typeof item.header == "string" && item.header.indexOf(title) > -1) {
              name = item.name || item.field;
            }
          });return name;
        }var treegrid = win.grid ? win.grid : win.mini.get("grid_stock");var datas = treegrid.getData(true, false)[Number(data.customData.index)];datas[getName(data.customData.title)] = data.customData.value;switch (data.customData.title) {case "本次需用数量":
            datas[getName(data.customData.title)] = Number(datas[getName(data.customData.title)]);break;case "分配数量":
            datas[getName(data.customData.title)] = Number(datas[getName(data.customData.title)]);break;}treegrid._dataSource.source[Number(data.customData.index)]._state = "modified";treegrid.doUpdate();
      }if (data.eventType == "actionCheck") {//   var editwrap = elem.ownerDocument.querySelectorAll(".mini-grid-editwrap");
        //   if (editwrap && editwrap.length > 0) {
        //     var input = editwrap[editwrap.length - 1].querySelector("input[type=text]");
        //     if (!input) {
        //       input = editwrap[editwrap.length - 1].querySelector("textarea");
        //     }
        //     ysp.customHelper.fireKeyEvent(input, "keydown", 13);
        //     ysp.customHelper.fireKeyEvent(input, "keyup", 13);
        //   }
      }if (data.eventType == "cancel") {
        var target = elem.querySelector("legend");var _doc = elem.ownerDocument;var evt = _doc.createEvent("mouseEvents");evt.initEvent("mousedown", true, true);target.dispatchEvent(evt);var evt2 = _doc.createEvent("mouseEvents");evt2.initEvent("mouseup", true, true);target.dispatchEvent(evt2);
      }
    },
    getTemplate_uiControl73_OlIvEo: function () {
      var selfTemplate = "const Container = AMUI2.Container;\nconst TodoItemTypeTwo = AMUI2.TodoItemTypeTwo;\nconst Pair = AMUI2.Pair;\nconst ButtonContainer = AMUI2.ButtonContainer;\nconst ButtonGroup = AMUI2.ButtonGroup;\nconst Button = AMUI2.Button;\nconst Field = AMUI2.Field;\n\n\nmodule.exports = React.createClass({\n  componentDidMount1:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"mount\"\n      })\n    }\n  },\n  getInitialState:function(){\n    return({\n      showEditBox:false,\n      editType:\"input\",\n      editTitle:\"\",\n      editData:{\n        index:0,\n        num:0\n      }\n    })\n  },\n  listSelect:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"listSelect\",\n        data:index\n      })\n    }\n  },\n  edit:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var type = e.target.attributes[\"data-type\"].value;\n    var title = e.target.attributes[\"data-title\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"edit\",\n        data:{\n          index:index,\n          num:num,\n          title:title,\n          type:type\n        }\n      })\n    }\n    this.setState({\n      showEditBox:true,\n      editType:type,\n      editTitle:title,\n      editData:{\n        index:index,\n        num:num\n      }\n    });\n  },\n  changeEdit:function(e){\n    var handler = this.props.customHandler;\n    var value = e.target.value||e.target.attributes[\"data-value\"].value;\n    var title = e.target.attributes[\"data-title\"].value;\n    var index = this.state.editData.index;\n    var num = this.state.editData.num;\n    \n    if(handler){\n      handler({\n        eventType:\"changeEdit\",\n        data:{\n          value:value,\n          title:title,\n          index:index\n        }\n      })\n    }\n  },\n  actionCheck:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"actionCheck\"\n      })\n    }\n    this.setState({\n      showEditBox:false\n    });\n    this.actionCancel();\n  },\n  actionCancel:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"cancel\"\n      })\n    }\n    this.setState({\n      showEditBox:false\n    })\n  },\n  render: function() {\n    var _data = this.props.customData;\n  \tvar data = this.props.customData&&this.props.customData.data;\n    var me = this;\n    if(!data){\n      return(<div></div>)\n    }\n    return (\n      <Container style={{paddingTop: 0}}>\n\n        {data.map((item, index) => {\n          if(item.checkbox){\n            item.title = <div><label data-index={index} onClick={me.listSelect} className=\"am2-switch am2-select-item-switch checkbox\" style={{margin:\"0 10px 2px 0\",pointerEvents:\"auto\"}}><input type=\"checkbox\" value=\"on\" checked={item.checked}/><span data-index={index} className=\"check-box\"><span data-index={index} className=\"fa fa-check\"></span></span></label><span data-index={index} onClick={me.listSelect}>{item.title!=\"\"?item.title:\"\u7F16\u53F7:\"+item.number}</span></div>;\n          }else{\n            item.title = <div><span data-index={index} onClick={me.listSelect}>{item.title!=\"\"?item.title:\"\u7F16\u53F7:\"+item.number}</span></div>;\n          }\n          \n          const {\n            properties,\n            ...others\n          } = item;\n\t\t\t\t\t\n          return (\n            <TodoItemTypeTwo\n              key={index}\n              subtitle=\"\"\n              after={<div style={{width:\"80px\",marginLeft:\"-15px\"}}></div>}\n              {...others}\n            >\n              {item.properties.map((p, i) => {\n                //return <Pair key={i} name={p[0]} value={p[1]}/>\n                return <li className=\"item\" style={{padding:\"0 30px 0 0\",fontSize:\"14px\"}}>\n                          <div className=\"item-title\" style={{minWidth: \"4em\",fontSize:\"14px\"}}>\n                            {p[0]}\n                          </div>\n                          <div className=\"item-after\" style={{lineHeight: 0}}>\n                            {p[1]}\n                            <span style={{display:p[2]?\"\":\"none\"}} data-title={p[0]} data-type=\"input\" data-index={index} data-num={i} onClick={p[2]?me.edit:undefined} className=\"icon icon-edit-dec\"></span>\n                          </div>\n                        </li>\n              })}\n            </TodoItemTypeTwo>\n          );\n        })}\n\n        <div style={{height: 10}}/>\n\t\t\t\t\n        \n        <span className=\"sg-search-box dec-edit\" style={{display:this.state.showEditBox?\"block\":\"none\"}}>\n          <div className=\"modal modal-alert\">\n            <div className=\"modal-inner\">\n              \t<div className=\"modal-dialog\">\n                  <div className=\"modal-body\" style={{maxHeight:\"400px\",overflowY:\"auto\"}}>\n                    <ul className=\"list\">\n                      <li className=\"item item-input\">\n                        <div className=\"item-main\">\n                          <span className=\"field-container\">\n                            <span className=\"field-label\">{this.state.editTitle}</span>\n                            <div className=\"filed-box\">\n                              <Field onBlur={me.changeEdit} data-title={this.state.editTitle} type=\"text\" className=\"field\" />\n                            </div>\n\n                          </span>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <div className=\"modal-footer\">\n                    <span className=\"modal-btn\" onClick={me.actionCheck}>\u786E\u5B9A</span>\n                    <span className=\"modal-btn\" onClick={me.actionCancel}>\u53D6\u6D88</span>\n\n                  </div>\n                </div>\n              \n            </div>\n          </div>\n          <div className=\"modal-backdrop active\" style={{height:\"100%\"}}></div>\n        </span>\n      </Container>\n    );\n  }\n});";
      return "\"use strict\";\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar Container = AMUI2.Container;\nvar TodoItemTypeTwo = AMUI2.TodoItemTypeTwo;\nvar Pair = AMUI2.Pair;\nvar ButtonContainer = AMUI2.ButtonContainer;\nvar ButtonGroup = AMUI2.ButtonGroup;\nvar Button = AMUI2.Button;\nvar Field = AMUI2.Field;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount1: function componentDidMount1() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"mount\"\n      });\n    }\n  },\n  getInitialState: function getInitialState() {\n    return {\n      showEditBox: false,\n      editType: \"input\",\n      editTitle: \"\",\n      editData: {\n        index: 0,\n        num: 0\n      }\n    };\n  },\n  listSelect: function listSelect(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"listSelect\",\n        data: index\n      });\n    }\n  },\n  edit: function edit(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var type = e.target.attributes[\"data-type\"].value;\n    var title = e.target.attributes[\"data-title\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"edit\",\n        data: {\n          index: index,\n          num: num,\n          title: title,\n          type: type\n        }\n      });\n    }\n    this.setState({\n      showEditBox: true,\n      editType: type,\n      editTitle: title,\n      editData: {\n        index: index,\n        num: num\n      }\n    });\n  },\n  changeEdit: function changeEdit(e) {\n    var handler = this.props.customHandler;\n    var value = e.target.value || e.target.attributes[\"data-value\"].value;\n    var title = e.target.attributes[\"data-title\"].value;\n    var index = this.state.editData.index;\n    var num = this.state.editData.num;\n\n    if (handler) {\n      handler({\n        eventType: \"changeEdit\",\n        data: {\n          value: value,\n          title: title,\n          index: index\n        }\n      });\n    }\n  },\n  actionCheck: function actionCheck() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"actionCheck\"\n      });\n    }\n    this.setState({\n      showEditBox: false\n    });\n    this.actionCancel();\n  },\n  actionCancel: function actionCancel() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"cancel\"\n      });\n    }\n    this.setState({\n      showEditBox: false\n    });\n  },\n  render: function render() {\n    var _data = this.props.customData;\n    var data = this.props.customData && this.props.customData.data;\n    var me = this;\n    if (!data) {\n      return React.createElement(\"div\", null);\n    }\n    return React.createElement(\n      Container,\n      { style: { paddingTop: 0 } },\n      data.map(function (item, index) {\n        if (item.checkbox) {\n          item.title = React.createElement(\n            \"div\",\n            null,\n            React.createElement(\n              \"label\",\n              { \"data-index\": index, onClick: me.listSelect, className: \"am2-switch am2-select-item-switch checkbox\", style: { margin: \"0 10px 2px 0\", pointerEvents: \"auto\" } },\n              React.createElement(\"input\", { type: \"checkbox\", value: \"on\", checked: item.checked }),\n              React.createElement(\n                \"span\",\n                { \"data-index\": index, className: \"check-box\" },\n                React.createElement(\"span\", { \"data-index\": index, className: \"fa fa-check\" })\n              )\n            ),\n            React.createElement(\n              \"span\",\n              { \"data-index\": index, onClick: me.listSelect },\n              item.title != \"\" ? item.title : \"\u7F16\u53F7:\" + item.number\n            )\n          );\n        } else {\n          item.title = React.createElement(\n            \"div\",\n            null,\n            React.createElement(\n              \"span\",\n              { \"data-index\": index, onClick: me.listSelect },\n              item.title != \"\" ? item.title : \"\u7F16\u53F7:\" + item.number\n            )\n          );\n        }\n\n        var properties = item.properties,\n            others = _objectWithoutProperties(item, [\"properties\"]);\n\n        return React.createElement(\n          TodoItemTypeTwo,\n          _extends({\n            key: index,\n            subtitle: \"\",\n            after: React.createElement(\"div\", { style: { width: \"80px\", marginLeft: \"-15px\" } })\n          }, others),\n          item.properties.map(function (p, i) {\n            //return <Pair key={i} name={p[0]} value={p[1]}/>\n            return React.createElement(\n              \"li\",\n              { className: \"item\", style: { padding: \"0 30px 0 0\", fontSize: \"14px\" } },\n              React.createElement(\n                \"div\",\n                { className: \"item-title\", style: { minWidth: \"4em\", fontSize: \"14px\" } },\n                p[0]\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"item-after\", style: { lineHeight: 0 } },\n                p[1],\n                React.createElement(\"span\", { style: { display: p[2] ? \"\" : \"none\" }, \"data-title\": p[0], \"data-type\": \"input\", \"data-index\": index, \"data-num\": i, onClick: p[2] ? me.edit : undefined, className: \"icon icon-edit-dec\" })\n              )\n            );\n          })\n        );\n      }),\n      React.createElement(\"div\", { style: { height: 10 } }),\n      React.createElement(\n        \"span\",\n        { className: \"sg-search-box dec-edit\", style: { display: this.state.showEditBox ? \"block\" : \"none\" } },\n        React.createElement(\n          \"div\",\n          { className: \"modal modal-alert\" },\n          React.createElement(\n            \"div\",\n            { className: \"modal-inner\" },\n            React.createElement(\n              \"div\",\n              { className: \"modal-dialog\" },\n              React.createElement(\n                \"div\",\n                { className: \"modal-body\", style: { maxHeight: \"400px\", overflowY: \"auto\" } },\n                React.createElement(\n                  \"ul\",\n                  { className: \"list\" },\n                  React.createElement(\n                    \"li\",\n                    { className: \"item item-input\" },\n                    React.createElement(\n                      \"div\",\n                      { className: \"item-main\" },\n                      React.createElement(\n                        \"span\",\n                        { className: \"field-container\" },\n                        React.createElement(\n                          \"span\",\n                          { className: \"field-label\" },\n                          this.state.editTitle\n                        ),\n                        React.createElement(\n                          \"div\",\n                          { className: \"filed-box\" },\n                          React.createElement(Field, { onBlur: me.changeEdit, \"data-title\": this.state.editTitle, type: \"text\", className: \"field\" })\n                        )\n                      )\n                    )\n                  )\n                )\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"modal-footer\" },\n                React.createElement(\n                  \"span\",\n                  { className: \"modal-btn\", onClick: me.actionCheck },\n                  \"\\u786E\\u5B9A\"\n                ),\n                React.createElement(\n                  \"span\",\n                  { className: \"modal-btn\", onClick: me.actionCancel },\n                  \"\\u53D6\\u6D88\"\n                )\n              )\n            )\n          )\n        ),\n        React.createElement(\"div\", { className: \"modal-backdrop active\", style: { height: \"100%\" } })\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);