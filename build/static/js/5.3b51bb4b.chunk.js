(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[5],{39:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,c=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(i)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return i}))},43:function(e,t,n){"use strict";n(0);var r=n(44),i=n.n(r),c=n(19),a=n(1);t.a=function(e){var t=e._id,n=e.title,r=e.imageURL;return Object(a.jsx)("div",{className:i.a["item-container"],children:Object(a.jsxs)(c.b,{to:"/item/details/".concat(t),className:i.a["item-link"],children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("div",{className:i.a["image-container"],children:Object(a.jsx)("img",{src:r,alt:""})})]})})}},44:function(e,t,n){e.exports={"item-container":"item_item-container__3M1zY","item-link":"item_item-link__1LgNZ","image-container":"item_image-container__1VhpR"}},45:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},47:function(e,t,n){e.exports={welcome:"home_welcome__jIq4s","newest-items":"home_newest-items__3ZcAR",title:"home_title__3qfZf","newest-items-list":"home_newest-items-list__3Y8t_"}},55:function(e,t,n){"use strict";n.r(t);var r=n(45),i=n(37),c=n.n(i),a=n(38),o=n(39),s=n(0),l=n(47),u=n.n(l),f=n(36),m=n(43),b=n(1);t.default=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],l=Object(s.useCallback)(Object(a.a)(c.a.mark((function e(){var t,n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://estatesbg.herokuapp.com/api/items");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.slice(n.length-3,n.length),a=r.reverse(),i(a);case 9:case"end":return e.stop()}}),e)}))),[]);return Object(s.useEffect)((function(){l()}),[]),Object(b.jsxs)(f.a,{children:[Object(b.jsxs)("div",{className:u.a.welcome,children:[Object(b.jsx)("h3",{children:'"Home, sweet home!"'}),Object(b.jsx)("p",{children:"Hello and welcome to the best property renting platform of Sofia, the capital of Bulgaria!"})]}),Object(b.jsxs)("div",{className:u.a["newest-items"],children:[Object(b.jsx)("span",{className:u.a.title,children:"Newest offers:"}),Object(b.jsx)("div",{className:u.a["newest-items-list"],children:n.map((function(e){return Object(b.jsx)(m.a,Object(r.a)({},e),e._id)}))})]})]})}}}]);
//# sourceMappingURL=5.3b51bb4b.chunk.js.map