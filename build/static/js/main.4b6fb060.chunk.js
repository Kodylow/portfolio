(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(41),s=n.n(c),l=(n(50),n(9)),i=n(3),o=n(8),d=n(42),x=n.n(d),h=n(0),j="abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~",b=function(e,t){return Math.floor(Math.random()*(t-e))+e},u=function(){return j.charAt(Math.floor(Math.random()*j.length))},m=function(){return new Array(b(15,50)).fill().map((function(e){return u()}))},g=function(e){for(var t=[],n=1;n<e.length;n++)Math.random()<.05?t.push(u()):t.push(e[n]);return t.push(u()),t},f=function(e){var t=Object(a.useState)(m()),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(-50*r.length),l=Object(o.a)(s,2),i=l[0],d=l[1],j=Object(a.useState)(null),u=Object(o.a)(j,2),f=u[0],p=u[1];return Object(a.useEffect)((function(){setTimeout((function(){p(b(50,100))}),b(0,8e3))}),[]),x()((function(){if(e.height&&f){if(i>e.height){c([]);var t=m();c(t),d(-44*t.length),p(null),setTimeout((function(){return p(b(50,100))}),b(0,8e3))}else d(i+43);c(g)}}),f),Object(h.jsx)("div",{style:{fontFamily:"matrixFont",color:"#F2A900",writingMode:"vertical-rl",textOrientation:"upright",userSelect:"none",whiteSpace:"nowrap",marginTop:i,marginLeft:-15,marginRight:-15,textShadow:"0px 0px 8px rgba(242, 169, 0, 0.8)",fontSize:50},children:r.map((function(e,t){return Object(h.jsx)("a",{style:{marginTop:-4,opacity:t<6?.1+.15*t:1,color:t===r.length-1?"#fff":void 0,textShadow:t===r.length-1?"0px 0px 20px rgba(255, 255, 255, 1)":void 0},children:e},t)}))})},p=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(null),r=Object(o.a)(n,2),c=r[0],s=r[1];Object(a.useEffect)((function(){var e=t.current.getBoundingClientRect();s({width:e.width,height:e.height})}),[]);var l=c?Math.floor(c.width/26):0;return Object(h.jsx)("div",{className:"bg-gray-900 fixed",style:{top:0,left:0,bottom:0,right:0,overflow:"ignore",display:"flex",flexDirection:"row",justifyContent:"center"},ref:t,children:new Array(l).fill().map((function(e,t){return Object(h.jsx)(f,{height:null===c||void 0===c?void 0:c.height},"stream"+t)}))})};var y=function(){return Object(h.jsx)("main",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{style:{zIndex:0}}),Object(h.jsxs)("section",{className:"pt-40 text-center",style:{color:"white",display:"flex",width:"100%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",zIndex:"1"},children:[Object(h.jsx)("h1",{className:"relative flex text-9xl font-semibold lg:pt-80 sm:pt-40",children:"Hi, I'm Kody."}),Object(h.jsx)("p",{className:"relative flex text-4xl mt-10",children:"Aspiring Shadowy Super Coder."}),Object(h.jsx)("p",{className:"relative flex text-4xl mt-10",children:'"Proof-of-Work Speaks For Itself"'}),Object(h.jsx)("p",{className:"relative flex text-4xl mt-10",children:"- Satoshi Nakamoto"})]})]})})},O=n.p+"static/media/ali&meLaserEyes.0a370be5.png";var w=function(){return Object(h.jsx)("main",{className:"bg-gray-900 min-h-screen p-12 pt-40",children:Object(h.jsx)("div",{children:Object(h.jsxs)("section",{className:"text-gray-300 z:10",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",zIndex:"1"},children:[Object(h.jsx)("img",{className:"rounded-full",src:O,alt:"lasereyes"}),Object(h.jsx)("h1",{className:"relative font-bold text-4xl mt-10 text-center",children:"Me in a Minute"}),Object(h.jsxs)("p",{className:"relative text-3xl mt-10 px-8",children:["I\u2019m a full stack developer and bitcoiner. I want to spend the rest of my life building bitcoin and lightning"," ",Object(h.jsx)("em",{className:"text-yellow-500",children:"tools that people love"}),". I served as a Marine Infantry Officer after college because I believed in supporting and defending the freedoms the U.S. was founded on. I learned to lead and manage in chaotic environments, and to take ownership and responsibility for succeeding as a team. Today, I think ",Object(h.jsx)("em",{className:"text-yellow-500",children:"bitcoin is hope"})," for freedom and property rights for billions. I spend every waking moment learning and teaching about bitcoin, but"," ",Object(h.jsx)("em",{className:"text-yellow-500",children:"Cypherpunks write code"})," and I know that building software myself is the highest impact and most important thing I can do with my life."]})]})})})},v=n(19);var N=function(){return Object(h.jsx)("header",{style:{position:"fixed",width:"100%",zIndex:2,boxShadow:"0 6px 20px 0 rgba(256, 256, 256, 0.4)"},className:"bg-gray-800",children:Object(h.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(h.jsxs)("nav",{className:"flex",children:[Object(h.jsx)(l.c,{to:"/",exact:!0,activeClassName:"underline",className:"inline-flex items-center py-6 px-3 mr-4 text-yellow-500 hover:text-white text-3xl font-bold tracking-widest",children:"Kody"}),Object(h.jsx)(l.c,{to:"/post",activeClassName:"underline bg-gray-600",className:"inline-flex items-center py-3 px-3 my-6 rounded text-yellow-500 hover:text-white text-1xl",children:"Posts"}),Object(h.jsx)(l.c,{to:"/project",activeClassName:"underline bg-gray-600",className:"inline-flex items-center py-3 px-3 my-6 rounded text-yellow-500 hover:text-white text-1xl",children:"Projects"}),Object(h.jsx)(l.c,{to:"/about",activeClassName:"underline bg-gray-600",className:"inline-flex items-center py-3 px-3 my-6 rounded text-yellow-500 hover:text-white text-1xl",children:"About Me"})]}),Object(h.jsxs)("div",{className:"bg-gray-700 inline-flex rounded py-3 px-3 my-6",children:[Object(h.jsx)(v.SocialIcon,{url:"http://www.github.com/Kodylow",target:"_blank",fgColor:"#fff",className:"mr-4",style:{height:35,width:35}}),Object(h.jsx)(v.SocialIcon,{url:"http://www.linkedin.com/in/kodylow",target:"_blank",fgColor:"#fff",className:"mr-4",style:{height:35,width:35}}),Object(h.jsx)(v.SocialIcon,{url:"http://www.twitter.com/lndevs",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})},I=n(14),k=n.n(I);var S=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){k.a.fetch("*[_type == 'post']{\n      title,\n      slug,\n      mainImage{\n        asset->{\n          _id,\n          url\n        },\n        alt\n      }\n    }").then((function(e){return r(e)})).catch(console.error)}),[]),Object(h.jsx)("main",{className:"bg-gray-900 min-h-screen p-12 pt-40",children:Object(h.jsxs)("section",{className:"container mx-auto",children:[Object(h.jsx)("h1",{className:"text-6xl flex justify-center mb-4",children:"Blog Posts"}),Object(h.jsx)("h2",{className:"text-2xl text-gray-100 flex justify-center mb-12",children:"Rips about Bitcoin, Lightning, and whatever else I'm thinking about"}),Object(h.jsx)("div",{className:"grid md;grid-cols-1 lg:grid-cols-3 gap-10",children:n&&n.map((function(e,t){return Object(h.jsx)("article",{children:Object(h.jsx)(l.b,{to:"/post/"+e.slug.current,children:Object(h.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug border-l-8 border-white transform transition duration-500 hover:scale-110",children:[Object(h.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(h.jsx)("span",{className:"block relative h-full flex justify-end items-start pr-4 pb-4",children:Object(h.jsx)("h3",{className:"text-gray-200 text-lg px-3 py-4 font-bold bg-gray-700 text-gray-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)},t)}))})]})})},M=n(45),C=n.n(M),_=n.p+"static/media/transparentshadowysupercoder.8184e365.png";var z=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(i.f)().slug;return Object(a.useEffect)((function(){k.a.fetch('*[slug.current == "'.concat(c,'"]{\n      title,\n      _id,\n      slug,\n      mainImage{\n        asset=>{\n          _id,\n          url\n        }\n      },\n      body,\n      "name": author->name,\n      "authorImage": author->image\n    }')).then((function(e){return r(e[0])})).catch(console.error)}),[c]),n?Object(h.jsx)("main",{className:"bg-gray-900 min-h-screen p-12 pt-40",children:Object(h.jsxs)("article",{className:"container shadow-lg mx-auto border-4 rounded-lg",children:[Object(h.jsx)("header",{children:Object(h.jsx)("h1",{className:"text-yellow-500 text-center pt-40 pb-10 lg:text-9xl text-6xl",style:{backgroundImage:"url(".concat(_,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:n.title})}),Object(h.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl text-gray-50 max-w-full",children:Object(h.jsx)(C.a,{blocks:n.body,projectId:"d3dsbxfz",dataset:"production"})})]})}):Object(h.jsx)("div",{className:"text-white bg-gray-900 min-h-screen p-12",children:"Loading..."})};var E=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){k.a.fetch('*[_type =="project"]{\n      title,\n      date,\n      mainImage,\n      inspiration,\n      description,\n      technologies,\n      github,\n      youtube\n    }').then((function(e){return r(e)})).catch(console.error)})),Object(h.jsx)("main",{className:"bg-gray-900 min-h-screen p-12 pt-40",children:Object(h.jsxs)("section",{className:"container mx-auto",children:[Object(h.jsx)("h1",{className:"text-6xl flex justify-center mb-4",children:"My Projects"}),Object(h.jsx)("h2",{className:"text-2xl text-gray-100 flex justify-center",children:'"We Build the Tools that Shape the World We End Up Living In."'}),Object(h.jsx)("h2",{className:"text-1xl text-gray-100 flex justify-center mb-12",children:"- Jack 'Ballers' Mallers"}),Object(h.jsx)("section",{className:"grid lg:grid-cols-2 sm:grid-cols-1 gap-8",children:n&&n.map((function(e,t){return Object(h.jsxs)("article",{className:"relative rounded-lg shadow-xl bg-gray-200 p-16",children:[Object(h.jsx)("h3",{className:"text-gray-800 text-3xl font-bold mb-2",children:e.title}),Object(h.jsxs)("div",{className:"text-yellow-600 text-xs space-x-4",children:[Object(h.jsx)("span",{children:Object(h.jsx)("strong",{className:"font-bold",children:new Date(e.date).toLocaleDateString()})}),Object(h.jsx)("p",{className:"my-6 text-lg text-gray-700 leading-relaxed",children:e.inspiration}),Object(h.jsxs)("span",{className:"flex justify-around gap-8",children:[Object(h.jsx)("a",{href:e.github,alt:"github_repo",target:"_blank",rel:"noopener noreferrer",className:"text-white text-2xl font-bold px-6 py-3 rounded bg-gray-900 hover:bg-gray-400 transform transition duration-500 hover:scale-110",children:"Github Repo"}),Object(h.jsx)("a",{href:e.youtube,alt:"github_repo",target:"_blank",rel:"noopener noreferrer",className:"text-white text-2xl font-bold px-6 py-3 rounded bg-gray-900 hover:bg-gray-400 transform transition duration-500 hover:scale-110",children:"Demo Video"})]})]})]},t)}))})]})})};var A=function(){return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(N,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{component:y,path:"/",exact:!0}),Object(h.jsx)(i.a,{component:w,path:"/about"}),Object(h.jsx)(i.a,{component:z,path:"/post/:slug"}),Object(h.jsx)(i.a,{component:S,path:"/post"}),Object(h.jsx)(i.a,{component:E,path:"/project"}),Object(h.jsx)(i.a,{component:y,part:"/portfolio"})]})]})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))},14:function(e,t,n){var a=n(62)({projectId:"d3dsbxfz",dataset:"production"});e.exports=a},50:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.4b6fb060.chunk.js.map