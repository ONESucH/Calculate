define(["../core","./var/nonce","./var/rquery","../ajax"],function(n,a,o){var t=[],r=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var o=t.pop()||n.expando+"_"+a++;return this[o]=!0,o}}),n.ajaxPrefilter("json jsonp",function(a,e,s){var p,c,l,i=a.jsonp!==!1&&(r.test(a.url)?"url":"string"==typeof a.data&&0===(a.contentType||"").indexOf("application/x-www-form-urlencoded")&&r.test(a.data)&&"data");if(i||"jsonp"===a.dataTypes[0])return p=a.jsonpCallback=n.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,i?a[i]=a[i].replace(r,"$1"+p):a.jsonp!==!1&&(a.url+=(o.test(a.url)?"&":"?")+a.jsonp+"="+p),a.converters["script json"]=function(){return l||n.error(p+" was not called"),l[0]},a.dataTypes[0]="json",c=window[p],window[p]=function(){l=arguments},s.always(function(){void 0===c?n(window).removeProp(p):window[p]=c,a[p]&&(a.jsonpCallback=e.jsonpCallback,t.push(p)),l&&n.isFunction(c)&&c(l[0]),l=c=void 0}),"script"})});
//# sourceMappingURL=jsonp.js.map
