(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{31:function(e,a,t){e.exports=t(62)},36:function(e,a,t){},55:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),c=t.n(r),o=t(6),s=t(5),m=t(13),u=t(11);t(36);var i=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var E=function(e){var a=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},a)},d=t(14),f=t.n(d),p=function(){return f.a.get("/api/tasks")},h=function(e){return f.a.get("/api/tasks/"+e)},b=function(e){return f.a.delete("/api/tasks/"+e)},v=function(e){return f.a.post("/api/tasks",e)},g=function(e){return f.a.post("/api/user/create",e)};function N(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function k(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function j(e){var a=e.size,t=e.children;return l.a.createElement("div",{className:a.split(" ").map((function(e){return"col-"+e})).join(" ")},t)}t(55);function O(e){var a=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},a))}function C(e){var a=e.children;return l.a.createElement("li",{className:"list-group-item"},a)}function w(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function y(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var L=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),s=Object(u.a)(c,2),d=s[0],f=s[1];function h(){p().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}return Object(n.useEffect)((function(){h()}),[]),l.a.createElement(N,{fluid:!0},l.a.createElement(k,null,l.a.createElement(j,{size:"md-6"},l.a.createElement(E,null,l.a.createElement("h1",null,"What Task Needs to be Added?")),l.a.createElement("form",null,l.a.createElement(w,{onChange:function(e){var a=e.target,t=a.name,n=a.value;f(Object(m.a)(Object(m.a)({},d),{},{[t]:n}))},name:"taskname",placeholder:"Task description"}),l.a.createElement(y,{disabled:!d.taskname,onClick:function(e){e.preventDefault(),d.taskname&&v({taskname:d.taskname}).then((function(e){return h()})).catch((function(e){return console.log(e)}))}},"Submit Task"))),l.a.createElement(j,{size:"md-6 sm-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"Tasks On Overall List")),t.length?l.a.createElement(O,null,t.map((function(e){return l.a.createElement(C,{key:e._id},l.a.createElement(o.b,{to:"/tasks/"+e._id},l.a.createElement("strong",null,e.taskname," assigned to ",l.a.createElement("button",{className:"userLabel"},e.user))),l.a.createElement(i,{onClick:function(){return a=e._id,void b(a).then((function(e){return h()})).catch((function(e){return console.log(e)}));var a}}))}))):l.a.createElement("h3",null,"No Results to Display"))))};var P=function(e){var a=Object(n.useState)({}),t=Object(u.a)(a,2),r=t[0],c=t[1],m=Object(s.f)().id;return Object(n.useEffect)((function(){h(m).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[m]),l.a.createElement(N,{fluid:!0},l.a.createElement(k,null,l.a.createElement(j,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,r.taskname," assigned to")))),l.a.createElement(k,null,l.a.createElement(j,{size:"md-2"},l.a.createElement(o.b,{to:"/"},"\u2190 Back to Tasks"))))};var x=function(){return l.a.createElement(N,{fluid:!0},l.a.createElement(k,null,l.a.createElement(j,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var B=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Task List"),l.a.createElement("ul",{className:"nav nav-tabs"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/person"},"Daria's Page")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/team"},"Team Board")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/resources"},"Resources")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/login"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/create"},"CreateAccount"))))};var I=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),s=Object(u.a)(c,2);function m(){p().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}function d(e){b(e).then((function(e){return m()})).catch((function(e){return console.log(e)}))}return s[0],s[1],Object(n.useEffect)((function(){m()}),[]),l.a.createElement(N,{fluid:!0},l.a.createElement(k,null,l.a.createElement(j,{size:"md-4"},l.a.createElement(E,null,l.a.createElement("h1",null,"Tasks Assigned to You")),t.length?l.a.createElement(O,null,t.map((function(e){return l.a.createElement(C,{key:e._id},l.a.createElement(o.b,{to:"/tasks/"+e._id},l.a.createElement("strong",null,e.taskname," assigned to ",l.a.createElement("button",{className:"userLabel"},e.user))),l.a.createElement(i,{onClick:function(){return d(e._id)}}))}))):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement(j,{size:"md-4 sm-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"Tasks Assigned to Others")),t.length?l.a.createElement(O,null,t.map((function(e){return l.a.createElement(C,{key:e._id},l.a.createElement(o.b,{to:"/tasks/"+e._id},l.a.createElement("strong",null,e.taskname," assigned to ",l.a.createElement("button",{className:"userLabel"},e.user))),l.a.createElement(i,{onClick:function(){return d(e._id)}}))}))):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement(j,{size:"md-4 sm-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"Chat Container")))))};var T=function(){return l.a.createElement("h1",null,"Hi team")};var z=function(){return l.a.createElement("h1",null,"Helpful links")},S=t(63),_=t(64);var G=function(){return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement(S.a.Group,{controlId:"formBasicEmail"},l.a.createElement(S.a.Label,null,"Email address"),l.a.createElement(S.a.Control,{type:"email",placeholder:"Email"})),l.a.createElement(S.a.Group,{controlId:"formBasicPassword"},l.a.createElement(S.a.Label,null,"Password"),l.a.createElement(S.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(_.a,{variant:"primary",type:"submit"},"Login")),l.a.createElement("p",null,"Don't have an account? ",l.a.createElement(_.a,{variant:"primary",type:"submit"},"Create Account")))};var A=function(){var e=Object(n.useState)({}),a=Object(u.a)(e,2),t=a[0],r=a[1],c=function(e){var a=e.target,n=a.name,l=a.value;r(Object(m.a)(Object(m.a)({},t),{},{[n]:l})),console.log(t)};Object(n.useEffect)((function(){return console.log("State is: ",t)}),[t]);var o=function(e){e.preventDefault(),console.log("file: . Line: 24.");var a={firstName:t.firstName,lastName:t.lastName,userName:t.userName,email:t.email,password:t.password};g(a).then((function(e){e.json(e)})).catch((function(e){return console.log(e)}))};return l.a.createElement(S.a,{onSubmit:o},l.a.createElement(S.a.Group,{controlId:"formBasicPassword"},l.a.createElement(S.a.Label,null,"First Name"),l.a.createElement(S.a.Control,{name:"firstName",placeholder:"First Name",onChange:c})),l.a.createElement(S.a.Group,{controlId:"formBasicPassword"},l.a.createElement(S.a.Label,null,"Last Name"),l.a.createElement(S.a.Control,{name:"lastName",placeholder:"Last Name",onChange:c})),l.a.createElement(S.a.Group,{controlId:"formBasicEmail"},l.a.createElement(S.a.Label,null,"Email address"),l.a.createElement(S.a.Control,{name:"email",placeholder:"Email",onChange:c})),l.a.createElement(S.a.Group,{controlId:"formBasicPassword"},l.a.createElement(S.a.Label,null,"Username"),l.a.createElement(S.a.Control,{name:"userName",placeholder:"username",onChange:c})),l.a.createElement(S.a.Group,{controlId:"formBasicPassword"},l.a.createElement(S.a.Label,null,"Password"),l.a.createElement(S.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:c})),l.a.createElement(S.a.Group,{controlId:"formBasicPassword"},l.a.createElement(S.a.Label,null,"Confirm Password"),l.a.createElement(S.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:c})),l.a.createElement(_.a,{variant:"primary",type:"submit",onClick:o},"Create Account"))};var D=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(B,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/person",component:I}),l.a.createElement(s.a,{exact:!0,path:"/team",component:T}),l.a.createElement(s.a,{exact:!0,path:"/resources",component:z}),l.a.createElement(s.a,{exact:!0,path:"/login",component:G}),l.a.createElement(s.a,{exact:!0,path:"/create",component:A}),l.a.createElement(s.a,{exact:!0,path:["/","/tasks"]},l.a.createElement(L,null)),l.a.createElement(s.a,{exact:!0,path:"/tasks/:id"},l.a.createElement(P,null)),l.a.createElement(s.a,null,l.a.createElement(x,null)))))};c.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a4a7c172.chunk.js.map