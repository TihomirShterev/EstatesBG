(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[9],{46:function(e,t,r){e.exports={login:"login_login__2u4EU",register:"login_register__2ElGk",tel:"login_tel__2lqr5",field:"login_field__1I9ll",error:"login_error__11skI","input-error":"login_input-error__1Lyp3"}},55:function(e,t,r){"use strict";r.r(t);var n=r(37),a=r.n(n),s=r(38),i=r(8),l=r(9),o=r(12),c=r(11),d=r(0),p=r(36),u=r(46),h=r.n(u),j=r(19),m=r(3),b=r(10),f=r(2),g=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).handleChange=function(e,t){var r={};r[t]=e.target.value,n.setState(r)},n.handleSubmit=function(){var e=Object(s.a)(a.a.mark((function e(t){var r,s,i,l,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=n.state,s=r.email,i=r.password,s&&i?n.setState({emptyFieldsError:!1}):n.setState({emptyFieldsError:!0}),e.prev=3,e.next=6,fetch("https://estatesbg.herokuapp.com/api/users/login",{method:"POST",body:JSON.stringify({email:s,password:i}),headers:{"Content-Type":"application/json"}});case 6:return l=e.sent,o=l.headers.get("Authorization"),document.cookie="auth-cookie=".concat(o),e.next=11,l.json();case 11:(c=e.sent).email&&o?(n.setState({invalidInputError:!1}),n.context.logIn({email:c.email,id:c._id}),n.props.history.push("/")):n.setState({invalidInputError:!0}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log("Error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),n.state={email:"",password:"",invalidInputError:!1,emptyFieldsError:!1},n}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.email,n=t.password,a=t.invalidInputError,s=t.emptyFieldsError,i=s?"Please fill all fields above":null,l=a&&!s?"Invalid email or password":null;return Object(f.jsxs)(p.a,{children:[Object(f.jsx)("form",{className:h.a.login,onSubmit:this.handleSubmit,children:Object(f.jsxs)("fieldset",{children:[Object(f.jsx)("h2",{children:"Login Form"}),Object(f.jsxs)("p",{className:h.a["field field-icon"],children:[Object(f.jsx)("label",{htmlFor:"email",children:Object(f.jsx)("span",{children:Object(f.jsx)("i",{className:"fas fa-envelope"})})}),Object(f.jsx)("input",{type:"text",name:"email",id:"email",value:r,onChange:function(t){return e.handleChange(t,"email")},placeholder:"pesho.peshev@gmail.com"})]}),Object(f.jsxs)("p",{className:h.a["field field-icon"],children:[Object(f.jsx)("label",{htmlFor:"password",children:Object(f.jsx)("span",{children:Object(f.jsx)("i",{className:"fas fa-lock"})})}),Object(f.jsx)("input",{type:"password",name:"password",id:"password",value:n,onChange:function(t){return e.handleChange(t,"password")},placeholder:"******"})]}),Object(f.jsx)("p",{className:h.a.error,children:l}),Object(f.jsx)("p",{className:h.a.error,children:i}),Object(f.jsx)("button",{type:"submit",children:"Login"}),Object(f.jsxs)("p",{className:h.a["text-center"],children:["No account yet?",Object(f.jsx)(j.b,{to:"/user/register",children:"Register"})]})]})}),this.context.loggedIn?Object(f.jsx)(m.a,{to:"/"}):null]})}}]),r}(d.Component);g.contextType=b.a,t.default=g}}]);
//# sourceMappingURL=9.94e2c110.chunk.js.map