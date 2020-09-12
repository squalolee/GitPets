(this["webpackJsonpgit-pets"]=this["webpackJsonpgit-pets"]||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),o=a.n(r),s=(a(37),a(30)),c=a(1),i=a(7),m=a(8),u=a(9),h=a(15),p=a(11),d=a(10),g=(a(38),a(13)),E=a.n(g);var b=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Your Pets: "),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Pet"),l.a.createElement("th",{scope:"col"},"Breed"),l.a.createElement("th",{scope:"col"},"Location"),l.a.createElement("th",{scope:"col"},"Gender"),l.a.createElement("th",{scope:"col"},"Age"),l.a.createElement("th",{scope:"col"},"Size"),l.a.createElement("th",{scope:"col"},"More Info"))),l.a.createElement("tbody",null,e.searchResults.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.breeds.primary),l.a.createElement("td",null,e.distance),l.a.createElement("td",null,e.gender),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.size),l.a.createElement("td",null,e.description))})))))},f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={pet:"",breed:"",location:"",range:"",gender:"",age:"",size:""},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(i.a)({},n,l))},e.handleFormSubmit=function(t){t.preventDefault(),alert("Let's find a ".concat(e.state.pet," for you!")),e.setState({pet:"",breed:"",location:"",range:"",gender:"",age:"",size:""});var a=Object(h.a)(e);E.a.post("/api/search",{pet:e.state.pet,breed:e.state.breed,location:e.state.location,range:e.state.range,gender:e.state.gender,age:e.state.age,size:e.state.size}).then((function(e){console.log(e.data.animals),a.setState({searchResults:e.data.animals})})).catch((function(e){console.log(e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){return this.state.searchResults?l.a.createElement("div",null,l.a.createElement(b,{searchResults:this.state.searchResults})):l.a.createElement("div",null,l.a.createElement("p",null,"Find your new best friend!"),l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.pet,name:"pet",onChange:this.handleInputChange,type:"text",placeholder:"Pet"}),l.a.createElement("input",{value:this.state.breed,name:"breed",onChange:this.handleInputChange,type:"text",placeholder:"Breed"}),l.a.createElement("input",{value:this.state.location,name:"location",onChange:this.handleInputChange,type:"text",placeholder:"Location"}),l.a.createElement("input",{value:this.state.range,name:"range",onChange:this.handleInputChange,type:"number",placeholder:"Range"}),l.a.createElement("input",{value:this.state.gender,name:"gender",onChange:this.handleInputChange,type:"text",placeholder:"Gender"}),l.a.createElement("input",{value:this.state.age,name:"age",onChange:this.handleInputChange,type:"number",placeholder:"Age"}),l.a.createElement("input",{value:this.state.size,name:"size",onChange:this.handleInputChange,type:"text",placeholder:"Size"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(i.a)({},n,l))},e.handleFormSubmit=function(t){t.preventDefault(),console.log("logging in!"),e.setState({email:"",password:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Login to your account!"),l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.email,name:"email",onChange:this.handleInputChange,type:"text",placeholder:"Email"}),l.a.createElement("input",{value:this.state.password,name:"password",onChange:this.handleInputChange,type:"password",placeholder:"Password"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component),y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={firstname:"",lastname:"",email:"",password:""},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(i.a)({},n,l))},e.handleFormSubmit=function(t){t.preventDefault(),console.log("creating new user profile for ${this.state.firstname} $(this.state.lastname}."),e.setState({firstname:"",lastname:"",email:"",password:""}),E.a.post("/api/signup",{firstname:e.state.firstname,lastname:e.state.lastname,email:e.state.email,password:e.state.password}).catch((function(e){console.log(e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Create an account!"),l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.firstname,name:"firstname",onChange:this.handleInputChange,type:"text",placeholder:"First Name"}),l.a.createElement("input",{value:this.state.lastname,name:"lastname",onChange:this.handleInputChange,type:"text",placeholder:"Last Name"}),l.a.createElement("input",{value:this.state.email,name:"email",onChange:this.handleInputChange,type:"text",placeholder:"Email"}),l.a.createElement("input",{value:this.state.password,name:"password",onChange:this.handleInputChange,type:"password",placeholder:"Password"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component);var C=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))};var w=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"What do you wanna do first"))};var S=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Git-Pets!"),l.a.createElement("a",{className:"navbar-brand",href:"/login"},"Login"),l.a.createElement("a",{className:"navbar-brand",href:"/signup"},"Sign Up"),l.a.createElement("a",{className:"navbar-brand",href:"/search"},"Continue as Guest"),l.a.createElement("a",{className:"navbar-brand",href:"/forum"},"Forum"))};var j=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("a",{href:"https://github.com/squalolee/GitPets",target:"blank"},"GitHub Repo"))},I=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",posttitle:"",postbody:""},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(i.a)({},n,l)),console.log("here")},e.handleFormSubmit=function(t){t.preventDefault(),console.log("creating new blog post by ".concat(e.state.name)),e.setState({name:"",posttitle:"",postbody:""}),console.log("".concat(e.state.name)),console.log("".concat(e.state.posttitle)),console.log("".concat(e.state.postbody)),E.a.post("/api/forum",{name:e.state.name,posttitle:e.state.posttitle,postbody:e.state.postbody}).catch((function(e){console.log(e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to the GitPets Blog!"),l.a.createElement("p",null,"Post your adoption stories, ask questions, or leave us pictures of your furry friends!"),l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.name,name:"name",onChange:this.handleInputChange,type:"text",placeholder:"Name to be displayed"}),l.a.createElement("input",{value:this.state.posttitle,name:"posttitle",onChange:this.handleInputChange,type:"text",placeholder:"Post Title"}),l.a.createElement("input",{value:this.state.postbody,name:"postbody",onChange:this.handleInputChange,type:"text",placeholder:"Your post here!"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component);var O=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to Git-Pets!")),l.a.createElement(S,null),l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:w}),l.a.createElement(c.a,{exact:!0,path:"/login",component:v}),l.a.createElement(c.a,{exact:!0,path:"/signup",component:y}),l.a.createElement(c.a,{exact:!0,path:"/search",component:f}),l.a.createElement(c.a,{exact:!0,path:"/forum",component:I}),l.a.createElement(c.a,{component:C})),l.a.createElement(j,null))};o.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.48cd03c3.chunk.js.map