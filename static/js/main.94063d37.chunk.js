(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),o=c(2),a=c(5),l=c(6),i=c(9),r=c(8),d=c(1),u=c.n(d),j=c(7),b=c.n(j);c(14);var h=c(0),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(e){Object(i.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:["Jam"]},e}return Object(l.a)(c,[{key:"selectHandler",value:function(e){var t=this.state.selectedGoods;this.setState({selectedGoods:[].concat(Object(o.a)(t),[e])})}},{key:"removeHandler",value:function(e){var t=this.state.selectedGoods,c=t.indexOf(e);this.setState({selectedGoods:[].concat(Object(o.a)(t.slice(0,c)),Object(o.a)(t.slice(c+1)))})}},{key:"resetSelection",value:function(){this.setState({selectedGoods:[]})}},{key:"render",value:function(){var e,t=this,c=this.state.selectedGoods,n=c.length?1===(e=c).length?"".concat(e.join(", ")," is selected"):"".concat(e.slice(0,-1).join(", ")," and ").concat(e[e.length-1]," are selected"):"No goods selected";return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"title-container",children:[Object(h.jsx)("h1",{children:n}),Boolean(c.length)&&Object(h.jsx)("button",{type:"button",className:"title-button",onClick:function(){t.resetSelection()},children:"x"})]}),Object(h.jsx)("ul",{className:"goods",children:m.map((function(e){var n=c.includes(e);return Object(h.jsxs)("div",{className:"good-container",children:[Object(h.jsx)("li",{className:b()("good",{"good--selected":n}),children:e}),n?Object(h.jsx)("button",{type:"button",className:"button",onClick:function(){t.removeHandler(e)},children:"Remove"}):Object(h.jsx)("button",{type:"button",className:"button",onClick:function(){t.selectHandler(e)},children:"Add"})]},e)}))})]})}}]),c}(u.a.Component),O=v;s.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.94063d37.chunk.js.map