(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_GGozrF: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector("#name")) {
          // data.user = elem.querySelector("#name").value;
          elem.querySelector("#name").value = "cs001";data.user = "cs001";
        }if (elem.querySelector("#password")) {
          // data.pwd = elem.querySelector("#password").value;
          elem.querySelector("#password").value = "111111";data.pwd = "111111";
        }if (elem.querySelector("#loginbtn")) {
          data.btn = "登录";
        }return data;
      }
      return "";
    },
    doAction_uiControl0_paqaL8: function (data, elem) {
      if (data.eventType === "user") {
        var val = data.dataCustom;elem.querySelector("#name").value = val;elem.querySelector("#name").dispatchEvent(new Event("change"));
      }if (data.eventType === "pwd") {
        var val = data.dataCustom;elem.querySelector("#password").value = val;elem.querySelector("#password").dispatchEvent(new Event("change"));
      }if (data.eventType === "click") {
        elem.querySelector("#loginbtn").click();
      }
    },
    getTemplate_uiControl0_paqaL8: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    const {customData,customHandler} = this.props;\n    const _this = this;\n    if(customData){\n      return (\n        <div className=\"loginBox\">\n          <h4>\u6C5F\u897F\u94F6\u884CCRM\u7CFB\u7EDF</h4>\n\t\t\t\t\t{typeof customData.user!==\"undefined\" && \n          \t<AInput type=\"text\" value={customData.user} onBlur={(e)=>{\n                customHandler && customHandler({\n                  eventType: \"user\",\n                  data: e.target.value\n                });\n              }}/>\n          }\n          {typeof customData.pwd!==\"undefined\" &&\n          \t<AInput type=\"password\" value={customData.pwd} onBlur={(e)=>{\n                customHandler && customHandler({\n                  eventType: \"pwd\",\n                  data: e.target.value\n                })\n              }}/>\n          }\n          {typeof customData.btn!==\"undefined\" &&\n          \t<input type=\"button\" className=\"btn btn-block btn-primary\" value={customData.btn} onClick={(e)=>{\n                customHandler && customHandler({\n                  eventType: \"click\"\n                })\n              }}/>\n          }\n        </div>\n      )\n    }\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var _props = this.props,\n        customData = _props.customData,\n        customHandler = _props.customHandler;\n\n    var _this = this;\n    if (customData) {\n      return React.createElement(\n        \"div\",\n        { className: \"loginBox\" },\n        React.createElement(\n          \"h4\",\n          null,\n          \"\\u6C5F\\u897F\\u94F6\\u884CCRM\\u7CFB\\u7EDF\"\n        ),\n        typeof customData.user !== \"undefined\" && React.createElement(AInput, { type: \"text\", value: customData.user, onBlur: function onBlur(e) {\n            customHandler && customHandler({\n              eventType: \"user\",\n              data: e.target.value\n            });\n          } }),\n        typeof customData.pwd !== \"undefined\" && React.createElement(AInput, { type: \"password\", value: customData.pwd, onBlur: function onBlur(e) {\n            customHandler && customHandler({\n              eventType: \"pwd\",\n              data: e.target.value\n            });\n          } }),\n        typeof customData.btn !== \"undefined\" && React.createElement(\"input\", { type: \"button\", className: \"btn btn-block btn-primary\", value: customData.btn, onClick: function onClick(e) {\n            customHandler && customHandler({\n              eventType: \"click\"\n            });\n          } })\n      );\n    }\n  }\n});";
    }
  }, "login");
})(window, ysp);