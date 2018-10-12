(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control48_phd59i: function (elem) {
      if (elem) {
        return $(elem).children('tbody').children('tr').eq(0).children('td').text();
      }
    },
    doAction_uiControl23_Ac1pcu: function (data, elem) {
      if (data.eventType == 'handleClose') {
        $(elem).children('tbody').children('tr').children('td').children('a')[0].click();
      }
    },
    getTemplate_uiControl23_Ac1pcu: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleClose:function(){\n    this.props.customHandler({\n      eventType:\'handleClose\'\n    })\n  },\n  render: function() {\n    var data=this.props.customData;\n    return (\n      <div className=\'successSend\'>\n        <div>\n        \t<h2>\n            <span>{data}</span>\n          </h2>\n          <p onClick={this.handleClose}>\u5173\u95ED</p>\n        </div>\n        \n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClose: function handleClose() {\n    this.props.customHandler({\n      eventType: \'handleClose\'\n    });\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'successSend\' },\n      React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'h2\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            data\n          )\n        ),\n        React.createElement(\n          \'p\',\n          { onClick: this.handleClose },\n          \'\\u5173\\u95ED\'\n        )\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);