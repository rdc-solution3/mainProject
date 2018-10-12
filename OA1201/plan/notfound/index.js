(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control113_aQvy4l: function (elem) {},
    doAction_uiControl117_WxLhlK: function (data, elem) {
      if (data.eventType == 'handleBack') {
        elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl117_WxLhlK: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleBack:function(){\n    this.props.customHandler({\n      eventType:'handleBack'\n    })\n  },\n  render: function() {\n    return (\n      <div className='notFoundPage' style={{'text-align':'center','padding-top':'100px'}}>\n        <span className='back' onClick={this.handleBack}>\u8FD4\u56DE</span>\n        <h4>\n        \t\u65E0\u6CD5\u627E\u5230\u8BE5\u7F51\u9875\uFF01\n        </h4>\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleBack: function handleBack() {\n    this.props.customHandler({\n      eventType: 'handleBack'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'notFoundPage', style: { 'text-align': 'center', 'padding-top': '100px' } },\n      React.createElement(\n        'span',\n        { className: 'back', onClick: this.handleBack },\n        '\\u8FD4\\u56DE'\n      ),\n      React.createElement(\n        'h4',\n        null,\n        '\\u65E0\\u6CD5\\u627E\\u5230\\u8BE5\\u7F51\\u9875\\uFF01'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);