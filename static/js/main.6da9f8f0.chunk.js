(this["webpackJsonpfavourite-fonts"]=this["webpackJsonpfavourite-fonts"]||[]).push([[0],{21:function(e,n,t){e.exports=t(32)},32:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(15),i=t.n(o),c=t(8),l=t.n(c),u=t(10),s=t(9),d=t(16),f=t(3),h=t(4),p=t(6),m=t(5),v=t(7),g=t(2),x=t(1),b="AIzaSyAdhE93wp4W0BOvMdP1mZFkFQ4_jg5tFFo",O=Object(u.a)(l.a.mark((function e(){var n,t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=".concat(b,"&sort=popularity"));case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,r=t.items.map((function(e){var n=e.family,t=n.replace(/ /g,"+"),r=e.variants.includes("regular")?":regular":e.variants.includes("300")?":300":"";return{family:n,url:"https://fonts.googleapis.com/css?family=".concat(t).concat(r)}})),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));function y(){var e=Object(g.a)(["\n      font-size: 30px;\n      font-weight: 800;\n      color: ",";\n      span {\n        color: ",";\n      }\n    "]);return y=function(){return e},e}function w(){var e=Object(g.a)(["\n  ","\n"]);return w=function(){return e},e}function E(){var e=Object(g.a)(["\n      padding: 30px ",";\n      display: flex;\n      justify-content: space-between;\n      border-bottom: 1px solid ",";\n\n      nav {\n        display: flex;\n        align-items: center;\n      }\n\n      a {\n        display: inline-block;\n        margin-left: 30px;\n        text-decoration: none;\n        font-size: 14px;\n        font-weight: 600;\n        transition: color 0.1s linear;\n        color: ",";\n        &:hover {\n          color: ",";\n        }\n      }\n    "]);return E=function(){return e},e}function j(){var e=Object(g.a)(["\n  ","\n"]);return j=function(){return e},e}var T=x.d.header(j(),(function(e){var n=e.theme;return Object(x.c)(E(),n.layout.padding,n.colors.lightestGrey,n.colors.lightGrey,n.colors.darkGrey)})),S=x.d.span(w(),(function(e){var n=e.theme;return Object(x.c)(y(),n.colors.medGrey,n.colors.lightGrey)})),z=function(e){function n(){var e,t;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={menuIsHidden:!0},t}return Object(v.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){return a.a.createElement(T,null,a.a.createElement(S,null,"Favourite ",a.a.createElement("span",null,"fonts")),a.a.createElement("nav",null,a.a.createElement("a",{href:"#"},"CATALOGUE"),a.a.createElement("a",{href:"#"},"FEATURED"),a.a.createElement("a",{href:"#"},"ARTICLES"),a.a.createElement("a",{href:"#"},"ABOUT")))}}]),n}(a.a.Component);function k(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0);\n"]);return k=function(){return e},e}var C=x.d.div(k()),F=function(){return a.a.createElement(C,null,a.a.createElement("svg",{width:"24",height:"24",fill:"none"},a.a.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.71 14h.79l4.99 5L19 20.49l-5-4.99v-.79l-.27-.28C12.59 15.41 11.11 16 9.5 16 5.91 16 3 13.09 3 9.5S5.91 3 9.5 3 16 5.91 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27zM5 9.5C5 11.99 7.01 14 9.5 14S14 11.99 14 9.5 11.99 5 9.5 5 5 7.01 5 9.5z",fill:"#000",fillOpacity:".54"})))};function V(){var e=Object(g.a)(["\n  padding: 0px 20px;\n"]);return V=function(){return e},e}function L(){var e=Object(g.a)(["\n  display: grid;\n  grid-template-columns: 30px auto;\n"]);return L=function(){return e},e}var R=x.d.label(L()),A=x.d.input(V()),H=function(e){var n=e.searchText,t=e.handleSearchTextChange;return a.a.createElement(R,{htmlFor:"search"},a.a.createElement(F,null),a.a.createElement(A,{id:"search",type:"text",placeholder:"Search fonts",value:n,onChange:t}))};function M(){var e=Object(g.a)(["\n  padding: 0 20px;\n"]);return M=function(){return e},e}var G=x.d.input(M()),B=function(e){var n=e.exampleText,t=e.handleExampleTextChange;return a.a.createElement(G,{type:"text",placeholder:"Type something",value:n,onChange:t})};function I(){var e=Object(g.a)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: background-color 0.1s linear, transform 0.3s linear;\n  path {\n    fill: rgba(0, 0, 0, 0.54);\n  }\n  ",";\n  &:hover {\n    cursor: pointer;\n    background-color: #eee;\n  }\n"]);return I=function(){return e},e}function D(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  padding: 0;\n  ","\n  path {\n    fill: ",";\n    transition: fill 0.1s linear;\n  }\n  &:hover {\n    cursor: pointer;\n    path {\n      fill: ",";\n    }\n  }\n"]);return D=function(){return e},e}var P=x.d.button(D(),(function(e){return"optionsBar"===e.type?"transform: translateX(10px);":""}),(function(e){return"add"===e.type?"".concat(e.theme.colors.lightRed):"rgba(0, 0, 0, 0.54)"}),(function(e){return"add"===e.type?"".concat(e.theme.colors.red):"rgba(0, 0, 0, 0.74)"})),U=x.d.button(I(),(function(e){return e.windowAtTop?"transform: translateY(200px)":"transform: translateY(0)"})),Y=function(e){var n=e.handleOptionsReset;return a.a.createElement(P,{type:"optionsBar",onClick:n},a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})))},W=function(e){var n=e.handleViewToggle,t=e.isListView;return console.log(t),a.a.createElement(P,{type:"optionsBar",onClick:n},t&&a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M4 5v13h17V5H4zm10 2v3.5h-3V7h3zM6 7h3v3.5H6V7zm0 9v-3.5h3V16H6zm5 0v-3.5h3V16h-3zm8 0h-3v-3.5h3V16zm-3-5.5V7h3v3.5h-3z"})),!t&&a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M3 5v14h17V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm13 2H9v-2h9v2zm0-4H9v-2h9v2zm0-4H9V7h9v2z"})))},_=function(){return a.a.createElement(P,{type:"add"},a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm11 1h4v-2h-4V7h-2v4H7v2h4v4h2v-4z"})))},q=function(e){var n=e.windowAtTop,t=e.handleBackToTopClick;return a.a.createElement(U,{windowAtTop:n,onClick:t},a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"})))};function J(){var e=Object(g.a)(["\n  padding: 0 15px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  color: ",";\n  &:hover {\n    cursor: pointer;\n  }\n  &:focus {\n    color: ",";\n  }\n"]);return J=function(){return e},e}var Q=x.d.select(J(),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.darkGrey})),X=function(e){var n=e.fontSize,t=e.handleFontSizeChange;return a.a.createElement(Q,{name:"font-size",id:"font-size",value:n,onChange:t},a.a.createElement("option",{value:"20px"},"20px"),a.a.createElement("option",{value:"24px"},"24px"),a.a.createElement("option",{value:"32px"},"32px"),a.a.createElement("option",{value:"40px"},"40px"),a.a.createElement("option",{value:"60px"},"60px"),a.a.createElement("option",{value:"80px"},"80px"))};function Z(){var e=Object(g.a)(["\n    height: 50px;\n    border-radius: 50px;\n    padding: 0px ",";\n    display: grid;\n    grid-template-columns: 300px minmax(0, 5fr) 100px 50px 50px;\n    border: 1px solid ",";\n    input {\n      border: none;\n    }\n  "]);return Z=function(){return e},e}function K(){var e=Object(g.a)(["\n  ","\n"]);return K=function(){return e},e}function N(){var e=Object(g.a)(["\n    padding: 20px ",";\n  "]);return N=function(){return e},e}function $(){var e=Object(g.a)(["\n  ","\n"]);return $=function(){return e},e}var ee=x.d.section($(),(function(e){var n=e.theme;return Object(x.c)(N(),n.layout.padding)})),ne=x.d.section(K(),(function(e){var n=e.theme;return Object(x.c)(Z(),n.layout.padding,n.colors.lightestGrey)})),te=function(e){var n=e.searchText,t=e.exampleText,r=e.fontSize,o=e.isListView,i=e.handleSearchTextChange,c=e.handleExampleTextChange,l=e.handleFontSizeChange,u=e.handleViewToggle,s=e.handleOptionsReset;return a.a.createElement(ee,null,a.a.createElement(ne,null,a.a.createElement(H,{searchText:n,handleSearchTextChange:i}),a.a.createElement(B,{exampleText:t,handleExampleTextChange:c}),a.a.createElement(X,{fontSize:r,handleFontSizeChange:l}),a.a.createElement(W,{isListView:o,handleViewToggle:u}),a.a.createElement(Y,{handleOptionsReset:s})))};function re(){var e=Object(g.a)(["\n  display: inline-block;\n  width: 100%;\n  overflow-wrap: break-word;\n  line-height: 1.2;\n"]);return re=function(){return e},e}function ae(){var e=Object(g.a)(["\n  font-size: 1rem;\n  padding: 10px 0 20px 0;\n  display: flex;\n  justify-content: space-between;\n"]);return ae=function(){return e},e}function oe(){var e=Object(g.a)(["\n      min-height: 250px;\n      border-top: 1px solid ",";\n    "]);return oe=function(){return e},e}function ie(){var e=Object(g.a)(["\n  ","\n"]);return ie=function(){return e},e}var ce=x.d.div(ie(),(function(e){e.theme;return Object(x.c)(oe(),(function(e){return e.theme.colors.lighterGrey}))})),le=x.d.div(ae()),ue=x.d.span(re()),se=function(e){function n(e){var t;return Object(f.a)(this,n),(t=Object(p.a)(this,Object(m.a)(n).call(this,e))).componentDidMount=function(){t.props.fontLoadRequested||t.props.addObserverTarget(t.ref.current)},t.componentDidUpdate=function(){t.initialExampleText=t.props.exampleText},t.handleIndividualSampleBlur=function(e){""===e.target.innerHTML&&(e.target.innerHTML=t.initialExampleText)},t.ref=a.a.createRef(),t.initialExampleText=e.exampleText,t}return Object(v.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props,n=e.family,t=e.url,r=e.fontIsLoaded,o=e.exampleText,i=e.fontSize;return a.a.createElement(ce,{ref:this.ref,"data-url":t},a.a.createElement(le,null,n,a.a.createElement(_,null)),!r&&a.a.createElement("h3",null,"Loading..."),r&&a.a.createElement(ue,{contentEditable:!0,onBlur:this.handleIndividualSampleBlur,style:{fontFamily:n,fontSize:i}},o))}}]),n}(a.a.Component),de=function(e){function n(e){var t;return Object(f.a)(this,n),(t=Object(p.a)(this,Object(m.a)(n).call(this,e))).componentDidMount=function(){t.ref.current.addEventListener("load",(function(e){var n=e.target;t.props.handleFontLoaded(n.attributes.href.value)}))},t.ref=a.a.createRef(),t}return Object(v.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props.url;return a.a.createElement("link",{rel:"stylesheet",href:e,key:e,ref:this.ref})}}]),n}(a.a.Component);function fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function he(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fe(t,!0).forEach((function(n){Object(d.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function pe(){var e=Object(g.a)(["\n          @media (min-width: 600px) {\n            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n          }\n          @media (min-width: 1100px) {\n            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);\n          }\n        "]);return pe=function(){return e},e}function me(){var e=Object(g.a)(["\n  display: grid;\n  grid-gap: 30px;\n  padding: 30px ",";\n  grid-template-columns: minmax(0, 1fr);\n  ","\n"]);return me=function(){return e},e}function ve(){var e=Object(g.a)(["\n  body, html {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n"]);return ve=function(){return e},e}var ge=Object(x.b)(ve()),xe={layout:{padding:"15px"},colors:{lightestGrey:"rgba(0,0,0, 0.14)",lighterGrey:"rgba(0,0,0, 0.3)",lightGrey:"rgba(0,0,0, 0.6)",medGrey:"#3c4043",darkGrey:"rgba(0,0,0, 0.87)",lightRed:"rgba(255, 82, 82, 0.8)",red:"rgba(255, 82, 82, 1)"}},be=x.d.section(me(),(function(e){return e.theme.layout.padding}),(function(e){return e.isListView?"":Object(x.c)(pe())})),Oe={exampleText:"Then came the night of the first fallen star.",searchText:"",fontSize:"40px",isListView:!1},ye=function(e){function n(){var e;return Object(f.a)(this,n),(e=Object(p.a)(this,Object(m.a)(n).call(this))).handleWindowScroll=function(){var n=e.state.windowAtTop;n&&window.scrollY>100&&e.setState((function(e){return he({},e,{windowAtTop:!1})})),!n&&window.scrollY<50&&e.setState((function(e){return he({},e,{windowAtTop:!0})}))},e.filterFonts=function(){var n,t=e.state,r=t.allFonts,a=t.searchText;if(a.length<1)n=Object(s.a)(r);else{var o=new RegExp("".concat(a),"i");n=r.filter((function(e){return o.test(e.family)}))}e.setState((function(e){return he({},e,{filteredFonts:Object(s.a)(n)})}))},e.addObserverTarget=function(n){e.observer.observe(n)},e.handleObservation=function(n){n.forEach((function(n){if(n.isIntersecting){var t=n.target.attributes["data-url"].value;e.observer.unobserve(n.target),e.setState((function(e){var n=e.fontUrls;return he({},e,{fontUrls:[].concat(Object(s.a)(n),[t])})}))}}))},e.handleFontLoaded=function(n){e.setState((function(e){var t=e.loadedFonts;return he({},e,{loadedFonts:[].concat(Object(s.a)(t),[n])})}))},e.handleExampleTextChange=function(n){var t=n.target.value,r=""===t?"Then came the night of the first fallen star.":t;e.setState((function(e){return he({},e,{exampleText:r})}))},e.handleSearchTextChange=function(n){var t=n.target.value;e.setState((function(e){return he({},e,{searchText:t})}),e.filterFonts)},e.handleFontSizeChange=function(n){var t=n.target.value;e.setState((function(e){return he({},e,{fontSize:t})}))},e.handleViewToggle=function(){e.setState((function(e){return he({},e,{isListView:!e.isListView})}))},e.handleOptionsReset=function(){e.setState((function(e){return he({},e,{},Oe)}),e.filterFonts)},e.handleBackToTopClick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},e.state=he({windowAtTop:!0,allFonts:[],filteredFonts:[],fontUrls:[],loadedFonts:[]},Oe),e.observer=new IntersectionObserver(e.handleObservation,{rootMargin:"600px"}),e}return Object(v.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.onscroll=this.handleWindowScroll,e.next=3,O();case 3:(n=e.sent)&&this.setState((function(e){return he({},e,{allFonts:n})}),this.filterFonts);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,n=this.state,t=n.windowAtTop,r=n.filteredFonts,o=n.fontUrls,i=n.loadedFonts,c=n.searchText,l=n.exampleText,u=n.fontSize,s=n.isListView;return a.a.createElement(x.a,{theme:xe},a.a.createElement(ge,null),a.a.createElement(q,{windowAtTop:t,handleBackToTopClick:this.handleBackToTopClick}),a.a.createElement(z,null),a.a.createElement(te,{searchText:c,exampleText:l===Oe.exampleText?"":l,fontSize:u,isListView:s,handleSearchTextChange:this.handleSearchTextChange,handleExampleTextChange:this.handleExampleTextChange,handleFontSizeChange:this.handleFontSizeChange,handleViewToggle:this.handleViewToggle,handleOptionsReset:this.handleOptionsReset}),o.map((function(n){return a.a.createElement(de,{key:"".concat(n,"_url"),url:n,handleFontLoaded:e.handleFontLoaded})})),a.a.createElement(be,{isListView:s},r.map((function(n){var t=o.includes(n.url),r=i.includes(n.url);return a.a.createElement(se,{key:"".concat(n.family,"_card"),family:n.family,url:n.url,fontLoadRequested:t,fontIsLoaded:r,addObserverTarget:e.addObserverTarget,exampleText:l,fontSize:u})}))))}}]),n}(a.a.Component);i.a.render(a.a.createElement(ye,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.6da9f8f0.chunk.js.map