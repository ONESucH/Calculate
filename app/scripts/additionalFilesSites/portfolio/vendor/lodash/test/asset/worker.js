self.console||(self.console={log:function(){}}),addEventListener("message",function(e){if(e.data){try{importScripts("../"+e.data)}catch(e){var s=e.lineNumber,t=(null==s?"":s+": ")+e.message;self._={VERSION:t}}postMessage(_.VERSION)}},!1);
//# sourceMappingURL=worker.js.map
