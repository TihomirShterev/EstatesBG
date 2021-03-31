(this["webpackJsonpfront-end"] = this["webpackJsonpfront-end"] || []).push([[11], { 45: function (e, r, t) { e.exports = { login: "register_login__YQg11", register: "register_register__3C8FF", tel: "register_tel__wjRF5", field: "register_field__3bDeq", error: "register_error__i_KWa", "input-error": "register_input-error__fF98u" } }, 53: function (e, r, t) { "use strict"; t.r(r); var s = t(37), a = t.n(s), n = t(38), l = t(9), o = t(10), i = t(12), c = t(11), d = t(0), p = t(36), h = t(45), j = t.n(h), u = t(19), m = t(3), b = t(8), g = t(2), f = function (e) { Object(i.a)(t, e); var r = Object(c.a)(t); function t(e) { var s; return Object(l.a)(this, t), (s = r.call(this, e)).handleChange = function (e, r) { var t = {}; t[r] = e.target.value, s.setState(t) }, s.handleSubmit = function () { var e = Object(n.a)(a.a.mark((function e(r) { var t, n, l, o, i, c, d; return a.a.wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return r.preventDefault(), t = s.state, n = t.email, l = t.password, o = t.rePassword, 0 < n.length && !n.match(/^[a-zA-Z0-9.-]{6,}@\w+.(com|bg)$/) ? s.setState({ emailError: !0 }) : s.setState({ emailError: !1 }), 0 < l.length && l.length < 6 ? s.setState({ passwordError: !0 }) : s.setState({ passwordError: !1 }), 0 < o.length && o !== l ? s.setState({ rePasswordError: !0 }) : s.setState({ rePasswordError: !1 }), n && l && o ? s.setState({ emptyFieldsError: !1 }) : s.setState({ emptyFieldsError: !0 }), e.prev = 6, e.next = 9, fetch("https://estatesbg.herokuapp.com/api/users/register", { method: "POST", body: JSON.stringify({ email: n, password: l, rePassword: o }), headers: { "Content-Type": "application/json" } }); case 9: return i = e.sent, c = i.headers.get("Authorization"), document.cookie = "auth-cookie=".concat(c), e.next = 14, i.json(); case 14: (d = e.sent).email && c && o === l ? (s.context.logIn({ email: d.email, id: d._id }), s.props.history.push("/")) : console.log("Error"), e.next = 21; break; case 18: e.prev = 18, e.t0 = e.catch(6), console.log("Error", e.t0); case 21: case "end": return e.stop() } }), e, null, [[6, 18]]) }))); return function (r) { return e.apply(this, arguments) } }(), s.state = { email: "", password: "", rePassword: "", emailError: !1, passwordError: !1, rePasswordError: !1, emptyFieldsError: !1 }, s } return Object(o.a)(t, [{ key: "render", value: function () { var e = this, r = this.state, t = r.email, s = r.password, a = r.rePassword, n = r.emailError ? "Please enter a valid email" : null, l = r.passwordError ? "Please enter a valid password consisting at least 6 characters" : null, o = r.rePasswordError ? "Please enter a matching password" : null, i = r.emptyFieldsError ? "Please fill all fields above" : null; return Object(g.jsxs)(p.a, { children: [Object(g.jsx)("form", { className: j.a.register, onSubmit: this.handleSubmit, children: Object(g.jsxs)("fieldset", { children: [Object(g.jsx)("h2", { children: "Registration Form" }), Object(g.jsxs)("p", { className: j.a["field field-icon"], children: [Object(g.jsx)("label", { htmlFor: "email", children: Object(g.jsx)("span", { children: Object(g.jsx)("i", { className: "fas fa-envelope" }) }) }), Object(g.jsx)("input", { type: "text", name: "email", id: "email", value: t, onChange: function (r) { return e.handleChange(r, "email") }, placeholder: "pesho.peshev@gmail.com" })] }), Object(g.jsx)("p", { className: j.a.error, children: n }), Object(g.jsxs)("p", { className: j.a["field field-icon"], children: [Object(g.jsx)("label", { htmlFor: "password", children: Object(g.jsx)("span", { children: Object(g.jsx)("i", { className: "fas fa-lock" }) }) }), Object(g.jsx)("input", { type: "password", name: "password", id: "password", value: s, onChange: function (r) { return e.handleChange(r, "password") }, placeholder: "******" })] }), Object(g.jsx)("p", { className: j.a.error, children: l }), Object(g.jsxs)("p", { className: j.a["field field-icon"], children: [Object(g.jsx)("label", { htmlFor: "rePassword", children: Object(g.jsx)("span", { children: Object(g.jsx)("i", { className: "fas fa-lock" }) }) }), Object(g.jsx)("input", { type: "password", name: "rePassword", id: "rePassword", value: a, onChange: function (r) { return e.handleChange(r, "rePassword") }, placeholder: "******" })] }), Object(g.jsx)("p", { className: j.a.error, children: o }), Object(g.jsx)("p", { className: j.a.error, children: i }), Object(g.jsx)("button", { type: "submit", children: "Create Account" }), Object(g.jsxs)("p", { className: j.a["text-center"], children: ["Already registered?", Object(g.jsx)(u.b, { to: "/user/login", children: "Login" })] })] }) }), this.context.loggedIn ? Object(g.jsx)(m.a, { to: "/" }) : null] }) } }]), t }(d.Component); f.contextType = b.a, r.default = f } }]);
//# sourceMappingURL=11.2d50602e.chunk.js.map