(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(4),o=n.n(i),s=n(3),a=n(0);function u(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{value:undefined,onKeyDown:function(e){"Enter"===e.key&&(r(e.target.value),fetch("/members",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({body:e.target.value})}).then((function(e){return e.json()})).then((function(e){r(e)})))}}),Object(a.jsx)("p",{children:n})]})}var j=function(){var e=Object(c.useState)([{}]),t=Object(s.a)(e,2),n=(t[0],t[1]);return Object(c.useEffect)((function(){fetch("/members").then((function(e){return e.json()})).then((function(e){n(e),console.log(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:'If you type "Andrew", Whitaker is returned. Any other name is undefined.'}),Object(a.jsx)(u,{})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,11)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),d()}},[[10,1,2]]]);
//# sourceMappingURL=main.5caec548.chunk.js.map