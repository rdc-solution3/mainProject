// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {
	var flag=true;
  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */

    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */
    
    //查看合同跨域方法 （自定义，引用在回调中【查看合同】）
    openContractPage: function(data,elem,document){
      if (data.eventType === 'toReturnClick' || data.eventType === 'imgContractClick' || data.eventType === "btnClick") {
        var id = data.customData;
        var doc = elem.ownerDocument;
        var win = doc.defaultView;
        if(data.eventType === "imgContractClick"){
          doc = elem.contentDocument;
          win = elem.contentWindow;
        }
        //elem.removeAttribute('disabled'); // elem.click();
      	var idNo = win.idNo;
        var apptSeq = win.apptSeq;
        var applSeq = win.applSeq;
        var url = "http://10.1.41.169:7001/grxd/jsp/yq.jsp?applSeq=" + idNo + apptSeq + "&idNo=" + idNo;
        if(data.eventType === "imgContractClick"){
          url = "http://10.1.41.169:7001/grxd/jsp/yq.jsp?applSeq=" + applSeq + "&idNo=" + idNo;
        }
        var xhr = new XMLHttpRequest(); //创建ajax对象

        xhr.open('get', url); //发送请求

        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var responseT = xhr.responseText; //得到请求回来的内容

            var div = document.createElement('div');
            div.id = 'innerFlagDiv';
            div.innerHTML = responseT;
            // document.body.appendChild(div);
            // var form = document.body.querySelector('form');
            var url_real = 'http://10.1.41.170:8080/mmecserver3.0/showContract.do?';
            var inputs = div.querySelectorAll('form input');
            var urlData = [];

            for (var i = 0; i < inputs.length; i++) {
              urlData.push(inputs[i].name + '=' + inputs[i].value);
            }
            url_real = url_real + urlData.join('&');
            ysp.appMain.openWindow(url_real);
          }
        };

        xhr.send(); //发送数据
      }
      // else if(data.eventType === 'imgContractClick'){
      //   var idNo = win.idNo;
      //   var applSeq = win.applSeq;
      //   var url="/grxd/jsp/yq.jsp?applSeq="+applSeq+"&idNo="+idNo;
      //   ysp.appMain.openWindow(url);
      // }

    },
    
    //ysp.customHelper.enterApplay
    enterApplay:function(_win){
      var start_timer1=setInterval(function(){
        if(_win.frames['left'] && _win.frames['left'].document && _win.frames['left'].document.querySelector('a[onclick]')){
          _win.frames['left'].document.querySelector("#menu_01").querySelector('a').click();
          clearInterval(start_timer1);
        }
      },100)
    },
    //ysp.customHelper.getMenuData
    /** 
    	* menu通用采集
     */
    getMenuData:function($,elem){
      var data = {};
      data.curMenu = '';
      data.menuLi = [];
      var links = elem.querySelectorAll('a');
      var frmAddr = elem.ownerDocument.defaultView.frameElement.nextElementSibling.businessfrm.location.href;

      // for (var idx = 0; idx < links.length; idx++) {
      //   if (links[idx].href == frmAddr) {
      //     data.curMenu = links[idx].textContent;
      //   }
      // }
			data.curMenu = '个人贷款';
      if ($(elem).children('tbody').children('tr').length > 0) {
        $(elem).children('tbody').children('tr').each(function (i, tr) {
          data.menuLi.push(tr.textContent.trim());
        });
      }
      return data;
    },
    
    /**
    *	 MainCard 通用采集
    */
    getMainCardData:function($,elem){
      var data = {};

      if (elem.querySelector('.titlebar')) {
        // table card 的标题
        data.cardTitle = elem.querySelector('.titlebar').textContent.trim();
      }

      data.groups = [];

      if (elem.querySelectorAll('.RinghtTrYellow').length > 0) {
        // 判断 名称 是否存在
        $(elem).find('.RinghtTrYellow').each(function (i, key) {
          // 循环名称
          var group = {}; // 定义一组 key-value

          group.key = key.textContent.trim();

          if ($(key).next().find('input').length > 0) {
            // 判断 key-value 组合中，value值的类型，若为 input
            group.name = 'input'; // 做标记

            group.value = $(key).next().find('input')[0].value;
            group.disabled = $(key).next().find('input')[0].disabled; // 获取对应属性 disabled

            group.readonly = $(key).next().find('input')[0].readOnly; // 获取对应属性 readonly

            if ($(key).next().find('input').attr('must') == 'true' || /star/.test($(key).next().find('input ').next('img').attr('src'))) {
              group.needed = true;
            } else {
              group.needed = false;
            }
          } else if ($(key).next().find('select').length > 0) {
            // 判断 key-value 组合中，value值的类型，若为 select
            group.name = 'select';
            var curOptvalue = $(key).next().find('select')[0].value;
            group.optionsText = [];
            group.optionsValue = [];
            $(key).next().find('select').children('option').each(function (i, opt) {
              group.optionsValue.push(opt.value);
              group.optionsText.push(opt.textContent.trim()); // if (opt.value == curOptvalue) {

              group.value = opt.textContent; // }
            });
            group.value = $(key).next().find('select')[0].value;

            if ($(key).next().find('select').attr('must') == 'true' || /star/.test($(key).next().find('select').next('img').attr('src'))) {
              group.needed = true;
            } else {
              group.needed = false;
            }
          }

          data.groups.push(group);
        });
      }

      return data;
    },
    
		//模拟键盘事件 
    fireKeyEvent:function(el,evtType,keyCode){
    	var doc = el.ownerDocument,  
      win = doc.defaultView || doc.parentWindow,  
      evtObj;  
      if(doc.createEvent){  
          if(win.KeyEvent) {  
              evtObj = doc.createEvent('KeyEvents');  
              evtObj.initKeyEvent( evtType, true, true, win, false, false, false, false, keyCode, 0 );  
          }  
          else {  
              evtObj = doc.createEvent('UIEvents');  
              Object.defineProperty(evtObj, 'keyCode', {  
                  get : function() { return this.keyCodeVal; }  
              });       
              Object.defineProperty(evtObj, 'which', {  
                  get : function() { return this.keyCodeVal; }  
              });  
              evtObj.initUIEvent( evtType, true, true, win, 1 );  
              evtObj.keyCodeVal = keyCode;  
              if (evtObj.keyCode !== keyCode) {  
                  console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");  
              }  
          }  
          el.dispatchEvent(evtObj);  
      }   
      else if(doc.createEventObject){  
          evtObj = doc.createEventObject();  
          evtObj.keyCode = keyCode;  
          el.fireEvent('on' + evtType, evtObj);  
      } 
    },
    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc){
      if(doc && doc.title && /错误页面/.test(doc.title)){
        var errinfo = "会话已超时";
        if(typeof aWin.errinfo !== "undefined"){
          errinfo = aWin.errinfo;
        }
        alert(errinfo);
        ysp.appMain.closeWindow();
      }
      if(aWin && aWin.name && aWin.name === 'laFrame'){
         try{
           ysp.appMain.hideLoading();
         }catch(e){}
      }
      // 【查看合同】跨域页 ios 处理
      if(aWin && aWin.seeContract && ysp.appMain.isIOS()){
        aWin.seeContract = function(){
          var idNo = aWin.idNo;
          var apptSeq = aWin.apptSeq;
          var width ="850";
          var height = "900";
          var url="/grxd/jsp/yq.jsp?applSeq="+idNo+apptSeq+"&idNo="+idNo;
          // ysp.appMain.openWindow(url+"&_ysp_forcepc=1");
          ysp.appMain.openWindow(url);
        }
      }
      if(aWin && aWin.name === 'topFrame'){
				if(aWin.checkMenu2){
          aWin.checkMenu2 = function(){
            var bgallid = "bench,project,projd,oricalc,applctrl,loanparm,enquiry,report,els,cust_info,pledge_coll_manage,lndoc_manage,credit_manager,devalue_manager,accumul_personal,asset_protection,cld_loan";
            var array = bgallid.split(",");

            for (var j = 0; j < array.length; j++) {
                try {
                    doc.getElementById(array[j]).background = "/grxd/N_Img/bg_blue.gif";
                    doc.getElementById(array[j]).className = "caidan";
                } catch (ex) {
                }
            }
            doc.getElementById("bench").background = "/grxd/N_Img/bg_blue_click.gif";
            doc.getElementById("bench").className = "TdTop";
            // top.setwindow('Y', '/grxd/jsp/bench.jsp');
            aWin.parent.setwindow('Y', '/grxd/jsp/bench.jsp'); // 修改 top
          }
        }
        if(aWin.checkMenu){
          aWin.checkMenu = function(bgid, str1, str2) {
            //var bgallid = "project,projd,oricalc,applctrl,loanparm,enquiry,report,contract,els";
            // top.setwindow('N');
            aWin.parent.setwindow('N'); // 更改 top
            var bgallid = "bench,project,projd,oricalc,applctrl,loanparm,enquiry,report,els,cust_info,pledge_coll_manage,lndoc_manage,credit_manager,devalue_manager,accumul_personal,asset_protection,tax_loan,jer_loan,cld_loan";
            var array = bgallid.split(",");

            for (var j = 0; j < array.length; j++) {
                try {
                    doc.getElementById(array[j]).background = "/grxd/N_Img/bg_blue.gif";
                    doc.getElementById(array[j]).className = "caidan";
                } catch (ex) {
                }
            }

            //var dom = document.getElementsByTagName(idName);
            //document.getElementById(idName).src=str1;
            //document.getElementById(idName).target="_left";
            //dom.check;
            //document.body.appendChild();
            doc.getElementById(bgid).background = "/grxd/N_Img/bg_blue_click.gif";
            doc.getElementById(bgid).className = "TdTop";
            //document.getElementById(bgid).onclick="";
            //document.getElementById(idName).target="businessfrm";
            doc.getElementById("leftForm").action = str1;
            //document.getElementById("businessForm").action=str2;
            doc.all.leftForm.submit();
          	//document.all.businessForm.submit();
          }
        }
      }
      // 手动触发 checkMenu，点击云按揭
      if(aWin.frameElement.name && aWin.frameElement.name==="businessfrm"){
        if(/bench/.test(aWin.location.href)){
          var _win=aWin.parent.frames['topFrame'];
          if(_win.checkMenu){
            if(_win.document.querySelector("#cld_loan")){
              _win.checkMenu('cld_loan','http://10.1.41.169:7001/grxd/jsp/frame/left28.jsp','/grxd/jsp/success.htm');
            }else{
              // 不存在“云按揭贷款”菜单
              alert("对不起，当前用户暂无个贷审批权限。");
              ysp.appMain.closeWindow();
            }
          }
        }
        // 手动点击收件箱
        if(/\/success\.htm/.test(aWin.location.href)){
          var msgInterval = setInterval(function(){
            if(aWin.parent && aWin.parent.frames["left"] &&
             aWin.parent.frames["left"].document.querySelector("#menu_01")
            ){
              if(aWin.parent.frames["left"].document.querySelector("#menu_01 a[href*='LaCldboxAction.do']")){
              	aWin.parent.frames["left"].document.querySelector("#menu_01 a[href*='LaCldboxAction.do']").click();
              }else{
                alert("对不起，当前用户暂无个贷审批权限");
                ysp.appMain.closeWindow();
              }
              clearInterval(msgInterval);
            }
          },1000)
        }
    	}
      // iOS 中登陆不进去，修改 top - end
      
      // 收件箱 tab 背景
      if(aWin && aWin.frameElement.name==='tabsFrame' && aWin.setbg){
      	aWin.setbg = function(td){
          var tbDemo = doc.getElementById("tabsList");
          var trDemo = tbDemo.getElementsByTagName("tr");
          var tdDemo = trDemo[0].getElementsByTagName("td");

          for(var i=0;i<tdDemo.length;i++){
            // tdDemo[i].background="/grxd/images/tabset/bg_tian.gif";
            tdDemo[i].setAttribute('background',"/grxd/images/tabset/bg_tian.gif");
          }
          var tdCurr= doc.getElementById(td);
          // tdCurr.background="/grxd/images/tabset/ding.gif";
          tdCurr.setAttribute('background',"/grxd/images/tabset/ding.gif");
          var laTitleDemo = doc.getElementById("laTitle");
          if (td=="laCldApplierTd"){
            laTitleDemo.innerText="   贷款申请 > 申请人信息";
          }
          if (td=="laCldBasicTd"){
            laTitleDemo.innerText="   贷款申请 > 贷款信息";
          }
          if (td=="laCldAssureTd"){
            laTitleDemo.innerText="   贷款申请 > 保证人信息";
          }
          if (td=="laCldMortImpawnTd"){
            laTitleDemo.innerText="   贷款申请 > 抵质押品/估价";
          }
          if (td=="laCldFile"){
            laTitleDemo.innerText="贷款申请 > 影像资料";
          }
          if (td=="laCldCreditTd"){
            laTitleDemo.innerText="   贷款申请 > 还款能力分析";
          }
          if (td=="laCldCheckTd"){
            laTitleDemo.innerText="   贷款申请 > 检查/评分";
          }
          if(td=="laCldLogTd"){
            laTitleDemo.innerText="   贷款申请 > 流程意见";
          }
        }
      }
      
      // 签署合同
      if(/.*\/grxd\/jsp\/yq\.jsp\?applSeq=.*/.test(aWin.location.href) && aWin.SubmitForm){
        aWin.SubmitForm = function(){
          var form = doc.forms[0];
          var url = form.action;
          var arg = [];
          for(var i=0;i < form.elements.length;i++){
            arg.push(form.elements[i].name+'='+form.elements[i].value);
          }
          if(ysp.appMain.isIOS()){
               aWin.appMain.openWindow(url+'?'+arg.join('&'));
          }else{
               aWin.open(url+'?'+arg.join('&'));
          }
          
          aWin.close();
        }
      }
      
      //shan
      if(aWin && aWin.update){
        var _update=aWin.update;
        aWin.update=function(url,tableId,width,height){
          aWin.tableId=tableId;
          _update(url, tableId, width, height)
        }
        aWin.updataArray=function(_array){
          var array=_array;
          var document=doc;
          var tableId=aWin.tableId;
          var _index=aWin._index;
          if (array && !array.closed) {
            var tbDemo=document.getElementById(tableId);
            var trDemo=tbDemo.getElementsByTagName("tr");
            var tdDemo=trDemo[_index].getElementsByTagName("td");
            for (var i=0;i<array.length-1;i++){
              tdDemo[i].align="center";
              tdDemo[i].innerText=array[i+1];
            }
          }else{
            return ;
          }
        }
      }
      if(aWin && aWin.add){
        var _add=aWin.add;
        aWin.add=function(url, tableId, width, height, doname, clsTids){
          aWin.tableId=tableId;
          aWin.doname=doname;
          aWin.clsTids=clsTids;
          _add(url, tableId, width, height, doname, clsTids)
        }
        aWin.setArray=function(_array){
          var array=_array;
          var document=doc;
          var tableId=aWin.tableId;
          var getClick=aWin.getClick;
          var doname=aWin.doname;
          var clsTids=aWin.clsTids;
          var editCloan=aWin.editCloan;
          if (array && !array.closed) {
            var newTR = document.getElementById(tableId).insertRow();
            newTR.onclick = getClick;
            newTR.setAttribute("OID", array[0]);
            newTR.setAttribute("Tid", tableId);
            if (doname != undefined && doname != "") {
                newTR.setAttribute("doname", doname);
            }
            if (clsTids != undefined && clsTids != "") {
                newTR.setAttribute("clsTids", clsTids);
            }
            for (i = 1; i < array.length; i++) {
                var td = newTR.insertCell();
                td.align = "center";
                td.innerText = array[i];
            }
            if (doname == "doApplAppt") {
                newTR.onclick = editCloan;
            }
          } 
          else {
            //alert("reload!");
            //document.location.reload ;
            //window.location.reload();
            return;
          }
        }
      }
      //shan
      
      var _url=aWin.location.href;
      try{
        var sendSyncRequest = aWin.sendSyncRequest;
        var del = aWin.del;
      }catch(e){}
      /** select 报错  && !aWin.doc.querySelectorAll('#APPT_TYPE option')[0].getAttibute('value') **/
      //  && aWin.doc && aWin.doc.querySelector('#APPT_TYPE')
      if(aWin && aWin.frameElement && aWin.frameElement.getAttribute("name")==="businessfrm" && aWin.document && aWin.document.querySelector('#APPT_TYPE')){
        aWin.document.querySelectorAll('#APPT_TYPE option')[0].value = '';
      }
      if(aWin && aWin.name==='laFrame'){
        if(doc && doc.title && /错误页面/.test(doc.title)){
          var errinfo = "会话已超时";
          if(typeof aWin.errinfo !== "undefined"){
            errinfo = aWin.errinfo;
          }
          alert(errinfo);
          ysp.appMain.closeWindow();
        }
      }
      
      
      if(aWin && aWin.frameElement && aWin.frameElement.getAttribute("name")==="businessfrm"){
        
        // 会话超时
        if(
          (doc && doc.title && /错误页面/.test(doc.title)) || 				
          (/close\.jsp/.test(ysp.appMain.getActiveWindow().location.href))
        ){
          var errinfo = "会话已超时";
          if(typeof aWin.errinfo !== "undefined"){
            errinfo = aWin.errinfo;
          }
          alert(errinfo);
          ysp.appMain.closeWindow();
        }
        
      	aWin.loanGrp = function () {
          //点击下一步时必须选择业务类型
          var loanGrp = doc.getElementById("APPL_LOAN_GRP").value;
          if(loanGrp == "请选择"){
            alert("请先选择业务类型！");
            return false;
          }else{
            return true;
          }
        }
      }
      
      // 流程意见审批提交 showModalDialog方法重载 定义setArr 方法
      if(aWin && aWin.name && aWin.name==="commonFrame"){
        // 流程意见提交 showModalDialog方法重载
        if(aWin.loanSave){
          aWin.setArr = function (array){
            var APPL_STATUS = aWin.APPL_STATUS;
            var strListName = aWin.strListName;
            if (array && !array.closed) {   
              alert("保存提交成功!");
              if (APPL_STATUS == "COMP") {
                  var rt_width = "500";
                  var rt_height = "300";
                  var rt_url = "/grxd/cldloanapply/CldApplySaveAction.do?button_method=report";
                  // var rt_array = window.showModalDialog(rt_url, window, "dialogWidth=" + rt_width + "px;dialogHeight=" + rt_height + "px;status=yes;" + "help=no");
                  aWin.open(rt_url);
              }
              try {
                  /*begin edit by dingyong 20161130*/
                  //top.businessfrm.closeMiddleWindow();
                  doc.getElementById("businessForm").action = "/grxd/cldloanapply/LaCldboxAction.do?button_method=create&strActName=" + strListName + "&back=T";
                  doc.all.businessForm.submit();
                  /*end edit by dingyong 20161130*/
              } catch (e) {
                  doc.hiddenForm.submit();
              }
            }
          }
          aWin.loanSave = function(str){
            var dealAjaxException = aWin.dealAjaxException;
            var APPL_STATUS = aWin.APPL_STATUS;
            var _path = aWin._path;
            var encodeToGb2312 = window.encodeToGb2312;
            var puttype="";
            var strPutType="";
            var url = "/grxd/cldloanapply/CldApplySaveAction.do?isAjaxRequest=Y&button_method="+str+"";
            var xmldoc = sendSyncRequest(url);
            if(xmldoc.getElementsByTagName("success").length != 0){
              var success = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
              if (str=="save"){
              //alert(success);
                if(success == "true"){
                  alert(xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue);
                  //document.all.loanForm.submit();//刷新获取新数据
                }else{
                  var exceptionType=xmldoc.getElementsByTagName("exceptiontype")[0].firstChild.nodeValue;
                  if(exceptionType == "SESSION_TIMEOUT"){
                    doc.getElementById("businessForm").action='/grxd/jsp/ajaxSessionTimeout.jsp';
                    doc.all.businessForm.submit();
                  }else{
                    dealAjaxException(xmldoc,_path,"保存失败");
                    return false; 
                  }
                }
              }
              if (str=="put"){
                if(success == "true"){
                    //added by Angel on 2009-03-11
                    //若合规性检查异常则弹出提示框
                    var compchk = xmldoc.getElementsByTagName("compchk")[0];
                    if(compchk != null) alert("警告：合规性检查结果为["+compchk.firstChild.nodeValue+"]!");
                    //add by duanliang 审贷会秘书岗提示
                   //modify by cxj on 20150525 审贷会审议岗目前不用，暂时屏蔽会议类型
                    /* var meettype = xmldoc.getElementsByTagName("meettype")[0].firstChild.nodeValue;
                    if((meettype=="null"||meettype=="")&& APPL_STATUS=="CMMS"){
                      alert("会议类型为空，只能退回！");
                    } */
                    //add by duanliang
                  var vecsize=xmldoc.getElementsByTagName("vecsize")[0].firstChild.nodeValue;
                  var applstatus = xmldoc.getElementsByTagName("applstatus")[0].firstChild.nodeValue;
                   //add start by TXN		20100826
                     //若额度下贷款，且额度已有抵制押品，提示是否要增加新的抵质押品	
                  if(applstatus == "REGR"){
                         var urlco="/grxd/cldloanapply/CldLaMortImpawnAction.do?isAjaxRequest=Y&button_method=chkCrColl";				
                         var xmldoc1 = sendSyncRequest(urlco);
                        if(xmldoc1.getElementsByTagName("success").length != 0){        				
                      var success1 = xmldoc1.getElementsByTagName("success")[0].firstChild.nodeValue;
                      if (success1=="true"){
                       alert( xmldoc1.getElementsByTagName("content")[0].firstChild.nodeValue);
                        }
                    } 	
                  }
                  if(applstatus=="APPR"){
                  //基准利率验证--add by zpc 2010-12-27
                      var msgUrl = "/grxd/cldloanapply/CldApplySaveAction.do?isAjaxRequest=Y&button_method=chkRate&applstatus="+ applstatus+"";
                    var msgXmldoc = sendSyncRequest(msgUrl);
                    var msgIsSuccess = msgXmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
                    if(msgIsSuccess=="true"){

                    }else if(msgIsSuccess=="false"){
                      /*if(confirm(content=msgXmldoc.getElementsByTagName("content")[0].firstChild.nodeValue)){
                        return false;
                      }*/
                      alert(msgXmldoc.getElementsByTagName("content")[0].firstChild.nodeValue);
                    }else if(msgIsSuccess=="null"){

                    }else{
                      dealAjaxException(msgXmldoc,'/grxd',"基准利率验证失败");
                    }	
                  }

                //add end by TXN 20100826
                  var oid = xmldoc.getElementsByTagName("oid")[0].firstChild.nodeValue;
                  for (var i=0;i<vecsize;i++){
                    puttype=xmldoc.getElementsByTagName("puttype")[i].firstChild.nodeValue;
                    if(ysp.appMain.isIOS()){
                      // 判断当前节点内容是否为中文并进行转码
                      var arr = puttype.split("");
                      var newArr = arr.map(function(d,i){
												if(/[\u4e00-\u9fa5]/.test(d)){
                          d = encodeToGb2312(d);
                        }
                        return d;
                      })
                      puttype = newArr.join("");
                    }
                    strPutType = strPutType+"|"+puttype;
                  }
                  var width="700";
                  var height="500";
                  var url = "/grxd/cldloanapply/CldApplySaveAction.do?puttype="+strPutType+"&applstatus="+ applstatus +"&button_method=saveput&oid="+ oid +"";
                  
                  // 对 showModalDialog 做处理 - start
                  aWin.open(url);
                }else{
                  var exceptionType=xmldoc.getElementsByTagName("exceptiontype")[0].firstChild.nodeValue;
                  if(exceptionType == "SESSION_TIMEOUT"){
                    doc.getElementById("businessForm").action='/grxd/jsp/ajaxSessionTimeout.jsp';
                    doc.all.businessForm.submit();
                  }else if(exceptionType == "SYSTEM_EXCEPTION"){
                    //dealAjaxException(xmldoc,_path,"操作失败");
                    if (xmldoc.getElementsByTagName("content").length != 0){
                      alert(xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue);
                    }else{
                      alert("系统错误,请联系管理员！");
                    }
                    return false; 
                  }
                  else{
                    dealAjaxException(xmldoc,_path,"提交失败");
                    return false; 
                  }
                }
              }

              if (str =="TempSave"){//临时保存
                if(success == "true"){
                  alert(xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue);
                  //document.all.loanForm.submit();//刷新获取新数据
                }else{
                  var exceptionType=xmldoc.getElementsByTagName("exceptiontype")[0].firstChild.nodeValue;
                  if(exceptionType == "SESSION_TIMEOUT"){
                    doc.getElementById("businessForm").action='/grxd/jsp/ajaxSessionTimeout.jsp';
                    doc.all.businessForm.submit();
                  }else{
                    dealAjaxException(xmldoc,_path,"临时保存失败");
                    return false; 
                  }
                }
              }

              if (str=="apodConfirm"){
                if(success == "true"){
                  if (xmldoc.getElementsByTagName("success").length != 0) {
                    if(xmldoc.getElementsByTagName("content")!=null && xmldoc.getElementsByTagName("content").length !=0 && xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue!="null"){
                      alert(xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue);
                      doc.hiddenForm.submit();
                    }else{
                      alert("保存提交成功!");
                      try{

                        top.businessfrm.closeMiddleWindow();
                      }catch(e){
                        doc.hiddenForm.submit();
                      }
                    }

                  }
                }else{
                  var exceptionType=xmldoc.getElementsByTagName("exceptiontype")[0].firstChild.nodeValue;
                  if(exceptionType == "SESSION_TIMEOUT"){
                    doc.getElementById("businessForm").action='/grxd/jsp/ajaxSessionTimeout.jsp';
                    doc.all.businessForm.submit();
                  }else if(exceptionType == "SYSTEM_EXCEPTION"){
                    if (xmldoc.getElementsByTagName("content").length != 0){
                      alert(xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue);
                    }else{
                      alert("系统错误,请联系管理员！");
                    }
                    return false; 
                  }
                  else{
                    dealAjaxException(xmldoc,_path,"提交失败");
                    return false; 
                  }
                }
              }
              if (str=="hoa3Confirm"){
                if(success == "true"){
                  if (xmldoc.getElementsByTagName("success").length != 0) {
                    if(xmldoc.getElementsByTagName("content")!=null && xmldoc.getElementsByTagName("content").length !=0 && xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue!="null"){
                      alert(xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue);
                      doc.hiddenForm.submit();
                    }else{
                      alert("保存提交成功!");
                                  try{

                        top.businessfrm.closeMiddleWindow();
                      }catch(e){
                      doc.hiddenForm.submit();
                      }
                    }
                  }
                }else{
                  var exceptionType=xmldoc.getElementsByTagName("exceptiontype")[0].firstChild.nodeValue;
                  if(exceptionType == "SESSION_TIMEOUT"){
                    doc.getElementById("businessForm").action='/grxd/jsp/ajaxSessionTimeout.jsp';
                    doc.all.businessForm.submit();
                  }else if(exceptionType == "SYSTEM_EXCEPTION"){
                    if (xmldoc.getElementsByTagName("content").length != 0){
                      alert(xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue);
                    }else{
                      alert("系统错误,请联系管理员！");
                    }
                    return false; 
                  }
                  else{
                    dealAjaxException(xmldoc,_path,"提交失败");
                    return false; 
                  }
                }
              }
            }else{
              dealAjaxException(xmldoc,_path,"操作失败");
              return false; 
            }
          }
        }
      }
      
      // 流程意见审批 调用 setArr 方法 /grxd/cldloanapply/CldApplySaveAction.do?puttype=
      if(aWin && aWin.frameElement && /\/grxd\/cldloanapply\/CldApplySaveAction\.do\?puttype=/.test(aWin.location.href)){
        if(aWin.loanPut){
          aWin.loanPut = function(){
            var dealAjaxException = aWin.dealAjaxException;
            var _path = aWin._path;
            var applstatus = doc.getElementById("applstatus").value;//申请状态
            var apptypeCode = doc.getElementById("apptypeCode").value;	//提交动作代码
            var apptypeSignCode = doc.getElementById("apptypeSignCode").value;//下一个动作目标代码
            var url="/grxd/cldloanapply/CldApplySaveAction.do?isAjaxRequest=Y&button_method=confirm&applstatus="+ applstatus +"&apptypeCode="+ apptypeCode +"&apptypeSignCode="+apptypeSignCode+"";
            var xmldoc = sendSyncRequest(url);
            if(xmldoc.getElementsByTagName("success").length != 0){
              var success = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
              if (success=="true"){
                var array = new Array();
                array[0]="Y";
                // window.returnValue=array;
                // aWin.opener.setArr(array);
                if(aWin.opener.setArr){
                  aWin.opener.setArr(array)
                };
               
                //add start by TXN		20100620
                //贷款到期日等于额度到期日，提示今天放款
                if (apptypeSignCode =="COMP"){								
                  var url="/grxd/cldloanapply/CldApplySaveAction.do?isAjaxRequest=Y&button_method=chkMaturityDate";				
                        var xmldoc = sendSyncRequest(url);
                      if(xmldoc.getElementsByTagName("success").length != 0){        				
                      var success = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
                      if (success=="true"){
                      alert( xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue);
                      }
                    }
                   }
                //add end by TXN 20100620
                if(apptypeSignCode =="COMP" && applstatus=="APPR"){
                  //提示生成短信是否成功-add by zpc 2010-12-25
                  //暂时不放开，胡梦云要求--2011-04-19--
                  /*
                    var msgUrl = "/grxd/cldloanapply/CldApplySaveAction.do?isAjaxRequest=Y&button_method=sendMsg&applstatus="+ applstatus +"&apptypeCode="+ apptypeCode+"&apptypeSignCode="+apptypeSignCode+"";
                  var msgXmldoc = sendSyncRequest(msgUrl);
                  var msgIsSuccess = msgXmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
                  if(msgIsSuccess=="true"){
                    alert("提醒客户交文档资料、签署合同短信生成成功");
                  }else if(msgIsSuccess=="null"){

                  }else{
                    dealAjaxException(msgXmldoc,'/grxd',"生成短信失败");
                  }	
                  */
                }

                aWin.close();
              }else{
                dealAjaxException(xmldoc,_path,"保存提交失败");
              }
            }else{
              dealAjaxException(xmldoc,_path,"保存提交失败");
            }

          }
        }
      }
        
      // 内评页点击‘确定’的方法重载  && /.*button_method=getGainChkRes.*/.test(aWin.location.href)
      if(aWin && aWin.frameElement && /.*button_method=getGainChkRes.*/.test(aWin.location.href) && aWin.nextStep){
        aWin.nextStep = function(){
          //var res=document.getElementById("RES").value;
          //alert(res);
          aWin.opener.location.reload();
          aWin.close();
        }
      }
      
      if(aWin && aWin.frameElement.getAttribute("data-browser")==="true"){
        if(aWin.save){
          if(/.*\/grxd\/account\/LoanAccountAction\.do\?button_method=addDoApplCalcDtl.*/.test(aWin.location.href)){
            aWin.save=function(str){
              var array = new Array();
              var fieldArray = new Array();
              fieldArray =str.split(",");
              var field="";
              for (var i=0;i<=fieldArray.length-1;i++){
                field=doc.getElementById(fieldArray[i]);
                if(field.type=="select-one"){
                  if(field.options[field.selectedIndex].value == "")
                    array.push("");
                  else
                    array.push(field.options[field.selectedIndex].text);
                }else{
                  array.push(field.value);
                }
              }
              aWin.opener.setArray(array)
              aWin._state="haveSave";
              aWin.close();
            }
          }else if(/.*\/grxd\/account\/LoanAccountAction\.do\?button_method=updateDoApplCalcDtl.*/.test(aWin.location.href)){
            aWin.save=function(str){
              var array = new Array();
              var fieldArray = new Array();
              fieldArray =str.split(",");
              var field="";
              for (var i=0;i<=fieldArray.length-1;i++){
                field=doc.getElementById(fieldArray[i]);
                if(field.type=="select-one"){
                  if(field.options[field.selectedIndex].value == "")
                    array.push("");
                  else
                    array.push(field.options[field.selectedIndex].text);
                }else{
                  array.push(field.value);
                }
              }
              aWin.opener.updataArray(array)
              aWin._state="haveSave";
              aWin.close();
            }
          }
        }
        //shan
        
        
        
        if(/(pageName=login)|(login\.jsp)/.test(_url)){
          // 清除 cookie
          if(top.switch===undefined){
            try{
              // yspCheckIn.clearCookie();
              
              var date = new Date();
              date.setTime(date.getTime() - 1);
              var cval = 'JSESSIONID';
              if(cval != null){
                doc.cookie = 'JSESSIONID' + '=' + cval + ';expires=' + date.toGMTString() + ';path=/';
              }
              
              setTimeout(function(){
                top.switch="done";
                ysp.appMain.getActiveWindow().location.href = "http://10.1.41.169:7001/grxd/SsoLServlet";
								// yspUser.getPassword("http://10.1.41.169:7001/grxd/DirectForwardAction.do?pageName=login")
								// yspUser.getUsername("http://10.1.41.169:7001/grxd/DirectForwardAction.do?pageName=login")
              },100)
              // alert()
            }catch(e){
          	}
          }
          
          var loginTarget=setInterval(function(){
            if(doc.querySelector("#loginForm") && doc.querySelector("#login_uid") && doc.querySelector("#login_upwd") && doc.querySelector("#submitBtn")){
              doc.querySelector("#loginForm").setAttribute("target","_self");
              if(top.switch==="done"){
                try{
                  var username=yspUser.getUsername("http://10.1.41.169:7001/grxd/DirectForwardAction.do?pageName=login");
                  var password=yspUser.getPassword("http://10.1.41.169:7001/grxd/DirectForwardAction.do?pageName=login");
                  if(username!=="" && password!==""){
                    doc.querySelector("#login_uid").value=username;
                    doc.querySelector("#login_uid").dispatchEvent(new Event("change"));
                  	doc.querySelector("#login_upwd").value=password;
                    doc.querySelector("#login_upwd").dispatchEvent(new Event("change"));
                    top.document.querySelector("#submit").click();
                  }else{
                    console.log("获取用户名密码有误!")
                  }
                }catch(err){}
              }
              clearInterval(loginTarget);
            }
          },200)
        }else if(/LoginAction\.do/.test(aWin.location.href)){
          
          var exit_timer = setInterval(function(){
            if(aWin && aWin.frames && aWin.frames['topFrame'] && aWin.frames['topFrame'].MyClose){
              aWin.frames['topFrame'].MyClose = function(){
                if(aWin.confirm('确定是否关闭')){
                  var url = "/grxd/ExitAction.do?isAjaxRequest=Y";
                  var xmldoc = aWin.frames['topFrame'].sendSyncRequest(url);
                  aWin.close();
                  aWin.opener.location.href = "/grxd/SsoLServlet";
                }else{
                  return false;
                }
              }
              aWin.frames['topFrame'].frameElement.style.width="1200px";
              aWin.frames['topFrame'].frameElement.style.height="600px";
              clearInterval(exit_timer);
            }
          })
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
