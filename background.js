//https://developer.mozilla.org/zh-CN/Add-ons/WebExtensions
browser.tabs.onUpdated.addListener(function (table_id,data,tab) {        
    if(tab.url.indexOf("about:")==0){
		browser.pageAction.hide(table_id);
	}else{
		browser.pageAction.show(table_id);
	}
});  


