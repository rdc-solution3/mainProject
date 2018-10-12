(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control157_ezG5zt: function (elem) {
      if (!elem) {
        return;
      }var wins = $(elem).children(".mini-window");elem = wins[wins.length - 1].querySelector(".mini-panel-header-inner");return elem.querySelector(".mini-panel-title").textContent;
    },
    doAction_uiControl110_feKIq5: function (data, elem) {
      if (data.eventType == "back") {
        var wins = $(elem).children(".mini-window");elem = wins[wins.length - 1].querySelector(".mini-panel-header-inner");elem.querySelector(".mini-tools-close").click();
      }
    },
    getTemplate_uiControl110_feKIq5: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nmodule.exports = React.createClass({\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={this.back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          \n        </HeaderRight>\n      </Header>\n    );\n  }\n});";
      return "\"use strict\";\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \"primary\", title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \"primary\", style: { margin: 0 }, onClick: this.back },\n          React.createElement(\"span\", { className: \"icon icon-left-nav\" }),\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(_yspInteriorComponents.HeaderRight, null)\n    );\n  }\n});";
    },
    getData_control164_tvykeS: function (elem) {
      if (!elem) {
        return;
      }var data = { list: [] };$(elem).find('td').each(function (i, e) {
        var obj = {};obj.text = $(this).text();obj.index = i;if (obj.text == "") {
          return;
        } else {
          data.list.push(obj);
        }if ($(this).hasClass("mini-tab-active")) {
          data.selected = data.list.length - 1;
        }
      });return data;
    },
    doAction_uiControl142_B7AFE6: function (data, elem) {
      var event = data.eventType;if (event == "clickItem") {
        var data = data.dataCustom;$(elem).find('td').eq(data * 2 + 1).click();
      }
    },
    getTemplate_uiControl142_B7AFE6: function () {
      var selfTemplate = "const Tabs = AMUI2.Tabs;\nconst Container = AMUI2.Container;\nmodule.exports = React.createClass({\n  clickItem: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"clickItem\",\n        data:e\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return(\n      \t<div></div>\n      )\n    }\n    return (\n      <Container>\n        <Tabs activeKey={data.selected} onAction={this.clickItem} style={{marginBottom:0, marginTop:0}} secondTab render=\"current\">\n          {data.list.map(function(d,i){\n            return(\n            \t<Tabs.Item title={d.text} noPadded></Tabs.Item>\n            )\n          })}\n        </Tabs>\n      </Container>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar Tabs = AMUI2.Tabs;\nvar Container = AMUI2.Container;\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  clickItem: function clickItem(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"clickItem\",\n        data: e\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return React.createElement(\"div\", null);\n    }\n    return React.createElement(\n      Container,\n      null,\n      React.createElement(\n        Tabs,\n        { activeKey: data.selected, onAction: this.clickItem, style: { marginBottom: 0, marginTop: 0 }, secondTab: true, render: \"current\" },\n        data.list.map(function (d, i) {\n          return React.createElement(Tabs.Item, { title: d.text, noPadded: true });\n        })\n      )\n    );\n  }\n});";
    },

    getData_control173_bkBwBp: function (elem) {
      if (!elem) {
        return;
      }var bodys = elem.children;$.each(bodys, function (index, item) {
        if (item.style.display != "none") {
          elem = item.querySelector("iframe").contentDocument.body.children[0];
        }
      });var data = [];var h1 = elem.querySelector("h2");data.push({ title: "标题", isTitle: true, text: h1.textContent.trim() });var h3 = $(elem.children[0]).children("table");for (var i = 1; i < h3.length; i++) {
        var obj = {};obj.title = i == 1 ? "基本信息" : i == 2 ? "调价明细" : "其他信息";var table = h3[i];if (!table) {
          continue;
        }if (i == 2) {
          var trs = table.querySelector("tbody").children;var theads = trs[0].children;obj.table = [];for (var j = 1; j < trs.length; j++) {
            var tds = trs[j].children;var vals = [];$.each(tds, function (index, item) {
              if (item.textContent.trim().indexOf("合计") > -1) {
                return false;
              }var val = item.textContent.replace(item.querySelector("script"));if (item.querySelector("script")) {
                var scrs = item.querySelectorAll("script");$.each(scrs, function (index, sitem) {
                  val = val.replace(sitem.textContent, "");
                });
              }var title = theads[index].textContent.trim();if (title == "材料名称") {
                vals.unshift({ title: title, val: val.trim() });
              } else {
                vals.push({ title: title, val: val.trim() });
              }
            });obj.table.push(vals);
          }
        } else {
          obj.vals = [];var tds = table.querySelectorAll("td");$.each(tds, function (index, item) {
            if (index % 2 == 0) {
              obj.vals.push({ title: item.textContent.trim() });
            } else {
              var val = item.textContent;if (item.querySelector("script")) {
                var scrs = item.querySelectorAll("script");$.each(scrs, function (sindex, sitem) {
                  val = val.replace(sitem.textContent, "");
                });
              }obj.vals[obj.vals.length - 1].val = val.trim();
            }
          });
        }data.push(obj);
      }return data;
    },
    doAction_uiControl156_rclZd7: function (data, elem) {},
    getTemplate_uiControl156_rclZd7: function () {
      var selfTemplate = "const Title = AMUI2.Title;\nconst Field = AMUI2.Field;\nconst Container = AMUI2.Container;\nconst Button = AMUI2.Button;\nconst Group = AMUI2.Group;\nconst Icon = AMUI2.Icon;\nconst Switch = AMUI2.Switch;\n\nmodule.exports = React.createClass({\n  getInitialState:function(){\n    return({\n      activeList:0,\n      zhankai:false\n    })\n  },\n  clickTitle:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    this.setState({\n      activeList:this.state.activeList==index?0:index\n    })\n  },\n  zhankai:function(){\n    this.setState({\n      zhankai:!this.state.zhankai\n    })\n  },\n  render: function() {\n    var me=this;\n    var data=this.props.customData;\n    return (\n      <Container>\n        {data&&data.map(function(item,i){\n          if(item.table){\n            return(\n            \t<div style={{background: '#fff',marginTop: '10px', marginBottom: '10px',position:\"relative\",paddingBottom:\"20px\"}}>\n                <Title text={item.title} amStyle=\"primary\"></Title>\n                {item.table.map(function(innerItem,j){\n                  \n                  if(innerItem.length>0){\n                    return(\n                      <div className=\"card dec-card\">\n                        <div className=\"card-body\" style={{height:me.state.activeList==i+\"\"+j?\"auto\":\"46px\"}}>\n                            <ul className=\"list\" style={{margin:0}}>\n                              <li className=\"item\" data-index={i+\"\"+j} onClick={me.clickTitle}>\n\n                                <div data-index={i+\"\"+j} className=\"item-title\" style={{whiteSpace:\"nowrap\"}}>{innerItem[0].val}</div>\n                                <div data-index={i+\"\"+j} className=\"item-after\">\n                                  <span data-index={i+\"\"+j} className={me.state.activeList==i+\"\"+j?\"icon icon-down-nav\":\"icon icon-right-nav\"} style={{fontSize:16}}></span>\n                                </div>\n                              </li>\n                              {innerItem.map(function(tItem,k){\n                                return(\n                                  <li className=\"item\">\n                                    <div className=\"item-title\" style={{minWidth: \"4em\"}}>\n                                      {tItem.title}\n                                    </div>\n                                    <div className=\"item-after\" style={{lineHeight:tItem.val.length>15?1.2:0}}>\n                                      {tItem.val}\n                                    </div>\n                                  </li>\n                                )\n                              })}\n                            </ul>\n                        </div>\n                      </div>\n                    )\n                  }\n                })}\n              </div>\n            )\n          }else if(item.vals){\n            return(\n              <div style={{background: '#fff',marginTop: '10px', marginBottom: '10px'}}>\n                <Title text={item.title} amStyle=\"primary\"></Title>\n                <ul className=\"list\" style={{marginTop: '0px'}}>\n                {item.vals.map(function(innerItem,j){\n                  if(innerItem.val.length+innerItem.title.length>24){\n                    return(\n                     <li className=\"item item-content\">\n                        <div className=\"item-main\">\n                          <div className=\"item-title-row\">\n                            <h3 className=\"item-title\">\n                          {innerItem.title}</h3>\n                          </div>\n                          <div className={me.state.zhankai?\"item-desc zhankai\":\"item-desc\"} onClick={me.zhankai}>{innerItem.val}</div>\n                        </div>\n                      </li>\n                    )\n                  }\n                  return(\n                     <li className=\"item\">\n                      <div className=\"item-title\">\n                        {innerItem.title}\n                      </div>\n                      <div className=\"item-after\">\n                        {innerItem.val}\n                      </div>\n                    </li>\n                  )\n\n                })}\n\t\t\t\t\t\t\t\t</ul>\n              </div>\n            )\n          }else{\n            return(\n              <div style={{background: '#fff',marginTop: '10px', marginBottom: '10px'}}>\n                <Title text={item.title} amStyle=\"primary\"></Title>\n                \n                <Group className=\"dec-group\">\n                  {item.text}\n                  <div style={{height:15}}></div>\n                </Group>\n\n              </div>\n            )\n          }\n          \n        })}\n      </Container>\n    )\n  }\n});";
      return "'use strict';\n\nvar Title = AMUI2.Title;\nvar Field = AMUI2.Field;\nvar Container = AMUI2.Container;\nvar Button = AMUI2.Button;\nvar Group = AMUI2.Group;\nvar Icon = AMUI2.Icon;\nvar Switch = AMUI2.Switch;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  getInitialState: function getInitialState() {\n    return {\n      activeList: 0,\n      zhankai: false\n    };\n  },\n  clickTitle: function clickTitle(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    this.setState({\n      activeList: this.state.activeList == index ? 0 : index\n    });\n  },\n  zhankai: function zhankai() {\n    this.setState({\n      zhankai: !this.state.zhankai\n    });\n  },\n  render: function render() {\n    var me = this;\n    var data = this.props.customData;\n    return React.createElement(\n      Container,\n      null,\n      data && data.map(function (item, i) {\n        if (item.table) {\n          return React.createElement(\n            'div',\n            { style: { background: '#fff', marginTop: '10px', marginBottom: '10px', position: \"relative\", paddingBottom: \"20px\" } },\n            React.createElement(Title, { text: item.title, amStyle: 'primary' }),\n            item.table.map(function (innerItem, j) {\n\n              if (innerItem.length > 0) {\n                return React.createElement(\n                  'div',\n                  { className: 'card dec-card' },\n                  React.createElement(\n                    'div',\n                    { className: 'card-body', style: { height: me.state.activeList == i + \"\" + j ? \"auto\" : \"46px\" } },\n                    React.createElement(\n                      'ul',\n                      { className: 'list', style: { margin: 0 } },\n                      React.createElement(\n                        'li',\n                        { className: 'item', 'data-index': i + \"\" + j, onClick: me.clickTitle },\n                        React.createElement(\n                          'div',\n                          { 'data-index': i + \"\" + j, className: 'item-title', style: { whiteSpace: \"nowrap\" } },\n                          innerItem[0].val\n                        ),\n                        React.createElement(\n                          'div',\n                          { 'data-index': i + \"\" + j, className: 'item-after' },\n                          React.createElement('span', { 'data-index': i + \"\" + j, className: me.state.activeList == i + \"\" + j ? \"icon icon-down-nav\" : \"icon icon-right-nav\", style: { fontSize: 16 } })\n                        )\n                      ),\n                      innerItem.map(function (tItem, k) {\n                        return React.createElement(\n                          'li',\n                          { className: 'item' },\n                          React.createElement(\n                            'div',\n                            { className: 'item-title', style: { minWidth: \"4em\" } },\n                            tItem.title\n                          ),\n                          React.createElement(\n                            'div',\n                            { className: 'item-after', style: { lineHeight: tItem.val.length > 15 ? 1.2 : 0 } },\n                            tItem.val\n                          )\n                        );\n                      })\n                    )\n                  )\n                );\n              }\n            })\n          );\n        } else if (item.vals) {\n          return React.createElement(\n            'div',\n            { style: { background: '#fff', marginTop: '10px', marginBottom: '10px' } },\n            React.createElement(Title, { text: item.title, amStyle: 'primary' }),\n            React.createElement(\n              'ul',\n              { className: 'list', style: { marginTop: '0px' } },\n              item.vals.map(function (innerItem, j) {\n                if (innerItem.val.length + innerItem.title.length > 24) {\n                  return React.createElement(\n                    'li',\n                    { className: 'item item-content' },\n                    React.createElement(\n                      'div',\n                      { className: 'item-main' },\n                      React.createElement(\n                        'div',\n                        { className: 'item-title-row' },\n                        React.createElement(\n                          'h3',\n                          { className: 'item-title' },\n                          innerItem.title\n                        )\n                      ),\n                      React.createElement(\n                        'div',\n                        { className: me.state.zhankai ? \"item-desc zhankai\" : \"item-desc\", onClick: me.zhankai },\n                        innerItem.val\n                      )\n                    )\n                  );\n                }\n                return React.createElement(\n                  'li',\n                  { className: 'item' },\n                  React.createElement(\n                    'div',\n                    { className: 'item-title' },\n                    innerItem.title\n                  ),\n                  React.createElement(\n                    'div',\n                    { className: 'item-after' },\n                    innerItem.val\n                  )\n                );\n              })\n            )\n          );\n        } else {\n          return React.createElement(\n            'div',\n            { style: { background: '#fff', marginTop: '10px', marginBottom: '10px' } },\n            React.createElement(Title, { text: item.title, amStyle: 'primary' }),\n            React.createElement(\n              Group,\n              { className: 'dec-group' },\n              item.text,\n              React.createElement('div', { style: { height: 15 } })\n            )\n          );\n        }\n      })\n    );\n  }\n});";
    },
    getData_control175_9TN0IA: function (elem) {
      if (!elem) {
        return;
      }var bodys = elem.children;$.each(bodys, function (index, item) {
        if (item.style.display != "none") {
          elem = item.querySelector("iframe").contentDocument.querySelector(".approval");
        }
      });var data = [];var h1 = elem.querySelector("h2");data.push({ title: "标题", isTitle: true, text: h1.textContent.trim() });var h3 = $(elem.children[0]).children("table");for (var i = 1; i < h3.length; i++) {
        var obj = {};obj.title = i == 1 ? "基本信息" : i == 2 ? "调价明细" : "其他信息";var table = h3[i];if (!table) {
          continue;
        }if (i == 2) {
          var trs = table.querySelector("tbody").children;var theads = trs[0].children;obj.table = [];for (var j = 1; j < trs.length; j++) {
            var tds = trs[j].children;var vals = [];$.each(tds, function (index, item) {
              if (item.textContent.trim().indexOf("合计") > -1) {
                return false;
              }var val = item.textContent.replace(item.querySelector("script"));if (item.querySelector("script")) {
                var scrs = item.querySelectorAll("script");$.each(scrs, function (index, sitem) {
                  val = val.replace(sitem.textContent, "");
                });
              }var title = theads[index].textContent.trim();if (title == "材料名称") {
                vals.unshift({ title: title, val: val.trim() });
              } else {
                vals.push({ title: title, val: val.trim() });
              }
            });obj.table.push(vals);
          }
        } else {
          obj.vals = [];var tds = table.querySelectorAll("td");$.each(tds, function (index, item) {
            if (index % 2 == 0) {
              obj.vals.push({ title: item.textContent.trim() });
            } else {
              var val = item.textContent;if (item.querySelector("script")) {
                var scrs = item.querySelectorAll("script");$.each(scrs, function (sindex, sitem) {
                  val = val.replace(sitem.textContent, "");
                });
              }obj.vals[obj.vals.length - 1].val = val.trim();
            }
          });
        }data.push(obj);
      }return data;
    },
    doAction_uiControl157_vQKkk3: function (data, elem) {},
    getTemplate_uiControl157_vQKkk3: function () {
      var selfTemplate = "const Title = AMUI2.Title;\nconst Field = AMUI2.Field;\nconst Container = AMUI2.Container;\nconst Button = AMUI2.Button;\nconst Group = AMUI2.Group;\nconst Icon = AMUI2.Icon;\nconst Switch = AMUI2.Switch;\n\nmodule.exports = React.createClass({\n  getInitialState:function(){\n    return({\n      activeList:0,\n      zhankai:false\n    })\n  },\n  clickTitle:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    this.setState({\n      activeList:this.state.activeList==index?0:index\n    })\n  },\n  zhankai:function(){\n    this.setState({\n      zhankai:!this.state.zhankai\n    })\n  },\n  render: function() {\n    var me=this;\n    var data=this.props.customData;\n    return (\n      <Container>\n        {data&&data.map(function(item,i){\n          if(item.table){\n            return(\n            \t<div style={{background: '#fff',marginTop: '10px', marginBottom: '10px',position:\"relative\",paddingBottom:\"20px\"}}>\n                <Title text={item.title} amStyle=\"primary\"></Title>\n                {item.table.map(function(innerItem,j){\n                  \n                  if(innerItem.length>0){\n                    return(\n                      <div className=\"card dec-card\">\n                        <div className=\"card-body\" style={{height:me.state.activeList==i+\"\"+j?\"auto\":\"46px\"}}>\n                            <ul className=\"list\" style={{margin:0}}>\n                              <li className=\"item\" data-index={i+\"\"+j} onClick={me.clickTitle}>\n\n                                <div data-index={i+\"\"+j} className=\"item-title\" style={{whiteSpace:\"nowrap\"}}>{innerItem[0].val}</div>\n                                <div data-index={i+\"\"+j} className=\"item-after\">\n                                  <span data-index={i+\"\"+j} className={me.state.activeList==i+\"\"+j?\"icon icon-down-nav\":\"icon icon-right-nav\"} style={{fontSize:16}}></span>\n                                </div>\n                              </li>\n                              {innerItem.map(function(tItem,k){\n                                return(\n                                  <li className=\"item\">\n                                    <div className=\"item-title\" style={{minWidth: \"4em\"}}>\n                                      {tItem.title}\n                                    </div>\n                                    <div className=\"item-after\" style={{lineHeight:tItem.val.length>15?1.2:0}}>\n                                      {tItem.val}\n                                    </div>\n                                  </li>\n                                )\n                              })}\n                            </ul>\n                        </div>\n                      </div>\n                    )\n                  }\n                })}\n              </div>\n            )\n          }else if(item.vals){\n            return(\n              <div style={{background: '#fff',marginTop: '10px', marginBottom: '10px'}}>\n                <Title text={item.title} amStyle=\"primary\"></Title>\n                <ul className=\"list\" style={{marginTop: '0px'}}>\n                {item.vals.map(function(innerItem,j){\n                  if(innerItem.val.length+innerItem.title.length>24){\n                    return(\n                     <li className=\"item item-content\">\n                        <div className=\"item-main\">\n                          <div className=\"item-title-row\">\n                            <h3 className=\"item-title\">\n                          {innerItem.title}</h3>\n                          </div>\n                          <div className={me.state.zhankai?\"item-desc zhankai\":\"item-desc\"} onClick={me.zhankai}>{innerItem.val}</div>\n                        </div>\n                      </li>\n                    )\n                  }\n                  return(\n                     <li className=\"item\">\n                      <div className=\"item-title\">\n                        {innerItem.title}\n                      </div>\n                      <div className=\"item-after\">\n                        {innerItem.val}\n                      </div>\n                    </li>\n                  )\n\n                })}\n\t\t\t\t\t\t\t\t</ul>\n              </div>\n            )\n          }else{\n            return(\n              <div style={{background: '#fff',marginTop: '10px', marginBottom: '10px'}}>\n                <Title text={item.title} amStyle=\"primary\"></Title>\n                \n                <Group className=\"dec-group\">\n                  {item.text}\n                  <div style={{height:15}}></div>\n                </Group>\n\n              </div>\n            )\n          }\n          \n        })}\n      </Container>\n    )\n  }\n});";
      return "'use strict';\n\nvar Title = AMUI2.Title;\nvar Field = AMUI2.Field;\nvar Container = AMUI2.Container;\nvar Button = AMUI2.Button;\nvar Group = AMUI2.Group;\nvar Icon = AMUI2.Icon;\nvar Switch = AMUI2.Switch;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  getInitialState: function getInitialState() {\n    return {\n      activeList: 0,\n      zhankai: false\n    };\n  },\n  clickTitle: function clickTitle(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    this.setState({\n      activeList: this.state.activeList == index ? 0 : index\n    });\n  },\n  zhankai: function zhankai() {\n    this.setState({\n      zhankai: !this.state.zhankai\n    });\n  },\n  render: function render() {\n    var me = this;\n    var data = this.props.customData;\n    return React.createElement(\n      Container,\n      null,\n      data && data.map(function (item, i) {\n        if (item.table) {\n          return React.createElement(\n            'div',\n            { style: { background: '#fff', marginTop: '10px', marginBottom: '10px', position: \"relative\", paddingBottom: \"20px\" } },\n            React.createElement(Title, { text: item.title, amStyle: 'primary' }),\n            item.table.map(function (innerItem, j) {\n\n              if (innerItem.length > 0) {\n                return React.createElement(\n                  'div',\n                  { className: 'card dec-card' },\n                  React.createElement(\n                    'div',\n                    { className: 'card-body', style: { height: me.state.activeList == i + \"\" + j ? \"auto\" : \"46px\" } },\n                    React.createElement(\n                      'ul',\n                      { className: 'list', style: { margin: 0 } },\n                      React.createElement(\n                        'li',\n                        { className: 'item', 'data-index': i + \"\" + j, onClick: me.clickTitle },\n                        React.createElement(\n                          'div',\n                          { 'data-index': i + \"\" + j, className: 'item-title', style: { whiteSpace: \"nowrap\" } },\n                          innerItem[0].val\n                        ),\n                        React.createElement(\n                          'div',\n                          { 'data-index': i + \"\" + j, className: 'item-after' },\n                          React.createElement('span', { 'data-index': i + \"\" + j, className: me.state.activeList == i + \"\" + j ? \"icon icon-down-nav\" : \"icon icon-right-nav\", style: { fontSize: 16 } })\n                        )\n                      ),\n                      innerItem.map(function (tItem, k) {\n                        return React.createElement(\n                          'li',\n                          { className: 'item' },\n                          React.createElement(\n                            'div',\n                            { className: 'item-title', style: { minWidth: \"4em\" } },\n                            tItem.title\n                          ),\n                          React.createElement(\n                            'div',\n                            { className: 'item-after', style: { lineHeight: tItem.val.length > 15 ? 1.2 : 0 } },\n                            tItem.val\n                          )\n                        );\n                      })\n                    )\n                  )\n                );\n              }\n            })\n          );\n        } else if (item.vals) {\n          return React.createElement(\n            'div',\n            { style: { background: '#fff', marginTop: '10px', marginBottom: '10px' } },\n            React.createElement(Title, { text: item.title, amStyle: 'primary' }),\n            React.createElement(\n              'ul',\n              { className: 'list', style: { marginTop: '0px' } },\n              item.vals.map(function (innerItem, j) {\n                if (innerItem.val.length + innerItem.title.length > 24) {\n                  return React.createElement(\n                    'li',\n                    { className: 'item item-content' },\n                    React.createElement(\n                      'div',\n                      { className: 'item-main' },\n                      React.createElement(\n                        'div',\n                        { className: 'item-title-row' },\n                        React.createElement(\n                          'h3',\n                          { className: 'item-title' },\n                          innerItem.title\n                        )\n                      ),\n                      React.createElement(\n                        'div',\n                        { className: me.state.zhankai ? \"item-desc zhankai\" : \"item-desc\", onClick: me.zhankai },\n                        innerItem.val\n                      )\n                    )\n                  );\n                }\n                return React.createElement(\n                  'li',\n                  { className: 'item' },\n                  React.createElement(\n                    'div',\n                    { className: 'item-title' },\n                    innerItem.title\n                  ),\n                  React.createElement(\n                    'div',\n                    { className: 'item-after' },\n                    innerItem.val\n                  )\n                );\n              })\n            )\n          );\n        } else {\n          return React.createElement(\n            'div',\n            { style: { background: '#fff', marginTop: '10px', marginBottom: '10px' } },\n            React.createElement(Title, { text: item.title, amStyle: 'primary' }),\n            React.createElement(\n              Group,\n              { className: 'dec-group' },\n              item.text,\n              React.createElement('div', { style: { height: 15 } })\n            )\n          );\n        }\n      })\n    );\n  }\n});";
    }
  });
})(window, ysp);