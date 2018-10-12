var flagAc = 2; //\u5982\u679C\u5BA2\u6237\u7AEF\u5B89\u88C5\u4E86word\u548Cwps\uFF0C1\u9ED8\u8BA4\u64CD\u4F5C\u7528word,2\u9ED8\u8BA4\u64CD\u4F5C\u7528wps
function rightbackstr(str1,str2){
	  num2=str1.length;
	  for(i=1;str1.indexOf(str2)>-1;i++){
	    num1=str1.indexOf(str2)+str2.length;
	    str1=str1.substring(num1,num2)
	  }
	  return str1;
}

function GetarryValue(str){
 //\u6CE8\u610F\uFF1A\u6CA1\u6709\u8003\u8651\u57DF\u7684\u7C7B\u578B\uFF0C\u5728\u6F14\u793A\u540E\u5B8C\u5584
	if(str != ""){
		var newarry=str.split("&&&");
		var templength=newarry.length;
		var tempstr=eval('window.document.forms[0].'+newarry[0]+'.value;');
		for(var i = 1;i<newarry.length;i++){
			if(eval('window.document.forms[0].'+newarry[i]+'.value;')!="NaN"){
				tempstr=tempstr+"&&&"+eval('window.document.forms[0].'+newarry[i]+'.value;');
			}else{
				tempstr=tempstr+"&&&"+"";
			}
		}
	}else{
		tempstr = "";
	}
	return tempstr;
}

//\u5224\u65AD\u662F\u5426\u5B89\u88C5Microsoft Office Word\uFF0CTrue\u8868\u793A\u5DF2\u5B89\u88C5****20130401
function hasWord(){
	var obj = new ActiveXObject("OfficeEditor.Util");
	var bool = obj.HasWordSoft();
	return bool;
}
 
//\u5224\u65AD\u662F\u5426\u5B89\u88C5WPS Office\uFF0CTrue\u8868\u793A\u5DF2\u5B89\u88C5****20130401
function hasWps(){
	var obj = new ActiveXObject("OfficeEditor.Util");
	var bool = obj.HasWpsSoft();
	return bool;
} 

//\u6839\u636E\u6587\u4EF6\u683C\u5F0F\u83B7\u53D6\u516C\u6587\u7F16\u8F91\u5BF9\u8C61****20110820
function GetEditObject(ExtName)
{
	var myWord;
	if(ExtName == ".doc" )
	{
 		myWord = new ActiveXObject("RedEditor.RedDocument");
	}
	else if(ExtName == ".wps")
	{
 		myWord = new ActiveXObject("RedWpsEditor.RedWpsDocument");
 		myWord.showProgress = false;
	}
	return myWord;
}

//****\u5224\u65AD\u8D77\u8349\u6587\u4EF6\u7528word\u8FD8\u662Fwps****20161021
function DraftDocument(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){	
		if(flagWord){
			DraftDocumentWord();
		}else if(flagWPS){
			DraftDocumentWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			DraftDocumentWPS();
		}else if(flagWord){	
			DraftDocumentWord();
		}
	}
}	 

//****word\u8D77\u8349\u6B63\u6587****
function DraftDocumentWord(){
	CheckDanger(true);  //\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var Tempid=window.document.forms[0].UNID.value;
  	var tmpName = Tempid+"dg.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject = Tempid+"&&&zwdg";
  	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  		myWord.Proxy = TempiP;
  		myWord.PortNumber = 25;
  		myWord.address=TempAdr;
  		myWord.IsMulti=true;
  		myWord.sUploadStyle="http";
  		myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwdg";
  		myWord.TrackRevision=true;
  		myWord.RunDoc("",tmpusername,"office","",tmpName); 
  		if(myWord.IsSaved){
  			window.document.all.submitit.click();	
  		}else{
  			myWord=null;
  			CheckDanger(false);
  		}	
}

//****WPS\u8D77\u8349\u6B63\u6587****20161021
function DraftDocumentWPS(){
	CheckDanger(true);  //\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var Tempid=window.document.forms[0].UNID.value;
  	var tmpName = Tempid+"dg.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
	myWord = new ActiveXObject("RedEditor.RedDocument");
	myWord.Subject = Tempid+"&&&zwdg";
	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  		myWord.Proxy = TempiP;
  		myWord.PortNumber = 25;
  		myWord.address=TempAdr;
  		myWord.IsMulti=true;
  		myWord.sUploadStyle="http";
  		myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwdg";
  		myWord.TrackRevision=true; 
  		myWord.RunDoc("",tmpusername,"wps","",tmpName); 
  		if(myWord.IsSaved){
  			window.document.all.submitit.click();	
  		}else{
  			myWord=null;
  			CheckDanger(false);
  		}
}

//****\u5224\u65AD\u4FEE\u6539\u6B63\u6587\u662F\u7528word\u8FD8\u662FWPS****20161021
function ModifyDocument(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			ModifyDocumentWord();
		}else if(flagWPS){
			ModifyDocumentWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			ModifyDocumentWPS();
		}else if(flagWord){	
			ModifyDocumentWord();
		}
	}
}

//****Word\u4FEE\u6539\u6B63\u6587****
function ModifyDocumentWord(){
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"dg.doc";
  	var tmpName = Tempid+"dg.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
 	myWord.Subject =Tempid+"&&&zwdg";
  	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  		myWord.Proxy = TempiP;
  		myWord.PortNumber = 25;
  		myWord.address=TempAdr;
  		myWord.IsMulti=true; 
  		myWord.sUploadStyle="http";
  		myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwdg";
  		myWord.TrackRevision=true;
  		myWord.MailUser="MailUser";
  		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","");
  		if(myWord.IsSaved){
  			window.document.all.submitit.click();
  		}else{
  			window.document.all.unlock.click();
  		}
  		window.focus();
}

//****WPS\u4FEE\u6539\u6B63\u6587****
function ModifyDocumentWPS(){
	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"dg.doc";
  	var tmpName = Tempid+"dg.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
 	myWord.Subject =Tempid+"&&&zwdg";
  	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  		myWord.Proxy = TempiP;
  		myWord.PortNumber = 25;
  		myWord.address=TempAdr;
  		myWord.IsMulti=true; 
  		myWord.sUploadStyle="http";
  		myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwdg";
  		myWord.TrackRevision=true;
  		myWord.MailUser="MailUser";
  		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","");
  		if(myWord.IsSaved){
  			window.document.all.submitit.click();
  		}else{
  			window.document.all.unlock.click();
  		}
  		window.focus();
}	

//****\u5224\u65AD\u6B63\u6587\u6392\u7248\u7528word\u8FD8\u662FWPS****
function ArrangeDocument(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			ArrangeDocumentWord();
		}else if(flagWPS){
			ArrangeDocumentWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			ArrangeDocumentWPS();
		}else if(flagWord){	
			ArrangeDocumentWord();
		}
	}
}	

//****word\u6B63\u6587\u6392\u7248****
function ArrangeDocumentWord(){
  	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	//\u6A21\u677F\u7684URL
  	var tempdoctemplateURL=window.document.forms[0].sDocTemplateURL.value;
  	if(tempdoctemplateURL==""){
		window.alert("\u8FD8\u6CA1\u6709\u767B\u8BB0\u6587\u53F7\uFF0C\u8BF7\u5728\u6392\u7248\u524D\u767B\u8BB0\u6587\u53F7");
       	CheckDanger(false);   //add by yangxq,\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
       	return;    
	}
  	var fileds=window.document.forms[0].sDocTemplateFields.value;
  	window.document.all.TAllAttachFileName.value = getallattachname("gw");
  	
  	var str=GetarryValue(fileds);
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var draft=window.document.forms[0].TIsDrafted.value;
  	var wordattach=window.document.forms[0].TIsWordAttach.value;
  	//\u5E95\u7A3F\u7684URL 
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"dg.doc";
  	var tmpfjurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"fj.doc";
  	//\u516C\u6587\u7684\u540D\u79F0
  	var tmpName = Tempid+"gw.doc"; 
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject = Tempid+"&&&zwnr";
  	myWord.ConfigXml="http://"+TempHref+"/Confignow.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Confignow1.xml";
		myWord.Proxy = TempiP;
		myWord.PortNumber = 25;
		myWord.address=TempAdr;
		myWord.FlagChr="&&&";
		myWord.SetFlags(fileds,str);
		myWord.MailUser="MailUser";
		myWord.sUploadStyle="http";
		//\u5148\u5224\u65AD\u662F\u5426\u6709\u6B63\u6587\u6216\u9644\u4EF6\uFF0C\u7136\u540E\u8C03\u7528\u63A7\u4EF6 >>>>>>>>>>  
		if(draft=="" & wordattach==""){
			myWord.SetInsertFiles("Nothing","");
		}
		if(draft!="" & wordattach==""){ 
			myWord.SetInsertFiles("zw&&& ","http://"+TempHref+tmpurl + "&&&");     
		}
		if(draft=="" & wordattach!=""){ 
			myWord.SetInsertFiles("fjnr&&& ","http://"+TempHref + tmpfjurl + "&&&");     
		}
		if(draft!="" & wordattach!=""){
			myWord.SetInsertFiles("zw&&&fjnr&&& ","http://"+TempHref+tmpurl + "&&&" + "http://"+TempHref + tmpfjurl + "&&&");
		}   
		//<<<<<<<<<<
		myWord.IsMulti=true; 
		myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr"; 
		//myWord.RunDoc(tempdoctemplateURL,window.document.forms[0].TCname.value,"",tmpName);
		myWord.RunDoc(tempdoctemplateURL,window.document.forms[0].TCname.value,"office","",tmpName);
		
		if(myWord.IsSaved){
			if(window.idtypeset)
				window.idtypeset.style.display="none"; 
    			window.document.all.submitit.click();
			}else{
				myWord=null;
				CheckDanger(false);
		}
		window.focus()
}

//****WPS\u6B63\u6587\u6392\u7248****
function ArrangeDocumentWPS(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	//\u6A21\u677F\u7684URL
  	var tempdoctemplateURL=window.document.forms[0].sDocTemplateURL.value;
  	if(tempdoctemplateURL==""){
		window.alert("\u8FD8\u6CA1\u6709\u767B\u8BB0\u6587\u53F7\uFF0C\u8BF7\u5728\u6392\u7248\u524D\u767B\u8BB0\u6587\u53F7");
       	CheckDanger(false);   //add by yangxq,\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
       	return;    
	}
  	var fileds=window.document.forms[0].sDocTemplateFields.value;
  	window.document.all.TAllAttachFileName.value = getallattachname("gw");
  	
  	var str=GetarryValue(fileds);
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var draft=window.document.forms[0].TIsDrafted.value;
  	var wordattach=window.document.forms[0].TIsWordAttach.value;
  	//\u5E95\u7A3F\u7684URL 
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"dg.doc";
  	var tmpfjurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"fj.doc";
  	//\u516C\u6587\u7684\u540D\u79F0
  	var tmpName = Tempid+"gw.doc"; 
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject = Tempid+"&&&zwnr";
  	myWord.ConfigXml="http://"+TempHref+"/Confignow.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Confignow1.xml";
		myWord.Proxy = TempiP;
		myWord.PortNumber = 25;
		myWord.address=TempAdr;
		myWord.FlagChr="&&&";
		myWord.SetFlags(fileds,str);
		myWord.MailUser="MailUser";
		myWord.sUploadStyle="http";
		//\u5148\u5224\u65AD\u662F\u5426\u6709\u6B63\u6587\u6216\u9644\u4EF6\uFF0C\u7136\u540E\u8C03\u7528\u63A7\u4EF6 >>>>>>>>>>  
		if(draft=="" & wordattach==""){
			myWord.SetInsertFiles("Nothing","");
		}
		if(draft!="" & wordattach==""){ 
			myWord.SetInsertFiles("zw&&& ","http://"+TempHref+tmpurl + "&&&");     
		}
		if(draft=="" & wordattach!=""){ 
			myWord.SetInsertFiles("fjnr&&& ","http://"+TempHref + tmpfjurl + "&&&");     
		}
		if(draft!="" & wordattach!=""){
			myWord.SetInsertFiles("zw&&&fjnr&&& ","http://"+TempHref+tmpurl + "&&&" + "http://"+TempHref + tmpfjurl + "&&&");
		}   
		//<<<<<<<<<<
		myWord.IsMulti=true; 
		myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr"; 
		myWord.RunDoc(tempdoctemplateURL,window.document.forms[0].TCname.value,"wps","",tmpName);
		
		if(myWord.IsSaved){
			if(window.idtypeset)
				window.idtypeset.style.display="none"; 
    			window.document.all.submitit.click();
			}else{
				myWord=null;
				CheckDanger(false);
		}
		window.focus()
}

//****\u5224\u65AD\u6821\u6838\u516C\u6587\u7528word\u8FD8\u662Fwps****
function CheckDocument(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			CheckDocumentWord();
		}else if(flagWPS){
			CheckDocumentWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			CheckDocumentWPS();
		}else if(flagWord){	
			CheckDocumentWord();
		}
	}
}
//****word\u6821\u6838\u516C\u6587\u5E76\u6DFB\u52A0\u5370\u53D1\u65E5\u671F****
function CheckDocumentWord(){
  	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+Tempid+"gw.doc";
  	var tmpName = Tempid+"gw.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord; 
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject =Tempid+"&&&zwnr";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigPrint.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigPrint1.xml";
  		myWord.Proxy = TempiP;
  		myWord.PortNumber = 25;
  		myWord.address=TempAdr;
  		myWord.MailUser="MailUser";
  		myWord.IsMulti=true;
  		if(window.document.all.DPrintDate){
  			var fileds="TPrinty&&&TPrintm&&&TPrintd&&&TPrintyBG&&&TPrintmBG&&&TPrintdBG";
  			var fileds="Author";//\u53BB\u6389\u91CD\u5199\u5370\u53D1\u65E5\u671F
  			var str=GetarryValue(fileds);	//\u53D6\u5F97\u7B2C\u4E8C\u6B21\u6392\u7248\u65F6\u5BF9\u5E94\u7684\u57DF\u503C
  			if(window.document.all.DPrintDate.value!=""){
  				myWord.ChangeContent=false;			//\u662F\u5426\u8FDB\u884C\u4E8C\u6B21\u6392\u7248 true-\u662F \u9ED8\u8BA4\u4E3AFalse
  				myWord.FlagChr="&&&";
  				myWord.SetFlags(fileds,str); 
  				myWord.sUploadStyle="http";
  				myWord.SetInsertFiles("Nothing","http://"+TempHref+tmpurl + "&&&"); //\u6DFB\u52A0\u8FD9\u4E00\u884C\uFF0C\u76EE\u7684\u5C31\u662F\u5728\u65E0\u5E95\u7A3F\u548C\u9644\u4EF6\u7684\u65F6\u5019\u6392\u7248\uFF0C\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E0A\u3002
  				myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr";
  				myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","",tmpName,2);
  				if(myWord.IsSaved){
  					window.document.all.submitit.click();
  				}else{
  					myWord=null;
  					CheckDanger(false);
  				}
  				window.focus()
  			}else{
  				myWord.sUploadStyle="http";
  				myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr";
  				myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","",tmpName,2);
  				if(myWord.IsSaved){
  					window.document.all.submitit.click();
  				}else{
  					myWord=null;
  					CheckDanger(false);
  				}
  			}
  		}else{
  			myWord.sUploadStyle="http";
  			myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr";
  			myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","",tmpName,2);
  			if(myWord.IsSaved){
  				window.document.all.submitit.click();
  			}else{
  				myWord=null;
  				CheckDanger(false);
  			}
  		}
  		window.focus()
}

//****WPS\u6821\u6838\u516C\u6587\u5E76\u6DFB\u52A0\u5370\u53D1\u65E5\u671F****
function CheckDocumentWPS(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+Tempid+"gw.doc";
  	var tmpName = Tempid+"gw.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord; 
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject =Tempid+"&&&zwnr";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigPrint.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigPrint1.xml";
  		myWord.Proxy = TempiP;
  		myWord.PortNumber = 25;
  		myWord.address=TempAdr;
  		myWord.MailUser="MailUser";
  		myWord.IsMulti=true;
  		if(window.document.all.DPrintDate){
  			var fileds="TPrinty&&&TPrintm&&&TPrintd&&&TPrintyBG&&&TPrintmBG&&&TPrintdBG";
  			var fileds="Author";//\u53BB\u6389\u91CD\u5199\u5370\u53D1\u65E5\u671F
  			var str=GetarryValue(fileds);	//\u53D6\u5F97\u7B2C\u4E8C\u6B21\u6392\u7248\u65F6\u5BF9\u5E94\u7684\u57DF\u503C
  			if(window.document.all.DPrintDate.value!=""){
  				myWord.ChangeContent=false;			//\u662F\u5426\u8FDB\u884C\u4E8C\u6B21\u6392\u7248 true-\u662F \u9ED8\u8BA4\u4E3AFalse
  				myWord.FlagChr="&&&";
  				myWord.SetFlags(fileds,str); 
  				myWord.sUploadStyle="http";
  				myWord.SetInsertFiles("Nothing","http://"+TempHref+tmpurl + "&&&"); //\u6DFB\u52A0\u8FD9\u4E00\u884C\uFF0C\u76EE\u7684\u5C31\u662F\u5728\u65E0\u5E95\u7A3F\u548C\u9644\u4EF6\u7684\u65F6\u5019\u6392\u7248\uFF0C\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E0A\u3002
  				myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr";
  				myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","",tmpName,2);
  				if(myWord.IsSaved){
  					window.document.all.submitit.click();
  				}else{
  					myWord=null;
  					CheckDanger(false);
  				}
  				window.focus()
  			}else{
  				myWord.sUploadStyle="http";
  				myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr";
  				myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","",tmpName,2);
  				if(myWord.IsSaved){
  					window.document.all.submitit.click();
  				}else{
  					myWord=null;
  					CheckDanger(false);
  				}
  			}
  		}else{
  			myWord.sUploadStyle="http";
  			myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr";
  			myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","",tmpName,2);
  			if(myWord.IsSaved){
  				window.document.all.submitit.click();
  			}else{
  				myWord=null;
  				CheckDanger(false);
  			}
  		}
  		window.focus()
}
//****\u4E8C\u6B21\u6392\u7248****
function SecondArragement(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
	var TempiP=window.document.forms[0].Server_Name.value;
	var TempPort=window.document.forms[0].Server_Port.value;
	var TempHref=TempiP+":"+TempPort;
	var pathname = (window.location.pathname);
	var Tempid=window.document.forms[0].UNID.value;
	var TempAdr=window.document.forms[0].UploadAdr.value;
	var tmpName = Tempid+"gw.doc";
	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+Tempid+"gw.doc";
	var fileds="TPrinty&&&TPrintm&&&TPrintd&&&TPrintyBG&&&TPrintmBG&&&TPrintdBG";
	//\u9648\u5316\u4E2D070828
	window.document.all.TAllAttachFileName.value = getallattachname("gw");
	var str=GetarryValue(fileds);	//\u53D6\u5F97\u7B2C\u4E8C\u6B21\u6392\u7248\u65F6\u5BF9\u5E94\u7684\u57DF\u503C
	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject = Tempid+"&&&zwnr";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigPrint.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigPrint1.xml";
  		myWord.Proxy = TempiP;
  		myWord.PortNumber = 25;
  		myWord.address=TempAdr;
  		myWord.FlagChr="&&&";
  		myWord.SetFlags(fileds,str); 
  		myWord.SetInsertFiles("Nothing","http://"+TempHref+tmpurl + "&&&"); //\u6DFB\u52A0\u8FD9\u4E00\u884C\uFF0C\u76EE\u7684\u5C31\u662F\u5728\u65E0\u5E95\u7A3F\u548C\u9644\u4EF6\u7684\u65F6\u5019\u6392\u7248\uFF0C\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E0A\u3002   
  		myWord.MailUser="MailUser";//\u8FD9\u91CC\u662F\u7ED9\u6587\u4EF6\u4E0B\u8F7D\u65F6\u7684\u7528\u6237\u540D\u8D4B\u503C\uFF0C\u5982\u679C\u662F\u201C\u201D\u503C\uFF0C\u4EE3\u8868\u4E0B\u8F7D\u7528\u6237\u201CMailUser\u201D
  		myWord.IsMulti=true; 
  		myWord.sUploadStyle="http";
  		myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr";
  		//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"",tmpName,2); 
  		myWord.TrackRevision=true;
  		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","",tmpName,2);
  	if(myWord.IsSaved){
   		window.document.all.submitit.click();
  	}else{
   		myWord=null;
   		CheckDanger(false);
   	}
   	window.focus()
}

//****\u5224\u65AD\u6253\u5370\u516C\u6587\u7528word\u8FD8\u662FWPS****
function PrintDocument(){
	var flagWord = hasWord();
	var flagWPS = hasWps();

	if(flagAc==1){
		if(flagWord){
			PrintDocumentWord();
		}else if(flagWPS){
			PrintDocumentWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			PrintDocumentWPS();
		}else if(flagWord){	
			PrintDocumentWord();
		}
	}
}

//****word\u6253\u5370\u516C\u6587****
function PrintDocumentWord(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5176\u5B83\u6309\u94AE
	var pathname = (window.location.pathname);
	var Tempid=window.document.forms[0].UNID.value;
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
	var tmpName;															//\u4F20\u9605\u540E\u4E5F\u9700\u8981\u6253\u5370\u516C\u6587091215
	if(window.document.forms[0].IsInSendDoc.value=="1")
		tmpName = window.document.forms[0].SendDocID.value+"gw.doc";
	else
		tmpName = Tempid+"gw.doc";
	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigPrint.xml";
		//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigPrint1.xml";
	
  	//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"bb","",3);
	myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","bb","",3);
  	myWord=null;
  	CheckDanger(false);
}

//****WPS\u6253\u5370\u516C\u6587****
function PrintDocumentWPS(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5176\u5B83\u6309\u94AE
	var pathname = (window.location.pathname);
	var Tempid=window.document.forms[0].UNID.value;
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
	var tmpName;															//\u4F20\u9605\u540E\u4E5F\u9700\u8981\u6253\u5370\u516C\u6587091215
	if(window.document.forms[0].IsInSendDoc.value=="1")
		tmpName = window.document.forms[0].SendDocID.value+"gw.doc";
	else
		tmpName = Tempid+"gw.doc";
	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigPrint.xml";
		//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigPrint1.xml";
	
	myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","bb","",3,true);
  	myWord=null;
  	CheckDanger(false);
	

}
//****\u5224\u65AD\u67E5\u770B\u5E95\u7A3F\u7528word\u8FD8\u662Fwps****
function ViewDraftDoc(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			ViewDraftDocWord();
		}else if(flagWPS){
			ViewDraftDocWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			ViewDraftDocWPS();
		}else if(flagWord){	
			ViewDraftDocWord();
		}
	}
}

//****word\u67E5\u770B\u5E95\u7A3F****
function ViewDraftDocWord(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
	var pathname = (window.location.pathname);
	var Tempid = window.document.forms[0].UNID.value;
	var tmpName;
  	if(window.document.forms[0].IsInSendDoc.value=="1")
     	tmpName = window.document.forms[0].SendDocID.value+"dg.doc";
  	else tmpName = Tempid+"dg.doc";
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.IsMulti=true;
    myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigNozw.xml";
	//091231 \u6839\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigNozw1.xml";
  		//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"bb","\u6B63\u6587\u5E95\u7A3F",3,true);
		myWord.TrackRevision=true;
		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","bb","\u6B63\u6587\u5E95\u7A3F",3,true);
		myWord=null;
		CheckDanger(false);
}

//****wps\u67E5\u770B\u5E95\u7A3F****
function ViewDraftDocWPS(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
	var pathname = (window.location.pathname);
	var Tempid = window.document.forms[0].UNID.value;
	var tmpName;
  	if(window.document.forms[0].IsInSendDoc.value=="1")
     	tmpName = window.document.forms[0].SendDocID.value+"dg.doc";
  	else tmpName = Tempid+"dg.doc";
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.IsMulti=true;
    myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigNozw.xml";
	//091231 \u6839\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigNozw1.xml";
		myWord.TrackRevision=true;
		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","bb","\u6B63\u6587\u5E95\u7A3F",3,true);
		myWord=null;
		CheckDanger(false);
}

//****\u5224\u65AD\u67E5\u770B\u516C\u6587\u7528word\u8FD8\u662Fwps****
function ViewDocument(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			ViewDocumentWord();
		}else if(flagWPS){
			ViewDocumentWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			ViewDocumentWPS();
		}else if(flagWord){	
			ViewDocumentWord();
		}
	}  
}

//****word\u67E5\u770B\u516C\u6587****
function ViewDocumentWord(){
  	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid = window.document.forms[0].UNID.value;
  	var tmpName;
  	if(window.document.forms[0].IsInSendDoc.value=="1")
     	tmpName = window.document.forms[0].SendDocID.value+"gw.doc";
  	else tmpName = Tempid+"gw.doc";
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigNozw.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigNozw1.xml";
  		//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"bb","\u516C\u6587\u5185\u5BB9",3,true);
		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","bb","\u516C\u6587\u5185\u5BB9",3,true);
  		myWord=null;
  		CheckDanger(false);
}

//****wps\u67E5\u770B\u516C\u6587****
function ViewDocumentWPS(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid = window.document.forms[0].UNID.value;
  	var tmpName;
  	if(window.document.forms[0].IsInSendDoc.value=="1")
     	tmpName = window.document.forms[0].SendDocID.value+"gw.doc";
  	else tmpName = Tempid+"gw.doc";
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigNozw.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigNozw1.xml";
  		//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"bb","\u516C\u6587\u5185\u5BB9",3,true);
		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","bb","\u516C\u6587\u5185\u5BB9",3,true);
  		myWord=null;
  		CheckDanger(false);
}

//****\u5224\u65AD\u6253\u5370\u529E\u6587\u5355\u7528word\u8FD8\u662Fwps****
function PrintWorkForm(){
  	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			PrintWorkFormWord();
		}else if(flagWPS){
			PrintWorkFormWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){	
			PrintWorkFormWPS();
		}else if(flagWord){	
			PrintWorkFormWord();
		}
	}
}

//****\u6253\u5370\u529E\u6587\u5355\uFF08\u624B\u5199\u7B7E\u540D\uFF09****
function PrintWorkForm11(){
  CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  //\u6A21\u677F\u7684URL
  var tempdoctemplateURL=window.document.forms[0].sManuTemplateURL.value;
  if(tempdoctemplateURL=="")
  {
     window.alert("\u8FD8\u6CA1\u6709\u767B\u8BB0\u6587\u53F7\uFF0C\u8BF7\u5728\u6392\u7248\u524D\u767B\u8BB0\u6587\u53F7");
     CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
     return;       
  }
  var fileds=window.document.forms[0].sManuTemplateFields.value; 
  var allfields=window.document.forms[0].sManuTemplateFields.value;  
  //\u8BFB\u53D6\u7B7E\u540D\u7684\u76F8\u5173\u4FE1\u606F 
  v_signfieldlist = window.document.forms[0].TAllSSign.value.split(", ");
  v_signerlist = window.document.forms[0].TAllSSigner.value.split(", ");
  v_signcnlist = window.document.forms[0].TAllSSignerCN.value.split(", ");
  //\u8BA1\u7B97\u7528\u6237\u5168\u540D\u6570\u7EC4 by chky  
  var usernamelist = new Array(userlist.length);
  for(i=0;i<userlist.length;i++)
  {
     var b_Flag = false;
     for(j=0;j<v_signfieldlist.length;j++)
     {
     	if ((fobjlist[i] == v_signfieldlist[j]) & (userlist[i] == v_signcnlist[j]))
     	{
     	   usernamelist[i] = v_signerlist[j];
     	  
           b_Flag = true;
     	   break;
     	}             
     }
     if (!b_Flag)
     {
         usernamelist[i] = "";
     }
  }        
                                                                                                                                                                                                                               
  //\u8FC7\u6EE4\u610F\u89C1\u5217  by chky  
  for(i=0;i<fobjlist.length;i++)
  {
     fileds = fileds.replace(fobjlist[i] + "&&&","");  
     fileds = fileds.replace("&&&" + fobjlist[i],"");
  }
  
  window.document.all.TAllAttachFileName.value = getallattachname("");
  var str=GetarryValue(fileds);  
  var v_bookmarkname = fileds.split("&&&");
  var v_bookmarkvalue = str.split("&&&");
  var pathname = (window.location.pathname);
  var Tempid=window.document.forms[0].UNID.value;	

  //\u516C\u6587\u7684\u540D\u79F0
  var TempiP=window.document.forms[0].Server_Name.value;
  var TempPort=window.document.forms[0].Server_Port.value;
  var TempHref=TempiP+":"+TempPort;
  var TempAdr=window.document.forms[0].UploadAdr.value;
  var tempurl="0/" + Tempid + "/$file";
 
  //\u8BA1\u7B97\u624B\u7B7E\u540D\u6587\u4EF6\u5730\u5740
  var v_userstr= new Array(userlist.length);  
  var v_picname = new Array(userlist.length);
  for(i=0;i<userlist.length;i++)
  {
     var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
     v_picname[i] = trim(usernamelist[i]) + ".jpg";
     v_userstr[i]=cururl+"/"+trim(usernamelist[i])+".sgn";
     
  }
 
 var oFileManager = new ActiveXObject("ResoftApp.FileManager");
 var oTransfer = new ActiveXObject("ResoftApp.Transfer");
 var oWord;
 var ComObj = new ActiveXObject('ShellStart.ComStart');
 var o_sign = new ActiveXObject("SignUtils.Signer");
 var temppath=oFileManager.GetDirectory(2);
    
var strFilename = tempdoctemplateURL.substring(tempdoctemplateURL.lastIndexOf("/")+1,tempdoctemplateURL.length);
if(oFileManager.ExistPath(temppath + "\\"+strFilename))
{
	oFileManager.DeleteFile(temppath + "\\"+strFilename);
}
oTransfer.DownLoadToPathEx(tempdoctemplateURL, temppath + "\\",strFilename,"MailUser");
oWord = ComObj.Start('Word.Application');	
var oDocument = oWord.Documents.Add(temppath+"\\"+strFilename,false,0);
for(i=0;i<v_bookmarkname.length;i++)
{
   if(v_bookmarkvalue[i] != "")
   {
       oDocument.Bookmarks(v_bookmarkname[i]).Range.Text = v_bookmarkvalue[i];
   }

}

for(i=fobjlist.length - 1;i>=0;i--)
{
if (allfields.indexOf(fobjlist[i])>-1)
{
	oDocument.Bookmarks(fobjlist[i]).Range.Text = commdate[i] + "\n";
        if (usernamelist[i] != "")
        {
	   if(oFileManager.ExistPath(temppath + "\\"+v_picname[i]))
	   {
		oFileManager.DeleteFile(temppath + "\\"+v_picname[i]);
	    }

         o_sign.UserId="MailUser";
		var Tempid1;
		if(window.document.forms[0].IsInSendDoc.value=="1")
			Tempid1 = window.document.forms[0].SendDocID.value;
		else
			Tempid1 = window.document.forms[0].UNID.value;
	    o_sign.SaveToImage(v_userstr[i],Tempid1,"ADwdSWETdffSES93DWD.WsTP[ps.",temppath + "\\"+v_picname[i]);
         

	    oDocument.Bookmarks(fobjlist[i]).Range.Text = "\n";
	    oDocument.Bookmarks(fobjlist[i]).Range.InlineShapes.AddPicture(temppath + "\\"+v_picname[i],0,1);
         }
         else
         {
            oDocument.Bookmarks(fobjlist[i]).Range.Text = "\n";
            oDocument.Bookmarks(fobjlist[i]).Range.Text = userlist[i];

          }
	oDocument.Bookmarks(fobjlist[i]).Range.Text = "\n";
    oDocument.Bookmarks(fobjlist[i]).Range.Text = commbody[i];

}
}

oWord.Visible = true;

oDocument=null;
oWord=null;
oTransfer=null;
oFileManager=null;
  CheckDanger(false)
}

//****word\u6253\u5370\u529E\u6587\u5355****
function PrintWorkFormWord(){
	
	
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	//\u6A21\u677F\u7684URL
  	var tempdoctemplateURL=window.document.forms[0].sManuTemplateURL.value;
  	if(tempdoctemplateURL==""){
     	window.alert("\u8FD8\u6CA1\u6709\u767B\u8BB0\u6587\u53F7\uFF0C\u8BF7\u5728\u6392\u7248\u524D\u767B\u8BB0\u6587\u53F7");
     	CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
     	return;       
     }
  	var fileds = window.document.forms[0].sManuTemplateFields.value;
  	
  //*************************begin********************************
    var objcomm= window.document.forms[0].TAllSSign.value.split(", ");
    //\u53BB\u6389\u91CD\u590D\u57DF
    var objcomms = uniqueArray(objcomm);
    var objfield = fileds.split("&&&");
    var strfields = "";
	var signurllist = document.all.signurl.value.split(", ");
    //\u53BB\u6389\u7B7E\u540D\u610F\u89C1\u57DF
	//del by dyc on 20161216
	if(window.document.forms[0].ProName.value=="\u4E1A\u52A1\u9700\u6C42\u7533\u8BF7")
	{
		if(window.document.forms[0].TComm9Rtf.value!=""){
           if(window.document.forms[0].TAllSSign.value!=""){
               for(var j=0;j<objcomms.length;j++){
  		        fileds = fileds.replace(objcomms[j]+"&&&","");
               }
       }
      }
	}
   
    var str=GetarryValue(fileds);
    var comm = GetarryValue(objcomms.join("&&&"));
    var strcomm = comm.replace(/\r\n\r\n/g,"&&&");
    var comms = strcomm.split("&&&");
    var finalcomms = "";
    var temp="";

    // \u91CD\u65B0\u6392\u5E8F
    for(var i=0;i<=comms.length-1;i++){
      for(var j=comms.length-1;j>i;j--){
        var comm1 = reverdate(comms[j]);
        var comm2 = reverdate(comms[j-1]);
        if(comm1<comm2){
            temp = comms[j];
            comms[j]=comms[j-1];
            comms[j-1]=temp;
            }
         }
     }
    for(var n=0;n<comms.length;n++){
  	  if(finalcomms=="") finalcomms = comms[n];
  	  else {
  	  	if (comms[n]!="")
  	  		finalcomms = comms[n]+"&&&"+finalcomms;
  	  }
    }
    finalcomms=finalcomms.replace(/\r\n/g, "");
    //finalcomms = finalcomms.substring(3)
  //************************end******************************* 
  	//alert ("fileds="+fileds);
  	//start--fy20111012--\u5982\u679Cnotes\u914D\u7F6E\u529E\u6587\u5355\u4FE1\u62A5
  	if(fileds==null||fileds==""){
  		alert("\u672A\u914D\u7F6E\u529E\u6587\u5355\u4FE1\u606F\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\uFF01");
  		return;
  	}
  
  	//end--fy20111012
  	window.document.all.TAllAttachFileName.value = getallattachname("");
  	var str=GetarryValue(fileds);
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var draft=window.document.forms[0].TIsDrafted.value;
  	var wordattach=window.document.forms[0].TIsWordAttach.value;
  	//\u5E95\u7A3F\u7684URL
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"dg.doc";
  	var tmpfjurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"fj.doc";
  	//\u516C\u6587\u7684\u540D\u79F0
  	var tmpName = Tempid+"gw.doc";  
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "/$file";
  	var objstr="";
  	var userstr="";
    var signtype = "";
    var signdate = "";
 
  	objlist= window.document.forms[0].TAllSSign.value.split(", ");
  	userlist = window.document.forms[0].TAllSSigner.value.split(", ");

  	for(i=0;i<userlist.length;i++){
  		//20141229 by futt
  		//if(userstr.indexOf(signurllist[i].substring(0,(signurllist[i].toLowerCase().lastIndexOf('.jpg')+4)))>-1){
  		//}else{
	  		if(signtype==""){
	  			signtype = "true";
	  		}else{
	  			signtype = signtype + "&&&true";
	  		}
	  		if(signdate==""){
	  			signdate = "&&&";
	  		}else{
	  			signdate = signdate + "&&&";
	  		}
	  		//----end---------
	    	if(objstr==""){
	      		objstr=objlist[i];
	      		//var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
	      		//userstr=cururl+"/"+trim(userlist[i])+".sgn";
	      		userstr = signurllist[i].substring(0,(signurllist[i].toLowerCase().lastIndexOf('.jpg')+4));
	       	}else{
	      		objstr=objlist[i]+"&&&"+objstr;
	      		//var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
	      		//userstr=cururl+"/"+trim(userlist[i])+".sgn&&&"+userstr;   
	      		userstr = signurllist[i].substring(0,(signurllist[i].toLowerCase().lastIndexOf('.jpg')+4))+"&&&"+userstr;
	        }
  		//}
     }
 	var myWord;
 	
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	
  	//myWord.VerifyID =window.document.forms[0].UNID.value;
  	myWord.VerifyID =window.document.forms[0].TSignID.value;
 	myWord.ConfigXml="http://"+TempHref+"/ConfigPrint.xml";
  	myWord.FlagChr="&&&";
  	
  	myWord.SetFlags(fileds,str);
    myWord.SignAdvice = finalcomms; 
 
    myWord.SignDates = signdate; 
    myWord.SignTypes = signtype;
  	myWord.SetInsertImages(objstr,userstr);
  	//\u5148\u5224\u65AD\u662F\u5426\u6709\u6B63\u6587\u6216\u9644\u4EF6\uFF0C\u7136\u540E\u8C03\u7528\u63A7\u4EF6 >>>>>>>>>>
  	if(draft=="" & wordattach==""){
		myWord.SetInsertFiles("Nothing","");
  	}
  	if(draft!="" & wordattach==""){ 
     	myWord.SetInsertFiles("zw&&& ","http://"+TempHref+tmpurl + "&&&");     
  	}
  	if(draft=="" & wordattach!=""){ 
     	myWord.SetInsertFiles("fjnr&&& ","http://"+TempHref + tmpfjurl + "&&&");     
  	}
  	if(draft!="" & wordattach!=""){
    		myWord.SetInsertFiles("zw&&&fjnr&&& ","http://"+TempHref+tmpurl + "&&&" + "http://"+TempHref + tmpfjurl + "&&&");
  	}   
  	//myWord.RunDoc(tempdoctemplateURL,window.document.forms[0].TCname.value,"bb",tmpName);
  	myWord.RunDoc(tempdoctemplateURL,window.document.forms[0].TCname.value,"office","bb",tmpName);
  	myWord=null;
  	CheckDanger(false)
}
function PrintWorkFormWPS(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	//\u6A21\u677F\u7684URL
  	var tempdoctemplateURL=window.document.forms[0].sManuTemplateURL.value;
  	if(tempdoctemplateURL==""){
     	window.alert("\u8FD8\u6CA1\u6709\u767B\u8BB0\u6587\u53F7\uFF0C\u8BF7\u5728\u6392\u7248\u524D\u767B\u8BB0\u6587\u53F7");
     	CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
     	return;       
     }
  	var fileds = window.document.forms[0].sManuTemplateFields.value;
  //*************************begin********************************
    var objcomm= window.document.forms[0].TAllSSign.value.split(", ");
    //\u53BB\u6389\u91CD\u590D\u57DF  
    
    var objcomms = uniqueArray(objcomm);
    var objfield = fileds.split("&&&");
    var strfields = "";
	var signurllist = document.all.signurl.value.split(", ");
    //\u53BB\u6389\u7B7E\u540D\u610F\u89C1\u57DF
	//alert(window.document.forms[0].TComm1Rtf.value)
	 // del by dyc on 20161216
	if(window.document.forms[0].ProName.value=="\u4E1A\u52A1\u9700\u6C42\u7533\u8BF7")
	{
		if(window.document.forms[0].TComm9Rtf.value!=""){
           if(window.document.forms[0].TAllSSign.value!=""){
               for(var j=0;j<objcomms.length;j++){
  		        fileds = fileds.replace(objcomms[j]+"&&&","");
               }
       }
      }
	}
	
   
    var str=GetarryValue(fileds);
    var comm = GetarryValue(objcomms.join("&&&"));
    var strcomm = comm.replace(/\r\n\r\n/g,"&&&");
    var comms = strcomm.split("&&&");
    var finalcomms = "";
    var temp="";

    // \u91CD\u65B0\u6392\u5E8F
    for(var i=0;i<=comms.length-1;i++){
      for(var j=comms.length-1;j>i;j--){
        var comm1 = reverdate(comms[j]);
        var comm2 = reverdate(comms[j-1]);
        if(comm1<comm2){
            temp = comms[j];
            comms[j]=comms[j-1];
            comms[j-1]=temp;
            }
         }
     }
    for(var n=0;n<comms.length;n++){
  	  if(finalcomms=="") finalcomms = comms[n];
  	  else {
  	  	if (comms[n]!="")
  	  		finalcomms = comms[n]+"&&&"+finalcomms;
  	  }
    }
    finalcomms=finalcomms.replace(/\r\n/g, "");
    //alert("1"+finalcomms+"2")
    //finalcomms = finalcomms.substring(3)
  //************************end******************************* 
  	//alert ("fileds="+fileds);
  	//start--fy20111012--\u5982\u679Cnotes\u914D\u7F6E\u529E\u6587\u5355\u4FE1\u62A5
  	if(fileds==null||fileds==""){
  		alert("\u672A\u914D\u7F6E\u529E\u6587\u5355\u4FE1\u606F\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\uFF01");
  		return;
  	}
  
  	//end--fy20111012
  	window.document.all.TAllAttachFileName.value = getallattachname("");
  	var str=GetarryValue(fileds);
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var draft=window.document.forms[0].TIsDrafted.value;
  	var wordattach=window.document.forms[0].TIsWordAttach.value;
  	//\u5E95\u7A3F\u7684URL
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"dg.doc";
  	var tmpfjurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"fj.doc";
  	//\u516C\u6587\u7684\u540D\u79F0
  	var tmpName = Tempid+"gw.doc";  
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "/$file";
  	var objstr="";
  	var userstr="";
    var signtype = "";
    var signdate = "";
 
  	objlist= window.document.forms[0].TAllSSign.value.split(", ");
  	userlist = window.document.forms[0].TAllSSigner.value.split(", ");
  	for(i=0;i<userlist.length;i++){
  		//20141229 by futt
  		//if(userstr.indexOf(signurllist[i].substring(0,(signurllist[i].toLowerCase().lastIndexOf('.jpg')+4)))>-1){
  		//}else{
	  		if(signtype==""){
	  			signtype = "true";
	  		}else{
	  			signtype = signtype + "&&&true";
	  		}
	  		if(signdate==""){
	  			signdate = "&&&";
	  		}else{
	  			signdate = signdate + "&&&";
	  		}
	  		//----end---------
	    	if(objstr==""){
	      		objstr=objlist[i];
	      		//var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
	      		//userstr=cururl+"/"+trim(userlist[i])+".sgn";
	      		userstr = signurllist[i].substring(0,(signurllist[i].toLowerCase().lastIndexOf('.jpg')+4));
	       	}else{
	      		objstr=objlist[i]+"&&&"+objstr;
	      		//var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
	      		//userstr=cururl+"/"+trim(userlist[i])+".sgn&&&"+userstr;   
	      		userstr = signurllist[i].substring(0,(signurllist[i].toLowerCase().lastIndexOf('.jpg')+4))+"&&&"+userstr;
	        }
  		//}
     }
 	var myWord;
 	
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	
  	//myWord.VerifyID =window.document.forms[0].UNID.value;
  	myWord.VerifyID =window.document.forms[0].TSignID.value;
 	myWord.ConfigXml="http://"+TempHref+"/ConfigPrint.xml";
  	myWord.FlagChr="&&&";
  	myWord.SetFlags(fileds,str);
    myWord.SignAdvice = finalcomms;
    myWord.SignDates = signdate; 
    myWord.SignTypes = signtype;
  	myWord.SetInsertImages(objstr,userstr);
  	//\u5148\u5224\u65AD\u662F\u5426\u6709\u6B63\u6587\u6216\u9644\u4EF6\uFF0C\u7136\u540E\u8C03\u7528\u63A7\u4EF6 >>>>>>>>>>
  	if(draft=="" & wordattach==""){
		myWord.SetInsertFiles("Nothing","");
  	}
  	if(draft!="" & wordattach==""){ 
     	myWord.SetInsertFiles("zw&&& ","http://"+TempHref+tmpurl + "&&&");     
  	}
  	if(draft=="" & wordattach!=""){ 
     	myWord.SetInsertFiles("fjnr&&& ","http://"+TempHref + tmpfjurl + "&&&");     
  	}
  	if(draft!="" & wordattach!=""){
    		myWord.SetInsertFiles("zw&&&fjnr&&& ","http://"+TempHref+tmpurl + "&&&" + "http://"+TempHref + tmpfjurl + "&&&");
  	}   
  	//myWord.RunDoc(tempdoctemplateURL,window.document.forms[0].TCname.value,"bb",tmpName);
  	myWord.RunDoc(tempdoctemplateURL,window.document.forms[0].TCname.value,"wps","bb",tmpName);
  	myWord=null;
  	CheckDanger(false)
}

//****\u5224\u65AD\u6253\u5370\u5E95\u7A3F\u7528word\u8FD8\u662Fwps****
function PrintDraftDoc(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			PrintDraftDocWord();
		}else if(flagWPS){
			PrintDraftDocWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			PrintDraftDocWPS();
		}else if(flagWord){	
			PrintDraftDocWord();
		}
	}
}
//****word\u6253\u5370\u5E95\u7A3F****
function PrintDraftDocWord(){
  	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid = window.document.forms[0].UNID.value;
  	var tmpName;
  	if(window.document.forms[0].IsInSendDoc.value=="1")
     	tmpName = window.document.forms[0].SendDocID.value+"dg.doc";
  	else tmpName = Tempid+"dg.doc";
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigPrint.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigPrint1.xml";
	//start-fy20130408-\u53EA\u8981\u662F\u4FDD\u62A4\u72B6\u6001\uFF0C\u5C31\u4E0D\u80FD\u590D\u5236
  	myWord.ProtectTypePrint = 2;
	myWord.ProtectTypeReadOnly = 2;
	myWord.ProtectTypeProtect = 2;
	//end-fy20130408
  	//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"bb","\u6B63\u6587\u5E95\u7A3F",3,true);
  	myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","bb","\u6B63\u6587\u5E95\u7A3F",3,true);
  	myWord=null;
  	CheckDanger(false);
}
//****wps\u6253\u5370\u5E95\u7A3F****
function PrintDraftDocWPS(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid = window.document.forms[0].UNID.value;
  	var tmpName;
  	if(window.document.forms[0].IsInSendDoc.value=="1")
     	tmpName = window.document.forms[0].SendDocID.value+"dg.doc";
  	else tmpName = Tempid+"dg.doc";
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigPrint.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/ConfigPrint1.xml";
	//start-fy20130408-\u53EA\u8981\u662F\u4FDD\u62A4\u72B6\u6001\uFF0C\u5C31\u4E0D\u80FD\u590D\u5236
  	myWord.ProtectTypePrint = 2;
	myWord.ProtectTypeReadOnly = 2;
	myWord.ProtectTypeProtect = 2;
	//end-fy20130408
  	myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","bb","\u6B63\u6587\u5E95\u7A3F",3,true);
  	myWord=null;
  	CheckDanger(false);
}
//****\u5224\u65AD\u8D77\u8349\u9644\u4EF6\u7528word\u8FD8\u662Fwps****
function draftWordAttach(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			draftWordAttachWord();
		}else if(flagWPS){
			draftWordAttachWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			draftWordAttachWPS();
		}else if(flagWord){	
			draftWordAttachWord();
		}
	}
}

//****word\u8D77\u8349\u9644\u4EF6****
function draftWordAttachWord(){
  	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C  var Tempid=window.document.forms[0].UNID.value;
  	var tmpName = Tempid+"fj.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject = Tempid+"&&&fjnr";
  	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  		myWord.Proxy = TempiP;
  		myWord.PortNumber = 25;
  		myWord.address=TempAdr;
  		myWord.IsMulti=true;
  		myWord.TrackRevision=true;
  		myWord.sUploadStyle="http";		//\u7F16\u8F91\u5B8C\u6210\u540E\u4EE5\u4EC0\u4E48\u65B9\u5F0F\u4E0A\u4F20\uFF08http\u3001smtp\u4E24\u79CD\u65B9\u5F0F\uFF09
  		myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=fjnr";
  		//myWord.RunDoc("",tmpusername,TempAdr,tmpName);
  		myWord.RunDoc("",tmpusername,"office",TempAdr,tmpName);
  		if(myWord.IsSaved){
  			window.document.all.submitit.click();	
  		}else{
  			myWord=null;
  			CheckDanger(false)
  		}
  		window.focus()
}	
//****wps\u8D77\u8349\u9644\u4EF6****
function draftWordAttachWPS(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C  var Tempid=window.document.forms[0].UNID.value;
  	var tmpName = Tempid+"fj.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject = Tempid+"&&&fjnr";
  	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  		myWord.Proxy = TempiP;
  		myWord.PortNumber = 25;
  		myWord.address=TempAdr;
  		myWord.IsMulti=true;
  		myWord.TrackRevision=true;
  		myWord.sUploadStyle="http";		//\u7F16\u8F91\u5B8C\u6210\u540E\u4EE5\u4EC0\u4E48\u65B9\u5F0F\u4E0A\u4F20\uFF08http\u3001smtp\u4E24\u79CD\u65B9\u5F0F\uFF09
  		myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=fjnr";
  		//myWord.RunDoc("",tmpusername,TempAdr,tmpName);
  		myWord.RunDoc("",tmpusername,"wps",TempAdr,tmpName);
  		if(myWord.IsSaved){
  			window.document.all.submitit.click();	
  		}else{
  			myWord=null;
  			CheckDanger(false)
  		}
  		window.focus()
}
//****\u5224\u65AD\u4FEE\u6539\u9644\u4EF6\u7528word\u8FD8\u662Fwps****
function ModifyWordAttach(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			ModifyWordAttachWord();
		}else if(flagWPS){
			ModifyWordAttachWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){
			ModifyWordAttachWPS();
		}else if(flagWord){	
			ModifyWordAttachWord();
		}
	}
}	
//****word\u4FEE\u6539\u9644\u4EF6****
function ModifyWordAttachWord(){
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"fj.doc";
  	var tmpName = Tempid+"fj.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject =Tempid+"&&&fjnr";
  	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  	myWord.Proxy = TempiP;
  	myWord.PortNumber = 25;
  	myWord.address=TempAdr;
  	myWord.MailUser="MailUser";
  	myWord.IsMulti=true;
  	myWord.TrackRevision=true;
  	myWord.sUploadStyle="http";
  	myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=fjnr";
  	//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"");
  	myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","");
  	if(myWord.IsSaved){
    	window.document.all.submitit.click();	
    }else{
    	myWord = null;
    	CheckDanger(false)
    }
  	window.focus();
}

//****wps\u4FEE\u6539\u9644\u4EF6****
function ModifyWordAttachWPS(){
	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+Tempid+"fj.doc";
  	var tmpName = Tempid+"fj.doc";
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var tempurl="0/" + window.document.forms[0].UNID.value + "?opendocument";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
  	window.document.all.refresh.src="http://"+TempiP+"/"+document.forms[0].StartDb.value.replace("\\","/")+"/frmRefresh?openform";
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject =Tempid+"&&&fjnr";
  	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  	myWord.Proxy = TempiP;
  	myWord.PortNumber = 25;
  	myWord.address=TempAdr;
  	myWord.MailUser="MailUser";
  	myWord.IsMulti=true;
  	myWord.TrackRevision=true;
  	myWord.sUploadStyle="http";
  	myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=fjnr";
  	myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","");
  	if(myWord.IsSaved){
    	window.document.all.submitit.click();	
    }else{
    	myWord = null;
    	CheckDanger(false)
    }
  	window.focus();
}

//****\u5224\u65AD\u67E5\u770B\u9644\u4EF6\u7528word\u8FD8\u662Fwps****
function ViewWordAttach(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			ViewWordAttachWord();
		}else if(flagWPS){
			ViewWordAttachWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			ViewWordAttachWPS();
		}else if(flagWord){	
			ViewWordAttachWord();
		}
	}
}

//****word\u67E5\u770B\u9644\u4EF6****
function ViewWordAttachWord(){
  	CheckDanger(true);  //\u9631\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid = window.document.forms[0].UNID.value;
  	var tmpName;
  	if(window.document.forms[0].IsInSendDoc.value=="1")
     	tmpName = window.document.forms[0].SendDocID.value+"fj.doc";
  	else tmpName = Tempid+"fj.doc";
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigNozw.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  		//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"bb","\u9644\u4EF6\u5BB9",3,true);
		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","bb","\u9644\u4EF6\u5185\u5BB9",3,true);
  		myWord=null;
  		CheckDanger(false);
  		window.focus()
}

//****wps\u67E5\u770B\u9644\u4EF6****
function ViewWordAttachWPS(){
	CheckDanger(true);  //\u9631\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid = window.document.forms[0].UNID.value;
  	var tmpName;
  	if(window.document.forms[0].IsInSendDoc.value=="1")
     	tmpName = window.document.forms[0].SendDocID.value+"fj.doc";
  	else tmpName = Tempid+"fj.doc";
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+tmpName;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempiP=window.document.forms[0].Server_Name.value
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.MailUser="MailUser";
  	myWord.ConfigXml="http://"+TempHref+"/ConfigNozw.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","bb","\u9644\u4EF6\u5185\u5BB9",3,true);
  		myWord=null;
  		CheckDanger(false);
  		window.focus()
}
//****\u5F15\u9644\u4EF6****
function ImportAttach(){
  	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE

  	var Tempid=window.document.forms[0].UNID.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;	
	var myAtt;

  	myAtt = new ActiveXObject("resoftapp.attachment");
  	myAtt.address=TempAdr;
  	myAtt.Proxy = TempiP;
  	myAtt.PortNumber = 25;
  	myAtt.SelectFile();
  	tmpfile=myAtt.FileName;
  	//var tmpfiletitle=window.document.forms[0].TAttachTitle.value;
  	var tmpfiletitle=trim(window.document.forms[0].TAllAttachTitle.value);

  	var varfiletitle = tmpfiletitle.split(";");
  	tmpstr=rightbackstr(tmpfile,"\\");
  	var flag=true;
  	var i;
	for(i=0;i<varfiletitle.length;i++){
		if(varfiletitle[i]==tmpstr){
			flag=false;
			break;
		}
	}
	
	var proname = window.document.forms[0].ProName.value;
	if(proname.indexOf("\u7528\u5370")>-1|proname.indexOf("\u5370\u7AE0\u7533\u8BF7")>-1|proname.indexOf("\u5370\u7AE0\u7279\u6B8A\u7533\u8BF7")>-1){
		if(tmpfile==""){
	    	CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309
	    	alert("\u6CA1\u6709\u9009\u62E9\u76F8\u5E94\u9644\u4EF6\uFF01");
	    	return false;
	    }
		if(tmpstr.toLowerCase().indexOf(".pdf")<0&&tmpstr.toLowerCase().indexOf(".doc")<0&&tmpstr.toLowerCase().indexOf(".xls")<0&&tmpstr.toLowerCase().indexOf(".xsls")<0&&tmpstr.toLowerCase().indexOf(".wps")<0){
			CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309
			alert("\u8BF7\u4E0A\u4F20pdf\u683C\u5F0F\u7684\u9644\u4EF6\uFF01");
			return false;
		}
		try{
			if(tmpfile!=""){
			    var filePath = tmpfile; 
			    var fileSystem = new ActiveXObject("Scripting.FileSystemObject"); 
			    var file = fileSystem.GetFile(filePath);
			    var fileSize = ((file.Size)/1024)/1024;
			    var fjsize = window.document.forms[0].fjsize.value;
			    if((parseInt(fjsize) + fileSize) > 30){
		    		CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
		    		alert("\u9644\u4EF6\u603B\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC730M\uFF01");
		    		return false;
			    }
			    if(fjsize == ""){
			    	window.document.forms[0].fjsize.value = fileSize;
			    }else{
			    	window.document.forms[0].fjsize.value = parseInt(fjsize) + fileSize;
			    } 
			}
		}catch(e){
			window.document.forms[0].fjsize.value = "1.000"
		}

	}
	
  	if(tmpfile==""){
    	CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309
    	alert("\u6CA1\u6709\u9009\u62E9\u76F8\u5E94\u9644\u4EF6\uFF01");
    }else if(tmpstr.length>60){  
    	CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
    	alert('\u60A8\u4EF6\u540D\u8D85\u8FC760\u5B57');
    }else if(tmpstr.indexOf(";")>-1){  
    	CheckDanger(false);   //\u9632\u9677\u91CA\u653E\u5176\u5B83\u6309\u94AE
    	alert('\u60A8\u672A\u9009\u62E9\u9644\u4EF6\u6216\u60A8\u9009\u62E9\u7684\u9644\u4EF6\u540D\u79F0\u4E2D\u542B\u6709";"\uFF0C\u8BF7\u91CD\u65B0\u9009\uFF01');
    }else if(tmpstr.indexOf(" ")>-1){
    	CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
    	alert('\u60A8\u672A\u9009\u62E9\u9644\u4EF6\u6216\u60A8\u9009\u62E9\u7684\u9644\u4EF6\u540D\u79F0\u4E2D\u542B\u6709" \u7A7A\u683C"\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\uFF01');
	}else if(tmpstr.indexOf(",")>-1){
    	CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
    	alert('\u60A8\u672A\u9009\u62E9\u9644\u4EF6\u6216\u62E9\u7684\u9644\u4EF6\u540D\u79F0\u4E2D\u542B\u6709"\uFF0C"\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\uFF01');
	}else if(tmpstr.toLowerCase().indexOf(".html")>-1){
    	CheckDanger(false);   //add by yangxq,\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
    	alert('\u9644\u4EF6\u683C\u5F0F\u4E0D\u80FD\u4E3AHtml\u7F51\u9875\uFF01');
	}else if(flag==false){
  		//if(tmpfiletitle.indexOf(tmpstr)>-1){
	    CheckDanger(false);   //add by yangxq,\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
   	    alert("\u5DF2\u5F15\u5165\u76F8\u540C\u540D\u79F0\u9644\u4EF6\uFF01")
	}else{
  	    //20130407-http\u65B9\u5F0F\u4F20\u9644
  		
/*
  		//smtp\u5F0F\u4E0A
    	window.document.forms[0].attachfile.value=tmpfile;
    	myAtt.Subject=Tempid+"&&&fjnr";
    	myAtt.SendMailAttachment();
    	window.document.all.submitattach.click();
*/
    	window.document.forms[0].attachfile.value=tmpfile;
    	myAtt.UploadStyle="http";
   		var desturl = "http://"+TempiP+"/servlet/fileuploadattach?attachtype=fjnr&unid="+Tempid;
    	var localPath =  tmpfile;
    	var myAtt1 = new ActiveXObject("ResoftApp.Transfer");
    	if (myAtt1.HttpUpload(localPath, desturl) != 1 ){
			window.document.all.submitattach.click();
		}else {
			CheckDanger(false);
			alert("\u4F60\u9009\u62E9\u7684\u6587\u4EF6\u6B63\u5728\u88AB\u5360\u7528\uFF0C\u8BF7\u5148\u5173\u95ED\uFF01");
		}
		
	}	
}

//****\u5224\u65AD\u67E5\u770B\u9644\u4EF6\u7528office\u8FD8\u662Fwps****
function openattachment(attachname){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){	
		if(flagWord){
			openattachmentWord(attachname);
		}else if(flagWPS){
			openattachmentWps(attachname);
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			openattachmentWps(attachname);
		}else if(flagWord){	
			openattachmentWord(attachname);
		}
	}
}

//****office\u67E5\u770B\u9644\u4EF6****
function openattachmentWord(attachname){
	 CheckDanger(true);
	 var tmpurl;
	 var thisform = document.forms[0];
	 var TempiP = window.document.forms[0].Server_Name.value
	 var TempPort = window.document.forms[0].Server_Port.value;
	 var TempHref = TempiP+":"+TempPort;
	 var pathname = (window.location.pathname);
	 var Tempid = thisform.UNID.value;
	 if(Tempid!=window.document.forms[0].DocUnID.value){
	  	//Tempid=window.document.forms[0].DocUnID.value;
	  	Tempid = window.document.forms[0].Path_Info.value;
	    ls = Tempid.lastIndexOf("/");
	    rs = Tempid.indexOf("?") 
	    Tempid = Tempid.substring(ls+1,rs)
	 }
	  	  if(window.document.forms[0].IsInSendDoc.value=="1")

	  {
	     Tempid = window.document.forms[0].Path_Info.value;
	     ls = Tempid.lastIndexOf("/");
	     rs = Tempid.indexOf("?") 
	     Tempid = Tempid.substring(ls+1,rs)  
	}
	 tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+attachname;
  alert(tmpurl);
  if(ysp.appMain.isAndroid()){
    top.open(tmpurl);
  }else{
    ysp.appMain.openWindow(tmpurl+'&_ysp_filepreview=1');
  }
  return;
	 var myAtt;
	 myAtt = new ActiveXObject("resoftapp.attachment");
	 myAtt.Proxy = TempiP;
	 myAtt.PortNumber = 25;
	 if(attachname.substring(attachname.length-4,attachname.length).toLowerCase()==".doc")
	{
	  var tmpusername = window.document.forms[0].TCname.value;
	  myWord = new ActiveXObject("RedEditor.RedDocument");
	  myWord.ConfigXml="http://"+TempHref+"/Configfj.xml";
		//091231 \u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u9650
		if (document.forms[0].CanSaveDoc.value=="True")
			myWord.ConfigXml="http://"+TempHref+"/Configfj1.xml";
		//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"","",3,true);
		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","bb","\u9644\u4EF6\u5185\u5BB9",3,true);
	    myWord = null;
	    CheckDanger(false);
	    window.focus();
	}
	else
	{
	 if(myAtt.ViewAttachment("http://"+TempHref+tmpurl)=="")
	  {
	    myAtt = null;
	    CheckDanger(false);
	    window.focus();
	       }
	 else
	  {
	    myAtt = null; 
	    CheckDanger(false);
	    window.open(tmpurl);
	      }
	 }
	}


//****wps\u67E5\u770B\u9644\u4EF6****
function openattachmentWps(attachname){
 CheckDanger(true);
 var tmpurl;
 var thisform = document.forms[0];
 var TempiP = window.document.forms[0].Server_Name.value
 var TempPort = window.document.forms[0].Server_Port.value;
 var TempHref = TempiP+":"+TempPort;
 var pathname = (window.location.pathname);
 var Tempid = thisform.UNID.value;
 if(Tempid!=window.document.forms[0].DocUnID.value){
  	//Tempid=window.document.forms[0].DocUnID.value;
  	Tempid = window.document.forms[0].Path_Info.value;
    ls = Tempid.lastIndexOf("/");
    rs = Tempid.indexOf("?") 
    Tempid = Tempid.substring(ls+1,rs)
 }
  	  if(window.document.forms[0].IsInSendDoc.value=="1")

  {
     Tempid = window.document.forms[0].Path_Info.value;
     ls = Tempid.lastIndexOf("/");
     rs = Tempid.indexOf("?") 
     Tempid = Tempid.substring(ls+1,rs)  
}
 tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+attachname;
alert(tmpurl);
  if(ysp.appMain.isAndroid()){
    top.open(tmpurl);
  }else{
    ysp.appMain.openWindow(tmpurl+'&_ysp_filepreview=1');
  }
  return;
 var myAtt;
 myAtt = new ActiveXObject("resoftapp.attachment");
 myAtt.Proxy = TempiP;
 myAtt.PortNumber = 25;
 if(attachname.substring(attachname.length-4,attachname.length).toLowerCase()==".doc")
{
  var tmpusername = window.document.forms[0].TCname.value;
  myWord = new ActiveXObject("RedEditor.RedDocument");
  myWord.ConfigXml="http://"+TempHref+"/Configfj.xml";
	//091231 \u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Configfj1.xml";
	//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"","",3,true);
	myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","bb","\u9644\u4EF6\u5185\u5BB9",3,true);
    myWord = null;
    CheckDanger(false);
    window.focus();
}
else
{
	if(attachname.substring(attachname.length-4,attachname.length).toLowerCase()=="docx"){
	    myAtt = null; 
	    CheckDanger(false);
	    window.open(tmpurl);
	}else{
		 if(myAtt.ViewAttachment("http://"+TempHref+tmpurl)==""){	
			    myAtt = null;
			    CheckDanger(false);
			    window.focus();
		 }else{
			    myAtt = null; 
			    CheckDanger(false);
			    window.open(tmpurl);
			  }
	}

 }
}

//****\u5220\u9664\u9644\u4EF6****
function deleteattachment(attachname){
 var flag;
 var thisform = document.forms[0];
 flag = confirm("\u662F\u5426\u9664\u9644\u4EF6\uFF1A"+attachname+"\uFF1F")
 if(flag)
  {
    CheckDanger(true);
    thisform.attachName.value = attachname;
    document.all.delattach.click()
      }
  }

//****\u663E\u793A\u9644\u4EF6\u5217\u8868****
function showattachments(){
 var innerstr;
 var thisform = document.forms[0];
 var attaches = thisform.TAttachTitle.value;
 if (thisform.TAllAttachTitle)
	 var allattaches = thisform.TAllAttachTitle.value;
 else
	 var allattaches = thisform.TAttachTitle.value;
 var attachlist;
 if(attaches!=""){
    attachlist = attaches.split(";");
    allattachlist = allattaches.split(";");
    innerstr = "<table width=100% border=0 cellpadding=0 cellspacing=0><tr class=table-attachtitle>";
    innerstr += "<td height=25><strong><img onclick=expandmenu(this,document.all.ShowAttachList) src='/oa/images/flowform/nofollow.gif' width=15 height=15>\u6765\u6587\u53CA\u9644\u4EF6\uFF1A\uFF08\u5171"+attachlist.length+"\u4E2A\uFF09</strong></td></tr>";
    innerstr += "<tr><td id=ShowAttachList style='display:'><table width=100% border=0 cellpadding=0 cellspacing=0>"
    for(i=0;i<attachlist.length;i++){
      attachname = trim(attachlist[i]);
      if (allattaches.indexOf(attachname)==-1 && allattachlist.length==attachlist.length){
    	  attachname = trim(allattachlist[i]);
      }
      //innerstr += "<tr class=table-content1 onmouseout=\"this.className='table-content1'\" onmouseover=\"this.className='table-content-over'\">";
      innerstr += "<tr>";
      innerstr += "<td height=25><img src='/oa/images/flowform/i.p.attachfile.gif' width=15 height=12 border=0>";
      innerstr += "&nbsp;&nbsp;<a class=table-content1 onmouseout=\"this.className='table-content1'\" onmouseover=\"this.className='table-content-over'\" onclick=javascript:openattachment('"+attachname+"')>"+attachname+"</a></td>";
     if(document.all.Author.value.indexOf(document.all.UIUser.value)!=-1){
	     if(thisform.THideCon.value.indexOf("\u4FEE\u6539")!=-1&thisform.THideCon.value.indexOf("\u9644\u4EF6")!=-1){
	        innerstr += "<td nowrap><input type='button' value='\u5220 \u9664' NAME='danger' class='input-button1' onclick=javascript:deleteattachment('"+attachname+"')>&nbsp;&nbsp;<input type='button' value='\u4FEE \u6539' NAME='danger' class='input-button1'onclick=javascript:ModifyAttach('"+attachname+"')></td></tr>";
		 }else if(thisform.THideCon.value.indexOf("\u5220\u9664\u9644\u4EF6")!=-1){
	        innerstr += "<td nowrap><input type='button' value='\u5220 \u9664' NAME='danger' class='input-button1' onclick=javascript:deleteattachment('"+attachname+"')></td></tr>";
		 }else if(thisform.THideCon.value.indexOf("\u4FEE\u6539\u9644\u4EF6")!=-1){
	        innerstr += "<td nowrap><input type='button' value='\u4FEE \u6539' NAME='danger' class='input-button1'onclick=javascript:ModifyAttach('"+attachname+"')></td></tr>";
		 }  
     }
	 innerstr += "<tr class=table-line><td height=1 colspan=2 class=table-line><img src='/oa/images/flowform/dot.gif' width=1 height=1></td></tr>";
    }
    innerstr += "</table></td></tr></table>";
    document.all.attachlist.innerHTML = innerstr
   }
}
//----------------
/*
	\u6DFB\u52A0\u4EBA\uFF1A\u9093\u6B63\u5E73
	\u529F\u80FD\uFF1A \u5B9E\u73B0\u9644\u4EF6\u4FEE\u6539\u529F\u80FD
	\u65F6\u95F4\uFF1A2005-12-11
	\u5907\u6CE8\uFF1A\u65E0
*/
/*
function ModifyAttach(attachname){

 	CheckDanger(true);

 	var tmpurl;
 	var thisform = document.forms[0];
 	var TempiP = window.document.forms[0].Server_Name.value
 	var TempPort = window.document.forms[0].Server_Port.value;
 	var TempHref = TempiP+":"+TempPort;
 	var pathname = (window.location.pathname);
 	var Tempid = thisform.UNID.value;
 	var TempAdr=window.document.forms[0].UploadAdr.value;
 	var delay=0;
 	var i=0;
 	tmpurl =
 	pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+attachname;
 	var myAtt;
 	myAtt = new ActiveXObject("resoftapp.attachment");
 	myAtt.Proxy = TempiP;
 	myAtt.PortNumber = 25;
	myAtt.Subject=Tempid+"&&&fjnr";
 	myAtt.address=TempAdr; 

	if(attachname.substring(attachname.length-4,attachname.length).toLowerCase()==".doc" || attachname.substring(attachname.length-4,attachname.length).toLowerCase()=="docx")
	{
  		var tmpusername = window.document.forms[0].TCname.value;
  		myWord = new ActiveXObject("rededitor.reddocument");
  		myWord.Subject =Tempid+"&&&fjnr";
  		myWord.ConfigXml="http://"+TempHref+"/Config.xml";
		//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
		if (document.forms[0].CanSaveDoc.value=="True")
			myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
		myWord.Proxy = TempiP;
		myWord.PortNumber = 25;
  		myWord.address=TempAdr;

  		//myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"bb");
  		myWord.IsMulti=true; 
  		myWord.UploadUrl="http://"+TempiP+"/servlet/fileuploadattach?attachtype=fjnr&unid="+Tempid;
  		//myWord.MailUser= window.document.forms[0].MailUser.value;
 		myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"");
  
    	if(myWord.IsSaved)
    	{
    	    document.forms[0].attachfile.value=attachname;
    		document.all.attachName.value = attachname;
    		document.forms[0].attachfile.value=attachname;
     		document.all.modattach.click();	
    	}
    	myWord = null;
    	CheckDanger(false);
    	window.focus();

	}else{
		if(myAtt.ModifyAttachment("http://"+TempHref+tmpurl)=="")
 		{
   
    		if(myAtt.Saved)
   	 		{
    			document.forms[0].attachfile.value=attachname;
    			document.all.attachName.value = attachname;
    			//document.all.delattach.click();
    			document.forms[0].attachfile.value=attachname;
			//checkState();
    		//alert("\u5DF2\u5220\u9664\u65E7\u9644\u4EF6\uFF01")
   	 	//alert("\u6B63\u5728\u4E0A\u4F20\u65B0\u9644\u4EF6\uFF01")
     	document.all.modattach.click();		
    		}
   		 else
    		{
    		}
    myAtt = null;
    CheckDanger(false);
    window.focus();
 	}
 	else
 	{  
   	 myAtt = null; 
    	CheckDanger(false);
    	window.open(tmpurl);
 	}
}
}
*/
//\u4FEE\u6539\u9644\u4EF6  zmx 20151222add
function ModifyAttach(attachname){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){	
		if(flagWord){
			ModifyAttachWord(attachname);
		}else if(flagWPS){
			ModifyAttachWps(attachname);
		}
	}else if(flagAc == 2){
		if(flagWPS){	
			ModifyAttachWps(attachname);
		}else if(flagWord){	
			ModifyAttachWord(attachname);
		}
	}
}
function ModifyAttachWord(attachname){
	 CheckDanger(true);
	 var tmpurl;
	 var thisform = document.forms[0];
	 var TempiP = window.document.forms[0].Server_Name.value
	 var TempPort = window.document.forms[0].Server_Port.value;
	 var TempHref = TempiP+":"+TempPort;
	 var pathname = (window.location.pathname);
	 var Tempid = thisform.UNID.value;
	 var TempAdr=window.document.forms[0].UploadAdr.value;
	 var delay=0;
	 var i=0;
	 tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+attachname;
	 
	if(attachname.substring(attachname.length-4,attachname.length).toLowerCase()==".doc"){
	  var tmpusername = window.document.forms[0].TCname.value;
	  myWord = new ActiveXObject("RedEditor.RedDocument");
	  myWord.Subject =Tempid+"&&&fjnr";
	  myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	  myWord.Proxy = TempiP;
	  myWord.PortNumber = 25;
	  myWord.address=TempAdr;

	  //http\u4E0A\u4F20\u65B9\u5F0F\u4FEE\u6539
	  myWord.IsMulti=true;
	  myWord.TrackRevision=true; 
	  myWord.UploadUrl="http://"+TempiP+"/servlet/fileuploadattach?attachtype=fjnr&unid="+Tempid;
	  //myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"");
	  myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"office","");
	  if(myWord.IsSaved){
	    document.forms[0].attachfile.value=attachname;
	    document.all.attachName.value = attachname;
	    document.forms[0].attachfile.value=attachname;
	    document.all.modattach.click();
	    return;
	   }
	    myWord = null;
	    CheckDanger(false);
	    window.focus();
	} else {
		var myAtt;
		myAtt = new ActiveXObject("resoftapp.attachment");
		myAtt.Proxy = TempiP;
		myAtt.PortNumber = 25;
		myAtt.Subject=Tempid+"&&&fjnr";
		myAtt.address=TempAdr; 
	    myAtt.UploadStyle="http";  
	    myAtt.UploadUrl="http://"+TempiP+"/servlet/fileuploadattach?attachtype=fjnr&unid="+Tempid;
		if(myAtt.ModifyAttachment("http://"+TempHref+tmpurl,attachname)==""){
	    		if(myAtt.Saved){
	    			document.forms[0].attachfile.value=attachname;
	    			document.all.attachName.value = attachname;
	    			document.forms[0].attachfile.value=attachname;
	     		document.all.modattach.click();	
				 return;	
	    		}
	    		myAtt = null;
	    		CheckDanger(false);
	    		window.focus();
	 	}else{  
	   	 	myAtt = null; 
	    		CheckDanger(false);
	    		window.open(tmpurl);
	 	}
	}
}
function ModifyAttachWps(attachname){
	 CheckDanger(true);
	 var tmpurl;
	 var thisform = document.forms[0];
	 var TempiP = window.document.forms[0].Server_Name.value
	 var TempPort = window.document.forms[0].Server_Port.value;
	 var TempHref = TempiP+":"+TempPort;
	 var pathname = (window.location.pathname);
	 var Tempid = thisform.UNID.value;
	 var TempAdr=window.document.forms[0].UploadAdr.value;
	 var delay=0;
	 var i=0;
	 tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(vwSearch)/"+Tempid+"/$File/"+attachname;
	 
	if(attachname.substring(attachname.length-4,attachname.length).toLowerCase()==".doc"){
	  var tmpusername = window.document.forms[0].TCname.value;
	  myWord = new ActiveXObject("RedEditor.RedDocument");
	  myWord.Subject =Tempid+"&&&fjnr";
	  myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	  myWord.Proxy = TempiP;
	  myWord.PortNumber = 25;
	  myWord.address=TempAdr;

	  //http\u4E0A\u4F20\u65B9\u5F0F\u4FEE\u6539
	  myWord.IsMulti=true;
	  myWord.TrackRevision=true; 
	  myWord.UploadUrl="http://"+TempiP+"/servlet/fileuploadattach?attachtype=fjnr&unid="+Tempid;
	 // myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"");
	  myWord.RunDoc("http://"+TempHref+tmpurl,tmpusername,"wps","");
	  if(myWord.IsSaved){
	    document.forms[0].attachfile.value=attachname;
	    document.all.attachName.value = attachname;
	    document.forms[0].attachfile.value=attachname;
	    document.all.modattach.click();
	    return;
	   }
	    myWord = null;
	    CheckDanger(false);
	    window.focus();
	} else {
		var myAtt;
		myAtt = new ActiveXObject("resoftapp.attachment");
		myAtt.Proxy = TempiP;
		myAtt.PortNumber = 25;
		myAtt.Subject=Tempid+"&&&fjnr";
		myAtt.address=TempAdr; 
	    myAtt.UploadStyle="http";  
	    myAtt.UploadUrl="http://"+TempiP+"/servlet/fileuploadattach?attachtype=fjnr&unid="+Tempid;
		if(myAtt.ModifyAttachment("http://"+TempHref+tmpurl,attachname)==""){
	    		if(myAtt.Saved){
	    			document.forms[0].attachfile.value=attachname;
	    			document.all.attachName.value = attachname;
	    			document.forms[0].attachfile.value=attachname;
	     		document.all.modattach.click();	
				 return;	
	    		}
	    		myAtt = null;
	    		CheckDanger(false);
	    		window.focus();
	 	}else{  
	   	 	myAtt = null; 
	    		CheckDanger(false);
	    		window.open(tmpurl);
	 	}
	}
}
//----------------


//****\u68C0\u67E5\u72B6\u6001****
function checkState()
{
	//alert(window.document.readyState);
	if(window.document.readyState=="complete")
	{			
	}
	else	
	{		
		setTimeout(checkState,500);
	}
}

//****\u5F15\u5165\u626B\u63CF\u4EF6****
function ImportScanAttach(){	
  	CheckDanger(true);  //\u9631\uFF0C\u5C4F\u5B83\u6309\u94AE
  	var Tempid=window.document.forms[0].UNID.value;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
  	var TempAdr=window.document.forms[0].UploadAdr.value;	

  	var myAtt;
  	myAtt = new ActiveXObject("ResoftApp.Attachment");
  	myAtt.address=TempAdr;
  	myAtt.Proxy = TempiP;
  	myAtt.PortNumber = 25;
 
  	var myScan,myFilePath,myTempPath,tmpfile;
  	myScan = new ActiveXObject("RedScan.Scanner");
  	if(myScan.ExportFileFromScanner(true)==true)
  	{    
		//    myAtt.FileName = myScan.FilePath; 					//\u539F\u6765\u7684\u4F4D\u7F6E
   		myFilePath=myScan.FilePath;
   		tmpfile=myScan.GetScanFileName(myFilePath,myTempPath);	  
   		myAtt.FileName = myScan.FilePath; 					//\u8F6C\u53D8\u540E\u7684\u4F4D\u7F6E
		var tmpfiletitle=window.document.forms[0].TAttachTitle.value;
		tmpstr=rightbackstr(tmpfile,"\\");
  		if(tmpfile==""){
    		CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309
    		alert("\u6CA1\u6709\u62E9\u6587\u4EF6\uFF01");
      	}else if(tmpstr.indexOf(";")>-1){  
    		CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
    		alert('\u8BF7\u9009\u62E9\u4E00\u4E2A\u9644\u4EF6\u6216\u9644\u4EF6\u540D\u79F0\u4E2D\u6709";"\uFF01');
      	}else if(tmpstr.indexOf(" ")>-1){
    		CheckDanger(false);   //\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
    		alert('\u9009\u6216\u9644\u4EF6\u540D\u79F0\u4E2D\u6709\u7A7A\u683C\uFF01');
		}else if(tmpstr.toLowerCase().indexOf(".html")>-1){
    		CheckDanger(false);   //add by yangxq,\u9632\u9677\u9631\uFF0C\u91CA\u653E\u5176\u5B83\u6309\u94AE
    		alert('\u9644\u4EF6\u683C\u5F0F\u4E0D\u80FD\u4E3AHtml\u7F51\u9875\uFF01');
		}else if(tmpfiletitle.indexOf(tmpstr)>-1){
    		CheckDanger(false);   //add by yangxq,\uFF0C\u91CA\u5176\u6309\u94AE
    		alert("\u5DF2\u5F15\u5165\u76F8\u540C\u540D\u79F0\u9644")
		}else{
  
  			//20130408-http\u65B9\u5F0F
  			/*
    		window.document.forms[0].attachfile.value=tmpfile;
    		myAtt.Subject=Tempid+"&&&fjnr";
    		myAtt.SendMailAttachment();
    		window.document.all.submitattach.click();
   			*/ 
     		window.document.forms[0].attachfile.value=tmpfile;
    		myAtt.UploadStyle="http";
    		var desturl = "http://"+TempiP+"/servlet/fileuploadattach?attachtype=fjnr&unid="+Tempid;
    		var localPath =  tmpfile;
    		var myAtt1 = new ActiveXObject("ResoftApp.Transfer");
    		if (myAtt1.HttpUpload(localPath, desturl) != 1 )
			{	
  				window.document.all.submitattach.click();
			}
	
		}
  }else{
    	CheckDanger(false);   //\u9631\uFF0C\u653E\u5176\u5B83\u6309\u94AE
  }
}
//****\u6E05\u9664\u75D5\u8FF9****20110822
function ClearDocument(){
	var flagWord = hasWord();
	var flagWPS = hasWps();
	if(flagAc==1){
		if(flagWord){
			ClearDocumentWord();
		}else if(flagWPS){
			ClearDocumentWPS();
		}
	}else if(flagAc == 2){
		if(flagWPS){		
			ClearDocumentWPS();
		}else if(flagWord){	
			ClearDocumentWord();
		}
	}
}
//****\u6E05\u9664\u75D5\u8FF9****
function ClearDocumentWord(){
  	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+Tempid+"gw.doc";
  	var tmpName = Tempid+"gw.doc";
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var TempHref=TempiP+":"+TempPort;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject =Tempid+"&&&zwnr";
  	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  	myWord.Proxy = TempiP;
  	myWord.PortNumber = 25;
  	myWord.address=TempAdr;
   	myWord.AddExtraOperation("ClearRevision");   	//\u52A0\u64CD\u6E05\u7A3F\u4F5C\u9879
   	myWord.Hide_Auto = true;       		//\u540E\u53F0\u8FD0\u884Cword\u6587\u6863
   	myWord.IsMulti=true;
   	myWord.sUploadStyle="http";		//\u7F16\u8F91\u5B8C\u6210\u540E\u4EE5\u4EC0\u4E48\u65B9\u5F0F\u4E0A\u4F20\uFF08http\u3001smtp\u4E24\u79CD\u65B9\u5F0F\uFF09\u3002
   	myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr"; 
  	//myWord.RunDoc("http://"+TempHref+tmpurl,window.document.forms[0].TCname.value,"",tmpName);
   	myWord.RunDoc("http://"+TempHref+tmpurl,window.document.forms[0].TCname.value,"office","",tmpName,2);
   	window.document.forms[0].THadClear.value="1";
   	window.document.all.submitit.click();
   	CheckDanger(false);
  	window.focus()
  
}
//****\u6E05\u9664\u75D5\u8FF9-WPS****20110822
function ClearDocumentWPS(){
	CheckDanger(true);  //\u9632\u9677\u9631\uFF0C\u5C4F\u853D\u5176\u5B83\u6309\u94AE
  	var pathname = (window.location.pathname);
  	var Tempid=window.document.forms[0].UNID.value;
  	if(Tempid!=window.document.forms[0].DocUnID.value)
  		Tempid=window.document.forms[0].DocUnID.value;
  	var tmpurl = pathname.substring(0,(pathname.toLowerCase().lastIndexOf('.nsf')+5))+"(search)/"+Tempid+"/$File/"+Tempid+"gw.doc";
  	var tmpName = Tempid+"gw.doc";
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var tmpusername = window.document.forms[0].TCname.value;
  	var TempAdr=window.document.forms[0].UploadAdr.value;
  	var TempHref=TempiP+":"+TempPort;
  	var myWord;
  	myWord = new ActiveXObject("RedEditor.RedDocument");
  	myWord.Subject =Tempid+"&&&zwnr";
  	myWord.ConfigXml="http://"+TempHref+"/Config.xml";
	//091231 \u6839\u636E\u6761\u4EF6\u589E\u52A0\u53E6\u5B58\u4E3A\u6743\u9650
	if (document.forms[0].CanSaveDoc.value=="True")
		myWord.ConfigXml="http://"+TempHref+"/Config1.xml";
  	myWord.Proxy = TempiP;
  	myWord.PortNumber = 25;
  	myWord.address=TempAdr;
   	myWord.AddExtraOperation("ClearRevision");   	//\u52A0\u64CD\u6E05\u7A3F\u4F5C\u9879
   	myWord.Hide_Auto = true;       		//\u540E\u53F0\u8FD0\u884Cword\u6587\u6863
   	myWord.IsMulti=true;
   	myWord.sUploadStyle="http";		//\u7F16\u8F91\u5B8C\u6210\u540E\u4EE5\u4EC0\u4E48\u65B9\u5F0F\u4E0A\u4F20\uFF08http\u3001smtp\u4E24\u79CD\u65B9\u5F0F\uFF09\u3002
   	myWord.UploadUrl="http://"+TempiP+"/servlet/fileupload?attachtype=zwnr"; 
   	myWord.RunDoc("http://"+TempHref+tmpurl,window.document.forms[0].TCname.value,"wps","",tmpName,2);
   	window.document.forms[0].THadClear.value="1";
   	window.document.all.submitit.click();
   	CheckDanger(false);
  	window.focus()
}
//\u6392\u7248\u7F16\u53F7\u6240\u6709\u9644\u4EF6\uFF0C\u540C\u65F6\u53BB\u6389\u9644\u4EF6\u6269\u5C55\u540D
function getallattachname(flag){

	var attachnamelist = window.document.forms[0].TAttachTitle.value;
	var tmp = attachnamelist.split("; ");
	var attachlist = "";
	var attachname = "";
	var i = 0;
	if(flag=="gw")
	{
		lineflag = "\n\u3000\u3000\u3000";
		indexflag = "\u9644\u4EF6\uFF1A";
	}
	else
	{
		lineflag = "\n\u3000\u3000\u3000\u3000 ";
		indexflag = "";
	}
	if(attachnamelist=="")
	{
		attachlist = "";
	}
	else if(tmp.length==1)
		{
			attachname = tmp[i].substring(0,tmp[i].lastIndexOf("."));
			attachlist = indexflag + attachname;
		}
		else 
		{
			for(i=0;i<tmp.length;i++)
			{
				if(attachlist=="")
				{
					attachname = tmp[i].substring(0,tmp[i].lastIndexOf("."));
					attachlist = indexflag + (i+1).toString() + "\u3001" + attachname + lineflag;
				}
				else
				{
					attachname = tmp[i].substring(0,tmp[i].lastIndexOf("."));
					if(tmp.length==i+1)
					{
						attachlist = attachlist  + (i+1).toString() + "\u3001" + attachname;
					}
					else
					{
						attachlist = attachlist  + (i+1).toString() + "\u3001" + attachname + lineflag;
					}
				}
			}
		}
	return attachlist;		
}

//*******\u6587\u4EF6\u53EA\u8BFB\u7528\u6237\u6253\u5F00\u6587\u4EF6\u65F6\uFF0C\u8C03\u7528\u6B64\u65B9\u6CD5       add lxy 20141130*******
function ShowHandSignForOnlyRead(userobj,usercnobj,comentobj,divstr){
	  var signuserlist;
	  var signusercnlist;
	  var signobjlist;
	  var urllist = new Array();
	  var tmpstr;
	  var tmpobj;
	  var objstr;
	  var commdot = "$%";
	  var innerstr = "";
	  var standfield;
	  var TempiP=window.document.forms[0].Server_Name.value;
	  var TempPort=window.document.forms[0].Server_Port.value;
	  var TempHref=TempiP+":"+TempPort;
	  var tempurl="0/" + window.document.forms[0].UNID.value + "/$file";
	  var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
	  tmpstr = userobj.value;
	  signuserlist = tmpstr.split(divstr);
	  tmpstr = usercnobj.value;
	  signusercnlist = tmpstr.split(divstr);
	  tmpstr = comentobj.value;
	  signobjlist = tmpstr.split(divstr);
	  count = 0
      //var signurllist = document.all.signurl.value.split(", ");
	  //\u91CD\u65B0\u53D6\u624B\u5199\u7B7E\u540D\u5730\u5740---add by dyc on 20160519----begin----
	  var signadres = document.all.signurl.value;
	  //if(signadres==""){
		  var strUrl = "http://"+TempHref+"/weboa/wHandSign.nsf/agReloadsign?openagent&unid="+window.document.forms[0].UNID.value+"&dbname="+location.pathname.substring(1,(location.pathname.toLowerCase().lastIndexOf('.nsf')+4));
		  var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		  xmlHttp.open("POST",strUrl,true);
		  xmlHttp.onreadyStateChange=function(){
			  if (xmlHttp.readyState==4){
				  resp = xmlHttp.responseText;
				  signadres = resp.replace(/\@@@@/g,":");
				  var signurllist = signadres.split(", ");
				  //---end-----
				  if(commentlist.length>0){
				  for(i=0;i<commentlist.length;i++){
				  	
				     if(i==0) 
				    	 standfield = fobjlist[i];
				     else{
				    	 if(standfield != fobjlist[i]){
				    		 tmpobj = eval("document.forms[0]."+standfield);
				    		 tmpobj.parentElement.innerHTML = tmpobj.parentElement.innerHTML + innerstr;
				    		 innerstr="";
				    		 standfield = fobjlist[i]
				    	 }
				     }
				     flag = true;
				     
				     for(j=0;j<signuserlist.length;j++){
				    
				        if((trim(userlist[i])==trim(signusercnlist[j]))&&(trim(fobjlist[i])==trim(signobjlist[j]))){
					          commstr = commentlist[i].substring(0,commentlist[i].lastIndexOf(commdot));
					          tmparr = commstr.split(commdot);
					          commstr = ""
					          for(m=0;m<tmparr.length;m++){
					             if(commstr=="") 
					            	 commstr=tmparr[m];
					             else 
					            	 commstr=commstr+"<br>"+tmparr[m];
					          }
					          tmpstr = commentlist[i].substring(commentlist[i].lastIndexOf(commdot)+commdot.length);
					          //timestr = "--"+tmpstr.substring(tmpstr.indexOf(userlist[i])+userlist[i].length);
					          timestr = tmpstr.substring(tmpstr.indexOf(userlist[i])+userlist[i].length);
					          //<span id=SignName"+count+" style='display:none'>"+userlist[i]+"</span>
					          //innerstr = innerstr + commstr  +"<span id='br"+count+"'><br></span><object classid=clsid:9B53F7C2-B550-416C-8B81-364E80E4FE59 name=Sign"+count+" width=100 height=46></object><br><span id=SignName"+count+" style='display:none'>"+userlist[i]+"</span>"+timestr+"<br>";
					          //innerstr = innerstr + commstr  +"<br><object classid=clsid:9B53F7C2-B550-416C-8B81-364E80E4FE59 name=Sign"+count+" width=100 height=46></object><br>"+timestr+"<br>";
					          innerstr = innerstr + commstr  +"<span id='br"+count+"'><br></span><img src="+signurllist[j]+" id=Sign"+count+" width=100 height=46 oncontextmenu='event.returnValue=false'></img><br><span id=SignName"+count+" style='display:none'>"+userlist[i]+"</span>"+timestr+"<br>";
				          	  urllist[count] = cururl+"/"+trim(signuserlist[j])+".sgn";
					          signuserlist[j]="";
					          signusercnlist[j]="";
					          signobjlist[j]="";
					          flag=false;
					          count++
					          break;
					     }
				      }    
						//caomingzhe2005.6.30*****************************************************
						 if(flag){
						          commstr = commentlist[i];
						          tmparr = commstr.split(commdot);
						          commstr = ""
						          for(m=0;m<tmparr.length;m++){
						             if(commstr==""){
						            	 commstr=tmparr[m];
						             }else{
						            	 commstr=commstr+"<br>"+tmparr[m];
						             }
						           }
						          innerstr= innerstr + commstr +"<br>"
						         }
						}
					     tmpobj = eval("document.forms[0]."+standfield);
					     //alert(standfield)
					     
					     tmpobj.parentElement.innerHTML = tmpobj.parentElement.innerHTML + innerstr;
					     /*
					     for(i=0;i<urllist.length;i++){
						      eval("document.all.Sign"+i).UserId = "MailUser";
							  //eval("document.all.Sign"+i).LoadSign(urllist[i],document.forms[0].UNID.value);
							  //******2008-10-30 modi \u9002\u7528\u4E8E\u5386\u53F2\u5E93\u4E2D\u7B7E\u540D\u663E\u793A
						      if(document.forms[0].TaskName.value == "\u529E\u7ED3")
						    	  tmpid = document.forms[0].SendDocID.value;
						      else 
						    	  tmpid = document.forms[0].UNID.value;
						      
						      var tmp = eval("document.all.Sign"+i).LoadSign(urllist[i],tmpid);
						      var tmp1 = "";
						      if(tmp==false){
						    	  eval("document.all.Sign"+i+".style.display='none'");
						    	  eval("document.all.br"+i+".style.display='none'");
						    	  eval("document.all.SignName"+i+".style.display=''");
						      }
					     }
					    */
				  	}
			  }
		  };
		  xmlHttp.send(null);
	  //}
	 
	}
//*******\u6587\u4EF6\u4F5C\u8005\u7528\u6237\u6253\u5F00\u6587\u4EF6\u65F6\uFF0C\u8C03\u7528\u6B64\u65B9\u6CD5       add lxy 20141201
function ShowHandSign(userobj,usercnobj,comentobj,divstr,curuser){
	var curUser = window.document.forms[0].UIUser.value;
	if(document.all.Author.value.indexOf(curUser)>-1){
		ShowHandSignForAuthor(document.forms[0].TAllSSigner,document.forms[0].TAllSSignerCN,document.forms[0].TAllSSign,",");
	}else{
		//alert("ShowHandSignForOnlyRead")
		ShowHandSignForOnlyRead(document.forms[0].TAllSSigner,document.forms[0].TAllSSignerCN,document.forms[0].TAllSSign,",");
	}
	}
//*******\u672C\u51FD\u6570\u7528\u4E8E\u751F\u6210sign\u5BF9\u8C61\uFF0C\u548C\u56FE\u7247url\u5217\u8868\u548C\u663E\u793A\u7B7E\u540D\u56FE\u7247* add lxy 20141201********
function ShowHandSignForAuthor(userobj,usercnobj,comentobj,divstr,curuser){	
  	var signuserlist;
  	var signusercnlist;
  	var signobjlist;
  	var urllist = new Array();
  	var usrlist = new Array();   //20130508 

  	var tmpstr;
  	var tmpobj;
  	var objstr;
  	var commdot = "$%";
  	var innerstr = "";
  	var standfield;
  	var TempiP=window.document.forms[0].Server_Name.value;
  	var TempPort=window.document.forms[0].Server_Port.value;
  	var TempHref=TempiP+":"+TempPort;
 	var tempurl="0/" + window.document.forms[0].UNID.value + "/$file";
  	var cururl="http://"+TempHref+location.pathname.substring(0,(location.pathname.toLowerCase().lastIndexOf('.nsf')+5))+tempurl;
    
  	tmpstr = userobj.value;
  	signuserlist = tmpstr.split(divstr);
  	tmpstr = usercnobj.value;
  	signusercnlist = tmpstr.split(divstr);
  	tmpstr = comentobj.value;
  
  	signobjlist = tmpstr.split(divstr);
  	count = 0
 	var signurllist = document.all.signurl.value.split(", ");
  	
  	if(commentlist.length>0){
  		for(i=0;i<commentlist.length;i++){
  	
     		if(i==0) standfield = fobjlist[i];
     		else{
       			if(standfield != fobjlist[i]){
       				//alert(standfield)
         			tmpobj = eval("document.forms[0]."+standfield);
         			tmpobj.parentElement.innerHTML = tmpobj.parentElement.innerHTML + innerstr;
         			innerstr="";
         			standfield = fobjlist[i]
           		}
        	}
     		flag = true;
     
     		for(j=0;j<signuserlist.length;j++){
        		if((trim(userlist[i])==trim(signusercnlist[j]))&&(trim(fobjlist[i])==trim(signobjlist[j]))){
          			commstr = commentlist[i].substring(0,commentlist[i].lastIndexOf(commdot));
          			tmparr = commstr.split(commdot);
          			commstr = ""
          			for(m=0;m<tmparr.length;m++){
            			if(commstr=="") commstr=tmparr[m];
             			else commstr=commstr+"<br>"+tmparr[m];
                  	}
          			tmpstr = commentlist[i].substring(commentlist[i].lastIndexOf(commdot)+commdot.length);
          			
         ////////////////update lxy 20141130 start//////////////
          			//timestr = "--"+tmpstr.substring(tmpstr.indexOf(userlist[i])+userlist[i].length);
          			timestr = tmpstr.substring(tmpstr.indexOf(userlist[i])+userlist[i].length);
          			//innerstr = innerstr + commstr  +"<br><object classid=clsid:9B53F7C2-B550-416C-8B81-364E80E4FE59 name=Sign"+count+" width=100 height=46></object><br>"+timestr+"<br>";
         			//innerstr = innerstr + commstr  +"<span id='br"+count+"'><br></span><object classid=clsid:9B53F7C2-B550-416C-8B81-364E80E4FE59 name=Sign"+count+" width=100 height=46></object><br><span id=SignName"+count+" style='display:none'>"+userlist[i]+"</span>"+timestr+"<br>";         			
          	////////////////update lxy 20141130 end//////////////
          			innerstr = innerstr + commstr  +"<span id='br"+count+"'><br></span><img src="+signurllist[j]+" id=Sign"+count+" width=100 height=46 1.	oncontextmenu='event.returnValue=false'></img><br><span id=SignName"+count+" style='display:none'>"+userlist[i]+"</span>"+timestr+"<br>";
              		
         			urllist[count] = cururl+"/"+trim(signuserlist[j])+".sgn";          			
          			usrlist[count] = trim(signuserlist[j]);  //20130508 

          			signuserlist[j]="";
          			signusercnlist[j]="";
          			signobjlist[j]="";
          			flag=false;
          			count++
          			break;
                }
            }    

//caomingzhe2005.6.30*****************************************************
 			if(flag){
         		commstr = commentlist[i];
          		tmparr = commstr.split(commdot);
          		commstr = ""

          		for(m=0;m<tmparr.length;m++){
             		if(commstr=="") commstr=tmparr[m];
             		else commstr=commstr+"<br>"+tmparr[m];
                }
          		innerstr= innerstr + commstr +"<br>"
            }

		}
     	tmpobj = eval("document.forms[0]."+standfield);
     	tmpobj.parentElement.innerHTML = tmpobj.parentElement.innerHTML + innerstr;   
        /*
     	for(i=0;i<urllist.length;i++){
		
      		eval("document.all.Sign"+i).UserId = "MailUser";
			//eval("document.all.Sign"+i).LoadSign(urllist[i],document.forms[0].UNID.value);
			//******2008-10-30 modi \u9002\u7528\u5386\u53F2\u5E93\u540D\u663E\u793A
      		if(document.forms[0].TaskName.value == "\u529E\u7ED3")
      		{
      			//alert("\u624B\u5199\u7B7E\u540D\u51FA\u9519\uFF01"+document.forms[0].TSignID.value)
      			if(document.forms[0].TSignID==undefined || document.forms[0].TSignID.value=="")
      			{
      			
      				if(document.forms[0].SendDocID.value =="")
    				{
    					tmpid = document.forms[0].UNID.value
    				}else{
    					tmpid = document.forms[0].SendDocID.value
    					//tmpid = document.forms[0].UNID.value
    				}
      			} 
      			else
      			{
      				tmpid = document.forms[0].TSignID.value;
      			}
      			
	 		}	
       		else
       		{
       			if(document.forms[0].TSignID==undefined || document.forms[0].TSignID.value=="")
       			{tmpid = document.forms[0].UNID.value;}
       			else{	//tmpid = document.forms[0].UNID.value;
       				tmpid = document.forms[0].TSignID.value;}
       		}
      		
      		if(!eval("document.all.Sign"+i).LoadSign(urllist[i],tmpid)){      
       				
       			eval("document.all.Sign"+i).UploadServer = TempiP;
      			eval("document.all.Sign"+i).UploadPort = 25;
      			eval("document.all.Sign"+i).UploadAddress = eval("document.all.UploadAdr.value");
      			//eval("document.all.Sign"+i).UploadSubject = eval("document.all.UNID.value")+"&&&sign"
      			eval("document.all.Sign"+i).UploadSubject = tmpid+"&&&sign"
      			eval("document.all.Sign"+i).ShowSignLogin = "false"; //\u6B64\u5904\u8BBE\u7F6E\u624B\u5199\u7B7E\u540D\u662F\u5426\u663E\u793A\u767B\u5F55\u5BF9\u8BDD\uFF0Cfalse\u4E3A\u4E0D\u663E\u793A\uFF0Ctrue\u663E
      			eval("document.all.Sign"+i).UserId= "MailUser"      		
      			signurl = document.all.signurl.value;
      			
      			shortname = document.all.ShortName.value;      			
       		}
       	
      		
       		//start20130510-\u6DFB\u52A0\u4EE5\u4E0B\u624B\u5199\u7B7E\u540D\u52A0\u8F7D
       		if(eval("document.all.Sign"+i).LoadSign(urllist[i],tmpid)==false){		
       			
       			eval("document.all.Sign"+i).UploadServer = TempiP;
      			eval("document.all.Sign"+i).UploadPort = 25;
      			eval("document.all.Sign"+i).UploadAddress = eval("document.all.UploadAdr.value");
      			//eval("document.all.Sign"+i).UploadSubject = eval("document.all.UNID.value")+"&&&sign"
      			eval("document.all.Sign"+i).UploadSubject = tmpid+"&&&sign"
      			eval("document.all.Sign"+i).ShowSignLogin = "false"; //\u6B64\u5904\u8BBE\u7F6E\u624B\u5199\u7B7E\u540D\u662F\u5426\u663E\u793A\u767B\u5F55\u5BF9\u8BDD\u6846\uFF0Cfalse\u4E3A\u4E0D\uFF0Ctrue
      			eval("document.all.Sign"+i).UserId= "MailUser"
      			
      			var allsignurl = document.all.signurl.value.split(", ");
				var allshortname = document.all.ShortName.value.split(", ");
				//--------
				if(/\,$/.test(document.all.ShortName.value.replace(/(^\s*)|(\s*$)/g, "")))
      			{
      				fornum = allshortname.length-1
      			}
      			else
      			{
      				fornum = allshortname.length
      			}
				//---------
      			for(var j = 0;j<fornum; j++){
      			//for(var j = 0;j<allshortname.length-1;j++){
      				//alert(allshortname[j]+"-----"+usrlist[i])
      			
      				if(allshortname[j]==usrlist[i]){
      					
      					signurl = allsignurl[j]
      					shortname = allshortname[j]
      				}
      			}
////////////////update lxy 20141130 start//////////////
      			if(signurl!=""){
	      			if(eval("document.all.Sign"+i).Sign(signurl,shortname,tmpid)==true)
	      			{
	      				var hrefLower = location.href.toLowerCase();
	      				var reload = true;
	      				if(hrefLower.indexOf("&seq=")>-1){
	      					var tmp = hrefLower.split("&seq=");
	      					if(tmp.length==2){
	      						if(parseInt(tmp[1])>commentlist.length){
	      							eval("document.all.Sign"+i+".style.display='none'");
	      							eval("document.all.br"+i+".style.display='none'");
	      							eval("document.all.SignName"+i+".style.display=''");
	      							reload = false;
	      						}
	      					}
	      				}
	      				if(reload==true){
	      					document.all.submitsignload.click();
	      					eval("document.all.Sign"+i).LoadSign(urllist[i],tmpid);
		    				return true;
	      				}
	    			}
      			}else{
      				eval("document.all.Sign"+i+".style.display='none'");
					eval("document.all.br"+i+".style.display='none'");
					eval("document.all.SignName"+i+".style.display=''");
      			}
      			
      			//alert(signurl+"=="+shortname)
      			//alert(document.all.ShortName.value.split(",").length)
      		    if(eval("document.all.Sign"+i).Sign(signurl,shortname,tmpid)==true){
    				document.all.submitsignload.click();
    				eval("document.all.Sign"+i).LoadSign(urllist[i],tmpid);
    				return true;
    			}
////////////////update lxy 20141130 end//////////////
       		}
       		//end20130510s       		
 		
  //******end modi
		}
        */
	}
}
function uniqueArray(data){  
	   data = data || [];  
	   var a = {};  
	   for (var i=0; i<data.length; i++) {  
	       var v = data[i];  
	       if (typeof(a[v]) == 'undefined'){  
	            a[v] = 1;  
	       }  
	   } 
	   data.length=0;  
	   for (var i in a){  
	        data[data.length] = i;  
	   }  
	   return data;  
}
function reverdate(comms){
	  var commsdate = comms.substring(comms.length-18,comms.length);
	  var commsdate = commsdate.replace("-","/");
	  var newdate = new Date(Date.parse(commsdate));
   return newdate;
}
