(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[9],{40:function(e,t,n){"use strict";var r=n(36),a=n.n(r),s=n(37),i="https://estatesbg.herokuapp.com/api/users",o={authenticate:function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){var o,c,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(i+t,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return o=e.sent,c=o.headers.get("Authorization"),document.cookie="auth-cookie=".concat(c),e.next=8,o.json();case 8:l=e.sent,c?r({email:l.email,id:l._id}):s(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),s(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),getProfileInfo:function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(i,"/profile?_id=").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=o},51:function(e,t,n){e.exports={login:"login_login__18RH6",register:"login_register__1XUst",tel:"login_tel__ebUy6",field:"login_field__IBFx3",error:"login_error__3PQdj","input-error":"login_input-error__1kawq"}},59:function(e,t,n){"use strict";n.r(t);var r=n(36),a=n.n(r),s=n(37),i=n(8),o=n(9),c=n(11),l=n(10),u=n(0),p=n(38),d=n(51),h=n.n(d),f=n(19),j=n(3),b=n(12),m=n(40),x=n(1),g=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleChange=function(e,t){var n={};n[t]=e.target.value,r.setState(n)},r.handleSubmit=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,s=n.email,i=n.password,s&&i?r.setState({emptyFieldsError:!1}):r.setState({emptyFieldsError:!0}),e.next=5,m.a.authenticate("/login",{email:s,password:i},(function(e){r.setState({invalidInputError:!1}),r.context.logIn(e),r.props.history.push("/")}),(function(e){r.setState({invalidInputError:!0}),console.log("Error",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={email:"",password:"",invalidInputError:!1,emptyFieldsError:!1},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,r=t.password,a=t.invalidInputError,s=t.emptyFieldsError,i=s?"Please fill all fields above":null,o=a&&!s?"Invalid email or password":null;return Object(x.jsxs)(p.a,{children:[Object(x.jsx)("form",{className:h.a.login,onSubmit:this.handleSubmit,children:Object(x.jsxs)("fieldset",{children:[Object(x.jsx)("h2",{children:"Login Form"}),Object(x.jsxs)("p",{className:h.a["field field-icon"],children:[Object(x.jsx)("label",{htmlFor:"email",children:Object(x.jsx)("span",{children:Object(x.jsx)("i",{className:"fas fa-envelope"})})}),Object(x.jsx)("input",{type:"text",name:"email",id:"email",value:n,onChange:function(t){return e.handleChange(t,"email")},placeholder:"pesho.peshev@gmail.com"})]}),Object(x.jsxs)("p",{className:h.a["field field-icon"],children:[Object(x.jsx)("label",{htmlFor:"password",children:Object(x.jsx)("span",{children:Object(x.jsx)("i",{className:"fas fa-lock"})})}),Object(x.jsx)("input",{type:"password",name:"password",id:"password",value:r,onChange:function(t){return e.handleChange(t,"password")},placeholder:"******"})]}),Object(x.jsx)("p",{className:h.a.error,children:o}),Object(x.jsx)("p",{className:h.a.error,children:i}),Object(x.jsx)("button",{type:"submit",children:"Login"}),Object(x.jsxs)("p",{className:h.a["text-center"],children:["No account yet?",Object(x.jsx)(f.b,{to:"/user/register",children:"Register"})]})]})}),this.context.loggedIn?Object(x.jsx)(j.a,{to:"/"}):null]})}}]),n}(u.Component);g.contextType=b.a,t.default=g}}]);
//# sourceMappingURL=9.82e6f2af.chunk.js.map