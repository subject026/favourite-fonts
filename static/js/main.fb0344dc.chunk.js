(this["webpackJsonpfavourite-fonts"]=this["webpackJsonpfavourite-fonts"]||[]).push([[0],{22:function(n,e,t){n.exports=t(33)},33:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(15),o=t.n(i),c=t(8),l=t.n(c),u=t(10),d=t(9),s=t(16),f=t(3),h=t(4),p=t(6),m=t(5),v=t(7),g=t(2),x=t(1),b="AIzaSyBGed9M_U5v1ipflTxUgIVhqmawASfTpB8",O=Object(u.a)(l.a.mark((function n(){var e,t,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=".concat(b,"&sort=popularity"));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,r=t.items.map((function(n){var e=n.family,t=e.replace(/ /g,"+"),r=n.variants.includes("regular")?":regular":n.variants.includes("300")?":300":"";return{family:e,url:"https://fonts.googleapis.com/css?family=".concat(t).concat(r)}})),n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));function w(){var n=Object(g.a)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: background-color 0.1s linear, transform 0.3s linear;\n  path {\n    fill: rgba(0, 0, 0, 0.54);\n  }\n  ",";\n  &:hover {\n    cursor: pointer;\n    background-color: #eee;\n  }\n"]);return w=function(){return n},n}function j(){var n=Object(g.a)(["\n          margin-right: 20px;\n          @media (min-width: 730px) {\n            display: none;\n          }\n        "]);return j=function(){return n},n}function y(){var n=Object(g.a)(["\n          @media (max-width: 600px) {\n            display: none;\n          }\n        "]);return y=function(){return n},n}function E(){var n=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  padding: 0;\n  ","\n  path {\n    fill: ",";\n    transition: fill 0.1s linear;\n  }\n  &:hover {\n    cursor: pointer;\n    path {\n      fill: ",";\n    }\n  }\n  ","\n  /* nav toggle */\n  ","\n"]);return E=function(){return n},n}var T=x.d.button(E(),(function(n){return"optionsBar"===n.type?"transform: translateX(10px);":""}),(function(n){return"add"===n.type?"".concat(n.theme.colors.lightRed):"rgba(0, 0, 0, 0.54)"}),(function(n){return"add"===n.type?"".concat(n.theme.colors.red):"rgba(0, 0, 0, 0.74)"}),(function(n){return n.hideOnSmallScreen?Object(x.c)(y()):""}),(function(n){return"navToggle"===n.type?Object(x.c)(j()):""})),S=x.d.button(w(),(function(n){return n.windowAtTop?"transform: translateY(200px)":"transform: translateY(0)"})),z=function(n){var e=n.handleNavToggle;return a.a.createElement(T,{type:"navToggle",onClick:e},a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M3 8V6h18v2H3zm0 5h18v-2H3v2zm0 5h18v-2H3v2z"})))},k=function(n){var e=n.handleOptionsReset;return a.a.createElement(T,{type:"optionsBar",onClick:e},a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})))},C=function(n){var e=n.handleViewToggle,t=n.isListView;return a.a.createElement(T,{type:"optionsBar",hideOnSmallScreen:!0,onClick:e},t&&a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M4 5v13h17V5H4zm10 2v3.5h-3V7h3zM6 7h3v3.5H6V7zm0 9v-3.5h3V16H6zm5 0v-3.5h3V16h-3zm8 0h-3v-3.5h3V16zm-3-5.5V7h3v3.5h-3z"})),!t&&a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M3 5v14h17V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm13 2H9v-2h9v2zm0-4H9v-2h9v2zm0-4H9V7h9v2z"})))},L=function(){return a.a.createElement(T,{type:"add"},a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm11 1h4v-2h-4V7h-2v4H7v2h4v4h2v-4z"})))},V=function(n){var e=n.windowAtTop,t=n.handleBackToTopClick;return a.a.createElement(S,{windowAtTop:e,onClick:t},a.a.createElement("svg",{width:"24",height:"24"},a.a.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"})))};function F(){var n=Object(g.a)(["\n        @media (min-width: ",") {\n          ","\n        }\n      "]);return F=function(){return n},n}var H="0.3s cubic-bezier(0.215, 0.61, 0.355, 1)",I=["600px","730px"].reduce((function(n,e){return n["from".concat(e)]=function(n){return Object(x.c)(F(),e,n)},n}),{});function M(){var n=Object(g.a)(["\n              display: none;\n            "]);return M=function(){return n},n}function G(){var n=Object(g.a)(["\n            padding: 0 15px;\n            border-bottom: 1px solid ",";\n            height: 56px;\n            ","\n          "]);return G=function(){return n},n}function R(){var n=Object(g.a)(["\n      display: flex;\n      align-items: center;\n      font-size: 22px;\n      font-weight: 800;\n      color: ",";\n      span {\n        color: ",";\n      }\n      ","\n    "]);return R=function(){return n},n}function A(){var n=Object(g.a)(["\n  ","\n"]);return A=function(){return n},n}var B=x.d.span(A(),(function(n){var e=n.theme,t=n.navLogo;return Object(x.c)(R(),e.colors.medGrey,e.colors.lightGrey,t?Object(x.c)(G(),e.colors.lightestGrey,I.from730px(Object(x.c)(M()))):"")})),P=function(n){return a.a.createElement(B,n,"Spoogle",a.a.createElement("span",null,"\xa0Fonts"))};function D(){var n=Object(g.a)(["\n  path {\n    fill: rgba(0, 0, 0, 0.6);\n  }\n"]);return D=function(){return n},n}var N=x.d.svg(D()),U=function(){return a.a.createElement(N,{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px"},a.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))},X=function(){return a.a.createElement(N,{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px"},a.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}))},Y=function(){return a.a.createElement(N,{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px"},a.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))},_=function(){return a.a.createElement(N,{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px"},a.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}))};function J(){var n=Object(g.a)(["\n      font-weight: 500;\n      text-transform: uppercase;\n      svg {\n        display: none;\n      }\n    "]);return J=function(){return n},n}function W(){var n=Object(g.a)(["\n            color: ",";\n          "]);return W=function(){return n},n}function q(){var n=Object(g.a)(["\n    display: inline-block;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    font-weight: 500;\n    text-decoration: none;\n    color: ",";\n    ","\n    &:hover {\n      color: ",";\n    }\n    svg {\n      margin-left: 15px;\n      margin-right: 24px;      \n    }\n    ","        \n      }\n  "]);return q=function(){return n},n}function K(){var n=Object(g.a)(["\n  ","\n"]);return K=function(){return n},n}function Q(){var n=Object(g.a)(["\n        position: static;\n        transform: translateX(0);\n        height: auto;\n        width: auto;\n        flex-direction: row;\n        align-items: center;\n        box-shadow: none;\n        li {\n          display: inline-block;\n          margin-left: 30px;\n        }\n      "]);return Q=function(){return n},n}function Z(){var n=Object(g.a)(["\n              transform: translateX(0);\n            "]);return Z=function(){return n},n}function $(){var n=Object(g.a)(["\n      position: fixed;\n      top: 0;\n      left: 0;\n      z-index: 10;\n      height: 100vh;\n      display: flex;\n      width: 300px;\n      flex-direction: column;\n      background-color: white;\n      box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),\n        0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n      transform: translateX(-110%);\n      @media(max-width: 730px) {\n        transition: ",";\n      }\n      ul {\n        list-style-type: none;\n        padding: 0;\n        margin: 4px 0 0 0;\n      }\n      \n      ","\n      ","        \n      }\n    "]);return $=function(){return n},n}function nn(){var n=Object(g.a)(["\n  ","\n"]);return nn=function(){return n},n}function en(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return en=function(){return n},n}function tn(){var n=Object(g.a)(["\n        height: 64px;\n      "]);return tn=function(){return n},n}function rn(){var n=Object(g.a)(["\n      padding: 0 ",";\n      justify-content: space-between;\n      border-bottom: 1px solid ",";\n      display: flex;\n      height: 56px;\n      ","\n    "]);return rn=function(){return n},n}function an(){var n=Object(g.a)(["\n  ","\n"]);return an=function(){return n},n}var on=x.d.header(an(),(function(n){var e=n.theme;return Object(x.c)(rn(),e.layout.padding,e.colors.lightestGrey,I.from730px(Object(x.c)(tn())))})),cn=x.d.div(en()),ln=x.d.nav(nn(),(function(n){n.theme;var e=n.navIsHidden;return Object(x.c)($(),H,e?"":Object(x.c)(Z()),I.from730px(Object(x.c)(Q())))})),un=x.d.a(K(),(function(n){var e=n.theme,t=n.currentPage;return Object(x.c)(q(),e.colors.lightGrey,t?Object(x.c)(W(),e.colors.lightRed):"",e.colors.medGrey,I.from730px(Object(x.c)(J())))})),dn=function(n){function e(){return Object(f.a)(this,e),Object(p.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(v.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=this.props,e=n.navIsHidden,t=n.handleNavToggle;return a.a.createElement(on,null,a.a.createElement(cn,null,a.a.createElement(z,{handleNavToggle:t}),a.a.createElement(P,null)),a.a.createElement(ln,{navIsHidden:e},a.a.createElement(P,{navLogo:!0}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(un,{currentPage:!0,href:"/"},a.a.createElement(U,null),"Catalog")),a.a.createElement("li",null,a.a.createElement(un,{href:"/"},a.a.createElement(X,null),"Featured")),a.a.createElement("li",null,a.a.createElement(un,{href:"/"},a.a.createElement(Y,null),"Articles")),a.a.createElement("li",null,a.a.createElement(un,{href:"/"},a.a.createElement(_,null),"About")))))}}]),e}(a.a.Component);function sn(){var n=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0);\n"]);return sn=function(){return n},n}var fn=x.d.div(sn()),hn=function(){return a.a.createElement(fn,null,a.a.createElement("svg",{width:"24",height:"24",fill:"none"},a.a.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.71 14h.79l4.99 5L19 20.49l-5-4.99v-.79l-.27-.28C12.59 15.41 11.11 16 9.5 16 5.91 16 3 13.09 3 9.5S5.91 3 9.5 3 16 5.91 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27zM5 9.5C5 11.99 7.01 14 9.5 14S14 11.99 14 9.5 11.99 5 9.5 5 5 7.01 5 9.5z",fill:"#000",fillOpacity:".54"})))};function pn(){var n=Object(g.a)(["\n  padding: 0px 20px;\n"]);return pn=function(){return n},n}function mn(){var n=Object(g.a)(["\n  display: grid;\n  grid-template-columns: 30px minmax(0, 1fr);\n"]);return mn=function(){return n},n}var vn=x.d.label(mn()),gn=x.d.input(pn()),xn=function(n){var e=n.searchText,t=n.handleSearchTextChange;return a.a.createElement(vn,{htmlFor:"search"},a.a.createElement(hn,null),a.a.createElement(gn,{id:"search",type:"text",placeholder:"Search fonts",value:e,onChange:t}))};function bn(){var n=Object(g.a)(["\n          @media (max-width: 600px) {\n            display: none;\n          }\n        "]);return bn=function(){return n},n}function On(){var n=Object(g.a)(["\n  padding: 0 20px;\n  ","\n"]);return On=function(){return n},n}var wn=x.d.input(On(),(function(n){return n.hideOnSmallScreen?Object(x.c)(bn()):""})),jn=function(n){var e=n.exampleText,t=n.handleExampleTextChange;return a.a.createElement(wn,{type:"text",placeholder:"Type something",value:e,onChange:t,hideOnSmallScreen:!0})};function yn(){var n=Object(g.a)(["\n          @media (max-width: 600px) {\n            display: none;\n          }\n        "]);return yn=function(){return n},n}function En(){var n=Object(g.a)(["\n  padding: 0 15px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  color: ",";\n  &:hover {\n    cursor: pointer;\n  }\n  &:focus {\n    color: ",";\n  }\n  ","\n"]);return En=function(){return n},n}var Tn=x.d.select(En(),(function(n){return n.theme.colors.lightGrey}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.hideOnSmallScreen?Object(x.c)(yn()):""})),Sn=function(n){var e=n.fontSize,t=n.handleFontSizeChange;return a.a.createElement(Tn,{name:"font-size",id:"font-size",value:e,onChange:t,hideOnSmallScreen:!0},a.a.createElement("option",{value:"20px"},"20px"),a.a.createElement("option",{value:"24px"},"24px"),a.a.createElement("option",{value:"32px"},"32px"),a.a.createElement("option",{value:"40px"},"40px"),a.a.createElement("option",{value:"60px"},"60px"),a.a.createElement("option",{value:"80px"},"80px"))};function zn(){var n=Object(g.a)(["\n    height: 50px;\n    border-radius: 50px;\n    padding: 0px ",";\n    display: grid;\n    grid-gap: 1px;\n    grid-template-columns: minmax(0, 1fr) 50px;\n    @media (min-width: 600px) {\n      grid-template-columns: minmax(0, 5fr) minmax(0, 5fr) 100px 50px 50px;\n    }\n    border: 1px solid ",";\n    input {\n      border: none;\n    }\n  "]);return zn=function(){return n},n}function kn(){var n=Object(g.a)(["\n  ","\n"]);return kn=function(){return n},n}function Cn(){var n=Object(g.a)(["\n      padding-left: 30px;\n      padding-right: 30px;\n    "]);return Cn=function(){return n},n}function Ln(){var n=Object(g.a)(["\n    padding: 20px ",";\n    ","\n  "]);return Ln=function(){return n},n}function Vn(){var n=Object(g.a)(["\n  ","\n"]);return Vn=function(){return n},n}var Fn=x.d.section(Vn(),(function(n){var e=n.theme;return Object(x.c)(Ln(),e.layout.padding,I.from600px(Object(x.c)(Cn())))})),Hn=x.d.section(kn(),(function(n){var e=n.theme;return Object(x.c)(zn(),e.layout.padding,e.colors.lightestGrey)})),In=function(n){var e=n.searchText,t=n.exampleText,r=n.fontSize,i=n.isListView,o=n.handleSearchTextChange,c=n.handleExampleTextChange,l=n.handleFontSizeChange,u=n.handleViewToggle,d=n.handleOptionsReset;return a.a.createElement(Fn,null,a.a.createElement(Hn,null,a.a.createElement(xn,{searchText:e,handleSearchTextChange:o}),a.a.createElement(jn,{exampleText:t,handleExampleTextChange:c}),a.a.createElement(Sn,{fontSize:r,handleFontSizeChange:l}),a.a.createElement(C,{isListView:i,handleViewToggle:u}),a.a.createElement(k,{handleOptionsReset:d})))},Mn=t(19);function Gn(){var n=Object(g.a)(["\n  display: inline-block;\n  width: 100%;\n  overflow-wrap: break-word;\n  line-height: 1.2;\n"]);return Gn=function(){return n},n}function Rn(){var n=Object(g.a)(["\n  font-size: 1rem;\n  padding: 10px 0 20px 0;\n  display: flex;\n  justify-content: space-between;\n"]);return Rn=function(){return n},n}function An(){var n=Object(g.a)(["\n  width: 100%;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return An=function(){return n},n}function Bn(){var n=Object(g.a)(["\n      min-height: 250px;\n      border-top: 1px solid ",";\n    "]);return Bn=function(){return n},n}function Pn(){var n=Object(g.a)(["\n  ","\n"]);return Pn=function(){return n},n}var Dn=x.d.div(Pn(),(function(n){n.theme;return Object(x.c)(Bn(),(function(n){return n.theme.colors.lighterGrey}))})),Nn=x.d.div(An()),Un=x.d.div(Rn()),Xn=x.d.span(Gn()),Yn=function(n){function e(n){var t;return Object(f.a)(this,e),(t=Object(p.a)(this,Object(m.a)(e).call(this,n))).componentDidMount=function(){t.props.fontIsLoading||t.props.addObserverTarget(t.ref.current)},t.componentDidUpdate=function(){t.initialExampleText=t.props.exampleText},t.handleIndividualSampleBlur=function(n){""===n.target.innerHTML&&(n.target.innerHTML=t.initialExampleText)},t.ref=a.a.createRef(),t.initialExampleText=n.exampleText,t}return Object(v.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=this.props,e=n.family,t=n.url,r=n.fontIsLoading,i=n.fontIsLoaded,o=n.exampleText,c=n.fontSize;return a.a.createElement(Dn,{ref:this.ref,"data-url":t},a.a.createElement(Un,null,e,a.a.createElement(L,null)),r&&a.a.createElement(Nn,null,a.a.createElement(Mn.a,{color:"lightgrey"})),i&&a.a.createElement(Xn,{contentEditable:!0,onBlur:this.handleIndividualSampleBlur,style:{fontFamily:e,fontSize:c}},o))}}]),e}(a.a.Component),_n=function(n){function e(n){var t;return Object(f.a)(this,e),(t=Object(p.a)(this,Object(m.a)(e).call(this,n))).componentDidMount=function(){t.ref.current.addEventListener("load",(function(n){var e=n.target;t.props.handleFontLoaded(e.attributes.href.value)}))},t.ref=a.a.createRef(),t}return Object(v.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=this.props.url;return a.a.createElement("link",{rel:"stylesheet",href:n,key:n,ref:this.ref})}}]),e}(a.a.Component);function Jn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function Wn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Jn(t,!0).forEach((function(e){Object(s.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Jn(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function qn(){var n=Object(g.a)(["\n          @media (min-width: 600px) {\n            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n          }\n          @media (min-width: 1100px) {\n            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);\n          }\n        "]);return qn=function(){return n},n}function Kn(){var n=Object(g.a)(["\n    padding-left: 30px;\n    padding-right: 30px;\n  "]);return Kn=function(){return n},n}function Qn(){var n=Object(g.a)(["\n  display: grid;\n  grid-gap: 30px;\n  padding: 30px ",";\n  grid-template-columns: minmax(0, 1fr);\n  ","\n  ","\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(g.a)(["\n          opacity: 0;\n          visibility: hidden;\n        "]);return Zn=function(){return n},n}function $n(){var n=Object(g.a)(["\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    background-color: rgb(33, 33, 33);\n    opacity: 0.48;\n    transition: opacity ",", visibility ",";\n    ","\n    @media (min-width: 730px) {\n      display: none;\n    }\n  "]);return $n=function(){return n},n}function ne(){var n=Object(g.a)(["\n  ","\n"]);return ne=function(){return n},n}function ee(){var n=Object(g.a)(["\n  body, html {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n  }\n"]);return ee=function(){return n},n}var te=Object(x.b)(ee()),re={layout:{padding:"15px"},colors:{lightestGrey:"rgba(0,0,0, 0.14)",lighterGrey:"rgba(0,0,0, 0.3)",lightGrey:"rgba(0,0,0, 0.6)",medGrey:"#3c4043",darkGrey:"rgba(0,0,0, 0.87)",lightRed:"rgba(255, 82, 82, 0.8)",red:"rgba(255, 82, 82, 1)"}},ae=x.d.div(ne(),(function(n){var e=n.navIsHidden;return Object(x.c)($n(),H,H,e?Object(x.c)(Zn()):"")})),ie=x.d.section(Qn(),(function(n){return n.theme.layout.padding}),I.from600px(Object(x.c)(Kn())),(function(n){return n.isListView?"":Object(x.c)(qn())})),oe={exampleText:"Then came the night of the first fallen star.",searchText:"",fontSize:"40px",isListView:!1},ce=function(n){function e(){var n;return Object(f.a)(this,e),(n=Object(p.a)(this,Object(m.a)(e).call(this))).handleNavToggle=function(){n.setState((function(n){return{navIsHidden:!n.navIsHidden}}))},n.handleWindowScroll=function(){var e=n.state.windowAtTop;e&&window.scrollY>100&&n.setState((function(n){return Wn({},n,{windowAtTop:!1})})),!e&&window.scrollY<50&&n.setState((function(n){return Wn({},n,{windowAtTop:!0})}))},n.filterFonts=function(){var e,t=n.state,r=t.allFonts,a=t.searchText;if(a.length<1)e=Object(d.a)(r);else{var i=new RegExp("".concat(a),"i");e=r.filter((function(n){return i.test(n.family)}))}n.setState((function(n){return Wn({},n,{filteredFonts:Object(d.a)(e)})}))},n.addObserverTarget=function(e){n.observer.observe(e)},n.handleObservation=function(e){e.forEach((function(e){if(e.isIntersecting){var t=e.target.attributes["data-url"].value;n.observer.unobserve(e.target),n.setState((function(n){var e=n.fontUrls;return Wn({},n,{fontUrls:[].concat(Object(d.a)(e),[t])})}))}}))},n.handleFontLoaded=function(e){n.setState((function(n){var t=n.loadedFonts;return Wn({},n,{loadedFonts:[].concat(Object(d.a)(t),[e])})}))},n.handleExampleTextChange=function(e){var t=e.target.value,r=""===t?"Then came the night of the first fallen star.":t;n.setState((function(n){return Wn({},n,{exampleText:r})}))},n.handleSearchTextChange=function(e){var t=e.target.value;n.setState((function(n){return Wn({},n,{searchText:t})}),n.filterFonts)},n.handleFontSizeChange=function(e){var t=e.target.value;n.setState((function(n){return Wn({},n,{fontSize:t})}))},n.handleViewToggle=function(){n.setState((function(n){return Wn({},n,{isListView:!n.isListView})}))},n.handleOptionsReset=function(){n.setState((function(n){return Wn({},n,{},oe)}),n.filterFonts)},n.handleBackToTopClick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},n.state=Wn({navIsHidden:!0,windowAtTop:!0,allFonts:[],filteredFonts:[],fontUrls:[],loadedFonts:[]},oe),n.observer=new IntersectionObserver(n.handleObservation,{rootMargin:"600px"}),n}return Object(v.a)(e,n),Object(h.a)(e,[{key:"componentDidMount",value:function(){var n=Object(u.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return window.onscroll=this.handleWindowScroll,n.next=3,O();case 3:(e=n.sent)&&this.setState((function(n){return Wn({},n,{allFonts:e})}),this.filterFonts);case 5:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this,e=this.state,t=e.navIsHidden,r=e.windowAtTop,i=e.filteredFonts,o=e.fontUrls,c=e.loadedFonts,l=e.searchText,u=e.exampleText,d=e.fontSize,s=e.isListView;return a.a.createElement(x.a,{theme:re},a.a.createElement(te,null),a.a.createElement(V,{windowAtTop:r,handleBackToTopClick:this.handleBackToTopClick}),a.a.createElement(ae,{onClick:this.handleNavToggle,navIsHidden:t}),a.a.createElement(dn,{navIsHidden:t,handleNavToggle:this.handleNavToggle}),a.a.createElement(In,{searchText:l,exampleText:u===oe.exampleText?"":u,fontSize:d,isListView:s,handleSearchTextChange:this.handleSearchTextChange,handleExampleTextChange:this.handleExampleTextChange,handleFontSizeChange:this.handleFontSizeChange,handleViewToggle:this.handleViewToggle,handleOptionsReset:this.handleOptionsReset}),o.map((function(e){return a.a.createElement(_n,{key:"".concat(e,"_url"),url:e,handleFontLoaded:n.handleFontLoaded})})),a.a.createElement(ie,{isListView:s},i.map((function(e){var t=c.includes(e.url),r=!t&&o.includes(e.url);return a.a.createElement(Yn,{key:"".concat(e.family,"_card"),family:e.family,url:e.url,fontIsLoading:r,fontIsLoaded:t,addObserverTarget:n.addObserverTarget,exampleText:u,fontSize:d})}))))}}]),e}(a.a.Component);o.a.render(a.a.createElement(ce,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fb0344dc.chunk.js.map