(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[7],{42:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},50:function(e,t,n){e.exports={"new-item-border":"create_new-item-border__3HkTK",input:"create_input__3f0oi","header-background":"create_header-background__3uwdi",title:"create_title__10whB","new-item-content":"create_new-item-content__WiuiB","new-item-title":"create_new-item-title__26eov","new-item-image":"create_new-item-image__3P4kQ","new-item-buttons":"create_new-item-buttons__2wXL-",error:"create_error__c_tX8","input-error":"create_input-error__fc-DE"}},56:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n.n(r),i=n(38),c=n(42),s=n(0),o=n(3),l=n(8),u=n(36),d=n(50),b=n.n(d),p=n(20),j=n(2);t.default=function(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],d=Object(s.useState)(""),m=Object(c.a)(d,2),h=m[0],f=m[1],O=Object(s.useState)(""),g=Object(c.a)(O,2),x=g[0],_=g[1],v=Object(s.useState)(!1),y=Object(c.a)(v,2),w=y[0],S=y[1],N=Object(s.useState)(!1),k=Object(c.a)(N,2),A=k[0],C=k[1],T=Object(s.useState)(!1),P=Object(c.a)(T,2),E=P[0],F=P[1],D=Object(s.useContext)(l.a),I=Object(o.g)(),R=function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.length<5?S(!0):S(!1),C(!h),x.length<10?F(!0):F(!1),!(n.length>=5&&h&&x.length>=10)){e.next=8;break}return e.next=7,fetch("https://estatesbg.herokuapp.com//api/items/create",{method:"POST",body:JSON.stringify({title:n,imageURL:h,description:x}),headers:{"Content-Type":"application/json",Authorization:Object(p.a)("auth-cookie")}});case 7:I.push("/item");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files,(r=new FormData).append("file",n[0]),r.append("upload_preset","sofiapropertyrent"),e.next=6,fetch("https://api.cloudinary.com/v1_1/tyscloud/image/upload",{method:"POST",body:r});case 6:return i=e.sent,e.next=9,i.json();case 9:c=e.sent,f(c.secure_url);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=w?"Please enter a valid title consisting at least 5 characters":null,U=A?"Please upload a valid image":null,B=E?"Please enter a valid description consisting at least 10 characters":null;return Object(j.jsxs)(u.a,{children:[Object(j.jsxs)("div",{className:b.a["new-item-border"],children:[Object(j.jsx)("div",{className:b.a["header-background"],children:Object(j.jsx)("span",{children:"CREATE OFFER"})}),Object(j.jsxs)("form",{onSubmit:R,children:[Object(j.jsxs)("div",{className:b.a["new-item-title"],children:[Object(j.jsxs)("label",{htmlFor:"title",children:["Title: ",Object(j.jsx)("span",{className:b.a.red})]}),Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},name:"title",id:"title"}),Object(j.jsx)("p",{className:b.a.error,children:L})]}),Object(j.jsxs)("div",{className:b.a["new-item-image"],children:[h?Object(j.jsx)("img",{src:h,style:{width:"300px"},alt:""}):null,Object(j.jsx)("input",{type:"file",name:"imageURL",onChange:J}),Object(j.jsx)("p",{className:b.a.error,children:U})]}),Object(j.jsxs)("div",{className:b.a["new-item-content"],children:[Object(j.jsxs)("label",{htmlFor:"description",children:["Description: ",Object(j.jsx)("span",{className:b.a.red})]}),Object(j.jsx)("textarea",{type:"text",value:x,onChange:function(e){return _(e.target.value)},name:"description",id:"description",rows:"8",className:"height"}),Object(j.jsx)("p",{className:b.a.error,children:B})]}),Object(j.jsx)("div",{className:b.a["new-item-buttons"],children:Object(j.jsx)("button",{className:b.a.public,type:"submit",children:"Create"})})]})]}),D.loggedIn?null:Object(j.jsx)(o.a,{to:"/user/login"})]})}}}]);
//# sourceMappingURL=7.1303c015.chunk.js.map