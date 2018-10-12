// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */

    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */

    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    
    // 返回按钮回调
    handleBackBtnClick: function ($, elem) {
      var qkReport = elem.ownerDocument.defaultView.parent.parent.document.querySelector('#qkReport');
      qkReport.click();
    },
    
    // 查询采集
    searchData: function ($, elem) {
      var checkedparam = elem.ownerDocument.defaultView.parent.document.querySelector('#checkedparam');
      var checkedparamLabel = [];
      var checkedparamValue = [];
      if (checkedparam) {
        var checkedparamTr = $(checkedparam).children('td').eq(0).children('table').children('tbody').children('tr');
        checkedparamTr.children('th').each(function (thIdx, th) {
          checkedparamLabel.push(th.textContent.trim());
        });
        checkedparamTr.children('td').each(function (tdIdx, td) {
          var tdObj = {};
          tdObj.tdId = td.id;
          $(td).children().each(function (tdChildIdx, tdChild) {
            if (tdChild.nodeName != 'SCRIPT') {
              if (tdChild.nodeName == 'INPUT') {
                tdObj.nodeName = 'input';
                tdObj.value = tdChild.value;
                tdObj.tdChildId = tdChild.id;
                var datatype = tdChild.getAttribute('datatype');

                if (datatype == 'Date') {
                  tdObj.datatype = 'date';
                } else if (datatype == 'Number') {
                  tdObj.datatype = 'number';
                }
              } else if (tdChild.nodeName == 'SELECT') {
                tdObj.nodeName = 'select';
                tdObj.tdChildId = tdChild.id;
                var options = [];
                $(tdChild).children('option').each(function (optIdx, option) {
                  options.push({
                    optionText: option.textContent,
                    optionSelected: option.selected,
                    optionIndex: optIdx
                  });
                });
                tdObj.options = options;
              }
            }
          });
          checkedparamValue.push(tdObj);
        });
      }
      return {
        checkedparamLabel: checkedparamLabel,
        checkedparamValue: checkedparamValue
      }
    },
    
    // 查询input回调
    searchInputBlur: function ($, elem, data) {
      var customData = data.customData;
      var checkedparam = elem.ownerDocument.defaultView.parent.document.querySelector('#checkedparam');
      var target = checkedparam.querySelector('#' + customData.id);
      target.value = customData.value;
      target.dispatchEvent(new Event('change'));
    },
    
    // 查询select回调
    searchSelectChange: function ($, elem, data) {
      var customData = data.customData;
      var checkedparam = elem.ownerDocument.defaultView.parent.document.querySelector('#checkedparam');
      var target = checkedparam.querySelector('#' + customData.id);
      target.querySelectorAll('option')[customData.value - 0].selected = true;
      target.dispatchEvent(new Event('change'));
    },
    
    // 查询按钮回调
    searchBtnClick: function ($, elem) {
      var checkedparam = elem.ownerDocument.defaultView.parent.document.querySelector('#checkedparam');
      var searchBtn = $(checkedparam).children('td').eq(1).children('input')[0];
      searchBtn.click();
      ysp.appMain.showLoading();
    },
    
    
    
    onTargetLoad: function(aWin, doc){
      ysp.appMain.hideLoading();
      if (/\/ncods\/main\.htm/.test(aWin.location.href)) {
      	var timer = setInterval(function () {
          var qkReport = doc.querySelector('#qkReport');//报表专区
          if (qkReport) {
            qkReport.click();
            clearInterval(timer);
            timer = null;
          }
        }, 200);
        
        
      	
        
        //关闭公告窗口
        var timerXbtn = setInterval(function () {
          var xbtn = doc.querySelector('#xbtn');
          if (xbtn) {
            xbtn.click();
            clearInterval(timerXbtn);
            timerXbtn = null;
          }
        });
      }
      
			if(aWin && /\/ncods\/index\.htm/.test(aWin.location.href)){
        doc.querySelector("body").style.position = "relative";
        doc.querySelector("body").style.left = "-400px";
        
      }
      
      if(aWin && /\/ncods\/sys\_Login\.htm/.test(aWin.location.href)){
        var msg = doc.querySelector('#msg');
        var msgText = '';
        if (msg) {
          msgText = msg.innerHTML.trim();
        }
        if (doc.title !='修改密码' && msgText!= '用户名不能为空！<br>请检查输入！<br>' && msgText !='此用户已经被锁定！<br>请等待系统自动解锁<br>或与上级用户或管理员联系解锁。<br>' && msgText.indexOf('密码错误') == -1 || msgText == '') {
          var w,h,s;
          var flag=false;
          if(flag==true){
            top.opener =null;
              var newwin = top.open("main.htm","","fullscreen=1,status=0,location=yes");
              top.open('','_self');
              aWin.opener = null;
              newwin.focus();
              aWin.close();
          }else{
            var arrg = false;
            if(false){
              arrg = true;
            }else{
              // arrg = window.showModalDialog('pages/report/showinfo.jsp','','dialogHeight:490px;dialogWidth:451px;resizable:0;');
              aWin.open('http://10.1.45.109:8080/ncods/pages/report/showinfo.jsp');
            }
            // if(arrg==true){
            //   var sWidth  = screen.availWidth-10;
            //   var sHeight = screen.availHeight-60;
            //   top.opener =null;
            //   controlWindow=window.open("main.htm","","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,height="+sHeight+",width="+sWidth+",left=0,top=0");
            //   window.open('','_self');
            //   window.opener = null;
            //   controlWindow.focus();
            //   window.close();
            // }else{
            //   window.onbeforeunload = function() {};
            //   window.location="sys_Login_out.htm";
            // }
          }
          aWin.handleArrg = function(arrg){
            if(arrg==true){ 
              controlWindow=aWin.open("main.htm");
              aWin.open('','_self');
              aWin.opener = null;
              aWin.close();
            }else{
              aWin.onbeforeunload = function() {};
              aWin.location="sys_Login_out.htm";
            }
          }
        }
        
      }
      if(aWin && /\/ncods\/pages\/report\/showinfo\.jsp/.test(aWin.location.href)){
        if(aWin.acceptd){
          aWin.acceptd = function(flag){
            // window.returnValue=flag;
            if(aWin.opener.handleArrg){
              aWin.opener.handleArrg(flag);
            }
						aWin.close();
          }
        }
      }
    
      
      if(aWin.Validator) {
        aWin.Validator.ClearState = function (elem) {
          with(elem){
            if(style.color == "red"){
              style.color = "";
            }
            var wRemoveNode = []; //待删除节点
            for(var idx in parentNode.childNodes){
              if(parentNode.childNodes[idx].className == "__ErrorMessagePanel"){
                wRemoveNode.push(parentNode.childNodes[idx]);
              }
                
            }
            for(var i = 0;i<wRemoveNode.length;i++){
              parentNode.removeChild(wRemoveNode[i]);
            }
          }
        }
      }
      
      
      
    },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {

    },

    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function(doc) {
      return false;
    },

    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function(doc) {
      return false;
    }


  });

})(window, ysp);
