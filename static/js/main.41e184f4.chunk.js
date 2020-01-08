(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Brett Sweat","image":"/img/gpk1.png"},{"id":2,"name":"Haley Comet","image":"/img/gpk2.png"},{"id":3,"name":"Screwey Dewey","image":"/img/gpk3.png"},{"id":4,"name":"Stuck Chuck","image":"/img/gpk4.png"},{"id":5,"name":"Dribblin\' Derek","image":"/img/gpk5.png"},{"id":6,"name":"Windy Winston","image":"/img/gpk6.png"},{"id":7,"name":"Stoned Sean","image":"/img/gpk7.png"},{"id":8,"name":"Ground Chuck","image":"/img/gpk8.png"},{"id":9,"name":"Dead Ted","image":"/img/gpk9.png"},{"id":10,"name":"Peeled Paul","image":"/img/gpk10.png"},{"id":11,"name":"Russ Puss","image":"/img/gpk11.png"},{"id":12,"name":"Banana Anna","image":"/img/gpk12.png"}]')},,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(3),i=(t(13),function(){return c.a.createElement("header",{className:"header-class"},c.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg"},c.a.createElement("a",{className:"navbar-brand nav-title px-2",href:"https://nmikstas.github.io/portfolio/index.html"},"Nick Mikstas Portfolio"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",null,"React Clicky Game")),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"https://nmikstas.github.io/portfolio/index.html"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"https://nmikstas.github.io/portfolio/resume.html"},"Resume")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"https://nmikstas.github.io/portfolio/web.html"},"Web")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"https://nmikstas.github.io/portfolio/embedded.html"},"Embedded")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"https://nmikstas.github.io/portfolio/fpga.html"},"FPGA")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"https://nmikstas.github.io/portfolio/dsp.html"},"DSP")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"https://nmikstas.github.io/portfolio/games.html"},"Games"))))))}),l=(t(14),function(){return c.a.createElement("footer",{id:"sticky-footer",className:"pt-4 pb-1 mt-4"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("small",null,"\xa9Nick Mikstas - nmikstas@alumni.scu.edu")))}),m=t(4),r=t(6),o=t(5),g=t(7),d=(t(15),function(){return c.a.createElement("div",{className:"title container-fluid"},c.a.createElement("p",null,"Click the Images Only Once to Earn Points!"))}),u=(t(16),function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.clickCard(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),k=t(1),p=(t(17),t(18),function(e){var a;return a="good"===e.clickResult?"col-md-5 message good-guess":"bad"===e.clickResult?"col-md-5 message bad-guess":"col-md-5 message reset-guess",c.a.createElement("div",{className:"status-bar row"},c.a.createElement("div",{className:"col-md-2 button"},c.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return e.resetGame()}},"Reset Game")),c.a.createElement("div",{className:a},e.message),c.a.createElement("div",{className:"col-md-5 score"},"Your Score: ",e.score," | High Score: ",e.hiScore))}),h=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={deck:[],clickedIds:[],score:0,hiScore:0,gameMessage:"Click an Image to Begin!",clickResult:"reset"},t.componentDidMount=function(){t.shuffleDeck()},t.shuffleDeck=function(){for(var e=[],a=[];e.length<k.length;){var n=Math.floor(Math.random()*k.length);e.includes(n)||(e.push(n),a.push(k[n]))}t.setState({deck:a})},t.resetGame=function(){t.shuffleDeck(),t.setState({clickedIds:[],score:0,hiScore:0,gameMessage:"Click an Image to Begin!",clickResult:"reset"})},t.clickCard=function(e){for(var a=t.state.score+1,n=t.state.hiScore,c=[],s=0;s<t.state.clickedIds.length;s++)c.push(t.state.clickedIds[s]);n<a&&(n=a),c.includes(e)?t.setState({clickedIds:[],score:0,gameMessage:"Already Clicked!",clickResult:"bad"}):(c.push(e),t.setState({clickedIds:c,score:a,hiScore:n,gameMessage:"Good Guess!",clickResult:"good"})),t.shuffleDeck()},t.render=function(){return c.a.createElement("div",{id:"page-body"},c.a.createElement(d,null),c.a.createElement("div",{className:"container"},c.a.createElement(p,{key:100,clickResult:t.state.clickResult,resetGame:t.resetGame,message:t.state.gameMessage,score:t.state.score,hiScore:t.state.hiScore}),t.state.deck.map((function(e){return c.a.createElement(u,{clickCard:t.clickCard,id:e.id,key:e.id,name:e.name,image:e.image})}))))},t}return Object(g.a)(a,e),a}(n.Component);Object(s.render)([c.a.createElement(i,{key:"1"}),c.a.createElement(h,{key:"2"}),c.a.createElement(l,{key:"3"})],document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.41e184f4.chunk.js.map