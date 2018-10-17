(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control44_4SdiW0: function (elem) {
      if (!elem) {
        return;
      }return elem.value;
    },
    doAction_uiControl51_wE239C: function (data, elem) {
      var id = data.customData;if (data.eventType == 'toReturnClick') {
        elem.removeAttribute('disabled');elem.click();
      }
    },
    getTemplate_uiControl51_wE239C: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  toReturnClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'toReturnClick\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    return (\n      <div className="butt2">\n        <input type=\'button\' value={data} onClick={me.toReturnClick}/>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  toReturnClick: function toReturnClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'toReturnClick\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \'div\',\n      { className: \'butt2\' },\n      React.createElement(\'input\', { type: \'button\', value: data, onClick: me.toReturnClick })\n    );\n  }\n});';
    },
    getData_control46_kcJld6: function (elem) {},
    doAction_uiControl64_mDGvxV: function (data, elem) {},
    getTemplate_uiControl64_mDGvxV: function () {
      var selfTemplate = 'import { Component} from \'react\';\nimport { Header, HeaderLeft } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nexport default class extends Component {\n  render (){\n     return(\n        <Header amStyle="primary">\n          <HeaderLeft>\n            <AMUI.Button amStyle="primary" onClick={back}>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      return React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \'primary\' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \'primary\', onClick: _appRenderer.back },\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control43_nOs3EG: function (elem) {
      if (elem) {
        data = {};data.table = [];if (elem.querySelectorAll('table').length > 0) {
          var obj = {};obj.title = elem.querySelector('.titleBar').textContent.trim();obj.thead = [];obj.tbody = [];$(elem.querySelectorAll('table')).each(function (x, y) {
            if (x == 0 && y.querySelectorAll('tr')) {
              $(y.querySelectorAll('tr')).each(function (tri, tr) {
                if (tr.querySelectorAll('.titlebarHUI')) {
                  $(tr.querySelectorAll('.titlebarHUI')).each(function (tdi, td) {
                    if (td.textContent.trim() == '') {} else {
                      obj.thead.push(td.textContent.trim());
                    }
                  });
                }
              });
            }if (x == 1 && y.querySelectorAll('tr')) {
              $(y.querySelectorAll('tr')).each(function (tri, tr) {
                var trs = [];if (tr.querySelectorAll('td')) {
                  $(tr.querySelectorAll('td')).each(function (tdi, td) {
                    if (td.textContent.trim() == '') {} else {
                      trs.push(td.textContent.trim());
                    }
                  });obj.tbody.push(trs);
                }
              });
            }
          });data.table.push(obj);
        }return data;
      } else {
        return "";
      }
    },
    doAction_uiControl42_P8nLZU: function (data, elem) {},
    getTemplate_uiControl42_P8nLZU: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  butt2Click:function(e){\n    var idx =  $(\'.StandardTable\').children(\'.heTongPage\').find(\'.butt2\').attr(\'id\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.tableLi\').eq(parseInt(idx)).css(\'display\',\'none\');\n    $(\'.StandardTable\').children(\'.heTongPage\').css(\'display\',\'none\');\n    $(\'.StandardTable\').children(\'.tableAll\').css(\'display\',\'block\');\n    $(\'#uiControl48_aNUKU8body\').css(\'display\',\'block\');\n  },\n  heTongClick:function(e){\n    var idx = e.target.getAttribute(\'data-index\');\n    $(\'.StandardTable\').children(\'.tableAll\').css(\'display\',\'none\');\n    $(\'#uiControl48_aNUKU8body\').css(\'display\',\'none\');\n    $(\'.StandardTable\').children(\'.heTongPage\').css(\'display\',\'block\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.tableLi\').eq(parseInt(idx)).css(\'display\',\'block\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.butt2\').attr(\'id\',idx);\n  },\n   showButtonClick:function(e){\n     debugger;\n     var parentTager;\n     if(e.target.getAttribute("class")==\'showClike\'){\n        parentTager = e.target.parentElement;\n     }else{\n        parentTager = e.target.parentElement.parentElement;\n     }\n     var a = $(parentTager.firstChild).children(\'.LAtr\').length>0;\n     var trDiv = $(parentTager.firstChild).children(a?\'.LAtr\':\'\');\n     this.showButWhile(trDiv,a?0:0,parentTager);\n   },\n   showButWhile:function(trDiv,num,parentTager){\n     for(var i=num;i<trDiv.length;i++){\n          if(trDiv[i].style.display == \'none\'){//\u5C55\u5F00\n            $(trDiv[i]).show(200);\n            $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS1\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS2\');\n          }else{\n            $(trDiv[i]).hide(200);\n            $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u663E\u793A\u66F4\u591A\u5185\u5BB9\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS2\');\n            $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS1\');\n         }\n     } \n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    var tableall = \'\';\n    var heTong = \'\';\n    if(data!=\'\' && data.table){\n       tableall = data.table.map(function(x,y){\n          var tabletbody=x.tbody.map(function (aa,b){\n            var  childrentbody=aa.map(function(xx,yy){\n              if(yy==0 || yy == 1){\n                return(\n                   <div className={\'LAtd\'+yy}>{xx}</div>\n                 )\n              }\n            })\n          return(\n              <div className=\'LAtr\' style={{"display":b > -1 ? \'none\' : \'\'}}>\n                {childrentbody}\n                <span className="LAimgX" data-index={b} onClick={me.heTongClick}></span>\n              </div>\n           )\n        })\n          //style={{"display":x.tbody.length<2?\'none\':\'\'}}\n        return (\n          <div className="tableDiv">\n            <div className=\'tableLi\'>\n              <div className=\'line_\' id=\'line_\'>{x.title}</div>\n               {tabletbody}\n            </div>\n             <div className="showClike"  onClick={me.showButtonClick}>\n                <div className="imgS1"></div>\n                <div className="txS">\u663E\u793A\u66F4\u591A\u5185\u5BB9</div>\n              </div>\n           </div>\n          )\n       })\n      \n       heTong = data.table.map(function(x,y){\n          var tableLi = x.tbody.map(function(a,b){\n            var trdiv = a.map(function(val,i){\n                 return(\n                   <div className="trDiv">\n                     <div>{x.thead[i]}</div>\n                     <div>{val}</div>\n                   </div>\n                 )\n             })\n            return(\n              <div className="tableLi" data-index={b}>\n                <div className="line_">\u6743\u9650\u7528\u6237\u8BE6\u60C5</div>\n                {trdiv}\n              </div>\n            )\n           })\n          \n          return(\n            <div className="heTongPage">\n               <div className="tableDiv">\n                 {tableLi}\n               </div>\n               <div className="butt2" onClick={me.butt2Click}>\n                 <input type=\'button\'  value="\u5173\u95ED"/>\n               </div>\n            </div>\n          )   \n      })\n    }\n    \n     return (\n           <div className=\'loan_info\'>\n            <div className=\'StandardTable\'> \n                <div className="tableAll">{tableall}</div>\n                {heTong}\n             </div>\n           </div>\n      )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  butt2Click: function butt2Click(e) {\n    var idx = $(\'.StandardTable\').children(\'.heTongPage\').find(\'.butt2\').attr(\'id\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.tableLi\').eq(parseInt(idx)).css(\'display\', \'none\');\n    $(\'.StandardTable\').children(\'.heTongPage\').css(\'display\', \'none\');\n    $(\'.StandardTable\').children(\'.tableAll\').css(\'display\', \'block\');\n    $(\'#uiControl48_aNUKU8body\').css(\'display\', \'block\');\n  },\n  heTongClick: function heTongClick(e) {\n    var idx = e.target.getAttribute(\'data-index\');\n    $(\'.StandardTable\').children(\'.tableAll\').css(\'display\', \'none\');\n    $(\'#uiControl48_aNUKU8body\').css(\'display\', \'none\');\n    $(\'.StandardTable\').children(\'.heTongPage\').css(\'display\', \'block\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.tableLi\').eq(parseInt(idx)).css(\'display\', \'block\');\n    $(\'.StandardTable\').children(\'.heTongPage\').find(\'.butt2\').attr(\'id\', idx);\n  },\n  showButtonClick: function showButtonClick(e) {\n    debugger;\n    var parentTager;\n    if (e.target.getAttribute("class") == \'showClike\') {\n      parentTager = e.target.parentElement;\n    } else {\n      parentTager = e.target.parentElement.parentElement;\n    }\n    var a = $(parentTager.firstChild).children(\'.LAtr\').length > 0;\n    var trDiv = $(parentTager.firstChild).children(a ? \'.LAtr\' : \'\');\n    this.showButWhile(trDiv, a ? 0 : 0, parentTager);\n  },\n  showButWhile: function showButWhile(trDiv, num, parentTager) {\n    for (var i = num; i < trDiv.length; i++) {\n      if (trDiv[i].style.display == \'none\') {\n        //\u5C55\u5F00\n        $(trDiv[i]).show(200);\n        $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\');\n        $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS1\');\n        $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS2\');\n      } else {\n        $(trDiv[i]).hide(200);\n        $(parentTager).children(\'.showClike\').children(\'.txS\').text(\'\u663E\u793A\u66F4\u591A\u5185\u5BB9\');\n        $(parentTager).children(\'.showClike\').children(\'div\').eq(0).removeClass(\'imgS2\');\n        $(parentTager).children(\'.showClike\').children(\'div\').eq(0).addClass(\'imgS1\');\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    var tableall = \'\';\n    var heTong = \'\';\n    if (data != \'\' && data.table) {\n      tableall = data.table.map(function (x, y) {\n        var tabletbody = x.tbody.map(function (aa, b) {\n          var childrentbody = aa.map(function (xx, yy) {\n            if (yy == 0 || yy == 1) {\n              return React.createElement(\n                \'div\',\n                { className: \'LAtd\' + yy },\n                xx\n              );\n            }\n          });\n          return React.createElement(\n            \'div\',\n            { className: \'LAtr\', style: { "display": b > -1 ? \'none\' : \'\' } },\n            childrentbody,\n            React.createElement(\'span\', { className: \'LAimgX\', \'data-index\': b, onClick: me.heTongClick })\n          );\n        });\n        //style={{"display":x.tbody.length<2?\'none\':\'\'}}\n        return React.createElement(\n          \'div\',\n          { className: \'tableDiv\' },\n          React.createElement(\n            \'div\',\n            { className: \'tableLi\' },\n            React.createElement(\n              \'div\',\n              { className: \'line_\', id: \'line_\' },\n              x.title\n            ),\n            tabletbody\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'showClike\', onClick: me.showButtonClick },\n            React.createElement(\'div\', { className: \'imgS1\' }),\n            React.createElement(\n              \'div\',\n              { className: \'txS\' },\n              \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n            )\n          )\n        );\n      });\n\n      heTong = data.table.map(function (x, y) {\n        var tableLi = x.tbody.map(function (a, b) {\n          var trdiv = a.map(function (val, i) {\n            return React.createElement(\n              \'div\',\n              { className: \'trDiv\' },\n              React.createElement(\n                \'div\',\n                null,\n                x.thead[i]\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                val\n              )\n            );\n          });\n          return React.createElement(\n            \'div\',\n            { className: \'tableLi\', \'data-index\': b },\n            React.createElement(\n              \'div\',\n              { className: \'line_\' },\n              \'\\u6743\\u9650\\u7528\\u6237\\u8BE6\\u60C5\'\n            ),\n            trdiv\n          );\n        });\n\n        return React.createElement(\n          \'div\',\n          { className: \'heTongPage\' },\n          React.createElement(\n            \'div\',\n            { className: \'tableDiv\' },\n            tableLi\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'butt2\', onClick: me.butt2Click },\n            React.createElement(\'input\', { type: \'button\', value: \'\\u5173\\u95ED\' })\n          )\n        );\n      });\n    }\n\n    return React.createElement(\n      \'div\',\n      { className: \'loan_info\' },\n      React.createElement(\n        \'div\',\n        { className: \'StandardTable\' },\n        React.createElement(\n          \'div\',\n          { className: \'tableAll\' },\n          tableall\n        ),\n        heTong\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);