// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {
  function Base64() {  
      // private property  
      _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
      // public method for encoding  
      this.encode = function (input) {  
          var output = "";  
          var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
          var i = 0;  
          input = _utf8_encode(input);  
          while (i < input.length) {  
              chr1 = input.charCodeAt(i++);  
              chr2 = input.charCodeAt(i++);  
              chr3 = input.charCodeAt(i++);  
              enc1 = chr1 >> 2;  
              enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
              enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
              enc4 = chr3 & 63;  
              if (isNaN(chr2)) {  
                  enc3 = enc4 = 64;  
              } else if (isNaN(chr3)) {  
                  enc4 = 64;  
              }  
              output = output +  
              _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
              _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
          }  
          return output;  
      }
      // public method for decoding  
      this.decode = function (input) {  
          var output = "";  
          var chr1, chr2, chr3;  
          var enc1, enc2, enc3, enc4;  
          var i = 0;  
          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
          while (i < input.length) {  
              enc1 = _keyStr.indexOf(input.charAt(i++));  
              enc2 = _keyStr.indexOf(input.charAt(i++));  
              enc3 = _keyStr.indexOf(input.charAt(i++));  
              enc4 = _keyStr.indexOf(input.charAt(i++));  
              chr1 = (enc1 << 2) | (enc2 >> 4);  
              chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
              chr3 = ((enc3 & 3) << 6) | enc4;  
              output = output + String.fromCharCode(chr1);  
              if (enc3 != 64) {  
                  output = output + String.fromCharCode(chr2);  
              }  
              if (enc4 != 64) {  
                  output = output + String.fromCharCode(chr3);  
              }  
          }  
          output = _utf8_decode(output);  
          return output;  
      }
      // private method for UTF-8 encoding  
      _utf8_encode = function (string) {  
          string = string.replace(/\r\n/g,"\n");  
          var utftext = "";  
          for (var n = 0; n < string.length; n++) {  
              var c = string.charCodeAt(n);  
              if (c < 128) {  
                  utftext += String.fromCharCode(c);  
              } else if((c > 127) && (c < 2048)) {  
                  utftext += String.fromCharCode((c >> 6) | 192);  
                  utftext += String.fromCharCode((c & 63) | 128);  
              } else {  
                  utftext += String.fromCharCode((c >> 12) | 224);  
                  utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                  utftext += String.fromCharCode((c & 63) | 128);  
              }  

          }  
          return utftext;  
      }
      // private method for UTF-8 decoding  
      _utf8_decode = function (utftext) {  
          var string = "";  
          var i = 0;  
          var c = c1 = c2 = 0;  
          while ( i < utftext.length ) {  
              c = utftext.charCodeAt(i);  
              if (c < 128) {  
                  string += String.fromCharCode(c);  
                  i++;  
              } else if((c > 191) && (c < 224)) {  
                  c2 = utftext.charCodeAt(i+1);  
                  string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                  i += 2;  
              } else {  
                  c2 = utftext.charCodeAt(i+1);  
                  c3 = utftext.charCodeAt(i+2);  
                  string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                  i += 3;  
              }  
          }  
          return string;  
      }  
  }  
  var utils = ysp.utils;
  var firstLoadUrl="https://jc.z.inja.com/gjc/tabs.jsp?tabs=%E9%A1%B9%E7%9B%AE%E9%9B%86%E9%87%87,/gjc/buyer/pl/plan/v.do?_m=mat/list12$objtype=2$plantype=1$purchasemode=2,refreshOnClick=true;%E5%AD%90%E5%85%AC%E5%8F%B8%E9%9B%86%E9%87%87,/gjc/buyer/pl/plan/v.do?_m=mat/list22$objtype=2$plantype=2$purchasemode=2,refreshOnClick=true;%E7%89%A9%E6%B5%81%E5%85%AC%E5%8F%B8%E9%9B%86%E9%87%87,/gjc/buyer/pl/plan/v.do?_m=mat/list32$objtype=2$plantype=3$purchasemode=2,refreshOnClick=true;%E5%9B%A4%E8%B4%A7%E9%87%87%E8%B4%AD,/gjc/buyer/pl/plan/v.do?_m=mat/list5$objtype=2$purchasemode=5,refreshOnClick=true;%E9%A1%B9%E7%9B%AE%E8%87%AA%E9%87%87,/gjc/buyer/pl/plan/v.do?_m=mat/list11$objtype=2$plantype=1$purchasemode=1,refreshOnClick=true;%E5%AD%90%E5%85%AC%E5%8F%B8%E8%87%AA%E9%87%87,/gjc/buyer/pl/plan/v.do?_m=mat/list21$objtype=2$plantype=2$purchasemode=1,refreshOnClick=true;%E6%8B%8D%E5%8D%96%E8%AE%A1%E5%88%92,/gjc/buyer/pl/plan/v.do?_m=mat/list4$objtype=2$purchasemode=4,refreshOnClick=true;%E8%81%94%E9%87%87%E8%AE%A1%E5%88%92,/gjc/buyer/pl/plan/v.do?_m=mat/list3$objtype=2$purchasemode=3,refreshOnClick=true;%E6%88%91%E7%9A%84%E8%81%94%E9%87%87,/gjc/buyer/pl/plan/v.do?_m=mat/list_mylc$objtype=2$purchasemode=3,refreshOnClick=true";
  var loginSwitch=false;
  var count=true;
  var pagelock = true;
  var top=
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
    
    onTargetLoad: function(aWin, doc){
      // if(aWin && aWin.name=="mainframe" && count){
      //   aWin.location.href=firstLoadUrl;
      //   count=false;
      // }
      var url = aWin.location.href;
      
      // if(aWin.location){
      //   if(/^https:\/\/ec\.z\.inja\.com\/index\.do.*from=YSP/.test(aWin.location.href)){
      //     var login=setInterval(function(){
      //       if(doc && doc.querySelector("#account") && doc.querySelector("#password") && doc.querySelector("#login")){
      //         var username=doc.querySelector("#account");
      //         var password=doc.querySelector("#password");
      //         var btn=doc.querySelector("#login");
      //         try{
      //           	if(ysp.appMain.isIOS()){
      //               if(top && top.yspUser){
      //                 if(top.yspUser.getUsername('local')!=""){
      //                   if(loginSwitch){
      //                     //判断权限
      //                     if(Number(top.yspUser.getDepartmentid('local'))==1){
      //                       doc.getElementById("errormsg").innerText = "此账号无权限！";
      //                       loginSwitch=false;
      //                       alert("此账号无权限！");
      //                       ysp.appMain.closeWindow();
      //                     }

      //                     username.value=top.yspUser.getUsername('local');
      //                     username.dispatchEvent(new Event("change"));
      //                     password.value=top.yspUser.getPassword('local');
      //                     password.dispatchEvent(new Event("change"));
      //                     loginSwitch=false;
      //         						clearInterval(login);
      //                     setTimeout(function(){
      //                       btn.click();
      //                     },200)
      //                   }
      //                 }
      //               }
      //             }else if(ysp.appMain.isAndroid()){
      //               if(yspCheckIn.getUserName()!=""){
      //                 if(loginSwitch){
      //                   //判断权限
      //                 if (Number(yspCheckIn.getDepartmentId()) == 1) {
      //                     doc.getElementById("errormsg").innerText = "此账号无权限！";
      //                     loginSwitch=false;
      //                     alert("此账号无权限！");
      //                     ysp.appMain.closeWindow();
      //                   }
                        
      //                   username.value=yspCheckIn.getUserName();
      //                   username.dispatchEvent(new Event("change"));
      //                   password.value=yspCheckIn.getPassword();
      //                   password.dispatchEvent(new Event("change"));
      //                   loginSwitch=false;
      //         					clearInterval(login);
      //                   setTimeout(function(){
      //                     btn.click();
      //                   },200)
      //                 }
      //               }
      //             }
      //         }catch(err){
      //           console.log("调用客户端方法出错了")
      //         }
      //       }
      //     },100)
      //   }
      // }
      // if(url.indexOf("www.inja.com/index.do")>-1){
      //   function ysp_doLogin(){
      //     if(doc.getElementById("account")&&doc.getElementById("password")&&doc.getElementById("login")){
      //       var user = yspUser.getUsername("https://www.inja.com/index.do?returnURL=http%3A%2F%2Fjc.z.inja.com%2Fgjc%2Fbase%2Fmain.do%3FloginType%3DYSP&from=YSP");
      //       var psw = yspUser.getPassword("https://www.inja.com/index.do?returnURL=http%3A%2F%2Fjc.z.inja.com%2Fgjc%2Fbase%2Fmain.do%3FloginType%3DYSP&from=YSP");
      //       doc.getElementById("account").value = user;
      //       doc.getElementById("password").value = psw;
      //   		doc.getElementById("login").click();
      //     }else{
      //       setTimeout(ysp_doLogin(),100);
      //     }
      //   }
      //   ysp_doLogin();
      // }
      if(url.indexOf("https://ly.z.inja.com/gjc/core/simple/v.do?_m=/gjc/oms/buyer/plan/form")>-1){
        if(ysp.appMain.isIOS){
          aWin.showContract = function() {
            if(!aWin.contractObj || !aWin.contractObj.salecontractid) {
              aWin.mini.alert("请先选择合同");
              return;
            }
            // 查询合同信息，判断进入不同的合同展示页面
            aWin.jQuery.ajax({
              url: 'https://ly.z.inja.com/gjc/core/simple/find.do?po=/gjc/db/po/ct_contract.po&bvo.p.contractid='+ aWin.contractObj.salecontractid,
              type: 'post',
              dataType: 'json',
              success: function (result) {
                var _m = "edit_sell2";  // 集采： 普通的销售合同，编辑页面是edit_sell2
                if(result.purchasemode == '2') {
                  var rowtenderid = result.tenderid;
                      rowtenderid = rowtenderid.split(",");
                      if(rowtenderid.length > 1) {
                        _m = "edit1";  // 分采统签销售合同
                      }
                } else if(result.purchasemode == '5') {
                  // 囤货销售合同
                  _m = "edit_th";
                }

                var target_url = 'https://jc.z.inja.com/gjc/buyer/ct/contract/v.do?_m=mat/'+ _m 
                          +'&readonly=true&contractid=' + aWin.contractObj.salecontractid 
                          + '&_empid=' + result.employeeid + '&status=' + result.state 
                          + '&purchasemode=' + result.purchasemode + '&objtype=' + result.objtype 
                          + '&type='+ result.type;
                console.log(target_url);
                ysp.appMain.openWindow(target_url);
                // mini.open({
                //       title: '合同查看',
                //       showMaxButton: true,
                //       width: 1000,
                //       height: 550,
                //       url: 'https://jc.z.inja.com/gjc/buyer/ct/contract/v.do?_m=mat/'+ _m 
                //           +'&readonly=true&contractid=' + contractObj.salecontractid 
                //           + '&_empid=' + result.employeeid + '&status=' + result.state 
                //           + '&purchasemode=' + result.purchasemode + '&objtype=' + result.objtype 
                //           + '&type='+ result.type
                //   }).max();
              }
            });
          }
        }
        
      }
      if(url.indexOf("https://wl.inja.com/ycihwl/SingleCarPage.jsp")>-1){
        aWin.carback = function(startaddr,endaddr, arrPois) {
          // 首先清除地图上所有覆盖物
          aWin.map.clearOverlays();
          aWin.map.addOverlay(new aWin.BMap.Polyline(arrPois, {
            strokeColor : '#008B00'
          }));
          aWin.map.setViewport(arrPois);

          var startPoint = arrPois[0];
          var endPoint = arrPois[arrPois.length - 1];
          
					aWin.arrPois = arrPois;
					aWin.startPoint = startPoint;
          aWin.endPoint = endPoint;
          
          aWin.markerStart=new aWin.BMap.Marker(startPoint,{
             icon  : new aWin.BMap.Icon("dest_markers.png", new aWin.BMap.Size(27,27),{anchor : new aWin.BMap.Size(27, 13)})
          });

          aWin.markerEnd=new aWin.BMap.Marker(endPoint,{
              icon  : new aWin.BMap.Icon("car.png", new aWin.BMap.Size(25,25),{anchor : new aWin.BMap.Size(12.5,12.5)})
           });

          aWin.map.addOverlay(aWin.markerStart);
          aWin.map.addOverlay(aWin.markerEnd); 
          aWin.drawcarlabel(aWin.markerEnd,aWin.motono,endPoint);
          //lushu.start();
          //lushu.showInfoWindow();
        }
      }
      console.log(url)
      if(url.indexOf("https://jc.z.inja.com/gjc/base/main.do")>-1||url.indexOf("/gjc/base/wf/approval/view.do")>-1||url.indexOf("/gjc/base/wf/gwf.jsp")>-1||url.indexOf("https://ly.z.inja.com/gjc/oms/buyer/")>-1){
        var BOX = doc.createElement("div");
        BOX.className="user-simple-box";
        $(BOX).css({position:"absolute",zIndex:9999,top:10,left:"45%",padding:"5px",width:"200px",height:"50px",background:"#fff"});
        if(!doc.body){return;}
        doc.body.insertBefore(BOX,doc.body.firstChild);

        //BOX = doc.querySelector(".user-simple-box");
        var headers = null;
        var ui_window = null;
        var iframe = null;
        var title = null;
        var callback = function(){
            ui_window = doc.getElementsByClassName("mini-window");
          	iframe = ui_window.length>0?ui_window[ui_window.length-1].querySelector("iframe")?ui_window[ui_window.length-1].querySelector("iframe").contentWindow:null:null;
            title = ui_window.length>0?ui_window[ui_window.length-1].querySelector(".mini-panel-title"):null;
            if(title){
              var text = title.textContent||"详情";
              if(text&&text=="计划新增"||text&&text=="计划查看"||text&&text=="招标任务"||text&&text=="转点运输计划"){
                text="计划编辑";
              }
              if(text&&text=="可转点运输单"){
                text="选择销售合同";
              }
              if(text&&text=="退回"){
                text="终止计划";
              }
              if(text&&text=="选择模板(双击选取)"||text&&text=="选择组织机构"){
                text="选择人员(双击选取)";
              }
              if(iframe&&iframe.document.querySelector("#checkflow")){
                text = "审批流程"
              }
              var reg=/[^\u4E00-\u9FA5]/g;

              var WW=text.replace(/[^a-z]+/ig,'');
              text=text.replace(reg,'');
              var b = new Base64();  
              var str = b.encode(text);
              str=WW+str.replace(/[+]/g,'').replace(/[/]/g,'');
              title.className = "mini-panel-title C"+str;

              var target_div = BOX.querySelector(".C"+str);
              if(!target_div){
                $(BOX).html("");

                var div = doc.createElement("div");
                div.className="user-simple-ctrl C"+str;
                div.innerHTML=str;
                $(BOX).append(div);
              }
              setTimeout(callback,200);
            }else{
              if(url.indexOf("/gjc/base/wf/approval/view.do")>-1){
                var _url = aWin.location.href;
                var index_div = doc.querySelector(".user-approve-page");
                if(!index_div){
                  $(BOX).html("");

                  var div = doc.createElement("div");
                  div.className="user-simple-ctrl user-approve-page";
                  div.innerHTML="user-approve-page";
                  $(BOX).append(div);
                }
              }else if(url.indexOf("/gjc/oms/buyer/")>-1){
                var _url = aWin.location.href;
                var index_div = doc.querySelector(".user-lvyue-page");
                if(!index_div){
                  $(BOX).html("");

                  var div = doc.createElement("div");
                  div.className="user-simple-ctrl user-lvyue-page";
                  div.innerHTML="user-lvyue-page";
                  $(BOX).append(div);
                }
              }
              else{
                var _url = aWin.location.href;
                var index_div = doc.querySelector(".user-index-page");
                if(!index_div){
                  $(BOX).html("");

                  var div = doc.createElement("div");
                  div.className="user-simple-ctrl user-index-page";
                  div.innerHTML="user-index-page";
                  $(BOX).append(div);
                }
              }
              setTimeout(callback,200);
              
            }

        };
        callback();
      }
    },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {
//       doc.addEventListener('DOMContentLoaded', function(){
//         var format = aWin.formatDate;
//         if (!format) {
//           return;
//         }

//         var str = format.toString().replace(/\/-\/\s*,/, '/-/g,');
//         aWin.eval(str);
//       });
      
      var url = aWin.location.href;
      if(url=="https://www.inja.com/#caigoushang"){
        // if(ysp.appMain.isIOS()){
        //   ysp.appMain.openWindow("https://ec.z.inja.com/index.do?returnURL=https%3A%2F%2Fjc.z.inja.com%2Fgjc%2Fbase%2Fmain.do%3FloginType%3DYSP%26sys%3Dcaigoushang&from=YSP");
        // }else if(ysp.appMain.isAndroid()){
        //   ysp.appMain.getActiveWindow().location.href="https://ec.z.inja.com/index.do?returnURL=https%3A%2F%2Fjc.z.inja.com%2Fgjc%2Fbase%2Fmain.do%3FloginType%3DYSP%26sys%3Dcaigoushang&from=YSP";
        // }
        // ysp.appMain.getActiveWindow().location.href="https://ec.z.inja.com/index.do?returnURL=https%3A%2F%2Fjc.z.inja.com%2Fgjc%2Fbase%2Fmain.do%3FloginType%3DYSP%26sys%3Dcaigoushang&from=YSP";
        // ysp.appMain.openWindow("https://ec.z.inja.com/index.do?returnURL=https%3A%2F%2Fjc.z.inja.com%2Fgjc%2Fbase%2Fmain.do%3FloginType%3DYSP%26sys%3Dcaigoushang&from=YSP");
      }
      if(url=="https://www.inja.com/#gongyingshang"){
        // ysp.appMain.getActiveWindow().location.href="https://ec.z.inja.com/index.do?returnURL=https%3A%2F%2Fjc.t.inja.com%2Fgjc%2Fseller%2Fmain.do%3FloginType%3DYSP&sys=gongyingshang&from=YSP";
        ysp.appMain.openWindow("https://ec.z.inja.com/index.do?returnURL=https%3A%2F%2Fjc.t.inja.com%2Fgjc%2Fseller%2Fmain.do%3FloginType%3DYSP&sys=gongyingshang&from=YSP");
      }
      // if(url.indexOf("_ysp_realurl=http%3A%2F%ec.z")>-1 && /caigoushang/.test(url) && ysp.appMain.isIOS()){
      //   // var turl = decodeURIComponent(url).split("_ysp_realurl=")[1].split("&_ysp_baseTag")[0];
      //   // var ourl = decodeURIComponent(turl);
      //   // ysp.appMain.openWindow(ourl);
      //   aWin.location.href = "about:blank";
      //   var _ourl="https://ec.z.inja.com/index.do?returnURL=https%3A%2F%2Fjc.z.inja.com%2Fgjc%2Fbase%2Fmain.do%3FloginType%3DYSP%26sys%3Dcaigoushang&from=YSP";
      //   ysp.appMain.openWindow(_ourl);
      //   //https://jc.z.inja.com/gjc/base/main.do?loginType=YSP&sys=caigoushang
      // }
      if(url.indexOf("https://ec.z.inja.com/?_ysp_realurl=")>-1&&ysp.appMain.isIOS()){
        // aWin.location.href = "about:blank";
        // +"&_ysp_target=self"
        if(aWin==ysp.appMain.getActiveWindow()){
          setTimeout(function(){
            ysp.appMain.openWindow(decodeURIComponent(url.split("_ysp_realurl=")[1].split("&_ysp_baseTag")[0])+"&_ysp_target=self");
          },1000)
          // debugger;
          // if(loginSwitch){
          //   loginSwitch=!loginSwitch;
          //   ysp.appMain.openWindow(decodeURIComponent(url.split("_ysp_realurl=")[1].split("&_ysp_baseTag")[0])+"&_ysp_target=self");
          // }else{
          //   loginSwitch=!loginSwitch;
          // }
        }
        // ysp.appMain.openWindow(decodeURIComponent(url.split("_ysp_realurl=")[1].split("&_ysp_baseTag")[0]));
      }
      
      
    },
    
    fireKeyEvent: function(el, evtType, keyCode){
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
      return false;
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
