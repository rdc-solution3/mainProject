//默认调用服务与方法参数
var systemObj = {
	className:'CustomerService',
	methodName:'getCustInfoUnit',
	params:"[{"+"custno:\""+parent.custno+"\"}]"
};

//获取基本信息
function getInfo(){
	handler = $.post(url, systemObj,
		function(data){
			var dataObj = eval("("+data+")");
			if(dataObj.retCode=='0'){
				formInfo = dataObj.result;
				initValue(formInfo);
				hideProgress();
			}
		});
	handler.error(function(){ alert("加载数据出错,请联系管理员.");hideProgress(); });
}

//返回数据
function initValue(obj){
	if(obj){
		$("#cust_level").text(checknull(getDicValue("level_type_unit",obj.level_type)));
		$("#cert_type").text(getDicValue("cert_type",obj.cert_type));
		$("#cert_no").text(checknull(obj.cert_no));
		$("#cust_user").text(checknull(obj.empname));
		$("#cust_org").text(checknull(obj.orgname));
		$("#cust_class").text(getDicValue("corporate_type",obj.cust_class));
		$("#so_cust_level").text(getDicValue("tactic_level",obj.so_cust_level));//
		$("#frdb").text(checknull(obj.fr_name));//法人代表
		$("#frdbzjlx").text(getDicValue("cert_type",obj.fr_pbk_type));//法人证件类型
		$("#frdbzjhm").text(checknull(obj.fr_pbk_num));//法人证件号码
		$("#sjjyz").text(checknull(obj.control_name));//实际经营者
		$("#sjjyzzjlx").text(getDicValue("cert_type",obj.control_pbk_type));//实际经营者证件类型
		$("#sjjyzzjhm").text(checknull(obj.control_pbk_num));//实际经营者证件号码
//		$("#qydz").text(checknull(obj.work_addr));//办公地址
		$("#qyzcdz").text(checknull(obj.reg_addr));//注册地址
		//$("#contact").text(checknull(obj.referenceNumber));
		if(obj.com_phone){
//			$("#contact").append("<a href='javascript:void(0);' onClick='moreContact(\""+obj.referenceNumber+"\")'"+obj.referenceNumber[0][0]+"</a>");
			$("#contact").append("<a href=\"javascript:void(0);\" onclick=\"moreContact();\" >"+obj.com_phone+"</a>");
		}else{
			$("#contact").append("<a href=\"javascript:void(0);\" onclick=\"moreContact();\" >联系方式</a>");
		}
		$("#comp_type").text(checknull(obj.comp_type));
//		$("#comp_gx").text(checknull(obj.comp_gx));
		$("#group_comp").text(checknull(obj.group_comp));
		$("#ssgs").text(checknull(obj.ssgs));
//		$("#frdb").text(checknull(obj.frdb));
//		$("#frdbzjlx").text(getDicValue("cert_type",obj.frdbzjlx));
//		$("#frdbzjhm").text(checknull(obj.frdbzjhm));
		$("#qygm").text(checknull(obj.qygm));
		$("#qyxz").text(checknull(obj.qyxz));
		$("#sshy").text(checknull(obj.sshy));
		$("#zcze").text(checknull(obj.zcze));
		$("#xsze").text(checknull(obj.xsze));
		$("#cyrs").text(checknull(obj.cyrs));
		$("#zyyw").text(checknull(obj.zyyw));
//		$("#qydz").text(checknull(obj.address));
		if(obj.oper_addr){
//			$("#qydz").append("<a href='javascript:void(0);' onClick='moreAddress(\""+obj.oper_addr+"\")'"+obj.address[0][0]+"</a>");
			$("#qydz").append("<a href=\"javascript:void(0);\" onclick=\"moreAddress();\" >"+obj.oper_addr+"</a>");
		}else{
			$("#qydz").append("<a href=\"javascript:void(0);\" onclick=\"moreAddress();\" >联系地址</a>");
		}

		//证件信息
		if(obj.cert){
			$("#div_yingyezhizhao #tabbody").empty();
			var rows = obj.cert;
			for (var i = 0; i < rows.length; i++) {
				//主证件到期日
				if(obj.cert_no == rows[i].certNo){
					$("#cert_dqr").text(checknull(rows[i].expiryDate));
				}
				var num = i%2;
				var inHtml = "<tr>";
				if(num==1){
					inHtml = "<tr class='table_double_col'>";
				}
				inHtml += "<td>"+checknull(rows[i].certType)+"</td>";
				inHtml += "<td>"+checknull(rows[i].certNo)+"</td>";
				inHtml += "<td>"+checknull(rows[i].certStatu)+"</td>";
				inHtml += "<td>"+checknull(rows[i].expiryDate)+"</td>";
				inHtml += "<td>"+checknull(rows[i].certLocation)+"</td>";
				inHtml += "<td>"+checknull(rows[i].sys)+"</td>";
				inHtml += "</tr>";
				$("#div_yingyezhizhao #tabbody").append(inHtml);
			}
		}


	}
}
/**更多联系方式*/
/*function moreContact(rows){
 $("#moreMobileNo").dialog({
 appendTo:"#baseinfo",
 title:'更多联系方式',
 closeText:'关闭',
 //resizable:false,
 modal:true,
 width:800,
 height:300,
 open:function(){
 $('#moreMobileNo #tabbody').empty();
 if (rows) {
 for(var i=0;i<rows.length;i++){
 var num = i%2;
 var inHtml = "<tr>";
 if(num==1){
 inHtml = "<tr class='table_double_col'>";
 }
 inHtml = inHtml + "<td align='center'>" + dataObj.result.rows[i][0] + "</td>";
 inHtml = inHtml + "<td align='center'>" + dataObj.result.rows[i][1] + "</td>";
 inHtml = inHtml + "<td align='center'>" + dataObj.result.rows[i][2] + "</td>";
 inHtml = inHtml + "<td align='center'>" + dataObj.result.rows[i][3] + "</td>";
 inHtml = inHtml + "</tr>";
 $('#moreMobileNo #tabbody').append(inHtml);
 }
 }
 },
 close:function(){

 },
 buttons:[]
 });
 }*/
function moreContact(){
	$("#moreMobileNo").dialog({
		appendTo:"",
		title:'更多联系方式',
		closeText:'关闭',
		//resizable:false,
		modal:true,
		width:800,
		height:300,
		open:function(){
			var stmObj = {
				className : 'CustomerService',
				methodName : 'getCustContact',
				params : "[{" + "custno:\"" + parent.custno + "\"}]"
			};
			showProgress();
			$.post(url, stmObj, function(data) {
				$('#moreMobileNo #tabbody').empty();
				var dataObj = eval("(" + data + ")");
				if (dataObj.result.rows) {
					var rows = dataObj.result.rows;
					for(var i=0;i<rows.length;i++){
						var num = i%2;
						var inHtml = "<tr>";
						if(num==1){
							inHtml = "<tr class='table_double_col'>";
						}
						inHtml = inHtml + "<td align='center'>" + checknull(dataObj.result.rows[i][0]) + "</td>";
						inHtml = inHtml + "<td align='center'>" + checknull(dataObj.result.rows[i][1]) + "</td>";
						inHtml = inHtml + "<td align='center'>" + checknull(dataObj.result.rows[i][2]) + "</td>";
						inHtml = inHtml + "<td align='center'>" + checknull(dataObj.result.rows[i][3]) + "</td>";
						inHtml = inHtml + "</tr>";
						$('#moreMobileNo #tabbody').append(inHtml);
					}
				}
				hideProgress();
			});
		},
		close:function(){

		},
		buttons:[]
	});
}
/**更多联系地址*//*
 function moreAddress(rows){
 $("#addressInfos").dialog({
 appendTo:"#baseinfo",
 title:'更多联系地址',
 closeText:'关闭',
 //resizable:false,
 modal:true,
 width:800,
 height:300,
 open:function(){
 if (rows) {
 for(var i=0;i<rows.length;i++){
 var num = i%2;
 var inHtml = "<tr>";
 if(num==1){
 inHtml = "<tr class='table_double_col'>";
 }
 inHtml = inHtml + "<td align='center'>" + dataObj.result.rows[i][0] + "</td>";
 inHtml = inHtml + "<td align='center'>" + dataObj.result.rows[i][1] + "</td>";
 inHtml = inHtml + "<td align='center'>" + dataObj.result.rows[i][2] + "</td>";
 inHtml = inHtml + "<td align='center'>" + dataObj.result.rows[i][3] + "</td>";
 inHtml = inHtml + "</tr>";
 $('#addressInfos #tabbody').append(inHtml);
 }
 }
 },
 close:function(){

 },
 buttons:[]
 });
 }*/
/**更多联系地址*/
function moreAddress(){
	$("#addressInfos").dialog({
		appendTo:"",
		title:'更多联系地址',
		closeText:'关闭',
		//resizable:false,
		modal:true,
		width:800,
		height:300,
		open:function(){
			var stmObj = {
				className : 'CustomerService',
				methodName : 'getAddressInfo',
				params : "[{" + "custno:\"" + parent.custno + "\"}]"
			};
			showProgress();
			$.post(url, stmObj, function(data) {
				$('#addressInfos #tabbody').empty();
				var dataObj = eval("(" + data + ")");
				if (dataObj.result.rows) {
					var rows = dataObj.result.rows;
					for(var i=0;i<rows.length;i++){
						var num = i%2;
						var inHtml = "<tr>";
						if(num==1){
							inHtml = "<tr class='table_double_col'>";
						}
						inHtml = inHtml + "<td align='center'>" + checknull(dataObj.result.rows[i][0]) + "</td>";
						inHtml = inHtml + "<td align='center'>" +  checknull(dataObj.result.rows[i][1]) + "</td>";
						inHtml = inHtml + "<td align='center'>" +  checknull(dataObj.result.rows[i][2]) + "</td>";
						inHtml = inHtml + "<td align='center'>" +  checknull(dataObj.result.rows[i][3]) + "</td>";
						inHtml = inHtml + "</tr>";
						$('#addressInfos #tabbody').append(inHtml);
					}
				}
				hideProgress();
			});
		},
		close:function(){

		},
		buttons:[]
	});
}
function getEmp(){
	systemObj.methodName="queryOrgEmp";
	handler = $.post(url, systemObj, function(data) {
		showData(data);
	});
	handler.error(function(){ alert("加载数据出错,请联系管理员.");hideProgress(); });
}
function showData(data){
	var dataObj=eval("("+data+")");
//	var renm = parseInt(dataObj.result.totalSize);//记录数
//	setpage(perpage, renm, nowpage);
	$("#div_guanhu #tabbody").empty();
	//t.cust_no,t.cust_name,t.status
	if(dataObj.result && dataObj.result.rows){
		var rows = dataObj.result.rows;
		for(var i=0;i<rows.length;i++){
			var num = i%2;
			var inHtml = "<tr>";
			if(num==1){
				inHtml = "<tr class='table_double_col'>";
			}
			inHtml += "<td>"+rows[i][0]+"</td>";
			inHtml += "<td>"+rows[i][1]+"</td>";
			inHtml += "<td>"+rows[i][2]+"</td>";
			inHtml += "<td>"+rows[i][3]+"</td>";
			inHtml += "<td>"+rows[i][4]+"</td>";
			inHtml += "<td>"+checknull(rows[i][5])+"</td>";
			inHtml += "<td>"+checknull(rows[i][6])+"</td>";
			inHtml += "</tr>";
			$("#div_guanhu #tabbody").append(inHtml);
		}
	}
	hideProgress();
}

//获取行内资产信息
function getAcount(){
	systemObj.methodName="queryAcount";
	handler = $.post(url, systemObj, function(data) {
		var dataObj = eval("("+data+")");
		if(dataObj.retCode=='0'){
			formInfo = dataObj.result;
			initAcount();
			showPie(formInfo);
		}
	});
	handler.error(function(){ alert("加载数据出错,请联系管理员.");hideProgress(); });
}

//返回行内资产信息数据
function initAcount(){
	$("#aum_bal").append(formatCurrency(formInfo.aum_bal));
	$("#aum_bal_avg").append(formatCurrency(formInfo.aum_bal_avg));
	$("#aum_bal_avg_y").append(formatCurrency(formInfo.aum_bal_avg_y));
	$("#s_aum_bal").append(formatCurrency(formInfo.s_aum_bal));
	$("#s_aum_bal_avg").append(formatCurrency(formInfo.s_aum_bal_avg));
	$("#s_aum_bal_avg_y").append(formatCurrency(formInfo.s_aum_bal_avg_y));
	$("#loan_bal").append(formatCurrency(formInfo.loan_bal));
	$("#loan_bal_avg").append(formatCurrency(formInfo.loan_bal_avg));
	$("#loan_bal_avg_y").append(formatCurrency(formInfo.loan_bal_avg_y));
	$("#finance_bal").append(formatCurrency(formInfo.finance_bal));
	$("#finance_bal_avg").append(formatCurrency(formInfo.finance_bal_avg));
	$("#finance_bal_avg_y").append(formatCurrency(formInfo.finance_bal_avg_y));
	$("#loan_tx").append(formatCurrency(formInfo.loan_tx));
	$("#loan_bh").append(formatCurrency(formInfo.loan_bh));
	$("#loan_cd").append(formatCurrency(formInfo.loan_cd));
}

/**
 * 饼图
 * @param obj
 */
function showPie(obj){
	window.pieData=obj;
	var echartsPath = contextPath + "/echar";
	require.config({
		paths:{
			echarts : echartsPath
		}
	});

	//根据需要的图表，引入对应的js文件
	require(
		[
			'echarts',
			"echarts/chart/pie"
		],
		function(ec) {
			var dom = document.getElementById("zcfl");
			var chart = ec.init(dom);
			chart.showLoading({
				text:'图表数据加载中……'
			});
//				var url = contextPath+"/echar";
//				$.post(url,{"param":"echatdata"},function(data){
			//JSON.stringify(jsonobj); //可以将json对象转换成json字符串
			//ie8(兼容模式),ie7和ie6没有JSON对象，推荐采用JSON官方的方式，引入json.js。
			//可以在https://github.com/douglascrockford/JSON-js上获取到这个js，一般现在用json2.js。
//					$("#echartdata").text(JSON.stringify(data));
			var bal = 0;
			if(obj.aum_bal){
				bal = parseFloat(obj.aum_bal);
			}
			var loan_bal = 0;
			if(obj.loan_bal){
				loan_bal = parseFloat(obj.loan_bal);
			}
			var finance_bal = 0;
			if(obj.finance_bal){
				finance_bal = parseFloat(obj.finance_bal);
			}
			var invest_bal = 0;
			if(obj.invest_bal){
				invest_bal = parseFloat(obj.invest_bal);
			}
			var option = {
				title : {
					text : '资产分类',
					x:'center'
				},
				tooltip : {//鼠标悬停时的提示信息
//								trigger : 'axis'//axis,item
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend : {
					orient : 'vertical',
					data : ['存款','贷款','理财','基金'],
					x:'left'
				},
				calculable : false,//是否启用拖拽重计算特性，默认关闭
				series : [
					{
						name:'资产分类',
						type:'pie',
						radius : '55%',
						center: ['50%', '60%'],
						data:[
							{value:bal, name:'存款'},
							{value:loan_bal, name:'贷款'},
							{value:finance_bal, name:'理财'},
							{value:invest_bal, name:'基金'}
						],
						itemStyle:{
							normal:{
								label:{
									show: true,
									formatter: "{b} : {c} \n({d}%)"
								},
								labelLine :{show:true}
							}
						}
					}
				]
			};
			chart.setOption(option);

			chart.hideLoading();
		});
}

//界面加载初始化
$(function() {
	if("1" == parent.remind){
		$("#maincontainer").css("max-height",getHeight());
	}else{
		$("#maincontainer").css("max-height",getHeight()-70);
	}

	$("#cust_no").append(parent.custno);
	$("#cust_name").append(parent.custname);
	showProgress();
	getInfo();
	getAcount();
	getEmp();
});