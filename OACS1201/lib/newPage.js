conduit.on("newPage",function(data){
	try{
		if(data && data.page && data.page.modelId){
			if(top && top.document && top.document.querySelector("#mobileMainContent")){
				top.document.querySelector("#mobileMainContent").scrollTop=0;
			}
			if(top && top.document && top.document.body){
				top.document.body.scrollTop=0;
			}
		}
	}catch(err){
		console.log("err")
	}
})