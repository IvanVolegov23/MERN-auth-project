(this["webpackJsonpmern-auth"]=this["webpackJsonpmern-auth"]||[]).push([[0],{143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),l=a.n(o),i=a(27),s=a.n(i),c=a(40),u=a(24),m=a(32),d=a(11),p=a(30),g=a.n(p),f=Object(r.createContext)(null);function h(){var e=Object(r.useContext)(f),t=e.userData,a=e.setUserData,o=Object(d.f)();return n.a.createElement("nav",{className:"auth-options"},t.user?n.a.createElement("button",{onClick:function(){a({token:void 0,user:void 0}),localStorage.setItem("auth-token","")}},"Log out"):n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:function(){return o.push("/register")}},"Register"),n.a.createElement("button",{onClick:function(){return o.push("/login")}},"Log in")))}function v(){return n.a.createElement("header",{id:"header"},n.a.createElement(m.b,{to:"/"},n.a.createElement("h1",{className:"title"},"CLOUD BET BOT")),n.a.createElement(h,null))}var E=a(172),b=a(175),x=a(82),y=a(177),w=Object(E.a)((function(e){return{root:{flexGrow:1},rooter:{"& > *":{margin:e.spacing(0),width:"100%"}},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function O(){var e=w();return n.a.createElement("div",{className:e.root},n.a.createElement(b.a,{container:!0,spacing:0,style:{marginTop:"38px"}},n.a.createElement(b.a,{item:!0,xs:12,sm:3},n.a.createElement("img",{alt:"CLOUD BET BOT",src:"https://www.cloudbetbot.com/wp-content/uploads/2019/05/big-logo.png",style:{width:"100%"}})),n.a.createElement(b.a,{item:!0,xs:12,sm:9,style:{paddingLeft:"5%"}},n.a.createElement("div",null,n.a.createElement("p",null,"Cloud Bet Bot is a third party service that provides automated cloud betting solutions for tipsters and service providers, it is a free service for clients following services that use the platform. Only one account is required to follow multiple independent services and systems."),n.a.createElement("p",null,n.a.createElement("br",null)),n.a.createElement("p",null,"Once the service provider has authorised your access; you login, go to the service providers 'bot page', set your stake and activate it -that's it. You can change your stake or stop the bot placing the bets at any time. You don't need to keep the web page open, our cloud engines order the bets for you."),n.a.createElement("p",null,n.a.createElement("br",null)),n.a.createElement("p",null,"Services utilising Cloud Bet Bot are not rated, ranked or in a league, are not cross promoted, have no adverts on bot pages. Its a simple 'set and forget' platform to alleviate having to manually order bets that tipsters send you."),n.a.createElement("p",null,n.a.createElement("br",null)),n.a.createElement("p",null,"If you'd like to know more or are a service provider wanting to automate bet placement for your clients please send us a message, we'll be happy to hear from you!")),n.a.createElement("form",{className:e.rooter,noValidate:!0,autoComplete:"off"},n.a.createElement(x.a,{id:"outlined-name",label:"First Name",variant:"outlined",style:{marginTop:"30px"}}),n.a.createElement(x.a,{id:"outlined-email",label:"Email",variant:"outlined",style:{marginTop:"20px"}}),n.a.createElement(x.a,{id:"outlined-message",label:"Message",variant:"outlined",multiline:!0,rows:4,style:{marginTop:"20px"}}),n.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,style:{marginTop:"20px",marginBottom:"20px"}},"Send message")))))}var k=a(178),j=a(179),C=a(183),T=a(89),S=a(180),q=a(182),N=a(181),V=a(56),D=a.n(V),W=a(20),F=a(42),I=Object(E.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function M(){var e=I(),t=Object(F.useToasts)().addToast,a=Object(r.useState)((function(){return""})),o=Object(u.a)(a,2),l=o[0],i=o[1],m=Object(r.useState)((function(){return""})),p=Object(u.a)(m,2),h=p[0],v=p[1],E=Object(r.useContext)(f).setUserData,x=Object(d.f)(),w=function(){var e=Object(c.a)(s.a.mark((function e(a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,r={email:l,password:h},e.next=5,g.a.post("http://localhost:5000/users/login",r);case 5:n=e.sent,E({token:n.data.token,user:n.data.user}),localStorage.setItem("auth-token",n.data.token),x.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(e.t0.response.data.msg,{appearance:"error",autoDismiss:!0,marginTop:"30px"});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(k.a,{component:"main",maxWidth:"xs"},n.a.createElement(j.a,null),n.a.createElement("div",{className:e.paper},n.a.createElement(C.a,{className:e.avatar},n.a.createElement(D.a,null)),n.a.createElement(T.a,{component:"h1",variant:"h5"},"Sign in"),n.a.createElement(W.ValidatorForm,{className:e.form,noValidate:!0,onSubmit:w},n.a.createElement(W.TextValidator,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return i(e.target.value)},value:l,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),n.a.createElement(W.TextValidator,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return v(e.target.value)},value:h,validators:["required"],errorMessages:["this field is required"]}),n.a.createElement(S.a,{control:n.a.createElement(q.a,{value:"remember",color:"primary"}),label:"Remember me"}),n.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),n.a.createElement(b.a,{container:!0},n.a.createElement(b.a,{item:!0,xs:!0},n.a.createElement(N.a,{href:"#",variant:"body2"},"Forgot password?")),n.a.createElement(b.a,{item:!0},n.a.createElement(N.a,{href:"/register",variant:"body2"},"Don't have an account? Sign Up"))))))}var B=Object(E.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function P(){var e=B(),t=Object(F.useToasts)().addToast,a=Object(r.useState)((function(){return""})),o=Object(u.a)(a,2),l=o[0],i=o[1],m=Object(r.useState)((function(){return""})),p=Object(u.a)(m,2),h=p[0],v=p[1],E=Object(r.useState)((function(){return""})),x=Object(u.a)(E,2),w=x[0],O=x[1],S=Object(r.useState)((function(){return""})),q=Object(u.a)(S,2),V=q[0],I=q[1],M=Object(r.useState)((function(){return""})),P=Object(u.a)(M,2),U=P[0],L=P[1],A=Object(r.useContext)(f).setUserData,R=Object(d.f)();Object(r.useEffect)((function(){return W.ValidatorForm.addValidationRule("isPasswordMatch",(function(e){return e===h})),function(){W.ValidatorForm.removeValidationRule("isPasswordMatch")}}),[h]);var J=function(){var e=Object(c.a)(s.a.mark((function e(a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submit"),a.preventDefault(),e.prev=2,r={email:l,password:h,passwordCheck:w,firstName:V,lastName:U},console.log(r),e.next=7,g.a.post("http://localhost:5000/users/register",r);case 7:return e.next=9,g.a.post("http://localhost:5000/users/login",{email:l,password:h});case 9:n=e.sent,A({token:n.data.token,user:n.data.user}),localStorage.setItem("auth-token",n.data.token),R.push("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),t(e.t0.response.data.msg,{appearance:"error",autoDismiss:!0,marginTop:"30px"});case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(k.a,{component:"main",maxWidth:"xs"},n.a.createElement(j.a,null),n.a.createElement("div",{className:e.paper},n.a.createElement(C.a,{className:e.avatar},n.a.createElement(D.a,null)),n.a.createElement(T.a,{component:"h1",variant:"h5"},"Sign up"),n.a.createElement(W.ValidatorForm,{className:e.form,noValidate:!0,onSubmit:J},n.a.createElement(b.a,{container:!0,spacing:2},n.a.createElement(b.a,{item:!0,xs:12,sm:6},n.a.createElement(W.TextValidator,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",onChange:function(e){return I(e.target.value)},autoFocus:!0,value:V,validators:["required"],errorMessages:["this field is required"]})),n.a.createElement(b.a,{item:!0,xs:12,sm:6},n.a.createElement(W.TextValidator,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",onChange:function(e){return L(e.target.value)},autoComplete:"lname",value:U,validators:["required"],errorMessages:["this field is required"]})),n.a.createElement(b.a,{item:!0,xs:12},n.a.createElement(W.TextValidator,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"email",autoComplete:"email",onChange:function(e){return i(e.target.value)},value:l,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]})),n.a.createElement(b.a,{item:!0,xs:12},n.a.createElement(W.TextValidator,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return v(e.target.value)},value:h,validators:["required"],errorMessages:["this field is required"]})),n.a.createElement(b.a,{item:!0,xs:12},n.a.createElement(W.TextValidator,{variant:"outlined",required:!0,fullWidth:!0,name:"confirm",label:"Password Confirm",type:"password",id:"confirm",autoComplete:"current-confirm",onChange:function(e){return O(e.target.value)},value:w,validators:["isPasswordMatch","required"],errorMessages:["password mismatch","this field is required"]}))),n.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),n.a.createElement(b.a,{container:!0,justify:"flex-end"},n.a.createElement(b.a,{item:!0},n.a.createElement(N.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))))}a(143);function U(){var e=Object(r.useState)({token:void 0,user:void 0}),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,g.a.post("http://localhost:5000/users/tokenIsValid",null,{headers:{"x-auth-token":t}});case 4:if(!e.sent.data){e.next=10;break}return e.next=8,g.a.get("http://localhost:5000/users/",{headers:{"x-auth-token":t}});case 8:a=e.sent,o({token:t,user:a.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(f.Provider,{value:{userData:a,setUserData:o}},n.a.createElement(v,null),n.a.createElement(F.ToastProvider,null,n.a.createElement("div",{className:"container"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:O}),n.a.createElement(d.a,{path:"/login",component:M}),n.a.createElement(d.a,{path:"/register",component:P})))))))}l.a.render(n.a.createElement(U,null),document.querySelector("#root"))},97:function(e,t,a){e.exports=a(144)}},[[97,1,2]]]);
//# sourceMappingURL=main.1e51e4d3.chunk.js.map