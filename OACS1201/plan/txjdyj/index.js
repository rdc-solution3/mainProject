(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control86_eThurP: function (elem) {
      if (!elem) {
        return;
      }var tab = elem.querySelector('table>tbody');var tr = tab.children;
      var type = $(tr).eq(0).find('.poptitle').textContent;var data = [];for (var i = 1; i < tr.length; i++) {
        var td = tr[i] && tr[i].querySelector('td');var node = td.children[0].previousSibling.textContent;var obj = {};var oText = td.querySelector('textarea');if (oText) {
          obj.type = 'textarea';obj.value = oText.textContent.trim();obj.name = oText.name;obj.readonly = oText.readOnly;obj.index = i - 1;
        } else {
          obj.type = 'text';obj.value = td && td.textContent;
        }obj.key = node;data.push(obj);
      }return data;
    },
    doAction_uiControl87_50OULy: function (data, elem) {
      var type = data.eventType;if (type == 'blur') {
        var value = data.customData.value;var index = data.customData.id;elem.querySelectorAll('textarea')[index].value = value;elem.querySelectorAll('textarea')[index].dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl87_50OULy: function () {
      var selfTemplate = "module.exports = React.createClass({\n  changeText:function(e){\n    var target = e.target;\n    var value = target.value;\n    var id = target.getAttribute('data-id');\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur',\n        customData:{\n          value:value,\n          id:id\n        }\n      })\n    }\n  },\n  render: function() {\n\n    var data  = this.props.data.customData;\n    var _this = this;\n    var sty = {\n      'width':'100%',\n      'height':'30px',\n      'margin-top':'4px'\n    }\n    if(data){\n    var lis = data.map(function(item,i){\n      if(item.type=='textarea'){\n        return(\n          <div>\n            <b>{item.key}</b>\n            <ATextarea style={sty} value = {item.value} readOnly= {item.readonly} data-name={item.name} onBlur = {_this.changeText} data-id={item.index}></ATextarea>\n          </div>\n        \t\n        )\n      }else if(item.type=='text'){\n        return(\n        \t<div>\n            <b>{item.key}</b>\n            <span>{item.value}</span>\n          </div>\n        )\n      }\n    })\n    }else{\n      return <div></div>\n    }\n    var divSty = {\n      'padding':'0 10px 10px',\n      'font-size':'14px'\n    }\n    return (\n      <div style={divSty}>\n        {lis}\n      </div>\n    )\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  changeText: function changeText(e) {\n    var target = e.target;\n    var value = target.value;\n    var id = target.getAttribute(\'data-id\');\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'blur\',\n        customData: {\n          value: value,\n          id: id\n        }\n      });\n    }\n  },\n  render: function render() {\n\n    var data = this.props.data.customData;\n    var _this = this;\n    var sty = {\n      \'width\': \'100%\',\n      \'height\': \'30px\',\n      \'margin-top\': \'4px\'\n    };\n    if (data) {\n      var lis = data.map(function (item, i) {\n        if (item.type == \'textarea\') {\n          return React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'b\',\n              null,\n              item.key\n            ),\n            React.createElement(ATextarea, { style: sty, value: item.value, readOnly: item.readonly, \'data-name\': item.name, onBlur: _this.changeText, \'data-id\': item.index })\n          );\n        } else if (item.type == \'text\') {\n          return React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'b\',\n              null,\n              item.key\n            ),\n            React.createElement(\n              \'span\',\n              null,\n              item.value\n            )\n          );\n        }\n      });\n    } else {\n      return React.createElement(\'div\', null);\n    }\n    var divSty = {\n      \'padding\': \'0 10px 10px\',\n      \'font-size\': \'14px\'\n    };\n    return React.createElement(\n      \'div\',\n      { style: divSty },\n      lis\n    );\n  }\n});';
    },
    getData_control87_QqwGl7: function (elem) {},
    doAction_uiControl89_yKwQcz: function (data, elem) {
      if (data.eventType == 'btnClick') {
        $(elem).children().children().children('input')[+data.dataCustom].click();
      }
    },
    getTemplate_uiControl89_yKwQcz: function () {
      var selfTemplate = "module.exports = React.createClass({\n  btnClick:function(e){\n    this.props.customHandler({\n      data:e.target.dataset.index,\n      eventType:'btnClick'\n    })\n  },\n  render: function() {\n    return (\n      <div onClick={this.btnClick} className='btnCon'>\n        \n        <button data-index={1}>\u53D6\u6D88</button>\n        <button data-index={0}>\u786E\u5B9A</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      data: e.target.dataset.index,\n      eventType: 'btnClick'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { onClick: this.btnClick, className: 'btnCon' },\n      React.createElement(\n        'button',\n        { 'data-index': 1 },\n        '\\u53D6\\u6D88'\n      ),\n      React.createElement(\n        'button',\n        { 'data-index': 0 },\n        '\\u786E\\u5B9A'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);