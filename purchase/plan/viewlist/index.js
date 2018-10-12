(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control172_svrDpx: function (elem) {
      if (!elem) {
        return;
      }var _doc = elem.ownerDocument;var theadBox = _doc && _doc.querySelector(".mini-grid-columns");var theads = [];var theadRow1 = theadBox.querySelector(".mini-grid-columns-view").querySelector("tbody").children[1].children;if (theadRow1) {
        for (var i = 0; i < theadRow1.length; i++) {
          var obj = {};obj.title = theadRow1[i].textContent.trim(); //if (obj.title == "") continue;
          obj.num = 1 + i / 100;theads.push(obj);
        }
      }var t1_length = theads.length;
      var rows = [];var rows1 = _doc.querySelector(".mini-grid-rows-view").querySelector("tbody").children;if (rows1.length > 1) {
        for (var i = 1; i < rows1.length; i++) {
          console.log();var tds = rows1[i].children;var obj = { properties: [] };if (rows1[i].querySelector("a")) {
            obj.index = i;
          }$.each(tds, function (index, item) {
            if (theads[Number(index)].title.indexOf("编号") > -1) {
              obj.number = item.textContent.trim();
            } else {
              var _thead = theads[index];var text = item.textContent.trim();if (_thead.title == "" || _thead.title == "0") return true;if (_thead.title == "运输计价类别" || _thead.title == "计划名称" || _thead.title == "任务名称") {
                obj.title = text;
              } else {
                obj.properties.push([_thead.title, text]);
              }
            }
          });
          rows.push(obj);
        }
      }return rows;
    }, doAction_uiControl148_EZB2M0: function (data, elem) {},
    getTemplate_uiControl148_EZB2M0: function () {
      var selfTemplate = "module.exports = React.createClass({\n  getInitialState:function(){\n    return({\n      activeList:-1\n    })\n  },\n  clickTitle:function(e){\n    var index = e.target.attributes[\"data-index\"].value;\n    this.setState({\n      activeList:this.state.activeList==index?-1:index\n    })\n  },\n  render: function() {\n    var data = this.props.customData;\n  \tvar me = this;\n    return (\n      <div>\n        {data&&data.map(function(item,i){\n          return(\n            <div className=\"card dec-card\">\n              <div className=\"card-body\" style={{height:me.state.activeList==i?\"auto\":\"46px\"}}>\n                  <ul className=\"list\" style={{margin:0}}>\n                    <li className=\"item\" data-index={i} onClick={me.clickTitle} style={{background:\"#fff\"}}>\n\n                      <div data-index={i} className=\"item-title\" style={{whiteSpace:\"nowrap\"}}>{item.title}</div>\n                      <div data-index={i} className=\"item-after\">\n                        <span data-index={i} className={me.state.activeList==i?\"icon icon-down-nav\":\"icon icon-right-nav\"} style={{fontSize:16}}></span>\n                      </div>\n                    </li>\n                    {item.properties.map(function(tItem,k){\n                      return(\n                        <li className=\"item\" style={{background:\"#fff\"}}>\n                          <div className=\"item-title\" style={{minWidth: \"4em\"}}>\n                            {tItem[0]}\n                          </div>\n                          <div className=\"item-after\" style={{lineHeight:tItem[1].length>15?1.2:0}}>\n                            {tItem[1]}\n                          </div>\n                        </li>\n                      )\n                    })}\n                  </ul>\n              </div>\n            </div>\n          )\n        })}\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  getInitialState: function getInitialState() {\n    return {\n      activeList: -1\n    };\n  },\n  clickTitle: function clickTitle(e) {\n    var index = e.target.attributes[\"data-index\"].value;\n    this.setState({\n      activeList: this.state.activeList == index ? -1 : index\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \"div\",\n      null,\n      data && data.map(function (item, i) {\n        return React.createElement(\n          \"div\",\n          { className: \"card dec-card\" },\n          React.createElement(\n            \"div\",\n            { className: \"card-body\", style: { height: me.state.activeList == i ? \"auto\" : \"46px\" } },\n            React.createElement(\n              \"ul\",\n              { className: \"list\", style: { margin: 0 } },\n              React.createElement(\n                \"li\",\n                { className: \"item\", \"data-index\": i, onClick: me.clickTitle, style: { background: \"#fff\" } },\n                React.createElement(\n                  \"div\",\n                  { \"data-index\": i, className: \"item-title\", style: { whiteSpace: \"nowrap\" } },\n                  item.title\n                ),\n                React.createElement(\n                  \"div\",\n                  { \"data-index\": i, className: \"item-after\" },\n                  React.createElement(\"span\", { \"data-index\": i, className: me.state.activeList == i ? \"icon icon-down-nav\" : \"icon icon-right-nav\", style: { fontSize: 16 } })\n                )\n              ),\n              item.properties.map(function (tItem, k) {\n                return React.createElement(\n                  \"li\",\n                  { className: \"item\", style: { background: \"#fff\" } },\n                  React.createElement(\n                    \"div\",\n                    { className: \"item-title\", style: { minWidth: \"4em\" } },\n                    tItem[0]\n                  ),\n                  React.createElement(\n                    \"div\",\n                    { className: \"item-after\", style: { lineHeight: tItem[1].length > 15 ? 1.2 : 0 } },\n                    tItem[1]\n                  )\n                );\n              })\n            )\n          )\n        );\n      })\n    );\n  }\n});";
    },
    getData_control176_d9LfQp: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl159_xNZUrZ: function (data, elem) {},
    getTemplate_uiControl159_xNZUrZ: function () {
      var selfTemplate = "import { Header, HeaderLeft, HeaderRight } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  back:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"back\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <Header amStyle=\"primary\" title=\"\u67E5\u770B\u6E05\u5355\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={back}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          \n        </HeaderRight>\n      </Header>\n    );\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: 'primary', title: '\\u67E5\\u770B\\u6E05\\u5355' },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: 'primary', style: { margin: 0 }, onClick: _appRenderer.back },\n          React.createElement('span', { className: 'icon icon-left-nav' }),\n          '\\u8FD4\\u56DE'\n        )\n      ),\n      React.createElement(_yspInteriorComponents.HeaderRight, null)\n    );\n  }\n});";
    }
  });
})(window, ysp);