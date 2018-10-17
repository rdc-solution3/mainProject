//var totalPage = parseInt(0);//总页数
//var nowpage = parseInt(1);//当前页码
//var perpage = parseInt(20) ;//每页现实记录数
//var startnum = 0;//当前开始记录
//var custno = parent.custno;
//默认调用服务与方法参数
var systemObj = {
	className:'CustomerService',
	methodName:'getCustInfoPer',
	params:"[{"+"custno:\""+parent.custno+"\"}]"
};

//查询并且加载列表数据
function loadData(){
	getForms = $.post(url, systemObj, 
			function(data){
				var dataObj = eval("("+data+")");
				if(dataObj.retCode=='0'){
					formInfo = dataObj.result;
					initValue();
					hideProgress();
					showPie(formInfo);
				} 
		});
	getForms.error(function(){ alert("加载数据出错,请联系管理员.");hideProgress(); });
}

//返回数据
function initValue(){
	$("#aum_bal_sum").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('_aumbalinfo',1);\" >"+formatCurrency(formInfo.aum_bal_sum)+"</a>");
	$("#aum_bal_avg_sum").append(formatCurrency(formInfo.aum_bal_avg_sum));
	$("#aum_bal_avg_y_sum").append(formatCurrency(formInfo.aum_bal_avg_y_sum));
	$("#s_aum_bal").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('_daumbal',1);\" >"+formatCurrency(formInfo.s_aum_bal)+"</a>");
	$("#s_aum_bal_avg").append(formatCurrency(formInfo.s_aum_bal_avg));
	$("#s_aum_bal_avg_y").append(formatCurrency(formInfo.s_aum_bal_avg_y));
	$("#h_aum_bal").append(formatCurrency(formInfo.h_aum_bal));
	$("#invest_bal").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('_investinfo',1);\" >"+formatCurrency(formInfo.invest_bal)+"</a>");
	$("#finance_bal").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('_financeinfo',1);\" >"+formatCurrency(formInfo.finance_bal)+"</a>");
	$("#s_aum_bal_rmb").append(formatCurrency(formInfo.s_aum_bal_rmb));
	$("#s_aum_bal_avg_rmb").append(formatCurrency(formInfo.s_aum_bal_avg_rmb));
	$("#aum_bal_avg_y_rmb").append(formatCurrency(formInfo.aum_bal_avg_y_rmb));
	$("#trust_bal").append(formatCurrency(formInfo.trust_bal));
	$("#third_bal").append(formatCurrency(formInfo.third_bal));
	$("#bao_bal").append(formatCurrency(formInfo.bao_bal));
	$("#loan_bal").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('_loaninfo',1);\" >"+formatCurrency(formInfo.loan_bal)+"</a>");
//	$("#loan_bal_avg").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('_loaninfo',1);\" >"+formatCurrency(formInfo.loan_bal_avg)+"</a>");
	$("#loan_bal_avg_y").append(formatCurrency(formInfo.loan_bal_avg_y));
	$("#loan_house_bal").append(formatCurrency(formInfo.loan_house_bal));
	$("#loan_car_bal").append(formatCurrency(formInfo.loan_car_bal));
	$("#loan_mana_bal").append(formatCurrency(formInfo.loan_mana_bal));
	$("#loan_stuty_bal").append(formatCurrency(formInfo.loan_stuty_bal));
	$("#loan_other_bal").append(formatCurrency(formInfo.loan_other_bal));
	$("#yq_bal").append(formatCurrency(formInfo.yq_bal));
	if(formInfo.is_xyk == 1){
		$("#is_xyk").append("<a href=\"javascript:void(0);\" onclick=\"panoramaView('"+parent.custno+"','"+parent.custname+"');\" >"+getDicValue('yesno',formInfo.is_xyk)+"</a>");
	}else{
		$("#is_xyk").append(getDicValue('yesno',formInfo.is_xyk));
	}
	$("#is_xyk_kk").text(getDicValue('yesno',formInfo.is_xyk_kk));
	$("#card_swing_num").append(formInfo.card_swing_num);
	$("#card_swing_bal").append(formatCurrency(formInfo.card_swing_bal));
	

	$("#d_aum_bal").append(formatCurrency(formInfo.d_aum_bal));
	$("#aum_bal_rmb").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('_aumbalinfo',1);\" >"+formatCurrency(formInfo.aum_bal_rmb)+"</a>");
	$("#ola_aum_bal").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('_olainfo',1);\" >"+formatCurrency(formInfo.ola_aum_bal)+"</a>");
	

	$("#card_swing_num_avg_y").append(formInfo.card_swing_num_avg_y);
	$("#card_swing_bal_avg_y").append(formatCurrency(formInfo.card_swing_bal_avg_y));
	//综合贡献度
	$("#eva_bal").append(formatCurrency(formInfo.eva_bal));
	//工作单位
	$("#employer").append(formInfo.employer);
	//职务
	$("#job_pos").append(getDicValue('CDDUTYTP',formInfo.job_pos));
	//是否代发工资
//	$("#is_df").append(formInfo.is_df);
	if(formInfo.is_df == '1'){
		$("#is_df").append("是");
	}else{
		$("#is_df").append("否");
	}
	$("#is_df_name").append(formInfo.is_df_name);
	//性别
	$("#cust_gender").text(getDicValue('CDGENDERTP',formInfo.gender));
	//年龄
	$("#cust_age").text(checknull(formInfo.age));
	//出生日期
	$("#cust_brithDate").text(checknull(formInfo.birthDate));
	//地址
	//$("#cust_address").text(checknull(formInfo.address));
	if(formInfo.address){
		$("#cust_address").append("<a href=\"javascript:void(0);\" onclick=\"moreAddress();\" >"+formInfo.address+"</a>");
	}else{
		$("#cust_address").append("<a href=\"javascript:void(0);\" onclick=\"moreAddress();\" >联系地址</a>");
	}
	
	//证件类型
	$("#cust_cert_type").text(getDicValue('cert_type',formInfo.cert_type));
	//证件号码
	$("#cust_cert_no").text(checknull(formInfo.cert_no));
	//等级
	if(formInfo.level_type_apply){
		$("#cust_level").text(checknull(getDicValue("level_type",formInfo.level_type))+"(申请等级:"+getDicValue("level_type",formInfo.level_type_apply)+")");
	}else{
		$("#cust_level").text(checknull(getDicValue("level_type",formInfo.level_type)));
	}
	
	//机构
	$("#cust_org").text(checknull(formInfo.org_name));
	//客户经理
	$("#cust_user").text(checknull(formInfo.user_name));
	//联系方式
	if(formInfo.referenceNumber){
		$("#cust_contact").append("<a href=\"javascript:void(0);\" onclick=\"moreMobileNo();\" >"+formInfo.referenceNumber+"</a>");
	}else{
		$("#cust_contact").append("<a href=\"javascript:void(0);\" onclick=\"moreMobileNo();\" >联系方式</a>");
	}
	
	//爱好
	hobinfo(formInfo);
	//禁忌
	tabooinfo(formInfo);
	//参加群组
	groupinfo(formInfo);
	/*if(formInfo.ho_taboo){
		if(formInfo.ho_taboo.length > 40){
			$("#ho_taboo").append("<span style='cursor:pointer;' title='"+formInfo.ho_taboo+"' >"+formInfo.ho_taboo.substr(0,38)+"...</span>");
		}else{
			$("#ho_taboo").text(formInfo.ho_taboo);
		}
	}else{
		$("#ho_taboo").text("");
	}*/
	//职业
	$("#cust_com_mrg_occ").text(getDicValue('CDOCCUPATIONTP',formInfo.com_mrg_occ));
//	if(formInfo.ho_car){
//		if(formInfo.ho_car.length > 34){
//			$("#ho_car").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('hobby',0);\" >" +
//					"<span style='cursor:pointer;' title='"+formInfo.ho_car+"' >"+formInfo.ho_car.substr(0,34)+"...</span></a>");
//		}else{
//			$("#ho_car").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('hobby',0);\" >" +formInfo.ho_car+"</a>");
//		}
//	}else{
//		$("#ho_car").append("<a href=\"javascript:void(0);\" onclick=\"gotoHobby('hobby',0);\" >汽车品牌</a>");
//	}
	
	
}
function hobinfo(formInfo){
	if(formInfo.hobby){
		var hobbys = formInfo.hobby.split(",");
		var len = 3;
		if(hobbys.length<3){
			len = hobbys.length;
		}
		var hobStr = "";
		for(var i=0;i<len;i++){
			var v = hobbys[i];
			if("arder_tourism" == v){
				hobStr += "旅游度假、";
			}
			else if("arder_reading" == v){
				hobStr += "读书看报、";
			}
			else if("arder_painting" == v){
				hobStr += "书法绘画、";
			}
			else if("arder_amusement" == v){
				hobStr += "影音娱乐、";
			}
			else if("arder_bodybuilding" == v){
				hobStr += "体育健身、";
			}
			else if("arder_pcgame" == v){
				hobStr += "电脑游戏、";
			}
			else if("arder_car" == v){
				hobStr += "汽车驾驶、";
			}
			else if("arder_peplecollect" == v){
				hobStr += "民间收藏、";
			}
			else if("arder_shopping" == v){
				hobStr += "购物消费、";
			}
			else if("arder_other" == v){
				hobStr += "其他、";
			}
		}
		hobStr = hobStr.substr(0,hobStr.length-1);
		var hobbyHtml = "<a href=\"javascript:void(0);\" onclick=\"gotoHobby('hobby',0);\" >"+hobStr+"</a>";
		$("#hobby").append(hobbyHtml);
	}else{
		var hobbyHtml = "<a href=\"javascript:void(0);\" onclick=\"gotoHobby('hobby',0);\" >兴趣爱好</a>";
		$("#hobby").append(hobbyHtml);
	}
}
function tabooinfo(formInfo){
	if(formInfo.ho_taboo){
		var hobbys = formInfo.ho_taboo.split(",");
		var len = 3;
		if(hobbys.length<3){
			len = hobbys.length;
		}
		var hobStr = "";
		for(var i=0;i<len;i++){
			var v = hobbys[i];
			if("taboo_cy" == v){
				hobStr += "抽烟、";
			}
			else if("taboo_hj" == v){
				hobStr += "喝酒、";
			}
			else if("taboo_yxdh" == v){
				hobStr += "营销电话、";
			}
			else if("taboo_txdh" == v){
				hobStr += "提醒电话、";
			}
			else if("taboo_yxdx" == v){
				hobStr += "营销短信、";
			}
			else if("taboo_txdx" == v){
				hobStr += "提醒短信、";
			}
			else if("taboo_other" == v){
				hobStr += "其他、";
			}
		}
		hobStr = hobStr.substr(0,hobStr.length-1);
		var hobbyHtml = "<a href=\"javascript:void(0);\" onclick=\"gotoHobby('hobby',0);\" >"+hobStr+"</a>";
		$("#ho_taboo").append(hobbyHtml);
	}else{
		var hobbyHtml = "<a href=\"javascript:void(0);\" onclick=\"gotoHobby('hobby',0);\" >忌讳事项</a>";
		$("#ho_taboo").append(hobbyHtml);
	}
}
function gotoHobby(id,flag){
	$("#accordion .menuactive",parent.document).removeClass("menuactive");
	$("#"+id,parent.document).addClass("menuactive");
	//初始化模拟点击事件
	if(flag == 1){
		$("#"+id,parent.document).parent().parent().prev().trigger("click");
	}
	
	$("#accordion .menuactive",parent.document).trigger("click");
}
//获取客户姓名
function getInfo(){
	var stmObj = {
			className : 'CustomerService',
			methodName : 'getCustInfo',
			params : "[{"+"custno:\""+parent.custno+"\"}]"
	};
	$.post(url, stmObj, 
			function(data){
				var dataObj = eval("("+data+")");
				if(dataObj.retCode=='0'){
					formInfo = dataObj.result;
					$("#cust_name").append(formInfo.cust_name);
				} 
	});
}
//获取客户群组
function groupinfo(formInfo){
	var stmObj = {
			className : 'CustomerService',
			methodName : 'cusGroupInfo',
			params : "[{"+"custno:\""+parent.custno+"\"}]"
	};
	$.post(url, stmObj, 
			function(data){
				var dataObj = eval("("+data+")");
				if(dataObj.retCode=='0'){
					formInfo = dataObj.result;
					$("#group_name").append(formInfo.group_name);
				} 
	});
}

/**更多联系方式*/
function moreMobileNo(){
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
					if(obj.s_aum_bal){
						bal = parseFloat(obj.s_aum_bal);
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
//							xAxis : [
//								        {
//								            type : 'category',
//								            data : data.xAxis
//								        }
//							],
//							yAxis : [
//								        {
//								            type : 'value',
//								            splitArea : {show : true}
//								        }
//							],
							series : [
							          {
							              name:'资产分类',
							              type:'pie',
							              selectedMode:'single',
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
//					}, 'json');
				
					chart.hideLoading();
				});
}
//界面加载初始化
$(function() {
//	maxheight = getHeight();
	if("1" == parent.remind){
		$("#maincontainer").css("max-height",getHeight());
	}else{
		$("#maincontainer").css("max-height",getHeight()-70);
	}
	
	$("#cust_no").text(parent.custno);
	$("#cust_name").text(parent.custname);
	showProgress();
	loadData();
});

/**
 * 进入客户全景视图
 */
function panoramaView(custno,custname){
	var pathPage="panoramaView_creditcard.jsp";
//	if($("#rtype"+custno).val()=='1'){
//		pathPage="panoramaView_person.jsp";
//	}else if($("#rtype"+custno).val()=='2'){
//		pathPage="panoramaView_unit.jsp";
//	}
	var src = contextPath+"/pages/customermanager/creditcard/"+pathPage+"?flag=1&custno="+custno+"&custname="+encodeURI(encodeURI(custname));
	
	var width = $(parent.window).width();
	width = (width-230);
	$("#panoramaView").dialog({
		modal : true,
		closeText: "关闭",
		draggable: false,
		resizable: false,//dialogClass  
		height: getHeight()-79,
		width:width,
		title : "客户【"+custname+"】信用卡视图",
		open:function(){
			$("#panoramaViewFrm").attr("src",src);
		}
	});
}