(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control93_a0S78N: function (elem) {},
    doAction_uiControl79_FJgXc4: function (data, elem) {
      if (data.eventType == "mount") {//   var interval = setInterval(function () {
        //     var backNow = EAPI.localStorage.getItem("needBack", "caigoushang");
        //     if (backNow && backNow == 1) {
        //       EAPI.localStorage.setItem("needBack", 0, "caigoushang");
        //       ysp.appMain.closeWindow();
        //     }
        //   }, 2000);
      }if (data.eventType == "out") {
        ysp.appMain.closeWindow();
      }
    },
    getTemplate_uiControl79_FJgXc4: function () {
      var selfTemplate = "module.exports = React.createClass({\n  getInitialState:function(){\n    return({\n      show:false\n    })\n  },\n  componentDidMount:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"mount\"\n      })\n    }\n    var self = this;\n    setTimeout(function(){\n      self.setState({\n        show:true\n      })\n    },3000)\n  },\n  out:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"out\"\n      })\n    }\n  },\n  render: function() {\n    if(this.state.show){\n      return (\n        <div style={{padding:30,textAlign:\"center\"}}>\n        \t\u8BF7\u70B9\u51FB\u9000\u51FA\u56DE\u5230app\u9996\u9875<br /><br />\n          <button className=\"btn btn-primary\" onClick={this.out}>\u9000\u51FA</button>\n        </div>\n      )\n    }\n    return (\n      <div style={{padding:30,textAlign:\"center\"}}>\u8DF3\u8F6C\u4E2D\u2026</div>\n    )\n  }\n});\n\n";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  getInitialState: function getInitialState() {\n    return {\n      show: false\n    };\n  },\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"mount\"\n      });\n    }\n    var self = this;\n    setTimeout(function () {\n      self.setState({\n        show: true\n      });\n    }, 3000);\n  },\n  out: function out() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"out\"\n      });\n    }\n  },\n  render: function render() {\n    if (this.state.show) {\n      return React.createElement(\n        \"div\",\n        { style: { padding: 30, textAlign: \"center\" } },\n        \"\\u8BF7\\u70B9\\u51FB\\u9000\\u51FA\\u56DE\\u5230app\\u9996\\u9875\",\n        React.createElement(\"br\", null),\n        React.createElement(\"br\", null),\n        React.createElement(\n          \"button\",\n          { className: \"btn btn-primary\", onClick: this.out },\n          \"\\u9000\\u51FA\"\n        )\n      );\n    }\n    return React.createElement(\n      \"div\",\n      { style: { padding: 30, textAlign: \"center\" } },\n      \"\\u8DF3\\u8F6C\\u4E2D\\u2026\"\n    );\n  }\n});";
    }
  }, "www");
})(window, ysp);