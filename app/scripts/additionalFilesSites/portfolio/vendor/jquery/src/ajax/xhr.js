define(["../core","../var/support","../ajax"],function(e,t){e.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(e){}};var r={0:200,1223:204},n=e.ajaxSettings.xhr();t.cors=!!n&&"withCredentials"in n,t.ajax=n=!!n,e.ajaxTransport(function(e){var o,s;if(t.cors||n&&!e.crossDomain)return{send:function(t,n){var a,i=e.xhr();if(i.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)i[a]=e.xhrFields[a];e.mimeType&&i.overrideMimeType&&i.overrideMimeType(e.mimeType),e.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest");for(a in t)i.setRequestHeader(a,t[a]);o=function(e){return function(){o&&(o=s=i.onload=i.onerror=i.onabort=i.onreadystatechange=null,"abort"===e?i.abort():"error"===e?"number"!=typeof i.status?n(0,"error"):n(i.status,i.statusText):n(r[i.status]||i.status,i.statusText,"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},i.onload=o(),s=i.onerror=o("error"),void 0!==i.onabort?i.onabort=s:i.onreadystatechange=function(){4===i.readyState&&window.setTimeout(function(){o&&s()})},o=o("abort");try{i.send(e.hasContent&&e.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}})});
//# sourceMappingURL=xhr.js.map
