(this["webpackJsonpe-commerce-crw"]=this["webpackJsonpe-commerce-crw"]||[]).push([[3],{100:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=n(41);n(96);function i(e){var t=e.handleChange,n=e.label,r=Object(o.a)(e,["handleChange","label"]);return a.a.createElement("div",{className:"group"},a.a.createElement("input",Object.assign({className:"form-input",onChange:t},r)),a.a.createElement("label",{className:"form-input-label ".concat(r.value.length?"shrink":"")},n))}n(97);var u=n(40),s=n(16),m=n(19);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=Object(s.b)(null,(function(e){return{googleSignInStart:function(){return e(Object(m.b)())},emailSignInStart:function(t){return e(Object(m.a)(t))}}}))((function(e){var t=l(Object(r.useState)({email:"",password:""}),2),n=t[0],o=t[1],s=n.email,m=n.password,f=function(e){var t=e.target,r=t.name,a=t.value;o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,Object(c.a)({},r,a)))};return a.a.createElement("div",{className:"sign-in"},a.a.createElement("h2",null,"Already have an account?"),a.a.createElement("span",null,"Sign in"),a.a.createElement(a.a.Fragment,null,a.a.createElement(i,{handleChange:f,name:"email",type:"email",value:s,label:"Email",required:!0}),a.a.createElement(i,{handleChange:f,name:"password",type:"password",value:m,label:"Password",required:!0}),a.a.createElement("div",{className:"buttons"},a.a.createElement(u.a,{onClick:function(){return e.emailSignInStart({email:s,password:m})},type:"submit"},"Sign in"),a.a.createElement(u.a,{signedIn:!0,onClick:e.googleSignInStart},"Sign in with Google"))))})),b=n(4),d=n.n(b),g=n(44);n(98);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=Object(s.b)(null,(function(e){return{signUpStart:function(t){return e(Object(m.g)(t))}}}))((function(e){var t=l(Object(r.useState)({displayName:"",email:"",password:"",confirmPassword:""}),2),n=t[0],o=t[1],s=n.displayName,m=n.email,p=n.password,f=n.confirmPassword,b=function(){var t=Object(g.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),p===f){t.next=4;break}return alert("password don't match"),t.abrupt("return");case 4:e.signUpStart({email:m,password:p,displayName:s});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(e){var t=e.target,r=t.name,a=t.value;o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,Object(c.a)({},r,a)))};return a.a.createElement("div",{className:"sign-up"},a.a.createElement("h2",{className:"title"},"I do not have an account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:b},a.a.createElement(i,{type:"text",name:"displayName",value:s,label:"Name",onChange:O,required:!0}),a.a.createElement(i,{type:"email",name:"email",value:m,label:"Email",onChange:O,required:!0}),a.a.createElement(i,{type:"password",name:"password",value:p,label:"Password",onChange:O,required:!0}),a.a.createElement(i,{type:"password",name:"confirmPassword",value:f,label:"Confirm password",onChange:O,required:!0}),a.a.createElement(u.a,{type:"submit"},"Sign up")))}));n(99);function v(){return a.a.createElement("div",{className:"form"},a.a.createElement(f,null),a.a.createElement(O,null))}n.d(t,"default",(function(){return v}))},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}}]);
//# sourceMappingURL=3.86ba9ead.chunk.js.map