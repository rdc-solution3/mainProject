(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control56_yPR7d9: function (elem) {
      if (elem) {
        return true;
      } else {
        return null;
      }
    },
    doAction_uiControl55_yUXJuT: function (data, elem) {
      if (data.eventType == 'handleBack') {
        elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl55_yUXJuT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleBack:function(){\n    this.props.customHandler({\n      eventType:'handleBack'\n    })\n  },\n  render: function() {\n    return (\n      <div style={{'background':'#3D8CF8'}}>\n      \t<div className='pageTitle' onClick={this.handleBack}>\n          <b className='back'>\u8FD4\u56DE</b>\n          \n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleBack: function handleBack() {\n    this.props.customHandler({\n      eventType: 'handleBack'\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { style: { 'background': '#3D8CF8' } },\n      React.createElement(\n        'div',\n        { className: 'pageTitle', onClick: this.handleBack },\n        React.createElement(\n          'b',\n          { className: 'back' },\n          '\\u8FD4\\u56DE'\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);