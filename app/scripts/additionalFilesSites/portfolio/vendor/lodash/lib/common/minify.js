"use strict";function minify(i,e,u,f){_.isFunction(e)&&(_.isObject(u)&&(f=u),u=e,e=void 0),e||(e=i.replace(/(?=\.js$)/,".min"));var r=uglify.minify(i,_.defaults(f||{},uglifyOptions));fs.writeFile(e,r.code,"utf-8",u)}var _=require("lodash"),fs=require("fs-extra"),uglify=require("uglify-js"),uglifyOptions=require("./uglify.options");module.exports=minify;
//# sourceMappingURL=minify.js.map
