define(["./core"],function(n){"use strict";n.fn.extend({bind:function(n,t,e){return this.on(n,null,t,e)},unbind:function(n,t){return this.off(n,null,t)},delegate:function(n,t,e,i){return this.on(t,n,e,i)},undelegate:function(n,t,e){return 1===arguments.length?this.off(n,"**"):this.off(t,n||"**",e)}}),n.parseJSON=JSON.parse});
//# sourceMappingURL=deprecated.js.map
