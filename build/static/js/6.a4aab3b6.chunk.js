(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[6],{43:function(e,t,n){"use strict";n(0);var r=n(44),i=n.n(r),c=n(19),a=n(1);t.a=function(e){var t=e._id,n=e.title,r=e.imageURL;return Object(a.jsx)("div",{className:i.a["item-container"],children:Object(a.jsxs)(c.b,{to:"/item/details/".concat(t),className:i.a["item-link"],children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("div",{className:i.a["image-container"],children:Object(a.jsx)("img",{src:r,alt:""})})]})})}},44:function(e,t,n){e.exports={"item-container":"item_item-container__3M1zY","item-link":"item_item-link__1LgNZ","image-container":"item_image-container__1VhpR"}},45:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},51:function(e,t,n){e.exports={"item-list":"items_item-list__by0Gz"}},62:function(e,t,n){"use strict";n.r(t);var r=n(45),i=n(37),c=n.n(i),a=n(38),s=n(8),o=n(9),u=n(11),l=n(10),m=n(0),j=n(43),b=n(36),f=n(1),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("Component Did Catch is triggered",t)}},{key:"render",value:function(){return this.state.hasError?Object(f.jsx)("h1",{children:"Something went wrong"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(m.Component),p=n(51),O=n.n(p),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).getItems=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://estatesbg.herokuapp.com/api/items");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r.setState({items:n});case 7:case"end":return e.stop()}}),e)}))),r.state={items:[]},r}return Object(o.a)(n,[{key:"renderItems",value:function(){return this.state.items.sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(e){return Object(f.jsx)(j.a,Object(r.a)({},e),e._id)}))}},{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var e=this.state.items;return Object(f.jsx)(b.a,{children:Object(f.jsx)(h,{children:Object(f.jsx)("div",{className:O.a["item-list"],children:e.length>0?this.renderItems():Object(f.jsx)("p",{children:"No Offers!"})})})})}}]),n}(m.Component);t.default=d}}]);
//# sourceMappingURL=6.a4aab3b6.chunk.js.map