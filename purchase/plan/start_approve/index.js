(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control41_TzKhx2: function (elem) {
      if (!elem) {
        return;
      }var win = elem.ownerDocument.defaultView;var workflow = win.Glodon.Workflow;if (!workflow || !workflow.data || !workflow.data.nodes) {
        return;
      }var nodes = workflow.data.nodes;var calcDom = elem.querySelector("#calcDom");var num = 0;if (calcDom) {
        num = calcDom.textContent;
      }return { nodes: nodes, num: num };
    },
    doAction_uiControl18_E2vy5C: function (data, elem) {
      var _data = data.customData;var doc = elem.ownerDocument;var wf = doc.defaultView.Glodon.Workflow;if (data.eventType == "addItem") {
        if (_data.index) {
          var obj = { data: wf.data, item: { "text": "[未设置]", "position": "[未设置]" }, x: _data.index, y: 0 };wf.handler.insertNode(obj, wf);wf.paper.clear();wf.render();
        } else {
          wf.handler.insertNode(wf.paper, 0, 0, wf);wf.paper.clear();wf.render();
        }
      }if (data.eventType == "deleteCard") {
        var obj = { data: wf.data, item: wf.data.nodes[_data.index].items[_data.num], x: _data.index, y: _data.num };wf.handler.remove(obj, wf);wf.paper.clear();wf.render();
      }if (data.eventType == "addCard") {
        var obj = { data: wf.data, item: { "text": "[未设置]", "position": "[未设置]" }, x: _data.index, y: _data.num };wf.handler.insertItem(obj, wf);wf.paper.clear();wf.render();
      }if (data.eventType == "editUser") {
        var node = wf.data.nodes[_data.index].items[_data.num];wf.handler.open({ "item": node }, wf);
      }if (data.eventType == "editPosition") {
        var node = wf.data.nodes[_data.index].items[_data.num];wf.handler.setposition({ "item": node }, wf);
      }if (data.eventType == "mount") {
        if (!doc.querySelector("#calcDom")) {
          var dom = doc.createElement("DIV");dom.innerHTML = 0;$(dom).attr("id", "calcDom");$(elem).append(dom);setInterval(function () {
            dom.innerHTML = Number(dom.innerHTML) + 1;
          }, 500);
        }
      }
    },
    getTemplate_uiControl18_E2vy5C: function () {
      var selfTemplate = "module.exports = React.createClass({\n  addItem:function(e){\n    var target = e.target.attributes[\"data-index\"];\n    var index = target?e.target.attributes[\"data-index\"].value:null;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"addItem\",\n        data:{\n          index:index\n        }\n      })\n    }\n  },\n  deleteCard:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"deleteCard\",\n        data:{\n          index:index,\n          num:num\n        }\n      })\n    }\n  },\n  addCard:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"addCard\",\n        data:{\n          index:index,\n          num:num\n        }\n      })\n    }\n  },\n  editPosition:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"editPosition\",\n        data:{\n          index:index,\n          num:num\n        }\n      })\n    }\n  },\n  editUser:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"editUser\",\n        data:{\n          index:index,\n          num:num\n        }\n      })\n    }\n  },\n  componentDidUpdate:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"mount\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData&&this.props.customData.nodes;\n    var me = this;\n    return (\n      <div className=\"approval-box\">\n        <div className=\"approval-group\">\n          <div className=\"approval-item\">\n\t\t\t\t\t\t<i></i>\n            <span>\u5F00\u59CB</span>\n          </div>\n          <div className=\"approval-item\" style={{marginBottom:10}}>\n\t\t\t\t\t\t<i></i>\n            <a onClick={me.addItem} className=\"btn btn-sm btn-warning\"><span className=\"icon icon-plus\"></span>\u6DFB\u52A0\u5BA1\u6279\u8282\u70B9</a>\n          </div>\n        </div>\n        {data&&data.map(function(item,i){\n          return(\n          \t<div className=\"approval-group\">\n              <div className=\"approval-item\">\n                <i></i>\n                <div className=\"approval-content\">\n                  {item.items&&item.items.map(function(innerItem,j){\n                    return(\n                      <div className=\"card\">\n                        <div className=\"card-body\">\n                          <ul className=\"list\">\n                            <li data-index={i} data-num={j} className=\"item\" onClick={me.editPosition}>\n                              <div data-index={i} data-num={j} className=\"item-media\">\n                                <span data-index={i} data-num={j} className=\"icon icon-position\"></span>\n                              </div>\n                              <div data-index={i} data-num={j} className=\"item-title\">\n                                {innerItem.text==\"[\u672A\u8BBE\u7F6E]\"?\"\u7F16\u8F91\u804C\u4F4D\":innerItem.position}\n                              </div>\n                            </li>\n                            <li data-index={i} data-num={j} className=\"item\" onClick={me.editUser}>\n                              <div data-index={i} data-num={j} className=\"item-media\">\n                                <span data-index={i} data-num={j} className=\"icon icon-user\"></span>\n                              </div>\n                              <div data-index={i} data-num={j} className=\"item-title\">\n                                {innerItem.text==\"[\u672A\u8BBE\u7F6E]\"?\"\u9009\u62E9\u5BA1\u6279\u4EBA\":innerItem.text}\n                              </div>\n                            </li>\n                          </ul>\n                        </div>\n                        <div className=\"card-footer\">\n                          <a data-index={i} data-num={j} onClick={me.deleteCard} style={{width:\"45%\"}}><i className=\"icon icon-delete\"></i>\u5220\u9664\u5F53\u524D\u8282\u70B9</a>\n                          <a style={{color:\"#999\"}}>|</a>\n                          <a data-index={i} data-num={j} onClick={me.addCard} style={{width:\"45%\"}}><i className=\"icon icon-add\"></i>\u6DFB\u52A0\u540C\u7EA7\u8282\u70B9</a>\n                        </div>\n                      </div>\n                    )\n                  })}\n                </div>\n              </div>\n              <div className=\"approval-item\">\n                <i></i>\n                <a onClick={me.addItem} data-index={i} className=\"btn btn-sm btn-warning\"><span className=\"icon icon-plus\"></span>\u6DFB\u52A0\u5BA1\u6279\u8282\u70B9</a>\n              </div>\n            </div>\n          )\n        })}\n        \n        <div className=\"approval-group\">\n          <div className=\"approval-item\">\n\t\t\t\t\t\t<i></i>\n            <span>\u7ED3\u675F</span>\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  addItem: function addItem(e) {\n    var target = e.target.attributes[\"data-index\"];\n    var index = target ? e.target.attributes[\"data-index\"].value : null;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"addItem\",\n        data: {\n          index: index\n        }\n      });\n    }\n  },\n  deleteCard: function deleteCard(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"deleteCard\",\n        data: {\n          index: index,\n          num: num\n        }\n      });\n    }\n  },\n  addCard: function addCard(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"addCard\",\n        data: {\n          index: index,\n          num: num\n        }\n      });\n    }\n  },\n  editPosition: function editPosition(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"editPosition\",\n        data: {\n          index: index,\n          num: num\n        }\n      });\n    }\n  },\n  editUser: function editUser(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    var num = e.target.attributes[\"data-num\"].value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"editUser\",\n        data: {\n          index: index,\n          num: num\n        }\n      });\n    }\n  },\n  componentDidUpdate: function componentDidUpdate(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"mount\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData && this.props.customData.nodes;\n    var me = this;\n    return React.createElement(\n      \"div\",\n      { className: \"approval-box\" },\n      React.createElement(\n        \"div\",\n        { className: \"approval-group\" },\n        React.createElement(\n          \"div\",\n          { className: \"approval-item\" },\n          React.createElement(\"i\", null),\n          React.createElement(\n            \"span\",\n            null,\n            \"\\u5F00\\u59CB\"\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"approval-item\", style: { marginBottom: 10 } },\n          React.createElement(\"i\", null),\n          React.createElement(\n            \"a\",\n            { onClick: me.addItem, className: \"btn btn-sm btn-warning\" },\n            React.createElement(\"span\", { className: \"icon icon-plus\" }),\n            \"\\u6DFB\\u52A0\\u5BA1\\u6279\\u8282\\u70B9\"\n          )\n        )\n      ),\n      data && data.map(function (item, i) {\n        return React.createElement(\n          \"div\",\n          { className: \"approval-group\" },\n          React.createElement(\n            \"div\",\n            { className: \"approval-item\" },\n            React.createElement(\"i\", null),\n            React.createElement(\n              \"div\",\n              { className: \"approval-content\" },\n              item.items && item.items.map(function (innerItem, j) {\n                return React.createElement(\n                  \"div\",\n                  { className: \"card\" },\n                  React.createElement(\n                    \"div\",\n                    { className: \"card-body\" },\n                    React.createElement(\n                      \"ul\",\n                      { className: \"list\" },\n                      React.createElement(\n                        \"li\",\n                        { \"data-index\": i, \"data-num\": j, className: \"item\", onClick: me.editPosition },\n                        React.createElement(\n                          \"div\",\n                          { \"data-index\": i, \"data-num\": j, className: \"item-media\" },\n                          React.createElement(\"span\", { \"data-index\": i, \"data-num\": j, className: \"icon icon-position\" })\n                        ),\n                        React.createElement(\n                          \"div\",\n                          { \"data-index\": i, \"data-num\": j, className: \"item-title\" },\n                          innerItem.text == \"[\u672A\u8BBE\u7F6E]\" ? \"\u7F16\u8F91\u804C\u4F4D\" : innerItem.position\n                        )\n                      ),\n                      React.createElement(\n                        \"li\",\n                        { \"data-index\": i, \"data-num\": j, className: \"item\", onClick: me.editUser },\n                        React.createElement(\n                          \"div\",\n                          { \"data-index\": i, \"data-num\": j, className: \"item-media\" },\n                          React.createElement(\"span\", { \"data-index\": i, \"data-num\": j, className: \"icon icon-user\" })\n                        ),\n                        React.createElement(\n                          \"div\",\n                          { \"data-index\": i, \"data-num\": j, className: \"item-title\" },\n                          innerItem.text == \"[\u672A\u8BBE\u7F6E]\" ? \"\u9009\u62E9\u5BA1\u6279\u4EBA\" : innerItem.text\n                        )\n                      )\n                    )\n                  ),\n                  React.createElement(\n                    \"div\",\n                    { className: \"card-footer\" },\n                    React.createElement(\n                      \"a\",\n                      { \"data-index\": i, \"data-num\": j, onClick: me.deleteCard, style: { width: \"45%\" } },\n                      React.createElement(\"i\", { className: \"icon icon-delete\" }),\n                      \"\\u5220\\u9664\\u5F53\\u524D\\u8282\\u70B9\"\n                    ),\n                    React.createElement(\n                      \"a\",\n                      { style: { color: \"#999\" } },\n                      \"|\"\n                    ),\n                    React.createElement(\n                      \"a\",\n                      { \"data-index\": i, \"data-num\": j, onClick: me.addCard, style: { width: \"45%\" } },\n                      React.createElement(\"i\", { className: \"icon icon-add\" }),\n                      \"\\u6DFB\\u52A0\\u540C\\u7EA7\\u8282\\u70B9\"\n                    )\n                  )\n                );\n              })\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"approval-item\" },\n            React.createElement(\"i\", null),\n            React.createElement(\n              \"a\",\n              { onClick: me.addItem, \"data-index\": i, className: \"btn btn-sm btn-warning\" },\n              React.createElement(\"span\", { className: \"icon icon-plus\" }),\n              \"\\u6DFB\\u52A0\\u5BA1\\u6279\\u8282\\u70B9\"\n            )\n          )\n        );\n      }),\n      React.createElement(\n        \"div\",\n        { className: \"approval-group\" },\n        React.createElement(\n          \"div\",\n          { className: \"approval-item\" },\n          React.createElement(\"i\", null),\n          React.createElement(\n            \"span\",\n            null,\n            \"\\u7ED3\\u675F\"\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control57_dJg0nK: function (elem) {
      if (!elem) {
        return;
      }var buttons = elem.children;var data = [];for (var i = 0; i < buttons.length; i++) {
        if ($(buttons[i]).hasClass("separator")) {
          break;
        }if (buttons[i].style.display == "none") {
          continue;
        }if ($(buttons[i]).hasClass("mini-button-disabled")) {
          continue;
        }var obj = { title: buttons[i].textContent.trim(), index: i };if (obj.title == "搜索") {
          continue;
        }if (obj.title == "删除") {
          obj.hollow = true;obj.amStyle = "alert";
        }data.push(obj);
      }return data;
    },
    doAction_uiControl84_Gd4nG5: function (data, elem) {
      var buttons = elem.children;if (data.eventType == "clickButton") {
        buttons[data.customData].click();
      }
    },
    getTemplate_uiControl84_Gd4nG5: function () {
      var selfTemplate = "const Container = AMUI2.Container;\nconst ButtonAction = AMUI2.ButtonAction;\nconst wrapStyle = {\n  margin: '8px 4px',\n  padding: 0,\n  background: '#fff',\n  borderRadius: '4px'\n};\n\nconst ListStyle = {\n  listStyle: 'none',\n  color: '#3d8cf8',\n  padding: 0,\n  marginLeft: '15px',\n  marginRight: '15px'\n};\n\nconst listStyle = {\n  borderBottom: '1px solid #d8d8d8',\n  paddingTop: '14px',\n  paddingBottom: '14px',\n  lineHeight: 1,\n};\n\nconst listLastStyle = {\n  paddingTop: '14px',\n  paddingBottom: '14px',\n  lineHeight: 1,\n};\nmodule.exports = React.createClass({\n  clickButton:function(e){\n    var obj = this.props.customData;\n    var current = e.target.innerHTML;\n    function index(current, obj){ \n      for (var i = 0, length = obj.length; i<length; i++) { \n        if (obj[i].title == current) {\n        \treturn obj[i].index; \n        } \n      } \n    }\n    var index = index(current,obj);\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"clickButton\",\n        data:index\n      })\n    }\n  },\n  clickOthers:function(e){\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if(handler){\n      handler({\n        eventType:\"clickButton\",\n        data:index\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(!data||data.length==0){\n      return(<div></div>);\n    }\n    var obj = this.props.customData;\n    var actions = [];\n    var others = [];\n    for (var i = 0, length = obj.length; i<length; i++) {\n      if(length<3){\n        actions.push(obj[i]);\n      }else{\n        if(i==0||obj[i].title==\"\u5220\u9664\"){\n          actions.push(obj[i])\n        }else{\n          others.push(obj[i])\n        }\n      }\n    }\n    if(actions.length<2&&others.length>0){\n      actions.push(others.shift())\n    }\n    actions[0].onClick=this.clickButton;\n    actions[1]?actions[1].onClick=this.clickButton:\"\";\n    var me = this;\n    return (\n      <Container>\n        <ButtonAction\n          actions={actions}\n        >\n          {data.length>2?\n            <div style={wrapStyle}>\n              <ul style={ListStyle}>\n                {others.map(function(item,i){\n                  return(\n                    <li onClick={me.clickOthers} data-index={item.index} style={i==others.length-1?listLastStyle:listStyle}>{item.title}</li>\n                  )\n                })}\n              </ul>\n            </div>:\n          \tundefined\n          }\n          \n        </ButtonAction>\n      </Container>\n    )\n  }\n});";
      return "'use strict';\n\nvar Container = AMUI2.Container;\nvar ButtonAction = AMUI2.ButtonAction;\nvar wrapStyle = {\n  margin: '8px 4px',\n  padding: 0,\n  background: '#fff',\n  borderRadius: '4px'\n};\n\nvar ListStyle = {\n  listStyle: 'none',\n  color: '#3d8cf8',\n  padding: 0,\n  marginLeft: '15px',\n  marginRight: '15px'\n};\n\nvar listStyle = {\n  borderBottom: '1px solid #d8d8d8',\n  paddingTop: '14px',\n  paddingBottom: '14px',\n  lineHeight: 1\n};\n\nvar listLastStyle = {\n  paddingTop: '14px',\n  paddingBottom: '14px',\n  lineHeight: 1\n};\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  clickButton: function clickButton(e) {\n    var obj = this.props.customData;\n    var current = e.target.innerHTML;\n    function index(current, obj) {\n      for (var i = 0, length = obj.length; i < length; i++) {\n        if (obj[i].title == current) {\n          return obj[i].index;\n        }\n      }\n    }\n    var index = index(current, obj);\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"clickButton\",\n        data: index\n      });\n    }\n  },\n  clickOthers: function clickOthers(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if (handler) {\n      handler({\n        eventType: \"clickButton\",\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data || data.length == 0) {\n      return React.createElement('div', null);\n    }\n    var obj = this.props.customData;\n    var actions = [];\n    var others = [];\n    for (var i = 0, length = obj.length; i < length; i++) {\n      if (length < 3) {\n        actions.push(obj[i]);\n      } else {\n        if (i == 0 || obj[i].title == \"\u5220\u9664\") {\n          actions.push(obj[i]);\n        } else {\n          others.push(obj[i]);\n        }\n      }\n    }\n    if (actions.length < 2 && others.length > 0) {\n      actions.push(others.shift());\n    }\n    actions[0].onClick = this.clickButton;\n    actions[1] ? actions[1].onClick = this.clickButton : \"\";\n    var me = this;\n    return React.createElement(\n      Container,\n      null,\n      React.createElement(\n        ButtonAction,\n        {\n          actions: actions\n        },\n        data.length > 2 ? React.createElement(\n          'div',\n          { style: wrapStyle },\n          React.createElement(\n            'ul',\n            { style: ListStyle },\n            others.map(function (item, i) {\n              return React.createElement(\n                'li',\n                { onClick: me.clickOthers, 'data-index': item.index, style: i == others.length - 1 ? listLastStyle : listStyle },\n                item.title\n              );\n            })\n          )\n        ) : undefined\n      )\n    );\n  }\n});";
    },

    getData_control98_0Rqtr9: function (elem) {
      if (!elem) {
        return;
      }var boxs = $(elem).parent().parent().children(".mini-messagebox");if (boxs.length == 0) {
        return;
      }var target = boxs[boxs.length - 1];var data = {};data.title = target.querySelector(".mini-panel-header").textContent.trim();data.text = target.querySelector(".mini-messagebox-content").textContent.trim();if (target.querySelector("input[type=text]")) {
        data.input = true;data.val = target.querySelector("input[type=text]").value;
      }var buttons = target.querySelector(".mini-messagebox-buttons").children;var btns = [];for (var i = 0; i < buttons.length; i++) {
        btns.push(buttons[i].textContent);
      }data.buttons = btns;return data;
    },
    doAction_uiControl85_sdhdDu: function (data, elem) {
      var boxs = $(elem).parent().parent().children(".mini-messagebox");if (boxs.length == 0) {
        return;
      }var target = boxs[boxs.length - 1];var input = target.querySelector("input[type=text]");var buttons = target.querySelector(".mini-messagebox-buttons").children;if (data.eventType == "click") {
        buttons[data.customData].click();
      }if (data.eventType == "changeInput") {
        input.value = data.customData;
      }
    },
    getTemplate_uiControl85_sdhdDu: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if(handler){\n      handler({\n        eventType:\"click\",\n        data:index\n      })\n    }\n  },\n  changeInput:function(e){\n    var handler = this.props.customHandler;\n    var val = e.target.value;\n    if(handler){\n      handler({\n        eventType:\"changeInput\",\n        data:val\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(!data){return(<div></div>);}\n    return (\n      <span>\n        <div className=\"modal modal-confirm\">\n          <div className=\"modal-inner\">\n            <div className=\"modal-dialog\">\n              <div className=\"modal-header\">\n                <h4 className=\"modal-title\">{data.title}</h4>\n              </div>\n              <div className=\"modal-body\" style={{textAlign:data.input?\"left\":\"center\"}}>\n              \t{data.text}\n                {data.input?<input className=\"\" type=\"text\" defaultValue={data.val} onBlur={me.changeInput} />:undefined}\n              </div>\n              <div className=\"modal-footer\">\n                {data.buttons.map(function(item,i){\n                  return(\n                \t\t<span data-index={i} onClick={me.click} className=\"modal-btn\">{item}</span>\n                  )\n                })}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div className=\"modal-backdrop active\" style={{height:\"100%\"}}></div></span>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.attributes[\"data-index\"].value;\n    if (handler) {\n      handler({\n        eventType: \"click\",\n        data: index\n      });\n    }\n  },\n  changeInput: function changeInput(e) {\n    var handler = this.props.customHandler;\n    var val = e.target.value;\n    if (handler) {\n      handler({\n        eventType: \"changeInput\",\n        data: val\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (!data) {\n      return React.createElement(\"div\", null);\n    }\n    return React.createElement(\n      \"span\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"modal modal-confirm\" },\n        React.createElement(\n          \"div\",\n          { className: \"modal-inner\" },\n          React.createElement(\n            \"div\",\n            { className: \"modal-dialog\" },\n            React.createElement(\n              \"div\",\n              { className: \"modal-header\" },\n              React.createElement(\n                \"h4\",\n                { className: \"modal-title\" },\n                data.title\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"modal-body\", style: { textAlign: data.input ? \"left\" : \"center\" } },\n              data.text,\n              data.input ? React.createElement(\"input\", { className: \"\", type: \"text\", defaultValue: data.val, onBlur: me.changeInput }) : undefined\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"modal-footer\" },\n              data.buttons.map(function (item, i) {\n                return React.createElement(\n                  \"span\",\n                  { \"data-index\": i, onClick: me.click, className: \"modal-btn\" },\n                  item\n                );\n              })\n            )\n          )\n        )\n      ),\n      React.createElement(\"div\", { className: \"modal-backdrop active\", style: { height: \"100%\" } })\n    );\n  }\n});";
    },
    getData_control40_Oo65Vq: function (elem) {
      if (!elem) {
        return;
      }var wins = $(elem).children(".mini-window");var target = wins[wins.length - 1].querySelector(".mini-panel-header-inner");return target.querySelector(".mini-panel-title").textContent;
    },
    doAction_uiControl16_eRtqDr: function (data, elem) {
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
    getTemplate_uiControl16_eRtqDr: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nmodule.exports = React.createClass({\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  action:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"action\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n        </HeaderRight>\n      </Header>\n    );\n  }\n});\n\n\n";
      return "\"use strict\";\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  action: function action() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"action\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \"primary\", title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.back },\n          React.createElement(\"span\", { className: \"icon icon-left-nav\" }),\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(_yspInteriorComponents.HeaderRight, null)\n    );\n  }\n});";
    },
    getData_control171_WXXuEG: function (elem) {
      if (!elem) {
        return;
      }var tips = $(elem).children(".mini-tips");if (tips.length == 0) return;var target = tips[tips.length - 1];var text = target.textContent;var style = $(target).hasClass("mini-tips-danger") ? "alert" : $(target).hasClass("mini-tips-success") ? "success" : "primary";return { text: text, style: style };
    },
    doAction_uiControl155_Xgy6eA: function (data, elem) {},
    getTemplate_uiControl155_Xgy6eA: function () {
      var selfTemplate = "const Notification = AMUI2.Notification;\nmodule.exports = React.createClass({\n  getInitialState:function(){\n    return({\n      visible:\"true\"\n    })\n  },\n  closeNotification:function(){\n    this.setState({\n      visible:\"false\"\n    })\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(!data){return(<div></div>)}\n    return (\n      <Notification\n          title=\"\u63D0\u793A\"\n          amStyle={data.style}\n          visible=\"true\"\n          animated\n          onDismiss={this.closeNotification}\n        >\n          {data.text}\n        </Notification>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar Notification = AMUI2.Notification;\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  getInitialState: function getInitialState() {\n    return {\n      visible: \"true\"\n    };\n  },\n  closeNotification: function closeNotification() {\n    this.setState({\n      visible: \"false\"\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return React.createElement(\"div\", null);\n    }\n    return React.createElement(\n      Notification,\n      {\n        title: \"\\u63D0\\u793A\",\n        amStyle: data.style,\n        visible: \"true\",\n        animated: true,\n        onDismiss: this.closeNotification\n      },\n      data.text\n    );\n  }\n});";
    }
  });
})(window, ysp);