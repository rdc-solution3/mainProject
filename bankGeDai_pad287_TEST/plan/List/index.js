(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control113_P4pnU5: function (elem) {
      var data = [];if (elem) {
        return ysp.customHelper.getTreeData(elem, $, data);
      }return data;
    },
    doAction_uiControl116_Fmgavh: function (data, elem) {
      var arr = data.dataCustom;if (data.eventType === "selectValue") {
        var target = $(elem).children(".clip").eq(parseInt(arr[0]) - 1).children(".clip").eq(parseInt(arr[1]) - 1).children(".clip").eq(parseInt(arr[2]) - 1).children(".dTreeNode").eq(parseInt(arr[3]) - 1).find("input")[0];if (target) {
          target.click();
        }
      } else if (data.eventType === "cancelValue") {
        var target = $(elem).children(".clip").eq(parseInt(arr[0]) - 1).children(".clip").eq(parseInt(arr[1]) - 1).children(".clip").eq(parseInt(arr[2]) - 1).children(".dTreeNode").eq(parseInt(arr[3]) - 1).find("input")[0];if (target) {
          target.checked = false;
        }
      }
    }, getTemplate_uiControl116_Fmgavh: function () {
      var selfTemplate = "module.exports = React.createClass({\n  returnData:function(data,type){\n  \tvar _arr=[];\n    data.forEach(function(d,idx){\n      if(type===\"y\"){\n        if(idx!==data.length-1){\n          _arr.push(d.title)\n        }\n      }else{\n      \t_arr.push(d.title)\n      }\n    })\n    return _arr;\n  },\n  getInitialState:function(){\n    return ({\n      Level1:this.returnData(this.props.customData,\"y\"),\n      Level2:[],\n      Level3:[],\n      Level4:[],\n      count1:0,\n      count2:0,\n      count3:0,\n      count4:0,\n      data1:[],\n      data2:[],\n      data3:[],\n      data4:[],\n      location:[]\n    })\n  },\n  onChange1:function(e){\n    var _this=this;\n    if(_this.state.location.length>0){\n      var handler=_this.props.customHandler;\n      if(handler){\n        handler({\n          data: _this.state.location,\n          eventType: \"cancelValue\"\n        })\n      }\n    }\n    _this.setState({\n      location:[]\n    })\n    var target=e.target;\n    var index=parseInt(target.value);\n    this.setState({\n      count1:index,\n      data1:this.props.customData\n    })\n    setTimeout(function(){\n      if(index!==0){\n        _this.setState({\n          Level2:[]\n        })\n        setTimeout(function(){\n          _this.setState({\n            Level2:_this.returnData(_this.state.data1[_this.state.count1-1].content),\n            Level3:[],\n            Level4:[],\n            count2:0,\n            count3:0,\n            count4:0,\n            data2:_this.state.data1[_this.state.count1-1].content,\n            data3:[],\n            data4:[]\n          })\n        },100)\n      }else{\n        _this.setState({\n          Level2:[],\n          Level3:[],\n          Level4:[],\n          count1:0,\n          count2:0,\n          count3:0,\n          count4:0,\n          data2:[],\n          data3:[],\n          data4:[],\n        })\n      }\n    },100)\n  },\n  onChange2:function(e){\n    var _this=this;\n    if(_this.state.location.length>0){\n      var handler=_this.props.customHandler;\n      if(handler){\n        handler({\n          data: _this.state.location,\n          eventType: \"cancelValue\"\n        })\n      }\n    }\n    _this.setState({\n      location:[]\n    })\n    var target=e.target;\n    var index=parseInt(target.value);\n    this.setState({\n      count2:index,\n    })\n    setTimeout(function(){\n      if(index!==0){\n        _this.setState({\n          Level3:[]\n        })\n        setTimeout(function(){\n          _this.setState({\n            Level3:_this.returnData(_this.state.data2[_this.state.count2-1].content),\n            Level4:[],\n            count3:0,\n            count4:0,\n            data3:_this.state.data2[_this.state.count2-1].content,\n            data4:[]\n          })\n        },100)\n      }else{\n        _this.setState({\n          Level3:[],\n          Level4:[],\n          count2:0,\n          count3:0,\n          count4:0,\n          data3:[],\n          data4:[],\n        })\n      }\n    },100)\n  },\n  onChange3:function(e){\n    var _this=this;\n    if(_this.state.location.length>0){\n      var handler=_this.props.customHandler;\n      if(handler){\n        handler({\n          data: _this.state.location,\n          eventType: \"cancelValue\"\n        })\n      }\n    }\n    _this.setState({\n      location:[]\n    })\n    var target=e.target;\n    var index=parseInt(target.value);\n    this.setState({\n      count3:index,\n    })\n    setTimeout(function(){\n      if(index!==0){\n        _this.setState({\n          Level4:[]\n        })\n        setTimeout(function(){\n          _this.setState({\n            Level4:_this.returnData(_this.state.data3[_this.state.count3-1].content),\n            count4:0,\n            data4:_this.state.data3[_this.state.count3-1].content\n          })\n        },100)\n      }else{\n        _this.setState({\n          Level4:[],\n          count3:0,\n          count4:0,\n          data4:[],\n        })\n      }\n    },100)\n  },\n  onChange4:function(e){\n    var _this=this;\n    var target=e.target;\n    var index=parseInt(target.value);\n    this.setState({\n      count4:index,\n    })\n    setTimeout(function(){\n      if(index!==0){\n        setTimeout(function(){\n          _this.setState({\n            location:[_this.state.count1,_this.state.count2,_this.state.count3,_this.state.count4]\n          })\n          var handler=_this.props.customHandler;\n          if(handler){\n            handler({\n              data: [_this.state.count1,_this.state.count2,_this.state.count3,_this.state.count4],\n              eventType: \"selectValue\"\n            })\n          }\n        },100)\n      }else{\n        if(_this.state.location.length>0){\n          var handler=_this.props.customHandler;\n          if(handler){\n            handler({\n              data: _this.state.location,\n              eventType: \"cancelValue\"\n            })\n          }\n        }\n        _this.setState({\n          location:[]\n        })\n        alert(\"\u8BF7\u9009\u62E9\u884C\u4E1A!\")\n      }\n    },100)\n  },\n  render: function() {\n    var _this=this;\n    return (<div className=\"ListBox\">\n      \t<div className=\"Level1\">\n          <div className=\"title\">\u7B2C\u4E00\u7EA7</div>\n          <div className=\"content\">\n            <select className=\"Level1-select\" onChange={_this.onChange1}>\n              <option value={0}>\u8BF7\u9009\u62E9</option>\n              {_this.state.Level1.length>0?\n                _this.state.Level1.map(function(d,idx){\n\t\t\t\t\t\t\t\t\treturn (<option value={idx+1}>{d}</option>)\n                })\n              \t:\n              \t\"\"\n              }\n            </select>\n          </div>\n        </div>\n        <div className=\"Level2\">\n          <div className=\"title\">\u7B2C\u4E8C\u7EA7</div>\n          <div className=\"content\">\n            <select className=\"Level2-select\" onChange={_this.onChange2}>\n              <option value={0}>\u8BF7\u9009\u62E9</option>\n              {_this.state.Level2.length>0?\n                _this.state.Level2.map(function(d,idx){\n\t\t\t\t\t\t\t\t\treturn (<option value={idx+1}>{d}</option>)\n                })\n              \t:\n              \t\"\"\n              }\n            </select>\n          </div>\n        </div>\n        <div className=\"Level3\">\n          <div className=\"title\">\u7B2C\u4E09\u7EA7</div>\n          <div className=\"content\">\n            <select className=\"Level3-select\" onChange={_this.onChange3}>\n              <option value={0}>\u8BF7\u9009\u62E9</option>\n              {_this.state.Level3.length>0?\n                _this.state.Level3.map(function(d,idx){\n\t\t\t\t\t\t\t\t\treturn (<option value={idx+1}>{d}</option>)\n                })\n              \t:\n              \t\"\"\n              }\n            </select>\n          </div>\n        </div>\n        <div className=\"Level4\">\n          <div className=\"title\">\u7B2C\u56DB\u7EA7</div>\n          <div className=\"content\">\n            <select className=\"Level4-select\" onChange={_this.onChange4}>\n              <option value={0}>\u8BF7\u9009\u62E9</option>\n              {_this.state.Level4.length>0?\n                _this.state.Level4.map(function(d,idx){\n\t\t\t\t\t\t\t\t\treturn (<option value={idx+1}>{d}</option>)\n                })\n              \t:\n              \t\"\"\n              }\n            </select>\n          </div>\n        </div>\n      </div>)\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  returnData: function returnData(data, type) {\n    var _arr = [];\n    data.forEach(function (d, idx) {\n      if (type === \"y\") {\n        if (idx !== data.length - 1) {\n          _arr.push(d.title);\n        }\n      } else {\n        _arr.push(d.title);\n      }\n    });\n    return _arr;\n  },\n  getInitialState: function getInitialState() {\n    return {\n      Level1: this.returnData(this.props.customData, \"y\"),\n      Level2: [],\n      Level3: [],\n      Level4: [],\n      count1: 0,\n      count2: 0,\n      count3: 0,\n      count4: 0,\n      data1: [],\n      data2: [],\n      data3: [],\n      data4: [],\n      location: []\n    };\n  },\n  onChange1: function onChange1(e) {\n    var _this = this;\n    if (_this.state.location.length > 0) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: _this.state.location,\n          eventType: \"cancelValue\"\n        });\n      }\n    }\n    _this.setState({\n      location: []\n    });\n    var target = e.target;\n    var index = parseInt(target.value);\n    this.setState({\n      count1: index,\n      data1: this.props.customData\n    });\n    setTimeout(function () {\n      if (index !== 0) {\n        _this.setState({\n          Level2: []\n        });\n        setTimeout(function () {\n          _this.setState({\n            Level2: _this.returnData(_this.state.data1[_this.state.count1 - 1].content),\n            Level3: [],\n            Level4: [],\n            count2: 0,\n            count3: 0,\n            count4: 0,\n            data2: _this.state.data1[_this.state.count1 - 1].content,\n            data3: [],\n            data4: []\n          });\n        }, 100);\n      } else {\n        _this.setState({\n          Level2: [],\n          Level3: [],\n          Level4: [],\n          count1: 0,\n          count2: 0,\n          count3: 0,\n          count4: 0,\n          data2: [],\n          data3: [],\n          data4: []\n        });\n      }\n    }, 100);\n  },\n  onChange2: function onChange2(e) {\n    var _this = this;\n    if (_this.state.location.length > 0) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: _this.state.location,\n          eventType: \"cancelValue\"\n        });\n      }\n    }\n    _this.setState({\n      location: []\n    });\n    var target = e.target;\n    var index = parseInt(target.value);\n    this.setState({\n      count2: index\n    });\n    setTimeout(function () {\n      if (index !== 0) {\n        _this.setState({\n          Level3: []\n        });\n        setTimeout(function () {\n          _this.setState({\n            Level3: _this.returnData(_this.state.data2[_this.state.count2 - 1].content),\n            Level4: [],\n            count3: 0,\n            count4: 0,\n            data3: _this.state.data2[_this.state.count2 - 1].content,\n            data4: []\n          });\n        }, 100);\n      } else {\n        _this.setState({\n          Level3: [],\n          Level4: [],\n          count2: 0,\n          count3: 0,\n          count4: 0,\n          data3: [],\n          data4: []\n        });\n      }\n    }, 100);\n  },\n  onChange3: function onChange3(e) {\n    var _this = this;\n    if (_this.state.location.length > 0) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: _this.state.location,\n          eventType: \"cancelValue\"\n        });\n      }\n    }\n    _this.setState({\n      location: []\n    });\n    var target = e.target;\n    var index = parseInt(target.value);\n    this.setState({\n      count3: index\n    });\n    setTimeout(function () {\n      if (index !== 0) {\n        _this.setState({\n          Level4: []\n        });\n        setTimeout(function () {\n          _this.setState({\n            Level4: _this.returnData(_this.state.data3[_this.state.count3 - 1].content),\n            count4: 0,\n            data4: _this.state.data3[_this.state.count3 - 1].content\n          });\n        }, 100);\n      } else {\n        _this.setState({\n          Level4: [],\n          count3: 0,\n          count4: 0,\n          data4: []\n        });\n      }\n    }, 100);\n  },\n  onChange4: function onChange4(e) {\n    var _this = this;\n    var target = e.target;\n    var index = parseInt(target.value);\n    this.setState({\n      count4: index\n    });\n    setTimeout(function () {\n      if (index !== 0) {\n        setTimeout(function () {\n          _this.setState({\n            location: [_this.state.count1, _this.state.count2, _this.state.count3, _this.state.count4]\n          });\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              data: [_this.state.count1, _this.state.count2, _this.state.count3, _this.state.count4],\n              eventType: \"selectValue\"\n            });\n          }\n        }, 100);\n      } else {\n        if (_this.state.location.length > 0) {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              data: _this.state.location,\n              eventType: \"cancelValue\"\n            });\n          }\n        }\n        _this.setState({\n          location: []\n        });\n        alert(\"\u8BF7\u9009\u62E9\u884C\u4E1A!\");\n      }\n    }, 100);\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      \"div\",\n      { className: \"ListBox\" },\n      React.createElement(\n        \"div\",\n        { className: \"Level1\" },\n        React.createElement(\n          \"div\",\n          { className: \"title\" },\n          \"\\u7B2C\\u4E00\\u7EA7\"\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"content\" },\n          React.createElement(\n            \"select\",\n            { className: \"Level1-select\", onChange: _this.onChange1 },\n            React.createElement(\n              \"option\",\n              { value: 0 },\n              \"\\u8BF7\\u9009\\u62E9\"\n            ),\n            _this.state.Level1.length > 0 ? _this.state.Level1.map(function (d, idx) {\n              return React.createElement(\n                \"option\",\n                { value: idx + 1 },\n                d\n              );\n            }) : \"\"\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"Level2\" },\n        React.createElement(\n          \"div\",\n          { className: \"title\" },\n          \"\\u7B2C\\u4E8C\\u7EA7\"\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"content\" },\n          React.createElement(\n            \"select\",\n            { className: \"Level2-select\", onChange: _this.onChange2 },\n            React.createElement(\n              \"option\",\n              { value: 0 },\n              \"\\u8BF7\\u9009\\u62E9\"\n            ),\n            _this.state.Level2.length > 0 ? _this.state.Level2.map(function (d, idx) {\n              return React.createElement(\n                \"option\",\n                { value: idx + 1 },\n                d\n              );\n            }) : \"\"\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"Level3\" },\n        React.createElement(\n          \"div\",\n          { className: \"title\" },\n          \"\\u7B2C\\u4E09\\u7EA7\"\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"content\" },\n          React.createElement(\n            \"select\",\n            { className: \"Level3-select\", onChange: _this.onChange3 },\n            React.createElement(\n              \"option\",\n              { value: 0 },\n              \"\\u8BF7\\u9009\\u62E9\"\n            ),\n            _this.state.Level3.length > 0 ? _this.state.Level3.map(function (d, idx) {\n              return React.createElement(\n                \"option\",\n                { value: idx + 1 },\n                d\n              );\n            }) : \"\"\n          )\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"Level4\" },\n        React.createElement(\n          \"div\",\n          { className: \"title\" },\n          \"\\u7B2C\\u56DB\\u7EA7\"\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"content\" },\n          React.createElement(\n            \"select\",\n            { className: \"Level4-select\", onChange: _this.onChange4 },\n            React.createElement(\n              \"option\",\n              { value: 0 },\n              \"\\u8BF7\\u9009\\u62E9\"\n            ),\n            _this.state.Level4.length > 0 ? _this.state.Level4.map(function (d, idx) {\n              return React.createElement(\n                \"option\",\n                { value: idx + 1 },\n                d\n              );\n            }) : \"\"\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control114_y3pEP8: function (elem) {},
    doAction_uiControl117_x3DIdu: function (data, elem) {
      if (data.eventType === "click") {
        if (elem) {
          elem.click();
        }
      }
    },
    getTemplate_uiControl117_x3DIdu: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \"click\"\n      })\n    }\n  },\n  render: function() {\n    return (<div className=\"ListConfirm\" style={{background: \"#009593\",color: \"white\", width: \"140px\", lineHeight: \"40px\", height: \"40px\", borderRadius: \"4px\", textAlign: \"center\", marginLeft: \"auto\", marginRight: \"auto\", marginTop: \"40px\"}} onClick={this.onClick}>\u786E\u5B9A</div>)\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ListConfirm\", style: { background: \"#009593\", color: \"white\", width: \"140px\", lineHeight: \"40px\", height: \"40px\", borderRadius: \"4px\", textAlign: \"center\", marginLeft: \"auto\", marginRight: \"auto\", marginTop: \"40px\" }, onClick: this.onClick },\n      \"\\u786E\\u5B9A\"\n    );\n  }\n});";
    },
    getData_control140_zR6OtW: function (elem) {},
    doAction_uiControl146_F8PPCX: function (data, elem) {
      if (data.eventType === 'clickToClose') {
        try {
          ysp.appMain.getActiveWindow().close();
        } catch (e) {
          var win_d = elem.ownerDocument.defaultView;win_d.close();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl146_F8PPCX: function () {
      var selfTemplate = "import { Component} from 'react';\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default class extends Component{\n  clickToClose (e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'clickToClose'\n      })\n    }\n  }\n  render (){\n    return(\n      <div style={{height:'10vh'}}>\n    \t\t<Header className='backHeader' amStyle=\"primary\" title={this.props.customData}>\n          <HeaderLeft>\n            <AMUI.Button amStyle=\"primary\" onClick={this.clickToClose.bind(this)}><b className='icon\ticon-left-nav'></b>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'clickToClose',\n    value: function clickToClose(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickToClose'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { style: { height: '10vh' } },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { className: 'backHeader', amStyle: 'primary', title: this.props.customData },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.clickToClose.bind(this) },\n              React.createElement('b', { className: 'icon\\ticon-left-nav' }),\n              '\\u8FD4\\u56DE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);