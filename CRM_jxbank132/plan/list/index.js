(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control6_3TsTXy: function (elem) {
      if (elem) {
        var data = [];var tdRef = $(elem).find("table:visible td.right:visible,table:visible td[align='right']");var inputradioDom = $(elem).find("table:visible td>label");if (tdRef.length > 0) {
          tdRef.each(function (i, d) {
            var valueObj = {};var inputvalueDom = $(d).next('td:visible').find("input[type='text']:visible:not('.hasDatepicker')");var inputdateDom = $(d).next('td:visible').find("input.hasDatepicker[type='text']:visible");var inputbtnDom = $(d).next('td:visible').find("input[type='button']:visible");var selectvalueDom = $(d).next('td:visible').find("select:visible");valueObj.key = d.textContent.replace(":", "").trim();valueObj.id = $(d).next('td:visible')[0].firstElementChild.id;if (inputvalueDom.length == 1 && inputbtnDom.length === 0) {
              valueObj.valueType = "text";valueObj.value = inputvalueDom[0].value;valueObj.disabled = inputvalueDom[0].disabled;valueObj.readOnly = inputvalueDom[0].readOnly;
            }
            if (inputvalueDom.length == 1 && inputbtnDom.length == 1) {
              valueObj.id = [inputvalueDom[0].id, inputbtnDom[0].id];valueObj.valueType = "inputBtn";valueObj.value = [inputvalueDom[0].value, inputbtnDom[0].value];valueObj.disabled = [inputvalueDom[0].disabled, inputbtnDom[0].disabled];valueObj.readOnly = [inputvalueDom[0].readOnly, inputbtnDom[0].readOnly];
            }if (inputdateDom.length === 2) {
              valueObj.id = [inputdateDom[0].id, inputdateDom[1].id];valueObj.valueType = "date";valueObj.value = [inputdateDom[0].value, inputdateDom[1].value];valueObj.disabled = [inputdateDom[0].disabled, inputdateDom[1].disabled];valueObj.readOnly = [inputdateDom[0].readOnly, inputdateDom[1].readOnly];
            }if (selectvalueDom.length === 1) {
              valueObj.valueType = "select";valueObj.value = selectvalueDom[0].selectedOptions[0].textContent.trim();valueObj.multiple = selectvalueDom[0].multiple;valueObj.disabled = selectvalueDom[0].disabled;if (valueObj.multiple) {
                valueObj.value = [];selectvalueDom[0].selectedOptions.forEach(function (selOpt, si) {
                  valueObj.value.push(selOpt.textContent.trim());
                });
              }if (selectvalueDom.find("option").length > 0) {
                valueObj.optionsText = [];valueObj.optionsValue = [];selectvalueDom.find("option").each(function (oi, opt) {
                  valueObj.optionsText.push(opt.textContent.trim());valueObj.optionsValue.push(opt.value);
                });
              }
            }data.push(valueObj);
          });
        }if (inputradioDom.length == 2) {
          var valueObj = {};var radio0 = inputradioDom[0].querySelector("input[type='radio']");var radio1 = inputradioDom[1].querySelector("input[type='radio']");valueObj.key = "提醒给";valueObj.name = radio0.name;valueObj.id = [radio0.id, radio1.id];valueObj.valueType = "radio";valueObj.value = [inputradioDom[0].textContent.replace('提醒给', '').trim(), inputradioDom[1].textContent.trim()];valueObj.checked = [radio0.checked, radio1.checked];valueObj.disabled = [radio0.disabled, radio1.disabled];valueObj.readOnly = [radio0.disabled, radio1.disabled];data.push(valueObj);
        }return data;
      }return false;
    },
    doAction_uiControl4_UXxxNP: function (data, elem) {
      if (data.eventType === "inputChange") {
        var value = data.dataCustom[0];var id = data.dataCustom[1];elem.querySelector("#" + id).value = value;elem.querySelector("#" + id).dispatchEvent(new Event("change"));
      }if (data.eventType === "selectChange") {
        var value = data.dataCustom[0];var id = data.dataCustom[1];elem.querySelector("#" + id).value = value;elem.querySelector("#" + id).dispatchEvent(new Event("change"));
      }if (data.eventType === "btnClick") {
        var id = data.dataCustom;elem.querySelector("#" + id).click();
      }if (data.eventType === "dateChange") {
        var id = data.dataCustom[0];var value = data.dataCustom[1];value = value.match(/\d/g).join('');elem.querySelector("#" + id).value = value;elem.querySelector("#" + id).dispatchEvent(new Event("change"));
      }if (data.eventType === "radioClick") {
        var id = data.dataCustom;elem.querySelector("#" + id).click();
      }if (data.eventType === "inputBtnClick") {
        var id = data.dataCustom;elem.querySelector("#" + id).click();
      }
    },
    getTemplate_uiControl4_UXxxNP: function () {
      var selfTemplate = "const {Select} = require(\"ysp-custom-components\");\nmodule.exports = React.createClass({\n  render: function() {\n    const {customData,customHandler} = this.props;\n    const me = this;\n    if(customData && customData.length > 0){\n      var maincard = customData.map(function(d,i){\n        if(d.valueType === \"text\"){\n          return (\n            <div className=\"kvGrp\">\n              <span className=\"key\">{d.key}</span>\n              <span className=\"value\">\n                <AInput placeHolder={(d.disabled||d.readOnly)?\"\":\"\u8BF7\u8F93\u5165\"+d.key} value={d.value} id={d.id} disabled={d.disabled} readOnly={d.readOnly} onFocus={(e)=>{\n                    // \u8BBE\u7F6Eposition\u4E3Aabsolute\n                  }} onBlur={(e)=>{\n                    // \u91CD\u65B0\u8BBE\u7F6Eposition\u4E3Afixed\n                    customHandler && customHandler({\n                      eventType: \"inputChange\",\n                      data: [e.target.value,e.target.id]\n                    })\n                  }}/>\n              </span>\n            </div>\n          )\n        }else if(d.valueType === \"select\"){\n          return (\n            <div className=\"kvGrp\">\n              <span className=\"key\">{d.key}</span>\n              <span className=\"value\">\n                <Select multiple={d.multiple} optionsText={d.optionsText} optionsValue={d.optionsValue} id={d.id} disabled={d.disabled} title={\"\u8BF7\u9009\u62E9\"} customHandler={customHandler} value={d.value}/>\n              </span>\n            </div>\n          )\n        }else if(d.valueType === \"date\"){\n          return (\n            <div className=\"kvGrp\">\n              <span className=\"key\">{d.key}</span>\n              <span className=\"value\">\n                {\n                  d.id.map(function(date,di){\n                    return (\n                      <div>\n                      \t<input type=\"date\" id={date} disabled={d.disabled[di]} readOnly={d.readOnly[di]} onChange={(e)=>{\n                            customHandler && customHandler({\n                              eventType: \"dateChange\",\n                              data: [e.target.id,e.target.value]\n                            })\n                          }}/>\n                        {di==0?\"\u81F3\":\"\"}\n                      </div>\n                    )\n                  })\n                }\n              </span>\n            </div>\n          )\n        }else if(d.valueType === \"radio\"){\n          return (\n            <div className=\"kvGrp\">\n              <span className=\"key\">{d.key}</span>\n              <span className=\"value\">\n                {\n                  d.id.map(function(radio,ri){\n                    return (\n                    \t<label for={radio} data-checked={d.checked[ri]?\"true\":\"false\"}>\n                      \t<input \n                          type=\"radio\" \n                          id={radio} \n                          disabled={d.disabled[ri]} \n                          readOnly={d.readOnly[ri]} \n                          name={d.name}\n                          checked={d.checked[ri]}\n                          onClick={(e)=>{\n                            customHandler && customHandler({\n                              eventType: \"radioClick\",\n                              data:e.target.id\n                            })\n                          }}/>\n                        {d.value[ri]}\n                      </label>\n                    )\n                  })\n                }\n              </span>\n            </div>\n          )\n        }\n        if(d.valueType === \"inputBtn\"){\n          // return (\n          //   <div className=\"kvGrp\">\n          //     <span className=\"key\">{d.key}</span>\n          //     <span className=\"value inputBtnValue\">\n          //       <AInput placeHolder={(d.disabled[0]||d.readOnly[0])?\"\u8BF7\u9009\u62E9\"+d.key:\"\u8BF7\u8F93\u5165\"+d.key} value={d.value[0]} id={d.id[0]} disabled={d.disabled[0]} readOnly={d.readOnly[0]}/>\n          //       <input id={d.id[1]} value={d.value[1]} type=\"button\" onClick={(e)=>{\n          //           customHandler && customHandler({\n          //             eventType: \"inputBtnClick\",\n          //             data: e.target.id\n          //           })\n          //         }}/>\n          //     </span>\n          //   </div>\n          // )\n        }\n      })\n      return (\n        <div id=\"searchPanel\" ref=\"searchPanel\" style={{display:'none'}}>\n          <div className=\"header\">\n            <header>\n              <span className=\"icon icon-left-nav\" onClick={(e)=>{\n                  let searchPanel = document.querySelector(\"#searchPanel\");\n                  if(searchPanel){\n                    searchPanel.style.display = \"none\";\n                  }else{\n                    me.refs[\"searchPanel\"].style.display = \"none\";\n                  }\n                  document.body.style.overflow = \"initial\";\n                }}>\u8FD4\u56DE</span>\n              <span className=\"title\">\u67E5\u8BE2</span>\n            </header>\n          </div>\n          <div className=\"maincard\">\n\t\t\t\t\t\t{maincard}\n          </div>\n          <div className=\"bottomBtns\">\n          \t<input className=\"btn btn-block\" value=\"\u91CD\u7F6E\" id=\"resetbtn\" onClick={(e)=>{\n                customHandler && customHandler({\n                  eventType: 'btnClick',\n                  data: e.target.id\n                })\n              }}/>\n            <input className=\"btn btn-block btn-primary\" value=\"\u67E5\u627E\" id=\"searchbtn\" onClick={(e)=>{\n                let target = e.target;\n                if(target.id === \"searchbtn\"){\n\t\t\t\t\t\t\t\t\tlet searchPanel = document.querySelector(\"#searchPanel\");\n                  if(searchPanel){\n                    searchPanel.style.display = \"none\";\n                    document.body.style.overflow = \"initial\";\n                  }else{\n                    me.refs[\"searchPanel\"].style.display = \"none\";\n                  }\n                }\n                customHandler && customHandler({\n                  eventType: 'btnClick',\n                  data: e.target.id\n                })\n              }}/>\n          </div>\n        </div>\n      )\n    }\n    return null;\n  }\n});";
      return "\"use strict\";\n\nvar _require = require(\"ysp-custom-components\"),\n    Select = _require.Select;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var _props = this.props,\n        customData = _props.customData,\n        customHandler = _props.customHandler;\n\n    var me = this;\n    if (customData && customData.length > 0) {\n      var maincard = customData.map(function (d, i) {\n        if (d.valueType === \"text\") {\n          return React.createElement(\n            \"div\",\n            { className: \"kvGrp\" },\n            React.createElement(\n              \"span\",\n              { className: \"key\" },\n              d.key\n            ),\n            React.createElement(\n              \"span\",\n              { className: \"value\" },\n              React.createElement(AInput, { placeHolder: d.disabled || d.readOnly ? \"\" : \"\u8BF7\u8F93\u5165\" + d.key, value: d.value, id: d.id, disabled: d.disabled, readOnly: d.readOnly, onFocus: function onFocus(e) {\n                  // \u8BBE\u7F6Eposition\u4E3Aabsolute\n                }, onBlur: function onBlur(e) {\n                  // \u91CD\u65B0\u8BBE\u7F6Eposition\u4E3Afixed\n                  customHandler && customHandler({\n                    eventType: \"inputChange\",\n                    data: [e.target.value, e.target.id]\n                  });\n                } })\n            )\n          );\n        } else if (d.valueType === \"select\") {\n          return React.createElement(\n            \"div\",\n            { className: \"kvGrp\" },\n            React.createElement(\n              \"span\",\n              { className: \"key\" },\n              d.key\n            ),\n            React.createElement(\n              \"span\",\n              { className: \"value\" },\n              React.createElement(Select, { multiple: d.multiple, optionsText: d.optionsText, optionsValue: d.optionsValue, id: d.id, disabled: d.disabled, title: \"\u8BF7\u9009\u62E9\", customHandler: customHandler, value: d.value })\n            )\n          );\n        } else if (d.valueType === \"date\") {\n          return React.createElement(\n            \"div\",\n            { className: \"kvGrp\" },\n            React.createElement(\n              \"span\",\n              { className: \"key\" },\n              d.key\n            ),\n            React.createElement(\n              \"span\",\n              { className: \"value\" },\n              d.id.map(function (date, di) {\n                return React.createElement(\n                  \"div\",\n                  null,\n                  React.createElement(\"input\", { type: \"date\", id: date, disabled: d.disabled[di], readOnly: d.readOnly[di], onChange: function onChange(e) {\n                      customHandler && customHandler({\n                        eventType: \"dateChange\",\n                        data: [e.target.id, e.target.value]\n                      });\n                    } }),\n                  di == 0 ? \"\u81F3\" : \"\"\n                );\n              })\n            )\n          );\n        } else if (d.valueType === \"radio\") {\n          return React.createElement(\n            \"div\",\n            { className: \"kvGrp\" },\n            React.createElement(\n              \"span\",\n              { className: \"key\" },\n              d.key\n            ),\n            React.createElement(\n              \"span\",\n              { className: \"value\" },\n              d.id.map(function (radio, ri) {\n                return React.createElement(\n                  \"label\",\n                  { \"for\": radio, \"data-checked\": d.checked[ri] ? \"true\" : \"false\" },\n                  React.createElement(\"input\", {\n                    type: \"radio\",\n                    id: radio,\n                    disabled: d.disabled[ri],\n                    readOnly: d.readOnly[ri],\n                    name: d.name,\n                    checked: d.checked[ri],\n                    onClick: function onClick(e) {\n                      customHandler && customHandler({\n                        eventType: \"radioClick\",\n                        data: e.target.id\n                      });\n                    } }),\n                  d.value[ri]\n                );\n              })\n            )\n          );\n        }\n        if (d.valueType === \"inputBtn\") {\n          // return (\n          //   <div className=\"kvGrp\">\n          //     <span className=\"key\">{d.key}</span>\n          //     <span className=\"value inputBtnValue\">\n          //       <AInput placeHolder={(d.disabled[0]||d.readOnly[0])?\"\u8BF7\u9009\u62E9\"+d.key:\"\u8BF7\u8F93\u5165\"+d.key} value={d.value[0]} id={d.id[0]} disabled={d.disabled[0]} readOnly={d.readOnly[0]}/>\n          //       <input id={d.id[1]} value={d.value[1]} type=\"button\" onClick={(e)=>{\n          //           customHandler && customHandler({\n          //             eventType: \"inputBtnClick\",\n          //             data: e.target.id\n          //           })\n          //         }}/>\n          //     </span>\n          //   </div>\n          // )\n        }\n      });\n      return React.createElement(\n        \"div\",\n        { id: \"searchPanel\", ref: \"searchPanel\", style: { display: 'none' } },\n        React.createElement(\n          \"div\",\n          { className: \"header\" },\n          React.createElement(\n            \"header\",\n            null,\n            React.createElement(\n              \"span\",\n              { className: \"icon icon-left-nav\", onClick: function onClick(e) {\n                  var searchPanel = document.querySelector(\"#searchPanel\");\n                  if (searchPanel) {\n                    searchPanel.style.display = \"none\";\n                  } else {\n                    me.refs[\"searchPanel\"].style.display = \"none\";\n                  }\n                  document.body.style.overflow = \"initial\";\n                } },\n              \"\\u8FD4\\u56DE\"\n            ),\n            React.createElement(\n              \"span\",\n              { className: \"title\" },\n              \"\\u67E5\\u8BE2\"\n            )\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"maincard\" },\n          maincard\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"bottomBtns\" },\n          React.createElement(\"input\", { className: \"btn btn-block\", value: \"\\u91CD\\u7F6E\", id: \"resetbtn\", onClick: function onClick(e) {\n              customHandler && customHandler({\n                eventType: 'btnClick',\n                data: e.target.id\n              });\n            } }),\n          React.createElement(\"input\", { className: \"btn btn-block btn-primary\", value: \"\\u67E5\\u627E\", id: \"searchbtn\", onClick: function onClick(e) {\n              var target = e.target;\n              if (target.id === \"searchbtn\") {\n                var searchPanel = document.querySelector(\"#searchPanel\");\n                if (searchPanel) {\n                  searchPanel.style.display = \"none\";\n                  document.body.style.overflow = \"initial\";\n                } else {\n                  me.refs[\"searchPanel\"].style.display = \"none\";\n                }\n              }\n              customHandler && customHandler({\n                eventType: 'btnClick',\n                data: e.target.id\n              });\n            } })\n        )\n      );\n    }\n    return null;\n  }\n});";
    },
    getData_control7_QO3ovD: function (elem) {
      if (elem) {
        var data = {};var operationIdx;data.headTitle = "";var _doc = elem.ownerDocument;if (_doc && _doc.querySelector("span.current")) {
          data.headTitle = _doc.querySelector("span.current").textContent.replace('/', '').trim();
        }if ($(elem).parent().find("#nowpage:visible").length > 0) {
          data.nowpage = elem.parentElement.querySelector("#nowpage").textContent.trim();
        }if ($(elem).parent().find("#totalnum:visible").length > 0) {
          data.totalnum = elem.parentElement.querySelector("#totalnum").textContent.trim();
        } // totalpage
        if ($(elem).parent().find("#totalpage:visible").length > 0) {
          data.totalpage = elem.parentElement.querySelector("#totalpage").textContent.trim();
        }if ($(elem).find("#datatable #tabhead th:visible").length > 0) {
          data.thead = [];$(elem).find("#datatable #tabhead th:visible").each(function (ti, th) {
            if (th.textContent.trim() !== "操作" && !th.querySelector("input[type='checkbox']")) {
              data.thead.push(th.textContent.trim());
            }if (th.textContent.trim() === "操作") {
              operationIdx = ti;
            }
          });
        }if ($(elem).find("#datatable #tabbody>tr:visible").length > 0) {
          data.tbody = []; // >td:visible:not([width])
          $(elem).find("#datatable #tabbody>tr:visible").each(function (ri, tr) {
            if ($(tr).children("td:visible").length > 1) {
              var tds = [];$(tr).children("td:visible").each(function (di, td) {
                if (!td.querySelector("input[type='checkbox']") && di !== operationIdx) {
                  if (!(di === 0 && td.textContent.trim() === "")) {
                    tds.push(td.textContent.trim());
                  }
                }
              });
            }if ($(tr).children("td:visible").eq(0)[0].textContent.trim() !== "小计" && tds) {
              data.tbody.push(tds);
            }
          });
        }return data;
      }return false;
    },
    doAction_uiControl5_PEiNx2: function (data, elem) {
      if (data.eventType === "detailClick") {
        var idx = parseInt(data.dataCustom);var $aLink = $(elem).find("#datatable #tabbody>tr:visible").eq(idx).find("a[onclick*='panoramaView']");if ($aLink && $aLink.length > 0) {
          $aLink[0].click();
        }
      }if (data.eventType === "pageClick") {
        var id = data.dataCustom;$(elem).parent().find("#" + id)[0].click();
      }if (data.eventType === "back") {
        var _win = elem.ownerDocument.defaultView;var _href = "http://10.1.43.44:9080/crm1/pages/workplatform/platform_main.jsp?menuId=WorkPlatform_main";if (_win && _win.name === "frmright") {
          _win.location.href = _href;try {
            ysp.appMain.showLoading();
          } catch (e) {}
        }
      }
    },
    getTemplate_uiControl5_PEiNx2: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount: function(){\n    document.body.style.overflow = \"initial\";\n  },\n  pageClick: function(e){\n    const customHandler = this.props.customHandler;\n    customHandler && customHandler({\n      eventType: \"pageClick\",\n      data: e.target.id\n    })\n  },\n  render: function() {\n    const {customData,customHandler} = this.props;\n    const me = this;\n    if(customData){\n      var tableList;\n      var hiddenList;\n      if(customData.tbody && customData.thead){\n        if(customData.tbody.length > 0 && customData.thead.length > 0){\n          tableList = customData.tbody.map(function(tr,ri){\n            var list = \"\";\n            var hiddenList;\n            if(tr.length > 0){\n              list = tr.map(function(td,di){\n                if(di < 2){\n                  return (\n                    <div className=\"li\">\n                      { di!==0 && \n                        <span className=\"key\">{customData.thead[di]}</span>\n                      }\n                      <span className=\"value\" id={di==0&&\"custNo\"}>\n                        {td}\n                        {\n                          di === 0 &&\n                            <span className=\"custLevel\">{tr[2]}</span>\n                        }\n                      </span>\n                      \n                    </div>\n                  )\n                }\n              })\n              hiddenList = tr.map(function(td,di){\n                return (\n                  <div className=\"li\">\n                    <span className=\"key\">{customData.thead[di]}</span>\n                    <span className=\"value\">\n                      {td}\n                    </span>\n                  </div>\n                )\n              })\n            }\n            return (\n              <div className=\"list\">\n                {list && <div className=\"twoLinePanel\">{list}</div>}\n                <div className=\"clickMore\" data-index={ri} onClick={(e)=>{\n                    document.body.style.overflow = \"hidden\";\n                    var target = e.target;\n                    if(target.tagName!==\"DIV\"){\n                      target = target.parentElement;\n                    }\n                    var hiddenList = me.refs[\"hiddenList\"+target.getAttribute(\"data-index\")];\n                    if(hiddenList){\n                      hiddenList.style.display = \"block\";\n                    }\n                  }}>\n                  \u67E5\u770B\u66F4\u591A\n                  <b className=\"icon icon-down-nav\"></b>\n                </div>\n                {hiddenList && \n                \t<div className=\"hiddenListPanel\" ref={\"hiddenList\"+ri} style={{display:\"none\"}}>\n                    <div className=\"header\">\n                      <header style={{zIndex:'11'}}>\n                        <span className=\"icon icon-left-nav\" data-index={ri} onClick={(e)=>{\n                            document.body.style.overflow = \"initial\";\n                            var hiddenList = me.refs[\"hiddenList\"+e.target.getAttribute(\"data-index\")];\n                          \tif(hiddenList){\n                              hiddenList.style.display = \"none\";\n                            }\n                          }}>\u8FD4\u56DE</span>\n                        <span className=\"title\">{tr[1].length > 8?tr[1].slice(0,8)+\"...\":tr[1]}</span>\n                        <span className=\"icon\" data-index={ri} onClick={(e)=>{\n                            document.body.style.overflow = \"initial\";\n                            customHandler && customHandler({\n                              eventType: 'detailClick',\n                              data: e.target.getAttribute('data-index')\n                            })\n                          }}>\u8BE6\u60C5</span>\n                      </header>\n                    </div>\n                    <div className=\"hiddenList\">{hiddenList}</div>\n                  </div>\n                }\n              </div>)\n          });\n        }else{\n          tableList = <div className=\"noData\">\u65E0\u6570\u636E\u8FD4\u56DE</div>;\n        }\n      }\n      else if(!customData.tbody && (customData.thead && customData.thead.length > 0)){\n        tableList = <div className=\"noData\">\u65E0\u6570\u636E\u8FD4\u56DE</div>;\n      }\n      return (\n        <div id=\"listPanel\">\n          <Header customData={this.props.customData.headTitle} customHandler={this.props.customHandler}/>\n          {\n          \ttableList&& \n            <div className=\"tableList\">{tableList}</div>\n          }\n          {\n            customData.nowpage && \n              <div className=\"pageContent\">\n              \t<div className=\"nowpage\">\n                  \u7B2C&nbsp;{customData.nowpage}&nbsp;\u9875\n                  {\n                    customData.totalpage && <span>&nbsp;&nbsp;\u5171&nbsp;{customData.totalpage}&nbsp;\u9875</span>\n                  }\n                  {\n                    // customData.totalnum && <span>&nbsp;&nbsp;\u5171&nbsp;{customData.totalnum}&nbsp;\u6761\u8BB0\u5F55</span>\n                  }\n                </div>\n                <div className=\"pageBtns\">\n                \t<span className=\"btn\" id=\"uppage\" onClick={this.pageClick}>\u4E0A\u4E00\u9875</span>\n                  <span className=\"btn\" id=\"nextpage\" onClick={this.pageClick}>\u4E0B\u4E00\u9875</span>\n                </div>\n              </div>\n          }\n        </div>\n      )\n    }\n    return null;\n  }\n});\n\nconst Header = React.createClass({\n  render: function() {\n    const customHandler = this.props.customHandler;\n    return (\n      <div>\n        <div className=\"header\">\n          <header>\n            <span className=\"icon icon-left-nav\" onClick={(e)=>{\n                customHandler && customHandler({\n                  eventType: \"back\"\n                })\n              }}>\u8FD4\u56DE</span>\n            <span className=\"title\">{this.props.customData?this.props.customData:\"CRM\"}</span>\n            <span className=\"icon\" onClick={(e)=>{\n                var target = e.target;\n                if(target){\n                  var searchPanel = document.querySelector(\"#searchPanel\");\n                  if(searchPanel){\n                    searchPanel.style.display = \"block\";\n                    document.body.style.overflow = \"hidden\";\n                  }\n                }\n              }}>\u67E5\u8BE2</span>\n          </header>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    document.body.style.overflow = \"initial\";\n  },\n  pageClick: function pageClick(e) {\n    var customHandler = this.props.customHandler;\n    customHandler && customHandler({\n      eventType: \"pageClick\",\n      data: e.target.id\n    });\n  },\n  render: function render() {\n    var _props = this.props,\n        customData = _props.customData,\n        customHandler = _props.customHandler;\n\n    var me = this;\n    if (customData) {\n      var tableList;\n      var hiddenList;\n      if (customData.tbody && customData.thead) {\n        if (customData.tbody.length > 0 && customData.thead.length > 0) {\n          tableList = customData.tbody.map(function (tr, ri) {\n            var list = \"\";\n            var hiddenList;\n            if (tr.length > 0) {\n              list = tr.map(function (td, di) {\n                if (di < 2) {\n                  return React.createElement(\n                    \"div\",\n                    { className: \"li\" },\n                    di !== 0 && React.createElement(\n                      \"span\",\n                      { className: \"key\" },\n                      customData.thead[di]\n                    ),\n                    React.createElement(\n                      \"span\",\n                      { className: \"value\", id: di == 0 && \"custNo\" },\n                      td,\n                      di === 0 && React.createElement(\n                        \"span\",\n                        { className: \"custLevel\" },\n                        tr[2]\n                      )\n                    )\n                  );\n                }\n              });\n              hiddenList = tr.map(function (td, di) {\n                return React.createElement(\n                  \"div\",\n                  { className: \"li\" },\n                  React.createElement(\n                    \"span\",\n                    { className: \"key\" },\n                    customData.thead[di]\n                  ),\n                  React.createElement(\n                    \"span\",\n                    { className: \"value\" },\n                    td\n                  )\n                );\n              });\n            }\n            return React.createElement(\n              \"div\",\n              { className: \"list\" },\n              list && React.createElement(\n                \"div\",\n                { className: \"twoLinePanel\" },\n                list\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"clickMore\", \"data-index\": ri, onClick: function onClick(e) {\n                    document.body.style.overflow = \"hidden\";\n                    var target = e.target;\n                    if (target.tagName !== \"DIV\") {\n                      target = target.parentElement;\n                    }\n                    var hiddenList = me.refs[\"hiddenList\" + target.getAttribute(\"data-index\")];\n                    if (hiddenList) {\n                      hiddenList.style.display = \"block\";\n                    }\n                  } },\n                \"\\u67E5\\u770B\\u66F4\\u591A\",\n                React.createElement(\"b\", { className: \"icon icon-down-nav\" })\n              ),\n              hiddenList && React.createElement(\n                \"div\",\n                { className: \"hiddenListPanel\", ref: \"hiddenList\" + ri, style: { display: \"none\" } },\n                React.createElement(\n                  \"div\",\n                  { className: \"header\" },\n                  React.createElement(\n                    \"header\",\n                    { style: { zIndex: '11' } },\n                    React.createElement(\n                      \"span\",\n                      { className: \"icon icon-left-nav\", \"data-index\": ri, onClick: function onClick(e) {\n                          document.body.style.overflow = \"initial\";\n                          var hiddenList = me.refs[\"hiddenList\" + e.target.getAttribute(\"data-index\")];\n                          if (hiddenList) {\n                            hiddenList.style.display = \"none\";\n                          }\n                        } },\n                      \"\\u8FD4\\u56DE\"\n                    ),\n                    React.createElement(\n                      \"span\",\n                      { className: \"title\" },\n                      tr[1].length > 8 ? tr[1].slice(0, 8) + \"...\" : tr[1]\n                    ),\n                    React.createElement(\n                      \"span\",\n                      { className: \"icon\", \"data-index\": ri, onClick: function onClick(e) {\n                          document.body.style.overflow = \"initial\";\n                          customHandler && customHandler({\n                            eventType: 'detailClick',\n                            data: e.target.getAttribute('data-index')\n                          });\n                        } },\n                      \"\\u8BE6\\u60C5\"\n                    )\n                  )\n                ),\n                React.createElement(\n                  \"div\",\n                  { className: \"hiddenList\" },\n                  hiddenList\n                )\n              )\n            );\n          });\n        } else {\n          tableList = React.createElement(\n            \"div\",\n            { className: \"noData\" },\n            \"\\u65E0\\u6570\\u636E\\u8FD4\\u56DE\"\n          );\n        }\n      } else if (!customData.tbody && customData.thead && customData.thead.length > 0) {\n        tableList = React.createElement(\n          \"div\",\n          { className: \"noData\" },\n          \"\\u65E0\\u6570\\u636E\\u8FD4\\u56DE\"\n        );\n      }\n      return React.createElement(\n        \"div\",\n        { id: \"listPanel\" },\n        React.createElement(Header, { customData: this.props.customData.headTitle, customHandler: this.props.customHandler }),\n        tableList && React.createElement(\n          \"div\",\n          { className: \"tableList\" },\n          tableList\n        ),\n        customData.nowpage && React.createElement(\n          \"div\",\n          { className: \"pageContent\" },\n          React.createElement(\n            \"div\",\n            { className: \"nowpage\" },\n            \"\\u7B2C\\xA0\",\n            customData.nowpage,\n            \"\\xA0\\u9875\",\n            customData.totalpage && React.createElement(\n              \"span\",\n              null,\n              \"\\xA0\\xA0\\u5171\\xA0\",\n              customData.totalpage,\n              \"\\xA0\\u9875\"\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"pageBtns\" },\n            React.createElement(\n              \"span\",\n              { className: \"btn\", id: \"uppage\", onClick: this.pageClick },\n              \"\\u4E0A\\u4E00\\u9875\"\n            ),\n            React.createElement(\n              \"span\",\n              { className: \"btn\", id: \"nextpage\", onClick: this.pageClick },\n              \"\\u4E0B\\u4E00\\u9875\"\n            )\n          )\n        )\n      );\n    }\n    return null;\n  }\n});\n\nvar Header = React.createClass({\n  displayName: \"Header\",\n\n  render: function render() {\n    var customHandler = this.props.customHandler;\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"header\" },\n        React.createElement(\n          \"header\",\n          null,\n          React.createElement(\n            \"span\",\n            { className: \"icon icon-left-nav\", onClick: function onClick(e) {\n                customHandler && customHandler({\n                  eventType: \"back\"\n                });\n              } },\n            \"\\u8FD4\\u56DE\"\n          ),\n          React.createElement(\n            \"span\",\n            { className: \"title\" },\n            this.props.customData ? this.props.customData : \"CRM\"\n          ),\n          React.createElement(\n            \"span\",\n            { className: \"icon\", onClick: function onClick(e) {\n                var target = e.target;\n                if (target) {\n                  var searchPanel = document.querySelector(\"#searchPanel\");\n                  if (searchPanel) {\n                    searchPanel.style.display = \"block\";\n                    document.body.style.overflow = \"hidden\";\n                  }\n                }\n              } },\n            \"\\u67E5\\u8BE2\"\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_undefined: function (elem) {},
    doAction_: function (data, elem) {},
    getTemplate_: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91\"\n    );\n  }\n});";
    }
  }, "list");
})(window, ysp);