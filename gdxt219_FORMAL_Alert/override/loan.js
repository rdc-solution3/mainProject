var url_upfile = 'http://10.1.24.237/';
var _un_reset = ['LOAN_ADMIN'];
/* author	shaozhigang
 * date 	
 * des		出错跳转错误界面
 */
function forwardErrorPage(str){

	if (navigator.userAgent.indexOf("MSIE") != -1) {
		window.location = str + "/jsp/systemError.jsp";
	}
}

/* author	shaozhigang
 * date 	
 * des		超时跳转界面
 */
//function forwardSessionTimeoutPage(str){
//	
//	if (navigator.userAgent.indexOf("MSIE") != -1) {
//			window.location = str + "/jsp/ajaxSessionTimeout.jsp";			
//		}		
//}

/* author	DouFuDong
 * date 	
 * des		超时跳转界面
 */

function forwardSessionTimeoutPage(str)
{
	if (top.location !== self.location) {
		alert("SESSION超时：将关闭窗口");
		try{ysp.appMain.closeWindow();}catch(e){console.log(e);}
		top.close();
	}else{
		alert("SESSION超时：将关闭窗口");
		try{ysp.appMain.closeWindow();}catch(e){console.log(e);}
		window.close();
	}
}

/* author	Sinker
 * date 	
 * des		close windows
 */
function windowclose(){
	window.close();
}

function writeWorkingStatus(win,path)
{
	try{
		//var pleaseWaitMsg = "请稍候...";
		var pleaseWaitMsg = "\u8bf7\u7a0d\u5019...";
		var pleaseWaitImg = ""+path+"/images/appInstall_animated.gif";
		var pleaseWaitID = "progressWait_1";
		win.document.write("<div id=\""+pleaseWaitID+"\" style=\"position:absolute;top:200;left:300;width=240;text-align:center;border: 1px black solid;padding:3px 3px 3px 3px;background-color:#FFFFFF;font-family: sans-serif;font-size:24px;font-weight:bold\"><NOBR><img src='"+pleaseWaitImg+"' width='40' height='40' align='texttop'>" + pleaseWaitMsg + "</NOBR></div><SCRIPT>window.history.go(1);</"+"SCRIPT>");
	}
	catch(ex){}
}
/* author	shaozhigang
 * date 	
 * des		普通格式去除空格
 */
function null2space(str){
	if(str == 'null'){
		return "";
	}else{
		return str;
	}

}
/* author	shaozhigang
 * date 	
 * des		html格式去除空格
 */
function null2htmlspace(str){
	if(str == 'null'){
		return "&nbsp;";
	}else{
		return str;
	}

}
/* author	Sinker
 * date 	2006-09-27 17:00
 * des		删除Session中的Oid
 */
function delOidUrl(_pageName,_do,_bo,_path){
	var delOidUrl = ""+ _path +"/deleteOidAction.do?_pageName="+ _pageName +"&_do=" + _do + "&_boName="+ _bo +"" ;
	var xmldeoOid = sendSyncRequest(delOidUrl);
	if(xmldeoOid.getElementsByTagName("success")[0].firstChild.nodeValue == "false"){
		dealAjaxException(xmldeoOid,_path,"");
	}
}

/* author	Shaozhigang
 * date 	2006-09-26 17:00
 * des		Ajax异常处理
 */
function dealAjaxException(xml,strpath,message,label){
	var exceptionType=xml.getElementsByTagName("exceptiontype")[0].firstChild.nodeValue;
	if(exceptionType == "SYSTEM_EXCEPTION"){
		forwardErrorPage(strpath);
	}else if(exceptionType == "SESSION_TIMEOUT"){
		forwardSessionTimeoutPage(strpath);
	}else if(exceptionType == "LOGIC_EXCEPTION"){
		try{
			var content;
			if(xml.getElementsByTagName("content")[0].length !=0){
				content=xml.getElementsByTagName("content")[0].firstChild.nodeValue;
				//window.status=content;
			}
			var attributeName =  xml.getElementsByTagName("attributename")[0].firstChild.nodeValue;
			if( attributeName != "null")
			{
				var id=document.getElementById(attributeName);
				id.className="input_false";
				try{
					var oldValue =  xml.getElementsByTagName("oldvalue")[0].firstChild.nodeValue;
					if( oldValue != "null")
					{
						id.value = oldValue;
					}else{
						id.value = "";
					}

				}catch(e){
					//alert(e.message);
				}
			}
		}catch(e){
			//alert(e.message);
		}

		if (message!=""){
			//var str = content.split(":");
			if(label != undefined && label!="")
			//alert(label + ":" + message + "~" + str[str.length-1]);
				alert(label + ":" + message + "~" + content);
			else
			//alert("aaa");
			//var str = content.split(":");
			//alert(str.length);
			//alert(message + ":" + str[str.length-1]);
				alert(message + ":" + content);
		}
	}
}


/* author	Shaozhigang
 * date 	2006-09-26 17:00
 * des		Ajax异常处理
 */
function dealAjaxOracleException(xml,strpath,message,label){
	var exceptionType=xml.getElementsByTagName("exceptiontype")[0].firstChild.nodeValue;
	if(exceptionType == "SYSTEM_EXCEPTION"){
		forwardErrorPage(strpath);
	}else if(exceptionType == "SESSION_TIMEOUT"){
		forwardSessionTimeoutPage(strpath);
	}else if(exceptionType == "LOGIC_EXCEPTION"){
		try{
			var content;
			if(xml.getElementsByTagName("content")[0].length !=0){
				content=xml.getElementsByTagName("content")[0].firstChild.nodeValue;
				//window.status=content;
			}
			var attributeName =  xml.getElementsByTagName("attributename")[0].firstChild.nodeValue;
			if( attributeName != "null")
			{
				var id=document.getElementById(attributeName);
				//id.style.backgroundColor= "#0080FF" ;
				//id.style.backgroundColor= "#ACACAC" ;
				id.className="input_false";
				try{
					var oldValue =  xml.getElementsByTagName("oldvalue")[0].firstChild.nodeValue;
					if( oldValue != "null")
					{
						id.value = oldValue;
					}else{
						id.value = "";
					}

				}catch(e){
					//alert(e.message);
				}
			}
		}catch(e){
			//alert(e.message);
		}

		if (message!=""){
			var str = content.split(":");
			if(label != undefined && label!="")
				alert(label + ":" + message + "~" + str[str.length-1]);
			else
			//alert("aaa");
			//var str = content.split(":");
			//alert(str.length);
				alert(message + ":" + str[str.length-1]);
		}
	}
}


/* author 	Sinker
 * date		2006-10-10 20:57
 * des		删除现有bo未点添加的数据
 */
function delAddOid(_do,_actionName,add_oid,_path,_method){
	if (add_oid!=""){
		var url = ""+ _path +"/"+ _actionName +".do?isAjaxRequest=Y&button_method="+ _method +"&"+"_oid=" + add_oid + "&_do=" + _do ;
		var xmldoc = sendSyncRequest(url);
		add_oid="";
	}
}

function changeColor(input){
	input.style.color = "#000000";
}
/* author 	Sinker
 * date 	2006-10-11 10:10
 * des		提交表单域判断控制
 */
function checkForm(_formName){
	if (formValidate(_formName)==false){
		return false;
	}
	return true;
}

/* author	cja
 * date 	2006-10-19 22:46
 * desc		初始化body/tbody行
 */
function resetList(tbodyName){
	var tb_addr=document.getElementById(tbodyName);
	var trs=tb_addr.getElementsByTagName("tr");
	for(var i = trs.length-1;i >= 0;i --){
		tb_addr.removeChild(trs[i]);
	}
}

/* author	DouFuDong
 * date 	2007-3-6 
 * desc		初始化table,table只能用deleteRow,tbody可以用removeChild
 */
function resetTableList(tableName){
	var tb_addr=document.getElementById(tableName);
	var trs=tb_addr.getElementsByTagName("tr");
	for(var i = trs.length-1;i >= 2;i --){
		//tb_addr.removeChild(trs[i]);
		tb_addr.deleteRow(i);
	}
}

/* author	DouFuDOng
 * date 	2006-11-19 22:46
 * desc		清空table内容（如果有隐藏域要去除）
 */

function resetTable(tableName){
	var tb=document.getElementById(tableName);
	var tb_input=tb.getElementsByTagName("input");
	if(tb_input != undefined){
		for(var i=0; i < tb_input.length;i++){
			if(tb_input[i].name != "button_method" && tb_input[i].type != "button")
				tb_input[i].value = "";
		}
	}

	var tb_select=tb.getElementsByTagName("select");
	if(tb_select != undefined){
		for(var i=0; i < tb_select.length;i++){
			if(tb_select[i].name != "selectPage")
				tb_select[i].value = "";
		}
	}

}

/* author	letao_chen
 * date 	2006-11-19 22:46
 * desc		清空table内容（如果有隐藏域要去除）
 */

function resetTableField(tableName){
	var tb=document.getElementById(tableName);
	var tb_input=tb.getElementsByTagName("input");
	if(tb_input != undefined){
		for(var i=0; i < tb_input.length;i++){
			if(tb_input[i].name != "button_method" && tb_input[i].type != "button")
				tb_input[i].value = "";
		}
	}

	var tb_select=tb.getElementsByTagName("select");
	if(tb_select != undefined){
		for(var i=0; i > tb_select.length;i++){
			if(tb_select[i].name != "selectPage")
				tb_select[i].value = "";
		}
	}

}

/* author	DouFuDOng
 * date 	2006-11-19 22:46
 * desc		打开一个新的编辑窗口
 */
function OpenEditWindow(pathstr,OBJ)
{
	var returnStr =window.showModalDialog(pathstr + "/jsp/editlonginput.jsp",OBJ.value,"dialogWidth=470px;dialogHeight=270px;help=no;status =no");
	if(OBJ.disabled != true && OBJ.readOnly != true){
		OBJ.value = returnStr;
		OBJ.fireEvent('onchange');
	}
}


/* author	cja
 * date 	2006-11-08 11:46
 * desc		重设多列表table背景色
 */
function resetBbColor(tableName){
	var tbDemo=document.getElementById(tableName);
	var trDemo=tbDemo.getElementsByTagName("tr");
	for (i=0;i<trDemo.length;i++){
		trDemo[i].bgColor="#ffffff";
	}
}
/* author	cja
 * date 	2006-11-08 11:46
 * desc	 将table全部行状态设置为保存
 */
function setSave(tableName){
	var tbDemo=document.getElementById(tableName);
	var trDemo=tbDemo.getElementsByTagName("tr");
	for(var i=0;i<trDemo.length;i++){
		trDemo[i].setAttribute("SAVE","true");
	}
}
/* author	cja
 * date 	2006-11-08 11:46
 * desc	判断是否已经保存了，保存了返回true,否则返回false;
 */
function isSave(tableName){
	var flag="";
	var tbDemo=document.getElementById(tableName);
	var trDemo=tbDemo.getElementsByTagName("tr");
	for(var i=0;i<trDemo.length;i++){
		flag=trDemo[i].getAttribute("SAVE")
		if(flag=="false"){
			return false;
		}
		return true;
	}
}
/* author	jinwu_you
 * date 	2006-10-30 
 * desc		弹出出错信息
 * param    xmldoc   ajax返回
 * param    str   附加的显示信息 如 "保存失败"
 */
function alertException(xmldoc,str){
	var content=xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue;
	if(str!=""){alert(str+ " : "+ content);}
	else{alert(content);}
}

/* author	Sinker
 * date 	2006-10-30 15:05
 * desc		判断页面域的控制
 * param	在界面body中调用，用onLoad方法

 function fieldControl(_str,_pageName){
 var  strArray= str.split(", ");
 for (var i=strArray.length-1; i>=0; i--){
 var strField=strArray[i].split("|");
 if (strField[2]== _pageName){
 if (strField[1]=="R"){
 try{
 document.getElementById(strField[0]).disabled="disabled";
 }catch(e){

 }
 }
 }
 }
 }*/

/* author	Sinker
 * date 	2007-03-05 21:46:00
 * desc		设置页面域为disabled属性
 * param	
 */
function setFieldDisabled(str){
	var array = str.split(",");
	for (var i=0; i<array.length; i++){
		try{
			input = document.getElementById(array[i]);
			if (input.type =="select-one" || input.type=="checkbox"){
				input.disabled="disabled";
				input.className="input_off";
			}else if(input.type=="button"||input.type=="submit"){
				input.disabled="disabled";
				input.className="btn";
			}else if(input.type=="radio"){
				input.disabled=true;
			}
			else{
				input.readOnly=true;
				//input.ondblclick="";
				input.className="input_off";
			}
		}catch(e)
		{}
	}
}

/* author	Sinker
 * date 	2007-03-05 21:46:00
 * desc		去掉页面中域的disabled属性
 * param	
 */

function clearFieldDisabled(str){
	var array = str.split(",");
	for (var i=0; i<array.length; i++){
		//document.getElementById(array[i]).disabled="";
		//document.getElementById(array[i]).className="input_on";
		//document.getElementById(array[i]).style.backgroundColor= "#ffffff" ;
		try{
			input = document.getElementById(array[i]);
			if (input.type =="select-one" || input.type=="checkbox"){
				input.disabled="";
				input.className="input_on";
			}else if(input.type=="button"){
				input.disabled="";
				input.className="btn";
			}
			else{
				input.readOnly=false;
				input.className="input_on";
				//input.style.backgroundColor= "#ECF9EF";
			}
		}catch(e)
		{}
	}
}

//STD026 modified by Angel on 20080430 start
/**
 * @author Sinker
 * @date
 * @dec 字段控制
 */
/*
 function laFieldControl(strFieldControl){
 var str = strFieldControl;
 var i;
 if (_state != "search"){
 if (str!="" && str!="undefined"){
 var strArray = str.split(",");

 for (i=0; i<strArray.length; i++){
 var fieldArray = strArray[i].split("|");
 try{
 if (fieldArray[1]=="R"){
 input = document.getElementById(fieldArray[0]);
 if (input.id == "APPT_CONT_CORR_IND"){
 apptcontcorrindControl("APPT_CONT_CORR_IND");
 }else if (input.id =="CRDT_CNTR_LOW_RSK_IND"){
 apptcontcorrindControl("CRDT_CNTR_LOW_RSK_IND");
 }else if (input.id =="CRDT_CHK_TYPE_CDE"){
 apptcontcorrindControl("CRDT_CHK_TYPE_CDE");
 }
 else{
 //document.getElementById(fieldArray[0]).disabled=true;
 //document.getElementById(fieldArray[0]).className="input_off";
 //document.getElementById(fieldArray[0]).style.backgroundColor= "#DBF4E1" ;
 if (input.type =="select-one" || input.type=="checkbox"){
 input.disabled=true;
 input.className="input_off";
 }else if(input.type=="button"){
 input.disabled=true;
 input.className="btn";
 }else if (input.type==undefined){
 input.disabled=true;
 input.className="input_off";
 }
 else{
 input.readOnly=true;
 //input.ondblclick="";
 input.className="input_off";
 }
 }
 }
 }catch(e){
 //alert(e.message);
 }
 }
 }
 }else{
 applAllFieldSetDisb();
 }
 }
 */
//?????????????????????
function laFieldControl(strFieldControl){
	var str = strFieldControl;
	var i;
	if (_state != "search"){
		if (str!="" && str!="undefined"){
			var strArray = str.split(",");
			var strFldAccessInd = strArray[0];
			var strCurrSts = strArray[1];
			if("Y" == strFldAccessInd && "REGR" != strCurrSts){
				applAllFieldSetDisb();
				for (i=2; i<strArray.length; i++){
					var fieldArray = strArray[i].split("|");
					try{
						if (fieldArray[1]=="S"){
							input = document.getElementById(fieldArray[0]);
							if (input.id == "APPT_CONT_CORR_IND"){
								apptcontcorrindControl("APPT_CONT_CORR_IND");
							}else if (input.id =="CRDT_CNTR_LOW_RSK_IND"){
								apptcontcorrindControl("CRDT_CNTR_LOW_RSK_IND");
							}else if (input.id =="CRDT_CHK_TYPE_CDE"){
								apptcontcorrindControl("CRDT_CHK_TYPE_CDE");
							}else if(input.id == "APPT_INS_COVG"){
								apptcontcorrindControl("APPT_INS_COVG");
							}else{
								if (input.type =="select-one" || input.type=="checkbox"){
									input.disabled=false;
									input.className="input_on";
								}else if(input.type=="button"){
									input.disabled=false;
									input.className="btn";
								}else if (input.type==undefined){
									input.disabled=false;
									input.className="input_on";
								}
								else{
									input.readOnly=false;
									//input.ondblclick="";
									input.className="input_on";
								}
							}
						}
					}catch(e){
						//alert(e.message);
					}
				}
			}

		}
	}else{
		applAllFieldSetDisb();
		clearFieldDisabled("PrintBut");

	}
}
//STD026 modified by Angel on 20080430 end

/**
 * @author Sinker
 * @date 2007-1-17 09:46:00
 * @dec 字段控制(查询时所有域为只读，除明细字段)
 */
function applAllFieldSetDisb(){
	//if (_applFieldSetType == "search"){
	var i,j;
	var input = document.getElementsByTagName("input");
	for (i=0;i<input.length ;i++ )
	{
		try{
			if (input[i].value != "明细" && input[i].value != "关闭"&& input[i].value != "确定"&& input[i].value != "保存"){
				if (input[i].type=="checkbox"){
					input[i].disabled=true;
					input[i].className="input_off";
				}else if (input[i].type=="button"){
					input[i].disabled=true;
					input[i].className="btn";
				}else if (input[i].type=="radio"){
					input[i].disabled=true;
					input[i].className="input_off";
				}else{
					//if (input[i].type)=="checkbox"){
					//	input[i].disabled=true;
					//}else{
					//input[i].disabled=true;
					input[i].readOnly=true;
					//input[i].ondblclick="";
					//}
					input[i].className="input_off";
				}

			}
		}catch(e){
			//alert(e.message);
		}
	}

	var select = document.getElementsByTagName("select");
	for (j=0;j<select.length ;j++ )
	{
		try{
			select[j].disabled=true;
			//select[j].style.backgroundColor= "#DBF4E1" ;
			select[j].className="input_off";
		}catch(e){
			//alert(e.message);
		}
	}

	var textarea = document.getElementsByTagName("textarea");
	for (k=0;k<textarea.length ;k++ )
	{
		try{
			textarea[k].readOnly=true;
			//textarea[k].ondblclick="";
			textarea[k].className="input_off";
		}catch(e){
			//alert(e.message);
		}
	}

	//}
}

/**
 * @author DouFuDong
 * @date 2007-1-17 09:46:00
 * @dec
 */
function clearDisabledByName(str){
	var array = str.split(",");
	for (var i=0; i<array.length; i++){
		input = document.getElementsByName(array[i]);
		for (j=0;j<input.length ;j++ )
		{
			try{
				if (input[j].type =="select-one" || input[j].type=="checkbox"){
					input[j].disabled="";
					input[j].className="input_on";
				}else if(input[j].type=="button"){
					input[j].disabled="";
					input[j].className="btn";
				}else if (input[j].type==undefined){
					input[j].disabled="";
					input[j].className="input_on";
				}else{
					input[j].readOnly=false;
					input[j].className="input_on";
				}
			}catch(e)
			{}
		}
	}
}

//STD026 modified by Angel on 20080430 start
//特殊域控制，联系方式列表
/*
 function apptcontcorrindControl(str){
 //alert("ddd");
 //try{
 //	var bln = document.getElementById("APPT_CONT_CORR_IND").disabled;
 //	alert(bln);
 //}catch(e){
 //alert(e.message);
 //}
 //if (bln){
 var objAPPT_CONT_CORR_IND = document.getElementsByName(str);
 for (i=0;i<objAPPT_CONT_CORR_IND.length ;i++ )
 {
 try{
 objAPPT_CONT_CORR_IND[i].disabled=true;
 objAPPT_CONT_CORR_IND[i].className="input_off";
 //input[i].style.backgroundColor= "#DBF4E1" ;
 }catch(e){
 //alert(e.message);
 }
 }
 //}
 }
 */
//??????????????????????
function apptcontcorrindControl(str){
	var objElements= document.getElementsByName(str);
	for (i=0;i<objElements.length ;i++ )
	{
		try{
			objElements[i].disabled=false;
			objElements[i].className="input_on";
		}catch(e){
			//alert(e.message);
		}
	}
}
//STD026 modified by Angel on 20080430 end


/* author	jinwu_you
 * date 	2006-11-6
 * desc		域校验成功，如果该域的id在错误列表里面则更新错误列表，否则不更新
 * param    path        ContextPath
 * param    validateStr  页面获取的错误列表，进入该页面的时候通过session获得
 * param    inputId    校验域的id
 * param    pageName   校验域所在页面的名称
 * return   String     返回值为页面校验错误列表，赋值给页面定义的全局变量
 */
function validateSuccess(path,validateStr,inputId,pageName){
	var pageStr="";
	var returnStr="";
	var flag=false;
	if(validateStr!="null" && validateStr!=""){
		pageStr=validateStr.split(",");
	}
	for(var i=0;i<pageStr.length;i++){
		if(inputId==pageStr[i]){
			returnStr=pageStr.without(pageStr[i]);
			flag=true;
			break;
		}
	}
	if(flag){
		var url = path +"/loanapply/PageValidateFalseAction.do?isAjaxRequest=Y&button_method=addValidutaResult&"+"_validateStr=" + returnStr + "&_pageName=" + pageName ;
		var xmldoc = sendSyncRequest(url);
		var validateResult = null2space(xmldoc.getElementsByTagName("validateString")[0].firstChild.nodeValue);
		return validateResult;  //更新了列表，返回新的错误列表
	}else{
		return validateStr;     //没有更新列表，返回原来的错误列表
	}
}
/* author	jinwu_you
 * date 	2006-11-6
 * desc		域校验失败，如果该域的id在错误列表里面就不更新错误列表，否则更新错误列表
 * param    path        ContextPath
 * param    validateStr  页面获取的错误列表，进入该页面的时候通过session获得
 * param    inputId    校验域的id
 * param    pageName   校验域所在页面的名称
 * return   String     返回值为页面校验错误列表，赋值给页面定义的全局变量
 */
function validateFail(path,validateStr,inputId,pageName){
	var pageStr="";
	var returnStr="";
	var flag=false;
	if(validateStr!="null" && validateStr!=""){
		pageStr=validateStr.split(",");
	}
	for(var i=0;i<pageStr.length;i++){
		if(inputId==pageStr[i]){
			flag=true;
			break;
		}
	}
	if(!flag&&pageStr==""){
		returnStr=inputId;
	}else if(!flag&&pageStr!=""){
		pageStr.push(inputId);
		returnStr=pageStr;
	}
	if(!flag){
		var url = path+"/loanapply/PageValidateFalseAction.do?isAjaxRequest=Y&button_method=addValidutaResult&"+"_validateStr=" + returnStr + "&_pageName=" + pageName ;
		var xmldoc = sendSyncRequest(url);
		var validateResult = null2space(xmldoc.getElementsByTagName("validateString")[0].firstChild.nodeValue);
		return validateResult;  //更新了列表，返回新的错误列表
	}else{
		return validateStr;     //没有更新列表，返回原来的错误列表
	}
}
/* author	jinwu_you
 * date 	2006-11-6
 * desc	     改变当前页面校验未通过的域的颜色
 * param    validateStr      页面获取的错误列表，进入该页面的时候通过session获得

 function checkValidateField(validateStr){
 var pageStr="";
 if(validateStr!="null" && validateStr!=""){
 pageStr=validateStr.split(",");
 }
 for(var i=0;i<pageStr.length;i++){
 document.getElementById(pageStr[i]).style.backgroundColor="#0080FF";
 }
 }
 */
/* author	jinwu_you
 * date 	2006-11-6
 * desc	     校验不通过时，获得上一个校验通过的值，如果没有返回null
 * param    input            要校验的域
 * param    parentDo         主do，如果要校验的do有主do,那么传入该do,否则该值为""
 * param    childDo          页面要校验的域对应的do
 * param    path             ContextPath
 * param    boName           要校验域对应的bo
 */
function getLastTrueValue(input,parentDo,childDo,path,boName){
	var _para ="&_boName=" + boName+ "&_parentDo=" + parentDo + "&_childDo=" + childDo +  "&_fieldId=" + input.id + "&_fieldName=" + input.name;
	var url = path+"/loanapply/GetLastTrueValueAction.do?isAjaxRequest=Y&button_method=getValue&" + _para;
	var xmldoc = sendSyncRequest(url);
	if(xmldoc.getElementsByTagName("success").length != 0){
		var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
		if(isSuccess == "true"){
			var retrunId = xmldoc.getElementsByTagName("retrunId")[0].firstChild.nodeValue;
			var returnValue = xmldoc.getElementsByTagName("returnValue")[0].firstChild.nodeValue;
			var changeId=document.getElementById(retrunId);
			changeId.value=null2space(returnValue);
		}
	}
}
/*


 */
function leftOpenNewWindow(str){
	var sw;
	var H=screen.Height;
	var W=screen.Width;
	var DEST_URL=str + "/DirectForwardAction.do?pageName=login";
	var width=W-10;
	var height=H-80;
	var features="fullscreen=no,toolbar=no,resizable=1;location=no,menubar=no,status=yes,left=0,top=0',width="+width+",height="+height;

	if (sw&&!sw.closed)
		sw.navigate(DEST_URL);
	else
		sw=window.open(DEST_URL,"",features,true);
	sw.focus();
	window.opener = null;
	window.close();
}

function leftException(xml,str){
	var exceptionType=xml.getElementsByTagName("exceptiontype")[0].firstChild.nodeValue;
	if(exceptionType == "SYSTEM_EXCEPTION"){
		forwardErrorPage(str);
	}else if(exceptionType == "SESSION_TIMEOUT"){
		leftOpenNewWindow(str);
	}else if(exceptionType == "LOGIC_EXCEPTION"){
		try{
			if(xml.getElementsByTagName("content")[0].length !=0){
				var content=xml.getElementsByTagName("content")[0].firstChild.nodeValue;
				//window.status=content;
			}
			var attributeName =  xml.getElementsByTagName("attributename")[0].firstChild.nodeValue;
			var id=document.getElementById(attributeName);
			//id.style.backgroundColor= "#0080FF" ;
			id.className="input_false";
			//id.select();
			//id.focus();
		}catch(e){
			//alert(e.message);
		}
	}
}

//------------------------------new demo function
/* author	Sinker
 * date 	2006-11-10 15:36：21
 * desc		判断页面域的控制
 * dec		在添加窗口中点击确定调用
 str:列表上需要显示的每个域的ID名称＋OID名称
 * Example  onClick="save('OID,APPL_MSG_COMP_DATE,APPL_MSG_DTL,APPL_REASON_STS,APPL_REASON_ACT')"
 */
function save(str){
	var array = new Array();
	var fieldArray = new Array();
	fieldArray =str.split(",");
	var field="";
	for (i=0;i<=fieldArray.length-1;i++){
		field=document.getElementById(fieldArray[i]);
		if(field.type=="select-one"){
			if(field.options[field.selectedIndex].value == "")
				array.push("");
			else
				array.push(field.options[field.selectedIndex].text);
		}else{
			array.push(field.value);
		}
	}
	window.returnValue=array;
	_state="haveSave";
	window.close();
}

function save2(str){
	var array = new Array();
	var fieldArray = new Array();
	fieldArray =str.split(",");
	var field="";
	for (i=0;i<=fieldArray.length-1;i++){
		field=window.parent.frames['laFrame'].document.getElementById(fieldArray[i]);
		if(field.type=="select-one"){
			if(field.options[field.selectedIndex].value == "")
				array.push("");
			else
				array.push(field.options[field.selectedIndex].text);
		}else{
			array.push(field.value);
		}
	}
	window.returnValue=array;
	_state="haveSave";
	window.close();
}

/* author	zpc
 * date 	2013-10-31
 * dec		自定义传入给上级页面oid的值
 * Example  onClick="save3(OID,'APPL_MSG_COMP_DATE,APPL_MSG_DTL,APPL_REASON_STS,APPL_REASON_ACT')"
 */
function save3(oidVal,str){
	var array = new Array();
	var fieldArray = new Array();
	fieldArray =str.split(",");
	var field="";
	array.push(oidVal);
	for (i=0;i<=fieldArray.length-1;i++){
		field=document.getElementById(fieldArray[i]);
		if(field.type=="select-one"){
			if(field.options[field.selectedIndex].value == "")
				array.push("");
			else
				array.push(field.options[field.selectedIndex].text);
		}else{
			array.push(field.value);
		}
	}
	window.returnValue=array;
	_state="haveSave";
	window.close();
}

function laCheckDocSave(str){
	var array = new Array();
	var fieldArray = new Array();
	fieldArray =str.split(",");
	var field="";
	for (i=0;i<=fieldArray.length-1;i++){
		field=document.getElementById(fieldArray[i]);
		if(field.type=="select-one"){
			if(field.options[field.selectedIndex].value == "")
				array.push("");
			else
				array.push(field.options[field.selectedIndex].text);
		}else{
			array.push(field.value);
		}
	}
	window.returnValue=array;
	_state="haveSave";
	window.close();
}


/* author	Sinker
 * date 	2006-11-10 15:36：21
 * desc		打开新窗口
 * dec		在添加窗口中点击完成调用
 url:打开新窗口的路径,url路径在前台拼
 tableId：列表的表Id名称***
 width：新窗口宽度
 height:新窗口高度
 doname:如果一个界面有两个DO的列表，必须加doname参数

 * Example  windowOpen(url,'laNoteList',800,500);

 */
function add(url,tableId,width,height,doname,clsTids){
	var  array = window.showModalDialog(url,window,"dialogWidth="+ width +"px;dialogHeight="+ height +"px;status=yes;" +"help=no");
	if (array&&!array.closed) {
		var newTR=document.getElementById(tableId).insertRow();
		newTR.onclick=getClick;
		newTR.setAttribute("OID",array[0]);
		newTR.setAttribute("Tid",tableId);
		if(doname != undefined && doname!=""){
			newTR.setAttribute("doname",doname);
		}
		//以下是为了在有多个个Tid的时候，可以将未选择的Tid选择行清空选中行
		//林忠山增加
		if(clsTids != undefined && clsTids!=""){
			newTR.setAttribute("clsTids",clsTids);
		}
		for (i=1;i<array.length;i++){
			var td=newTR.insertCell();
			td.align="center";
			td.innerText=array[i];
		}
		if(doname=="doApplAppt"){
			newTR.onclick=editCloan;
		}
	}
	else{
		//alert("reload!");
		//document.location.reload ;
		//window.location.reload();
		return ;
	}
}

function addHTML(url,tableId,width,height,doname,clsTids,clsTigs)
{
	var  array = window.showModalDialog(url,window,"dialogWidth="+ width +"px;dialogHeight="+ height +"px;status=yes;" +"help=no");
	if (array&&!array.closed) {
		var newTR=document.getElementById(tableId).insertRow();
		newTR.onclick=getClick;
		newTR.setAttribute("OID",array[0]);
		newTR.setAttribute("Tid",tableId);
		if(doname != undefined && doname!=""){
			newTR.setAttribute("doname",doname);
		}
		//以下是为了在有多个个Tid的时候，可以将未选择的Tid选择行清空选中行
		//林忠山增加
		if(clsTids != undefined && clsTids!=""){
			newTR.setAttribute("clsTids",clsTids);
		}
		if (clsTigs != undefined && clsTigs =="checkDocTable"){
			for (i=1;i<array.length;i++){
				var td=newTR.insertCell();
				td.align="center";
				if (i==1){
					td.width="17%";
				}
				if (i==2){
					td.width="41%";
				}
				if (i==3){
					td.width="5%";
				}
				if (i==4){
					td.width="5%";
				}
				if (i==5){
					td.width="17%";
				}
				if (i==6){
					td.width="11%";
				}
				if (i==7){
					td.width="4%";
				}
				td.innerHTML=array[i];
				/*
				 var td=newTR.insertCell();
				 td.align="center";
				 td.innerHTML=array[i];
				 */
			}
		}else{
			for (i=1;i<array.length;i++){
				var td=newTR.insertCell();
				td.align="center";
				td.innerHTML=array[i];
			}
		}
	}
	else{
		//alert("reload!");
		//document.location.reload ;
		//window.location.reload();
		return ;
	}
}


function update(url,tableId,width,height){
	if(_index.toString() !=""){
		if(_tableId==tableId){
			var  array = window.showModalDialog(url,window,"dialogWidth="+ width +"px;dialogHeight="+ height +"px;status=yes;" +"help=no");
			if (array&&!array.closed) {
				var tbDemo=document.getElementById(tableId);
				var trDemo=tbDemo.getElementsByTagName("tr");
				var tdDemo=trDemo[_index].getElementsByTagName("td");
				for (i=0;i<array.length-1;i++){
					tdDemo[i].align="center";
					tdDemo[i].innerText=array[i+1];//返回的数组的第一个值规定是OID，其它是这行记录的字段值
				}
			}else{
				return ;
			}
		}else{
			alert("请选择对应的列表！");
			return false;
		}
	}else{
		alert("请选择记录！");
	}
}

/* author	Sinker
 * date 	2006-11-10 15:36：21
 * desc		onClick触发事件
 * 			在添加窗口中点击完成调用
 tr:每一行的this值
 Tid：列表的表Id名称***
 doname:ＤO名称
 _tableId :全局标量，表ID名称
 * Example  1:在jiavascript生成行的时候，获取onClick事件，不能带参数，默认传this,调用方法： newTR.onclick=getClick;
 2：在<tr onClick="getClick(this,'laNoteList')">,laNoteList为表ID名称
 */
function getClick(tr,Tid,oid,doname,clsTids){
	var tbDemo="";
	if (typeof(tr)=="undefined"){  //如果tr没定义，说明是通过newTR.onclick=getClick实现的，那所有的参数值都是通过设置在this上的属性来获取的
		var tem_tid=this.Tid;
		tbDemo=document.getElementById(tem_tid);
		var tem_oid=this.OID;
		if(this.doname != undefined && this.doname!=""){
			var tem_doname=this.doname;
			eval("_"+tem_doname+"_oid=tem_oid");
			_oid = tem_oid;
		}else{
			_oid = tem_oid;
		}
		_tableId=this.Tid;  //这里增加_tableId是为了区分页面上如果有两个列表，并都有删除按钮，防止选择其中一个列表行，而按了另一个删除按钮，这样会误删或出错
	}else{
		tbDemo=document.getElementById(Tid);
		var tem_oid=oid;
		if(doname != undefined && doname!="")
		{
			eval("_"+doname+"_oid=tem_oid");
			_oid = tem_oid;
		}else{
			_oid = tem_oid;
		}
		_tableId=Tid;
	}
	var trDemo=tbDemo.getElementsByTagName("tr");
	for(i=0;i<trDemo.length;i++){
		trDemo[i].bgColor = "#ffffff" ;
	}
	if(typeof(tr)=="undefined"){
		//this.bgColor="#EAECEC";
		this.bgColor="#FEEDEF";
		_index=this.rowIndex;
	}else{tr.bgColor="#FEEDEF";
		_index=tr.rowIndex;
	}
	//以下是为了在有多个个Tid的时候，可以将未选择的Tid选择行清空选中行
	//林忠山增加
	var tem_clsTids="";
	if (typeof(clsTids)=="undefined"){
		tem_clsTids=this.clsTids;
	}else{
		tem_clsTids=clsTids;
	}
	if (typeof(tem_clsTids)=="undefined"){
		return;
	}else{
		if(tem_clsTids==""){ return;}
		var array=tem_clsTids.split(",");
		for (i=0;i<array.length;i++){
			tbDemo=document.getElementById(array[i]);
			trDemo=tbDemo.getElementsByTagName("tr");
			for(j=0;j<trDemo.length;j++){
				trDemo[j].bgColor = "#ffffff" ;
			}
		}
	}

}

/* author	Sinker
 * date 	2006-11-10 15:36：21
 * desc		onClick触发事件
 * dec		删除选中的表记录
 Tid:表的id名称
 */
function del(Tid,url){
	if(_index.toString() != ""){
		if (_tableId==Tid){
			if (confirm("是否删除？请确认")){
				var xmldoc = sendSyncRequest(url);
				var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
				if(isSuccess == 'true'){
					document.getElementById(Tid).deleteRow(_index);
					_index="";
					return true;
				}else{
					dealAjaxException(xmldoc,_path,"删除失败");
					return false;
				}
			}else{return false;}
		}else{
			alert("请选择对应的列表进行删除！");
			return false;
		}
	}else{
		alert("请选择要删除记录");
		return false;
	}
}

/*
 *Author Sinkerwu,modify lzs
 *Date   2006-11-23 10:20:00
 *dec	   
 */
function quit(url){
	if (confirm("是否要放弃？请确认！")){
		var xmldoc = sendSyncRequest(url);
		if(xmldoc.getElementsByTagName("success").length != 0){
			var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
			if(isSuccess == 'true'){
				_state="haveSave";
				window.close();

			}else{
				dealAjaxException(xmldoc,_path,"放弃失败");
			}
		}
	}
}

/*
 *Author DouFuDong  modify lzs
 *增加窗口点击关闭按钮，删除生成的OID
 *Date   2006-11-23 10:20:00
 *dec	   
 */
function CloseAndDelOid(url){
	var xmldoc = sendSyncRequest(url);
	if(xmldoc.getElementsByTagName("success").length != 0){
		var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
		if(isSuccess == 'true'){
			window.close();
		}else{
			dealAjaxException(xmldoc,_path,"增加时关闭窗口失败");
		}
	}
}

/*
 *Author DouFuDong,modify lzs
 *Date   2006-11-25 10:20:00
 *dec	   
 */
function clear(url){
	var xmldoc = sendSyncRequest(url);
	if(xmldoc.getElementsByTagName("success").length != 0){
		var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
		if(isSuccess == 'true'){
			//window.close();
		}else{
			dealAjaxException(xmldoc,_path,"清空失败");
		}
	}
}

/* 
 DouFuDong
 */
function idTypeValidateInput(noInput,input,doname,stime,label){
	if(input.value == "0" || input.value == "7"){
		noInput.value = noInput.value.toUpperCase();
		validateInput(noInput,doname,stime,label);
	}
	validateInput(input,doname,stime,label);
}

/* 
 DouFuDong
 */
function idNoValidateInput(typevalue,input,doname,stime,label){
	if(typevalue == "0" || typevalue == "7"){
		input.value = input.value.toUpperCase();
	}
	validateInput(input,doname,stime,label);
}

/* 作者：	    林忠山
 * 创建日期： 2006-11-14 15:36：21
 * 参数说明： input 为jsp页面的表单域对象
 *          doname 为DO名称，即对应数据库表的DBA对象
 *                 上目前只提供日期（不包含时间）的选择，但传入到DO中必须包含时间，所以对
 *                 日期域对象，stime参数的值为“ 00:00:00”，其它域对象stime参数的值为‘’
 * 描述		页面上每个字段的校验，如果有效则将表单域中有效的值写入对应的DO中，如果值无效，
 *          将输入框的背景变红
 * 
 * 注意：    调用此函数的jsp页面，必须有 _oid ，_button_method ，_path 三个全局变量和一个隐藏域OID
 * _oid              表示记录ID号，即DO中的记录行号
 * _button_method    表示调用ACTION的方法
 * _path             表示 web 根路径
 * 隐藏域OID          表示 当前OID,用于后面confirm统一取值
 * label			 只有在域校验的时候使用，为该字段的lable名称,下拉列表的情况可以不输入该域。
 */
function validateInput(input,doname,stime,label){
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
}

/* 作者：	    林忠山,sinker修改
 * 创建日期： 2006-11-14 15:36：21
 * 参数说明： select 为jsp页面的select对象
 *          doname 为DO名称，即对应数据库表的DBA对象
 *          sunion 为多级联动（超过二级）的关联对象的值，如区的下拉列表值需要
 *                 省和市的值才能过滤出，在选择省值时，将触发二级联动，过滤出
 *                 市，在选择市值时将触发三级联动，sunion为三级联动是传入的省
 *                 的值（市的值包含在input中），在四级或五级联动中，sunion的
 *                 值可以是用"，"隔开的字符串，二级联动中，sunion的值为"".
 *			formname 当前表单的From名称
 *			joinselectname 关联字段ID名称
 * 描述		页面上每个字段的校验，如果有效则将表单域中有效的值写入对应的DO中，如果值无效，
 *          将输入框的背景变红
 * 
 * 注意：    调用此函数的jsp页面，必须有 _oid ，_button_method ，_path 三个全局变量
 * _oid              表示记录ID号，即DO中的记录行号
 * _button_method    表示调用ACTION的方法
 * _path             表示 web 根路径
 */
function validateGetUnion(select,doname,sunion,formname,joinselectname,label){
	_oid=eval("_"+doname+"_oid");

	if(select.type=="text")
		select.value=select.value.trim();

	var _para = "&_fieldName=" + select.name + "&_fieldValue=" + select.value + "&_fieldValue2=" + sunion + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + select.id;
	var url = _path+"/bovalidate/BoDataValidateAction.do?isAjaxRequest=Y&button_method=" + _button_method + "&content=" + select.id + _para;
	var xmldoc = sendSyncRequest(url);
	if(xmldoc.getElementsByTagName("success").length != 0){
		var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
		if(isSuccess=="true"){
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
				document.getElementById("OID").value=_oid;
				var tem_oid=eval("_"+doname+"_oid");
				if(tem_oid==""){
					eval("_"+doname+"_oid=_oid");
				}
				optionDemo=xmldoc.getElementsByTagName("option");
				if(optionDemo.length != 0){
					var length=optionDemo.length;
					var SelectName=document.forms[formname].elements[joinselectname];
					//清空下拉列表，仅留一个提示选项
					SelectName.length=1;
					for (i=0;i<length;i++){
						SelectName[i+1]=new Option(optionDemo[i].getElementsByTagName("name")[0].firstChild.nodeValue,optionDemo[i].getElementsByTagName("value")[0].firstChild.nodeValue);
					}
				}else{
					var SelectName=document.forms[formname].elements[joinselectname];
					//清空下拉列表，仅留一个提示选项
					SelectName.length=1;
				}
			}
			return true;
		}
		else {
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
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


}


/* 作者：	    林忠山,sinker修改
 * 创建日期： 2006-11-14 15:36：21
 * 参数说明： select 为jsp页面的select对象
 *          doname 为DO名称，即对应数据库表的DBA对象
 *          sunion 为多级联动（超过二级）的关联对象的值，如区的下拉列表值需要
 *                 省和市的值才能过滤出，在选择省值时，将触发二级联动，过滤出
 *                 市，在选择市值时将触发三级联动，sunion为三级联动是传入的省
 *                 的值（市的值包含在input中），在四级或五级联动中，sunion的
 *                 值可以是用"，"隔开的字符串，二级联动中，sunion的值为"".
 *			formname 当前表单的From名称
 *			joinselectname 关联字段ID名称
 * 描述		特殊的域控制，在做nowRow之后做SetReasonData?	设置原因数据方法，如果有效则将表单域中有效的值写入对应的DO中，如果值无效，
 *          将输入框的背景变红
 * 
 * 注意：    调用此函数的jsp页面，必须有 _oid ，_button_method ，_path 三个全局变量
 * _oid              表示记录ID号，即DO中的记录行号
 * _button_method    表示调用ACTION的方法
 * _path             表示 web 根路径
 * applstatus		 表示 当前申请状态
 * apptypeCode		 表示 动作（操作的动作）	
 * rmkid			 表示 设置补充意见/备注域的ID名称,为设置域的Diasbled参数用的
 */
function setReasonGetUnionValiDate(select,doname,sunion,formname,joinselectname,applstatus,apptypeCode,rmkid,label){
	if(select.type=="text")
		select.value=select.value.trim();

	var _para = "&_fieldName=" + select.name + "&_fieldValue=" + select.value + "&_fieldValue2=" + sunion + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + select.id;
	var url = _path+"/bovalidate/BoDataValidateAction.do?isAjaxRequest=Y&button_method="+ _button_method +"&applstatus="+ applstatus +"&apptypeCode="+ apptypeCode +"&content=" + select.id + _para;
	var xmldoc = sendSyncRequest(url);
	if(xmldoc.getElementsByTagName("success").length != 0){
		var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
		if(isSuccess=="true"){
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
				document.getElementById("OID").value=_oid;
				var tem_oid=eval("_"+doname+"_oid");
				if(tem_oid==""){
					eval("_"+doname+"_oid=_oid");
				}
				document.getElementById(rmkid).disabled=false;
				optionDemo=xmldoc.getElementsByTagName("option");
				if(optionDemo.length != 0){
					var length=optionDemo.length;
					var SelectName=document.forms[formname].elements[joinselectname];
					//清空下拉列表，仅留一个提示选项
					SelectName.length=1;
					for (i=0;i<length;i++){
						SelectName[i+1]=new Option(optionDemo[i].getElementsByTagName("name")[0].firstChild.nodeValue,optionDemo[i].getElementsByTagName("value")[0].firstChild.nodeValue);
					}
				}
			}
			return true;
		}
		else {
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
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
}

/* 作者：	    林忠山
 * 创建日期： 2006-12-24 15:36：21
 * 参数说明： select 为jsp页面的select对象
 *          doname 为DO名称，即对应数据库表的DBA对象
 *          inputs 字符串，表示要获取的input值的名称，如果不止一个用“,”隔开
 *			label 当前域的名称，用来提示
 * 描述		页面上每个字段的校验，如果有效则将表单域中有效的值写入对应的DO中，如果值无效，
 *          将输入框的背景变红
 * 
 * 注意：    调用此函数的jsp页面，必须有 _oid ，_button_method ，_path 三个全局变量
 * _oid              表示记录ID号，即DO中的记录行号
 * _button_method    表示调用ACTION的方法
 * _path             表示 web 根路径
 */
function validateGetInputs(select,doname,inputs,label){
	_oid=eval("_"+doname+"_oid");

	if(select.type=="text")
		select.value=select.value.trim();

	var _para = "&_fieldName=" + select.name + "&_fieldValue=" + select.value + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + select.id;
	var url = _path+"/bovalidate/BoDataValidateAction.do?isAjaxRequest=Y&button_method=" + _button_method + "&content=" + select.id + _para;
	var xmldoc = sendSyncRequest(url);
	if(xmldoc.getElementsByTagName("success").length != 0){
		var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
		if(isSuccess=="true"){
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
				document.getElementById("OID").value=_oid;
				var tem_oid=eval("_"+doname+"_oid");
				if(tem_oid==""){
					eval("_"+doname+"_oid=_oid");
				}
				var ss;
				ss=inputs.split(",");
				for (i=0;i<ss.length;i++){
					document.getElementById(ss[i]).value=xmldoc.getElementsByTagName(ss[i])[0].firstChild.nodeValue;
				}
			}
			return true;
		}
		else {
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
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


}
/* 作者：	    林忠山
 * 创建日期： 2006-12-24 15:36：21
 * 参数说明： input 为jsp页面的input对象,能实现数字保留2位小数点的格式化
 *          doname 为DO名称，即对应数据库表的DBA对象
 *          inputs 字符串，表示要获取的input值的名称，如果不止一个用“,”隔开
 *			label 当前域的名称，用来提示
 * 描述		页面上每个字段的校验，如果有效则将表单域中有效的值写入对应的DO中，如果值无效，
 *          将输入框的背景变红
 * 
 * 注意：    调用此函数的jsp页面，必须有 _oid ，_button_method ，_path 三个全局变量
 * _oid              表示记录ID号，即DO中的记录行号
 * _button_method    表示调用ACTION的方法
 * _path             表示 web 根路径
 */
function validateGetInputsDec(input,doname,inputs,label,num){
	var reValue="";

	reValue = FormatNumber(input,num);
	if( reValue.toString() != "" && reValue == false){
		input.value = 0;
		reValue = FormatNumber(input,num);
		input.value = reValue;
	}else if( reValue.toString() == "" ){
		input.value = 0;
		reValue = FormatNumber(input,num);
		input.value = reValue;
	}else{
		input.value = reValue;
	}

	_oid=eval("_"+doname+"_oid");

	if(input.type=="text")
		input.value=input.value.trim();

	var _para = "&_fieldName=" + input.name + "&_fieldValue=" + input.value + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
	var url = _path+"/bovalidate/BoDataValidateAction.do?isAjaxRequest=Y&button_method=" + _button_method + "&content=" + input.id + _para;
	input.value = MoneyToCurrency(input);
	var xmldoc = sendSyncRequest(url);
	if(xmldoc.getElementsByTagName("success").length != 0){
		var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
		if(isSuccess=="true"){
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
				document.getElementById("OID").value=_oid;
				var tem_oid=eval("_"+doname+"_oid");
				if(tem_oid==""){
					eval("_"+doname+"_oid=_oid");
				}
				var ss;
				ss=inputs.split(",");
				for (i=0;i<ss.length;i++){
					document.getElementById(ss[i]).value=xmldoc.getElementsByTagName(ss[i])[0].firstChild.nodeValue;
				}
			}
			return true;
		}
		else {
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
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
}
/* 作者：	    林忠山
 * 创建日期： 2006-12-24 15:36：21
 * 描述：通过一个数字输入域，获得几个不同类别的表单域数据（类别目前有3个：）
 *       I:表示input,S:表示select，T：表示文本描述：
 * 参数说明： input 为jsp页面的input对象,能实现数字保留多位小数点的格式化
 *          doname 为DO名称，即对应数据库表的DBA对象
 *          inputs 字符串，表示要获取的表单域的值的名称，如果不止一个用“,”隔开，不同类别用“|”隔开
 *          如：price|I，name|T，sex|S
 *			label 当前域的名称，用来提示
 *          num 表示小数点后保留几位，如果为0，表示不进行数字格式化，即该输入域为字符
 * 描述		页面上每个字段的校验，如果有效则将表单域中有效的值写入对应的DO中，如果值无效，
 *          将输入框的背景变红
 * 
 * 注意：    调用此函数的jsp页面，必须有 _oid ，_button_method ，_path 三个全局变量
 * _oid              表示记录ID号，即DO中的记录行号
 * _button_method    表示调用ACTION的方法
 * _path             表示 web 根路径
 */
function validateGetInputsDecWithTag(input,doname,inputs,label,num){
	var reValue="";
	if (num!=0){
		reValue = FormatNumber(input,num);
		if( reValue.toString() != "" && reValue == false){
			input.value = 0;
			reValue = FormatNumber(input,num);
			input.value = reValue;
		}else if( reValue.toString() == "" ){
			input.value = 0;
			reValue = FormatNumber(input,num);
			input.value = reValue;
		}else{
			input.value = reValue;
		}
	}

	_oid=eval("_"+doname+"_oid");

	if(input.type=="text")
		input.value=input.value.trim();

	var _para = "&_fieldName=" + input.name + "&_fieldValue=" + input.value + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
	var url = _path+"/bovalidate/BoDataValidateAction.do?isAjaxRequest=Y&button_method=" + _button_method + "&content=" + input.id + _para;
	if (num!=0){
		input.value = MoneyToCurrency(input);
	}
	var xmldoc = sendSyncRequest(url);
	if(xmldoc.getElementsByTagName("success").length != 0){
		var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
		if(isSuccess=="true"){
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
				document.getElementById("OID").value=_oid;
				var tem_oid=eval("_"+doname+"_oid");
				if(tem_oid==""){
					eval("_"+doname+"_oid=_oid");
				}
				var ss;
				ss=inputs.split(",");
				for (i=0;i<ss.length;i++){
					datas=ss[i].split("|");
					if(datas[1]=="I"){
						document.getElementById(datas[0]).value=xmldoc.getElementsByTagName(datas[0])[0].firstChild.nodeValue;
					}
					if(datas[1]=="T"){
						document.getElementById(datas[0]).innerText=xmldoc.getElementsByTagName(datas[0])[0].firstChild.nodeValue;
					}
					if(datas[1]=="S"){
						var selectDemo=xmldoc.getElementsByTagName(datas[0]);
						optionDemo=selectDemo.getElementsByTagName("option");
						if(optionDemo.length != 0){
							var length=optionDemo.length;
							var SelectName=document.getElementById(datas[0]);
							//清空下拉列表，仅留一个提示选项
							SelectName.length=1;
							for (i=0;i<length;i++){
								SelectName[i+1]=new Option(optionDemo[i].getElementsByTagName("name")[0].firstChild.nodeValue,optionDemo[i].getElementsByTagName("value")[0].firstChild.nodeValue)
							}
						}
					}
				}
			}
			return true;
		}
		else {
			if(xmldoc.getElementsByTagName("OID").length != 0){
				_oid = xmldoc.getElementsByTagName("OID")[0].firstChild.nodeValue;
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
}

//打开模态通信对话框
function OpenCommWin(_path)
{
	window.showModelessDialog(""+ _path +"/jsp/waiting.htm","","status:no;help:no;dialogWidth:240px;dialogHeight:10px");
	return true;
}
var  _waitwd;
//打开第二个模态通信对话框，打开宽架的时候用
function OpenSecCommWin(str)
{
	_waitwd=window.showModelessDialog(str + "/jsp/waiting.htm","","status:no;help:no;dialogWidth:240px;dialogHeight:10px");
}

function CloseSecCommWin(){
	_waitwd.close();
}

/* Author 	Sinker
 * Date 	2006-11-20
 * desc		tabs向左移动
 */
function tabsLeft(){
	tabsGo.scrollLeft -= 100;
}
/* Author 	Sinker
 * Date 	2006-11-20
 * desc		tabs向右移动
 */
function tabsRight(){
	tabsGo.scrollLeft += 100;
}

//分页查询的公共函数  页面要定义  全局变量 _curPage ,和 _totalPage
/*
 * param    _curPage         当前页
 * param    _totalPage       总页数
 * param    pageNum          当前页的页码,页面的隐藏域
 * param    submitForm       提交查询条件的form
 * param    selectPage       选择中要跳转的页
 * DouFuDong Modify  加入整体提交的判断
 */
//前一页
function previousPage(pageNum,submitForm){
	if (checkForm(submitForm)){
		if(_curPage>1){
			document.getElementById("BtnFirst").disabled=true;
			document.getElementById("BtnPrevious").disabled=true;
			document.getElementById("BtnNext").disabled=true;
			document.getElementById("BtnLast").disabled=true;
			document.getElementById(pageNum).value=_curPage-1;
			document.getElementById(submitForm).submit();
		}else{return ;}
	}
}
//后一页
function nextPage(pageNum,submitForm){
	if (checkForm(submitForm)){
		if(_curPage<_totalPage){
			document.getElementById("BtnFirst").disabled=true;
			document.getElementById("BtnPrevious").disabled=true;
			document.getElementById("BtnNext").disabled=true;
			document.getElementById("BtnLast").disabled=true;
			document.getElementById(pageNum).value=_curPage+1;
			document.getElementById(submitForm).submit();
		}else{return ;}
	}
}
//第一页
function firstPage(pageNum,submitForm){
	if (checkForm(submitForm)){
		document.getElementById("BtnFirst").disabled=true;
		document.getElementById("BtnPrevious").disabled=true;
		document.getElementById("BtnNext").disabled=true;
		document.getElementById("BtnLast").disabled=true;
		document.getElementById(pageNum).value=1;
		document.getElementById(submitForm).submit();
	}
}
//最后一页
function lastPage(pageNum,submitForm){
	if (checkForm(submitForm)){
		document.getElementById("BtnFirst").disabled=true;
		document.getElementById("BtnPrevious").disabled=true;
		document.getElementById("BtnNext").disabled=true;
		document.getElementById("BtnLast").disabled=true;
		document.getElementById(pageNum).value=_totalPage;
		document.getElementById(submitForm).submit();
	}
}
//跳到目标页
function jumpPage(selectPage,pageNum,submitForm){
	if (checkForm(submitForm)){
		var selectField=document.getElementById(selectPage);
		var purposePage=selectField.options[selectField.selectedIndex].value;
		document.getElementById(pageNum).value=purposePage;
		document.getElementById(submitForm).submit();
	}
}


/**
 * @author Sinker
 * @date 2006-12-18 15:32:00
 * @dec 多类别记录颜色的控制
 * @param otherTabId 多个tableID以逗号的形式组合传入,如 'tableId1,tableId2'
 */
function getApplyClick(tr,tabId,otherTabId){
	//获取选中的记录,将选中的记录变色
	tbDemo=document.getElementById(tabId);
	trDemo=tbDemo.getElementsByTagName("tr");
	for(i=0;i<trDemo.length;i++){
		trDemo[i].bgColor = "#ffffff" ;
	}
	tr.bgColor="#FEEDEF";
	//将otherTabId表中的记录颜色恢复到初颜色
	if(otherTabId==""){
		return;
	}
	else{
		var array=otherTabId.split(",");
		for (i=0;i<array.length;i++){
			tbDemo=document.getElementById(array[i]);
			trDemo=tbDemo.getElementsByTagName("tr");
			for(j=0;j<trDemo.length;j++){
				trDemo[j].bgColor = "#ffffff" ;
			}
		}
	}
}


/**
 * @author 	jinwu_you,Sinker修改
 * @date 	2006-12-30 15:38:00
 * @dec 	select连动生成input值的同时触发input做validate;通过该方法可以改变V变量的changevalue方法
 */
function validateInputManager(inputName,inputValue,inputId,doname,label){
	_oid=eval("_"+doname+"_oid");
	inputValue = inputValue.toString().trim();
	var _para = "&_fieldName=" +inputName + "&_fieldValue=" + inputValue + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + inputId;
	var url = _path+"/bovalidate/BoDataValidateAction.do?isAjaxRequest=Y&button_method=" + _button_method + _para;
	var xmldoc = sendSyncRequest(url);
	if(xmldoc.getElementsByTagName("success").length != 0){
		var isSuccess = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
		if(isSuccess=="true"){
			if(xmldoc.getElementsByTagName("oid").length != 0){
				_oid = xmldoc.getElementsByTagName("oid")[0].firstChild.nodeValue;
				document.getElementById("OID").value=_oid;
				var tem_oid=eval("_"+doname+"_oid");
				if(tem_oid ==""){
					eval("_"+doname+"_oid=_oid");
				}
			}
			try{
				var attributeName =  xmldoc.getElementsByTagName("attributename")[0].firstChild.nodeValue;
				if( attributeName != "null")
				{
					var id=document.getElementById(attributeName);
					if(id.className=='inputDisable'||id.className=='input_off'){ //如果原来该字段是不可以改的，校验成功后一样不可以改
					}else{
						if(id.type != "checkbox")
							id.className="input_on";
						//id.style.backgroundColor= "#FFFFFF" ;
						//window.status="";
					}
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
}

/**
 * @author 	Sinker
 * @date 	2007-1-9 16:21:00
 * @dec 	普通弹出窗口
 */
function openNewWindow(url,width,height)
{
	window.showModalDialog(url,window,"dialogWidth="+ width +"px;dialogHeight="+ height +"px;status=yes;" +"help=no");

}

/**
 * @author 	DouFuDong
 * @date 	2007-1-15 16:21:00
 * @dec 	客户端显示指定位数的小数点
 */
//四舍五入函数,srcStr  传入的数值；nAfterDot 保留几位小数
function FormatNumber(input,nAfterDot){
	var resultStr,nTen;

	var srcStr = CurrencyToMoney(input);

	if( srcStr.trim() == "" )
	{
//   	srcStr = "0.";
//    	for (i=0;i<nAfterDot;i++){
//      		srcStr = srcStr+"0";
//    	}
		return srcStr.trim();
	}

	if (!isSignedFloat(srcStr))
	{
		//input.style.backgroundColor= "#0080FF" ;
		//alert("输入内容不正确:应该输入数字");
		input.className="input_false";
		return false;
	}

	srcStr = ""+srcStr+"";
	strLen = srcStr.length;
	dotPos = srcStr.indexOf(".",0);
	if (dotPos == -1){
		resultStr = srcStr+".";
		for (i=0;i<nAfterDot;i++){
			resultStr = resultStr+"0";
		}
	}
	else{
		if ((strLen - dotPos - 1) > nAfterDot){
			nAfter = dotPos + nAfterDot + 1;
			nTen =1;
			for(j=0;j<nAfterDot;j++){
				nTen = nTen*10;
			}
			resultStr = Math.round(parseFloat(srcStr)*nTen)/nTen;
			resultStr = ""+resultStr+"";
			strLen = resultStr.length;
			dotPos = resultStr.indexOf(".",0);
			if (dotPos == -1){
				resultStr = resultStr+".";
				for (i=0;i<nAfterDot;i++){
					resultStr = resultStr+"0";
				}
			}else
			{
				if ((strLen - dotPos - 1) <= nAfterDot){
					for (i=0;i<(nAfterDot - strLen + dotPos + 1);i++){
						resultStr = resultStr+"0";
					}
				}
			}
		}
		else{
			resultStr = srcStr;
			for (i=0;i<(nAfterDot - strLen + dotPos + 1);i++){
				resultStr = resultStr+"0";
			}

		}
	}

	return resultStr;

}



/**
 * @author 	DouFuDong
 * @date 	2007-1-15 16:21:00
 * @dec 	将金额域的数值改为千分苻分隔
 */
function MoneyToCurrency(input){
	//var strValue = new String(money.value);
	var strValue = input.value;
	var iValue = input.value;
	if (iValue >= 1000 || iValue <= -1000) {
		var iStart = strValue.indexOf(".");
		if (iStart < 0)
			iStart = strValue.length;

		iStart -= 3;
		while (iStart >= 1) {
			strValue = strValue.substring(0,iStart) + "," + strValue.substring(iStart,strValue.length);
			iStart -= 3;
		}
	}
	return strValue;
}

/**
 * @author 	DouFuDong
 * @date 	2007-1-15 16:21:00
 * @dec 	只在客户端显示指定位数的小数点和千分苻
 */

function onlyShowDecNum(input,label,num){
	var reValue="";

	reValue = FormatNumber(input,num);
	if( reValue.toString() != "" && reValue == false){
		input.value = 0;
		reValue = FormatNumber(input,num);
		input.value = reValue;
	}
	else{
		input.value = reValue;
		input.className="input_on";
	}

	input.value = MoneyToCurrency(input);
}

/**
 * @author 	DouFuDong
 * @date 	2007-1-15 16:21:00
 * @dec 	将含有千分苻金额域的数值改为正常数值表示方式
 */
function CurrencyToMoney(input){
	var strValue = input.value;

	strValue  = strValue.replace(/,/g,'');
	return strValue;
}

/**
 * @author 	DouFuDong
 * @date 	2007-1-15 16:21:00
 * @dec 	改变值并且客户端显示指定位数的小数点,如果为空赋值0给后台
 */

function validateInputAndDecNum(input,doname,stime,label,num){
	var reValue="";

	reValue = FormatNumber(input,num);
	if( reValue.toString() != "" && reValue == false){
		input.value = 0;
		reValue = FormatNumber(input,num);
		input.value = reValue;
	}else if( reValue.toString() == "" ){
		input.value = 0;
		reValue = FormatNumber(input,num);
		input.value = reValue;
	}else{
		input.value = reValue;
	}

	_oid=eval("_"+doname+"_oid");
	var _para = "&_fieldName=" + input.name + "&_fieldValue=" + input.value + "" + stime + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
	var url = _path+"/bovalidate/BoDataValidateAction.do?isAjaxRequest=Y&button_method=" + _button_method + _para;
	input.value = MoneyToCurrency(input);
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
					if(id.type != "checkbox")
						id.className="input_on";
					//id.style.backgroundColor= "#FFFFFF" ;
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
}

/**
 * @author 	DouFuDong
 * @date 	2007-9-3 10:21:00
 * @dec 	改变值并且客户端显示指定位数的小数点,如果为空不赋值0给后台，而是用空赋值
 */

function validateInputAndDecNumNotDefault(input,doname,stime,label,num){
	var reValue="";

	reValue = FormatNumber(input,num);
	if( reValue.toString() != "" && reValue == false){
		input.value = 0;
		reValue = FormatNumber(input,num);
		input.value = reValue;
	}else{
		input.value = reValue;
	}

	_oid=eval("_"+doname+"_oid");
	var _para = "&_fieldName=" + input.name + "&_fieldValue=" + input.value + "" + stime + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
	var url = _path+"/bovalidate/BoDataValidateAction.do?isAjaxRequest=Y&button_method=" + _button_method + _para;
	input.value = MoneyToCurrency(input);
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
					if(id.type != "checkbox")
						id.className="input_on";
					//id.style.backgroundColor= "#FFFFFF" ;
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
}

/**
 * @author 	DouFuDong
 * @date 	2007-1-24 16:21:00
 * @dec 	控制特殊字符输入
 */
function CheckInputChar(event, input){
	//&:38和|:124 (:40 ):41  " ":32
	//_oldvalue = input.value;
	if( event.keyCode != 124 && event.keyCode != 38 &&
		event.keyCode != 40 && event.keyCode != 41 &&
		event.keyCode != 32){
		alert("只能输入：&,|,(,)和空格字符！");
		event.keyCode = 0;
	}else{
		//input.fireEvent("onChange");	
	}
}

/**
 * @author 	DouFuDong
 * @date 	2007-1-25 16:21:00
 * @dec 	转换特殊字符为汉字，在后台再转换回来
 */
function SwitchXMLChar(input){
	var strValue = input.value;

	strValue  = strValue.replace(/\&/g,'条件与');
	//strValue  = strValue.replace('条件与',/\&/g);	
	strValue  = strValue.replace(/\|/g,'条件或');
	//strValue  = strValue.replace('条件或',/\|/g);	
	//strValue  = strValue.replace(/\(/g,'条件左括号');	
	//strValue  = strValue.replace('条件左括号',/\(/g);	
	//strValue  = strValue.replace(/\)/g,'条件右括号');	
	//strValue  = strValue.replace('条件右括号',/\)/g);	
	return strValue;
}
/**
 * @author 	CJA
 * @date 	2007-1-31 16:15:00
 * @dec 	转换汉字为特殊字符，在后台再转换回来
 */
function SwitchTextChar(str){
	str = str.replace(/\条件与/g,'&');
	str = str.replace(/\条件或/g,'|');
	return str;
}

/**
 * @author 	DouFuDong
 * @date 	2007-5-9 16:21:00
 * @dec 	屏蔽鼠标键
 */

//屏蔽鼠标右键、Ctrl+N、Shift+F10、F11、F5刷新、退格键 
//function document.oncontextmenu(){event.returnValue=false;} 屏蔽鼠标右键
function onhelp(){return false} //屏蔽F1帮助 
function onkeydown(event){
	if ((event.altKey)&&
		((event.keyCode==37)|| //屏蔽 Alt+ 方向键 ←
		(event.keyCode==39))) //屏蔽 Alt+ 方向键 →
	{
		event.returnValue=false;
	}

	if (//(event.keyCode==8) || //屏蔽退格删除键 
	(event.keyCode==116)|| //屏蔽 F5 刷新键 
	(event.keyCode==114)|| //屏蔽 F3 刷新键 
	(event.ctrlKey && event.keyCode==82)){ //Ctrl + R 
		event.keyCode=0;
		event.returnValue=false;
	}
	if (event.keyCode==122){event.keyCode=0;event.returnValue=false;} //屏蔽F11 
	if (event.ctrlKey && event.keyCode==78) event.returnValue=false; //屏蔽 Ctrl+n 
	if (event.shiftKey && event.keyCode==121)event.returnValue=false; //屏蔽 shift+F10 
	if (event.srcElement.tagName == "A" && event.shiftKey)
		event.returnValue = false; //屏蔽 shift 加鼠标左键新开一网页 
	if ((event.altKey)&&(event.keyCode==115)) //屏蔽Alt+F4 
	{
		window.showModelessDialog("about:blank","","dialogWidth:1px;dialogheight:1px");
		return false;
	}

	if (event.keyCode==13)
		event.keyCode=9;
}


/**
 * @author 	DouFuDong
 * @date 	2007-1-25 16:21:00
 * @dec 	将格式化日期:2007/01/25改为日期表示方式20070125
 */
function FormatDateNoSp(input){
	var strValue = input.value;

	strValue  = strValue.replace(/\//g,'');
	return strValue;
}

/**
 * @author 	DouFuDong
 * @date 	2007-1-25 16:21:00
 * @dec 	将格式化日期:20070125改为日期表示方式2007/01/25
 */

function FormatDateWithSp(input){
	var srcStr = "";
	srcStr = FormatDateNoSp(input);
	if( srcStr.length != 8 )
	{
		if( srcStr.length == 0 )
			return true;

		focusItem(input);
		alert("输入内容不正确:应该输入8位长日期，例如20070101");
		input.className="input_false";
		return false;
	}
	if (!isInteger(srcStr))
	{
		focusItem(input);
		alert("输入内容不正确:应该输入8位长数字日期，例如20070101");
		input.className="input_false";
		return false;
	}
	if (!isValidateDate(srcStr))
	{
		focusItem(input);
		alert("输入内容不正确:应该输入8位长合法日期，例如20070101");
		input.className="input_false";
		return false;
	}

	input.value = reformat(srcStr,"",4,"/",2,"/",2);
	return true;
}
/**
 * @author 	jinwu_you
 * @date 	2007-1-18
 * @dec 	把选择项中的 "代码 ：描述" 拆分开，在doAdd()方法中调用，返回给parent页面列表的"代码"项和"描述"项
 * param    selectId         选择项 其格式为    "代码 ：描述"
 * param    codeId           代码的Id,在页面设置一隐藏域
 * param    descId           描述的Id,在页面设置一隐藏域
 */
function scriptSelect(selectId,codeId,descId){
	var select = document.getElementById(selectId);
	var text = select.options[select.selectedIndex].text;
	if(text!="" && text!="请选择"){
		var fieldArray = new Array();
		fieldArray =text.split(":");
		document.getElementById(codeId).value=fieldArray[0];
		document.getElementById(descId).value=fieldArray[1];
	}else{
		document.getElementById(codeId).value="";
		document.getElementById(descId).value="";
	}
}

/**
 * @author 	DouFuDong
 * @date 	2007-1-18
 * @dec 	把选择项中的 "代码 ：描述" 拆分开，返回给"描述"项
 * param    selectId         选择项 其格式为    "代码 ：描述"
 * return   描述
 */
function returnDesc(selectId){
	var result="";
	var select = document.getElementById(selectId);
	var text = select.options[select.selectedIndex].text;
	if(text!="" && text!="请选择"){
		var fieldArray = new Array();
		fieldArray =text.split(":");
		result =fieldArray[1];
	}else{
		result="";
	}
	return result;
}

/**
 * @author 	Sinker
 * @date 	2007-3-16 10:49:00
 * @dec 	安全列表点击控制按钮程序
 */
function getSecurityClick(tr,Tid,oid,doname,clsTids){
	var tbDemo="";
	if (typeof(tr)=="undefined"){  //如果tr没定义，说明是通过newTR.onclick=getClick实现的，那所有的参数值都是通过设置在this上的属性来获取的
		var tem_tid=this.Tid;
		tbDemo=document.getElementById(tem_tid);
		var tem_oid=this.OID;
		if(this.doname != undefined && this.doname!="")
		{   var tem_doname=this.doname;
			eval("_"+tem_doname+"_oid=tem_oid");
			_oid = tem_oid;
		}else
		{
			_oid = tem_oid;
		}
		_tableId=this.Tid;  //这里增加_tableId是为了区分页面上如果有两个列表，并都有删除按钮，防止选择其中一个列表行，而按了另一个删除按钮，这样会误删或出错
	}else{
		tbDemo=document.getElementById(Tid);
		var tem_oid=oid;
		if(doname != undefined && doname!="")
		{
			eval("_"+doname+"_oid=tem_oid");
			_oid = tem_oid;
		}else
		{
			_oid = tem_oid;
		}
		_tableId=Tid;
	}
	var trDemo=tbDemo.getElementsByTagName("tr");
	for(i=0;i<trDemo.length;i++){
		trDemo[i].bgColor = "#ffffff" ;
	}

	if(typeof(tr)=="undefined"){
		this.bgColor="#FEEDEF";
		_index=this.rowIndex;
		document.getElementById("delBtn").disabled="disabled";
		document.getElementById("MoreBtn").disabled="disabled";
		document.getElementById("btnAssign").disabled="";
		//setFieldDisabled("delBtn,MoreBtn");
		//clearFieldDisabled("btnAssign");
	}else{
		tr.bgColor="#FEEDEF";
		_index=tr.rowIndex;
		document.getElementById("delBtn").disabled="disabled";
		document.getElementById("MoreBtn").disabled="disabled";
		document.getElementById("btnAssign").disabled="";
		//setFieldDisabled("delBtn,MoreBtn");
		//clearFieldDisabled("btnAssign");
	}
	//以下是为了在有多个个Tid的时候，可以将未选择的Tid选择行清空选中行
	//林忠山增加
	var tem_clsTids="";
	if (typeof(clsTids)=="undefined"){
		tem_clsTids=this.clsTids;
	}else{
		tem_clsTids=clsTids;
	}
	if (typeof(tem_clsTids)=="undefined"){
		tbDemo=document.getElementById("tbodyAssignDetail");
		trDemo=tbDemo.getElementsByTagName("tr");
		for(j=0;j<trDemo.length;j++){
			trDemo[j].bgColor = "#ffffff" ;
		}
		return;
	}else{
		if(tem_clsTids==""){ return;}
		var array=tem_clsTids.split(",");
		for (i=0;i<array.length;i++){
			tbDemo=document.getElementById(array[i]);
			trDemo=tbDemo.getElementsByTagName("tr");
			if (array[i] == "tbodyAssignDetail"){
				document.getElementById("delBtn").disabled="disabled";
				document.getElementById("MoreBtn").disabled="disabled";
				document.getElementById("btnAssign").disabled="";
				//setFieldDisabled("delBtn,MoreBtn");
				//clearFieldDisabled("btnAssign");
			}else{
				document.getElementById("delBtn").disabled="";
				document.getElementById("MoreBtn").disabled="";
				document.getElementById("btnAssign").disabled="disabled";
				//setFieldDisabled("btnAssign");
				//clearFieldDisabled("delBtn,MoreBtn");
			}
			for(j=0;j<trDemo.length;j++){
				trDemo[j].bgColor = "#ffffff" ;
			}
		}
	}
}


/*
 * @Author  	Sinker
 * @Date		2007-03-28 16:11
 * @Desc		连动获取不通表码的值
 */
function joinSelectValue(formname,fieldname){
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			var xmldoc = xmlHttp.responseXML;
			optionDemo=xmldoc.getElementsByTagName("option");
			var length=optionDemo.length;
			var selectName=document.forms[formname].elements[fieldname];
			//清空下拉列表，仅留一个提示选项
			selectName.length=1;
			if(optionDemo.length != 0){
				for (i=0;i<length;i++){
					selectName[i+1]=new Option(optionDemo[i].getElementsByTagName("name")[0].firstChild.nodeValue,optionDemo[i].getElementsByTagName("value")[0].firstChild.nodeValue);
				}
			}
		}
	}
}


/*
 *@Author 	Sinker
 *@Date 	2007-6-11
 *@Desc		项目域控制
 */

function lpFieldControl(){
	if (_state =="search"
		|| (lpQueueStart !="REGR" && lpQueueStart !="MATN")){
		applAllFieldSetDisb();
	}
	if (_state =="search"){
		applAllFieldSetDisb();
		clearFieldDisabled("PrintBut");
		clearFiledDisplay("PrintBut");
	}
}
function clearFiledDisplay(strFiled){
	try{
		input = document.getElementById(strFiled);
		if (input.type =="select-one" || input.type=="checkbox"){
			input.style.display="";
			input.className="input_on";
		}else if(input.type=="button"){
			input.style.display="";
			input.className="btn";
		}
		else{
			input.style.display="";
			input.className="input_on";
		}
	}catch(e)
	{}
}
/*
 *@Author 	dengyan
 *@Date 	2010-1-29
 *@Desc		资产保全域控制
 */
function gastFieldControl(strMAINT_STS){
	if (strMAINT_STS=="ARAP"||strMAINT_STS=="ODAP"||strMAINT_STS=="WDAP"||strMAINT_STS=="DDAP"
		||strMAINT_STS=="DTAP"||strMAINT_STS=="LIAP"||strMAINT_STS=="WDPC"||strMAINT_STS=="DDPC"||strMAINT_STS=="DTPC"
		||strMAINT_STS=="ZHLIPC"||strMAINT_STS=="ZHLIAP"||strMAINT_STS=="LIPC"
		||strMAINT_STS=="ZHARPC"||strMAINT_STS=="ZHARAP"||strMAINT_STS=="ARPC"
		||strMAINT_STS=="ZHODPC"||strMAINT_STS=="ZHODAP"||strMAINT_STS=="ODPC"){
		applAllFieldSetDisb();
	}
}

//????
function isMonth(ch)
{
	if (ch > '0' && ch <= '12')
		return true;
	else
		return false;
}




/* 作者：	    sinker
 * 创建日期： 2007-07-20 10:36：21
 * 参数说明： input 为jsp页面的表单域对象
 *          doname 为DO名称，即对应数据库表的DBA对象
 *                 上目前只提供日期（不包含时间）的选择，但传入到DO中必须包含时间，所以对
 *                 日期域对象，stime参数的值为“ 00:00:00”，其它域对象stime参数的值为‘’
 * 描述		页面上每个字段的校验，如果有效则将表单域中有效的值写入对应的DO中，如果值无效，
 *          将输入框的背景变红
 * 
 * 注意：    调用此函数的jsp页面，必须有 _oid ，_button_method ，_path 三个全局变量和一个隐藏域OID
 * _oid              表示记录ID号，即DO中的记录行号
 * _button_method    表示调用ACTION的方法
 * _path             表示 web 根路径
 * 隐藏域OID          表示 当前OID,用于后面confirm统一取值
 * label			 只有在域校验的时候使用，为该字段的lable名称,下拉列表的情况可以不输入该域。
 * filedName		需要onchange 的id名称
 */
function validateInputID(input,doname,stime,label,fieldName){
	_oid=eval("_"+doname+"_oid");
	if (stime != "" && stime ==" 00:00:00"){
		if(input.value != ""){
			if (FormatDateWithSp(input) == false){
				return false;
			}
		}
	}

	var _para = "";
	if(stime != ""){
		if(input.value != ""){
			_para = "&_fieldName=" + fieldName + "&_fieldValue=" + input.value + "" + stime + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
		}else{
			_para = "&_fieldName=" + fieldName + "&_fieldValue=" + input.value + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
		}
	}else
		_para = "&_fieldName=" + fieldName + "&_fieldValue=" + input.value + "&_oid=" + _oid + "&_do=" + doname + "&_attributeID=" + input.id;
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
}
/*
 *????????????validateinput
 *ln 2007-11-29
 */
function toUpperValidateInput(input,doname,stime,label){
	input.value = input.value.toUpperCase();
	validateInput(input,doname,stime,label);
}
/*add by dengyan on 2010-3-10
 */
function joinAjaxValue(url,idName){
//            var url = "<%=path%>/elsLnDl/LnDlGastLitigCaseAction.do?isAjaxRequest=Y&button_method=specialValidate";
	var xmldoc = sendSyncRequest(url);
	var success = xmldoc.getElementsByTagName("success")[0].firstChild.nodeValue;
	if(success=='Yes'){
		var id = document.getElementById(idName);
		id.style.backgroundColor= "#FEEDEF";
		//id.border.color= "#FEEDEF";
		var content = xmldoc.getElementsByTagName("content")[0].firstChild.nodeValue ;
		alert(content);
		return false;
	}else{
		return true;
	}
}

function DifferenceQuantityDate(a,b){
	var d1 = new Date((a.substring(0,4)*1),(a.substring(5,7)*1)-1,(a.substring(8,10)*1));
	var d2 = new Date((b.substring(0,4)*1),(b.substring(5,7)*1)-1,(b.substring(8,10)*1));
	return ((d2-d1)/(24*3600000));
}

/* 
 * Description: 校验手机号码
 * Pram       : 手机号码
 * Author     : Zlin
 * Date       : Aug 10,2015
 */
function chkPhoneNo(obj){
	var phoneNo = obj.value;
	if(phoneNo.trim()!="") {
		//var reg = /^1[3|4|5|7|8]\d{9}$/;
		var reg = /\d{11}$/;
		if(!(reg.test(phoneNo))) {
			alert("手机号码不符合规则，请重新填写或者修改手机号码!");
			obj.value="";
			obj.blur();
			obj.focus();
			obj.style.borderColor="red";
			return false;
		}else{
			obj.style.borderColor="";
		}
	}
	return true;
}


//add by zyt  校验不能有中文字符      20180722
function checkChinese(obj){
	var name = obj.value;

	//var filter = /^[0-9A-Za-z.@-_]{1,30}&#36;/;
	var filter = /^[a-zA-Z0-9-_]{0,}$/;
	if(filter.test(name)){
		obj.style.borderColor="";
	}else{
		alert("您输入的格式不正确，不能存在中文！");
		obj.value="";
		obj.blur();
		obj.focus();
		obj.style.borderColor="red";
		return false;
	}
	return true;
}
