(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,n){e.exports=n(234)},234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),i=n.n(c),o=n(7),s=n(6),u=n(105),l=n(27),m=n(9),p=n(10),d=n(12),h=n(11),f=n(18),E=n(19),v=n.n(E),b=n(22),g=n(36),S=n(106),y=n.n(S).a.create({baseURL:"https://stream-json-server.herokuapp.com/"}),O=n(15),j=Object(O.a)(),I=function(e){return function(){var t=Object(g.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).renderListLoading=function(){return e.props.stream.length?e.props.stream.map((function(t){return r.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},r.a.createElement(f.a,{to:"/streams/".concat(t.id),className:"header"},t.title),r.a.createElement("div",{className:"description"},t.description)))})):r.a.createElement("div",null,"Loading ... ")},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){return e.userId===this.props.currentUserId&&null!==e.userId?r.a.createElement("div",{className:"right floated content"},r.a.createElement(f.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary"},"Edit"),r.a.createElement(f.a,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"Delete")):null}},{key:"renderCreateStream",value:function(){return this.props.isSignedIn?r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(f.a,{to:"/streams/new",className:"ui button primary"},"Create Stream")):null}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"List of Streams"),r.a.createElement("div",{className:"ui celled list"},this.renderListLoading()),this.renderCreateStream())}}]),n}(a.Component),k=Object(o.b)((function(e){return{stream:Object.values(e.stream),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{fetchStreams:function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(N),w=n(236),C=n(235),A=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).renderInput=function(t){var n=t.input,a=t.label,c=t.meta,i="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},n,{autoComplete:"off"})),e.renderError(c))},e.onSubmit=function(t){e.props.onSubmit(t)},e}return Object(p.a)(n,[{key:"renderError",value:function(e){var t=e.error,n=e.touched;if(t&&n)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(w.a,{name:"title",component:this.renderInput,label:"Enter Title"}),r.a.createElement(w.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),n}(a.Component),T=Object(C.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a description"),t}})(A),_=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.createStream(t)},e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create Stream"),r.a.createElement(T,{onSubmit:this.onSubmit}))}}]),n}(a.Component),x=Object(o.b)(null,{createStream:function(e){return function(){var t=Object(g.a)(v.a.mark((function t(n,a){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,y.post("/streams",Object(b.a)({},e,{userId:r}));case 3:c=t.sent,n({type:"CREATE_STREAM",payload:c.data}),j.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(_),D=n(43),M=n.n(D),R=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onSubmit=function(t){e.props.editStream(e.props.match.params.id,t)},e.renderList=function(){return e.props.stream?r.a.createElement("div",null,r.a.createElement("h3",null,"Edit a Stream"),r.a.createElement(T,{initialValues:M.a.pick(e.props.stream,"title","description","userId"),onSubmit:e.onSubmit})):r.a.createElement("div",null,"Loading ... ")},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderList())}}]),n}(a.Component),L=Object(o.b)((function(e,t){return{stream:e.stream[t.match.params.id]}}),{fetchStream:I,editStream:function(e,t){return function(){var n=Object(g.a)(v.a.mark((function n(a,r){var c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=r().auth.userId,!(t.userId===c&&null!==c)){n.next=12;break}return n.t0=a,n.t1="EDIT_STREAM",n.next=7,y.patch("/streams/".concat(e),t);case 7:n.t2=n.sent.data,n.t3={type:n.t1,payload:n.t2},(0,n.t0)(n.t3),n.next=13;break;case 12:console.log("Validate Owner Error!");case 13:j.push("/");case 14:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}})(R),q=function(e){return i.a.createPortal(r.a.createElement("div",{className:"ui dimmer modals visible active",onClick:e.onDismiss},r.a.createElement("div",{className:"ui standard modal visible active",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).renderActions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"ui button negative",onClick:function(){return e.props.deleteStream(e.props.match.params.id)}},"Delete"),r.a.createElement(f.a,{to:"/",className:"ui button"},"Cancel"))},e.renderContent=function(){return e.props.stream?"Are you sure you want to delete the stream with title: ".concat(e.props.stream.title," ?"):"Are you sure you want to delete this stream?"},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return console.log("this.props.match.params.id",this.props.match.params.id),console.log("this.props",this.props),r.a.createElement(q,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return j.push("/")}})}}]),n}(a.Component),F=Object(o.b)((function(e,t){return{stream:e.stream[t.match.params.id]}}),{fetchStream:I,deleteStream:function(e){return function(){var t=Object(g.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.delete("/streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e}),j.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(U),G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){if(!this.props.stream)return r.a.createElement("div",null,"loading ...");var e=this.props.stream,t=e.title,n=e.description;return r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("strong",null,r.a.createElement("i",null,"Title:"),"\u2003"),t),r.a.createElement("p",null,r.a.createElement("strong",null,r.a.createElement("i",null,"Description:"),"\u2003"),n))}}]),n}(a.Component),H=Object(o.b)((function(e,t){return{stream:e.stream[t.match.params.id]}}),{fetchStream:I})(G),P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onAuthChange=function(t){return t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignInClick=function(){return e.auth.signIn()},e.onSignOutClick=function(){return e.auth.signOut()},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"696355598576-sl92vso0q6frq5s5q1aq1q8hkrb760nn.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),n}(a.Component),V=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(P),B=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(f.a,{to:"/",className:"item"},"Streamer"),r.a.createElement("div",{className:"right menu"},r.a.createElement(f.a,{to:"/",className:"item"},"All Streams"),r.a.createElement(V,null)))},J=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.b,{history:j,basename:"."},r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:k}),r.a.createElement(l.a,{path:"/streams/new",exact:!0,component:x}),r.a.createElement(l.a,{path:"/streams/edit/:id",exact:!0,component:L}),r.a.createElement(l.a,{path:"/streams/delete/:id",exact:!0,component:F}),r.a.createElement(l.a,{path:"/streams/:id",exact:!0,component:H})))))},X=n(237),Y={isSignedIn:null,userId:null},K=n(35),z=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(b.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(b.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:X.a,stream:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(b.a)({},e,Object(K.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return M.a.omit(e,t.payload);case"FETCH_STREAMS":return Object(b.a)({},e,{},M.a.mapKeys(t.payload,"id"));default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,W=Object(s.e)(z,Q(Object(s.a)(u.a)));i.a.render(r.a.createElement(o.a,{store:W},r.a.createElement(J,null)),document.querySelector("#root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.e30ed1d8.chunk.js.map