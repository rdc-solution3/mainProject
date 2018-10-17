(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control10_J99o11: function (elem) {
      var data = [];if (elem && elem.querySelectorAll('tr').length > 5) {
        $(elem).children('tbody').children('tr').each(function (i, tr) {
          if (i == 1 || i == 2) {
            data.push(tr.textContent.trim());data.push($(tr).find('input').val());
          }
        });
      }return data;
    }, doAction_uiControl14_eAWq8P: function (data, elem) {
      if (data.eventType == 'blur') {
        var val = data.dataCustom[0];
        var idx = data.dataCustom[1];if (idx == 0) {
          $(elem).children('tbody').find('input#login_uid')[0].dispatchEvent(new Event("focus"));
          $(elem).children('tbody').find('input#login_uid').val(val);$(elem).children('tbody').find('input#login_uid')[0].dispatchEvent(new Event("change"));
        }
        if (idx == 2) {
          $(elem).children('tbody').find('input#login_upwd')[0].dispatchEvent(new Event("focus"));$(elem).children('tbody').find('input#login_upwd').val(val);$(elem).children('tbody').find('input#login_upwd')[0].dispatchEvent(new Event("change"));
        }
      }if (data.eventType == 'click') {
        var id = data.dataCustom;if (id == 'submit') {
          elem.querySelector('#submitBtn').click();
        }if (id == 'reset') {
          elem.querySelector('#resetbtn').click();
        }
      }
    },
    getTemplate_uiControl14_eAWq8P: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount: function(){\n    var refDom = this.refs[\"loginBox\"];\n    if(refDom.querySelector(\"input\")){\n      refDom.querySelector(\"input\").focus();\n    }\n  },\n  onBlur: function(e){\n    this.handleEvent(e.target,'blur',[e.target.value,e.target.getAttribute('data-index')]);\n  },\n  onClick: function(e){\n    this.handleEvent(e.target,'click',e.target.id);\n  },\n  handleEvent: function(target,eventType,data){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: eventType,\n        data: data\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data && data.length > 0){\n      var loginGrp = data.map(function(d,i){\n        if(data.length%2==0){\n          if(i%2==0){\n            return (\n              <div className='loginGrp'>\n                <AInput data-index={i} value={data[i+1]} onBlur={_this.onBlur} type={i==0?'text':'password'} placeholder={'\u8BF7\u8F93\u5165'+(i==0?'\u7528\u6237\u540D':'\u5BC6\u7801')}/>\n                {\n\t          \t\t\ti==2?(<span id='reset' className='btn btn-block' onClick={_this.onClick}>\u91CD\u7F6E</span>):''\n                }\n              </div>\n            )\n          }\n        }\n      })\n      return (\n        <div className='loginBox' ref=\"loginBox\">\n          <div style={{textAlign:'center',color:'#000',fontSize:'0.8em'}}>(\u4E2A\u8D37\u5BA1\u6279)</div>\n\t\t\t\t\t{loginGrp}\n          <div className='btnGrp'>\n            <span id='submit' className='btn btn-block btn-primary' onClick={_this.onClick}>\u767B\u5F55</span>\n          </div>\n        </div>\n      )\n    }else{\n      return (<div className='disnone'>none</div>)\n    }\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var refDom = this.refs[\"loginBox\"];\n    if (refDom.querySelector(\"input\")) {\n      refDom.querySelector(\"input\").focus();\n    }\n  },\n  onBlur: function onBlur(e) {\n    this.handleEvent(e.target, 'blur', [e.target.value, e.target.getAttribute('data-index')]);\n  },\n  onClick: function onClick(e) {\n    this.handleEvent(e.target, 'click', e.target.id);\n  },\n  handleEvent: function handleEvent(target, eventType, data) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: eventType,\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data.length > 0) {\n      var loginGrp = data.map(function (d, i) {\n        if (data.length % 2 == 0) {\n          if (i % 2 == 0) {\n            return React.createElement(\n              \"div\",\n              { className: \"loginGrp\" },\n              React.createElement(AInput, { \"data-index\": i, value: data[i + 1], onBlur: _this.onBlur, type: i == 0 ? 'text' : 'password', placeholder: '\u8BF7\u8F93\u5165' + (i == 0 ? '\u7528\u6237\u540D' : '\u5BC6\u7801') }),\n              i == 2 ? React.createElement(\n                \"span\",\n                { id: \"reset\", className: \"btn btn-block\", onClick: _this.onClick },\n                \"\\u91CD\\u7F6E\"\n              ) : ''\n            );\n          }\n        }\n      });\n      return React.createElement(\n        \"div\",\n        { className: \"loginBox\", ref: \"loginBox\" },\n        React.createElement(\n          \"div\",\n          { style: { textAlign: 'center', color: '#000', fontSize: '0.8em' } },\n          \"(\\u4E2A\\u8D37\\u5BA1\\u6279)\"\n        ),\n        loginGrp,\n        React.createElement(\n          \"div\",\n          { className: \"btnGrp\" },\n          React.createElement(\n            \"span\",\n            { id: \"submit\", className: \"btn btn-block btn-primary\", onClick: _this.onClick },\n            \"\\u767B\\u5F55\"\n          )\n        )\n      );\n    } else {\n      return React.createElement(\n        \"div\",\n        { className: \"disnone\" },\n        \"none\"\n      );\n    }\n  }\n});";
    }
  }, "login");
})(window, ysp);