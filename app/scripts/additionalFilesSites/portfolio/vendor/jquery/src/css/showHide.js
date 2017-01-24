define(["../data/var/dataPriv"],function(n){function e(e,t){for(var a,l,r=[],i=0,s=e.length;i<s;i++)l=e[i],l.style&&(a=l.style.display,t?"none"===a&&(r[i]=n.get(l,"display")||""):"none"!==a&&(r[i]="none",n.set(l,"display",a)));for(i=0;i<s;i++)null!=r[i]&&(e[i].style.display=r[i]);return e}return e});
//# sourceMappingURL=showHide.js.map
