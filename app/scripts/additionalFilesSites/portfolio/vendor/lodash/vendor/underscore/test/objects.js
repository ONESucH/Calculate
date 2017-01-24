!function(){var e="function"==typeof require?require(".."):window._;QUnit.module("Objects");var t="object"==typeof document?document.createElement("div"):void 0;QUnit.test("keys",function(t){t.deepEqual(e.keys({one:1,two:2}),["one","two"],"can extract the keys from an object");var n=[];n[1]=0,t.deepEqual(e.keys(n),["1"],"is not fooled by sparse arrays; see issue #95"),t.deepEqual(e.keys(null),[]),t.deepEqual(e.keys(void 0),[]),t.deepEqual(e.keys(1),[]),t.deepEqual(e.keys("a"),[]),t.deepEqual(e.keys(!0),[]);var a={constructor:Object,valueOf:e.noop,hasOwnProperty:null,toString:5,toLocaleString:void 0,propertyIsEnumerable:/a/,isPrototypeOf:this,__defineGetter__:Boolean,__defineSetter__:{},__lookupSetter__:!1,__lookupGetter__:[]},i=["constructor","valueOf","hasOwnProperty","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","__defineGetter__","__defineSetter__","__lookupSetter__","__lookupGetter__"].sort();t.deepEqual(e.keys(a).sort(),i,"matches non-enumerable properties")}),QUnit.test("allKeys",function(t){function n(){}function a(){}t.deepEqual(e.allKeys({one:1,two:2}),["one","two"],"can extract the allKeys from an object");var i=[];i[1]=0,t.deepEqual(e.allKeys(i),["1"],"is not fooled by sparse arrays; see issue #95"),i.a=i,t.deepEqual(e.allKeys(i),["1","a"],"is not fooled by sparse arrays with additional properties"),e.each([null,void 0,1,"a",!0,NaN,{},[],new Number(5),new Date(0)],function(n){t.deepEqual(e.allKeys(n),[])});var o={constructor:Object,valueOf:e.noop,hasOwnProperty:null,toString:5,toLocaleString:void 0,propertyIsEnumerable:/a/,isPrototypeOf:this},r=["constructor","valueOf","hasOwnProperty","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf"].sort();t.deepEqual(e.allKeys(o).sort(),r,"matches non-enumerable properties"),n.prototype.foo="foo";var s=new n;s.bar="bar",t.deepEqual(e.allKeys(s).sort(),["bar","foo"],"should include inherited keys"),a.x="z",t.deepEqual(e.allKeys(a),["x"],"should get keys from constructor")}),QUnit.test("values",function(t){t.deepEqual(e.values({one:1,two:2}),[1,2],"can extract the values from an object"),t.deepEqual(e.values({one:1,two:2,length:3}),[1,2,3],'... even when one of them is "length"')}),QUnit.test("pairs",function(t){t.deepEqual(e.pairs({one:1,two:2}),[["one",1],["two",2]],"can convert an object into pairs"),t.deepEqual(e.pairs({one:1,two:2,length:3}),[["one",1],["two",2],["length",3]],'... even when one of them is "length"')}),QUnit.test("invert",function(t){var n={first:"Moe",second:"Larry",third:"Curly"};t.deepEqual(e.keys(e.invert(n)),["Moe","Larry","Curly"],"can invert an object"),t.deepEqual(e.invert(e.invert(n)),n,"two inverts gets you back where you started"),n={length:3},t.equal(e.invert(n)[3],"length",'can invert an object with "length"')}),QUnit.test("functions",function(t){var n={a:"dash",b:e.map,c:/yo/,d:e.reduce};t.deepEqual(["b","d"],e.functions(n),"can grab the function names of any passed-in object");var a=function(){};a.prototype.run=function(){},t.deepEqual(e.functions(new a),["run"],"also looks up functions on the prototype")}),QUnit.test("methods",function(t){t.strictEqual(e.methods,e.functions,"is an alias for functions")}),QUnit.test("extend",function(t){var n;t.equal(e.extend({},{a:"b"}).a,"b","can extend an object with the attributes of another"),t.equal(e.extend({a:"x"},{a:"b"}).a,"b","properties in source override destination"),t.equal(e.extend({x:"x"},{a:"b"}).x,"x","properties not in source don't get overriden"),n=e.extend({x:"x"},{a:"a"},{b:"b"}),t.deepEqual(n,{x:"x",a:"a",b:"b"},"can extend from multiple source objects"),n=e.extend({x:"x"},{a:"a",x:2},{a:"b"}),t.deepEqual(n,{x:2,a:"b"},"extending from multiple source objects last property trumps"),n=e.extend({},{a:void 0,b:null}),t.deepEqual(e.keys(n),["a","b"],"extend copies undefined values");var a=function(){};a.prototype={a:"b"};var i=new a;i.c="d",t.deepEqual(e.extend({},i),{a:"b",c:"d"},"extend copies all properties from source"),e.extend(i,{}),t.ok(!i.hasOwnProperty("a"),"extend does not convert destination object's 'in' properties to 'own' properties");try{n={},e.extend(n,null,void 0,{a:1})}catch(e){}t.equal(n.a,1,"should not error on `null` or `undefined` sources"),t.strictEqual(e.extend(null,{a:1}),null,"extending null results in null"),t.strictEqual(e.extend(void 0,{a:1}),void 0,"extending undefined results in undefined")}),QUnit.test("extendOwn",function(t){var n;t.equal(e.extendOwn({},{a:"b"}).a,"b","can extend an object with the attributes of another"),t.equal(e.extendOwn({a:"x"},{a:"b"}).a,"b","properties in source override destination"),t.equal(e.extendOwn({x:"x"},{a:"b"}).x,"x","properties not in source don't get overriden"),n=e.extendOwn({x:"x"},{a:"a"},{b:"b"}),t.deepEqual(n,{x:"x",a:"a",b:"b"},"can extend from multiple source objects"),n=e.extendOwn({x:"x"},{a:"a",x:2},{a:"b"}),t.deepEqual(n,{x:2,a:"b"},"extending from multiple source objects last property trumps"),t.deepEqual(e.extendOwn({},{a:void 0,b:null}),{a:void 0,b:null},"copies undefined values");var a=function(){};a.prototype={a:"b"};var i=new a;i.c="d",t.deepEqual(e.extendOwn({},i),{c:"d"},"copies own properties from source"),n={},t.deepEqual(e.extendOwn(n,null,void 0,{a:1}),{a:1},"should not error on `null` or `undefined` sources"),e.each(["a",5,null,!1],function(n){t.strictEqual(e.extendOwn(n,{a:1}),n,"extending non-objects results in returning the non-object value")}),t.strictEqual(e.extendOwn(void 0,{a:1}),void 0,"extending undefined results in undefined"),n=e.extendOwn({a:1,0:2,1:"5",length:6},{0:1,1:2,length:2}),t.deepEqual(n,{a:1,0:1,1:2,length:2},"should treat array-like objects like normal objects")}),QUnit.test("assign",function(t){t.strictEqual(e.assign,e.extendOwn,"is an alias for extendOwn")}),QUnit.test("pick",function(t){var n;n=e.pick({a:1,b:2,c:3},"a","c"),t.deepEqual(n,{a:1,c:3},"can restrict properties to those named"),n=e.pick({a:1,b:2,c:3},["b","c"]),t.deepEqual(n,{b:2,c:3},"can restrict properties to those named in an array"),n=e.pick({a:1,b:2,c:3},["a"],"b"),t.deepEqual(n,{a:1,b:2},"can restrict properties to those named in mixed args"),n=e.pick(["a","b"],1),t.deepEqual(n,{1:"b"},"can pick numeric properties"),e.each([null,void 0],function(n){t.deepEqual(e.pick(n,"hasOwnProperty"),{},"Called with null/undefined"),t.deepEqual(e.pick(n,e.constant(!0)),{})}),t.deepEqual(e.pick(5,"toString","b"),{toString:Number.prototype.toString},"can iterate primitives");var a={a:1,b:2,c:3},i=function(e,n,i){return t.strictEqual(n,{1:"a",2:"b",3:"c"}[e]),t.strictEqual(i,a),e!==this.value};n=e.pick(a,i,{value:2}),t.deepEqual(n,{a:1,c:3},"can accept a predicate and context");var o=function(){};o.prototype={a:1,b:2,c:3};var r=new o;t.deepEqual(e.pick(r,"a","c"),{a:1,c:3},"include prototype props"),t.deepEqual(e.pick(a,function(e,t){return 3===this[t]&&this===r},r),{c:3},"function is given context"),t.ok(!e.has(e.pick({},"foo"),"foo"),"does not set own property if property not in object"),e.pick(a,function(e,n,i){t.equal(i,a,"passes same object as third parameter of iteratee")})}),QUnit.test("omit",function(t){var n;n=e.omit({a:1,b:2,c:3},"b"),t.deepEqual(n,{a:1,c:3},"can omit a single named property"),n=e.omit({a:1,b:2,c:3},"a","c"),t.deepEqual(n,{b:2},"can omit several named properties"),n=e.omit({a:1,b:2,c:3},["b","c"]),t.deepEqual(n,{a:1},"can omit properties named in an array"),n=e.omit(["a","b"],0),t.deepEqual(n,{1:"b"},"can omit numeric properties"),t.deepEqual(e.omit(null,"a","b"),{},"non objects return empty object"),t.deepEqual(e.omit(void 0,"toString"),{},"null/undefined return empty object"),t.deepEqual(e.omit(5,"toString","b"),{},"returns empty object for primitives");var a={a:1,b:2,c:3},i=function(e,n,i){return t.strictEqual(n,{1:"a",2:"b",3:"c"}[e]),t.strictEqual(i,a),e!==this.value};n=e.omit(a,i,{value:2}),t.deepEqual(n,{b:2},"can accept a predicate");var o=function(){};o.prototype={a:1,b:2,c:3};var r=new o;t.deepEqual(e.omit(r,"b"),{a:1,c:3},"include prototype props"),t.deepEqual(e.omit(a,function(e,t){return 3===this[t]&&this===r},r),{a:1,b:2},"function is given context")}),QUnit.test("defaults",function(t){var n={zero:0,one:1,empty:"",nan:NaN,nothing:null};e.defaults(n,{zero:1,one:10,twenty:20,nothing:"str"}),t.equal(n.zero,0,"value exists"),t.equal(n.one,1,"value exists"),t.equal(n.twenty,20,"default applied"),t.equal(n.nothing,null,"null isn't overridden"),e.defaults(n,{empty:"full"},{nan:"nan"},{word:"word"},{word:"dog"}),t.equal(n.empty,"","value exists"),t.ok(e.isNaN(n.nan),"NaN isn't overridden"),t.equal(n.word,"word","new value is added, first one wins");try{n={},e.defaults(n,null,void 0,{a:1})}catch(e){}t.equal(n.a,1,"should not error on `null` or `undefined` sources"),t.deepEqual(e.defaults(null,{a:1}),{a:1},"defaults skips nulls"),t.deepEqual(e.defaults(void 0,{a:1}),{a:1},"defaults skips undefined")}),QUnit.test("clone",function(t){var n={name:"moe",lucky:[13,27,34]},a=e.clone(n);t.equal(a.name,"moe","the clone as the attributes of the original"),a.name="curly",t.ok("curly"===a.name&&"moe"===n.name,"clones can change shallow attributes without affecting the original"),a.lucky.push(101),t.equal(e.last(n.lucky),101,"changes to deep attributes are shared with the original"),t.equal(e.clone(void 0),void 0,"non objects should not be changed by clone"),t.equal(e.clone(1),1,"non objects should not be changed by clone"),t.equal(e.clone(null),null,"non objects should not be changed by clone")}),QUnit.test("create",function(t){var n=function(){};n.prototype={foo:function(){},bar:2},e.each(["foo",null,void 0,1],function(n){t.deepEqual(e.create(n),{},"should return empty object when a non-object is provided")}),t.ok(e.create([])instanceof Array,"should return new instance of array when array is provided");var a=function(){};a.prototype=e.create(n.prototype),t.ok(new a instanceof n,"object should inherit prototype");var i=function(){};a.prototype=e.create(n.prototype,{func:i}),t.strictEqual(a.prototype.func,i,"properties should be added to object"),a.prototype=e.create(n.prototype,{constructor:a}),t.strictEqual(a.prototype.constructor,a),a.prototype.foo="foo";var o=e.create(a.prototype,new a);t.ok(!o.hasOwnProperty("foo"),"should only add own properties")}),QUnit.test("isEqual",function(t){function n(){this.value=1}function a(){this.value=1}function i(){this.a=1}n.prototype.value=1,a.prototype.value=2,t.ok(e.isEqual(null,null),"`null` is equal to `null`"),t.ok(e.isEqual(),"`undefined` is equal to `undefined`"),t.ok(!e.isEqual(0,-0),"`0` is not equal to `-0`"),t.ok(!e.isEqual(-0,0),"Commutative equality is implemented for `0` and `-0`"),t.ok(!e.isEqual(null,void 0),"`null` is not equal to `undefined`"),t.ok(!e.isEqual(void 0,null),"Commutative equality is implemented for `null` and `undefined`"),t.ok(e.isEqual("Curly","Curly"),"Identical string primitives are equal"),t.ok(e.isEqual(new String("Curly"),new String("Curly")),"String objects with identical primitive values are equal"),t.ok(e.isEqual(new String("Curly"),"Curly"),"String primitives and their corresponding object wrappers are equal"),t.ok(e.isEqual("Curly",new String("Curly")),"Commutative equality is implemented for string objects and primitives"),t.ok(!e.isEqual("Curly","Larry"),"String primitives with different values are not equal"),t.ok(!e.isEqual(new String("Curly"),new String("Larry")),"String objects with different primitive values are not equal"),t.ok(!e.isEqual(new String("Curly"),{toString:function(){return"Curly"}}),"String objects and objects with a custom `toString` method are not equal"),t.ok(e.isEqual(75,75),"Identical number primitives are equal"),t.ok(e.isEqual(new Number(75),new Number(75)),"Number objects with identical primitive values are equal"),t.ok(e.isEqual(75,new Number(75)),"Number primitives and their corresponding object wrappers are equal"),t.ok(e.isEqual(new Number(75),75),"Commutative equality is implemented for number objects and primitives"),t.ok(!e.isEqual(new Number(0),-0),"`new Number(0)` and `-0` are not equal"),t.ok(!e.isEqual(0,new Number((-0))),"Commutative equality is implemented for `new Number(0)` and `-0`"),t.ok(!e.isEqual(new Number(75),new Number(63)),"Number objects with different primitive values are not equal"),t.ok(!e.isEqual(new Number(63),{valueOf:function(){return 63}}),"Number objects and objects with a `valueOf` method are not equal"),t.ok(e.isEqual(NaN,NaN),"`NaN` is equal to `NaN`"),t.ok(e.isEqual(new Number(NaN),NaN),"Object(`NaN`) is equal to `NaN`"),t.ok(!e.isEqual(61,NaN),"A number primitive is not equal to `NaN`"),t.ok(!e.isEqual(new Number(79),NaN),"A number object is not equal to `NaN`"),t.ok(!e.isEqual(1/0,NaN),"`Infinity` is not equal to `NaN`"),t.ok(e.isEqual(!0,!0),"Identical boolean primitives are equal"),t.ok(e.isEqual(new Boolean,new Boolean),"Boolean objects with identical primitive values are equal"),t.ok(e.isEqual(!0,new Boolean((!0))),"Boolean primitives and their corresponding object wrappers are equal"),t.ok(e.isEqual(new Boolean((!0)),!0),"Commutative equality is implemented for booleans"),t.ok(!e.isEqual(new Boolean((!0)),new Boolean),"Boolean objects with different primitive values are not equal"),t.ok(!e.isEqual(new Boolean((!1)),!0),"`new Boolean(false)` is not equal to `true`"),t.ok(!e.isEqual("75",75),"String and number primitives with like values are not equal"),t.ok(!e.isEqual(new Number(63),new String(63)),"String and number objects with like values are not equal"),t.ok(!e.isEqual(75,"75"),"Commutative equality is implemented for like string and number values"),t.ok(!e.isEqual(0,""),"Number and string primitives with like values are not equal"),t.ok(!e.isEqual(1,!0),"Number and boolean primitives with like values are not equal"),t.ok(!e.isEqual(new Boolean((!1)),new Number(0)),"Boolean and number objects with like values are not equal"),t.ok(!e.isEqual(!1,new String("")),"Boolean primitives and string objects with like values are not equal"),t.ok(!e.isEqual(12564504e5,new Date(2009,9,25)),"Dates and their corresponding numeric primitive values are not equal"),t.ok(e.isEqual(new Date(2009,9,25),new Date(2009,9,25)),"Date objects referencing identical times are equal"),t.ok(!e.isEqual(new Date(2009,9,25),new Date(2009,11,13)),"Date objects referencing different times are not equal"),t.ok(!e.isEqual(new Date(2009,11,13),{getTime:function(){return 12606876e5}}),"Date objects and objects with a `getTime` method are not equal"),t.ok(!e.isEqual(new Date("Curly"),new Date("Curly")),"Invalid dates are not equal"),t.ok(!e.isEqual(n,a),"Different functions with identical bodies and source code representations are not equal"),t.ok(e.isEqual(/(?:)/gim,/(?:)/gim),"RegExps with equivalent patterns and flags are equal"),t.ok(e.isEqual(/(?:)/gi,/(?:)/gi),"Flag order is not significant"),t.ok(!e.isEqual(/(?:)/g,/(?:)/gi),"RegExps with equivalent patterns and different flags are not equal"),t.ok(!e.isEqual(/Moe/gim,/Curly/gim),"RegExps with different patterns and equivalent flags are not equal"),t.ok(!e.isEqual(/(?:)/gi,/(?:)/g),"Commutative equality is implemented for RegExps"),t.ok(!e.isEqual(/Curly/g,{source:"Larry",global:!0,ignoreCase:!1,multiline:!1}),"RegExps and RegExp-like objects are not equal"),t.ok(e.isEqual({},{}),"Empty object literals are equal"),t.ok(e.isEqual([],[]),"Empty array literals are equal"),t.ok(e.isEqual([{}],[{}]),"Empty nested arrays and objects are equal"),t.ok(!e.isEqual({length:0},[]),"Array-like objects and arrays are not equal."),t.ok(!e.isEqual([],{length:0}),"Commutative equality is implemented for array-like objects"),t.ok(!e.isEqual({},[]),"Object literals and array literals are not equal"),t.ok(!e.isEqual([],{}),"Commutative equality is implemented for objects and arrays"),t.ok(e.isEqual([1,"Larry",!0],[1,"Larry",!0]),"Arrays containing identical primitives are equal"),t.ok(e.isEqual([/Moe/g,new Date(2009,9,25)],[/Moe/g,new Date(2009,9,25)]),"Arrays containing equivalent elements are equal");var o=[new Number(47),!1,"Larry",/Moe/,new Date(2009,11,13),["running","biking",new String("programming")],{a:47}],r=[new Number(47),!1,"Larry",/Moe/,new Date(2009,11,13),["running","biking",new String("programming")],{a:47}];t.ok(e.isEqual(o,r),"Arrays containing nested arrays and objects are recursively compared"),o.forEach=o.map=o.filter=o.every=o.indexOf=o.lastIndexOf=o.some=o.reduce=o.reduceRight=null,r.join=r.pop=r.reverse=r.shift=r.slice=r.splice=r.concat=r.sort=r.unshift=null,t.ok(e.isEqual(o,r),"Arrays containing equivalent elements and different non-numeric properties are equal"),o.push("White Rocks"),t.ok(!e.isEqual(o,r),"Arrays of different lengths are not equal"),o.push("East Boulder"),r.push("Gunbarrel Ranch","Teller Farm"),t.ok(!e.isEqual(o,r),"Arrays of identical lengths containing different elements are not equal"),t.ok(e.isEqual(Array(3),Array(3)),"Sparse arrays of identical lengths are equal"),t.ok(!e.isEqual(Array(3),Array(6)),"Sparse arrays of different lengths are not equal when both are empty");var s=[];s[1]=5,t.ok(e.isEqual(s,[void 0,5]),"Handles sparse arrays as dense"),t.ok(e.isEqual({a:"Curly",b:1,c:!0},{a:"Curly",b:1,c:!0}),"Objects containing identical primitives are equal"),t.ok(e.isEqual({a:/Curly/g,b:new Date(2009,11,13)},{a:/Curly/g,b:new Date(2009,11,13)}),"Objects containing equivalent members are equal"),t.ok(!e.isEqual({a:63,b:75},{a:61,b:55}),"Objects of identical sizes with different values are not equal"),t.ok(!e.isEqual({a:63,b:75},{a:61,c:55}),"Objects of identical sizes with different property names are not equal"),t.ok(!e.isEqual({a:1,b:2},{a:1}),"Objects of different sizes are not equal"),t.ok(!e.isEqual({a:1},{a:1,b:2}),"Commutative equality is implemented for objects"),t.ok(!e.isEqual({x:1,y:void 0},{x:1,z:2}),"Objects with identical keys and different values are not equivalent"),o={name:new String("Moe Howard"),age:new Number(77),stooge:!0,hobbies:["acting"],film:{name:"Sing a Song of Six Pants",release:new Date(1947,9,30),stars:[new String("Larry Fine"),"Shemp Howard"],minutes:new Number(16),seconds:54}},r={name:new String("Moe Howard"),age:new Number(77),stooge:!0,hobbies:["acting"],film:{name:"Sing a Song of Six Pants",release:new Date(1947,9,30),stars:[new String("Larry Fine"),"Shemp Howard"],minutes:new Number(16),seconds:54}},t.ok(e.isEqual(o,r),"Objects with nested equivalent members are recursively compared"),t.ok(e.isEqual(new n,new n),"Object instances are equal"),t.ok(!e.isEqual(new n,new a),"Objects with different constructors and identical own properties are not equal"),t.ok(!e.isEqual({value:1},new n),"Object instances and objects sharing equivalent properties are not equal"),t.ok(!e.isEqual({value:2},new a),"The prototype chain of objects should not be examined"),(o=[]).push(o),(r=[]).push(r),t.ok(e.isEqual(o,r),"Arrays containing circular references are equal"),o.push(new String("Larry")),r.push(new String("Larry")),t.ok(e.isEqual(o,r),"Arrays containing circular references and equivalent properties are equal"),o.push("Shemp"),r.push("Curly"),t.ok(!e.isEqual(o,r),"Arrays containing circular references and different properties are not equal"),o=["everything is checked but","this","is not"],o[1]=o,r=["everything is checked but",["this","array"],"is not"],t.ok(!e.isEqual(o,r),"Comparison of circular references with non-circular references are not equal"),o={abc:null},r={abc:null},o.abc=o,r.abc=r,t.ok(e.isEqual(o,r),"Objects containing circular references are equal"),o.def=75,r.def=75,t.ok(e.isEqual(o,r),"Objects containing circular references and equivalent properties are equal"),o.def=new Number(75),r.def=new Number(63),t.ok(!e.isEqual(o,r),"Objects containing circular references and different properties are not equal"),o={everything:"is checked",but:"this",is:"not"},o.but=o,r={everything:"is checked",but:{that:"object"},is:"not"},t.ok(!e.isEqual(o,r),"Comparison of circular references with non-circular object references are not equal"),o=[{abc:null}],r=[{abc:null}],(o[0].abc=o).push(o),(r[0].abc=r).push(r),t.ok(e.isEqual(o,r),"Cyclic structures are equal"),o[0].def="Larry",r[0].def="Larry",t.ok(e.isEqual(o,r),"Cyclic structures containing equivalent properties are equal"),o[0].def=new String("Larry"),r[0].def=new String("Curly"),t.ok(!e.isEqual(o,r),"Cyclic structures containing different properties are not equal"),o={foo:{b:{foo:{c:{foo:null}}}}},r={foo:{b:{foo:{c:{foo:null}}}}},o.foo.b.foo.c.foo=o,r.foo.b.foo.c.foo=r,t.ok(e.isEqual(o,r),"Cyclic structures with nested and identically-named properties are equal"),t.ok(!e.isEqual(e({x:1,y:void 0}).chain(),e({x:1,z:2}).chain()),"Chained objects containing different values are not equal"),o=e({x:1,y:2}).chain(),r=e({x:1,y:2}).chain(),t.equal(e.isEqual(o.isEqual(r),e(!0)),!0,"`isEqual` can be chained"),Object.create&&(o=Object.create(null,{x:{value:1,enumerable:!0}}),r={x:1},t.ok(e.isEqual(o,r),"Handles objects without a constructor (e.g. from Object.create")),i.prototype.constructor=null;var u={a:1};if(t.strictEqual(e.isEqual(new i,u),!1,"Objects from different constructors are not equal"),t.equal(e.isEqual([0],[-0]),!1),t.equal(e.isEqual({a:0},{a:-0}),!1),t.equal(e.isEqual([NaN],[NaN]),!0),t.equal(e.isEqual({a:NaN},{a:NaN}),!0),"undefined"!=typeof Symbol){var l=Symbol("x");t.strictEqual(e.isEqual(l,l),!0,"A symbol is equal to itself"),t.strictEqual(e.isEqual(l,Object(l)),!0,"Even when wrapped in Object()"),t.strictEqual(e.isEqual(l,null),!1,"Different types are not equal")}}),QUnit.test("isEmpty",function(t){t.ok(!e([1]).isEmpty(),"[1] is not empty"),t.ok(e.isEmpty([]),"[] is empty"),t.ok(!e.isEmpty({one:1}),"{one: 1} is not empty"),t.ok(e.isEmpty({}),"{} is empty"),t.ok(e.isEmpty(new RegExp("")),"objects with prototype properties are empty"),t.ok(e.isEmpty(null),"null is empty"),t.ok(e.isEmpty(),"undefined is empty"),t.ok(e.isEmpty(""),"the empty string is empty"),t.ok(!e.isEmpty("moe"),"but other strings are not");var n={one:1};delete n.one,t.ok(e.isEmpty(n),"deleting all the keys from an object empties it");var a=function(){return arguments};t.ok(e.isEmpty(a()),"empty arguments object is empty"),t.ok(!e.isEmpty(a("")),"non-empty arguments object is not empty");var i={toString:5};t.ok(!e.isEmpty(i),"non-enumerable property is not empty")}),"object"==typeof document&&QUnit.test("isElement",function(n){n.ok(!e.isElement("div"),"strings are not dom elements"),n.ok(e.isElement(t),"an element is a DOM element")}),QUnit.test("isArguments",function(t){var n=function(){return arguments}(1,2,3);t.ok(!e.isArguments("string"),"a string is not an arguments object"),t.ok(!e.isArguments(e.isArguments),"a function is not an arguments object"),t.ok(e.isArguments(n),"but the arguments object is an arguments object"),t.ok(!e.isArguments(e.toArray(n)),"but not when it's converted into an array"),t.ok(!e.isArguments([1,2,3]),"and not vanilla arrays.")}),QUnit.test("isObject",function(n){n.ok(e.isObject(arguments),"the arguments object is object"),n.ok(e.isObject([1,2,3]),"and arrays"),t&&n.ok(e.isObject(t),"and DOM element"),n.ok(e.isObject(function(){}),"and functions"),n.ok(!e.isObject(null),"but not null"),n.ok(!e.isObject(void 0),"and not undefined"),n.ok(!e.isObject("string"),"and not string"),n.ok(!e.isObject(12),"and not number"),n.ok(!e.isObject(!0),"and not boolean"),n.ok(e.isObject(new String("string")),"but new String()")}),QUnit.test("isArray",function(t){t.ok(!e.isArray(void 0),"undefined vars are not arrays"),t.ok(!e.isArray(arguments),"the arguments object is not an array"),t.ok(e.isArray([1,2,3]),"but arrays are")}),QUnit.test("isString",function(n){var a=new String("I am a string object");t&&n.ok(!e.isString(t),"an element is not a string"),n.ok(e.isString([1,2,3].join(", ")),"but strings are"),n.strictEqual(e.isString("I am a string literal"),!0,"string literals are"),n.ok(e.isString(a),"so are String objects"),n.strictEqual(e.isString(1),!1)}),QUnit.test("isSymbol",function(t){t.ok(!e.isSymbol(0),"numbers are not symbols"),t.ok(!e.isSymbol(""),"strings are not symbols"),t.ok(!e.isSymbol(e.isSymbol),"functions are not symbols"),"function"==typeof Symbol&&(t.ok(e.isSymbol(Symbol()),"symbols are symbols"),t.ok(e.isSymbol(Symbol("description")),"described symbols are symbols"),t.ok(e.isSymbol(Object(Symbol())),"boxed symbols are symbols"))}),QUnit.test("isNumber",function(t){t.ok(!e.isNumber("string"),"a string is not a number"),t.ok(!e.isNumber(arguments),"the arguments object is not a number"),t.ok(!e.isNumber(void 0),"undefined is not a number"),t.ok(e.isNumber(11.3),"but numbers are"),t.ok(e.isNumber(NaN),"NaN *is* a number"),t.ok(e.isNumber(1/0),"Infinity is a number"),t.ok(!e.isNumber("1"),"numeric strings are not numbers")}),QUnit.test("isBoolean",function(t){t.ok(!e.isBoolean(2),"a number is not a boolean"),t.ok(!e.isBoolean("string"),"a string is not a boolean"),t.ok(!e.isBoolean("false"),'the string "false" is not a boolean'),t.ok(!e.isBoolean("true"),'the string "true" is not a boolean'),t.ok(!e.isBoolean(arguments),"the arguments object is not a boolean"),t.ok(!e.isBoolean(void 0),"undefined is not a boolean"),t.ok(!e.isBoolean(NaN),"NaN is not a boolean"),t.ok(!e.isBoolean(null),"null is not a boolean"),t.ok(e.isBoolean(!0),"but true is"),t.ok(e.isBoolean(!1),"and so is false")}),QUnit.test("isMap",function(t){if(t.ok(!e.isMap("string"),"a string is not a map"),t.ok(!e.isMap(2),"a number is not a map"),t.ok(!e.isMap({}),"an object is not a map"),t.ok(!e.isMap(!1),"a boolean is not a map"),t.ok(!e.isMap(void 0),"undefined is not a map"),t.ok(!e.isMap([1,2,3]),"an array is not a map"),"function"==typeof Set&&t.ok(!e.isMap(new Set),"a set is not a map"),"function"==typeof WeakSet&&t.ok(!e.isMap(new WeakSet),"a weakset is not a map"),"function"==typeof WeakMap&&t.ok(!e.isMap(new WeakMap),"a weakmap is not a map"),"function"==typeof Map){var n="a string",a=new Map;a.set(n,"value"),t.ok(e.isMap(a),"but a map is")}}),QUnit.test("isWeakMap",function(t){if(t.ok(!e.isWeakMap("string"),"a string is not a weakmap"),t.ok(!e.isWeakMap(2),"a number is not a weakmap"),t.ok(!e.isWeakMap({}),"an object is not a weakmap"),t.ok(!e.isWeakMap(!1),"a boolean is not a weakmap"),t.ok(!e.isWeakMap(void 0),"undefined is not a weakmap"),t.ok(!e.isWeakMap([1,2,3]),"an array is not a weakmap"),"function"==typeof Set&&t.ok(!e.isWeakMap(new Set),"a set is not a weakmap"),"function"==typeof WeakSet&&t.ok(!e.isWeakMap(new WeakSet),"a weakset is not a weakmap"),"function"==typeof Map&&t.ok(!e.isWeakMap(new Map),"a map is not a weakmap"),"function"==typeof WeakMap){var n={},a=new WeakMap;a.set(n,"value"),t.ok(e.isWeakMap(a),"but a weakmap is")}}),QUnit.test("isSet",function(t){if(t.ok(!e.isSet("string"),"a string is not a set"),t.ok(!e.isSet(2),"a number is not a set"),t.ok(!e.isSet({}),"an object is not a set"),t.ok(!e.isSet(!1),"a boolean is not a set"),t.ok(!e.isSet(void 0),"undefined is not a set"),t.ok(!e.isSet([1,2,3]),"an array is not a set"),"function"==typeof Map&&t.ok(!e.isSet(new Map),"a map is not a set"),"function"==typeof WeakMap&&t.ok(!e.isSet(new WeakMap),"a weakmap is not a set"),"function"==typeof WeakSet&&t.ok(!e.isSet(new WeakSet),"a weakset is not a set"),"function"==typeof Set){var n=new Set;n.add(1).add("string").add(!1).add({}),t.ok(e.isSet(n),"but a set is")}}),QUnit.test("isWeakSet",function(t){if(t.ok(!e.isWeakSet("string"),"a string is not a weakset"),t.ok(!e.isWeakSet(2),"a number is not a weakset"),t.ok(!e.isWeakSet({}),"an object is not a weakset"),t.ok(!e.isWeakSet(!1),"a boolean is not a weakset"),t.ok(!e.isWeakSet(void 0),"undefined is not a weakset"),t.ok(!e.isWeakSet([1,2,3]),"an array is not a weakset"),"function"==typeof Map&&t.ok(!e.isWeakSet(new Map),"a map is not a weakset"),"function"==typeof WeakMap&&t.ok(!e.isWeakSet(new WeakMap),"a weakmap is not a weakset"),"function"==typeof Set&&t.ok(!e.isWeakSet(new Set),"a set is not a weakset"),"function"==typeof WeakSet){var n=new WeakSet;n.add({x:1},{y:"string"}).add({y:"string"}).add({z:[1,2,3]}),t.ok(e.isWeakSet(n),"but a weakset is")}}),QUnit.test("isFunction",function(n){n.ok(!e.isFunction(void 0),"undefined vars are not functions"),n.ok(!e.isFunction([1,2,3]),"arrays are not functions"),n.ok(!e.isFunction("moe"),"strings are not functions"),n.ok(e.isFunction(e.isFunction),"but functions are"),n.ok(e.isFunction(function(){}),"even anonymous ones"),t&&n.ok(!e.isFunction(t),"elements are not functions");var a="undefined"!=typeof document&&document.childNodes;a&&n.ok(!e.isFunction(a))}),"undefined"!=typeof Int8Array&&QUnit.test("#1929 Typed Array constructors are functions",function(t){e.chain(["Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array"]).map(e.propertyOf("undefined"!=typeof GLOBAL?GLOBAL:window)).compact().each(function(n){t.strictEqual(e.isFunction(n),"[object Function]"===Object.prototype.toString.call(n))})}),QUnit.test("isDate",function(t){t.ok(!e.isDate(100),"numbers are not dates"),t.ok(!e.isDate({}),"objects are not dates"),t.ok(e.isDate(new Date),"but dates are")}),QUnit.test("isRegExp",function(t){t.ok(!e.isRegExp(e.identity),"functions are not RegExps"),t.ok(e.isRegExp(/identity/),"but RegExps are")}),QUnit.test("isFinite",function(t){t.ok(!e.isFinite(void 0),"undefined is not finite"),t.ok(!e.isFinite(null),"null is not finite"),t.ok(!e.isFinite(NaN),"NaN is not finite"),t.ok(!e.isFinite(1/0),"Infinity is not finite"),t.ok(!e.isFinite(-(1/0)),"-Infinity is not finite"),t.ok(e.isFinite("12"),"Numeric strings are numbers"),t.ok(!e.isFinite("1a"),"Non numeric strings are not numbers"),t.ok(!e.isFinite(""),"Empty strings are not numbers");var n=new Number(5);t.ok(e.isFinite(n),"Number instances can be finite"),t.ok(e.isFinite(0),"0 is finite"),t.ok(e.isFinite(123),"Ints are finite"),t.ok(e.isFinite(-12.44),"Floats are finite"),"function"==typeof Symbol&&(t.ok(!e.isFinite(Symbol()),"symbols are not numbers"),t.ok(!e.isFinite(Symbol("description")),"described symbols are not numbers"),t.ok(!e.isFinite(Object(Symbol())),"boxed symbols are not numbers"))}),QUnit.test("isNaN",function(t){t.ok(!e.isNaN(void 0),"undefined is not NaN"),t.ok(!e.isNaN(null),"null is not NaN"),t.ok(!e.isNaN(0),"0 is not NaN"),t.ok(!e.isNaN(new Number(0)),"wrapped 0 is not NaN"),t.ok(e.isNaN(NaN),"but NaN is"),t.ok(e.isNaN(new Number(NaN)),"wrapped NaN is still NaN")}),QUnit.test("isNull",function(t){t.ok(!e.isNull(void 0),"undefined is not null"),t.ok(!e.isNull(NaN),"NaN is not null"),t.ok(e.isNull(null),"but null is")}),QUnit.test("isUndefined",function(t){t.ok(!e.isUndefined(1),"numbers are defined"),t.ok(!e.isUndefined(null),"null is defined"),t.ok(!e.isUndefined(!1),"false is defined"),t.ok(!e.isUndefined(NaN),"NaN is defined"),t.ok(e.isUndefined(),"nothing is undefined"),t.ok(e.isUndefined(void 0),"undefined is undefined")}),QUnit.test("isError",function(t){t.ok(!e.isError(1),"numbers are not Errors"),t.ok(!e.isError(null),"null is not an Error"),t.ok(!e.isError(Error),"functions are not Errors"),t.ok(e.isError(new Error),"Errors are Errors"),t.ok(e.isError(new EvalError),"EvalErrors are Errors"),t.ok(e.isError(new RangeError),"RangeErrors are Errors"),t.ok(e.isError(new ReferenceError),"ReferenceErrors are Errors"),t.ok(e.isError(new SyntaxError),"SyntaxErrors are Errors"),t.ok(e.isError(new TypeError),"TypeErrors are Errors"),t.ok(e.isError(new URIError),"URIErrors are Errors")}),QUnit.test("tap",function(t){var n=null,a=function(e){n=e},i=e.tap(1,a);t.equal(n,1,"passes tapped object to interceptor"),t.equal(i,1,"returns tapped object"),i=e([1,2,3]).chain().map(function(e){return 2*e}).max().tap(a).value(),t.equal(i,6,"can use tapped objects in a chain"),t.equal(n,i,"can use tapped objects in a chain")}),QUnit.test("has",function(t){var n={foo:"bar",func:function(){}};t.ok(e.has(n,"foo"),"has() checks that the object has a property."),t.ok(!e.has(n,"baz"),"has() returns false if the object doesn't have the property."),t.ok(e.has(n,"func"),"has() works for functions too."),n.hasOwnProperty=null,t.ok(e.has(n,"foo"),"has() works even when the hasOwnProperty method is deleted.");
var a={};a.prototype=n,t.ok(!e.has(a,"foo"),"has() does not check the prototype chain for a property."),t.strictEqual(e.has(null,"foo"),!1,"has() returns false for null"),t.strictEqual(e.has(void 0,"foo"),!1,"has() returns false for undefined")}),QUnit.test("isMatch",function(t){function n(){}var a={name:"Moe Howard",hair:!0},i={name:"Curly Howard",hair:!1};t.equal(e.isMatch(a,{hair:!0}),!0,"Returns a boolean"),t.equal(e.isMatch(i,{hair:!0}),!1,"Returns a boolean"),t.equal(e.isMatch(5,{__x__:void 0}),!1,"can match undefined props on primitives"),t.equal(e.isMatch({__x__:void 0},{__x__:void 0}),!0,"can match undefined props"),t.equal(e.isMatch(null,{}),!0,"Empty spec called with null object returns true"),t.equal(e.isMatch(null,{a:1}),!1,"Non-empty spec called with null object returns false"),e.each([null,void 0],function(n){t.strictEqual(e.isMatch(n,null),!0,"null matches null")}),e.each([null,void 0],function(n){t.strictEqual(e.isMatch(n,null),!0,"null matches {}")}),t.strictEqual(e.isMatch({b:1},{a:void 0}),!1,"handles undefined values (1683)"),e.each([!0,5,NaN,null,void 0],function(n){t.strictEqual(e.isMatch({a:1},n),!0,"treats primitives as empty")}),n.prototype.x=1;var o=new n;t.equal(e.isMatch({x:2},o),!0,"spec is restricted to own properties"),o.y=5,t.equal(e.isMatch({x:1,y:5},o),!0),t.equal(e.isMatch({x:1,y:4},o),!1),t.ok(e.isMatch(o,{x:1,y:5}),"inherited and own properties are checked on the test object"),n.x=5,t.ok(e.isMatch({x:5,y:1},n),"spec can be a function");var r={constructor:Object};t.deepEqual(e.map([null,void 0,5,{}],e.partial(e.isMatch,e,r)),[!1,!1,!1,!0],"doesnt falsey match constructor on undefined/null")}),QUnit.test("matcher",function(t){function n(){}var a={name:"Moe Howard",hair:!0},i={name:"Curly Howard",hair:!1},o=[a,i];t.equal(e.matcher({hair:!0})(a),!0,"Returns a boolean"),t.equal(e.matcher({hair:!0})(i),!1,"Returns a boolean"),t.equal(e.matcher({__x__:void 0})(5),!1,"can match undefined props on primitives"),t.equal(e.matcher({__x__:void 0})({__x__:void 0}),!0,"can match undefined props"),t.equal(e.matcher({})(null),!0,"Empty spec called with null object returns true"),t.equal(e.matcher({a:1})(null),!1,"Non-empty spec called with null object returns false"),t.ok(e.find(o,e.matcher({hair:!1}))===i,"returns a predicate that can be used by finding functions."),t.ok(e.find(o,e.matcher(a))===a,"can be used to locate an object exists in a collection."),t.deepEqual(e.filter([null,void 0],e.matcher({a:1})),[],"Do not throw on null values."),t.deepEqual(e.filter([null,void 0],e.matcher(null)),[null,void 0],"null matches null"),t.deepEqual(e.filter([null,void 0],e.matcher({})),[null,void 0],"null matches {}"),t.deepEqual(e.filter([{b:1}],e.matcher({a:void 0})),[],"handles undefined values (1683)"),e.each([!0,5,NaN,null,void 0],function(n){t.equal(e.matcher(n)({a:1}),!0,"treats primitives as empty")}),n.prototype.x=1;var r=new n,s=e.matcher(r);t.equal(s({x:2}),!0,"spec is restricted to own properties"),r.y=5,s=e.matcher(r),t.equal(s({x:1,y:5}),!0),t.equal(s({x:1,y:4}),!1),t.ok(e.matcher({x:1,y:5})(r),"inherited and own properties are checked on the test object"),n.x=5,t.ok(e.matcher(n)({x:5,y:1}),"spec can be a function");var u={b:1},l=e.matcher(u);t.equal(l({b:1}),!0),u.b=2,u.a=1,t.equal(l({b:1}),!0,"changing spec object doesnt change matches result");var c=e.matcher({constructor:Object});t.deepEqual(e.map([null,void 0,5,{}],c),[!1,!1,!1,!0],"doesnt falsey match constructor on undefined/null")}),QUnit.test("matches",function(t){t.strictEqual(e.matches,e.matcher,"is an alias for matcher")}),QUnit.test("findKey",function(t){var n={a:{a:0,b:0},b:{a:1,b:1},c:{a:2,b:2}};t.equal(e.findKey(n,function(e){return 0===e.a}),"a"),t.equal(e.findKey(n,function(e){return e.b*e.a===4}),"c"),t.equal(e.findKey(n,"a"),"b","Uses lookupIterator"),t.equal(e.findKey(n,function(e){return e.b*e.a===5}),void 0),t.strictEqual(e.findKey([1,2,3,4,5,6],function(e){return 3===e}),"2","Keys are strings"),t.strictEqual(e.findKey(n,function(e){return null===e.foo}),void 0),e.findKey({a:{a:1}},function(e,a,i){t.equal(a,"a"),t.deepEqual(i,{a:{a:1}}),t.strictEqual(this,n,"called with context")},n);var a=[1,2,3,4];a.match=55,t.strictEqual(e.findKey(a,function(e){return 55===e}),"match","matches array-likes keys")}),QUnit.test("mapObject",function(t){var n={a:1,b:2},a={a:{a:0,b:0},b:{a:1,b:1},c:{a:2,b:2}};t.deepEqual(e.mapObject(n,function(e){return 2*e}),{a:2,b:4},"simple objects"),t.deepEqual(e.mapObject(a,function(t){return e.reduce(t,function(e,t){return e+t},0)}),{a:0,b:2,c:4},"nested objects"),t.deepEqual(e.mapObject(n,function(e,t,n){return 2*n[t]}),{a:2,b:4},"correct keys"),t.deepEqual(e.mapObject([1,2],function(e){return 2*e}),{0:2,1:4},"check behavior for arrays"),t.deepEqual(e.mapObject(n,function(e){return e*this.multiplier},{multiplier:3}),{a:3,b:6},"keep context"),t.deepEqual(e.mapObject({a:1},function(){return this.length},[1,2]),{a:2},"called with context");var i=e.mapObject({length:2,0:{id:"1"},1:{id:"2"}},function(e){return e.id});t.deepEqual(i,{length:void 0,0:"1",1:"2"},"Check with array-like objects");var o={a:{name:"moe",age:30},b:{name:"curly",age:50}};t.deepEqual(e.mapObject(o,"name"),{a:"moe",b:"curly"},"predicate string map to object properties"),e.each([null,void 0,1,"abc",[],{},void 0],function(n){t.deepEqual(e.mapObject(n,e.identity),{},"mapValue identity")});var r=function(){this.a=1};r.prototype.b=1;var s=new r;t.deepEqual(e.mapObject(s,e.identity),{a:1},"ignore inherited values from prototypes")})}();
//# sourceMappingURL=objects.js.map