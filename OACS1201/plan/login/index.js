(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_yrI18M: function (elem) {
      if (elem) {
        if (elem.value == '请输入用户名') {
          elem.value = '';
        }var val = elem.value;var isIOS = ysp.appMain.isIOS();
        return { val: val, isIOS: isIOS };
      }
    },
    doAction_uiControl1_qLSWZw: function (data, elem) {
      if (data.eventType == 'inputBlur') {
        elem.value = data.dataCustom;
      }
    },
    getTemplate_uiControl1_qLSWZw: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  inputBlur:function(e){\n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'inputBlur\'\n    })\n  },\n  inputFocus:function(e){\n    var isIOS = this.props.customData.isIOS;\n    var target = e.target;\n    if(!isIOS){\n      setTimeout(function(){\n        target.scrollIntoView(true);\n        target.scrollIntoViewIfNeeded();\n      },200)\n    }\n    \n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data || data==\'\'){\n      return (\n        <div className=\'user\'>\n          <b>\u7528\u6237\u540D\uFF1A</b>\n          <AInput onBlur={this.inputBlur} value={data.val} onFocus={this.inputFocus} autoFocus={false}/>\n        </div>\n      )\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  inputBlur: function inputBlur(e) {\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'inputBlur\'\n    });\n  },\n  inputFocus: function inputFocus(e) {\n    var isIOS = this.props.customData.isIOS;\n    var target = e.target;\n    if (!isIOS) {\n      setTimeout(function () {\n        target.scrollIntoView(true);\n        target.scrollIntoViewIfNeeded();\n      }, 200);\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data || data == \'\') {\n      return React.createElement(\n        \'div\',\n        { className: \'user\' },\n        React.createElement(\n          \'b\',\n          null,\n          \'\\u7528\\u6237\\u540D\\uFF1A\'\n        ),\n        React.createElement(AInput, { onBlur: this.inputBlur, value: data.val, onFocus: this.inputFocus, autoFocus: false })\n      );\n    }\n  }\n});';
    },
    getData_control1_SMFkw7: function (elem) {
      if (elem) {
        var val = elem.value;var isIOS = ysp.appMain.isIOS();return { val: val, isIOS: isIOS };
      }
    },
    doAction_uiControl57_TnKZ5y: function (data, elem) {
      if (data.eventType == 'inputBlur') {
        elem.value = data.dataCustom;
      }
    },
    getTemplate_uiControl57_TnKZ5y: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  inputBlur:function(e){\n    \n    this.props.customHandler({\n      data:e.target.value,\n      eventType:\'inputBlur\'\n    })\n  },\n  inputFocus:function(e){\n    var isIOS = this.props.customData.isIOS;\n    var target = e.target;\n    if(!isIOS){\n      setTimeout(function(){\n        target.scrollIntoView(true);\n        target.scrollIntoViewIfNeeded();\n      },200)\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    if(data || data==\'\'){\n      return (\n        <div className=\'password\'>\n          <b>\u5BC6\u3000\u7801\uFF1A</b>\n          <AInput type=\'password\' onBlur={this.inputBlur} value={data.val} onFocus={this.inputFocus}/>\n        </div>\n      )\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  inputBlur: function inputBlur(e) {\n\n    this.props.customHandler({\n      data: e.target.value,\n      eventType: \'inputBlur\'\n    });\n  },\n  inputFocus: function inputFocus(e) {\n    var isIOS = this.props.customData.isIOS;\n    var target = e.target;\n    if (!isIOS) {\n      setTimeout(function () {\n        target.scrollIntoView(true);\n        target.scrollIntoViewIfNeeded();\n      }, 200);\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data || data == \'\') {\n      return React.createElement(\n        \'div\',\n        { className: \'password\' },\n        React.createElement(\n          \'b\',\n          null,\n          \'\\u5BC6\\u3000\\u7801\\uFF1A\'\n        ),\n        React.createElement(AInput, { type: \'password\', onBlur: this.inputBlur, value: data.val, onFocus: this.inputFocus })\n      );\n    }\n  }\n});';
    },
    getData_control65_9h07xE: function (elem) {},
    doAction_uiControl64_KFV5iA: function (data, elem) {},
    getTemplate_uiControl64_KFV5iA: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className=\'oaTitle\'>\n        <div></div>\n        \uFF08OA\u7CFB\u7EDF\uFF09\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      { className: \'oaTitle\' },\n      React.createElement(\'div\', null),\n      \'\\uFF08OA\\u7CFB\\u7EDF\\uFF09\'\n    );\n  }\n});';
    },
    getData_control121_ZMkETH: function (elem) {},
    doAction_uiControl127_gx0sII: function (data, elem) {
      if (data.eventType == 'handleSubmit') {
        if (ysp.appMain.isIOS()) {
          var form = elem.ownerDocument.querySelector('[name=_DominoForm]');var formData = new FormData(form);var xhr = new XMLHttpRequest();xhr.open("post", form.action);xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
              if (xhr.responseText.indexOf('用户名或密码错误，请重新输入！') != -1) {
                elem.querySelector('[type=submit]').nextElementSibling.children[0].innerHTML = '用户名或密码错误，请重新输入！';return;
              }elem.ownerDocument.defaultView.location.href = xhr.responseURL;
            }
          };xhr.send(formData);
        } else {
          var btnSubmit = elem.querySelector('[type=submit]');btnSubmit.click();
        }
      }
    },
    getTemplate_uiControl127_gx0sII: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleSubmit:function(){\n    var user=document.querySelector('.user>input');\n    var pwd=document.querySelector('.password>input');\n    if(user && pwd){\n      var Username=document.querySelector('.user>input').value;\n      var Password=document.querySelector('.password>input').value;\n      if (Username == \"\") {\n        alert(\"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF01\");\n        return false;\n      } else if (Password == \"\") {\n        alert(\"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01\");\n        return false;\n      }\n      this.props.customHandler({\n        eventType:'handleSubmit'  \n      })\n    }\n    \n  },\n  render: function() {\n    return (\n      <div className='loginBtnCon'>\n        <button onClick={this.handleSubmit}>\u767B\u5F55</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleSubmit: function handleSubmit() {\n    var user = document.querySelector('.user>input');\n    var pwd = document.querySelector('.password>input');\n    if (user && pwd) {\n      var Username = document.querySelector('.user>input').value;\n      var Password = document.querySelector('.password>input').value;\n      if (Username == \"\") {\n        alert(\"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF01\");\n        return false;\n      } else if (Password == \"\") {\n        alert(\"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01\");\n        return false;\n      }\n      this.props.customHandler({\n        eventType: 'handleSubmit'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'loginBtnCon' },\n      React.createElement(\n        'button',\n        { onClick: this.handleSubmit },\n        '\\u767B\\u5F55'\n      )\n    );\n  }\n});";
    }
  }, "login");
})(window, ysp);