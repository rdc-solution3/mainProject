/**
 * @author 	DouFuDong
 * @date 	2007-1-29 16:21:00
 * @dec 	屏蔽鼠标键
*/

//屏蔽鼠标右键、Ctrl+N、Shift+F10、F11、F5刷新、退格键 
function oncontextmenu(event){event.returnValue=false;}//屏蔽鼠标右键 
function onhelp(){return false} //屏蔽F1帮助 
function onkeydown(event) 
{ 
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