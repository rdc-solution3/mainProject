(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control122_TtT4Dg: function (elem) {
      if (!elem) return;var tdChild = elem.childNodes;var obj = {},
          data = [];$(tdChild).each(function (i, item) {
        obj = {};if (item.tagName.toLowerCase() == 'select') {
          var options = [];$(item).children().each(function (o, opt) {
            options.push(opt.textContent.trim());
          });obj.text = item.previousSibling.previousSibling.previousSibling.textContent.trim();obj.value = options;obj.type = 'select';obj.name = item.name;
        } else if (item.tagName.toLowerCase() == 'input' && item.type != 'hidden') {
          obj.type = 'input';if (item.type == 'button') {
            obj.type = 'button';
          }if (item.previousSibling.nodeType == 3) {
            obj.text = item.previousSibling.textContent.trim();
          }obj.value = item.value;obj.name = item.name;obj.readOnly = item.readOnly;
        }obj.type && data.push(obj);
      });return data;
    },
    doAction_uiControl128_2hWDzv: function (data, elem) {
      var type = data.eventType;if (type == 'handleSelectChange') {
        var _data = data.customData;console.log(_data);elem.querySelectorAll('select')[+_data.index].options[+_data.value].selected = true;elem.querySelectorAll('select')[+_data.index].options[+_data.value].dispatchEvent(new Event('change'));
      } else if (type == 'btnClick') {
        elem.querySelector('input[type="button"]').click();
      } else if (type == 'handleBlur') {
        var name = data.customData.name;elem.querySelector('input[name="' + name + '"]').value = data.customData.vlaue;
      }
    },
    getTemplate_uiControl128_2hWDzv: function () {
      var selfTemplate = 'module.exports = React.createClass({\n    handleSelectChange:function(e){\n    this.props.customHandler({\n      customData:{value:e.target.value,index:e.target.dataset.index},\n      eventType:\'handleSelectChange\'\n    })\n  },\n  handleBlur:function(e){\n    this.props.customHandler({\n       customData:{value:e.target.value,name:e.target.dataset.name},\n       eventType:\'handleBlur\'\n    })\n  },\n  btnClick:function(e){\n    this.props.customHandler({\n      eventType:\'btnClick\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n\t\tvar _this = this;\n    var temp = \'\'\n    var liChild=[];\n    if(data){\n      temp = data.map(function(item,i){\n        if(i<2){\n          if(item.type ==\'select\'){\n            return(\n              <li>\n                <b>{item.text}</b>\n                <select onChange={_this.handleSelectChange} data-index = {i}>\n                  {\n                    item.value.map(function(opt,idx){\n                      return <option value={idx}>{opt}</option>\n                    })\n                  }\n                </select>\n              </li>\n            )\n          }else if(item.type ==\'input\'){\n            return(\n              <li>\n                  <b style={{display:item.text?\'block\':\'none\'}}>{item.text}</b>\n                  <AInput onBlur={_this.handleBlurLast} type={item.text.indexOf(\'\u5BC6\u7801\')!=-1?\'password\':\'\'} value={item.value} readOnly={item.readOnly} data-name = {item.name}/>\n              </li>\n\n            )\n          }else if(item.type ==\'button\'){\n            return(\n              <li>\n                 <button onClick={_this.btnClick}>{item.value}</button>\n              </li>\n            )\n          }\n        }else{\n          if(item.type ==\'input\'){\n            liChild.push(\n              <AInput onBlur={_this.handleBlurLast} type={item.text.indexOf(\'\u5BC6\u7801\')!=-1?\'password\':\'\'} value={item.value} readOnly={item.readOnly} data-name = {item.name}/>)\n          }else if(item.type ==\'button\'){\n            liChild.push(\n              <button onClick={_this.btnClick}>{item.value}</button>\n            )\n          }\n          \n        }\n        \n      })\n    }else{\n      return (<div></div>)\n    }\n    return (\n      <div  className=\'ggwh\'>\n        <ul>\n          {temp}\n          <li>\n            <div className=\'djbhCon\'>{liChild}</div>   \t\n          </li>\n        </ul>\n      </div>\n    )\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleSelectChange: function handleSelectChange(e) {\n    this.props.customHandler({\n      customData: { value: e.target.value, index: e.target.dataset.index },\n      eventType: \'handleSelectChange\'\n    });\n  },\n  handleBlur: function handleBlur(e) {\n    this.props.customHandler({\n      customData: { value: e.target.value, name: e.target.dataset.name },\n      eventType: \'handleBlur\'\n    });\n  },\n  btnClick: function btnClick(e) {\n    this.props.customHandler({\n      eventType: \'btnClick\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var temp = \'\';\n    var liChild = [];\n    if (data) {\n      temp = data.map(function (item, i) {\n        if (i < 2) {\n          if (item.type == \'select\') {\n            return React.createElement(\n              \'li\',\n              null,\n              React.createElement(\n                \'b\',\n                null,\n                item.text\n              ),\n              React.createElement(\n                \'select\',\n                { onChange: _this.handleSelectChange, \'data-index\': i },\n                item.value.map(function (opt, idx) {\n                  return React.createElement(\n                    \'option\',\n                    { value: idx },\n                    opt\n                  );\n                })\n              )\n            );\n          } else if (item.type == \'input\') {\n            return React.createElement(\n              \'li\',\n              null,\n              React.createElement(\n                \'b\',\n                { style: { display: item.text ? \'block\' : \'none\' } },\n                item.text\n              ),\n              React.createElement(AInput, { onBlur: _this.handleBlurLast, type: item.text.indexOf(\'\u5BC6\u7801\') != -1 ? \'password\' : \'\', value: item.value, readOnly: item.readOnly, \'data-name\': item.name })\n            );\n          } else if (item.type == \'button\') {\n            return React.createElement(\n              \'li\',\n              null,\n              React.createElement(\n                \'button\',\n                { onClick: _this.btnClick },\n                item.value\n              )\n            );\n          }\n        } else {\n          if (item.type == \'input\') {\n            liChild.push(React.createElement(AInput, { onBlur: _this.handleBlurLast, type: item.text.indexOf(\'\u5BC6\u7801\') != -1 ? \'password\' : \'\', value: item.value, readOnly: item.readOnly, \'data-name\': item.name }));\n          } else if (item.type == \'button\') {\n            liChild.push(React.createElement(\n              \'button\',\n              { onClick: _this.btnClick },\n              item.value\n            ));\n          }\n        }\n      });\n    } else {\n      return React.createElement(\'div\', null);\n    }\n    return React.createElement(\n      \'div\',\n      { className: \'ggwh\' },\n      React.createElement(\n        \'ul\',\n        null,\n        temp,\n        React.createElement(\n          \'li\',\n          null,\n          React.createElement(\n            \'div\',\n            { className: \'djbhCon\' },\n            liChild\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control123_PgylvC: function (elem) {
      if (elem) {
        return true;
      }
    },
    doAction_uiControl130_u84QXu: function (data, elem) {
      if (data.eventType == 'handleBtnClick') {
        $(elem).children('td').children('div').children('input')[data.dataCustom].click();
      }
    },
    getTemplate_uiControl130_u84QXu: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleBtnClick:function(e){\n    if(e.target.nodeName==\'BUTTON\'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:\'handleBtnClick\'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\'btnCon\' onClick={this.handleBtnClick}>\n        <button data-index={1}>\u53D6\u6D88</button>\n        <button data-index={0}>\u786E\u5B9A</button>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleBtnClick: function handleBtnClick(e) {\n    if (e.target.nodeName == \'BUTTON\') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: \'handleBtnClick\'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      { className: \'btnCon\', onClick: this.handleBtnClick },\n      React.createElement(\n        \'button\',\n        { \'data-index\': 1 },\n        \'\\u53D6\\u6D88\'\n      ),\n      React.createElement(\n        \'button\',\n        { \'data-index\': 0 },\n        \'\\u786E\\u5B9A\'\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);