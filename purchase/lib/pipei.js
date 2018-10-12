
YSP.appRenderer.onBeforeShowLoading = function(callback) {
  
  // 只有 执行 callback() 才会显示 loading
  
  callback({
    text: '加载中，请稍候...'
  })
}