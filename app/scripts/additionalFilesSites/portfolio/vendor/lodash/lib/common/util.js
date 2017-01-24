"use strict";function Hash(s){return _.transform(s,function(s,t,e){s[e]=!_.isPlainObject(t)||t instanceof Hash?t:new Hash(t)},this)}var _=require("lodash");Hash.prototype=Object.create(null),module.exports={Hash:Hash};
//# sourceMappingURL=util.js.map
