(this["webpackJsonpnews-website"]=this["webpackJsonpnews-website"]||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=(n(96),n(12)),l=n(58),s=n(175),u=n(191),j=n(174),g=n(172),b=n(171),d=n(187),O=n(189),h=n(4),m=[{region:"United Arab Emirates",value:"ae"},{region:"Argentina",value:"ar"},{region:"Austria",value:"at"},{region:"Australia",value:"au"},{region:"Belgium",value:"be"},{region:"Bulgaria",value:"bg"},{region:"Brazil",value:"br"},{region:"Canada",value:"ca"},{region:"Switzerland",value:"ch"},{region:"China",value:"cn"},{region:"Colombia",value:"co"},{region:"Cuba",value:"cu"},{region:"Czechia",value:"cz"},{region:"Germany",value:"de"},{region:"Egypt",value:"eg"},{region:"France",value:"fr"},{region:"United Kingdom",value:"gb"},{region:"Greece",value:"gr"},{region:"Hong Kong",value:"hk"},{region:"Hungary",value:"hu"},{region:"Indonesia",value:"id"},{region:"Ireland",value:"ie"},{region:"Israel",value:"il"},{region:"India",value:"in"},{region:"Italy",value:"it"},{region:"Japan",value:"jp"},{region:"South Korea",value:"kr"},{region:"Lithuania",value:"lt"},{region:"Latvia",value:"lv"},{region:"Morocco",value:"ma"},{region:"Mexico",value:"mx"},{region:"Malaysia",value:"my"},{region:"Nigeria",value:"ng"},{region:"Netherlands",value:"nl"},{region:"Norway",value:"no"},{region:"New Zealand",value:"nz"},{region:"Philippines",value:"ph"},{region:"Poland",value:"pl"},{region:"Portugal",value:"pt"},{region:"Romania",value:"ro"},{region:"Serbia",value:"rs"},{region:"Russia",value:"ru"},{region:"Sweden",value:"se"},{region:"Singapore",value:"sg"},{region:"Slovenia",value:"si"},{region:"Slovakia",value:"sk"},{region:"Thailand",value:"th"},{region:"Turkey",value:"tr"},{region:"Taiwan",value:"tw"},{region:"Ukraine",value:"ua"},{region:"United States",value:"us"},{region:"Venezuela",value:"ve"},{region:"South Africa",value:"za"}];function v(e){var t=Object(a.useState)(e.open),n=Object(c.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(null),v=Object(c.a)(i,2),p=v[0],x=v[1],f=Object(a.useState)(null),C=Object(c.a)(f,2),y=C[0],S=C[1],k=function(){o(!1),e.onClose()};return Object(h.jsxs)(u.a,{open:r,onClose:k,children:[Object(h.jsx)(b.a,{id:"location-change",children:"Change Region"}),Object(h.jsx)(g.a,{children:Object(h.jsx)(O.a,{onChange:function(e,t){return function(e,t){x(t.region),S(t.value)}(0,t)},id:"region-selector",options:m,getOptionLabel:function(e){return e.region},style:{width:300},renderInput:function(e){return Object(h.jsx)(d.a,Object(l.a)(Object(l.a)({},e),{},{label:"Region",variant:"outlined",autoFocus:!0}))}})}),Object(h.jsxs)(j.a,{children:[Object(h.jsx)(s.a,{onClick:k,color:"secondary",children:"Cancel"}),Object(h.jsx)(s.a,{onClick:function(){null===p?(localStorage.setItem("region","us"),localStorage.setItem("regionName","United States")):(localStorage.setItem("region",y),localStorage.setItem("regionName",p)),window.location="/"},color:"primary",children:"Confirm"})]})]})}var p=n(173),x=n(177),f=n(178),C=n(123),y=n(176),S=Object(y.a)((function(e){return{root:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},title:{flexGrow:1},location:{color:e.palette.primary.contrastText}}}));function k(e){var t=S(),n=Object(a.useState)(!1),r=Object(c.a)(n,2),o=r[0],i=r[1],l=function(){i(!0)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x.a,{position:"static",className:t.root,children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(p.a,{children:Object(h.jsx)("img",{src:"/Images/news.png",alt:"Webiste Icon"})}),Object(h.jsx)(C.a,{variant:"h5",className:t.title,children:"News"}),localStorage.getItem("region")?Object(h.jsx)(s.a,{className:t.location,onClick:function(){return l()},children:localStorage.getItem("regionName")}):Object(h.jsx)(s.a,{className:t.location,onClick:function(){return l()},children:"Change Location"}),o?Object(h.jsx)(v,{open:!0,onClose:function(){i(!1)}}):null]})})})}n(101);var w=n(79),N=n(188),I=n(185),T=n(29),F=n(169),L=Object(y.a)((function(e){var t;return{root:(t={position:"absolute"},Object(T.a)(t,e.breakpoints.down("xs"),{marginTop:e.spacing(42)}),Object(T.a)(t,"marginTop",e.spacing(48)),Object(T.a)(t,"marginLeft",e.spacing(1)),t),content:{width:e.spacing(20),height:e.spacing(5),borderRadius:10,backgroundColor:e.palette.success.light,color:e.palette.success.contrastText},info:{marginLeft:e.spacing(1)}}}));function z(e){var t=L(),n=Object(a.useState)(!0),r=Object(c.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){setTimeout((function(){i(!1)}),2e3),setTimeout((function(){e.onClose()}),3e3)})),Object(h.jsx)(F.a,{in:o,timeout:1500,children:Object(h.jsx)(N.a,{className:t.root,children:Object(h.jsx)(N.a,{display:"flex",alignItems:"center",className:t.content,children:Object(h.jsx)(C.a,{variant:"caption",className:t.info,children:"Link Copied to Clipboard!"})})})})}var R=n(179),B=n(180),E=n(183),U=n(182),A=n(181),M=Object(y.a)((function(e){var t;return{root:{position:"relative"},content:(t={},Object(T.a)(t,e.breakpoints.down("xs"),{height:340}),Object(T.a)(t,"height",400),t)}}));function P(e){var t=M(),n=Object(a.useState)(!1),r=Object(c.a)(n,2),o=r[0],i=r[1],l=Object(a.useState)(e.img),u=Object(c.a)(l,2),j=u[0],g=u[1],b=e.title,d=e.content,O=e.url,m=function(){window.open(O,"_blank")},v=function(){g("/Images/no_image.jpeg")};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(R.a,{className:t.root,raised:!0,children:[Object(h.jsxs)(B.a,{onClick:function(){return m()},children:[Object(h.jsx)(A.a,{component:"img",onError:v,alt:"News Image",height:"150",image:j||v(),title:b}),o?Object(h.jsx)(z,{onClose:function(){i(!1)}}):null,Object(h.jsxs)(U.a,{className:t.content,children:[Object(h.jsx)(C.a,{gutterBottom:!0,variant:"h6",component:"h2",children:b}),Object(h.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:d})]})]}),Object(h.jsxs)(E.a,{children:[Object(h.jsx)(s.a,{size:"small",color:"primary",onClick:function(){return navigator.clipboard.writeText(O),void i(!0)},children:"Share"}),Object(h.jsx)(s.a,{size:"small",color:"primary",onClick:function(){return m()},children:"Learn More"})]})]})})}var H=n(184),G=Object(y.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}}));function J(e){var t=G(),n=Object(a.useState)(!1),r=Object(c.a)(n,2),o=r[0],i=r[1],l=Object(a.useState)(!1),u=Object(c.a)(l,2),j=u[0],g=u[1],b=e.regionName,d="Top ".concat(e.name.toUpperCase()," news in ").concat(b),O=e.data,m=function(){if(j)return i(!1),g(!1);i(!0),g(!0)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(I.a,{in:j,collapsedHeight:725,children:Object(h.jsxs)(H.a,{className:t.root,container:!0,spacing:4,children:[Object(h.jsx)(H.a,{item:!0,xs:12,sm:8,md:10,children:Object(h.jsx)(C.a,{variant:"h6",children:d})}),Object(h.jsx)(H.a,{item:!0,xs:12,sm:4,md:2,children:Object(h.jsx)(N.a,{display:"flex",justifyContent:"flex-end",children:o?Object(h.jsx)(s.a,{color:"secondary",onClick:function(){return m()},children:"Collapse"}):Object(h.jsx)(s.a,{color:"primary",onClick:function(){return m()},children:"View All"})})}),function(){for(var e=[],t=0;t<O.articles.length;t++){var n=O.articles[t].content,a=null;a="object"!==typeof n?n.replace(n.substring(n.indexOf("[")),"Read More"):n,e.push(Object(h.jsx)(H.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(h.jsx)(P,{img:O.articles[t].urlToImage,title:O.articles[t].title,content:a,url:O.articles[t].url})},t))}return e}()]})})})}var K=Object(y.a)((function(e){return{section:{marginBottom:e.spacing(10)}}}));function W(e){var t=K(),n=Object(a.useState)(!0),r=Object(c.a)(n,2),o=r[0],i=r[1],l=e.categories,s=e.showCategories,u=localStorage.getItem("regionName")||"United States",j=localStorage.getItem("region")||"us",g=e.data;Object(a.useEffect)((function(){return i(!0),function(){setTimeout((function(){i(!1)}),5e3)}}),[]);return Object(h.jsx)(h.Fragment,{children:function(){var e=[];return l.forEach((function(n){s.includes(n)&&e.push(Object(h.jsx)(N.a,{className:t.section,children:Object(h.jsx)(J,{region:j,regionName:u,show:o,name:n,endPoint:"top-headlines",category:n,data:g[n]})},n))})),e}()})}var V=Object(y.a)((function(e){return{root:{borderRadius:20}}}));function _(e){var t=V(),n=Object(a.useState)(!1),r=Object(c.a)(n,2),o=r[0],i=r[1],l=e.category;return Object(h.jsx)(s.a,{className:t.root,variant:"contained",color:o?"secondary":"primary",onClick:function(){return i(!o),void e.onClick(l)},children:Object(h.jsx)(C.a,{variant:"subtitle2",children:l})})}var D=Object(y.a)((function(e){return{root:{marginTop:e.spacing(5),marginBottom:e.spacing(5)}}}));function Z(e){var t=D(),n=e.categories,a=function(t){e.onClick(t)},r=n.map((function(e){return Object(h.jsx)(H.a,{item:!0,children:Object(h.jsx)(_,{category:e,onClick:a})},e)}));return Object(h.jsx)(H.a,{container:!0,spacing:1,justify:"center",className:t.root,children:r})}var q=n(186),Q=n(77),X=n.n(Q),Y=Object(y.a)((function(e){return{root:{backgroundColor:e.palette.background.default},section:{borderWidth:1,borderColor:e.palette.primary.light,borderRadius:e.shape.borderRadius,padding:e.spacing(2)}}}));function $(e){var t=["general","science","business","entertainment","health","sports","technology"],n=Object(a.useState)(null),r=Object(c.a)(n,2),o=r[0],i=r[1],l=Object(a.useState)(!0),s=Object(c.a)(l,2),u=s[0],j=s[1],g=Object(a.useState)(["general","science","business","entertainment","health","sports","technology"]),b=Object(c.a)(g,2),d=b[0],O=b[1],m=Object(a.useState)(!1),v=Object(c.a)(m,2),p=v[0],x=v[1],f=Y();Object(a.useEffect)((function(){var e={region:localStorage.getItem("region")||"us"};X.a.get("/api/homeNews/".concat(e.region)).then((function(e){console.log(e.data),i(e.data.data),x(!0)})).catch((function(e){console.log(e)}))}),[]);return Object(h.jsx)(N.a,{children:p?Object(h.jsxs)(H.a,{className:f.root,container:!0,justify:"center",xs:12,children:[Object(h.jsx)(H.a,{item:!0,xs:12,children:Object(h.jsx)(Z,{categories:t,onClick:function(e){u?(O([e]),j(!1)):d.includes(e)?1===d.length?(O(["general","science","business","entertainment","health","sports","technology"]),j(!0)):O(d.filter((function(t){return t!==e}))):O([].concat(Object(w.a)(d),[e]))}})}),Object(h.jsx)(H.a,{item:!0,xs:12,lg:10,className:f.section,children:Object(h.jsx)(W,{categories:t,data:o,showCategories:d})})]}):Object(h.jsx)(N.a,{display:"flex",justifyContent:"center",marginTop:"150px",children:Object(h.jsx)(q.a,{})})})}function ee(e){return Object(h.jsx)("h1",{children:"Hello World"})}var te=n(78),ne=n(14);var ae=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{}),Object(h.jsx)(te.a,{children:Object(h.jsxs)(ne.c,{children:[Object(h.jsx)(ne.a,{path:"/category",children:Object(h.jsx)(ee,{})}),Object(h.jsx)(ne.a,{path:"/",children:Object(h.jsx)($,{})})]})})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(ae,{})}),document.getElementById("root")),re()},96:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.63dee182.chunk.js.map