history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});

var root_domain = '.z.inja.com';
var jc_domain = 'https://jc.z.inja.com';
if (root_domain != '') {
	if (root_domain.charAt(0) == '.')
		root_domain = root_domain.substring(1);
	//document.domain = root_domain;
}
mini_debugger = false;
ver = 'v6.0.171224';
flowtype = '#application("flow-type")';
if (ver == '')
	ver = 'v5.3.03';

var miniui_cdn = "/script";
var eally_cdn = "";
var jquery_cdn = "/script/jquery/1.8.2/jquery.min.js";
if (typeof (Glodon) == "undefined")
	Glodon = {};
if (typeof (Gjc) == "undefined")
	Gjc = {};

var icons_path = jc_domain
		+ '/gjc/base/common/file/getFileJson.do?path=/style/icons/16x16/&key=icons&recursion=false';// 本地

document.write('<link href="' + jc_domain
		+ '/style/style.css"  rel="stylesheet" type="text/css" />');
document.write('<link href="' + jc_domain
		+ '/gjc/base/wf/wf-style.css"  rel="stylesheet" type="text/css" />');
document.write('<script src="' + jquery_cdn + '"></script>');
document
		.write('<link href="'
				+ miniui_cdn
				+ '/miniui/themes/default/miniui.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + miniui_cdn
		+ '/miniui/themes/icons.css"  rel="stylesheet" type="text/css" />');
document.write('<script src="' + miniui_cdn + '/miniui/miniui.js?ver=' + ver
		+ '" type="text/javascript" ></script>');

document.write('<script src="' + eally_cdn
		+ '/script/swfupload/swfupload.js?ver=' + ver
		+ '" type="text/javascript"></script>');
document.write('<script src="' + eally_cdn
		+ '/script/raphael-min.js"></script>');
document.write('<script src="' + eally_cdn + '/script/jCommon.js?ver=' + ver
		+ '" type="text/javascript" ></script>');

document.write('<script src="' + eally_cdn
		+ '/script/glodon/gworkflow/gworkflow.js"></script>');
document.write('<script src="' + jc_domain + '/script/gjc/gjc.dialog.js?ver='
		+ ver + '" type="text/javascript" ></script>');
document.write('<script src="' + jc_domain
		+ '/script/gjc/gjc.dialogpatch.js?ver=' + ver
		+ '" type="text/javascript" ></script>');
document.write('<script src="' + jc_domain + '/script/gjc/gjc.base.js?ver='
		+ ver + '" type="text/javascript" ></script>');

document.write('<script src="' + jc_domain + '/script/gjc/gjc.tender.js?ver='
		+ ver + '" type="text/javascript" ></script>');
document.write('<script src="' + jc_domain + '/base/dict/dict.js?ver=' + ver
		+ '" type="text/javascript" ></script>');

// 风格专区
var skin = getCookie('stylethemes');
var themes = getCookie('themes');
if (themes && themes == 'blue2015') {
	skin = '6';// 2015新版风格默认第6套风格
	document
			.write('<link href="'
					+ jc_domain
					+ '/script/miniui/themes/metro-gjc5/skin.css" rel="stylesheet" type="text/css" />');
	document.write('<link href="' + jc_domain
			+ '/css/miniui/themes/metro-gjc5-' + skin
			+ '.css" rel="stylesheet" type="text/css" />');
} else if (themes && (themes == 'blue2016' || themes == 'blue2017')) {
	skin = 'pure';// 2016新版风格默认第6套风格
	document
			.write('<link href="'
					+ jc_domain
					+ '/script/miniui/themes/pure/skin.css" rel="stylesheet" type="text/css" />');
	document
			.write('<link href="'
					+ jc_domain
					+ '/script/miniui/themes/default/medium-mode.css" rel="stylesheet" type="text/css" />');
	document
			.write('<link href="'
					+ jc_domain
					+ '/css/miniui/themes/metro-gjc5-6.css" rel="stylesheet" type="text/css" />');// 灰色皮肤
	document
			.write('<link href="'
					+ jc_domain
					+ '/script/miniui/toolbaroverflow/toolbaroverflow.css" rel="stylesheet" />');
	// document.write('<script
	// src="/script/miniui/toolbaroverflow/toolbaroverflow.js"></script>');
} else {
	if (!skin)
		skin = '5';// 默认第5套风格
	document
			.write('<link href="'
					+ jc_domain
					+ '/script/miniui/themes/metro-gjc5/skin.css" rel="stylesheet" type="text/css" />');
	document.write('<link href="' + jc_domain
			+ '/css/miniui/themes/metro-gjc5-' + skin
			+ '.css" rel="stylesheet" type="text/css" />');
}

var searchOption = {
	keyword : null
};
document.write('<script src="' + jc_domain + '/script/gjc/boot-common.js?ver='
		+ ver + '" type="text/javascript" ></script>');
document.write('<script src="' + jc_domain
		+ '/script/gjc/boot-renderfile.js?ver=' + ver
		+ '" type="text/javascript" ></script>');

document
		.write('<link rel="stylesheet" type="text/css" href="/script/webuploader/webuploader.css">');
document
		.write('<script type="text/javascript" src="/script/webuploader/webuploader.js"></script>');
document
		.write('<script type="text/javascript" src="/script/webuploader/gjc.webuploader.js"></script>');

function getCookie(name) {
	var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)", "gi");
	var tmp = reg.exec(document.cookie);
	return unescape((tmp || [])[2] || "");
}
