(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control57_2ppKUM: function (elem) {
      if (elem) {
        return elem.textContent;
      } else {
        return null;
      }
    },
    doAction_uiControl44_BZnNuH: function (data, elem) {},
    getTemplate_uiControl44_BZnNuH: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    return (\n      <div className='jsbmbl'>\n        <p>{data}</p>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'jsbmbl' },\n      React.createElement(\n        'p',\n        null,\n        data\n      )\n    );\n  }\n});";
    },
    getData_control59_OX3Lty: function (elem) {
      if (elem) {
        return true;
      } else {
        return false;
      }
    },
    doAction_uiControl50_5aFWF8: function (data, elem) {
      if (data.eventType == 'handleBtnClick') {
        $(elem).children('td').children('div').children('input')[data.dataCustom].click();
      }
    },
    getTemplate_uiControl50_5aFWF8: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleBtnClick:function(e){\n    if(e.target.nodeName=='BUTTON'){\n      this.props.customHandler({\n        data:e.target.dataset.index,\n        eventType:'handleBtnClick'\n      })\n    }\n    \n  },\n  render: function() {\n    return (\n      <div className='btnCon' onClick={this.handleBtnClick}>\n        <button data-index={1}>\u53D6\u6D88</button>\n        <button data-index={0}>\u786E\u5B9A</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleBtnClick: function handleBtnClick(e) {\n    if (e.target.nodeName == 'BUTTON') {\n      this.props.customHandler({\n        data: e.target.dataset.index,\n        eventType: 'handleBtnClick'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'btnCon', onClick: this.handleBtnClick },\n      React.createElement(\n        'button',\n        { 'data-index': 1 },\n        '\\u53D6\\u6D88'\n      ),\n      React.createElement(\n        'button',\n        { 'data-index': 0 },\n        '\\u786E\\u5B9A'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);