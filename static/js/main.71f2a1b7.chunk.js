(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{201:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(41),o=n.n(l),i=n(18),c=n(6),u=n(14),s=n(20),m=function(){return r.a.createElement("div",null,"StreamList")},p=n(42),d=n(43),h=n(46),g=n(45),E=n(203),f=n(202),b=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).renderInput=function(e){e.input,e.label;var t=e.meta;console.log("renderInput({meta}) props ... :  ",t);"field ".concat(t.error&&t.touched?"error":"")},e}return Object(d.a)(n,[{key:"renderError",value:function(e){var t=e.error,n=e.touched;if(t&&n)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"onSubmit",value:function(e){console.log("onSubmit(valueInput):   ...  ",e)}},{key:"render",value:function(){return console.log("this.props.form: ",this.props.form),r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement("h1",null,this.props.form),r.a.createElement(E.a,{name:"title",component:this.renderInput,label:"Enter Title"}),r.a.createElement(E.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),n}(a.Component),S=Object(f.a)({form:"streamCreate",validate:function(e){console.log("!!!VALIDATE!!!");var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a description"),t}})(b),I=function(){return r.a.createElement("div",null,"StreamEdit")},v=function(){return r.a.createElement("div",null,"StreamDelete")},O=function(){return r.a.createElement("div",null,"StreamShow")},N=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onAuthChange=function(t){console.log("onAuthChange = () =>"),t?(console.log(e.props.signIn()),e.props.signIn(e.auth.currentUser.get().getId())):(console.log(e.props.signOut()),e.props.signOut())},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"696355598576-sl92vso0q6frq5s5q1aq1q8hkrb760nn.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),n}(a.Component),w=Object(i.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return console.log("action signIn()"),{type:"SIGN_IN",payload:e}},signOut:function(){return console.log("action signOut()"),{type:"SIGN_OUT"}}})(N),y=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(u.b,{to:"/",className:"item"},"Streamer"),r.a.createElement("div",{className:"right menu"},r.a.createElement(u.b,{to:"/",className:"item"},"All Streams"),r.a.createElement(w,null)))},j=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(u.a,{basename:"/stream-client"},r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(s.a,{path:"/",exact:!0,component:m}),r.a.createElement(s.a,{path:"/streams/new",component:S}),r.a.createElement(s.a,{path:"/streams/edit",component:I}),r.a.createElement(s.a,{path:"/streams/delete",component:v}),r.a.createElement(s.a,{path:"/streams/show",component:O})),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"List of Streams")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/streams/new"},"Create New Stream")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/streams/edit"},"Edit Stream")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/streams/delete"},"Delete Stream")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/streams/show"},"Show Stream"))))))},k=n(204),C=n(68),A={isSignedIn:null,userId:null},_=Object(c.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(console.log("... authReducer state ... :",e),t.type){case"SIGN_IN":return Object(C.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(C.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:k.a}),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,q=Object(c.e)(_,D(Object(c.a)()));o.a.render(r.a.createElement(i.a,{store:q},r.a.createElement(j,null)),document.querySelector("#root"))},95:function(e,t,n){e.exports=n(201)}},[[95,1,2]]]);
//# sourceMappingURL=main.71f2a1b7.chunk.js.map