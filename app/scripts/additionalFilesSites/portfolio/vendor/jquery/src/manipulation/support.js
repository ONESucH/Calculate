define(["../var/document","../var/support"],function(e,t){return function(){var n=e.createDocumentFragment(),a=n.appendChild(e.createElement("div")),c=e.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="<textarea>x</textarea>",t.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue}(),t});
//# sourceMappingURL=support.js.map
