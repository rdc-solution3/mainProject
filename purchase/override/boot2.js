history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});

var root_domain = '.z.inja.com';
var ly_domain = 'https://ly.z.inja.com';
if(root_domain != ''){
	if(root_domain.charAt(0) == '.') root_domain = root_domain.substring(1);
	//document.domain = root_domain;
} 
mini_debugger = false;
ver='v6.0.171224';
flowtype='#application("flow-type")';
﻿﻿if (ver=='') ver = 'v5.3.03';
var miniui_cdn = "/script";
var eally_cdn = "";
var jquery_cdn = "/script/jquery/jquery-1.8.2.min.js";
if (typeof (Glodon) == "undefined") Glodon = {};
﻿﻿if (typeof (Gjc) == "undefined") Gjc = {};
var icons_path = ly_domain + '/gjc/base/common/file/getFileJson.do?path=/style/icons/16x16/&key=icons&recursion=false';//本地

//是否远程获取数据url,ex只适用于远程，simple只使用于本地
//var SMURL='/gjc/ex/'; 
//var SMURL='/gjc/core/simple/';
document.write('<link href="'+ly_domain+'/style/style.css"  rel="stylesheet" type="text/css" />');
document.write('<script src="' + jquery_cdn + '"></script>');
document.write('<link href="' + miniui_cdn + '/miniui/themes/default/miniui.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + miniui_cdn + '/miniui/themes/icons.css"  rel="stylesheet" type="text/css" />');
document.write('<script src="' + miniui_cdn + '/miniui/miniui.js?ver='+ver+'" type="text/javascript" ></script>');

document.write('<script src="' + eally_cdn + '/script/swfupload/swfupload.js?ver='+ver+'" type="text/javascript"></script>');
document.write('<script src="' + eally_cdn + '/script/raphael-min.js"></script>');
document.write('<script src="' + eally_cdn + '/script/jCommon.js?ver='+ver+'" type="text/javascript" ></script>');

document.write('<script src="' + eally_cdn + '/script/glodon/gworkflow/gworkflow.js"></script>');
document.write('<script src="'+ly_domain+'/script/gjc/gjc.dialog.js?ver='+ver+'" type="text/javascript" ></script>');
document.write('<script src="'+ly_domain+'/script/gjc/gjc.base.js?ver='+ver+'" type="text/javascript" ></script>');
//document.write('<script src="'+ly_domain+'/script/gjc/gjc.tender.js?ver='+ver+'" type="text/javascript" ></script>');
document.write('<script src="'+ly_domain+'/base/dict/dict.js?ver='+ver+'" type="text/javascript" ></script>');
document.write('<script src="'+ly_domain+'/script/gjc/gjc.check.js?ver='+ver+'" type="text/javascript" ></script>');

//风格专区
//2016新版风格默认第6套风格 
document.write('<link href="'+ly_domain+'/script/miniui/themes/pure/skin.css" rel="stylesheet" type="text/css" />');
document.write('<link href="'+ly_domain+'/script/miniui/themes/default/medium-mode.css" rel="stylesheet" type="text/css" />');
document.write('<link href="'+ly_domain+'/script/miniui/themes/css/metro-gjc5-6.css" rel="stylesheet" type="text/css" />');//灰色皮肤
document.write('<link href="'+ly_domain+'/script/miniui/toolbaroverflow/toolbaroverflow.css" rel="stylesheet" />');

var searchOption = { keyword: null };
document.write('<script src="'+ly_domain+'/script/gjc/boot-common.js?ver='+ver+'" type="text/javascript" ></script>');
document.write('<script src="'+ly_domain+'/script/gjc/boot-renderfile.js?ver='+ver+'" type="text/javascript" ></script>');

document.write('<link rel="stylesheet" type="text/css" href="'+ly_domain+'/script/webuploader/webuploader.css">');
document.write('<script type="text/javascript" src="'+ly_domain+'/script/webuploader/webuploader.js"></script>');
document.write('<script type="text/javascript" src="'+ly_domain+'/script/webuploader/gjc.webuploader.js"></script>');

function getCookie(name) {
	var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)", "gi");
	var tmp = reg.exec(document.cookie);
	return unescape((tmp || [])[2] || "");
}

/**
 * 1.1235-->1.124
 */
Number.prototype.toFixed = function (len) {

	var temp = Math.pow(10, len);

	return Math.round(this * temp) / (temp * 1.0)
}


/**
 * 项目信息查看  列表
 */
function renderer_projectview(e) {
	if (typeof (orgnization_view) == 'undefined')
		orgnization_view = function (id, pid) {
		var grid = mini.get("grid_org1");
		mini.open({ url: '/gjc/base/sys/org_edit.html?readonly=true&orgnizationid=' + id, title: '项目信息查看', width: 600, height: 400, showMaxButton: true })
	};
	return '<a href="javascript:;" onclick="orgnization_view(\'' + e.record.projectid + '\')">' + e.value + '</a>';
}
/**
 * 项目信息查看 页面
 */
function projectview() {
	var projectid ="";
	if(mini.get('projectid')){
		projectid = mini.get('projectid').getValue();
	}else if(mini.get('project')){
		projectid = mini.get('project').getValue();
	}
	mini.open({ url: '/gjc/base/sys/org_tabs.html?readonly=true&orgnizationid=' + mini.get('projectid').getValue(), title: '项目信息查看', width: 600, height: 500, showMaxButton: true })
}

