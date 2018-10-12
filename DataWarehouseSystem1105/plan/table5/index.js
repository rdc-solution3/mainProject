(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control63_vromrn: function (elem) {
      if (elem) {
        var tableTitle = $(elem).children('tbody').children('tr').eq(0).text().trim();var tableTopText = [];var tableWidth = getComputedStyle(elem).width;$(elem).children('tbody').children('tr').eq(1).children('td').each(function (tdIdx, td) {
          if (td.textContent) {
            tableTopText.push(td.textContent);
          }
        });if (ysp.customHelper && ysp.customHelper.searchData) {
          var searchData = ysp.customHelper.searchData($, elem);var checkedparamLabel = searchData.checkedparamLabel;var checkedparamValue = searchData.checkedparamValue;
        }var theadData = [];var tbodyData = [];$(elem).children('tbody').children('tr').each(function (trIdx, tr) {
          if (trIdx == 2) {
            $(tr).children('td').each(function (tdIdx, td) {
              theadData.push({ tdText: td.textContent, tdWidth: getComputedStyle(td).width, tdHeight: getComputedStyle(td).height });
            });
          } else if (trIdx > 2) {
            var tds = [];$(tr).children('td').each(function (tdIdx, td) {
              tds.push({ tdText: td.textContent, tdHeight: getComputedStyle(td).height, tdWidth: getComputedStyle(td).width });
            });tbodyData.push(tds);
          }
        });return { tableWidth: tableWidth, tableTitle: tableTitle, tableTopText: tableTopText, theadData: theadData, tbodyData: tbodyData, checkedparamLabel: checkedparamLabel, checkedparamValue: checkedparamValue };
      } else {
        return null;
      }
    },
    doAction_uiControl24_XNtL0v: function (data, elem) {
      if (data.eventType == 'handleBackBtnClick') {
        if (ysp && ysp.customHelper && ysp.customHelper.handleBackBtnClick) {
          return ysp.customHelper.handleBackBtnClick($, elem);
        }
      } else if (data.eventType == 'handleInputBlur') {
        ysp.customHelper.searchInputBlur($, elem, data);
      } else if (data.eventType == 'handleSelectChange') {
        ysp.customHelper.searchSelectChange($, elem, data);
      } else if (data.eventType == 'handleSearchBtnClick') {
        ysp.customHelper.searchBtnClick($, elem);
      }
    },
    getTemplate_uiControl24_XNtL0v: function () {
      var selfTemplate = 'import {PageHeader, TableTitle, SearchComponent} from \'ysp-custom-components\';\nexport default class extends React.Component{\n  constructor(props){\n    super(props);\n  }\n  componentDidMount () {\n    var pageHeaderHeight = 50;\n    var tableTitle = document.querySelector(\'.tableTitle\');\n    var tableContainer = document.querySelector(\'.tableContainer\');\n    if (tableTitle) {\n      var tableTitleHeight = tableTitle.offsetHeight;\n      tableContainer.style.paddingTop = pageHeaderHeight + tableTitleHeight + \'px\';\n    }\n    \n    \n    var theadContainer = document.querySelector(\'#theadContainer\');\n    var tbodyContainer = document.querySelector(\'#tbodyContainer\');\n    \n    tbodyContainer.addEventListener(\'scroll\', () => {\n      theadContainer.scrollLeft = tbodyContainer.scrollLeft;\n    });\n  }\n  componentDidUpdate () {\n    $(\'#tbodyContainer tr\').on(\'click\', (e) => {\n      if (e.currentTarget.className == \'activeTr\') {\n        e.currentTarget.className = \'\';\n      } else {\n        $(\'#tbodyContainer tr\').attr(\'class\', \'\');\n      \te.currentTarget.className = \'activeTr\';\n      }\n    });\n  }\n  render(){\n    var data = this.props.customData;\n    if (data) {\n      var checkedparamLabel = data.checkedparamLabel;\n    \tvar checkedparamValue = data.checkedparamValue;\n      var theadData = data.theadData;\n      var tbodyData = data.tbodyData;\n      return <div>\n        <PageHeader customHandler={this.props.customHandler}></PageHeader>\n        <div className=\'tableTitle\'>\n          <TableTitle tableTitle={data.tableTitle}></TableTitle>\n          <p style={{\'margin\': \'0\'}}>\n          \t{\n              data.tableTopText.map( (text, idx) => {\n                return <span>{text}</span>\n              })\n            }\n          </p>\n\t\t\t\t\t\n        </div>\n        <div className=\'tableContainer\'>\n          {\n            <div id="theadContainer">\n            \t<table style={{\'width\': data.tableWidth}} border=\'1\' cellspacing="0" colspan="0">\n                <tr>\n                  {\n                    theadData.map( (tdData, tdIdx) => {\n                      return <td style={{\'width\': tdData.tdWidth, \'height\': tdData.tdHeight}}>{tdData.tdText}</td>\n                    })\n                  }\n                </tr>\n             </table>\n            </div>\n            \n          }\n          \n          <div id="tbodyContainer">\n          \t<table border=\'1\' cellspacing="0" colspan="0" style={{\'width\': data.tableWidth}}>\n              {\n                tbodyData.map( (tr, trIdx) => {\n                  return <tr>\n                    {\n                      tr.map( (td, tdIdx) => {\n                        return <td style={{\'width\': td.tdWidth, \'height\': td.tdHeight}}>{td.tdText}</td>\n                      })\n                    }\n                  </tr>\n                })\n              }\n            </table>\n          </div>\n          \n        </div>\n        <SearchComponent checkedparamValue={checkedparamValue} checkedparamLabel={checkedparamLabel} customData={this.props.customData} customHandler={this.props.customHandler}></SearchComponent>\n      </div>\n    } else {\n      return null;\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var pageHeaderHeight = 50;\n      var tableTitle = document.querySelector(\'.tableTitle\');\n      var tableContainer = document.querySelector(\'.tableContainer\');\n      if (tableTitle) {\n        var tableTitleHeight = tableTitle.offsetHeight;\n        tableContainer.style.paddingTop = pageHeaderHeight + tableTitleHeight + \'px\';\n      }\n\n      var theadContainer = document.querySelector(\'#theadContainer\');\n      var tbodyContainer = document.querySelector(\'#tbodyContainer\');\n\n      tbodyContainer.addEventListener(\'scroll\', function () {\n        theadContainer.scrollLeft = tbodyContainer.scrollLeft;\n      });\n    }\n  }, {\n    key: \'componentDidUpdate\',\n    value: function componentDidUpdate() {\n      $(\'#tbodyContainer tr\').on(\'click\', function (e) {\n        if (e.currentTarget.className == \'activeTr\') {\n          e.currentTarget.className = \'\';\n        } else {\n          $(\'#tbodyContainer tr\').attr(\'class\', \'\');\n          e.currentTarget.className = \'activeTr\';\n        }\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      if (data) {\n        var checkedparamLabel = data.checkedparamLabel;\n        var checkedparamValue = data.checkedparamValue;\n        var theadData = data.theadData;\n        var tbodyData = data.tbodyData;\n        return React.createElement(\n          \'div\',\n          null,\n          React.createElement(_yspCustomComponents.PageHeader, { customHandler: this.props.customHandler }),\n          React.createElement(\n            \'div\',\n            { className: \'tableTitle\' },\n            React.createElement(_yspCustomComponents.TableTitle, { tableTitle: data.tableTitle }),\n            React.createElement(\n              \'p\',\n              { style: { \'margin\': \'0\' } },\n              data.tableTopText.map(function (text, idx) {\n                return React.createElement(\n                  \'span\',\n                  null,\n                  text\n                );\n              })\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'tableContainer\' },\n            React.createElement(\n              \'div\',\n              { id: \'theadContainer\' },\n              React.createElement(\n                \'table\',\n                { style: { \'width\': data.tableWidth }, border: \'1\', cellspacing: \'0\', colspan: \'0\' },\n                React.createElement(\n                  \'tr\',\n                  null,\n                  theadData.map(function (tdData, tdIdx) {\n                    return React.createElement(\n                      \'td\',\n                      { style: { \'width\': tdData.tdWidth, \'height\': tdData.tdHeight } },\n                      tdData.tdText\n                    );\n                  })\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { id: \'tbodyContainer\' },\n              React.createElement(\n                \'table\',\n                { border: \'1\', cellspacing: \'0\', colspan: \'0\', style: { \'width\': data.tableWidth } },\n                tbodyData.map(function (tr, trIdx) {\n                  return React.createElement(\n                    \'tr\',\n                    null,\n                    tr.map(function (td, tdIdx) {\n                      return React.createElement(\n                        \'td\',\n                        { style: { \'width\': td.tdWidth, \'height\': td.tdHeight } },\n                        td.tdText\n                      );\n                    })\n                  );\n                })\n              )\n            )\n          ),\n          React.createElement(_yspCustomComponents.SearchComponent, { checkedparamValue: checkedparamValue, checkedparamLabel: checkedparamLabel, customData: this.props.customData, customHandler: this.props.customHandler })\n        );\n      } else {\n        return null;\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);