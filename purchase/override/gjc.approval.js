
if (typeof(gjc) == "undefined")
	gjc = {};

gjc.approval = {
	// 审批流
	// belongid:必填- 不同的审批业务
	// type:必填 -- 同一业务下的多种审批类型
	// sort:必填 --- 同一类型下的多次审批
	checkflow : function (sender, option, callback) {
		if (typeof(option) != "object") {
			mini.alert("参数错误！");
			return false;
		}
		var checkflow = "/gjc/base/wf/gwf.jsp";
		// 添加模板类型，具体对应到计划阶段选择计划模板，方案选方案模板...
		checkflow += "?tcalias=" + option.tcalias + "&objtype=" + option.objtype;

		var dlg = {
			url : checkflow,
			showMaxButton : true,
			width : 1200,
			height : 600,
			ondestroy : function (action) {
				if (action == "save" || action == "send" || action == "invocation") {
					var _message = '确定要继续操作吗？';
					if (action.indexOf("send") != -1) {
						_message = '确定要发起审批流吗？';
					}
					if (action.indexOf("invocation") != -1) {
						_message = '确定要启用审批流吗？';

					}
					var iframe = this.getIFrameEl();
					var win = iframe.contentWindow;
					win.mini.confirm(_message, "提示",
						function (confirmAction) {
						if (confirmAction == "ok") {
							var msg = action == "save" ? "保存" : (action == "invocation" ? "启用" : "发送");

							option.flow = iframe.contentWindow.GetData();
							option.action = action;
							var messageid = mini.loading("正在" + msg + "审批流，请稍候 ...", "提示");
							//var result = false;
							var url = '/gjc/base/wf/approval/save.do?action=' + option.action;
							if (action == "invocation")
								url = '/gjc/base/wf/approval/invocation.do';
							$.ajax({
								url : url,
								data : {
									bvo : {
										p : option
									}
								},
								async : false,
								type : 'POST',
								dataType : 'json',
								success : function (data) {
									mini.hideMessageBox(messageid);
									if (data && data.success && data.success != "false") {
										if (callback) {
											if (iframe.contentWindow.CloseOwnerWindow)
												iframe.contentWindow.CloseOwnerWindow();
											callback(sender, option, data.data);
										} else {
											if (action == "refresh") {
												// 重新刷新审批流
												mini.open({
													title : option.title,
													width : 800,
													height : 600,
													url : data.data
												});
											} else {
												msgOk('审批流' + msg + '成功！');
												setTimeout(function () {}, 2000); // 延迟2秒执行
												if (action.indexOf("send") != -1) {
													$.refresh();
													//result = true;
													// if (window.CloseOwnerWindow)
													// return
													// window.CloseOwnerWindow("ok");
												}
											}
										}
									} else {
										win.mini.alert(data && data.data && data.data.msg ? data.data.msg : "操作失败！");
									}
								},
								error : function () {
									mini.hideMessageBox(messageid);
									mini.alert('审批流' + msg + '失败！');
								}
							});
							//return result;
						} else {
							//return false;
						}
					});
					return false;
				}
			},
			onload : function () {

				// 人员选择器接口
				var flowOption = {
					readonly : option.readonly,
					mapping : {
						// text: '{positionnames}\n{employeename}',
						// text: '{orgname}\n{username}',
						text : '{username}',
						id : 'employeeid'
					},
					handler : {
						open : function (node, sender) {
							// /<summary>弹出框选人</summary>
							var callback = function (sender, data) {
								var node = sender.node;
								$.append(node.item, data[0]);
								sender.render();
								return true;
							};
							sender.node = node;
							Gjc.dialog.employee(sender, callback);
						}
					}
				};

				var iframe = this.getIFrameEl();
				iframe.contentWindow.SetOption(flowOption);
				iframe.contentWindow.SetData(option);

				$.ajax({
					url : '/gjc/base/wf/approval/find.do',
					data : {
						belongid : option.belongid,
						type : option.type,
						recycle : option.recycle,
						defualtflow : option.defualtflow
					},
					type : 'post',
					dataType : 'XML',
					success : function (xml) {
						var status = $(xml).find('flow').attr('status');
						if (status == '3') {
							$('#btnInvocation', iframe.contentWindow.document).attr('visible', true);
							$('#btnInvocation', iframe.contentWindow.document).css("display", "");
						}
						$.append(iframe.contentWindow.Flow, option);
						iframe.contentWindow.Open(xml);
					},
					error : function () {
						mini.alert('审批流读取错误');
					}
				});
			}
		};

		$.append(dlg, option);
		if (option.refresh)
			dlg.url = "/gjc/base/wf/gwf.jsp?refresh=true";
		mini.open(dlg);
	},
	viewflow : function (sender, opt, callback) {
		var opt = {
			url : "/gjc/base/wf/approval/last.do",
			async : false,
			type : "post",
			data : opt,
			dataType : "json",
			success : function (data) {
				if (data && data.belongid) {
					window.open('/gjc/base/wf/approval/view.do?action=approval&belongid=' + data.belongid + '&approvalid=' + data.approvalid + '&status=' + data.status + "&type=" + data.type);
				} else {
					mini.alert("没有审批单！");
				}
			},
			error : function () {
				mini.alert("获取数据失败！");
			}
		}
		if (callback)
			opt.success = callback;
		jQuery.ajax(opt);
	},
	renovateflow : function (sender, opt, callback) {
		var opt = {
			url : "/gjc/base/wf/approval/renovate.do",
			async : false,
			type : "post",
			data : {
				bvo : {
					p : opt
				}
			},
			dataType : "json",
			success : function (data) {
				mini.alert(data && data.data && data.data.msg ? data.data.msg : "审批流修复错误！");
			},
			error : function () {
				mini.alert('审批流修复错误');
			}
		}
		if (callback)
			opt.success = callback;
		jQuery.ajax(opt);
	},
	triggerflow : function (sender, opt, callback) {
		var opt = {
			url : "/gjc/base/wf/approval/trigger.do",
			async : false,
			type : "post",
			data : {
				bvo : {
					p : opt
				}
			},
			dataType : "json",
			success : function (data) {
				mini.alert(data && data.data && data.data.msg ? data.data.msg : "审批流跳过成功！");
			},
			error : function () {
				mini.alert('审批流跳过错误');
			}
		}
		if (callback)
			opt.success = callback;
		jQuery.ajax(opt);
	}
}
