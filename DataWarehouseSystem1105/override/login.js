var timeout = 5000;
$("document").ready(function() {
	$("#pbarDialog").dialog({
		resizable : false,
		bgiframe : true,
		height : 140,
		width : 400,
		modal : true,
		autoOpen : false
	});
	if (showDailog == true) {
		showDialog(icons, "系统提示", $("#msg").html());
	}
	// $("#loginName").focus();
	$("#loginName").keydown(function(event) {
		if (event.keyCode == 13) {
			if (this.value == '') {
				this.focus();
			} else {
				$('#password').focus();
			}
		}
	});
	$("#password").keydown(function(event) {
		if (event.keyCode == 13) {
			if (this.value == '') {
				this.focus();
			} else {
				checkForm();
			}
		}
	});
	$("#imgbtn").click(checkForm);
	function checkForm() {
		if (($("#password").val() != "" && $("#loginName").val() != "")) {
			// var arrg =
			// window.showModalDialog('pages/report/showinfo.jsp','','dialogHeight:400px;dialogWidth:400px;resizable:1;');
			// if(arrg==true){
			SetPwdAndChk();
			showProgressBar();
			$("form").submit();
			// }
		} else {
			if ($("#loginName").val() == "") {
				$("#loginName").focus();
			} else if ($("#password").val() == "") {
				$("#password").focus();
			}
			showDialog("warning", "输入错误", "用户名及密码不能为空！");
		}
	}
	/**
	 * 显示进度条对话框
	 * 
	 */
	function showProgressBar() {
		$("#pbarDialog").dialog("open");
		$("#progressbar").progressbar({value : 100});// 置为0
	}
});
/**
 * 显示对话框(参数不能为空)
 * 
 * @param icon显示图标
 * @param title
 *            标题
 * @param msg
 *            信息
 */
function showDialog(icon, title, msg) {
	// 初始化对话框
	$("#dialog").dialog({
		bgiframe : true,
		resizable : false,
		modal : true,
		autoOpen : false,
		buttons : {
			'关闭' : function() {
				$(this).dialog('close');
				pwd = "";
				$("#password").val("");
			},
			'确认' : function() {
				if (pwd != '')
					foceLogin();
				$(this).dialog('close');
			}
		}
	});
	if (icon != '')
		$("#dialogIcon").attr("src", windowIconDir + "icon-" + icon + ".gif");
	if (title != '')
		$("#dialog").dialog("option", "title", title);
	if (msg != '' && msg.trim() != '您目前使用的浏览器不是IE浏览器！<br>为了更好的使用效果，推荐使用微软的IE浏览器或其内核的浏览器！') {
//     if ($('#msg').html().trim() != '密码错误！<br>请注意大小写！<br>注意：在半小时内不能连续输错5次密码！<br>您已经输入<b>5</b>次错误密码了！<br>' && $('#msg').html().trim() !=
//  "此用户已经被锁定！<br>请等待系统自动解锁<br>或与上级用户或管理员联系解锁。<br>") {
      
//     }
    $("#msg").empty().html(msg);
    
  }
		
	$("#dialog").dialog("open");
}