var ot,N,Gt,dn,Ee,Vt,Jt,It,St,kt,Et,pn,Ve={},Yt=[],mn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,xt=Array.isArray;function Ce(e,t){for(var a in t)e[a]=t[a];return e}function Kt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Mt(e,t,a){var n,s,o,i={};for(o in t)o=="key"?n=t[o]:o=="ref"?s=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?ot.call(arguments,2):a),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return at(e,i,n,s,null)}function at(e,t,a,n,s){var o={type:e,props:t,key:a,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++Gt,__i:-1,__u:0};return s==null&&N.vnode!=null&&N.vnode(o),o}function rt(e){return e.children}function nt(e,t){this.props=e,this.context=t}function He(e,t){if(t==null)return e.__?He(e.__,e.__i+1):null;for(var a;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null)return a.__e;return typeof e.type=="function"?He(e):null}function Xt(e){var t,a;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null){e.__e=e.__c.base=a.__e;break}return Xt(e)}}function jt(e){(!e.__d&&(e.__d=!0)&&Ee.push(e)&&!st.__r++||Vt!==N.debounceRendering)&&((Vt=N.debounceRendering)||Jt)(st)}function st(){var e,t,a,n,s,o,i,c;for(Ee.sort(It);e=Ee.shift();)e.__d&&(t=Ee.length,n=void 0,o=(s=(a=e).__v).__e,i=[],c=[],a.__P&&((n=Ce({},s)).__v=s.__v+1,N.vnode&&N.vnode(n),At(a.__P,n,s,a.__n,a.__P.namespaceURI,32&s.__u?[o]:null,i,o??He(s),!!(32&s.__u),c),n.__v=s.__v,n.__.__k[n.__i]=n,ta(i,n,c),n.__e!=o&&Xt(n)),Ee.length>t&&Ee.sort(It));st.__r=0}function Zt(e,t,a,n,s,o,i,c,u,l,h){var r,g,m,$,y,_=n&&n.__k||Yt,C=t.length;for(a.__d=u,hn(a,t,_),u=a.__d,r=0;r<C;r++)(m=a.__k[r])!=null&&(g=m.__i===-1?Ve:_[m.__i]||Ve,m.__i=r,At(e,m,g,s,o,i,c,u,l,h),$=m.__e,m.ref&&g.ref!=m.ref&&(g.ref&&Pt(g.ref,null,m),h.push(m.ref,m.__c||$,m)),y==null&&$!=null&&(y=$),65536&m.__u||g.__k===m.__k?u=ea(m,u,e):typeof m.type=="function"&&m.__d!==void 0?u=m.__d:$&&(u=$.nextSibling),m.__d=void 0,m.__u&=-196609);a.__d=u,a.__e=y}function hn(e,t,a){var n,s,o,i,c,u=t.length,l=a.length,h=l,r=0;for(e.__k=[],n=0;n<u;n++)(s=t[n])!=null&&typeof s!="boolean"&&typeof s!="function"?(i=n+r,(s=e.__k[n]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?at(null,s,null,null,null):xt(s)?at(rt,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?at(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,o=null,(c=s.__i=fn(s,a,i,h))!==-1&&(h--,(o=a[c])&&(o.__u|=131072)),o==null||o.__v===null?(c==-1&&r--,typeof s.type!="function"&&(s.__u|=65536)):c!==i&&(c==i-1?r--:c==i+1?r++:(c>i?r--:r++,s.__u|=65536))):s=e.__k[n]=null;if(h)for(n=0;n<l;n++)(o=a[n])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=He(o)),aa(o,o))}function ea(e,t,a){var n,s;if(typeof e.type=="function"){for(n=e.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=e,t=ea(n[s],t,a));return t}e.__e!=t&&(t&&e.type&&!a.contains(t)&&(t=He(e)),a.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function fn(e,t,a,n){var s=e.key,o=e.type,i=a-1,c=a+1,u=t[a];if(u===null||u&&s==u.key&&o===u.type&&!(131072&u.__u))return a;if(n>(u!=null&&!(131072&u.__u)?1:0))for(;i>=0||c<t.length;){if(i>=0){if((u=t[i])&&!(131072&u.__u)&&s==u.key&&o===u.type)return i;i--}if(c<t.length){if((u=t[c])&&!(131072&u.__u)&&s==u.key&&o===u.type)return c;c++}}return-1}function Wt(e,t,a){t[0]==="-"?e.setProperty(t,a??""):e[t]=a==null?"":typeof a!="number"||mn.test(t)?a:a+"px"}function tt(e,t,a,n,s){var o;e:if(t==="style")if(typeof a=="string")e.style.cssText=a;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)a&&t in a||Wt(e.style,t,"");if(a)for(t in a)n&&a[t]===n[t]||Wt(e.style,t,a[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=a,a?n?a.u=n.u:(a.u=St,e.addEventListener(t,o?Et:kt,o)):e.removeEventListener(t,o?Et:kt,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=a??"";break e}catch{}typeof a=="function"||(a==null||a===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&a==1?"":a))}}function Qt(e){return function(t){if(this.l){var a=this.l[t.type+e];if(t.t==null)t.t=St++;else if(t.t<a.u)return;return a(N.event?N.event(t):t)}}}function At(e,t,a,n,s,o,i,c,u,l){var h,r,g,m,$,y,_,C,E,T,A,B,H,K,q,f,d=t.type;if(t.constructor!==void 0)return null;128&a.__u&&(u=!!(32&a.__u),o=[c=t.__e=a.__e]),(h=N.__b)&&h(t);e:if(typeof d=="function")try{if(C=t.props,E="prototype"in d&&d.prototype.render,T=(h=d.contextType)&&n[h.__c],A=h?T?T.props.value:h.__:n,a.__c?_=(r=t.__c=a.__c).__=r.__E:(E?t.__c=r=new d(C,A):(t.__c=r=new nt(C,A),r.constructor=d,r.render=$n),T&&T.sub(r),r.props=C,r.state||(r.state={}),r.context=A,r.__n=n,g=r.__d=!0,r.__h=[],r._sb=[]),E&&r.__s==null&&(r.__s=r.state),E&&d.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=Ce({},r.__s)),Ce(r.__s,d.getDerivedStateFromProps(C,r.__s))),m=r.props,$=r.state,r.__v=t,g)E&&d.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),E&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(E&&d.getDerivedStateFromProps==null&&C!==m&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(C,A),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(C,r.__s,A)===!1||t.__v===a.__v)){for(t.__v!==a.__v&&(r.props=C,r.state=r.__s,r.__d=!1),t.__e=a.__e,t.__k=a.__k,t.__k.some(function(v){v&&(v.__=t)}),B=0;B<r._sb.length;B++)r.__h.push(r._sb[B]);r._sb=[],r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(C,r.__s,A),E&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(m,$,y)})}if(r.context=A,r.props=C,r.__P=e,r.__e=!1,H=N.__r,K=0,E){for(r.state=r.__s,r.__d=!1,H&&H(t),h=r.render(r.props,r.state,r.context),q=0;q<r._sb.length;q++)r.__h.push(r._sb[q]);r._sb=[]}else do r.__d=!1,H&&H(t),h=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++K<25);r.state=r.__s,r.getChildContext!=null&&(n=Ce(Ce({},n),r.getChildContext())),E&&!g&&r.getSnapshotBeforeUpdate!=null&&(y=r.getSnapshotBeforeUpdate(m,$)),Zt(e,xt(f=h!=null&&h.type===rt&&h.key==null?h.props.children:h)?f:[f],t,a,n,s,o,i,c,u,l),r.base=t.__e,t.__u&=-161,r.__h.length&&i.push(r),_&&(r.__E=r.__=null)}catch(v){if(t.__v=null,u||o!=null){for(t.__u|=u?160:128;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,t.__e=c}else t.__e=a.__e,t.__k=a.__k;N.__e(v,t,a)}else o==null&&t.__v===a.__v?(t.__k=a.__k,t.__e=a.__e):t.__e=gn(a.__e,t,a,n,s,o,i,u,l);(h=N.diffed)&&h(t)}function ta(e,t,a){t.__d=void 0;for(var n=0;n<a.length;n++)Pt(a[n],a[++n],a[++n]);N.__c&&N.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){N.__e(o,s.__v)}})}function gn(e,t,a,n,s,o,i,c,u){var l,h,r,g,m,$,y,_=a.props,C=t.props,E=t.type;if(E==="svg"?s="http://www.w3.org/2000/svg":E==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((m=o[l])&&"setAttribute"in m==!!E&&(E?m.localName===E:m.nodeType===3)){e=m,o[l]=null;break}}if(e==null){if(E===null)return document.createTextNode(C);e=document.createElementNS(s,E,C.is&&C),c&&(N.__m&&N.__m(t,o),c=!1),o=null}if(E===null)_===C||c&&e.data===C||(e.data=C);else{if(o=o&&ot.call(e.childNodes),_=a.props||Ve,!c&&o!=null)for(_={},l=0;l<e.attributes.length;l++)_[(m=e.attributes[l]).name]=m.value;for(l in _)if(m=_[l],l!="children"){if(l=="dangerouslySetInnerHTML")r=m;else if(!(l in C)){if(l=="value"&&"defaultValue"in C||l=="checked"&&"defaultChecked"in C)continue;tt(e,l,null,m,s)}}for(l in C)m=C[l],l=="children"?g=m:l=="dangerouslySetInnerHTML"?h=m:l=="value"?$=m:l=="checked"?y=m:c&&typeof m!="function"||_[l]===m||tt(e,l,m,_[l],s);if(h)c||r&&(h.__html===r.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(r&&(e.innerHTML=""),Zt(e,xt(g)?g:[g],t,a,n,E==="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,i,o?o[0]:a.__k&&He(a,0),c,u),o!=null)for(l=o.length;l--;)Kt(o[l]);c||(l="value",E==="progress"&&$==null?e.removeAttribute("value"):$!==void 0&&($!==e[l]||E==="progress"&&!$||E==="option"&&$!==_[l])&&tt(e,l,$,_[l],s),l="checked",y!==void 0&&y!==e[l]&&tt(e,l,y,_[l],s))}return e}function Pt(e,t,a){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(s){N.__e(s,a)}}function aa(e,t,a){var n,s;if(N.unmount&&N.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Pt(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){N.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&aa(n[s],t,a||typeof e.type!="function");a||Kt(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function $n(e,t,a){return this.constructor(e,a)}function Se(e,t,a){var n,s,o,i;N.__&&N.__(e,t),s=(n=typeof a=="function")?null:a&&a.__k||t.__k,o=[],i=[],At(t,e=(!n&&a||t).__k=Mt(rt,null,[e]),s||Ve,Ve,t.namespaceURI,!n&&a?[a]:s?null:t.firstChild?ot.call(t.childNodes):null,o,!n&&a?a:s?s.__e:t.firstChild,n,i),ta(o,e,i)}ot=Yt.slice,N={__e:function(e,t,a,n){for(var s,o,i;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),i=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),i=s.__d),i)return s.__E=s}catch(c){e=c}throw e}},Gt=0,dn=function(e){return e!=null&&e.constructor==null},nt.prototype.setState=function(e,t){var a;a=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Ce({},this.state),typeof e=="function"&&(e=e(Ce({},a),this.props)),e&&Ce(a,e),e!=null&&this.__v&&(t&&this._sb.push(t),jt(this))},nt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),jt(this))},nt.prototype.render=rt,Ee=[],Jt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,It=function(e,t){return e.__v.__b-t.__v.__b},st.__r=0,St=0,kt=Qt(!1),Et=Qt(!0),pn=0;var je,j,Lt,na,ct=0,da=[],Q=N,sa=Q.__b,oa=Q.__r,ra=Q.diffed,ia=Q.__c,ca=Q.unmount,la=Q.__;function Tt(e,t){Q.__h&&Q.__h(j,e,ct||t),ct=0;var a=j.__H||(j.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function I(e){return ct=1,vn(ma,e)}function vn(e,t,a){var n=Tt(je++,2);if(n.t=e,!n.__c&&(n.__=[a?a(t):ma(void 0,t),function(c){var u=n.__N?n.__N[0]:n.__[0],l=n.t(u,c);u!==l&&(n.__N=[l,n.__[1]],n.__c.setState({}))}],n.__c=j,!j.u)){var s=function(c,u,l){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(g){return!!g.__c});if(h.every(function(g){return!g.__N}))return!o||o.call(this,c,u,l);var r=!1;return h.forEach(function(g){if(g.__N){var m=g.__[0];g.__=g.__N,g.__N=void 0,m!==g.__[0]&&(r=!0)}}),!(!r&&n.__c.props===c)&&(!o||o.call(this,c,u,l))};j.u=!0;var o=j.shouldComponentUpdate,i=j.componentWillUpdate;j.componentWillUpdate=function(c,u,l){if(this.__e){var h=o;o=void 0,s(c,u,l),o=h}i&&i.call(this,c,u,l)},j.shouldComponentUpdate=s}return n.__N||n.__}function R(e,t){var a=Tt(je++,3);!Q.__s&&pa(a.__H,t)&&(a.__=e,a.i=t,j.__H.__h.push(a))}function Y(e){return ct=5,lt(function(){return{current:e}},[])}function lt(e,t){var a=Tt(je++,7);return pa(a.__H,t)&&(a.__=e(),a.__H=t,a.__h=e),a.__}function _n(){for(var e;e=da.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(it),e.__H.__h.forEach(Ht),e.__H.__h=[]}catch(t){e.__H.__h=[],Q.__e(t,e.__v)}}Q.__b=function(e){j=null,sa&&sa(e)},Q.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),la&&la(e,t)},Q.__r=function(e){oa&&oa(e),je=0;var t=(j=e.__c).__H;t&&(Lt===j?(t.__h=[],j.__h=[],t.__.forEach(function(a){a.__N&&(a.__=a.__N),a.i=a.__N=void 0})):(t.__h.forEach(it),t.__h.forEach(Ht),t.__h=[],je=0)),Lt=j},Q.diffed=function(e){ra&&ra(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(da.push(t)!==1&&na===Q.requestAnimationFrame||((na=Q.requestAnimationFrame)||bn)(_n)),t.__H.__.forEach(function(a){a.i&&(a.__H=a.i),a.i=void 0})),Lt=j=null},Q.__c=function(e,t){t.some(function(a){try{a.__h.forEach(it),a.__h=a.__h.filter(function(n){return!n.__||Ht(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],Q.__e(n,a.__v)}}),ia&&ia(e,t)},Q.unmount=function(e){ca&&ca(e);var t,a=e.__c;a&&a.__H&&(a.__H.__.forEach(function(n){try{it(n)}catch(s){t=s}}),a.__H=void 0,t&&Q.__e(t,a.__v))};var ua=typeof requestAnimationFrame=="function";function bn(e){var t,a=function(){clearTimeout(n),ua&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);ua&&(t=requestAnimationFrame(a))}function it(e){var t=j,a=e.__c;typeof a=="function"&&(e.__c=void 0,a()),j=t}function Ht(e){var t=j;e.__c=e.__(),j=t}function pa(e,t){return!e||e.length!==t.length||t.some(function(a,n){return a!==e[n]})}function ma(e,t){return typeof t=="function"?t(e):t}var fa=function(e,t,a,n){var s;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],c=t[o]?(t[0]|=i?1:2,a[t[o++]]):t[++o];i===3?n[0]=c:i===4?n[1]=Object.assign(n[1]||{},c):i===5?(n[1]=n[1]||{})[t[++o]]=c:i===6?n[1][t[++o]]+=c+"":i?(s=e.apply(c,fa(e,c,a,["",null])),n.push(s),c[0]?t[0]|=2:(t[o-2]=0,t[o]=s)):n.push(c)}return n},ha=new Map;function ga(e){var t=ha.get(this);return t||(t=new Map,ha.set(this,t)),(t=fa(this,t.get(e)||(t.set(e,t=function(a){for(var n,s,o=1,i="",c="",u=[0],l=function(g){o===1&&(g||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,g,i):o===3&&(g||i)?(u.push(3,g,i),o=2):o===2&&i==="..."&&g?u.push(4,g,0):o===2&&i&&!g?u.push(5,0,!0,i):o>=5&&((i||!g&&o===5)&&(u.push(o,0,i,s),o=6),g&&(u.push(o,g,0,s),o=6)),i=""},h=0;h<a.length;h++){h&&(o===1&&l(),l(h));for(var r=0;r<a[h].length;r++)n=a[h][r],o===1?n==="<"?(l(),u=[u],o=3):i+=n:o===4?i==="--"&&n===">"?(o=1,i=""):i=n+i[0]:c?n===c?c="":i+=n:n==='"'||n==="'"?c=n:n===">"?(l(),o=1):o&&(n==="="?(o=5,s=i,i=""):n==="/"&&(o<5||a[h][r+1]===">")?(l(),o===3&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(l(),o=2):i+=n),o===3&&i==="!--"&&(o=4,u=u[0])}return l(),u}(e)),t),arguments,[])).length>1?t:t[0]}var $a={clock:{d:["M11.99,2C6.47,2 2,6.48 2,12s4.47,10 9.99,10C17.52,22 22,17.52 22,12S17.52,2 11.99,2zM12,20c-4.42,0 -8,-3.58 -8,-8s3.58,-8 8,-8 8,3.58 8,8 -3.58,8 -8,8zM12.5,7H11v6l5.25,3.15 0.75,-1.23 -4.5,-2.67z"],vb:"24"},chevron_right:{d:["M10,6L8.59,7.41 13.17,12l-4.58,4.59L10,18l6,-6z"],vb:"24"},remove:{d:["M19,13H5v-2h14v2z"],vb:"24"},calendar:{d:["M19,4h-1V2h-2v2H8V2H6v2H5c-1.11,0 -1.99,0.9 -1.99,2L3,20c0,1.1 0.89,2 2,2h14c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM9,14H7v-2h2v2zM13,14h-2v-2h2v2zM17,14h-2v-2h2v2zM9,18H7v-2h2v2zM13,18h-2v-2h2v2zM17,18h-2v-2h2v2z"],vb:"24"},lock:{d:["M18,8h-1V6c0,-2.76 -2.24,-5 -5,-5S7,3.24 7,6v2H6c-1.1,0 -2,0.9 -2,2v10c0,1.1 0.9,2 2,2h12c1.1,0 2,-0.9 2,-2V10c0,-1.1 -0.9,-2 -2,-2zM12,17c-1.1,0 -2,-0.9 -2,-2s0.9,-2 2,-2 2,0.9 2,2 -0.9,2 -2,2zM15.1,8H8.9V6c0,-1.71 1.39,-3.1 3.1,-3.1 1.71,0 3.1,1.39 3.1,3.1v2z"],vb:"24"},cook:{d:["M13.5,0.67s0.74,2.65 0.74,4.8c0,2.06 -1.35,3.73 -3.41,3.73 -2.07,0 -3.63,-1.67 -3.63,-3.73l0.03,-0.36C5.21,7.51 4,10.62 4,14c0,4.42 3.58,8 8,8s8,-3.58 8,-8C20,8.61 17.41,3.8 13.5,0.67zM11.71,19c-1.78,0 -3.22,-1.4 -3.22,-3.14 0,-1.62 1.05,-2.76 2.81,-3.12 1.77,-0.36 3.6,-1.21 4.62,-2.58 0.39,1.29 0.59,2.65 0.59,4.04 0,2.65 -2.15,4.8 -4.8,4.8z"],vb:"24"},mail:{d:["M20,4H4c-1.1,0 -1.99,0.9 -1.99,2L2,18c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM20,8l-8,5 -8,-5V6l8,5 8,-5v2z"],vb:"24"},search:{d:["M15.5,14h-0.79l-0.28,-0.27C15.41,12.59 16,11.11 16,9.5 16,5.91 13.09,3 9.5,3S3,5.91 3,9.5 5.91,16 9.5,16c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99L20.49,19l-4.99,-5zM9.5,14C7.01,14 5,11.99 5,9.5S7.01,5 9.5,5 14,7.01 14,9.5 11.99,14 9.5,14z"],vb:"24"},store:{d:["M20,4H4v2h16V4zM21,14v-2l-1,-5H4l-1,5v2h1v6h10v-6h4v6h2v-6H21zM12,18H6v-4h6V18z"],vb:"24"},bell:{d:["M12,22c1.1,0 2,-0.9 2,-2h-4c0,1.1 0.89,2 2,2zM18,16v-5c0,-3.07 -1.64,-5.64 -4.5,-6.32L13.5,4c0,-0.83 -0.67,-1.5 -1.5,-1.5s-1.5,0.67 -1.5,1.5v0.68C7.63,5.36 6,7.92 6,11v5l-2,2v1h16v-1l-2,-2z"],vb:"24"},share:{d:["M18,16.08c-0.76,0 -1.44,0.3 -1.96,0.77L8.91,12.7c0.05,-0.23 0.09,-0.46 0.09,-0.7s-0.04,-0.47 -0.09,-0.7l7.05,-4.11c0.54,0.5 1.25,0.81 2.04,0.81 1.66,0 3,-1.34 3,-3s-1.34,-3 -3,-3 -3,1.34 -3,3c0,0.24 0.04,0.47 0.09,0.7L8.04,9.81C7.5,9.31 6.79,9 6,9c-1.66,0 -3,1.34 -3,3s1.34,3 3,3c0.79,0 1.5,-0.31 2.04,-0.81l7.12,4.16c-0.05,0.21 -0.08,0.43 -0.08,0.65 0,1.61 1.31,2.92 2.92,2.92 1.61,0 2.92,-1.31 2.92,-2.92s-1.31,-2.92 -2.92,-2.92z"],vb:"24"},login:{d:["M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5,-5L11,7zM20,19h-8v2h8c1.1,0 2,-0.9 2,-2V5c0,-1.1 -0.9,-2 -2,-2h-8v2h8V19z"],vb:"24"},cart:{d:["M7,18c-1.1,0 -1.99,0.9 -1.99,2S5.9,22 7,22s2,-0.9 2,-2 -0.9,-2 -2,-2zM1,2v2h2l3.6,7.59 -1.35,2.45c-0.16,0.28 -0.25,0.61 -0.25,0.96 0,1.1 0.9,2 2,2h12v-2H7.42c-0.14,0 -0.25,-0.11 -0.25,-0.25l0.03,-0.12 0.9,-1.63h7.45c0.75,0 1.41,-0.41 1.75,-1.03l3.58,-6.49c0.08,-0.14 0.12,-0.31 0.12,-0.48 0,-0.55 -0.45,-1 -1,-1H5.21l-0.94,-2H1zM17,18c-1.1,0 -1.99,0.9 -1.99,2s0.89,2 1.99,2 2,-0.9 2,-2 -0.9,-2 -2,-2z"],vb:"24"},insights:{d:["M21,8c-1.45,0 -2.26,1.44 -1.93,2.51l-3.55,3.56c-0.3,-0.09 -0.74,-0.09 -1.04,0l-2.55,-2.55C12.27,10.45 11.46,9 10,9c-1.45,0 -2.27,1.44 -1.93,2.52l-4.56,4.55C2.44,15.74 1,16.55 1,18c0,1.1 0.9,2 2,2c1.45,0 2.26,-1.44 1.93,-2.51l4.55,-4.56c0.3,0.09 0.74,0.09 1.04,0l2.55,2.55C12.73,16.55 13.54,18 15,18c1.45,0 2.27,-1.44 1.93,-2.52l3.56,-3.55C21.56,12.26 23,11.45 23,10C23,8.9 22.1,8 21,8z"],vb:"24"},image:{d:["M21,19V5c0,-1.1 -0.9,-2 -2,-2H5c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2zM8.5,13.5l2.5,3.01L14.5,12l4.5,6H5l3.5,-4.5z"],vb:"24"},close:{d:["M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"],vb:"24"},people:{d:["M16,11c1.66,0 2.99,-1.34 2.99,-3S17.66,5 16,5c-1.66,0 -3,1.34 -3,3s1.34,3 3,3zM8,11c1.66,0 2.99,-1.34 2.99,-3S9.66,5 8,5C6.34,5 5,6.34 5,8s1.34,3 3,3zM8,13c-2.33,0 -7,1.17 -7,3.5V19h14v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5zM16,13c-0.29,0 -0.62,0.02 -0.97,0.05 1.16,0.84 1.97,1.97 1.97,3.45V19h6v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5z"],vb:"24"},add:{d:["M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],vb:"24"},arrow_back:{d:["M20,11H7.83l5.59,-5.59L12,4l-8,8 8,8 1.41,-1.41L7.83,13H20v-2z"],vb:"24"},camera:{d:["M12,12m-3.2,0a3.2,3.2 0,1 1,6.4 0a3.2,3.2 0,1 1,-6.4 0M9,2L7.17,4H4c-1.1,0 -2,0.9 -2,2v12c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2h-3.17L15,2H9zM12,17c-2.76,0 -5,-2.24 -5,-5s2.24,-5 5,-5 5,2.24 5,5 -2.24,5 -5,5z"],vb:"24"},delete:{d:["M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2V7H6v12zM19,4h-3.5l-1,-1h-5l-1,1H5v2h14V4z"],vb:"24"},recipe:{d:["M8.1,13.34l2.83,-2.83L3.91,3.5c-1.56,1.56 -1.56,4.09 0,5.66l4.19,4.18zM14.88,11.53c1.53,0.71 3.68,0.21 5.27,-1.38 1.91,-1.91 2.28,-4.65 0.81,-6.12 -1.46,-1.46 -4.2,-1.1 -6.12,0.81 -1.59,1.59 -2.09,3.74 -1.38,5.27L3.7,19.87l1.41,1.41L12,14.41l6.88,6.88 1.41,-1.41L13.41,13l1.47,-1.47z"],vb:"24"},check:{d:["M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41,-1.41z"],vb:"24"},barcode:{d:["M9.5,6.5v3h-3v-3H9.5M11,5H5v6h6V5L11,5zM9.5,14.5v3h-3v-3H9.5M11,13H5v6h6V13L11,13zM17.5,6.5v3h-3v-3H17.5M19,5h-6v6h6V5L19,5zM13,13h1.5v1.5H13V13zM14.5,14.5H16V16h-1.5V14.5zM16,13h1.5v1.5H16V13zM13,16h1.5v1.5H13V16zM14.5,17.5H16V19h-1.5V17.5zM16,16h1.5v1.5H16V16zM17.5,14.5H19V16h-1.5V14.5zM17.5,17.5H19V19h-1.5V17.5zM22,7h-2V4h-3V2h5V7zM22,22v-5h-2v3h-3v2H22zM2,22h5v-2H4v-3H2V22zM2,2v5h2V4h3V2H2z"],vb:"24"},swap:{d:["M6.99,11L3,15l3.99,4v-3H14v-2H6.99v-3zM21,9l-3.99,-4v3H10v2h7.01v3L21,9z"],vb:"24"},pantry:{d:["M20,2H4c-1.1,0 -2,0.9 -2,2v4c0,0.74 0.4,1.38 1,1.73V20c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2V9.73c0.6,-0.35 1,-0.99 1,-1.73V4c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM20,8H4V4h16v4zM9,12h6v2H9z"],vb:"24"},logout:{d:["M17,7l-1.41,1.41L18.17,11H8v2h10.17l-2.58,2.58L17,17l5,-5zM4,5h8V3H4c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h8v-2H4V5z"],vb:"24"},edit:{d:["M3,17.25V21h3.75L17.81,9.94l-3.75,-3.75L3,17.25zM20.71,7.04c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34c-0.39,-0.39 -1.02,-0.39 -1.41,0l-1.83,1.83 3.75,3.75 1.83,-1.83z"],vb:"24"},settings:{d:["M19.14,12.94c0.04,-0.3 0.06,-0.61 0.06,-0.94c0,-0.32 -0.02,-0.64 -0.07,-0.94l2.03,-1.58c0.18,-0.14 0.23,-0.41 0.12,-0.61l-1.92,-3.32c-0.12,-0.22 -0.37,-0.29 -0.59,-0.22l-2.39,0.96c-0.5,-0.38 -1.03,-0.7 -1.62,-0.94L14.4,2.81c-0.04,-0.24 -0.24,-0.41 -0.48,-0.41h-3.84c-0.24,0 -0.43,0.17 -0.47,0.41L9.25,5.35C8.66,5.59 8.12,5.92 7.63,6.29L5.24,5.33c-0.22,-0.08 -0.47,0 -0.59,0.22L2.74,8.87C2.62,9.08 2.66,9.34 2.86,9.48l2.03,1.58C4.84,11.36 4.8,11.69 4.8,12s0.02,0.64 0.07,0.94l-2.03,1.58c-0.18,0.14 -0.23,0.41 -0.12,0.61l1.92,3.32c0.12,0.22 0.37,0.29 0.59,0.22l2.39,-0.96c0.5,0.38 1.03,0.7 1.62,0.94l0.36,2.54c0.05,0.24 0.24,0.41 0.48,0.41h3.84c0.24,0 0.44,-0.17 0.47,-0.41l0.36,-2.54c0.59,-0.24 1.13,-0.56 1.62,-0.94l2.39,0.96c0.22,0.08 0.47,0 0.59,-0.22l1.92,-3.32c0.12,-0.22 0.07,-0.47 -0.12,-0.61L19.14,12.94zM12,15.6c-1.98,0 -3.6,-1.62 -3.6,-3.6s1.62,-3.6 3.6,-3.6s3.6,1.62 3.6,3.6S13.98,15.6 12,15.6z"],vb:"24"},copy:{d:["M16,1H4c-1.1,0 -2,0.9 -2,2v14h2V3h12V1zM19,5H8c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h11c1.1,0 2,-0.9 2,-2V7c0,-1.1 -0.9,-2 -2,-2zM19,21H8V7h11v14z"],vb:"24"},undo:{d:["M12.5,8c-2.65,0 -5.05,0.99 -6.9,2.6L2,7v9h9l-3.62,-3.62c1.39,-1.16 3.16,-1.88 5.12,-1.88 3.54,0 6.55,2.31 7.6,5.5l2.37,-0.78C21.08,11.03 17.15,8 12.5,8z"],vb:"24"},chevron_left:{d:["M15.41,7.41L14,6l-6,6 6,6 1.41,-1.41L10.83,12z"],vb:"24"},home:{d:["M10,20v-6h4v6h5v-8h3L12,3 2,12h3v8z"],vb:"24"}};var yn="https://parseapi.back4app.com/",wn="peyCaKkG6IbflEpErk7t1iEH1fngfxgwUwv17qyI",Cn="ejB6EBANvzAfnp5Mh6QOIkPtliBJBC1AVTspICfB",zt="stockcasa.session",ut="stockcasa.houseId",S={current(){try{return JSON.parse(localStorage.getItem(zt))||null}catch{return null}},save(e){localStorage.setItem(zt,JSON.stringify(e))},clear(){localStorage.removeItem(zt),localStorage.removeItem(ut)},token(){return this.current()?.sessionToken||null},email(){return this.current()?.email||""},requireUserId(){let e=this.current()?.userId;if(!e)throw Z.sessionExpired();return e},houseId(){return localStorage.getItem(ut)},requireHouseId(){let e=this.houseId();if(!e)throw new We;return e},saveHouseId(e){e?localStorage.setItem(ut,e):localStorage.removeItem(ut)}},Z=class e extends Error{constructor(t,a){super(a),this.code=t}get isSessionExpired(){return this.code===209}static fromServer(t,a){let s={100:"No se ha podido conectar con el servidor",101:"No se ha encontrado el elemento. Actualiza la lista",125:"El correo no es v\xE1lido",202:"Ya existe una cuenta con ese correo",203:"Ya existe una cuenta con ese correo",205:"No hay ninguna cuenta con ese correo",209:"Tu sesi\xF3n ha caducado. Vuelve a iniciar sesi\xF3n"}[t];return!s&&t===119&&(s=a?.includes("addField")?"Back4App no deja crear una columna nueva. A\xF1\xE1dela en el panel de Back4App":"Back4App no permite esta operaci\xF3n. Revisa los permisos de la clase"),new e(t,s||a||"Error inesperado del servidor")}static sessionExpired(){return e.fromServer(209)}},We=class extends Error{constructor(){super("Todav\xEDa no tienes ninguna casa"),this.noHouse=!0}},Qe=class extends Error{};function O(e,t){if(!e)throw new Qe(t)}async function Te(e,t,{body:a,query:n,authenticated:s=!0,raw:o}={}){let i=new URL(t,yn);n&&Object.entries(n).forEach(([m,$])=>i.searchParams.set(m,$));let c={"X-Parse-Application-Id":wn,"X-Parse-REST-API-Key":Cn,"X-Parse-Revocable-Session":"1"},u=S.token();s&&u&&(c["X-Parse-Session-Token"]=u);let l;o?(l=o.data,c["Content-Type"]=o.contentType):a!==void 0&&(l=JSON.stringify(a),c["Content-Type"]="application/json");let h;try{h=await fetch(i,{method:e,headers:c,body:l})}catch{throw new Z(100,"Sin conexi\xF3n. Comprueba tu acceso a internet")}let r={},g=await h.text();try{r=g?JSON.parse(g):{}}catch{r={error:g}}if(!h.ok)throw Z.fromServer(r.code??-1,r.error||`Error HTTP ${h.status}`);return r}var k={get:(e,t)=>Te("GET",e,{query:t}),post:(e,t={},a={})=>Te("POST",e,{body:t,...a}),put:(e,t)=>Te("PUT",e,{body:t}),async delete(e){try{await Te("DELETE",e)}catch(t){if(t.code!==101)throw t}},async query(e,t,{limit:a=1e3,order:n}={}){let s={where:JSON.stringify(t),limit:String(a)};return n&&(s.order=n),(await Te("GET",`classes/${e}`,{query:s})).results||[]},uploadFile(e,t,a){return Te("POST",`files/${e}`,{raw:{data:t,contentType:a}})}},F={userPointer:e=>({__type:"Pointer",className:"_User",objectId:e}),publicAcl:()=>({"*":{read:!0,write:!0}}),fileRef:(e,t)=>({__type:"File",name:e,url:t}),date:e=>({__type:"Date",iso:`${e}T12:00:00.000Z`}),instant:e=>({__type:"Date",iso:e.toISOString()}),readDate:e=>e?.iso&&e.iso.length>=10?e.iso.slice(0,10):null,addUnique:(...e)=>({__op:"AddUnique",objects:e}),remove:(...e)=>({__op:"Remove",objects:e})};function de(e,t=0){let a=typeof e=="number"?e:parseFloat(e);return Number.isFinite(a)?a:t}function ze(e){return typeof e=="string"&&e.trim()&&e!=="null"?e:null}var pe="uds";var pt="\u{1F372}",va=["\u{1F372}","\u{1F35D}","\u{1F957}","\u{1F373}","\u{1F958}","\u{1F35B}","\u{1F32E}","\u{1F355}","\u{1F96A}","\u{1F370}","\u{1F95E}","\u{1F35C}"],qe=["#2D8CF0","#5B6CF0","#8E5CF0","#E0569B","#EF5A5A","#F08A2D","#1FA971","#14A3B8"];var Ne=[{key:"BREAKFAST",label:"Desayuno",emoji:"\u{1F373}"},{key:"LUNCH",label:"Comida",emoji:"\u{1F37D}\uFE0F"},{key:"DINNER",label:"Cena",emoji:"\u{1F319}"}],te=e=>Math.round(e*1e3)/1e3,z={isLow:e=>e.quantity<=e.criticalLimit,amountToBuy:e=>te(Math.max(e.criticalLimit-e.quantity+1,1)),level:e=>Math.min(Math.max(e.quantity/Math.max(e.criticalLimit*2,1),0),1),image:e=>e.photo?.url||e.imageUrl||null,daysUntilExpiry:e=>e.expiresAt?mt(ae(),e.expiresAt):null,expiryStatus(e){let t=z.daysUntilExpiry(e);return t===null?"NONE":t<0?"EXPIRED":t<=3?"SOON":"OK"},needsExpiryAttention:e=>["EXPIRED","SOON"].includes(z.expiryStatus(e)),withQuantity:(e,t)=>({...e,quantity:te(Math.max(t,0))})};function _a(e){let t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${n}`}function Ge(e){let[t,a,n]=e.split("-").map(Number);return new Date(t,a-1,n)}var ae=()=>_a(new Date);function X(e,t){let a=Ge(e);return a.setDate(a.getDate()+t),_a(a)}function mt(e,t){return Math.round((e&&t?Ge(t)-Ge(e):0)/864e5)}var Me=e=>(Ge(e).getDay()+6)%7+1,Je=e=>X(e,1-Me(e)),In=["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"],kn=["Lun","Mar","Mi\xE9","Jue","Vie","S\xE1b","Dom"],En=["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],xe=e=>In[e-1],ba=e=>kn[e-1],Ye=e=>e&&e[0].toUpperCase()+e.slice(1);function he(e){let t=Ge(e);return`${t.getDate()} ${En[t.getMonth()]}`}function dt(e,t=ae()){return X(t,(e-Me(t)+7)%7)}function Ke(e){if(!(e>=1&&e<=7))return"Sin d\xEDa de compra fijo \xB7 toca para elegir uno";let t=mt(ae(),dt(e));return t===0?"\xA1Hoy es d\xEDa de compra! \u{1F6D2}":t===1?`Ma\xF1ana (${xe(e)}) toca compra`:`Pr\xF3xima compra: ${xe(e)} ${he(dt(e))} \xB7 dentro de ${t} d\xEDas`}var Sn=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}),xn=new Intl.NumberFormat("es-ES",{maximumFractionDigits:2,useGrouping:!1}),ne=e=>Sn.format(e||0),D=e=>xn.format(e||0);function oe(e){let t=parseFloat(String(e??"").trim().replace(",","."));return Number.isFinite(t)&&t>=0?t:null}var Xe=e=>(e||"").split("@")[0]||e,Mn=[[["fruta","verdura"],"\u{1F955}"],[["leche","l\xE1cteo","lacteo","yogur","huevo"],"\u{1F95B}"],[["queso","charcut"],"\u{1F9C0}"],[["carne","pollo"],"\u{1F969}"],[["pescado","marisco"],"\u{1F41F}"],[["pan","boller\xEDa","bolleria","pastel"],"\u{1F956}"],[["agua","refresco","bebida","zumo"],"\u{1F964}"],[["bodega","vino","cerveza"],"\u{1F377}"],[["caf\xE9","cafe","cacao","infusion","infusi\xF3n"],"\u2615"],[["aceite","especia","salsa"],"\u{1FAD2}"],[["arroz","legumbre","pasta"],"\u{1F35D}"],[["az\xFAcar","azucar","chocolate","caramelo"],"\u{1F36B}"],[["cereal","galleta"],"\u{1F963}"],[["conserva","caldo","crema","despensa"],"\u{1F96B}"],[["aperitivo","snack"],"\u{1F968}"],[["postre"],"\u{1F36E}"],[["pizza","preparado"],"\u{1F355}"],[["congelado","helado"],"\u{1F9CA}"],[["limpieza","hogar"],"\u{1F9FD}"],[["higiene","cuidado","ba\xF1o","maquillaje","parafarmacia"],"\u{1F9F4}"],[["beb\xE9","bebe"],"\u{1F37C}"],[["mascota"],"\u{1F43E}"],[["alimentaci\xF3n","alimentacion","comida"],"\u{1F34E}"]];function ie(e){let t=(e||"").trim().toLowerCase();if(!t)return"\u{1F4E6}";let a=Mn.find(([n])=>n.some(s=>t.includes(s)));return a?a[1]:"\u{1F4E6}"}var re=e=>e?.nickname?.trim()||Xe(e?.email||"")||"?",ya=e=>re(e).charAt(0).toUpperCase()||"?";var p=ga.bind(Mt),wa="stockcasa.settings",Ca={theme:"blue",sounds:!0,vibration:!0},gt=[{key:"blue",label:"Azul",color:"#2D8CF0",soft:"#E6F2FF"},{key:"pink",label:"Rosa",color:"#E8589B",soft:"#FDE7F1"},{key:"red",label:"Rojo",color:"#E5484D",soft:"#FDE8E8"},{key:"green",label:"Verde",color:"#22A06B",soft:"#E2F6EC"}],Pe={get(){try{return{...Ca,...JSON.parse(localStorage.getItem(wa))}}catch{return{...Ca}}},set(e){let t={...Pe.get(),...e};try{localStorage.setItem(wa,JSON.stringify(t))}catch{}return Nt(t.theme),t}};function Nt(e){let t=gt.find(a=>a.key===e)||gt[0];document.documentElement.dataset.theme=t.key,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t.soft)}var Sa={tap:.3,pop:.6,up:.45,down:.45,check:.55,swipe:.5,success:.6,error:.5},An={tap:8,pop:15,up:6,down:6,check:[10,40,18],swipe:15,success:[12,50,25],error:[30,60,30]},ht=null,xa={};function Ma(){if(!ht){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;ht=new e,Object.keys(Sa).forEach(async t=>{try{let a=await(await fetch(`sounds/sfx_${t}.wav`)).arrayBuffer();xa[t]=await ht.decodeAudioData(a)}catch{}})}return ht}document.addEventListener("pointerdown",()=>Ma()?.resume?.(),{capture:!0});function x(e){let{sounds:t,vibration:a}=Pe.get();if(t){let n=Ma(),s=xa[e];if(n&&s){let o=n.createBufferSource(),i=n.createGain();i.gain.value=Sa[e]??.5,o.buffer=s,o.connect(i).connect(n.destination),o.start()}}a&&navigator.vibrate&&navigator.vibrate(An[e]??10)}function w({name:e,size:t=22,class:a=""}){let n=$a[e];return n?p`<svg class=${`icon ${a}`} width=${t} height=${t} viewBox=${`0 0 ${n.vb} ${n.vb}`} aria-hidden="true">
    ${n.d.map(s=>p`<path d=${s} fill="currentColor" />`)}
  </svg>`:null}function De({profile:e,size:t=40}){let a=`width:${t}px;height:${t}px;font-size:${Math.round(t*.42)}px;background:${e?.avatarColor||"#2D8CF0"}`;return p`<span class="avatar" style=${a} title=${re(e)}>
    ${e?.avatar?.url?p`<img src=${e.avatar.url} alt="" loading="lazy" />`:ya(e)}
  </span>`}function Ie({url:e,emoji:t,size:a=52}){let[n,s]=I(!1);return p`<span class="thumb" style=${`width:${a}px;height:${a}px;font-size:${Math.round(a*.5)}px`}>
    ${e&&!n?p`<img src=${e} alt="" loading="lazy" onError=${()=>s(!0)} />`:t}
  </span>`}var Ae=null,Ia=null;function P(e,t){Ae||(Ae=document.createElement("div"),Ae.className="toast-host",document.body.appendChild(Ae)),clearTimeout(Ia),Se(p`<div class="toast" key=${Date.now()}>
    <span>${e}</span>
    ${t&&p`<button class="toast-action" onClick=${()=>{Se(null,Ae),t.run()}}>${t.label}</button>`}
  </div>`,Ae),Ia=setTimeout(()=>Se(null,Ae),t?4500:2600)}var Aa=null;function Pa(e){Aa=e}function ee(e){if((e?.noHouse||e instanceof Z&&e.isSessionExpired)&&(Aa?.(e),e.noHouse))return;x("error");let t=e instanceof Z||e instanceof Qe;t||console.error(e),P(t?e.message:"Ha ocurrido un error inesperado. Int\xE9ntalo de nuevo")}async function M(e,{loading:t=!0,onError:a=ee}={}){t&&ka.show();try{return await e()}catch(n){a(n);return}finally{t&&ka.hide()}}var ka={count:0,el:null,show(){this.count++,this.el||(this.el=document.createElement("div"),this.el.className="loading",this.el.innerHTML='<div class="spinner"></div>',document.body.appendChild(this.el)),clearTimeout(this.timer),this.timer=setTimeout(()=>this.el.classList.add("visible"),180)},hide(){this.count=Math.max(0,this.count-1),this.count===0&&this.el&&(clearTimeout(this.timer),this.el.classList.remove("visible"))}},ft=null,Be=[];function La(){ft||(ft=document.createElement("div"),document.body.appendChild(ft)),Se(p`${Be.map(e=>p`<${Pn} key=${e.id} layer=${e} />`)}`,ft),document.body.classList.toggle("has-layer",Be.length>0)}function Pn({layer:e}){let[t,a]=I(!1);e.setClosing=a;let n=e.component;return p`<div class=${`layer ${e.kind} ${t?"closing":""}`}>
    <div class="scrim" onClick=${()=>e.dismissible&&Ea(e)}></div>
    <div class="panel" role="dialog" aria-modal="true">
      ${e.kind==="sheet"&&p`<div class="handle"></div>`}
      <${n} ...${e.props} close=${s=>Ea(e,s)} />
    </div>
  </div>`}var Ln=1;function $t(e,t,a={},n=!0){return new Promise(s=>{let o={id:Ln++,kind:e,component:t,props:a,dismissible:n,resolve:s};Be.push(o),La()})}function Ea(e,t){Be.includes(e)&&(e.setClosing?.(!0),setTimeout(()=>{let a=Be.indexOf(e);a>=0&&Be.splice(a,1),La(),e.resolve(t)},220))}var se=(e,t)=>$t("sheet",e,t);function Hn({title:e,message:t,confirm:a="Aceptar",cancel:n="Cancelar",danger:s,close:o}){return p`<div class="dialog-body">
    <h2>${e}</h2>
    ${t&&p`<p class="muted pre">${t}</p>`}
    <div class="dialog-actions">
      ${n&&p`<button class="btn text" onClick=${()=>o(!1)}>${n}</button>`}
      <button class=${`btn ${s?"danger":"primary"}`} onClick=${()=>o(!0)}>${a}</button>
    </div>
  </div>`}var fe=e=>$t("dialog",Hn,e);function Tn({title:e,message:t,label:a,value:n="",type:s="text",inputMode:o,confirm:i="Guardar",suffix:c,maxLength:u,close:l}){let[h,r]=I(String(n)),g=Y();return R(()=>{setTimeout(()=>{g.current?.focus(),g.current?.select()},250)},[]),p`<form class="dialog-body" onSubmit=${$=>{$.preventDefault(),l(h)}}>
    <h2>${e}</h2>
    ${t&&p`<p class="muted">${t}</p>`}
    <label class="field">
      <span>${a}</span>
      <div class="field-row">
        <input ref=${g} type=${s} inputmode=${o} value=${h} maxlength=${u}
          onInput=${$=>r($.target.value)} />
        ${c&&p`<span class="suffix">${c}</span>`}
      </div>
    </label>
    <div class="dialog-actions">
      <button type="button" class="btn text" onClick=${()=>l(null)}>Cancelar</button>
      <button type="submit" class="btn primary">${i}</button>
    </div>
  </form>`}var G=e=>$t("dialog",Tn,e);function zn({title:e,options:t,close:a}){return p`<div class="dialog-body">
    <h2>${e}</h2>
    <div class="choices">
      ${t.map((n,s)=>p`<button class=${`choice ${n.danger?"danger-text":""}`} onClick=${()=>a(s)}>
        ${n.label}
      </button>`)}
    </div>
    <div class="dialog-actions"><button class="btn text" onClick=${()=>a(null)}>Cancelar</button></div>
  </div>`}var ge=(e,t)=>$t("dialog",zn,{title:e,options:t});function Ue(){let e=document.createElement("canvas");e.className="confetti",document.body.appendChild(e);let t=e.getContext("2d"),a=window.devicePixelRatio||1;e.width=innerWidth*a,e.height=innerHeight*a,t.scale(a,a);let n=[getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#2D8CF0","#7CC0FF","#FFC94D","#FF7A90","#38D39F"],s=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.35,vx:(Math.random()-.5)*13,vy:-Math.random()*14-4,size:5+Math.random()*6,rotation:Math.random()*Math.PI,spin:(Math.random()-.5)*.3,color:n[Math.floor(Math.random()*n.length)]})),o=performance.now();(function i(c){let u=c-o;t.clearRect(0,0,innerWidth,innerHeight),s.forEach(l=>{l.vy+=.35,l.vx*=.99,l.x+=l.vx,l.y+=l.vy,l.rotation+=l.spin,t.save(),t.globalAlpha=Math.max(0,1-u/2600),t.translate(l.x,l.y),t.rotate(l.rotation),t.fillStyle=l.color,t.fillRect(-l.size/2,-l.size/3,l.size,l.size*.66),t.restore()}),u<2600?requestAnimationFrame(i):e.remove()})(o)}function Le(e){e?.animate?.([{transform:"scale(1)"},{transform:"scale(1.25)"},{transform:"scale(1)"}],{duration:320,easing:"cubic-bezier(.3,1.6,.5,1)"})}function Ha(e){e?.animate?.([0,-10,10,-7,7,-3,0].map(t=>({transform:`translateX(${t}px)`})),{duration:420})}async function vt(e,t=1080){let n=await createImageBitmap(e,{imageOrientation:"from-image"}).catch(()=>null)||await new Promise((u,l)=>{let h=new Image;h.onload=()=>u(h),h.onerror=l,h.src=URL.createObjectURL(e)}),s=n.width,o=n.height,i=Math.min(1,t/Math.max(s,o)),c=document.createElement("canvas");return c.width=Math.round(s*i),c.height=Math.round(o*i),c.getContext("2d").drawImage(n,0,0,c.width,c.height),new Promise(u=>c.toBlob(u,"image/jpeg",.82))}var qt=new Set,V={emit:e=>qt.forEach(t=>t(e)),on(e){return qt.add(e),()=>qt.delete(e)}};function $e(e){let t=Y(e);t.current=e,R(()=>V.on(a=>t.current(a)),[])}function Ot(){let e=Promise.resolve();return t=>{let a=e.then(t,t);return e=a.catch(()=>{}),a}}var Bt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,ye=6;function Ta(e,t){return{userId:e.objectId,email:e.email||t,sessionToken:e.sessionToken}}var we={isLoggedIn:()=>!!S.current(),async login(e,t){e=e.trim(),O(Bt.test(e),"Introduce un correo v\xE1lido"),O(t.length>=ye,`La contrase\xF1a debe tener al menos ${ye} caracteres`);let a;try{a=await k.post("login",{username:e,password:t},{authenticated:!1})}catch(n){throw n.code===101?new Z(101,"Correo o contrase\xF1a incorrectos"):n}S.save(Ta(a,e))},async register(e,t,a,n){e=e.trim(),t=t.trim(),O(e,"Escribe c\xF3mo quieres que te llamen"),O(e.length<=24,`El apodo no puede superar ${24} caracteres`),O(Bt.test(t),"Introduce un correo v\xE1lido"),O(a.length>=ye,`La contrase\xF1a debe tener al menos ${ye} caracteres`),O(a===n,"Las contrase\xF1as no coinciden");let s=await k.post("users",{username:t,email:t,password:a,nickname:e},{authenticated:!1});S.save(Ta(s,t))},async resetPassword(e){e=e.trim(),O(Bt.test(e),"Introduce un correo v\xE1lido"),await k.post("requestPasswordReset",{email:e},{authenticated:!1})},async logout(){try{await k.post("logout")}catch{}S.clear(),le.clearCache()}};function za(e){return{id:e.objectId,email:e.email||e.username||"",nickname:ze(e.nickname)||"",avatar:e.avatar?.url?{name:e.avatar.name,url:e.avatar.url}:null,avatarColor:typeof e.avatarColor=="string"&&e.avatarColor.startsWith("#")?e.avatarColor:qe[0]}}var _e=new Map,le={async me(e=!1){let t=S.requireUserId();if(!e&&_e.has(t))return _e.get(t);let a=za(await k.get("users/me"));return _e.set(a.id,a),a},async many(e,t=!1){let a=t?e:e.filter(n=>!_e.has(n));if(a.length)try{((await k.get("users",{where:JSON.stringify({objectId:{$in:a}}),limit:String(a.length)})).results||[]).map(za).forEach(s=>_e.set(s.id,s))}catch{}return Object.fromEntries(e.filter(n=>_e.has(n)).map(n=>[n,_e.get(n)]))},async save({nickname:e,avatarColor:t,photo:a}){e=e.trim(),O(e.length<=24,`El apodo no puede superar ${24} caracteres`);let n=await le.me(),s=n.avatar;a===null?s=null:a instanceof Blob&&(s=await Va(a)),await k.put(`users/${n.id}`,{nickname:e,avatarColor:t,avatar:s?F.fileRef(s.name,s.url):null});let o={...n,nickname:e,avatarColor:t,avatar:s};return _e.set(o.id,o),o},clearCache:()=>_e.clear()};async function Va(e){let t=await k.uploadFile("image.jpg",e,"image/jpeg");return{name:t.name,url:t.url}}var qa="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function Na(e){return{id:e.objectId,name:e.name||"",inviteCode:e.inviteCode||"",ownerId:e.ownerId||"",memberIds:e.members||[],memberEmails:e.memberEmails||[],shoppingDay:de(e.shoppingDay,0)}}var qn=Ot(),U={async mine(){return(await k.query("House",{members:S.requireUserId()})).map(Na).sort((t,a)=>t.name.localeCompare(a.name,"es"))},current(){return qn(async()=>{let e=await U.mine(),t=e.find(a=>a.id===S.houseId())||e[0];if(!t)throw S.saveHouseId(null),new We;return S.saveHouseId(t.id),t})},switchTo(e){S.saveHouseId(e.id)},async create(e){e=e.trim(),O(e,"Escribe un nombre para la casa");let t=S.requireUserId(),a=await Nn(),n=await k.post("classes/House",{name:e,inviteCode:a,ownerId:t,members:[t],memberEmails:[S.email()],shoppingDay:0,ACL:F.publicAcl()});return S.saveHouseId(n.objectId),{id:n.objectId,name:e,inviteCode:a}},async join(e){e=e.trim().toUpperCase(),O(e.length===6,`El c\xF3digo tiene ${6} caracteres`);let[t]=await k.query("House",{inviteCode:e},{limit:1});if(!t)throw new Z(101,"No existe ninguna casa con ese c\xF3digo");let a=Na(t),n=S.requireUserId();return a.memberIds.includes(n)||await k.put(`classes/House/${a.id}`,{members:F.addUnique(n),memberEmails:F.addUnique(S.email())}),S.saveHouseId(a.id),a},async rename(e,t){t=t.trim(),O(t,"Escribe un nombre para la casa"),await k.put(`classes/House/${e.id}`,{name:t})},async setShoppingDay(e,t){return O(t===0||t>=1&&t<=7,"D\xEDa no v\xE1lido"),await k.put(`classes/House/${e.id}`,{shoppingDay:t}),{...e,shoppingDay:t}},async leave(e){if(e.memberIds.length<=1){let[t,a]=await Promise.all([k.query("ShoppingItem",{houseId:e.id}),k.query("Product",{houseId:e.id})]);for(let n of t)await k.delete(`classes/ShoppingItem/${n.objectId}`);for(let n of a)await k.delete(`classes/Product/${n.objectId}`);await k.delete(`classes/House/${e.id}`)}else await k.put(`classes/House/${e.id}`,{members:F.remove(S.requireUserId()),memberEmails:F.remove(S.email())});S.houseId()===e.id&&S.saveHouseId(null)}};async function Nn(){for(let e=0;e<5;e++){let t=Array.from({length:6},()=>qa[Math.floor(Math.random()*qa.length)]).join("");if(!(await k.query("House",{inviteCode:t},{limit:1})).length)return t}throw new Z(-1,"No se ha podido generar un c\xF3digo de invitaci\xF3n. Int\xE9ntalo de nuevo")}function Rt(e){return{id:e.objectId,name:e.name||"",category:e.category||"",quantity:de(e.quantity),criticalLimit:de(e.criticalLimit),unit:e.unit||pe,location:e.location||"",notes:e.notes||"",expiresAt:F.readDate(e.expiresAt),photo:e.photo?.url?{name:e.photo.name,url:e.photo.url}:null,imageUrl:ze(e.imageUrl),price:e.price===null||e.price===void 0?null:de(e.price,null),mercadonaId:ze(e.mercadonaId),updatedBy:e.updatedBy||""}}function Ze(e){return{name:e.name,category:e.category,quantity:e.quantity,criticalLimit:e.criticalLimit,unit:e.unit,location:e.location,notes:e.notes,updatedBy:e.updatedBy,expiresAt:e.expiresAt?F.date(e.expiresAt):null,photo:e.photo?F.fileRef(e.photo.name,e.photo.url):null,imageUrl:e.imageUrl||null,mercadonaId:e.mercadonaId||null,price:e.price??null}}var _t=Ot(),Ba=60,ue={async all(){return(await k.query("Product",{houseId:S.requireHouseId()})).map(Rt).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e,t){O(e.name.trim(),"El nombre es obligatorio"),O(e.name.trim().length<=Ba,`El nombre no puede superar ${Ba} caracteres`),O(e.quantity>=0&&e.criticalLimit>=0,"Las cantidades no pueden ser negativas");let a=e.photo;t===null?a=null:t instanceof Blob&&(a=await Va(t));let n={...e,name:e.name.trim(),category:e.category.trim(),unit:e.unit.trim()||pe,location:e.location.trim(),notes:e.notes.trim(),photo:a,updatedBy:S.email()};return _t(async()=>{let s=n;if(n.id)await k.put(`classes/Product/${n.id}`,Ze(n));else{let o=await k.post("classes/Product",{...Ze(n),houseId:S.requireHouseId(),owner:F.userPointer(S.requireUserId()),ACL:F.publicAcl()});s={...n,id:o.objectId}}return await W.syncProduct(s),s})},async updateQuantity(e,t){let a={...e,updatedBy:S.email()};await _t(async()=>{await k.put(`classes/Product/${a.id}`,Ze(a)),await W.syncProduct(a)}),a.quantity<t&&Da(a,t-a.quantity)},async consume(e,t){if(t<=0)return e;let a={...z.withQuantity(e,e.quantity-t),updatedBy:S.email()};return await _t(async()=>{await k.put(`classes/Product/${a.id}`,Ze(a)),await W.syncProduct(a)}),Da(a,e.quantity-a.quantity),a},async remove(e){await _t(async()=>{await k.delete(`classes/Product/${e.id}`),await W.removeForProduct(e.id)})}};function Da(e,t){!e.id||t<=0||k.post("classes/StockMovement",{houseId:S.requireHouseId(),productId:e.id,amount:te(t),ACL:F.publicAcl()}).catch(()=>{})}function Bn(e){return{id:e.objectId,productId:e.productId||"",name:e.name||"",quantity:de(e.quantity,1),unit:e.unit||pe,category:e.category||"",photoUrl:ze(e.photoUrl),checked:!!e.checked,dismissed:!!e.dismissed,manual:!!e.manual,addedBy:ze(e.addedBy)||"",price:e.price===null||e.price===void 0?null:de(e.price,null)}}function be(e){return{productId:e.productId,name:e.name,quantity:e.quantity,unit:e.unit,category:e.category,photoUrl:e.photoUrl||null,checked:e.checked,dismissed:e.dismissed,manual:e.manual,addedBy:e.addedBy,price:e.price??null}}var Fe=e=>e.price===null||e.price===void 0?null:e.price*e.quantity;function ja(e){return{productId:e.id,name:e.name,quantity:z.amountToBuy(e),unit:e.unit,category:e.category,photoUrl:z.image(e),checked:!1,dismissed:!1,manual:!1,addedBy:"",price:e.price}}function Wa(e,t){return{...e,name:t.name,quantity:e.manual?e.quantity:z.amountToBuy(t),unit:t.unit,category:t.category,photoUrl:z.image(t),price:t.price}}var Dn=(e,t)=>JSON.stringify(be(e))===JSON.stringify(be(t)),ve=Ot(),Re=async e=>(await k.query("ShoppingItem",e)).map(Bn).sort((t,a)=>t.name.localeCompare(a.name,"es"));async function bt(e,t){await k.post("classes/ShoppingItem",{...be(e),houseId:t,ACL:F.publicAcl()})}async function Ua(e,t,a){if(!t)z.isLow(e)&&await bt(ja(e),a);else if(!z.isLow(e)&&(!t.manual||t.dismissed))await k.delete(`classes/ShoppingItem/${t.id}`);else if(!t.checked&&!t.dismissed){let n=Wa(t,e);Dn(n,t)||await k.put(`classes/ShoppingItem/${t.id}`,be(n))}}function Dt(e){O(e>0&&Number.isFinite(e),"La cantidad tiene que ser mayor que 0")}var W={async refresh(){let e=S.requireHouseId();return await ve(async()=>{let t=(await k.query("Product",{houseId:e})).map(Rt),a=new Set(t.map(s=>s.id)),n=new Map;(await Re({houseId:e})).filter(s=>s.productId).forEach(s=>{n.has(s.productId)||n.set(s.productId,[]),n.get(s.productId).push(s)});for(let[s,o]of n){let i=a.has(s)?o.slice(1):o;for(let c of i)await k.delete(`classes/ShoppingItem/${c.id}`)}for(let s of t)await Ua(s,n.get(s.id)?.[0],e)}),(await Re({houseId:e})).filter(t=>!t.dismissed)},syncProduct(e){let t=S.requireHouseId();return ve(async()=>{let a=await Re({houseId:t,productId:e.id});for(let n of a.slice(1))await k.delete(`classes/ShoppingItem/${n.id}`);await Ua(e,a[0],t)})},removeForProduct(e){let t=S.requireHouseId();return ve(async()=>{for(let a of await Re({houseId:t,productId:e}))await k.delete(`classes/ShoppingItem/${a.id}`)})},addProduct(e,t){Dt(t);let a=S.requireHouseId();return ve(async()=>{let[n]=await Re({houseId:a,productId:e.id}),s={...Wa(n||ja(e),e),quantity:te(t),manual:!0,dismissed:!1,addedBy:S.email()};n?await k.put(`classes/ShoppingItem/${n.id}`,be(s)):await bt(s,a)})},addFreeItem(e,t,a){e=e.trim(),O(e,"Escribe qu\xE9 quieres comprar"),Dt(t);let n={productId:"",name:e,quantity:te(t),unit:a.trim()||pe,category:"",photoUrl:null,checked:!1,dismissed:!1,manual:!0,addedBy:S.email(),price:null},s=S.requireHouseId();return ve(()=>bt(n,s))},changeQuantity(e,t){return Dt(t),ve(()=>k.put(`classes/ShoppingItem/${e.id}`,be({...e,quantity:te(t),manual:!0})))},setChecked(e,t){return ve(()=>k.put(`classes/ShoppingItem/${e.id}`,be({...e,checked:t})))},dismiss(e){return ve(()=>e.manual?k.delete(`classes/ShoppingItem/${e.id}`):k.put(`classes/ShoppingItem/${e.id}`,be({...e,dismissed:!0,checked:!1})))},restore(e){let t=S.requireHouseId();return ve(()=>e.manual?bt({...e,dismissed:!1},t):k.put(`classes/ShoppingItem/${e.id}`,be({...e,dismissed:!1})))},completePurchase(){let e=S.requireHouseId();return ve(async()=>{let t=(await Re({houseId:e})).filter(n=>n.checked&&!n.dismissed),a=new Map((await k.query("Product",{houseId:e})).map(Rt).map(n=>[n.id,n]));for(let n of t){let s=a.get(n.productId);if(s){let o={...z.withQuantity(s,s.quantity+n.quantity),updatedBy:S.email()};await k.put(`classes/Product/${s.id}`,Ze(o))}await k.delete(`classes/ShoppingItem/${n.id}`)}return t.length})}};function Un(e){return{id:e.objectId,name:e.name||"",servings:de(e.servings,2),ingredients:(e.ingredients||[]).filter(Boolean).map(t=>({productId:t.productId||"",name:t.name||"",quantity:de(t.quantity,1),unit:t.unit||pe})),steps:e.steps||"",emoji:e.emoji||pt,photo:typeof e.photoUrl=="string"&&e.photoUrl.startsWith("http")?{name:e.photoName||"",url:e.photoUrl}:null,createdBy:e.createdBy||""}}function Ra(e){return{name:e.name,servings:e.servings,steps:e.steps,emoji:e.emoji,photoName:e.photo?.name||"",photoUrl:e.photo?.url||"",createdBy:e.createdBy,ingredients:e.ingredients.map(({productId:t,name:a,quantity:n,unit:s})=>({productId:t,name:a,quantity:n,unit:s}))}}function Qa(e,t){return t>e.criticalLimit?0:te(e.criticalLimit-t+1)}var me={async all(){return(await k.query("Recipe",{houseId:S.requireHouseId()})).map(Un).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e){O(e.name.trim(),"Ponle un nombre a la receta"),O(e.ingredients.length,"A\xF1ade al menos un ingrediente"),O(e.servings>=1&&e.servings<=20,"Las raciones deben estar entre 1 y 20");let t={...e,name:e.name.trim(),steps:e.steps.trim(),createdBy:e.createdBy||S.email()};if(!t.id){let a=await k.post("classes/Recipe",{...Ra(t),houseId:S.requireHouseId(),ACL:F.publicAcl()});return{...t,id:a.objectId}}return await k.put(`classes/Recipe/${t.id}`,Ra(t)),t},remove:e=>k.delete(`classes/Recipe/${e.id}`),check(e,t){let a=new Map(t.map(i=>[i.id,i])),n=e.ingredients.map(i=>{let c=a.get(i.productId);if(!c)return{ingredient:i,product:null,inStock:0,after:-i.quantity,status:"NOT_IN_PANTRY",toBuy:i.quantity};let u=te(c.quantity-i.quantity),l=u<0?"NOT_ENOUGH":u<=c.criticalLimit?"BELOW_MINIMUM":"OK";return{ingredient:i,product:c,inStock:c.quantity,after:u,status:l,toBuy:Qa(c,u)}}),s=n.filter(i=>i.status==="NOT_ENOUGH"||i.status==="NOT_IN_PANTRY"),o=n.filter(i=>i.toBuy>0);return{recipe:e,items:n,canCook:s.length===0,missing:s,toBuy:o,estimatedCost:o.reduce((i,c)=>i+(c.product?.price!=null?c.product.price*c.toBuy:0),0)}},async addMissingToShopping(e){for(let t of e.toBuy)t.product?await W.addProduct(t.product,t.toBuy):await W.addFreeItem(t.ingredient.name,t.toBuy,t.ingredient.unit);return e.toBuy.length},async cook(e){for(let t of e.items)t.product&&await ue.consume(t.product,t.ingredient.quantity)}};function Rn(e){let t=F.readDate(e.date);return!t||!["BREAKFAST","LUNCH","DINNER"].includes(e.slot)?null:{id:e.objectId,date:t,slot:e.slot,recipeId:e.recipeId||"",title:e.title||""}}var Oa=28;async function Ut(e,t,a){return(await k.query("MealPlanEntry",{houseId:e,date:{$gte:F.date(t),$lte:F.date(a)}})).map(Rn).filter(Boolean)}var ce={week:e=>Ut(S.requireHouseId(),e,X(e,6)),async set(e,t,a,n=""){let s=a?.name||n.trim();O(s,"Elige una receta o escribe qu\xE9 vas a comer");let o=S.requireHouseId(),i=(await Ut(o,e,e)).find(u=>u.slot===t),c={date:F.date(e),slot:t,recipeId:a?.id||"",title:s};i?await k.put(`classes/MealPlanEntry/${i.id}`,c):await k.post("classes/MealPlanEntry",{...c,houseId:o,ACL:F.publicAcl()})},clear:e=>k.delete(`classes/MealPlanEntry/${e.id}`),async copyPreviousWeek(e){let t=S.requireHouseId(),a=new Set((await ce.week(e)).map(o=>`${o.date}|${o.slot}`)),s=(await Ut(t,X(e,-7),X(e,-1))).map(o=>({...o,date:X(o.date,7)})).filter(o=>!a.has(`${o.date}|${o.slot}`));for(let o of s)await k.post("classes/MealPlanEntry",{date:F.date(o.date),slot:o.slot,recipeId:o.recipeId,title:o.title,houseId:t,ACL:F.publicAcl()});return s.length},async analyze(e){let t=S.requireHouseId(),[a,n,s]=await Promise.all([ue.all(),me.all(),ce.week(e)]),o=new Map(n.map(m=>[m.id,m])),i=s.filter(m=>m.date>=ae()),c=new Map,u=new Map;i.map(m=>o.get(m.recipeId)).filter(Boolean).forEach(m=>{m.ingredients.forEach($=>{if($.productId&&a.some(y=>y.id===$.productId))c.set($.productId,(c.get($.productId)||0)+$.quantity);else{let y=`${$.name.trim().toLowerCase()}|${$.unit}`;u.set(y,(u.get(y)||0)+$.quantity)}})});let l=new Map;try{let m=new Date(Date.now()-Oa*864e5);(await k.query("StockMovement",{houseId:t,createdAt:{$gte:F.instant(m)}})).forEach(y=>l.set(y.productId,(l.get(y.productId)||0)+de(y.amount)))}catch{}let h=Oa/7,r=[];a.forEach(m=>{let $=c.get(m.id)||0,y=te((l.get(m.id)||0)/h),_=Math.max($,y),C=Qa(m,m.quantity-_);_===0&&C===0||r.push({product:m,name:m.name,unit:m.unit,planned:$,habitual:y,inStock:m.quantity,toBuy:C,reason:$>0&&$>=y?"RECIPES":y>0?"HABITUAL":"BELOW_MINIMUM"})}),u.forEach((m,$)=>{let[y,_]=$.split("|");r.push({product:null,name:y.charAt(0).toUpperCase()+y.slice(1),unit:_,planned:m,habitual:0,inStock:0,toBuy:te(m),reason:"RECIPES"})}),r.forEach(m=>{m.isUrgent=m.planned>m.inStock,m.estimatedCost=m.product?.price!=null?m.product.price*m.toBuy:null}),r.sort((m,$)=>$.isUrgent-m.isUrgent||m.name.localeCompare($.name,"es"));let g=r.filter(m=>m.toBuy>0);return{weekStart:e,needs:r,toBuy:g,plannedMeals:i.length,estimatedCost:g.reduce((m,$)=>m+($.estimatedCost||0),0),withoutPrice:g.filter(m=>m.estimatedCost===null).length}},async addToShopping(e){for(let t of e.toBuy)t.product?await W.addProduct(t.product,t.toBuy):await W.addFreeItem(t.name,t.toBuy,t.unit);return e.toBuy.length},weekStartOf:Je},Fa="7UZJKL1DJ0",On="9d8f2e39e90df472b4f2e559a116fe17";function Fn(e,t){let a=de(t?.unit_size,NaN),n=t?.size_format||"",s="";return Number.isFinite(a)&&a>0&&n&&(n==="kg"&&a<1?s=`${Math.round(a*1e3)} g`:n==="l"&&a<1?s=`${Math.round(a*1e3)} ml`:s=`${String(a).replace(".",",")} ${n==="kg"?"kg":n.toUpperCase()}`),[e&&e!=="null"?e:"",s].filter(Boolean).join(" ")}async function Vn(e){let t=await fetch(`https://${Fa}-dsn.algolia.net/1/indexes/products_prod_mad1_es/query`,{method:"POST",headers:{"X-Algolia-Application-Id":Fa,"X-Algolia-API-Key":On,"Content-Type":"application/json"},body:JSON.stringify({params:`query=${encodeURIComponent(e)}&hitsPerPage=30`})});if(!t.ok)throw new Error("Mercadona no responde");return((await t.json()).hits||[]).map(n=>{let s=n.id||n.objectID;if(!s||!n.display_name)return null;let o=parseFloat(n.price_instructions?.unit_price);return{source:"Mercadona",externalId:String(s),name:n.display_name,brand:"",category:n.categories?.[0]?.name||"",price:Number.isFinite(o)?o:null,imageUrl:typeof n.thumbnail=="string"&&n.thumbnail.startsWith("http")?n.thumbnail:null,packageInfo:Fn(n.packaging,n.price_instructions)}}).filter(Boolean)}async function jn(e){let a=`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(e)}&search_simple=1&action=process&json=1&page_size=20&lc=es&fields=code,product_name,product_name_es,brands,categories,quantity,image_front_small_url,image_url`;return((await(await fetch(a)).json()).products||[]).map(s=>{let o=(s.product_name_es||s.product_name||"").trim();if(!o)return null;let i=s.image_front_small_url||s.image_url||"";return{source:"Open Food Facts",externalId:s.code||"",name:o,brand:(s.brands||"").split(",")[0].trim(),category:(s.categories||"").split(",")[0].trim(),price:null,imageUrl:i.startsWith("http")?i:null,packageInfo:(s.quantity||"").trim()}}).filter(Boolean)}var wt={async search(e){if(e=e.trim(),e.length<2)return[];try{let t=await Vn(e);if(t.length)return t}catch{}try{return await jn(e)}catch{throw new Z(100,"No se ha podido buscar en el cat\xE1logo")}},toProduct:e=>({id:null,name:e.name,category:e.category,quantity:1,criticalLimit:1,unit:pe,location:"",notes:[e.brand,e.packageInfo].filter(Boolean).join(" \xB7 "),expiresAt:null,photo:null,imageUrl:e.imageUrl,price:e.price,mercadonaId:e.source==="Mercadona"?e.externalId:null,updatedBy:""})},Ga=()=>({id:null,name:"",category:"",quantity:1,criticalLimit:1,unit:pe,location:"",notes:"",expiresAt:null,photo:null,imageUrl:null,price:null,mercadonaId:null,updatedBy:""});var Ja=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function ke({label:e,icon:t,error:a,inputRef:n,...s}){return p`<label class=${`field ${a?"has-error":""}`}>
    <span>${e}</span>
    <div class="field-row">
      ${t&&p`<${w} name=${t} size=${20} class="field-icon" />`}
      <input ref=${n} ...${s} />
    </div>
    ${a&&p`<small class="error-text">${a}</small>`}
  </label>`}function Ft(){let[e,t]=I({}),a=Y({});return{errors:e,setErrors:t,refs:a,fail:(s,o)=>(t({[s]:o}),Ha(a.current[s]?.closest(".field")),x("error"),!1)}}function Wn({size:e=96}){return p`<svg class="logo" width=${e} height=${e} viewBox="0 0 108 108" aria-hidden="true">
    <defs><linearGradient id="lg" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--primary-light)" /><stop offset="1" stop-color="var(--primary)" />
    </linearGradient></defs>
    <circle cx="54" cy="54" r="54" fill="url(#lg)" />
    <g transform="translate(27.6 28.7) scale(2.2)">
      <path d="M12,3L2,12h3v8h14v-8h3L12,3z" fill="#fff" />
      <path d="M8.5,12.5h7v5.5h-7z" fill="var(--primary)" />
      <path d="M8.5,14.2h7v0.8h-7z" fill="#fff" />
    </g>
  </svg>`}function Ya({onLoggedIn:e,onRegister:t}){let[a,n]=I(""),[s,o]=I(""),{errors:i,setErrors:c,refs:u,fail:l}=Ft(),h=async g=>{if(g.preventDefault(),c({}),!Ja.test(a.trim()))return l("email","Introduce un correo v\xE1lido");if(s.length<ye)return l("password",`M\xEDnimo ${ye} caracteres`);await M(async()=>{await we.login(a,s),x("success"),e()})},r=async()=>{let g=await G({title:"Restablecer contrase\xF1a",message:"Te mandaremos un correo con un enlace para elegir una contrase\xF1a nueva.",label:"Correo electr\xF3nico",type:"email",value:a,confirm:"Enviar"});g!==null&&await M(async()=>{await we.resetPassword(g),P(`Correo enviado a ${g.trim()}. Revisa tambi\xE9n el spam.`)})};return p`<main class="auth-screen">
    <div class="float stagger" style="--i:0"><${Wn} /></div>
    <h1 class="brand stagger" style="--i:1">Stock Casa</h1>
    <p class="welcome stagger" style="--i:2">Tu despensa, siempre al día</p>
    <p class="muted center stagger" style="--i:3">Controla lo que tienes en casa y compártelo con quien vive contigo</p>

    <form class="card form-card stagger" style="--i:4" onSubmit=${h} novalidate>
      <${ke} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a}
        error=${i.email} inputRef=${g=>u.current.email=g} onInput=${g=>n(g.target.value)} />
      <${ke} label="Contraseña" icon="lock" type="password" autocomplete="current-password" value=${s}
        error=${i.password} inputRef=${g=>u.current.password=g} onInput=${g=>o(g.target.value)} />
      <button class="btn primary wide" type="submit"><${w} name="login" size=${20} /> Iniciar sesión</button>
      <button class="btn text center-self" type="button" onClick=${r}>¿Has olvidado la contraseña?</button>
    </form>

    <p class="center stagger" style="--i:5">
      <span class="muted">¿Aún no tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Crear una</button>
    </p>
  </main>`}function Ka({onRegistered:e,onBack:t}){let[a,n]=I({nickname:"",email:"",password:"",repeat:""}),{errors:s,setErrors:o,refs:i,fail:c}=Ft(),u=r=>g=>n({...a,[r]:g.target.value}),l=async r=>{if(r.preventDefault(),o({}),!a.nickname.trim())return c("nickname","Escribe un nombre o apodo");if(!Ja.test(a.email.trim()))return c("email","Introduce un correo v\xE1lido");if(a.password.length<ye)return c("password",`M\xEDnimo ${ye} caracteres`);if(a.password!==a.repeat)return c("repeat","Las contrase\xF1as no coinciden");await M(async()=>{await we.register(a.nickname,a.email,a.password,a.repeat),x("success"),P(`\xA1Bienvenido/a, ${a.nickname.trim()}! \u{1F389}`),e()})},h=r=>g=>i.current[r]=g;return p`<main class="auth-screen">
    <button class="icon-btn light self-start" onClick=${t} aria-label="Volver"><${w} name="arrow_back" /></button>
    <div class="big-emoji pop-in">👋</div>
    <h1 class="screen-title center stagger" style="--i:1">Crea tu cuenta</h1>
    <p class="muted center stagger" style="--i:2">En un minuto estás organizando tu despensa</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${l} novalidate>
      <${ke} label="¿Cómo te llamamos?" icon="people" maxlength="24" autocomplete="nickname" value=${a.nickname}
        error=${s.nickname} inputRef=${h("nickname")} onInput=${u("nickname")} />
      <${ke} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a.email}
        error=${s.email} inputRef=${h("email")} onInput=${u("email")} />
      <${ke} label="Contraseña (mínimo 6 caracteres)" icon="lock" type="password" autocomplete="new-password" value=${a.password}
        error=${s.password} inputRef=${h("password")} onInput=${u("password")} />
      <${ke} label="Repite la contraseña" icon="lock" type="password" autocomplete="new-password" value=${a.repeat}
        error=${s.repeat} inputRef=${h("repeat")} onInput=${u("repeat")} />
      <button class="btn primary wide" type="submit"><${w} name="check" size=${20} /> Crear cuenta</button>
    </form>

    <p class="center stagger" style="--i:4">
      <span class="muted">¿Ya tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Iniciar sesión</button>
    </p>
  </main>`}function Xa({onReady:e,onLogout:t}){let[a,n]=I("Mi casa"),[s,o]=I(""),[i,c]=I("\xA1Hola!"),{errors:u,setErrors:l,refs:h,fail:r}=Ft();R(()=>{le.me().then(y=>c(`\xA1Hola, ${re(y)}!`)).catch(()=>{})},[]);let g=y=>{x("success"),P(y),Ue(),e()},m=async y=>{if(y.preventDefault(),l({}),s.trim().length!==6)return r("code",`El c\xF3digo tiene ${6} caracteres`);await M(async()=>{let _=await U.join(s);g(`Ahora est\xE1s en \xAB${_.name}\xBB`)},{onError:_=>_ instanceof Z&&_.isSessionExpired?t():r("code",_.message)})},$=async y=>{if(y.preventDefault(),l({}),!a.trim())return r("name","Este campo es obligatorio");await M(async()=>{let _=await U.create(a);g(`Casa \xAB${_.name}\xBB creada`)})};return p`<main class="auth-screen">
    <div class="big-emoji pop-in">🏠</div>
    <h1 class="screen-title center stagger" style="--i:1">${i}</h1>
    <p class="muted center stagger" style="--i:2">Para empezar, únete a la casa de alguien o crea la tuya</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${m} novalidate>
      <h2>Unirme a una casa</h2>
      <p class="muted">Pide el código de 6 caracteres a alguien de la casa (lo tiene en la pestaña Casa).</p>
      <${ke} label="Código de 6 caracteres" icon="people" class="code-input" maxlength="6" autocapitalize="characters"
        autocomplete="off" value=${s} error=${u.code} inputRef=${y=>h.current.code=y}
        onInput=${y=>o(y.target.value.toUpperCase())} />
      <button class="btn primary wide" type="submit"><${w} name="login" size=${20} /> Unirme</button>
    </form>

    <p class="muted center stagger" style="--i:4">— o —</p>

    <form class="card form-card stagger" style="--i:5" onSubmit=${$} novalidate>
      <h2>Crear una casa nueva</h2>
      <p class="muted">Serás el primer miembro y podrás invitar a quien quieras con su código.</p>
      <${ke} label="Nombre de la casa" icon="home" maxlength="40" value=${a} error=${u.name}
        inputRef=${y=>h.current.name=y} onInput=${y=>n(y.target.value)} />
      <button class="btn tonal wide" type="submit"><${w} name="add" size=${20} /> Crear casa</button>
    </form>

    <button class="btn text center-self stagger" style="--i:6" onClick=${t}><${w} name="logout" size=${20} /> Cerrar sesión</button>
  </main>`}var Za="stockcasa.collapsedGroups",Ct="Sin categor\xEDa";function Qn(){let e=new Date().getHours();return e<6||e>=21?"Buenas noches":e<13?"Buenos d\xEDas":"Buenas tardes"}function Gn(){try{return new Set(JSON.parse(localStorage.getItem(Za))||[])}catch{return new Set}}function Jn({value:e}){let[t,a]=I(e),n=Y(e);return R(()=>{let s=performance.now(),o=n.current,i,c=u=>{let l=Math.min(1,(u-s)/450),h=1-(1-l)**3;a(Math.round(o+(e-o)*h)),l<1?i=requestAnimationFrame(c):n.current=e};return i=requestAnimationFrame(c),()=>cancelAnimationFrame(i)},[e]),t}function en({active:e,goTo:t,setBadge:a}){let[n,s]=I(null),[o,i]=I(null),[c,u]=I(null),[l,h]=I(""),[r,g]=I("all"),[m,$]=I(Gn),y=Y(0),_=async(f=!1)=>{await M(async()=>{let d=await U.current();i(d);let[v,b]=await Promise.all([ue.all(),le.me().catch(()=>null)]);y.current===0&&s(v),u(b),W.refresh().then(L=>a(L.filter(J=>!J.checked).length)).catch(()=>{})},{loading:!1,onError:f?()=>{}:ee})};R(()=>{e&&_()},[e]),$e(f=>f==="changed"&&e&&_(!0)),R(()=>{if(!e||!o||o.memberIds.length<2)return;let f=setInterval(()=>document.visibilityState==="visible"&&_(!0),2e4);return()=>clearInterval(f)},[e,o?.id,o?.memberIds.length]);let C=lt(()=>({total:n?.length||0,low:n?.filter(z.isLow).length||0,expiring:n?.filter(z.needsExpiryAttention).length||0}),[n]),E=lt(()=>{let f=l.trim().toLowerCase(),d=(n||[]).filter(b=>!f||[b.name,b.category,b.location].some(J=>J.toLowerCase().includes(f))?r==="low"?z.isLow(b):r==="expiring"?z.needsExpiryAttention(b):!0:!1),v=new Map;return d.forEach(b=>{let L=b.category.trim()||Ct;v.has(L)||v.set(L,[]),v.get(L).push(b)}),[...v.entries()].sort(([b],[L])=>(b===Ct)-(L===Ct)||b.localeCompare(L,"es"))},[n,l,r]),T=f=>{let d=new Set(m);d.has(f)?d.delete(f):d.add(f),$(d),localStorage.setItem(Za,JSON.stringify([...d]))},A=async(f,d,v)=>{let b=n.find(J=>J.id===f.id),L=z.withQuantity(b,b.quantity+d);if(L.quantity!==b.quantity){s(n.map(J=>J.id===f.id?L:J)),x(d>0?"up":"down"),Le(v),y.current++;try{await ue.updateQuantity(L,b.quantity)}catch(J){ee(J)}finally{y.current--}y.current===0&&_(!0)}},B=async f=>{let d=await G({title:`A\xF1adir \xAB${f.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:D(z.amountToBuy(f)),suffix:f.unit,confirm:"A\xF1adir"});d!==null&&await M(async()=>{await W.addProduct(f,oe(d)??0),x("pop"),P(`\xAB${f.name}\xBB a\xF1adido a la compra`),V.emit("changed")})},H=async f=>{await se(Kn,{initial:f,categories:[...new Set((n||[]).map(v=>v.category).filter(Boolean))]})&&_(!0)},K=async()=>{let f=await ge("A\xF1adir producto",[{label:"\u{1F50E}  Buscar en Mercadona"},{label:"\u270F\uFE0F  Escribirlo a mano"}]);if(f!==null)if(f===0){let d=await se(tn,{});if(!d)return;let v=(n||[]).find(b=>b.mercadonaId&&b.mercadonaId===d.externalId);H(v||wt.toProduct(d))}else H(Ga())},q=n&&n.length===0;return p`<section class="tab">
    <header class="tab-header">
      <div class="grow">
        <p class="muted small">${Qn()}${c?`, ${re(c)}`:""} 👋</p>
        <h1 class="brand">Despensa</h1>
      </div>
      ${o&&p`<button class="house-pill" onClick=${()=>t("house")}><${w} name="home" size=${16} /> ${o.name}</button>`}
    </header>

    <div class="stats">
      ${[["all","Productos",C.total,""],["low","Por reponer",C.low,"danger"],["expiring","Caducan pronto",C.expiring,"warning"]].map(([f,d,v,b])=>p`<button class=${`stat ${b} ${r===f?"selected":""}`} onClick=${()=>g(r===f?"all":f)}>
          <strong><${Jn} value=${v} /></strong><span>${d}</span>
        </button>`)}
    </div>

    <label class="search">
      <${w} name="search" size=${20} />
      <input type="search" placeholder="Buscar por nombre, categoría o sitio" value=${l} onInput=${f=>h(f.target.value)} />
    </label>

    <div class="chips">
      ${[["all","Todos"],["low","Por reponer"],["expiring","Caducan pronto"]].map(([f,d])=>p`
        <button class=${`chip ${r===f?"checked":""}`} onClick=${()=>g(f)}>${d}</button>`)}
    </div>

    ${!n&&p`<div class="skeleton-list">${[0,1,2].map(()=>p`<div class="skeleton"></div>`)}</div>`}

    ${q&&p`<div class="empty">
      <div class="big-emoji">🧺</div>
      <h2>Tu despensa está vacía</h2>
      <p class="muted">Añade lo que tienes en casa con el botón +. Puedes buscarlo en Mercadona para no escribir.</p>
    </div>`}

    ${n&&!q&&E.length===0&&p`<div class="empty"><div class="big-emoji">🔎</div><h2>Nada por aquí</h2><p class="muted">Prueba con otra búsqueda o filtro.</p></div>`}

    <div class="groups">
      ${E.map(([f,d],v)=>p`<div class="group" key=${f}>
        <button class="group-header" onClick=${()=>T(f)}>
          <span class="group-emoji">${ie(f===Ct?"":f)}</span>
          <span class="grow">${f}</span>
          <span class="count">${d.length}</span>
          ${d.some(z.isLow)&&p`<span class="dot danger"></span>`}
          <span class=${`chevron ${m.has(f)?"":"open"}`}><${w} name="chevron_right" size=${20} /></span>
        </button>
        ${!m.has(f)&&d.map((b,L)=>p`<${Yn} key=${b.id} p=${b} index=${v*3+L}
          onOpen=${()=>H(b)} onLongPress=${()=>B(b)} onChange=${A} />`)}
      </div>`)}
    </div>

    <button class="fab" onClick=${K} aria-label="Añadir producto"><${w} name="add" size=${28} /></button>
  </section>`}function Yn({p:e,index:t,onOpen:a,onLongPress:n,onChange:s}){let o=Y(),i=Y(),c=Y(!1),u=z.isLow(e),l=z.expiryStatus(e),h=z.daysUntilExpiry(e),r=z.level(e),g=u?"danger":e.quantity<=e.criticalLimit*1.5?"warning":"primary",m=()=>{c.current=!1,i.current=setTimeout(()=>{c.current=!0,x("pop"),n()},550)},$=()=>clearTimeout(i.current),y=()=>{c.current||a()};return p`<article class="card product-card enter" style=${`--i:${Math.min(t,12)}`}
    onPointerDown=${m} onPointerUp=${$} onPointerLeave=${$} onPointerCancel=${$}
    onContextMenu=${_=>_.preventDefault()} onClick=${y}>
    <${Ie} url=${z.image(e)} emoji=${ie(e.category)} />
    <div class="grow min0">
      <h3 class="ellipsis">${e.name}</h3>
      <p class="muted small ellipsis">${[e.location,e.price!=null?`${ne(e.price)}/${e.unit}`:""].filter(Boolean).join(" \xB7 ")||`M\xEDnimo ${D(e.criticalLimit)} ${e.unit}`}</p>
      <div class="tags">
        ${u&&p`<span class="tag danger">Por reponer</span>`}
        ${l==="EXPIRED"&&p`<span class="tag danger">Caducado</span>`}
        ${l==="SOON"&&p`<span class="tag warning">${h===0?"Caduca hoy":`Caduca en ${h} d`}</span>`}
      </div>
      <div class="level"><span class=${g} style=${`width:${Math.round(r*100)}%`}></span></div>
    </div>
    <div class="stepper" onClick=${_=>_.stopPropagation()} onPointerDown=${_=>_.stopPropagation()}>
      <button class="round" aria-label="Quitar uno" onClick=${()=>s(e,-1,o.current)}><${w} name="remove" size=${18} /></button>
      <div class="qty"><strong ref=${o} class=${u?"danger-text":""}>${D(e.quantity)}</strong><small>${e.unit}</small></div>
      <button class="round primary" aria-label="Añadir uno" onClick=${()=>s(e,1,o.current)}><${w} name="add" size=${18} /></button>
    </div>
  </article>`}function Kn({initial:e,categories:t,close:a}){let[n,s]=I(e),[o,i]=I(void 0),[c,u]=I(null),[l,h]=I(!!e.expiresAt),[r,g]=I(D(e.quantity)),[m,$]=I(D(e.criticalLimit)),[y,_]=I(e.price!=null?String(e.price).replace(".",","):""),C=Y(),E=!e.id,T=d=>v=>s({...n,[d]:v.target.value}),A=o===null?n.imageUrl||null:c||z.image(n),B=async d=>{let v=d.target.files?.[0];if(d.target.value="",!v)return;let b=await vt(v);i(b),u(URL.createObjectURL(b))},H=async()=>{let d=await se(tn,{initialQuery:n.name});if(!d)return;let v=wt.toProduct(d);s({...n,name:v.name,category:v.category||n.category,imageUrl:v.imageUrl,price:v.price??n.price,mercadonaId:v.mercadonaId,notes:n.notes||v.notes}),v.price!=null&&_(String(v.price).replace(".",",")),x("pop"),P(`Datos importados de ${d.source}`)},K=async d=>{d.preventDefault();let v=oe(r),b=oe(m),L=y.trim()?oe(y):null;if(v===null||b===null)return P("Revisa las cantidades");if(y.trim()&&L===null)return P("El precio no es v\xE1lido");if(l&&!n.expiresAt)return P("Elige la fecha de caducidad");let J={...n,quantity:v,criticalLimit:b,price:L,expiresAt:l?n.expiresAt:null},et=await M(()=>ue.save(J,o));et&&(x("success"),P(E?"Producto a\xF1adido":"Cambios guardados"),V.emit("changed"),a(et))},q=async()=>{await fe({title:"Eliminar producto",message:`\xBFSeguro que quieres eliminar \xAB${n.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await M(async()=>{await ue.remove(n),x("swipe"),P("Producto eliminado"),V.emit("changed"),a(!0)})},f=async()=>{let d=await G({title:`A\xF1adir \xAB${n.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:D(z.amountToBuy(n)),suffix:n.unit,confirm:"A\xF1adir"});d!==null&&await M(async()=>{await W.addProduct(n,oe(d)??0),x("pop"),P(`\xAB${n.name}\xBB a\xF1adido a la compra`),V.emit("changed")})};return p`<form class="sheet-body" onSubmit=${K}>
    <div class="sheet-title">
      <h2>${E?"Nuevo producto":"Editar producto"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(!1)} aria-label="Cerrar"><${w} name="close" /></button>
    </div>

    <div class="photo-box">
      <${Ie} url=${A} emoji=${ie(n.category)} size=${96} />
      <div class="photo-actions">
        <button type="button" class="btn tonal small" onClick=${()=>C.current.click()}><${w} name="camera" size=${18} /> Foto</button>
        ${(o instanceof Blob||o!==null&&n.photo)&&p`<button type="button" class="btn text small" onClick=${()=>{i(null),u(null)}}>Quitar foto</button>`}
        <button type="button" class="btn tonal small" onClick=${H}><${w} name="store" size=${18} /> Mercadona</button>
      </div>
      <input ref=${C} type="file" accept="image/*" hidden onChange=${B} />
    </div>

    <label class="field"><span>Nombre</span><input required maxlength="60" value=${n.name} onInput=${T("name")} /></label>
    <label class="field"><span>Categoría</span>
      <input list="categories" value=${n.category} onInput=${T("category")} placeholder="Lácteos, Limpieza…" />
      <datalist id="categories">${t.map(d=>p`<option value=${d} />`)}</datalist>
    </label>
    <div class="row-2">
      <label class="field"><span>Cantidad</span><input inputmode="decimal" value=${r} onInput=${d=>g(d.target.value)} /></label>
      <label class="field"><span>Mínimo (avisar)</span><input inputmode="decimal" value=${m} onInput=${d=>$(d.target.value)} /></label>
    </div>
    <div class="row-2">
      <label class="field"><span>Unidad</span><input value=${n.unit} onInput=${T("unit")} placeholder="uds, kg, L…" /></label>
      <label class="field"><span>Precio por unidad (€)</span><input inputmode="decimal" value=${y} onInput=${d=>_(d.target.value)} placeholder="Opcional" /></label>
    </div>
    <label class="field"><span>Dónde está</span><input value=${n.location} onInput=${T("location")} placeholder="Nevera, despensa…" /></label>

    <label class="switch-row">
      <span>Tiene fecha de caducidad</span>
      <input type="checkbox" class="switch" checked=${l} onChange=${d=>h(d.target.checked)} />
    </label>
    ${l&&p`<label class="field"><span>Caduca el</span><input type="date" value=${n.expiresAt||""} onInput=${T("expiresAt")} /></label>`}

    <label class="field"><span>Notas</span><textarea rows="2" value=${n.notes} onInput=${T("notes")}></textarea></label>
    ${n.updatedBy&&p`<p class="muted small">Última modificación: ${Xe(n.updatedBy)}</p>`}

    <button class="btn primary wide" type="submit"><${w} name="check" size=${20} /> Guardar</button>
    ${!E&&p`<div class="row-2">
      <button type="button" class="btn tonal" onClick=${f}><${w} name="cart" size=${18} /> A la compra</button>
      <button type="button" class="btn danger" onClick=${q}><${w} name="delete" size=${18} /> Eliminar</button>
    </div>`}
  </form>`}function tn({initialQuery:e="",close:t}){let[a,n]=I(e),[s,o]=I(null),[i,c]=I(!1),u=Y();return R(()=>{setTimeout(()=>u.current?.focus(),250)},[]),R(()=>{if(a.trim().length<2){o(null);return}let l=!1;c(!0);let h=setTimeout(async()=>{try{let r=await wt.search(a);l||o(r)}catch(r){l||ee(r)}finally{l||c(!1)}},350);return()=>{l=!0,clearTimeout(h)}},[a]),p`<div class="sheet-body">
    <div class="sheet-title">
      <h2>Buscar en Mercadona</h2>
      <button class="icon-btn" onClick=${()=>t(null)} aria-label="Cerrar"><${w} name="close" /></button>
    </div>
    <label class="search">
      <${w} name="search" size=${20} />
      <input ref=${u} type="search" placeholder="Leche, arroz, detergente…" value=${a} onInput=${l=>n(l.target.value)} />
      ${i&&p`<span class="mini-spinner"></span>`}
    </label>
    ${s&&s.length===0&&p`<p class="muted center">No se ha encontrado nada. Prueba con otras palabras.</p>`}
    ${!s&&p`<p class="muted center small">Escribe al menos 2 letras. Se rellenan solos el nombre, la categoría, la foto y el precio.</p>`}
    <div class="catalog-list">
      ${(s||[]).map((l,h)=>p`<button class="catalog-item enter" style=${`--i:${Math.min(h,10)}`} onClick=${()=>t(l)}>
        <${Ie} url=${l.imageUrl} emoji=${ie(l.category)} size=${56} />
        <span class="grow min0 left">
          <strong class="ellipsis2">${l.name}</strong>
          <span class="muted small ellipsis">${[l.brand,l.packageInfo].filter(Boolean).join(" \xB7 ")||l.category}</span>
        </span>
        <span class=${`price ${l.price==null?"muted":""}`}>${l.price!=null?ne(l.price):"Sin precio"}</span>
      </button>`)}
    </div>
    ${s&&s[0]&&p`<p class="muted small center">Fuente: ${s[0].source}</p>`}
  </div>`}function an({active:e,setBadge:t,goTo:a}){let[n,s]=I(null),[o,i]=I(null),[c,u]=I({}),[l,h]=I(null),r=async(f=!1)=>{await M(async()=>{let d=await U.current();i(d);let v=await W.refresh();s(v),t(v.filter(L=>!L.checked).length);let b=await le.many(d.memberIds);u(Object.fromEntries(Object.values(b).map(L=>[L.email,L])))},{loading:!1,onError:f?()=>{}:ee})};R(()=>{e&&r()},[e]),$e(f=>f==="changed"&&e&&r(!0)),R(()=>{if(!e||!o||o.memberIds.length<2)return;let f=setInterval(()=>document.visibilityState==="visible"&&r(!0),2e4);return()=>clearInterval(f)},[e,o?.id]);let g=f=>{s(f),t(f.filter(d=>!d.checked).length)},m=async(f,d)=>{let v=!f.checked;g(n.map(b=>b.id===f.id?{...b,checked:v}:b)),x(v?"check":"tap"),Le(d);try{await W.setChecked(f,v)}catch(b){ee(b),r(!0)}},$=async f=>{h(f.id),x("swipe"),setTimeout(async()=>{h(null),g(n.filter(d=>d.id!==f.id));try{await W.dismiss(f)}catch(d){ee(d),r(!0);return}P(`\xAB${f.name}\xBB quitado de la lista`,{label:"Deshacer",run:async()=>{await M(()=>W.restore(f),{loading:!1}),r(!0)}})},260)},y=async f=>{let d=await G({title:`\xBFCu\xE1nto \xAB${f.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:D(f.quantity),suffix:f.unit});d!==null&&await M(async()=>{await W.changeQuantity(f,oe(d)??0),x("pop"),r(!0)})},_=async()=>{let f=await M(()=>ue.all());if(!f)return;let d=new Set((n||[]).map(b=>b.productId)),v=await ge("\xBFQu\xE9 quieres a\xF1adir?",[{label:"\u{1F4DD}  Algo que no est\xE1 en la despensa"},...f.map(b=>({label:`${ie(b.category)}  ${b.name}${d.has(b.id)?"  \xB7 ya en la lista":""}`}))]);if(v!==null)if(v===0){let b=await G({title:"Art\xEDculo libre",label:"\xBFQu\xE9 hay que comprar?",confirm:"Siguiente"});if(!b?.trim())return;let L=await G({title:b.trim(),label:"Cantidad",inputMode:"decimal",value:"1",suffix:"uds",confirm:"A\xF1adir"});if(L===null)return;await M(async()=>{await W.addFreeItem(b,oe(L)??0,"uds"),x("pop"),P(`\xAB${b.trim()}\xBB a\xF1adido a la compra`),r(!0)})}else{let b=f[v-1],L=(n||[]).find(et=>et.productId===b.id),J=await G({title:`\xBFCu\xE1nto \xAB${b.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:D(L?.quantity??z.amountToBuy(b)),suffix:b.unit,confirm:"A\xF1adir"});if(J===null)return;await M(async()=>{await W.addProduct(b,oe(J)??0),x("pop"),P(`\xAB${b.name}\xBB a\xF1adido a la compra`),r(!0)})}},C=async()=>{await fe({title:"Terminar la compra",message:"Lo marcado se sumar\xE1 al stock de la despensa y saldr\xE1 de la lista.",confirm:"Terminar"})&&await M(async()=>{let f=await W.completePurchase();Ue(),x("success"),P(f===1?"1 producto repuesto":`${f} productos repuestos`),V.emit("changed"),r(!0)})},E=async()=>{let f=(n||[]).filter(L=>!L.checked),d=f.length?f:n||[];if(!d.length)return P("La lista est\xE1 vac\xEDa");let v=d.reduce((L,J)=>L+(Fe(J)||0),0),b=[`\u{1F6D2} Lista de la compra \xB7 ${o?.name||""}`,"",...d.map(L=>`\u25AB\uFE0F ${L.name} \u2014 ${D(L.quantity)} ${L.unit}`),...v>0?["",`\u{1F4B6} Total estimado: ${ne(v)}`]:[]].join(`
`);navigator.share?navigator.share({text:b}).catch(()=>{}):(await navigator.clipboard?.writeText(b),P("Lista copiada"))},T=n?.length||0,A=n?.filter(f=>f.checked).length||0,B=(n||[]).filter(f=>!f.checked),H=B.reduce((f,d)=>f+(Fe(d)||0),0),K=B.filter(f=>Fe(f)===null).length,q=o?.shoppingDay>=1&&mt(ae(),dt(o.shoppingDay))===0;return p`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Compra</h1>
      <button class="icon-btn" onClick=${_} aria-label="Añadir"><${w} name="add" /></button>
      <button class="icon-btn" onClick=${E} aria-label="Compartir lista"><${w} name="share" /></button>
    </header>

    ${o&&p`<button class=${`day-banner ${q?"pulse":""}`} onClick=${()=>a("house","settings")}>
      <${w} name="calendar" size=${16} /> ${Ke(o.shoppingDay)}
    </button>`}

    ${T>0&&p`<div class="card soft progress-card">
      <div class="row">
        <span class="grow">${A===0?"Marca lo que metas en el carro":`${A} de ${T} en el carro`}</span>
        <strong>${K===0?`Total: ${ne(H)}`:`\u2248 ${ne(H)} (+${K} sin precio)`}</strong>
      </div>
      <div class="level big"><span class="primary" style=${`width:${T?Math.round(A*100/T):0}%`}></span></div>
    </div>`}

    ${!n&&p`<div class="skeleton-list">${[0,1,2].map(()=>p`<div class="skeleton"></div>`)}</div>`}
    ${n&&T===0&&p`<div class="empty">
      <div class="big-emoji">🎉</div>
      <h2>¡No falta nada!</h2>
      <p class="muted">Cuando algo baje de su mínimo aparecerá aquí solo. También puedes añadir cosas con el +.</p>
    </div>`}

    <div class="list">
      ${(n||[]).map((f,d)=>{let v=c[f.addedBy];return p`<article key=${f.id} class=${`card shop-item enter ${f.checked?"checked":""} ${l===f.id?"removing":""}`} style=${`--i:${Math.min(d,12)}`}>
          <button class=${`check ${f.checked?"on":""}`} aria-label="Marcar" onClick=${b=>m(f,b.currentTarget)}>
            ${f.checked&&p`<${w} name="check" size=${18} />`}
          </button>
          <${Ie} url=${f.photoUrl} emoji=${f.productId?ie(f.category):"\u{1F4DD}"} size=${46} />
          <button class="grow min0 left plain" onClick=${()=>y(f)}>
            <h3 class="ellipsis name">${f.name}</h3>
            <p class="muted small ellipsis">
              ${D(f.quantity)} ${f.unit}${Fe(f)!==null?` \xB7 ${ne(Fe(f))}`:""}
              ${f.manual&&f.addedBy&&` \xB7 a\xF1adido por ${v?re(v):Xe(f.addedBy)}`}
            </p>
          </button>
          ${v&&p`<${De} profile=${v} size=${26} />`}
          <button class="icon-btn small" aria-label="Quitar" onClick=${()=>$(f)}><${w} name="close" size=${18} /></button>
        </article>`})}
    </div>

    ${T>0&&p`<div class="bottom-action">
      <button class="btn primary wide" disabled=${A===0} onClick=${C}>
        <${w} name="check" size=${20} /> ${A>0?`Terminar compra (${A})`:"Terminar compra"}
      </button>
    </div>`}
  </section>`}var nn={OK:{label:"Hay de sobra",tone:"success"},BELOW_MINIMUM:{label:"Quedar\xE1 bajo m\xEDnimo",tone:"warning"},NOT_ENOUGH:{label:"No llega",tone:"danger"},NOT_IN_PANTRY:{label:"Hay que comprarlo",tone:"primary"}};function sn(e){return e.canCook?e.items.some(t=>t.status==="BELOW_MINIMUM")?{text:"Puedes cocinarla (algo quedar\xE1 bajo m\xEDnimo)",tone:"warning"}:{text:"Puedes cocinarla \u2713",tone:"success"}:{text:`Falta ${e.missing.length===1?"1 ingrediente":`${e.missing.length} ingredientes`}`,tone:"danger"}}function on({active:e}){let[t,a]=I(null),[n,s]=I([]),o=async(u=!1)=>{await M(async()=>{await U.current();let[l,h]=await Promise.all([me.all(),ue.all()]);a(l),s(h)},{loading:!1,onError:u?()=>{}:ee})};R(()=>{e&&o()},[e]),$e(u=>u==="changed"&&e&&o(!0));let i=async u=>{await se(Xn,{recipe:u,prods:n}),o(!0)},c=async()=>{await se(rn,{initial:null,prods:n})&&o(!0)};return p`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Recetas</h1>
      <button class="icon-btn" onClick=${c} aria-label="Nueva receta"><${w} name="add" /></button>
    </header>

    ${!t&&p`<div class="skeleton-list">${[0,1].map(()=>p`<div class="skeleton tall"></div>`)}</div>`}
    ${t&&t.length===0&&p`<div class="empty">
      <div class="big-emoji">👩‍🍳</div>
      <h2>Aún no hay recetas</h2>
      <p class="muted">Crea una con sus ingredientes y verás si puedes cocinarla con lo que tienes, qué falta y cómo queda la despensa.</p>
      <button class="btn primary" onClick=${c}><${w} name="add" size=${20} /> Nueva receta</button>
    </div>`}

    <div class="list">
      ${(t||[]).map((u,l)=>{let h=me.check(u,n),r=sn(h);return p`<button key=${u.id} class="card recipe-card enter" style=${`--i:${Math.min(l,12)}`} onClick=${()=>i(u)}>
          <span class="recipe-emoji">${u.emoji}</span>
          <span class="grow min0 left">
            <h3 class="ellipsis">${u.name}</h3>
            <span class="muted small">${u.ingredients.length} ingredientes · ${u.servings} raciones</span>
            <span class=${`tag ${r.tone}`}>${r.text}</span>
          </span>
          <${w} name="chevron_right" />
        </button>`})}
    </div>
    ${t&&t.length>0&&p`<button class="fab" onClick=${c} aria-label="Nueva receta"><${w} name="add" size=${28} /></button>`}
  </section>`}function Xn({recipe:e,prods:t,close:a}){let[n,s]=I(e),[o,i]=I(t),c=me.check(n,o),u=sn(c),l=async()=>{let $=await ue.all();i($)},h=async()=>{if(!c.toBuy.length)return P("No hace falta comprar nada \u{1F389}");await M(async()=>{let $=await me.addMissingToShopping(c);x("pop"),P($===1?"1 art\xEDculo a\xF1adido a la compra":`${$} art\xEDculos a\xF1adidos a la compra`),V.emit("changed")})},r=async()=>{let $=c.canCook?"Se descontar\xE1n los ingredientes de la despensa.":"Hay ingredientes que no llegan: se descontar\xE1 lo que haya y quedar\xE1n a 0.";await fe({title:`Cocinar \xAB${n.name}\xBB`,message:$,confirm:"Cocinar"})&&await M(async()=>{await me.cook(c),x("success"),P("\xA1Que aproveche! Despensa actualizada"),V.emit("changed"),await l()})},g=async()=>{let $=Array.from({length:7},(C,E)=>X(ae(),E)),y=await ge("\xBFQu\xE9 d\xEDa?",$.map((C,E)=>({label:`${E===0?"Hoy":E===1?"Ma\xF1ana":Ye(xe(Me(C)))} \xB7 ${he(C)}`})));if(y===null)return;let _=await ge("\xBFPara cu\xE1ndo?",Ne.map(C=>({label:`${C.emoji}  ${C.label}`})));_!==null&&await M(async()=>{await ce.set($[y],Ne[_].key,n),x("pop"),P(`Planificada: ${he($[y])} \xB7 ${Ne[_].label}`),V.emit("changed")})},m=async()=>{let $=await se(rn,{initial:n,prods:o});$==="deleted"?a():$&&s($)};return p`<div class="sheet-body">
    <div class="sheet-title">
      <span class="recipe-emoji big">${n.emoji}</span>
      <div class="grow min0"><h2>${n.name}</h2><p class="muted small">${n.servings} raciones</p></div>
      <button class="icon-btn" onClick=${m} aria-label="Editar"><${w} name="edit" /></button>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${w} name="close" /></button>
    </div>

    <div class=${`status-banner ${u.tone}`}>${u.text}</div>

    <h3 class="section-label">Ingredientes</h3>
    <div class="ingredients">
      ${c.items.map($=>p`<div class="ingredient">
        <${Ie} url=${$.product?$.product.photo?.url||$.product.imageUrl:null} emoji=${ie($.product?.category||"")} size=${42} />
        <div class="grow min0">
          <strong class="ellipsis">${$.ingredient.name}</strong>
          <span class="muted small">
            ${$.product?`Usa ${D($.ingredient.quantity)} ${$.ingredient.unit} \xB7 tienes ${D($.inStock)} \xB7 quedar\xE1n ${D(Math.max($.after,0))}`:`${D($.ingredient.quantity)} ${$.ingredient.unit} \xB7 no est\xE1 en la despensa`}
          </span>
        </div>
        <span class=${`tag ${nn[$.status].tone}`}>${$.status==="NOT_IN_PANTRY"?`Comprar ${D($.toBuy)}`:nn[$.status].label}</span>
      </div>`)}
    </div>

    ${c.toBuy.length>0&&p`<p class="muted small">Para cocinarla y seguir por encima de los mínimos hay que comprar ${c.toBuy.length} ${c.toBuy.length===1?"cosa":"cosas"}${c.estimatedCost>0?` (\u2248 ${ne(c.estimatedCost)})`:""}.</p>`}

    ${n.steps&&p`<h3 class="section-label">Preparación</h3><p class="pre steps">${n.steps}</p>`}

    <div class="stack">
      <button class="btn primary wide" onClick=${r}><${w} name="cook" size=${20} /> Cocinar ahora</button>
      <button class="btn tonal wide" onClick=${h}><${w} name="cart" size=${20} /> Añadir lo necesario a la compra</button>
      <button class="btn text wide" onClick=${g}><${w} name="calendar" size=${20} /> Añadir al plan semanal</button>
    </div>
  </div>`}function rn({initial:e,prods:t,close:a}){let[n,s]=I(e?.name||""),[o,i]=I(String(e?.servings||2)),[c,u]=I(e?.steps||""),[l,h]=I(e?.emoji||pt),[r,g]=I(e?.ingredients||[]),m=async()=>{let _=await ge("A\xF1adir ingrediente",[{label:"\u{1F4DD}  Algo que no est\xE1 en la despensa"},...t.map(C=>({label:`${ie(C.category)}  ${C.name}`}))]);if(_!==null){if(_===0){let C=await G({title:"Ingrediente",label:"Nombre",confirm:"Siguiente"});if(!C?.trim())return;let E=await G({title:C.trim(),label:"Cantidad",inputMode:"decimal",value:"1",suffix:pe,confirm:"A\xF1adir"}),T=oe(E);if(!T)return;g([...r,{productId:"",name:C.trim(),quantity:te(T),unit:pe}])}else{let C=t[_-1],E=await G({title:C.name,label:"\xBFCu\xE1nto usa la receta?",inputMode:"decimal",value:"1",suffix:C.unit,confirm:"A\xF1adir"}),T=oe(E);if(!T)return;let A={productId:C.id,name:C.name,quantity:te(T),unit:C.unit},B=r.some(H=>H.productId===C.id);g(B?r.map(H=>H.productId===C.id?A:H):[...r,A])}x("pop")}},$=async _=>{_.preventDefault();let C={...e||{createdBy:"",photo:null},name:n,servings:parseInt(o,10)||2,steps:c,emoji:l,ingredients:r},E=await M(()=>me.save(C));E&&(x("success"),P("Receta guardada"),V.emit("changed"),a(E))},y=async()=>{await fe({title:"Eliminar receta",message:`\xBFSeguro que quieres eliminar \xAB${e.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await M(async()=>{await me.remove(e),P("Receta eliminada"),V.emit("changed"),a("deleted")})};return p`<form class="sheet-body" onSubmit=${$}>
    <div class="sheet-title">
      <span class="recipe-emoji big pop-in" key=${l}>${l}</span>
      <h2 class="grow">${e?"Editar receta":"Nueva receta"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${w} name="close" /></button>
    </div>
    <div class="emoji-row">
      ${va.map(_=>p`<button type="button" class=${`emoji-choice ${_===l?"selected":""}`} onClick=${()=>h(_)}>${_}</button>`)}
    </div>
    <label class="field"><span>Nombre</span><input required maxlength="60" value=${n} onInput=${_=>s(_.target.value)} placeholder="Macarrones con tomate" /></label>
    <label class="field"><span>Raciones</span><input inputmode="numeric" value=${o} onInput=${_=>i(_.target.value)} /></label>

    <h3 class="section-label">Ingredientes</h3>
    ${r.length===0&&p`<p class="muted small">Añade lo que gasta la receta. Lo que esté en la despensa se descontará al cocinarla.</p>`}
    <div class="ingredients">
      ${r.map((_,C)=>{let E=t.find(T=>T.id===_.productId);return p`<div class="ingredient">
          <span class="group-emoji">${ie(E?.category||"")}</span>
          <div class="grow min0"><strong class="ellipsis">${_.name}</strong>
            <span class="muted small">${D(_.quantity)} ${_.unit}${E?"":" \xB7 no est\xE1 en la despensa"}</span></div>
          <button type="button" class="icon-btn small" aria-label="Quitar" onClick=${()=>g(r.filter((T,A)=>A!==C))}><${w} name="close" size=${18} /></button>
        </div>`})}
    </div>
    <button type="button" class="btn tonal wide" onClick=${m}><${w} name="add" size=${20} /> Añadir ingrediente</button>

    <label class="field"><span>Preparación</span><textarea rows="5" value=${c} onInput=${_=>u(_.target.value)} placeholder="1. Cuece la pasta…"></textarea></label>

    <button class="btn primary wide" type="submit"><${w} name="check" size=${20} /> Guardar receta</button>
    ${e&&p`<button type="button" class="btn danger wide" onClick=${y}><${w} name="delete" size=${20} /> Eliminar receta</button>`}
  </form>`}function cn({active:e}){let[t,a]=I(()=>Je(ae())),[n,s]=I(null),[o,i]=I([]),[c,u]=I(null),[l,h]=I(0),r=Y(0),g=async(A=!1)=>{let B=++r.current;await M(async()=>{await U.current();let[H,K]=await Promise.all([me.all(),ce.week(t)]);if(B!==r.current)return;i(H),s(K),u(null);let q=await ce.analyze(t).catch(()=>null);B===r.current&&u(q||"error")},{loading:!1,onError:A?()=>{}:ee})};R(()=>{e&&g()},[e,t]),$e(A=>A==="changed"&&e&&g(!0));let m=A=>{a(X(t,A*7)),h(l+1),s(null)},$=async(A,B,H,K)=>{let q=[];K&&q.push({label:"\u{1F469}\u200D\u{1F373}  Ver / cocinar la receta",action:"view"}),H&&q.push({label:"\u{1F5D1}\uFE0F  Quitar",action:"clear",danger:!0}),q.push({label:"\u270F\uFE0F  Escribir otra cosa",action:"free"}),o.forEach(b=>q.push({label:`${b.emoji}  ${b.name}`,action:"recipe",recipe:b}));let f=await ge(`${Ye(xe(Me(A)))} \xB7 ${B.label}`,q);if(f===null)return;let d=q[f];if(d.action==="view"){P("Abre la pesta\xF1a Recetas para cocinarla");return}if(d.action==="clear"){await M(async()=>{await ce.clear(H),g(!0)});return}let v="";d.action==="free"&&(v=await G({title:B.label,label:"\xBFQu\xE9 vas a comer?",value:H&&!H.recipeId?H.title:""}),!v?.trim())||await M(async()=>{await ce.set(A,B.key,d.recipe||null,v),x("pop"),g(!0)})},y=async()=>{await M(async()=>{let A=await ce.copyPreviousWeek(t);x(A?"pop":"tap"),P(A===0?"No hab\xEDa nada nuevo que copiar":A===1?"1 comida copiada":`${A} comidas copiadas`),g(!0)})},_=async()=>{await se(es,{weekStart:t}),g(!0)},C=Je(ae()),E=t===C?"Esta semana":t===X(C,-7)?"Semana pasada":t===X(C,7)?"Semana que viene":"",T=c&&c!=="error"?c.toBuy.length:0;return p`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Semana</h1></header>

    <div class="week-nav card soft">
      <button class="icon-btn" onClick=${()=>m(-1)} aria-label="Semana anterior"><${w} name="chevron_left" /></button>
      <button class="grow plain center" onClick=${()=>a(C)}>
        <strong>${he(t)} – ${he(X(t,6))}</strong>
        <span class="muted small block">${E}</span>
      </button>
      <button class="icon-btn" onClick=${()=>m(1)} aria-label="Semana siguiente"><${w} name="chevron_right" /></button>
    </div>

    <button class="card forecast" onClick=${_}>
      <${w} name="insights" size=${28} />
      <span class="grow left">
        <strong>Previsión de la compra</strong>
        <span class="muted small block">
          ${c?c==="error"?"No se ha podido calcular":c.plannedMeals===0&&T===0?"Planifica comidas para ver qu\xE9 hay que comprar":`\u2248 ${ne(c.estimatedCost)} \xB7 ${T===1?"1 producto":`${T} productos`}`:"Calculando\u2026"}
        </span>
      </span>
      <${w} name="chevron_right" />
    </button>
    <button class="btn text" onClick=${y}><${w} name="copy" size=${18} /> Copiar la semana anterior</button>

    <div class="days" key=${l}>
      ${Array.from({length:7},(A,B)=>{let H=X(t,B),K=H<ae();return p`<div class=${`card day enter ${K?"past":""}`} style=${`--i:${B}`}>
          <div class="day-header">
            <strong>${Ye(xe(Me(H)))}</strong>
            <span class="muted small">${he(H)}</span>
            ${H===ae()&&p`<span class="tag primary">Hoy</span>`}
          </div>
          ${Ne.map(q=>{let f=(n||[]).find(v=>v.date===H&&v.slot===q.key),d=f?.recipeId?o.find(v=>v.id===f.recipeId):null;return p`<button class="slot" onClick=${()=>$(H,q,f,d)}>
              <span class="slot-emoji">${d?.emoji||q.emoji}</span>
              <span class="grow left min0">
                <span class="muted tiny block">${q.label}</span>
                <span class=${`ellipsis block ${f?"":"muted"}`}>${f?f.title:"+ A\xF1adir"}</span>
              </span>
              ${d&&p`<span class="tag primary">Receta</span>`}
            </button>`})}
        </div>`})}
    </div>
  </section>`}var Zn={RECIPES:"Por las recetas del plan",HABITUAL:"Por lo que sol\xE9is gastar",BELOW_MINIMUM:"Est\xE1 bajo m\xEDnimo"};function es({weekStart:e,close:t}){let[a,n]=I(null);R(()=>{M(async()=>n(await ce.analyze(e)),{loading:!1})},[]);let s=async()=>{await M(async()=>{let i=await ce.addToShopping(a);x("pop"),P(i===1?"1 producto a\xF1adido a la compra":`${i} productos a\xF1adidos a la compra`),V.emit("changed"),t()})},o=a?.needs.filter(i=>i.toBuy<=0)||[];return p`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow"><h2>Previsión de la compra</h2><p class="muted small">${he(e)} – ${he(X(e,6))}</p></div>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${w} name="close" /></button>
    </div>
    ${!a&&p`<div class="skeleton"></div><div class="skeleton"></div>`}
    ${a&&p`
      <div class="card soft total-card">
        <span class="muted small">Coste estimado de la semana</span>
        <strong class="total">${ne(a.estimatedCost)}</strong>
        <span class="muted small">${a.plannedMeals===1?"1 comida planificada":`${a.plannedMeals} comidas planificadas`}
          ${a.withoutPrice>0?` \xB7 ${a.withoutPrice} sin precio`:""}</span>
      </div>
      ${a.toBuy.length===0&&p`<div class="empty small"><div class="big-emoji">🎉</div><h2>Tienes todo lo necesario</h2>
        <p class="muted">Con el plan y lo que soléis gastar, no hace falta comprar nada esta semana.</p></div>`}
      ${a.toBuy.length>0&&p`<h3 class="section-label">Hay que comprar</h3>`}
      ${a.toBuy.map((i,c)=>p`<div class="need enter" style=${`--i:${c}`}>
        <div class="grow min0">
          <strong>${i.name}</strong> ${i.isUrgent&&p`<span class="tag danger">No llega</span>`}
          <span class="muted small block">${Zn[i.reason]} · plan ${D(i.planned)} · habitual ${D(i.habitual)} · tienes ${D(i.inStock)} ${i.unit}</span>
        </div>
        <div class="right">
          <strong class="primary-text">Comprar ${D(i.toBuy)} ${i.unit}</strong>
          <span class="muted small block">${i.estimatedCost!=null?ne(i.estimatedCost):"Sin precio"}</span>
        </div>
      </div>`)}
      ${o.length>0&&p`<h3 class="section-label">Cubierto ✅</h3>
        ${o.map(i=>p`<div class="need covered"><span class="grow">${i.name}</span><span class="muted small">tienes ${D(i.inStock)} ${i.unit}</span></div>`)}`}
      ${a.toBuy.length>0&&p`<button class="btn primary wide" onClick=${s}><${w} name="cart" size=${20} /> Añadir todo a la compra (${a.toBuy.length})</button>`}
    `}
  </div>`}function ln({active:e,onLogout:t,onNoHouse:a,openSettingsRequest:n}){let[s,o]=I(null),[i,c]=I([]),[u,l]=I(null),[h,r]=I({}),g=async(d=!1)=>{await M(async()=>{let v=await U.current(),[b,L,J]=await Promise.all([U.mine(),le.me(!0),le.many(v.memberIds,!0)]);o(v),c(b),l(L),r(J)},{loading:!1,onError:d?()=>{}:ee})};R(()=>{e&&g()},[e]),$e(d=>d==="changed"&&e&&g(!0)),R(()=>{e&&n&&H()},[n]);let m=async()=>{await navigator.clipboard?.writeText(s.inviteCode).catch(()=>{}),x("pop"),P("C\xF3digo copiado")},$=()=>{let d=`\xA1\xDAnete a \xAB${s.name}\xBB en Stock Casa! C\xF3digo: ${s.inviteCode}
${location.origin}${location.pathname}`;navigator.share?navigator.share({text:d}).catch(()=>{}):m()},y=d=>{U.switchTo(d),x("pop"),P(`Ahora est\xE1s en \xAB${d.name}\xBB`),V.emit("changed"),g(!0)},_=async()=>{let d=await G({title:"Unirse con c\xF3digo",label:"C\xF3digo de 6 caracteres",maxLength:6,confirm:"Unirme"});d&&await M(async()=>{let v=await U.join(d);Ue(),x("success"),P(`Ahora est\xE1s en \xAB${v.name}\xBB`),V.emit("changed"),g(!0)})},C=async()=>{let d=await G({title:"Crear otra casa",label:"Nombre",confirm:"Crear"});d&&await M(async()=>{let v=await U.create(d);x("success"),P(`Casa \xAB${v.name}\xBB creada`),V.emit("changed"),g(!0)})},E=async()=>{let d=await G({title:"Cambiar nombre",label:"Nombre de la casa",value:s.name});d&&await M(async()=>{await U.rename(s,d),g(!0)})},T=async()=>{let d=s.memberIds.length<=1,v=i.length<=1?`

Es tu \xFAnica casa: despu\xE9s podr\xE1s crear otra o unirte a una con su c\xF3digo.`:"";await fe({title:d?"Eliminar casa":"Salir de la casa",message:(d?`Eres el \xFAnico miembro de \xAB${s.name}\xBB. Se borrar\xE1n sus productos y su lista de la compra.`:`Dejar\xE1s de ver \xAB${s.name}\xBB. Los dem\xE1s miembros la seguir\xE1n teniendo.`)+v,confirm:d?"Eliminar":"Salir",danger:!0})&&await M(async()=>{await U.leave(s),P("Has salido de la casa"),(await U.mine()).length?(V.emit("changed"),g(!0)):a()})},A=async()=>{await fe({title:"Cerrar sesi\xF3n",message:"\xBFSeguro que quieres cerrar sesi\xF3n en este dispositivo?",confirm:"Cerrar sesi\xF3n"})&&(await M(we.logout),t())},B=async()=>{await se(ts,{profile:u})&&g(!0)};async function H(){let d=s||await U.current().catch(()=>null);await se(as,{house:d}),g(!0)}let K=()=>se(ns,{}),q=async()=>{let v=["\xA1Prueba Stock Casa! \u{1F3E0} La despensa y la lista de la compra de casa, compartidas.","","\u{1F34E} C\xF3mo instalarla en iPhone:",`1. Abre este enlace en Safari (tiene que ser Safari): ${`${location.origin}${location.pathname}`}`,"2. Toca el bot\xF3n Compartir (el cuadrado con la flecha hacia arriba).","3. Elige \xABA\xF1adir a pantalla de inicio\xBB y pulsa \xABA\xF1adir\xBB.","","\u{1F916} \xBFTienes Android? Abre el mismo enlace en Chrome y elige \u22EE \u2192 \xABA\xF1adir a pantalla de inicio\xBB, o p\xEDdeme la app de Android (Casa \u2192 Compartir Stock Casa).","",`Despu\xE9s crea tu cuenta y \xFAnete a nuestra casa con el c\xF3digo ${s.inviteCode}.`].join(`
`);x("pop"),navigator.share?navigator.share({text:v}).catch(()=>{}):(await navigator.clipboard?.writeText(v).catch(()=>{}),P("Mensaje copiado: p\xE9galo en WhatsApp o donde quieras"))};if(!s)return p`<section class="tab"><header class="tab-header"><h1 class="brand">Casa</h1></header>
    <div class="skeleton-list"><div class="skeleton tall"></div><div class="skeleton"></div></div></section>`;let f=S.current()?.userId;return p`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Casa</h1></header>

    <div class="card hero enter" style="--i:0">
      <span class="hero-emoji">🏠</span>
      <div class="grow min0">
        <h2 class="ellipsis">${s.name}</h2>
        <p class="muted small">${s.memberIds.length===1?"Solo t\xFA":`${s.memberIds.length} miembros`} · ${Ke(s.shoppingDay)}</p>
      </div>
      <button class="icon-btn" onClick=${E} aria-label="Cambiar nombre"><${w} name="edit" /></button>
    </div>

    <div class="card enter" style="--i:1">
      <h3>Invitar a alguien</h3>
      <p class="muted small">Comparte este código: quien lo introduzca verá y editará esta misma casa.</p>
      <div class="invite-code" onClick=${m}>${s.inviteCode}</div>
      <div class="row-2">
        <button class="btn tonal" onClick=${m}><${w} name="copy" size=${18} /> Copiar</button>
        <button class="btn tonal" onClick=${$}><${w} name="share" size=${18} /> Compartir</button>
      </div>
    </div>

    <div class="card enter" style="--i:2">
      <h3>Miembros</h3>
      ${s.memberIds.map((d,v)=>{let b=h[d]||{id:d,email:s.memberEmails[v]||"",avatarColor:qe[v%qe.length]};return p`<div class="member">
          <${De} profile=${b} size=${40} />
          <div class="grow min0">
            <strong class="ellipsis block">${re(b)}${d===f?" (t\xFA)":""}</strong>
            <span class="muted small ellipsis block">${b.email}</span>
          </div>
          ${d===s.ownerId&&p`<span class="tag primary">Creador</span>`}
        </div>`})}
    </div>

    <div class="card enter" style="--i:3">
      <h3>Mis casas</h3>
      ${i.map(d=>p`<button class="house-row" onClick=${()=>d.id!==s.id&&y(d)}>
        <span class="grow left ellipsis">${d.name}</span>
        ${d.id===s.id?p`<span class="tag success">Abierta</span>`:p`<span class="muted small">Abrir</span>`}
      </button>`)}
      <div class="row-2">
        <button class="btn tonal" onClick=${_}><${w} name="login" size=${18} /> Unirme</button>
        <button class="btn tonal" onClick=${C}><${w} name="add" size=${18} /> Crear</button>
      </div>
    </div>

    <div class="card enter" style="--i:4">
      <h3>Tu cuenta</h3>
      ${u&&p`<button class="member plain" onClick=${B}>
        <${De} profile=${u} size=${52} />
        <div class="grow min0 left"><strong class="ellipsis block big-text">${re(u)}</strong><span class="muted small ellipsis block">${u.email}</span></div>
        <${w} name="edit" />
      </button>`}
      <button class="btn primary wide" onClick=${H}><${w} name="settings" size=${20} /> Ajustes</button>
      <button class="btn tonal wide" onClick=${q}><${w} name="share" size=${20} /> Compartir Stock Casa</button>
      <button class="btn tonal wide" onClick=${K}><${w} name="home" size=${20} /> Instalar en el móvil</button>
      <button class="btn text wide" onClick=${A}><${w} name="logout" size=${20} /> Cerrar sesión</button>
    </div>

    <button class="btn danger wide enter" style="--i:5" onClick=${T}><${w} name="logout" size=${20} /> ${s.memberIds.length<=1?"Eliminar casa":"Salir de la casa"}</button>
    <p class="muted tiny center">Stock Casa web · mismos datos que la app de Android</p>
  </section>`}function ts({profile:e,close:t}){let[a,n]=I(e.nickname),[s,o]=I(e.avatarColor),[i,c]=I(void 0),[u,l]=I(null),h=Y(),r={...e,nickname:a||e.nickname,avatarColor:s,avatar:i===null?null:u?{url:u}:e.avatar},g=async $=>{let y=$.target.files?.[0];if($.target.value="",!y)return;let _=await vt(y,600);c(_),l(URL.createObjectURL(_))};return p`<form class="sheet-body" onSubmit=${async $=>{$.preventDefault();let y=await M(()=>le.save({nickname:a,avatarColor:s,photo:i}));y&&(x("success"),P("Perfil guardado"),V.emit("changed"),t(y))}}>
    <div class="sheet-title"><h2 class="grow">Tu perfil</h2>
      <button type="button" class="icon-btn" onClick=${()=>t(null)} aria-label="Cerrar"><${w} name="close" /></button></div>
    <div class="center-col">
      <button type="button" class="plain" onClick=${()=>h.current.click()}><${De} profile=${r} size=${112} /></button>
      <strong class="big-text">${re(r)}</strong>
      <div class="row-2">
        <button type="button" class="btn tonal small" onClick=${()=>h.current.click()}><${w} name="camera" size=${18} /> Foto</button>
        ${r.avatar&&p`<button type="button" class="btn text small" onClick=${()=>{c(null),l(null)}}>Quitar foto</button>`}
      </div>
      <input ref=${h} type="file" accept="image/*" hidden onChange=${g} />
    </div>
    <label class="field"><span>Apodo</span><input maxlength="24" value=${a} onInput=${$=>n($.target.value)} /></label>
    <span class="field-label">Color del avatar</span>
    <div class="color-row">
      ${qe.map($=>p`<button type="button" class=${`color-dot ${$===s?"selected":""}`} style=${`background:${$}`}
        aria-label="Color" onClick=${()=>{o($),x("tap")}}></button>`)}
    </div>
    <button class="btn primary wide" type="submit"><${w} name="check" size=${20} /> Guardar</button>
  </form>`}function as({house:e,close:t}){let[a,n]=I(Pe.get()),[s,o]=I(e),i=Y(),c=h=>n(Pe.set(h)),u=(h,r)=>{c({theme:h.key}),Le(r),x("pop")},l=async h=>{if(!s||h===s.shoppingDay)return;let r=await M(()=>U.setShoppingDay(s,h),{loading:!1});r&&(o(r),x("pop"),Le(i.current),V.emit("changed"))};return p`<div class="sheet-body">
    <div class="sheet-title"><h2 class="grow">Ajustes</h2>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${w} name="close" /></button></div>

    <div class="card">
      <h3>Color de la app</h3>
      <p class="muted small">Solo cambia en este dispositivo</p>
      <div class="theme-row">
        ${gt.map(h=>p`<button class=${`theme-choice ${a.theme===h.key?"selected":""}`} onClick=${r=>u(h,r.currentTarget.firstChild)}>
          <span class="swatch" style=${`background:${h.color};border-color:${h.soft}`}>${a.theme===h.key&&p`<${w} name="check" size=${22} />`}</span>
          <span>${h.label}</span>
        </button>`)}
      </div>
    </div>

    ${s&&p`<div class="card">
      <h3>Día de compra semanal</h3>
      <p class="muted small">Lo comparten todos los de «${s.name}»</p>
      <div class="chips wrap">
        ${[0,1,2,3,4,5,6,7].map(h=>p`<button class=${`chip ${s.shoppingDay===h?"checked":""}`} onClick=${()=>l(h)}>
          ${h===0?"Ninguno":ba(h)}
        </button>`)}
      </div>
      <p class="primary-text strong" ref=${i}>${Ke(s.shoppingDay)}</p>
      <p class="muted small">En el iPhone la web no puede mandar avisos como la app de Android; verás el día de compra en la pestaña Compra.</p>
    </div>`}

    <div class="card">
      <h3>Sonidos y vibración</h3>
      <label class="switch-row"><span>Sonidos</span>
        <input type="checkbox" class="switch" checked=${a.sounds} onChange=${h=>{c({sounds:h.target.checked}),h.target.checked&&x("check")}} /></label>
      <label class="switch-row"><span>Vibración (Android)</span>
        <input type="checkbox" class="switch" checked=${a.vibration} onChange=${h=>c({vibration:h.target.checked})} /></label>
      <p class="muted small">Pequeños sonidos al añadir, marcar o terminar la compra.</p>
    </div>
  </div>`}function ns({close:e}){let t=/iPhone|iPad|iPod/.test(navigator.userAgent);return p`<div class="sheet-body">
    <div class="sheet-title"><h2 class="grow">Instalar Stock Casa</h2>
      <button class="icon-btn" onClick=${()=>e()} aria-label="Cerrar"><${w} name="close" /></button></div>
    <p class="muted">Así tendrás Stock Casa en la pantalla de inicio, a pantalla completa, como una app más.</p>
    <ol class="steps-list">
      ${t?p`
        <li>Abre esta página en <strong>Safari</strong>.</li>
        <li>Toca el botón <strong>Compartir</strong> (el cuadrado con la flecha hacia arriba).</li>
        <li>Elige <strong>«Añadir a pantalla de inicio»</strong> y pulsa <strong>Añadir</strong>.</li>
      `:p`
        <li>Abre esta página en <strong>Chrome</strong>.</li>
        <li>Toca el menú <strong>⋮</strong> de arriba a la derecha.</li>
        <li>Elige <strong>«Añadir a pantalla de inicio»</strong> o <strong>«Instalar aplicación»</strong>.</li>
      `}
    </ol>
    <p class="muted small">Si tienes Android, también puedes usar la app nativa (con avisos del día de compra).</p>
  </div>`}var ss=[{key:"pantry",label:"Despensa",icon:"pantry"},{key:"shopping",label:"Compra",icon:"cart"},{key:"recipes",label:"Recetas",icon:"recipe"},{key:"plan",label:"Semana",icon:"calendar"},{key:"house",label:"Casa",icon:"home"}];function os(){let[e,t]=I(()=>we.isLoggedIn()?"home":"login"),[a,n]=I(()=>location.hash==="#compra"?"shopping":"pantry"),[s,o]=I(()=>new Set([a])),[i,c]=I(0),[u,l]=I(0);R(()=>{Pa(m=>{m.noHouse?t("setup"):(S.clear(),t("login"))})},[]);let h=(m,$)=>{m!==a&&x("tap"),n(m),o(new Set([...s,m])),$==="settings"&&l(Date.now()),window.scrollTo({top:0})},r=async()=>{try{let m=await U.mine();t(m.length?"home":"setup")}catch{t("home")}};if(e==="login")return p`<${Ya} onLoggedIn=${r} onRegister=${()=>t("register")} />`;if(e==="register")return p`<${Ka} onRegistered=${()=>t("setup")} onBack=${()=>t("login")} />`;if(e==="setup")return p`<${Xa} onReady=${()=>{n("pantry"),t("home")}}
      onLogout=${async()=>{await we.logout(),t("login")}} />`;let g={goTo:h,setBadge:c};return p`<div class="app">
    <div class="tabs-content">
      ${s.has("pantry")&&p`<div class=${`tab-page ${a==="pantry"?"active":""}`}><${en} active=${a==="pantry"} ...${g} /></div>`}
      ${s.has("shopping")&&p`<div class=${`tab-page ${a==="shopping"?"active":""}`}><${an} active=${a==="shopping"} ...${g} /></div>`}
      ${s.has("recipes")&&p`<div class=${`tab-page ${a==="recipes"?"active":""}`}><${on} active=${a==="recipes"} ...${g} /></div>`}
      ${s.has("plan")&&p`<div class=${`tab-page ${a==="plan"?"active":""}`}><${cn} active=${a==="plan"} ...${g} /></div>`}
      ${s.has("house")&&p`<div class=${`tab-page ${a==="house"?"active":""}`}><${ln} active=${a==="house"}
        openSettingsRequest=${u} onLogout=${()=>t("login")} onNoHouse=${()=>t("setup")} /></div>`}
    </div>
    <nav class="bottom-nav">
      ${ss.map(m=>p`<button class=${`nav-item ${a===m.key?"active":""}`} onClick=${()=>h(m.key)} aria-label=${m.label}>
        <span class="nav-icon" key=${a===m.key?"on":"off"}><${w} name=${m.icon} size=${24} />
          ${m.key==="shopping"&&i>0&&p`<span class="badge">${i>99?"99+":i}</span>`}
        </span>
        <span class="nav-label">${m.label}</span>
      </button>`)}
    </nav>
  </div>`}Nt(Pe.get().theme);var un=document.getElementById("app");un.textContent="";Se(p`<${os} />`,un);"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});
