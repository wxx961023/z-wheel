(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(t,e,n){},101:function(t,e,n){},110:function(t,e,n){},111:function(t,e,n){},112:function(t,e,n){},113:function(t,e,n){},114:function(t,e,n){},115:function(t,e,n){},116:function(t,e,n){},117:function(t,e,n){},118:function(t,e,n){},139:function(t,e,n){"use strict";var i=n(20),r=n(36),a=n(140),s=n(141);n(142)("match",1,function(t,e,n,o){return[function(n){var i=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var l=i(t),c=String(this);if(!l.global)return s(l,c);var u=l.unicode;l.lastIndex=0;for(var h,p=[],f=0;null!==(h=s(l,c));){var d=String(h[0]);p[f]=d,""===d&&(l.lastIndex=a(c,r(l.lastIndex),u)),f++}return 0===f?null:p}]})},140:function(t,e,n){"use strict";var i=n(168)(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},141:function(t,e,n){"use strict";var i=n(169),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var a=n.call(t,e);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},142:function(t,e,n){"use strict";n(170);var i=n(23),r=n(13),a=n(15),s=n(26),o=n(16),l=n(143),c=o("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=o(t),f=!a(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=f?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[p](""),!e}):void 0;if(!f||!d||"replace"===t&&!u||"split"===t&&!h){var g=/./[p],v=n(s,p,""[t],function(t,e,n,i,r){return e.exec===l?f&&!r?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=v[0],b=v[1];i(String.prototype,t,m),r(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},143:function(t,e,n){"use strict";var i,r,a=n(144),s=RegExp.prototype.exec,o=String.prototype.replace,l=s,c=(i=/a/,r=/b*/g,s.call(i,"a"),s.call(r,"a"),0!==i.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(l=function(t){var e,n,i,r,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",a.call(l))),c&&(e=l.lastIndex),i=s.call(l,t),c&&i&&(l.lastIndex=l.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i}),t.exports=l},144:function(t,e,n){"use strict";var i=n(20);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},156:function(t,e,n){"use strict";var i=n(20),r=n(44),a=n(36),s=n(29),o=n(140),l=n(141),c=Math.max,u=Math.min,h=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g;n(142)("replace",2,function(t,e,n,d){return[function(i,r){var a=t(this),s=null==i?void 0:i[e];return void 0!==s?s.call(i,a,r):n.call(String(a),i,r)},function(t,e){var r=d(n,t,this,e);if(r.done)return r.value;var h=i(t),p=String(this),f="function"==typeof e;f||(e=String(e));var v=h.global;if(v){var m=h.unicode;h.lastIndex=0}for(var b=[];;){var _=l(h,p);if(null===_)break;if(b.push(_),!v)break;""===String(_[0])&&(h.lastIndex=o(p,a(h.lastIndex),m))}for(var x,k="",$=0,C=0;C<b.length;C++){_=b[C];for(var y=String(_[0]),w=c(u(s(_.index),p.length),0),S=[],L=1;L<_.length;L++)S.push(void 0===(x=_[L])?x:String(x));var O=_.groups;if(f){var j=[y].concat(S,w,p);void 0!==O&&j.push(O);var I=String(e.apply(void 0,j))}else I=g(y,p,w,S,O,e);w>=$&&(k+=p.slice($,w)+I,$=w+y.length)}return k+p.slice($)}];function g(t,e,i,a,s,o){var l=i+t.length,c=a.length,u=f;return void 0!==s&&(s=r(s),u=p),n.call(o,u,function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(l);case"<":o=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>c){var p=h(u/10);return 0===p?n:p<=c?void 0===a[p-1]?r.charAt(1):a[p-1]+r.charAt(1):n}o=a[u-1]}return void 0===o?"":o})}})},157:function(t,e,n){"use strict";var i=n(19),r=n(57)(1);i(i.P+i.F*!n(38)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},161:function(t,e,n){"use strict";n.r(e);n(95);var i=n(77),r={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(162).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(161).default},methods:{isActive:i.e}},a=(n(214),n(1)),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(157);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,r,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var c=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),l(t,e.children,n,r,a,s+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,h=u.item,p=u.sidebarDepth,f=Object(i.e)(a,h.path),d="auto"===h.type?f||h.children.some(function(t){return Object(i.e)(a,h.basePath+"#"+t.slug)}):f,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,d),v=r.frontmatter.sidebarDepth||p||c.sidebarDepth||s.sidebarDepth,m=null==v?1:v,b=c.displayAllHeaders||s.displayAllHeaders;return"auto"===h.type?[g,l(t,h.children,h.basePath,a,m)]:(d||b)&&h.headers&&!i.d.test(h.path)?[g,l(t,Object(i.c)(h.headers),h.path,a,m)]:g}};n(215);var u={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if("group"===r.type&&r.children.some(function(e){return"page"===e.type&&Object(i.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(a.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},162:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(209),n(1)),a=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=a.exports},165:function(t,e,n){"use strict";n(166)("link",function(t){return function(e){return t(this,"a","href",e)}})},166:function(t,e,n){var i=n(19),r=n(15),a=n(26),s=/"/g,o=function(t,e,n,i){var r=String(a(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},167:function(t,e,n){"use strict";var i=n(99);n.n(i).a},168:function(t,e,n){var i=n(29),r=n(26);t.exports=function(t){return function(e,n){var a,s,o=String(r(e)),l=i(n),c=o.length;return l<0||l>=c?t?"":void 0:(a=o.charCodeAt(l))<55296||a>56319||l+1===c||(s=o.charCodeAt(l+1))<56320||s>57343?t?o.charAt(l):a:t?o.slice(l,l+2):s-56320+(a-55296<<10)+65536}}},169:function(t,e,n){var i=n(28),r=n(16)("toStringTag"),a="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:a?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},170:function(t,e,n){"use strict";var i=n(143);n(19)({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},171:function(t,e,n){"use strict";var i=n(19),r=n(57)(2);i(i.P+i.F*!n(38)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},172:function(t,e,n){var i=n(19);i(i.S,"Array",{isArray:n(58)})},173:function(t,e,n){"use strict";n(85)("trim",function(t){return function(){return t(this,3)}})},174:function(t,e,n){"use strict";var i=n(100);n.n(i).a},175:function(t,e,n){"use strict";var i=n(101);n.n(i).a},176:function(t,e,n){var i=n(11),r=n(86),a=n(18).f,s=n(66).f,o=n(145),l=n(144),c=i.RegExp,u=c,h=c.prototype,p=/a/g,f=/a/g,d=new c(p)!==p;if(n(12)&&(!d||n(15)(function(){return f[n(16)("match")]=!1,c(p)!=p||c(f)==f||"/a/i"!=c(p,"i")}))){c=function(t,e){var n=this instanceof c,i=o(t),a=void 0===e;return!n&&i&&t.constructor===c&&a?t:r(d?new u(i&&!a?t.source:t,e):u((i=t instanceof c)?t.source:t,i&&a?l.call(t):e),n?this:h,c)};for(var g=function(t){t in c||a(c,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},v=s(u),m=0;v.length>m;)g(v[m++]);h.constructor=c,c.prototype=h,n(23)(i,"RegExp",c)}n(177)("RegExp")},177:function(t,e,n){"use strict";var i=n(11),r=n(18),a=n(12),s=n(16)("species");t.exports=function(t){var e=i[t];a&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},209:function(t,e,n){"use strict";var i=n(110);n.n(i).a},210:function(t,e,n){"use strict";var i=n(111);n.n(i).a},211:function(t,e,n){"use strict";var i=n(112);n.n(i).a},212:function(t,e,n){"use strict";var i=n(113);n.n(i).a},213:function(t,e,n){"use strict";var i=n(114);n.n(i).a},214:function(t,e,n){"use strict";var i=n(115);n.n(i).a},215:function(t,e,n){"use strict";var i=n(116);n.n(i).a},216:function(t,e,n){"use strict";var i=n(117);n.n(i).a},217:function(t,e,n){"use strict";var i=n(118);n.n(i).a},248:function(t,e,n){"use strict";n.r(e);n(53),n(98),n(95),n(165);var i=n(77),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},a=n(1),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,o={components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(167),Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),c=(n(139),n(171),n(172),n(43),n(173),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],a=0;a<e.length&&!(r.length>=5);a++){var s=e[a];if(this.getPageLocalePath(s)===n&&this.isSearchable(s))if(i(s))r.push(s);else if(s.headers)for(var o=0;o<s.headers.length&&!(r.length>=5);o++){var l=s.headers[o];i(l)&&r.push(Object.assign({},s,{path:s.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),u=(n(174),Object(a.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),h=(n(175),Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),p=(n(176),n(163)),f=(n(156),n(157),{components:{NavLink:s,DropdownTransition:n(162).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),d=(n(210),{components:{NavLink:s,DropdownLink:Object(a.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(a){var s,o=e[a],l=r[a]&&r[a].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,a),i.some(function(t){return t.path===s})||(s=a)),{text:l,link:s}})};return[].concat(Object(p.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),g=(n(211),Object(a.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function v(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var m={components:{SidebarButton:h,NavLinks:g,SearchBox:u,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(v(this.$el,"paddingLeft"))+parseInt(v(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},b=(n(212),Object(a.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function _(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[r+n]}}var x={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,_(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,_(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,a=t.docsBranch,s=void 0===a?"master":a,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,r,s,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,a){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+a}}},k=(n(213),Object(a.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),$={name:"Sidebar",components:{SidebarLinks:n(161).default,NavLinks:g},props:["items"]},C=(n(216),{components:{Home:l,Page:k,Sidebar:Object(a.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:b},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),y=(n(217),Object(a.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=y.exports},77:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"i",function(){return s}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return u}),n.d(e,"b",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"k",function(){return f}),n.d(e,"l",function(){return d}),n.d(e,"c",function(){return g}),n.d(e,"j",function(){return v});const i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",r=o(t);return a.test(r)?t:r+".html"+n}function p(t,e){const n=t.hash,r=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function f(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:r,themeConfig:a}=n,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=s.sidebar||a.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,i,r=1){if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});{r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,i,r+1)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},95:function(t,e,n){"use strict";var i=n(19),r=n(57)(3);i(i.P+i.F*!n(38)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},99:function(t,e,n){}}]);