(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control43_Rt6Fo5: function (elem) {
      if (elem) {
        return ysp.customHelper.getMenuData($, elem);
      } else {
        return "";
      }
    },
    doAction_uiControl33_tPgZvS: function (data, elem) {
      if (data.eventType === 'click') {
        var idx = parseInt(data.dataCustom);$(elem).children('tbody').children('tr').eq(idx).find('a')[0].click();
      }if (data.eventType === 'refresh') {
        elem.ownerDocument.defaultView.parent.frames["businessfrm"].location.reload();
      }if (data.eventType === 'backToList') {
        if ($(elem).prev('.trTitle').length > 0 && $(elem).prev('.trTitle').find('a').length > 0) {
          $(elem).prev('.trTitle').find('a')[0].click();
        }
      }
    },
    getTemplate_uiControl33_tPgZvS: function () {
      var selfTemplate = "var React = require('react');\nvar {MenuList} = require('ysp-custom-components');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MenuList customData={data} customHandler={this.props.customHandler}/>)\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    MenuList = _require.MenuList;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MenuList, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control44_90vF36: function (elem) {
      var data = [];if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        if ($(elem).children('input[type="button"]').length > 0) {
          $(elem).children('input[type="button"]').each(function (i, btn) {
            data.push(btn.value);
          });
        }
      }return data;
    },
    doAction_uiControl34_sCrLWT: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom);$(elem).find('input[type="button"]').eq(idx)[0].click(); // if (idx === 1) {
        //   ysp.appMain.showLoading();
        // }
      }
    },
    getTemplate_uiControl34_sCrLWT: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {LoanBottomBtn} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<LoanBottomBtn customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return "'use strict';\n\nvar React = require('react');\n\nvar _require = require('ysp-custom-components'),\n    LoanBottomBtn = _require.LoanBottomBtn;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(LoanBottomBtn, { customData: data, customHandler: this.props.customHandler });\n  }\n});";
    },
    getData_control45_AFAWfV: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector('.RinghtTrYellow')) {
          data.key = elem.querySelector('.RinghtTrYellow').textContent.trim().split(/：/)[0];
        }if (elem.querySelector('.RinghtTrword select')) {
          data.value = elem.querySelector('.RinghtTrword select').value;data.optionValue = [];data.optionText = [];data.selectDisabled = elem.querySelector('.RinghtTrword select').disabled;$(elem.querySelectorAll('.RinghtTrword select option')).each(function (i, opt) {
            data.optionValue.push(opt.value);data.optionText.push(opt.textContent);
          });
        }return data;
      }return '';
    },
    doAction_uiControl35_sEcT2r: function (data, elem) {
      if (data.eventType == 'optClick') {
        var value = data.dataCustom;var el = elem.querySelector('.RinghtTrword select');el.value = value;el.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl35_sEcT2r: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handleChange: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'optClick',\n        data: e.target.value\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data != ''){\n      if(data.optionText.length > 0){\n        var options = data.optionText.map(function(opt,i){\n          return (<option value={data.optionValue[i]}>{opt}</option>)\n        })\n      }\n      return (\n        <div className='singleSelect seleApplier'>\n          <div className='singleSelectLi'>\n          \t<span className='title'>{data.key?data.key:''}</span>\n            <span className='value'>\n            \t<select value={data.value?data.value:''} onChange={me.handleChange} disabled={data.selectDisabled}>{options}</select>\n            </span>\n          </div>\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleChange: function handleChange(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'optClick',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data != '') {\n      if (data.optionText.length > 0) {\n        var options = data.optionText.map(function (opt, i) {\n          return React.createElement(\n            'option',\n            { value: data.optionValue[i] },\n            opt\n          );\n        });\n      }\n      return React.createElement(\n        'div',\n        { className: 'singleSelect seleApplier' },\n        React.createElement(\n          'div',\n          { className: 'singleSelectLi' },\n          React.createElement(\n            'span',\n            { className: 'title' },\n            data.key ? data.key : ''\n          ),\n          React.createElement(\n            'span',\n            { className: 'value' },\n            React.createElement(\n              'select',\n              { value: data.value ? data.value : '', onChange: me.handleChange, disabled: data.selectDisabled },\n              options\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement('div', { className: 'disnone' });\n    }\n  }\n});";
    },
    getData_control49_dtv4pR: function (elem) {
      if (elem) {
        var data = {};if (elem.querySelector('.table-title')) {
          // data.cardTitle = elem.querySelector('.table-title').textContent.trim();
          data.cardTitle = '';
        }if ($(elem).children('tbody').children('tr').length > 1) {
          data.picGroup = [];$(elem).children('tbody').children('tr').each(function (i, tr) {
            if (i > 0 && $(tr).children('td').eq(1)[0].querySelector('img')) {
              var btn;if ($(tr).children('td').eq(0)[0].querySelector('input[type="button"]')) {
                btn = $(tr).children('td').eq(0)[0].querySelector('input[type="button"]').value;
              }data.picGroup.push({ picName: $(tr).children('td').eq(0)[0].textContent.trim(), picBtn: btn, img: $(tr).children('td').eq(1)[0].querySelector('img').getAttribute('src') });
            }
          });
        }return data;
      }return '';
    },
    doAction_uiControl38_mrcwbk: function (data, elem) {
      if (data.eventType === 'takePhoto') {
        // yspCheckIn.openCamera('setImageData()');
        var idx = parseInt(data.dataCustom);var applier = elem.ownerDocument.querySelector('#APPT_TYPE');if (/请选择/.test(applier.value) || applier.value === '') {
          alert('请选择申请人');
        } else {
          try {
            // if(idx === 0){
            (idx === 0 || idx === 1) && yspCheckIn.openOcrIdCard(); // 调用 OCR 识别
            idx === 2 && yspCheckIn.openOcrBank("0"); // 0表示我行卡号
            idx === 3 && yspCheckIn.openOcrBank("1"); // 1表示最终收款卡
            // }else{
            // yspCheckIn.openCamera('setImgData' + idx + '()'); // }
          } catch (e) {}
        } // if (idx === 0) {
        //   top.setBase64Image = function (str) {
        //     ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        //     setTimeout(function () {
        //       ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelector("#ID_FRONT_CARD").click();
        //     }, 2000);
        //   };
        // } else if (idx === 1) {
        //   top.setBase64Image = function (str) {
        //     ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        //     setTimeout(function () {
        //       ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelector("#ID_BACK_CARD").click();
        //     }, 2000);
        //   };
        // } else if (idx === 2) {
        //   top.setBase64Image = function (str) {
        //     ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        //     setTimeout(function () {
        //       ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelector("#MY_BANK_CARD").click();
        //     }, 2000);
        //   };
        // } else if (idx === 3) {
        //   top.setBase64Image = function (str) {
        //     ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        //     setTimeout(function () {
        //       ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelector("#OTH_BANK_CARD").click();
        //     }, 2000);
        //   };
        // }
        // yspCheckIn.openCamera(); 
        // alert('信息采集中，结束后请点击确认。');
        // if (localStorage.getItem("getImage") !== null) {
        //   setTimeout(function () {
        //     ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = top.localStorage.getItem("baseImage");
        //     localStorage.removeItem("getImage");
        //     setTimeout(function(){
        //       $(elem).find('input[type="button"]').eq(idx)[0].click();
        //     },1000)
        //   },1000);
        // }
      }
    },
    getTemplate_uiControl38_mrcwbk: function () {
      var selfTemplate = "module.exports = React.createClass({\n  takePhoto: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'takePhoto',\n        data: e.target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me = this;\n    if(data && data !== '' && data.picGroup){\n      var ocrCardGroup = data.picGroup.map(function(item,i){\n        return (\n          <div>\n          \t<div className='picName'>{item.picName}</div>\n            <div className='picShow'>\n            \t<span style={{display:item.img===''?'':'none'}} className='icon icon-plus' onClick={me.takePhoto} data-index={i}></span>\n              <img style={{display:item.img===''?'none':''}} src={item.img}></img>\n            </div>\n          </div>\n        )\n      })\n      return (\n        <div className='ocrCard'>\n\t\t\t\t\t<div className='ocrCardTitle'>\n            {data.cardTitle?data.cardTitle:''}\n          </div>\n          <div className='ocrCardGroup'>\n            {ocrCardGroup}\n          </div>\n        </div>\n      )\n    }else{\n      return (<div className='disnone'></div>)\n    }\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  takePhoto: function takePhoto(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'takePhoto\',\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    if (data && data !== \'\' && data.picGroup) {\n      var ocrCardGroup = data.picGroup.map(function (item, i) {\n        return React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'div\',\n            { className: \'picName\' },\n            item.picName\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'picShow\' },\n            React.createElement(\'span\', { style: { display: item.img === \'\' ? \'\' : \'none\' }, className: \'icon icon-plus\', onClick: me.takePhoto, \'data-index\': i }),\n            React.createElement(\'img\', { style: { display: item.img === \'\' ? \'none\' : \'\' }, src: item.img })\n          )\n        );\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'ocrCard\' },\n        React.createElement(\n          \'div\',\n          { className: \'ocrCardTitle\' },\n          data.cardTitle ? data.cardTitle : \'\'\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ocrCardGroup\' },\n          ocrCardGroup\n        )\n      );\n    } else {\n      return React.createElement(\'div\', { className: \'disnone\' });\n    }\n  }\n});';
    },
    getData_control51_VVcox4: function (elem) {
      var data = [];if (elem && elem.querySelectorAll('input[type="button"]').length > 0) {
        $(elem).children('input[type="button"]').each(function (i, btn) {
          data.push(btn.value);
        });
      }return data;
    },
    doAction_uiControl40_kf3Tmf: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = data.dataCustom;console.log(idx);$(elem).find('input[type="button"]').eq(idx)[0].click();
      }
    },
    getTemplate_uiControl40_kf3Tmf: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {LoanBottomBtn} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<LoanBottomBtn customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    LoanBottomBtn = _require.LoanBottomBtn;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(LoanBottomBtn, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control50_1ra0y2: function (elem) {
      if (elem && !elem.querySelector('.RinghtTrword #APPT_TYPE')) {
        // ysp.appMain.hideLoading();
        return ysp.customHelper.getMainCardData($, elem);
      }return '';
    },
    doAction_uiControl42_DybIiD: function (data, elem) {
      var idx = parseInt(data.dataCustom[0]);var value = data.dataCustom[1];var el = $(elem).find('.RinghtTrYellow').eq(idx)[0].nextElementSibling.children[0];if (data.eventType == 'changeInput') {
        el.dispatchEvent(new Event('focus'));el.value = value;el.dispatchEvent(new Event('change'));el.dispatchEvent(new Event('blur'));
      }if (data.eventType == 'optionClick') {
        el.value = value;el.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl42_DybIiD: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {MainCard} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<MainCard customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(MainCard, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    },
    getData_control71_O8BTLZ: function (elem) {
      if (elem) {
        var data = 'OCR数据采集';return data;
      }return '';
    },
    doAction_uiControl64_wzcvpN: function (data, elem) {},
    getTemplate_uiControl64_wzcvpN: function () {
      var selfTemplate = 'var React = require(\'react\');\nvar {SideBar} = require(\'ysp-custom-components\');\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (<SideBar customData={data} customHandler={this.props.customHandler}/>)\n  }\n});';
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nvar _require = require(\'ysp-custom-components\'),\n    SideBar = _require.SideBar;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(SideBar, { customData: data, customHandler: this.props.customHandler });\n  }\n});';
    }
  });
})(window, ysp);