(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control14_NezZbX: function (elem) {
      if (elem) {
        var data = [];var typeTitle = [];var content = [];$(elem).children('tr').each(function (trIdx, tr) {
          if (tr.className == 'table-attachtitle') {
            typeTitle.push(tr.textContent.trim());content.push([]);
          } else {
            var lastArr = content[content.length - 1];$(tr).children('td:visible').children().children('hr').each(function (hrIdx, hr) {
              var suggest = hr.previousSibling.previousSibling.previousSibling.previousSibling.textContent.split(' ').map(function (val, idx) {
                if (val.trim()) {
                  return val.trim();
                }
              });hr.previousSibling.previousSibling.textContent.split(' ').map(function (val, idx) {
                if (val.trim()) {
                  suggest.push(val.trim());
                }
              });lastArr.push(suggest);
            }); // $(tr).text().split(' ').map(function (val, idx) {
            //   val && lastArr.push(val);
            // }); //content[content.length-1].push
          }
        });return { typeTitle: typeTitle, content: content };
      } else {
        return null;
      }
    },
    doAction_uiControl13_ap3wxF: function (data, elem) {},
    getTemplate_uiControl13_ap3wxF: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    \n    if(data && data.typeTitle.length){\n      var baseInfo=$(\'#baseInfo\')[0];\n      var typeTitle=data.typeTitle;\n      var content=data.content;\n      return (\n        <div className=\'ckyjContainer\'>\n          <ul>\n          \t{\n              content.map(function(val1,idx1){\n\t\t\t\t\t\t\t\treturn <li>\n                \t<h4>{typeTitle[idx1]}</h4>\n                  {\n                    val1.map(function(val2,idx2){\n                      var arr=[];//\u4FDD\u5B58\u90E8\u95E8\u548C\u65F6\u95F4\n                      return <div>\n                      \t{\n                          val2.map(function(val3,idx3){\n                            var _length=val2.length;\n                            \n                            if(idx3<_length-3){\n                              return <p>{val3}</p>\n                            }else{\n                              arr.push(val3);\n                            }\n                          })\n                          \n                        }\n                        <p>\n                          {\n                            arr.map(function(v,k){\n                              return <span>{v}&nbsp;</span>\n                            })\n                          }\n                        </p>\n                      </div>\n                    })\n                  }\n                </li>\n              })\n            }\n          </ul>\n\t\t\t\t\t\n        </div>\n      )\n    }else{\n      return <div>\u5F53\u524D\u6CA1\u6709\u9700\u8981\u663E\u793A\u7684\u610F\u89C1\uFF01</div>\n    }\n    \n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n\n    if (data && data.typeTitle.length) {\n      var baseInfo = $(\'#baseInfo\')[0];\n      var typeTitle = data.typeTitle;\n      var content = data.content;\n      return React.createElement(\n        \'div\',\n        { className: \'ckyjContainer\' },\n        React.createElement(\n          \'ul\',\n          null,\n          content.map(function (val1, idx1) {\n            return React.createElement(\n              \'li\',\n              null,\n              React.createElement(\n                \'h4\',\n                null,\n                typeTitle[idx1]\n              ),\n              val1.map(function (val2, idx2) {\n                var arr = []; //\u4FDD\u5B58\u90E8\u95E8\u548C\u65F6\u95F4\n                return React.createElement(\n                  \'div\',\n                  null,\n                  val2.map(function (val3, idx3) {\n                    var _length = val2.length;\n\n                    if (idx3 < _length - 3) {\n                      return React.createElement(\n                        \'p\',\n                        null,\n                        val3\n                      );\n                    } else {\n                      arr.push(val3);\n                    }\n                  }),\n                  React.createElement(\n                    \'p\',\n                    null,\n                    arr.map(function (v, k) {\n                      return React.createElement(\n                        \'span\',\n                        null,\n                        v,\n                        \'\\xA0\'\n                      );\n                    })\n                  )\n                );\n              })\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement(\n        \'div\',\n        null,\n        \'\\u5F53\\u524D\\u6CA1\\u6709\\u9700\\u8981\\u663E\\u793A\\u7684\\u610F\\u89C1\\uFF01\'\n      );\n    }\n  }\n});';
    }
  });
})(window, ysp);