window.onload=function(){
  setAndroidFontsize();
}
window.onresize=function(){
  setAndroidFontsize();
}

// 安卓解决微信浏览器字体被调大导致页面错乱的办法
function setAndroidFontsize() {
  if(typeof window.WeixinJSBridge == "object" && typeof window.WeixinJSBridge.invoke == "function"){
    handleFontSize();
  }else{
    if(document.addEventListener) {
      document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    }else if(document.attachEvent) {
      document.attachEvent("WeixinJSBridgeReady", handleFontSize);
      document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    }
  }
}
  
function handleFontSize() {　　　　　　　　　　
  window.WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
  window.WeixinJSBridge.on('menu:setfont', function () {
    window.WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
  });
}