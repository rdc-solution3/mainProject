(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control37_tRXm2F: function (elem) {},
    doAction_uiControl11_04Udmz: function (data, elem) {
      if (data.eventType == 'handleBack') {
        history.go(-1);
      }
    },
    getTemplate_uiControl11_04Udmz: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleBack:function(e){\n    this.props.customHandler({\n      eventType:'handleBack'\n    })\n  },\n  render: function() {\n    return (\n      <div>\n        <i className='back' onClick={this.handleBack} style={{'width':'100%','background-color':'#fff'}}>\u8FD4\u56DE</i>\n        <div style={{'position':'absolute','top':'60px','width':'100%','padding':'15px','text-align':'center','background':'#fff'}}>\n        \t\u672A\u9002\u914D\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleBack: function handleBack(e) {\n    this.props.customHandler({\n      eventType: 'handleBack'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'i',\n        { className: 'back', onClick: this.handleBack, style: { 'width': '100%', 'background-color': '#fff' } },\n        '\\u8FD4\\u56DE'\n      ),\n      React.createElement(\n        'div',\n        { style: { 'position': 'absolute', 'top': '60px', 'width': '100%', 'padding': '15px', 'text-align': 'center', 'background': '#fff' } },\n        '\\u672A\\u9002\\u914D'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);