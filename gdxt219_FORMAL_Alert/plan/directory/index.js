(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control18_1yDR26: function (elem) {
      if (elem) {
        var data = [];if (elem.querySelector('#menu_01') && elem.querySelectorAll('#menu_01 a').length > 0) {
          $(elem).find('#menu_01 a').each(function (i, a) {
            // if (!/收件箱/.test(a.textContent)) {
            data.push({ id: '#menu_01', idx: i, text: a.textContent.trim() }); // }
          });
        }if (elem.querySelector('#menu_02') && elem.querySelectorAll('#menu_02 a').length > 0) {
          $(elem).find('#menu_02 a').each(function (i, a) {
            data.push({
              id: '#menu_02', idx: i, text: a.textContent.trim() });
          });
        }return data;
      }return '';
    },
    doAction_uiControl5_yPW0fV: function (data, elem) {
      if (data.eventType === 'click') {
        var id = data.dataCustom[0];var idx = parseInt(data.dataCustom[1]);$(elem).find(id).find('a').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl5_yPW0fV: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleClick: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'click',\n        data: [e.target.getAttribute('data-id'),e.target.getAttribute('data-index')]\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data !== '' && data.length > 0){\n      var list = data.map(function(li,i){\n        if(i==1){\n        \treturn (<div onClick={me.handleClick} data-index={li.idx} data-id={li.id}>{li.text}</div>)\n        }\n      })\n      return (\n        <div className='directoryList' style={{display:'none'}}>\n          {list}\n        </div>\n      )\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: [e.target.getAttribute('data-id'), e.target.getAttribute('data-index')]\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== '' && data.length > 0) {\n      var list = data.map(function (li, i) {\n        if (i == 1) {\n          return React.createElement(\n            'div',\n            { onClick: me.handleClick, 'data-index': li.idx, 'data-id': li.id },\n            li.text\n          );\n        }\n      });\n      return React.createElement(\n        'div',\n        { className: 'directoryList', style: { display: 'none' } },\n        list\n      );\n    }\n  }\n});";
    }
  });
})(window, ysp);