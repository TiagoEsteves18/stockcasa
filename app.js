var rt,D,Yt,hn,Se,Wt,Kt,Et,Mt,St,xt,fn,Ve={},Xt=[],gn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,At=Array.isArray;function Ce(e,t){for(var a in t)e[a]=t[a];return e}function Zt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Pt(e,t,a){var n,s,o,c={};for(o in t)o=="key"?n=t[o]:o=="ref"?s=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?rt.call(arguments,2):a),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return nt(e,c,n,s,null)}function nt(e,t,a,n,s){var o={type:e,props:t,key:a,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++Yt,__i:-1,__u:0};return s==null&&D.vnode!=null&&D.vnode(o),o}function it(e){return e.children}function st(e,t){this.props=e,this.context=t}function He(e,t){if(t==null)return e.__?He(e.__,e.__i+1):null;for(var a;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null)return a.__e;return typeof e.type=="function"?He(e):null}function ea(e){var t,a;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null){e.__e=e.__c.base=a.__e;break}return ea(e)}}function Qt(e){(!e.__d&&(e.__d=!0)&&Se.push(e)&&!ot.__r++||Wt!==D.debounceRendering)&&((Wt=D.debounceRendering)||Kt)(ot)}function ot(){var e,t,a,n,s,o,c,l;for(Se.sort(Et);e=Se.shift();)e.__d&&(t=Se.length,n=void 0,o=(s=(a=e).__v).__e,c=[],l=[],a.__P&&((n=Ce({},s)).__v=s.__v+1,D.vnode&&D.vnode(n),Lt(a.__P,n,s,a.__n,a.__P.namespaceURI,32&s.__u?[o]:null,c,o??He(s),!!(32&s.__u),l),n.__v=s.__v,n.__.__k[n.__i]=n,na(c,n,l),n.__e!=o&&ea(n)),Se.length>t&&Se.sort(Et));ot.__r=0}function ta(e,t,a,n,s,o,c,l,u,i,$){var r,f,m,g,w,b=n&&n.__k||Xt,C=t.length;for(a.__d=u,$n(a,t,b),u=a.__d,r=0;r<C;r++)(m=a.__k[r])!=null&&(f=m.__i===-1?Ve:b[m.__i]||Ve,m.__i=r,Lt(e,m,f,s,o,c,l,u,i,$),g=m.__e,m.ref&&f.ref!=m.ref&&(f.ref&&Ht(f.ref,null,m),$.push(m.ref,m.__c||g,m)),w==null&&g!=null&&(w=g),65536&m.__u||f.__k===m.__k?u=aa(m,u,e):typeof m.type=="function"&&m.__d!==void 0?u=m.__d:g&&(u=g.nextSibling),m.__d=void 0,m.__u&=-196609);a.__d=u,a.__e=w}function $n(e,t,a){var n,s,o,c,l,u=t.length,i=a.length,$=i,r=0;for(e.__k=[],n=0;n<u;n++)(s=t[n])!=null&&typeof s!="boolean"&&typeof s!="function"?(c=n+r,(s=e.__k[n]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?nt(null,s,null,null,null):At(s)?nt(it,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?nt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,o=null,(l=s.__i=bn(s,a,c,$))!==-1&&($--,(o=a[l])&&(o.__u|=131072)),o==null||o.__v===null?(l==-1&&r--,typeof s.type!="function"&&(s.__u|=65536)):l!==c&&(l==c-1?r--:l==c+1?r++:(l>c?r--:r++,s.__u|=65536))):s=e.__k[n]=null;if($)for(n=0;n<i;n++)(o=a[n])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=He(o)),sa(o,o))}function aa(e,t,a){var n,s;if(typeof e.type=="function"){for(n=e.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=e,t=aa(n[s],t,a));return t}e.__e!=t&&(t&&e.type&&!a.contains(t)&&(t=He(e)),a.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function bn(e,t,a,n){var s=e.key,o=e.type,c=a-1,l=a+1,u=t[a];if(u===null||u&&s==u.key&&o===u.type&&!(131072&u.__u))return a;if(n>(u!=null&&!(131072&u.__u)?1:0))for(;c>=0||l<t.length;){if(c>=0){if((u=t[c])&&!(131072&u.__u)&&s==u.key&&o===u.type)return c;c--}if(l<t.length){if((u=t[l])&&!(131072&u.__u)&&s==u.key&&o===u.type)return l;l++}}return-1}function Gt(e,t,a){t[0]==="-"?e.setProperty(t,a??""):e[t]=a==null?"":typeof a!="number"||gn.test(t)?a:a+"px"}function at(e,t,a,n,s){var o;e:if(t==="style")if(typeof a=="string")e.style.cssText=a;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)a&&t in a||Gt(e.style,t,"");if(a)for(t in a)n&&a[t]===n[t]||Gt(e.style,t,a[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=a,a?n?a.u=n.u:(a.u=Mt,e.addEventListener(t,o?xt:St,o)):e.removeEventListener(t,o?xt:St,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=a??"";break e}catch{}typeof a=="function"||(a==null||a===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&a==1?"":a))}}function Jt(e){return function(t){if(this.l){var a=this.l[t.type+e];if(t.t==null)t.t=Mt++;else if(t.t<a.u)return;return a(D.event?D.event(t):t)}}}function Lt(e,t,a,n,s,o,c,l,u,i){var $,r,f,m,g,w,b,C,E,T,A,N,H,K,q,h,p=t.type;if(t.constructor!==void 0)return null;128&a.__u&&(u=!!(32&a.__u),o=[l=t.__e=a.__e]),($=D.__b)&&$(t);e:if(typeof p=="function")try{if(C=t.props,E="prototype"in p&&p.prototype.render,T=($=p.contextType)&&n[$.__c],A=$?T?T.props.value:$.__:n,a.__c?b=(r=t.__c=a.__c).__=r.__E:(E?t.__c=r=new p(C,A):(t.__c=r=new st(C,A),r.constructor=p,r.render=_n),T&&T.sub(r),r.props=C,r.state||(r.state={}),r.context=A,r.__n=n,f=r.__d=!0,r.__h=[],r._sb=[]),E&&r.__s==null&&(r.__s=r.state),E&&p.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=Ce({},r.__s)),Ce(r.__s,p.getDerivedStateFromProps(C,r.__s))),m=r.props,g=r.state,r.__v=t,f)E&&p.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),E&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(E&&p.getDerivedStateFromProps==null&&C!==m&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(C,A),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(C,r.__s,A)===!1||t.__v===a.__v)){for(t.__v!==a.__v&&(r.props=C,r.state=r.__s,r.__d=!1),t.__e=a.__e,t.__k=a.__k,t.__k.some(function(v){v&&(v.__=t)}),N=0;N<r._sb.length;N++)r.__h.push(r._sb[N]);r._sb=[],r.__h.length&&c.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(C,r.__s,A),E&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(m,g,w)})}if(r.context=A,r.props=C,r.__P=e,r.__e=!1,H=D.__r,K=0,E){for(r.state=r.__s,r.__d=!1,H&&H(t),$=r.render(r.props,r.state,r.context),q=0;q<r._sb.length;q++)r.__h.push(r._sb[q]);r._sb=[]}else do r.__d=!1,H&&H(t),$=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++K<25);r.state=r.__s,r.getChildContext!=null&&(n=Ce(Ce({},n),r.getChildContext())),E&&!f&&r.getSnapshotBeforeUpdate!=null&&(w=r.getSnapshotBeforeUpdate(m,g)),ta(e,At(h=$!=null&&$.type===it&&$.key==null?$.props.children:$)?h:[h],t,a,n,s,o,c,l,u,i),r.base=t.__e,t.__u&=-161,r.__h.length&&c.push(r),b&&(r.__E=r.__=null)}catch(v){if(t.__v=null,u||o!=null){for(t.__u|=u?160:128;l&&l.nodeType===8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,t.__e=l}else t.__e=a.__e,t.__k=a.__k;D.__e(v,t,a)}else o==null&&t.__v===a.__v?(t.__k=a.__k,t.__e=a.__e):t.__e=vn(a.__e,t,a,n,s,o,c,u,i);($=D.diffed)&&$(t)}function na(e,t,a){t.__d=void 0;for(var n=0;n<a.length;n++)Ht(a[n],a[++n],a[++n]);D.__c&&D.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){D.__e(o,s.__v)}})}function vn(e,t,a,n,s,o,c,l,u){var i,$,r,f,m,g,w,b=a.props,C=t.props,E=t.type;if(E==="svg"?s="http://www.w3.org/2000/svg":E==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(i=0;i<o.length;i++)if((m=o[i])&&"setAttribute"in m==!!E&&(E?m.localName===E:m.nodeType===3)){e=m,o[i]=null;break}}if(e==null){if(E===null)return document.createTextNode(C);e=document.createElementNS(s,E,C.is&&C),l&&(D.__m&&D.__m(t,o),l=!1),o=null}if(E===null)b===C||l&&e.data===C||(e.data=C);else{if(o=o&&rt.call(e.childNodes),b=a.props||Ve,!l&&o!=null)for(b={},i=0;i<e.attributes.length;i++)b[(m=e.attributes[i]).name]=m.value;for(i in b)if(m=b[i],i!="children"){if(i=="dangerouslySetInnerHTML")r=m;else if(!(i in C)){if(i=="value"&&"defaultValue"in C||i=="checked"&&"defaultChecked"in C)continue;at(e,i,null,m,s)}}for(i in C)m=C[i],i=="children"?f=m:i=="dangerouslySetInnerHTML"?$=m:i=="value"?g=m:i=="checked"?w=m:l&&typeof m!="function"||b[i]===m||at(e,i,m,b[i],s);if($)l||r&&($.__html===r.__html||$.__html===e.innerHTML)||(e.innerHTML=$.__html),t.__k=[];else if(r&&(e.innerHTML=""),ta(e,At(f)?f:[f],t,a,n,E==="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,c,o?o[0]:a.__k&&He(a,0),l,u),o!=null)for(i=o.length;i--;)Zt(o[i]);l||(i="value",E==="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[i]||E==="progress"&&!g||E==="option"&&g!==b[i])&&at(e,i,g,b[i],s),i="checked",w!==void 0&&w!==e[i]&&at(e,i,w,b[i],s))}return e}function Ht(e,t,a){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(s){D.__e(s,a)}}function sa(e,t,a){var n,s;if(D.unmount&&D.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Ht(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){D.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&sa(n[s],t,a||typeof e.type!="function");a||Zt(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function _n(e,t,a){return this.constructor(e,a)}function xe(e,t,a){var n,s,o,c;D.__&&D.__(e,t),s=(n=typeof a=="function")?null:a&&a.__k||t.__k,o=[],c=[],Lt(t,e=(!n&&a||t).__k=Pt(it,null,[e]),s||Ve,Ve,t.namespaceURI,!n&&a?[a]:s?null:t.firstChild?rt.call(t.childNodes):null,o,!n&&a?a:s?s.__e:t.firstChild,n,c),na(o,e,c)}rt=Xt.slice,D={__e:function(e,t,a,n){for(var s,o,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),c=s.__d),c)return s.__E=s}catch(l){e=l}throw e}},Yt=0,hn=function(e){return e!=null&&e.constructor==null},st.prototype.setState=function(e,t){var a;a=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Ce({},this.state),typeof e=="function"&&(e=e(Ce({},a),this.props)),e&&Ce(a,e),e!=null&&this.__v&&(t&&this._sb.push(t),Qt(this))},st.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Qt(this))},st.prototype.render=it,Se=[],Kt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Et=function(e,t){return e.__v.__b-t.__v.__b},ot.__r=0,Mt=0,St=Jt(!1),xt=Jt(!0),fn=0;var je,j,Tt,oa,lt=0,ma=[],Q=D,ra=Q.__b,ia=Q.__r,ca=Q.diffed,la=Q.__c,ua=Q.unmount,da=Q.__;function qt(e,t){Q.__h&&Q.__h(j,e,lt||t),lt=0;var a=j.__H||(j.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function k(e){return lt=1,yn(fa,e)}function yn(e,t,a){var n=qt(je++,2);if(n.t=e,!n.__c&&(n.__=[a?a(t):fa(void 0,t),function(l){var u=n.__N?n.__N[0]:n.__[0],i=n.t(u,l);u!==i&&(n.__N=[i,n.__[1]],n.__c.setState({}))}],n.__c=j,!j.u)){var s=function(l,u,i){if(!n.__c.__H)return!0;var $=n.__c.__H.__.filter(function(f){return!!f.__c});if($.every(function(f){return!f.__N}))return!o||o.call(this,l,u,i);var r=!1;return $.forEach(function(f){if(f.__N){var m=f.__[0];f.__=f.__N,f.__N=void 0,m!==f.__[0]&&(r=!0)}}),!(!r&&n.__c.props===l)&&(!o||o.call(this,l,u,i))};j.u=!0;var o=j.shouldComponentUpdate,c=j.componentWillUpdate;j.componentWillUpdate=function(l,u,i){if(this.__e){var $=o;o=void 0,s(l,u,i),o=$}c&&c.call(this,l,u,i)},j.shouldComponentUpdate=s}return n.__N||n.__}function R(e,t){var a=qt(je++,3);!Q.__s&&ha(a.__H,t)&&(a.__=e,a.i=t,j.__H.__h.push(a))}function Y(e){return lt=5,ut(function(){return{current:e}},[])}function ut(e,t){var a=qt(je++,7);return ha(a.__H,t)&&(a.__=e(),a.__H=t,a.__h=e),a.__}function wn(){for(var e;e=ma.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ct),e.__H.__h.forEach(zt),e.__H.__h=[]}catch(t){e.__H.__h=[],Q.__e(t,e.__v)}}Q.__b=function(e){j=null,ra&&ra(e)},Q.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),da&&da(e,t)},Q.__r=function(e){ia&&ia(e),je=0;var t=(j=e.__c).__H;t&&(Tt===j?(t.__h=[],j.__h=[],t.__.forEach(function(a){a.__N&&(a.__=a.__N),a.i=a.__N=void 0})):(t.__h.forEach(ct),t.__h.forEach(zt),t.__h=[],je=0)),Tt=j},Q.diffed=function(e){ca&&ca(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ma.push(t)!==1&&oa===Q.requestAnimationFrame||((oa=Q.requestAnimationFrame)||Cn)(wn)),t.__H.__.forEach(function(a){a.i&&(a.__H=a.i),a.i=void 0})),Tt=j=null},Q.__c=function(e,t){t.some(function(a){try{a.__h.forEach(ct),a.__h=a.__h.filter(function(n){return!n.__||zt(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],Q.__e(n,a.__v)}}),la&&la(e,t)},Q.unmount=function(e){ua&&ua(e);var t,a=e.__c;a&&a.__H&&(a.__H.__.forEach(function(n){try{ct(n)}catch(s){t=s}}),a.__H=void 0,t&&Q.__e(t,a.__v))};var pa=typeof requestAnimationFrame=="function";function Cn(e){var t,a=function(){clearTimeout(n),pa&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);pa&&(t=requestAnimationFrame(a))}function ct(e){var t=j,a=e.__c;typeof a=="function"&&(e.__c=void 0,a()),j=t}function zt(e){var t=j;e.__c=e.__(),j=t}function ha(e,t){return!e||e.length!==t.length||t.some(function(a,n){return a!==e[n]})}function fa(e,t){return typeof t=="function"?t(e):t}var $a=function(e,t,a,n){var s;t[0]=0;for(var o=1;o<t.length;o++){var c=t[o++],l=t[o]?(t[0]|=c?1:2,a[t[o++]]):t[++o];c===3?n[0]=l:c===4?n[1]=Object.assign(n[1]||{},l):c===5?(n[1]=n[1]||{})[t[++o]]=l:c===6?n[1][t[++o]]+=l+"":c?(s=e.apply(l,$a(e,l,a,["",null])),n.push(s),l[0]?t[0]|=2:(t[o-2]=0,t[o]=s)):n.push(l)}return n},ga=new Map;function ba(e){var t=ga.get(this);return t||(t=new Map,ga.set(this,t)),(t=$a(this,t.get(e)||(t.set(e,t=function(a){for(var n,s,o=1,c="",l="",u=[0],i=function(f){o===1&&(f||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,f,c):o===3&&(f||c)?(u.push(3,f,c),o=2):o===2&&c==="..."&&f?u.push(4,f,0):o===2&&c&&!f?u.push(5,0,!0,c):o>=5&&((c||!f&&o===5)&&(u.push(o,0,c,s),o=6),f&&(u.push(o,f,0,s),o=6)),c=""},$=0;$<a.length;$++){$&&(o===1&&i(),i($));for(var r=0;r<a[$].length;r++)n=a[$][r],o===1?n==="<"?(i(),u=[u],o=3):c+=n:o===4?c==="--"&&n===">"?(o=1,c=""):c=n+c[0]:l?n===l?l="":c+=n:n==='"'||n==="'"?l=n:n===">"?(i(),o=1):o&&(n==="="?(o=5,s=c,c=""):n==="/"&&(o<5||a[$][r+1]===">")?(i(),o===3&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(i(),o=2):c+=n),o===3&&c==="!--"&&(o=4,u=u[0])}return i(),u}(e)),t),arguments,[])).length>1?t:t[0]}var va={clock:{d:["M11.99,2C6.47,2 2,6.48 2,12s4.47,10 9.99,10C17.52,22 22,17.52 22,12S17.52,2 11.99,2zM12,20c-4.42,0 -8,-3.58 -8,-8s3.58,-8 8,-8 8,3.58 8,8 -3.58,8 -8,8zM12.5,7H11v6l5.25,3.15 0.75,-1.23 -4.5,-2.67z"],vb:"24"},chevron_right:{d:["M10,6L8.59,7.41 13.17,12l-4.58,4.59L10,18l6,-6z"],vb:"24"},remove:{d:["M19,13H5v-2h14v2z"],vb:"24"},calendar:{d:["M19,4h-1V2h-2v2H8V2H6v2H5c-1.11,0 -1.99,0.9 -1.99,2L3,20c0,1.1 0.89,2 2,2h14c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM9,14H7v-2h2v2zM13,14h-2v-2h2v2zM17,14h-2v-2h2v2zM9,18H7v-2h2v2zM13,18h-2v-2h2v2zM17,18h-2v-2h2v2z"],vb:"24"},lock:{d:["M18,8h-1V6c0,-2.76 -2.24,-5 -5,-5S7,3.24 7,6v2H6c-1.1,0 -2,0.9 -2,2v10c0,1.1 0.9,2 2,2h12c1.1,0 2,-0.9 2,-2V10c0,-1.1 -0.9,-2 -2,-2zM12,17c-1.1,0 -2,-0.9 -2,-2s0.9,-2 2,-2 2,0.9 2,2 -0.9,2 -2,2zM15.1,8H8.9V6c0,-1.71 1.39,-3.1 3.1,-3.1 1.71,0 3.1,1.39 3.1,3.1v2z"],vb:"24"},cook:{d:["M13.5,0.67s0.74,2.65 0.74,4.8c0,2.06 -1.35,3.73 -3.41,3.73 -2.07,0 -3.63,-1.67 -3.63,-3.73l0.03,-0.36C5.21,7.51 4,10.62 4,14c0,4.42 3.58,8 8,8s8,-3.58 8,-8C20,8.61 17.41,3.8 13.5,0.67zM11.71,19c-1.78,0 -3.22,-1.4 -3.22,-3.14 0,-1.62 1.05,-2.76 2.81,-3.12 1.77,-0.36 3.6,-1.21 4.62,-2.58 0.39,1.29 0.59,2.65 0.59,4.04 0,2.65 -2.15,4.8 -4.8,4.8z"],vb:"24"},mail:{d:["M20,4H4c-1.1,0 -1.99,0.9 -1.99,2L2,18c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM20,8l-8,5 -8,-5V6l8,5 8,-5v2z"],vb:"24"},search:{d:["M15.5,14h-0.79l-0.28,-0.27C15.41,12.59 16,11.11 16,9.5 16,5.91 13.09,3 9.5,3S3,5.91 3,9.5 5.91,16 9.5,16c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99L20.49,19l-4.99,-5zM9.5,14C7.01,14 5,11.99 5,9.5S7.01,5 9.5,5 14,7.01 14,9.5 11.99,14 9.5,14z"],vb:"24"},store:{d:["M20,4H4v2h16V4zM21,14v-2l-1,-5H4l-1,5v2h1v6h10v-6h4v6h2v-6H21zM12,18H6v-4h6V18z"],vb:"24"},bell:{d:["M12,22c1.1,0 2,-0.9 2,-2h-4c0,1.1 0.89,2 2,2zM18,16v-5c0,-3.07 -1.64,-5.64 -4.5,-6.32L13.5,4c0,-0.83 -0.67,-1.5 -1.5,-1.5s-1.5,0.67 -1.5,1.5v0.68C7.63,5.36 6,7.92 6,11v5l-2,2v1h16v-1l-2,-2z"],vb:"24"},share:{d:["M18,16.08c-0.76,0 -1.44,0.3 -1.96,0.77L8.91,12.7c0.05,-0.23 0.09,-0.46 0.09,-0.7s-0.04,-0.47 -0.09,-0.7l7.05,-4.11c0.54,0.5 1.25,0.81 2.04,0.81 1.66,0 3,-1.34 3,-3s-1.34,-3 -3,-3 -3,1.34 -3,3c0,0.24 0.04,0.47 0.09,0.7L8.04,9.81C7.5,9.31 6.79,9 6,9c-1.66,0 -3,1.34 -3,3s1.34,3 3,3c0.79,0 1.5,-0.31 2.04,-0.81l7.12,4.16c-0.05,0.21 -0.08,0.43 -0.08,0.65 0,1.61 1.31,2.92 2.92,2.92 1.61,0 2.92,-1.31 2.92,-2.92s-1.31,-2.92 -2.92,-2.92z"],vb:"24"},login:{d:["M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5,-5L11,7zM20,19h-8v2h8c1.1,0 2,-0.9 2,-2V5c0,-1.1 -0.9,-2 -2,-2h-8v2h8V19z"],vb:"24"},cart:{d:["M7,18c-1.1,0 -1.99,0.9 -1.99,2S5.9,22 7,22s2,-0.9 2,-2 -0.9,-2 -2,-2zM1,2v2h2l3.6,7.59 -1.35,2.45c-0.16,0.28 -0.25,0.61 -0.25,0.96 0,1.1 0.9,2 2,2h12v-2H7.42c-0.14,0 -0.25,-0.11 -0.25,-0.25l0.03,-0.12 0.9,-1.63h7.45c0.75,0 1.41,-0.41 1.75,-1.03l3.58,-6.49c0.08,-0.14 0.12,-0.31 0.12,-0.48 0,-0.55 -0.45,-1 -1,-1H5.21l-0.94,-2H1zM17,18c-1.1,0 -1.99,0.9 -1.99,2s0.89,2 1.99,2 2,-0.9 2,-2 -0.9,-2 -2,-2z"],vb:"24"},insights:{d:["M21,8c-1.45,0 -2.26,1.44 -1.93,2.51l-3.55,3.56c-0.3,-0.09 -0.74,-0.09 -1.04,0l-2.55,-2.55C12.27,10.45 11.46,9 10,9c-1.45,0 -2.27,1.44 -1.93,2.52l-4.56,4.55C2.44,15.74 1,16.55 1,18c0,1.1 0.9,2 2,2c1.45,0 2.26,-1.44 1.93,-2.51l4.55,-4.56c0.3,0.09 0.74,0.09 1.04,0l2.55,2.55C12.73,16.55 13.54,18 15,18c1.45,0 2.27,-1.44 1.93,-2.52l3.56,-3.55C21.56,12.26 23,11.45 23,10C23,8.9 22.1,8 21,8z"],vb:"24"},image:{d:["M21,19V5c0,-1.1 -0.9,-2 -2,-2H5c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2zM8.5,13.5l2.5,3.01L14.5,12l4.5,6H5l3.5,-4.5z"],vb:"24"},close:{d:["M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"],vb:"24"},people:{d:["M16,11c1.66,0 2.99,-1.34 2.99,-3S17.66,5 16,5c-1.66,0 -3,1.34 -3,3s1.34,3 3,3zM8,11c1.66,0 2.99,-1.34 2.99,-3S9.66,5 8,5C6.34,5 5,6.34 5,8s1.34,3 3,3zM8,13c-2.33,0 -7,1.17 -7,3.5V19h14v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5zM16,13c-0.29,0 -0.62,0.02 -0.97,0.05 1.16,0.84 1.97,1.97 1.97,3.45V19h6v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5z"],vb:"24"},add:{d:["M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],vb:"24"},arrow_back:{d:["M20,11H7.83l5.59,-5.59L12,4l-8,8 8,8 1.41,-1.41L7.83,13H20v-2z"],vb:"24"},camera:{d:["M12,12m-3.2,0a3.2,3.2 0,1 1,6.4 0a3.2,3.2 0,1 1,-6.4 0M9,2L7.17,4H4c-1.1,0 -2,0.9 -2,2v12c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2h-3.17L15,2H9zM12,17c-2.76,0 -5,-2.24 -5,-5s2.24,-5 5,-5 5,2.24 5,5 -2.24,5 -5,5z"],vb:"24"},delete:{d:["M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2V7H6v12zM19,4h-3.5l-1,-1h-5l-1,1H5v2h14V4z"],vb:"24"},recipe:{d:["M8.1,13.34l2.83,-2.83L3.91,3.5c-1.56,1.56 -1.56,4.09 0,5.66l4.19,4.18zM14.88,11.53c1.53,0.71 3.68,0.21 5.27,-1.38 1.91,-1.91 2.28,-4.65 0.81,-6.12 -1.46,-1.46 -4.2,-1.1 -6.12,0.81 -1.59,1.59 -2.09,3.74 -1.38,5.27L3.7,19.87l1.41,1.41L12,14.41l6.88,6.88 1.41,-1.41L13.41,13l1.47,-1.47z"],vb:"24"},check:{d:["M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41,-1.41z"],vb:"24"},barcode:{d:["M9.5,6.5v3h-3v-3H9.5M11,5H5v6h6V5L11,5zM9.5,14.5v3h-3v-3H9.5M11,13H5v6h6V13L11,13zM17.5,6.5v3h-3v-3H17.5M19,5h-6v6h6V5L19,5zM13,13h1.5v1.5H13V13zM14.5,14.5H16V16h-1.5V14.5zM16,13h1.5v1.5H16V13zM13,16h1.5v1.5H13V16zM14.5,17.5H16V19h-1.5V17.5zM16,16h1.5v1.5H16V16zM17.5,14.5H19V16h-1.5V14.5zM17.5,17.5H19V19h-1.5V17.5zM22,7h-2V4h-3V2h5V7zM22,22v-5h-2v3h-3v2H22zM2,22h5v-2H4v-3H2V22zM2,2v5h2V4h3V2H2z"],vb:"24"},swap:{d:["M6.99,11L3,15l3.99,4v-3H14v-2H6.99v-3zM21,9l-3.99,-4v3H10v2h7.01v3L21,9z"],vb:"24"},pantry:{d:["M20,2H4c-1.1,0 -2,0.9 -2,2v4c0,0.74 0.4,1.38 1,1.73V20c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2V9.73c0.6,-0.35 1,-0.99 1,-1.73V4c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM20,8H4V4h16v4zM9,12h6v2H9z"],vb:"24"},logout:{d:["M17,7l-1.41,1.41L18.17,11H8v2h10.17l-2.58,2.58L17,17l5,-5zM4,5h8V3H4c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h8v-2H4V5z"],vb:"24"},edit:{d:["M3,17.25V21h3.75L17.81,9.94l-3.75,-3.75L3,17.25zM20.71,7.04c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34c-0.39,-0.39 -1.02,-0.39 -1.41,0l-1.83,1.83 3.75,3.75 1.83,-1.83z"],vb:"24"},settings:{d:["M19.14,12.94c0.04,-0.3 0.06,-0.61 0.06,-0.94c0,-0.32 -0.02,-0.64 -0.07,-0.94l2.03,-1.58c0.18,-0.14 0.23,-0.41 0.12,-0.61l-1.92,-3.32c-0.12,-0.22 -0.37,-0.29 -0.59,-0.22l-2.39,0.96c-0.5,-0.38 -1.03,-0.7 -1.62,-0.94L14.4,2.81c-0.04,-0.24 -0.24,-0.41 -0.48,-0.41h-3.84c-0.24,0 -0.43,0.17 -0.47,0.41L9.25,5.35C8.66,5.59 8.12,5.92 7.63,6.29L5.24,5.33c-0.22,-0.08 -0.47,0 -0.59,0.22L2.74,8.87C2.62,9.08 2.66,9.34 2.86,9.48l2.03,1.58C4.84,11.36 4.8,11.69 4.8,12s0.02,0.64 0.07,0.94l-2.03,1.58c-0.18,0.14 -0.23,0.41 -0.12,0.61l1.92,3.32c0.12,0.22 0.37,0.29 0.59,0.22l2.39,-0.96c0.5,0.38 1.03,0.7 1.62,0.94l0.36,2.54c0.05,0.24 0.24,0.41 0.48,0.41h3.84c0.24,0 0.44,-0.17 0.47,-0.41l0.36,-2.54c0.59,-0.24 1.13,-0.56 1.62,-0.94l2.39,0.96c0.22,0.08 0.47,0 0.59,-0.22l1.92,-3.32c0.12,-0.22 0.07,-0.47 -0.12,-0.61L19.14,12.94zM12,15.6c-1.98,0 -3.6,-1.62 -3.6,-3.6s1.62,-3.6 3.6,-3.6s3.6,1.62 3.6,3.6S13.98,15.6 12,15.6z"],vb:"24"},copy:{d:["M16,1H4c-1.1,0 -2,0.9 -2,2v14h2V3h12V1zM19,5H8c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h11c1.1,0 2,-0.9 2,-2V7c0,-1.1 -0.9,-2 -2,-2zM19,21H8V7h11v14z"],vb:"24"},undo:{d:["M12.5,8c-2.65,0 -5.05,0.99 -6.9,2.6L2,7v9h9l-3.62,-3.62c1.39,-1.16 3.16,-1.88 5.12,-1.88 3.54,0 6.55,2.31 7.6,5.5l2.37,-0.78C21.08,11.03 17.15,8 12.5,8z"],vb:"24"},chevron_left:{d:["M15.41,7.41L14,6l-6,6 6,6 1.41,-1.41L10.83,12z"],vb:"24"},home:{d:["M10,20v-6h4v6h5v-8h3L12,3 2,12h3v8z"],vb:"24"}};var kn="https://parseapi.back4app.com/",In="peyCaKkG6IbflEpErk7t1iEH1fngfxgwUwv17qyI",En="ejB6EBANvzAfnp5Mh6QOIkPtliBJBC1AVTspICfB",Nt="stockcasa.session",dt="stockcasa.houseId",S={current(){try{return JSON.parse(localStorage.getItem(Nt))||null}catch{return null}},save(e){localStorage.setItem(Nt,JSON.stringify(e))},clear(){localStorage.removeItem(Nt),localStorage.removeItem(dt)},token(){return this.current()?.sessionToken||null},email(){return this.current()?.email||""},requireUserId(){let e=this.current()?.userId;if(!e)throw Z.sessionExpired();return e},houseId(){return localStorage.getItem(dt)},requireHouseId(){let e=this.houseId();if(!e)throw new We;return e},saveHouseId(e){e?localStorage.setItem(dt,e):localStorage.removeItem(dt)}},Z=class e extends Error{constructor(t,a){super(a),this.code=t}get isSessionExpired(){return this.code===209}static fromServer(t,a){let s={100:"No se ha podido conectar con el servidor",101:"No se ha encontrado el elemento. Actualiza la lista",125:"El correo no es v\xE1lido",202:"Ya existe una cuenta con ese correo",203:"Ya existe una cuenta con ese correo",205:"No hay ninguna cuenta con ese correo",209:"Tu sesi\xF3n ha caducado. Vuelve a iniciar sesi\xF3n"}[t];return!s&&t===119&&(s=a?.includes("addField")?"Back4App no deja crear una columna nueva. A\xF1\xE1dela en el panel de Back4App":"Back4App no permite esta operaci\xF3n. Revisa los permisos de la clase"),new e(t,s||a||"Error inesperado del servidor")}static sessionExpired(){return e.fromServer(209)}},We=class extends Error{constructor(){super("Todav\xEDa no tienes ninguna casa"),this.noHouse=!0}},Qe=class extends Error{};function O(e,t){if(!e)throw new Qe(t)}async function Te(e,t,{body:a,query:n,authenticated:s=!0,raw:o}={}){let c=new URL(t,kn);n&&Object.entries(n).forEach(([m,g])=>c.searchParams.set(m,g));let l={"X-Parse-Application-Id":In,"X-Parse-REST-API-Key":En,"X-Parse-Revocable-Session":"1"},u=S.token();s&&u&&(l["X-Parse-Session-Token"]=u);let i;o?(i=o.data,l["Content-Type"]=o.contentType):a!==void 0&&(i=JSON.stringify(a),l["Content-Type"]="application/json");let $;try{$=await fetch(c,{method:e,headers:l,body:i})}catch{throw new Z(100,"Sin conexi\xF3n. Comprueba tu acceso a internet")}let r={},f=await $.text();try{r=f?JSON.parse(f):{}}catch{r={error:f}}if(!$.ok)throw Z.fromServer(r.code??-1,r.error||`Error HTTP ${$.status}`);return r}var I={get:(e,t)=>Te("GET",e,{query:t}),post:(e,t={},a={})=>Te("POST",e,{body:t,...a}),put:(e,t)=>Te("PUT",e,{body:t}),async delete(e){try{await Te("DELETE",e)}catch(t){if(t.code!==101)throw t}},async query(e,t,{limit:a=1e3,order:n}={}){let s={where:JSON.stringify(t),limit:String(a)};return n&&(s.order=n),(await Te("GET",`classes/${e}`,{query:s})).results||[]},uploadFile(e,t,a){return Te("POST",`files/${e}`,{raw:{data:t,contentType:a}})}},F={userPointer:e=>({__type:"Pointer",className:"_User",objectId:e}),publicAcl:()=>({"*":{read:!0,write:!0}}),fileRef:(e,t)=>({__type:"File",name:e,url:t}),date:e=>({__type:"Date",iso:`${e}T12:00:00.000Z`}),instant:e=>({__type:"Date",iso:e.toISOString()}),readDate:e=>e?.iso&&e.iso.length>=10?e.iso.slice(0,10):null,addUnique:(...e)=>({__op:"AddUnique",objects:e}),remove:(...e)=>({__op:"Remove",objects:e})};function de(e,t=0){let a=typeof e=="number"?e:parseFloat(e);return Number.isFinite(a)?a:t}function ze(e){return typeof e=="string"&&e.trim()&&e!=="null"?e:null}var pe="uds";var mt="\u{1F372}",_a=["\u{1F372}","\u{1F35D}","\u{1F957}","\u{1F373}","\u{1F958}","\u{1F35B}","\u{1F32E}","\u{1F355}","\u{1F96A}","\u{1F370}","\u{1F95E}","\u{1F35C}"],qe=["#2D8CF0","#5B6CF0","#8E5CF0","#E0569B","#EF5A5A","#F08A2D","#1FA971","#14A3B8"];var Ne=[{key:"BREAKFAST",label:"Desayuno",emoji:"\u{1F373}"},{key:"LUNCH",label:"Comida",emoji:"\u{1F37D}\uFE0F"},{key:"DINNER",label:"Cena",emoji:"\u{1F319}"}],te=e=>Math.round(e*1e3)/1e3,z={isLow:e=>e.quantity<=e.criticalLimit,amountToBuy:e=>te(Math.max(e.criticalLimit-e.quantity+1,1)),level:e=>Math.min(Math.max(e.quantity/Math.max(e.criticalLimit*2,1),0),1),image:e=>e.photo?.url||e.imageUrl||null,daysUntilExpiry:e=>e.expiresAt?ht(ae(),e.expiresAt):null,expiryStatus(e){let t=z.daysUntilExpiry(e);return t===null?"NONE":t<0?"EXPIRED":t<=3?"SOON":"OK"},needsExpiryAttention:e=>["EXPIRED","SOON"].includes(z.expiryStatus(e)),withQuantity:(e,t)=>({...e,quantity:te(Math.max(t,0))})};function ya(e){let t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${n}`}function Ge(e){let[t,a,n]=e.split("-").map(Number);return new Date(t,a-1,n)}var ae=()=>ya(new Date);function X(e,t){let a=Ge(e);return a.setDate(a.getDate()+t),ya(a)}function ht(e,t){return Math.round((e&&t?Ge(t)-Ge(e):0)/864e5)}var Ae=e=>(Ge(e).getDay()+6)%7+1,Je=e=>X(e,1-Ae(e)),Sn=["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"],xn=["Lun","Mar","Mi\xE9","Jue","Vie","S\xE1b","Dom"],Mn=["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],Me=e=>Sn[e-1],wa=e=>xn[e-1],Ye=e=>e&&e[0].toUpperCase()+e.slice(1);function he(e){let t=Ge(e);return`${t.getDate()} ${Mn[t.getMonth()]}`}function pt(e,t=ae()){return X(t,(e-Ae(t)+7)%7)}function Ke(e){if(!(e>=1&&e<=7))return"Sin d\xEDa de compra fijo \xB7 toca para elegir uno";let t=ht(ae(),pt(e));return t===0?"\xA1Hoy es d\xEDa de compra! \u{1F6D2}":t===1?`Ma\xF1ana (${Me(e)}) toca compra`:`Pr\xF3xima compra: ${Me(e)} ${he(pt(e))} \xB7 dentro de ${t} d\xEDas`}var An=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}),Pn=new Intl.NumberFormat("es-ES",{maximumFractionDigits:2,useGrouping:!1}),ne=e=>An.format(e||0),B=e=>Pn.format(e||0);function oe(e){let t=parseFloat(String(e??"").trim().replace(",","."));return Number.isFinite(t)&&t>=0?t:null}var Xe=e=>(e||"").split("@")[0]||e,Ln=[[["fruta","verdura"],"\u{1F955}"],[["leche","l\xE1cteo","lacteo","yogur","huevo"],"\u{1F95B}"],[["queso","charcut"],"\u{1F9C0}"],[["carne","pollo"],"\u{1F969}"],[["pescado","marisco"],"\u{1F41F}"],[["pan","boller\xEDa","bolleria","pastel"],"\u{1F956}"],[["agua","refresco","bebida","zumo"],"\u{1F964}"],[["bodega","vino","cerveza"],"\u{1F377}"],[["caf\xE9","cafe","cacao","infusion","infusi\xF3n"],"\u2615"],[["aceite","especia","salsa"],"\u{1FAD2}"],[["arroz","legumbre","pasta"],"\u{1F35D}"],[["az\xFAcar","azucar","chocolate","caramelo"],"\u{1F36B}"],[["cereal","galleta"],"\u{1F963}"],[["conserva","caldo","crema","despensa"],"\u{1F96B}"],[["aperitivo","snack"],"\u{1F968}"],[["postre"],"\u{1F36E}"],[["pizza","preparado"],"\u{1F355}"],[["congelado","helado"],"\u{1F9CA}"],[["limpieza","hogar"],"\u{1F9FD}"],[["higiene","cuidado","ba\xF1o","maquillaje","parafarmacia"],"\u{1F9F4}"],[["beb\xE9","bebe"],"\u{1F37C}"],[["mascota"],"\u{1F43E}"],[["alimentaci\xF3n","alimentacion","comida"],"\u{1F34E}"]];function ie(e){let t=(e||"").trim().toLowerCase();if(!t)return"\u{1F4E6}";let a=Ln.find(([n])=>n.some(s=>t.includes(s)));return a?a[1]:"\u{1F4E6}"}var re=e=>e?.nickname?.trim()||Xe(e?.email||"")||"?",Ca=e=>re(e).charAt(0).toUpperCase()||"?";var d=ba.bind(Pt),ka="stockcasa.settings",Ia={theme:"blue",mode:"light",style:"minimal",sounds:!0,vibration:!0},Ze=[{key:"blue",label:"Azul",color:"#2D8CF0",soft:"#E6F2FF"},{key:"red",label:"Rojo",color:"#E5484D",soft:"#FDE8E8"},{key:"green",label:"Verde",color:"#22A06B",soft:"#E2F6EC"},{key:"pink",label:"Rosa",color:"#E8589B",soft:"#FDE7F1"},{key:"purple",label:"Morado",color:"#8B5CF6",soft:"#EEE7FF"}],Bt=[{key:"system",label:"Autom\xE1tico"},{key:"light",label:"Claro"},{key:"dark",label:"Oscuro"}],$t=[{key:"minimal",label:"Minimalista",description:"Tarjetas blancas que flotan con sombra suave"},{key:"fantasy",label:"Fantas\xEDa \u2728",description:"Burbujas con borde de color, botones de caramelo y un fondo de cuento"}],ke={get(){try{return{...Ia,...JSON.parse(localStorage.getItem(ka))}}catch{return{...Ia}}},set(e){let t={...ke.get(),...e};try{localStorage.setItem(ka,JSON.stringify(t))}catch{}return bt(t),t}},Ma=window.matchMedia?.("(prefers-color-scheme: dark)");function bt(e=ke.get()){let t=Ze.find(s=>s.key===e.theme)||Ze[0],a=e.mode==="dark"||e.mode==="system"&&Ma?.matches,n=document.documentElement;n.dataset.theme=t.key,n.dataset.mode=a?"dark":"light",n.dataset.style=$t.some(s=>s.key===e.style)?e.style:"minimal",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a?"#0E141D":t.soft)}Ma?.addEventListener?.("change",()=>bt());var Aa={tap:.3,pop:.6,up:.45,down:.45,check:.55,swipe:.5,success:.6,error:.5},Hn={tap:8,pop:15,up:6,down:6,check:[10,40,18],swipe:15,success:[12,50,25],error:[30,60,30]},ft=null,Pa={};function La(){if(!ft){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;ft=new e,Object.keys(Aa).forEach(async t=>{try{let a=await(await fetch(`sounds/sfx_${t}.wav`)).arrayBuffer();Pa[t]=await ft.decodeAudioData(a)}catch{}})}return ft}document.addEventListener("pointerdown",()=>La()?.resume?.(),{capture:!0});function x(e){let{sounds:t,vibration:a}=ke.get();if(t){let n=La(),s=Pa[e];if(n&&s){let o=n.createBufferSource(),c=n.createGain();c.gain.value=Aa[e]??.5,o.buffer=s,o.connect(c).connect(n.destination),o.start()}}a&&navigator.vibrate&&navigator.vibrate(Hn[e]??10)}function y({name:e,size:t=22,class:a=""}){let n=va[e];return n?d`<svg class=${`icon ${a}`} width=${t} height=${t} viewBox=${`0 0 ${n.vb} ${n.vb}`} aria-hidden="true">
    ${n.d.map(s=>d`<path d=${s} fill="currentColor" />`)}
  </svg>`:null}function Be({profile:e,size:t=40}){let a=`width:${t}px;height:${t}px;font-size:${Math.round(t*.42)}px;background:${e?.avatarColor||"#2D8CF0"}`;return d`<span class="avatar" style=${a} title=${re(e)}>
    ${e?.avatar?.url?d`<img src=${e.avatar.url} alt="" loading="lazy" />`:Ca(e)}
  </span>`}function Ie({url:e,emoji:t,size:a=52}){let[n,s]=k(!1);return d`<span class="thumb" style=${`width:${a}px;height:${a}px;font-size:${Math.round(a*.5)}px`}>
    ${e&&!n?d`<img src=${e} alt="" loading="lazy" onError=${()=>s(!0)} />`:t}
  </span>`}var Pe=null,Ea=null;function P(e,t){Pe||(Pe=document.createElement("div"),Pe.className="toast-host",document.body.appendChild(Pe)),clearTimeout(Ea),xe(d`<div class="toast" key=${Date.now()}>
    <span>${e}</span>
    ${t&&d`<button class="toast-action" onClick=${()=>{xe(null,Pe),t.run()}}>${t.label}</button>`}
  </div>`,Pe),Ea=setTimeout(()=>xe(null,Pe),t?4500:2600)}var Ha=null;function Ta(e){Ha=e}function ee(e){if((e?.noHouse||e instanceof Z&&e.isSessionExpired)&&(Ha?.(e),e.noHouse))return;x("error");let t=e instanceof Z||e instanceof Qe;t||console.error(e),P(t?e.message:"Ha ocurrido un error inesperado. Int\xE9ntalo de nuevo")}async function M(e,{loading:t=!0,onError:a=ee}={}){t&&Sa.show();try{return await e()}catch(n){a(n);return}finally{t&&Sa.hide()}}var Sa={count:0,el:null,show(){this.count++,this.el||(this.el=document.createElement("div"),this.el.className="loading",this.el.innerHTML='<div class="spinner"></div>',document.body.appendChild(this.el)),clearTimeout(this.timer),this.timer=setTimeout(()=>this.el.classList.add("visible"),180)},hide(){this.count=Math.max(0,this.count-1),this.count===0&&this.el&&(clearTimeout(this.timer),this.el.classList.remove("visible"))}},gt=null,De=[];function za(){gt||(gt=document.createElement("div"),document.body.appendChild(gt)),xe(d`${De.map(e=>d`<${Tn} key=${e.id} layer=${e} />`)}`,gt),document.body.classList.toggle("has-layer",De.length>0)}function Tn({layer:e}){let[t,a]=k(!1);e.setClosing=a;let n=e.component;return d`<div class=${`layer ${e.kind} ${t?"closing":""}`}>
    <div class="scrim" onClick=${()=>e.dismissible&&xa(e)}></div>
    <div class="panel" role="dialog" aria-modal="true">
      ${e.kind==="sheet"&&d`<div class="handle"></div>`}
      <${n} ...${e.props} close=${s=>xa(e,s)} />
    </div>
  </div>`}var zn=1;function vt(e,t,a={},n=!0){return new Promise(s=>{let o={id:zn++,kind:e,component:t,props:a,dismissible:n,resolve:s};De.push(o),za()})}function xa(e,t){De.includes(e)&&(e.setClosing?.(!0),setTimeout(()=>{let a=De.indexOf(e);a>=0&&De.splice(a,1),za(),e.resolve(t)},220))}var se=(e,t)=>vt("sheet",e,t);function qn({title:e,message:t,confirm:a="Aceptar",cancel:n="Cancelar",danger:s,close:o}){return d`<div class="dialog-body">
    <h2>${e}</h2>
    ${t&&d`<p class="muted pre">${t}</p>`}
    <div class="dialog-actions">
      ${n&&d`<button class="btn text" onClick=${()=>o(!1)}>${n}</button>`}
      <button class=${`btn ${s?"danger":"primary"}`} onClick=${()=>o(!0)}>${a}</button>
    </div>
  </div>`}var fe=e=>vt("dialog",qn,e);function Nn({title:e,message:t,label:a,value:n="",type:s="text",inputMode:o,confirm:c="Guardar",suffix:l,maxLength:u,close:i}){let[$,r]=k(String(n)),f=Y();return R(()=>{setTimeout(()=>{f.current?.focus(),f.current?.select()},250)},[]),d`<form class="dialog-body" onSubmit=${g=>{g.preventDefault(),i($)}}>
    <h2>${e}</h2>
    ${t&&d`<p class="muted">${t}</p>`}
    <label class="field">
      <span>${a}</span>
      <div class="field-row">
        <input ref=${f} type=${s} inputmode=${o} value=${$} maxlength=${u}
          onInput=${g=>r(g.target.value)} />
        ${l&&d`<span class="suffix">${l}</span>`}
      </div>
    </label>
    <div class="dialog-actions">
      <button type="button" class="btn text" onClick=${()=>i(null)}>Cancelar</button>
      <button type="submit" class="btn primary">${c}</button>
    </div>
  </form>`}var G=e=>vt("dialog",Nn,e);function Dn({title:e,options:t,close:a}){return d`<div class="dialog-body">
    <h2>${e}</h2>
    <div class="choices">
      ${t.map((n,s)=>d`<button class=${`choice ${n.danger?"danger-text":""}`} onClick=${()=>a(s)}>
        ${n.label}
      </button>`)}
    </div>
    <div class="dialog-actions"><button class="btn text" onClick=${()=>a(null)}>Cancelar</button></div>
  </div>`}var ge=(e,t)=>vt("dialog",Dn,{title:e,options:t});function Ue(){let e=document.createElement("canvas");e.className="confetti",document.body.appendChild(e);let t=e.getContext("2d"),a=window.devicePixelRatio||1;e.width=innerWidth*a,e.height=innerHeight*a,t.scale(a,a);let n=[getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#2D8CF0","#7CC0FF","#FFC94D","#FF7A90","#38D39F"],s=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.35,vx:(Math.random()-.5)*13,vy:-Math.random()*14-4,size:5+Math.random()*6,rotation:Math.random()*Math.PI,spin:(Math.random()-.5)*.3,color:n[Math.floor(Math.random()*n.length)],emoji:document.documentElement.dataset.style==="fantasy"&&Math.random()<.35?["\u{1F496}","\u2728","\u{1F338}","\u2B50"][Math.floor(Math.random()*4)]:null})),o=performance.now();(function c(l){let u=l-o;t.clearRect(0,0,innerWidth,innerHeight),s.forEach(i=>{i.vy+=.35,i.vx*=.99,i.x+=i.vx,i.y+=i.vy,i.rotation+=i.spin,t.save(),t.globalAlpha=Math.max(0,1-u/2600),t.translate(i.x,i.y),t.rotate(i.rotation),t.fillStyle=i.color,i.emoji?(t.font=`${i.size*2.2}px serif`,t.fillText(i.emoji,-i.size,i.size)):t.fillRect(-i.size/2,-i.size/3,i.size,i.size*.66),t.restore()}),u<2600?requestAnimationFrame(c):e.remove()})(o)}function Le(e){e?.animate?.([{transform:"scale(1)"},{transform:"scale(1.25)"},{transform:"scale(1)"}],{duration:320,easing:"cubic-bezier(.3,1.6,.5,1)"})}function qa(e){e?.animate?.([0,-10,10,-7,7,-3,0].map(t=>({transform:`translateX(${t}px)`})),{duration:420})}async function _t(e,t=1080){let n=await createImageBitmap(e,{imageOrientation:"from-image"}).catch(()=>null)||await new Promise((u,i)=>{let $=new Image;$.onload=()=>u($),$.onerror=i,$.src=URL.createObjectURL(e)}),s=n.width,o=n.height,c=Math.min(1,t/Math.max(s,o)),l=document.createElement("canvas");return l.width=Math.round(s*c),l.height=Math.round(o*c),l.getContext("2d").drawImage(n,0,0,l.width,l.height),new Promise(u=>l.toBlob(u,"image/jpeg",.82))}var Dt=new Set,V={emit:e=>Dt.forEach(t=>t(e)),on(e){return Dt.add(e),()=>Dt.delete(e)}};function $e(e){let t=Y(e);t.current=e,R(()=>V.on(a=>t.current(a)),[])}function Vt(){let e=Promise.resolve();return t=>{let a=e.then(t,t);return e=a.catch(()=>{}),a}}var Ut=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,ye=6;function Na(e,t){return{userId:e.objectId,email:e.email||t,sessionToken:e.sessionToken}}var we={isLoggedIn:()=>!!S.current(),async login(e,t){e=e.trim(),O(Ut.test(e),"Introduce un correo v\xE1lido"),O(t.length>=ye,`La contrase\xF1a debe tener al menos ${ye} caracteres`);let a;try{a=await I.post("login",{username:e,password:t},{authenticated:!1})}catch(n){throw n.code===101?new Z(101,"Correo o contrase\xF1a incorrectos"):n}S.save(Na(a,e))},async register(e,t,a,n){e=e.trim(),t=t.trim(),O(e,"Escribe c\xF3mo quieres que te llamen"),O(e.length<=24,`El apodo no puede superar ${24} caracteres`),O(Ut.test(t),"Introduce un correo v\xE1lido"),O(a.length>=ye,`La contrase\xF1a debe tener al menos ${ye} caracteres`),O(a===n,"Las contrase\xF1as no coinciden");let s=await I.post("users",{username:t,email:t,password:a,nickname:e},{authenticated:!1});S.save(Na(s,t))},async resetPassword(e){e=e.trim(),O(Ut.test(e),"Introduce un correo v\xE1lido"),await I.post("requestPasswordReset",{email:e},{authenticated:!1})},async logout(){try{await I.post("logout")}catch{}S.clear(),le.clearCache()}};function Da(e){return{id:e.objectId,email:e.email||e.username||"",nickname:ze(e.nickname)||"",avatar:e.avatar?.url?{name:e.avatar.name,url:e.avatar.url}:null,avatarColor:typeof e.avatarColor=="string"&&e.avatarColor.startsWith("#")?e.avatarColor:qe[0]}}var ve=new Map,le={async me(e=!1){let t=S.requireUserId();if(!e&&ve.has(t))return ve.get(t);let a=Da(await I.get("users/me"));return ve.set(a.id,a),a},async many(e,t=!1){let a=t?e:e.filter(n=>!ve.has(n));if(a.length)try{((await I.get("users",{where:JSON.stringify({objectId:{$in:a}}),limit:String(a.length)})).results||[]).map(Da).forEach(s=>ve.set(s.id,s))}catch{}return Object.fromEntries(e.filter(n=>ve.has(n)).map(n=>[n,ve.get(n)]))},async save({nickname:e,avatarColor:t,photo:a}){e=e.trim(),O(e.length<=24,`El apodo no puede superar ${24} caracteres`);let n=await le.me(),s=n.avatar;a===null?s=null:a instanceof Blob&&(s=await Qa(a)),await I.put(`users/${n.id}`,{nickname:e,avatarColor:t,avatar:s?F.fileRef(s.name,s.url):null});let o={...n,nickname:e,avatarColor:t,avatar:s};return ve.set(o.id,o),o},clearCache:()=>ve.clear()};async function Qa(e){let t=await I.uploadFile("image.jpg",e,"image/jpeg");return{name:t.name,url:t.url}}var Ba="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function Ua(e){return{id:e.objectId,name:e.name||"",inviteCode:e.inviteCode||"",ownerId:e.ownerId||"",memberIds:e.members||[],memberEmails:e.memberEmails||[],shoppingDay:de(e.shoppingDay,0)}}var Bn=Vt(),U={async mine(){return(await I.query("House",{members:S.requireUserId()})).map(Ua).sort((t,a)=>t.name.localeCompare(a.name,"es"))},current(){return Bn(async()=>{let e=await U.mine(),t=e.find(a=>a.id===S.houseId())||e[0];if(!t)throw S.saveHouseId(null),new We;return S.saveHouseId(t.id),t})},switchTo(e){S.saveHouseId(e.id)},async create(e){e=e.trim(),O(e,"Escribe un nombre para la casa");let t=S.requireUserId(),a=await Un(),n=await I.post("classes/House",{name:e,inviteCode:a,ownerId:t,members:[t],memberEmails:[S.email()],shoppingDay:0,ACL:F.publicAcl()});return S.saveHouseId(n.objectId),{id:n.objectId,name:e,inviteCode:a}},async join(e){e=e.trim().toUpperCase(),O(e.length===6,`El c\xF3digo tiene ${6} caracteres`);let[t]=await I.query("House",{inviteCode:e},{limit:1});if(!t)throw new Z(101,"No existe ninguna casa con ese c\xF3digo");let a=Ua(t),n=S.requireUserId();return a.memberIds.includes(n)||await I.put(`classes/House/${a.id}`,{members:F.addUnique(n),memberEmails:F.addUnique(S.email())}),S.saveHouseId(a.id),a},async rename(e,t){t=t.trim(),O(t,"Escribe un nombre para la casa"),await I.put(`classes/House/${e.id}`,{name:t})},async setShoppingDay(e,t){return O(t===0||t>=1&&t<=7,"D\xEDa no v\xE1lido"),await I.put(`classes/House/${e.id}`,{shoppingDay:t}),{...e,shoppingDay:t}},async leave(e){if(e.memberIds.length<=1){let[t,a]=await Promise.all([I.query("ShoppingItem",{houseId:e.id}),I.query("Product",{houseId:e.id})]);for(let n of t)await I.delete(`classes/ShoppingItem/${n.objectId}`);for(let n of a)await I.delete(`classes/Product/${n.objectId}`);await I.delete(`classes/House/${e.id}`)}else await I.put(`classes/House/${e.id}`,{members:F.remove(S.requireUserId()),memberEmails:F.remove(S.email())});S.houseId()===e.id&&S.saveHouseId(null)}};async function Un(){for(let e=0;e<5;e++){let t=Array.from({length:6},()=>Ba[Math.floor(Math.random()*Ba.length)]).join("");if(!(await I.query("House",{inviteCode:t},{limit:1})).length)return t}throw new Z(-1,"No se ha podido generar un c\xF3digo de invitaci\xF3n. Int\xE9ntalo de nuevo")}function Ft(e){return{id:e.objectId,name:e.name||"",category:e.category||"",quantity:de(e.quantity),criticalLimit:de(e.criticalLimit),unit:e.unit||pe,location:e.location||"",notes:e.notes||"",expiresAt:F.readDate(e.expiresAt),photo:e.photo?.url?{name:e.photo.name,url:e.photo.url}:null,imageUrl:ze(e.imageUrl),price:e.price===null||e.price===void 0?null:de(e.price,null),mercadonaId:ze(e.mercadonaId),updatedBy:e.updatedBy||""}}function et(e){return{name:e.name,category:e.category,quantity:e.quantity,criticalLimit:e.criticalLimit,unit:e.unit,location:e.location,notes:e.notes,updatedBy:e.updatedBy,expiresAt:e.expiresAt?F.date(e.expiresAt):null,photo:e.photo?F.fileRef(e.photo.name,e.photo.url):null,imageUrl:e.imageUrl||null,mercadonaId:e.mercadonaId||null,price:e.price??null}}var yt=Vt(),Ra=60,ue={async all(){return(await I.query("Product",{houseId:S.requireHouseId()})).map(Ft).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e,t){O(e.name.trim(),"El nombre es obligatorio"),O(e.name.trim().length<=Ra,`El nombre no puede superar ${Ra} caracteres`),O(e.quantity>=0&&e.criticalLimit>=0,"Las cantidades no pueden ser negativas");let a=e.photo;t===null?a=null:t instanceof Blob&&(a=await Qa(t));let n={...e,name:e.name.trim(),category:e.category.trim(),unit:e.unit.trim()||pe,location:e.location.trim(),notes:e.notes.trim(),photo:a,updatedBy:S.email()};return yt(async()=>{let s=n;if(n.id)await I.put(`classes/Product/${n.id}`,et(n));else{let o=await I.post("classes/Product",{...et(n),houseId:S.requireHouseId(),owner:F.userPointer(S.requireUserId()),ACL:F.publicAcl()});s={...n,id:o.objectId}}return await W.syncProduct(s),s})},async updateQuantity(e,t){let a={...e,updatedBy:S.email()};await yt(async()=>{await I.put(`classes/Product/${a.id}`,et(a)),await W.syncProduct(a)}),a.quantity<t&&Oa(a,t-a.quantity)},async consume(e,t){if(t<=0)return e;let a={...z.withQuantity(e,e.quantity-t),updatedBy:S.email()};return await yt(async()=>{await I.put(`classes/Product/${a.id}`,et(a)),await W.syncProduct(a)}),Oa(a,e.quantity-a.quantity),a},async remove(e){await yt(async()=>{await I.delete(`classes/Product/${e.id}`),await W.removeForProduct(e.id)})}};function Oa(e,t){!e.id||t<=0||I.post("classes/StockMovement",{houseId:S.requireHouseId(),productId:e.id,amount:te(t),ACL:F.publicAcl()}).catch(()=>{})}function Rn(e){return{id:e.objectId,productId:e.productId||"",name:e.name||"",quantity:de(e.quantity,1),unit:e.unit||pe,category:e.category||"",photoUrl:ze(e.photoUrl),checked:!!e.checked,dismissed:!!e.dismissed,manual:!!e.manual,addedBy:ze(e.addedBy)||"",price:e.price===null||e.price===void 0?null:de(e.price,null)}}function _e(e){return{productId:e.productId,name:e.name,quantity:e.quantity,unit:e.unit,category:e.category,photoUrl:e.photoUrl||null,checked:e.checked,dismissed:e.dismissed,manual:e.manual,addedBy:e.addedBy,price:e.price??null}}var Fe=e=>e.price===null||e.price===void 0?null:e.price*e.quantity;function Ga(e){return{productId:e.id,name:e.name,quantity:z.amountToBuy(e),unit:e.unit,category:e.category,photoUrl:z.image(e),checked:!1,dismissed:!1,manual:!1,addedBy:"",price:e.price}}function Ja(e,t){return{...e,name:t.name,quantity:e.manual?e.quantity:z.amountToBuy(t),unit:t.unit,category:t.category,photoUrl:z.image(t),price:t.price}}var On=(e,t)=>JSON.stringify(_e(e))===JSON.stringify(_e(t)),be=Vt(),Re=async e=>(await I.query("ShoppingItem",e)).map(Rn).sort((t,a)=>t.name.localeCompare(a.name,"es"));async function wt(e,t){await I.post("classes/ShoppingItem",{..._e(e),houseId:t,ACL:F.publicAcl()})}async function Fa(e,t,a){if(!t)z.isLow(e)&&await wt(Ga(e),a);else if(!z.isLow(e)&&(!t.manual||t.dismissed))await I.delete(`classes/ShoppingItem/${t.id}`);else if(!t.checked&&!t.dismissed){let n=Ja(t,e);On(n,t)||await I.put(`classes/ShoppingItem/${t.id}`,_e(n))}}function Rt(e){O(e>0&&Number.isFinite(e),"La cantidad tiene que ser mayor que 0")}var W={async refresh(){let e=S.requireHouseId();return await be(async()=>{let t=(await I.query("Product",{houseId:e})).map(Ft),a=new Set(t.map(s=>s.id)),n=new Map;(await Re({houseId:e})).filter(s=>s.productId).forEach(s=>{n.has(s.productId)||n.set(s.productId,[]),n.get(s.productId).push(s)});for(let[s,o]of n){let c=a.has(s)?o.slice(1):o;for(let l of c)await I.delete(`classes/ShoppingItem/${l.id}`)}for(let s of t)await Fa(s,n.get(s.id)?.[0],e)}),(await Re({houseId:e})).filter(t=>!t.dismissed)},syncProduct(e){let t=S.requireHouseId();return be(async()=>{let a=await Re({houseId:t,productId:e.id});for(let n of a.slice(1))await I.delete(`classes/ShoppingItem/${n.id}`);await Fa(e,a[0],t)})},removeForProduct(e){let t=S.requireHouseId();return be(async()=>{for(let a of await Re({houseId:t,productId:e}))await I.delete(`classes/ShoppingItem/${a.id}`)})},addProduct(e,t){Rt(t);let a=S.requireHouseId();return be(async()=>{let[n]=await Re({houseId:a,productId:e.id}),s={...Ja(n||Ga(e),e),quantity:te(t),manual:!0,dismissed:!1,addedBy:S.email()};n?await I.put(`classes/ShoppingItem/${n.id}`,_e(s)):await wt(s,a)})},addFreeItem(e,t,a){e=e.trim(),O(e,"Escribe qu\xE9 quieres comprar"),Rt(t);let n={productId:"",name:e,quantity:te(t),unit:a.trim()||pe,category:"",photoUrl:null,checked:!1,dismissed:!1,manual:!0,addedBy:S.email(),price:null},s=S.requireHouseId();return be(()=>wt(n,s))},changeQuantity(e,t){return Rt(t),be(()=>I.put(`classes/ShoppingItem/${e.id}`,_e({...e,quantity:te(t),manual:!0})))},setChecked(e,t){return be(()=>I.put(`classes/ShoppingItem/${e.id}`,_e({...e,checked:t})))},dismiss(e){return be(()=>e.manual?I.delete(`classes/ShoppingItem/${e.id}`):I.put(`classes/ShoppingItem/${e.id}`,_e({...e,dismissed:!0,checked:!1})))},restore(e){let t=S.requireHouseId();return be(()=>e.manual?wt({...e,dismissed:!1},t):I.put(`classes/ShoppingItem/${e.id}`,_e({...e,dismissed:!1})))},completePurchase(){let e=S.requireHouseId();return be(async()=>{let t=(await Re({houseId:e})).filter(n=>n.checked&&!n.dismissed),a=new Map((await I.query("Product",{houseId:e})).map(Ft).map(n=>[n.id,n]));for(let n of t){let s=a.get(n.productId);if(s){let o={...z.withQuantity(s,s.quantity+n.quantity),updatedBy:S.email()};await I.put(`classes/Product/${s.id}`,et(o))}await I.delete(`classes/ShoppingItem/${n.id}`)}return t.length})}};function Fn(e){return{id:e.objectId,name:e.name||"",servings:de(e.servings,2),ingredients:(e.ingredients||[]).filter(Boolean).map(t=>({productId:t.productId||"",name:t.name||"",quantity:de(t.quantity,1),unit:t.unit||pe})),steps:e.steps||"",emoji:e.emoji||mt,photo:typeof e.photoUrl=="string"&&e.photoUrl.startsWith("http")?{name:e.photoName||"",url:e.photoUrl}:null,createdBy:e.createdBy||""}}function Va(e){return{name:e.name,servings:e.servings,steps:e.steps,emoji:e.emoji,photoName:e.photo?.name||"",photoUrl:e.photo?.url||"",createdBy:e.createdBy,ingredients:e.ingredients.map(({productId:t,name:a,quantity:n,unit:s})=>({productId:t,name:a,quantity:n,unit:s}))}}function Ya(e,t){return t>e.criticalLimit?0:te(e.criticalLimit-t+1)}var me={async all(){return(await I.query("Recipe",{houseId:S.requireHouseId()})).map(Fn).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e){O(e.name.trim(),"Ponle un nombre a la receta"),O(e.ingredients.length,"A\xF1ade al menos un ingrediente"),O(e.servings>=1&&e.servings<=20,"Las raciones deben estar entre 1 y 20");let t={...e,name:e.name.trim(),steps:e.steps.trim(),createdBy:e.createdBy||S.email()};if(!t.id){let a=await I.post("classes/Recipe",{...Va(t),houseId:S.requireHouseId(),ACL:F.publicAcl()});return{...t,id:a.objectId}}return await I.put(`classes/Recipe/${t.id}`,Va(t)),t},remove:e=>I.delete(`classes/Recipe/${e.id}`),check(e,t){let a=new Map(t.map(c=>[c.id,c])),n=e.ingredients.map(c=>{let l=a.get(c.productId);if(!l)return{ingredient:c,product:null,inStock:0,after:-c.quantity,status:"NOT_IN_PANTRY",toBuy:c.quantity};let u=te(l.quantity-c.quantity),i=u<0?"NOT_ENOUGH":u<=l.criticalLimit?"BELOW_MINIMUM":"OK";return{ingredient:c,product:l,inStock:l.quantity,after:u,status:i,toBuy:Ya(l,u)}}),s=n.filter(c=>c.status==="NOT_ENOUGH"||c.status==="NOT_IN_PANTRY"),o=n.filter(c=>c.toBuy>0);return{recipe:e,items:n,canCook:s.length===0,missing:s,toBuy:o,estimatedCost:o.reduce((c,l)=>c+(l.product?.price!=null?l.product.price*l.toBuy:0),0)}},async addMissingToShopping(e){for(let t of e.toBuy)t.product?await W.addProduct(t.product,t.toBuy):await W.addFreeItem(t.ingredient.name,t.toBuy,t.ingredient.unit);return e.toBuy.length},async cook(e){for(let t of e.items)t.product&&await ue.consume(t.product,t.ingredient.quantity)}};function Vn(e){let t=F.readDate(e.date);return!t||!["BREAKFAST","LUNCH","DINNER"].includes(e.slot)?null:{id:e.objectId,date:t,slot:e.slot,recipeId:e.recipeId||"",title:e.title||""}}var ja=28;async function Ot(e,t,a){return(await I.query("MealPlanEntry",{houseId:e,date:{$gte:F.date(t),$lte:F.date(a)}})).map(Vn).filter(Boolean)}var ce={week:e=>Ot(S.requireHouseId(),e,X(e,6)),async set(e,t,a,n=""){let s=a?.name||n.trim();O(s,"Elige una receta o escribe qu\xE9 vas a comer");let o=S.requireHouseId(),c=(await Ot(o,e,e)).find(u=>u.slot===t),l={date:F.date(e),slot:t,recipeId:a?.id||"",title:s};c?await I.put(`classes/MealPlanEntry/${c.id}`,l):await I.post("classes/MealPlanEntry",{...l,houseId:o,ACL:F.publicAcl()})},clear:e=>I.delete(`classes/MealPlanEntry/${e.id}`),async copyPreviousWeek(e){let t=S.requireHouseId(),a=new Set((await ce.week(e)).map(o=>`${o.date}|${o.slot}`)),s=(await Ot(t,X(e,-7),X(e,-1))).map(o=>({...o,date:X(o.date,7)})).filter(o=>!a.has(`${o.date}|${o.slot}`));for(let o of s)await I.post("classes/MealPlanEntry",{date:F.date(o.date),slot:o.slot,recipeId:o.recipeId,title:o.title,houseId:t,ACL:F.publicAcl()});return s.length},async analyze(e){let t=S.requireHouseId(),[a,n,s]=await Promise.all([ue.all(),me.all(),ce.week(e)]),o=new Map(n.map(m=>[m.id,m])),c=s.filter(m=>m.date>=ae()),l=new Map,u=new Map;c.map(m=>o.get(m.recipeId)).filter(Boolean).forEach(m=>{m.ingredients.forEach(g=>{if(g.productId&&a.some(w=>w.id===g.productId))l.set(g.productId,(l.get(g.productId)||0)+g.quantity);else{let w=`${g.name.trim().toLowerCase()}|${g.unit}`;u.set(w,(u.get(w)||0)+g.quantity)}})});let i=new Map;try{let m=new Date(Date.now()-ja*864e5);(await I.query("StockMovement",{houseId:t,createdAt:{$gte:F.instant(m)}})).forEach(w=>i.set(w.productId,(i.get(w.productId)||0)+de(w.amount)))}catch{}let $=ja/7,r=[];a.forEach(m=>{let g=l.get(m.id)||0,w=te((i.get(m.id)||0)/$),b=Math.max(g,w),C=Ya(m,m.quantity-b);b===0&&C===0||r.push({product:m,name:m.name,unit:m.unit,planned:g,habitual:w,inStock:m.quantity,toBuy:C,reason:g>0&&g>=w?"RECIPES":w>0?"HABITUAL":"BELOW_MINIMUM"})}),u.forEach((m,g)=>{let[w,b]=g.split("|");r.push({product:null,name:w.charAt(0).toUpperCase()+w.slice(1),unit:b,planned:m,habitual:0,inStock:0,toBuy:te(m),reason:"RECIPES"})}),r.forEach(m=>{m.isUrgent=m.planned>m.inStock,m.estimatedCost=m.product?.price!=null?m.product.price*m.toBuy:null}),r.sort((m,g)=>g.isUrgent-m.isUrgent||m.name.localeCompare(g.name,"es"));let f=r.filter(m=>m.toBuy>0);return{weekStart:e,needs:r,toBuy:f,plannedMeals:c.length,estimatedCost:f.reduce((m,g)=>m+(g.estimatedCost||0),0),withoutPrice:f.filter(m=>m.estimatedCost===null).length}},async addToShopping(e){for(let t of e.toBuy)t.product?await W.addProduct(t.product,t.toBuy):await W.addFreeItem(t.name,t.toBuy,t.unit);return e.toBuy.length},weekStartOf:Je},Wa="7UZJKL1DJ0",jn="9d8f2e39e90df472b4f2e559a116fe17";function Wn(e,t){let a=de(t?.unit_size,NaN),n=t?.size_format||"",s="";return Number.isFinite(a)&&a>0&&n&&(n==="kg"&&a<1?s=`${Math.round(a*1e3)} g`:n==="l"&&a<1?s=`${Math.round(a*1e3)} ml`:s=`${String(a).replace(".",",")} ${n==="kg"?"kg":n.toUpperCase()}`),[e&&e!=="null"?e:"",s].filter(Boolean).join(" ")}async function Qn(e){let t=await fetch(`https://${Wa}-dsn.algolia.net/1/indexes/products_prod_mad1_es/query`,{method:"POST",headers:{"X-Algolia-Application-Id":Wa,"X-Algolia-API-Key":jn,"Content-Type":"application/json"},body:JSON.stringify({params:`query=${encodeURIComponent(e)}&hitsPerPage=30`})});if(!t.ok)throw new Error("Mercadona no responde");return((await t.json()).hits||[]).map(n=>{let s=n.id||n.objectID;if(!s||!n.display_name)return null;let o=parseFloat(n.price_instructions?.unit_price);return{source:"Mercadona",externalId:String(s),name:n.display_name,brand:"",category:n.categories?.[0]?.name||"",price:Number.isFinite(o)?o:null,imageUrl:typeof n.thumbnail=="string"&&n.thumbnail.startsWith("http")?n.thumbnail:null,packageInfo:Wn(n.packaging,n.price_instructions)}}).filter(Boolean)}async function Gn(e){let a=`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(e)}&search_simple=1&action=process&json=1&page_size=20&lc=es&fields=code,product_name,product_name_es,brands,categories,quantity,image_front_small_url,image_url`;return((await(await fetch(a)).json()).products||[]).map(s=>{let o=(s.product_name_es||s.product_name||"").trim();if(!o)return null;let c=s.image_front_small_url||s.image_url||"";return{source:"Open Food Facts",externalId:s.code||"",name:o,brand:(s.brands||"").split(",")[0].trim(),category:(s.categories||"").split(",")[0].trim(),price:null,imageUrl:c.startsWith("http")?c:null,packageInfo:(s.quantity||"").trim()}}).filter(Boolean)}var kt={async search(e){if(e=e.trim(),e.length<2)return[];try{let t=await Qn(e);if(t.length)return t}catch{}try{return await Gn(e)}catch{throw new Z(100,"No se ha podido buscar en el cat\xE1logo")}},toProduct:e=>({id:null,name:e.name,category:e.category,quantity:1,criticalLimit:1,unit:pe,location:"",notes:[e.brand,e.packageInfo].filter(Boolean).join(" \xB7 "),expiresAt:null,photo:null,imageUrl:e.imageUrl,price:e.price,mercadonaId:e.source==="Mercadona"?e.externalId:null,updatedBy:""})},Ka=()=>({id:null,name:"",category:"",quantity:1,criticalLimit:1,unit:pe,location:"",notes:"",expiresAt:null,photo:null,imageUrl:null,price:null,mercadonaId:null,updatedBy:""});var Xa=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function Ee({label:e,icon:t,error:a,inputRef:n,...s}){return d`<label class=${`field ${a?"has-error":""}`}>
    <span>${e}</span>
    <div class="field-row">
      ${t&&d`<${y} name=${t} size=${20} class="field-icon" />`}
      <input ref=${n} ...${s} />
    </div>
    ${a&&d`<small class="error-text">${a}</small>`}
  </label>`}function jt(){let[e,t]=k({}),a=Y({});return{errors:e,setErrors:t,refs:a,fail:(s,o)=>(t({[s]:o}),qa(a.current[s]?.closest(".field")),x("error"),!1)}}function Jn({size:e=96}){return d`<svg class="logo" width=${e} height=${e} viewBox="0 0 108 108" aria-hidden="true">
    <defs><linearGradient id="lg" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--primary-light)" /><stop offset="1" stop-color="var(--primary)" />
    </linearGradient></defs>
    <circle cx="54" cy="54" r="54" fill="url(#lg)" />
    <g transform="translate(27.6 28.7) scale(2.2)">
      <path d="M12,3L2,12h3v8h14v-8h3L12,3z" fill="#fff" />
      <path d="M8.5,12.5h7v5.5h-7z" fill="var(--primary)" />
      <path d="M8.5,14.2h7v0.8h-7z" fill="#fff" />
    </g>
  </svg>`}function Za({onLoggedIn:e,onRegister:t}){let[a,n]=k(""),[s,o]=k(""),{errors:c,setErrors:l,refs:u,fail:i}=jt(),$=async f=>{if(f.preventDefault(),l({}),!Xa.test(a.trim()))return i("email","Introduce un correo v\xE1lido");if(s.length<ye)return i("password",`M\xEDnimo ${ye} caracteres`);await M(async()=>{await we.login(a,s),x("success"),e()})},r=async()=>{let f=await G({title:"Restablecer contrase\xF1a",message:"Te mandaremos un correo con un enlace para elegir una contrase\xF1a nueva.",label:"Correo electr\xF3nico",type:"email",value:a,confirm:"Enviar"});f!==null&&await M(async()=>{await we.resetPassword(f),P(`Correo enviado a ${f.trim()}. Revisa tambi\xE9n el spam.`)})};return d`<main class="auth-screen">
    <div class="float stagger" style="--i:0"><${Jn} /></div>
    <h1 class="brand stagger" style="--i:1">Stock Casa</h1>
    <p class="welcome stagger" style="--i:2">Tu despensa, siempre al día</p>
    <p class="muted center stagger" style="--i:3">Controla lo que tienes en casa y compártelo con quien vive contigo</p>

    <form class="card form-card stagger" style="--i:4" onSubmit=${$} novalidate>
      <${Ee} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a}
        error=${c.email} inputRef=${f=>u.current.email=f} onInput=${f=>n(f.target.value)} />
      <${Ee} label="Contraseña" icon="lock" type="password" autocomplete="current-password" value=${s}
        error=${c.password} inputRef=${f=>u.current.password=f} onInput=${f=>o(f.target.value)} />
      <button class="btn primary wide" type="submit"><${y} name="login" size=${20} /> Iniciar sesión</button>
      <button class="btn text center-self" type="button" onClick=${r}>¿Has olvidado la contraseña?</button>
    </form>

    <p class="center stagger" style="--i:5">
      <span class="muted">¿Aún no tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Crear una</button>
    </p>
  </main>`}function en({onRegistered:e,onBack:t}){let[a,n]=k({nickname:"",email:"",password:"",repeat:""}),{errors:s,setErrors:o,refs:c,fail:l}=jt(),u=r=>f=>n({...a,[r]:f.target.value}),i=async r=>{if(r.preventDefault(),o({}),!a.nickname.trim())return l("nickname","Escribe un nombre o apodo");if(!Xa.test(a.email.trim()))return l("email","Introduce un correo v\xE1lido");if(a.password.length<ye)return l("password",`M\xEDnimo ${ye} caracteres`);if(a.password!==a.repeat)return l("repeat","Las contrase\xF1as no coinciden");await M(async()=>{await we.register(a.nickname,a.email,a.password,a.repeat),x("success"),P(`\xA1Bienvenido/a, ${a.nickname.trim()}! \u{1F389}`),e()})},$=r=>f=>c.current[r]=f;return d`<main class="auth-screen">
    <button class="icon-btn light self-start" onClick=${t} aria-label="Volver"><${y} name="arrow_back" /></button>
    <div class="big-emoji pop-in">👋</div>
    <h1 class="screen-title center stagger" style="--i:1">Crea tu cuenta</h1>
    <p class="muted center stagger" style="--i:2">En un minuto estás organizando tu despensa</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${i} novalidate>
      <${Ee} label="¿Cómo te llamamos?" icon="people" maxlength="24" autocomplete="nickname" value=${a.nickname}
        error=${s.nickname} inputRef=${$("nickname")} onInput=${u("nickname")} />
      <${Ee} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a.email}
        error=${s.email} inputRef=${$("email")} onInput=${u("email")} />
      <${Ee} label="Contraseña (mínimo 6 caracteres)" icon="lock" type="password" autocomplete="new-password" value=${a.password}
        error=${s.password} inputRef=${$("password")} onInput=${u("password")} />
      <${Ee} label="Repite la contraseña" icon="lock" type="password" autocomplete="new-password" value=${a.repeat}
        error=${s.repeat} inputRef=${$("repeat")} onInput=${u("repeat")} />
      <button class="btn primary wide" type="submit"><${y} name="check" size=${20} /> Crear cuenta</button>
    </form>

    <p class="center stagger" style="--i:4">
      <span class="muted">¿Ya tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Iniciar sesión</button>
    </p>
  </main>`}function tn({onReady:e,onLogout:t}){let[a,n]=k("Mi casa"),[s,o]=k(""),[c,l]=k("\xA1Hola!"),{errors:u,setErrors:i,refs:$,fail:r}=jt();R(()=>{le.me().then(w=>l(`\xA1Hola, ${re(w)}!`)).catch(()=>{})},[]);let f=w=>{x("success"),P(w),Ue(),e()},m=async w=>{if(w.preventDefault(),i({}),s.trim().length!==6)return r("code",`El c\xF3digo tiene ${6} caracteres`);await M(async()=>{let b=await U.join(s);f(`Ahora est\xE1s en \xAB${b.name}\xBB`)},{onError:b=>b instanceof Z&&b.isSessionExpired?t():r("code",b.message)})},g=async w=>{if(w.preventDefault(),i({}),!a.trim())return r("name","Este campo es obligatorio");await M(async()=>{let b=await U.create(a);f(`Casa \xAB${b.name}\xBB creada`)})};return d`<main class="auth-screen">
    <div class="big-emoji pop-in">🏠</div>
    <h1 class="screen-title center stagger" style="--i:1">${c}</h1>
    <p class="muted center stagger" style="--i:2">Para empezar, únete a la casa de alguien o crea la tuya</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${m} novalidate>
      <h2>Unirme a una casa</h2>
      <p class="muted">Pide el código de 6 caracteres a alguien de la casa (lo tiene en la pestaña Casa).</p>
      <${Ee} label="Código de 6 caracteres" icon="people" class="code-input" maxlength="6" autocapitalize="characters"
        autocomplete="off" value=${s} error=${u.code} inputRef=${w=>$.current.code=w}
        onInput=${w=>o(w.target.value.toUpperCase())} />
      <button class="btn primary wide" type="submit"><${y} name="login" size=${20} /> Unirme</button>
    </form>

    <p class="muted center stagger" style="--i:4">— o —</p>

    <form class="card form-card stagger" style="--i:5" onSubmit=${g} novalidate>
      <h2>Crear una casa nueva</h2>
      <p class="muted">Serás el primer miembro y podrás invitar a quien quieras con su código.</p>
      <${Ee} label="Nombre de la casa" icon="home" maxlength="40" value=${a} error=${u.name}
        inputRef=${w=>$.current.name=w} onInput=${w=>n(w.target.value)} />
      <button class="btn tonal wide" type="submit"><${y} name="add" size=${20} /> Crear casa</button>
    </form>

    <button class="btn text center-self stagger" style="--i:6" onClick=${t}><${y} name="logout" size=${20} /> Cerrar sesión</button>
  </main>`}var an="stockcasa.collapsedGroups",It="Sin categor\xEDa";function Yn(){let e=new Date().getHours();return e<6||e>=21?"Buenas noches":e<13?"Buenos d\xEDas":"Buenas tardes"}function Kn(){try{return new Set(JSON.parse(localStorage.getItem(an))||[])}catch{return new Set}}function Xn({value:e}){let[t,a]=k(e),n=Y(e);return R(()=>{let s=performance.now(),o=n.current,c,l=u=>{let i=Math.min(1,(u-s)/450),$=1-(1-i)**3;a(Math.round(o+(e-o)*$)),i<1?c=requestAnimationFrame(l):n.current=e};return c=requestAnimationFrame(l),()=>cancelAnimationFrame(c)},[e]),t}function nn({active:e,goTo:t,setBadge:a}){let[n,s]=k(null),[o,c]=k(null),[l,u]=k(null),[i,$]=k(""),[r,f]=k("all"),[m,g]=k(Kn),w=Y(0),b=async(h=!1)=>{await M(async()=>{let p=await U.current();c(p);let[v,_]=await Promise.all([ue.all(),le.me().catch(()=>null)]);w.current===0&&s(v),u(_),W.refresh().then(L=>a(L.filter(J=>!J.checked).length)).catch(()=>{})},{loading:!1,onError:h?()=>{}:ee})};R(()=>{e&&b()},[e]),$e(h=>h==="changed"&&e&&b(!0)),R(()=>{if(!e||!o||o.memberIds.length<2)return;let h=setInterval(()=>document.visibilityState==="visible"&&b(!0),2e4);return()=>clearInterval(h)},[e,o?.id,o?.memberIds.length]);let C=ut(()=>({total:n?.length||0,low:n?.filter(z.isLow).length||0,expiring:n?.filter(z.needsExpiryAttention).length||0}),[n]),E=ut(()=>{let h=i.trim().toLowerCase(),p=(n||[]).filter(_=>!h||[_.name,_.category,_.location].some(J=>J.toLowerCase().includes(h))?r==="low"?z.isLow(_):r==="expiring"?z.needsExpiryAttention(_):!0:!1),v=new Map;return p.forEach(_=>{let L=_.category.trim()||It;v.has(L)||v.set(L,[]),v.get(L).push(_)}),[...v.entries()].sort(([_],[L])=>(_===It)-(L===It)||_.localeCompare(L,"es"))},[n,i,r]),T=h=>{let p=new Set(m);p.has(h)?p.delete(h):p.add(h),g(p),localStorage.setItem(an,JSON.stringify([...p]))},A=async(h,p,v)=>{let _=n.find(J=>J.id===h.id),L=z.withQuantity(_,_.quantity+p);if(L.quantity!==_.quantity){s(n.map(J=>J.id===h.id?L:J)),x(p>0?"up":"down"),Le(v),w.current++;try{await ue.updateQuantity(L,_.quantity)}catch(J){ee(J)}finally{w.current--}w.current===0&&b(!0)}},N=async h=>{let p=await G({title:`A\xF1adir \xAB${h.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:B(z.amountToBuy(h)),suffix:h.unit,confirm:"A\xF1adir"});p!==null&&await M(async()=>{await W.addProduct(h,oe(p)??0),x("pop"),P(`\xAB${h.name}\xBB a\xF1adido a la compra`),V.emit("changed")})},H=async h=>{await se(es,{initial:h,categories:[...new Set((n||[]).map(v=>v.category).filter(Boolean))]})&&b(!0)},K=async()=>{let h=await ge("A\xF1adir producto",[{label:"\u{1F50E}  Buscar en Mercadona"},{label:"\u270F\uFE0F  Escribirlo a mano"}]);if(h!==null)if(h===0){let p=await se(sn,{});if(!p)return;let v=(n||[]).find(_=>_.mercadonaId&&_.mercadonaId===p.externalId);H(v||kt.toProduct(p))}else H(Ka())},q=n&&n.length===0;return d`<section class="tab">
    <header class="tab-header">
      <div class="grow">
        <p class="muted small">${Yn()}${l?`, ${re(l)}`:""} 👋</p>
        <h1 class="brand">Despensa</h1>
      </div>
      ${o&&d`<button class="house-pill" onClick=${()=>t("house")}><${y} name="home" size=${16} /> ${o.name}</button>`}
    </header>

    <div class="stats">
      ${[["all","Productos",C.total,""],["low","Por reponer",C.low,"danger"],["expiring","Caducan pronto",C.expiring,"warning"]].map(([h,p,v,_])=>d`<button class=${`stat ${_} ${r===h?"selected":""}`} onClick=${()=>f(r===h?"all":h)}>
          <strong><${Xn} value=${v} /></strong><span>${p}</span>
        </button>`)}
    </div>

    <label class="search">
      <${y} name="search" size=${20} />
      <input type="search" placeholder="Buscar por nombre, categoría o sitio" value=${i} onInput=${h=>$(h.target.value)} />
    </label>

    <div class="chips">
      ${[["all","Todos"],["low","Por reponer"],["expiring","Caducan pronto"]].map(([h,p])=>d`
        <button class=${`chip ${r===h?"checked":""}`} onClick=${()=>f(h)}>${p}</button>`)}
    </div>

    ${!n&&d`<div class="skeleton-list">${[0,1,2].map(()=>d`<div class="skeleton"></div>`)}</div>`}

    ${q&&d`<div class="empty">
      <div class="big-emoji">🧺</div>
      <h2>Tu despensa está vacía</h2>
      <p class="muted">Añade lo que tienes en casa con el botón +. Puedes buscarlo en Mercadona para no escribir.</p>
    </div>`}

    ${n&&!q&&E.length===0&&d`<div class="empty"><div class="big-emoji">🔎</div><h2>Nada por aquí</h2><p class="muted">Prueba con otra búsqueda o filtro.</p></div>`}

    <div class="groups">
      ${E.map(([h,p],v)=>d`<div class="group" key=${h}>
        <button class="group-header" onClick=${()=>T(h)}>
          <span class="group-emoji">${ie(h===It?"":h)}</span>
          <span class="grow">${h}</span>
          <span class="count">${p.length}</span>
          ${p.some(z.isLow)&&d`<span class="dot danger"></span>`}
          <span class=${`chevron ${m.has(h)?"":"open"}`}><${y} name="chevron_right" size=${20} /></span>
        </button>
        ${!m.has(h)&&p.map((_,L)=>d`<${Zn} key=${_.id} p=${_} index=${v*3+L}
          onOpen=${()=>H(_)} onLongPress=${()=>N(_)} onChange=${A} />`)}
      </div>`)}
    </div>

    <button class="fab" onClick=${K} aria-label="Añadir producto"><${y} name="add" size=${28} /></button>
  </section>`}function Zn({p:e,index:t,onOpen:a,onLongPress:n,onChange:s}){let o=Y(),c=Y(),l=Y(!1),u=z.isLow(e),i=z.expiryStatus(e),$=z.daysUntilExpiry(e),r=z.level(e),f=u?"danger":e.quantity<=e.criticalLimit*1.5?"warning":"primary",m=()=>{l.current=!1,c.current=setTimeout(()=>{l.current=!0,x("pop"),n()},550)},g=()=>clearTimeout(c.current),w=()=>{l.current||a()};return d`<article class="card product-card enter" style=${`--i:${Math.min(t,12)}`}
    onPointerDown=${m} onPointerUp=${g} onPointerLeave=${g} onPointerCancel=${g}
    onContextMenu=${b=>b.preventDefault()} onClick=${w}>
    <${Ie} url=${z.image(e)} emoji=${ie(e.category)} />
    <div class="grow min0">
      <h3 class="ellipsis">${e.name}</h3>
      <p class="muted small ellipsis">${[e.location,e.price!=null?`${ne(e.price)}/${e.unit}`:""].filter(Boolean).join(" \xB7 ")||`M\xEDnimo ${B(e.criticalLimit)} ${e.unit}`}</p>
      <div class="tags">
        ${u&&d`<span class="tag danger">Por reponer</span>`}
        ${i==="EXPIRED"&&d`<span class="tag danger">Caducado</span>`}
        ${i==="SOON"&&d`<span class="tag warning">${$===0?"Caduca hoy":`Caduca en ${$} d`}</span>`}
      </div>
      <div class="level"><span class=${f} style=${`width:${Math.round(r*100)}%`}></span></div>
    </div>
    <div class="stepper" onClick=${b=>b.stopPropagation()} onPointerDown=${b=>b.stopPropagation()}>
      <button class="round" aria-label="Quitar uno" onClick=${()=>s(e,-1,o.current)}><${y} name="remove" size=${18} /></button>
      <div class="qty"><strong ref=${o} class=${u?"danger-text":""}>${B(e.quantity)}</strong><small>${e.unit}</small></div>
      <button class="round primary" aria-label="Añadir uno" onClick=${()=>s(e,1,o.current)}><${y} name="add" size=${18} /></button>
    </div>
  </article>`}function es({initial:e,categories:t,close:a}){let[n,s]=k(e),[o,c]=k(void 0),[l,u]=k(null),[i,$]=k(!!e.expiresAt),[r,f]=k(B(e.quantity)),[m,g]=k(B(e.criticalLimit)),[w,b]=k(e.price!=null?String(e.price).replace(".",","):""),C=Y(),E=!e.id,T=p=>v=>s({...n,[p]:v.target.value}),A=o===null?n.imageUrl||null:l||z.image(n),N=async p=>{let v=p.target.files?.[0];if(p.target.value="",!v)return;let _=await _t(v);c(_),u(URL.createObjectURL(_))},H=async()=>{let p=await se(sn,{initialQuery:n.name});if(!p)return;let v=kt.toProduct(p);s({...n,name:v.name,category:v.category||n.category,imageUrl:v.imageUrl,price:v.price??n.price,mercadonaId:v.mercadonaId,notes:n.notes||v.notes}),v.price!=null&&b(String(v.price).replace(".",",")),x("pop"),P(`Datos importados de ${p.source}`)},K=async p=>{p.preventDefault();let v=oe(r),_=oe(m),L=w.trim()?oe(w):null;if(v===null||_===null)return P("Revisa las cantidades");if(w.trim()&&L===null)return P("El precio no es v\xE1lido");if(i&&!n.expiresAt)return P("Elige la fecha de caducidad");let J={...n,quantity:v,criticalLimit:_,price:L,expiresAt:i?n.expiresAt:null},tt=await M(()=>ue.save(J,o));tt&&(x("success"),P(E?"Producto a\xF1adido":"Cambios guardados"),V.emit("changed"),a(tt))},q=async()=>{await fe({title:"Eliminar producto",message:`\xBFSeguro que quieres eliminar \xAB${n.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await M(async()=>{await ue.remove(n),x("swipe"),P("Producto eliminado"),V.emit("changed"),a(!0)})},h=async()=>{let p=await G({title:`A\xF1adir \xAB${n.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:B(z.amountToBuy(n)),suffix:n.unit,confirm:"A\xF1adir"});p!==null&&await M(async()=>{await W.addProduct(n,oe(p)??0),x("pop"),P(`\xAB${n.name}\xBB a\xF1adido a la compra`),V.emit("changed")})};return d`<form class="sheet-body" onSubmit=${K}>
    <div class="sheet-title">
      <h2>${E?"Nuevo producto":"Editar producto"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(!1)} aria-label="Cerrar"><${y} name="close" /></button>
    </div>

    <div class="photo-box">
      <${Ie} url=${A} emoji=${ie(n.category)} size=${96} />
      <div class="photo-actions">
        <button type="button" class="btn tonal small" onClick=${()=>C.current.click()}><${y} name="camera" size=${18} /> Foto</button>
        ${(o instanceof Blob||o!==null&&n.photo)&&d`<button type="button" class="btn text small" onClick=${()=>{c(null),u(null)}}>Quitar foto</button>`}
        <button type="button" class="btn tonal small" onClick=${H}><${y} name="store" size=${18} /> Mercadona</button>
      </div>
      <input ref=${C} type="file" accept="image/*" hidden onChange=${N} />
    </div>

    <label class="field"><span>Nombre</span><input required maxlength="60" value=${n.name} onInput=${T("name")} /></label>
    <label class="field"><span>Categoría</span>
      <input list="categories" value=${n.category} onInput=${T("category")} placeholder="Lácteos, Limpieza…" />
      <datalist id="categories">${t.map(p=>d`<option value=${p} />`)}</datalist>
    </label>
    <div class="row-2">
      <label class="field"><span>Cantidad</span><input inputmode="decimal" value=${r} onInput=${p=>f(p.target.value)} /></label>
      <label class="field"><span>Mínimo (avisar)</span><input inputmode="decimal" value=${m} onInput=${p=>g(p.target.value)} /></label>
    </div>
    <div class="row-2">
      <label class="field"><span>Unidad</span><input value=${n.unit} onInput=${T("unit")} placeholder="uds, kg, L…" /></label>
      <label class="field"><span>Precio por unidad (€)</span><input inputmode="decimal" value=${w} onInput=${p=>b(p.target.value)} placeholder="Opcional" /></label>
    </div>
    <label class="field"><span>Dónde está</span><input value=${n.location} onInput=${T("location")} placeholder="Nevera, despensa…" /></label>

    <label class="switch-row">
      <span>Tiene fecha de caducidad</span>
      <input type="checkbox" class="switch" checked=${i} onChange=${p=>$(p.target.checked)} />
    </label>
    ${i&&d`<label class="field"><span>Caduca el</span><input type="date" value=${n.expiresAt||""} onInput=${T("expiresAt")} /></label>`}

    <label class="field"><span>Notas</span><textarea rows="2" value=${n.notes} onInput=${T("notes")}></textarea></label>
    ${n.updatedBy&&d`<p class="muted small">Última modificación: ${Xe(n.updatedBy)}</p>`}

    <button class="btn primary wide" type="submit"><${y} name="check" size=${20} /> Guardar</button>
    ${!E&&d`<div class="row-2">
      <button type="button" class="btn tonal" onClick=${h}><${y} name="cart" size=${18} /> A la compra</button>
      <button type="button" class="btn danger" onClick=${q}><${y} name="delete" size=${18} /> Eliminar</button>
    </div>`}
  </form>`}function sn({initialQuery:e="",close:t}){let[a,n]=k(e),[s,o]=k(null),[c,l]=k(!1),u=Y();return R(()=>{setTimeout(()=>u.current?.focus(),250)},[]),R(()=>{if(a.trim().length<2){o(null);return}let i=!1;l(!0);let $=setTimeout(async()=>{try{let r=await kt.search(a);i||o(r)}catch(r){i||ee(r)}finally{i||l(!1)}},350);return()=>{i=!0,clearTimeout($)}},[a]),d`<div class="sheet-body">
    <div class="sheet-title">
      <h2>Buscar en Mercadona</h2>
      <button class="icon-btn" onClick=${()=>t(null)} aria-label="Cerrar"><${y} name="close" /></button>
    </div>
    <label class="search">
      <${y} name="search" size=${20} />
      <input ref=${u} type="search" placeholder="Leche, arroz, detergente…" value=${a} onInput=${i=>n(i.target.value)} />
      ${c&&d`<span class="mini-spinner"></span>`}
    </label>
    ${s&&s.length===0&&d`<p class="muted center">No se ha encontrado nada. Prueba con otras palabras.</p>`}
    ${!s&&d`<p class="muted center small">Escribe al menos 2 letras. Se rellenan solos el nombre, la categoría, la foto y el precio.</p>`}
    <div class="catalog-list">
      ${(s||[]).map((i,$)=>d`<button class="catalog-item enter" style=${`--i:${Math.min($,10)}`} onClick=${()=>t(i)}>
        <${Ie} url=${i.imageUrl} emoji=${ie(i.category)} size=${56} />
        <span class="grow min0 left">
          <strong class="ellipsis2">${i.name}</strong>
          <span class="muted small ellipsis">${[i.brand,i.packageInfo].filter(Boolean).join(" \xB7 ")||i.category}</span>
        </span>
        <span class=${`price ${i.price==null?"muted":""}`}>${i.price!=null?ne(i.price):"Sin precio"}</span>
      </button>`)}
    </div>
    ${s&&s[0]&&d`<p class="muted small center">Fuente: ${s[0].source}</p>`}
  </div>`}function on({active:e,setBadge:t,goTo:a}){let[n,s]=k(null),[o,c]=k(null),[l,u]=k({}),[i,$]=k(null),r=async(h=!1)=>{await M(async()=>{let p=await U.current();c(p);let v=await W.refresh();s(v),t(v.filter(L=>!L.checked).length);let _=await le.many(p.memberIds);u(Object.fromEntries(Object.values(_).map(L=>[L.email,L])))},{loading:!1,onError:h?()=>{}:ee})};R(()=>{e&&r()},[e]),$e(h=>h==="changed"&&e&&r(!0)),R(()=>{if(!e||!o||o.memberIds.length<2)return;let h=setInterval(()=>document.visibilityState==="visible"&&r(!0),2e4);return()=>clearInterval(h)},[e,o?.id]);let f=h=>{s(h),t(h.filter(p=>!p.checked).length)},m=async(h,p)=>{let v=!h.checked;f(n.map(_=>_.id===h.id?{..._,checked:v}:_)),x(v?"check":"tap"),Le(p);try{await W.setChecked(h,v)}catch(_){ee(_),r(!0)}},g=async h=>{$(h.id),x("swipe"),setTimeout(async()=>{$(null),f(n.filter(p=>p.id!==h.id));try{await W.dismiss(h)}catch(p){ee(p),r(!0);return}P(`\xAB${h.name}\xBB quitado de la lista`,{label:"Deshacer",run:async()=>{await M(()=>W.restore(h),{loading:!1}),r(!0)}})},260)},w=async h=>{let p=await G({title:`\xBFCu\xE1nto \xAB${h.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:B(h.quantity),suffix:h.unit});p!==null&&await M(async()=>{await W.changeQuantity(h,oe(p)??0),x("pop"),r(!0)})},b=async()=>{let h=await M(()=>ue.all());if(!h)return;let p=new Set((n||[]).map(_=>_.productId)),v=await ge("\xBFQu\xE9 quieres a\xF1adir?",[{label:"\u{1F4DD}  Algo que no est\xE1 en la despensa"},...h.map(_=>({label:`${ie(_.category)}  ${_.name}${p.has(_.id)?"  \xB7 ya en la lista":""}`}))]);if(v!==null)if(v===0){let _=await G({title:"Art\xEDculo libre",label:"\xBFQu\xE9 hay que comprar?",confirm:"Siguiente"});if(!_?.trim())return;let L=await G({title:_.trim(),label:"Cantidad",inputMode:"decimal",value:"1",suffix:"uds",confirm:"A\xF1adir"});if(L===null)return;await M(async()=>{await W.addFreeItem(_,oe(L)??0,"uds"),x("pop"),P(`\xAB${_.trim()}\xBB a\xF1adido a la compra`),r(!0)})}else{let _=h[v-1],L=(n||[]).find(tt=>tt.productId===_.id),J=await G({title:`\xBFCu\xE1nto \xAB${_.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:B(L?.quantity??z.amountToBuy(_)),suffix:_.unit,confirm:"A\xF1adir"});if(J===null)return;await M(async()=>{await W.addProduct(_,oe(J)??0),x("pop"),P(`\xAB${_.name}\xBB a\xF1adido a la compra`),r(!0)})}},C=async()=>{await fe({title:"Terminar la compra",message:"Lo marcado se sumar\xE1 al stock de la despensa y saldr\xE1 de la lista.",confirm:"Terminar"})&&await M(async()=>{let h=await W.completePurchase();Ue(),x("success"),P(h===1?"1 producto repuesto":`${h} productos repuestos`),V.emit("changed"),r(!0)})},E=async()=>{let h=(n||[]).filter(L=>!L.checked),p=h.length?h:n||[];if(!p.length)return P("La lista est\xE1 vac\xEDa");let v=p.reduce((L,J)=>L+(Fe(J)||0),0),_=[`\u{1F6D2} Lista de la compra \xB7 ${o?.name||""}`,"",...p.map(L=>`\u25AB\uFE0F ${L.name} \u2014 ${B(L.quantity)} ${L.unit}`),...v>0?["",`\u{1F4B6} Total estimado: ${ne(v)}`]:[]].join(`
`);navigator.share?navigator.share({text:_}).catch(()=>{}):(await navigator.clipboard?.writeText(_),P("Lista copiada"))},T=n?.length||0,A=n?.filter(h=>h.checked).length||0,N=(n||[]).filter(h=>!h.checked),H=N.reduce((h,p)=>h+(Fe(p)||0),0),K=N.filter(h=>Fe(h)===null).length,q=o?.shoppingDay>=1&&ht(ae(),pt(o.shoppingDay))===0;return d`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Compra</h1>
      <button class="icon-btn" onClick=${b} aria-label="Añadir"><${y} name="add" /></button>
      <button class="icon-btn" onClick=${E} aria-label="Compartir lista"><${y} name="share" /></button>
    </header>

    ${o&&d`<button class=${`day-banner ${q?"pulse":""}`} onClick=${()=>a("house","settings")}>
      <${y} name="calendar" size=${16} /> ${Ke(o.shoppingDay)}
    </button>`}

    ${T>0&&d`<div class="card soft progress-card">
      <div class="row">
        <span class="grow">${A===0?"Marca lo que metas en el carro":`${A} de ${T} en el carro`}</span>
        <strong>${K===0?`Total: ${ne(H)}`:`\u2248 ${ne(H)} (+${K} sin precio)`}</strong>
      </div>
      <div class="level big"><span class="primary" style=${`width:${T?Math.round(A*100/T):0}%`}></span></div>
    </div>`}

    ${!n&&d`<div class="skeleton-list">${[0,1,2].map(()=>d`<div class="skeleton"></div>`)}</div>`}
    ${n&&T===0&&d`<div class="empty">
      <div class="big-emoji">🎉</div>
      <h2>¡No falta nada!</h2>
      <p class="muted">Cuando algo baje de su mínimo aparecerá aquí solo. También puedes añadir cosas con el +.</p>
    </div>`}

    <div class="list">
      ${(n||[]).map((h,p)=>{let v=l[h.addedBy];return d`<article key=${h.id} class=${`card shop-item enter ${h.checked?"checked":""} ${i===h.id?"removing":""}`} style=${`--i:${Math.min(p,12)}`}>
          <button class=${`check ${h.checked?"on":""}`} aria-label="Marcar" onClick=${_=>m(h,_.currentTarget)}>
            ${h.checked&&d`<${y} name="check" size=${18} />`}
          </button>
          <${Ie} url=${h.photoUrl} emoji=${h.productId?ie(h.category):"\u{1F4DD}"} size=${46} />
          <button class="grow min0 left plain" onClick=${()=>w(h)}>
            <h3 class="ellipsis name">${h.name}</h3>
            <p class="muted small ellipsis">
              ${B(h.quantity)} ${h.unit}${Fe(h)!==null?` \xB7 ${ne(Fe(h))}`:""}
              ${h.manual&&h.addedBy&&` \xB7 a\xF1adido por ${v?re(v):Xe(h.addedBy)}`}
            </p>
          </button>
          ${v&&d`<${Be} profile=${v} size=${26} />`}
          <button class="icon-btn small" aria-label="Quitar" onClick=${()=>g(h)}><${y} name="close" size=${18} /></button>
        </article>`})}
    </div>

    ${T>0&&d`<div class="bottom-action">
      <button class="btn primary wide" disabled=${A===0} onClick=${C}>
        <${y} name="check" size=${20} /> ${A>0?`Terminar compra (${A})`:"Terminar compra"}
      </button>
    </div>`}
  </section>`}var rn={OK:{label:"Hay de sobra",tone:"success"},BELOW_MINIMUM:{label:"Quedar\xE1 bajo m\xEDnimo",tone:"warning"},NOT_ENOUGH:{label:"No llega",tone:"danger"},NOT_IN_PANTRY:{label:"Hay que comprarlo",tone:"primary"}};function cn(e){return e.canCook?e.items.some(t=>t.status==="BELOW_MINIMUM")?{text:"Puedes cocinarla (algo quedar\xE1 bajo m\xEDnimo)",tone:"warning"}:{text:"Puedes cocinarla \u2713",tone:"success"}:{text:`Falta ${e.missing.length===1?"1 ingrediente":`${e.missing.length} ingredientes`}`,tone:"danger"}}function ln({active:e}){let[t,a]=k(null),[n,s]=k([]),o=async(u=!1)=>{await M(async()=>{await U.current();let[i,$]=await Promise.all([me.all(),ue.all()]);a(i),s($)},{loading:!1,onError:u?()=>{}:ee})};R(()=>{e&&o()},[e]),$e(u=>u==="changed"&&e&&o(!0));let c=async u=>{await se(ts,{recipe:u,prods:n}),o(!0)},l=async()=>{await se(un,{initial:null,prods:n})&&o(!0)};return d`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Recetas</h1>
      <button class="icon-btn" onClick=${l} aria-label="Nueva receta"><${y} name="add" /></button>
    </header>

    ${!t&&d`<div class="skeleton-list">${[0,1].map(()=>d`<div class="skeleton tall"></div>`)}</div>`}
    ${t&&t.length===0&&d`<div class="empty">
      <div class="big-emoji">👩‍🍳</div>
      <h2>Aún no hay recetas</h2>
      <p class="muted">Crea una con sus ingredientes y verás si puedes cocinarla con lo que tienes, qué falta y cómo queda la despensa.</p>
      <button class="btn primary" onClick=${l}><${y} name="add" size=${20} /> Nueva receta</button>
    </div>`}

    <div class="list">
      ${(t||[]).map((u,i)=>{let $=me.check(u,n),r=cn($);return d`<button key=${u.id} class="card recipe-card enter" style=${`--i:${Math.min(i,12)}`} onClick=${()=>c(u)}>
          <span class="recipe-emoji">${u.emoji}</span>
          <span class="grow min0 left">
            <h3 class="ellipsis">${u.name}</h3>
            <span class="muted small">${u.ingredients.length} ingredientes · ${u.servings} raciones</span>
            <span class=${`tag ${r.tone}`}>${r.text}</span>
          </span>
          <${y} name="chevron_right" />
        </button>`})}
    </div>
    ${t&&t.length>0&&d`<button class="fab" onClick=${l} aria-label="Nueva receta"><${y} name="add" size=${28} /></button>`}
  </section>`}function ts({recipe:e,prods:t,close:a}){let[n,s]=k(e),[o,c]=k(t),l=me.check(n,o),u=cn(l),i=async()=>{let g=await ue.all();c(g)},$=async()=>{if(!l.toBuy.length)return P("No hace falta comprar nada \u{1F389}");await M(async()=>{let g=await me.addMissingToShopping(l);x("pop"),P(g===1?"1 art\xEDculo a\xF1adido a la compra":`${g} art\xEDculos a\xF1adidos a la compra`),V.emit("changed")})},r=async()=>{let g=l.canCook?"Se descontar\xE1n los ingredientes de la despensa.":"Hay ingredientes que no llegan: se descontar\xE1 lo que haya y quedar\xE1n a 0.";await fe({title:`Cocinar \xAB${n.name}\xBB`,message:g,confirm:"Cocinar"})&&await M(async()=>{await me.cook(l),x("success"),P("\xA1Que aproveche! Despensa actualizada"),V.emit("changed"),await i()})},f=async()=>{let g=Array.from({length:7},(C,E)=>X(ae(),E)),w=await ge("\xBFQu\xE9 d\xEDa?",g.map((C,E)=>({label:`${E===0?"Hoy":E===1?"Ma\xF1ana":Ye(Me(Ae(C)))} \xB7 ${he(C)}`})));if(w===null)return;let b=await ge("\xBFPara cu\xE1ndo?",Ne.map(C=>({label:`${C.emoji}  ${C.label}`})));b!==null&&await M(async()=>{await ce.set(g[w],Ne[b].key,n),x("pop"),P(`Planificada: ${he(g[w])} \xB7 ${Ne[b].label}`),V.emit("changed")})},m=async()=>{let g=await se(un,{initial:n,prods:o});g==="deleted"?a():g&&s(g)};return d`<div class="sheet-body">
    <div class="sheet-title">
      <span class="recipe-emoji big">${n.emoji}</span>
      <div class="grow min0"><h2>${n.name}</h2><p class="muted small">${n.servings} raciones</p></div>
      <button class="icon-btn" onClick=${m} aria-label="Editar"><${y} name="edit" /></button>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${y} name="close" /></button>
    </div>

    <div class=${`status-banner ${u.tone}`}>${u.text}</div>

    <h3 class="section-label">Ingredientes</h3>
    <div class="ingredients">
      ${l.items.map(g=>d`<div class="ingredient">
        <${Ie} url=${g.product?g.product.photo?.url||g.product.imageUrl:null} emoji=${ie(g.product?.category||"")} size=${42} />
        <div class="grow min0">
          <strong class="ellipsis">${g.ingredient.name}</strong>
          <span class="muted small">
            ${g.product?`Usa ${B(g.ingredient.quantity)} ${g.ingredient.unit} \xB7 tienes ${B(g.inStock)} \xB7 quedar\xE1n ${B(Math.max(g.after,0))}`:`${B(g.ingredient.quantity)} ${g.ingredient.unit} \xB7 no est\xE1 en la despensa`}
          </span>
        </div>
        <span class=${`tag ${rn[g.status].tone}`}>${g.status==="NOT_IN_PANTRY"?`Comprar ${B(g.toBuy)}`:rn[g.status].label}</span>
      </div>`)}
    </div>

    ${l.toBuy.length>0&&d`<p class="muted small">Para cocinarla y seguir por encima de los mínimos hay que comprar ${l.toBuy.length} ${l.toBuy.length===1?"cosa":"cosas"}${l.estimatedCost>0?` (\u2248 ${ne(l.estimatedCost)})`:""}.</p>`}

    ${n.steps&&d`<h3 class="section-label">Preparación</h3><p class="pre steps">${n.steps}</p>`}

    <div class="stack">
      <button class="btn primary wide" onClick=${r}><${y} name="cook" size=${20} /> Cocinar ahora</button>
      <button class="btn tonal wide" onClick=${$}><${y} name="cart" size=${20} /> Añadir lo necesario a la compra</button>
      <button class="btn text wide" onClick=${f}><${y} name="calendar" size=${20} /> Añadir al plan semanal</button>
    </div>
  </div>`}function un({initial:e,prods:t,close:a}){let[n,s]=k(e?.name||""),[o,c]=k(String(e?.servings||2)),[l,u]=k(e?.steps||""),[i,$]=k(e?.emoji||mt),[r,f]=k(e?.ingredients||[]),m=async()=>{let b=await ge("A\xF1adir ingrediente",[{label:"\u{1F4DD}  Algo que no est\xE1 en la despensa"},...t.map(C=>({label:`${ie(C.category)}  ${C.name}`}))]);if(b!==null){if(b===0){let C=await G({title:"Ingrediente",label:"Nombre",confirm:"Siguiente"});if(!C?.trim())return;let E=await G({title:C.trim(),label:"Cantidad",inputMode:"decimal",value:"1",suffix:pe,confirm:"A\xF1adir"}),T=oe(E);if(!T)return;f([...r,{productId:"",name:C.trim(),quantity:te(T),unit:pe}])}else{let C=t[b-1],E=await G({title:C.name,label:"\xBFCu\xE1nto usa la receta?",inputMode:"decimal",value:"1",suffix:C.unit,confirm:"A\xF1adir"}),T=oe(E);if(!T)return;let A={productId:C.id,name:C.name,quantity:te(T),unit:C.unit},N=r.some(H=>H.productId===C.id);f(N?r.map(H=>H.productId===C.id?A:H):[...r,A])}x("pop")}},g=async b=>{b.preventDefault();let C={...e||{createdBy:"",photo:null},name:n,servings:parseInt(o,10)||2,steps:l,emoji:i,ingredients:r},E=await M(()=>me.save(C));E&&(x("success"),P("Receta guardada"),V.emit("changed"),a(E))},w=async()=>{await fe({title:"Eliminar receta",message:`\xBFSeguro que quieres eliminar \xAB${e.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await M(async()=>{await me.remove(e),P("Receta eliminada"),V.emit("changed"),a("deleted")})};return d`<form class="sheet-body" onSubmit=${g}>
    <div class="sheet-title">
      <span class="recipe-emoji big pop-in" key=${i}>${i}</span>
      <h2 class="grow">${e?"Editar receta":"Nueva receta"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${y} name="close" /></button>
    </div>
    <div class="emoji-row">
      ${_a.map(b=>d`<button type="button" class=${`emoji-choice ${b===i?"selected":""}`} onClick=${()=>$(b)}>${b}</button>`)}
    </div>
    <label class="field"><span>Nombre</span><input required maxlength="60" value=${n} onInput=${b=>s(b.target.value)} placeholder="Macarrones con tomate" /></label>
    <label class="field"><span>Raciones</span><input inputmode="numeric" value=${o} onInput=${b=>c(b.target.value)} /></label>

    <h3 class="section-label">Ingredientes</h3>
    ${r.length===0&&d`<p class="muted small">Añade lo que gasta la receta. Lo que esté en la despensa se descontará al cocinarla.</p>`}
    <div class="ingredients">
      ${r.map((b,C)=>{let E=t.find(T=>T.id===b.productId);return d`<div class="ingredient">
          <span class="group-emoji">${ie(E?.category||"")}</span>
          <div class="grow min0"><strong class="ellipsis">${b.name}</strong>
            <span class="muted small">${B(b.quantity)} ${b.unit}${E?"":" \xB7 no est\xE1 en la despensa"}</span></div>
          <button type="button" class="icon-btn small" aria-label="Quitar" onClick=${()=>f(r.filter((T,A)=>A!==C))}><${y} name="close" size=${18} /></button>
        </div>`})}
    </div>
    <button type="button" class="btn tonal wide" onClick=${m}><${y} name="add" size=${20} /> Añadir ingrediente</button>

    <label class="field"><span>Preparación</span><textarea rows="5" value=${l} onInput=${b=>u(b.target.value)} placeholder="1. Cuece la pasta…"></textarea></label>

    <button class="btn primary wide" type="submit"><${y} name="check" size=${20} /> Guardar receta</button>
    ${e&&d`<button type="button" class="btn danger wide" onClick=${w}><${y} name="delete" size=${20} /> Eliminar receta</button>`}
  </form>`}function dn({active:e}){let[t,a]=k(()=>Je(ae())),[n,s]=k(null),[o,c]=k([]),[l,u]=k(null),[i,$]=k(0),r=Y(0),f=async(A=!1)=>{let N=++r.current;await M(async()=>{await U.current();let[H,K]=await Promise.all([me.all(),ce.week(t)]);if(N!==r.current)return;c(H),s(K),u(null);let q=await ce.analyze(t).catch(()=>null);N===r.current&&u(q||"error")},{loading:!1,onError:A?()=>{}:ee})};R(()=>{e&&f()},[e,t]),$e(A=>A==="changed"&&e&&f(!0));let m=A=>{a(X(t,A*7)),$(i+1),s(null)},g=async(A,N,H,K)=>{let q=[];K&&q.push({label:"\u{1F469}\u200D\u{1F373}  Ver / cocinar la receta",action:"view"}),H&&q.push({label:"\u{1F5D1}\uFE0F  Quitar",action:"clear",danger:!0}),q.push({label:"\u270F\uFE0F  Escribir otra cosa",action:"free"}),o.forEach(_=>q.push({label:`${_.emoji}  ${_.name}`,action:"recipe",recipe:_}));let h=await ge(`${Ye(Me(Ae(A)))} \xB7 ${N.label}`,q);if(h===null)return;let p=q[h];if(p.action==="view"){P("Abre la pesta\xF1a Recetas para cocinarla");return}if(p.action==="clear"){await M(async()=>{await ce.clear(H),f(!0)});return}let v="";p.action==="free"&&(v=await G({title:N.label,label:"\xBFQu\xE9 vas a comer?",value:H&&!H.recipeId?H.title:""}),!v?.trim())||await M(async()=>{await ce.set(A,N.key,p.recipe||null,v),x("pop"),f(!0)})},w=async()=>{await M(async()=>{let A=await ce.copyPreviousWeek(t);x(A?"pop":"tap"),P(A===0?"No hab\xEDa nada nuevo que copiar":A===1?"1 comida copiada":`${A} comidas copiadas`),f(!0)})},b=async()=>{await se(ns,{weekStart:t}),f(!0)},C=Je(ae()),E=t===C?"Esta semana":t===X(C,-7)?"Semana pasada":t===X(C,7)?"Semana que viene":"",T=l&&l!=="error"?l.toBuy.length:0;return d`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Semana</h1></header>

    <div class="week-nav card soft">
      <button class="icon-btn" onClick=${()=>m(-1)} aria-label="Semana anterior"><${y} name="chevron_left" /></button>
      <button class="grow plain center" onClick=${()=>a(C)}>
        <strong>${he(t)} – ${he(X(t,6))}</strong>
        <span class="muted small block">${E}</span>
      </button>
      <button class="icon-btn" onClick=${()=>m(1)} aria-label="Semana siguiente"><${y} name="chevron_right" /></button>
    </div>

    <button class="card forecast" onClick=${b}>
      <${y} name="insights" size=${28} />
      <span class="grow left">
        <strong>Previsión de la compra</strong>
        <span class="muted small block">
          ${l?l==="error"?"No se ha podido calcular":l.plannedMeals===0&&T===0?"Planifica comidas para ver qu\xE9 hay que comprar":`\u2248 ${ne(l.estimatedCost)} \xB7 ${T===1?"1 producto":`${T} productos`}`:"Calculando\u2026"}
        </span>
      </span>
      <${y} name="chevron_right" />
    </button>
    <button class="btn text" onClick=${w}><${y} name="copy" size=${18} /> Copiar la semana anterior</button>

    <div class="days" key=${i}>
      ${Array.from({length:7},(A,N)=>{let H=X(t,N),K=H<ae();return d`<div class=${`card day enter ${K?"past":""}`} style=${`--i:${N}`}>
          <div class="day-header">
            <strong>${Ye(Me(Ae(H)))}</strong>
            <span class="muted small">${he(H)}</span>
            ${H===ae()&&d`<span class="tag primary">Hoy</span>`}
          </div>
          ${Ne.map(q=>{let h=(n||[]).find(v=>v.date===H&&v.slot===q.key),p=h?.recipeId?o.find(v=>v.id===h.recipeId):null;return d`<button class="slot" onClick=${()=>g(H,q,h,p)}>
              <span class="slot-emoji">${p?.emoji||q.emoji}</span>
              <span class="grow left min0">
                <span class="muted tiny block">${q.label}</span>
                <span class=${`ellipsis block ${h?"":"muted"}`}>${h?h.title:"+ A\xF1adir"}</span>
              </span>
              ${p&&d`<span class="tag primary">Receta</span>`}
            </button>`})}
        </div>`})}
    </div>
  </section>`}var as={RECIPES:"Por las recetas del plan",HABITUAL:"Por lo que sol\xE9is gastar",BELOW_MINIMUM:"Est\xE1 bajo m\xEDnimo"};function ns({weekStart:e,close:t}){let[a,n]=k(null);R(()=>{M(async()=>n(await ce.analyze(e)),{loading:!1})},[]);let s=async()=>{await M(async()=>{let c=await ce.addToShopping(a);x("pop"),P(c===1?"1 producto a\xF1adido a la compra":`${c} productos a\xF1adidos a la compra`),V.emit("changed"),t()})},o=a?.needs.filter(c=>c.toBuy<=0)||[];return d`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow"><h2>Previsión de la compra</h2><p class="muted small">${he(e)} – ${he(X(e,6))}</p></div>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${y} name="close" /></button>
    </div>
    ${!a&&d`<div class="skeleton"></div><div class="skeleton"></div>`}
    ${a&&d`
      <div class="card soft total-card">
        <span class="muted small">Coste estimado de la semana</span>
        <strong class="total">${ne(a.estimatedCost)}</strong>
        <span class="muted small">${a.plannedMeals===1?"1 comida planificada":`${a.plannedMeals} comidas planificadas`}
          ${a.withoutPrice>0?` \xB7 ${a.withoutPrice} sin precio`:""}</span>
      </div>
      ${a.toBuy.length===0&&d`<div class="empty small"><div class="big-emoji">🎉</div><h2>Tienes todo lo necesario</h2>
        <p class="muted">Con el plan y lo que soléis gastar, no hace falta comprar nada esta semana.</p></div>`}
      ${a.toBuy.length>0&&d`<h3 class="section-label">Hay que comprar</h3>`}
      ${a.toBuy.map((c,l)=>d`<div class="need enter" style=${`--i:${l}`}>
        <div class="grow min0">
          <strong>${c.name}</strong> ${c.isUrgent&&d`<span class="tag danger">No llega</span>`}
          <span class="muted small block">${as[c.reason]} · plan ${B(c.planned)} · habitual ${B(c.habitual)} · tienes ${B(c.inStock)} ${c.unit}</span>
        </div>
        <div class="right">
          <strong class="primary-text">Comprar ${B(c.toBuy)} ${c.unit}</strong>
          <span class="muted small block">${c.estimatedCost!=null?ne(c.estimatedCost):"Sin precio"}</span>
        </div>
      </div>`)}
      ${o.length>0&&d`<h3 class="section-label">Cubierto ✅</h3>
        ${o.map(c=>d`<div class="need covered"><span class="grow">${c.name}</span><span class="muted small">tienes ${B(c.inStock)} ${c.unit}</span></div>`)}`}
      ${a.toBuy.length>0&&d`<button class="btn primary wide" onClick=${s}><${y} name="cart" size=${20} /> Añadir todo a la compra (${a.toBuy.length})</button>`}
    `}
  </div>`}function pn({active:e,onLogout:t,onNoHouse:a,openSettingsRequest:n}){let[s,o]=k(null),[c,l]=k([]),[u,i]=k(null),[$,r]=k({}),f=async(p=!1)=>{await M(async()=>{let v=await U.current(),[_,L,J]=await Promise.all([U.mine(),le.me(!0),le.many(v.memberIds,!0)]);o(v),l(_),i(L),r(J)},{loading:!1,onError:p?()=>{}:ee})};R(()=>{e&&f()},[e]),$e(p=>p==="changed"&&e&&f(!0)),R(()=>{e&&n&&H()},[n]);let m=async()=>{await navigator.clipboard?.writeText(s.inviteCode).catch(()=>{}),x("pop"),P("C\xF3digo copiado")},g=()=>{let p=`\xA1\xDAnete a \xAB${s.name}\xBB en Stock Casa! C\xF3digo: ${s.inviteCode}
${location.origin}${location.pathname}`;navigator.share?navigator.share({text:p}).catch(()=>{}):m()},w=p=>{U.switchTo(p),x("pop"),P(`Ahora est\xE1s en \xAB${p.name}\xBB`),V.emit("changed"),f(!0)},b=async()=>{let p=await G({title:"Unirse con c\xF3digo",label:"C\xF3digo de 6 caracteres",maxLength:6,confirm:"Unirme"});p&&await M(async()=>{let v=await U.join(p);Ue(),x("success"),P(`Ahora est\xE1s en \xAB${v.name}\xBB`),V.emit("changed"),f(!0)})},C=async()=>{let p=await G({title:"Crear otra casa",label:"Nombre",confirm:"Crear"});p&&await M(async()=>{let v=await U.create(p);x("success"),P(`Casa \xAB${v.name}\xBB creada`),V.emit("changed"),f(!0)})},E=async()=>{let p=await G({title:"Cambiar nombre",label:"Nombre de la casa",value:s.name});p&&await M(async()=>{await U.rename(s,p),f(!0)})},T=async()=>{let p=s.memberIds.length<=1,v=c.length<=1?`

Es tu \xFAnica casa: despu\xE9s podr\xE1s crear otra o unirte a una con su c\xF3digo.`:"";await fe({title:p?"Eliminar casa":"Salir de la casa",message:(p?`Eres el \xFAnico miembro de \xAB${s.name}\xBB. Se borrar\xE1n sus productos y su lista de la compra.`:`Dejar\xE1s de ver \xAB${s.name}\xBB. Los dem\xE1s miembros la seguir\xE1n teniendo.`)+v,confirm:p?"Eliminar":"Salir",danger:!0})&&await M(async()=>{await U.leave(s),P("Has salido de la casa"),(await U.mine()).length?(V.emit("changed"),f(!0)):a()})},A=async()=>{await fe({title:"Cerrar sesi\xF3n",message:"\xBFSeguro que quieres cerrar sesi\xF3n en este dispositivo?",confirm:"Cerrar sesi\xF3n"})&&(await M(we.logout),t())},N=async()=>{await se(rs,{profile:u})&&f(!0)};async function H(){let p=s||await U.current().catch(()=>null);await se(cs,{house:p})==="profile"?N():f(!0)}let K=()=>se(ls,{}),q=async()=>{let p=await os(s.inviteCode);x("pop"),navigator.share?navigator.share({text:p}).catch(()=>{}):(await navigator.clipboard?.writeText(p).catch(()=>{}),P("Mensaje copiado: p\xE9galo en WhatsApp o donde quieras"))};if(!s)return d`<section class="tab"><header class="tab-header"><h1 class="brand">Casa</h1></header>
    <div class="skeleton-list"><div class="skeleton tall"></div><div class="skeleton"></div></div></section>`;let h=S.current()?.userId;return d`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Casa</h1></header>

    <div class="card hero enter" style="--i:0">
      <span class="hero-emoji">🏠</span>
      <div class="grow min0">
        <h2 class="ellipsis">${s.name}</h2>
        <p class="muted small">${s.memberIds.length===1?"Solo t\xFA":`${s.memberIds.length} miembros`} · ${Ke(s.shoppingDay)}</p>
      </div>
      <button class="icon-btn" onClick=${E} aria-label="Cambiar nombre"><${y} name="edit" /></button>
    </div>

    <div class="card enter" style="--i:1">
      <h3>Invitar a alguien</h3>
      <p class="muted small">Comparte este código: quien lo introduzca verá y editará esta misma casa.</p>
      <div class="invite-code" onClick=${m}>${s.inviteCode}</div>
      <div class="row-2">
        <button class="btn tonal" onClick=${m}><${y} name="copy" size=${18} /> Copiar</button>
        <button class="btn tonal" onClick=${g}><${y} name="share" size=${18} /> Compartir</button>
      </div>
    </div>

    <div class="card enter" style="--i:2">
      <h3>Miembros</h3>
      ${s.memberIds.map((p,v)=>{let _=$[p]||{id:p,email:s.memberEmails[v]||"",avatarColor:qe[v%qe.length]};return d`<div class="member">
          <${Be} profile=${_} size=${40} />
          <div class="grow min0">
            <strong class="ellipsis block">${re(_)}${p===h?" (t\xFA)":""}</strong>
            <span class="muted small ellipsis block">${_.email}</span>
          </div>
          ${p===s.ownerId&&d`<span class="tag primary">Creador</span>`}
        </div>`})}
    </div>

    <div class="card enter" style="--i:3">
      <h3>Mis casas</h3>
      ${c.map(p=>d`<button class="house-row" onClick=${()=>p.id!==s.id&&w(p)}>
        <span class="grow left ellipsis">${p.name}</span>
        ${p.id===s.id?d`<span class="tag success">Abierta</span>`:d`<span class="muted small">Abrir</span>`}
      </button>`)}
      <div class="row-2">
        <button class="btn tonal" onClick=${b}><${y} name="login" size=${18} /> Unirme</button>
        <button class="btn tonal" onClick=${C}><${y} name="add" size=${18} /> Crear</button>
      </div>
    </div>

    <div class="card enter" style="--i:4">
      <h3>Tu cuenta</h3>
      ${u&&d`<button class="member plain" onClick=${N}>
        <${Be} profile=${u} size=${52} />
        <div class="grow min0 left"><strong class="ellipsis block big-text">${re(u)}</strong><span class="muted small ellipsis block">${u.email}</span></div>
        <${y} name="edit" />
      </button>`}
      <button class="btn primary wide" onClick=${H}><${y} name="settings" size=${20} /> Ajustes</button>
      <button class="btn tonal wide" onClick=${q}><${y} name="share" size=${20} /> Compartir Stock Casa</button>
      <button class="btn tonal wide" onClick=${K}><${y} name="home" size=${20} /> Instalar en el móvil</button>
      <button class="btn text wide" onClick=${A}><${y} name="logout" size=${20} /> Cerrar sesión</button>
    </div>

    <button class="btn danger wide enter" style="--i:5" onClick=${T}><${y} name="logout" size=${20} /> ${s.memberIds.length<=1?"Eliminar casa":"Salir de la casa"}</button>
    <p class="muted tiny center">Stock Casa web · mismos datos que la app de Android</p>
  </section>`}var ss=`\xA1Prueba Stock Casa! La despensa y la lista de la compra de casa, compartidas.

Si tienes Android, descarga la app: {apk}
Si tienes iPhone, abre este enlace en Safari y elige Compartir \u2192 \xABA\xF1adir a pantalla de inicio\xBB: {web}

Despu\xE9s crea tu cuenta y \xFAnete a nuestra casa con el c\xF3digo {codigo}.`;async function os(e){let t=`${location.origin}${location.pathname.replace(/[^/]*$/,"")}`,a=ss;try{let n=await fetch(`compartir.txt?v=${Date.now()}`,{cache:"no-store"});n.ok&&(a=(await n.text()).trim()||a)}catch{}return a.replaceAll("{apk}",`${t}StockCasa.apk`).replaceAll("{web}",t).replaceAll("{codigo}",e||"que te pase")}function rs({profile:e,close:t}){let[a,n]=k(e.nickname),[s,o]=k(e.avatarColor),[c,l]=k(void 0),[u,i]=k(null),$=Y(),r={...e,nickname:a||e.nickname,avatarColor:s,avatar:c===null?null:u?{url:u}:e.avatar},f=async g=>{let w=g.target.files?.[0];if(g.target.value="",!w)return;let b=await _t(w,600);l(b),i(URL.createObjectURL(b))};return d`<form class="sheet-body" onSubmit=${async g=>{g.preventDefault();let w=await M(()=>le.save({nickname:a,avatarColor:s,photo:c}));w&&(x("success"),P("Perfil guardado"),V.emit("changed"),t(w))}}>
    <div class="sheet-title"><h2 class="grow">Tu perfil</h2>
      <button type="button" class="icon-btn" onClick=${()=>t(null)} aria-label="Cerrar"><${y} name="close" /></button></div>
    <div class="center-col">
      <button type="button" class="plain" onClick=${()=>$.current.click()}><${Be} profile=${r} size=${112} /></button>
      <strong class="big-text">${re(r)}</strong>
      <div class="row-2">
        <button type="button" class="btn tonal small" onClick=${()=>$.current.click()}><${y} name="camera" size=${18} /> Foto</button>
        ${r.avatar&&d`<button type="button" class="btn text small" onClick=${()=>{l(null),i(null)}}>Quitar foto</button>`}
      </div>
      <input ref=${$} type="file" accept="image/*" hidden onChange=${f} />
    </div>
    <label class="field"><span>Apodo</span><input maxlength="24" value=${a} onInput=${g=>n(g.target.value)} /></label>
    <span class="field-label">Color del avatar</span>
    <div class="color-row">
      ${qe.map(g=>d`<button type="button" class=${`color-dot ${g===s?"selected":""}`} style=${`background:${g}`}
        aria-label="Color" onClick=${()=>{o(g),x("tap")}}></button>`)}
    </div>
    <button class="btn primary wide" type="submit"><${y} name="check" size=${20} /> Guardar perfil</button>
    <${is} />
  </form>`}function is(){let[e,t]=k(ke.get()),a=(n,s)=>{t(ke.set(n)),Le(s),x("pop")};return d`<div class="card appearance">
    <h3>Apariencia de la app</h3>
    <p class="muted small">Solo cambia en este dispositivo</p>

    <span class="field-label">Color</span>
    <div class="theme-row">
      ${Ze.map(n=>d`<button type="button" class=${`theme-choice ${e.theme===n.key?"selected":""}`}
        onClick=${s=>a({theme:n.key},s.currentTarget.firstChild)}>
        <span class="swatch" style=${`background:${n.color};border-color:${n.soft}`}>${e.theme===n.key&&d`<${y} name="check" size=${22} />`}</span>
        <span>${n.label}</span>
      </button>`)}
    </div>

    <span class="field-label">Modo</span>
    <div class="chips">
      ${Bt.map(n=>d`<button type="button" class=${`chip ${e.mode===n.key?"checked":""}`}
        onClick=${s=>a({mode:n.key},s.currentTarget)}>${n.label}</button>`)}
    </div>

    <span class="field-label">Estilo</span>
    <div class="style-list">
      ${$t.map(n=>d`<button type="button" class=${`style-choice ${e.style===n.key?"selected":""}`}
        onClick=${s=>a({style:n.key},s.currentTarget.querySelector(".style-preview"))}>
        <span class=${`style-preview ${n.key}`}><i></i><i></i><b></b></span>
        <span class="grow left"><strong class="block">${n.label}</strong><span class="muted small block">${n.description}</span></span>
        ${e.style===n.key&&d`<${y} name="check" size=${22} class="primary-text" />`}
      </button>`)}
    </div>
  </div>`}function cs({house:e,close:t}){let[a,n]=k(ke.get()),[s,o]=k(e),c=Y(),l=i=>n(ke.set(i)),u=async i=>{if(!s||i===s.shoppingDay)return;let $=await M(()=>U.setShoppingDay(s,i),{loading:!1});$&&(o($),x("pop"),Le(c.current),V.emit("changed"))};return d`<div class="sheet-body">
    <div class="sheet-title"><h2 class="grow">Ajustes</h2>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${y} name="close" /></button></div>

    <div class="card">
      <h3>Apariencia de la app</h3>
      <p class="muted small">${[Ze,Bt,$t].map((i,$)=>i.find(r=>r.key===[a.theme,a.mode,a.style][$])?.label).join(" \xB7 ")}</p>
      <button class="btn tonal wide" onClick=${()=>t("profile")}><${y} name="edit" size=${18} /> Cambiar en mi perfil</button>
    </div>

    ${s&&d`<div class="card">
      <h3>Día de compra semanal</h3>
      <p class="muted small">Lo comparten todos los de «${s.name}»</p>
      <div class="chips wrap">
        ${[0,1,2,3,4,5,6,7].map(i=>d`<button class=${`chip ${s.shoppingDay===i?"checked":""}`} onClick=${()=>u(i)}>
          ${i===0?"Ninguno":wa(i)}
        </button>`)}
      </div>
      <p class="primary-text strong" ref=${c}>${Ke(s.shoppingDay)}</p>
      <p class="muted small">En el iPhone la web no puede mandar avisos como la app de Android; verás el día de compra en la pestaña Compra.</p>
    </div>`}

    <div class="card">
      <h3>Sonidos y vibración</h3>
      <label class="switch-row"><span>Sonidos</span>
        <input type="checkbox" class="switch" checked=${a.sounds} onChange=${i=>{l({sounds:i.target.checked}),i.target.checked&&x("check")}} /></label>
      <label class="switch-row"><span>Vibración (Android)</span>
        <input type="checkbox" class="switch" checked=${a.vibration} onChange=${i=>l({vibration:i.target.checked})} /></label>
      <p class="muted small">Pequeños sonidos al añadir, marcar o terminar la compra.</p>
    </div>
  </div>`}function ls({close:e}){let t=/iPhone|iPad|iPod/.test(navigator.userAgent);return d`<div class="sheet-body">
    <div class="sheet-title"><h2 class="grow">Instalar Stock Casa</h2>
      <button class="icon-btn" onClick=${()=>e()} aria-label="Cerrar"><${y} name="close" /></button></div>
    <p class="muted">Así tendrás Stock Casa en la pantalla de inicio, a pantalla completa, como una app más.</p>
    <ol class="steps-list">
      ${t?d`
        <li>Abre esta página en <strong>Safari</strong>.</li>
        <li>Toca el botón <strong>Compartir</strong> (el cuadrado con la flecha hacia arriba).</li>
        <li>Elige <strong>«Añadir a pantalla de inicio»</strong> y pulsa <strong>Añadir</strong>.</li>
      `:d`
        <li>Abre esta página en <strong>Chrome</strong>.</li>
        <li>Toca el menú <strong>⋮</strong> de arriba a la derecha.</li>
        <li>Elige <strong>«Añadir a pantalla de inicio»</strong> o <strong>«Instalar aplicación»</strong>.</li>
      `}
    </ol>
    <p class="muted small">Si tienes Android, también puedes usar la app nativa (con avisos del día de compra).</p>
  </div>`}var us=[{key:"pantry",label:"Despensa",icon:"pantry"},{key:"shopping",label:"Compra",icon:"cart"},{key:"recipes",label:"Recetas",icon:"recipe"},{key:"plan",label:"Semana",icon:"calendar"},{key:"house",label:"Casa",icon:"home"}];function ds(){let[e,t]=k(()=>we.isLoggedIn()?"home":"login"),[a,n]=k(()=>location.hash==="#compra"?"shopping":"pantry"),[s,o]=k(()=>new Set([a])),[c,l]=k(0),[u,i]=k(0);R(()=>{Ta(m=>{m.noHouse?t("setup"):(S.clear(),t("login"))})},[]);let $=(m,g)=>{m!==a&&x("tap"),n(m),o(new Set([...s,m])),g==="settings"&&i(Date.now()),window.scrollTo({top:0})},r=async()=>{try{let m=await U.mine();t(m.length?"home":"setup")}catch{t("home")}};if(e==="login")return d`<${Za} onLoggedIn=${r} onRegister=${()=>t("register")} />`;if(e==="register")return d`<${en} onRegistered=${()=>t("setup")} onBack=${()=>t("login")} />`;if(e==="setup")return d`<${tn} onReady=${()=>{n("pantry"),t("home")}}
      onLogout=${async()=>{await we.logout(),t("login")}} />`;let f={goTo:$,setBadge:l};return d`<div class="app">
    <div class="tabs-content">
      ${s.has("pantry")&&d`<div class=${`tab-page ${a==="pantry"?"active":""}`}><${nn} active=${a==="pantry"} ...${f} /></div>`}
      ${s.has("shopping")&&d`<div class=${`tab-page ${a==="shopping"?"active":""}`}><${on} active=${a==="shopping"} ...${f} /></div>`}
      ${s.has("recipes")&&d`<div class=${`tab-page ${a==="recipes"?"active":""}`}><${ln} active=${a==="recipes"} ...${f} /></div>`}
      ${s.has("plan")&&d`<div class=${`tab-page ${a==="plan"?"active":""}`}><${dn} active=${a==="plan"} ...${f} /></div>`}
      ${s.has("house")&&d`<div class=${`tab-page ${a==="house"?"active":""}`}><${pn} active=${a==="house"}
        openSettingsRequest=${u} onLogout=${()=>t("login")} onNoHouse=${()=>t("setup")} /></div>`}
    </div>
    <nav class="bottom-nav">
      ${us.map(m=>d`<button class=${`nav-item ${a===m.key?"active":""}`} onClick=${()=>$(m.key)} aria-label=${m.label}>
        <span class="nav-icon" key=${a===m.key?"on":"off"}><${y} name=${m.icon} size=${24} />
          ${m.key==="shopping"&&c>0&&d`<span class="badge">${c>99?"99+":c}</span>`}
        </span>
        <span class="nav-label">${m.label}</span>
      </button>`)}
    </nav>
  </div>`}bt();var mn=document.getElementById("app");mn.textContent="";xe(d`<${ds} />`,mn);"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});
