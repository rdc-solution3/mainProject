<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>江西银行办公自动化系统</title>
<script language="JavaScript" type="text/javascript">
<!-- 
function setFormFocus() {	document.forms[0].Username.focus(); 	document.forms[0].Username.select()}function writeFlash(FlashFile,width, height) { document.writeln(" <object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http:\/\/download.macromedia.com\/pub\/shockwave\/cabs\/flash\/swflash.cab#version=9,0,28,0\" width=\""+width+"\" height=\""+height+"\"> "); document.writeln("          <param name=\"movie\" value=\""+FlashFile+"\" \/> "); document.writeln("          <param name=\"quality\" value=\"high\" \/> "); document.writeln("          <param name=\"wmode\" value=\"transparent\" \/> "); document.writeln("          <embed src=\""+FlashFile+"\" quality=\"high\" pluginspage=\"http:\/\/www.adobe.com\/shockwave\/download\/download.cgi?P1_Prod_Version=ShockwaveFlash\" type=\"application\/x-shockwave-flash\" width=\""+width+"\" height=\""+height+"\" wmode=\"transparent\"> <\/embed> "); document.writeln("    <\/object> ") } 
// -->
</script>
</head>
<body text="#000000" bgcolor="#FFFFFF" scroll=no onload="if(document.forms[0].ReasonType.value==&quot;0&quot;){  srcpath = document.forms[0].RedirectTo.value;  var curdate = new Date();  var datestr = curdate.toString();  document.forms[0].RedirectTo.value = &quot;/domcfg.nsf/LoginRecord?openagent&amp;RedictUrl=&quot;+srcpath+&quot;&amp;&quot;+datestr   }setFormFocus()xmldoc = new ActiveXObject(&quot;microsoft.xmldom&quot;);xmldoc.async = false;loadurl = &quot;/domcfg.nsf/(agLoadInfo)?openagent&quot;xmldoc.load(loadurl)if(xmldoc==null)return false;var rootelem=xmldoc.documentElement;document.all.info.innerHTML=rootelem.getAttribute(&quot;title&quot;)if(document.forms[0].Password.value==&quot;&quot;){	document.getElementById(&quot;loginpd&quot;).className=&quot;pd&quot;	//this.value=&quot;adu&quot;}">

<form onsubmit="if(document.all.Username.value==&quot;&quot;){	alert(&quot;请输入用户名！&quot;)	return false}else if(document.all.Password.value==&quot;&quot;){	alert(&quot;请输入密码！&quot;)	return false}	return true;" method="post" action="/names.nsf?Login" name="_DominoForm">
<input type="hidden" name="%%ModDate" value="0000004C2BA376B8"><html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<link href="/oa/css/login.css" type="text/css" rel="stylesheet"/>
<title>无标题文档</title>
<style type="text/css">
</style>
</head>
<body>
<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0" >
  <tr>
    <td align="center" valign="middle" >
        <div class="box">
              <div align="left" class="un" id="loginun">
			
<input name="Username" value="" size='20' style='border:none;' onblur="if(this.value==&quot;&quot;){	this.value=&quot;请输入用户名&quot;}" onfocus="if(this.value==&quot;请输入用户名&quot;){	this.value=&quot;&quot;}" class="user">
		</div>
              <div align="left" class="pd2" id="loginpd">
			
<input name="Password" value="password" type="password" size='20' style='border:none;' onblur="if(this.value==&quot;&quot;){	document.getElementById(&quot;loginpd&quot;).className=&quot;pd&quot;	//this.value=&quot;adu&quot;}" onfocus="//if(this.value==&quot;adu&quot;)	//this.value=&quot;&quot;	//document.getElementById(&quot;loginpd&quot;).className=&quot;pd&quot;if(document.getElementById(&quot;loginpd&quot;).className=&quot;pd&quot;){	document.getElementById(&quot;loginpd&quot;).className=&quot;pd2&quot;}" onclick="//document.getElementById(&quot;loginpd&quot;).className=&quot;pd2&quot;" class="user">
		</div>
              <div align="left"  class="sub">
			<button  type="submit" class="but1"></button>
			<font color=#ff3300><b> </b></font>
		</div>
           
	     <div class="login1">
			<p id="info"></p>
<br>
<div><img src="/domcfg.nsf/moa.png" style="width:100px;height:100px;" ><br><br><font size="2px" color="black"><strong>移动办公客户端</strong></font></div>			
	     </div>
        </div>
	     
    </td>
  </tr>
</table>
</body>
</html>
<br>
<font size="2" color="#ff0000">
<input name="RedirectTo" value="/weboa/wlpgoodrec.nsf/0/19CA091C44F9AE51482580C000452D30?opendocument" type=hidden></font><!--
<input type="submit" value="">-->
<input name="$PublicAccess" type="hidden" value="1">
<input name="ReasonType" type="hidden" value="0"></form>
</body>
</html>
