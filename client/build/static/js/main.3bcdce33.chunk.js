(this["webpackJsonpgit-pets"]=this["webpackJsonpgit-pets"]||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),o=a.n(r),c=(a(37),a(30)),s=a(1),i=a(12),u=a(7),m=a(8),h=a(14),p=a(10),d=a(9),v=(a(38),a(15)),E=a.n(v);var g=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Your Pets: "),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Pet"),l.a.createElement("th",{scope:"col"},"Breed"),l.a.createElement("th",{scope:"col"},"Location"),l.a.createElement("th",{scope:"col"},"Gender"),l.a.createElement("th",{scope:"col"},"Age"),l.a.createElement("th",{scope:"col"},"Size"),l.a.createElement("th",{scope:"col"},"More Info"))),l.a.createElement("tbody",null,e.searchResults.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.breeds.primary),l.a.createElement("td",null,e.distance),l.a.createElement("td",null,e.gender),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.size),l.a.createElement("td",null,e.description))})))))},f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={pet:"",breed:"",location:"",range:"",gender:"",age:"",size:""},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(i.a)({},n,l))},e.handleFormSubmit=function(t){t.preventDefault(),alert("Let's find a ".concat(e.state.pet," for you!")),e.setState({pet:"",breed:"",location:"",range:"",gender:"",age:"",size:""});var a=Object(h.a)(e);E.a.post("/api/search",{pet:e.state.pet,breed:e.state.breed,location:e.state.location,range:e.state.range,gender:e.state.gender,age:e.state.age,size:e.state.size}).then((function(e){console.log(e.data.animals),a.setState({searchResults:e.data.animals})})).catch((function(e){console.log(e)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return this.state.searchResults?l.a.createElement("div",null,l.a.createElement(g,{searchResults:this.state.searchResults})):l.a.createElement("div",null,l.a.createElement("p",null,"Find your new best friend!"),l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.pet,name:"pet",onChange:this.handleInputChange,type:"text",placeholder:"Pet"}),l.a.createElement("input",{value:this.state.breed,name:"breed",onChange:this.handleInputChange,type:"text",placeholder:"Breed"}),l.a.createElement("input",{value:this.state.location,name:"location",onChange:this.handleInputChange,type:"text",placeholder:"Location"}),l.a.createElement("input",{value:this.state.range,name:"range",onChange:this.handleInputChange,type:"number",placeholder:"Range"}),l.a.createElement("input",{value:this.state.gender,name:"gender",onChange:this.handleInputChange,type:"text",placeholder:"Gender"}),l.a.createElement("input",{value:this.state.age,name:"age",onChange:this.handleInputChange,type:"number",placeholder:"Age"}),l.a.createElement("input",{value:this.state.size,name:"size",onChange:this.handleInputChange,type:"text",placeholder:"Size"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component),b=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(i.a)({},n,l))},e.handleFormSubmit=function(t){t.preventDefault(),console.log("logging in!"),e.setState({email:"",password:""})},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Login to your account!"),l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.email,name:"email",onChange:this.handleInputChange,type:"text",placeholder:"Email"}),l.a.createElement("input",{value:this.state.password,name:"password",onChange:this.handleInputChange,type:"password",placeholder:"Password"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component),C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={firstname:"",lastname:"",email:"",password:""},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(i.a)({},n,l))},e.handleFormSubmit=function(t){t.preventDefault(),console.log("creating new user profile for ${this.state.firstname} $(this.state.lastname}."),e.setState({firstname:"",lastname:"",email:"",password:""}),E.a.post("/api/signup",{firstname:e.state.firstname,lastname:e.state.lastname,email:e.state.email,password:e.state.password}).catch((function(e){console.log(e)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Create an account!"),l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.firstname,name:"firstname",onChange:this.handleInputChange,type:"text",placeholder:"First Name"}),l.a.createElement("input",{value:this.state.lastname,name:"lastname",onChange:this.handleInputChange,type:"text",placeholder:"Last Name"}),l.a.createElement("input",{value:this.state.email,name:"email",onChange:this.handleInputChange,type:"text",placeholder:"Email"}),l.a.createElement("input",{value:this.state.password,name:"password",onChange:this.handleInputChange,type:"password",placeholder:"Password"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component);var y=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))};var w=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"What do you wanna do first"))};var j=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Git-Pets!"),l.a.createElement("a",{className:"navbar-brand",href:"/login"},"Login"),l.a.createElement("a",{className:"navbar-brand",href:"/signup"},"Sign Up"),l.a.createElement("a",{className:"navbar-brand",href:"/search"},"Continue as Guest"),l.a.createElement("a",{className:"navbar-brand",href:"/forum"},"Forum"))};var O=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("a",{href:"https://github.com/squalolee/GitPets",target:"blank"},"GitHub Repo"))},S=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleUpvote=function(t,a){e.props.firebase.ref("posts/"+a).set({title:t.title,upvote:t.upvote+1,downvote:t.downvote})},e.handleDownvote=function(t,a){e.props.firebase.ref("posts/"+a).set({title:t.title,upvote:t.upvote,downvote:t.downvote+1})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.posts,t=this;return!!e&&(this.props.loading?l.a.createElement("div",null,"Loading..."):l.a.createElement("div",{className:"Posts"},Object.keys(e).map((function(a){return l.a.createElement("div",{key:a},l.a.createElement("div",null,"Title: ",e[a].title),l.a.createElement("div",null,"Upvotes: ",e[a].upvote),l.a.createElement("div",null,"Downvotes: ",e[a].downvote),l.a.createElement("div",null,l.a.createElement("button",{onClick:t.handleUpvote.bind(this,e[a],a),type:"button"},"Upvote"),l.a.createElement("button",{onClick:t.handleDownvote.bind(this,e[a],a),type:"button"},"Downvote")))}))))}}]),a}(n.Component);var I=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Here's the forum"),l.a.createElement(S,null))};var k=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to Git-Pets!")),l.a.createElement(j,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:w}),l.a.createElement(s.a,{exact:!0,path:"/login",component:b}),l.a.createElement(s.a,{exact:!0,path:"/signup",component:C}),l.a.createElement(s.a,{exact:!0,path:"/search",component:f}),l.a.createElement(s.a,{exact:!0,path:"/forum",component:I}),l.a.createElement(s.a,{component:y})),l.a.createElement(O,null))};o.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3bcdce33.chunk.js.map