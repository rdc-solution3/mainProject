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
    getTreeData:function(dom,$,arr){
      if($(dom).children(".dTreeNode").length>0){
        $(dom).children(".dTreeNode").each(function(idx,d){
          if(d.nextElementSibling && d.nextElementSibling.className==="clip"){
            var obj={};
            obj.title=$(d).find(".node").text().trim();
            obj.content=[];
            ysp.customHelper.getTreeData(d.nextElementSibling,$,obj.content)
            arr.push(obj)
          }else{
            var obj={};
            obj.title=$(d).find(".node").text().trim();
            arr.push(obj)
          }
        })
      }
      return arr;
    },
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
			data.curMenu = '返回个贷首页';
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
      if (elem.querySelector('.titlebarHUI')) {
        // table card 的标题
        data.cardTitle = elem.querySelector('.titlebarHUI').textContent.trim();
      }

      data.groups = [];

      if (elem.querySelectorAll('.RinghtTrYellow').length > 0) {
        // 判断 名称 是否存在
        $(elem).find('.RinghtTrYellow:visible').each(function (i, key) {
          // if(key.parentElement.localName === "tr" && key.parentElement.style.display !== "none"){
            // 循环名称
            var group = {}; // 定义一组 key-value

            group.key = key.textContent.trim();

            if ($(key).next().find('input[type="text"]:visible').length > 0) {
              var dateIcon = $(key).next().find('input[type="text"]:visible').next('a').find('img[name="dateList"]');
              if(dateIcon.length > 0){
                // 判断 key-value 组合中，value值的类型，若为 input-date
                group.name = 'date'; // 做标记
              }else{
                // 判断 key-value 组合中，value值的类型，若为 input-text
                group.name = 'input'; // 做标记
              }
              if($(key).next().find("input[type='text']").length > 0 && $(key).next().find("input[type='button']").length > 0){
                group.newButton = $(key).next().find("input[type='button']").val();
              }
              // 3-14 新增 错误或未填信息的红框 start
              if($(key).next().find("input:visible").hasClass("input_false")){
                group.redBorder = true;
              }else{
                group.redBorder = false;
              }
              // 3-14 新增 end

              // // 判断 key-value 组合中，value值的类型，若为 input-text
              // group.name = 'input'; // 做标记
              group.value = $(key).next().find('input:visible')[0].value;
              group.disabled = $(key).next().find('input:visible')[0].disabled; // 获取对应属性 disabled

              group.readonly = $(key).next().find('input:visible')[0].readOnly; // 获取对应属性 readonly

              // $(key).next().find('input').attr('must') == 'true' || 
              // .find("img[src*='star']:visible")
              if ($(key).next().find("img[src*='star']:visible").length >0) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            } else if ($(key).next().find('select:visible').length > 0) {
              // 判断 key-value 组合中，value值的类型，若为 select
              group.name = 'select';
              group.readOnly = $(key).next().find('select:visible')[0].readOnly;
              group.disabled = $(key).next().find('select:visible')[0].disabled;
              var curOptvalue = $(key).next().find('select:visible')[0].value;
              group.optionsText = [];
              group.optionsValue = [];
              $(key).next().find('select:visible').children('option').each(function (i, opt) {
                group.optionsValue.push(opt.value);
                group.optionsText.push(opt.textContent.trim()); // if (opt.value == curOptvalue) {

                group.value = opt.textContent; // }
              });

              if($(key).next().find("select:visible").length > 0 && $(key).next().find("input[type='button']").length > 0){
                group.newButton = $(key).next().find("input[type='button']").val();
              }
              // 3-14 新增 错误或未填信息的红框 start
              if($(key).next().find("select:visible").hasClass("input_false")){
                group.redBorder = true;
              }else{
                group.redBorder = false;
              }
              // 3-14 新增 end

              group.value = $(key).next().find('select')[0].value;

              if ($(key).next().find("img[src*='star']:visible").length >0) {
                group.needed = true;
              } else {
                group.needed = false;
              }
            }

            data.groups.push(group);
          // }
        });
      }

      return data;
    },
    // validateInput 重载
    validateInput: function(input,doname,stime,label){
        _oid=eval("_"+doname+"_oid");
        if (stime != "" && stime ==" 00:00:00"){
          if(input.value != ""){
            if (FormatDateWithSp(input) == false){
              return false;
            }
          }
        }
        //如果是数值形的，去空格会出错
        if(input.type=="text")
          input.value=input.value.trim();
        var _para = "";
        if(stime != ""){
          if(input.value != ""){
            _para = "&_fieldName=" + input.name + "&_fieldValue=" + input.value + "" + stime + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
          }else{
            _para = "&_fieldName=" + input.name + "&_fieldValue=" + input.value + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
          }
        }else
          _para = "&_fieldName=" + input.name + "&_fieldValue=" + input.value + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
        var url = _path+"/bovalidate/BoDataValidateAction.do?isAjaxRequest=Y&button_method=" + _button_method + _para;
        var xmldoc = sendSyncRequest(url);
        if(xmldoc.getElementsByTagName("success").length != 0){
          var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
          if(isSuccess=="true"){
            if(xmldoc.getElementsByTagName("oid").length != 0){
              _oid = xmldoc.getElementsByTagName("oid")[0].firstChild.nodeValue;
              document.getElementById("OID").value=_oid;
              var tem_oid=eval("_"+doname+"_oid");
              if(tem_oid==""){
                eval("_"+doname+"_oid=_oid");
              }
            }
            try{
              var attributeName =  xmldoc.getElementsByTagName("attributename")[0].firstChild.nodeValue;
              if( attributeName != "null")
              {
                var id=document.getElementById(attributeName);
                //id.style.backgroundColor= "#FFFFFF" ;
                if(id.type != "checkbox")
                  id.className="input_on";
                //window.status="";
              }
            }catch(e){
              //alert(e.message);
            }

            return true;
          }
          else {
            if(xmldoc.getElementsByTagName("oid").length != 0){
              _oid = xmldoc.getElementsByTagName("oid")[0].firstChild.nodeValue;
              document.getElementById("OID").value=_oid;
              var tem_oid=eval("_"+doname+"_oid");
              if(tem_oid==""){
                eval("_"+doname+"_oid=_oid");
              }
            }

            dealAjaxException(xmldoc,_path,"~",label);
            return false;
          }
        }
      },
    
		//模拟键盘事件 ysp.
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
      // 入库原因
      if(aWin && aWin.isRuKu){
        aWin.isRuKu = function(input){
          var validateInput = aWin.validateInput;
          validateInput(input,'doCldCollAssess','','是否需要入库');
          var isRk=doc.getElementById("ISLIBRARY").value;
          var noRkReason=doc.getElementById("NOLIBRARYREASON");
          var noRkImage=doc.getElementById("noRkImage");
          if(isRk=="N"){
            // noRkReason.must="true";
            noRkReason.setAttribute("must","true");
            noRkImage.style.display="";
          }else{
            // noRkReason.must="false";
            noRkReason.setAttribute("must","false");
            noRkImage.style.display="none";
          }	
        }
      }
      
      // 新增 查询押品系统用户号，父页面定义方法
      if(aWin && aWin.doLookYpUser){
        aWin.setUserNo = function(array,win_parent){
          if (array&&!array.closed) {
            var validateInputManager = win_parent.validateInputManager;
            var strMANAGE_USER = array[0];
            var strMANAGE_USER_NAME = array[1];
            var strIDCARDNO = array[2];
            var strMANAGE_ORG_CD = array[3];
            var strROLE = array[4];

            validateInputManager("CREAT_USR",strMANAGE_USER,"CREAT_USR","doCldCollAssess","押品系统用户编号");
            validateInputManager("APPL_BCH_CODE",strIDCARDNO,"APPL_BCH_CODE","doCldCollAssess","押品系统用户所属机构");
            win_parent.location.reload();
            //document.getElementById("CREAT_USR").value = strMANAGE_USER;
            //document.getElementById("APPL_BCH_CODE").value = strIDCARDNO;
          }
        }
      }
      
      // 新增 查询押品系统用户号 页，修改由于 IE 中，getElementById 和 getElementsByName 混合
      if(aWin && aWin.name && aWin.name==="bb"){
        if(aWin.rtChg){
          aWin.rtChg = function(){
            //alert(_oid);
            debugger;
            var _oid = aWin._oid;
            var fieldArray = new Array();
            fieldArray =_oid.split("^");
            var array = new Array();
            for (i=0;i<=fieldArray.length-1;i++){
                array.push(fieldArray[i]);
            }
            // window.returnValue=array;
            var win_parent = aWin.parent.opener;
            if(win_parent.setUserNo){
              win_parent.setUserNo(array,win_parent);
            }
            aWin._state="haveSave";
            // window.close();
            aWin.parent.close();
          }
        }
      }
      
      // 征信授权书 & 声明书的保存方法 重载
      if(aWin && /(button_method=toSign)|(button_method=signPowBook)/.test(aWin.location.href) && aWin.ok){
        aWin.ok = function(){
          var data = {};
          // var $ = aWin.$;
          // var data={
          //   "nw":893,
          //   "nh":1263,
          //   "w":893,
          //   "h":1263,
          //   "size":1,
          //   "data": {
          //     "0":{
          //       "y":50,
          //       "x":166,
          //       "sw":131,
          //       "sh":110,
          //       "snw":131,
          //       "snh":110,
          //       "img":'',
          //     }
          //   }
          // };
          // data['data'][0]['img']=$('#signature #signature_d')[0].getAttribute('src');
          // 测试img参数
          var $ = aWin.$;
          if($('.draggable').length != 0)
          {
            // yn-修改获取img
            // data['nw'] = $('#contract img')[0].naturalWidth;//合同的真实宽度
            // data['nh']=$('#contract img')[0].naturalHeight;//合同的真实高度
            // data['w']=$('#contract img')[0].width;//合同宽度
            // data['h']=$('#contract img')[0].height;//合同高度
            if($('#signature #signature_d').length > 0){
              data['nw'] = $('#signature #signature_d')[0].naturalWidth;//合同的真实宽度
              data['nh']=$('#signature #signature_d')[0].naturalHeight;//合同的真实高度
              data['w']=$('#signature #signature_d')[0].width;//合同宽度
              data['h']=$('#signature #signature_d')[0].height;//合同高度
            }else{
              data['nw'] = $('#contract img')[0].naturalWidth;//合同的真实宽度
              data['nh']=$('#contract img')[0].naturalHeight;//合同的真实高度
              data['w']=$('#contract img')[0].width;//合同宽度
              data['h']=$('#contract img')[0].height;//合同高度
            }
            // end-修改获取img结束
            data['size']=$("#signature .draggable").length;
            data['data']={};
            $('#signature .draggable').each(function(i, element) {

              data['data'][i]={};
              data['data'][i]['y']=$( "#signature .draggable")[i].offsetTop,//签名Y轴
              data['data'][i]['x']=$( "#signature .draggable")[i].offsetLeft,//签名X轴
              // 修改宽高-----12-17
              // 更改sw,sh----start
              // data['data'][i]['sw']=$( "#signature .draggable img")[i].width,//签名宽度
              // data['data'][i]['sh']=$( "#signature .draggable img")[i].height,//签名高度
              data['data'][i]['sw']=150,//签名宽度
              data['data'][i]['sh']=50,//签名高度
              // 修改宽高-----end
              // 更改sw,sh----end
              data['data'][i]['snw']=$( "#signature .draggable img")[i].naturalWidth,//签名真实宽度
              data['data'][i]['snh']=$( "#signature .draggable img")[i].naturalHeight;//签名真实高度

              //var cvs = document.createElement('canvas');
              //cvs.width = data['data'][i]['snw'];
              //cvs.height = data['data'][i]['snh'];
              //var ctx = cvs.getContext("2d");
              //ctx.drawImage($("#signature .draggable img")[i],0,0,data['data'][i]['snw'],data['data'][i]['snh']);
              //data['data'][i]['img']=cvs.toDataURL("image/png");  //签名图片数据
              // data['data'][i]['img']=$(element).data('svgdata');
              // yn-修改
              // data['data'][i]['img']=$(element).find('img')[0].src;
              var onpage = element.ownerDocument.defaultView.onpage;
              // end-修改完毕
              if(!onpage(element)){
                $(element).addClass('error');
              }else{
                $(element).removeClass('error');
              }

              });

            if($( "#signature .draggable").hasClass('error')){
                alert('图章/签名位置超过边界或跨页，请修改！');
                $('#loading').addClass('none');
                return false;
            }
          }
          // 添加修改img的base64路径
          try{
            var base64 = $('#signature #signature_d')[0].getAttribute('src');
            var sharePath = "/sharefile/yunsign/image/";
            base64 = base64.replace('data:image/','');
            var baseImg = sharePath + base64;
            data['data'][0]['img']=baseImg;
          }catch(e){}
          // data['data'][0]['img'] = $('#signature #signature_d')[0].getAttribute('src');
          // console.log(data);
          return data;
        }
      }

      // 试算器
      //shan  && /.*button_method=accrualcreate.*/.test(aWin.location.href)
      if(aWin && /.*button_method=accrualcreate.*/.test(aWin.location.href) && aWin.getClick){
        var _getClick=aWin.getClick;
        aWin.getClick=function(tr,Tid,oid,doname,clsTids){
          var target;
          if(tr.target.tagName=="TD"){
            target=tr.target.parentElement;
          }else{
            target=tr.target.parentElement;
          }
          var _Tid=target.getAttribute("tid")===null?undefined:target.getAttribute("tid");
          var _oid=target.getAttribute("oid")===null?undefined:target.getAttribute("oid");
          var _doname=target.getAttribute("doname")===null?undefined:target.getAttribute("doname");
          var _clsTids=target.getAttribute("clsTids")===null?undefined:target.getAttribute("clsTids");
          _getClick(target,_Tid,_oid,_doname,_clsTids)
        }
      }
      //shan
      
      
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
              tdDemo[i].innerText=array[i+1];//杩斿洖鐨勬暟缁勭殑绗竴涓€艰瀹氭槸OID锛屽叾瀹冩槸杩欒璁板綍鐨勫瓧娈靛€�
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
            //浠ヤ笅鏄负浜嗗湪鏈夊涓釜Tid鐨勬椂鍊欙紝鍙互灏嗘湭閫夋嫨鐨凾id閫夋嫨琛屾竻绌洪€変腑琛�
            //鏋楀繝灞卞鍔�
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
      // 客户信息采集-start
      top.setImg0 = function (str) {
        ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        setTimeout(function () {
          ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelectorAll("#apptOtherList input")[0].click();
        }, 2000);
      };
      top.setImg1 = function (str) {
        ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        setTimeout(function () {
          ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelectorAll("#apptOtherList input")[1].click();
        }, 2000);
      };
      top.setImg2 = function (str) {
        ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        setTimeout(function () {
          ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelectorAll("#apptOtherList input")[2].click();
        }, 2000);
      };
      top.setImg3 = function (str) {
        ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        setTimeout(function () {
          ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelectorAll("#apptOtherList input")[3].click();
        }, 2000);
      };
      top.setImg4 = function (str) {
        ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        setTimeout(function () {
          ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelectorAll("#apptOtherList input")[4].click();
        }, 2000);
      };
      top.setImg5 = function (str) {
        ysp.appMain.getActiveWindow().frames["businessfrm"].document.getElementById('CHK_DESC').value = str;
        setTimeout(function () {
          ysp.appMain.getActiveWindow().frames["businessfrm"].document.querySelectorAll("#apptOtherList input")[5].click();
        }, 2000);
      };
      // 客户信息采集-end
      var _url=aWin.location.href;
      try{
        var sendSyncRequest = aWin.sendSyncRequest;
        var del = aWin.del;
      }
      catch(e){
        
      }
      /** select 报错  && !aWin.doc.querySelectorAll('#APPT_TYPE option')[0].getAttibute('value') **/
      //  && aWin.doc && aWin.doc.querySelector('#APPT_TYPE')
      if(aWin && aWin.frameElement && aWin.frameElement.getAttribute("name")==="businessfrm" && aWin.document && aWin.document.querySelector('#APPT_TYPE')){
        aWin.document.querySelectorAll('#APPT_TYPE option')[0].value = '';
      }
      
      // 会话超时
      if(
        (doc && doc.title && /错误页面/.test(doc.title)) || 				
        (/close\.jsp/.test(ysp.appMain.getActiveWindow().location.href))
      ){
        alert('会话已超时，点击确定跳转至首页');
        ysp.appMain.closeWindow();
      }
      if(aWin && aWin.frameElement && aWin.frameElement.getAttribute("name")==="businessfrm"){
        
        
        if(aWin.loanGrp){
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
        if(aWin.gainChkRe){
					aWin.gainChkRe = function(){
						var url = "/grxd/cldloanapply/CldApptChkAction.do?button_method=getGainChkRes";
            // var width = "700";
            // var height = "800";
            // var res = "Y";
            // res = window.showModalDialog(url, window, "dialogWidth=" + width + "px;dialogHeight=" + height + "px;status=yes;" + "help=no");
            // if ("Y" != res) {
            //     window.location.reload();
            // }
            aWin.open(url);
					}
        }
        
        if(/.*\/grxd\/cldloanapply\/CldApplGatAction\.do\?button_method=apptInfoConfirm\&_oid=/.test(aWin.location.href)){
          try{
          	ysp.appMain.hideLoading();
          }catch(e){
            
          }
        }
        
        // 签订声明书页面方法重载
        if(/button_method=toTakeRecord/.test(aWin.location.href) && aWin.toSign){
          aWin.toSign = function(){
						var formValidate = aWin.formValidate;
            var success;
            var save = aWin.save;
            if(formValidate("ApplierInfo")){
              if(save()){
                var url="/grxd/cldloanapply/CldGatherAction.do?isAjaxRequest=Y&button_method=checkCustInfo";
                var xmldoc = sendSyncRequest(url);
                if(xmldoc.getElementsByTagName("success").length != 0){
                  success = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;	
                  if(success == "true"){
                    // save();
                    var applTyp=10;
                    var url="/grxd/cldloanapply/CldGatherAction.do?button_method=toSign&applTyp="+applTyp;
                    var res="Y";
                    // res = window.showModalDialog(url,window,"dialogWidth="+ 950 +"px;dialogHeight="+950 +"px;status=yes;" +"help=no");
                    aWin.open(url);
                    // if("Y" != res){
                    //   window.location.reload();
                    // }
                    // var openerReload = function(){
                    //   if("Y" != res){
                    //     aWin.opener.location.reload();
                    //   }
                    // }
                  }else{
                    alert("保存成功!请客户到微信端补录!");
                    //var content = xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue;
                    //dealAjaxException(xmldoc,_path,"客户信息未补录！");
                    //alert(content);
                    return false;
                  }
                }
            	}else{
								alert("保存失败!");
								return false;
              }
            }
          }
        }
      }
      
      // 内评页点击‘确定’的方法重载 
      if(aWin && aWin.frameElement && aWin.nextStep && /.*button_method=getGainChkRes.*/.test(aWin.location.href)){
        aWin.nextStep = function(){
          //var res=document.getElementById("RES").value;
          //alert(res);
          aWin.close();
          aWin.location.reload();
        }
      }
      
      
      // 合同授权书页面 自定义方法--showModalDialog传值 行业树结构
      if(aWin && /.*cldloanapply\/CldGatherAction\.do\?button_method=toSign/.test(aWin.location.href)){
      	aWin.opener.location.reload();
        if(aWin.btnOnlickFuc){
          aWin.btnOnlickFuc = function(){
            var _doCustWrtInfo_oid = aWin._doCustWrtInfo_oid;
            var url ="/grxd/cldloanapply/CldGatherAction.do?button_method=openProfesnTree&_doCustWrtInfo_oid="+_doCustWrtInfo_oid;
            var array = aWin.open(url);
          }
          aWin.setCareer = function(array){ // 自定义传值方法供子页面调用
            if (array !=null){
              doc.getElementById("APPT_EMP_OCCUPATION").value=array;
            }
          }
        }
      }
      
      // 合同授权书选择行业--树结构方法重载
      if(aWin && /.*\/grxd\/cldloanapply\/CldGatherAction\.do\?button_method=openProfesnTree/.test(aWin.location.href) && aWin.queDing){
        aWin.queDing = function(){
          var validateInputManager = aWin.validateInputManager;
          var rad = doc.getElementsByName("rad");
          var code = "";
          var desc = "";
          for (var i = 0; i < rad.length; i++) {
              if (rad[i].checked == true) {
                  code = rad[i].id.substring(4);
                  desc = rad[i].getAttribute('desc');
              }
          }
          validateInputManager("APPT_EMP_OCCUPATION", code, "APPT_EMP_OCCUPATION", "doCustWrtInfo", "行业");
          //var array = new Array();
          //array.push(desc);
          //window.returnValue=array;
          if (desc !== undefined) {
            aWin.opener.setCareer(desc);
          }
          aWin.close();
        }
      }
      
      
      if(aWin && aWin.frameElement.getAttribute("data-browser")==="true"){
        
        //shan
        // if(doc && doc.titile && /错误页面/.test(doc.title)){
        //   alert("页面出现错误，请重新操作!");
        //   aWin.close();
        // }
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
        
        if(/pageName=login/.test(_url)){
          if(top.switch===undefined){
            try{
              if(ysp.appMain.isAndroid()){
              	yspCheckIn.clearCookie();
              }else if(ysp.appMain.isIOS()){
                
              }
              setTimeout(function(){
                top.switch="done";
                ysp.appMain.getActiveWindow().location.href = "http://10.1.41.169:7001/grxd";
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
          //点击云按揭贷款菜单
          
          var exit_timer = setInterval(function(){
            if(aWin && aWin.frames && aWin.frames['topFrame'] && aWin.frames['topFrame'].MyClose){
              aWin.frames['topFrame'].MyClose = function(){
                if(aWin.confirm('确定是否关闭')){
                  var url = "/grxd/ExitAction.do?isAjaxRequest=Y";
                  var xmldoc = aWin.frames['topFrame'].sendSyncRequest(url);
                  aWin.close();
                  aWin.opener.location.href = "/grxd/";
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
      if(aWin && aWin.frameElement && aWin.frameElement.getAttribute('data-browser')=="true"){
        aWin.addEventListener("DOMContentLoaded",function(){
          console.log("1111");
        })
      }
      if(aWin.frameElement.name && aWin.frameElement.name==="businessfrm"){
        doc.addEventListener('DOMContentLoaded',function(){
          try{
            ysp.appMain.showLoading();
          }catch(e){}
        })
        aWin.onload=function(){
          try{
            ysp.appMain.hideLoading();
          }catch(e){}
          // if(aWin && aWin.parent && aWin.parent.frames['left'] && /left28\.jsp/.test(aWin.parent.frames['left'].location.href) && /success/.test(aWin.location.href)){
          //   aWin.location.href="http://10.1.41.169:7001/grxd/cldloanapply/CldApplyAction.do?button_method=create";
          // }else 
          if(/bench/.test(aWin.location.href)){
            var _win=aWin.parent.frames['topFrame'];
            if(_win.checkMenu){
              if(_win.document.querySelector("#cld_loan")){
                _win.checkMenu('cld_loan','http://10.1.41.169:7001/grxd/jsp/frame/left28.jsp','/grxd/jsp/success.htm');
              }else{
                alert("暂无权限，请联系管理员。点击确定跳转回首页...");
                ysp.appMain.closeWindow();
              }            
            }
          }
        }
      }
				// if(aWin.frameElement.name && aWin.frameElement.name==="businessfrm" && /success/.test(aWin.location.href)){
				// //跳转贷款申请首页
				// console.log(aWin.location.href);
				// aWin.location.href="http://10.1.41.169:7001/grxd/cldloanapply/CldApplyAction.do?button_method=create";
				// }
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
