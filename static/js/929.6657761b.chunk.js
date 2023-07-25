"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[929],{4829:function(e,r,a){var t=a(5671),n=a(3144),s=a(136),i=a(7277),c=a(2791),l=a(7202),o=a(184),u=function(e){(0,s.Z)(a,e);var r=(0,i.Z)(a);function a(){var e;(0,t.Z)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=r.call.apply(r,[this].concat(s))).state={error:!1},e}return(0,n.Z)(a,[{key:"componentDidCatch",value:function(e,r){console.log(e,r),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,o.jsx)(l.Z,{}):this.props.children}}]),a}(c.Component);r.Z=u},7202:function(e,r,a){a.d(r,{Z:function(){return s}});var t=a.p+"static/media/error.42292aa12b6bc303ce99.gif",n=a(184),s=function(){return(0,n.jsx)("img",{className:"error-message",src:t,alt:"Error"})}},4588:function(e,r,a){a.r(r),a.d(r,{default:function(){return N}});var t=a(9439),n=a(2791),s=a(4197),i=a(7202),c=a(4203),l=a.p+"static/media/mjolnir.61f31e1809f12183a524.png",o=a(184),u=function(e){var r=e.char,a=r.name,t=r.description,n=r.thumbnail,s=r.homepage,i=r.wiki;return(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img"}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:a}),(0,o.jsx)("p",{className:"randomchar__descr",children:t}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:s,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:i,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,n.useState)({}),r=(0,t.Z)(e,2),a=r[0],d=r[1],m=(0,c.Z)(),h=m.loading,f=m.error,p=m.getCharacter,x=m.clearError;(0,n.useEffect)((function(){j()}),[]);var j=function e(){x();var r=Math.floor(400*Math.random()+1011e3);p(r).then((function(r){return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r.thumbnail?e():function(e){d(e)}(r)}))},v=f?(0,o.jsx)(i.Z,{}):null,b=h?(0,o.jsx)(s.Z,{}):null,g=h||f?null:(0,o.jsx)(u,{char:a});return(0,o.jsxs)("div",{className:"randomchar",children:[v,b,g,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{onClick:j,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=a(3433),h=function(e){var r=(0,n.useState)([]),a=(0,t.Z)(r,2),l=a[0],u=a[1],d=(0,n.useState)(!1),h=(0,t.Z)(d,2),f=h[0],p=h[1],x=(0,n.useState)(109),j=(0,t.Z)(x,2),v=j[0],b=j[1],g=(0,n.useState)(!1),_=(0,t.Z)(g,2),y=_[0],N=_[1],k=(0,n.useState)(!0),Z=(0,t.Z)(k,2),C=Z[0],w=Z[1],T=(0,c.Z)(),S=T.loading,E=T.error,O=T.getAllCharacters;(0,n.useEffect)((function(){return F(v,!0)}),[]);var F=function(e,r){w(!r),O(e).then(R)},R=function(e){var r=e.length<9;u((function(r){return[].concat((0,m.Z)(r),(0,m.Z)(e))})),p(!1),b((function(e){return e+9})),N(r)},A=(0,n.useRef)([]),B=function(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected"),A.current[e].focus()};var I=function(r){var a=r.map((function(r,a){var t="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r.thumbnail?{objectFit:"unset"}:{objectFit:"cover"};return(0,o.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return A.current[a]=e},onClick:function(){e.onCharSelected(r.id),B(a)},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(r.id),B(a))},children:[(0,o.jsx)("img",{src:r.thumbnail,alt:r.name,style:t}),(0,o.jsx)("div",{className:"char__name",children:r.name})]},r.id)}));return(0,o.jsx)("ul",{className:"char__grid",children:a})}(l),M=E?(0,o.jsx)(i.Z,{}):null,P=S&&!C?(0,o.jsx)(s.Z,{}):null,W=f?(0,o.jsx)(s.Z,{}):(0,o.jsx)("button",{className:"button button__main button__long",disabled:f,style:{display:y?"none":"block"},onClick:function(){p(!0),F(v)},children:(0,o.jsx)("div",{className:"inner",children:"load more"})});return(0,o.jsxs)("div",{className:"char__list",children:[M,P,I,W]})},f=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]})},p=function(e){var r=e.char,a=r.name,t=r.description,n=r.thumbnail,s=r.homepage,i=r.wiki,c=r.comics,l="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?{objectFit:"unset"}:{objectFit:"cover"};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:n,alt:a,style:l}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:a}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:s,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:i,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:t}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsxs)("ul",{className:"char__comics-list",children:[c.length>0?null:"There is no comics with this character",c.map((function(e,r){return(0,o.jsx)("li",{className:"char__comics-item",children:e.name},r)}))]})]})},x=function(e){var r=(0,n.useState)(null),a=(0,t.Z)(r,2),l=a[0],u=a[1],d=(0,c.Z)(),m=d.loading,h=d.error,x=d.getCharacter,j=d.clearError;(0,n.useEffect)((function(){v()}),[e.charId]);var v=function(){j();var r=e.charId;r&&x(r).then(b)},b=function(e){u(e)},g=l||m||h?null:(0,o.jsx)(f,{}),_=h?(0,o.jsx)(i.Z,{}):null,y=m?(0,o.jsx)(s.Z,{}):null,N=m||h||!l?null:(0,o.jsx)(p,{char:l});return(0,o.jsxs)("div",{className:"char__info",children:[g,_,y,N]})},j=a(4829),v=a(5705),b=a(7670),g=a(1087),_=function(){var e=(0,n.useState)(null),r=(0,t.Z)(e,2),a=r[0],l=r[1],u=(0,n.useState)(""),d=(0,t.Z)(u,2),m=d[0],h=d[1],f=(0,c.Z)(),p=f.loading,x=f.error,j=f.getCharacterByName,_=f.clearError,y=function(e){l(e)},N=(0,n.useCallback)((function(e){e!==m&&(_(),h(e),console.log("dwd"),j(e).then(y))}),[m]),k=a&&a[0]?"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a[0].thumbnail?{objectFit:"unset"}:{objectFit:"cover"}:null,Z=x?(0,o.jsx)("div",{className:"char__search-critical-error",children:(0,o.jsx)(i.Z,{})}):null,C=!a||p?null:a.length>0?(0,o.jsxs)("div",{className:"char__search-answer",children:[(0,o.jsx)("img",{src:a[0].thumbnail,alt:a[0].name,style:k}),(0,o.jsxs)("div",{className:"char__search-container",children:[(0,o.jsxs)("div",{className:"char__search-success",children:["There is! ",a&&a[0]&&a[0].description.includes("There is no")?"but we haven't added a description yet.":null," Visit ",a[0].name," page?"]}),(0,o.jsx)(g.rU,{to:"/characters/".concat(a[0].id),className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"To page"})})]})]}):(0,o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}),w=p?(0,o.jsx)(s.Z,{}):null;return(0,o.jsxs)("div",{className:"char__search-form",children:[(0,o.jsx)(v.J9,{initialValues:{charName:""},validationSchema:b.Ry({charName:b.Z_().min(3,"Please enter at least 3 letters ")}),onSubmit:function(e){var r=e.charName;N(r)},children:(0,o.jsxs)(v.l0,{children:[(0,o.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsx)(v.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,o.jsx)("button",{type:"submit",className:"button button__main",disabled:p,children:(0,o.jsx)("div",{className:"inner",children:"find"})})]}),(0,o.jsx)(v.Bc,{component:"p",className:"char__search-error",name:"charName"})]})}),C,Z,w]})},y=a.p+"static/media/vision.067d4ae1936d64a577ce.png",N=function(){var e=(0,n.useState)(null),r=(0,t.Z)(e,2),a=r[0],s=r[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.Z,{children:(0,o.jsx)(d,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(j.Z,{children:(0,o.jsx)(h,{onCharSelected:function(e){s(e)}})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(j.Z,{children:(0,o.jsx)(x,{charId:a})}),(0,o.jsx)(j.Z,{children:(0,o.jsx)(_,{})})]})]}),(0,o.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})}},4197:function(e,r,a){var t=a(184);r.Z=function(){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto",background:"rgb(255, 255, 255,0)",display:"block",shapeRendering:"auto:"},width:"164px",height:"164px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[(0,t.jsx)("g",{transform:"translate(71,50)",children:(0,t.jsx)("g",{transform:"rotate(0)",children:(0,t.jsxs)("circle",{cx:"0",cy:"0",r:"3",fill:"#ff727d",fillOpacity:"1",children:[(0,t.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.9943181818181818s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite"}),(0,t.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite",values:"1;0",begin:"-0.9943181818181818s"})]})})}),(0,t.jsx)("g",{transform:"translate(64.8492424049175,64.8492424049175)",children:(0,t.jsx)("g",{transform:"rotate(45)",children:(0,t.jsxs)("circle",{cx:"0",cy:"0",r:"3",fill:"#ff727d",fillOpacity:"0.875",children:[(0,t.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.8522727272727273s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite"}),(0,t.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite",values:"1;0",begin:"-0.8522727272727273s"})]})})}),(0,t.jsx)("g",{transform:"translate(50,71)",children:(0,t.jsx)("g",{transform:"rotate(90)",children:(0,t.jsxs)("circle",{cx:"0",cy:"0",r:"3",fill:"#ff727d",fillOpacity:"0.75",children:[(0,t.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.7102272727272727s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite"}),(0,t.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite",values:"1;0",begin:"-0.7102272727272727s"})]})})}),(0,t.jsx)("g",{transform:"translate(35.1507575950825,64.8492424049175)",children:(0,t.jsx)("g",{transform:"rotate(135)",children:(0,t.jsxs)("circle",{cx:"0",cy:"0",r:"3",fill:"#ff727d",fillOpacity:"0.625",children:[(0,t.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5681818181818182s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite"}),(0,t.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite",values:"1;0",begin:"-0.5681818181818182s"})]})})}),(0,t.jsx)("g",{transform:"translate(29,50)",children:(0,t.jsx)("g",{transform:"rotate(180)",children:(0,t.jsxs)("circle",{cx:"0",cy:"0",r:"3",fill:"#ff727d",fillOpacity:"0.5",children:[(0,t.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.42613636363636365s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite"}),(0,t.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite",values:"1;0",begin:"-0.42613636363636365s"})]})})}),(0,t.jsx)("g",{transform:"translate(35.150757595082496,35.1507575950825)",children:(0,t.jsx)("g",{transform:"rotate(225)",children:(0,t.jsxs)("circle",{cx:"0",cy:"0",r:"3",fill:"#ff727d",fillOpacity:"0.375",children:[(0,t.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.2840909090909091s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite"}),(0,t.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite",values:"1;0",begin:"-0.2840909090909091s"})]})})}),(0,t.jsx)("g",{transform:"translate(49.99999999999999,29)",children:(0,t.jsx)("g",{transform:"rotate(270)",children:(0,t.jsxs)("circle",{cx:"0",cy:"0",r:"3",fill:"#ff727d",fillOpacity:"0.25",children:[(0,t.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.14204545454545456s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite"}),(0,t.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite",values:"1;0",begin:"-0.14204545454545456s"})]})})}),(0,t.jsx)("g",{transform:"translate(64.84924240491749,35.150757595082496)",children:(0,t.jsx)("g",{transform:"rotate(315)",children:(0,t.jsxs)("circle",{cx:"0",cy:"0",r:"3",fill:"#ff727d",fillOpacity:"0.125",children:[(0,t.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite"}),(0,t.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1.1363636363636365s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})}},4203:function(e,r,a){a.d(r,{Z:function(){return c}});var t=a(4165),n=a(5861),s=a(9439),i=a(2791),c=function(){var e=function(){var e=(0,i.useState)(!1),r=(0,s.Z)(e,2),a=r[0],c=r[1],l=(0,i.useState)(null),o=(0,s.Z)(l,2),u=o[0],d=o[1],m=(0,i.useCallback)(function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var a,n,s,i,l,o=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,s=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},c(!0),e.prev=4,e.next=7,fetch(r,{method:a,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return l=e.sent,c(!1),e.abrupt("return",l);case 17:throw e.prev=17,e.t0=e.catch(4),c(!1),d(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{loading:a,request:m,error:u,clearError:(0,i.useCallback)((function(){return d(null)}),[])}}(),r=e.loading,a=e.request,c=e.error,l=e.clearError,o="https://gateway.marvel.com:443/v1/public/",u="apikey=1806f6861cfe6371b3d43b87e07228f2",d=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var r,n,s=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>0&&void 0!==s[0]?s[0]:109,e.next=3,a("".concat(o,"characters?limit=9&offset=").concat(r,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(o,"characters/").concat(r,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",f(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(o,"characters?nameStartsWith=").concat(r,"&").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.slice(0,10)}},p=function(e){var r;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(r=e.textObjects[0])||void 0===r?void 0:r.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}},x=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var r,n,s=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>0&&void 0!==s[0]?s[0]:0,e.next=3,a("".concat(o,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(o,"comics/").concat(r,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",p(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{loading:r,error:c,clearError:l,getAllCharacters:d,getCharacter:m,getAllComics:x,getComic:j,getCharacterByName:h}}}}]);
//# sourceMappingURL=929.6657761b.chunk.js.map