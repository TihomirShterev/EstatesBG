(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[10],{47:function(e,t,n){e.exports={profile:"profile_profile__3e28l",flex:"profile_flex__3CSu0","red-button":"profile_red-button__2UjbS","green-button":"profile_green-button__17pNU"}},56:function(e,t,n){"use strict";n.r(t);var r=n(37),s=n.n(r),c=n(38),a=n(8),i=n(9),o=n(12),l=n(11),u=n(0),p=n(3),f=n(10),j=n(36),h=n(47),d=n.n(h),b=n(2),x=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).getProfile=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://estatesbg.herokuapp.com/api/users/profile?_id=".concat(t));case 2:return(n=e.sent).ok||r.props.history.push("/error"),e.next=6,n.json();case 6:c=e.sent,r.setState({email:c.email,myItems:c.myItems});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={email:null,myItems:null},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getProfile(this.props.match.params.userId)}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.myItems;return null===this.context.loggedIn?Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{children:"Loading...."})}):Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{className:d.a.profile,children:[Object(b.jsx)("h3",{children:"User Info"}),Object(b.jsxs)("div",{className:d.a.flex,children:[Object(b.jsx)("p",{children:"Email: "}),Object(b.jsx)("span",{children:t})]}),Object(b.jsxs)("div",{className:d.a.flex,children:[Object(b.jsx)("p",{children:"My Offers:"}),Object(b.jsx)("span",{children:n})]})]}),this.context.loggedIn?null:Object(b.jsx)(p.a,{to:"/user/login"})]})}}]),n}(u.Component);x.contextType=f.a,t.default=x}}]);
//# sourceMappingURL=10.9229189a.chunk.js.map