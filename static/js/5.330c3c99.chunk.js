"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[5],{4829:function(e,t,n){var c=n(5671),r=n(3144),i=n(136),s=n(7277),a=n(2791),o=n(7202),l=n(184),u=function(e){(0,i.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={error:!1},e}return(0,r.Z)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)(o.Z,{}):this.props.children}}]),n}(a.Component);t.Z=u},1820:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var c=n(4270),r=n(4829),i=n(6966),s=n(3433),a=n(9439),o=n(2791),l=n(4203),u=n(1087),m=n(4197),d=n(4798),h=n(184),f=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],r=(0,o.useState)(!1),i=(0,a.Z)(r,2),f=i[0],j=i[1],x=(0,o.useState)(60),Z=(0,a.Z)(x,2),v=Z[0],p=Z[1],_=(0,o.useState)(!1),g=(0,a.Z)(_,2),b=g[0],k=g[1],N=(0,o.useState)(!1),C=(0,a.Z)(N,2),y=C[0],S=C[1],w=(0,l.Z)(),A=w.getAllComics,P=w.proc,q=w.setProcess;(0,o.useEffect)((function(){return D(v,!0)}),[]);var D=function(e,t){k(!t),A(e).then(E).then((function(){return q("confirmed")}))},E=function(e){var t=e.length<8;c((function(t){return[].concat((0,s.Z)(t),(0,s.Z)(e))})),k(!1),j(!1),p((function(e){return e+8})),S(t)},F=(0,d.Z)(P,(function(){return function(e){var t=e.map((function(e,t){return(0,h.jsx)("li",{className:"comics__item",children:(0,h.jsxs)(u.rU,{to:"/comics/".concat(e.id),children:[(0,h.jsx)("img",{src:e.thumbnail,alt:"ultimate war",className:"comics__item-img"}),(0,h.jsx)("div",{className:"comics__item-name",children:e.title}),(0,h.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return(0,h.jsx)("ul",{className:"comics__grid",children:t})}(n)}),"list",{},b),U=f?(0,h.jsx)(m.Z,{}):(0,h.jsx)("button",{className:"button button__main button__long",disabled:f,style:{display:y?"none":"block"},onClick:function(){j(!0),D(v)},children:(0,h.jsx)("div",{className:"inner",children:"load more"})});return(0,h.jsxs)("div",{className:"comics__list",children:[F,U]})},j=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(c.q,{children:[(0,h.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,h.jsx)("title",{children:"Comics page"})]}),(0,h.jsx)(r.Z,{children:(0,h.jsx)(i.Z,{})}),(0,h.jsx)(r.Z,{children:(0,h.jsx)(f,{})})]})}}}]);
//# sourceMappingURL=5.330c3c99.chunk.js.map