var Ot,ae,Ja,Qs,We,Qa,Za,ba,ka,wa,_a,Ys,vt={},en=[],Ks=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ca=Array.isArray;function Re(e,t){for(var a in t)e[a]=t[a];return e}function tn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Sa(e,t,a){var n,s,o,i={};for(o in t)o=="key"?n=t[o]:o=="ref"?s=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Ot.call(arguments,2):a),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return Nt(e,i,n,s,null)}function Nt(e,t,a,n,s){var o={type:e,props:t,key:a,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++Ja,__i:-1,__u:0};return s==null&&ae.vnode!=null&&ae.vnode(o),o}function Rt(e){return e.children}function Ht(e,t){this.props=e,this.context=t}function st(e,t){if(t==null)return e.__?st(e.__,e.__i+1):null;for(var a;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null)return a.__e;return typeof e.type=="function"?st(e):null}function an(e){var t,a;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null){e.__e=e.__c.base=a.__e;break}return an(e)}}function Ya(e){(!e.__d&&(e.__d=!0)&&We.push(e)&&!Dt.__r++||Qa!==ae.debounceRendering)&&((Qa=ae.debounceRendering)||Za)(Dt)}function Dt(){var e,t,a,n,s,o,i,r;for(We.sort(ba);e=We.shift();)e.__d&&(t=We.length,n=void 0,o=(s=(a=e).__v).__e,i=[],r=[],a.__P&&((n=Re({},s)).__v=s.__v+1,ae.vnode&&ae.vnode(n),Ia(a.__P,n,s,a.__n,a.__P.namespaceURI,32&s.__u?[o]:null,i,o??st(s),!!(32&s.__u),r),n.__v=s.__v,n.__.__k[n.__i]=n,on(i,n,r),n.__e!=o&&an(n)),We.length>t&&We.sort(ba));Dt.__r=0}function nn(e,t,a,n,s,o,i,r,u,m,g){var l,h,d,p,v,w=n&&n.__k||en,C=t.length;for(a.__d=u,Xs(a,t,w),u=a.__d,l=0;l<C;l++)(d=a.__k[l])!=null&&(h=d.__i===-1?vt:w[d.__i]||vt,d.__i=l,Ia(e,d,h,s,o,i,r,u,m,g),p=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&za(h.ref,null,d),g.push(d.ref,d.__c||p,d)),v==null&&p!=null&&(v=p),65536&d.__u||h.__k===d.__k?u=sn(d,u,e):typeof d.type=="function"&&d.__d!==void 0?u=d.__d:p&&(u=p.nextSibling),d.__d=void 0,d.__u&=-196609);a.__d=u,a.__e=v}function Xs(e,t,a){var n,s,o,i,r,u=t.length,m=a.length,g=m,l=0;for(e.__k=[],n=0;n<u;n++)(s=t[n])!=null&&typeof s!="boolean"&&typeof s!="function"?(i=n+l,(s=e.__k[n]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?Nt(null,s,null,null,null):Ca(s)?Nt(Rt,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?Nt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,o=null,(r=s.__i=Js(s,a,i,g))!==-1&&(g--,(o=a[r])&&(o.__u|=131072)),o==null||o.__v===null?(r==-1&&l--,typeof s.type!="function"&&(s.__u|=65536)):r!==i&&(r==i-1?l--:r==i+1?l++:(r>i?l--:l++,s.__u|=65536))):s=e.__k[n]=null;if(g)for(n=0;n<m;n++)(o=a[n])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=st(o)),rn(o,o))}function sn(e,t,a){var n,s;if(typeof e.type=="function"){for(n=e.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=e,t=sn(n[s],t,a));return t}e.__e!=t&&(t&&e.type&&!a.contains(t)&&(t=st(e)),a.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Js(e,t,a,n){var s=e.key,o=e.type,i=a-1,r=a+1,u=t[a];if(u===null||u&&s==u.key&&o===u.type&&!(131072&u.__u))return a;if(n>(u!=null&&!(131072&u.__u)?1:0))for(;i>=0||r<t.length;){if(i>=0){if((u=t[i])&&!(131072&u.__u)&&s==u.key&&o===u.type)return i;i--}if(r<t.length){if((u=t[r])&&!(131072&u.__u)&&s==u.key&&o===u.type)return r;r++}}return-1}function Ka(e,t,a){t[0]==="-"?e.setProperty(t,a??""):e[t]=a==null?"":typeof a!="number"||Ks.test(t)?a:a+"px"}function Tt(e,t,a,n,s){var o;e:if(t==="style")if(typeof a=="string")e.style.cssText=a;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)a&&t in a||Ka(e.style,t,"");if(a)for(t in a)n&&a[t]===n[t]||Ka(e.style,t,a[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=a,a?n?a.u=n.u:(a.u=ka,e.addEventListener(t,o?_a:wa,o)):e.removeEventListener(t,o?_a:wa,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=a??"";break e}catch{}typeof a=="function"||(a==null||a===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&a==1?"":a))}}function Xa(e){return function(t){if(this.l){var a=this.l[t.type+e];if(t.t==null)t.t=ka++;else if(t.t<a.u)return;return a(ae.event?ae.event(t):t)}}}function Ia(e,t,a,n,s,o,i,r,u,m){var g,l,h,d,p,v,w,C,I,z,T,U,D,N,F,q,O=t.type;if(t.constructor!==void 0)return null;128&a.__u&&(u=!!(32&a.__u),o=[r=t.__e=a.__e]),(g=ae.__b)&&g(t);e:if(typeof O=="function")try{if(C=t.props,I="prototype"in O&&O.prototype.render,z=(g=O.contextType)&&n[g.__c],T=g?z?z.props.value:g.__:n,a.__c?w=(l=t.__c=a.__c).__=l.__E:(I?t.__c=l=new O(C,T):(t.__c=l=new Ht(C,T),l.constructor=O,l.render=eo),z&&z.sub(l),l.props=C,l.state||(l.state={}),l.context=T,l.__n=n,h=l.__d=!0,l.__h=[],l._sb=[]),I&&l.__s==null&&(l.__s=l.state),I&&O.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Re({},l.__s)),Re(l.__s,O.getDerivedStateFromProps(C,l.__s))),d=l.props,p=l.state,l.__v=t,h)I&&O.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),I&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(I&&O.getDerivedStateFromProps==null&&C!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(C,T),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(C,l.__s,T)===!1||t.__v===a.__v)){for(t.__v!==a.__v&&(l.props=C,l.state=l.__s,l.__d=!1),t.__e=a.__e,t.__k=a.__k,t.__k.some(function(E){E&&(E.__=t)}),U=0;U<l._sb.length;U++)l.__h.push(l._sb[U]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(C,l.__s,T),I&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,p,v)})}if(l.context=T,l.props=C,l.__P=e,l.__e=!1,D=ae.__r,N=0,I){for(l.state=l.__s,l.__d=!1,D&&D(t),g=l.render(l.props,l.state,l.context),F=0;F<l._sb.length;F++)l.__h.push(l._sb[F]);l._sb=[]}else do l.__d=!1,D&&D(t),g=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++N<25);l.state=l.__s,l.getChildContext!=null&&(n=Re(Re({},n),l.getChildContext())),I&&!h&&l.getSnapshotBeforeUpdate!=null&&(v=l.getSnapshotBeforeUpdate(d,p)),nn(e,Ca(q=g!=null&&g.type===Rt&&g.key==null?g.props.children:g)?q:[q],t,a,n,s,o,i,r,u,m),l.base=t.__e,t.__u&=-161,l.__h.length&&i.push(l),w&&(l.__E=l.__=null)}catch(E){if(t.__v=null,u||o!=null){for(t.__u|=u?160:128;r&&r.nodeType===8&&r.nextSibling;)r=r.nextSibling;o[o.indexOf(r)]=null,t.__e=r}else t.__e=a.__e,t.__k=a.__k;ae.__e(E,t,a)}else o==null&&t.__v===a.__v?(t.__k=a.__k,t.__e=a.__e):t.__e=Zs(a.__e,t,a,n,s,o,i,u,m);(g=ae.diffed)&&g(t)}function on(e,t,a){t.__d=void 0;for(var n=0;n<a.length;n++)za(a[n],a[++n],a[++n]);ae.__c&&ae.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){ae.__e(o,s.__v)}})}function Zs(e,t,a,n,s,o,i,r,u){var m,g,l,h,d,p,v,w=a.props,C=t.props,I=t.type;if(I==="svg"?s="http://www.w3.org/2000/svg":I==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(m=0;m<o.length;m++)if((d=o[m])&&"setAttribute"in d==!!I&&(I?d.localName===I:d.nodeType===3)){e=d,o[m]=null;break}}if(e==null){if(I===null)return document.createTextNode(C);e=document.createElementNS(s,I,C.is&&C),r&&(ae.__m&&ae.__m(t,o),r=!1),o=null}if(I===null)w===C||r&&e.data===C||(e.data=C);else{if(o=o&&Ot.call(e.childNodes),w=a.props||vt,!r&&o!=null)for(w={},m=0;m<e.attributes.length;m++)w[(d=e.attributes[m]).name]=d.value;for(m in w)if(d=w[m],m!="children"){if(m=="dangerouslySetInnerHTML")l=d;else if(!(m in C)){if(m=="value"&&"defaultValue"in C||m=="checked"&&"defaultChecked"in C)continue;Tt(e,m,null,d,s)}}for(m in C)d=C[m],m=="children"?h=d:m=="dangerouslySetInnerHTML"?g=d:m=="value"?p=d:m=="checked"?v=d:r&&typeof d!="function"||w[m]===d||Tt(e,m,d,w[m],s);if(g)r||l&&(g.__html===l.__html||g.__html===e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(l&&(e.innerHTML=""),nn(e,Ca(h)?h:[h],t,a,n,I==="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,i,o?o[0]:a.__k&&st(a,0),r,u),o!=null)for(m=o.length;m--;)tn(o[m]);r||(m="value",I==="progress"&&p==null?e.removeAttribute("value"):p!==void 0&&(p!==e[m]||I==="progress"&&!p||I==="option"&&p!==w[m])&&Tt(e,m,p,w[m],s),m="checked",v!==void 0&&v!==e[m]&&Tt(e,m,v,w[m],s))}return e}function za(e,t,a){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(s){ae.__e(s,a)}}function rn(e,t,a){var n,s;if(ae.unmount&&ae.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||za(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){ae.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&rn(n[s],t,a||typeof e.type!="function");a||tn(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function eo(e,t,a){return this.constructor(e,a)}function Qe(e,t,a){var n,s,o,i;ae.__&&ae.__(e,t),s=(n=typeof a=="function")?null:a&&a.__k||t.__k,o=[],i=[],Ia(t,e=(!n&&a||t).__k=Sa(Rt,null,[e]),s||vt,vt,t.namespaceURI,!n&&a?[a]:s?null:t.firstChild?Ot.call(t.childNodes):null,o,!n&&a?a:s?s.__e:t.firstChild,n,i),on(o,e,i)}Ot=en.slice,ae={__e:function(e,t,a,n){for(var s,o,i;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),i=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),i=s.__d),i)return s.__E=s}catch(r){e=r}throw e}},Ja=0,Qs=function(e){return e!=null&&e.constructor==null},Ht.prototype.setState=function(e,t){var a;a=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Re({},this.state),typeof e=="function"&&(e=e(Re({},a),this.props)),e&&Re(a,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ya(this))},Ht.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ya(this))},Ht.prototype.render=Rt,We=[],Za=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ba=function(e,t){return e.__v.__b-t.__v.__b},Dt.__r=0,ka=0,wa=Xa(!1),_a=Xa(!0),Ys=0;var yt,ce,Ma,ln,Ut=0,fn=[],de=ae,cn=de.__b,un=de.__r,dn=de.diffed,pn=de.__c,mn=de.unmount,hn=de.__;function Ea(e,t){de.__h&&de.__h(ce,e,Ut||t),Ut=0;var a=ce.__H||(ce.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function S(e){return Ut=1,to(vn,e)}function to(e,t,a){var n=Ea(yt++,2);if(n.t=e,!n.__c&&(n.__=[a?a(t):vn(void 0,t),function(r){var u=n.__N?n.__N[0]:n.__[0],m=n.t(u,r);u!==m&&(n.__N=[m,n.__[1]],n.__c.setState({}))}],n.__c=ce,!ce.u)){var s=function(r,u,m){if(!n.__c.__H)return!0;var g=n.__c.__H.__.filter(function(h){return!!h.__c});if(g.every(function(h){return!h.__N}))return!o||o.call(this,r,u,m);var l=!1;return g.forEach(function(h){if(h.__N){var d=h.__[0];h.__=h.__N,h.__N=void 0,d!==h.__[0]&&(l=!0)}}),!(!l&&n.__c.props===r)&&(!o||o.call(this,r,u,m))};ce.u=!0;var o=ce.shouldComponentUpdate,i=ce.componentWillUpdate;ce.componentWillUpdate=function(r,u,m){if(this.__e){var g=o;o=void 0,s(r,u,m),o=g}i&&i.call(this,r,u,m)},ce.shouldComponentUpdate=s}return n.__N||n.__}function W(e,t){var a=Ea(yt++,3);!de.__s&&$n(a.__H,t)&&(a.__=e,a.i=t,ce.__H.__h.push(a))}function Y(e){return Ut=5,Ye(function(){return{current:e}},[])}function Ye(e,t){var a=Ea(yt++,7);return $n(a.__H,t)&&(a.__=e(),a.__H=t,a.__h=e),a.__}function ao(){for(var e;e=fn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Bt),e.__H.__h.forEach(xa),e.__H.__h=[]}catch(t){e.__H.__h=[],de.__e(t,e.__v)}}de.__b=function(e){ce=null,cn&&cn(e)},de.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),hn&&hn(e,t)},de.__r=function(e){un&&un(e),yt=0;var t=(ce=e.__c).__H;t&&(Ma===ce?(t.__h=[],ce.__h=[],t.__.forEach(function(a){a.__N&&(a.__=a.__N),a.i=a.__N=void 0})):(t.__h.forEach(Bt),t.__h.forEach(xa),t.__h=[],yt=0)),Ma=ce},de.diffed=function(e){dn&&dn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(fn.push(t)!==1&&ln===de.requestAnimationFrame||((ln=de.requestAnimationFrame)||no)(ao)),t.__H.__.forEach(function(a){a.i&&(a.__H=a.i),a.i=void 0})),Ma=ce=null},de.__c=function(e,t){t.some(function(a){try{a.__h.forEach(Bt),a.__h=a.__h.filter(function(n){return!n.__||xa(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],de.__e(n,a.__v)}}),pn&&pn(e,t)},de.unmount=function(e){mn&&mn(e);var t,a=e.__c;a&&a.__H&&(a.__H.__.forEach(function(n){try{Bt(n)}catch(s){t=s}}),a.__H=void 0,t&&de.__e(t,a.__v))};var gn=typeof requestAnimationFrame=="function";function no(e){var t,a=function(){clearTimeout(n),gn&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);gn&&(t=requestAnimationFrame(a))}function Bt(e){var t=ce,a=e.__c;typeof a=="function"&&(e.__c=void 0,a()),ce=t}function xa(e){var t=ce;e.__c=e.__(),ce=t}function $n(e,t){return!e||e.length!==t.length||t.some(function(a,n){return a!==e[n]})}function vn(e,t){return typeof t=="function"?t(e):t}var bn=function(e,t,a,n){var s;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],r=t[o]?(t[0]|=i?1:2,a[t[o++]]):t[++o];i===3?n[0]=r:i===4?n[1]=Object.assign(n[1]||{},r):i===5?(n[1]=n[1]||{})[t[++o]]=r:i===6?n[1][t[++o]]+=r+"":i?(s=e.apply(r,bn(e,r,a,["",null])),n.push(s),r[0]?t[0]|=2:(t[o-2]=0,t[o]=s)):n.push(r)}return n},yn=new Map;function wn(e){var t=yn.get(this);return t||(t=new Map,yn.set(this,t)),(t=bn(this,t.get(e)||(t.set(e,t=function(a){for(var n,s,o=1,i="",r="",u=[0],m=function(h){o===1&&(h||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,h,i):o===3&&(h||i)?(u.push(3,h,i),o=2):o===2&&i==="..."&&h?u.push(4,h,0):o===2&&i&&!h?u.push(5,0,!0,i):o>=5&&((i||!h&&o===5)&&(u.push(o,0,i,s),o=6),h&&(u.push(o,h,0,s),o=6)),i=""},g=0;g<a.length;g++){g&&(o===1&&m(),m(g));for(var l=0;l<a[g].length;l++)n=a[g][l],o===1?n==="<"?(m(),u=[u],o=3):i+=n:o===4?i==="--"&&n===">"?(o=1,i=""):i=n+i[0]:r?n===r?r="":i+=n:n==='"'||n==="'"?r=n:n===">"?(m(),o=1):o&&(n==="="?(o=5,s=i,i=""):n==="/"&&(o<5||a[g][l+1]===">")?(m(),o===3&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(m(),o=2):i+=n),o===3&&i==="!--"&&(o=4,u=u[0])}return m(),u}(e)),t),arguments,[])).length>1?t:t[0]}var Aa={clock:{d:["M11.99,2C6.47,2 2,6.48 2,12s4.47,10 9.99,10C17.52,22 22,17.52 22,12S17.52,2 11.99,2zM12,20c-4.42,0 -8,-3.58 -8,-8s3.58,-8 8,-8 8,3.58 8,8 -3.58,8 -8,8zM12.5,7H11v6l5.25,3.15 0.75,-1.23 -4.5,-2.67z"],vb:"24"},chevron_right:{d:["M10,6L8.59,7.41 13.17,12l-4.58,4.59L10,18l6,-6z"],vb:"24"},remove:{d:["M19,13H5v-2h14v2z"],vb:"24"},calendar:{d:["M19,4h-1V2h-2v2H8V2H6v2H5c-1.11,0 -1.99,0.9 -1.99,2L3,20c0,1.1 0.89,2 2,2h14c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM9,14H7v-2h2v2zM13,14h-2v-2h2v2zM17,14h-2v-2h2v2zM9,18H7v-2h2v2zM13,18h-2v-2h2v2zM17,18h-2v-2h2v2z"],vb:"24"},lock:{d:["M18,8h-1V6c0,-2.76 -2.24,-5 -5,-5S7,3.24 7,6v2H6c-1.1,0 -2,0.9 -2,2v10c0,1.1 0.9,2 2,2h12c1.1,0 2,-0.9 2,-2V10c0,-1.1 -0.9,-2 -2,-2zM12,17c-1.1,0 -2,-0.9 -2,-2s0.9,-2 2,-2 2,0.9 2,2 -0.9,2 -2,2zM15.1,8H8.9V6c0,-1.71 1.39,-3.1 3.1,-3.1 1.71,0 3.1,1.39 3.1,3.1v2z"],vb:"24"},cook:{d:["M13.5,0.67s0.74,2.65 0.74,4.8c0,2.06 -1.35,3.73 -3.41,3.73 -2.07,0 -3.63,-1.67 -3.63,-3.73l0.03,-0.36C5.21,7.51 4,10.62 4,14c0,4.42 3.58,8 8,8s8,-3.58 8,-8C20,8.61 17.41,3.8 13.5,0.67zM11.71,19c-1.78,0 -3.22,-1.4 -3.22,-3.14 0,-1.62 1.05,-2.76 2.81,-3.12 1.77,-0.36 3.6,-1.21 4.62,-2.58 0.39,1.29 0.59,2.65 0.59,4.04 0,2.65 -2.15,4.8 -4.8,4.8z"],vb:"24"},mail:{d:["M20,4H4c-1.1,0 -1.99,0.9 -1.99,2L2,18c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM20,8l-8,5 -8,-5V6l8,5 8,-5v2z"],vb:"24"},search:{d:["M15.5,14h-0.79l-0.28,-0.27C15.41,12.59 16,11.11 16,9.5 16,5.91 13.09,3 9.5,3S3,5.91 3,9.5 5.91,16 9.5,16c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99L20.49,19l-4.99,-5zM9.5,14C7.01,14 5,11.99 5,9.5S7.01,5 9.5,5 14,7.01 14,9.5 11.99,14 9.5,14z"],vb:"24"},store:{d:["M20,4H4v2h16V4zM21,14v-2l-1,-5H4l-1,5v2h1v6h10v-6h4v6h2v-6H21zM12,18H6v-4h6V18z"],vb:"24"},bell:{d:["M12,22c1.1,0 2,-0.9 2,-2h-4c0,1.1 0.89,2 2,2zM18,16v-5c0,-3.07 -1.64,-5.64 -4.5,-6.32L13.5,4c0,-0.83 -0.67,-1.5 -1.5,-1.5s-1.5,0.67 -1.5,1.5v0.68C7.63,5.36 6,7.92 6,11v5l-2,2v1h16v-1l-2,-2z"],vb:"24"},share:{d:["M18,16.08c-0.76,0 -1.44,0.3 -1.96,0.77L8.91,12.7c0.05,-0.23 0.09,-0.46 0.09,-0.7s-0.04,-0.47 -0.09,-0.7l7.05,-4.11c0.54,0.5 1.25,0.81 2.04,0.81 1.66,0 3,-1.34 3,-3s-1.34,-3 -3,-3 -3,1.34 -3,3c0,0.24 0.04,0.47 0.09,0.7L8.04,9.81C7.5,9.31 6.79,9 6,9c-1.66,0 -3,1.34 -3,3s1.34,3 3,3c0.79,0 1.5,-0.31 2.04,-0.81l7.12,4.16c-0.05,0.21 -0.08,0.43 -0.08,0.65 0,1.61 1.31,2.92 2.92,2.92 1.61,0 2.92,-1.31 2.92,-2.92s-1.31,-2.92 -2.92,-2.92z"],vb:"24"},login:{d:["M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5,-5L11,7zM20,19h-8v2h8c1.1,0 2,-0.9 2,-2V5c0,-1.1 -0.9,-2 -2,-2h-8v2h8V19z"],vb:"24"},cart:{d:["M7,18c-1.1,0 -1.99,0.9 -1.99,2S5.9,22 7,22s2,-0.9 2,-2 -0.9,-2 -2,-2zM1,2v2h2l3.6,7.59 -1.35,2.45c-0.16,0.28 -0.25,0.61 -0.25,0.96 0,1.1 0.9,2 2,2h12v-2H7.42c-0.14,0 -0.25,-0.11 -0.25,-0.25l0.03,-0.12 0.9,-1.63h7.45c0.75,0 1.41,-0.41 1.75,-1.03l3.58,-6.49c0.08,-0.14 0.12,-0.31 0.12,-0.48 0,-0.55 -0.45,-1 -1,-1H5.21l-0.94,-2H1zM17,18c-1.1,0 -1.99,0.9 -1.99,2s0.89,2 1.99,2 2,-0.9 2,-2 -0.9,-2 -2,-2z"],vb:"24"},insights:{d:["M21,8c-1.45,0 -2.26,1.44 -1.93,2.51l-3.55,3.56c-0.3,-0.09 -0.74,-0.09 -1.04,0l-2.55,-2.55C12.27,10.45 11.46,9 10,9c-1.45,0 -2.27,1.44 -1.93,2.52l-4.56,4.55C2.44,15.74 1,16.55 1,18c0,1.1 0.9,2 2,2c1.45,0 2.26,-1.44 1.93,-2.51l4.55,-4.56c0.3,0.09 0.74,0.09 1.04,0l2.55,2.55C12.73,16.55 13.54,18 15,18c1.45,0 2.27,-1.44 1.93,-2.52l3.56,-3.55C21.56,12.26 23,11.45 23,10C23,8.9 22.1,8 21,8z"],vb:"24"},image:{d:["M21,19V5c0,-1.1 -0.9,-2 -2,-2H5c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2zM8.5,13.5l2.5,3.01L14.5,12l4.5,6H5l3.5,-4.5z"],vb:"24"},close:{d:["M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"],vb:"24"},people:{d:["M16,11c1.66,0 2.99,-1.34 2.99,-3S17.66,5 16,5c-1.66,0 -3,1.34 -3,3s1.34,3 3,3zM8,11c1.66,0 2.99,-1.34 2.99,-3S9.66,5 8,5C6.34,5 5,6.34 5,8s1.34,3 3,3zM8,13c-2.33,0 -7,1.17 -7,3.5V19h14v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5zM16,13c-0.29,0 -0.62,0.02 -0.97,0.05 1.16,0.84 1.97,1.97 1.97,3.45V19h6v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5z"],vb:"24"},add:{d:["M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],vb:"24"},arrow_back:{d:["M20,11H7.83l5.59,-5.59L12,4l-8,8 8,8 1.41,-1.41L7.83,13H20v-2z"],vb:"24"},camera:{d:["M12,12m-3.2,0a3.2,3.2 0,1 1,6.4 0a3.2,3.2 0,1 1,-6.4 0M9,2L7.17,4H4c-1.1,0 -2,0.9 -2,2v12c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2h-3.17L15,2H9zM12,17c-2.76,0 -5,-2.24 -5,-5s2.24,-5 5,-5 5,2.24 5,5 -2.24,5 -5,5z"],vb:"24"},delete:{d:["M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2V7H6v12zM19,4h-3.5l-1,-1h-5l-1,1H5v2h14V4z"],vb:"24"},recipe:{d:["M8.1,13.34l2.83,-2.83L3.91,3.5c-1.56,1.56 -1.56,4.09 0,5.66l4.19,4.18zM14.88,11.53c1.53,0.71 3.68,0.21 5.27,-1.38 1.91,-1.91 2.28,-4.65 0.81,-6.12 -1.46,-1.46 -4.2,-1.1 -6.12,0.81 -1.59,1.59 -2.09,3.74 -1.38,5.27L3.7,19.87l1.41,1.41L12,14.41l6.88,6.88 1.41,-1.41L13.41,13l1.47,-1.47z"],vb:"24"},check:{d:["M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41,-1.41z"],vb:"24"},barcode:{d:["M9.5,6.5v3h-3v-3H9.5M11,5H5v6h6V5L11,5zM9.5,14.5v3h-3v-3H9.5M11,13H5v6h6V13L11,13zM17.5,6.5v3h-3v-3H17.5M19,5h-6v6h6V5L19,5zM13,13h1.5v1.5H13V13zM14.5,14.5H16V16h-1.5V14.5zM16,13h1.5v1.5H16V13zM13,16h1.5v1.5H13V16zM14.5,17.5H16V19h-1.5V17.5zM16,16h1.5v1.5H16V16zM17.5,14.5H19V16h-1.5V14.5zM17.5,17.5H19V19h-1.5V17.5zM22,7h-2V4h-3V2h5V7zM22,22v-5h-2v3h-3v2H22zM2,22h5v-2H4v-3H2V22zM2,2v5h2V4h3V2H2z"],vb:"24"},swap:{d:["M6.99,11L3,15l3.99,4v-3H14v-2H6.99v-3zM21,9l-3.99,-4v3H10v2h7.01v3L21,9z"],vb:"24"},pantry:{d:["M20,2H4c-1.1,0 -2,0.9 -2,2v4c0,0.74 0.4,1.38 1,1.73V20c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2V9.73c0.6,-0.35 1,-0.99 1,-1.73V4c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM20,8H4V4h16v4zM9,12h6v2H9z"],vb:"24"},logout:{d:["M17,7l-1.41,1.41L18.17,11H8v2h10.17l-2.58,2.58L17,17l5,-5zM4,5h8V3H4c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h8v-2H4V5z"],vb:"24"},edit:{d:["M3,17.25V21h3.75L17.81,9.94l-3.75,-3.75L3,17.25zM20.71,7.04c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34c-0.39,-0.39 -1.02,-0.39 -1.41,0l-1.83,1.83 3.75,3.75 1.83,-1.83z"],vb:"24"},settings:{d:["M19.14,12.94c0.04,-0.3 0.06,-0.61 0.06,-0.94c0,-0.32 -0.02,-0.64 -0.07,-0.94l2.03,-1.58c0.18,-0.14 0.23,-0.41 0.12,-0.61l-1.92,-3.32c-0.12,-0.22 -0.37,-0.29 -0.59,-0.22l-2.39,0.96c-0.5,-0.38 -1.03,-0.7 -1.62,-0.94L14.4,2.81c-0.04,-0.24 -0.24,-0.41 -0.48,-0.41h-3.84c-0.24,0 -0.43,0.17 -0.47,0.41L9.25,5.35C8.66,5.59 8.12,5.92 7.63,6.29L5.24,5.33c-0.22,-0.08 -0.47,0 -0.59,0.22L2.74,8.87C2.62,9.08 2.66,9.34 2.86,9.48l2.03,1.58C4.84,11.36 4.8,11.69 4.8,12s0.02,0.64 0.07,0.94l-2.03,1.58c-0.18,0.14 -0.23,0.41 -0.12,0.61l1.92,3.32c0.12,0.22 0.37,0.29 0.59,0.22l2.39,-0.96c0.5,0.38 1.03,0.7 1.62,0.94l0.36,2.54c0.05,0.24 0.24,0.41 0.48,0.41h3.84c0.24,0 0.44,-0.17 0.47,-0.41l0.36,-2.54c0.59,-0.24 1.13,-0.56 1.62,-0.94l2.39,0.96c0.22,0.08 0.47,0 0.59,-0.22l1.92,-3.32c0.12,-0.22 0.07,-0.47 -0.12,-0.61L19.14,12.94zM12,15.6c-1.98,0 -3.6,-1.62 -3.6,-3.6s1.62,-3.6 3.6,-3.6s3.6,1.62 3.6,3.6S13.98,15.6 12,15.6z"],vb:"24"},copy:{d:["M16,1H4c-1.1,0 -2,0.9 -2,2v14h2V3h12V1zM19,5H8c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h11c1.1,0 2,-0.9 2,-2V7c0,-1.1 -0.9,-2 -2,-2zM19,21H8V7h11v14z"],vb:"24"},undo:{d:["M12.5,8c-2.65,0 -5.05,0.99 -6.9,2.6L2,7v9h9l-3.62,-3.62c1.39,-1.16 3.16,-1.88 5.12,-1.88 3.54,0 6.55,2.31 7.6,5.5l2.37,-0.78C21.08,11.03 17.15,8 12.5,8z"],vb:"24"},chevron_left:{d:["M15.41,7.41L14,6l-6,6 6,6 1.41,-1.41L10.83,12z"],vb:"24"},home:{d:["M10,20v-6h4v6h5v-8h3L12,3 2,12h3v8z"],vb:"24"}};Object.assign(Aa,{sun:{vb:"24",d:["M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zM11 20h2v3h-2zM1 11h3v2H1zM20 11h3v2h-3zM4.22 5.64l1.42-1.42 2.12 2.12-1.42 1.42zM16.24 17.66l1.42-1.42 2.12 2.12-1.42 1.42zM4.22 18.36l2.12-2.12 1.42 1.42-2.12 2.12zM16.24 6.34l2.12-2.12 1.42 1.42-2.12 2.12z"]},moon:{vb:"24",d:["M12.3 2.05A10 10 0 1 0 21.95 11.7 7.5 7.5 0 0 1 12.3 2.05z"]},restaurant:{vb:"24",d:["M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"]},receipt:{vb:"24",rule:"evenodd",d:["M5 2h14v20l-2.33-1.5L14.33 22 12 20.5 9.67 22l-2.34-1.5L5 22V2zm2 2v14.4l.33-.2 2.34 1.5L12 18.2l2.33 1.5 2.34-1.5.33.2V4H7zm2 3h6v2H9V7zm0 4h6v2H9v-2z"]},play:{vb:"24",d:["M8 5v14l11-7z"]},sparkle:{vb:"24",d:["M12 2C12.8 7.6 16.4 11.2 22 12 16.4 12.8 12.8 16.4 12 22 11.2 16.4 7.6 12.8 2 12 7.6 11.2 11.2 7.6 12 2z"]},euro:{vb:"24",d:["M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"]},bookmark:{vb:"24",d:["M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"]},arrow_forward:{vb:"24",d:["M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"]},palette:{vb:"24",d:["M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"]},person:{vb:"24",d:["M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"]},volume:{vb:"24",d:["M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"]},hourglass:{vb:"24",d:["M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"]},leaf:{vb:"24",d:["M6.05 8.05a7.007 7.007 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 0 0 8.4 19.94c2.6 1.23 5.8.78 7.95-1.37C19.83 15.09 20 5 20 5S9.91 5.17 6.05 8.05z"]},snow:{vb:"24",d:["M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"]},warning:{vb:"24",d:["M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"]},heart:{vb:"24",d:["M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"]},heart_outline:{vb:"24",d:["M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"]},chat:{vb:"24",d:["M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"]},help:{vb:"24",d:["M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"]},new:{vb:"24",d:["M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"]},trend:{vb:"24",d:["M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"]},shield:{vb:"24",d:["M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"]},send:{vb:"24",d:["M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"]},cloud_off:{vb:"24",d:["M19.35 10.04A7.49 7.49 0 0 0 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46A5.497 5.497 0 0 1 17.5 10.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 17.16 24 15.68 24 14c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"]},scan:{vb:"24",d:["M7 3H4c-.55 0-1 .45-1 1v3h2V5h2V3zm12 0h-3v2h2v2h2V4c0-.55-.45-1-1-1zM5 17H3v3c0 .55.45 1 1 1h3v-2H5v-2zm14 2h-2v2h3c.55 0 1-.45 1-1v-3h-2v2zM7 7h10v2H7zm0 4h10v2H7zm0 4h6v2H7z"]},globe:{vb:"24",d:["M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"]}});var so="https://parseapi.back4app.com/",oo="peyCaKkG6IbflEpErk7t1iEH1fngfxgwUwv17qyI",ro="ejB6EBANvzAfnp5Mh6QOIkPtliBJBC1AVTspICfB",La="stockcasa.session",Ft="stockcasa.houseId",H={current(){try{return JSON.parse(localStorage.getItem(La))||null}catch{return null}},save(e){localStorage.setItem(La,JSON.stringify(e))},clear(){localStorage.removeItem(La),localStorage.removeItem(Ft)},token(){return this.current()?.sessionToken||null},email(){return this.current()?.email||""},requireUserId(){let e=this.current()?.userId;if(!e)throw _e.sessionExpired();return e},houseId(){return localStorage.getItem(Ft)},requireHouseId(){let e=this.houseId();if(!e)throw new bt;return e},saveHouseId(e){e?localStorage.setItem(Ft,e):localStorage.removeItem(Ft)}},_e=class e extends Error{constructor(t,a){super(a),this.code=t}get isSessionExpired(){return this.code===209}static fromServer(t,a){let s={100:"No se ha podido conectar con el servidor",101:"No se ha encontrado el elemento. Actualiza la lista",125:"El correo no es v\xE1lido",202:"Ya existe una cuenta con ese correo",203:"Ya existe una cuenta con ese correo",205:"No hay ninguna cuenta con ese correo",209:"Tu sesi\xF3n ha caducado. Vuelve a iniciar sesi\xF3n"}[t];return!s&&t===119&&(s=a?.includes("addField")?"Back4App no deja crear una columna nueva. A\xF1\xE1dela en el panel de Back4App":"Back4App no permite esta operaci\xF3n. Revisa los permisos de la clase"),new e(t,s||a||"Error inesperado del servidor")}static sessionExpired(){return e.fromServer(209)}},bt=class extends Error{constructor(){super("Todav\xEDa no tienes ninguna casa"),this.noHouse=!0}},wt=class extends Error{};function X(e,t){if(!e)throw new wt(t)}async function ot(e,t,{body:a,query:n,authenticated:s=!0,raw:o}={}){let i=new URL(t,so);n&&Object.entries(n).forEach(([d,p])=>i.searchParams.set(d,p));let r={"X-Parse-Application-Id":oo,"X-Parse-REST-API-Key":ro,"X-Parse-Revocable-Session":"1"},u=H.token();s&&u&&(r["X-Parse-Session-Token"]=u);let m;o?(m=o.data,r["Content-Type"]=o.contentType):a!==void 0&&(m=JSON.stringify(a),r["Content-Type"]="application/json");let g;try{g=await fetch(i,{method:e,headers:r,body:m})}catch{throw new _e(100,"Sin conexi\xF3n. Comprueba tu acceso a internet")}let l={},h=await g.text();try{l=h?JSON.parse(h):{}}catch{l={error:h}}if(!g.ok)throw _e.fromServer(l.code??-1,l.error||`Error HTTP ${g.status}`);return l}var A={get:(e,t)=>ot("GET",e,{query:t}),post:(e,t={},a={})=>ot("POST",e,{body:t,...a}),put:(e,t)=>ot("PUT",e,{body:t}),async delete(e){try{await ot("DELETE",e)}catch(t){if(t.code!==101)throw t}},async query(e,t,{limit:a=1e3,order:n}={}){let s={where:JSON.stringify(t),limit:String(a)};return n&&(s.order=n),(await ot("GET",`classes/${e}`,{query:s})).results||[]},uploadFile(e,t,a){return ot("POST",`files/${e}`,{raw:{data:t,contentType:a}})}},te={userPointer:e=>({__type:"Pointer",className:"_User",objectId:e}),publicAcl:()=>({"*":{read:!0,write:!0}}),fileRef:(e,t)=>({__type:"File",name:e,url:t}),date:e=>({__type:"Date",iso:`${e}T12:00:00.000Z`}),instant:e=>({__type:"Date",iso:e.toISOString()}),readDate:e=>e?.iso&&e.iso.length>=10?e.iso.slice(0,10):null,addUnique:(...e)=>({__op:"AddUnique",objects:e}),remove:(...e)=>({__op:"Remove",objects:e})};function $e(e,t=0){let a=typeof e=="number"?e:parseFloat(e);return Number.isFinite(a)?a:t}function rt(e){return typeof e=="string"&&e.trim()&&e!=="null"?e:null}var xe="uds";var Gt="\u{1F372}";var Ue=["#2D8CF0","#5B6CF0","#8E5CF0","#E0569B","#EF5A5A","#F08A2D","#1FA971","#14A3B8"];var it=[{key:"BREAKFAST",label:"Desayuno",emoji:"\u{1F373}",icon:"sun"},{key:"LUNCH",label:"Comida",emoji:"\u{1F37D}\uFE0F",icon:"restaurant"},{key:"DINNER",label:"Cena",emoji:"\u{1F319}",icon:"moon"}],Ie=[{key:"mercadona",label:"Mercadona",color:"#1C8B4B",prices:!0},{key:"dia",label:"Dia",color:"#D62B2B",prices:!0,cloud:!0},{key:"lidl",label:"Lidl",color:"#1D5BBF",prices:!1,cloud:!0},{key:"eroski",label:"Eroski",color:"#C8102E",prices:!1,cloud:!0}],Pe=e=>Ie.find(t=>t.key===e)||null,Wt=e=>Ie.find(t=>t.label.toLowerCase()===String(e||"").toLowerCase())||null,_t=[{days:null,label:"Sin caducidad"},{days:3,label:"3 d\xEDas"},{days:7,label:"1 semana"},{days:14,label:"2 semanas"},{days:30,label:"1 mes"},{days:90,label:"3 meses"},{days:180,label:"6 meses"},{days:365,label:"1 a\xF1o"}],kn=e=>_t.find(t=>t.days===e)?.label||`${e} d\xEDas`,ue=e=>Math.round(e*1e3)/1e3,V={isLow:e=>e.quantity<=e.criticalLimit,amountToBuy:e=>ue(Math.max(e.criticalLimit-e.quantity+1,1)),level:e=>Math.min(Math.max(e.quantity/Math.max(e.criticalLimit*2,1),0),1),image:e=>e.photo?.url||e.imageUrl||null,daysUntilExpiry:e=>e.expiresAt?Xe(Z(),e.expiresAt):null,expiryStatus(e){let t=V.daysUntilExpiry(e);return t===null?"NONE":t<0?"EXPIRED":t<=3?"SOON":"OK"},needsExpiryAttention:e=>["EXPIRED","SOON"].includes(V.expiryStatus(e)),withQuantity:(e,t)=>({...e,quantity:ue(Math.max(t,0))})};function Cn(e){let t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${n}`}function Be(e){let[t,a,n]=e.split("-").map(Number);return new Date(t,a-1,n)}var Z=()=>Cn(new Date);function pe(e,t){let a=Be(e);return a.setDate(a.getDate()+t),Cn(a)}function Xe(e,t){return Math.round((e&&t?Be(t)-Be(e):0)/864e5)}var Je=e=>(Be(e).getDay()+6)%7+1,kt=e=>pe(e,1-Je(e)),io=["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"],lo=["Lun","Mar","Mi\xE9","Jue","Vie","S\xE1b","Dom"],co=["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],Ke=e=>io[e-1],Sn=e=>lo[e-1],Ct=e=>e&&e[0].toUpperCase()+e.slice(1);function ve(e){let t=Be(e);return`${t.getDate()} ${co[t.getMonth()]}`}function Vt(e,t=Z()){return pe(t,(e-Je(t)+7)%7)}function lt(e){if(!(e>=1&&e<=7))return"Sin d\xEDa de compra fijo \xB7 toca para elegir uno";let t=Xe(Z(),Vt(e));return t===0?"\xA1Hoy es d\xEDa de compra!":t===1?`Ma\xF1ana (${Ke(e)}) toca compra`:`Pr\xF3xima compra: ${Ke(e)} ${ve(Vt(e))} \xB7 dentro de ${t} d\xEDas`}var uo=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}),po=new Intl.NumberFormat("es-ES",{maximumFractionDigits:2,useGrouping:!1}),ne=e=>uo.format(e||0),Q=e=>po.format(e||0);function be(e){let t=parseFloat(String(e??"").trim().replace(",","."));return Number.isFinite(t)&&t>=0?t:null}var St=e=>(e||"").split("@")[0]||e;function Ze(e){let t=String(e||"").trim().toLowerCase(),a=0;for(let n=0;n<t.length;n++)a=a*31+t.charCodeAt(n)>>>0;return a%8}function In(e){let t=String(e||"").trim().split(/\s+/).filter(Boolean);if(!t.length)return"?";let a=t[0];return a.charAt(0).toUpperCase()+(a.charAt(1)||"").toLowerCase()}var we=e=>e?.nickname?.trim()||St(e?.email||"")||"?",zn=e=>we(e).charAt(0).toUpperCase()||"?",mo=[{key:"dry",label:"Secos y despensa",icon:"pantry"},{key:"fresh",label:"Frescos",icon:"leaf"},{key:"frozen",label:"Congelados",icon:"snow"}],jt=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),ho=["congelad","ultracongel","helado","hielo","polo "],go=["fruta","verdura","hortaliza","ensalada","lechuga","tomate","patata","cebolla","zanahoria","pimiento","pepino","calabac","platano","manzana","naranja","limon","fresa","uva","pera","aguacate","ajo","carne","pollo","pavo","cerdo","ternera","cordero","hamburguesa","salchicha","chorizo","jamon","charcut","fiambre","embutido","pescado","marisco","merluza","salmon","gamba","atun fresco","leche","lacteo","yogur","queso","mantequilla","nata","huevo","kefir","postre","refrigerad","fresco","pan","panaderia","bolleria","masa","tortilla refrigerada","pizza refrigerada","hummus","gazpacho"],fo=["tomate frito","tomate triturado","pan de molde","pan rallado","pan tostado","leche en polvo","patatas fritas","atun en","conserva","lata","en polvo","chips","uht"];function $o(e,t=""){let a=`${jt(e)} ${jt(t)}`;if(ho.some(s=>a.includes(s)))return"frozen";let n=jt(t);return fo.some(s=>n.includes(s))?"dry":go.some(s=>new RegExp(`(^|[^a-z])${s}`).test(a))?"fresh":"dry"}var vo=[[["fruta","verdura","lechuga","tomate","patata","cebolla","zanahoria","pimiento","pepino","calabac","platano","manzana","naranja","limon","fresa","aguacate","ajo"],"Fruta y verdura"],[["leche","yogur","queso","mantequilla","nata","huevo"],"L\xE1cteos y huevos"],[["pollo","carne","pavo","cerdo","ternera","hamburguesa","salchicha","jamon","chorizo","fiambre"],"Carne y charcuter\xEDa"],[["pescado","merluza","salmon","gamba","marisco"],"Pescado"],[["pan","bolleria","galleta","cereal"],"Panader\xEDa y desayuno"],[["agua","refresco","zumo","cerveza","vino","cafe","cacao","infusion"],"Bebidas"],[["arroz","pasta","macarr","espagueti","lenteja","garbanzo","alubia","harina","azucar","aceite","sal","vinagre","especia","conserva","atun","tomate frito"],"Despensa"],[["congelad","helado","hielo"],"Congelados"],[["detergente","lejia","suavizante","limpia","friegasuelos","bayeta","estropajo","papel higienico","servilleta","bolsa de basura","pilas"],"Limpieza y hogar"],[["champu","gel","pasta de dientes","desodorante","compresa","cepillo","crema"],"Higiene"]];function yo(e){let t=jt(e),a=vo.find(([n])=>n.some(s=>new RegExp(`(^|[^a-z])${s}`).test(t)));return a?a[1]:"Otros"}function Mn(e){let t={dry:0,fresh:1,frozen:2},a=new Map;e.forEach(s=>{let o=s.category?.trim()||yo(s.name);a.has(o)||a.set(o,{key:o,items:[],votes:{dry:0,fresh:0,frozen:0}});let i=a.get(o);i.items.push(s),i.votes[$o(o,s.name)]++});let n=[...a.values()].map(s=>({key:s.key,items:s.items.sort((o,i)=>o.name.localeCompare(i.name,"es")),storage:Object.entries(s.votes).sort((o,i)=>i[1]-o[1]||t[o[0]]-t[i[0]])[0][0]}));return mo.map(s=>({storage:s,groups:n.filter(o=>o.storage===s.key).sort((o,i)=>(o.key==="Otros")-(i.key==="Otros")||o.key.localeCompare(i.key,"es"))})).filter(s=>s.groups.length)}var bo=3,_n=e=>{let t=e.map(a=>a.name);return t.length<=1?t.join(""):`${t.slice(0,-1).join(", ")} y ${t[t.length-1]}`};function Qt(e){let t=e.filter(r=>r.quantity>0&&r.expiresAt).map(r=>({p:r,days:V.daysUntilExpiry(r)})).filter(r=>r.days>=0&&r.days<=bo).sort((r,u)=>r.days-u.days);if(!t.length)return null;let a=t.filter(r=>r.days===0).map(r=>r.p),n=t.filter(r=>r.days===1).map(r=>r.p),s=t.length-a.length-n.length,o=r=>{let u=t.length-r;return u>0?` (y ${u===1?"otro producto caduca":`otros ${u} caducan`} pronto)`:""},i=a.length?a:n;if(i.length){let r=a.length?"hoy":"ma\xF1ana",u=i.length===1;return{level:a.length?"danger":"warning",title:u?`${i[0].name} caduca ${r}`:`${i.length} productos caducan ${r}`,message:`Tienes ${_n(i)} que ${u?"caduca":"caducan"} ${r}, haz algo con ${u?"\xE9l":"ellos"} para no desaprovechar${u?"lo":"los"}${o(i.length)}.`,products:t.map(m=>m.p)}}return{level:"warning",title:s===1?"1 producto caduca pronto":`${s} productos caducan pronto`,message:`Tienes ${s===1?"1 producto que caduca":`${s} productos que caducan`} pronto: ${_n(t.map(r=>r.p))}.`,products:t.map(r=>r.p)}}var Fe=[{key:"breakfast",label:"Desayuno"},{key:"snack",label:"Almuerzo/Merienda"},{key:"lunch",label:"Comida"},{key:"dinner",label:"Cena"}],xn=e=>Fe.find(t=>t.key===e)?.label||e;var c=wn.bind(Sa),En="stockcasa.settings",An={theme:"blue",mode:"light",style:"minimal",sounds:!0,vibration:!0,stores:["mercadona"],defaultExpiry:null,allergens:[]},It=[{key:"blue",label:"Azul",color:"#2D8CF0",soft:"#E6F2FF"},{key:"red",label:"Rojo",color:"#E5484D",soft:"#FDE8E8"},{key:"green",label:"Verde",color:"#22A06B",soft:"#E2F6EC"},{key:"pink",label:"Rosa",color:"#E8589B",soft:"#FDE7F1"},{key:"purple",label:"Morado",color:"#8B5CF6",soft:"#EEE7FF"}],qa=[{key:"system",label:"Autom\xE1tico"},{key:"light",label:"Claro"},{key:"dark",label:"Oscuro"}],Xt=[{key:"minimal",label:"Minimalista",description:"Tarjetas blancas que flotan con sombra suave"},{key:"fantasy",label:"Fantas\xEDa",description:"Burbujas de colores y un cielo de estrellitas que flotan"},{key:"paper",label:"Papel",description:"Hoja de libreta escrita a boli"},{key:"brutal",label:"Neo-Brutalismo",description:"Bordes gruesos, sombras duras y colores planos"},{key:"pixel",label:"Pixel art",description:"Como un videojuego de 8 bits: p\xEDxeles y letra retro"}],se={get(){try{return{...An,...JSON.parse(localStorage.getItem(En))}}catch{return{...An}}},set(e){let t={...se.get(),...e};try{localStorage.setItem(En,JSON.stringify(t))}catch{}return Jt(t),t}},Hn=window.matchMedia?.("(prefers-color-scheme: dark)");function Jt(e=se.get()){let t=It.find(o=>o.key===e.theme)||It[0],a=e.mode==="dark"||e.mode==="system"&&Hn?.matches,n=document.documentElement;n.dataset.theme=t.key,n.dataset.mode=a?"dark":"light";let s=Xt.some(o=>o.key===e.style)?e.style:"minimal";n.dataset.style=s,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a?s==="pixel"?"#141726":"#0E141D":s==="paper"?"#FFFDF6":s==="brutal"?"#FFF3DC":s==="pixel"?"#F3EFD9":t.soft),s==="fantasy"?Ln.start():Ln.stop()}var Ln=(()=>{let e=null,t=null,a=0,n=[],s=[],o=0,i=0,r=0,u=window.matchMedia?.("(prefers-reduced-motion: reduce)");function m(w,C,I,z){let T=document.createElement("canvas"),U=I*1.6;T.width=T.height=Math.ceil(U*2);let D=T.getContext("2d"),N=U,F=D.createRadialGradient(N,N,0,N,N,U);if(F.addColorStop(0,w),F.addColorStop(.25,`${w}88`),F.addColorStop(1,`${w}00`),D.fillStyle=F,D.beginPath(),D.arc(N,N,U,0,Math.PI*2),D.fill(),C==="star"){D.fillStyle=z,D.beginPath();let q=I,O=I*.18;D.moveTo(N,N-q),D.quadraticCurveTo(N+O,N-O,N+q,N),D.quadraticCurveTo(N+O,N+O,N,N+q),D.quadraticCurveTo(N-O,N+O,N-q,N),D.quadraticCurveTo(N-O,N-O,N,N-q),D.fill()}return T}function g(){let w=getComputedStyle(document.documentElement),C=document.documentElement.dataset.mode==="dark",I=[w.getPropertyValue("--primary").trim(),w.getPropertyValue("--primary-light").trim(),"#FFC94D",C?"#FFFFFF":"#FF9CC8"].filter(z=>/^#[0-9a-f]{6}$/i.test(z));I.length<2&&I.push("#8B5CF6","#FFC94D"),s=I.flatMap(z=>[{kind:"dot",img:m(z,"dot",C?3:3.6)},{kind:"star",img:m(z,"star",C?7:8,C?"#FFFFFF":z)}])}function l(w){s.length||g();let C=s[Math.floor(Math.random()*s.length)],I=C.kind==="star";return{sprite:C,x:Math.random()*i,y:w?Math.random()*r:r+20,speed:I?7+Math.random()*9:10+Math.random()*16,sway:6+Math.random()*18,swaySpeed:.2+Math.random()*.5,phase:Math.random()*Math.PI*2,twinkle:.6+Math.random()*1.6,scale:I?.45+Math.random()*.75:.5+Math.random()*.9,spin:I?(Math.random()-.5)*.6:0,angle:Math.random()*Math.PI,alpha:I?.6+Math.random()*.4:.4+Math.random()*.45}}function h(){if(!e)return;let w=Math.min(window.devicePixelRatio||1,2);i=innerWidth,r=innerHeight,e.width=Math.round(i*w),e.height=Math.round(r*w),t.setTransform(w,0,0,w,0,0);let C=Math.round(Math.min(70,Math.max(28,i*r/11e3)));n=Array.from({length:C},()=>l(!0)),d(performance.now(),0)}function d(w,C){let I=w/1e3;t.clearRect(0,0,i,r),n.forEach((z,T)=>{z.y-=z.speed*C,z.angle+=z.spin*C,z.y<-30&&(n[T]=l(!1));let U=z.x+Math.sin(I*z.swaySpeed+z.phase)*z.sway,D=z.sprite.img,N=D.width*z.scale;t.globalAlpha=z.alpha*(.55+.45*Math.sin(I*z.twinkle+z.phase)),z.spin?(t.save(),t.translate(U,z.y),t.rotate(z.angle),t.drawImage(D,-N/2,-N/2,N,N),t.restore()):t.drawImage(D,U-N/2,z.y-N/2,N,N)}),t.globalAlpha=1}function p(w){let C=Math.min((w-o)/1e3,.05);o=w,d(w,C),a=requestAnimationFrame(p)}function v(){cancelAnimationFrame(a),!(!e||document.hidden||u?.matches)&&(o=performance.now(),a=requestAnimationFrame(p))}return document.addEventListener("visibilitychange",()=>document.hidden?cancelAnimationFrame(a):v()),window.addEventListener("resize",()=>e&&h()),{start(){e||(e=document.createElement("canvas"),e.className="sky",e.setAttribute("aria-hidden","true"),document.body.prepend(e),t=e.getContext("2d")),requestAnimationFrame(()=>{g(),h(),v()})},stop(){cancelAnimationFrame(a),e?.remove(),e=null}}})();Hn?.addEventListener?.("change",()=>Jt());var Dn={tap:.3,pop:.6,up:.45,down:.45,check:.55,swipe:.5,success:.6,error:.5},wo={tap:8,pop:15,up:6,down:6,check:[10,40,18],swipe:15,success:[12,50,25],error:[30,60,30]},Yt=null,On={};function Rn(){if(!Yt){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;Yt=new e,Object.keys(Dn).forEach(async t=>{try{let a=await(await fetch(`sounds/sfx_${t}.wav`)).arrayBuffer();On[t]=await Yt.decodeAudioData(a)}catch{}})}return Yt}document.addEventListener("pointerdown",()=>Rn()?.resume?.(),{capture:!0});function x(e){let{sounds:t,vibration:a}=se.get();if(t){let n=Rn(),s=On[e];if(n&&s){let o=n.createBufferSource(),i=n.createGain();i.gain.value=Dn[e]??.5,o.buffer=s,o.connect(i).connect(n.destination),o.start()}}a&&navigator.vibrate&&navigator.vibrate(wo[e]??10)}function f({name:e,size:t=22,class:a=""}){let n=Aa[e];return n?c`<svg class=${`icon ${a}`} width=${t} height=${t} viewBox=${`0 0 ${n.vb} ${n.vb}`} aria-hidden="true">
    ${n.d.map(s=>c`<path d=${s} fill="currentColor" fill-rule=${n.rule||"nonzero"} />`)}
  </svg>`:null}function tt({profile:e,size:t=40}){let a=`width:${t}px;height:${t}px;font-size:${Math.round(t*.42)}px;background:${e?.avatarColor||"#2D8CF0"}`;return c`<span class="avatar" style=${a} title=${we(e)}>
    ${e?.avatar?.url?c`<img src=${e.avatar.url} alt="" loading="lazy" />`:zn(e)}
  </span>`}function ie({url:e,name:t="",size:a=52,icon:n}){let[s,o]=S(!1);W(()=>o(!1),[e]);let i=e&&!s;return c`<span class=${`thumb ${i?"":`mono tone-${Ze(t)}`}`} style=${`width:${a}px;height:${a}px;font-size:${Math.round(a*.36)}px`}>
    ${i?c`<img src=${e} alt="" loading="lazy" onError=${()=>o(!0)} />`:n?c`<${f} name=${n} size=${Math.round(a*.46)} />`:In(t)}
  </span>`}var Pn={pantry:c`<g><rect x="22" y="70" width="76" height="6" rx="3" class="art-line" /><rect x="30" y="34" width="22" height="36" rx="6" class="art-fill" /><rect x="33" y="28" width="16" height="7" rx="2" class="art-line" /><rect x="58" y="44" width="16" height="26" rx="5" class="art-soft" /><circle cx="86" cy="60" r="10" class="art-fill2" /><path d="M86 50c2-5 6-6 8-6" class="art-stroke" /></g>`,cart:c`<g><path d="M18 26h12l10 38h46l8-28H36" class="art-stroke" /><circle cx="46" cy="76" r="6" class="art-fill" /><circle cx="80" cy="76" r="6" class="art-fill" /><path d="M52 44l8 8 16-16" class="art-stroke accent" /></g>`,recipes:c`<g><path d="M26 48h68v10a22 22 0 0 1-22 22H48a22 22 0 0 1-22-22z" class="art-fill" /><rect x="20" y="44" width="80" height="8" rx="4" class="art-line" /><path d="M48 34c0-6 6-6 6-12M62 34c0-6 6-6 6-12" class="art-stroke accent" /></g>`,search:c`<g><circle cx="54" cy="46" r="20" class="art-soft" /><circle cx="54" cy="46" r="20" class="art-stroke" /><path d="M69 61l16 16" class="art-stroke thick" /></g>`,done:c`<g><circle cx="60" cy="50" r="28" class="art-fill" /><path d="M47 51l9 9 18-19" class="art-stroke white thick" /><path d="M24 22l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM96 66l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" class="art-spark" /></g>`,receipt:c`<g><path d="M36 18h48v66l-8-5-8 5-8-5-8 5-8-5-8 5z" class="art-soft" /><path d="M36 18h48v66l-8-5-8 5-8-5-8 5-8-5-8 5z" class="art-stroke" /><path d="M46 36h28M46 48h28M46 60h16" class="art-stroke accent" /></g>`};function Ce({name:e}){return c`<svg class="empty-art" viewBox="0 0 120 96" aria-hidden="true">${Pn[e]||Pn.search}</svg>`}var et=null,qn=null;function B(e,t){et||(et=document.createElement("div"),et.className="toast-host",document.body.appendChild(et)),clearTimeout(qn),Qe(c`<div class="toast" key=${Date.now()}>
    <span>${e}</span>
    ${t&&c`<button class="toast-action" onClick=${()=>{Qe(null,et),t.run()}}>${t.label}</button>`}
  </div>`,et),qn=setTimeout(()=>Qe(null,et),t?4500:2600)}var Bn=null;function Un(e){Bn=e}function ge(e){if((e?.noHouse||e instanceof _e&&e.isSessionExpired)&&(Bn?.(e),e.noHouse))return;x("error");let t=e instanceof _e||e instanceof wt;t||console.error(e),B(t?e.message:"Ha ocurrido un error inesperado. Int\xE9ntalo de nuevo")}async function R(e,{loading:t=!0,onError:a=ge}={}){t&&Tn.show();try{return await e()}catch(n){a(n);return}finally{t&&Tn.hide()}}var Tn={count:0,el:null,show(){this.count++,this.el||(this.el=document.createElement("div"),this.el.className="loading",this.el.innerHTML='<div class="spinner"></div>',document.body.appendChild(this.el)),clearTimeout(this.timer),this.timer=setTimeout(()=>this.el.classList.add("visible"),180)},hide(){this.count=Math.max(0,this.count-1),this.count===0&&this.el&&(clearTimeout(this.timer),this.el.classList.remove("visible"))}},Kt=null,ct=[];function Fn(){Kt||(Kt=document.createElement("div"),document.body.appendChild(Kt)),Qe(c`${ct.map(e=>c`<${_o} key=${e.id} layer=${e} />`)}`,Kt),document.body.classList.toggle("has-layer",ct.length>0)}function _o({layer:e}){let[t,a]=S(!1);e.setClosing=a;let n=e.component;return c`<div class=${`layer ${e.kind} ${t?"closing":""}`}>
    <div class="scrim" onClick=${()=>e.dismissible&&Nn(e)}></div>
    <div class="panel" role="dialog" aria-modal="true">
      ${e.kind==="sheet"&&c`<div class="handle"></div>`}
      <${n} ...${e.props} close=${s=>Nn(e,s)} />
    </div>
  </div>`}var ko=1;function Zt(e,t,a={},n=!0){return new Promise(s=>{let o={id:ko++,kind:e,component:t,props:a,dismissible:n,resolve:s};ct.push(o),Fn()})}function Nn(e,t){ct.includes(e)&&(e.setClosing?.(!0),setTimeout(()=>{let a=ct.indexOf(e);a>=0&&ct.splice(a,1),Fn(),e.resolve(t)},220))}var G=(e,t)=>Zt("sheet",e,t);function Co({title:e,message:t,confirm:a="Aceptar",cancel:n="Cancelar",danger:s,close:o}){return c`<div class="dialog-body">
    <h2>${e}</h2>
    ${t&&c`<p class="muted pre">${t}</p>`}
    <div class="dialog-actions">
      ${n&&c`<button class="btn text" onClick=${()=>o(!1)}>${n}</button>`}
      <button class=${`btn ${s?"danger":"primary"}`} onClick=${()=>o(!0)}>${a}</button>
    </div>
  </div>`}var ye=e=>Zt("dialog",Co,e);function So({title:e,message:t,label:a,value:n="",type:s="text",inputMode:o,confirm:i="Guardar",suffix:r,maxLength:u,close:m}){let[g,l]=S(String(n)),h=Y();return W(()=>{setTimeout(()=>{h.current?.focus(),h.current?.select()},250)},[]),c`<form class="dialog-body" onSubmit=${p=>{p.preventDefault(),m(g)}}>
    <h2>${e}</h2>
    ${t&&c`<p class="muted">${t}</p>`}
    <label class="field">
      <span>${a}</span>
      <div class="field-row">
        <input ref=${h} type=${s} inputmode=${o} value=${g} maxlength=${u}
          onInput=${p=>l(p.target.value)} />
        ${r&&c`<span class="suffix">${r}</span>`}
      </div>
    </label>
    <div class="dialog-actions">
      <button type="button" class="btn text" onClick=${()=>m(null)}>Cancelar</button>
      <button type="submit" class="btn primary">${i}</button>
    </div>
  </form>`}var le=e=>Zt("dialog",So,e);function Io({title:e,options:t,close:a}){return c`<div class="dialog-body">
    <h2>${e}</h2>
    <div class="choices">
      ${t.map((n,s)=>c`<button class=${`choice ${n.danger?"danger-text":""}`} onClick=${()=>a(s)}>
        ${n.icon&&c`<span class="choice-icon"><${f} name=${n.icon} size=${20} /></span>`}
        <span class="grow min0">${n.label}${n.hint&&c`<span class="muted small block">${n.hint}</span>`}</span>
      </button>`)}
    </div>
    <div class="dialog-actions"><button class="btn text" onClick=${()=>a(null)}>Cancelar</button></div>
  </div>`}var qe=(e,t)=>Zt("dialog",Io,{title:e,options:t});function ut(){let e=document.createElement("canvas");e.className="confetti",document.body.appendChild(e);let t=e.getContext("2d"),a=window.devicePixelRatio||1;e.width=innerWidth*a,e.height=innerHeight*a,t.scale(a,a);let n=[getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#2D8CF0","#7CC0FF","#FFC94D","#FF7A90","#38D39F"],s=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.35,vx:(Math.random()-.5)*13,vy:-Math.random()*14-4,size:5+Math.random()*6,rotation:Math.random()*Math.PI,spin:(Math.random()-.5)*.3,color:n[Math.floor(Math.random()*n.length)],star:document.documentElement.dataset.style==="fantasy"&&Math.random()<.4})),o=performance.now();(function i(r){let u=r-o;t.clearRect(0,0,innerWidth,innerHeight),s.forEach(m=>{if(m.vy+=.35,m.vx*=.99,m.x+=m.vx,m.y+=m.vy,m.rotation+=m.spin,t.save(),t.globalAlpha=Math.max(0,1-u/2600),t.translate(m.x,m.y),t.rotate(m.rotation),t.fillStyle=m.color,m.star){let g=m.size*1.3,l=g*.22;t.beginPath(),t.moveTo(0,-g),t.quadraticCurveTo(l,-l,g,0),t.quadraticCurveTo(l,l,0,g),t.quadraticCurveTo(-l,l,-g,0),t.quadraticCurveTo(-l,-l,0,-g),t.fill()}else t.fillRect(-m.size/2,-m.size/3,m.size,m.size*.66);t.restore()}),u<2600?requestAnimationFrame(i):e.remove()})(o)}function Te(e){e?.animate?.([{transform:"scale(1)"},{transform:"scale(1.25)"},{transform:"scale(1)"}],{duration:320,easing:"cubic-bezier(.3,1.6,.5,1)"})}function jn(e){e?.animate?.([0,-10,10,-7,7,-3,0].map(t=>({transform:`translateX(${t}px)`})),{duration:420})}async function dt(e,t=1080){let n=await createImageBitmap(e,{imageOrientation:"from-image"}).catch(()=>null)||await new Promise((u,m)=>{let g=new Image;g.onload=()=>u(g),g.onerror=m,g.src=URL.createObjectURL(e)}),s=n.width,o=n.height,i=Math.min(1,t/Math.max(s,o)),r=document.createElement("canvas");return r.width=Math.round(s*i),r.height=Math.round(o*i),r.getContext("2d").drawImage(n,0,0,r.width,r.height),new Promise(u=>r.toBlob(u,"image/jpeg",.82))}function pt({onDelete:e,label:t="Eliminar",children:a,class:n="",style:s}){let o=Y(),i=Y(),r=Y(null),u=Y(!1),m=(d,p)=>{let v=i.current;if(!v)return;v.style.transition=p?"transform .28s cubic-bezier(.2,.8,.2,1)":"none",v.style.transform=d?`translateX(${d}px)`:"",o.current.dataset.side=d>0?"right":d<0?"left":"";let w=Math.min(Math.abs(d)/(o.current.offsetWidth*.4),1);o.current.style.setProperty("--swipe",w.toFixed(3))},g=d=>{d.button>0||(r.current={x:d.clientX,y:d.clientY,t:performance.now(),dx:0,active:!1,id:d.pointerId})},l=d=>{let p=r.current;if(!p||p.id!==d.pointerId)return;let v=d.clientX-p.x,w=d.clientY-p.y;if(!p.active){if(Math.abs(w)>10&&Math.abs(w)>Math.abs(v)){r.current=null;return}if(Math.abs(v)<12)return;p.active=!0,o.current.setPointerCapture?.(d.pointerId),o.current.dispatchEvent(new CustomEvent("swipestart",{bubbles:!1}))}p.dx=v,m(v,!1)},h=d=>{let p=r.current;if(r.current=null,!p||!p.active)return;if(d.type==="pointercancel"){m(0,!0);return}u.current=!0,setTimeout(()=>u.current=!1,50);let v=o.current.offsetWidth,w=Math.abs(p.dx)/Math.max(performance.now()-p.t,1);Math.abs(p.dx)>v*.4||w>.6&&Math.abs(p.dx)>60?(x("swipe"),m(Math.sign(p.dx)*v*1.1,!0),o.current.classList.add("collapsing"),setTimeout(()=>e(),260)):m(0,!0)};return c`<div ref=${o} class=${`swipe ${n}`} style=${s}
    onPointerDown=${g} onPointerMove=${l} onPointerUp=${h} onPointerCancel=${h}
    onClickCapture=${d=>{u.current&&(d.stopPropagation(),d.preventDefault())}}>
    <div class="swipe-bg" aria-hidden="true">
      <span class="swipe-label left"><${f} name="delete" size=${20} /> ${t}</span>
      <span class="swipe-label right">${t} <${f} name="delete" size=${20} /></span>
    </div>
    <div ref=${i} class="swipe-content">${a}</div>
  </div>`}var Pa=new Set,K={emit:e=>Pa.forEach(t=>t(e)),on(e){return Pa.add(e),()=>Pa.delete(e)}};function Ee(e){let t=Y(e);t.current=e,W(()=>K.on(a=>t.current(a)),[])}var zo=e=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(e.replace(/ /g,"_"))}?width=800`,Mo=e=>`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(e.replace(/ /g,"_"))}`,L=(e,t,a,...n)=>({name:e,quantity:t,unit:a,keywords:n.length?n:[e.toLowerCase()]}),xo=[{id:"tortilla",name:"Tortilla de patatas",meal:"Comida",minutes:40,servings:4,file:"Tortilla de patata - San Sebasti\xE1n.jpg",ingredients:[L("Huevos",6,"uds","huevo"),L("Patatas",.7,"kg","patata"),L("Cebolla",1,"uds","cebolla"),L("Aceite de oliva",.2,"L","aceite"),L("Sal",1,"pizca","sal")],steps:["Pela las patatas y la cebolla. Corta las patatas en l\xE1minas finas y la cebolla en juliana.","Pocha las patatas y la cebolla en abundante aceite a fuego medio-bajo unos 20 minutos, sin que se doren.","Esc\xFArrelas bien y guarda el aceite para otra vez.","Bate los huevos con sal, mezcla con las patatas y deja reposar 5 minutos.","Cuaja la mezcla en una sart\xE9n con un poco de aceite, 3 minutos por cada lado. Ay\xFAdate de un plato para darle la vuelta."]},{id:"macarrones",name:"Macarrones con tomate",meal:"Comida",minutes:25,servings:4,file:"Macarrones con salsa de tomate frito (Espa\xF1a).jpg",ingredients:[L("Macarrones",400,"g","macarr","pasta"),L("Tomate frito",400,"g","tomate frito"),L("Cebolla",1,"uds","cebolla"),L("Chorizo",100,"g","chorizo"),L("Queso rallado",80,"g","queso rallado","rallado")],steps:["Cuece los macarrones en agua con sal el tiempo que diga el paquete.","Mientras, sofr\xEDe la cebolla picada y el chorizo en dados durante 5 minutos.","A\xF1ade el tomate frito y deja que se haga a fuego suave 5 minutos m\xE1s.","Escurre la pasta, m\xE9zclala con la salsa y sirve con el queso rallado por encima."]},{id:"lentejas",name:"Lentejas estofadas",meal:"Comida",minutes:60,servings:4,file:"Lentejas estilo de la abuela.jpg",ingredients:[L("Lentejas",400,"g","lenteja"),L("Chorizo",150,"g","chorizo"),L("Zanahoria",2,"uds","zanahoria"),L("Patatas",.3,"kg","patata"),L("Cebolla",1,"uds","cebolla"),L("Piment\xF3n",1,"cucharadita","piment\xF3n","pimenton")],steps:["Pon las lentejas en remojo 1 hora si no son de cocci\xF3n r\xE1pida.","Sofr\xEDe la cebolla y la zanahoria picadas. A\xF1ade el chorizo en rodajas y el piment\xF3n.","Echa las lentejas escurridas y cubre con agua fr\xEDa.","Cuando hierva, baja el fuego y cuece 30 minutos.","A\xF1ade la patata cascada y cuece 15 minutos m\xE1s. Prueba de sal y deja reposar 5 minutos."]},{id:"gazpacho",name:"Gazpacho",meal:"Comida",minutes:15,servings:4,file:"Gazpacho Cazuela Barro.jpg",ingredients:[L("Tomates maduros",1,"kg","tomate"),L("Pepino",1,"uds","pepino"),L("Pimiento verde",1,"uds","pimiento"),L("Ajo",1,"diente","ajo"),L("Aceite de oliva",.08,"L","aceite"),L("Vinagre",2,"cucharadas","vinagre"),L("Pan del d\xEDa anterior",50,"g","pan")],steps:["Lava y trocea los tomates, el pepino pelado, el pimiento y el ajo.","Tritura todo con el pan remojado, el vinagre y sal hasta que quede fino.","A\xF1ade el aceite poco a poco mientras sigues triturando para que emulsione.","Cuela si lo quieres m\xE1s fino y enfr\xEDalo en la nevera al menos 1 hora."]},{id:"pollo-horno",name:"Pollo al horno con patatas",meal:"Comida",minutes:75,servings:4,file:"Roasted chicken and potatoes.JPG",ingredients:[L("Pollo troceado",1.2,"kg","pollo"),L("Patatas",.8,"kg","patata"),L("Cebolla",1,"uds","cebolla"),L("Lim\xF3n",1,"uds","lim\xF3n","limon"),L("Ajo",4,"dientes","ajo"),L("Aceite de oliva",.05,"L","aceite")],steps:["Precalienta el horno a 200 \xB0C.","Corta las patatas en rodajas gruesas y la cebolla en tiras. Ponlas en la bandeja con sal y un chorro de aceite.","Coloca el pollo encima con sal, pimienta, los ajos machacados y el zumo del lim\xF3n.","Hornea 60 minutos, dando la vuelta al pollo a mitad de tiempo y reg\xE1ndolo con su jugo."]},{id:"arroz-cubana",name:"Arroz a la cubana",meal:"Comida",minutes:25,servings:2,file:"Arroz a la cubana.jpg",ingredients:[L("Arroz",200,"g","arroz"),L("Huevos",2,"uds","huevo"),L("Tomate frito",200,"g","tomate frito"),L("Pl\xE1tano",2,"uds","pl\xE1tano","platano"),L("Aceite de oliva",.1,"L","aceite")],steps:["Cuece el arroz en agua con sal unos 18 minutos y esc\xFArrelo.","Calienta el tomate frito.","Fr\xEDe los pl\xE1tanos partidos a lo largo y despu\xE9s los huevos.","Sirve el arroz con un molde o una taza, con el tomate, el huevo y el pl\xE1tano al lado."]},{id:"crema-calabacin",name:"Crema de calabac\xEDn",meal:"Cena",minutes:30,servings:4,file:"Crema de calabac\xEDn con tropezones.jpg",ingredients:[L("Calabacines",3,"uds","calabac"),L("Patata",1,"uds","patata"),L("Cebolla",1,"uds","cebolla"),L("Quesitos",4,"uds","quesito"),L("Aceite de oliva",.03,"L","aceite")],steps:["Pocha la cebolla picada en una olla con un poco de aceite.","A\xF1ade el calabac\xEDn y la patata troceados, cubre justo con agua y sal.","Cuece 20 minutos a fuego medio.","Tritura con los quesitos hasta que quede una crema fina. Corrige de sal."]},{id:"ensalada",name:"Ensalada mixta",meal:"Cena",minutes:15,servings:2,file:"Ensalada mixta.jpg",ingredients:[L("Lechuga",1,"uds","lechuga"),L("Tomates",2,"uds","tomate"),L("At\xFAn",2,"latas","at\xFAn","atun"),L("Huevos",2,"uds","huevo"),L("Cebolla",.5,"uds","cebolla"),L("Aceite de oliva",.03,"L","aceite")],steps:["Cuece los huevos 10 minutos, enfr\xEDalos y p\xE9lalos.","Lava y corta la lechuga, los tomates en gajos y la cebolla en aros finos.","Monta la ensalada y a\xF1ade el at\xFAn escurrido y los huevos en cuartos.","Ali\xF1a con aceite, vinagre y sal justo antes de servir."]},{id:"huevos-rotos",name:"Huevos rotos con jam\xF3n",meal:"Cena",minutes:30,servings:2,file:"Huevos rotos con jam\xF3n.jpg",ingredients:[L("Patatas",.5,"kg","patata"),L("Huevos",4,"uds","huevo"),L("Jam\xF3n serrano",100,"g","jam\xF3n","jamon"),L("Aceite de oliva",.3,"L","aceite")],steps:["Corta las patatas en bastones y fr\xEDelas en aceite abundante hasta que est\xE9n doradas.","Esc\xFArrelas, ponlas en una fuente y s\xE1lalas.","Fr\xEDe los huevos dejando la yema l\xEDquida.","Pon los huevos y el jam\xF3n sobre las patatas y r\xF3mpelos en la mesa."]},{id:"carbonara",name:"Espaguetis a la carbonara",meal:"Comida",minutes:20,servings:2,file:"Espaguetis carbonara.jpg",ingredients:[L("Espaguetis",200,"g","espagueti","spaghetti","pasta"),L("Bacon",100,"g","bacon","panceta"),L("Huevos",2,"uds","huevo"),L("Queso parmesano",50,"g","parmesano","queso")],steps:["Cuece la pasta en agua con sal.","Dora el bacon en tiras en una sart\xE9n sin aceite.","Bate los huevos con el queso rallado y pimienta.","Escurre la pasta (guarda un poco de agua) y m\xE9zclala fuera del fuego con el bacon y el huevo, a\xF1adiendo agua de cocci\xF3n hasta que quede cremosa."]},{id:"pan-tomate",name:"Tostadas con tomate",meal:"Desayuno",minutes:10,servings:2,file:"Pan tostado con tomate de colgar, aceite de oliva y sal.jpg",ingredients:[L("Pan",4,"rebanadas","pan"),L("Tomate",2,"uds","tomate"),L("Aceite de oliva",.02,"L","aceite")],steps:["Tuesta el pan.","Ralla los tomates y desecha la piel.","Unta el tomate sobre el pan, a\xF1ade un chorrito de aceite y una pizca de sal."]},{id:"yogur-muesli",name:"Yogur con muesli y pl\xE1tano",meal:"Desayuno",minutes:5,servings:1,file:"Muesli.jpg",ingredients:[L("Yogur natural",2,"uds","yogur"),L("Muesli",40,"g","muesli","cereal","avena"),L("Pl\xE1tano",1,"uds","pl\xE1tano","platano")],steps:["Pon el yogur en un bol.","A\xF1ade el muesli por encima.","Corta el pl\xE1tano en rodajas y rep\xE1rtelo por el bol."]},{id:"pisto",name:"Pisto",meal:"Cena",minutes:45,servings:4,file:"Pisto manchego.jpg",ingredients:[L("Calabac\xEDn",1,"uds","calabac"),L("Pimiento rojo",1,"uds","pimiento"),L("Pimiento verde",1,"uds","pimiento"),L("Cebolla",1,"uds","cebolla"),L("Tomate triturado",400,"g","tomate triturado","tomate"),L("Aceite de oliva",.05,"L","aceite")],steps:["Pica la cebolla y los pimientos en dados y p\xF3chalos a fuego suave 15 minutos.","A\xF1ade el calabac\xEDn en dados y cocina 10 minutos m\xE1s.","Echa el tomate triturado, sal y una pizca de az\xFAcar.","Deja que se haga 15 minutos removiendo de vez en cuando. Est\xE1 muy rico con un huevo frito."]},{id:"merluza-verde",name:"Merluza en salsa verde",meal:"Cena",minutes:25,servings:4,file:"Merluza (salsa verde).jpg",ingredients:[L("Merluza en rodajas",.8,"kg","merluza"),L("Ajo",3,"dientes","ajo"),L("Perejil",1,"manojo","perejil"),L("Harina",1,"cucharada","harina"),L("Aceite de oliva",.06,"L","aceite")],steps:["Dora los ajos picados en una cazuela con el aceite, sin que se quemen.","A\xF1ade la harina, remueve 1 minuto y vierte un vaso de agua o caldo de pescado.","Coloca la merluza salada y mueve la cazuela en vaiv\xE9n para que la salsa ligue.","Cuece 5 minutos por cada lado y termina con mucho perejil picado."]}],ea=xo.map(e=>({...e,photoUrl:zo(e.file),photoSource:Mo(e.file)})),Eo={uds:"uds",ud:"uds",unidad:"uds",unidades:"uds",u:"uds",g:"g",gr:"g",gramos:"g",kg:"kg",kilo:"kg",kilos:"kg",l:"L",litro:"L",litros:"L",ml:"ml"},Vn=e=>Eo[String(e||"").trim().toLowerCase()]||String(e||"").trim().toLowerCase();function at(e,t,a){let n=Vn(t),s=Vn(a);return n===s?e:n==="g"&&s==="kg"?e/1e3:n==="kg"&&s==="g"?e*1e3:n==="ml"&&s==="L"?e/1e3:n==="L"&&s==="ml"?e*1e3:null}var Gn=["frito","frita","triturado","rallado","rallada","salsa","zumo","polvo","concentrado","mermelada","caldo","sopa","crema","helado","chips"],mt=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");function Ta(e,t){let a=e.keywords.map(mt),n=mt(e.name),s=t.filter(o=>{let i=mt(o.name).split(/[^a-z0-9ñ]+/).filter(Boolean),r=i.join(" ");return Gn.some(u=>i.includes(u)&&!n.includes(u))?!1:a.some(u=>u.includes(" ")?` ${r} `.includes(` ${u}`):i.some(m=>m.startsWith(u)&&(u.length>=4||m.length<=u.length+1)))});return s.find(o=>at(e.quantity,e.unit,o.unit)!==null)||s[0]||null}var Ao=["de","del","la","el","los","las","con","sin","y","en","a","al","para","un","una"];function Lo(e){let t=mt(e),a=t.replace(/(es|s)$/,"");return a.length>=3?a:t}function ta(e,t){let a=mt(e.name),n=a.split(/[^a-z0-9ñ]+/).filter(s=>s.length>=2&&!Ao.includes(s)).map(Lo);return n.length?t.filter(s=>{let o=mt(s.name).split(/[^a-z0-9ñ]+/).filter(Boolean);return Gn.some(i=>o.includes(i)&&!a.includes(i))?!1:n.every(i=>o.some(r=>r.startsWith(i)&&(i.length>=4||r.length<=i.length+2)))}).sort((s,o)=>{let i=at(e.quantity,e.unit,s.unit)!==null?0:1,r=at(e.quantity,e.unit,o.unit)!==null?0:1;return(o.quantity>0)-(s.quantity>0)||i-r||s.name.length-o.name.length}):[]}var nt=[{key:"gluten",label:"Gluten",off:["en:gluten"],words:["pan","harina","pasta","macarr","espagueti","fideo","galleta","cereal","trigo","cebada","centeno","avena","cerveza","bizcocho","magdalena","croissant","pizza","empanad","rebozad","empanado","cuscus","seitan","bolleria","tostada","lasana","canelon","masa"],free:["sin gluten","gluten free"]},{key:"milk",label:"Lactosa / leche",off:["en:milk"],words:["leche","lacteo","queso","yogur","nata","mantequilla","kefir","batido","flan","natillas","cuajada","helado","bechamel","mozzarella","parmesano","requeson"],free:["sin lactosa","vegetal","de avena","de soja","de almendra","de coco","de arroz"]},{key:"eggs",label:"Huevo",off:["en:eggs"],words:["huevo","tortilla","mayonesa","merengue","flan","bizcocho","magdalena"],free:["sin huevo"]},{key:"fish",label:"Pescado",off:["en:fish"],words:["pescado","atun","merluza","salmon","bacalao","sardina","anchoa","boqueron","lubina","dorada","surimi","caballa","bonito"],free:[]},{key:"crustaceans",label:"Crust\xE1ceos",off:["en:crustaceans"],words:["gamba","langostino","cigala","cangrejo","bogavante","marisco","carabinero"],free:[]},{key:"molluscs",label:"Moluscos",off:["en:molluscs"],words:["mejillon","almeja","calamar","sepia","pulpo","berberecho","chipiron","navaja","ostra","marisco"],free:[]},{key:"peanuts",label:"Cacahuete",off:["en:peanuts"],words:["cacahuete","mani"],free:[]},{key:"nuts",label:"Frutos de c\xE1scara",off:["en:nuts"],words:["almendra","nuez","nueces","avellana","anacardo","pistacho","pinon","macadamia","turron","frutos secos","nocilla","praline"],free:[]},{key:"soy",label:"Soja",off:["en:soybeans"],words:["soja","tofu","edamame","tempeh","miso"],free:[]},{key:"sesame",label:"S\xE9samo",off:["en:sesame-seeds"],words:["sesamo","tahini","hummus"],free:[]},{key:"celery",label:"Apio",off:["en:celery"],words:["apio"],free:[]},{key:"mustard",label:"Mostaza",off:["en:mustard"],words:["mostaza"],free:[]},{key:"sulphites",label:"Sulfitos",off:["en:sulphur-dioxide-and-sulphites"],words:["vino","vinagre","sidra","cava"],free:[]},{key:"lupin",label:"Altramuces",off:["en:lupin"],words:["altramuz","altramuces"],free:[]}],Po=e=>nt.find(t=>t.key===e)||null,Wn=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),qo=(e,t)=>new RegExp(t.length<=4?`(^|[^a-z])${t}(e?s)?([^a-z]|$)`:`(^|[^a-z])${t}`).test(e),To=["dientes","champu","detergente","suavizante","lejia","jabon","gel de","crema de manos","colonia","pienso","mascota"];function zt(e,t=""){let a=Wn(e),n=Wn(t);if(To.some(i=>`${a} ${n}`.includes(i)))return[];let s=i=>nt.filter(r=>!r.free.some(u=>a.includes(u))&&r.words.some(u=>qo(i,u))).map(r=>r.key),o=s(a);return o.length||!n||/\sy\s|,/.test(n)?o:s(n)}var Qn=(e=[])=>nt.filter(t=>t.off.some(a=>e.includes(a))).map(t=>t.key);function Mt(e){return Array.isArray(e?.allergens)&&e.allergens.length?e.allergens.filter(t=>t!=="none"):zt(e?.name,e?.category)}var je=(e,t)=>t?.length?e.filter(a=>t.includes(a)):[],Ae=e=>e.map(t=>Po(t)?.label||t);function xt(e){if(e.product)return Mt(e.product);let t=e.ingredient?.option,a=zt(e.ingredient?.name||"");return t?[...new Set([...a,...zt(t.name,t.category)])]:a}var na=28;function aa(e){return String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\b\d+([.,]\d+)?\s*(kg|g|gr|l|ml|cl|uds?|u|x)\b/g," ").replace(/[^a-z0-9ñ ]/g," ").replace(/\s+/g," ").trim()}var No=e=>{let t=[...e].sort((a,n)=>a-n);return t.length?t[Math.floor(t.length/2)]:0};function Yn({tickets:e,consumed:t=new Map,prods:a=[],pending:n=[],today:s}){let o=new Map;e.forEach(l=>l.items.forEach(h=>{let d=aa(h.name);if(!d)return;o.has(d)||o.set(d,{key:d,name:h.name,unit:h.unit,buys:[]}),o.get(d).buys.push({date:l.date,quantity:h.quantity,cost:h.price!=null?h.price*h.quantity:null})}));let i=new Map(a.map(l=>[aa(l.name),l])),r=new Set(n.map(l=>l.productId).filter(Boolean)),u=new Set(n.map(l=>aa(l.name))),m=[...o.values()].map(l=>{let h=[...new Set(l.buys.map(C=>C.date))].sort(),d=h.slice(1).map((C,I)=>Xe(h[I],C)).filter(C=>C>0),p=i.get(l.key)||null,v=p?(t.get(p.id)||0)/na:0,w=h[h.length-1];return{key:l.key,name:p?.name||l.name,unit:p?.unit||l.unit,times:h.length,dates:h,lastDate:w,daysSince:Xe(w,s),every:d.length?Math.max(1,Math.round(d.reduce((C,I)=>C+I,0)/d.length)):null,typical:ue(No(l.buys.map(C=>C.quantity))||1),spent:l.buys.reduce((C,I)=>C+(I.cost||0),0),product:p,rate:v,daysLeft:p&&v>0?Math.floor(p.quantity/v):null}}).sort((l,h)=>h.times-l.times||h.spent-l.spent||l.name.localeCompare(h.name,"es"));a.forEach(l=>{let h=aa(l.name);if(o.has(h))return;let d=(t.get(l.id)||0)/na;d<=0||m.push({key:h,name:l.name,unit:l.unit,times:0,dates:[],lastDate:null,daysSince:null,every:null,typical:V.amountToBuy(l),spent:0,product:l,rate:d,daysLeft:Math.floor(l.quantity/d)})});let g=[];return m.forEach(l=>{let h=l.product;if(h?V.isLow(h)||r.has(h.id):u.has(l.key))return;let d=null,p=0;l.daysLeft!==null&&l.daysLeft<=4?(d=l.daysLeft<=0?"Se acaba hoy a este ritmo":l.daysLeft===1?"Se acabar\xE1 ma\xF1ana a este ritmo":`Se acabar\xE1 en unos ${l.daysLeft} d\xEDas`,p=10-l.daysLeft):l.every&&l.times>=2&&l.daysSince>=l.every-1&&(d=`Sueles comprarlo cada ${l.every===1?"d\xEDa":`${l.every} d\xEDas`} (\xFAltima vez hace ${l.daysSince===0?"hoy":l.daysSince===1?"1 d\xEDa":`${l.daysSince} d\xEDas`})`,p=5+(l.daysSince-l.every)/l.every),d&&g.push({entry:l,product:h,quantity:l.typical||1,unit:l.unit,reason:d,urgency:p})}),g.sort((l,h)=>h.urgency-l.urgency),{entries:m,suggestions:g}}function Ua(){let e=Promise.resolve();return t=>{let a=e.then(t,t);return e=a.catch(()=>{}),a}}var Na=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,De=6;function Kn(e,t){return{userId:e.objectId,email:e.email||t,sessionToken:e.sessionToken}}var Oe={isLoggedIn:()=>!!H.current(),async login(e,t){e=e.trim(),X(Na.test(e),"Introduce un correo v\xE1lido"),X(t.length>=De,`La contrase\xF1a debe tener al menos ${De} caracteres`);let a;try{a=await A.post("login",{username:e,password:t},{authenticated:!1})}catch(n){throw n.code===101?new _e(101,"Correo o contrase\xF1a incorrectos"):n}H.save(Kn(a,e))},async register(e,t,a,n){e=e.trim(),t=t.trim(),X(e,"Escribe c\xF3mo quieres que te llamen"),X(e.length<=24,`El apodo no puede superar ${24} caracteres`),X(Na.test(t),"Introduce un correo v\xE1lido"),X(a.length>=De,`La contrase\xF1a debe tener al menos ${De} caracteres`),X(a===n,"Las contrase\xF1as no coinciden");let s=await A.post("users",{username:t,email:t,password:a,nickname:e},{authenticated:!1});H.save(Kn(s,t))},async resetPassword(e){e=e.trim(),X(Na.test(e),"Introduce un correo v\xE1lido"),await A.post("requestPasswordReset",{email:e},{authenticated:!1})},async logout(){try{await A.post("logout")}catch{}H.clear(),Se.clearCache()}};function Xn(e){return{id:e.objectId,email:e.email||e.username||"",nickname:rt(e.nickname)||"",avatar:e.avatar?.url?{name:e.avatar.name,url:e.avatar.url}:null,avatarColor:typeof e.avatarColor=="string"&&e.avatarColor.startsWith("#")?e.avatarColor:Ue[0]}}var Ne=new Map,Se={async me(e=!1){let t=H.requireUserId();if(!e&&Ne.has(t))return Ne.get(t);let a=Xn(await A.get("users/me"));return Ne.set(a.id,a),a},async many(e,t=!1){let a=t?e:e.filter(n=>!Ne.has(n));if(a.length)try{((await A.get("users",{where:JSON.stringify({objectId:{$in:a}}),limit:String(a.length)})).results||[]).map(Xn).forEach(s=>Ne.set(s.id,s))}catch{}return Object.fromEntries(e.filter(n=>Ne.has(n)).map(n=>[n,Ne.get(n)]))},async save({nickname:e,avatarColor:t,photo:a}){e=e.trim(),X(e.length<=24,`El apodo no puede superar ${24} caracteres`);let n=await Se.me(),s=n.avatar;a===null?s=null:a instanceof Blob&&(s=await ca(a)),await A.put(`users/${n.id}`,{nickname:e,avatarColor:t,avatar:s?te.fileRef(s.name,s.url):null});let o={...n,nickname:e,avatarColor:t,avatar:s};return Ne.set(o.id,o),o},clearCache:()=>Ne.clear()};async function ca(e){let t=await A.uploadFile("image.jpg",e,"image/jpeg");return{name:t.name,url:t.url}}var Jn="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function Zn(e){return{id:e.objectId,name:e.name||"",inviteCode:e.inviteCode||"",ownerId:e.ownerId||"",memberIds:e.members||[],memberEmails:e.memberEmails||[],shoppingDay:$e(e.shoppingDay,0)}}var Ho=Ua(),ee={async mine(){return(await A.query("House",{members:H.requireUserId()})).map(Zn).sort((t,a)=>t.name.localeCompare(a.name,"es"))},current(){return Ho(async()=>{let e=await ee.mine(),t=e.find(a=>a.id===H.houseId())||e[0];if(!t)throw H.saveHouseId(null),new bt;return H.saveHouseId(t.id),t})},switchTo(e){H.saveHouseId(e.id)},async create(e){e=e.trim(),X(e,"Escribe un nombre para la casa");let t=H.requireUserId(),a=await Do(),n=await A.post("classes/House",{name:e,inviteCode:a,ownerId:t,members:[t],memberEmails:[H.email()],shoppingDay:0,ACL:te.publicAcl()});return H.saveHouseId(n.objectId),{id:n.objectId,name:e,inviteCode:a}},async join(e){e=e.trim().toUpperCase(),X(e.length===6,`El c\xF3digo tiene ${6} caracteres`);let[t]=await A.query("House",{inviteCode:e},{limit:1});if(!t)throw new _e(101,"No existe ninguna casa con ese c\xF3digo");let a=Zn(t),n=H.requireUserId();return a.memberIds.includes(n)||await A.put(`classes/House/${a.id}`,{members:te.addUnique(n),memberEmails:te.addUnique(H.email())}),H.saveHouseId(a.id),a},async rename(e,t){t=t.trim(),X(t,"Escribe un nombre para la casa"),await A.put(`classes/House/${e.id}`,{name:t})},async setShoppingDay(e,t){return X(t===0||t>=1&&t<=7,"D\xEDa no v\xE1lido"),await A.put(`classes/House/${e.id}`,{shoppingDay:t}),{...e,shoppingDay:t}},async leave(e){if(e.memberIds.length<=1){let[t,a]=await Promise.all([A.query("ShoppingItem",{houseId:e.id}),A.query("Product",{houseId:e.id})]);for(let n of t)await A.delete(`classes/ShoppingItem/${n.objectId}`);for(let n of a)await A.delete(`classes/Product/${n.objectId}`);await A.delete(`classes/House/${e.id}`)}else await A.put(`classes/House/${e.id}`,{members:te.remove(H.requireUserId()),memberEmails:te.remove(H.email())});H.houseId()===e.id&&H.saveHouseId(null)}};async function Do(){for(let e=0;e<5;e++){let t=Array.from({length:6},()=>Jn[Math.floor(Math.random()*Jn.length)]).join("");if(!(await A.query("House",{inviteCode:t},{limit:1})).length)return t}throw new _e(-1,"No se ha podido generar un c\xF3digo de invitaci\xF3n. Int\xE9ntalo de nuevo")}function Ba(e){return{id:e.objectId,name:e.name||"",category:e.category||"",quantity:$e(e.quantity),criticalLimit:$e(e.criticalLimit),unit:e.unit||xe,location:e.location||"",notes:e.notes||"",expiresAt:te.readDate(e.expiresAt),photo:e.photo?.url?{name:e.photo.name,url:e.photo.url}:null,imageUrl:rt(e.imageUrl),price:e.price===null||e.price===void 0?null:$e(e.price,null),mercadonaId:rt(e.mercadonaId),updatedBy:e.updatedBy||"",allergens:Array.isArray(e.allergens)?e.allergens.filter(t=>typeof t=="string"):[]}}function Et(e){return{name:e.name,category:e.category,quantity:e.quantity,criticalLimit:e.criticalLimit,unit:e.unit,location:e.location,notes:e.notes,updatedBy:e.updatedBy,expiresAt:e.expiresAt?te.date(e.expiresAt):null,photo:e.photo?te.fileRef(e.photo.name,e.photo.url):null,imageUrl:e.imageUrl||null,mercadonaId:e.mercadonaId||null,price:e.price??null,allergens:e.allergens||[]}}var sa=Ua(),es=60,fe={async all(){return(await A.query("Product",{houseId:H.requireHouseId()})).map(Ba).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e,t){X(e.name.trim(),"El nombre es obligatorio"),X(e.name.trim().length<=es,`El nombre no puede superar ${es} caracteres`),X(e.quantity>=0&&e.criticalLimit>=0,"Las cantidades no pueden ser negativas");let a=e.photo;t===null?a=null:t instanceof Blob&&(a=await ca(t));let n={...e,name:e.name.trim(),category:e.category.trim(),unit:e.unit.trim()||xe,location:e.location.trim(),notes:e.notes.trim(),photo:a,updatedBy:H.email()};return sa(async()=>{let s=n;if(n.id)await A.put(`classes/Product/${n.id}`,Et(n));else{let o=await A.post("classes/Product",{...Et(n),houseId:H.requireHouseId(),owner:te.userPointer(H.requireUserId()),ACL:te.publicAcl()});s={...n,id:o.objectId}}return await re.syncProduct(s),s})},async updateQuantity(e,t){let a={...e,updatedBy:H.email()};await sa(async()=>{await A.put(`classes/Product/${a.id}`,Et(a)),await re.syncProduct(a)}),a.quantity<t&&ts(a,t-a.quantity)},async consume(e,t){if(t<=0)return e;let a={...V.withQuantity(e,e.quantity-t),updatedBy:H.email()};return await sa(async()=>{await A.put(`classes/Product/${a.id}`,Et(a)),await re.syncProduct(a)}),ts(a,e.quantity-a.quantity),a},async remove(e){await sa(async()=>{await A.delete(`classes/Product/${e.id}`),await re.removeForProduct(e.id)})}};function ts(e,t){!e.id||t<=0||A.post("classes/StockMovement",{houseId:H.requireHouseId(),productId:e.id,amount:ue(t),ACL:te.publicAcl()}).catch(()=>{})}function Oo(e){return{id:e.objectId,productId:e.productId||"",name:e.name||"",quantity:$e(e.quantity,1),unit:e.unit||xe,category:e.category||"",photoUrl:rt(e.photoUrl),checked:!!e.checked,dismissed:!!e.dismissed,manual:!!e.manual,addedBy:rt(e.addedBy)||"",price:e.price===null||e.price===void 0?null:$e(e.price,null)}}function He(e){return{productId:e.productId,name:e.name,quantity:e.quantity,unit:e.unit,category:e.category,photoUrl:e.photoUrl||null,checked:e.checked,dismissed:e.dismissed,manual:e.manual,addedBy:e.addedBy,price:e.price??null}}var ft=e=>e.price===null||e.price===void 0?null:e.price*e.quantity;function is(e){return{productId:e.id,name:e.name,quantity:V.amountToBuy(e),unit:e.unit,category:e.category,photoUrl:V.image(e),checked:!1,dismissed:!1,manual:!1,addedBy:"",price:e.price}}function ls(e,t){return{...e,name:t.name,quantity:e.manual?e.quantity:V.amountToBuy(t),unit:t.unit,category:t.category,photoUrl:V.image(t),price:t.price}}var Ro=(e,t)=>JSON.stringify(He(e))===JSON.stringify(He(t)),Le=Ua(),ht=async e=>(await A.query("ShoppingItem",e)).map(Oo).sort((t,a)=>t.name.localeCompare(a.name,"es"));async function ra(e,t){await A.post("classes/ShoppingItem",{...He(e),houseId:t,ACL:te.publicAcl()})}async function as(e,t,a){if(!t)V.isLow(e)&&await ra(is(e),a);else if(!V.isLow(e)&&(!t.manual||t.dismissed))await A.delete(`classes/ShoppingItem/${t.id}`);else if(!t.checked&&!t.dismissed){let n=ls(t,e);Ro(n,t)||await A.put(`classes/ShoppingItem/${t.id}`,He(n))}}function Ha(e){X(e>0&&Number.isFinite(e),"La cantidad tiene que ser mayor que 0")}var re={async refresh(){let e=H.requireHouseId();return await Le(async()=>{let t=(await A.query("Product",{houseId:e})).map(Ba),a=new Set(t.map(s=>s.id)),n=new Map;(await ht({houseId:e})).filter(s=>s.productId).forEach(s=>{n.has(s.productId)||n.set(s.productId,[]),n.get(s.productId).push(s)});for(let[s,o]of n){let i=a.has(s)?o.slice(1):o;for(let r of i)await A.delete(`classes/ShoppingItem/${r.id}`)}for(let s of t)await as(s,n.get(s.id)?.[0],e)}),(await ht({houseId:e})).filter(t=>!t.dismissed)},syncProduct(e){let t=H.requireHouseId();return Le(async()=>{let a=await ht({houseId:t,productId:e.id});for(let n of a.slice(1))await A.delete(`classes/ShoppingItem/${n.id}`);await as(e,a[0],t)})},removeForProduct(e){let t=H.requireHouseId();return Le(async()=>{for(let a of await ht({houseId:t,productId:e}))await A.delete(`classes/ShoppingItem/${a.id}`)})},addProduct(e,t){Ha(t);let a=H.requireHouseId();return Le(async()=>{let[n]=await ht({houseId:a,productId:e.id}),s={...ls(n||is(e),e),quantity:ue(t),manual:!0,dismissed:!1,addedBy:H.email()};n?await A.put(`classes/ShoppingItem/${n.id}`,He(s)):await ra(s,a)})},addFreeItem(e,t,a,{price:n=null,photoUrl:s=null,category:o=""}={}){e=e.trim(),X(e,"Escribe qu\xE9 quieres comprar"),Ha(t);let i={productId:"",name:e,quantity:ue(t),unit:a.trim()||xe,category:o||"",photoUrl:s||null,checked:!1,dismissed:!1,manual:!0,addedBy:H.email(),price:n??null},r=H.requireHouseId();return Le(()=>ra(i,r))},changeQuantity(e,t){return Ha(t),Le(()=>A.put(`classes/ShoppingItem/${e.id}`,He({...e,quantity:ue(t),manual:!0})))},setChecked(e,t){return Le(()=>A.put(`classes/ShoppingItem/${e.id}`,He({...e,checked:t})))},dismiss(e){return Le(()=>e.manual?A.delete(`classes/ShoppingItem/${e.id}`):A.put(`classes/ShoppingItem/${e.id}`,He({...e,dismissed:!0,checked:!1})))},restore(e){let t=H.requireHouseId();return Le(()=>e.manual?ra({...e,dismissed:!1},t):A.put(`classes/ShoppingItem/${e.id}`,He({...e,dismissed:!1})))},completePurchase(){let e=H.requireHouseId();return Le(async()=>{let t=(await ht({houseId:e})).filter(n=>n.checked&&!n.dismissed),a=new Map((await A.query("Product",{houseId:e})).map(Ba).map(n=>[n.id,n]));for(let n of t){let s=a.get(n.productId);if(s){let o={...V.withQuantity(s,s.quantity+n.quantity),updatedBy:H.email()};await A.put(`classes/Product/${s.id}`,Et(o))}await A.delete(`classes/ShoppingItem/${n.id}`)}return t})}};function Bo(e){return{id:e.objectId,name:e.name||"",servings:$e(e.servings,2),ingredients:(e.ingredients||[]).filter(Boolean).map(t=>({productId:t.productId||"",name:t.name||"",quantity:$e(t.quantity,1),unit:t.unit||xe,option:cs(t.storeOption),optional:!!t.optional,deduct:t.deduct!==!1})),meals:Array.isArray(e.meals)?e.meals.filter(t=>Fe.some(a=>a.key===t)):[],steps:e.steps||"",emoji:e.emoji||Gt,photo:typeof e.photoUrl=="string"&&e.photoUrl.startsWith("http")?{name:e.photoName||"",url:e.photoUrl}:null,createdBy:e.createdBy||""}}function ns(e){return{name:e.name,servings:e.servings,steps:e.steps,emoji:e.emoji,photoName:e.photo?.name||"",photoUrl:e.photo?.url||"",createdBy:e.createdBy,ingredients:e.ingredients.map(({productId:t,name:a,quantity:n,unit:s,option:o,optional:i,deduct:r})=>({productId:t,name:a,quantity:n,unit:s,storeOption:us(o),optional:!!i,deduct:r!==!1})),meals:e.meals||[]}}function cs(e){if(!e||typeof e!="object"||!e.name)return null;let t=String(e.source||"").toLowerCase(),a=Ie.find(n=>n.key===t)||null;return{store:a?.key||null,source:a?.label||"Open Food Facts",externalId:String(e.externalId||""),name:e.name,brand:e.brand||"",category:"",price:typeof e.price=="number"?e.price:null,imageUrl:typeof e.imageUrl=="string"&&e.imageUrl.startsWith("http")?e.imageUrl:null,packageInfo:e.packageInfo||""}}function us(e){return e?{source:e.store?e.store.toUpperCase():"OPEN_FOOD_FACTS",externalId:e.externalId||"",name:e.name,brand:e.brand||"",price:e.price??null,imageUrl:e.imageUrl||null,packageInfo:e.packageInfo||""}:null}var Uo=(e,t)=>!!e&&!!t&&e.externalId===t.externalId&&e.store===t.store,Da=new Map;function ds(e,t){return t>e.criticalLimit?0:ue(e.criticalLimit-t+1)}var Fo=10,oe={async all(){return(await A.query("Recipe",{houseId:H.requireHouseId()})).map(Bo).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e){X(e.name.trim(),"Ponle un nombre a la receta"),X(e.ingredients.length,"A\xF1ade al menos un ingrediente"),X(e.servings>=1&&e.servings<=20,"Las raciones deben estar entre 1 y 20");let t={...e,name:e.name.trim(),steps:e.steps.trim(),createdBy:e.createdBy||H.email()};if(!t.id){let a=await A.post("classes/Recipe",{...ns(t),houseId:H.requireHouseId(),ACL:te.publicAcl()});return{...t,id:a.objectId}}return await A.put(`classes/Recipe/${t.id}`,ns(t)),t},remove:e=>A.delete(`classes/Recipe/${e.id}`),fromLibrary(e,t){return{id:null,name:e.name,servings:e.servings,steps:e.steps.join(`
`),emoji:Gt,photo:{name:"",url:e.photoUrl},createdBy:"",libraryId:e.id,meals:[Fe.find(a=>a.label===e.meal)?.key].filter(Boolean),ingredients:e.ingredients.map(a=>{let n=Ta(a,t),s=n?at(a.quantity,a.unit,n.unit):null;return n&&s!==null?{productId:n.id,name:n.name,quantity:ue(s),unit:n.unit}:{productId:"",name:a.name,quantity:a.quantity,unit:a.unit}})}},check(e,t){let a=new Map(t.map(i=>[i.id,i])),n=e.ingredients.map(i=>{let r=a.get(i.productId)||null,u=ta(i,t).filter(w=>w.id!==r?.id),m=r||u[0]||null,g={ingredient:i,product:m,matched:!r&&!!m,alternatives:r?u:u.slice(1)};if(!m)return{...g,inStock:0,after:0,use:0,status:i.optional?"OPTIONAL":"NOT_IN_PANTRY",toBuy:i.optional?0:i.quantity};let l=at(i.quantity,i.unit,m.unit);if(i.deduct===!1||l===null){let w=m.quantity>0;return{...g,inStock:m.quantity,after:m.quantity,use:0,keeps:!0,status:w?"OK":i.optional?"OPTIONAL":"NOT_ENOUGH",toBuy:w||i.optional?0:V.amountToBuy(m)}}let h=ue(l),d=ue(m.quantity-h),p=d<0?"NOT_ENOUGH":d<=m.criticalLimit?"BELOW_MINIMUM":"OK";p==="NOT_ENOUGH"&&i.optional&&(p="OPTIONAL");let v=i.optional?0:ds(m,d);return{...g,inStock:m.quantity,after:d,use:h,status:p,toBuy:v}}),s=n.filter(i=>i.status==="NOT_ENOUGH"||i.status==="NOT_IN_PANTRY"),o=n.filter(i=>i.toBuy>0);return{recipe:e,items:n,canCook:s.length===0,missing:s,toBuy:o,estimatedCost:o.reduce((i,r)=>i+(r.product?.price!=null?r.product.price*r.toBuy:!r.product&&r.ingredient.option?.price!=null?r.ingredient.option.price:0),0)}},async storeOptions(e,t){let a=e.name.trim(),n=`${[...t].sort().join(",")}|${a.toLowerCase()}`;if(Da.has(n))return Da.get(n);let{results:s}=await At.search(a,t),o=a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").split(/\s+/).filter(g=>g.length>2),i=g=>{let l=g.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return o.filter(h=>l.includes(h.slice(0,Math.max(3,h.length-1)))).length+(g.price!=null?.5:0)},r=s.map((g,l)=>({c:g,s:i(g),index:l})).sort((g,l)=>l.s-g.s||g.index-l.index),m=(r.some(g=>g.s>=1)?r.filter(g=>g.s>=1):r.slice(0,3)).map(g=>g.c).slice(0,Fo);return Da.set(n,m),m},sameOption:Uo,suggest(e,t,a=8,n=[]){let s=new Set(e.map(i=>i.name.trim().toLowerCase()));return[...e.map(i=>({recipe:i,library:null})),...ea.filter(i=>!s.has(i.name.toLowerCase())).map(i=>({recipe:oe.fromLibrary(i,t),library:i}))].map(({recipe:i,library:r})=>{let u=oe.check(i,t),m=u.items.filter(v=>v.product&&v.status!=="NOT_ENOUGH").length,g=u.items.length||1,l=u.items.filter(v=>v.product?.expiresAt&&v.product.quantity>0).map(v=>({product:v.product,days:V.daysUntilExpiry(v.product)})).filter(v=>v.days>=0&&v.days<=5).sort((v,w)=>v.days-w.days),h=l.reduce((v,w)=>v+(6-w.days),0),d=[...new Set(u.items.flatMap(v=>je(xt(v),n)))],p=h*2+m/g*10+(u.canCook?4:0)-d.length*30;return{recipe:i,library:r,check:u,expiring:l,have:m,total:g,score:p,allergens:d}}).filter(i=>i.have>0&&(i.expiring.length>0||i.have/i.total>=.5)).sort((i,r)=>r.score-i.score||i.recipe.name.localeCompare(r.recipe.name,"es")).slice(0,a)},async addMissingToShopping(e){for(let t of e.toBuy)if(t.product)await re.addProduct(t.product,t.toBuy);else if(t.ingredient.option){let a=t.ingredient.option;await re.addFreeItem(a.name,1,"uds",{price:a.price,photoUrl:a.imageUrl,category:a.category})}else await re.addFreeItem(t.ingredient.name,t.toBuy,t.ingredient.unit);return e.toBuy.length},async cook(e){for(let t of e.items)t.product&&t.use>0&&await fe.consume(t.product,t.use)}};function jo(e){let t=te.readDate(e.date);return!t||!["BREAKFAST","LUNCH","DINNER"].includes(e.slot)?null:{id:e.objectId,date:t,slot:e.slot,recipeId:e.recipeId||"",title:e.title||""}}var ss=28;async function Oa(e,t,a){return(await A.query("MealPlanEntry",{houseId:e,date:{$gte:te.date(t),$lte:te.date(a)}})).map(jo).filter(Boolean)}var Me={week:e=>Oa(H.requireHouseId(),e,pe(e,6)),async set(e,t,a,n=""){let s=a?.name||n.trim();X(s,"Elige una receta o escribe qu\xE9 vas a comer");let o=H.requireHouseId(),i=(await Oa(o,e,e)).find(u=>u.slot===t),r={date:te.date(e),slot:t,recipeId:a?.id||"",title:s};i?await A.put(`classes/MealPlanEntry/${i.id}`,r):await A.post("classes/MealPlanEntry",{...r,houseId:o,ACL:te.publicAcl()})},clear:e=>A.delete(`classes/MealPlanEntry/${e.id}`),async copyPreviousWeek(e){let t=H.requireHouseId(),a=new Set((await Me.week(e)).map(o=>`${o.date}|${o.slot}`)),s=(await Oa(t,pe(e,-7),pe(e,-1))).map(o=>({...o,date:pe(o.date,7)})).filter(o=>!a.has(`${o.date}|${o.slot}`));for(let o of s)await A.post("classes/MealPlanEntry",{date:te.date(o.date),slot:o.slot,recipeId:o.recipeId,title:o.title,houseId:t,ACL:te.publicAcl()});return s.length},async analyze(e){let t=H.requireHouseId(),[a,n,s]=await Promise.all([fe.all(),oe.all(),Me.week(e)]),o=new Map(n.map(d=>[d.id,d])),i=s.filter(d=>d.date>=Z()),r=new Map,u=new Map;i.map(d=>o.get(d.recipeId)).filter(Boolean).forEach(d=>{d.ingredients.forEach(p=>{if(p.productId&&a.some(v=>v.id===p.productId))r.set(p.productId,(r.get(p.productId)||0)+p.quantity);else{let v=`${p.name.trim().toLowerCase()}|${p.unit}`;u.set(v,(u.get(v)||0)+p.quantity)}})});let m=new Map;try{let d=new Date(Date.now()-ss*864e5);(await A.query("StockMovement",{houseId:t,createdAt:{$gte:te.instant(d)}})).forEach(v=>m.set(v.productId,(m.get(v.productId)||0)+$e(v.amount)))}catch{}let g=ss/7,l=[];a.forEach(d=>{let p=r.get(d.id)||0,v=ue((m.get(d.id)||0)/g),w=Math.max(p,v),C=ds(d,d.quantity-w);w===0&&C===0||l.push({product:d,name:d.name,unit:d.unit,planned:p,habitual:v,inStock:d.quantity,toBuy:C,reason:p>0&&p>=v?"RECIPES":v>0?"HABITUAL":"BELOW_MINIMUM"})}),u.forEach((d,p)=>{let[v,w]=p.split("|");l.push({product:null,name:v.charAt(0).toUpperCase()+v.slice(1),unit:w,planned:d,habitual:0,inStock:0,toBuy:ue(d),reason:"RECIPES"})}),l.forEach(d=>{d.isUrgent=d.planned>d.inStock,d.estimatedCost=d.product?.price!=null?d.product.price*d.toBuy:null}),l.sort((d,p)=>p.isUrgent-d.isUrgent||d.name.localeCompare(p.name,"es"));let h=l.filter(d=>d.toBuy>0);return{weekStart:e,needs:l,toBuy:h,plannedMeals:i.length,estimatedCost:h.reduce((d,p)=>d+(p.estimatedCost||0),0),withoutPrice:h.filter(d=>d.estimatedCost===null).length}},async addToShopping(e){for(let t of e.toBuy)t.product?await re.addProduct(t.product,t.toBuy):await re.addFreeItem(t.name,t.toBuy,t.unit);return e.toBuy.length},weekStartOf:kt},os="7UZJKL1DJ0",Vo="9d8f2e39e90df472b4f2e559a116fe17";function Go(e,t){let a=$e(t?.unit_size,NaN),n=t?.size_format||"",s="";return Number.isFinite(a)&&a>0&&n&&(n==="kg"&&a<1?s=`${Math.round(a*1e3)} g`:n==="l"&&a<1?s=`${Math.round(a*1e3)} ml`:s=`${String(a).replace(".",",")} ${n==="kg"?"kg":n.toUpperCase()}`),[e&&e!=="null"?e:"",s].filter(Boolean).join(" ")}async function Wo(e){let t=await fetch(`https://${os}-dsn.algolia.net/1/indexes/products_prod_mad1_es/query`,{method:"POST",headers:{"X-Algolia-Application-Id":os,"X-Algolia-API-Key":Vo,"Content-Type":"application/json"},body:JSON.stringify({params:`query=${encodeURIComponent(e)}&hitsPerPage=30`})});if(!t.ok)throw new Error("Mercadona no responde");return((await t.json()).hits||[]).map(n=>{let s=n.id||n.objectID;if(!s||!n.display_name)return null;let o=parseFloat(n.price_instructions?.unit_price);return{source:"Mercadona",externalId:String(s),name:n.display_name,brand:"",category:n.categories?.[0]?.name||"",price:Number.isFinite(o)?o:null,imageUrl:typeof n.thumbnail=="string"&&n.thumbnail.startsWith("http")?n.thumbnail:null,packageInfo:Go(n.packaging,n.price_instructions)}}).filter(Boolean)}async function Qo(e){let a=`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(e)}&search_simple=1&action=process&json=1&page_size=20&lc=es&fields=code,product_name,product_name_es,brands,categories,quantity,image_front_small_url,image_url,allergens_tags`;return((await(await fetch(a)).json()).products||[]).map(s=>{let o=(s.product_name_es||s.product_name||"").trim();if(!o)return null;let i=s.image_front_small_url||s.image_url||"";return{source:"Open Food Facts",store:null,externalId:s.code||"",name:o,brand:(s.brands||"").split(",")[0].trim(),category:(s.categories||"").split(",")[0].trim(),price:null,imageUrl:i.startsWith("http")?i:null,packageInfo:(s.quantity||"").trim(),allergens:Qn(s.allergens_tags||[])}}).filter(Boolean)}async function ps(e,t){return((await A.post("functions/storeSearch",{store:e,q:t})).result||[]).map(n=>({source:n.store||"Open Food Facts",store:e==="off"?null:e,externalId:String(n.externalId||""),name:n.name||"",brand:n.brand||"",category:n.category||"",price:typeof n.price=="number"?n.price:null,imageUrl:typeof n.imageUrl=="string"&&n.imageUrl.startsWith("http")?n.imageUrl:null,packageInfo:n.packageInfo||""})).filter(n=>n.name)}var Yo=(e,t)=>e==="mercadona"?Wo(t).then(a=>a.map(n=>({...n,store:"mercadona"}))):ps(e,t),At={async search(e,t=["mercadona"]){if(e=e.trim(),e.length<2)return{results:[],failed:[]};let a=t.length?t:["mercadona"],n=await Promise.allSettled(a.map(r=>Yo(r,e))),s=a.filter((r,u)=>n[u].status==="rejected"),o=n.map(r=>r.status==="fulfilled"?r.value:[]),i=[];for(let r=0;o.some(u=>u.length>r);r++)o.forEach(u=>u[r]&&i.push(u[r]));if(i.length)return{results:i,failed:s};try{let r=await ps("off",e);if(r.length)return{results:r,failed:s}}catch{}try{return{results:await Qo(e),failed:s}}catch{if(s.length===a.length)throw new _e(100,"No se ha podido buscar en los supermercados");return{results:[],failed:s}}},toProduct:e=>({id:null,name:e.name,category:e.category,quantity:1,criticalLimit:1,unit:xe,location:"",notes:[e.store?e.source:"",e.brand,e.packageInfo].filter(Boolean).join(" \xB7 "),expiresAt:null,photo:null,imageUrl:e.imageUrl,price:e.price,mercadonaId:e.store==="mercadona"?e.externalId:null,updatedBy:"",allergens:e.allergens||[]})};function Ko(e){return{id:e.objectId,date:te.readDate(e.date)||(e.createdAt||"").slice(0,10),store:e.store||"",total:$e(e.total),items:(e.items||[]).filter(Boolean).map(t=>({name:t.name||"",quantity:$e(t.quantity,1),unit:t.unit||xe,price:t.price===null||t.price===void 0?null:$e(t.price,null)})),note:e.note||"",createdBy:e.createdBy||""}}var ua=30,Ve={async all(){return(await A.query("Ticket",{houseId:H.requireHouseId()})).map(Ko).sort((t,a)=>a.date.localeCompare(t.date)||a.id.localeCompare(t.id))},async save(e){X(e.total>=0&&Number.isFinite(e.total),"El total no es v\xE1lido"),X(e.date,"Elige la fecha del ticket"),X(e.date<=Z(),"La fecha no puede ser futura");let t={date:te.date(e.date),store:(e.store||"").trim(),total:Math.round(e.total*100)/100,items:(e.items||[]).map(({name:a,quantity:n,unit:s,price:o})=>({name:a,quantity:n,unit:s,price:o??null})),note:(e.note||"").trim()};if(!e.id){let a=await A.post("classes/Ticket",{...t,houseId:H.requireHouseId(),createdBy:H.email(),ACL:te.publicAcl()});return{...e,...t,date:e.date,id:a.objectId,createdBy:H.email()}}return await A.put(`classes/Ticket/${e.id}`,t),{...e,...t,date:e.date}},remove:e=>A.delete(`classes/Ticket/${e.id}`),summary(e){let t=pe(Z(),-(ua-1)),a=e.filter(n=>n.date>=t&&n.date<=Z());return{total:a.reduce((n,s)=>n+s.total,0),count:a.length,from:t}}},la=400,Xo=e=>{let t=String(e).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").split(/\s+/)[0]||"",a=t.replace(/(es|s)$/,"");return a.length>=3?a:t},Ra=()=>({"*":{read:!0},[H.requireUserId()]:{read:!0,write:!0}});function oa(e){return{id:e.objectId,name:e.name||"",servings:$e(e.servings,2),steps:e.steps||"",photo:typeof e.photoUrl=="string"&&e.photoUrl.startsWith("http")?{name:e.photoName||"",url:e.photoUrl}:null,ingredients:(e.ingredients||[]).filter(Boolean).map(t=>({productId:"",name:t.name||"",quantity:$e(t.quantity,1),unit:t.unit||xe,option:cs(t.storeOption),optional:!!t.optional,deduct:t.deduct!==!1})),meals:Array.isArray(e.meals)?e.meals:[],authorId:e.authorId||"",authorName:e.authorName||"Alguien",authorColor:typeof e.authorColor=="string"&&e.authorColor.startsWith("#")?e.authorColor:Ue[0],authorPhoto:typeof e.authorPhotoUrl=="string"&&e.authorPhotoUrl.startsWith("http")?e.authorPhotoUrl:null,sourceRecipeId:e.sourceRecipeId||"",createdAt:e.createdAt||"",likes:0,liked:!1,comments:0}}function rs(e){return{id:e.objectId,recipeId:e.recipeId,userId:e.userId||"",authorName:e.authorName||"Alguien",authorColor:typeof e.authorColor=="string"&&e.authorColor.startsWith("#")?e.authorColor:Ue[0],text:e.text||"",createdAt:e.createdAt||""}}var ke={async all(e="popular"){let t=(await A.query("SharedRecipe",{},{limit:200,order:"-createdAt"})).map(oa);if(!t.length)return t;let a=t.map(r=>r.id),n=H.requireUserId(),[s,o]=await Promise.all([A.query("RecipeLike",{recipeId:{$in:a}}).catch(()=>[]),A.query("RecipeComment",{recipeId:{$in:a}}).catch(()=>[])]),i=new Map(t.map(r=>[r.id,r]));return s.forEach(r=>{let u=i.get(r.recipeId);u&&(u.likes++,r.userId===n&&(u.liked=!0))}),o.forEach(r=>i.get(r.recipeId)&&i.get(r.recipeId).comments++),t.sort(e==="recent"?(r,u)=>u.createdAt.localeCompare(r.createdAt):(r,u)=>u.likes-r.likes||u.comments-r.comments||u.createdAt.localeCompare(r.createdAt))},async sharedFrom(e){if(!e?.id)return null;let[t]=await A.query("SharedRecipe",{sourceRecipeId:e.id,authorId:H.requireUserId()},{limit:1});return t?oa(t):null},async share(e){X(e.name.trim(),"Ponle un nombre a la receta"),X(e.ingredients.length,"A\xF1ade al menos un ingrediente");let t=await Se.me(),a={name:e.name.trim(),servings:e.servings,steps:e.steps,photoUrl:e.photo?.url||"",photoName:e.photo?.name||"",ingredients:e.ingredients.map(({name:o,quantity:i,unit:r,option:u,optional:m,deduct:g})=>({name:o,quantity:i,unit:r,storeOption:us(u),optional:!!m,deduct:g!==!1})),meals:e.meals||[],authorId:t.id,authorName:we(t),authorColor:t.avatarColor,authorPhotoUrl:t.avatar?.url||"",sourceRecipeId:e.id||""},n=await ke.sharedFrom(e);if(n)return await A.put(`classes/SharedRecipe/${n.id}`,a),{...n,...oa({...a,objectId:n.id,createdAt:n.createdAt})};let s=await A.post("classes/SharedRecipe",{...a,ACL:Ra()});return oa({...a,objectId:s.objectId,createdAt:s.createdAt})},async unshare(e){await A.delete(`classes/SharedRecipe/${e.id}`)},async toggleLike(e){let t=H.requireUserId(),a=await A.query("RecipeLike",{recipeId:e.id,userId:t});return a.length?(await Promise.all(a.map(n=>A.delete(`classes/RecipeLike/${n.objectId}`))),{...e,liked:!1,likes:Math.max(0,e.likes-1)}):(await A.post("classes/RecipeLike",{recipeId:e.id,userId:t,ACL:Ra()}),{...e,liked:!0,likes:e.likes+1})},async comments(e){return(await A.query("RecipeComment",{recipeId:e.id})).map(rs).sort((a,n)=>a.createdAt.localeCompare(n.createdAt))},async comment(e,t){t=t.trim(),X(t,"Escribe un comentario"),X(t.length<=la,`M\xE1ximo ${la} caracteres`);let a=await Se.me(),n={recipeId:e.id,userId:a.id,authorName:we(a),authorColor:a.avatarColor,text:t},s=await A.post("classes/RecipeComment",{...n,ACL:Ra()});return rs({...n,objectId:s.objectId,createdAt:s.createdAt||new Date().toISOString()})},removeComment:e=>A.delete(`classes/RecipeComment/${e.id}`),async saveToMine(e,t){let a={id:null,name:e.name,servings:e.servings,steps:e.steps,emoji:Gt,photo:e.photo,createdBy:"",meals:e.meals||[],ingredients:e.ingredients.map(n=>{let s=Ta({...n,keywords:[Xo(n.name)]},t),o=s?at(n.quantity,n.unit,s.unit):null;return s&&o!==null?{productId:s.id,name:s.name,quantity:ue(o),unit:s.unit,option:n.option,optional:n.optional,deduct:n.deduct}:{...n,productId:""}})};return oe.save(a)},isMine:e=>e.authorId===H.current()?.userId||e.userId===H.current()?.userId},ms={async analyze(e=[]){let t=H.requireHouseId(),a=new Date(Date.now()-na*864e5),[n,s,o]=await Promise.all([Ve.all(),fe.all(),A.query("StockMovement",{houseId:t,createdAt:{$gte:te.instant(a)}}).catch(()=>[])]),i=new Map;return o.forEach(r=>i.set(r.productId,(i.get(r.productId)||0)+$e(r.amount))),Yn({tickets:n,consumed:i,prods:s,pending:e,today:Z()})}},hs=()=>({id:null,name:"",category:"",quantity:1,criticalLimit:1,unit:xe,location:"",notes:"",expiresAt:null,photo:null,imageUrl:null,price:null,mercadonaId:null,updatedBy:"",allergens:[]});var gs=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function Ge({label:e,icon:t,error:a,inputRef:n,...s}){return c`<label class=${`field ${a?"has-error":""}`}>
    <span>${e}</span>
    <div class="field-row">
      ${t&&c`<${f} name=${t} size=${20} class="field-icon" />`}
      <input ref=${n} ...${s} />
    </div>
    ${a&&c`<small class="error-text">${a}</small>`}
  </label>`}function Fa(){let[e,t]=S({}),a=Y({});return{errors:e,setErrors:t,refs:a,fail:(s,o)=>(t({[s]:o}),jn(a.current[s]?.closest(".field")),x("error"),!1)}}function Jo({size:e=96}){return c`<svg class="logo" width=${e} height=${e} viewBox="0 0 108 108" aria-hidden="true">
    <defs><linearGradient id="lg" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--primary-light)" /><stop offset="1" stop-color="var(--primary)" />
    </linearGradient></defs>
    <circle cx="54" cy="54" r="54" fill="url(#lg)" />
    <g transform="translate(27.6 28.7) scale(2.2)">
      <path d="M12,3L2,12h3v8h14v-8h3L12,3z" fill="#fff" />
      <path d="M8.5,12.5h7v5.5h-7z" fill="var(--primary)" />
      <path d="M8.5,14.2h7v0.8h-7z" fill="#fff" />
    </g>
  </svg>`}function fs({onLoggedIn:e,onRegister:t}){let[a,n]=S(""),[s,o]=S(""),{errors:i,setErrors:r,refs:u,fail:m}=Fa(),g=async h=>{if(h.preventDefault(),r({}),!gs.test(a.trim()))return m("email","Introduce un correo v\xE1lido");if(s.length<De)return m("password",`M\xEDnimo ${De} caracteres`);await R(async()=>{await Oe.login(a,s),x("success"),e()})},l=async()=>{let h=await le({title:"Restablecer contrase\xF1a",message:"Te mandaremos un correo con un enlace para elegir una contrase\xF1a nueva.",label:"Correo electr\xF3nico",type:"email",value:a,confirm:"Enviar"});h!==null&&await R(async()=>{await Oe.resetPassword(h),B(`Correo enviado a ${h.trim()}. Revisa tambi\xE9n el spam.`)})};return c`<main class="auth-screen">
    <div class="float stagger" style="--i:0"><${Jo} /></div>
    <h1 class="brand stagger" style="--i:1">Stock Casa</h1>
    <p class="welcome stagger" style="--i:2">Tu despensa, siempre al día</p>
    <p class="muted center stagger" style="--i:3">Controla lo que tienes en casa y compártelo con quien vive contigo</p>

    <form class="card form-card stagger" style="--i:4" onSubmit=${g} novalidate>
      <${Ge} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a}
        error=${i.email} inputRef=${h=>u.current.email=h} onInput=${h=>n(h.target.value)} />
      <${Ge} label="Contraseña" icon="lock" type="password" autocomplete="current-password" value=${s}
        error=${i.password} inputRef=${h=>u.current.password=h} onInput=${h=>o(h.target.value)} />
      <button class="btn primary wide" type="submit"><${f} name="login" size=${20} /> Iniciar sesión</button>
      <button class="btn text center-self" type="button" onClick=${l}>¿Has olvidado la contraseña?</button>
    </form>

    <p class="center stagger" style="--i:5">
      <span class="muted">¿Aún no tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Crear una</button>
    </p>
  </main>`}function $s({onRegistered:e,onBack:t}){let[a,n]=S({nickname:"",email:"",password:"",repeat:""}),{errors:s,setErrors:o,refs:i,fail:r}=Fa(),u=l=>h=>n({...a,[l]:h.target.value}),m=async l=>{if(l.preventDefault(),o({}),!a.nickname.trim())return r("nickname","Escribe un nombre o apodo");if(!gs.test(a.email.trim()))return r("email","Introduce un correo v\xE1lido");if(a.password.length<De)return r("password",`M\xEDnimo ${De} caracteres`);if(a.password!==a.repeat)return r("repeat","Las contrase\xF1as no coinciden");await R(async()=>{await Oe.register(a.nickname,a.email,a.password,a.repeat),x("success"),B(`\xA1Bienvenido/a, ${a.nickname.trim()}!`),e()})},g=l=>h=>i.current[l]=h;return c`<main class="auth-screen">
    <button class="icon-btn light self-start" onClick=${t} aria-label="Volver"><${f} name="arrow_back" /></button>
    <div class="auth-badge pop-in"><${f} name="person" size=${40} /></div>
    <h1 class="screen-title center stagger" style="--i:1">Crea tu cuenta</h1>
    <p class="muted center stagger" style="--i:2">En un minuto estás organizando tu despensa</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${m} novalidate>
      <${Ge} label="¿Cómo te llamamos?" icon="people" maxlength="24" autocomplete="nickname" value=${a.nickname}
        error=${s.nickname} inputRef=${g("nickname")} onInput=${u("nickname")} />
      <${Ge} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a.email}
        error=${s.email} inputRef=${g("email")} onInput=${u("email")} />
      <${Ge} label="Contraseña (mínimo 6 caracteres)" icon="lock" type="password" autocomplete="new-password" value=${a.password}
        error=${s.password} inputRef=${g("password")} onInput=${u("password")} />
      <${Ge} label="Repite la contraseña" icon="lock" type="password" autocomplete="new-password" value=${a.repeat}
        error=${s.repeat} inputRef=${g("repeat")} onInput=${u("repeat")} />
      <button class="btn primary wide" type="submit"><${f} name="check" size=${20} /> Crear cuenta</button>
    </form>

    <p class="center stagger" style="--i:4">
      <span class="muted">¿Ya tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Iniciar sesión</button>
    </p>
  </main>`}function vs({onReady:e,onLogout:t}){let[a,n]=S("Mi casa"),[s,o]=S(""),[i,r]=S("\xA1Hola!"),{errors:u,setErrors:m,refs:g,fail:l}=Fa();W(()=>{Se.me().then(v=>r(`\xA1Hola, ${we(v)}!`)).catch(()=>{})},[]);let h=v=>{x("success"),B(v),ut(),e()},d=async v=>{if(v.preventDefault(),m({}),s.trim().length!==6)return l("code",`El c\xF3digo tiene ${6} caracteres`);await R(async()=>{let w=await ee.join(s);h(`Ahora est\xE1s en \xAB${w.name}\xBB`)},{onError:w=>w instanceof _e&&w.isSessionExpired?t():l("code",w.message)})},p=async v=>{if(v.preventDefault(),m({}),!a.trim())return l("name","Este campo es obligatorio");await R(async()=>{let w=await ee.create(a);h(`Casa \xAB${w.name}\xBB creada`)})};return c`<main class="auth-screen">
    <div class="auth-badge pop-in"><${f} name="home" size=${40} /></div>
    <h1 class="screen-title center stagger" style="--i:1">${i}</h1>
    <p class="muted center stagger" style="--i:2">Para empezar, únete a la casa de alguien o crea la tuya</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${d} novalidate>
      <h2>Unirme a una casa</h2>
      <p class="muted">Pide el código de 6 caracteres a alguien de la casa (lo tiene en la pestaña Casa).</p>
      <${Ge} label="Código de 6 caracteres" icon="people" class="code-input" maxlength="6" autocapitalize="characters"
        autocomplete="off" value=${s} error=${u.code} inputRef=${v=>g.current.code=v}
        onInput=${v=>o(v.target.value.toUpperCase())} />
      <button class="btn primary wide" type="submit"><${f} name="login" size=${20} /> Unirme</button>
    </form>

    <p class="muted center stagger" style="--i:4">— o —</p>

    <form class="card form-card stagger" style="--i:5" onSubmit=${p} novalidate>
      <h2>Crear una casa nueva</h2>
      <p class="muted">Serás el primer miembro y podrás invitar a quien quieras con su código.</p>
      <${Ge} label="Nombre de la casa" icon="home" maxlength="40" value=${a} error=${u.name}
        inputRef=${v=>g.current.name=v} onInput=${v=>n(v.target.value)} />
      <button class="btn tonal wide" type="submit"><${f} name="add" size=${20} /> Crear casa</button>
    </form>

    <button class="btn text center-self stagger" style="--i:6" onClick=${t}><${f} name="logout" size=${20} /> Cerrar sesión</button>
  </main>`}var ys=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function da({title:e,products:t,marked:a=[],markedLabel:n="Ya est\xE1",freeLabel:s="No est\xE1 en la despensa",close:o}){let[i,r]=S(""),u=Y(),m=new Set(a);W(()=>{window.matchMedia?.("(pointer: fine)").matches&&setTimeout(()=>u.current?.focus(),250)},[]);let g=Ye(()=>{let h=ys(i.trim());return[...h?t.filter(p=>ys(`${p.name} ${p.category} ${p.location}`).includes(h)):t].sort((p,v)=>V.isLow(v)-V.isLow(p)||p.name.localeCompare(v.name,"es"))},[t,i]),l=i.trim();return c`<div class="sheet-body picker">
    <div class="sheet-title">
      <h2 class="grow">${e}</h2>
      <button class="icon-btn" onClick=${()=>o(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <label class="search">
      <${f} name="search" size=${20} />
      <input ref=${u} type="search" placeholder="Buscar en la despensa" value=${i} onInput=${h=>r(h.target.value)} />
    </label>

    <button class="free-item" onClick=${()=>o({free:l})}>
      <span class="thumb mono tone-free" style="width:48px;height:48px"><${f} name="edit" size=${22} /></span>
      <span class="grow min0 left">
        <strong class="ellipsis block">${l?`A\xF1adir \xAB${l}\xBB`:"Escribir otra cosa"}</strong>
        <span class="muted small">${s}</span>
      </span>
      <${f} name="chevron_right" />
    </button>

    ${t.length===0&&c`<p class="muted center small">Aún no hay productos en la despensa.</p>`}
    ${t.length>0&&g.length===0&&c`<p class="muted center small">Ningún producto coincide con «${l}».</p>`}

    <div class="picker-grid">
      ${g.map((h,d)=>c`<button key=${h.id} class=${`pick-tile enter ${m.has(h.id)?"marked":""}`}
        style=${`--i:${Math.min(d,14)}`} onClick=${()=>o({product:h})}>
        <span class="pick-photo">
          <${ie} url=${V.image(h)} name=${h.name} size=${84} />
          ${m.has(h.id)&&c`<span class="pick-badge"><${f} name="check" size=${14} /></span>`}
          ${V.isLow(h)&&!m.has(h.id)&&c`<span class="pick-low"></span>`}
        </span>
        <span class="pick-name ellipsis2">${h.name}</span>
        <span class="muted tiny">${m.has(h.id)?n:`${Q(h.quantity)} ${h.unit}`}</span>
      </button>`)}
    </div>
  </div>`}var bs={OK:{label:"Hay de sobra",tone:"success"},BELOW_MINIMUM:{label:"Quedar\xE1 bajo m\xEDnimo",tone:"warning"},NOT_ENOUGH:{label:"No llega",tone:"danger"},NOT_IN_PANTRY:{label:"Hay que comprarlo",tone:"primary"},OPTIONAL:{label:"Opcional",tone:"neutral"}},ws=["Todas",...Fe.map(e=>e.label)],Zo=e=>Fe.find(t=>t.label===e)?.key;function ks(e){return e.canCook?e.items.some(t=>t.status==="BELOW_MINIMUM")?{text:"Puedes cocinarla (algo quedar\xE1 bajo m\xEDnimo)",tone:"warning"}:{text:"Puedes cocinarla",tone:"success"}:{text:e.missing.length===1?"Falta 1 ingrediente":`Faltan ${e.missing.length} ingredientes`,tone:"danger"}}var ma=e=>String(e.steps||"").split(`
`).map(t=>t.replace(/^\s*\d+[.)-]\s*/,"").trim()).filter(Boolean),_s=e=>String(e||"").trim().toLowerCase();function Cs({active:e}){let[t,a]=S(null),[n,s]=S([]),[o,i]=S("Todas"),r=async(p=!1)=>{await R(async()=>{await ee.current();let[v,w]=await Promise.all([oe.all(),fe.all()]);a(v),s(w)},{loading:!1,onError:p?()=>{}:ge})};W(()=>{e&&r()},[e]),Ee(p=>p==="changed"&&e&&r(!0));let u=async p=>{await G(pa,{recipe:p,prods:n}),r(!0)},m=async p=>{await G(pa,{recipe:oe.fromLibrary(p,n),prods:n,library:p}),r(!0)},g=async()=>{await G(Is,{initial:null,prods:n})&&r(!0)},l=new Set((t||[]).map(p=>_s(p.name))),h=t?oe.suggest(t,n,6,se.get().allergens||[]):[],d=ea.filter(p=>!l.has(_s(p.name))&&(o==="Todas"||p.meal===o||o==="Almuerzo/Merienda"&&p.meal==="Desayuno"));return c`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Recetas</h1>
      <button class="icon-btn" onClick=${g} aria-label="Nueva receta"><${f} name="add" /></button>
    </header>

    ${!t&&c`<div class="skeleton-list">${[0,1].map(()=>c`<div class="skeleton tall"></div>`)}</div>`}

    ${h.length>0&&c`<div class="row section-row">
      <h2 class="section-title grow">Con lo que tienes</h2>
      <button class="btn text small" onClick=${()=>Lt()}>Ver todo</button>
    </div>
    <div class="suggest-strip">
      ${h.map((p,v)=>c`<button key=${p.recipe.name} class="suggest-card enter" style=${`--i:${v}`}
        onClick=${async()=>{await G(pa,{recipe:p.recipe,prods:n,library:p.library}),r(!0)}}>
        <${ie} url=${p.recipe.photo?.url} name=${p.recipe.name} size=${54} />
        <strong class="ellipsis2">${p.recipe.name}</strong>
        ${p.expiring.length>0?c`<span class="tag warning tiny-tag"><${f} name="hourglass" size=${12} /> Usa ${p.expiring[0].product.name.split(" ")[0].toLowerCase()} · ${Ss(p.expiring[0].days)}</span>`:c`<span class=${`tiny strong ${p.check.canCook?"success-text":"muted"}`}>${p.check.canCook?"Puedes hacerla ya":`Tienes ${p.have} de ${p.total}`}</span>`}
      </button>`)}
    </div>`}

    ${t&&c`<h2 class="section-title">Mis recetas</h2>`}
    ${t&&t.length===0&&c`<div class="card empty-card compact">
      <${Ce} name="recipes" />
      <div class="grow min0">
        <p class="muted small">Guarda una de las ideas de abajo o crea la tuya: verás si puedes cocinarla con lo que tienes y qué falta.</p>
        <button class="btn primary small" onClick=${g}><${f} name="add" size=${18} /> Nueva receta</button>
      </div>
    </div>`}

    ${t&&t.length>0&&c`<div class="chips">
      ${ws.map(p=>c`<button class=${`chip ${o===p?"checked":""}`} onClick=${()=>{i(p),x("tap")}}>${p}</button>`)}
    </div>`}
    <div class="list">
      ${(t||[]).filter(p=>o==="Todas"||(p.meals||[]).includes(Zo(o))).map((p,v)=>{let w=oe.check(p,n),C=ks(w),I=[...new Set(w.items.flatMap(z=>je(xt(z),se.get().allergens||[])))];return c`<button key=${p.id} class="card recipe-card enter" style=${`--i:${Math.min(v,12)}`} onClick=${()=>u(p)}>
          <${ie} url=${p.photo?.url} name=${p.name} size=${64} />
          <span class="grow min0 left">
            <h3 class="ellipsis">${p.name}</h3>
            <span class="muted small">${[(p.meals||[]).map(xn).join(", "),`${p.ingredients.length} ingredientes`,`${p.servings} raciones`].filter(Boolean).join(" \xB7 ")}</span>
            <span class=${`tag ${C.tone}`}>${C.text}</span>
            ${I.length>0&&c`<span class="allergen-line"><${f} name="warning" size=${13} /> ${Ae(I).join(", ")}</span>`}
          </span>
          <${f} name="chevron_right" />
        </button>`})}
    </div>

    ${t&&c`<button class="card community-card enter" onClick=${async()=>{await G(nr,{prods:n}),r(!0)}}>
      <span class="community-icon"><${f} name="globe" size=${26} /></span>
      <span class="grow min0 left"><strong class="block">Comunidad</strong><span class="muted small">Recetas que comparten otros usuarios: dales «me gusta», coméntalas y guárdalas</span></span>
      <${f} name="chevron_right" />
    </button>`}

    ${t&&c`<div class="row section-row">
      <h2 class="section-title grow">Ideas para cocinar</h2>
    </div>
    <div class="chips">
      ${ws.map(p=>c`<button class=${`chip ${o===p?"checked":""}`} onClick=${()=>{i(p),x("tap")}}>${p}</button>`)}
    </div>
    <div class="idea-grid">
      ${d.map((p,v)=>{let w=oe.check(oe.fromLibrary(p,n),n),C=w.items.filter(I=>I.product&&I.status!=="NOT_ENOUGH").length;return c`<button key=${p.id} class="idea-card enter" style=${`--i:${Math.min(v,12)}`} onClick=${()=>m(p)}>
          <span class="idea-photo"><img src=${p.photoUrl} alt="" loading="lazy" /></span>
          <span class="idea-body">
            <strong class="ellipsis2">${p.name}</strong>
            <span class="muted tiny"><${f} name="clock" size=${12} /> ${p.minutes} min · ${p.meal}</span>
            <span class=${`tiny strong ${C===w.items.length?"success-text":"muted"}`}>Tienes ${C} de ${w.items.length}</span>
          </span>
        </button>`})}
    </div>
    ${d.length===0&&c`<p class="muted small center">Ya has guardado todas las ideas de este tipo.</p>`}`}

    ${t&&t.length>0&&c`<button class="fab" onClick=${g} aria-label="Nueva receta"><${f} name="add" size=${28} /></button>`}
  </section>`}var Ss=e=>e===0?"hoy":e===1?"ma\xF1ana":`en ${e} d\xEDas`;async function Lt(){let e=await R(async()=>{await ee.current();let[t,a]=await Promise.all([oe.all(),fe.all()]);return{saved:t,prods:a}});e&&(await G(er,e),K.emit("changed"))}function er({saved:e,prods:t,close:a}){let n=oe.suggest(e,t,12,se.get().allergens||[]),s=o=>G(pa,{recipe:o.recipe,prods:t,library:o.library});return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">Con lo que tienes en casa</p><h2>¿Qué puedo cocinar?</h2></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <p class="muted small">Primero las que aprovechan lo que está a punto de caducar.</p>
    ${n.length===0&&c`<div class="empty"><${Ce} name="recipes" /><p class="muted">Añade productos a la despensa para ver qué puedes cocinar.</p></div>`}
    <div class="list">
      ${n.map((o,i)=>c`<button class="card recipe-card enter" style=${`--i:${i}`} onClick=${()=>s(o)}>
        <${ie} url=${o.recipe.photo?.url} name=${o.recipe.name} size=${64} />
        <span class="grow min0 left">
          <h3 class="ellipsis">${o.recipe.name}</h3>
          <span class=${`small strong ${o.check.canCook?"success-text":"muted"}`}>${o.check.canCook?"Tienes todo":`Tienes ${o.have} de ${o.total} ingredientes`}${o.library?" \xB7 idea":""}</span>
          ${o.expiring.length>0&&c`<span class="expiring-chips">${o.expiring.slice(0,3).map(r=>c`<span class=${`tag ${r.days<=1?"danger":"warning"}`}>${r.product.name} · ${Ss(r.days)}</span>`)}</span>`}
          ${o.allergens.length>0&&c`<span class="allergen-line"><${f} name="warning" size=${13} /> Lleva ${Ae(o.allergens).join(", ").toLowerCase()}</span>`}
        </span>
        <${f} name="chevron_right" />
      </button>`)}
    </div>
  </div>`}function pa({recipe:e,prods:t,library:a=null,close:n}){let[s,o]=S(e),[i,r]=S(t),[u,m]=S({});W(()=>{let k=!0,j=se.get().stores;return s.ingredients.forEach(me=>{u[me.name]===void 0&&oe.storeOptions(me,j).catch(()=>[]).then(ze=>k&&m(J=>({...J,[me.name]:ze})))}),()=>{k=!1}},[s.ingredients.map(k=>k.name).join("|")]);let g={...s,ingredients:s.ingredients.map(k=>k.option?k:{...k,option:u[k.name]?.[0]||null})},l=oe.check(g,i),h=ks(l),d=ma(g),p=!!g.id,v=se.get().allergens||[],w=k=>je(xt(k),v),C=[...new Set(l.items.flatMap(w))],I=async()=>r(await fe.all()),z=async(k=s)=>{if(k.id)return k;let j=await R(()=>oe.save(k));return j&&(o(j),K.emit("changed")),j},T=async()=>{await z(g)&&(x("success"),B("Guardada en tus recetas"))},U=async()=>{if(!l.toBuy.length)return B("No hace falta comprar nada");await R(async()=>{let k=await oe.addMissingToShopping(l);x("pop"),B(k===1?"1 art\xEDculo a\xF1adido a la compra":`${k} art\xEDculos a\xF1adidos a la compra`),K.emit("changed")})},D=async()=>{await R(async()=>{await oe.cook(l),x("success"),B("\xA1Que aproveche! Despensa actualizada"),K.emit("changed"),await I()})},N=async()=>{let k=l.canCook?"Se descontar\xE1n los ingredientes de la despensa.":"Hay ingredientes que no llegan: se descontar\xE1 lo que haya y quedar\xE1n a 0.";await ye({title:`Cocinar \xAB${g.name}\xBB`,message:k,confirm:"Descontar"})&&await D()},F=async()=>{await G(or,{recipe:g,check:l})==="discount"&&await D()},q=async()=>{let k=Array.from({length:7},(J,he)=>pe(Z(),he)),j=await qe("\xBFQu\xE9 d\xEDa?",k.map((J,he)=>({label:`${he===0?"Hoy":he===1?"Ma\xF1ana":Ct(Ke(Je(J)))} \xB7 ${ve(J)}`,icon:"calendar"})));if(j===null)return;let me=await qe("\xBFPara cu\xE1ndo?",it.map(J=>({label:J.label,icon:J.icon})));if(me===null)return;let ze=await z();ze&&await R(async()=>{await Me.set(k[j],it[me].key,ze),x("pop"),B(`Planificada: ${ve(k[j])} \xB7 ${it[me].label}`),K.emit("changed")})},O=async k=>{let j=[k.product,...k.alternatives].filter(Boolean),me=await qe(`\xBFQu\xE9 ${k.ingredient.name.toLowerCase()} usas?`,j.map(he=>({label:he.name,hint:`Tienes ${Q(he.quantity)} ${he.unit}`,icon:"pantry"})));if(me===null)return;let ze=j[me],J={...s,ingredients:s.ingredients.map(he=>he===k.ingredient||he.name===k.ingredient.name&&he.productId===k.ingredient.productId?{...he,productId:ze.id}:he)};o(J),x("pop"),B(`Usar\xE1s \xAB${ze.name}\xBB`),J.id&&(await R(()=>oe.save(J),{loading:!1}),K.emit("changed"))},E=async k=>{let j=u[k.name]||[];if(j.length<2)return;let me=await G(ar,{ingredient:k,options:j});if(!me)return;let ze={...s,ingredients:s.ingredients.map(J=>J.name===k.name?{...J,option:me}:J)};o(ze),x("pop"),B(`Usar\xE1s \xAB${me.name}\xBB`),ze.id&&(await R(()=>oe.save(ze),{loading:!1}),K.emit("changed"))},[y,b]=S(void 0);W(()=>{s.id&&ke.sharedFrom(s).then(b).catch(()=>b(null))},[s.id]);let $=async()=>{if(!await ye({title:y?"Actualizar en la comunidad":"Compartir con la comunidad",message:y?"Se cambiar\xE1 la versi\xF3n compartida por la de ahora.":"Todos los usuarios de Stock Casa podr\xE1n verla, darle \xABme gusta\xBB, comentarla y guardarla. Se ver\xE1 tu apodo.",confirm:y?"Actualizar":"Compartir"}))return;let j=await R(()=>ke.share(g));j&&(b(j),x("success"),B(y?"Receta actualizada en la comunidad":"\xA1Receta compartida con la comunidad!"))},_=async()=>{await ye({title:"Dejar de compartir",message:"Se quitar\xE1 de la comunidad con sus \xABme gusta\xBB y comentarios.",confirm:"Dejar de compartir",danger:!0})&&await R(async()=>{await ke.unshare(y),b(null),B("Ya no est\xE1 en la comunidad")})},M=async()=>{let k=await G(Is,{initial:s,prods:i});k==="deleted"?n():k&&o(k)},P=g.photo?.url;return c`<div class="sheet-body recipe-detail">
    ${P?c`<div class="recipe-hero">
      <img src=${P} alt="" />
      <div class="recipe-hero-actions">
        ${p&&c`<button class="icon-btn light" onClick=${M} aria-label="Editar"><${f} name="edit" /></button>`}
        <button class="icon-btn light" onClick=${()=>n()} aria-label="Cerrar"><${f} name="close" /></button>
      </div>
      <div class="recipe-hero-text">
        <h2>${g.name}</h2>
        <p>${g.servings} raciones${a?` \xB7 ${a.minutes} min \xB7 ${a.meal}`:""}</p>
      </div>
    </div>`:c`<div class="sheet-title">
      <${ie} name=${g.name} size=${52} />
      <div class="grow min0"><h2>${g.name}</h2><p class="muted small">${g.servings} raciones</p></div>
      ${p&&c`<button class="icon-btn" onClick=${M} aria-label="Editar"><${f} name="edit" /></button>`}
      <button class="icon-btn" onClick=${()=>n()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>`}

    <div class=${`status-banner ${h.tone}`}>${h.text}</div>
    ${C.length>0&&c`<div class="status-banner danger allergen-banner"><${f} name="warning" size=${18} /> Lleva ${Ae(C).join(", ").toLowerCase()} (tus alergias)</div>`}

    <h3 class="section-label">Ingredientes</h3>
    <div class="ingredients">
      ${l.items.map(k=>c`<div class="ingredient">
        <${ie} url=${k.product?k.product.photo?.url||k.product.imageUrl:null} name=${k.ingredient.name} size=${42} />
        <div class="grow min0">
          <strong class="ellipsis">${k.ingredient.name}</strong>
          <span class="muted small">
            ${k.product?k.keeps?`${Q(k.ingredient.quantity)} ${k.ingredient.unit} \xB7 tienes ${Q(k.inStock)} ${k.product.unit} \xB7 no se descuenta`:`Usa ${Q(k.use)} ${k.product.unit} \xB7 tienes ${Q(k.inStock)} \xB7 quedar\xE1n ${Q(Math.max(k.after,0))}`:`${Q(k.ingredient.quantity)} ${k.ingredient.unit} \xB7 no est\xE1 en la despensa`}
            ${k.ingredient.optional?" \xB7 opcional":""}
          </span>
          ${k.matched&&c`<span class="match-line"><${f} name="check" size=${13} /> Tienes ${k.product.name}</span>`}
        </div>
        <span class=${`tag ${bs[k.status].tone}`}>${k.status==="NOT_IN_PANTRY"?"Comprar":bs[k.status].label}</span>
        ${w(k).length>0&&c`<span class="allergen-line"><${f} name="warning" size=${13} /> ${Ae(w(k)).join(", ")}</span>`}
        ${k.alternatives.length>0&&c`<button type="button" class="store-line pantry-line" onClick=${()=>O(k)}>
          <${f} name="pantry" size=${15} /> <span class="grow min0 ellipsis">${k.alternatives.length===1?`Tambi\xE9n tienes ${k.alternatives[0].name}`:`Tienes ${k.alternatives.length+1} opciones en la despensa`}</span>
          <span class="options-pill">Elegir <${f} name="chevron_right" size=${14} /></span>
        </button>`}
        <${tr} option=${k.ingredient.option} options=${u[k.ingredient.name]} onPick=${()=>E(k.ingredient)} />
      </div>`)}
    </div>

    ${l.toBuy.length>0&&c`<p class="muted small">Para cocinarla y seguir por encima de los mínimos hay que comprar ${l.toBuy.length} ${l.toBuy.length===1?"cosa":"cosas"}${l.estimatedCost>0?` (\u2248 ${ne(l.estimatedCost)})`:""}.</p>`}

    ${d.length>0&&c`<h3 class="section-label">Preparación</h3>
      <ol class="step-list">${d.map((k,j)=>c`<li><span class="step-num">${j+1}</span><p>${k}</p></li>`)}</ol>`}
    ${a&&c`<p class="muted tiny">Foto: <a href=${a.photoSource} target="_blank" rel="noopener">Wikimedia Commons</a> (autor y licencia en su página)</p>`}

    <div class="stack">
      ${d.length>0&&c`<button class="btn primary wide" onClick=${F}><${f} name="play" size=${20} /> Cocinar paso a paso</button>`}
      ${!p&&c`<button class="btn tonal wide" onClick=${T}><${f} name="bookmark" size=${20} /> Guardar en mis recetas</button>`}
      ${p&&c`<button class=${`btn wide ${d.length?"tonal":"primary"}`} onClick=${N}><${f} name="cook" size=${20} /> Ya la he cocinado: descontar</button>`}
      <button class="btn tonal wide" onClick=${U}><${f} name="cart" size=${20} /> Añadir lo necesario a la compra</button>
      <button class="btn text wide" onClick=${q}><${f} name="calendar" size=${20} /> Añadir al plan semanal</button>
      ${p&&y!==void 0&&c`<button class="btn text wide" onClick=${$}><${f} name="globe" size=${20} /> ${y?"Actualizar en la comunidad":"Compartir con la comunidad"}</button>`}
      ${y&&c`<p class="muted small center">Compartida en la comunidad · ${y.likes||0} «me gusta» <button class="btn text inline" onClick=${_}>Dejar de compartir</button></p>`}
    </div>
  </div>`}function tr({option:e,options:t,onPick:a}){if(t===void 0&&!e)return c`<div class="store-line muted"><span class="mini-spinner"></span> Buscando en tus supermercados…</div>`;if(!e)return c`<div class="store-line muted">No está en tus supermercados</div>`;let n=Ie.find(i=>i.key===e.store),s=t?.length||0,o=c`<span class="store-dot" style=${`background:${n?.color||"#F2A93B"}`}></span>
    <span class="grow min0 ellipsis">${e.source} · ${e.name}${e.price!=null?` \xB7 ${ne(e.price)}`:""}</span>
    ${s>1&&c`<span class="options-pill">${s} opciones <${f} name="chevron_right" size=${14} /></span>`}`;return s>1?c`<button type="button" class="store-line" onClick=${a} aria-label=${`Elegir entre ${s} opciones`}>${o}</button>`:c`<div class="store-line">${o}</div>`}function ar({ingredient:e,options:t,close:a}){return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">${t.length} opciones en tus supermercados</p><h2 class="ellipsis">${e.name}</h2></div>
      <button class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <div class="list">
      ${t.map(n=>{let s=Ie.find(r=>r.key===n.store),o=oe.sameOption(n,e.option),i=je(zt(n.name,n.category),se.get().allergens||[]);return c`<button class=${`card option-row ${o?"chosen":""}`} onClick=${()=>a(n)}>
          <${ie} url=${n.imageUrl} name=${n.name} size=${52} />
          <span class="grow min0 left">
            <strong class="ellipsis2">${n.name}</strong>
            <span class="muted small block">${[n.brand,n.packageInfo].filter(Boolean).join(" \xB7 ")}</span>
            <span class="store-badge" style=${`--store:${s?.color||"#F2A93B"}`}>${n.source}</span>
            ${i.length>0&&c`<span class="tag danger allergen-tag"><${f} name="warning" size=${11} /> ${Ae(i).join(", ")}</span>`}
          </span>
          <span class="price">${n.price!=null?ne(n.price):c`<span class="muted small">Sin precio</span>`}</span>
          ${o&&c`<${f} name="check" size=${20} />`}
        </button>`})}
    </div>
  </div>`}function ja({name:e,color:t,photo:a,size:n=26}){return c`<span class="author-badge" style=${`width:${n}px;height:${n}px;background:${t};font-size:${Math.round(n*.45)}px`}>
    ${a?c`<img src=${a} alt="" />`:(e||"?").charAt(0).toUpperCase()}
  </span>`}function nr({prods:e,close:t}){let[a,n]=S("popular"),[s,o]=S(null),[i,r]=S(""),u=()=>ke.all(a).then(o).catch(h=>{o([]),ge(h)});W(()=>{o(null),u()},[a]);let m=async h=>{let d=await G(sr,{item:h,prods:e});d==="deleted"?o(s.filter(p=>p.id!==h.id)):d&&o(s.map(p=>p.id===h.id?d:p))},g=i.trim().toLowerCase(),l=(s||[]).filter(h=>!g||h.name.toLowerCase().includes(g)||h.ingredients.some(d=>d.name.toLowerCase().includes(g)));return c`<div class="sheet-body">
    <div class="sheet-title">
      <span class="community-icon small"><${f} name="globe" size=${22} /></span>
      <div class="grow min0"><p class="muted small">Recetas de todos los usuarios</p><h2>Comunidad</h2></div>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <label class="search"><${f} name="search" size=${20} /><input type="search" placeholder="Buscar receta o ingrediente" value=${i} onInput=${h=>r(h.target.value)} /></label>
    <div class="segmented">
      <button type="button" class=${a==="popular"?"on":""} onClick=${()=>{n("popular"),x("tap")}}>Más gustadas</button>
      <button type="button" class=${a==="recent"?"on":""} onClick=${()=>{n("recent"),x("tap")}}>Recientes</button>
    </div>
    ${!s&&c`<div class="skeleton-list">${[0,1,2].map(()=>c`<div class="skeleton tall"></div>`)}</div>`}
    ${s&&l.length===0&&c`<div class="empty"><${Ce} name="recipes" />
      <h2>${g?"Nada por aqu\xED":"A\xFAn no hay recetas"}</h2>
      <p class="muted">${g?"Prueba con otra b\xFAsqueda.":"S\xE9 el primero: abre una de tus recetas y pulsa \xABCompartir con la comunidad\xBB."}</p></div>`}
    <div class="list">
      ${l.map((h,d)=>c`<button key=${h.id} class="card community-row enter" style=${`--i:${Math.min(d,12)}`} onClick=${()=>m(h)}>
        <${ie} url=${h.photo?.url} name=${h.name} size=${68} />
        <span class="grow min0 left">
          <h3 class="ellipsis2">${h.name}</h3>
          <span class="author-line"><${ja} name=${h.authorName} color=${h.authorColor} photo=${h.authorPhoto} size=${20} /> ${h.authorName}${ke.isMine(h)?" (t\xFA)":""}</span>
          <span class="community-stats">
            <span class=${h.liked?"liked":""}><${f} name=${h.liked?"heart":"heart_outline"} size=${16} /> ${h.likes}</span>
            <span><${f} name="chat" size=${15} /> ${h.comments}</span>
            <span class="muted">${h.ingredients.length} ingredientes</span>
          </span>
        </span>
      </button>`)}
    </div>
  </div>`}function sr({item:e,prods:t,close:a}){let[n,s]=S(e),[o,i]=S(null),[r,u]=S(""),[m,g]=S(!1),l=ma(n),h=ke.isMine(n),d=Y();W(()=>{ke.comments(n).then(i).catch(()=>i([]))},[n.id]);let p=async()=>{let z=n,T={...n,liked:!n.liked,likes:n.likes+(n.liked?-1:1)};s(T),x(T.liked?"pop":"tap"),T.liked&&Te(d.current);try{s(await ke.toggleLike(z))}catch(U){s(z),ge(U)}},v=async z=>{if(z.preventDefault(),!r.trim()||m)return;g(!0);let T=await R(()=>ke.comment(n,r),{loading:!1});g(!1),T&&(i([...o||[],T]),s({...n,comments:n.comments+1}),u(""),x("pop"))},w=async z=>{await ye({title:"Borrar comentario",message:"\xBFSeguro que quieres borrarlo?",confirm:"Borrar",danger:!0})&&await R(async()=>{await ke.removeComment(z),i(o.filter(T=>T.id!==z.id)),s({...n,comments:Math.max(0,n.comments-1)})})},C=async()=>{await R(()=>ke.saveToMine(n,t))&&(x("success"),B("Guardada en tus recetas"),K.emit("changed"))},I=async()=>{await ye({title:"Dejar de compartir",message:"Se quitar\xE1 de la comunidad con sus \xABme gusta\xBB y comentarios.",confirm:"Dejar de compartir",danger:!0})&&await R(async()=>{await ke.unshare(n),B("Ya no est\xE1 en la comunidad"),a("deleted")})};return c`<div class="sheet-body recipe-detail">
    ${n.photo?c`<div class="recipe-hero">
      <img src=${n.photo.url} alt="" />
      <div class="recipe-hero-actions"><button class="icon-btn light" onClick=${()=>a(n)} aria-label="Cerrar"><${f} name="close" /></button></div>
      <div class="recipe-hero-text"><h2>${n.name}</h2><p>${n.servings} raciones</p></div>
    </div>`:c`<div class="sheet-title">
      <${ie} name=${n.name} size=${52} />
      <div class="grow min0"><h2>${n.name}</h2><p class="muted small">${n.servings} raciones</p></div>
      <button class="icon-btn" onClick=${()=>a(n)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>`}

    <div class="row community-head">
      <${ja} name=${n.authorName} color=${n.authorColor} photo=${n.authorPhoto} size=${36} />
      <div class="grow min0"><strong class="block">${n.authorName}${h?" (t\xFA)":""}</strong><span class="muted small">Compartida ${n.createdAt?ve(n.createdAt.slice(0,10)):""}</span></div>
      <button ref=${d} class=${`like-btn ${n.liked?"on":""}`} onClick=${p} aria-label=${n.liked?"Quitar me gusta":"Me gusta"}>
        <${f} name=${n.liked?"heart":"heart_outline"} size=${22} /> ${n.likes}
      </button>
    </div>

    <h3 class="section-label">Ingredientes</h3>
    <ul class="cook-ingredients">
      ${n.ingredients.map(z=>c`<li><span class="grow">${z.name}</span><strong>${Q(z.quantity)} ${z.unit}</strong></li>`)}
    </ul>
    ${l.length>0&&c`<h3 class="section-label">Preparación</h3>
      <ol class="step-list">${l.map((z,T)=>c`<li><span class="step-num">${T+1}</span><p>${z}</p></li>`)}</ol>`}

    <div class="stack">
      <button class="btn primary wide" onClick=${C}><${f} name="bookmark" size=${20} /> Guardar en mis recetas</button>
      ${h&&c`<button class="btn text wide" onClick=${I}>Dejar de compartir</button>`}
    </div>

    <h3 class="section-label">Comentarios${n.comments?` (${n.comments})`:""}</h3>
    ${o===null&&c`<div class="skeleton"></div>`}
    ${o?.length===0&&c`<p class="muted small">Nadie ha comentado todavía. ¿La has probado?</p>`}
    <div class="comments">
      ${(o||[]).map(z=>c`<div class="comment enter" key=${z.id}>
        <${ja} name=${z.authorName} color=${z.authorColor} size=${30} />
        <div class="grow min0 bubble">
          <strong class="small">${z.authorName}</strong>
          <p>${z.text}</p>
        </div>
        ${ke.isMine(z)&&c`<button class="icon-btn small" aria-label="Borrar comentario" onClick=${()=>w(z)}><${f} name="delete" size=${16} /></button>`}
      </div>`)}
    </div>
    <form class="comment-form" onSubmit=${v}>
      <input value=${r} maxlength=${la} placeholder="Escribe un comentario…" onInput=${z=>u(z.target.value)} aria-label="Comentario" />
      <button class="icon-btn" type="submit" disabled=${!r.trim()||m} aria-label="Enviar"><${f} name="send" size=${20} /></button>
    </form>
  </div>`}function or({recipe:e,check:t,close:a}){let n=ma(e),[s,o]=S(-1),[i,r]=S(1),u=Y(null);W(()=>(navigator.wakeLock?.request("screen").then(l=>u.current=l).catch(()=>{}),()=>u.current?.release?.().catch?.(()=>{})),[]);let m=l=>{r(l),o(Math.max(-1,Math.min(n.length,s+l))),x("tap")},g=s===n.length;return c`<div class="sheet-body cooking">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">Modo cocina</p><h2 class="ellipsis">${e.name}</h2></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <div class="cook-progress">
      ${[-1,...n.map((l,h)=>h)].map(l=>c`<span class=${l<s?"done":l===s?"now":""}></span>`)}
    </div>

    <div class="cook-stage" key=${s} style=${`--dir:${i}`}>
      ${s===-1&&c`<div>
        <p class="cook-kicker">Antes de empezar, ten a mano</p>
        <ul class="cook-ingredients">
          ${e.ingredients.map(l=>c`<li><span class="grow">${l.name}</span><strong>${Q(l.quantity)} ${l.unit}</strong></li>`)}
        </ul>
      </div>`}
      ${s>=0&&!g&&c`<div>
        <p class="cook-kicker">Paso ${s+1} de ${n.length}</p>
        <p class="cook-text">${n[s]}</p>
      </div>`}
      ${g&&c`<div class="center-col">
        <${Ce} name="done" />
        <p class="cook-text center">¡Listo! Que aproveche.</p>
        ${t.items.some(l=>l.product)&&c`<p class="muted center">¿Quitamos de la despensa lo que has usado?</p>`}
      </div>`}
    </div>

    ${!g&&c`<div class="row-2">
      <button class="btn tonal" disabled=${s===-1} onClick=${()=>m(-1)}><${f} name="chevron_left" size=${20} /> Anterior</button>
      <button class="btn primary" onClick=${()=>m(1)}>${s===-1?"Empezar":s===n.length-1?"Terminar":"Siguiente"} <${f} name="chevron_right" size=${20} /></button>
    </div>`}
    ${g&&c`<div class="stack">
      ${t.items.some(l=>l.product)&&c`<button class="btn primary wide" onClick=${()=>a("discount")}><${f} name="check" size=${20} /> Sí, descontar ingredientes</button>`}
      <button class="btn text wide" onClick=${()=>a()}>Cerrar</button>
    </div>`}
  </div>`}function Is({initial:e,prods:t,close:a}){let[n,s]=S(e?.name||""),[o,i]=S(String(e?.servings||2)),[r,u]=S(()=>{let b=e?ma(e):[];return b.length?b:[""]}),[m,g]=S(e?.ingredients||[]),[l,h]=S(e?.meals||[]),d=b=>{h(l.includes(b)?l.filter($=>$!==b):[...l,b]),x("tap")},p=(b,$)=>g(m.map((_,M)=>M===b?{..._,...$}:_)),v=async b=>{let $=m[b],_=await le({title:$.name,label:"Cantidad",inputMode:"decimal",value:Q($.quantity),suffix:$.unit,confirm:"Cambiar"}),M=be(_);M&&p(b,{quantity:ue(M)})},w=async()=>{let b=await G(ha,{initialQuery:""});if(!b)return;let $=await le({title:b.name,label:"\xBFCu\xE1nto usa la receta?",inputMode:"decimal",value:"1",confirm:"Siguiente"}),_=be($);if(!_)return;let M=["uds","g","kg","ml","L","cucharadas"],P=await qe("Unidad",M.map(j=>({label:j})));if(P===null)return;let k=b.name.replace(/\s+\d+([.,]\d+)?\s*(kg|g|l|ml|cl|uds?)\b.*$/i,"").trim()||b.name;g([...m,{productId:"",name:k,quantity:ue(_),unit:M[P],option:b,optional:!1,deduct:!0}]),x("pop")},[C,I]=S(void 0),[z,T]=S(null),U=Y(),D=C===null?null:z||e?.photo?.url||null,N=async b=>{let $=b.target.files?.[0];if(b.target.value="",!$)return;let _=await dt($);I(_),T(URL.createObjectURL(_))},F=async()=>{let b=await G(da,{title:"A\xF1adir ingrediente",products:t,marked:m.map($=>$.productId).filter(Boolean),markedLabel:"Ya en la receta",freeLabel:"Se comprar\xE1 cuando haga falta"});if(b){if(b.free!==void 0){let $=b.free.trim()||(await le({title:"Ingrediente",label:"Nombre",confirm:"Siguiente"}))?.trim();if(!$)return;let _=await le({title:$,label:"Cantidad",inputMode:"decimal",value:"1",suffix:"uds",confirm:"A\xF1adir"}),M=be(_);if(!M)return;g([...m,{productId:"",name:$,quantity:ue(M),unit:"uds",optional:!1,deduct:!0}])}else{let $=b.product,_=m.find(j=>j.productId===$.id),M=await le({title:$.name,label:"\xBFCu\xE1nto usa la receta?",inputMode:"decimal",value:_?Q(_.quantity):"1",suffix:$.unit,confirm:_?"Cambiar":"A\xF1adir"}),P=be(M);if(!P)return;let k={productId:$.id,name:$.name,quantity:ue(P),unit:$.unit,optional:_?.optional||!1,deduct:_?.deduct!==!1};g(_?m.map(j=>j.productId===$.id?k:j):[...m,k])}x("pop")}},q=(b,$)=>u(r.map((_,M)=>M===b?$:_)),O=b=>u(r.length===1?[""]:r.filter(($,_)=>_!==b)),E=async b=>{b.preventDefault();let $=await R(async()=>{let _=e?.photo||null;C===null?_=null:C instanceof Blob&&(_=await ca(C));let M={...e||{createdBy:"",emoji:void 0},name:n,servings:parseInt(o,10)||2,steps:r.map(P=>P.trim()).filter(Boolean).join(`
`),emoji:e?.emoji||"\u{1F372}",ingredients:m,photo:_,meals:l};return oe.save(M)});$&&(x("success"),B("Receta guardada"),K.emit("changed"),a($))},y=async()=>{await ye({title:"Eliminar receta",message:`\xBFSeguro que quieres eliminar \xAB${e.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await R(async()=>{await oe.remove(e),B("Receta eliminada"),K.emit("changed"),a("deleted")})};return c`<form class="sheet-body" onSubmit=${E}>
    <div class="sheet-title">
      <h2 class="grow">${e?.id?"Editar receta":"Nueva receta"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>

    <button type="button" class=${`photo-drop ${D?"has-photo":""}`} onClick=${()=>U.current.click()}>
      ${D?c`<img src=${D} alt="" />`:c`<span><${f} name="camera" size=${28} /><span class="block">Añadir una foto del plato</span></span>`}
    </button>
    ${D&&c`<button type="button" class="btn text small center-self" onClick=${()=>{I(null),T(null)}}>Quitar foto</button>`}
    <input ref=${U} type="file" accept="image/*" hidden onChange=${N} />

    <label class="field"><span>Nombre</span><input required maxlength="60" value=${n} onInput=${b=>s(b.target.value)} placeholder="Macarrones con tomate" /></label>
    <label class="field"><span>Raciones</span><input inputmode="numeric" value=${o} onInput=${b=>i(b.target.value)} /></label>

    <h3 class="section-label">¿Para cuándo es?</h3>
    <div class="chips wrap">
      ${Fe.map(b=>c`<button type="button" class=${`chip ${l.includes(b.key)?"checked":""}`} onClick=${()=>d(b.key)}>${b.label}</button>`)}
    </div>

    <h3 class="section-label">Ingredientes</h3>
    ${m.length===0&&c`<p class="muted small">Elige lo que gasta la receta. Si escribes algo general como «jamón», valdrá cualquier jamón que tengas.</p>`}
    <div class="ingredients">
      ${m.map((b,$)=>{let _=t.find(P=>P.id===b.productId),M=_?[]:ta(b,t);return c`<div class="ingredient editor-ingredient">
          <${ie} url=${_?_.photo?.url||_.imageUrl:b.option?.imageUrl||null} name=${b.name} size=${40} />
          <button type="button" class="grow min0 left plain" onClick=${()=>v($)}>
            <strong class="ellipsis block">${b.name}</strong>
            <span class="muted small">${Q(b.quantity)} ${b.unit}${_?"":M.length?` \xB7 tienes ${M[0].name}${M.length>1?` y ${M.length-1} m\xE1s`:""}`:b.option?` \xB7 ${b.option.source}`:" \xB7 no est\xE1 en la despensa"}</span>
          </button>
          <button type="button" class="icon-btn small" aria-label="Quitar" onClick=${()=>g(m.filter((P,k)=>k!==$))}><${f} name="close" size=${18} /></button>
          <div class="ingredient-toggles">
            <button type="button" class=${`mini-toggle ${b.optional?"":"on"}`} onClick=${()=>{p($,{optional:!b.optional}),x("tap")}}>
              ${b.optional?"Opcional":"Necesario"}</button>
            <button type="button" class=${`mini-toggle ${b.deduct===!1?"":"on"}`} onClick=${()=>{p($,{deduct:b.deduct===!1}),x("tap")}}>
              ${b.deduct===!1?"No se descuenta":"Se descuenta al cocinar"}</button>
          </div>
        </div>`})}
    </div>
    <div class="row-2">
      <button type="button" class="btn tonal" onClick=${F}><${f} name="add" size=${20} /> Añadir ingrediente</button>
      <button type="button" class="btn tonal" onClick=${w}><${f} name="store" size=${20} /> Buscar en el súper</button>
    </div>
    ${m.length>0&&c`<p class="muted tiny">Toca «Necesario» u «Opcional» y «Se descuenta» o «No se descuenta» para cambiarlos (por ejemplo, el pan de una tostada no se gasta entero).</p>`}

    <h3 class="section-label">Preparación</h3>
    <ol class="step-editor">
      ${r.map((b,$)=>c`<li>
        <span class="step-num">${$+1}</span>
        <textarea rows="2" value=${b} placeholder=${$===0?"Cuece la pasta\u2026":"Siguiente paso\u2026"} onInput=${_=>q($,_.target.value)}></textarea>
        <button type="button" class="icon-btn small" aria-label="Quitar paso" onClick=${()=>O($)}><${f} name="close" size=${16} /></button>
      </li>`)}
    </ol>
    <button type="button" class="btn text" onClick=${()=>u([...r,""])}><${f} name="add" size=${18} /> Añadir paso</button>

    <button class="btn primary wide" type="submit"><${f} name="check" size=${20} /> Guardar receta</button>
    ${e?.id&&c`<button type="button" class="btn danger wide" onClick=${y}><${f} name="delete" size=${20} /> Eliminar receta</button>`}
  </form>`}function Va(e=se.get().stores){let t=e.map(a=>Pe(a)?.label).filter(Boolean);return t.length<=1?t[0]||"Mercadona":`${t.slice(0,-1).join(", ")} y ${t[t.length-1]}`}var zs="stockcasa.collapsedGroups",ga="Sin categor\xEDa";function rr(){let e=new Date().getHours();return e<6||e>=21?"Buenas noches":e<13?"Buenos d\xEDas":"Buenas tardes"}function ir(){try{return new Set(JSON.parse(localStorage.getItem(zs))||[])}catch{return new Set}}function lr({value:e}){let[t,a]=S(e),n=Y(e);return W(()=>{let s=performance.now(),o=n.current,i,r=u=>{let m=Math.min(1,(u-s)/450),g=1-(1-m)**3;a(Math.round(o+(e-o)*g)),m<1?i=requestAnimationFrame(r):n.current=e};return i=requestAnimationFrame(r),()=>cancelAnimationFrame(i)},[e]),t}function Ms({active:e,goTo:t,setBadge:a}){let[n,s]=S(null),[o,i]=S(null),[r,u]=S(null),[m,g]=S(""),[l,h]=S("all"),[d,p]=S(ir),v=Y(0),w=Y(new Map),C=async(y=!1)=>{await R(async()=>{let b=await ee.current();i(b);let[$,_]=await Promise.all([fe.all(),Se.me().catch(()=>null)]);v.current===0&&s($.filter(M=>!w.current.has(M.id))),u(_),re.refresh().then(M=>a(M.filter(P=>!P.checked).length)).catch(()=>{})},{loading:!1,onError:y?()=>{}:ge})};W(()=>{e&&C()},[e]),Ee(y=>y==="changed"&&e&&C(!0)),W(()=>{let y=()=>w.current.forEach(({p:b,timer:$})=>{clearTimeout($),fe.remove(b).catch(()=>{})});return window.addEventListener("pagehide",y),()=>window.removeEventListener("pagehide",y)},[]);let I=y=>{s(_=>_.filter(M=>M.id!==y.id));let $=setTimeout(async()=>{w.current.delete(y.id);try{await fe.remove(y),K.emit("changed")}catch(_){ge(_),C(!0)}},4700);w.current.set(y.id,{p:y,timer:$}),B(`\xAB${y.name}\xBB eliminado`,{label:"Deshacer",run:()=>{clearTimeout($),w.current.delete(y.id),s(_=>[..._,y].sort((M,P)=>M.name.localeCompare(P.name,"es"))),x("pop")}})};W(()=>{if(!e||!o||o.memberIds.length<2)return;let y=setInterval(()=>document.visibilityState==="visible"&&C(!0),2e4);return()=>clearInterval(y)},[e,o?.id,o?.memberIds.length]);let z=Ye(()=>({total:n?.length||0,low:n?.filter(V.isLow).length||0,expiring:n?.filter(V.needsExpiryAttention).length||0}),[n]),T=Ye(()=>n?Qt(n):null,[n]),U=Ye(()=>{let y=m.trim().toLowerCase(),b=(n||[]).filter(_=>!y||[_.name,_.category,_.location].some(P=>P.toLowerCase().includes(y))?l==="low"?V.isLow(_):l==="expiring"?V.needsExpiryAttention(_):!0:!1),$=new Map;return b.forEach(_=>{let M=_.category.trim()||ga;$.has(M)||$.set(M,[]),$.get(M).push(_)}),[...$.entries()].sort(([_],[M])=>(_===ga)-(M===ga)||_.localeCompare(M,"es"))},[n,m,l]),D=y=>{let b=new Set(d);b.has(y)?b.delete(y):b.add(y),p(b),localStorage.setItem(zs,JSON.stringify([...b]))},N=async(y,b,$)=>{let _=n.find(P=>P.id===y.id),M=V.withQuantity(_,_.quantity+b);if(M.quantity!==_.quantity){s(n.map(P=>P.id===y.id?M:P)),x(b>0?"up":"down"),Te($),v.current++;try{await fe.updateQuantity(M,_.quantity)}catch(P){ge(P)}finally{v.current--}v.current===0&&C(!0)}},F=async y=>{let b=await le({title:`A\xF1adir \xAB${y.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:Q(V.amountToBuy(y)),suffix:y.unit,confirm:"A\xF1adir"});b!==null&&await R(async()=>{await re.addProduct(y,be(b)??0),x("pop"),B(`\xAB${y.name}\xBB a\xF1adido a la compra`),K.emit("changed")})},q=async y=>{await G(ur,{initial:y,categories:[...new Set((n||[]).map($=>$.category).filter(Boolean))]})&&C(!0)},O=async()=>{let y=await qe("A\xF1adir producto",[{label:"Buscar en el s\xFAper",hint:`Foto, categor\xEDa y precio de ${Va()}`,icon:"store"},{label:"Escribirlo a mano",icon:"edit"}]);if(y!==null)if(y===0){let b=await G(ha,{});if(!b)return;let $=(n||[]).find(_=>_.mercadonaId&&_.mercadonaId===b.externalId);q($||At.toProduct(b))}else q(hs())},E=n&&n.length===0;return c`<section class="tab">
    <header class="tab-header">
      <div class="grow">
        <p class="muted small">${rr()}${r?`, ${we(r)}`:""}</p>
        <h1 class="brand">Despensa</h1>
      </div>
      ${o&&c`<button class="house-pill" onClick=${()=>t("house")}><${f} name="home" size=${16} /> ${o.name}</button>`}
    </header>

    <div class="stats">
      ${[["all","Productos",z.total,""],["low","Por reponer",z.low,"danger"],["expiring","Caducan pronto",z.expiring,"warning"]].map(([y,b,$,_])=>c`<button class=${`stat ${_} ${l===y?"selected":""}`} onClick=${()=>h(l===y?"all":y)}>
          <strong><${lr} value=${$} /></strong><span>${b}</span>
        </button>`)}
    </div>

    ${T&&c`<div class=${`card expiry-alert ${T.level}`}>
      <span class="expiry-alert-icon"><${f} name="hourglass" size=${22} /></span>
      <div class="grow min0">
        <strong class="block">${T.title}</strong>
        <p class="small">${T.message}</p>
        <div class="row-actions">
          <button class="btn small primary" onClick=${()=>Lt()}><${f} name="cook" size=${16} /> ¿Qué cocino?</button>
          <button class="btn small text" onClick=${()=>h("expiring")}>Ver productos</button>
        </div>
      </div>
    </div>`}

    <label class="search">
      <${f} name="search" size=${20} />
      <input type="search" placeholder="Buscar por nombre, categoría o sitio" value=${m} onInput=${y=>g(y.target.value)} />
    </label>

    <div class="chips">
      ${[["all","Todos"],["low","Por reponer"],["expiring","Caducan pronto"]].map(([y,b])=>c`
        <button class=${`chip ${l===y?"checked":""}`} onClick=${()=>h(y)}>${b}</button>`)}
    </div>

    ${!n&&c`<div class="skeleton-list">${[0,1,2].map(()=>c`<div class="skeleton"></div>`)}</div>`}

    ${E&&c`<div class="empty">
      <${Ce} name="pantry" />
      <h2>Tu despensa está vacía</h2>
      <p class="muted">Añade lo que tienes en casa con el botón +. Puedes buscarlo en ${Va()} para no escribir.</p>
    </div>`}

    ${n&&!E&&U.length===0&&c`<div class="empty"><${Ce} name="search" /><h2>Nada por aquí</h2><p class="muted">Prueba con otra búsqueda o filtro.</p></div>`}

    ${n&&!E&&!localStorage.getItem("stockcasa.swipeHint")&&c`<p class="hint" onClick=${y=>{localStorage.setItem("stockcasa.swipeHint","1"),y.currentTarget.remove()}}>
      <${f} name="swap" size=${16} /> Desliza un producto hacia un lado para eliminarlo
    </p>`}

    <div class="groups">
      ${U.map(([y,b],$)=>c`<div class="group" key=${y}>
        <button class="group-header" onClick=${()=>D(y)}>
          <span class=${`group-dot tone-${y===ga?"free":Ze(y)}`}></span>
          <span class="grow">${y}</span>
          <span class="count">${b.length}</span>
          ${b.some(V.isLow)&&c`<span class="dot danger"></span>`}
          <span class=${`chevron ${d.has(y)?"":"open"}`}><${f} name="chevron_right" size=${20} /></span>
        </button>
        ${!d.has(y)&&b.map((_,M)=>c`<${pt} key=${_.id} class="enter" style=${`--i:${Math.min($*3+M,12)}`}
          onDelete=${()=>I(_)}>
          <${cr} p=${_} onOpen=${()=>q(_)} onLongPress=${()=>F(_)} onChange=${N} />
        </${pt}>`)}
      </div>`)}
    </div>

    <button class="fab" onClick=${O} aria-label="Añadir producto"><${f} name="add" size=${28} /></button>
  </section>`}function cr({p:e,onOpen:t,onLongPress:a,onChange:n}){let s=Y(),o=Y(),i=Y(null),r=Y(!1),u=V.isLow(e),m=V.expiryStatus(e),g=V.daysUntilExpiry(e),l=V.level(e),h=u?"danger":e.quantity<=e.criticalLimit*1.5?"warning":"primary",d=je(Mt(e),se.get().allergens),p=I=>{i.current={x:I.clientX,y:I.clientY},r.current=!1,o.current=setTimeout(()=>{r.current=!0,x("pop"),a()},550)},v=()=>clearTimeout(o.current);return c`<article class="card product-card"
    onPointerDown=${p} onPointerMove=${I=>{i.current&&Math.hypot(I.clientX-i.current.x,I.clientY-i.current.y)>8&&v()}} onPointerUp=${v} onPointerLeave=${v} onPointerCancel=${v}
    onContextMenu=${I=>I.preventDefault()} onClick=${()=>{r.current||t()}}>
    <${ie} url=${V.image(e)} name=${e.name} />
    <div class="grow min0">
      <h3 class="ellipsis">${e.name}</h3>
      <p class="muted small ellipsis">${[e.location,e.price!=null?`${ne(e.price)}/${e.unit}`:""].filter(Boolean).join(" \xB7 ")||`M\xEDnimo ${Q(e.criticalLimit)} ${e.unit}`}</p>
      <div class="tags">
        ${u&&c`<span class="tag danger">Por reponer</span>`}
        ${m==="EXPIRED"&&c`<span class="tag danger">Caducado</span>`}
        ${m==="SOON"&&c`<span class="tag warning">${g===0?"Caduca hoy":`Caduca en ${g} d`}</span>`}
        ${d.length>0&&c`<span class="tag danger allergen-tag" title="Tus alergias"><${f} name="warning" size=${11} /> ${Ae(d).join(", ")}</span>`}
      </div>
      <div class="level"><span class=${h} style=${`width:${Math.round(l*100)}%`}></span></div>
    </div>
    <div class="stepper" onClick=${I=>I.stopPropagation()} onPointerDown=${I=>I.stopPropagation()}>
      <button class="round" aria-label="Quitar uno" onClick=${()=>n(e,-1,s.current)}><${f} name="remove" size=${18} /></button>
      <div class="qty"><strong ref=${s} class=${u?"danger-text":""}>${Q(e.quantity)}</strong><small>${e.unit}</small></div>
      <button class="round primary" aria-label="Añadir uno" onClick=${()=>n(e,1,s.current)}><${f} name="add" size=${18} /></button>
    </div>
  </article>`}function ur({initial:e,categories:t,close:a}){let n=!e.id,s=se.get().defaultExpiry,[o,i]=S(()=>n&&!e.expiresAt&&s?{...e,expiresAt:pe(Z(),s)}:e),[r,u]=S(void 0),[m,g]=S(null),[l,h]=S(!!e.expiresAt||n&&!!s),[d,p]=S(Q(e.quantity)),[v,w]=S(Q(e.criticalLimit)),[C,I]=S(e.price!=null?String(e.price).replace(".",","):""),z=Y(),T=y=>b=>i({...o,[y]:b.target.value}),U=y=>{h(!0),i({...o,expiresAt:pe(Z(),y)}),x("tap")},D=r===null?o.imageUrl||null:m||V.image(o),N=async y=>{let b=y.target.files?.[0];if(y.target.value="",!b)return;let $=await dt(b);u($),g(URL.createObjectURL($))},F=async()=>{let y=await G(ha,{initialQuery:o.name});if(!y)return;let b=At.toProduct(y);i({...o,name:b.name,category:b.category||o.category,imageUrl:b.imageUrl,price:b.price??o.price,mercadonaId:b.mercadonaId,notes:o.notes||b.notes,allergens:b.allergens?.length?b.allergens:o.allergens}),b.price!=null&&I(String(b.price).replace(".",",")),x("pop"),B(`Datos importados de ${y.source}`)},q=async y=>{y.preventDefault();let b=be(d),$=be(v),_=C.trim()?be(C):null;if(b===null||$===null)return B("Revisa las cantidades");if(C.trim()&&_===null)return B("El precio no es v\xE1lido");if(l&&!o.expiresAt)return B("Elige la fecha de caducidad");let M={...o,quantity:b,criticalLimit:$,price:_,expiresAt:l?o.expiresAt:null},P=await R(()=>fe.save(M,r));P&&(x("success"),B(n?"Producto a\xF1adido":"Cambios guardados"),K.emit("changed"),a(P))},O=async()=>{await ye({title:"Eliminar producto",message:`\xBFSeguro que quieres eliminar \xAB${o.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await R(async()=>{await fe.remove(o),x("swipe"),B("Producto eliminado"),K.emit("changed"),a(!0)})},E=async()=>{let y=await le({title:`A\xF1adir \xAB${o.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:Q(V.amountToBuy(o)),suffix:o.unit,confirm:"A\xF1adir"});y!==null&&await R(async()=>{await re.addProduct(o,be(y)??0),x("pop"),B(`\xAB${o.name}\xBB a\xF1adido a la compra`),K.emit("changed")})};return c`<form class="sheet-body" onSubmit=${q}>
    <div class="sheet-title">
      <h2>${n?"Nuevo producto":"Editar producto"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(!1)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>

    <div class="photo-box">
      <${ie} url=${D} name=${o.name||"?"} size=${96} />
      <div class="photo-actions">
        <button type="button" class="btn tonal small" onClick=${()=>z.current.click()}><${f} name="camera" size=${18} /> Foto</button>
        ${(r instanceof Blob||r!==null&&o.photo)&&c`<button type="button" class="btn text small" onClick=${()=>{u(null),g(null)}}>Quitar foto</button>`}
        <button type="button" class="btn tonal small" onClick=${F}><${f} name="store" size=${18} /> Buscar en el súper</button>
      </div>
      <input ref=${z} type="file" accept="image/*" hidden onChange=${N} />
    </div>

    <label class="field"><span>Nombre</span><input required maxlength="60" value=${o.name} onInput=${T("name")} /></label>
    <label class="field"><span>Categoría</span>
      <input list="categories" value=${o.category} onInput=${T("category")} placeholder="Lácteos, Limpieza…" />
      <datalist id="categories">${t.map(y=>c`<option value=${y} />`)}</datalist>
    </label>
    <div class="row-2">
      <label class="field"><span>Cantidad</span><input inputmode="decimal" value=${d} onInput=${y=>p(y.target.value)} /></label>
      <label class="field"><span>Mínimo (avisar)</span><input inputmode="decimal" value=${v} onInput=${y=>w(y.target.value)} /></label>
    </div>
    <div class="row-2">
      <label class="field"><span>Unidad</span><input value=${o.unit} onInput=${T("unit")} placeholder="uds, kg, L…" /></label>
      <label class="field"><span>Precio por unidad (€)</span><input inputmode="decimal" value=${C} onInput=${y=>I(y.target.value)} placeholder="Opcional" /></label>
    </div>
    <label class="field"><span>Dónde está</span><input value=${o.location} onInput=${T("location")} placeholder="Nevera, despensa…" /></label>

    <div class="field">
      <span>Caducidad</span>
      <div class="segmented">
        <button type="button" class=${l?"":"on"} onClick=${()=>{h(!1),x("tap")}}><${f} name="hourglass" size=${16} /> Sin caducidad</button>
        <button type="button" class=${l?"on":""} onClick=${()=>{h(!0),o.expiresAt||U(s||7)}}><${f} name="calendar" size=${16} /> Con fecha</button>
      </div>
    </div>
    ${l&&c`<div class="expiry-box">
      <label class="field"><span>Caduca el</span><input type="date" value=${o.expiresAt||""} onInput=${T("expiresAt")} /></label>
      <div class="chips wrap">
        ${_t.filter(y=>y.days).slice(0,6).map(y=>c`<button type="button" class="chip small" onClick=${()=>U(y.days)}>+${y.label}</button>`)}
      </div>
      ${o.expiresAt&&c`<p class="muted small">${V.daysUntilExpiry(o)<0?"Ya ha caducado":V.daysUntilExpiry(o)===0?"Caduca hoy":`Caduca dentro de ${V.daysUntilExpiry(o)} d\xEDas (${ve(o.expiresAt)})`}</p>`}
    </div>`}

    <div class="field">
      <span>Alérgenos ${(o.allergens||[]).length?"":c`<span class="muted tiny">· deducidos del nombre, toca para corregir</span>`}</span>
      <div class="chips wrap allergen-chips">
        ${nt.map(y=>{let b=Mt(o).includes(y.key),$=(se.get().allergens||[]).includes(y.key);return c`<button type="button" class=${`chip ${b?"checked":""} ${b&&$?"alert":""}`} onClick=${()=>{let _=Mt(o),M=b?_.filter(P=>P!==y.key):[..._,y.key];i({...o,allergens:M.length?M:["none"]}),x("tap")}}>${b&&$?c`<${f} name="warning" size=${14} /> `:""}${y.label}</button>`})}
      </div>
    </div>
    <label class="field"><span>Notas</span><textarea rows="2" value=${o.notes} onInput=${T("notes")}></textarea></label>
    ${o.updatedBy&&c`<p class="muted small">Última modificación: ${St(o.updatedBy)}</p>`}

    <button class="btn primary wide" type="submit"><${f} name="check" size=${20} /> Guardar</button>
    ${!n&&c`<div class="row-2">
      <button type="button" class="btn tonal" onClick=${E}><${f} name="cart" size=${18} /> A la compra</button>
      <button type="button" class="btn danger" onClick=${O}><${f} name="delete" size=${18} /> Eliminar</button>
    </div>`}
  </form>`}function ha({initialQuery:e="",close:t}){let a=se.get().stores,[n,s]=S(e),[o,i]=S(null),[r,u]=S(!1),[m,g]=S("all"),l=Y();W(()=>{setTimeout(()=>l.current?.focus(),250)},[]),W(()=>{if(n.trim().length<2){i(null);return}let p=!1;u(!0);let v=setTimeout(async()=>{try{let w=await At.search(n,a);p||i(w)}catch(w){p||ge(w)}finally{p||u(!1)}},400);return()=>{p=!0,clearTimeout(v)}},[n]);let h=(o?.results||[]).filter(p=>m==="all"||p.store===m),d=a.filter(p=>(o?.results||[]).some(v=>v.store===p));return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow min0"><h2>Buscar en el súper</h2><p class="muted small ellipsis">${Va(a)} · cámbialos en tu perfil</p></div>
      <button class="icon-btn" onClick=${()=>t(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <label class="search">
      <${f} name="search" size=${20} />
      <input ref=${l} type="search" placeholder="Leche, arroz, detergente…" value=${n} onInput=${p=>s(p.target.value)} />
      ${r&&c`<span class="mini-spinner"></span>`}
    </label>
    ${d.length>1&&c`<div class="chips">
      <button class=${`chip ${m==="all"?"checked":""}`} onClick=${()=>g("all")}>Todos</button>
      ${d.map(p=>c`<button class=${`chip ${m===p?"checked":""}`} onClick=${()=>g(p)}>
        <span class="store-dot" style=${`background:${Pe(p).color}`}></span>${Pe(p).label}</button>`)}
    </div>`}
    ${o&&o.failed.length>0&&c`<p class="muted small note">${o.failed.map(p=>Pe(p)?.label).join(", ")} no responde ahora mismo. Se muestra lo demás.</p>`}
    ${o&&h.length===0&&c`<p class="muted center">No se ha encontrado nada. Prueba con otras palabras.</p>`}
    ${!o&&c`<p class="muted center small">Escribe al menos 2 letras. Se rellenan solos el nombre, la categoría, la foto y el precio (si el súper lo publica).</p>`}
    <div class="catalog-list">
      ${h.map((p,v)=>{let w=Pe(p.store);return c`<button key=${`${p.store}-${p.externalId}-${v}`} class="catalog-item enter" style=${`--i:${Math.min(v,10)}`} onClick=${()=>t(p)}>
          <${ie} url=${p.imageUrl} name=${p.name} size=${56} />
          <span class="grow min0 left">
            <strong class="ellipsis2">${p.name}</strong>
            <span class="muted small ellipsis">${[p.brand,p.packageInfo].filter(Boolean).join(" \xB7 ")||p.category}</span>
            <span class="store-badge" style=${`--store:${w?.color||"var(--muted)"}`}>${w?.label||p.source}</span>
          </span>
          <span class=${`price ${p.price==null?"muted":""}`}>${p.price!=null?ne(p.price):"Sin precio"}</span>
        </button>`})}
    </div>
  </div>`}var dr=["Mercadona","Dia","Lidl","Eroski","Carrefour","Alcampo","Consum","Aldi","Caprabo","Hipercor","El Corte Ingl\xE9s","Simply","BM","Ahorramas","Covir\xE1n","Spar"],pr=["total","subtotal","iva","base imponible","cuota","tarjeta","efectivo","cambio","entregado","entrega","importe","factura","nif","cif","telefono","tel ","tlf","www","http","gracias","ticket","op:","operacion","autoriz","visa","mastercard","contactless","aid","arc","tpv","caja","cajero","devolucion","avda","calle","s.a.","s.l.","c/","cp ","descripcion","p. unit","p.unit","precio","cant","uds.","puntos","ahorro","socio","cliente","n.i.f","fecha","hora","pago","saldo","redondeo"],mr=pr.map(e=>/^[a-z ]+$/.test(e)?new RegExp(`(^|[^a-z])${e.trim()}([^a-z]|$)`):{test:t=>t.includes(e)}),fa="(\\d{1,4}[.,]\\d{2})";var $t=e=>parseFloat(String(e).replace(",",".")),$a=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function xs(e){let t=e.replace(/\s+/g," ").replace(/^[\s.*·-]+|[\s.*·-]+$/g,"").trim();if(!t)return"";let a=t.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}function hr(e){for(let t of e){let a=t.match(/\b(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})\b/);if(!a)continue;let n=parseInt(a[1],10),s=parseInt(a[2],10),o=parseInt(a[3],10);if(o<100&&(o+=2e3),!(n<1||n>31||s<1||s>12||o<2e3||o>2100))return`${o}-${String(s).padStart(2,"0")}-${String(n).padStart(2,"0")}`}return null}function Es(e){let t=$a(e);return dr.find(n=>new RegExp(`(^|[^a-z])${$a(n)}([^a-z]|$)`).test(t))||""}function gr(e){let t=null;return e.forEach((a,n)=>{let s=$a(a);if(!/\btotal\b/.test(s)||/subtotal|total iva|base|ahorro|total art|articulos/.test(s))return;let o=[...a.matchAll(new RegExp(fa,"g"))].map(u=>$t(u[1])),i=!o.length&&e[n+1]?[...e[n+1].matchAll(new RegExp(fa,"g"))].map(u=>$t(u[1])):[],r=(o.length?o:i).pop();r!=null&&r>0&&(t=r)}),t}function As(e){let t=String(e||"").split(/\r?\n/).map(o=>o.replace(/\s+/g," ").trim()).filter(Boolean),a=[],n=null;for(let o of t){let i=$a(o);if(mr.some(m=>m.test(i))){n=null;continue}let r=o.match(/^(\d+[.,]\d{1,3})\s*(kg|g|l)\b.*?(\d+[.,]\d{2})\s*(€|eur)?\s*\/\s*(kg|l)\b.*?(\d+[.,]\d{2})\s*[a-z€]?$/i);if(r){let m=$t(r[6]),g=$t(r[1]),l=n||a.pop()?.name;l&&a.push({name:l,quantity:Math.round(g*1e3)/1e3,unit:r[2].toLowerCase()==="l"?"L":"kg",price:Math.round(m/g*100)/100}),n=null;continue}let u=o.match(new RegExp(`^(?:(\\d{1,3})\\s*(?:x\\s*)?)?(.*?[A-Za-z\xC1\xC9\xCD\xD3\xDA\xD1\xE1\xE9\xED\xF3\xFA\xF1].*?)\\s+${fa}(?:\\s*\u20AC)?(?:\\s+${fa})?(?:\\s*\u20AC)?\\s*[A-Z*]?$`));if(u){let m=xs(u[2]);if(m.length<2||!/[a-zñ]{2}/i.test(m)){n=null;continue}let g=u[1]?parseInt(u[1],10):1,l=$t(u[3]),h=u[4]!=null?$t(u[4]):null,d;h!=null?(d=l,!u[1]&&l>0&&(g=Math.max(1,Math.round(h/l)))):d=g>0?l/g:l,(g<=0||g>99)&&(g=1),a.push({name:m,quantity:g,unit:"uds",price:Math.round(d*100)/100}),n=null;continue}n=/[a-zñ]{3}/i.test(i)&&!/\d{3,}/.test(i)?xs(o.replace(/^\d+\s+/,"")):null}let s=gr(t);return{store:Es(t.slice(0,8).join(`
`))||Es(t.join(`
`)),date:hr(t),total:s??(a.length?Math.round(a.reduce((o,i)=>o+i.price*i.quantity,0)*100)/100:null),items:a}}var fr="https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js",Ga=null;function $r(){return window.Tesseract?Promise.resolve(window.Tesseract):(Ga||=new Promise((e,t)=>{let a=document.createElement("script");a.src=fr,a.onload=()=>window.Tesseract?e(window.Tesseract):t(new Error("OCR no disponible")),a.onerror=()=>{Ga=null,t(new Error("No se ha podido cargar el lector de tickets (\xBFsin conexi\xF3n?)"))},document.head.appendChild(a)}),Ga)}async function Ls(e,t=()=>{}){let a=await $r(),{data:n}=await a.recognize(e,"spa",{logger:s=>s.status==="recognizing text"&&t(s.progress||0)});return n.text||""}function qs({active:e,setBadge:t,goTo:a}){let[n,s]=S(null),[o,i]=S(null),[r,u]=S({}),[m,g]=S(null),[l,h]=S(null),d=async($=!1)=>{await R(async()=>{let _=await ee.current();i(_);let M=await re.refresh();s(M),t(M.filter(k=>!k.checked).length),Ve.all().then(g).catch(()=>g([])),ms.analyze(M.filter(k=>!k.checked)).then(h).catch(()=>h(null));let P=await Se.many(_.memberIds);u(Object.fromEntries(Object.values(P).map(k=>[k.email,k])))},{loading:!1,onError:$?()=>{}:ge})};W(()=>{e&&d()},[e]),Ee($=>$==="changed"&&e&&d(!0)),W(()=>{if(!e||!o||o.memberIds.length<2)return;let $=setInterval(()=>document.visibilityState==="visible"&&d(!0),2e4);return()=>clearInterval($)},[e,o?.id]);let p=async $=>{await R(async()=>{$.product?await re.addProduct($.product,$.quantity):await re.addFreeItem($.entry.name,$.quantity,$.unit||"uds"),x("pop"),B(`\xAB${$.entry.name}\xBB a\xF1adido a la compra`),await d(!0)})},v=$=>{s($),t($.filter(_=>!_.checked).length)},w=async($,_)=>{let M=!$.checked;v(n.map(P=>P.id===$.id?{...P,checked:M}:P)),x(M?"check":"tap"),Te(_);try{await re.setChecked($,M)}catch(P){ge(P),d(!0)}},C=async $=>{v(n.filter(_=>_.id!==$.id));try{await re.dismiss($)}catch(_){ge(_),d(!0);return}B(`\xAB${$.name}\xBB quitado de la lista`,{label:"Deshacer",run:async()=>{await R(()=>re.restore($),{loading:!1}),d(!0)}})},I=async $=>{let _=await le({title:`\xBFCu\xE1nto \xAB${$.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:Q($.quantity),suffix:$.unit});_!==null&&await R(async()=>{await re.changeQuantity($,be(_)??0),x("pop"),d(!0)})},z=async()=>{let $=await R(()=>fe.all());if(!$)return;let _=await G(da,{title:"A\xF1adir a la compra",products:$,marked:(n||[]).map(j=>j.productId).filter(Boolean),markedLabel:"Ya en la lista",freeLabel:"Pilas, regalo\u2026 algo que no guard\xE1is en la despensa"});if(!_)return;if(_.free!==void 0){let j=_.free.trim()||(await le({title:"Otra cosa",label:"\xBFQu\xE9 hay que comprar?",confirm:"Siguiente"}))?.trim();if(!j)return;let me=await le({title:j,label:"Cantidad",inputMode:"decimal",value:"1",suffix:"uds",confirm:"A\xF1adir"});if(me===null)return;await R(async()=>{await re.addFreeItem(j,be(me)??0,"uds"),x("pop"),B(`\xAB${j}\xBB a\xF1adido a la compra`),d(!0)});return}let M=_.product,P=(n||[]).find(j=>j.productId===M.id),k=await le({title:`\xBFCu\xE1nto \xAB${M.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:Q(P?.quantity??V.amountToBuy(M)),suffix:M.unit,confirm:"A\xF1adir"});k!==null&&await R(async()=>{await re.addProduct(M,be(k)??0),x("pop"),B(`\xAB${M.name}\xBB a\xF1adido a la compra`),d(!0)})},T=async()=>{let $=(n||[]).filter(J=>!J.checked),_=(n||[]).filter(J=>J.checked),M=$.length?`${$.length===1?"Te falta 1 producto":`Te faltan ${$.length} productos`}:
${$.slice(0,8).map(J=>`\xB7 ${J.name}`).join(`
`)}${$.length>8?`
\xB7 y ${$.length-8} m\xE1s`:""}

Se quedar\xE1n en la lista para la pr\xF3xima vez. Lo marcado se sumar\xE1 a la despensa.`:"Lo marcado se sumar\xE1 al stock de la despensa y saldr\xE1 de la lista.";if(!await ye({title:$.length?"Faltan cosas por comprar":"Terminar la compra",message:M,confirm:$.length?"Terminar igualmente":"Terminar",cancel:$.length?"Seguir comprando":"Cancelar"}))return;let k=await R(()=>re.completePurchase());if(!k)return;ut(),x("success"),B(k.length===1?"1 producto repuesto":`${k.length} productos repuestos`),K.emit("changed"),d(!0);let j=(k.length?k:_).map(J=>({name:J.name,quantity:J.quantity,unit:J.unit,price:J.price})),me=j.reduce((J,he)=>J+(he.price!=null?he.price*he.quantity:0),0);await G(Ns,{initial:{id:null,date:Z(),store:Ts(),total:Math.round(me*100)/100,items:j,note:""},fromPurchase:!0})&&d(!0)},U=async()=>{await G(yr,{}),d(!0)},D=async()=>{let $=(n||[]).filter(k=>!k.checked),_=$.length?$:n||[];if(!_.length)return B("La lista est\xE1 vac\xEDa");let M=_.reduce((k,j)=>k+(ft(j)||0),0),P=[`Lista de la compra \xB7 ${o?.name||""}`,"",..._.map(k=>`- ${k.name}: ${Q(k.quantity)} ${k.unit}`),...M>0?["",`Total estimado: ${ne(M)}`]:[]].join(`
`);navigator.share?navigator.share({text:P}).catch(()=>{}):(await navigator.clipboard?.writeText(P),B("Lista copiada"))},N=n?.length||0,F=n?.filter($=>$.checked).length||0,q=(n||[]).filter($=>!$.checked),O=q.reduce(($,_)=>$+(ft(_)||0),0),E=q.filter($=>ft($)===null).length,y=o?.shoppingDay>=1&&Xe(Z(),Vt(o.shoppingDay))===0,b=m?Ve.summary(m):null;return c`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Compra</h1>
      <button class="icon-btn" onClick=${z} aria-label="Añadir"><${f} name="add" /></button>
      <button class="icon-btn" onClick=${D} aria-label="Compartir lista"><${f} name="share" /></button>
    </header>

    ${o&&c`<button class=${`day-banner ${y?"pulse":""}`} onClick=${()=>a("house","settings")}>
      <${f} name="calendar" size=${16} /> ${lt(o.shoppingDay)}
    </button>`}

    <button class="card spend-card enter" onClick=${U}>
      <span class="spend-icon"><${f} name="receipt" size=${24} /></span>
      <span class="grow min0 left">
        <span class="muted small block">Gastado en los últimos ${ua} días</span>
        <strong class="spend-total">${b?ne(b.total):"\u2026"}</strong>
        <span class="muted small block">${b?b.count===0?"A\xFAn no hay tickets \xB7 toca para a\xF1adir":`${b.count===1?"1 ticket":`${b.count} tickets`} \xB7 toca para verlos o corregirlos`:"Cargando tickets"}</span>
      </span>
      <${f} name="chevron_right" />
    </button>

    ${l?.suggestions.length>0&&c`<div class="card forecast-card enter">
      <div class="row">
        <span class="menu-icon"><${f} name="trend" size=${20} /></span>
        <div class="grow min0"><h3>Toca reponer</h3><p class="muted small">Según lo que compráis y gastáis</p></div>
        <button class="btn text small" onClick=${()=>G(Ps,{analysis:l,onAdd:p})}>Historial</button>
      </div>
      ${l.suggestions.slice(0,4).map($=>c`<div class="forecast-row" key=${$.entry.key}>
        <${ie} url=${$.product?$.product.photo?.url||$.product.imageUrl:null} name=${$.entry.name} size=${40} />
        <div class="grow min0"><strong class="ellipsis block">${$.entry.name}</strong><span class="muted small">${$.reason}</span></div>
        <button class="icon-btn small tonal" aria-label=${`A\xF1adir ${$.entry.name}`} onClick=${()=>p($)}><${f} name="add" size=${20} /></button>
      </div>`)}
    </div>`}

    ${!l?.suggestions.length&&m?.length>0&&l&&c`<button class="btn text small center-self" onClick=${()=>G(Ps,{analysis:l,onAdd:p})}><${f} name="trend" size=${18} /> Historial de compras</button>`}

    ${N>0&&c`<div class="card soft progress-card">
      <div class="row">
        <span class="grow">${F===0?"Marca lo que metas en el carro":`${F} de ${N} en el carro`}</span>
        <strong>${E===0?`Falta: ${ne(O)}`:`\u2248 ${ne(O)} (+${E} sin precio)`}</strong>
      </div>
      <div class="level big"><span class="primary" style=${`width:${N?Math.round(F*100/N):0}%`}></span></div>
    </div>`}

    ${!n&&c`<div class="skeleton-list">${[0,1,2].map(()=>c`<div class="skeleton"></div>`)}</div>`}
    ${n&&N===0&&c`<div class="empty">
      <${Ce} name="done" />
      <h2>¡No falta nada!</h2>
      <p class="muted">Cuando algo baje de su mínimo aparecerá aquí solo. También puedes añadir cosas con el +.</p>
    </div>`}

    ${(()=>{let $=0;return Mn(n||[]).map(_=>c`<div class="shop-section" key=${_.storage.key}>
        <h2 class=${`storage-title storage-${_.storage.key}`}><${f} name=${_.storage.icon} size=${18} /> ${_.storage.label}</h2>
        ${_.groups.map(M=>c`<div class="group" key=${M.key}>
          <div class="group-header static">
            <span class=${`group-dot tone-${M.key==="Otros"?"free":Ze(M.key)}`}></span>
            <span class="grow">${M.key}</span>
            <span class="count">${M.items.filter(P=>!P.checked).length||c`<${f} name="check" size=${16} />`}</span>
          </div>
          <div class="list">
            ${M.items.map(P=>{let k=r[P.addedBy];return c`<${pt} key=${P.id} class="enter" style=${`--i:${Math.min($++,12)}`} label="Quitar" onDelete=${()=>C(P)}>
                <article class=${`card shop-item ${P.checked?"checked":""}`}>
                  <button class=${`check ${P.checked?"on":""}`} aria-label=${P.checked?"Desmarcar":"Marcar"} onClick=${j=>w(P,j.currentTarget)}>
                    ${P.checked&&c`<${f} name="check" size=${18} />`}
                  </button>
                  <${ie} url=${P.photoUrl} name=${P.name} size=${46} icon=${P.productId?null:"cart"} />
                  <button class="grow min0 left plain" onClick=${()=>I(P)}>
                    <span class="min0">
                      <h3 class="ellipsis name">${P.name}</h3>
                      <p class="muted small ellipsis">
                        ${Q(P.quantity)} ${P.unit}${ft(P)!==null?` \xB7 ${ne(ft(P))}`:""}
                        ${P.manual&&P.addedBy&&` \xB7 a\xF1adido por ${k?we(k):St(P.addedBy)}`}
                      </p>
                    </span>
                  </button>
                  ${k&&c`<${tt} profile=${k} size=${26} />`}
                  <button class="icon-btn small" aria-label="Quitar" onClick=${()=>C(P)}><${f} name="close" size=${18} /></button>
                  <span class="strike" aria-hidden="true"></span>
                </article>
              </${pt}>`})}
          </div>
        </div>`)}
      </div>`)})()}

    ${N>0&&c`<div class="bottom-action">
      <button class="btn primary wide" disabled=${F===0} onClick=${T}>
        <${f} name="check" size=${20} /> ${F===0?"Marca lo que hayas comprado":F<N?`Terminar compra (${F} de ${N})`:`Terminar compra (${F})`}
      </button>
    </div>`}
  </section>`}function Ts(){return Pe(se.get().stores[0])?.label||""}var vr=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function Ps({analysis:e,onAdd:t,close:a}){let[n,s]=S(new Set),o=new Map(e.suggestions.map(r=>[r.entry.key,r])),i=async r=>{await t(r),s(new Set([...n,r.entry.key]))};return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">Tickets y consumo de la despensa</p><h2>Historial de compras</h2></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    ${e.entries.length===0&&c`<div class="empty"><${Ce} name="receipt" /><p class="muted">Guarda tickets al terminar la compra y aquí verás cada cuánto compráis cada cosa.</p></div>`}
    <div class="list">
      ${e.entries.map(r=>{let u=o.get(r.key);return c`<div class=${`card history-row ${u?"due":""}`} key=${r.key}>
          <${ie} url=${r.product?r.product.photo?.url||r.product.imageUrl:null} name=${r.name} size=${44} />
          <div class="grow min0">
            <strong class="ellipsis block">${r.name}</strong>
            <span class="muted small block">${[r.times?`${r.times===1?"1 compra":`${r.times} compras`}`:"Sin tickets",r.every?`cada ~${r.every} d\xEDas`:"",r.spent?ne(r.spent):"",r.daysLeft!==null?`queda para ~${r.daysLeft} d\xEDas`:""].filter(Boolean).join(" \xB7 ")}</span>
            ${u&&c`<span class="tag warning">${u.reason}</span>`}
          </div>
          ${u&&(n.has(r.key)?c`<span class="tag success">Añadido</span>`:c`<button class="icon-btn small tonal" aria-label=${`A\xF1adir ${r.name}`} onClick=${()=>i(u)}><${f} name="add" size=${20} /></button>`)}
        </div>`})}
    </div>
  </div>`}function yr({close:e}){let[t,a]=S(null),n=()=>R(async()=>a(await Ve.all()),{loading:!1});W(()=>{n()},[]);let s=async u=>{await G(Ns,{initial:u})&&(n(),K.emit("changed"))},o=()=>s({id:null,date:Z(),store:Ts(),total:0,items:[],note:""}),i=t?Ve.summary(t):null,r=new Map;return(t||[]).forEach(u=>{let m=Be(u.date),g=`${vr[m.getMonth()]} ${m.getFullYear()}`;r.has(g)||r.set(g,[]),r.get(g).push(u)}),c`<div class="sheet-body">
    <div class="sheet-title">
      <h2 class="grow">Tickets y gasto</h2>
      <button class="icon-btn" onClick=${()=>e()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>

    <div class="card soft total-card">
      <span class="muted small">Últimos ${ua} días</span>
      <strong class="total">${i?ne(i.total):"\u2026"}</strong>
      <span class="muted small">${i?`${i.count===1?"1 ticket":`${i.count} tickets`} desde el ${ve(i.from)}`:""}</span>
    </div>
    <button class="btn tonal wide" onClick=${o}><${f} name="add" size=${20} /> Añadir un ticket</button>

    ${!t&&c`<div class="skeleton"></div>`}
    ${t&&t.length===0&&c`<div class="empty small">
      <${Ce} name="receipt" />
      <h2>Sin tickets todavía</h2>
      <p class="muted">Al terminar una compra podrás guardar su ticket con el total. También puedes añadirlos a mano.</p>
    </div>`}

    ${[...r.entries()].map(([u,m])=>c`<div class="ticket-group">
      <div class="row"><h3 class="section-label grow">${u}</h3><span class="muted small">${ne(m.reduce((g,l)=>g+l.total,0))}</span></div>
      ${m.map(g=>{let l=Wt(g.store);return c`<button class="ticket-row" onClick=${()=>s(g)}>
          <span class="ticket-date"><strong>${Be(g.date).getDate()}</strong><small>${ve(g.date).split(" ")[1]}</small></span>
          <span class="grow min0 left">
            <strong class="ellipsis block">${g.store||"Compra"}</strong>
            <span class="muted small ellipsis block">${g.items.length?`${g.items.length} ${g.items.length===1?"producto":"productos"}`:"Sin detalle"}${g.note?` \xB7 ${g.note}`:""}</span>
          </span>
          ${l&&c`<span class="store-dot" style=${`background:${l.color}`}></span>`}
          <strong class="price">${ne(g.total)}</strong>
        </button>`})}
    </div>`)}
  </div>`}function Ns({initial:e,fromPurchase:t=!1,close:a}){let[n,s]=S(e.date),[o,i]=S(e.store),[r,u]=S(e.total?String(e.total).replace(".",","):""),[m,g]=S(e.note),[l,h]=S(e.items),[d,p]=S(!1),[v,w]=S(null),C=Y(),I=async q=>{let O=q.target.files?.[0];if(q.target.value="",!!O){w(0);try{let E=await Ls(O,b=>w(b)),y=As(E);if(!y.items.length&&y.total==null){x("error"),B("No se ha podido leer el ticket. Prueba con m\xE1s luz y el ticket estirado");return}y.total!=null&&u(String(y.total).replace(".",",")),y.store&&i(Wt(y.store)?.label||y.store),y.date&&y.date<=Z()&&s(y.date),y.items.length&&(h(y.items),p(!0)),x("success"),B(`Ticket le\xEDdo: ${y.items.length===1?"1 producto":`${y.items.length} productos`}${y.total!=null?` \xB7 ${ne(y.total)}`:""}. Rev\xEDsalo antes de guardar`)}catch(E){x("error"),B(E.message||"No se ha podido leer el ticket")}finally{w(null)}}},z=se.get().stores.map(q=>Pe(q)?.label).filter(Boolean),T=[...new Set([...z,...Ie.map(q=>q.label)])],U=!e.id,D=l.reduce((q,O)=>q+(O.price!=null?O.price*O.quantity:0),0),N=async q=>{q.preventDefault();let O=be(r);if(O===null)return B("Escribe el total del ticket");let E=await R(()=>Ve.save({...e,date:n,store:o,total:O,note:m,items:l}));E&&(x("success"),B(U?"Ticket guardado":"Ticket actualizado"),K.emit("changed"),a(E))},F=async()=>{await ye({title:"Eliminar ticket",message:`Se quitar\xE1 del gasto ${ne(e.total)} del ${ve(e.date)}.`,confirm:"Eliminar",danger:!0})&&await R(async()=>{await Ve.remove(e),x("swipe"),B("Ticket eliminado"),K.emit("changed"),a(!0)})};return c`<form class="sheet-body" onSubmit=${N}>
    <div class="sheet-title">
      <span class="spend-icon"><${f} name="receipt" size=${24} /></span>
      <div class="grow min0"><h2>${U?t?"Guardar el ticket":"Nuevo ticket":"Editar ticket"}</h2>
        ${t&&c`<p class="muted small">Corrige el total con el del ticket del súper para llevar bien la cuenta</p>`}</div>
      <button type="button" class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>

    <button type="button" class="btn tonal wide ocr-button" disabled=${v!==null} onClick=${()=>C.current.click()}>
      ${v===null?c`<${f} name="scan" size=${20} /> Leer el ticket con una foto`:c`<span class="mini-spinner"></span> Leyendo el ticket… ${Math.round(v*100)} %`}
    </button>
    <input ref=${C} type="file" accept="image/*" capture="environment" hidden onChange=${I} />
    ${v!==null&&c`<div class="level"><span class="primary" style=${`width:${Math.round(v*100)}%`}></span></div>`}

    <label class="field"><span>Total pagado (€)</span>
      <div class="field-row"><input class="big-input" inputmode="decimal" value=${r} placeholder="0,00" onInput=${q=>u(q.target.value)} /><span class="suffix">€</span></div>
    </label>
    ${D>0&&c`<p class="muted small">Estimado con los precios guardados: ${ne(D)}
      <button type="button" class="btn text inline" onClick=${()=>u(String(Math.round(D*100)/100).replace(".",","))}>Usar</button></p>`}

    <div class="field">
      <span>Supermercado</span>
      <div class="chips wrap">
        ${T.map(q=>c`<button type="button" class=${`chip ${o===q?"checked":""}`} onClick=${()=>{i(o===q?"":q),x("tap")}}>
          <span class="store-dot" style=${`background:${Wt(q)?.color||"var(--muted)"}`}></span>${q}</button>`)}
      </div>
      <input class="plain-input" placeholder="Otro (escríbelo)" value=${T.includes(o)?"":o} onInput=${q=>i(q.target.value)} />
    </div>

    <label class="field"><span>Fecha</span><input type="date" max=${Z()} value=${n} onInput=${q=>s(q.target.value)} /></label>
    <label class="field"><span>Nota</span><input value=${m} maxlength="80" placeholder="Opcional" onInput=${q=>g(q.target.value)} /></label>

    ${l.length>0&&c`<div class="card soft">
      <button type="button" class="plain" onClick=${()=>p(!d)}>
        <strong class="grow left">${l.length===1?"1 producto":`${l.length} productos`}</strong>
        <span class=${`chevron ${d?"open":""}`}><${f} name="chevron_right" size=${20} /></span>
      </button>
      ${d&&l.map((q,O)=>c`<div class="ticket-line">
        <span class=${`group-dot tone-${Ze(q.name)}`}></span>
        <span class="grow min0 ellipsis">${q.name}</span>
        <span class="muted small">${Q(q.quantity)} ${q.unit}${q.price!=null?` \xB7 ${ne(q.price*q.quantity)}`:""}</span>
        <button type="button" class="icon-btn small" aria-label="Quitar" onClick=${()=>h(l.filter((E,y)=>y!==O))}><${f} name="close" size=${16} /></button>
      </div>`)}
    </div>`}

    <button class="btn primary wide" type="submit"><${f} name="check" size=${20} /> ${U?"Guardar ticket":"Guardar cambios"}</button>
    ${t&&c`<button type="button" class="btn text wide" onClick=${()=>a(null)}>Ahora no</button>`}
    ${!U&&c`<button type="button" class="btn danger wide" onClick=${F}><${f} name="delete" size=${20} /> Eliminar ticket</button>`}
  </form>`}function Hs({active:e}){let[t,a]=S(()=>kt(Z())),[n,s]=S(null),[o,i]=S([]),[r,u]=S(null),[m,g]=S(0),l=Y(0),h=async(T=!1)=>{let U=++l.current;await R(async()=>{await ee.current();let[D,N]=await Promise.all([oe.all(),Me.week(t)]);if(U!==l.current)return;i(D),s(N),u(null);let F=await Me.analyze(t).catch(()=>null);U===l.current&&u(F||"error")},{loading:!1,onError:T?()=>{}:ge})};W(()=>{e&&h()},[e,t]),Ee(T=>T==="changed"&&e&&h(!0));let d=T=>{a(pe(t,T*7)),g(m+1),s(null)},p=async(T,U,D,N)=>{let F=[];N&&F.push({label:"Ver / cocinar la receta",action:"view",icon:"cook"}),D&&F.push({label:"Quitar",action:"clear",danger:!0,icon:"delete"}),F.push({label:"Escribir otra cosa",action:"free",icon:"edit"}),o.forEach(y=>F.push({label:y.name,action:"recipe",recipe:y,icon:"recipe"}));let q=await qe(`${Ct(Ke(Je(T)))} \xB7 ${U.label}`,F);if(q===null)return;let O=F[q];if(O.action==="view"){B("Abre la pesta\xF1a Recetas para cocinarla");return}if(O.action==="clear"){await R(async()=>{await Me.clear(D),h(!0)});return}let E="";O.action==="free"&&(E=await le({title:U.label,label:"\xBFQu\xE9 vas a comer?",value:D&&!D.recipeId?D.title:""}),!E?.trim())||await R(async()=>{await Me.set(T,U.key,O.recipe||null,E),x("pop"),h(!0)})},v=async()=>{await R(async()=>{let T=await Me.copyPreviousWeek(t);x(T?"pop":"tap"),B(T===0?"No hab\xEDa nada nuevo que copiar":T===1?"1 comida copiada":`${T} comidas copiadas`),h(!0)})},w=async()=>{await G(wr,{weekStart:t}),h(!0)},C=kt(Z()),I=t===C?"Esta semana":t===pe(C,-7)?"Semana pasada":t===pe(C,7)?"Semana que viene":"",z=r&&r!=="error"?r.toBuy.length:0;return c`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Semana</h1></header>

    <div class="week-nav card soft">
      <button class="icon-btn" onClick=${()=>d(-1)} aria-label="Semana anterior"><${f} name="chevron_left" /></button>
      <button class="grow plain center" onClick=${()=>a(C)}>
        <strong>${ve(t)} – ${ve(pe(t,6))}</strong>
        <span class="muted small block">${I}</span>
      </button>
      <button class="icon-btn" onClick=${()=>d(1)} aria-label="Semana siguiente"><${f} name="chevron_right" /></button>
    </div>

    <button class="card forecast" onClick=${w}>
      <${f} name="insights" size=${28} />
      <span class="grow left">
        <strong>Previsión de la compra</strong>
        <span class="muted small block">
          ${r?r==="error"?"No se ha podido calcular":r.plannedMeals===0&&z===0?"Planifica comidas para ver qu\xE9 hay que comprar":`\u2248 ${ne(r.estimatedCost)} \xB7 ${z===1?"1 producto":`${z} productos`}`:"Calculando\u2026"}
        </span>
      </span>
      <${f} name="chevron_right" />
    </button>
    <button class="btn text" onClick=${v}><${f} name="copy" size=${18} /> Copiar la semana anterior</button>

    <div class="days" key=${m}>
      ${Array.from({length:7},(T,U)=>{let D=pe(t,U),N=D<Z();return c`<div class=${`card day enter ${N?"past":""}`} style=${`--i:${U}`}>
          <div class="day-header">
            <strong>${Ct(Ke(Je(D)))}</strong>
            <span class="muted small">${ve(D)}</span>
            ${D===Z()&&c`<span class="tag primary">Hoy</span>`}
          </div>
          ${it.map(F=>{let q=(n||[]).find(E=>E.date===D&&E.slot===F.key),O=q?.recipeId?o.find(E=>E.id===q.recipeId):null;return c`<button class="slot" onClick=${()=>p(D,F,q,O)}>
              ${O?.photo?.url?c`<${ie} url=${O.photo.url} name=${O.name} size=${32} />`:c`<span class="slot-icon"><${f} name=${F.icon} size=${18} /></span>`}
              <span class="grow left min0">
                <span class="muted tiny block">${F.label}</span>
                <span class=${`ellipsis block ${q?"":"muted"}`}>${q?q.title:"+ A\xF1adir"}</span>
              </span>
              ${O&&c`<span class="tag primary">Receta</span>`}
            </button>`})}
        </div>`})}
    </div>
  </section>`}var br={RECIPES:"Por las recetas del plan",HABITUAL:"Por lo que sol\xE9is gastar",BELOW_MINIMUM:"Est\xE1 bajo m\xEDnimo"};function wr({weekStart:e,close:t}){let[a,n]=S(null);W(()=>{R(async()=>n(await Me.analyze(e)),{loading:!1})},[]);let s=async()=>{await R(async()=>{let i=await Me.addToShopping(a);x("pop"),B(i===1?"1 producto a\xF1adido a la compra":`${i} productos a\xF1adidos a la compra`),K.emit("changed"),t()})},o=a?.needs.filter(i=>i.toBuy<=0)||[];return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow"><h2>Previsión de la compra</h2><p class="muted small">${ve(e)} – ${ve(pe(e,6))}</p></div>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    ${!a&&c`<div class="skeleton"></div><div class="skeleton"></div>`}
    ${a&&c`
      <div class="card soft total-card">
        <span class="muted small">Coste estimado de la semana</span>
        <strong class="total">${ne(a.estimatedCost)}</strong>
        <span class="muted small">${a.plannedMeals===1?"1 comida planificada":`${a.plannedMeals} comidas planificadas`}
          ${a.withoutPrice>0?` \xB7 ${a.withoutPrice} sin precio`:""}</span>
      </div>
      ${a.toBuy.length===0&&c`<div class="empty small"><${Ce} name="done" /><h2>Tienes todo lo necesario</h2>
        <p class="muted">Con el plan y lo que soléis gastar, no hace falta comprar nada esta semana.</p></div>`}
      ${a.toBuy.length>0&&c`<h3 class="section-label">Hay que comprar</h3>`}
      ${a.toBuy.map((i,r)=>c`<div class="need enter" style=${`--i:${r}`}>
        <div class="grow min0">
          <strong>${i.name}</strong> ${i.isUrgent&&c`<span class="tag danger">No llega</span>`}
          <span class="muted small block">${br[i.reason]} · plan ${Q(i.planned)} · habitual ${Q(i.habitual)} · tienes ${Q(i.inStock)} ${i.unit}</span>
        </div>
        <div class="right">
          <strong class="primary-text">Comprar ${Q(i.toBuy)} ${i.unit}</strong>
          <span class="muted small block">${i.estimatedCost!=null?ne(i.estimatedCost):"Sin precio"}</span>
        </div>
      </div>`)}
      ${o.length>0&&c`<h3 class="section-label">Ya cubierto</h3>
        ${o.map(i=>c`<div class="need covered"><span class="grow">${i.name}</span><span class="muted small">tienes ${Q(i.inStock)} ${i.unit}</span></div>`)}`}
      ${a.toBuy.length>0&&c`<button class="btn primary wide" onClick=${s}><${f} name="cart" size=${20} /> Añadir todo a la compra (${a.toBuy.length})</button>`}
    `}
  </div>`}var qt="6.0",Bs=[{version:"6.0",date:"octubre 2026",items:[{icon:"store",title:"Recetas con productos del s\xFAper",text:"Cada ingrediente se busca en tus supermercados con su precio. Si hay varias opciones te lo indica y eliges cu\xE1l usar."},{icon:"cart",title:"Compra ordenada por pasillos",text:"La lista va por categor\xEDas: primero lo seco, despu\xE9s los frescos y al final los congelados."},{icon:"hourglass",title:"Avisos de caducidad",text:"\xABTienes 3 productos que caducan pronto\xBB y, si algo caduca ma\xF1ana, te lo dice por su nombre."},{icon:"cook",title:"\xBFQu\xE9 puedo cocinar?",text:"Recetas con lo que tienes en casa, empezando por las que aprovechan lo que est\xE1 a punto de caducar."},{icon:"shield",title:"Al\xE9rgenos e intolerancias",text:"Marca tus alergias (gluten, lactosa\u2026) y ver\xE1s avisos en productos y recetas."},{icon:"trend",title:"Historial inteligente",text:"Aprende cada cu\xE1nto compras cada cosa y te sugiere reponerla antes de que se acabe."},{icon:"scan",title:"Tickets desde una foto",text:"Haz una foto al ticket y se leen solas las l\xEDneas y el total."},{icon:"globe",title:"Comunidad de recetas",text:"Comparte tus recetas con el resto de usuarios, dales \xABme gusta\xBB y com\xE9ntalas."},{icon:"palette",title:"Estilos Neo-Brutalismo y Pixel art",text:"Dos estilos nuevos en Perfil \u2192 Apariencia."},{icon:"help",title:"Tutorial",text:"Una gu\xEDa de todas las funciones, en Casa \u2192 Tutorial."}]}],Pt=[{icon:"pantry",title:"Tu despensa",points:["Todo lo que hay en casa, agrupado por categor\xEDas. Toca un producto para editarlo.","Los botones \u2212 y + cambian la cantidad. Cuando baja de su m\xEDnimo pasa solo a la lista de la compra.","Desliza un producto hacia un lado para borrarlo (tienes unos segundos para deshacer).","Mant\xE9n pulsado un producto para a\xF1adirlo a la compra aunque no est\xE9 bajo m\xEDnimo."]},{icon:"store",title:"A\xF1adir productos",points:["Con el + busca en tus supermercados (Mercadona, Dia, Lidl, Eroski): se rellenan foto, categor\xEDa y precio.","En la app de Android tambi\xE9n puedes escanear el c\xF3digo de barras.","Puedes poner fecha de caducidad o marcarlo como \xABsin caducidad\xBB. En Perfil eliges la caducidad por defecto.","Si tienes alergias configuradas, ver\xE1s un aviso en los productos que las contienen."]},{icon:"hourglass",title:"Caducidad",points:["Arriba de la despensa ver\xE1s \xABTienes x productos que caducan pronto\xBB (en los pr\xF3ximos 3 d\xEDas).","Si algo caduca ma\xF1ana te avisa por su nombre para que no se desaproveche.","Pulsa \xAB\xBFQu\xE9 cocino?\xBB para ver recetas que lo aprovechan."]},{icon:"cart",title:"Lista de la compra",points:["Ordenada como en el s\xFAper: secos, luego frescos y al final congelados, cada cosa en su categor\xEDa.","Marca lo que metes en el carro: se pone gris y tachado. Toca la cantidad para cambiarla.","\xABTerminar compra\xBB suma lo comprado a la despensa y te deja guardar el ticket. Si falta algo, te avisa.","El historial aprende cada cu\xE1nto compras cada cosa y te sugiere lo que toca reponer."]},{icon:"receipt",title:"Tickets y gasto",points:["Arriba de la compra ves lo gastado en los \xFAltimos 30 d\xEDas.","Haz una foto a un ticket de papel y se leen las l\xEDneas y el total; revisa y guarda.","Los tickets se pueden corregir o borrar cuando quieras."]},{icon:"recipe",title:"Recetas",points:["Guarda las ideas de serie o crea las tuyas con foto y pasos.","Cada ingrediente muestra el producto del s\xFAper y su precio; si pone \xAB4 opciones\xBB, t\xF3calo para elegir.","\xABA\xF1adir lo necesario a la compra\xBB mete lo que falta. \xABCocinar paso a paso\xBB abre el modo cocina.","Al terminar se descuentan los ingredientes de la despensa."]},{icon:"globe",title:"Comunidad",points:["Comparte una receta tuya desde su detalle: la ver\xE1n todos los usuarios de Stock Casa.","En Recetas \u2192 Comunidad puedes darles \xABme gusta\xBB, comentarlas y guardarlas en tus recetas."]},{icon:"calendar",title:"Plan semanal",points:["Planifica desayuno, comida y cena de cada d\xEDa.","El an\xE1lisis de la semana calcula lo que hay que comprar para el plan y lo a\xF1ade a la lista.","Puedes copiar la semana anterior con un toque."]},{icon:"home",title:"Casa compartida",points:["Invita a tu familia o compa\xF1eros con el c\xF3digo de la casa: todos veis la misma despensa y lista.","Elige el d\xEDa de compra y recibe recordatorios.","En Perfil cambias tu foto, el estilo (Minimalista, Fantas\xEDa, Papel, Neo-Brutalismo o Pixel art), tus supermercados y alergias."]}];function _r({close:e,intro:t=!1}){let[a,n]=S(t?-1:0),s=Pt[a],o=a===Pt.length-1,i=r=>{x("tap"),n(Math.max(t?-1:0,Math.min(Pt.length-1,a+r)))};return c`<div class="sheet-body tutorial">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">Tutorial${a>=0?` \xB7 ${a+1} de ${Pt.length}`:""}</p><h2>${a===-1?"\xA1Bienvenido a Stock Casa!":s.title}</h2></div>
      <button class="icon-btn" onClick=${()=>e()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <div class="cook-progress">${Pt.map((r,u)=>c`<span class=${u<a?"done":u===a?"now":""}></span>`)}</div>
    <div class="tutorial-stage" key=${a}>
      ${a===-1?c`<div class="center-col">
        <span class="tutorial-icon big"><${f} name="sparkle" size=${44} /></span>
        <p class="center">Te enseñamos en un minuto todo lo que puedes hacer: despensa, compra, recetas, caducidad, tickets y más.</p>
      </div>`:c`<div>
        <span class="tutorial-icon"><${f} name=${s.icon} size=${34} /></span>
        <ul class="tutorial-points">${s.points.map(r=>c`<li><${f} name="check" size=${18} /><span>${r}</span></li>`)}</ul>
      </div>`}
    </div>
    <div class="row-2">
      ${a===-1?c`<button class="btn tonal" onClick=${()=>e()}>Ahora no</button>`:c`<button class="btn tonal" disabled=${a===0} onClick=${()=>i(-1)}><${f} name="chevron_left" size=${20} /> Anterior</button>`}
      <button class="btn primary" onClick=${()=>o?e():i(1)}>${a===-1?"Empezar":o?"\xA1Entendido!":"Siguiente"} ${!o&&c`<${f} name="chevron_right" size=${20} />`}</button>
    </div>
  </div>`}var ya=(e=!1)=>G(_r,{intro:e});function Wa({close:e,releases:t=Bs.slice(0,1),reload:a=!1}){return c`<div class="sheet-body">
    <div class="sheet-title">
      <span class="tutorial-icon small"><${f} name="new" size=${26} /></span>
      <div class="grow min0"><p class="muted small">${a?"Hay una versi\xF3n nueva":`Versi\xF3n ${t[0].version}`}</p><h2>Novedades</h2></div>
      <button class="icon-btn" onClick=${()=>e(!1)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    ${t.map(n=>c`<div class="whatsnew">
      ${t.length>1&&c`<h3 class="section-label">Versión ${n.version} · ${n.date}</h3>`}
      ${n.items.map((s,o)=>c`<div class="whatsnew-item enter" style=${`--i:${Math.min(o,12)}`}>
        <span class="menu-icon"><${f} name=${s.icon} size=${20} /></span>
        <div class="grow min0"><strong class="block">${s.title}</strong><span class="muted small">${s.text}</span></div>
      </div>`)}
    </div>`)}
    <div class="stack">
      ${a?c`<button class="btn primary wide" onClick=${()=>e(!0)}><${f} name="undo" size=${20} /> Actualizar ahora</button>`:c`<button class="btn primary wide" onClick=${()=>e(!0)}>¡Genial!</button>`}
      ${!a&&c`<button class="btn text wide" onClick=${()=>{e(!1),ya()}}><${f} name="help" size=${20} /> Ver el tutorial</button>`}
    </div>
  </div>`}var Us=()=>G(Wa,{releases:Bs}),va=e=>{try{return localStorage.getItem(e)}catch{return null}},Fs=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},Ds="stockcasa.seenVersion",Os="stockcasa.expiryNotice",js=(e,t)=>{let a=String(e).split(".").map(Number),n=String(t).split(".").map(Number);for(let s=0;s<Math.max(a.length,n.length);s++)if((a[s]||0)!==(n[s]||0))return(a[s]||0)>(n[s]||0);return!1},Rs=!1;async function Vs(){if(Rs)return;Rs=!0;let e=va(Ds);Fs(Ds,qt);let t=!!(va("stockcasa.settings")||va("stockcasa.swipeHint"));!e&&!t?await ya(!0):(!e||js(qt,e))&&await G(Wa,{}),await kr(),Sr()}async function kr(){if(va(Os)!==Z())try{await ee.current();let e=Qt(await fe.all());if(Fs(Os,Z()),!e)return;Cr(e),await ye({title:e.title,message:e.message,confirm:"\xBFQu\xE9 cocino?",cancel:"Vale"})&&await Lt()}catch{}}function Cr(e){try{if(!("Notification"in window)||Notification.permission!=="granted")return;let t={body:e.message,icon:"icons/icon-192.png",tag:"stockcasa-expiry"};navigator.serviceWorker?.getRegistration?.().then(a=>a?a.showNotification(e.title,t):new Notification(e.title,t)).catch(()=>{})}catch{}}function Sr(){let e=!1,t=async()=>{if(!(e||document.visibilityState!=="visible"))try{let a=await fetch(`version.json?t=${Date.now()}`,{cache:"no-store"});if(!a.ok)return;let{version:n}=await a.json();if(!n||!js(n,qt))return;e=!0,await G(Wa,{reload:!0,releases:[{version:n,date:"",items:[{icon:"new",title:`Stock Casa ${n}`,text:"Actualiza para ver lo nuevo. No perder\xE1s nada: tus datos est\xE1n en la nube."}]}]})&&location.reload()}catch{}};setInterval(t,30*60*1e3),document.addEventListener("visibilitychange",t)}function Gs({active:e,onLogout:t,onNoHouse:a,openSettingsRequest:n}){let[s,o]=S(null),[i,r]=S([]),[u,m]=S(null),[g,l]=S({}),h=async(E=!1)=>{await R(async()=>{let y=await ee.current(),[b,$,_]=await Promise.all([ee.mine(),Se.me(!0),Se.many(y.memberIds,!0)]);o(y),r(b),m($),l(_)},{loading:!1,onError:E?()=>{}:ge})};W(()=>{e&&h()},[e]),Ee(E=>E==="changed"&&e&&h(!0)),W(()=>{e&&n&&D()},[n]);let d=async()=>{await navigator.clipboard?.writeText(s.inviteCode).catch(()=>{}),x("pop"),B("C\xF3digo copiado")},p=()=>{let E=`\xA1\xDAnete a \xAB${s.name}\xBB en Stock Casa! C\xF3digo: ${s.inviteCode}
${location.origin}${location.pathname}`;navigator.share?navigator.share({text:E}).catch(()=>{}):d()},v=E=>{ee.switchTo(E),x("pop"),B(`Ahora est\xE1s en \xAB${E.name}\xBB`),K.emit("changed"),h(!0)},w=async()=>{let E=await le({title:"Unirse con c\xF3digo",label:"C\xF3digo de 6 caracteres",maxLength:6,confirm:"Unirme"});E&&await R(async()=>{let y=await ee.join(E);ut(),x("success"),B(`Ahora est\xE1s en \xAB${y.name}\xBB`),K.emit("changed"),h(!0)})},C=async()=>{let E=await le({title:"Crear otra casa",label:"Nombre",confirm:"Crear"});E&&await R(async()=>{let y=await ee.create(E);x("success"),B(`Casa \xAB${y.name}\xBB creada`),K.emit("changed"),h(!0)})},I=async()=>{let E=await le({title:"Cambiar nombre",label:"Nombre de la casa",value:s.name});E&&await R(async()=>{await ee.rename(s,E),h(!0)})},z=async()=>{let E=s.memberIds.length<=1,y=i.length<=1?`

Es tu \xFAnica casa: despu\xE9s podr\xE1s crear otra o unirte a una con su c\xF3digo.`:"";await ye({title:E?"Eliminar casa":"Salir de la casa",message:(E?`Eres el \xFAnico miembro de \xAB${s.name}\xBB. Se borrar\xE1n sus productos y su lista de la compra.`:`Dejar\xE1s de ver \xAB${s.name}\xBB. Los dem\xE1s miembros la seguir\xE1n teniendo.`)+y,confirm:E?"Eliminar":"Salir",danger:!0})&&await R(async()=>{await ee.leave(s),B("Has salido de la casa"),(await ee.mine()).length?(K.emit("changed"),h(!0)):a()})},T=async()=>{await ye({title:"Cerrar sesi\xF3n",message:"\xBFSeguro que quieres cerrar sesi\xF3n en este dispositivo?",confirm:"Cerrar sesi\xF3n"})&&(await R(Oe.logout),t())},U=async(E="profile")=>{await G(Er,{profile:u,section:E}),h(!0)};async function D(){let E=s||await ee.current().catch(()=>null);await G(qr,{house:E})==="preferences"?U("preferences"):h(!0)}let N=()=>G(Tr,{}),F=async()=>{let E=await Mr(s.inviteCode);x("pop"),navigator.share?navigator.share({text:E}).catch(()=>{}):(await navigator.clipboard?.writeText(E).catch(()=>{}),B("Mensaje copiado: p\xE9galo en WhatsApp o donde quieras"))};if(!s)return c`<section class="tab"><header class="tab-header"><h1 class="brand">Casa</h1></header>
    <div class="skeleton-list"><div class="skeleton tall"></div><div class="skeleton"></div></div></section>`;let q=H.current()?.userId,O=se.get();return c`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Casa</h1></header>

    <div class="card hero enter" style="--i:0">
      <span class="hero-icon"><${f} name="home" size=${30} /></span>
      <div class="grow min0">
        <h2 class="ellipsis">${s.name}</h2>
        <p class="muted small">${s.memberIds.length===1?"Solo t\xFA":`${s.memberIds.length} miembros`} · ${lt(s.shoppingDay)}</p>
      </div>
      <button class="icon-btn" onClick=${I} aria-label="Cambiar nombre"><${f} name="edit" /></button>
    </div>

    ${u&&c`<button class="card profile-card enter" style="--i:1" onClick=${()=>U()}>
      <${tt} profile=${u} size=${56} />
      <span class="grow min0 left">
        <strong class="ellipsis block big-text">${we(u)}</strong>
        <span class="muted small ellipsis block">${u.email}</span>
        <span class="primary-text small strong">Tu perfil, apariencia y preferencias</span>
      </span>
      <${f} name="chevron_right" />
    </button>`}

    <div class="card enter" style="--i:2">
      <h3>Invitar a alguien</h3>
      <p class="muted small">Comparte este código: quien lo introduzca verá y editará esta misma casa.</p>
      <div class="invite-code" onClick=${d}>${s.inviteCode}</div>
      <div class="row-2">
        <button class="btn tonal" onClick=${d}><${f} name="copy" size=${18} /> Copiar</button>
        <button class="btn tonal" onClick=${p}><${f} name="share" size=${18} /> Compartir</button>
      </div>
    </div>

    <div class="card enter" style="--i:3">
      <h3>Miembros</h3>
      ${s.memberIds.map((E,y)=>{let b=g[E]||{id:E,email:s.memberEmails[y]||"",avatarColor:Ue[y%Ue.length]};return c`<div class="member">
          <${tt} profile=${b} size=${40} />
          <div class="grow min0">
            <strong class="ellipsis block">${we(b)}${E===q?" (t\xFA)":""}</strong>
            <span class="muted small ellipsis block">${b.email}</span>
          </div>
          ${E===s.ownerId&&c`<span class="tag primary">Creador</span>`}
        </div>`})}
    </div>

    <div class="card menu enter" style="--i:4">
      <h3>Ajustes</h3>
      <button class="menu-row" onClick=${D}>
        <span class="menu-icon"><${f} name="calendar" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Día de compra</strong><span class="muted small ellipsis block">${lt(s.shoppingDay)}</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>U("appearance")}>
        <span class="menu-icon"><${f} name="palette" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Apariencia</strong><span class="muted small ellipsis block">${Ir(O)}</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>U("preferences")}>
        <span class="menu-icon"><${f} name="store" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Supermercados, caducidad y alergias</strong><span class="muted small ellipsis block">${O.stores.map(E=>Ie.find(y=>y.key===E)?.label).filter(Boolean).join(", ")} · ${kn(O.defaultExpiry)}${O.allergens?.length?` \xB7 ${Ae(O.allergens).join(", ")}`:""}</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>ya()}>
        <span class="menu-icon"><${f} name="help" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Tutorial</strong><span class="muted small ellipsis block">Todo lo que puedes hacer, paso a paso</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>Us()}>
        <span class="menu-icon"><${f} name="new" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Novedades</strong><span class="muted small ellipsis block">Versión ${qt}</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${F}>
        <span class="menu-icon"><${f} name="share" size=${20} /></span>
        <span class="grow left"><strong>Compartir Stock Casa</strong></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${N}>
        <span class="menu-icon"><${f} name="home" size=${20} /></span>
        <span class="grow left"><strong>Instalar en el móvil</strong></span>
        <${f} name="chevron_right" size=${20} />
      </button>
    </div>

    <div class="card enter" style="--i:5">
      <h3>Mis casas</h3>
      ${i.map(E=>c`<button class="house-row" onClick=${()=>E.id!==s.id&&v(E)}>
        <span class="grow left ellipsis">${E.name}</span>
        ${E.id===s.id?c`<span class="tag success">Abierta</span>`:c`<span class="muted small">Abrir</span>`}
      </button>`)}
      <div class="row-2">
        <button class="btn tonal" onClick=${w}><${f} name="login" size=${18} /> Unirme</button>
        <button class="btn tonal" onClick=${C}><${f} name="add" size=${18} /> Crear</button>
      </div>
    </div>

    <div class="row-2 enter" style="--i:6">
      <button class="btn text" onClick=${T}><${f} name="logout" size=${20} /> Cerrar sesión</button>
      <button class="btn danger" onClick=${z}><${f} name="logout" size=${20} /> ${s.memberIds.length<=1?"Eliminar casa":"Salir de la casa"}</button>
    </div>
    <p class="muted tiny center">Stock Casa web · mismos datos que la app de Android</p>
  </section>`}var Ir=e=>[Xt,It,qa].map((t,a)=>t.find(n=>n.key===[e.style,e.theme,e.mode][a])?.label).join(" \xB7 "),zr=`\xA1Prueba Stock Casa! La despensa y la lista de la compra de casa, compartidas.

Si tienes Android, descarga la app: {apk}
Si tienes iPhone, abre este enlace en Safari y elige Compartir \u2192 \xABA\xF1adir a pantalla de inicio\xBB: {web}

Despu\xE9s crea tu cuenta y \xFAnete a nuestra casa con el c\xF3digo {codigo}.`;async function Mr(e){let t=`${location.origin}${location.pathname.replace(/[^/]*$/,"")}`,a=zr;try{let n=await fetch(`compartir.txt?v=${Date.now()}`,{cache:"no-store"});n.ok&&(a=(await n.text()).trim()||a)}catch{}return a.replaceAll("{apk}",`${t}StockCasa.apk`).replaceAll("{web}",t).replaceAll("{codigo}",e||"que te pase")}var xr=[{key:"profile",label:"Perfil",icon:"person"},{key:"appearance",label:"Apariencia",icon:"palette"},{key:"preferences",label:"Preferencias",icon:"settings"}];function Er({profile:e,section:t="profile",close:a}){let[n,s]=S(t),[o,i]=S(e);return c`<div class="sheet-body profile-sheet">
    <div class="sheet-title">
      <${tt} profile=${o} size=${44} />
      <div class="grow min0"><h2 class="ellipsis">${we(o)}</h2><p class="muted small ellipsis">${o.email}</p></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <div class="segmented tabs">
      ${xr.map(r=>c`<button class=${n===r.key?"on":""} onClick=${()=>{s(r.key),x("tap")}}>
        <${f} name=${r.icon} size=${16} /> ${r.label}</button>`)}
    </div>
    <div class="section-body" key=${n}>
      ${n==="profile"&&c`<${Ar} profile=${o} onSaved=${i} />`}
      ${n==="appearance"&&c`<${Lr} />`}
      ${n==="preferences"&&c`<${Pr} />`}
    </div>
  </div>`}function Ar({profile:e,onSaved:t}){let[a,n]=S(e.nickname),[s,o]=S(e.avatarColor),[i,r]=S(void 0),[u,m]=S(null),g=Y(),l={...e,nickname:a||e.nickname,avatarColor:s,avatar:i===null?null:u?{url:u}:e.avatar},h=a!==e.nickname||s!==e.avatarColor||i!==void 0,d=async v=>{let w=v.target.files?.[0];if(v.target.value="",!w)return;let C=await dt(w,600);r(C),m(URL.createObjectURL(C))};return c`<form class="stack" onSubmit=${async v=>{v.preventDefault();let w=await R(()=>Se.save({nickname:a,avatarColor:s,photo:i}));w&&(x("success"),B("Perfil guardado"),r(void 0),t(w),K.emit("changed"))}}>
    <div class="card center-col">
      <button type="button" class="plain avatar-edit" onClick=${()=>g.current.click()}>
        <${tt} profile=${l} size=${104} />
        <span class="avatar-cam"><${f} name="camera" size=${18} /></span>
      </button>
      ${l.avatar&&c`<button type="button" class="btn text small" onClick=${()=>{r(null),m(null)}}>Quitar foto</button>`}
      <input ref=${g} type="file" accept="image/*" hidden onChange=${d} />
    </div>
    <div class="card stack">
      <label class="field"><span>Apodo</span><input maxlength="24" value=${a} onInput=${v=>n(v.target.value)} /></label>
      <span class="field-label">Color del avatar</span>
      <div class="color-row">
        ${Ue.map(v=>c`<button type="button" class=${`color-dot ${v===s?"selected":""}`} style=${`background:${v}`}
          aria-label="Color" onClick=${()=>{o(v),x("tap")}}></button>`)}
      </div>
    </div>
    <button class="btn primary wide" type="submit" disabled=${!h}><${f} name="check" size=${20} /> Guardar perfil</button>
  </form>`}function Lr(){let[e,t]=S(se.get()),a=(n,s)=>{t(se.set(n)),Te(s),x("pop")};return c`<div class="stack appearance">
    <div class="card stack">
      <h3>Estilo</h3>
      <div class="style-list">
        ${Xt.map(n=>c`<button type="button" class=${`style-choice ${e.style===n.key?"selected":""}`}
          onClick=${s=>a({style:n.key},s.currentTarget.querySelector(".style-preview"))}>
          <span class=${`style-preview ${n.key}`}><i></i><i></i><b></b></span>
          <span class="grow left"><strong class="block">${n.label}</strong><span class="muted small block">${n.description}</span></span>
          ${e.style===n.key&&c`<${f} name="check" size=${22} class="primary-text" />`}
        </button>`)}
      </div>
    </div>

    <div class="card stack">
      <h3>Color</h3>
      <div class="theme-row">
        ${It.map(n=>c`<button type="button" class=${`theme-choice ${e.theme===n.key?"selected":""}`}
          onClick=${s=>a({theme:n.key},s.currentTarget.firstChild)}>
          <span class="swatch" style=${`background:${n.color};border-color:${n.soft}`}>${e.theme===n.key&&c`<${f} name="check" size=${22} />`}</span>
          <span>${n.label}</span>
        </button>`)}
      </div>
    </div>

    <div class="card stack">
      <h3>Modo</h3>
      <div class="segmented">
        ${qa.map(n=>c`<button type="button" class=${e.mode===n.key?"on":""}
          onClick=${s=>a({mode:n.key},s.currentTarget)}>${n.label}</button>`)}
      </div>
    </div>
    <p class="muted small center">La apariencia solo cambia en este dispositivo</p>
  </div>`}function Pr(){let[e,t]=S(se.get()),a=s=>t(se.set(s)),n=s=>{let o=e.stores.includes(s);if(o&&e.stores.length===1)return B("Elige al menos un supermercado");let i=o?e.stores.filter(r=>r!==s):Ie.map(r=>r.key).filter(r=>r===s||e.stores.includes(r));a({stores:i}),x(o?"tap":"pop")};return c`<div class="stack">
    <div class="card stack">
      <h3>Supermercados que frecuentáis</h3>
      <p class="muted small">Al buscar un producto solo aparecerá lo de estos supermercados, y saldrán primero al guardar un ticket.</p>
      <div class="store-list">
        ${Ie.map(s=>{let o=e.stores.includes(s.key);return c`<button class=${`store-choice ${o?"on":""}`} style=${`--store:${s.color}`} onClick=${()=>n(s.key)}>
            <span class="store-mark">${s.label.charAt(0)}</span>
            <span class="grow left"><strong class="block">${s.label}</strong><span class="muted tiny block">${s.prices?"Con precios":"Sin precios (fichas de Open Food Facts)"}</span></span>
            <span class=${`check ${o?"on":""}`}>${o&&c`<${f} name="check" size=${16} />`}</span>
          </button>`})}
      </div>
    </div>

    <div class="card stack">
      <h3><${f} name="shield" size=${18} /> Alergias e intolerancias</h3>
      <p class="muted small">Marca las tuyas y verás un aviso en los productos, en los ingredientes de las recetas y en las opciones del súper que las lleven. Se guarda en este dispositivo.</p>
      <div class="chips wrap allergen-chips">
        ${nt.map(s=>{let o=(e.allergens||[]).includes(s.key);return c`<button class=${`chip ${o?"checked":""}`} onClick=${()=>{a({allergens:o?e.allergens.filter(i=>i!==s.key):[...e.allergens||[],s.key]}),x(o?"tap":"pop")}}>${s.label}</button>`})}
      </div>
    </div>

    <div class="card stack">
      <h3>Caducidad por defecto</h3>
      <p class="muted small">La fecha que se propone al añadir un producto nuevo. Siempre se puede cambiar en su ficha.</p>
      <div class="chips wrap">
        ${_t.map(s=>c`<button class=${`chip ${e.defaultExpiry===s.days?"checked":""}`} onClick=${()=>{a({defaultExpiry:s.days}),x("tap")}}>${s.label}</button>`)}
      </div>
    </div>

    <div class="card">
      <h3>Sonidos y vibración</h3>
      <label class="switch-row"><span>Sonidos</span>
        <input type="checkbox" class="switch" checked=${e.sounds} onChange=${s=>{a({sounds:s.target.checked}),s.target.checked&&x("check")}} /></label>
      <label class="switch-row"><span>Vibración (Android)</span>
        <input type="checkbox" class="switch" checked=${e.vibration} onChange=${s=>a({vibration:s.target.checked})} /></label>
    </div>
    <p class="muted small center">Estas preferencias se guardan en este dispositivo</p>
  </div>`}function qr({house:e,close:t}){let[a,n]=S(e),s=Y(),o=async i=>{if(!a||i===a.shoppingDay)return;let r=await R(()=>ee.setShoppingDay(a,i),{loading:!1});r&&(n(r),x("pop"),Te(s.current),K.emit("changed"))};return c`<div class="sheet-body">
    <div class="sheet-title"><h2 class="grow">Día de compra</h2>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${f} name="close" /></button></div>

    ${a&&c`<div class="card">
      <h3>Día de compra semanal</h3>
      <p class="muted small">Lo comparten todos los de «${a.name}»</p>
      <div class="chips wrap">
        ${[0,1,2,3,4,5,6,7].map(i=>c`<button class=${`chip ${a.shoppingDay===i?"checked":""}`} onClick=${()=>o(i)}>
          ${i===0?"Ninguno":Sn(i)}
        </button>`)}
      </div>
      <p class="primary-text strong" ref=${s}>${lt(a.shoppingDay)}</p>
      <p class="muted small">En el iPhone la web no puede mandar avisos como la app de Android; verás el día de compra en la pestaña Compra.</p>
    </div>`}
    <button class="btn tonal wide" onClick=${()=>t("preferences")}><${f} name="store" size=${18} /> Supermercados y otras preferencias</button>
  </div>`}function Tr({close:e}){let t=/iPhone|iPad|iPod/.test(navigator.userAgent);return c`<div class="sheet-body">
    <div class="sheet-title"><h2 class="grow">Instalar Stock Casa</h2>
      <button class="icon-btn" onClick=${()=>e()} aria-label="Cerrar"><${f} name="close" /></button></div>
    <p class="muted">Así tendrás Stock Casa en la pantalla de inicio, a pantalla completa, como una app más.</p>
    <ol class="steps-list">
      ${t?c`
        <li>Abre esta página en <strong>Safari</strong>.</li>
        <li>Toca el botón <strong>Compartir</strong> (el cuadrado con la flecha hacia arriba).</li>
        <li>Elige <strong>«Añadir a pantalla de inicio»</strong> y pulsa <strong>Añadir</strong>.</li>
      `:c`
        <li>Abre esta página en <strong>Chrome</strong>.</li>
        <li>Toca el menú <strong>⋮</strong> de arriba a la derecha.</li>
        <li>Elige <strong>«Añadir a pantalla de inicio»</strong> o <strong>«Instalar aplicación»</strong>.</li>
      `}
    </ol>
    <p class="muted small">Si tienes Android, también puedes usar la app nativa (con avisos del día de compra).</p>
  </div>`}var Nr=[{key:"pantry",label:"Despensa",icon:"pantry"},{key:"shopping",label:"Compra",icon:"cart"},{key:"recipes",label:"Recetas",icon:"recipe"},{key:"plan",label:"Semana",icon:"calendar"},{key:"house",label:"Casa",icon:"home"}];function Hr(){let[e,t]=S(()=>Oe.isLoggedIn()?"home":"login"),[a,n]=S(()=>location.hash==="#compra"?"shopping":"pantry"),[s,o]=S(()=>new Set([a])),[i,r]=S(0),[u,m]=S(0);W(()=>{Un(d=>{d.noHouse?t("setup"):(H.clear(),t("login"))})},[]),W(()=>{e==="home"&&setTimeout(()=>Vs(),600)},[e]);let g=(d,p)=>{d!==a&&x("tap"),n(d),o(new Set([...s,d])),p==="settings"&&m(Date.now()),window.scrollTo({top:0})},l=async()=>{try{let d=await ee.mine();t(d.length?"home":"setup")}catch{t("home")}};if(e==="login")return c`<${fs} onLoggedIn=${l} onRegister=${()=>t("register")} />`;if(e==="register")return c`<${$s} onRegistered=${()=>t("setup")} onBack=${()=>t("login")} />`;if(e==="setup")return c`<${vs} onReady=${()=>{n("pantry"),t("home")}}
      onLogout=${async()=>{await Oe.logout(),t("login")}} />`;let h={goTo:g,setBadge:r};return c`<div class="app">
    <div class="tabs-content">
      ${s.has("pantry")&&c`<div class=${`tab-page ${a==="pantry"?"active":""}`}><${Ms} active=${a==="pantry"} ...${h} /></div>`}
      ${s.has("shopping")&&c`<div class=${`tab-page ${a==="shopping"?"active":""}`}><${qs} active=${a==="shopping"} ...${h} /></div>`}
      ${s.has("recipes")&&c`<div class=${`tab-page ${a==="recipes"?"active":""}`}><${Cs} active=${a==="recipes"} ...${h} /></div>`}
      ${s.has("plan")&&c`<div class=${`tab-page ${a==="plan"?"active":""}`}><${Hs} active=${a==="plan"} ...${h} /></div>`}
      ${s.has("house")&&c`<div class=${`tab-page ${a==="house"?"active":""}`}><${Gs} active=${a==="house"}
        openSettingsRequest=${u} onLogout=${()=>t("login")} onNoHouse=${()=>t("setup")} /></div>`}
    </div>
    <nav class="bottom-nav">
      ${Nr.map(d=>c`<button class=${`nav-item ${a===d.key?"active":""}`} onClick=${()=>g(d.key)} aria-label=${d.label}>
        <span class="nav-icon" key=${a===d.key?"on":"off"}><${f} name=${d.icon} size=${24} />
          ${d.key==="shopping"&&i>0&&c`<span class="badge">${i>99?"99+":i}</span>`}
        </span>
        <span class="nav-label">${d.label}</span>
      </button>`)}
    </nav>
  </div>`}Jt();var Ws=document.getElementById("app");Ws.textContent="";Qe(c`<${Hr} />`,Ws);"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});
