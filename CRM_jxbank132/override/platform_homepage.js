/**
 * 工作平台首页数据
 * 
 * @date 2016-1-14
 * @author luke.lee
 */
var PlatformHomePage = Class.create();
var dialogMax = "";
PlatformHomePage.prototype = {
	initialize : function() {
		var ardAvtTabArr = new Array();
		//初始化机构汇总tab已经存在
		ardAvtTabArr.push("jinrongzichan_org");
		//初始化待办工作tab已经存在
		ardAvtTabArr.push("daibangongzuo");
		
		this.ardAvtTabArr = ardAvtTabArr;
	},
	execute:function(data,ajaxUtil,domId){
		if(data.result && data.result.rows){
			var rows = data.result.rows;
			if(rows && rows.length > 0){
				for(var i = 0;i<rows.length;i++){
					var id = rows[i][0];
					$("#"+domId+" table tbody tr td[id]").each(function(){
						if(id == $(this).attr("id")){//匹配指标
							if(id.indexOf("NUM") > -1){
								$($(this).next()[0]).text(ajaxUtil.checkNum(rows[i][2]));
								$($(this).next().next()[0]).text(ajaxUtil.checkNum(rows[i][3]));
								$($(this).next().next().next()[0]).text(ajaxUtil.checkNum(rows[i][4]));
							}else{
								$($(this).next()[0]).text(ajaxUtil.formatCurrency(rows[i][2]));
								$($(this).next().next()[0]).text(ajaxUtil.formatCurrency(rows[i][3]));
								$($(this).next().next().next()[0]).text(ajaxUtil.formatCurrency(rows[i][4]));
							}
							
						}
					});
					
				}
			}
			//对公金融资产,计算非保证金
			if("jinrongzichan_unit" == domId || "jinrongzichan_unit_usd" == domId){
				if($("#t_l_y").text() && $("#b_l_y").text()){
					var a = parseFloat($("#t_l_y").text().replace(/\,/g,""));
					var b = parseFloat($("#b_l_y").text().replace(/\,/g,""));
					$("#f_l_y").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_l_m").text() && $("#b_l_m").text()){
					var a = parseFloat($("#t_l_m").text().replace(/\,/g,""));
					var b = parseFloat($("#b_l_m").text().replace(/\,/g,""));
					$("#f_l_m").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_c").text() && $("#b_c").text()){
					var a = parseFloat($("#t_c").text().replace(/\,/g,"")) ;
					var b = parseFloat($("#b_c").text().replace(/\,/g,""));
					$("#f_c").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_y_l_y").text() && $("#b_y_l_y").text()){
					var a = parseFloat($("#t_y_l_y").text().replace(/\,/g,""));
					var b = parseFloat($("#b_y_l_y").text().replace(/\,/g,""));
					$("#f_y_l_y").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_y_l_m").text() && $("#b_y_l_m").text()){
					var a = parseFloat($("#t_y_l_m").text().replace(/\,/g,""));
					var b = parseFloat($("#b_y_l_m").text().replace(/\,/g,""));
					$("#f_y_l_m").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_y_c").text() && $("#b_y_c").text()){
					var a = parseFloat($("#t_y_c").text().replace(/\,/g,""));
					var b = parseFloat($("#b_y_c").text().replace(/\,/g,""));
					$("#f_y_c").text(ajaxUtil.formatCurrency(a-b));
				}
				//美元
				if($("#t_l_y_usd").text() && $("#b_l_y_usd").text()){
					var a = parseFloat($("#t_l_y_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#b_l_y_usd").text().replace(/\,/g,""));
					$("#f_l_y_usd").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_l_m_usd").text() && $("#b_l_m_usd").text()){
					var a = parseFloat($("#t_l_m_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#b_l_m_usd").text().replace(/\,/g,""));
					$("#f_l_m_usd").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_c_usd").text() && $("#b_c_usd").text()){
					var a = parseFloat($("#t_c_usd").text().replace(/\,/g,"")) ;
					var b = parseFloat($("#b_c_usd").text().replace(/\,/g,""));
					$("#f_c_usd").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_y_l_y_usd").text() && $("#b_y_l_y_usd").text()){
					var a = parseFloat($("#t_y_l_y_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#b_y_l_y_usd").text().replace(/\,/g,""));
					$("#f_y_l_y_usd").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_y_l_m_usd").text() && $("#b_y_l_m_usd").text()){
					var a = parseFloat($("#t_y_l_m_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#b_y_l_m_usd").text().replace(/\,/g,""));
					$("#f_y_l_m_usd").text(ajaxUtil.formatCurrency(a-b));
				}
				if($("#t_y_c_usd").text() && $("#b_y_c_usd").text()){
					var a = parseFloat($("#t_y_c_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#b_y_c_usd").text().replace(/\,/g,""));
					$("#f_y_c_usd").text(ajaxUtil.formatCurrency(a-b));
				}
			}
			
			//表外业务(对公) 计算信用证余额和年日均
			if("biaowaiyewu_unit" == domId || "biaowaiyewu_unit_usd" == domId){
				if($("#gnxyz_sn").text() && $("#gjxyz_sn").text()){
					var a = parseFloat($("#gnxyz_sn").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sn").text().replace(/\,/g,""));
					$("#xyz_sn").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sy").text() && $("#gjxyz_sy").text()){
					var a = parseFloat($("#gnxyz_sy").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sy").text().replace(/\,/g,""));
					$("#xyz_sy").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sr").text() && $("#gjxyz_sr").text()){
					var a = parseFloat($("#gnxyz_sr").text().replace(/\,/g,"")) ;
					var b = parseFloat($("#gjxyz_sr").text().replace(/\,/g,""));
					$("#xyz_sr").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sn_avg").text() && $("#gjxyz_sn_avg").text()){
					var a = parseFloat($("#gnxyz_sn_avg").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sn_avg").text().replace(/\,/g,""));
					$("#xyz_sn_avg").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sy_avg").text() && $("#gjxyz_sy_avg").text()){
					var a = parseFloat($("#gnxyz_sy_avg").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sy_avg").text().replace(/\,/g,""));
					$("#xyz_sy_avg").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sr_avg").text() && $("#gjxyz_sr_avg").text()){
					var a = parseFloat($("#gnxyz_sr_avg").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sr_avg").text().replace(/\,/g,""));
					$("#xyz_sr_avg").text(ajaxUtil.formatCurrency(a+b));
				}
				//美元
				if($("#gnxyz_sn_usd").text() && $("#gjxyz_sn_usd").text()){
					var a = parseFloat($("#gnxyz_sn_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sn_usd").text().replace(/\,/g,""));
					$("#xyz_sn_usd").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sy_usd").text() && $("#gjxyz_sy_usd").text()){
					var a = parseFloat($("#gnxyz_sy_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sy_usd").text().replace(/\,/g,""));
					$("#xyz_sy_usd").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sr_usd").text() && $("#gjxyz_sr_usd").text()){
					var a = parseFloat($("#gnxyz_sr_usd").text().replace(/\,/g,"")) ;
					var b = parseFloat($("#gjxyz_sr_usd").text().replace(/\,/g,""));
					$("#xyz_sr_usd").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sn_avg_usd").text() && $("#gjxyz_sn_avg_usd").text()){
					var a = parseFloat($("#gnxyz_sn_avg_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sn_avg_usd").text().replace(/\,/g,""));
					$("#xyz_sn_avg_usd").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sy_avg_usd").text() && $("#gjxyz_sy_avg_usd").text()){
					var a = parseFloat($("#gnxyz_sy_avg_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sy_avg_usd").text().replace(/\,/g,""));
					$("#xyz_sy_avg_usd").text(ajaxUtil.formatCurrency(a+b));
				}
				if($("#gnxyz_sr_avg_usd").text() && $("#gjxyz_sr_avg_usd").text()){
					var a = parseFloat($("#gnxyz_sr_avg_usd").text().replace(/\,/g,""));
					var b = parseFloat($("#gjxyz_sr_avg_usd").text().replace(/\,/g,""));
					$("#xyz_sr_avg_usd").text(ajaxUtil.formatCurrency(a+b));
				}
			}
			
			//没有数据的地方显示"暂无数据"
			$("#"+domId+" .formtable tr td").each(function(){
				var v = $(this).text();
				if(!v || $.trim(v).length < 1){
					$(this).text("暂无数据");
				}
			});
			
			initHeight();
		}
	},
	vipkehuqingkuang:function(data,ajaxUtil){//vip客户情况
		if(data.result && data.result.rows){
			var rows = data.result.rows;
			if(rows && rows.length > 0){
				for(var i = 0;i<rows.length;i++){
					var num = i%2;
					var inHtml = "<tr>";
					if(num==1){
						inHtml = "<tr class='table_double_col'>";
					}	
					if('1' == rows[i][0]){
						inHtml += "<td>个人</td>";
						inHtml += "<td>"+getDicValue('level_type',rows[i][1])+"</td>";
					}else{
						inHtml += "<td>对公</td>";
						inHtml += "<td>"+getDicValue('level_type_unit',rows[i][1])+"</td>";
					}
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.checkNum(rows[i][2])+"</td>";//客户数量
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][3])+"</td>";//AUM余额
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][4])+"</td>";//AUM较上日变动
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][5])+"</td>";//存款
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][6])+"</td>";//存款较上日变动
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][7])+"</td>";//贷款
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][8])+"</td>";//贷款较上日变动
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][9])+"</td>";//基金
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][10])+"</td>";//基金较上日变动
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][11])+"</td>";//理财
					inHtml += "<td style='text-align:right;'>"+ajaxUtil.formatCurrency(rows[i][12])+"</td>";//理财较上日变动
					inHtml += "</tr>";
					$("#vipkehuqingkuang #tabbody").append(inHtml);
				}
				initHeight();
			}
		}
	},
	cunkuanqushi:function(data,ajaxUtil){//存款趋势
		data = data.result;
		if(data && data.xAxis && data.series){
			for(var i=0;i<data.xAxis.length;i++){
				$("#cunkuanqushi #tabhead tr").append("<th>"+data.xAxis[i]+"</th>");
			}
			var datas = data.series[0].data;
			for(var i=0;i<datas.length;i++){
				$("#cunkuanqushi #tabbody tr").append("<td style='text-align:right;'>"+datas[i]+"</td>");
			}
		}
		$("#cunkuanqushi_line").css("width",this.getMaxWidth()-100);
		$("#cunkuanqushi_line").css("height",this.getMaxHeight());
		var echartsPath = contextPath + "/echar";
		require.config({
			paths:{
				echarts : echartsPath
			}
		});
		require([
					'echarts',
					"echarts/chart/line"
				], 
				function(ec){
					var dom = document.getElementById("cunkuanqushi_line");
					var chart = ec.init(dom);
					chart.showLoading({
						text:'数据加载中……'
					});
					var option = {
							title : {
								text : data.title,
								subtext:'单位(万元)',
								x:'center'
							},
							tooltip : {//鼠标悬停时的提示信息
								trigger : 'axis'//axis,item
								/* trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)" */
							},
							legend : {
								//orient : 'vertical',
								data : data.legend,
								y:'bottom'
							},
							calculable : false,//是否启用拖拽重计算特性，默认关闭
							xAxis : [
								        {
								            type : 'category',
								            data : data.xAxis
								        }
							],
							yAxis : [
								        {
								            type : 'value',
								            splitArea : {show : true}
								        }
							],
							series : data.series
						};
      		window.cunkuanOption = option;
					chart.setOption(option);
					chart.hideLoading();
				}
		);
		
	},
	daikuanqushi:function(data,ajaxUtil){
		data = data.result;
		if(data && data.xAxis && data.series){
			for(var i=0;i<data.xAxis.length;i++){
				$("#daikuanqushi #tabhead tr").append("<th>"+data.xAxis[i]+"</th>");
			}
			var datas = data.series[0].data;
			for(var i=0;i<datas.length;i++){
				$("#daikuanqushi #tabbody tr").append("<td style='text-align:right;'>"+datas[i]+"</td>");
			}
		}
		$("#daikuanqushi_line").css("width",this.getMaxWidth()-100);
		$("#daikuanqushi_line").css("height",this.getMaxHeight());
		var echartsPath = contextPath + "/echar";
		require.config({
			paths:{
				echarts : echartsPath
			}
		});
		require([
					'echarts',
					"echarts/chart/line"
				], 
				function(ec){
					var dom = document.getElementById("daikuanqushi_line");
					var chart = ec.init(dom);
					chart.showLoading({
						text:'数据加载中……'
					});
					var option = {
							title : {
								text : data.title,
								subtext:'单位(万元)',
								x:'center'
							},
							tooltip : {//鼠标悬停时的提示信息
								trigger : 'axis'//axis,item
								/* trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)" */
							},
							legend : {
								//orient : 'vertical',
								data : data.legend,
								y:'bottom'
							},
							calculable : false,//是否启用拖拽重计算特性，默认关闭
							xAxis : [
								        {
								            type : 'category',
								            data : data.xAxis
								        }
							],
							yAxis : [
								        {
								            type : 'value',
								            splitArea : {show : true}
								        }
							],
							series : data.series
						};
      		window.daikuanOption = option;
					chart.setOption(option);
					chart.hideLoading();
				}
		);
		
	},
	dengjibianhuaqingkuang:function(data,ajaxUtil){//等级变化
		ajaxUtil.hideProgress();
		$("#dengjibianhuaqingkuang_per").css("width",(this.getMaxWidth()/2)-50);
		$("#dengjibianhuaqingkuang_per").css("height",this.getMaxHeight());
		$("#dengjibianhuaqingkuang_per").css("margin-left","40px");
		$("#dengjibianhuaqingkuang_unit").css("width",(this.getMaxWidth()/2)-50);
		$("#dengjibianhuaqingkuang_unit").css("height",this.getMaxHeight());
		$("#dengjibianhuaqingkuang_per_pie").css("height",this.getMaxHeight()-($("#adiv").outerHeight(true)));
		$("#dengjibianhuaqingkuang_unit_pie").css("height",this.getMaxHeight()-($("#adiv").outerHeight(true)));
		
		
		data = data.result;
		var echartsPath = contextPath + "/echar";
		require.config({
			paths:{
				echarts : echartsPath
			}
		});
		require([
					'echarts',
					"echarts/chart/pie"
				], 
				function(ec){
					var dom_per = document.getElementById("dengjibianhuaqingkuang_per_pie");
					var chart_per = ec.init(dom_per);
					chart_per.showLoading({
						text:'数据加载中……'
					});
					var option_per = {
							title : {
								text : data.per.title,
								x:'center'
							},
							tooltip : {//鼠标悬停时的提示信息
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},
							legend : {
								orient : 'vertical',
								data : data.per.legend,
								 x : 'left',
								 formatter :function(name){
									 return name;
								 }
							},
							calculable : false,//是否启用拖拽重计算特性，默认关闭
							series : data.per.series
						};
      		window.dengjiPer = option_per;
					chart_per.setOption(option_per);
					chart_per.hideLoading();
					//
					var dom_unit = document.getElementById("dengjibianhuaqingkuang_unit_pie");
					var chart_unit = ec.init(dom_unit);
					chart_unit.showLoading({
						text:'数据加载中……'
					});
					var option_unit = {
							title : {
								text : data.unit.title,
								x:'center'
							},
							tooltip : {//鼠标悬停时的提示信息
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},
							legend : {
								orient : 'vertical',
								data : data.unit.legend,
								 x : 'left'
							},
							calculable : false,//是否启用拖拽重计算特性，默认关闭
							series : data.unit.series
						};
      		window.dengjiUnit = option_unit;
					chart_unit.setOption(option_unit);
					chart_unit.hideLoading();
					
				}
		);
		//加载等级标准
		var o = {
				className : 'WorkPlatformService',
				methodName : 'getLevelInfo',
				params : ""
		}
		$.post(url,o,function(d){
			var data = eval("("+d+")");
			if(data.result.rows){
				var rows = data.result.rows;
				for(var i=0;i<rows.length;i++){
					var num = i%2;
					var inHtml = "<tr class='a2'>";
					if(num==0){
						inHtml = "<tr class='a1'>";
					}	
					inHtml += "<td>"+rows[i][1]+"</td>";
					inHtml += "<td>"+rows[i][2]+"-"+rows[i][3]+"</td>";
					inHtml += "</tr>";
					if(rows[i][0] == 1){
						$("#custleveldesc_per_table").append(inHtml);
					}else{
						$("#custleveldesc_unit_table").append(inHtml);
					}
				}
			}
		});
	},
	jinrongzichanfenbu:function(data,ajaxUtil){//金融资产分布
		$("#jinrongzichan_pie").css("width",(this.getMaxWidth()/2)-50);
		$("#jinrongzichan_pie").css("height",this.getMaxHeight());
		data = data.result;
		
		var ckuan=(data.cunkuan==null?0:data.cunkuan);
		var dkuan=(data.daikuan==null?0:data.daikuan);
		var jjin=(data.jijin==null?0:data.jijin);
		var lcai=(data.licai==null?0:data.licai);
		var tola=(ckuan+dkuan+jjin+lcai);
		$("#jinrongzichanfenbu #cunkuan").text(ajaxUtil.formatCurrency(ckuan));
		$("#jinrongzichanfenbu #daikuan").text(ajaxUtil.formatCurrency(dkuan));
		$("#jinrongzichanfenbu #jijin").text(ajaxUtil.formatCurrency(jjin));
		$("#jinrongzichanfenbu #licai").text(ajaxUtil.formatCurrency(lcai));
		if(tola == 0 || tola == "0"){
			$("#jinrongzichanfenbu #cunkuanzb").text("0%");
			$("#jinrongzichanfenbu #daikuanzb").text("0%");
			$("#jinrongzichanfenbu #jijinzb").text("0%");
			$("#jinrongzichanfenbu #licaizb").text("0%");
		}else{
			$("#jinrongzichanfenbu #cunkuanzb").text((ckuan/tola*100).toFixed(2)+"%");
			$("#jinrongzichanfenbu #daikuanzb").text((dkuan/tola*100).toFixed(2)+"%");
			$("#jinrongzichanfenbu #jijinzb").text((jjin/tola*100).toFixed(2)+"%");
			$("#jinrongzichanfenbu #licaizb").text((lcai/tola*100).toFixed(2)+"%");
		}
		
		
		var echartsPath = contextPath + "/echar";
		require.config({
			paths:{
				echarts : echartsPath
			}
		});
		require([
					'echarts',
					"echarts/chart/pie"
				], 
				function(ec){
					var dom_per = document.getElementById("jinrongzichan_pie");
					var chart_per = ec.init(dom_per);
					chart_per.showLoading({
						text:'数据加载中……'
					});
					var option_per = {
							title : {
								text : "金融资产分布",
								x:'center'
							},
							tooltip : {//鼠标悬停时的提示信息
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c}<br/> ({d}%)"
							},
							legend : {
								orient : 'vertical',
								data : ['存款','贷款','基金','理财'],
								 x : 'left'
							},
							calculable : false,//是否启用拖拽重计算特性，默认关闭
							series : [ {
									type : 'pie',
									radius : '55%',
									center : [ '50%', '60%' ],
									selectedMode: 'single',
									data : [ {
										name : "存款",
										value : data.cunkuan
									}, {
										name : "贷款",
										value : data.daikuan
									}, {
										name : "基金",
										value : data.jijin
									}, {
										name : "理财",
										value : data.licai
									} ]
								}
							]
						};
      		window.jinrongChart = option_per;
					chart_per.setOption(option_per);
					chart_per.hideLoading();
				}
		);
	},
	daibangongzuo:function(data,ajaxUtil){//待办工作
		var rows = data.result.rows;
		$("#daibangongzuo #tabbody").empty();
		if(rows && rows.length > 0 ){
			for(var i=0;i<rows.length;i++){
				var num = i%2;
				var inHtml = "<tr>";
				if(num==1){
					inHtml = "<tr class='table_double_col'>";
				}	
				inHtml += "<td><a href='javascript:void(0);' onclick=\"processTask('"+rows[i][0]+"','"+rows[i][3]+"','"+rows[i][2]+"','"+rows[i][14]+"','"+rows[i][1]+"','"+rows[i][4]+"','"+rows[i][15]+"','"+rows[i][12]+"','"+rows[i][13]+"');\">"+rows[i][1]+"</a></td>";
				inHtml += "<td>"+getDicValue('task_source_type',rows[i][11])+"</td>";
				inHtml += "<td>"+getDicValue('task_type',rows[i][2])+"</td>";
				inHtml += "<td>"+rows[i][9]+"</td>";
				inHtml += "<td>"+rows[i][10]+"</td>";
				inHtml += "</tr>";
				$("#daibangongzuo #tabbody").append(inHtml);
			}
		}else{
			$("#moredaiban").hide();
			var inHtml = "<tr><td style='text-align:center;' colspan='20'>没有待办事项</td></tr>";
			$('#daibangongzuo #tabbody').append(inHtml);
		}
		initHeight();
	},
	wodetixing:function(data,ajaxUtil){//我的提醒
		//var renm = parseInt(data.result.totalSize);//记录数
		$("#wodetixing #tabbody").empty();	
		if(data && data.result && data.result.rows)	
			if(data.result.rows.length > 0){
				for(var i=0;i<data.result.rows.length;i++){
					var num = i%2;
					var inHtml = "<tr id="+data.result.rows[i][0];
						
					var colorHtml=" ";
					var colorHtml2=" ";
					if(data.result.rows[i][15]=='0'){
//						colorHtml=" style='color: red;'";
						if(num==1){
							inHtml = "<tr class='table_double_col colorHtml' id="+data.result.rows[i][0];
						}else{
							inHtml += " class='colorHtml' ";
						}	
						
						colorHtml2="  color: red; ";
					} else{
						if(num==1){
							inHtml = "<tr class='table_double_col' id="+data.result.rows[i][0];
						}
					}
					inHtml += ">";
//					alert(data.result.rows[i][1]);
					inHtml = inHtml + "<td >" + data.result.rows[i][1] + "</td>";//客户号
					inHtml = inHtml + "<td >" + ajaxUtil.checkNum(data.result.rows[i][2]) + "</td>";//客户姓名
					inHtml = inHtml + "<td >" +  getDicValue('custType',data.result.rows[i][3]) + "</td>";//客户类型
					inHtml = inHtml + "<td >" + ajaxUtil.checkNum(data.result.rows[i][4])+ "</td>";//账号
					inHtml = inHtml + "<td > " +getDicValue('remType',data.result.rows[i][9])+ "</td>";//提醒类型
					inHtml = inHtml + "<td width='5%' >" + getDicValue('cur_type',data.result.rows[i][12]) + "</td>";//提醒币种
					inHtml = inHtml + "<td width='5%' style='padding-right: 2px;"+colorHtml2+"' align='right'>" + ajaxUtil.formatCurrency(data.result.rows[i][11]) + "</td>";//提醒金额
					inHtml = inHtml + "<td align='center'>" + "<img src='"+contextPath+"/images/query.gif' onClick=\"detail('"+data.result.rows[i][0]+"','"+ajaxUtil.checkNum(data.result.rows[i][15])+"');\"  title='查看详情' />";
//					inHtml = inHtml + "</td></tr>";
					inHtml += "</tr>";
					$('#wodetixing #tabbody').append(inHtml);
				}
			}else{
				$("#remindbtn").hide();
				var inHtml = "<tr><td style='text-align:center' colspan='20'><font color='red'>没有数据返回</font></td></tr>";
				$('#wodetixing #tabbody').append(inHtml);
			}
		initHeight();
		hideProgress();	
	},
	
	guanzhukehu:function(data,ajaxUtil){//关注客户
		var rows = data.result.rows;
		$("#guanzhukehu #gzflag").val(data.result.flag);
		if(rows && rows.length > 0){
			for(var i=0;i<rows.length;i++){
				var num = i%2;
				var inHtml = "<tr>";
				if(num==1){
					inHtml = "<tr class='table_double_col'>";
				}	
				inHtml += "<td class=\"tda\"> <a  href=\"javascript:void(0);\" onclick=\"panoramaView('"+rows[i][0]+"','"+rows[i][1]+"')\" >"+rows[i][0]+"</a></td>";
//				inHtml += "<td>"+rows[i][0]+"</td>";//edit by luke.lee 2016-5-12
				inHtml += "<td>"+rows[i][1]+"</td>";
				inHtml += "<td>"+getDicValue('level_type',rows[i][2])+"</td>";
				inHtml += "<td>"+getDicValue('cert_type',rows[i][3])+"</td>";
				inHtml += "<td>"+rows[i][4]+"</td>";
				inHtml += "<td>"+getDicValue('cust_status',rows[i][7])+"</td>";
				inHtml += "</tr>";
				$("#guanzhukehu #tabbody").append(inHtml);
			}
		}else{
			$("#gzmore").hide();
			var inHtml = "<tr><td style='text-align:center;' colspan='20'><font color='red'>没有数据返回</font></td></tr>";
			$('#guanzhukehu #tabbody').append(inHtml);
		}
		initHeight();
	},
	zichanbiandong_unit:function(data,ajaxUtil){//对公机构资产变动
		var rows = data.result.rows;
		if(rows && rows.length > 0){
			var len = rows.length%2==0?parseInt(rows.length/2):(parseInt(rows.length/2)+1);
			for(var i=0;i<len;i++){
				var num = i%2;
				var inHtml = "<tr>";
				if(num==1){
					inHtml = "<tr class='table_double_col'>";
				}	
				inHtml += "<td>"+rows[i][1]+"</td>";
				inHtml += "<td>"+ajaxUtil.formatCurrency(rows[i][2])+"</td>";
				inHtml += "<td>"+ajaxUtil.formatCurrency(rows[i][3])+"</td>";
				inHtml += "<td>"+ajaxUtil.formatCurrency(rows[i][4])+"</td>";
				inHtml += "<td>"+ajaxUtil.formatCurrency(rows[i][5])+"</td>";
				inHtml += "<td>"+ajaxUtil.formatCurrency(rows[i][6])+"</td>";
				if((i+len)<rows.length){
					inHtml += "<td>"+rows[i+len][1]+"</td>";
					inHtml += "<td style='margin-right:5px;'>"+ajaxUtil.formatCurrency(rows[i+len][2])+"</td>";
					inHtml += "<td style='margin-right:5px;'>"+ajaxUtil.formatCurrency(rows[i+len][3])+"</td>";
					inHtml += "<td style='margin-right:5px;'>"+ajaxUtil.formatCurrency(rows[i+len][4])+"</td>";
					inHtml += "<td style='margin-right:5px;'>"+ajaxUtil.formatCurrency(rows[i+len][5])+"</td>";
					inHtml += "<td style='margin-right:5px;'>"+ajaxUtil.formatCurrency(rows[i+len][6])+"</td>";
				}else{
					inHtml += "<td>&nbsp;</td>";
					inHtml += "<td>&nbsp;</td>";
					inHtml += "<td>&nbsp;</td>";
					inHtml += "<td>&nbsp;</td>";
					inHtml += "<td>&nbsp;</td>";
					inHtml += "<td>&nbsp;</td>";
				}
				inHtml += "</tr>";
				$("#zichanbiandong_unit #tabbody").append(inHtml);
			}
//			$("#zichanbiandong_unit").css("height", 440);
//			
//			$('#zichanbiandong_unittable').fixedHeaderTable();
//			reWidth("zichanbiandong_unittable","zichanbiandong_unit");
		}else{
			var inHtml = "<tr><td style='text-align:center;' colspan='20'><font color='red'>没有数据返回</font></td></tr>";
			$('#zichanbiandong_unit #tabbody').append(inHtml);
		}
		initHeight();
	},
	kehuzcbiandong_unit:function(data,ajaxUtil){//对公客户存款变动
		var top = data.result.top;
		var last = data.result.last;
		if((top || last) && (top.length>0 || last.length>0)){
			var toplen = 0;
			var lastlen = 0;
			if(top){
				toplen = top.length;
			}
			if(last){
				lastlen = last.length;
			}
			var len = toplen>lastlen?toplen:lastlen;
			for(var i=0;i<len;i++){
				if((toplen-1)>=i || (lastlen-1)>=i){
					var num = i%2;
					var inHtml = "<tr>";
					if(num==1){
						inHtml = "<tr class='table_double_col'>";
					}	
					if((toplen-1)>=i){
						inHtml += "<td>"+top[i][1]+"</td>";
						inHtml += "<td>"+ajaxUtil.formatCurrency(top[i][2])+"</td>";
						inHtml += "<td>"+ajaxUtil.formatCurrency(top[i][3])+"</td>";
						inHtml += "<td>"+ajaxUtil.formatCurrency(top[i][4])+"</td>";
					}else{
						inHtml += "<td>&nbsp;</td>";
						inHtml += "<td>&nbsp;</td>";
						inHtml += "<td>&nbsp;</td>";
						inHtml += "<td>&nbsp;</td>";
					}
					if((lastlen-1)>=i){
						inHtml += "<td>"+last[i][1]+"</td>";
						inHtml += "<td>"+ajaxUtil.formatCurrency(last[i][2])+"</td>";
						inHtml += "<td>"+ajaxUtil.formatCurrency(last[i][3])+"</td>";
						inHtml += "<td>"+ajaxUtil.formatCurrency(last[i][4])+"</td>";
					}else{
						inHtml += "<td>&nbsp;</td>";
						inHtml += "<td>&nbsp;</td>";
						inHtml += "<td>&nbsp;</td>";
						inHtml += "<td>&nbsp;</td>";
					}
					
					inHtml += "</tr>";
					$("#kehuzcbiandong_unit #tabbody").append(inHtml);
				}
			}
		}else{
			var inHtml = "<tr><td style='text-align:center !important;' colspan='20'><font color='red'>没有数据返回</font></td></tr>";
			$('#kehuzcbiandong_unit #tabbody').append(inHtml);
		}
		initHeight();
	},
	getAlreadyActivatedTabs:function(){
		return this.ardAvtTabArr;
	},
	setAlreadyActivatedTabs:function(tarid){
		var arr = this.getAlreadyActivatedTabs();
		if (!this.exists(tarid)) {
			arr.push(tarid);
		}
		
		this.ardAvtTabArr = arr;
	},
	exists:function(tarid){
		var arr = this.getAlreadyActivatedTabs();
		var str = arr.join(",");
		if (str.indexOf(tarid) < 0) {
			return false;
		}else{
			return true;
		}
	},
	getMaxWidth:function(){
		return $("#bootmtabs").width();
	},
	getMaxHeight:function(domid){
		if(domid){
			return $("#"+domid).height();
		}
		return 400;
	}
};
//查看详情
function detail(model_id,status){ 
	var tem= [model_id];	
	
	if(status=='0'){
		
		var idarr = [];
		idarr.push(model_id);
		var sobj = {
				className:'RemindQueryService',
				methodName:'updateEntity',
				params:lang.toJSONString([idarr])
		};
		$.post(url,sobj,function(result){
//			var systemObj = {
//					className:'RemindQueryService',
//					methodName:'MyRmind',
//					params:lang.toJSONString(tem)
//				};
			var result = eval('(' + result + ')');
			if(result.retCode == "0"){
				result = result.result; 
				if(result.success){
					renm = renm - 1;
					if (renm && renm != 0) {
						//var inHtml = "<font color='red'>"+"("+renm+")"+"</font>";
						$("#unread").empty();
						$("#unread").addClass("unread");
						var inHtml = renm;
						$("#unread").append(inHtml);
					}else{
						$("#unread").empty();
						$("#unread").removeClass();
					}
					
					$("#"+model_id).removeClass("colorHtml");
					$("#Myremindframe").contents().find("#"+model_id).removeClass("colorHtml");
				}
			}else{
				alert("操作失败：\n"+result.stackTrace);
			} 
		}); 
	}
	var paramObj = {
			className:'RemindQueryService',
			methodName:'getEntity',
			params:lang.toJSONString(tem)
		};	
	var formModel = $.post(url, paramObj, 
			function(data){
				var dataObj = eval("("+data+")");
				if(dataObj.retCode=='0'){  
					 
					$("#td_Cust_No").text(checknull(dataObj.result.rows[1]));
					$("#td_Cust_Name").text(checknull(dataObj.result.rows[2]));
					$("#td_Cust_Type").text(getDicValue('custType',dataObj.result.rows[3]));
					$("#td_Acct_No").text(checknull(dataObj.result.rows[4]));
					$("#td_rem_Type").text(getDicValue('remType',dataObj.result.rows[9]));
					$("#td_rem_cur").text(getDicValue('cur_type',dataObj.result.rows[12]));
					$("#td_rem_Nam").text(formatCurrency(dataObj.result.rows[11]));
					$("#td_rem_date").text(checknull(dataObj.result.rows[14]));
					
					$("#td_rem_readStatus").text(getDicValue('read_status',dataObj.result.rows[15]));
					$("#td_rem_readWay").text(getDicValue('remnwy',dataObj.result.rows[16]));
					$("#td_rem_emp").text(checknull(dataObj.result.rows[6]));
					$("#td_rem_org").text(checknull(dataObj.result.rows[8]));
					$("#td_rem_info").text(checknull(dataObj.result.rows[10]));
				} 
		});
	$("#detailForm").dialog({ modal: true ,width:600, title: "查看提醒详细信息", close:function(){},buttons:detailobj});
}

var detailobj = [ {
	id : "closeBtn",
	text : "关闭",
	click : function() {
		$("#detailForm").dialog("close");
	}
} ];

/*初始*/
$(function() {
	dialogMax = getHeight()-240;
$("#remindbtn").bind("click",function(){
	
	$("#MyremindDiv").dialog({
		modal : true,
		closeText: "关闭",
		draggable: false,
		resizable: false,
		height:dialogMax,//height必须指定，否则iframe height：100%无效
		width : 1000,
		title : "我的提醒列表",
		open:function(){			
		},
		close : function() { $("#MyremindDiv").dialog("destroy");},
		buttons : [ {
			id : "closeBtn",
			text : "关闭",
			click : function() {
				$("#MyremindDiv").dialog("close");
			}
		} ]
	});
	
});
	
});

/**关注客户，更多*/
function gzmore(){
	var flag = $("#guanzhukehu #gzflag").val();
	if("0" == flag){
		alert("没有关注客户");
	}else if("1" == flag){
		var frame = $("#frmright",parent.document);
		frame.attr("src",contextPath+'/pages/workplatform/my_cust_per.jsp?menuId=WorkPlatform_my_cust_per');
	}else if("2" == flag){
		var frame = $("#frmright",parent.document);
		frame.attr("src",contextPath+'/pages/workplatform/my_cust_unit.jsp?menuId=WorkPlatform_my_cust_unit');
	}
	return;
}
/**更多任务*/
function taskmore(){
	var frame = $("#frmright",parent.document);
	frame.attr("src",contextPath+'/pages/workplatform/task/platform_task.jsp?menuId=WorkPlatform_task');
}
function processTask(taskId,taskStatus,taskType,taskOwner,taskName,execEmp,taskResult,tarurl,refId){
	if("1" == taskType){
		//手工任务
		if(taskOwner == execEmp){
			if("1" == taskStatus){
				$("#spanzhuanfa").show();
				$("#spantuihui").hide();
			}else{
				$("#spanzhuanfa").hide();
				$("#spantuihui").hide();
			}
			
		}else{
			//转发任务,可以退回
			if("1" == taskStatus){
				$("#spanzhuanfa").hide();
				$("#spantuihui").show();
			}else{
				$("#spanzhuanfa").hide();
				$("#spantuihui").hide();
			}
			
		}
		
		$("#processHanderTask").dialog({
			modal : true,
			closeText: "关闭",
			draggable: false,
			resizable: false,//dialogClass  
			height:350,
			width:450,
			title : "任务处理-【"+taskName+"】",
			close : function() {
				document.getElementById("phtForm").reset();
				$("#processWay").attr("disabled",false);
	    		$("#taskResult").attr("disabled",false);
			},
			open:function(){
				$("#task_id_hid").val(taskId);
				$("#curTaskStatus").text(getDicValue("task_status",taskStatus));
				$("#taskResult").val(checknull(taskResult));
			},
			buttons : [
			    {
			    	text:'保存',
			    	click:function(){
			    		if(!$("#spanzhuanfa").is(":hidden")){
			    			if($("#processWay").attr("disabled")){
				    			//保存转发
				    			if(!inputEmpty("zhuanfatar")){
				    				var json = {
				    						zhuanfatar:$("#zhuanfatar").val(),
				    						zhuanfatarorg:$("#zhuanfatarorg").val(),
				    						execEmp:execEmp,
				    						taskId:taskId
				    				};
				    				var o = {
											className : 'TaskService',
											methodName : 'saveZhuanFaTask',
											params :lang.toJSONString([json])
									};
									var handler = $.post(url,o,function(data){
										var dataObj = eval("(" + data + ")");
										if(dataObj.result){
											if(dataObj.result.success){
												$("#processHanderTask").dialog("close");
												var pfhp = new PlatformHomePage();
												var auTask = new AjaxUtil(url, {
													className : "WorkPlatformService",
													methodName : "getDaiBanGongZuo",
													params : ''
												});
												auTask.post1(true, pfhp, auTask, "daibangongzuo");
											}
											alert(dataObj.result.msg);
										}
									});
									handler.error(function(){alert("系统错误,请联系管理员.");hideProgress();});
				    			}else{
				    				var input = document.getElementById("zhuanfa");
				    				setTimeout(function(){input.focus();},50);
				    				return;
				    			}
				    		}else{
				    			//保存处理
				    			saveProcess(taskId);
				    		}
			    		}else if(!$("#spantuihui").is(":hidden")){
			    			if($("#processWay").attr("disabled")){
				    			//保存退回
				    			if(!inputEmpty("tuihui")){
				    				var json = {
				    						ownerEmp:execEmp,
				    						execEmp:taskOwner,
				    						taskId:taskId
				    				};
				    				var o = {
											className : 'TaskService',
											methodName : 'saveBackTask',
											params :lang.toJSONString([json])
									};
									var handler = $.post(url,o,function(data){
										var dataObj = eval("(" + data + ")");
										if(dataObj.result){
											if(dataObj.result.success){
												$("#processHanderTask").dialog("close");
												var pfhp = new PlatformHomePage();
												var auTask = new AjaxUtil(url, {
													className : "WorkPlatformService",
													methodName : "getDaiBanGongZuo",
													params : ''
												});
												auTask.post1(true, pfhp, auTask, "daibangongzuo");
											}
											alert(dataObj.result.msg);
										}
									});
									handler.error(function(){alert("系统错误,请联系管理员.");hideProgress();});
				    			}else{
				    				var input = document.getElementById("tuihui");
				    				setTimeout(function(){input.focus();},50);
				    				return;
				    			}
				    		}else{
				    			//保存处理
				    			saveProcess(taskId);
				    		}
			    		}
			    	}
			    },{
			    	text:'取消',
			    	click:function(){
			    		$("#processHanderTask").dialog("close");
			    	}
			    }       
			]
		});
	}else {
		//审核类型的任务
		processAuditTask(taskId,taskStatus,taskType,taskOwner,taskName,execEmp,taskResult,tarurl,refId);
	}
}
function processAuditTask(taskId,taskStatus,taskType,taskOwner,taskName,execEmp,taskResult,tarurl,refId){
	var width = $(parent.window).width();
	width = (width-50);
	$("#processTaskDiv").dialog({
		modal : true,
		closeText: "关闭",
		draggable: false,
		resizable: false,//dialogClass  
		height:getHeight()-125,
		width:width,
		title : "任务处理-【"+taskName+"】",
		close : function() {
			//刷新列表
			showProgress();
			var pfhp = new PlatformHomePage();
			var auTask = new AjaxUtil(url, {
				className : "WorkPlatformService",
				methodName : "getDaiBanGongZuo",
				params : ''
			});
			auTask.post1(true, pfhp, auTask, "daibangongzuo");
		},
		open:function(){
			//依据不同类型，跳转不同页面
			$("#processTaskFrm").attr("src",contextPath+tarurl);
			var t={
					taskId:taskId,
					refId:refId
			};
			var frm = document.getElementById("processTaskFrm");
			if(frm.attachEvent){
				frm.attachEvent("onload",function(){
					$("#processTaskFrm")[0].contentWindow.doTaskSearch(t);
				});
			}else{
				frm.onload=function(){
					$("#processTaskFrm")[0].contentWindow.doTaskSearch(t);
				};
			}
		},
		buttons :[]
	});
}
/**
 * 选择执行人
 */
function openSel(flag){
	$("#chooseTransactor").dialog({
		modal : true,
		closeText: "关闭",
		draggable: false,
		resizable: false,//dialogClass  
		height:dialogMaxHeight,
		width:700,
		title : "选择任务执行人",
		close : function() {
		},
		open:function(){
			//动态设置iframe地址
			$("#chooseTransactorFrm").attr("src",contextPath+"/common/page/common_user.jsp?checkbox=0");
			iframeDefaultFuc("chooseTransactorFrm");
		},
		buttons : [
		    {
		    	text:'保存',
		    	click:function(){
		    		//回写选择的用户名称和代码
		    		var cks = $("#chooseTransactorFrm").contents().find("input:radio:checked");
		    		if(cks.length < 1){
		    			alert("请选择一条记录操作");
		    			return;
		    		}
		    		var ck = cks[0];
		    		if("1" == flag){
		    			$("#taskExcEmpcode").val($(ck).attr("id"));
			    		$("#taskExcEmp").val($(ck).attr("username"));
			    		$("#taskExcOrgcode").val($(ck).attr("userorg"));
		    		}else if("2" == flag){
		    			$("#zhuanfatar").val($(ck).attr("id"));
		    			$("#zhuanfatarorg").val($(ck).attr("userorg"));
			    		$("#zhuanfa").val($(ck).attr("username"));
			    		$("#processWay").val('');
			    		$("#processWay").attr("disabled",true);
			    		$("#taskResult").val('');
			    		$("#taskResult").attr("disabled",true);
		    		}
		    		
		    		
		    		$("#chooseTransactor").dialog("close");
		    	}
		    },{
		    	text:'取消',
		    	click:function(){
		    		$("#chooseTransactor").dialog("close");
		    	}
		    }       
		]
	});
}

//退回任务
function backTask(){
	$("#tuihui").val("退回任务");
	$("#processWay").val('');
	$("#processWay").attr("disabled",true);
	$("#taskResult").val('');
	$("#taskResult").attr("disabled",true);
}