(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[10],{40:function(e,t,n){"use strict";var r=n(36),a=n.n(r),c=n(37),s="https://estatesbg.herokuapp.com/api/users",i={authenticate:function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){var i,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s+t,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return i=e.sent,o=i.headers.get("Authorization"),document.cookie="auth-cookie=".concat(o),e.next=8,i.json();case 8:u=e.sent,o?r({email:u.email,id:u._id}):c(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),c(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),getProfileInfo:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(s,"/profile?_id=").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=i},52:function(e,t,n){e.exports={profile:"profile_profile__UCwll",flex:"profile_flex__3bRwK","red-button":"profile_red-button__3cDzM","green-button":"profile_green-button__283R9"}},60:function(e,t,n){"use strict";n.r(t);var r=n(36),a=n.n(r),c=n(37),s=n(8),i=n(9),o=n(11),u=n(10),l=n(0),p=n(3),f=n(12),h=n(40),d=n(38),j=n(52),b=n.n(j),m=n(1),x=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).getProfile=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getProfileInfo(t);case 2:return(n=e.sent).ok||r.props.history.push("/error"),e.next=6,n.json();case 6:c=e.sent,r.setState({email:c.email,myItems:c.myItems});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={email:null,myItems:null},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getProfile(this.props.match.params.userId)}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.myItems;return null===this.context.loggedIn?Object(m.jsx)(d.a,{children:Object(m.jsx)("div",{children:"Loading...."})}):Object(m.jsxs)(d.a,{children:[Object(m.jsxs)("div",{className:b.a.profile,children:[Object(m.jsx)("h3",{children:"User Info"}),Object(m.jsxs)("div",{className:b.a.flex,children:[Object(m.jsx)("p",{children:"Email: "}),Object(m.jsx)("span",{children:t})]}),Object(m.jsxs)("div",{className:b.a.flex,children:[Object(m.jsx)("p",{children:"My Offers:"}),Object(m.jsx)("span",{children:n})]})]}),this.context.loggedIn?null:Object(m.jsx)(p.a,{to:"/user/login"})]})}}]),n}(l.Component);x.contextType=f.a,t.default=x}}]);
//# sourceMappingURL=10.d51fd327.chunk.js.map