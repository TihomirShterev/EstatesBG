(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[8],{42:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(o){i=!0,c=o}finally{try{r||null==s.return||s.return()}finally{if(i)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return i}))},51:function(e,t,n){e.exports={columns:"details_columns__Jw7w1","first-col":"details_first-col__K_fAr","second-col":"details_second-col__3Ttxk","item-image-container":"details_item-image-container__27yZg",peopleWhoIncremented:"details_peopleWhoIncremented__2A0yk",description:"details_description__3_ele","nick-name":"details_nick-name__bkMzM",subscribe:"details_subscribe__350Hl",unsubscribe:"details_unsubscribe__eIiJb","item-title":"details_item-title__1iZXZ","item-name-wrapper":"details_item-name-wrapper__3dG5M","item-name":"details_item-name__10dD_",increment:"details_increment__2vrXs",decrement:"details_decrement__3As9i"}},58:function(e,t,n){"use strict";n.r(t);var r=n(37),i=n.n(r),c=n(38),a=n(42),s=n(0),o=n(3),l=n(36),d=n(51),u=n.n(d),m=n(1);t.default=function(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],d=Object(s.useState)(""),b=Object(a.a)(d,2),_=b[0],j=b[1],p=Object(s.useState)(""),f=Object(a.a)(p,2),h=f[0],O=f[1],v=Object(s.useState)(""),x=Object(a.a)(v,2),y=x[0],g=x[1],w=Object(o.h)(),k=Object(s.useCallback)(Object(c.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.itemId,e.next=3,fetch("https://estatesbg.herokuapp.com/api/items/details?_id=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,r(c.title),j(c.imageURL),O(c.description),g(c.userId.email);case 11:case"end":return e.stop()}}),e)}))),[w.itemId]);return Object(s.useEffect)((function(){k()})),Object(m.jsx)(l.a,{children:Object(m.jsxs)("div",{className:u.a.columns,children:[Object(m.jsxs)("div",{className:u.a["first-col"],children:[Object(m.jsx)("div",{className:u.a["item-name"],children:Object(m.jsx)("h2",{children:n})}),Object(m.jsx)("div",{className:u.a["item-image-container"],children:Object(m.jsx)("img",{src:_,alt:""})})]}),Object(m.jsxs)("div",{className:u.a["second-col"],children:[Object(m.jsxs)("div",{className:u.a.description,children:[Object(m.jsx)("p",{children:"Description:"}),Object(m.jsx)("span",{children:h})]}),Object(m.jsxs)("div",{className:u.a["nick-name"],children:[Object(m.jsx)("p",{children:"Contact author:"}),Object(m.jsx)("span",{children:y})]})]})]})})}}}]);
//# sourceMappingURL=8.37e83af5.chunk.js.map