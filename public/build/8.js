(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{470:function(e,t,n){"use strict";var r=n(0),g=n.n(r),a=n(2),o=n.n(a),m=n(196),i=n(31),s=n.n(i),c=n(75),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(a){function o(){var e,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i=p(this,a.call.apply(a,[this].concat(n)))).handleClick=function(e){if(i.props.onClick&&i.props.onClick(e),!(e.defaultPrevented||0!==e.button||i.props.target||((o=e).metaKey||o.altKey||o.ctrlKey||o.shiftKey))){e.preventDefault();var t=i.context.router.history,n=i.props,r=n.replace,a=n.to;r?t.replace(a):t.push(a)}var o},p(i,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,a),o.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,o="string"==typeof t?Object(c.b)(t,null,null,a.location):t,i=a.createHref(o);return g.a.createElement("a",l({},r,{onClick:this.handleClick,href:i,ref:n}))},o}(g.a.Component);u.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},u.defaultProps={replace:!1},u.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired};var h=u,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var f=function(e){var a=e.to,t=e.exact,n=e.strict,r=e.location,o=e.activeClassName,i=e.className,s=e.activeStyle,c=e.style,l=e.isActive,p=e["aria-current"],u=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),f="object"===(void 0===a?"undefined":v(a))?a.pathname:a,y=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return g.a.createElement(m.a,{path:y,exact:t,strict:n,location:r,children:function(e){var t=e.location,n=e.match,r=!!(l?l(n,t):n);return g.a.createElement(h,d({to:a,className:r?[i,o].filter(function(e){return e}).join(" "):i,style:r?d({},c,s):c,"aria-current":r&&p||null},u))}})};f.propTypes={to:h.propTypes.to,exact:o.a.bool,strict:o.a.bool,location:o.a.object,activeClassName:o.a.string,className:o.a.string,activeStyle:o.a.object,style:o.a.object,isActive:o.a.func,"aria-current":o.a.oneOf(["page","step","location","date","time","true"])},f.defaultProps={activeClassName:"active","aria-current":"page"};t.a=f},473:function(e,t,n){},477:function(e,t,n){"use strict";n.r(t);var r,a,o=n(10),i=n.n(o),s=n(11),c=n.n(s),l=n(12),p=n.n(l),u=n(13),f=n.n(u),y=n(14),g=n.n(y),m=n(1),h=n.n(m),d=n(4),v=n.n(d),b=n(0),S=n.n(b),E=n(28),O=n(35),w=n(470),L=n(107),j=n(16),R=n(145),k=n(54),x=(n(473),r=Object(E.b)(function(e){var t=e.singerClasslist;return{singerLists:t.singerLists,classname:t.classname,page:t.page,loading:t.loading,total:t.total}},function(n){return{getListRequest:function(e,t){n({type:"GET_SINGER_LIST_REQUEST",id:e,page:t})},initSingerList:function(){n({type:"INIT_SINGER_LIST"})},showLoading:function(){n({type:"CHANGE_SINGER_LIST_LOADING",loading:!0})}}}),Object(O.immutableRenderDecorator)(a=r(a=function(e){function a(){var e,s;i()(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return s=p()(this,(e=f()(a)).call.apply(e,[this].concat(n))),v()(h()(h()(s)),"componentDidMount",function(){var e=s.props,t=e.getListRequest,n=e.page;t(e.match.params.id,n)}),v()(h()(h()(s)),"componentWillUnmount",function(){(0,s.props.initSingerList)()}),v()(h()(h()(s)),"toSingerSongs",function(e){s.props.history.push("/singer/".concat(e))}),v()(h()(h()(s)),"renderSingerList",function(){return s.props.singerLists.map(function(e,t){var n=e.singerid,r=e.singername,a=e.imgurl;return S.a.createElement(L.a,{onClick:s.toSingerSongs.bind(h()(h()(s)),n),key:t,source:{id:n,title:r,avatar:a.replace(/{size}/g,200)},extra:S.a.createElement(j.a,{style:{color:"silver",padding:5,fontSize:8},type:"arrow-right"})})})}),v()(h()(h()(s)),"handleBack",function(){s.props.history.go(-1)}),v()(h()(h()(s)),"loadList",function(){var e=s.props,t=e.getListRequest,n=e.page,r=e.total,a=e.singerLists,o=e.showLoading,i=e.match.params.id;r>a.length&&(o(),t(i,n))}),s}return g()(a,e),c()(a,[{key:"render",value:function(){var e=this.props,t=e.singerLists,n=e.classname,r=e.loading;return S.a.createElement("div",{className:"singer-list"},!t.length&&S.a.createElement(j.a,{style:{display:"block",margin:"55px auto",fontSize:22,color:"silver"},type:"loading"}),S.a.createElement(k.a,{style:{paddingBottom:70},loading:r,onBottom:this.loadList},S.a.createElement(R.a,{fixed:!0,logo:S.a.createElement("img",{src:"http://m.kugou.com/v3/static/images/index/logo.png",alt:"logo"}),extra:S.a.createElement(w.a,{to:"/search"},S.a.createElement(j.a,{style:{fontSize:18},type:"search"}))}),n&&S.a.createElement(R.a,{className:"singer-classname",fixed:!0,style:{top:50},logo:S.a.createElement(j.a,{onClick:this.handleBack,type:"arrow-left"})},n),this.renderSingerList()))}}]),a}(b.Component))||a)||a);t.default=x}}]);
//# sourceMappingURL=8.js.map