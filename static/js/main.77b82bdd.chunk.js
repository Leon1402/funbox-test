(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],[,function(e,t,n){e.exports={elementItem:"Element_elementItem__3LneH",circle:"Element_circle__2YRgl",elementCorner:"Element_elementCorner__1Ged2",active:"Element_active__3BcJo",ended:"Element_ended__3-NIg",elementImage:"Element_elementImage__3EO0P",elementImageItem:"Element_elementImageItem__KND8b",isEnded:"Element_isEnded__2WobI",element:"Element_element__1E_O1"}},function(e,t,n){e.exports={elementDescription:"Description_elementDescription__aUjwM",inscription:"Description_inscription__1ORYp",active:"Description_active__MzKQw"}},,,function(e,t,n){e.exports={elementSignText:"SignText_elementSignText__3oJ8v"}},function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(4),r=n.n(i),s=(n(11),n(12),n(1)),l=n.n(s),o=function(e){return c.a.createElement("div",{className:"".concat(l.a.circle," ").concat(e.selectClassName())},c.a.createElement("span",{onClick:"end"===e.status?void 0:function(t){t.stopPropagation(),e.changeWeight(e.index)}},e.weight[e.currentWeight]),c.a.createElement("br",null),c.a.createElement("p",null,"\u043a\u0433"))},m=n(2),u=n.n(m),g=function(e){var t=e.select.map((function(e,t){return Number.isInteger(e)?c.a.createElement("b",{key:t},e):c.a.createElement("span",{key:t},e,c.a.createElement("br",null))}));return c.a.createElement("div",{className:u.a.elementDescription},0===e.currentText?c.a.createElement("p",{className:u.a.inscription},"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e"):c.a.createElement("p",{className:u.a.inscription+" "+u.a.active},"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?"),c.a.createElement("h2",null,"\u041d\u044f\u043c\u0443\u0448\u043a\u0430"),c.a.createElement("h3",null,e.taste),c.a.createElement("div",null,t))},h=n(5),d=n.n(h),E=function(e){var t=function(){e.changeIsActive(e.index)};return c.a.createElement("div",{className:d.a.elementSignText},function(){switch(e.status){case"active":return c.a.createElement("p",null,e.signText[1]);case"end":return c.a.createElement("p",{style:{color:"#ffff66"}},e.signText[2]);default:return c.a.createElement("p",null,e.signText[0]," ",c.a.createElement("span",{onClick:t},"\u043a\u0443\u043f\u0438."))}}())},v=function(e){var t=e.index,n=e.state.status[t],a=function(){switch(e.state.status[t]){case"active":return l.a.active;case"end":return l.a.ended;default:return}};return c.a.createElement("div",{className:l.a.element},c.a.createElement("div",{className:"".concat(l.a.elementItem," ").concat(a()),onClick:"end"===n?void 0:function(){e.changeIsActive(t)},onMouseLeave:"active"===n?function(){e.changeDescriptionText(t,1)}:void 0,onMouseEnter:"active"===n?function(){e.changeDescriptionText(t,0)}:void 0},c.a.createElement("div",{className:"".concat(l.a.elementCorner," ").concat(a())}),c.a.createElement(g,{select:e.state.select[e.state.currentWeight[t]],taste:e.state.taste[t],currentText:e.state.currentText[t]}),c.a.createElement("div",{className:l.a.elementImage},c.a.createElement("div",{className:l.a.elementImageItem})),c.a.createElement(o,{weight:e.state.weight,currentWeight:e.state.currentWeight[t],changeWeight:e.changeWeight,index:t,status:n,selectClassName:a}),c.a.createElement("div",{className:"".concat(l.a.isEnded," ").concat(a())})),c.a.createElement(E,{index:t,changeIsActive:e.changeIsActive,signText:e.state.signText[t],status:n}))},p=function(e){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"upShadow"}),c.a.createElement("div",{className:"downShadow"}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"article"},c.a.createElement("h1",null,"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?")),c.a.createElement("div",{className:"elements"},c.a.createElement(v,{state:e.state,index:0,changeWeight:e.changeWeight,changeIsActive:e.changeIsActive,changeDescriptionText:e.changeDescriptionText}),c.a.createElement(v,{state:e.state,index:1,changeWeight:e.changeWeight,changeIsActive:e.changeIsActive,changeDescriptionText:e.changeDescriptionText}),c.a.createElement(v,{state:e.state,index:2,changeWeight:e.changeWeight,changeIsActive:e.changeIsActive,changeDescriptionText:e.changeDescriptionText}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=function(){console.log("asd")},x={select:[[10," \u043f\u043e\u0440\u0446\u0438\u0439"," \u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],[40," \u043f\u043e\u0440\u0446\u0438\u0439",2," \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],[100," \u043f\u043e\u0440\u0446\u0438\u0439",5," \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"," \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d"]],currentText:[0,0,0],taste:["\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430","\u0441 \u0440\u044b\u0431\u043e\u0439","\u0441 \u043a\u0443\u0440\u043e\u0439"],signText:[["\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ","\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.","\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0444\u0443\u0430-\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."],["\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ","\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435","\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0440\u044b\u0431\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."],["\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ","\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.","\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u043a\u0443\u0440\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."]],weight:["0,5","2","5"],currentWeight:[0,0,0],status:["normal","normal","end"]},f=function(e){x.currentWeight[e]=2===x.currentWeight[e]?0:x.currentWeight[e]+1,_()},I=function(e){x.status[e]="normal"===x.status[e]?"active":"normal",_()},T=function(e,t){x.currentText[e]=t,_()},N=x,W=function(){r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,{state:N,changeWeight:f,changeIsActive:I,changeDescriptionText:T})),document.getElementById("root"))};W(),_=W,"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));t.default=W}],[[6,1,2]]]);
//# sourceMappingURL=main.77b82bdd.chunk.js.map