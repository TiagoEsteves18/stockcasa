var vt,Q,ga,jn,Te,pa,$a,Bt,Ot,Ft,Ut,Vn,st={},va=[],Gn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Rt=Array.isArray;function Ee(e,t){for(var a in t)e[a]=t[a];return e}function ba(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function jt(e,t,a){var n,s,o,i={};for(o in t)o=="key"?n=t[o]:o=="ref"?s=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?vt.call(arguments,2):a),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return ft(e,i,n,s,null)}function ft(e,t,a,n,s){var o={type:e,props:t,key:a,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++ga,__i:-1,__u:0};return s==null&&Q.vnode!=null&&Q.vnode(o),o}function bt(e){return e.children}function gt(e,t){this.props=e,this.context=t}function Re(e,t){if(t==null)return e.__?Re(e.__,e.__i+1):null;for(var a;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null)return a.__e;return typeof e.type=="function"?Re(e):null}function ya(e){var t,a;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null){e.__e=e.__c.base=a.__e;break}return ya(e)}}function ma(e){(!e.__d&&(e.__d=!0)&&Te.push(e)&&!$t.__r++||pa!==Q.debounceRendering)&&((pa=Q.debounceRendering)||$a)($t)}function $t(){var e,t,a,n,s,o,i,c;for(Te.sort(Bt);e=Te.shift();)e.__d&&(t=Te.length,n=void 0,o=(s=(a=e).__v).__e,i=[],c=[],a.__P&&((n=Ee({},s)).__v=s.__v+1,Q.vnode&&Q.vnode(n),Vt(a.__P,n,s,a.__n,a.__P.namespaceURI,32&s.__u?[o]:null,i,o??Re(s),!!(32&s.__u),c),n.__v=s.__v,n.__.__k[n.__i]=n,ka(i,n,c),n.__e!=o&&ya(n)),Te.length>t&&Te.sort(Bt));$t.__r=0}function _a(e,t,a,n,s,o,i,c,p,m,h){var r,f,u,g,v,y=n&&n.__k||va,w=t.length;for(a.__d=p,Qn(a,t,y),p=a.__d,r=0;r<w;r++)(u=a.__k[r])!=null&&(f=u.__i===-1?st:y[u.__i]||st,u.__i=r,Vt(e,u,f,s,o,i,c,p,m,h),g=u.__e,u.ref&&f.ref!=u.ref&&(f.ref&&Gt(f.ref,null,u),h.push(u.ref,u.__c||g,u)),v==null&&g!=null&&(v=g),65536&u.__u||f.__k===u.__k?p=wa(u,p,e):typeof u.type=="function"&&u.__d!==void 0?p=u.__d:g&&(p=g.nextSibling),u.__d=void 0,u.__u&=-196609);a.__d=p,a.__e=v}function Qn(e,t,a){var n,s,o,i,c,p=t.length,m=a.length,h=m,r=0;for(e.__k=[],n=0;n<p;n++)(s=t[n])!=null&&typeof s!="boolean"&&typeof s!="function"?(i=n+r,(s=e.__k[n]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?ft(null,s,null,null,null):Rt(s)?ft(bt,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?ft(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,o=null,(c=s.__i=Wn(s,a,i,h))!==-1&&(h--,(o=a[c])&&(o.__u|=131072)),o==null||o.__v===null?(c==-1&&r--,typeof s.type!="function"&&(s.__u|=65536)):c!==i&&(c==i-1?r--:c==i+1?r++:(c>i?r--:r++,s.__u|=65536))):s=e.__k[n]=null;if(h)for(n=0;n<m;n++)(o=a[n])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=Re(o)),Ca(o,o))}function wa(e,t,a){var n,s;if(typeof e.type=="function"){for(n=e.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=e,t=wa(n[s],t,a));return t}e.__e!=t&&(t&&e.type&&!a.contains(t)&&(t=Re(e)),a.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Wn(e,t,a,n){var s=e.key,o=e.type,i=a-1,c=a+1,p=t[a];if(p===null||p&&s==p.key&&o===p.type&&!(131072&p.__u))return a;if(n>(p!=null&&!(131072&p.__u)?1:0))for(;i>=0||c<t.length;){if(i>=0){if((p=t[i])&&!(131072&p.__u)&&s==p.key&&o===p.type)return i;i--}if(c<t.length){if((p=t[c])&&!(131072&p.__u)&&s==p.key&&o===p.type)return c;c++}}return-1}function ha(e,t,a){t[0]==="-"?e.setProperty(t,a??""):e[t]=a==null?"":typeof a!="number"||Gn.test(t)?a:a+"px"}function ht(e,t,a,n,s){var o;e:if(t==="style")if(typeof a=="string")e.style.cssText=a;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)a&&t in a||ha(e.style,t,"");if(a)for(t in a)n&&a[t]===n[t]||ha(e.style,t,a[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=a,a?n?a.u=n.u:(a.u=Ot,e.addEventListener(t,o?Ut:Ft,o)):e.removeEventListener(t,o?Ut:Ft,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=a??"";break e}catch{}typeof a=="function"||(a==null||a===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&a==1?"":a))}}function fa(e){return function(t){if(this.l){var a=this.l[t.type+e];if(t.t==null)t.t=Ot++;else if(t.t<a.u)return;return a(Q.event?Q.event(t):t)}}}function Vt(e,t,a,n,s,o,i,c,p,m){var h,r,f,u,g,v,y,w,A,N,L,I,_,k,x,q,E=t.type;if(t.constructor!==void 0)return null;128&a.__u&&(p=!!(32&a.__u),o=[c=t.__e=a.__e]),(h=Q.__b)&&h(t);e:if(typeof E=="function")try{if(w=t.props,A="prototype"in E&&E.prototype.render,N=(h=E.contextType)&&n[h.__c],L=h?N?N.props.value:h.__:n,a.__c?y=(r=t.__c=a.__c).__=r.__E:(A?t.__c=r=new E(w,L):(t.__c=r=new gt(w,L),r.constructor=E,r.render=Jn),N&&N.sub(r),r.props=w,r.state||(r.state={}),r.context=L,r.__n=n,f=r.__d=!0,r.__h=[],r._sb=[]),A&&r.__s==null&&(r.__s=r.state),A&&E.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=Ee({},r.__s)),Ee(r.__s,E.getDerivedStateFromProps(w,r.__s))),u=r.props,g=r.state,r.__v=t,f)A&&E.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),A&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(A&&E.getDerivedStateFromProps==null&&w!==u&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(w,L),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(w,r.__s,L)===!1||t.__v===a.__v)){for(t.__v!==a.__v&&(r.props=w,r.state=r.__s,r.__d=!1),t.__e=a.__e,t.__k=a.__k,t.__k.some(function(d){d&&(d.__=t)}),I=0;I<r._sb.length;I++)r.__h.push(r._sb[I]);r._sb=[],r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(w,r.__s,L),A&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(u,g,v)})}if(r.context=L,r.props=w,r.__P=e,r.__e=!1,_=Q.__r,k=0,A){for(r.state=r.__s,r.__d=!1,_&&_(t),h=r.render(r.props,r.state,r.context),x=0;x<r._sb.length;x++)r.__h.push(r._sb[x]);r._sb=[]}else do r.__d=!1,_&&_(t),h=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++k<25);r.state=r.__s,r.getChildContext!=null&&(n=Ee(Ee({},n),r.getChildContext())),A&&!f&&r.getSnapshotBeforeUpdate!=null&&(v=r.getSnapshotBeforeUpdate(u,g)),_a(e,Rt(q=h!=null&&h.type===bt&&h.key==null?h.props.children:h)?q:[q],t,a,n,s,o,i,c,p,m),r.base=t.__e,t.__u&=-161,r.__h.length&&i.push(r),y&&(r.__E=r.__=null)}catch(d){if(t.__v=null,p||o!=null){for(t.__u|=p?160:128;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,t.__e=c}else t.__e=a.__e,t.__k=a.__k;Q.__e(d,t,a)}else o==null&&t.__v===a.__v?(t.__k=a.__k,t.__e=a.__e):t.__e=Yn(a.__e,t,a,n,s,o,i,p,m);(h=Q.diffed)&&h(t)}function ka(e,t,a){t.__d=void 0;for(var n=0;n<a.length;n++)Gt(a[n],a[++n],a[++n]);Q.__c&&Q.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){Q.__e(o,s.__v)}})}function Yn(e,t,a,n,s,o,i,c,p){var m,h,r,f,u,g,v,y=a.props,w=t.props,A=t.type;if(A==="svg"?s="http://www.w3.org/2000/svg":A==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(m=0;m<o.length;m++)if((u=o[m])&&"setAttribute"in u==!!A&&(A?u.localName===A:u.nodeType===3)){e=u,o[m]=null;break}}if(e==null){if(A===null)return document.createTextNode(w);e=document.createElementNS(s,A,w.is&&w),c&&(Q.__m&&Q.__m(t,o),c=!1),o=null}if(A===null)y===w||c&&e.data===w||(e.data=w);else{if(o=o&&vt.call(e.childNodes),y=a.props||st,!c&&o!=null)for(y={},m=0;m<e.attributes.length;m++)y[(u=e.attributes[m]).name]=u.value;for(m in y)if(u=y[m],m!="children"){if(m=="dangerouslySetInnerHTML")r=u;else if(!(m in w)){if(m=="value"&&"defaultValue"in w||m=="checked"&&"defaultChecked"in w)continue;ht(e,m,null,u,s)}}for(m in w)u=w[m],m=="children"?f=u:m=="dangerouslySetInnerHTML"?h=u:m=="value"?g=u:m=="checked"?v=u:c&&typeof u!="function"||y[m]===u||ht(e,m,u,y[m],s);if(h)c||r&&(h.__html===r.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(r&&(e.innerHTML=""),_a(e,Rt(f)?f:[f],t,a,n,A==="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,i,o?o[0]:a.__k&&Re(a,0),c,p),o!=null)for(m=o.length;m--;)ba(o[m]);c||(m="value",A==="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[m]||A==="progress"&&!g||A==="option"&&g!==y[m])&&ht(e,m,g,y[m],s),m="checked",v!==void 0&&v!==e[m]&&ht(e,m,v,y[m],s))}return e}function Gt(e,t,a){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(s){Q.__e(s,a)}}function Ca(e,t,a){var n,s;if(Q.unmount&&Q.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Gt(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){Q.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&Ca(n[s],t,a||typeof e.type!="function");a||ba(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Jn(e,t,a){return this.constructor(e,a)}function qe(e,t,a){var n,s,o,i;Q.__&&Q.__(e,t),s=(n=typeof a=="function")?null:a&&a.__k||t.__k,o=[],i=[],Vt(t,e=(!n&&a||t).__k=jt(bt,null,[e]),s||st,st,t.namespaceURI,!n&&a?[a]:s?null:t.firstChild?vt.call(t.childNodes):null,o,!n&&a?a:s?s.__e:t.firstChild,n,i),ka(o,e,i)}vt=va.slice,Q={__e:function(e,t,a,n){for(var s,o,i;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),i=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),i=s.__d),i)return s.__E=s}catch(c){e=c}throw e}},ga=0,jn=function(e){return e!=null&&e.constructor==null},gt.prototype.setState=function(e,t){var a;a=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Ee({},this.state),typeof e=="function"&&(e=e(Ee({},a),this.props)),e&&Ee(a,e),e!=null&&this.__v&&(t&&this._sb.push(t),ma(this))},gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ma(this))},gt.prototype.render=bt,Te=[],$a=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Bt=function(e,t){return e.__v.__b-t.__v.__b},$t.__r=0,Ot=0,Ft=fa(!1),Ut=fa(!0),Vn=0;var ot,Z,Qt,Ia,_t=0,La=[],ae=Q,Sa=ae.__b,xa=ae.__r,Ma=ae.diffed,Ea=ae.__c,za=ae.unmount,Pa=ae.__;function Yt(e,t){ae.__h&&ae.__h(Z,e,_t||t),_t=0;var a=Z.__H||(Z.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function C(e){return _t=1,Xn(qa,e)}function Xn(e,t,a){var n=Yt(ot++,2);if(n.t=e,!n.__c&&(n.__=[a?a(t):qa(void 0,t),function(c){var p=n.__N?n.__N[0]:n.__[0],m=n.t(p,c);p!==m&&(n.__N=[m,n.__[1]],n.__c.setState({}))}],n.__c=Z,!Z.u)){var s=function(c,p,m){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(f){return!!f.__c});if(h.every(function(f){return!f.__N}))return!o||o.call(this,c,p,m);var r=!1;return h.forEach(function(f){if(f.__N){var u=f.__[0];f.__=f.__N,f.__N=void 0,u!==f.__[0]&&(r=!0)}}),!(!r&&n.__c.props===c)&&(!o||o.call(this,c,p,m))};Z.u=!0;var o=Z.shouldComponentUpdate,i=Z.componentWillUpdate;Z.componentWillUpdate=function(c,p,m){if(this.__e){var h=o;o=void 0,s(c,p,m),o=h}i&&i.call(this,c,p,m)},Z.shouldComponentUpdate=s}return n.__N||n.__}function O(e,t){var a=Yt(ot++,3);!ae.__s&&Ta(a.__H,t)&&(a.__=e,a.i=t,Z.__H.__h.push(a))}function R(e){return _t=5,je(function(){return{current:e}},[])}function je(e,t){var a=Yt(ot++,7);return Ta(a.__H,t)&&(a.__=e(),a.__H=t,a.__h=e),a.__}function Kn(){for(var e;e=La.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(yt),e.__H.__h.forEach(Wt),e.__H.__h=[]}catch(t){e.__H.__h=[],ae.__e(t,e.__v)}}ae.__b=function(e){Z=null,Sa&&Sa(e)},ae.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Pa&&Pa(e,t)},ae.__r=function(e){xa&&xa(e),ot=0;var t=(Z=e.__c).__H;t&&(Qt===Z?(t.__h=[],Z.__h=[],t.__.forEach(function(a){a.__N&&(a.__=a.__N),a.i=a.__N=void 0})):(t.__h.forEach(yt),t.__h.forEach(Wt),t.__h=[],ot=0)),Qt=Z},ae.diffed=function(e){Ma&&Ma(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(La.push(t)!==1&&Ia===ae.requestAnimationFrame||((Ia=ae.requestAnimationFrame)||Zn)(Kn)),t.__H.__.forEach(function(a){a.i&&(a.__H=a.i),a.i=void 0})),Qt=Z=null},ae.__c=function(e,t){t.some(function(a){try{a.__h.forEach(yt),a.__h=a.__h.filter(function(n){return!n.__||Wt(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],ae.__e(n,a.__v)}}),Ea&&Ea(e,t)},ae.unmount=function(e){za&&za(e);var t,a=e.__c;a&&a.__H&&(a.__H.__.forEach(function(n){try{yt(n)}catch(s){t=s}}),a.__H=void 0,t&&ae.__e(t,a.__v))};var Aa=typeof requestAnimationFrame=="function";function Zn(e){var t,a=function(){clearTimeout(n),Aa&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);Aa&&(t=requestAnimationFrame(a))}function yt(e){var t=Z,a=e.__c;typeof a=="function"&&(e.__c=void 0,a()),Z=t}function Wt(e){var t=Z;e.__c=e.__(),Z=t}function Ta(e,t){return!e||e.length!==t.length||t.some(function(a,n){return a!==e[n]})}function qa(e,t){return typeof t=="function"?t(e):t}var Na=function(e,t,a,n){var s;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],c=t[o]?(t[0]|=i?1:2,a[t[o++]]):t[++o];i===3?n[0]=c:i===4?n[1]=Object.assign(n[1]||{},c):i===5?(n[1]=n[1]||{})[t[++o]]=c:i===6?n[1][t[++o]]+=c+"":i?(s=e.apply(c,Na(e,c,a,["",null])),n.push(s),c[0]?t[0]|=2:(t[o-2]=0,t[o]=s)):n.push(c)}return n},Ha=new Map;function Da(e){var t=Ha.get(this);return t||(t=new Map,Ha.set(this,t)),(t=Na(this,t.get(e)||(t.set(e,t=function(a){for(var n,s,o=1,i="",c="",p=[0],m=function(f){o===1&&(f||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?p.push(0,f,i):o===3&&(f||i)?(p.push(3,f,i),o=2):o===2&&i==="..."&&f?p.push(4,f,0):o===2&&i&&!f?p.push(5,0,!0,i):o>=5&&((i||!f&&o===5)&&(p.push(o,0,i,s),o=6),f&&(p.push(o,f,0,s),o=6)),i=""},h=0;h<a.length;h++){h&&(o===1&&m(),m(h));for(var r=0;r<a[h].length;r++)n=a[h][r],o===1?n==="<"?(m(),p=[p],o=3):i+=n:o===4?i==="--"&&n===">"?(o=1,i=""):i=n+i[0]:c?n===c?c="":i+=n:n==='"'||n==="'"?c=n:n===">"?(m(),o=1):o&&(n==="="?(o=5,s=i,i=""):n==="/"&&(o<5||a[h][r+1]===">")?(m(),o===3&&(p=p[0]),o=p,(p=p[0]).push(2,0,o),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(m(),o=2):i+=n),o===3&&i==="!--"&&(o=4,p=p[0])}return m(),p}(e)),t),arguments,[])).length>1?t:t[0]}var Jt={clock:{d:["M11.99,2C6.47,2 2,6.48 2,12s4.47,10 9.99,10C17.52,22 22,17.52 22,12S17.52,2 11.99,2zM12,20c-4.42,0 -8,-3.58 -8,-8s3.58,-8 8,-8 8,3.58 8,8 -3.58,8 -8,8zM12.5,7H11v6l5.25,3.15 0.75,-1.23 -4.5,-2.67z"],vb:"24"},chevron_right:{d:["M10,6L8.59,7.41 13.17,12l-4.58,4.59L10,18l6,-6z"],vb:"24"},remove:{d:["M19,13H5v-2h14v2z"],vb:"24"},calendar:{d:["M19,4h-1V2h-2v2H8V2H6v2H5c-1.11,0 -1.99,0.9 -1.99,2L3,20c0,1.1 0.89,2 2,2h14c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM9,14H7v-2h2v2zM13,14h-2v-2h2v2zM17,14h-2v-2h2v2zM9,18H7v-2h2v2zM13,18h-2v-2h2v2zM17,18h-2v-2h2v2z"],vb:"24"},lock:{d:["M18,8h-1V6c0,-2.76 -2.24,-5 -5,-5S7,3.24 7,6v2H6c-1.1,0 -2,0.9 -2,2v10c0,1.1 0.9,2 2,2h12c1.1,0 2,-0.9 2,-2V10c0,-1.1 -0.9,-2 -2,-2zM12,17c-1.1,0 -2,-0.9 -2,-2s0.9,-2 2,-2 2,0.9 2,2 -0.9,2 -2,2zM15.1,8H8.9V6c0,-1.71 1.39,-3.1 3.1,-3.1 1.71,0 3.1,1.39 3.1,3.1v2z"],vb:"24"},cook:{d:["M13.5,0.67s0.74,2.65 0.74,4.8c0,2.06 -1.35,3.73 -3.41,3.73 -2.07,0 -3.63,-1.67 -3.63,-3.73l0.03,-0.36C5.21,7.51 4,10.62 4,14c0,4.42 3.58,8 8,8s8,-3.58 8,-8C20,8.61 17.41,3.8 13.5,0.67zM11.71,19c-1.78,0 -3.22,-1.4 -3.22,-3.14 0,-1.62 1.05,-2.76 2.81,-3.12 1.77,-0.36 3.6,-1.21 4.62,-2.58 0.39,1.29 0.59,2.65 0.59,4.04 0,2.65 -2.15,4.8 -4.8,4.8z"],vb:"24"},mail:{d:["M20,4H4c-1.1,0 -1.99,0.9 -1.99,2L2,18c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM20,8l-8,5 -8,-5V6l8,5 8,-5v2z"],vb:"24"},search:{d:["M15.5,14h-0.79l-0.28,-0.27C15.41,12.59 16,11.11 16,9.5 16,5.91 13.09,3 9.5,3S3,5.91 3,9.5 5.91,16 9.5,16c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99L20.49,19l-4.99,-5zM9.5,14C7.01,14 5,11.99 5,9.5S7.01,5 9.5,5 14,7.01 14,9.5 11.99,14 9.5,14z"],vb:"24"},store:{d:["M20,4H4v2h16V4zM21,14v-2l-1,-5H4l-1,5v2h1v6h10v-6h4v6h2v-6H21zM12,18H6v-4h6V18z"],vb:"24"},bell:{d:["M12,22c1.1,0 2,-0.9 2,-2h-4c0,1.1 0.89,2 2,2zM18,16v-5c0,-3.07 -1.64,-5.64 -4.5,-6.32L13.5,4c0,-0.83 -0.67,-1.5 -1.5,-1.5s-1.5,0.67 -1.5,1.5v0.68C7.63,5.36 6,7.92 6,11v5l-2,2v1h16v-1l-2,-2z"],vb:"24"},share:{d:["M18,16.08c-0.76,0 -1.44,0.3 -1.96,0.77L8.91,12.7c0.05,-0.23 0.09,-0.46 0.09,-0.7s-0.04,-0.47 -0.09,-0.7l7.05,-4.11c0.54,0.5 1.25,0.81 2.04,0.81 1.66,0 3,-1.34 3,-3s-1.34,-3 -3,-3 -3,1.34 -3,3c0,0.24 0.04,0.47 0.09,0.7L8.04,9.81C7.5,9.31 6.79,9 6,9c-1.66,0 -3,1.34 -3,3s1.34,3 3,3c0.79,0 1.5,-0.31 2.04,-0.81l7.12,4.16c-0.05,0.21 -0.08,0.43 -0.08,0.65 0,1.61 1.31,2.92 2.92,2.92 1.61,0 2.92,-1.31 2.92,-2.92s-1.31,-2.92 -2.92,-2.92z"],vb:"24"},login:{d:["M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5,-5L11,7zM20,19h-8v2h8c1.1,0 2,-0.9 2,-2V5c0,-1.1 -0.9,-2 -2,-2h-8v2h8V19z"],vb:"24"},cart:{d:["M7,18c-1.1,0 -1.99,0.9 -1.99,2S5.9,22 7,22s2,-0.9 2,-2 -0.9,-2 -2,-2zM1,2v2h2l3.6,7.59 -1.35,2.45c-0.16,0.28 -0.25,0.61 -0.25,0.96 0,1.1 0.9,2 2,2h12v-2H7.42c-0.14,0 -0.25,-0.11 -0.25,-0.25l0.03,-0.12 0.9,-1.63h7.45c0.75,0 1.41,-0.41 1.75,-1.03l3.58,-6.49c0.08,-0.14 0.12,-0.31 0.12,-0.48 0,-0.55 -0.45,-1 -1,-1H5.21l-0.94,-2H1zM17,18c-1.1,0 -1.99,0.9 -1.99,2s0.89,2 1.99,2 2,-0.9 2,-2 -0.9,-2 -2,-2z"],vb:"24"},insights:{d:["M21,8c-1.45,0 -2.26,1.44 -1.93,2.51l-3.55,3.56c-0.3,-0.09 -0.74,-0.09 -1.04,0l-2.55,-2.55C12.27,10.45 11.46,9 10,9c-1.45,0 -2.27,1.44 -1.93,2.52l-4.56,4.55C2.44,15.74 1,16.55 1,18c0,1.1 0.9,2 2,2c1.45,0 2.26,-1.44 1.93,-2.51l4.55,-4.56c0.3,0.09 0.74,0.09 1.04,0l2.55,2.55C12.73,16.55 13.54,18 15,18c1.45,0 2.27,-1.44 1.93,-2.52l3.56,-3.55C21.56,12.26 23,11.45 23,10C23,8.9 22.1,8 21,8z"],vb:"24"},image:{d:["M21,19V5c0,-1.1 -0.9,-2 -2,-2H5c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2zM8.5,13.5l2.5,3.01L14.5,12l4.5,6H5l3.5,-4.5z"],vb:"24"},close:{d:["M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"],vb:"24"},people:{d:["M16,11c1.66,0 2.99,-1.34 2.99,-3S17.66,5 16,5c-1.66,0 -3,1.34 -3,3s1.34,3 3,3zM8,11c1.66,0 2.99,-1.34 2.99,-3S9.66,5 8,5C6.34,5 5,6.34 5,8s1.34,3 3,3zM8,13c-2.33,0 -7,1.17 -7,3.5V19h14v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5zM16,13c-0.29,0 -0.62,0.02 -0.97,0.05 1.16,0.84 1.97,1.97 1.97,3.45V19h6v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5z"],vb:"24"},add:{d:["M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],vb:"24"},arrow_back:{d:["M20,11H7.83l5.59,-5.59L12,4l-8,8 8,8 1.41,-1.41L7.83,13H20v-2z"],vb:"24"},camera:{d:["M12,12m-3.2,0a3.2,3.2 0,1 1,6.4 0a3.2,3.2 0,1 1,-6.4 0M9,2L7.17,4H4c-1.1,0 -2,0.9 -2,2v12c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2h-3.17L15,2H9zM12,17c-2.76,0 -5,-2.24 -5,-5s2.24,-5 5,-5 5,2.24 5,5 -2.24,5 -5,5z"],vb:"24"},delete:{d:["M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2V7H6v12zM19,4h-3.5l-1,-1h-5l-1,1H5v2h14V4z"],vb:"24"},recipe:{d:["M8.1,13.34l2.83,-2.83L3.91,3.5c-1.56,1.56 -1.56,4.09 0,5.66l4.19,4.18zM14.88,11.53c1.53,0.71 3.68,0.21 5.27,-1.38 1.91,-1.91 2.28,-4.65 0.81,-6.12 -1.46,-1.46 -4.2,-1.1 -6.12,0.81 -1.59,1.59 -2.09,3.74 -1.38,5.27L3.7,19.87l1.41,1.41L12,14.41l6.88,6.88 1.41,-1.41L13.41,13l1.47,-1.47z"],vb:"24"},check:{d:["M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41,-1.41z"],vb:"24"},barcode:{d:["M9.5,6.5v3h-3v-3H9.5M11,5H5v6h6V5L11,5zM9.5,14.5v3h-3v-3H9.5M11,13H5v6h6V13L11,13zM17.5,6.5v3h-3v-3H17.5M19,5h-6v6h6V5L19,5zM13,13h1.5v1.5H13V13zM14.5,14.5H16V16h-1.5V14.5zM16,13h1.5v1.5H16V13zM13,16h1.5v1.5H13V16zM14.5,17.5H16V19h-1.5V17.5zM16,16h1.5v1.5H16V16zM17.5,14.5H19V16h-1.5V14.5zM17.5,17.5H19V19h-1.5V17.5zM22,7h-2V4h-3V2h5V7zM22,22v-5h-2v3h-3v2H22zM2,22h5v-2H4v-3H2V22zM2,2v5h2V4h3V2H2z"],vb:"24"},swap:{d:["M6.99,11L3,15l3.99,4v-3H14v-2H6.99v-3zM21,9l-3.99,-4v3H10v2h7.01v3L21,9z"],vb:"24"},pantry:{d:["M20,2H4c-1.1,0 -2,0.9 -2,2v4c0,0.74 0.4,1.38 1,1.73V20c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2V9.73c0.6,-0.35 1,-0.99 1,-1.73V4c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM20,8H4V4h16v4zM9,12h6v2H9z"],vb:"24"},logout:{d:["M17,7l-1.41,1.41L18.17,11H8v2h10.17l-2.58,2.58L17,17l5,-5zM4,5h8V3H4c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h8v-2H4V5z"],vb:"24"},edit:{d:["M3,17.25V21h3.75L17.81,9.94l-3.75,-3.75L3,17.25zM20.71,7.04c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34c-0.39,-0.39 -1.02,-0.39 -1.41,0l-1.83,1.83 3.75,3.75 1.83,-1.83z"],vb:"24"},settings:{d:["M19.14,12.94c0.04,-0.3 0.06,-0.61 0.06,-0.94c0,-0.32 -0.02,-0.64 -0.07,-0.94l2.03,-1.58c0.18,-0.14 0.23,-0.41 0.12,-0.61l-1.92,-3.32c-0.12,-0.22 -0.37,-0.29 -0.59,-0.22l-2.39,0.96c-0.5,-0.38 -1.03,-0.7 -1.62,-0.94L14.4,2.81c-0.04,-0.24 -0.24,-0.41 -0.48,-0.41h-3.84c-0.24,0 -0.43,0.17 -0.47,0.41L9.25,5.35C8.66,5.59 8.12,5.92 7.63,6.29L5.24,5.33c-0.22,-0.08 -0.47,0 -0.59,0.22L2.74,8.87C2.62,9.08 2.66,9.34 2.86,9.48l2.03,1.58C4.84,11.36 4.8,11.69 4.8,12s0.02,0.64 0.07,0.94l-2.03,1.58c-0.18,0.14 -0.23,0.41 -0.12,0.61l1.92,3.32c0.12,0.22 0.37,0.29 0.59,0.22l2.39,-0.96c0.5,0.38 1.03,0.7 1.62,0.94l0.36,2.54c0.05,0.24 0.24,0.41 0.48,0.41h3.84c0.24,0 0.44,-0.17 0.47,-0.41l0.36,-2.54c0.59,-0.24 1.13,-0.56 1.62,-0.94l2.39,0.96c0.22,0.08 0.47,0 0.59,-0.22l1.92,-3.32c0.12,-0.22 0.07,-0.47 -0.12,-0.61L19.14,12.94zM12,15.6c-1.98,0 -3.6,-1.62 -3.6,-3.6s1.62,-3.6 3.6,-3.6s3.6,1.62 3.6,3.6S13.98,15.6 12,15.6z"],vb:"24"},copy:{d:["M16,1H4c-1.1,0 -2,0.9 -2,2v14h2V3h12V1zM19,5H8c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h11c1.1,0 2,-0.9 2,-2V7c0,-1.1 -0.9,-2 -2,-2zM19,21H8V7h11v14z"],vb:"24"},undo:{d:["M12.5,8c-2.65,0 -5.05,0.99 -6.9,2.6L2,7v9h9l-3.62,-3.62c1.39,-1.16 3.16,-1.88 5.12,-1.88 3.54,0 6.55,2.31 7.6,5.5l2.37,-0.78C21.08,11.03 17.15,8 12.5,8z"],vb:"24"},chevron_left:{d:["M15.41,7.41L14,6l-6,6 6,6 1.41,-1.41L10.83,12z"],vb:"24"},home:{d:["M10,20v-6h4v6h5v-8h3L12,3 2,12h3v8z"],vb:"24"}};Object.assign(Jt,{sun:{vb:"24",d:["M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zM11 20h2v3h-2zM1 11h3v2H1zM20 11h3v2h-3zM4.22 5.64l1.42-1.42 2.12 2.12-1.42 1.42zM16.24 17.66l1.42-1.42 2.12 2.12-1.42 1.42zM4.22 18.36l2.12-2.12 1.42 1.42-2.12 2.12zM16.24 6.34l2.12-2.12 1.42 1.42-2.12 2.12z"]},moon:{vb:"24",d:["M12.3 2.05A10 10 0 1 0 21.95 11.7 7.5 7.5 0 0 1 12.3 2.05z"]},restaurant:{vb:"24",d:["M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"]},receipt:{vb:"24",rule:"evenodd",d:["M5 2h14v20l-2.33-1.5L14.33 22 12 20.5 9.67 22l-2.34-1.5L5 22V2zm2 2v14.4l.33-.2 2.34 1.5L12 18.2l2.33 1.5 2.34-1.5.33.2V4H7zm2 3h6v2H9V7zm0 4h6v2H9v-2z"]},play:{vb:"24",d:["M8 5v14l11-7z"]},sparkle:{vb:"24",d:["M12 2C12.8 7.6 16.4 11.2 22 12 16.4 12.8 12.8 16.4 12 22 11.2 16.4 7.6 12.8 2 12 7.6 11.2 11.2 7.6 12 2z"]},euro:{vb:"24",d:["M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"]},bookmark:{vb:"24",d:["M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"]},arrow_forward:{vb:"24",d:["M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"]},palette:{vb:"24",d:["M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"]},person:{vb:"24",d:["M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"]},volume:{vb:"24",d:["M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"]},hourglass:{vb:"24",d:["M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"]}});var es="https://parseapi.back4app.com/",ts="peyCaKkG6IbflEpErk7t1iEH1fngfxgwUwv17qyI",as="ejB6EBANvzAfnp5Mh6QOIkPtliBJBC1AVTspICfB",Xt="stockcasa.session",wt="stockcasa.houseId",H={current(){try{return JSON.parse(localStorage.getItem(Xt))||null}catch{return null}},save(e){localStorage.setItem(Xt,JSON.stringify(e))},clear(){localStorage.removeItem(Xt),localStorage.removeItem(wt)},token(){return this.current()?.sessionToken||null},email(){return this.current()?.email||""},requireUserId(){let e=this.current()?.userId;if(!e)throw ce.sessionExpired();return e},houseId(){return localStorage.getItem(wt)},requireHouseId(){let e=this.houseId();if(!e)throw new rt;return e},saveHouseId(e){e?localStorage.setItem(wt,e):localStorage.removeItem(wt)}},ce=class e extends Error{constructor(t,a){super(a),this.code=t}get isSessionExpired(){return this.code===209}static fromServer(t,a){let s={100:"No se ha podido conectar con el servidor",101:"No se ha encontrado el elemento. Actualiza la lista",125:"El correo no es v\xE1lido",202:"Ya existe una cuenta con ese correo",203:"Ya existe una cuenta con ese correo",205:"No hay ninguna cuenta con ese correo",209:"Tu sesi\xF3n ha caducado. Vuelve a iniciar sesi\xF3n"}[t];return!s&&t===119&&(s=a?.includes("addField")?"Back4App no deja crear una columna nueva. A\xF1\xE1dela en el panel de Back4App":"Back4App no permite esta operaci\xF3n. Revisa los permisos de la clase"),new e(t,s||a||"Error inesperado del servidor")}static sessionExpired(){return e.fromServer(209)}},rt=class extends Error{constructor(){super("Todav\xEDa no tienes ninguna casa"),this.noHouse=!0}},it=class extends Error{};function W(e,t){if(!e)throw new it(t)}async function Ve(e,t,{body:a,query:n,authenticated:s=!0,raw:o}={}){let i=new URL(t,es);n&&Object.entries(n).forEach(([u,g])=>i.searchParams.set(u,g));let c={"X-Parse-Application-Id":ts,"X-Parse-REST-API-Key":as,"X-Parse-Revocable-Session":"1"},p=H.token();s&&p&&(c["X-Parse-Session-Token"]=p);let m;o?(m=o.data,c["Content-Type"]=o.contentType):a!==void 0&&(m=JSON.stringify(a),c["Content-Type"]="application/json");let h;try{h=await fetch(i,{method:e,headers:c,body:m})}catch{throw new ce(100,"Sin conexi\xF3n. Comprueba tu acceso a internet")}let r={},f=await h.text();try{r=f?JSON.parse(f):{}}catch{r={error:f}}if(!h.ok)throw ce.fromServer(r.code??-1,r.error||`Error HTTP ${h.status}`);return r}var z={get:(e,t)=>Ve("GET",e,{query:t}),post:(e,t={},a={})=>Ve("POST",e,{body:t,...a}),put:(e,t)=>Ve("PUT",e,{body:t}),async delete(e){try{await Ve("DELETE",e)}catch(t){if(t.code!==101)throw t}},async query(e,t,{limit:a=1e3,order:n}={}){let s={where:JSON.stringify(t),limit:String(a)};return n&&(s.order=n),(await Ve("GET",`classes/${e}`,{query:s})).results||[]},uploadFile(e,t,a){return Ve("POST",`files/${e}`,{raw:{data:t,contentType:a}})}},Y={userPointer:e=>({__type:"Pointer",className:"_User",objectId:e}),publicAcl:()=>({"*":{read:!0,write:!0}}),fileRef:(e,t)=>({__type:"File",name:e,url:t}),date:e=>({__type:"Date",iso:`${e}T12:00:00.000Z`}),instant:e=>({__type:"Date",iso:e.toISOString()}),readDate:e=>e?.iso&&e.iso.length>=10?e.iso.slice(0,10):null,addUnique:(...e)=>({__op:"AddUnique",objects:e}),remove:(...e)=>({__op:"Remove",objects:e})};function pe(e,t=0){let a=typeof e=="number"?e:parseFloat(e);return Number.isFinite(a)?a:t}function Ge(e){return typeof e=="string"&&e.trim()&&e!=="null"?e:null}var ke="uds";var Kt="\u{1F372}";var Qe=["#2D8CF0","#5B6CF0","#8E5CF0","#E0569B","#EF5A5A","#F08A2D","#1FA971","#14A3B8"];var We=[{key:"BREAKFAST",label:"Desayuno",emoji:"\u{1F373}",icon:"sun"},{key:"LUNCH",label:"Comida",emoji:"\u{1F37D}\uFE0F",icon:"restaurant"},{key:"DINNER",label:"Cena",emoji:"\u{1F319}",icon:"moon"}],Pe=[{key:"mercadona",label:"Mercadona",color:"#1C8B4B",prices:!0},{key:"dia",label:"Dia",color:"#D62B2B",prices:!0,cloud:!0},{key:"lidl",label:"Lidl",color:"#1D5BBF",prices:!1,cloud:!0},{key:"eroski",label:"Eroski",color:"#C8102E",prices:!1,cloud:!0}],Ce=e=>Pe.find(t=>t.key===e)||null,Zt=e=>Pe.find(t=>t.label.toLowerCase()===String(e||"").toLowerCase())||null,ct=[{days:null,label:"Sin caducidad"},{days:3,label:"3 d\xEDas"},{days:7,label:"1 semana"},{days:14,label:"2 semanas"},{days:30,label:"1 mes"},{days:90,label:"3 meses"},{days:180,label:"6 meses"},{days:365,label:"1 a\xF1o"}],Ba=e=>ct.find(t=>t.days===e)?.label||`${e} d\xEDas`,le=e=>Math.round(e*1e3)/1e3,U={isLow:e=>e.quantity<=e.criticalLimit,amountToBuy:e=>le(Math.max(e.criticalLimit-e.quantity+1,1)),level:e=>Math.min(Math.max(e.quantity/Math.max(e.criticalLimit*2,1),0),1),image:e=>e.photo?.url||e.imageUrl||null,daysUntilExpiry:e=>e.expiresAt?Ct(X(),e.expiresAt):null,expiryStatus(e){let t=U.daysUntilExpiry(e);return t===null?"NONE":t<0?"EXPIRED":t<=3?"SOON":"OK"},needsExpiryAttention:e=>["EXPIRED","SOON"].includes(U.expiryStatus(e)),withQuantity:(e,t)=>({...e,quantity:le(Math.max(t,0))})};function Fa(e){let t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${n}`}function ze(e){let[t,a,n]=e.split("-").map(Number);return new Date(t,a-1,n)}var X=()=>Fa(new Date);function ne(e,t){let a=ze(e);return a.setDate(a.getDate()+t),Fa(a)}function Ct(e,t){return Math.round((e&&t?ze(t)-ze(e):0)/864e5)}var Ne=e=>(ze(e).getDay()+6)%7+1,lt=e=>ne(e,1-Ne(e)),ns=["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"],ss=["Lun","Mar","Mi\xE9","Jue","Vie","S\xE1b","Dom"],os=["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],He=e=>ns[e-1],Ua=e=>ss[e-1],ut=e=>e&&e[0].toUpperCase()+e.slice(1);function oe(e){let t=ze(e);return`${t.getDate()} ${os[t.getMonth()]}`}function kt(e,t=X()){return ne(t,(e-Ne(t)+7)%7)}function Ye(e){if(!(e>=1&&e<=7))return"Sin d\xEDa de compra fijo \xB7 toca para elegir uno";let t=Ct(X(),kt(e));return t===0?"\xA1Hoy es d\xEDa de compra!":t===1?`Ma\xF1ana (${He(e)}) toca compra`:`Pr\xF3xima compra: ${He(e)} ${oe(kt(e))} \xB7 dentro de ${t} d\xEDas`}var rs=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}),is=new Intl.NumberFormat("es-ES",{maximumFractionDigits:2,useGrouping:!1}),ee=e=>rs.format(e||0),j=e=>is.format(e||0);function me(e){let t=parseFloat(String(e??"").trim().replace(",","."));return Number.isFinite(t)&&t>=0?t:null}var dt=e=>(e||"").split("@")[0]||e;function Je(e){let t=String(e||"").trim().toLowerCase(),a=0;for(let n=0;n<t.length;n++)a=a*31+t.charCodeAt(n)>>>0;return a%8}function Oa(e){let t=String(e||"").trim().split(/\s+/).filter(Boolean);if(!t.length)return"?";let a=t[0];return a.charAt(0).toUpperCase()+(a.charAt(1)||"").toLowerCase()}var fe=e=>e?.nickname?.trim()||dt(e?.email||"")||"?",Ra=e=>fe(e).charAt(0).toUpperCase()||"?";var l=Da.bind(jt),ja="stockcasa.settings",Va={theme:"blue",mode:"light",style:"minimal",sounds:!0,vibration:!0,stores:["mercadona"],defaultExpiry:null},pt=[{key:"blue",label:"Azul",color:"#2D8CF0",soft:"#E6F2FF"},{key:"red",label:"Rojo",color:"#E5484D",soft:"#FDE8E8"},{key:"green",label:"Verde",color:"#22A06B",soft:"#E2F6EC"},{key:"pink",label:"Rosa",color:"#E8589B",soft:"#FDE7F1"},{key:"purple",label:"Morado",color:"#8B5CF6",soft:"#EEE7FF"}],ta=[{key:"system",label:"Autom\xE1tico"},{key:"light",label:"Claro"},{key:"dark",label:"Oscuro"}],xt=[{key:"minimal",label:"Minimalista",description:"Tarjetas blancas que flotan con sombra suave"},{key:"fantasy",label:"Fantas\xEDa",description:"Burbujas de colores y un cielo de estrellitas que flotan"},{key:"paper",label:"Papel",description:"Hoja de libreta escrita a boli"}],re={get(){try{return{...Va,...JSON.parse(localStorage.getItem(ja))}}catch{return{...Va}}},set(e){let t={...re.get(),...e};try{localStorage.setItem(ja,JSON.stringify(t))}catch{}return Mt(t),t}},Xa=window.matchMedia?.("(prefers-color-scheme: dark)");function Mt(e=re.get()){let t=pt.find(o=>o.key===e.theme)||pt[0],a=e.mode==="dark"||e.mode==="system"&&Xa?.matches,n=document.documentElement;n.dataset.theme=t.key,n.dataset.mode=a?"dark":"light";let s=xt.some(o=>o.key===e.style)?e.style:"minimal";n.dataset.style=s,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a?"#0E141D":s==="paper"?"#FFFDF6":t.soft),s==="fantasy"?Ga.start():Ga.stop()}var Ga=(()=>{let e=null,t=null,a=0,n=[],s=[],o=0,i=0,c=0,p=window.matchMedia?.("(prefers-reduced-motion: reduce)");function m(y,w,A,N){let L=document.createElement("canvas"),I=A*1.6;L.width=L.height=Math.ceil(I*2);let _=L.getContext("2d"),k=I,x=_.createRadialGradient(k,k,0,k,k,I);if(x.addColorStop(0,y),x.addColorStop(.25,`${y}88`),x.addColorStop(1,`${y}00`),_.fillStyle=x,_.beginPath(),_.arc(k,k,I,0,Math.PI*2),_.fill(),w==="star"){_.fillStyle=N,_.beginPath();let q=A,E=A*.18;_.moveTo(k,k-q),_.quadraticCurveTo(k+E,k-E,k+q,k),_.quadraticCurveTo(k+E,k+E,k,k+q),_.quadraticCurveTo(k-E,k+E,k-q,k),_.quadraticCurveTo(k-E,k-E,k,k-q),_.fill()}return L}function h(){let y=getComputedStyle(document.documentElement),w=document.documentElement.dataset.mode==="dark",A=[y.getPropertyValue("--primary").trim(),y.getPropertyValue("--primary-light").trim(),"#FFC94D",w?"#FFFFFF":"#FF9CC8"].filter(N=>/^#[0-9a-f]{6}$/i.test(N));A.length<2&&A.push("#8B5CF6","#FFC94D"),s=A.flatMap(N=>[{kind:"dot",img:m(N,"dot",w?3:3.6)},{kind:"star",img:m(N,"star",w?7:8,w?"#FFFFFF":N)}])}function r(y){s.length||h();let w=s[Math.floor(Math.random()*s.length)],A=w.kind==="star";return{sprite:w,x:Math.random()*i,y:y?Math.random()*c:c+20,speed:A?7+Math.random()*9:10+Math.random()*16,sway:6+Math.random()*18,swaySpeed:.2+Math.random()*.5,phase:Math.random()*Math.PI*2,twinkle:.6+Math.random()*1.6,scale:A?.45+Math.random()*.75:.5+Math.random()*.9,spin:A?(Math.random()-.5)*.6:0,angle:Math.random()*Math.PI,alpha:A?.6+Math.random()*.4:.4+Math.random()*.45}}function f(){if(!e)return;let y=Math.min(window.devicePixelRatio||1,2);i=innerWidth,c=innerHeight,e.width=Math.round(i*y),e.height=Math.round(c*y),t.setTransform(y,0,0,y,0,0);let w=Math.round(Math.min(70,Math.max(28,i*c/11e3)));n=Array.from({length:w},()=>r(!0)),u(performance.now(),0)}function u(y,w){let A=y/1e3;t.clearRect(0,0,i,c),n.forEach((N,L)=>{N.y-=N.speed*w,N.angle+=N.spin*w,N.y<-30&&(n[L]=r(!1));let I=N.x+Math.sin(A*N.swaySpeed+N.phase)*N.sway,_=N.sprite.img,k=_.width*N.scale;t.globalAlpha=N.alpha*(.55+.45*Math.sin(A*N.twinkle+N.phase)),N.spin?(t.save(),t.translate(I,N.y),t.rotate(N.angle),t.drawImage(_,-k/2,-k/2,k,k),t.restore()):t.drawImage(_,I-k/2,N.y-k/2,k,k)}),t.globalAlpha=1}function g(y){let w=Math.min((y-o)/1e3,.05);o=y,u(y,w),a=requestAnimationFrame(g)}function v(){cancelAnimationFrame(a),!(!e||document.hidden||p?.matches)&&(o=performance.now(),a=requestAnimationFrame(g))}return document.addEventListener("visibilitychange",()=>document.hidden?cancelAnimationFrame(a):v()),window.addEventListener("resize",()=>e&&f()),{start(){e||(e=document.createElement("canvas"),e.className="sky",e.setAttribute("aria-hidden","true"),document.body.prepend(e),t=e.getContext("2d")),requestAnimationFrame(()=>{h(),f(),v()})},stop(){cancelAnimationFrame(a),e?.remove(),e=null}}})();Xa?.addEventListener?.("change",()=>Mt());var Ka={tap:.3,pop:.6,up:.45,down:.45,check:.55,swipe:.5,success:.6,error:.5},cs={tap:8,pop:15,up:6,down:6,check:[10,40,18],swipe:15,success:[12,50,25],error:[30,60,30]},It=null,Za={};function en(){if(!It){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;It=new e,Object.keys(Ka).forEach(async t=>{try{let a=await(await fetch(`sounds/sfx_${t}.wav`)).arrayBuffer();Za[t]=await It.decodeAudioData(a)}catch{}})}return It}document.addEventListener("pointerdown",()=>en()?.resume?.(),{capture:!0});function T(e){let{sounds:t,vibration:a}=re.get();if(t){let n=en(),s=Za[e];if(n&&s){let o=n.createBufferSource(),i=n.createGain();i.gain.value=Ka[e]??.5,o.buffer=s,o.connect(i).connect(n.destination),o.start()}}a&&navigator.vibrate&&navigator.vibrate(cs[e]??10)}function $({name:e,size:t=22,class:a=""}){let n=Jt[e];return n?l`<svg class=${`icon ${a}`} width=${t} height=${t} viewBox=${`0 0 ${n.vb} ${n.vb}`} aria-hidden="true">
    ${n.d.map(s=>l`<path d=${s} fill="currentColor" fill-rule=${n.rule||"nonzero"} />`)}
  </svg>`:null}function Be({profile:e,size:t=40}){let a=`width:${t}px;height:${t}px;font-size:${Math.round(t*.42)}px;background:${e?.avatarColor||"#2D8CF0"}`;return l`<span class="avatar" style=${a} title=${fe(e)}>
    ${e?.avatar?.url?l`<img src=${e.avatar.url} alt="" loading="lazy" />`:Ra(e)}
  </span>`}function ue({url:e,name:t="",size:a=52,icon:n}){let[s,o]=C(!1);O(()=>o(!1),[e]);let i=e&&!s;return l`<span class=${`thumb ${i?"":`mono tone-${Je(t)}`}`} style=${`width:${a}px;height:${a}px;font-size:${Math.round(a*.36)}px`}>
    ${i?l`<img src=${e} alt="" loading="lazy" onError=${()=>o(!0)} />`:n?l`<${$} name=${n} size=${Math.round(a*.46)} />`:Oa(t)}
  </span>`}var Qa={pantry:l`<g><rect x="22" y="70" width="76" height="6" rx="3" class="art-line" /><rect x="30" y="34" width="22" height="36" rx="6" class="art-fill" /><rect x="33" y="28" width="16" height="7" rx="2" class="art-line" /><rect x="58" y="44" width="16" height="26" rx="5" class="art-soft" /><circle cx="86" cy="60" r="10" class="art-fill2" /><path d="M86 50c2-5 6-6 8-6" class="art-stroke" /></g>`,cart:l`<g><path d="M18 26h12l10 38h46l8-28H36" class="art-stroke" /><circle cx="46" cy="76" r="6" class="art-fill" /><circle cx="80" cy="76" r="6" class="art-fill" /><path d="M52 44l8 8 16-16" class="art-stroke accent" /></g>`,recipes:l`<g><path d="M26 48h68v10a22 22 0 0 1-22 22H48a22 22 0 0 1-22-22z" class="art-fill" /><rect x="20" y="44" width="80" height="8" rx="4" class="art-line" /><path d="M48 34c0-6 6-6 6-12M62 34c0-6 6-6 6-12" class="art-stroke accent" /></g>`,search:l`<g><circle cx="54" cy="46" r="20" class="art-soft" /><circle cx="54" cy="46" r="20" class="art-stroke" /><path d="M69 61l16 16" class="art-stroke thick" /></g>`,done:l`<g><circle cx="60" cy="50" r="28" class="art-fill" /><path d="M47 51l9 9 18-19" class="art-stroke white thick" /><path d="M24 22l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM96 66l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" class="art-spark" /></g>`,receipt:l`<g><path d="M36 18h48v66l-8-5-8 5-8-5-8 5-8-5-8 5z" class="art-soft" /><path d="M36 18h48v66l-8-5-8 5-8-5-8 5-8-5-8 5z" class="art-stroke" /><path d="M46 36h28M46 48h28M46 60h16" class="art-stroke accent" /></g>`};function be({name:e}){return l`<svg class="empty-art" viewBox="0 0 120 96" aria-hidden="true">${Qa[e]||Qa.search}</svg>`}var De=null,Wa=null;function F(e,t){De||(De=document.createElement("div"),De.className="toast-host",document.body.appendChild(De)),clearTimeout(Wa),qe(l`<div class="toast" key=${Date.now()}>
    <span>${e}</span>
    ${t&&l`<button class="toast-action" onClick=${()=>{qe(null,De),t.run()}}>${t.label}</button>`}
  </div>`,De),Wa=setTimeout(()=>qe(null,De),t?4500:2600)}var tn=null;function an(e){tn=e}function ie(e){if((e?.noHouse||e instanceof ce&&e.isSessionExpired)&&(tn?.(e),e.noHouse))return;T("error");let t=e instanceof ce||e instanceof it;t||console.error(e),F(t?e.message:"Ha ocurrido un error inesperado. Int\xE9ntalo de nuevo")}async function B(e,{loading:t=!0,onError:a=ie}={}){t&&Ya.show();try{return await e()}catch(n){a(n);return}finally{t&&Ya.hide()}}var Ya={count:0,el:null,show(){this.count++,this.el||(this.el=document.createElement("div"),this.el.className="loading",this.el.innerHTML='<div class="spinner"></div>',document.body.appendChild(this.el)),clearTimeout(this.timer),this.timer=setTimeout(()=>this.el.classList.add("visible"),180)},hide(){this.count=Math.max(0,this.count-1),this.count===0&&this.el&&(clearTimeout(this.timer),this.el.classList.remove("visible"))}},St=null,Xe=[];function nn(){St||(St=document.createElement("div"),document.body.appendChild(St)),qe(l`${Xe.map(e=>l`<${ls} key=${e.id} layer=${e} />`)}`,St),document.body.classList.toggle("has-layer",Xe.length>0)}function ls({layer:e}){let[t,a]=C(!1);e.setClosing=a;let n=e.component;return l`<div class=${`layer ${e.kind} ${t?"closing":""}`}>
    <div class="scrim" onClick=${()=>e.dismissible&&Ja(e)}></div>
    <div class="panel" role="dialog" aria-modal="true">
      ${e.kind==="sheet"&&l`<div class="handle"></div>`}
      <${n} ...${e.props} close=${s=>Ja(e,s)} />
    </div>
  </div>`}var us=1;function Et(e,t,a={},n=!0){return new Promise(s=>{let o={id:us++,kind:e,component:t,props:a,dismissible:n,resolve:s};Xe.push(o),nn()})}function Ja(e,t){Xe.includes(e)&&(e.setClosing?.(!0),setTimeout(()=>{let a=Xe.indexOf(e);a>=0&&Xe.splice(a,1),nn(),e.resolve(t)},220))}var K=(e,t)=>Et("sheet",e,t);function ds({title:e,message:t,confirm:a="Aceptar",cancel:n="Cancelar",danger:s,close:o}){return l`<div class="dialog-body">
    <h2>${e}</h2>
    ${t&&l`<p class="muted pre">${t}</p>`}
    <div class="dialog-actions">
      ${n&&l`<button class="btn text" onClick=${()=>o(!1)}>${n}</button>`}
      <button class=${`btn ${s?"danger":"primary"}`} onClick=${()=>o(!0)}>${a}</button>
    </div>
  </div>`}var ye=e=>Et("dialog",ds,e);function ps({title:e,message:t,label:a,value:n="",type:s="text",inputMode:o,confirm:i="Guardar",suffix:c,maxLength:p,close:m}){let[h,r]=C(String(n)),f=R();return O(()=>{setTimeout(()=>{f.current?.focus(),f.current?.select()},250)},[]),l`<form class="dialog-body" onSubmit=${g=>{g.preventDefault(),m(h)}}>
    <h2>${e}</h2>
    ${t&&l`<p class="muted">${t}</p>`}
    <label class="field">
      <span>${a}</span>
      <div class="field-row">
        <input ref=${f} type=${s} inputmode=${o} value=${h} maxlength=${p}
          onInput=${g=>r(g.target.value)} />
        ${c&&l`<span class="suffix">${c}</span>`}
      </div>
    </label>
    <div class="dialog-actions">
      <button type="button" class="btn text" onClick=${()=>m(null)}>Cancelar</button>
      <button type="submit" class="btn primary">${i}</button>
    </div>
  </form>`}var se=e=>Et("dialog",ps,e);function ms({title:e,options:t,close:a}){return l`<div class="dialog-body">
    <h2>${e}</h2>
    <div class="choices">
      ${t.map((n,s)=>l`<button class=${`choice ${n.danger?"danger-text":""}`} onClick=${()=>a(s)}>
        ${n.icon&&l`<span class="choice-icon"><${$} name=${n.icon} size=${20} /></span>`}
        <span class="grow min0">${n.label}${n.hint&&l`<span class="muted small block">${n.hint}</span>`}</span>
      </button>`)}
    </div>
    <div class="dialog-actions"><button class="btn text" onClick=${()=>a(null)}>Cancelar</button></div>
  </div>`}var Fe=(e,t)=>Et("dialog",ms,{title:e,options:t});function Ke(){let e=document.createElement("canvas");e.className="confetti",document.body.appendChild(e);let t=e.getContext("2d"),a=window.devicePixelRatio||1;e.width=innerWidth*a,e.height=innerHeight*a,t.scale(a,a);let n=[getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#2D8CF0","#7CC0FF","#FFC94D","#FF7A90","#38D39F"],s=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.35,vx:(Math.random()-.5)*13,vy:-Math.random()*14-4,size:5+Math.random()*6,rotation:Math.random()*Math.PI,spin:(Math.random()-.5)*.3,color:n[Math.floor(Math.random()*n.length)],star:document.documentElement.dataset.style==="fantasy"&&Math.random()<.4})),o=performance.now();(function i(c){let p=c-o;t.clearRect(0,0,innerWidth,innerHeight),s.forEach(m=>{if(m.vy+=.35,m.vx*=.99,m.x+=m.vx,m.y+=m.vy,m.rotation+=m.spin,t.save(),t.globalAlpha=Math.max(0,1-p/2600),t.translate(m.x,m.y),t.rotate(m.rotation),t.fillStyle=m.color,m.star){let h=m.size*1.3,r=h*.22;t.beginPath(),t.moveTo(0,-h),t.quadraticCurveTo(r,-r,h,0),t.quadraticCurveTo(r,r,0,h),t.quadraticCurveTo(-r,r,-h,0),t.quadraticCurveTo(-r,-r,0,-h),t.fill()}else t.fillRect(-m.size/2,-m.size/3,m.size,m.size*.66);t.restore()}),p<2600?requestAnimationFrame(i):e.remove()})(o)}function Ue(e){e?.animate?.([{transform:"scale(1)"},{transform:"scale(1.25)"},{transform:"scale(1)"}],{duration:320,easing:"cubic-bezier(.3,1.6,.5,1)"})}function sn(e){e?.animate?.([0,-10,10,-7,7,-3,0].map(t=>({transform:`translateX(${t}px)`})),{duration:420})}async function Ze(e,t=1080){let n=await createImageBitmap(e,{imageOrientation:"from-image"}).catch(()=>null)||await new Promise((p,m)=>{let h=new Image;h.onload=()=>p(h),h.onerror=m,h.src=URL.createObjectURL(e)}),s=n.width,o=n.height,i=Math.min(1,t/Math.max(s,o)),c=document.createElement("canvas");return c.width=Math.round(s*i),c.height=Math.round(o*i),c.getContext("2d").drawImage(n,0,0,c.width,c.height),new Promise(p=>c.toBlob(p,"image/jpeg",.82))}function et({onDelete:e,label:t="Eliminar",children:a,class:n="",style:s}){let o=R(),i=R(),c=R(null),p=R(!1),m=(u,g)=>{let v=i.current;if(!v)return;v.style.transition=g?"transform .28s cubic-bezier(.2,.8,.2,1)":"none",v.style.transform=u?`translateX(${u}px)`:"",o.current.dataset.side=u>0?"right":u<0?"left":"";let y=Math.min(Math.abs(u)/(o.current.offsetWidth*.4),1);o.current.style.setProperty("--swipe",y.toFixed(3))},h=u=>{u.button>0||(c.current={x:u.clientX,y:u.clientY,t:performance.now(),dx:0,active:!1,id:u.pointerId})},r=u=>{let g=c.current;if(!g||g.id!==u.pointerId)return;let v=u.clientX-g.x,y=u.clientY-g.y;if(!g.active){if(Math.abs(y)>10&&Math.abs(y)>Math.abs(v)){c.current=null;return}if(Math.abs(v)<12)return;g.active=!0,o.current.setPointerCapture?.(u.pointerId),o.current.dispatchEvent(new CustomEvent("swipestart",{bubbles:!1}))}g.dx=v,m(v,!1)},f=u=>{let g=c.current;if(c.current=null,!g||!g.active)return;if(u.type==="pointercancel"){m(0,!0);return}p.current=!0,setTimeout(()=>p.current=!1,50);let v=o.current.offsetWidth,y=Math.abs(g.dx)/Math.max(performance.now()-g.t,1);Math.abs(g.dx)>v*.4||y>.6&&Math.abs(g.dx)>60?(T("swipe"),m(Math.sign(g.dx)*v*1.1,!0),o.current.classList.add("collapsing"),setTimeout(()=>e(),260)):m(0,!0)};return l`<div ref=${o} class=${`swipe ${n}`} style=${s}
    onPointerDown=${h} onPointerMove=${r} onPointerUp=${f} onPointerCancel=${f}
    onClickCapture=${u=>{p.current&&(u.stopPropagation(),u.preventDefault())}}>
    <div class="swipe-bg" aria-hidden="true">
      <span class="swipe-label left"><${$} name="delete" size=${20} /> ${t}</span>
      <span class="swipe-label right">${t} <${$} name="delete" size=${20} /></span>
    </div>
    <div ref=${i} class="swipe-content">${a}</div>
  </div>`}var ea=new Set,G={emit:e=>ea.forEach(t=>t(e)),on(e){return ea.add(e),()=>ea.delete(e)}};function _e(e){let t=R(e);t.current=e,O(()=>G.on(a=>t.current(a)),[])}var hs=e=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(e.replace(/ /g,"_"))}?width=800`,fs=e=>`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(e.replace(/ /g,"_"))}`,M=(e,t,a,...n)=>({name:e,quantity:t,unit:a,keywords:n.length?n:[e.toLowerCase()]}),gs=[{id:"tortilla",name:"Tortilla de patatas",meal:"Comida",minutes:40,servings:4,file:"Tortilla de patata - San Sebasti\xE1n.jpg",ingredients:[M("Huevos",6,"uds","huevo"),M("Patatas",.7,"kg","patata"),M("Cebolla",1,"uds","cebolla"),M("Aceite de oliva",.2,"L","aceite"),M("Sal",1,"pizca","sal")],steps:["Pela las patatas y la cebolla. Corta las patatas en l\xE1minas finas y la cebolla en juliana.","Pocha las patatas y la cebolla en abundante aceite a fuego medio-bajo unos 20 minutos, sin que se doren.","Esc\xFArrelas bien y guarda el aceite para otra vez.","Bate los huevos con sal, mezcla con las patatas y deja reposar 5 minutos.","Cuaja la mezcla en una sart\xE9n con un poco de aceite, 3 minutos por cada lado. Ay\xFAdate de un plato para darle la vuelta."]},{id:"macarrones",name:"Macarrones con tomate",meal:"Comida",minutes:25,servings:4,file:"Macarrones con salsa de tomate frito (Espa\xF1a).jpg",ingredients:[M("Macarrones",400,"g","macarr","pasta"),M("Tomate frito",400,"g","tomate frito"),M("Cebolla",1,"uds","cebolla"),M("Chorizo",100,"g","chorizo"),M("Queso rallado",80,"g","queso rallado","rallado")],steps:["Cuece los macarrones en agua con sal el tiempo que diga el paquete.","Mientras, sofr\xEDe la cebolla picada y el chorizo en dados durante 5 minutos.","A\xF1ade el tomate frito y deja que se haga a fuego suave 5 minutos m\xE1s.","Escurre la pasta, m\xE9zclala con la salsa y sirve con el queso rallado por encima."]},{id:"lentejas",name:"Lentejas estofadas",meal:"Comida",minutes:60,servings:4,file:"Lentejas estilo de la abuela.jpg",ingredients:[M("Lentejas",400,"g","lenteja"),M("Chorizo",150,"g","chorizo"),M("Zanahoria",2,"uds","zanahoria"),M("Patatas",.3,"kg","patata"),M("Cebolla",1,"uds","cebolla"),M("Piment\xF3n",1,"cucharadita","piment\xF3n","pimenton")],steps:["Pon las lentejas en remojo 1 hora si no son de cocci\xF3n r\xE1pida.","Sofr\xEDe la cebolla y la zanahoria picadas. A\xF1ade el chorizo en rodajas y el piment\xF3n.","Echa las lentejas escurridas y cubre con agua fr\xEDa.","Cuando hierva, baja el fuego y cuece 30 minutos.","A\xF1ade la patata cascada y cuece 15 minutos m\xE1s. Prueba de sal y deja reposar 5 minutos."]},{id:"gazpacho",name:"Gazpacho",meal:"Comida",minutes:15,servings:4,file:"Gazpacho Cazuela Barro.jpg",ingredients:[M("Tomates maduros",1,"kg","tomate"),M("Pepino",1,"uds","pepino"),M("Pimiento verde",1,"uds","pimiento"),M("Ajo",1,"diente","ajo"),M("Aceite de oliva",.08,"L","aceite"),M("Vinagre",2,"cucharadas","vinagre"),M("Pan del d\xEDa anterior",50,"g","pan")],steps:["Lava y trocea los tomates, el pepino pelado, el pimiento y el ajo.","Tritura todo con el pan remojado, el vinagre y sal hasta que quede fino.","A\xF1ade el aceite poco a poco mientras sigues triturando para que emulsione.","Cuela si lo quieres m\xE1s fino y enfr\xEDalo en la nevera al menos 1 hora."]},{id:"pollo-horno",name:"Pollo al horno con patatas",meal:"Comida",minutes:75,servings:4,file:"Roasted chicken and potatoes.JPG",ingredients:[M("Pollo troceado",1.2,"kg","pollo"),M("Patatas",.8,"kg","patata"),M("Cebolla",1,"uds","cebolla"),M("Lim\xF3n",1,"uds","lim\xF3n","limon"),M("Ajo",4,"dientes","ajo"),M("Aceite de oliva",.05,"L","aceite")],steps:["Precalienta el horno a 200 \xB0C.","Corta las patatas en rodajas gruesas y la cebolla en tiras. Ponlas en la bandeja con sal y un chorro de aceite.","Coloca el pollo encima con sal, pimienta, los ajos machacados y el zumo del lim\xF3n.","Hornea 60 minutos, dando la vuelta al pollo a mitad de tiempo y reg\xE1ndolo con su jugo."]},{id:"arroz-cubana",name:"Arroz a la cubana",meal:"Comida",minutes:25,servings:2,file:"Arroz a la cubana.jpg",ingredients:[M("Arroz",200,"g","arroz"),M("Huevos",2,"uds","huevo"),M("Tomate frito",200,"g","tomate frito"),M("Pl\xE1tano",2,"uds","pl\xE1tano","platano"),M("Aceite de oliva",.1,"L","aceite")],steps:["Cuece el arroz en agua con sal unos 18 minutos y esc\xFArrelo.","Calienta el tomate frito.","Fr\xEDe los pl\xE1tanos partidos a lo largo y despu\xE9s los huevos.","Sirve el arroz con un molde o una taza, con el tomate, el huevo y el pl\xE1tano al lado."]},{id:"crema-calabacin",name:"Crema de calabac\xEDn",meal:"Cena",minutes:30,servings:4,file:"Crema de calabac\xEDn con tropezones.jpg",ingredients:[M("Calabacines",3,"uds","calabac"),M("Patata",1,"uds","patata"),M("Cebolla",1,"uds","cebolla"),M("Quesitos",4,"uds","quesito"),M("Aceite de oliva",.03,"L","aceite")],steps:["Pocha la cebolla picada en una olla con un poco de aceite.","A\xF1ade el calabac\xEDn y la patata troceados, cubre justo con agua y sal.","Cuece 20 minutos a fuego medio.","Tritura con los quesitos hasta que quede una crema fina. Corrige de sal."]},{id:"ensalada",name:"Ensalada mixta",meal:"Cena",minutes:15,servings:2,file:"Ensalada mixta.jpg",ingredients:[M("Lechuga",1,"uds","lechuga"),M("Tomates",2,"uds","tomate"),M("At\xFAn",2,"latas","at\xFAn","atun"),M("Huevos",2,"uds","huevo"),M("Cebolla",.5,"uds","cebolla"),M("Aceite de oliva",.03,"L","aceite")],steps:["Cuece los huevos 10 minutos, enfr\xEDalos y p\xE9lalos.","Lava y corta la lechuga, los tomates en gajos y la cebolla en aros finos.","Monta la ensalada y a\xF1ade el at\xFAn escurrido y los huevos en cuartos.","Ali\xF1a con aceite, vinagre y sal justo antes de servir."]},{id:"huevos-rotos",name:"Huevos rotos con jam\xF3n",meal:"Cena",minutes:30,servings:2,file:"Huevos rotos con jam\xF3n.jpg",ingredients:[M("Patatas",.5,"kg","patata"),M("Huevos",4,"uds","huevo"),M("Jam\xF3n serrano",100,"g","jam\xF3n","jamon"),M("Aceite de oliva",.3,"L","aceite")],steps:["Corta las patatas en bastones y fr\xEDelas en aceite abundante hasta que est\xE9n doradas.","Esc\xFArrelas, ponlas en una fuente y s\xE1lalas.","Fr\xEDe los huevos dejando la yema l\xEDquida.","Pon los huevos y el jam\xF3n sobre las patatas y r\xF3mpelos en la mesa."]},{id:"carbonara",name:"Espaguetis a la carbonara",meal:"Comida",minutes:20,servings:2,file:"Espaguetis carbonara.jpg",ingredients:[M("Espaguetis",200,"g","espagueti","spaghetti","pasta"),M("Bacon",100,"g","bacon","panceta"),M("Huevos",2,"uds","huevo"),M("Queso parmesano",50,"g","parmesano","queso")],steps:["Cuece la pasta en agua con sal.","Dora el bacon en tiras en una sart\xE9n sin aceite.","Bate los huevos con el queso rallado y pimienta.","Escurre la pasta (guarda un poco de agua) y m\xE9zclala fuera del fuego con el bacon y el huevo, a\xF1adiendo agua de cocci\xF3n hasta que quede cremosa."]},{id:"pan-tomate",name:"Tostadas con tomate",meal:"Desayuno",minutes:10,servings:2,file:"Pan tostado con tomate de colgar, aceite de oliva y sal.jpg",ingredients:[M("Pan",4,"rebanadas","pan"),M("Tomate",2,"uds","tomate"),M("Aceite de oliva",.02,"L","aceite")],steps:["Tuesta el pan.","Ralla los tomates y desecha la piel.","Unta el tomate sobre el pan, a\xF1ade un chorrito de aceite y una pizca de sal."]},{id:"yogur-muesli",name:"Yogur con muesli y pl\xE1tano",meal:"Desayuno",minutes:5,servings:1,file:"Muesli.jpg",ingredients:[M("Yogur natural",2,"uds","yogur"),M("Muesli",40,"g","muesli","cereal","avena"),M("Pl\xE1tano",1,"uds","pl\xE1tano","platano")],steps:["Pon el yogur en un bol.","A\xF1ade el muesli por encima.","Corta el pl\xE1tano en rodajas y rep\xE1rtelo por el bol."]},{id:"pisto",name:"Pisto",meal:"Cena",minutes:45,servings:4,file:"Pisto manchego.jpg",ingredients:[M("Calabac\xEDn",1,"uds","calabac"),M("Pimiento rojo",1,"uds","pimiento"),M("Pimiento verde",1,"uds","pimiento"),M("Cebolla",1,"uds","cebolla"),M("Tomate triturado",400,"g","tomate triturado","tomate"),M("Aceite de oliva",.05,"L","aceite")],steps:["Pica la cebolla y los pimientos en dados y p\xF3chalos a fuego suave 15 minutos.","A\xF1ade el calabac\xEDn en dados y cocina 10 minutos m\xE1s.","Echa el tomate triturado, sal y una pizca de az\xFAcar.","Deja que se haga 15 minutos removiendo de vez en cuando. Est\xE1 muy rico con un huevo frito."]},{id:"merluza-verde",name:"Merluza en salsa verde",meal:"Cena",minutes:25,servings:4,file:"Merluza (salsa verde).jpg",ingredients:[M("Merluza en rodajas",.8,"kg","merluza"),M("Ajo",3,"dientes","ajo"),M("Perejil",1,"manojo","perejil"),M("Harina",1,"cucharada","harina"),M("Aceite de oliva",.06,"L","aceite")],steps:["Dora los ajos picados en una cazuela con el aceite, sin que se quemen.","A\xF1ade la harina, remueve 1 minuto y vierte un vaso de agua o caldo de pescado.","Coloca la merluza salada y mueve la cazuela en vaiv\xE9n para que la salsa ligue.","Cuece 5 minutos por cada lado y termina con mucho perejil picado."]}],rn=gs.map(e=>({...e,photoUrl:hs(e.file),photoSource:fs(e.file)})),$s={uds:"uds",ud:"uds",unidad:"uds",unidades:"uds",u:"uds",g:"g",gr:"g",gramos:"g",kg:"kg",kilo:"kg",kilos:"kg",l:"L",litro:"L",litros:"L",ml:"ml"},on=e=>$s[String(e||"").trim().toLowerCase()]||String(e||"").trim().toLowerCase();function na(e,t,a){let n=on(t),s=on(a);return n===s?e:n==="g"&&s==="kg"?e/1e3:n==="kg"&&s==="g"?e*1e3:n==="ml"&&s==="L"?e/1e3:n==="L"&&s==="ml"?e*1e3:null}var vs=["frito","frita","triturado","rallado","rallada","salsa","zumo","polvo","concentrado","mermelada","caldo","sopa","crema","helado","chips"],aa=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");function cn(e,t){let a=e.keywords.map(aa),n=aa(e.name),s=t.filter(o=>{let i=aa(o.name).split(/[^a-z0-9ñ]+/).filter(Boolean),c=i.join(" ");return vs.some(p=>i.includes(p)&&!n.includes(p))?!1:a.some(p=>p.includes(" ")?` ${c} `.includes(` ${p}`):i.some(m=>m.startsWith(p)&&(p.length>=4||m.length<=p.length+1)))});return s.find(o=>na(e.quantity,e.unit,o.unit)!==null)||s[0]||null}function ca(){let e=Promise.resolve();return t=>{let a=e.then(t,t);return e=a.catch(()=>{}),a}}var sa=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,xe=6;function ln(e,t){return{userId:e.objectId,email:e.email||t,sessionToken:e.sessionToken}}var Me={isLoggedIn:()=>!!H.current(),async login(e,t){e=e.trim(),W(sa.test(e),"Introduce un correo v\xE1lido"),W(t.length>=xe,`La contrase\xF1a debe tener al menos ${xe} caracteres`);let a;try{a=await z.post("login",{username:e,password:t},{authenticated:!1})}catch(n){throw n.code===101?new ce(101,"Correo o contrase\xF1a incorrectos"):n}H.save(ln(a,e))},async register(e,t,a,n){e=e.trim(),t=t.trim(),W(e,"Escribe c\xF3mo quieres que te llamen"),W(e.length<=24,`El apodo no puede superar ${24} caracteres`),W(sa.test(t),"Introduce un correo v\xE1lido"),W(a.length>=xe,`La contrase\xF1a debe tener al menos ${xe} caracteres`),W(a===n,"Las contrase\xF1as no coinciden");let s=await z.post("users",{username:t,email:t,password:a,nickname:e},{authenticated:!1});H.save(ln(s,t))},async resetPassword(e){e=e.trim(),W(sa.test(e),"Introduce un correo v\xE1lido"),await z.post("requestPasswordReset",{email:e},{authenticated:!1})},async logout(){try{await z.post("logout")}catch{}H.clear(),ve.clearCache()}};function un(e){return{id:e.objectId,email:e.email||e.username||"",nickname:Ge(e.nickname)||"",avatar:e.avatar?.url?{name:e.avatar.name,url:e.avatar.url}:null,avatarColor:typeof e.avatarColor=="string"&&e.avatarColor.startsWith("#")?e.avatarColor:Qe[0]}}var Ie=new Map,ve={async me(e=!1){let t=H.requireUserId();if(!e&&Ie.has(t))return Ie.get(t);let a=un(await z.get("users/me"));return Ie.set(a.id,a),a},async many(e,t=!1){let a=t?e:e.filter(n=>!Ie.has(n));if(a.length)try{((await z.get("users",{where:JSON.stringify({objectId:{$in:a}}),limit:String(a.length)})).results||[]).map(un).forEach(s=>Ie.set(s.id,s))}catch{}return Object.fromEntries(e.filter(n=>Ie.has(n)).map(n=>[n,Ie.get(n)]))},async save({nickname:e,avatarColor:t,photo:a}){e=e.trim(),W(e.length<=24,`El apodo no puede superar ${24} caracteres`);let n=await ve.me(),s=n.avatar;a===null?s=null:a instanceof Blob&&(s=await Lt(a)),await z.put(`users/${n.id}`,{nickname:e,avatarColor:t,avatar:s?Y.fileRef(s.name,s.url):null});let o={...n,nickname:e,avatarColor:t,avatar:s};return Ie.set(o.id,o),o},clearCache:()=>Ie.clear()};async function Lt(e){let t=await z.uploadFile("image.jpg",e,"image/jpeg");return{name:t.name,url:t.url}}var dn="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function pn(e){return{id:e.objectId,name:e.name||"",inviteCode:e.inviteCode||"",ownerId:e.ownerId||"",memberIds:e.members||[],memberEmails:e.memberEmails||[],shoppingDay:pe(e.shoppingDay,0)}}var bs=ca(),J={async mine(){return(await z.query("House",{members:H.requireUserId()})).map(pn).sort((t,a)=>t.name.localeCompare(a.name,"es"))},current(){return bs(async()=>{let e=await J.mine(),t=e.find(a=>a.id===H.houseId())||e[0];if(!t)throw H.saveHouseId(null),new rt;return H.saveHouseId(t.id),t})},switchTo(e){H.saveHouseId(e.id)},async create(e){e=e.trim(),W(e,"Escribe un nombre para la casa");let t=H.requireUserId(),a=await ys(),n=await z.post("classes/House",{name:e,inviteCode:a,ownerId:t,members:[t],memberEmails:[H.email()],shoppingDay:0,ACL:Y.publicAcl()});return H.saveHouseId(n.objectId),{id:n.objectId,name:e,inviteCode:a}},async join(e){e=e.trim().toUpperCase(),W(e.length===6,`El c\xF3digo tiene ${6} caracteres`);let[t]=await z.query("House",{inviteCode:e},{limit:1});if(!t)throw new ce(101,"No existe ninguna casa con ese c\xF3digo");let a=pn(t),n=H.requireUserId();return a.memberIds.includes(n)||await z.put(`classes/House/${a.id}`,{members:Y.addUnique(n),memberEmails:Y.addUnique(H.email())}),H.saveHouseId(a.id),a},async rename(e,t){t=t.trim(),W(t,"Escribe un nombre para la casa"),await z.put(`classes/House/${e.id}`,{name:t})},async setShoppingDay(e,t){return W(t===0||t>=1&&t<=7,"D\xEDa no v\xE1lido"),await z.put(`classes/House/${e.id}`,{shoppingDay:t}),{...e,shoppingDay:t}},async leave(e){if(e.memberIds.length<=1){let[t,a]=await Promise.all([z.query("ShoppingItem",{houseId:e.id}),z.query("Product",{houseId:e.id})]);for(let n of t)await z.delete(`classes/ShoppingItem/${n.objectId}`);for(let n of a)await z.delete(`classes/Product/${n.objectId}`);await z.delete(`classes/House/${e.id}`)}else await z.put(`classes/House/${e.id}`,{members:Y.remove(H.requireUserId()),memberEmails:Y.remove(H.email())});H.houseId()===e.id&&H.saveHouseId(null)}};async function ys(){for(let e=0;e<5;e++){let t=Array.from({length:6},()=>dn[Math.floor(Math.random()*dn.length)]).join("");if(!(await z.query("House",{inviteCode:t},{limit:1})).length)return t}throw new ce(-1,"No se ha podido generar un c\xF3digo de invitaci\xF3n. Int\xE9ntalo de nuevo")}function ia(e){return{id:e.objectId,name:e.name||"",category:e.category||"",quantity:pe(e.quantity),criticalLimit:pe(e.criticalLimit),unit:e.unit||ke,location:e.location||"",notes:e.notes||"",expiresAt:Y.readDate(e.expiresAt),photo:e.photo?.url?{name:e.photo.name,url:e.photo.url}:null,imageUrl:Ge(e.imageUrl),price:e.price===null||e.price===void 0?null:pe(e.price,null),mercadonaId:Ge(e.mercadonaId),updatedBy:e.updatedBy||""}}function mt(e){return{name:e.name,category:e.category,quantity:e.quantity,criticalLimit:e.criticalLimit,unit:e.unit,location:e.location,notes:e.notes,updatedBy:e.updatedBy,expiresAt:e.expiresAt?Y.date(e.expiresAt):null,photo:e.photo?Y.fileRef(e.photo.name,e.photo.url):null,imageUrl:e.imageUrl||null,mercadonaId:e.mercadonaId||null,price:e.price??null}}var zt=ca(),mn=60,he={async all(){return(await z.query("Product",{houseId:H.requireHouseId()})).map(ia).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e,t){W(e.name.trim(),"El nombre es obligatorio"),W(e.name.trim().length<=mn,`El nombre no puede superar ${mn} caracteres`),W(e.quantity>=0&&e.criticalLimit>=0,"Las cantidades no pueden ser negativas");let a=e.photo;t===null?a=null:t instanceof Blob&&(a=await Lt(t));let n={...e,name:e.name.trim(),category:e.category.trim(),unit:e.unit.trim()||ke,location:e.location.trim(),notes:e.notes.trim(),photo:a,updatedBy:H.email()};return zt(async()=>{let s=n;if(n.id)await z.put(`classes/Product/${n.id}`,mt(n));else{let o=await z.post("classes/Product",{...mt(n),houseId:H.requireHouseId(),owner:Y.userPointer(H.requireUserId()),ACL:Y.publicAcl()});s={...n,id:o.objectId}}return await te.syncProduct(s),s})},async updateQuantity(e,t){let a={...e,updatedBy:H.email()};await zt(async()=>{await z.put(`classes/Product/${a.id}`,mt(a)),await te.syncProduct(a)}),a.quantity<t&&hn(a,t-a.quantity)},async consume(e,t){if(t<=0)return e;let a={...U.withQuantity(e,e.quantity-t),updatedBy:H.email()};return await zt(async()=>{await z.put(`classes/Product/${a.id}`,mt(a)),await te.syncProduct(a)}),hn(a,e.quantity-a.quantity),a},async remove(e){await zt(async()=>{await z.delete(`classes/Product/${e.id}`),await te.removeForProduct(e.id)})}};function hn(e,t){!e.id||t<=0||z.post("classes/StockMovement",{houseId:H.requireHouseId(),productId:e.id,amount:le(t),ACL:Y.publicAcl()}).catch(()=>{})}function _s(e){return{id:e.objectId,productId:e.productId||"",name:e.name||"",quantity:pe(e.quantity,1),unit:e.unit||ke,category:e.category||"",photoUrl:Ge(e.photoUrl),checked:!!e.checked,dismissed:!!e.dismissed,manual:!!e.manual,addedBy:Ge(e.addedBy)||"",price:e.price===null||e.price===void 0?null:pe(e.price,null)}}function Se(e){return{productId:e.productId,name:e.name,quantity:e.quantity,unit:e.unit,category:e.category,photoUrl:e.photoUrl||null,checked:e.checked,dismissed:e.dismissed,manual:e.manual,addedBy:e.addedBy,price:e.price??null}}var nt=e=>e.price===null||e.price===void 0?null:e.price*e.quantity;function bn(e){return{productId:e.id,name:e.name,quantity:U.amountToBuy(e),unit:e.unit,category:e.category,photoUrl:U.image(e),checked:!1,dismissed:!1,manual:!1,addedBy:"",price:e.price}}function yn(e,t){return{...e,name:t.name,quantity:e.manual?e.quantity:U.amountToBuy(t),unit:t.unit,category:t.category,photoUrl:U.image(t),price:t.price}}var ws=(e,t)=>JSON.stringify(Se(e))===JSON.stringify(Se(t)),we=ca(),tt=async e=>(await z.query("ShoppingItem",e)).map(_s).sort((t,a)=>t.name.localeCompare(a.name,"es"));async function Pt(e,t){await z.post("classes/ShoppingItem",{...Se(e),houseId:t,ACL:Y.publicAcl()})}async function fn(e,t,a){if(!t)U.isLow(e)&&await Pt(bn(e),a);else if(!U.isLow(e)&&(!t.manual||t.dismissed))await z.delete(`classes/ShoppingItem/${t.id}`);else if(!t.checked&&!t.dismissed){let n=yn(t,e);ws(n,t)||await z.put(`classes/ShoppingItem/${t.id}`,Se(n))}}function oa(e){W(e>0&&Number.isFinite(e),"La cantidad tiene que ser mayor que 0")}var te={async refresh(){let e=H.requireHouseId();return await we(async()=>{let t=(await z.query("Product",{houseId:e})).map(ia),a=new Set(t.map(s=>s.id)),n=new Map;(await tt({houseId:e})).filter(s=>s.productId).forEach(s=>{n.has(s.productId)||n.set(s.productId,[]),n.get(s.productId).push(s)});for(let[s,o]of n){let i=a.has(s)?o.slice(1):o;for(let c of i)await z.delete(`classes/ShoppingItem/${c.id}`)}for(let s of t)await fn(s,n.get(s.id)?.[0],e)}),(await tt({houseId:e})).filter(t=>!t.dismissed)},syncProduct(e){let t=H.requireHouseId();return we(async()=>{let a=await tt({houseId:t,productId:e.id});for(let n of a.slice(1))await z.delete(`classes/ShoppingItem/${n.id}`);await fn(e,a[0],t)})},removeForProduct(e){let t=H.requireHouseId();return we(async()=>{for(let a of await tt({houseId:t,productId:e}))await z.delete(`classes/ShoppingItem/${a.id}`)})},addProduct(e,t){oa(t);let a=H.requireHouseId();return we(async()=>{let[n]=await tt({houseId:a,productId:e.id}),s={...yn(n||bn(e),e),quantity:le(t),manual:!0,dismissed:!1,addedBy:H.email()};n?await z.put(`classes/ShoppingItem/${n.id}`,Se(s)):await Pt(s,a)})},addFreeItem(e,t,a){e=e.trim(),W(e,"Escribe qu\xE9 quieres comprar"),oa(t);let n={productId:"",name:e,quantity:le(t),unit:a.trim()||ke,category:"",photoUrl:null,checked:!1,dismissed:!1,manual:!0,addedBy:H.email(),price:null},s=H.requireHouseId();return we(()=>Pt(n,s))},changeQuantity(e,t){return oa(t),we(()=>z.put(`classes/ShoppingItem/${e.id}`,Se({...e,quantity:le(t),manual:!0})))},setChecked(e,t){return we(()=>z.put(`classes/ShoppingItem/${e.id}`,Se({...e,checked:t})))},dismiss(e){return we(()=>e.manual?z.delete(`classes/ShoppingItem/${e.id}`):z.put(`classes/ShoppingItem/${e.id}`,Se({...e,dismissed:!0,checked:!1})))},restore(e){let t=H.requireHouseId();return we(()=>e.manual?Pt({...e,dismissed:!1},t):z.put(`classes/ShoppingItem/${e.id}`,Se({...e,dismissed:!1})))},completePurchase(){let e=H.requireHouseId();return we(async()=>{let t=(await tt({houseId:e})).filter(n=>n.checked&&!n.dismissed),a=new Map((await z.query("Product",{houseId:e})).map(ia).map(n=>[n.id,n]));for(let n of t){let s=a.get(n.productId);if(s){let o={...U.withQuantity(s,s.quantity+n.quantity),updatedBy:H.email()};await z.put(`classes/Product/${s.id}`,mt(o))}await z.delete(`classes/ShoppingItem/${n.id}`)}return t})}};function ks(e){return{id:e.objectId,name:e.name||"",servings:pe(e.servings,2),ingredients:(e.ingredients||[]).filter(Boolean).map(t=>({productId:t.productId||"",name:t.name||"",quantity:pe(t.quantity,1),unit:t.unit||ke})),steps:e.steps||"",emoji:e.emoji||Kt,photo:typeof e.photoUrl=="string"&&e.photoUrl.startsWith("http")?{name:e.photoName||"",url:e.photoUrl}:null,createdBy:e.createdBy||""}}function gn(e){return{name:e.name,servings:e.servings,steps:e.steps,emoji:e.emoji,photoName:e.photo?.name||"",photoUrl:e.photo?.url||"",createdBy:e.createdBy,ingredients:e.ingredients.map(({productId:t,name:a,quantity:n,unit:s})=>({productId:t,name:a,quantity:n,unit:s}))}}function _n(e,t){return t>e.criticalLimit?0:le(e.criticalLimit-t+1)}var de={async all(){return(await z.query("Recipe",{houseId:H.requireHouseId()})).map(ks).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e){W(e.name.trim(),"Ponle un nombre a la receta"),W(e.ingredients.length,"A\xF1ade al menos un ingrediente"),W(e.servings>=1&&e.servings<=20,"Las raciones deben estar entre 1 y 20");let t={...e,name:e.name.trim(),steps:e.steps.trim(),createdBy:e.createdBy||H.email()};if(!t.id){let a=await z.post("classes/Recipe",{...gn(t),houseId:H.requireHouseId(),ACL:Y.publicAcl()});return{...t,id:a.objectId}}return await z.put(`classes/Recipe/${t.id}`,gn(t)),t},remove:e=>z.delete(`classes/Recipe/${e.id}`),fromLibrary(e,t){return{id:null,name:e.name,servings:e.servings,steps:e.steps.join(`
`),emoji:Kt,photo:{name:"",url:e.photoUrl},createdBy:"",libraryId:e.id,ingredients:e.ingredients.map(a=>{let n=cn(a,t),s=n?na(a.quantity,a.unit,n.unit):null;return n&&s!==null?{productId:n.id,name:n.name,quantity:le(s),unit:n.unit}:{productId:"",name:a.name,quantity:a.quantity,unit:a.unit}})}},check(e,t){let a=new Map(t.map(i=>[i.id,i])),n=e.ingredients.map(i=>{let c=a.get(i.productId);if(!c)return{ingredient:i,product:null,inStock:0,after:-i.quantity,status:"NOT_IN_PANTRY",toBuy:i.quantity};let p=le(c.quantity-i.quantity),m=p<0?"NOT_ENOUGH":p<=c.criticalLimit?"BELOW_MINIMUM":"OK";return{ingredient:i,product:c,inStock:c.quantity,after:p,status:m,toBuy:_n(c,p)}}),s=n.filter(i=>i.status==="NOT_ENOUGH"||i.status==="NOT_IN_PANTRY"),o=n.filter(i=>i.toBuy>0);return{recipe:e,items:n,canCook:s.length===0,missing:s,toBuy:o,estimatedCost:o.reduce((i,c)=>i+(c.product?.price!=null?c.product.price*c.toBuy:0),0)}},async addMissingToShopping(e){for(let t of e.toBuy)t.product?await te.addProduct(t.product,t.toBuy):await te.addFreeItem(t.ingredient.name,t.toBuy,t.ingredient.unit);return e.toBuy.length},async cook(e){for(let t of e.items)t.product&&await he.consume(t.product,t.ingredient.quantity)}};function Cs(e){let t=Y.readDate(e.date);return!t||!["BREAKFAST","LUNCH","DINNER"].includes(e.slot)?null:{id:e.objectId,date:t,slot:e.slot,recipeId:e.recipeId||"",title:e.title||""}}var $n=28;async function ra(e,t,a){return(await z.query("MealPlanEntry",{houseId:e,date:{$gte:Y.date(t),$lte:Y.date(a)}})).map(Cs).filter(Boolean)}var $e={week:e=>ra(H.requireHouseId(),e,ne(e,6)),async set(e,t,a,n=""){let s=a?.name||n.trim();W(s,"Elige una receta o escribe qu\xE9 vas a comer");let o=H.requireHouseId(),i=(await ra(o,e,e)).find(p=>p.slot===t),c={date:Y.date(e),slot:t,recipeId:a?.id||"",title:s};i?await z.put(`classes/MealPlanEntry/${i.id}`,c):await z.post("classes/MealPlanEntry",{...c,houseId:o,ACL:Y.publicAcl()})},clear:e=>z.delete(`classes/MealPlanEntry/${e.id}`),async copyPreviousWeek(e){let t=H.requireHouseId(),a=new Set((await $e.week(e)).map(o=>`${o.date}|${o.slot}`)),s=(await ra(t,ne(e,-7),ne(e,-1))).map(o=>({...o,date:ne(o.date,7)})).filter(o=>!a.has(`${o.date}|${o.slot}`));for(let o of s)await z.post("classes/MealPlanEntry",{date:Y.date(o.date),slot:o.slot,recipeId:o.recipeId,title:o.title,houseId:t,ACL:Y.publicAcl()});return s.length},async analyze(e){let t=H.requireHouseId(),[a,n,s]=await Promise.all([he.all(),de.all(),$e.week(e)]),o=new Map(n.map(u=>[u.id,u])),i=s.filter(u=>u.date>=X()),c=new Map,p=new Map;i.map(u=>o.get(u.recipeId)).filter(Boolean).forEach(u=>{u.ingredients.forEach(g=>{if(g.productId&&a.some(v=>v.id===g.productId))c.set(g.productId,(c.get(g.productId)||0)+g.quantity);else{let v=`${g.name.trim().toLowerCase()}|${g.unit}`;p.set(v,(p.get(v)||0)+g.quantity)}})});let m=new Map;try{let u=new Date(Date.now()-$n*864e5);(await z.query("StockMovement",{houseId:t,createdAt:{$gte:Y.instant(u)}})).forEach(v=>m.set(v.productId,(m.get(v.productId)||0)+pe(v.amount)))}catch{}let h=$n/7,r=[];a.forEach(u=>{let g=c.get(u.id)||0,v=le((m.get(u.id)||0)/h),y=Math.max(g,v),w=_n(u,u.quantity-y);y===0&&w===0||r.push({product:u,name:u.name,unit:u.unit,planned:g,habitual:v,inStock:u.quantity,toBuy:w,reason:g>0&&g>=v?"RECIPES":v>0?"HABITUAL":"BELOW_MINIMUM"})}),p.forEach((u,g)=>{let[v,y]=g.split("|");r.push({product:null,name:v.charAt(0).toUpperCase()+v.slice(1),unit:y,planned:u,habitual:0,inStock:0,toBuy:le(u),reason:"RECIPES"})}),r.forEach(u=>{u.isUrgent=u.planned>u.inStock,u.estimatedCost=u.product?.price!=null?u.product.price*u.toBuy:null}),r.sort((u,g)=>g.isUrgent-u.isUrgent||u.name.localeCompare(g.name,"es"));let f=r.filter(u=>u.toBuy>0);return{weekStart:e,needs:r,toBuy:f,plannedMeals:i.length,estimatedCost:f.reduce((u,g)=>u+(g.estimatedCost||0),0),withoutPrice:f.filter(u=>u.estimatedCost===null).length}},async addToShopping(e){for(let t of e.toBuy)t.product?await te.addProduct(t.product,t.toBuy):await te.addFreeItem(t.name,t.toBuy,t.unit);return e.toBuy.length},weekStartOf:lt},vn="7UZJKL1DJ0",Is="9d8f2e39e90df472b4f2e559a116fe17";function Ss(e,t){let a=pe(t?.unit_size,NaN),n=t?.size_format||"",s="";return Number.isFinite(a)&&a>0&&n&&(n==="kg"&&a<1?s=`${Math.round(a*1e3)} g`:n==="l"&&a<1?s=`${Math.round(a*1e3)} ml`:s=`${String(a).replace(".",",")} ${n==="kg"?"kg":n.toUpperCase()}`),[e&&e!=="null"?e:"",s].filter(Boolean).join(" ")}async function xs(e){let t=await fetch(`https://${vn}-dsn.algolia.net/1/indexes/products_prod_mad1_es/query`,{method:"POST",headers:{"X-Algolia-Application-Id":vn,"X-Algolia-API-Key":Is,"Content-Type":"application/json"},body:JSON.stringify({params:`query=${encodeURIComponent(e)}&hitsPerPage=30`})});if(!t.ok)throw new Error("Mercadona no responde");return((await t.json()).hits||[]).map(n=>{let s=n.id||n.objectID;if(!s||!n.display_name)return null;let o=parseFloat(n.price_instructions?.unit_price);return{source:"Mercadona",externalId:String(s),name:n.display_name,brand:"",category:n.categories?.[0]?.name||"",price:Number.isFinite(o)?o:null,imageUrl:typeof n.thumbnail=="string"&&n.thumbnail.startsWith("http")?n.thumbnail:null,packageInfo:Ss(n.packaging,n.price_instructions)}}).filter(Boolean)}async function Ms(e){let a=`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(e)}&search_simple=1&action=process&json=1&page_size=20&lc=es&fields=code,product_name,product_name_es,brands,categories,quantity,image_front_small_url,image_url`;return((await(await fetch(a)).json()).products||[]).map(s=>{let o=(s.product_name_es||s.product_name||"").trim();if(!o)return null;let i=s.image_front_small_url||s.image_url||"";return{source:"Open Food Facts",store:null,externalId:s.code||"",name:o,brand:(s.brands||"").split(",")[0].trim(),category:(s.categories||"").split(",")[0].trim(),price:null,imageUrl:i.startsWith("http")?i:null,packageInfo:(s.quantity||"").trim()}}).filter(Boolean)}async function wn(e,t){return((await z.post("functions/storeSearch",{store:e,q:t})).result||[]).map(n=>({source:n.store||"Open Food Facts",store:e==="off"?null:e,externalId:String(n.externalId||""),name:n.name||"",brand:n.brand||"",category:n.category||"",price:typeof n.price=="number"?n.price:null,imageUrl:typeof n.imageUrl=="string"&&n.imageUrl.startsWith("http")?n.imageUrl:null,packageInfo:n.packageInfo||""})).filter(n=>n.name)}var Es=(e,t)=>e==="mercadona"?xs(t).then(a=>a.map(n=>({...n,store:"mercadona"}))):wn(e,t),Tt={async search(e,t=["mercadona"]){if(e=e.trim(),e.length<2)return{results:[],failed:[]};let a=t.length?t:["mercadona"],n=await Promise.allSettled(a.map(c=>Es(c,e))),s=a.filter((c,p)=>n[p].status==="rejected"),o=n.map(c=>c.status==="fulfilled"?c.value:[]),i=[];for(let c=0;o.some(p=>p.length>c);c++)o.forEach(p=>p[c]&&i.push(p[c]));if(i.length)return{results:i,failed:s};try{let c=await wn("off",e);if(c.length)return{results:c,failed:s}}catch{}try{return{results:await Ms(e),failed:s}}catch{if(s.length===a.length)throw new ce(100,"No se ha podido buscar en los supermercados");return{results:[],failed:s}}},toProduct:e=>({id:null,name:e.name,category:e.category,quantity:1,criticalLimit:1,unit:ke,location:"",notes:[e.store?e.source:"",e.brand,e.packageInfo].filter(Boolean).join(" \xB7 "),expiresAt:null,photo:null,imageUrl:e.imageUrl,price:e.price,mercadonaId:e.store==="mercadona"?e.externalId:null,updatedBy:""})};function zs(e){return{id:e.objectId,date:Y.readDate(e.date)||(e.createdAt||"").slice(0,10),store:e.store||"",total:pe(e.total),items:(e.items||[]).filter(Boolean).map(t=>({name:t.name||"",quantity:pe(t.quantity,1),unit:t.unit||ke,price:t.price===null||t.price===void 0?null:pe(t.price,null)})),note:e.note||"",createdBy:e.createdBy||""}}var qt=30,Oe={async all(){return(await z.query("Ticket",{houseId:H.requireHouseId()})).map(zs).sort((t,a)=>a.date.localeCompare(t.date)||a.id.localeCompare(t.id))},async save(e){W(e.total>=0&&Number.isFinite(e.total),"El total no es v\xE1lido"),W(e.date,"Elige la fecha del ticket"),W(e.date<=X(),"La fecha no puede ser futura");let t={date:Y.date(e.date),store:(e.store||"").trim(),total:Math.round(e.total*100)/100,items:(e.items||[]).map(({name:a,quantity:n,unit:s,price:o})=>({name:a,quantity:n,unit:s,price:o??null})),note:(e.note||"").trim()};if(!e.id){let a=await z.post("classes/Ticket",{...t,houseId:H.requireHouseId(),createdBy:H.email(),ACL:Y.publicAcl()});return{...e,...t,date:e.date,id:a.objectId,createdBy:H.email()}}return await z.put(`classes/Ticket/${e.id}`,t),{...e,...t,date:e.date}},remove:e=>z.delete(`classes/Ticket/${e.id}`),summary(e){let t=ne(X(),-(qt-1)),a=e.filter(n=>n.date>=t&&n.date<=X());return{total:a.reduce((n,s)=>n+s.total,0),count:a.length,from:t}}},kn=()=>({id:null,name:"",category:"",quantity:1,criticalLimit:1,unit:ke,location:"",notes:"",expiresAt:null,photo:null,imageUrl:null,price:null,mercadonaId:null,updatedBy:""});var Cn=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function Ae({label:e,icon:t,error:a,inputRef:n,...s}){return l`<label class=${`field ${a?"has-error":""}`}>
    <span>${e}</span>
    <div class="field-row">
      ${t&&l`<${$} name=${t} size=${20} class="field-icon" />`}
      <input ref=${n} ...${s} />
    </div>
    ${a&&l`<small class="error-text">${a}</small>`}
  </label>`}function la(){let[e,t]=C({}),a=R({});return{errors:e,setErrors:t,refs:a,fail:(s,o)=>(t({[s]:o}),sn(a.current[s]?.closest(".field")),T("error"),!1)}}function Ps({size:e=96}){return l`<svg class="logo" width=${e} height=${e} viewBox="0 0 108 108" aria-hidden="true">
    <defs><linearGradient id="lg" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--primary-light)" /><stop offset="1" stop-color="var(--primary)" />
    </linearGradient></defs>
    <circle cx="54" cy="54" r="54" fill="url(#lg)" />
    <g transform="translate(27.6 28.7) scale(2.2)">
      <path d="M12,3L2,12h3v8h14v-8h3L12,3z" fill="#fff" />
      <path d="M8.5,12.5h7v5.5h-7z" fill="var(--primary)" />
      <path d="M8.5,14.2h7v0.8h-7z" fill="#fff" />
    </g>
  </svg>`}function In({onLoggedIn:e,onRegister:t}){let[a,n]=C(""),[s,o]=C(""),{errors:i,setErrors:c,refs:p,fail:m}=la(),h=async f=>{if(f.preventDefault(),c({}),!Cn.test(a.trim()))return m("email","Introduce un correo v\xE1lido");if(s.length<xe)return m("password",`M\xEDnimo ${xe} caracteres`);await B(async()=>{await Me.login(a,s),T("success"),e()})},r=async()=>{let f=await se({title:"Restablecer contrase\xF1a",message:"Te mandaremos un correo con un enlace para elegir una contrase\xF1a nueva.",label:"Correo electr\xF3nico",type:"email",value:a,confirm:"Enviar"});f!==null&&await B(async()=>{await Me.resetPassword(f),F(`Correo enviado a ${f.trim()}. Revisa tambi\xE9n el spam.`)})};return l`<main class="auth-screen">
    <div class="float stagger" style="--i:0"><${Ps} /></div>
    <h1 class="brand stagger" style="--i:1">Stock Casa</h1>
    <p class="welcome stagger" style="--i:2">Tu despensa, siempre al día</p>
    <p class="muted center stagger" style="--i:3">Controla lo que tienes en casa y compártelo con quien vive contigo</p>

    <form class="card form-card stagger" style="--i:4" onSubmit=${h} novalidate>
      <${Ae} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a}
        error=${i.email} inputRef=${f=>p.current.email=f} onInput=${f=>n(f.target.value)} />
      <${Ae} label="Contraseña" icon="lock" type="password" autocomplete="current-password" value=${s}
        error=${i.password} inputRef=${f=>p.current.password=f} onInput=${f=>o(f.target.value)} />
      <button class="btn primary wide" type="submit"><${$} name="login" size=${20} /> Iniciar sesión</button>
      <button class="btn text center-self" type="button" onClick=${r}>¿Has olvidado la contraseña?</button>
    </form>

    <p class="center stagger" style="--i:5">
      <span class="muted">¿Aún no tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Crear una</button>
    </p>
  </main>`}function Sn({onRegistered:e,onBack:t}){let[a,n]=C({nickname:"",email:"",password:"",repeat:""}),{errors:s,setErrors:o,refs:i,fail:c}=la(),p=r=>f=>n({...a,[r]:f.target.value}),m=async r=>{if(r.preventDefault(),o({}),!a.nickname.trim())return c("nickname","Escribe un nombre o apodo");if(!Cn.test(a.email.trim()))return c("email","Introduce un correo v\xE1lido");if(a.password.length<xe)return c("password",`M\xEDnimo ${xe} caracteres`);if(a.password!==a.repeat)return c("repeat","Las contrase\xF1as no coinciden");await B(async()=>{await Me.register(a.nickname,a.email,a.password,a.repeat),T("success"),F(`\xA1Bienvenido/a, ${a.nickname.trim()}!`),e()})},h=r=>f=>i.current[r]=f;return l`<main class="auth-screen">
    <button class="icon-btn light self-start" onClick=${t} aria-label="Volver"><${$} name="arrow_back" /></button>
    <div class="auth-badge pop-in"><${$} name="person" size=${40} /></div>
    <h1 class="screen-title center stagger" style="--i:1">Crea tu cuenta</h1>
    <p class="muted center stagger" style="--i:2">En un minuto estás organizando tu despensa</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${m} novalidate>
      <${Ae} label="¿Cómo te llamamos?" icon="people" maxlength="24" autocomplete="nickname" value=${a.nickname}
        error=${s.nickname} inputRef=${h("nickname")} onInput=${p("nickname")} />
      <${Ae} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a.email}
        error=${s.email} inputRef=${h("email")} onInput=${p("email")} />
      <${Ae} label="Contraseña (mínimo 6 caracteres)" icon="lock" type="password" autocomplete="new-password" value=${a.password}
        error=${s.password} inputRef=${h("password")} onInput=${p("password")} />
      <${Ae} label="Repite la contraseña" icon="lock" type="password" autocomplete="new-password" value=${a.repeat}
        error=${s.repeat} inputRef=${h("repeat")} onInput=${p("repeat")} />
      <button class="btn primary wide" type="submit"><${$} name="check" size=${20} /> Crear cuenta</button>
    </form>

    <p class="center stagger" style="--i:4">
      <span class="muted">¿Ya tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Iniciar sesión</button>
    </p>
  </main>`}function xn({onReady:e,onLogout:t}){let[a,n]=C("Mi casa"),[s,o]=C(""),[i,c]=C("\xA1Hola!"),{errors:p,setErrors:m,refs:h,fail:r}=la();O(()=>{ve.me().then(v=>c(`\xA1Hola, ${fe(v)}!`)).catch(()=>{})},[]);let f=v=>{T("success"),F(v),Ke(),e()},u=async v=>{if(v.preventDefault(),m({}),s.trim().length!==6)return r("code",`El c\xF3digo tiene ${6} caracteres`);await B(async()=>{let y=await J.join(s);f(`Ahora est\xE1s en \xAB${y.name}\xBB`)},{onError:y=>y instanceof ce&&y.isSessionExpired?t():r("code",y.message)})},g=async v=>{if(v.preventDefault(),m({}),!a.trim())return r("name","Este campo es obligatorio");await B(async()=>{let y=await J.create(a);f(`Casa \xAB${y.name}\xBB creada`)})};return l`<main class="auth-screen">
    <div class="auth-badge pop-in"><${$} name="home" size=${40} /></div>
    <h1 class="screen-title center stagger" style="--i:1">${i}</h1>
    <p class="muted center stagger" style="--i:2">Para empezar, únete a la casa de alguien o crea la tuya</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${u} novalidate>
      <h2>Unirme a una casa</h2>
      <p class="muted">Pide el código de 6 caracteres a alguien de la casa (lo tiene en la pestaña Casa).</p>
      <${Ae} label="Código de 6 caracteres" icon="people" class="code-input" maxlength="6" autocapitalize="characters"
        autocomplete="off" value=${s} error=${p.code} inputRef=${v=>h.current.code=v}
        onInput=${v=>o(v.target.value.toUpperCase())} />
      <button class="btn primary wide" type="submit"><${$} name="login" size=${20} /> Unirme</button>
    </form>

    <p class="muted center stagger" style="--i:4">— o —</p>

    <form class="card form-card stagger" style="--i:5" onSubmit=${g} novalidate>
      <h2>Crear una casa nueva</h2>
      <p class="muted">Serás el primer miembro y podrás invitar a quien quieras con su código.</p>
      <${Ae} label="Nombre de la casa" icon="home" maxlength="40" value=${a} error=${p.name}
        inputRef=${v=>h.current.name=v} onInput=${v=>n(v.target.value)} />
      <button class="btn tonal wide" type="submit"><${$} name="add" size=${20} /> Crear casa</button>
    </form>

    <button class="btn text center-self stagger" style="--i:6" onClick=${t}><${$} name="logout" size=${20} /> Cerrar sesión</button>
  </main>`}function ua(e=re.get().stores){let t=e.map(a=>Ce(a)?.label).filter(Boolean);return t.length<=1?t[0]||"Mercadona":`${t.slice(0,-1).join(", ")} y ${t[t.length-1]}`}var Mn="stockcasa.collapsedGroups",Ht="Sin categor\xEDa";function As(){let e=new Date().getHours();return e<6||e>=21?"Buenas noches":e<13?"Buenos d\xEDas":"Buenas tardes"}function Ls(){try{return new Set(JSON.parse(localStorage.getItem(Mn))||[])}catch{return new Set}}function Ts({value:e}){let[t,a]=C(e),n=R(e);return O(()=>{let s=performance.now(),o=n.current,i,c=p=>{let m=Math.min(1,(p-s)/450),h=1-(1-m)**3;a(Math.round(o+(e-o)*h)),m<1?i=requestAnimationFrame(c):n.current=e};return i=requestAnimationFrame(c),()=>cancelAnimationFrame(i)},[e]),t}function En({active:e,goTo:t,setBadge:a}){let[n,s]=C(null),[o,i]=C(null),[c,p]=C(null),[m,h]=C(""),[r,f]=C("all"),[u,g]=C(Ls),v=R(0),y=R(new Map),w=async(d=!1)=>{await B(async()=>{let b=await J.current();i(b);let[S,P]=await Promise.all([he.all(),ve.me().catch(()=>null)]);v.current===0&&s(S.filter(D=>!y.current.has(D.id))),p(P),te.refresh().then(D=>a(D.filter(V=>!V.checked).length)).catch(()=>{})},{loading:!1,onError:d?()=>{}:ie})};O(()=>{e&&w()},[e]),_e(d=>d==="changed"&&e&&w(!0)),O(()=>{let d=()=>y.current.forEach(({p:b,timer:S})=>{clearTimeout(S),he.remove(b).catch(()=>{})});return window.addEventListener("pagehide",d),()=>window.removeEventListener("pagehide",d)},[]);let A=d=>{s(P=>P.filter(D=>D.id!==d.id));let S=setTimeout(async()=>{y.current.delete(d.id);try{await he.remove(d),G.emit("changed")}catch(P){ie(P),w(!0)}},4700);y.current.set(d.id,{p:d,timer:S}),F(`\xAB${d.name}\xBB eliminado`,{label:"Deshacer",run:()=>{clearTimeout(S),y.current.delete(d.id),s(P=>[...P,d].sort((D,V)=>D.name.localeCompare(V.name,"es"))),T("pop")}})};O(()=>{if(!e||!o||o.memberIds.length<2)return;let d=setInterval(()=>document.visibilityState==="visible"&&w(!0),2e4);return()=>clearInterval(d)},[e,o?.id,o?.memberIds.length]);let N=je(()=>({total:n?.length||0,low:n?.filter(U.isLow).length||0,expiring:n?.filter(U.needsExpiryAttention).length||0}),[n]),L=je(()=>{let d=m.trim().toLowerCase(),b=(n||[]).filter(P=>!d||[P.name,P.category,P.location].some(V=>V.toLowerCase().includes(d))?r==="low"?U.isLow(P):r==="expiring"?U.needsExpiryAttention(P):!0:!1),S=new Map;return b.forEach(P=>{let D=P.category.trim()||Ht;S.has(D)||S.set(D,[]),S.get(D).push(P)}),[...S.entries()].sort(([P],[D])=>(P===Ht)-(D===Ht)||P.localeCompare(D,"es"))},[n,m,r]),I=d=>{let b=new Set(u);b.has(d)?b.delete(d):b.add(d),g(b),localStorage.setItem(Mn,JSON.stringify([...b]))},_=async(d,b,S)=>{let P=n.find(V=>V.id===d.id),D=U.withQuantity(P,P.quantity+b);if(D.quantity!==P.quantity){s(n.map(V=>V.id===d.id?D:V)),T(b>0?"up":"down"),Ue(S),v.current++;try{await he.updateQuantity(D,P.quantity)}catch(V){ie(V)}finally{v.current--}v.current===0&&w(!0)}},k=async d=>{let b=await se({title:`A\xF1adir \xAB${d.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:j(U.amountToBuy(d)),suffix:d.unit,confirm:"A\xF1adir"});b!==null&&await B(async()=>{await te.addProduct(d,me(b)??0),T("pop"),F(`\xAB${d.name}\xBB a\xF1adido a la compra`),G.emit("changed")})},x=async d=>{await K(Hs,{initial:d,categories:[...new Set((n||[]).map(S=>S.category).filter(Boolean))]})&&w(!0)},q=async()=>{let d=await Fe("A\xF1adir producto",[{label:"Buscar en el s\xFAper",hint:`Foto, categor\xEDa y precio de ${ua()}`,icon:"store"},{label:"Escribirlo a mano",icon:"edit"}]);if(d!==null)if(d===0){let b=await K(zn,{});if(!b)return;let S=(n||[]).find(P=>P.mercadonaId&&P.mercadonaId===b.externalId);x(S||Tt.toProduct(b))}else x(kn())},E=n&&n.length===0;return l`<section class="tab">
    <header class="tab-header">
      <div class="grow">
        <p class="muted small">${As()}${c?`, ${fe(c)}`:""}</p>
        <h1 class="brand">Despensa</h1>
      </div>
      ${o&&l`<button class="house-pill" onClick=${()=>t("house")}><${$} name="home" size=${16} /> ${o.name}</button>`}
    </header>

    <div class="stats">
      ${[["all","Productos",N.total,""],["low","Por reponer",N.low,"danger"],["expiring","Caducan pronto",N.expiring,"warning"]].map(([d,b,S,P])=>l`<button class=${`stat ${P} ${r===d?"selected":""}`} onClick=${()=>f(r===d?"all":d)}>
          <strong><${Ts} value=${S} /></strong><span>${b}</span>
        </button>`)}
    </div>

    <label class="search">
      <${$} name="search" size=${20} />
      <input type="search" placeholder="Buscar por nombre, categoría o sitio" value=${m} onInput=${d=>h(d.target.value)} />
    </label>

    <div class="chips">
      ${[["all","Todos"],["low","Por reponer"],["expiring","Caducan pronto"]].map(([d,b])=>l`
        <button class=${`chip ${r===d?"checked":""}`} onClick=${()=>f(d)}>${b}</button>`)}
    </div>

    ${!n&&l`<div class="skeleton-list">${[0,1,2].map(()=>l`<div class="skeleton"></div>`)}</div>`}

    ${E&&l`<div class="empty">
      <${be} name="pantry" />
      <h2>Tu despensa está vacía</h2>
      <p class="muted">Añade lo que tienes en casa con el botón +. Puedes buscarlo en ${ua()} para no escribir.</p>
    </div>`}

    ${n&&!E&&L.length===0&&l`<div class="empty"><${be} name="search" /><h2>Nada por aquí</h2><p class="muted">Prueba con otra búsqueda o filtro.</p></div>`}

    ${n&&!E&&!localStorage.getItem("stockcasa.swipeHint")&&l`<p class="hint" onClick=${d=>{localStorage.setItem("stockcasa.swipeHint","1"),d.currentTarget.remove()}}>
      <${$} name="swap" size=${16} /> Desliza un producto hacia un lado para eliminarlo
    </p>`}

    <div class="groups">
      ${L.map(([d,b],S)=>l`<div class="group" key=${d}>
        <button class="group-header" onClick=${()=>I(d)}>
          <span class=${`group-dot tone-${d===Ht?"free":Je(d)}`}></span>
          <span class="grow">${d}</span>
          <span class="count">${b.length}</span>
          ${b.some(U.isLow)&&l`<span class="dot danger"></span>`}
          <span class=${`chevron ${u.has(d)?"":"open"}`}><${$} name="chevron_right" size=${20} /></span>
        </button>
        ${!u.has(d)&&b.map((P,D)=>l`<${et} key=${P.id} class="enter" style=${`--i:${Math.min(S*3+D,12)}`}
          onDelete=${()=>A(P)}>
          <${qs} p=${P} onOpen=${()=>x(P)} onLongPress=${()=>k(P)} onChange=${_} />
        </${et}>`)}
      </div>`)}
    </div>

    <button class="fab" onClick=${q} aria-label="Añadir producto"><${$} name="add" size=${28} /></button>
  </section>`}function qs({p:e,onOpen:t,onLongPress:a,onChange:n}){let s=R(),o=R(),i=R(null),c=R(!1),p=U.isLow(e),m=U.expiryStatus(e),h=U.daysUntilExpiry(e),r=U.level(e),f=p?"danger":e.quantity<=e.criticalLimit*1.5?"warning":"primary",u=w=>{i.current={x:w.clientX,y:w.clientY},c.current=!1,o.current=setTimeout(()=>{c.current=!0,T("pop"),a()},550)},g=()=>clearTimeout(o.current);return l`<article class="card product-card"
    onPointerDown=${u} onPointerMove=${w=>{i.current&&Math.hypot(w.clientX-i.current.x,w.clientY-i.current.y)>8&&g()}} onPointerUp=${g} onPointerLeave=${g} onPointerCancel=${g}
    onContextMenu=${w=>w.preventDefault()} onClick=${()=>{c.current||t()}}>
    <${ue} url=${U.image(e)} name=${e.name} />
    <div class="grow min0">
      <h3 class="ellipsis">${e.name}</h3>
      <p class="muted small ellipsis">${[e.location,e.price!=null?`${ee(e.price)}/${e.unit}`:""].filter(Boolean).join(" \xB7 ")||`M\xEDnimo ${j(e.criticalLimit)} ${e.unit}`}</p>
      <div class="tags">
        ${p&&l`<span class="tag danger">Por reponer</span>`}
        ${m==="EXPIRED"&&l`<span class="tag danger">Caducado</span>`}
        ${m==="SOON"&&l`<span class="tag warning">${h===0?"Caduca hoy":`Caduca en ${h} d`}</span>`}
      </div>
      <div class="level"><span class=${f} style=${`width:${Math.round(r*100)}%`}></span></div>
    </div>
    <div class="stepper" onClick=${w=>w.stopPropagation()} onPointerDown=${w=>w.stopPropagation()}>
      <button class="round" aria-label="Quitar uno" onClick=${()=>n(e,-1,s.current)}><${$} name="remove" size=${18} /></button>
      <div class="qty"><strong ref=${s} class=${p?"danger-text":""}>${j(e.quantity)}</strong><small>${e.unit}</small></div>
      <button class="round primary" aria-label="Añadir uno" onClick=${()=>n(e,1,s.current)}><${$} name="add" size=${18} /></button>
    </div>
  </article>`}function Hs({initial:e,categories:t,close:a}){let n=!e.id,s=re.get().defaultExpiry,[o,i]=C(()=>n&&!e.expiresAt&&s?{...e,expiresAt:ne(X(),s)}:e),[c,p]=C(void 0),[m,h]=C(null),[r,f]=C(!!e.expiresAt||n&&!!s),[u,g]=C(j(e.quantity)),[v,y]=C(j(e.criticalLimit)),[w,A]=C(e.price!=null?String(e.price).replace(".",","):""),N=R(),L=b=>S=>i({...o,[b]:S.target.value}),I=b=>{f(!0),i({...o,expiresAt:ne(X(),b)}),T("tap")},_=c===null?o.imageUrl||null:m||U.image(o),k=async b=>{let S=b.target.files?.[0];if(b.target.value="",!S)return;let P=await Ze(S);p(P),h(URL.createObjectURL(P))},x=async()=>{let b=await K(zn,{initialQuery:o.name});if(!b)return;let S=Tt.toProduct(b);i({...o,name:S.name,category:S.category||o.category,imageUrl:S.imageUrl,price:S.price??o.price,mercadonaId:S.mercadonaId,notes:o.notes||S.notes}),S.price!=null&&A(String(S.price).replace(".",",")),T("pop"),F(`Datos importados de ${b.source}`)},q=async b=>{b.preventDefault();let S=me(u),P=me(v),D=w.trim()?me(w):null;if(S===null||P===null)return F("Revisa las cantidades");if(w.trim()&&D===null)return F("El precio no es v\xE1lido");if(r&&!o.expiresAt)return F("Elige la fecha de caducidad");let V={...o,quantity:S,criticalLimit:P,price:D,expiresAt:r?o.expiresAt:null},Le=await B(()=>he.save(V,c));Le&&(T("success"),F(n?"Producto a\xF1adido":"Cambios guardados"),G.emit("changed"),a(Le))},E=async()=>{await ye({title:"Eliminar producto",message:`\xBFSeguro que quieres eliminar \xAB${o.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await B(async()=>{await he.remove(o),T("swipe"),F("Producto eliminado"),G.emit("changed"),a(!0)})},d=async()=>{let b=await se({title:`A\xF1adir \xAB${o.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:j(U.amountToBuy(o)),suffix:o.unit,confirm:"A\xF1adir"});b!==null&&await B(async()=>{await te.addProduct(o,me(b)??0),T("pop"),F(`\xAB${o.name}\xBB a\xF1adido a la compra`),G.emit("changed")})};return l`<form class="sheet-body" onSubmit=${q}>
    <div class="sheet-title">
      <h2>${n?"Nuevo producto":"Editar producto"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(!1)} aria-label="Cerrar"><${$} name="close" /></button>
    </div>

    <div class="photo-box">
      <${ue} url=${_} name=${o.name||"?"} size=${96} />
      <div class="photo-actions">
        <button type="button" class="btn tonal small" onClick=${()=>N.current.click()}><${$} name="camera" size=${18} /> Foto</button>
        ${(c instanceof Blob||c!==null&&o.photo)&&l`<button type="button" class="btn text small" onClick=${()=>{p(null),h(null)}}>Quitar foto</button>`}
        <button type="button" class="btn tonal small" onClick=${x}><${$} name="store" size=${18} /> Buscar en el súper</button>
      </div>
      <input ref=${N} type="file" accept="image/*" hidden onChange=${k} />
    </div>

    <label class="field"><span>Nombre</span><input required maxlength="60" value=${o.name} onInput=${L("name")} /></label>
    <label class="field"><span>Categoría</span>
      <input list="categories" value=${o.category} onInput=${L("category")} placeholder="Lácteos, Limpieza…" />
      <datalist id="categories">${t.map(b=>l`<option value=${b} />`)}</datalist>
    </label>
    <div class="row-2">
      <label class="field"><span>Cantidad</span><input inputmode="decimal" value=${u} onInput=${b=>g(b.target.value)} /></label>
      <label class="field"><span>Mínimo (avisar)</span><input inputmode="decimal" value=${v} onInput=${b=>y(b.target.value)} /></label>
    </div>
    <div class="row-2">
      <label class="field"><span>Unidad</span><input value=${o.unit} onInput=${L("unit")} placeholder="uds, kg, L…" /></label>
      <label class="field"><span>Precio por unidad (€)</span><input inputmode="decimal" value=${w} onInput=${b=>A(b.target.value)} placeholder="Opcional" /></label>
    </div>
    <label class="field"><span>Dónde está</span><input value=${o.location} onInput=${L("location")} placeholder="Nevera, despensa…" /></label>

    <div class="field">
      <span>Caducidad</span>
      <div class="segmented">
        <button type="button" class=${r?"":"on"} onClick=${()=>{f(!1),T("tap")}}><${$} name="hourglass" size=${16} /> Sin caducidad</button>
        <button type="button" class=${r?"on":""} onClick=${()=>{f(!0),o.expiresAt||I(s||7)}}><${$} name="calendar" size=${16} /> Con fecha</button>
      </div>
    </div>
    ${r&&l`<div class="expiry-box">
      <label class="field"><span>Caduca el</span><input type="date" value=${o.expiresAt||""} onInput=${L("expiresAt")} /></label>
      <div class="chips wrap">
        ${ct.filter(b=>b.days).slice(0,6).map(b=>l`<button type="button" class="chip small" onClick=${()=>I(b.days)}>+${b.label}</button>`)}
      </div>
      ${o.expiresAt&&l`<p class="muted small">${U.daysUntilExpiry(o)<0?"Ya ha caducado":U.daysUntilExpiry(o)===0?"Caduca hoy":`Caduca dentro de ${U.daysUntilExpiry(o)} d\xEDas (${oe(o.expiresAt)})`}</p>`}
    </div>`}

    <label class="field"><span>Notas</span><textarea rows="2" value=${o.notes} onInput=${L("notes")}></textarea></label>
    ${o.updatedBy&&l`<p class="muted small">Última modificación: ${dt(o.updatedBy)}</p>`}

    <button class="btn primary wide" type="submit"><${$} name="check" size=${20} /> Guardar</button>
    ${!n&&l`<div class="row-2">
      <button type="button" class="btn tonal" onClick=${d}><${$} name="cart" size=${18} /> A la compra</button>
      <button type="button" class="btn danger" onClick=${E}><${$} name="delete" size=${18} /> Eliminar</button>
    </div>`}
  </form>`}function zn({initialQuery:e="",close:t}){let a=re.get().stores,[n,s]=C(e),[o,i]=C(null),[c,p]=C(!1),[m,h]=C("all"),r=R();O(()=>{setTimeout(()=>r.current?.focus(),250)},[]),O(()=>{if(n.trim().length<2){i(null);return}let g=!1;p(!0);let v=setTimeout(async()=>{try{let y=await Tt.search(n,a);g||i(y)}catch(y){g||ie(y)}finally{g||p(!1)}},400);return()=>{g=!0,clearTimeout(v)}},[n]);let f=(o?.results||[]).filter(g=>m==="all"||g.store===m),u=a.filter(g=>(o?.results||[]).some(v=>v.store===g));return l`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow min0"><h2>Buscar en el súper</h2><p class="muted small ellipsis">${ua(a)} · cámbialos en tu perfil</p></div>
      <button class="icon-btn" onClick=${()=>t(null)} aria-label="Cerrar"><${$} name="close" /></button>
    </div>
    <label class="search">
      <${$} name="search" size=${20} />
      <input ref=${r} type="search" placeholder="Leche, arroz, detergente…" value=${n} onInput=${g=>s(g.target.value)} />
      ${c&&l`<span class="mini-spinner"></span>`}
    </label>
    ${u.length>1&&l`<div class="chips">
      <button class=${`chip ${m==="all"?"checked":""}`} onClick=${()=>h("all")}>Todos</button>
      ${u.map(g=>l`<button class=${`chip ${m===g?"checked":""}`} onClick=${()=>h(g)}>
        <span class="store-dot" style=${`background:${Ce(g).color}`}></span>${Ce(g).label}</button>`)}
    </div>`}
    ${o&&o.failed.length>0&&l`<p class="muted small note">${o.failed.map(g=>Ce(g)?.label).join(", ")} no responde ahora mismo. Se muestra lo demás.</p>`}
    ${o&&f.length===0&&l`<p class="muted center">No se ha encontrado nada. Prueba con otras palabras.</p>`}
    ${!o&&l`<p class="muted center small">Escribe al menos 2 letras. Se rellenan solos el nombre, la categoría, la foto y el precio (si el súper lo publica).</p>`}
    <div class="catalog-list">
      ${f.map((g,v)=>{let y=Ce(g.store);return l`<button key=${`${g.store}-${g.externalId}-${v}`} class="catalog-item enter" style=${`--i:${Math.min(v,10)}`} onClick=${()=>t(g)}>
          <${ue} url=${g.imageUrl} name=${g.name} size=${56} />
          <span class="grow min0 left">
            <strong class="ellipsis2">${g.name}</strong>
            <span class="muted small ellipsis">${[g.brand,g.packageInfo].filter(Boolean).join(" \xB7 ")||g.category}</span>
            <span class="store-badge" style=${`--store:${y?.color||"var(--muted)"}`}>${y?.label||g.source}</span>
          </span>
          <span class=${`price ${g.price==null?"muted":""}`}>${g.price!=null?ee(g.price):"Sin precio"}</span>
        </button>`})}
    </div>
  </div>`}var Pn=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Nt({title:e,products:t,marked:a=[],markedLabel:n="Ya est\xE1",freeLabel:s="No est\xE1 en la despensa",close:o}){let[i,c]=C(""),p=R(),m=new Set(a);O(()=>{window.matchMedia?.("(pointer: fine)").matches&&setTimeout(()=>p.current?.focus(),250)},[]);let h=je(()=>{let f=Pn(i.trim());return[...f?t.filter(g=>Pn(`${g.name} ${g.category} ${g.location}`).includes(f)):t].sort((g,v)=>U.isLow(v)-U.isLow(g)||g.name.localeCompare(v.name,"es"))},[t,i]),r=i.trim();return l`<div class="sheet-body picker">
    <div class="sheet-title">
      <h2 class="grow">${e}</h2>
      <button class="icon-btn" onClick=${()=>o(null)} aria-label="Cerrar"><${$} name="close" /></button>
    </div>
    <label class="search">
      <${$} name="search" size=${20} />
      <input ref=${p} type="search" placeholder="Buscar en la despensa" value=${i} onInput=${f=>c(f.target.value)} />
    </label>

    <button class="free-item" onClick=${()=>o({free:r})}>
      <span class="thumb mono tone-free" style="width:48px;height:48px"><${$} name="edit" size=${22} /></span>
      <span class="grow min0 left">
        <strong class="ellipsis block">${r?`A\xF1adir \xAB${r}\xBB`:"Escribir otra cosa"}</strong>
        <span class="muted small">${s}</span>
      </span>
      <${$} name="chevron_right" />
    </button>

    ${t.length===0&&l`<p class="muted center small">Aún no hay productos en la despensa.</p>`}
    ${t.length>0&&h.length===0&&l`<p class="muted center small">Ningún producto coincide con «${r}».</p>`}

    <div class="picker-grid">
      ${h.map((f,u)=>l`<button key=${f.id} class=${`pick-tile enter ${m.has(f.id)?"marked":""}`}
        style=${`--i:${Math.min(u,14)}`} onClick=${()=>o({product:f})}>
        <span class="pick-photo">
          <${ue} url=${U.image(f)} name=${f.name} size=${84} />
          ${m.has(f.id)&&l`<span class="pick-badge"><${$} name="check" size=${14} /></span>`}
          ${U.isLow(f)&&!m.has(f.id)&&l`<span class="pick-low"></span>`}
        </span>
        <span class="pick-name ellipsis2">${f.name}</span>
        <span class="muted tiny">${m.has(f.id)?n:`${j(f.quantity)} ${f.unit}`}</span>
      </button>`)}
    </div>
  </div>`}function An({active:e,setBadge:t,goTo:a}){let[n,s]=C(null),[o,i]=C(null),[c,p]=C({}),[m,h]=C(null),r=async(d=!1)=>{await B(async()=>{let b=await J.current();i(b);let S=await te.refresh();s(S),t(S.filter(D=>!D.checked).length),Oe.all().then(h).catch(()=>h([]));let P=await ve.many(b.memberIds);p(Object.fromEntries(Object.values(P).map(D=>[D.email,D])))},{loading:!1,onError:d?()=>{}:ie})};O(()=>{e&&r()},[e]),_e(d=>d==="changed"&&e&&r(!0)),O(()=>{if(!e||!o||o.memberIds.length<2)return;let d=setInterval(()=>document.visibilityState==="visible"&&r(!0),2e4);return()=>clearInterval(d)},[e,o?.id]);let f=d=>{s(d),t(d.filter(b=>!b.checked).length)},u=async(d,b)=>{let S=!d.checked;f(n.map(P=>P.id===d.id?{...P,checked:S}:P)),T(S?"check":"tap"),Ue(b);try{await te.setChecked(d,S)}catch(P){ie(P),r(!0)}},g=async d=>{f(n.filter(b=>b.id!==d.id));try{await te.dismiss(d)}catch(b){ie(b),r(!0);return}F(`\xAB${d.name}\xBB quitado de la lista`,{label:"Deshacer",run:async()=>{await B(()=>te.restore(d),{loading:!1}),r(!0)}})},v=async d=>{let b=await se({title:`\xBFCu\xE1nto \xAB${d.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:j(d.quantity),suffix:d.unit});b!==null&&await B(async()=>{await te.changeQuantity(d,me(b)??0),T("pop"),r(!0)})},y=async()=>{let d=await B(()=>he.all());if(!d)return;let b=await K(Nt,{title:"A\xF1adir a la compra",products:d,marked:(n||[]).map(V=>V.productId).filter(Boolean),markedLabel:"Ya en la lista",freeLabel:"Pilas, regalo\u2026 algo que no guard\xE1is en la despensa"});if(!b)return;if(b.free!==void 0){let V=b.free.trim()||(await se({title:"Otra cosa",label:"\xBFQu\xE9 hay que comprar?",confirm:"Siguiente"}))?.trim();if(!V)return;let Le=await se({title:V,label:"Cantidad",inputMode:"decimal",value:"1",suffix:"uds",confirm:"A\xF1adir"});if(Le===null)return;await B(async()=>{await te.addFreeItem(V,me(Le)??0,"uds"),T("pop"),F(`\xAB${V}\xBB a\xF1adido a la compra`),r(!0)});return}let S=b.product,P=(n||[]).find(V=>V.productId===S.id),D=await se({title:`\xBFCu\xE1nto \xAB${S.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:j(P?.quantity??U.amountToBuy(S)),suffix:S.unit,confirm:"A\xF1adir"});D!==null&&await B(async()=>{await te.addProduct(S,me(D)??0),T("pop"),F(`\xAB${S.name}\xBB a\xF1adido a la compra`),r(!0)})},w=async()=>{let d=(n||[]).filter(ge=>!ge.checked),b=(n||[]).filter(ge=>ge.checked),S=d.length?`${d.length===1?"Te falta 1 producto":`Te faltan ${d.length} productos`}:
${d.slice(0,8).map(ge=>`\xB7 ${ge.name}`).join(`
`)}${d.length>8?`
\xB7 y ${d.length-8} m\xE1s`:""}

Se quedar\xE1n en la lista para la pr\xF3xima vez. Lo marcado se sumar\xE1 a la despensa.`:"Lo marcado se sumar\xE1 al stock de la despensa y saldr\xE1 de la lista.";if(!await ye({title:d.length?"Faltan cosas por comprar":"Terminar la compra",message:S,confirm:d.length?"Terminar igualmente":"Terminar",cancel:d.length?"Seguir comprando":"Cancelar"}))return;let D=await B(()=>te.completePurchase());if(!D)return;Ke(),T("success"),F(D.length===1?"1 producto repuesto":`${D.length} productos repuestos`),G.emit("changed"),r(!0);let V=(D.length?D:b).map(ge=>({name:ge.name,quantity:ge.quantity,unit:ge.unit,price:ge.price})),Le=V.reduce((ge,Dt)=>ge+(Dt.price!=null?Dt.price*Dt.quantity:0),0);await K(Tn,{initial:{id:null,date:X(),store:Ln(),total:Math.round(Le*100)/100,items:V,note:""},fromPurchase:!0})&&r(!0)},A=async()=>{await K(Ds,{}),r(!0)},N=async()=>{let d=(n||[]).filter(D=>!D.checked),b=d.length?d:n||[];if(!b.length)return F("La lista est\xE1 vac\xEDa");let S=b.reduce((D,V)=>D+(nt(V)||0),0),P=[`Lista de la compra \xB7 ${o?.name||""}`,"",...b.map(D=>`- ${D.name}: ${j(D.quantity)} ${D.unit}`),...S>0?["",`Total estimado: ${ee(S)}`]:[]].join(`
`);navigator.share?navigator.share({text:P}).catch(()=>{}):(await navigator.clipboard?.writeText(P),F("Lista copiada"))},L=n?.length||0,I=n?.filter(d=>d.checked).length||0,_=(n||[]).filter(d=>!d.checked),k=_.reduce((d,b)=>d+(nt(b)||0),0),x=_.filter(d=>nt(d)===null).length,q=o?.shoppingDay>=1&&Ct(X(),kt(o.shoppingDay))===0,E=m?Oe.summary(m):null;return l`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Compra</h1>
      <button class="icon-btn" onClick=${y} aria-label="Añadir"><${$} name="add" /></button>
      <button class="icon-btn" onClick=${N} aria-label="Compartir lista"><${$} name="share" /></button>
    </header>

    ${o&&l`<button class=${`day-banner ${q?"pulse":""}`} onClick=${()=>a("house","settings")}>
      <${$} name="calendar" size=${16} /> ${Ye(o.shoppingDay)}
    </button>`}

    <button class="card spend-card enter" onClick=${A}>
      <span class="spend-icon"><${$} name="receipt" size=${24} /></span>
      <span class="grow min0 left">
        <span class="muted small block">Gastado en los últimos ${qt} días</span>
        <strong class="spend-total">${E?ee(E.total):"\u2026"}</strong>
        <span class="muted small block">${E?E.count===0?"A\xFAn no hay tickets \xB7 toca para a\xF1adir":`${E.count===1?"1 ticket":`${E.count} tickets`} \xB7 toca para verlos o corregirlos`:"Cargando tickets"}</span>
      </span>
      <${$} name="chevron_right" />
    </button>

    ${L>0&&l`<div class="card soft progress-card">
      <div class="row">
        <span class="grow">${I===0?"Marca lo que metas en el carro":`${I} de ${L} en el carro`}</span>
        <strong>${x===0?`Falta: ${ee(k)}`:`\u2248 ${ee(k)} (+${x} sin precio)`}</strong>
      </div>
      <div class="level big"><span class="primary" style=${`width:${L?Math.round(I*100/L):0}%`}></span></div>
    </div>`}

    ${!n&&l`<div class="skeleton-list">${[0,1,2].map(()=>l`<div class="skeleton"></div>`)}</div>`}
    ${n&&L===0&&l`<div class="empty">
      <${be} name="done" />
      <h2>¡No falta nada!</h2>
      <p class="muted">Cuando algo baje de su mínimo aparecerá aquí solo. También puedes añadir cosas con el +.</p>
    </div>`}

    <div class="list">
      ${(n||[]).map((d,b)=>{let S=c[d.addedBy];return l`<${et} key=${d.id} class="enter" style=${`--i:${Math.min(b,12)}`} label="Quitar" onDelete=${()=>g(d)}>
          <article class=${`card shop-item ${d.checked?"checked":""}`}>
            <button class=${`check ${d.checked?"on":""}`} aria-label=${d.checked?"Desmarcar":"Marcar"} onClick=${P=>u(d,P.currentTarget)}>
              ${d.checked&&l`<${$} name="check" size=${18} />`}
            </button>
            <${ue} url=${d.photoUrl} name=${d.name} size=${46} icon=${d.productId?null:"cart"} />
            <button class="grow min0 left plain" onClick=${()=>v(d)}>
              <span class="min0">
                <h3 class="ellipsis name">${d.name}</h3>
                <p class="muted small ellipsis">
                  ${j(d.quantity)} ${d.unit}${nt(d)!==null?` \xB7 ${ee(nt(d))}`:""}
                  ${d.manual&&d.addedBy&&` \xB7 a\xF1adido por ${S?fe(S):dt(d.addedBy)}`}
                </p>
              </span>
            </button>
            ${S&&l`<${Be} profile=${S} size=${26} />`}
            <button class="icon-btn small" aria-label="Quitar" onClick=${()=>g(d)}><${$} name="close" size=${18} /></button>
            <span class="strike" aria-hidden="true"></span>
          </article>
        </${et}>`})}
    </div>

    ${L>0&&l`<div class="bottom-action">
      <button class="btn primary wide" disabled=${I===0} onClick=${w}>
        <${$} name="check" size=${20} /> ${I===0?"Marca lo que hayas comprado":I<L?`Terminar compra (${I} de ${L})`:`Terminar compra (${I})`}
      </button>
    </div>`}
  </section>`}function Ln(){return Ce(re.get().stores[0])?.label||""}var Ns=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function Ds({close:e}){let[t,a]=C(null),n=()=>B(async()=>a(await Oe.all()),{loading:!1});O(()=>{n()},[]);let s=async p=>{await K(Tn,{initial:p})&&(n(),G.emit("changed"))},o=()=>s({id:null,date:X(),store:Ln(),total:0,items:[],note:""}),i=t?Oe.summary(t):null,c=new Map;return(t||[]).forEach(p=>{let m=ze(p.date),h=`${Ns[m.getMonth()]} ${m.getFullYear()}`;c.has(h)||c.set(h,[]),c.get(h).push(p)}),l`<div class="sheet-body">
    <div class="sheet-title">
      <h2 class="grow">Tickets y gasto</h2>
      <button class="icon-btn" onClick=${()=>e()} aria-label="Cerrar"><${$} name="close" /></button>
    </div>

    <div class="card soft total-card">
      <span class="muted small">Últimos ${qt} días</span>
      <strong class="total">${i?ee(i.total):"\u2026"}</strong>
      <span class="muted small">${i?`${i.count===1?"1 ticket":`${i.count} tickets`} desde el ${oe(i.from)}`:""}</span>
    </div>
    <button class="btn tonal wide" onClick=${o}><${$} name="add" size=${20} /> Añadir un ticket</button>

    ${!t&&l`<div class="skeleton"></div>`}
    ${t&&t.length===0&&l`<div class="empty small">
      <${be} name="receipt" />
      <h2>Sin tickets todavía</h2>
      <p class="muted">Al terminar una compra podrás guardar su ticket con el total. También puedes añadirlos a mano.</p>
    </div>`}

    ${[...c.entries()].map(([p,m])=>l`<div class="ticket-group">
      <div class="row"><h3 class="section-label grow">${p}</h3><span class="muted small">${ee(m.reduce((h,r)=>h+r.total,0))}</span></div>
      ${m.map(h=>{let r=Zt(h.store);return l`<button class="ticket-row" onClick=${()=>s(h)}>
          <span class="ticket-date"><strong>${ze(h.date).getDate()}</strong><small>${oe(h.date).split(" ")[1]}</small></span>
          <span class="grow min0 left">
            <strong class="ellipsis block">${h.store||"Compra"}</strong>
            <span class="muted small ellipsis block">${h.items.length?`${h.items.length} ${h.items.length===1?"producto":"productos"}`:"Sin detalle"}${h.note?` \xB7 ${h.note}`:""}</span>
          </span>
          ${r&&l`<span class="store-dot" style=${`background:${r.color}`}></span>`}
          <strong class="price">${ee(h.total)}</strong>
        </button>`})}
    </div>`)}
  </div>`}function Tn({initial:e,fromPurchase:t=!1,close:a}){let[n,s]=C(e.date),[o,i]=C(e.store),[c,p]=C(e.total?String(e.total).replace(".",","):""),[m,h]=C(e.note),[r,f]=C(e.items),[u,g]=C(!1),v=re.get().stores.map(I=>Ce(I)?.label).filter(Boolean),y=[...new Set([...v,...Pe.map(I=>I.label)])],w=!e.id,A=r.reduce((I,_)=>I+(_.price!=null?_.price*_.quantity:0),0),N=async I=>{I.preventDefault();let _=me(c);if(_===null)return F("Escribe el total del ticket");let k=await B(()=>Oe.save({...e,date:n,store:o,total:_,note:m,items:r}));k&&(T("success"),F(w?"Ticket guardado":"Ticket actualizado"),G.emit("changed"),a(k))},L=async()=>{await ye({title:"Eliminar ticket",message:`Se quitar\xE1 del gasto ${ee(e.total)} del ${oe(e.date)}.`,confirm:"Eliminar",danger:!0})&&await B(async()=>{await Oe.remove(e),T("swipe"),F("Ticket eliminado"),G.emit("changed"),a(!0)})};return l`<form class="sheet-body" onSubmit=${N}>
    <div class="sheet-title">
      <span class="spend-icon"><${$} name="receipt" size=${24} /></span>
      <div class="grow min0"><h2>${w?t?"Guardar el ticket":"Nuevo ticket":"Editar ticket"}</h2>
        ${t&&l`<p class="muted small">Corrige el total con el del ticket del súper para llevar bien la cuenta</p>`}</div>
      <button type="button" class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${$} name="close" /></button>
    </div>

    <label class="field"><span>Total pagado (€)</span>
      <div class="field-row"><input class="big-input" inputmode="decimal" value=${c} placeholder="0,00" onInput=${I=>p(I.target.value)} /><span class="suffix">€</span></div>
    </label>
    ${A>0&&l`<p class="muted small">Estimado con los precios guardados: ${ee(A)}
      <button type="button" class="btn text inline" onClick=${()=>p(String(Math.round(A*100)/100).replace(".",","))}>Usar</button></p>`}

    <div class="field">
      <span>Supermercado</span>
      <div class="chips wrap">
        ${y.map(I=>l`<button type="button" class=${`chip ${o===I?"checked":""}`} onClick=${()=>{i(o===I?"":I),T("tap")}}>
          <span class="store-dot" style=${`background:${Zt(I)?.color||"var(--muted)"}`}></span>${I}</button>`)}
      </div>
      <input class="plain-input" placeholder="Otro (escríbelo)" value=${y.includes(o)?"":o} onInput=${I=>i(I.target.value)} />
    </div>

    <label class="field"><span>Fecha</span><input type="date" max=${X()} value=${n} onInput=${I=>s(I.target.value)} /></label>
    <label class="field"><span>Nota</span><input value=${m} maxlength="80" placeholder="Opcional" onInput=${I=>h(I.target.value)} /></label>

    ${r.length>0&&l`<div class="card soft">
      <button type="button" class="plain" onClick=${()=>g(!u)}>
        <strong class="grow left">${r.length===1?"1 producto":`${r.length} productos`}</strong>
        <span class=${`chevron ${u?"open":""}`}><${$} name="chevron_right" size=${20} /></span>
      </button>
      ${u&&r.map((I,_)=>l`<div class="ticket-line">
        <span class=${`group-dot tone-${Je(I.name)}`}></span>
        <span class="grow min0 ellipsis">${I.name}</span>
        <span class="muted small">${j(I.quantity)} ${I.unit}${I.price!=null?` \xB7 ${ee(I.price*I.quantity)}`:""}</span>
        <button type="button" class="icon-btn small" aria-label="Quitar" onClick=${()=>f(r.filter((k,x)=>x!==_))}><${$} name="close" size=${16} /></button>
      </div>`)}
    </div>`}

    <button class="btn primary wide" type="submit"><${$} name="check" size=${20} /> ${w?"Guardar ticket":"Guardar cambios"}</button>
    ${t&&l`<button type="button" class="btn text wide" onClick=${()=>a(null)}>Ahora no</button>`}
    ${!w&&l`<button type="button" class="btn danger wide" onClick=${L}><${$} name="delete" size=${20} /> Eliminar ticket</button>`}
  </form>`}var qn={OK:{label:"Hay de sobra",tone:"success"},BELOW_MINIMUM:{label:"Quedar\xE1 bajo m\xEDnimo",tone:"warning"},NOT_ENOUGH:{label:"No llega",tone:"danger"},NOT_IN_PANTRY:{label:"Hay que comprarlo",tone:"primary"}},Bs=["Todas","Desayuno","Comida","Cena"];function Dn(e){return e.canCook?e.items.some(t=>t.status==="BELOW_MINIMUM")?{text:"Puedes cocinarla (algo quedar\xE1 bajo m\xEDnimo)",tone:"warning"}:{text:"Puedes cocinarla",tone:"success"}:{text:e.missing.length===1?"Falta 1 ingrediente":`Faltan ${e.missing.length} ingredientes`,tone:"danger"}}var da=e=>String(e.steps||"").split(`
`).map(t=>t.replace(/^\s*\d+[.)-]\s*/,"").trim()).filter(Boolean),Hn=e=>String(e||"").trim().toLowerCase();function Bn({active:e}){let[t,a]=C(null),[n,s]=C([]),[o,i]=C("Todas"),c=async(u=!1)=>{await B(async()=>{await J.current();let[g,v]=await Promise.all([de.all(),he.all()]);a(g),s(v)},{loading:!1,onError:u?()=>{}:ie})};O(()=>{e&&c()},[e]),_e(u=>u==="changed"&&e&&c(!0));let p=async u=>{await K(Nn,{recipe:u,prods:n}),c(!0)},m=async u=>{await K(Nn,{recipe:de.fromLibrary(u,n),prods:n,library:u}),c(!0)},h=async()=>{await K(Fn,{initial:null,prods:n})&&c(!0)},r=new Set((t||[]).map(u=>Hn(u.name))),f=rn.filter(u=>!r.has(Hn(u.name))&&(o==="Todas"||u.meal===o));return l`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Recetas</h1>
      <button class="icon-btn" onClick=${h} aria-label="Nueva receta"><${$} name="add" /></button>
    </header>

    ${!t&&l`<div class="skeleton-list">${[0,1].map(()=>l`<div class="skeleton tall"></div>`)}</div>`}

    ${t&&l`<h2 class="section-title">Mis recetas</h2>`}
    ${t&&t.length===0&&l`<div class="card empty-card compact">
      <${be} name="recipes" />
      <div class="grow min0">
        <p class="muted small">Guarda una de las ideas de abajo o crea la tuya: verás si puedes cocinarla con lo que tienes y qué falta.</p>
        <button class="btn primary small" onClick=${h}><${$} name="add" size=${18} /> Nueva receta</button>
      </div>
    </div>`}

    <div class="list">
      ${(t||[]).map((u,g)=>{let v=de.check(u,n),y=Dn(v);return l`<button key=${u.id} class="card recipe-card enter" style=${`--i:${Math.min(g,12)}`} onClick=${()=>p(u)}>
          <${ue} url=${u.photo?.url} name=${u.name} size=${64} />
          <span class="grow min0 left">
            <h3 class="ellipsis">${u.name}</h3>
            <span class="muted small">${u.ingredients.length} ingredientes · ${u.servings} raciones</span>
            <span class=${`tag ${y.tone}`}>${y.text}</span>
          </span>
          <${$} name="chevron_right" />
        </button>`})}
    </div>

    ${t&&l`<div class="row section-row">
      <h2 class="section-title grow">Ideas para cocinar</h2>
    </div>
    <div class="chips">
      ${Bs.map(u=>l`<button class=${`chip ${o===u?"checked":""}`} onClick=${()=>{i(u),T("tap")}}>${u}</button>`)}
    </div>
    <div class="idea-grid">
      ${f.map((u,g)=>{let v=de.check(de.fromLibrary(u,n),n),y=v.items.filter(w=>w.product&&w.status!=="NOT_ENOUGH").length;return l`<button key=${u.id} class="idea-card enter" style=${`--i:${Math.min(g,12)}`} onClick=${()=>m(u)}>
          <span class="idea-photo"><img src=${u.photoUrl} alt="" loading="lazy" /></span>
          <span class="idea-body">
            <strong class="ellipsis2">${u.name}</strong>
            <span class="muted tiny"><${$} name="clock" size=${12} /> ${u.minutes} min · ${u.meal}</span>
            <span class=${`tiny strong ${y===v.items.length?"success-text":"muted"}`}>Tienes ${y} de ${v.items.length}</span>
          </span>
        </button>`})}
    </div>
    ${f.length===0&&l`<p class="muted small center">Ya has guardado todas las ideas de este tipo.</p>`}`}

    ${t&&t.length>0&&l`<button class="fab" onClick=${h} aria-label="Nueva receta"><${$} name="add" size=${28} /></button>`}
  </section>`}function Nn({recipe:e,prods:t,library:a=null,close:n}){let[s,o]=C(e),[i,c]=C(t),p=de.check(s,i),m=Dn(p),h=da(s),r=!!s.id,f=async()=>c(await he.all()),u=async()=>{if(s.id)return s;let _=await B(()=>de.save(s));return _&&(o(_),G.emit("changed")),_},g=async()=>{await u()&&(T("success"),F("Guardada en tus recetas"))},v=async()=>{if(!p.toBuy.length)return F("No hace falta comprar nada");await B(async()=>{let _=await de.addMissingToShopping(p);T("pop"),F(_===1?"1 art\xEDculo a\xF1adido a la compra":`${_} art\xEDculos a\xF1adidos a la compra`),G.emit("changed")})},y=async()=>{await B(async()=>{await de.cook(p),T("success"),F("\xA1Que aproveche! Despensa actualizada"),G.emit("changed"),await f()})},w=async()=>{let _=p.canCook?"Se descontar\xE1n los ingredientes de la despensa.":"Hay ingredientes que no llegan: se descontar\xE1 lo que haya y quedar\xE1n a 0.";await ye({title:`Cocinar \xAB${s.name}\xBB`,message:_,confirm:"Descontar"})&&await y()},A=async()=>{await K(Fs,{recipe:s,check:p})==="discount"&&await y()},N=async()=>{let _=Array.from({length:7},(E,d)=>ne(X(),d)),k=await Fe("\xBFQu\xE9 d\xEDa?",_.map((E,d)=>({label:`${d===0?"Hoy":d===1?"Ma\xF1ana":ut(He(Ne(E)))} \xB7 ${oe(E)}`,icon:"calendar"})));if(k===null)return;let x=await Fe("\xBFPara cu\xE1ndo?",We.map(E=>({label:E.label,icon:E.icon})));if(x===null)return;let q=await u();q&&await B(async()=>{await $e.set(_[k],We[x].key,q),T("pop"),F(`Planificada: ${oe(_[k])} \xB7 ${We[x].label}`),G.emit("changed")})},L=async()=>{let _=await K(Fn,{initial:s,prods:i});_==="deleted"?n():_&&o(_)},I=s.photo?.url;return l`<div class="sheet-body recipe-detail">
    ${I?l`<div class="recipe-hero">
      <img src=${I} alt="" />
      <div class="recipe-hero-actions">
        ${r&&l`<button class="icon-btn light" onClick=${L} aria-label="Editar"><${$} name="edit" /></button>`}
        <button class="icon-btn light" onClick=${()=>n()} aria-label="Cerrar"><${$} name="close" /></button>
      </div>
      <div class="recipe-hero-text">
        <h2>${s.name}</h2>
        <p>${s.servings} raciones${a?` \xB7 ${a.minutes} min \xB7 ${a.meal}`:""}</p>
      </div>
    </div>`:l`<div class="sheet-title">
      <${ue} name=${s.name} size=${52} />
      <div class="grow min0"><h2>${s.name}</h2><p class="muted small">${s.servings} raciones</p></div>
      ${r&&l`<button class="icon-btn" onClick=${L} aria-label="Editar"><${$} name="edit" /></button>`}
      <button class="icon-btn" onClick=${()=>n()} aria-label="Cerrar"><${$} name="close" /></button>
    </div>`}

    <div class=${`status-banner ${m.tone}`}>${m.text}</div>

    <h3 class="section-label">Ingredientes</h3>
    <div class="ingredients">
      ${p.items.map(_=>l`<div class="ingredient">
        <${ue} url=${_.product?_.product.photo?.url||_.product.imageUrl:null} name=${_.ingredient.name} size=${42} />
        <div class="grow min0">
          <strong class="ellipsis">${_.ingredient.name}</strong>
          <span class="muted small">
            ${_.product?`Usa ${j(_.ingredient.quantity)} ${_.ingredient.unit} \xB7 tienes ${j(_.inStock)} \xB7 quedar\xE1n ${j(Math.max(_.after,0))}`:`${j(_.ingredient.quantity)} ${_.ingredient.unit} \xB7 no est\xE1 en la despensa`}
          </span>
        </div>
        <span class=${`tag ${qn[_.status].tone}`}>${_.status==="NOT_IN_PANTRY"?"Comprar":qn[_.status].label}</span>
      </div>`)}
    </div>

    ${p.toBuy.length>0&&l`<p class="muted small">Para cocinarla y seguir por encima de los mínimos hay que comprar ${p.toBuy.length} ${p.toBuy.length===1?"cosa":"cosas"}${p.estimatedCost>0?` (\u2248 ${ee(p.estimatedCost)})`:""}.</p>`}

    ${h.length>0&&l`<h3 class="section-label">Preparación</h3>
      <ol class="step-list">${h.map((_,k)=>l`<li><span class="step-num">${k+1}</span><p>${_}</p></li>`)}</ol>`}
    ${a&&l`<p class="muted tiny">Foto: <a href=${a.photoSource} target="_blank" rel="noopener">Wikimedia Commons</a> (autor y licencia en su página)</p>`}

    <div class="stack">
      ${h.length>0&&l`<button class="btn primary wide" onClick=${A}><${$} name="play" size=${20} /> Cocinar paso a paso</button>`}
      ${!r&&l`<button class="btn tonal wide" onClick=${g}><${$} name="bookmark" size=${20} /> Guardar en mis recetas</button>`}
      ${r&&l`<button class=${`btn wide ${h.length?"tonal":"primary"}`} onClick=${w}><${$} name="cook" size=${20} /> Ya la he cocinado: descontar</button>`}
      <button class="btn tonal wide" onClick=${v}><${$} name="cart" size=${20} /> Añadir lo necesario a la compra</button>
      <button class="btn text wide" onClick=${N}><${$} name="calendar" size=${20} /> Añadir al plan semanal</button>
    </div>
  </div>`}function Fs({recipe:e,check:t,close:a}){let n=da(e),[s,o]=C(-1),[i,c]=C(1),p=R(null);O(()=>(navigator.wakeLock?.request("screen").then(r=>p.current=r).catch(()=>{}),()=>p.current?.release?.().catch?.(()=>{})),[]);let m=r=>{c(r),o(Math.max(-1,Math.min(n.length,s+r))),T("tap")},h=s===n.length;return l`<div class="sheet-body cooking">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">Modo cocina</p><h2 class="ellipsis">${e.name}</h2></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${$} name="close" /></button>
    </div>
    <div class="cook-progress">
      ${[-1,...n.map((r,f)=>f)].map(r=>l`<span class=${r<s?"done":r===s?"now":""}></span>`)}
    </div>

    <div class="cook-stage" key=${s} style=${`--dir:${i}`}>
      ${s===-1&&l`<div>
        <p class="cook-kicker">Antes de empezar, ten a mano</p>
        <ul class="cook-ingredients">
          ${e.ingredients.map(r=>l`<li><span class="grow">${r.name}</span><strong>${j(r.quantity)} ${r.unit}</strong></li>`)}
        </ul>
      </div>`}
      ${s>=0&&!h&&l`<div>
        <p class="cook-kicker">Paso ${s+1} de ${n.length}</p>
        <p class="cook-text">${n[s]}</p>
      </div>`}
      ${h&&l`<div class="center-col">
        <${be} name="done" />
        <p class="cook-text center">¡Listo! Que aproveche.</p>
        ${t.items.some(r=>r.product)&&l`<p class="muted center">¿Quitamos de la despensa lo que has usado?</p>`}
      </div>`}
    </div>

    ${!h&&l`<div class="row-2">
      <button class="btn tonal" disabled=${s===-1} onClick=${()=>m(-1)}><${$} name="chevron_left" size=${20} /> Anterior</button>
      <button class="btn primary" onClick=${()=>m(1)}>${s===-1?"Empezar":s===n.length-1?"Terminar":"Siguiente"} <${$} name="chevron_right" size=${20} /></button>
    </div>`}
    ${h&&l`<div class="stack">
      ${t.items.some(r=>r.product)&&l`<button class="btn primary wide" onClick=${()=>a("discount")}><${$} name="check" size=${20} /> Sí, descontar ingredientes</button>`}
      <button class="btn text wide" onClick=${()=>a()}>Cerrar</button>
    </div>`}
  </div>`}function Fn({initial:e,prods:t,close:a}){let[n,s]=C(e?.name||""),[o,i]=C(String(e?.servings||2)),[c,p]=C(()=>{let k=e?da(e):[];return k.length?k:[""]}),[m,h]=C(e?.ingredients||[]),[r,f]=C(void 0),[u,g]=C(null),v=R(),y=r===null?null:u||e?.photo?.url||null,w=async k=>{let x=k.target.files?.[0];if(k.target.value="",!x)return;let q=await Ze(x);f(q),g(URL.createObjectURL(q))},A=async()=>{let k=await K(Nt,{title:"A\xF1adir ingrediente",products:t,marked:m.map(x=>x.productId).filter(Boolean),markedLabel:"Ya en la receta",freeLabel:"Se comprar\xE1 cuando haga falta"});if(k){if(k.free!==void 0){let x=k.free.trim()||(await se({title:"Ingrediente",label:"Nombre",confirm:"Siguiente"}))?.trim();if(!x)return;let q=await se({title:x,label:"Cantidad",inputMode:"decimal",value:"1",suffix:"uds",confirm:"A\xF1adir"}),E=me(q);if(!E)return;h([...m,{productId:"",name:x,quantity:le(E),unit:"uds"}])}else{let x=k.product,q=m.find(S=>S.productId===x.id),E=await se({title:x.name,label:"\xBFCu\xE1nto usa la receta?",inputMode:"decimal",value:q?j(q.quantity):"1",suffix:x.unit,confirm:q?"Cambiar":"A\xF1adir"}),d=me(E);if(!d)return;let b={productId:x.id,name:x.name,quantity:le(d),unit:x.unit};h(q?m.map(S=>S.productId===x.id?b:S):[...m,b])}T("pop")}},N=(k,x)=>p(c.map((q,E)=>E===k?x:q)),L=k=>p(c.length===1?[""]:c.filter((x,q)=>q!==k)),I=async k=>{k.preventDefault();let x=await B(async()=>{let q=e?.photo||null;r===null?q=null:r instanceof Blob&&(q=await Lt(r));let E={...e||{createdBy:"",emoji:void 0},name:n,servings:parseInt(o,10)||2,steps:c.map(d=>d.trim()).filter(Boolean).join(`
`),emoji:e?.emoji||"\u{1F372}",ingredients:m,photo:q};return de.save(E)});x&&(T("success"),F("Receta guardada"),G.emit("changed"),a(x))},_=async()=>{await ye({title:"Eliminar receta",message:`\xBFSeguro que quieres eliminar \xAB${e.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await B(async()=>{await de.remove(e),F("Receta eliminada"),G.emit("changed"),a("deleted")})};return l`<form class="sheet-body" onSubmit=${I}>
    <div class="sheet-title">
      <h2 class="grow">${e?.id?"Editar receta":"Nueva receta"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${$} name="close" /></button>
    </div>

    <button type="button" class=${`photo-drop ${y?"has-photo":""}`} onClick=${()=>v.current.click()}>
      ${y?l`<img src=${y} alt="" />`:l`<span><${$} name="camera" size=${28} /><span class="block">Añadir una foto del plato</span></span>`}
    </button>
    ${y&&l`<button type="button" class="btn text small center-self" onClick=${()=>{f(null),g(null)}}>Quitar foto</button>`}
    <input ref=${v} type="file" accept="image/*" hidden onChange=${w} />

    <label class="field"><span>Nombre</span><input required maxlength="60" value=${n} onInput=${k=>s(k.target.value)} placeholder="Macarrones con tomate" /></label>
    <label class="field"><span>Raciones</span><input inputmode="numeric" value=${o} onInput=${k=>i(k.target.value)} /></label>

    <h3 class="section-label">Ingredientes</h3>
    ${m.length===0&&l`<p class="muted small">Elige lo que gasta la receta. Lo que esté en la despensa se descontará al cocinarla.</p>`}
    <div class="ingredients">
      ${m.map((k,x)=>{let q=t.find(E=>E.id===k.productId);return l`<div class="ingredient">
          <${ue} url=${q?q.photo?.url||q.imageUrl:null} name=${k.name} size=${40} />
          <div class="grow min0"><strong class="ellipsis">${k.name}</strong>
            <span class="muted small">${j(k.quantity)} ${k.unit}${q?"":" \xB7 no est\xE1 en la despensa"}</span></div>
          <button type="button" class="icon-btn small" aria-label="Quitar" onClick=${()=>h(m.filter((E,d)=>d!==x))}><${$} name="close" size=${18} /></button>
        </div>`})}
    </div>
    <button type="button" class="btn tonal wide" onClick=${A}><${$} name="add" size=${20} /> Añadir ingrediente</button>

    <h3 class="section-label">Preparación</h3>
    <ol class="step-editor">
      ${c.map((k,x)=>l`<li>
        <span class="step-num">${x+1}</span>
        <textarea rows="2" value=${k} placeholder=${x===0?"Cuece la pasta\u2026":"Siguiente paso\u2026"} onInput=${q=>N(x,q.target.value)}></textarea>
        <button type="button" class="icon-btn small" aria-label="Quitar paso" onClick=${()=>L(x)}><${$} name="close" size=${16} /></button>
      </li>`)}
    </ol>
    <button type="button" class="btn text" onClick=${()=>p([...c,""])}><${$} name="add" size=${18} /> Añadir paso</button>

    <button class="btn primary wide" type="submit"><${$} name="check" size=${20} /> Guardar receta</button>
    ${e?.id&&l`<button type="button" class="btn danger wide" onClick=${_}><${$} name="delete" size=${20} /> Eliminar receta</button>`}
  </form>`}function Un({active:e}){let[t,a]=C(()=>lt(X())),[n,s]=C(null),[o,i]=C([]),[c,p]=C(null),[m,h]=C(0),r=R(0),f=async(L=!1)=>{let I=++r.current;await B(async()=>{await J.current();let[_,k]=await Promise.all([de.all(),$e.week(t)]);if(I!==r.current)return;i(_),s(k),p(null);let x=await $e.analyze(t).catch(()=>null);I===r.current&&p(x||"error")},{loading:!1,onError:L?()=>{}:ie})};O(()=>{e&&f()},[e,t]),_e(L=>L==="changed"&&e&&f(!0));let u=L=>{a(ne(t,L*7)),h(m+1),s(null)},g=async(L,I,_,k)=>{let x=[];k&&x.push({label:"Ver / cocinar la receta",action:"view",icon:"cook"}),_&&x.push({label:"Quitar",action:"clear",danger:!0,icon:"delete"}),x.push({label:"Escribir otra cosa",action:"free",icon:"edit"}),o.forEach(b=>x.push({label:b.name,action:"recipe",recipe:b,icon:"recipe"}));let q=await Fe(`${ut(He(Ne(L)))} \xB7 ${I.label}`,x);if(q===null)return;let E=x[q];if(E.action==="view"){F("Abre la pesta\xF1a Recetas para cocinarla");return}if(E.action==="clear"){await B(async()=>{await $e.clear(_),f(!0)});return}let d="";E.action==="free"&&(d=await se({title:I.label,label:"\xBFQu\xE9 vas a comer?",value:_&&!_.recipeId?_.title:""}),!d?.trim())||await B(async()=>{await $e.set(L,I.key,E.recipe||null,d),T("pop"),f(!0)})},v=async()=>{await B(async()=>{let L=await $e.copyPreviousWeek(t);T(L?"pop":"tap"),F(L===0?"No hab\xEDa nada nuevo que copiar":L===1?"1 comida copiada":`${L} comidas copiadas`),f(!0)})},y=async()=>{await K(Os,{weekStart:t}),f(!0)},w=lt(X()),A=t===w?"Esta semana":t===ne(w,-7)?"Semana pasada":t===ne(w,7)?"Semana que viene":"",N=c&&c!=="error"?c.toBuy.length:0;return l`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Semana</h1></header>

    <div class="week-nav card soft">
      <button class="icon-btn" onClick=${()=>u(-1)} aria-label="Semana anterior"><${$} name="chevron_left" /></button>
      <button class="grow plain center" onClick=${()=>a(w)}>
        <strong>${oe(t)} – ${oe(ne(t,6))}</strong>
        <span class="muted small block">${A}</span>
      </button>
      <button class="icon-btn" onClick=${()=>u(1)} aria-label="Semana siguiente"><${$} name="chevron_right" /></button>
    </div>

    <button class="card forecast" onClick=${y}>
      <${$} name="insights" size=${28} />
      <span class="grow left">
        <strong>Previsión de la compra</strong>
        <span class="muted small block">
          ${c?c==="error"?"No se ha podido calcular":c.plannedMeals===0&&N===0?"Planifica comidas para ver qu\xE9 hay que comprar":`\u2248 ${ee(c.estimatedCost)} \xB7 ${N===1?"1 producto":`${N} productos`}`:"Calculando\u2026"}
        </span>
      </span>
      <${$} name="chevron_right" />
    </button>
    <button class="btn text" onClick=${v}><${$} name="copy" size=${18} /> Copiar la semana anterior</button>

    <div class="days" key=${m}>
      ${Array.from({length:7},(L,I)=>{let _=ne(t,I),k=_<X();return l`<div class=${`card day enter ${k?"past":""}`} style=${`--i:${I}`}>
          <div class="day-header">
            <strong>${ut(He(Ne(_)))}</strong>
            <span class="muted small">${oe(_)}</span>
            ${_===X()&&l`<span class="tag primary">Hoy</span>`}
          </div>
          ${We.map(x=>{let q=(n||[]).find(d=>d.date===_&&d.slot===x.key),E=q?.recipeId?o.find(d=>d.id===q.recipeId):null;return l`<button class="slot" onClick=${()=>g(_,x,q,E)}>
              ${E?.photo?.url?l`<${ue} url=${E.photo.url} name=${E.name} size=${32} />`:l`<span class="slot-icon"><${$} name=${x.icon} size=${18} /></span>`}
              <span class="grow left min0">
                <span class="muted tiny block">${x.label}</span>
                <span class=${`ellipsis block ${q?"":"muted"}`}>${q?q.title:"+ A\xF1adir"}</span>
              </span>
              ${E&&l`<span class="tag primary">Receta</span>`}
            </button>`})}
        </div>`})}
    </div>
  </section>`}var Us={RECIPES:"Por las recetas del plan",HABITUAL:"Por lo que sol\xE9is gastar",BELOW_MINIMUM:"Est\xE1 bajo m\xEDnimo"};function Os({weekStart:e,close:t}){let[a,n]=C(null);O(()=>{B(async()=>n(await $e.analyze(e)),{loading:!1})},[]);let s=async()=>{await B(async()=>{let i=await $e.addToShopping(a);T("pop"),F(i===1?"1 producto a\xF1adido a la compra":`${i} productos a\xF1adidos a la compra`),G.emit("changed"),t()})},o=a?.needs.filter(i=>i.toBuy<=0)||[];return l`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow"><h2>Previsión de la compra</h2><p class="muted small">${oe(e)} – ${oe(ne(e,6))}</p></div>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${$} name="close" /></button>
    </div>
    ${!a&&l`<div class="skeleton"></div><div class="skeleton"></div>`}
    ${a&&l`
      <div class="card soft total-card">
        <span class="muted small">Coste estimado de la semana</span>
        <strong class="total">${ee(a.estimatedCost)}</strong>
        <span class="muted small">${a.plannedMeals===1?"1 comida planificada":`${a.plannedMeals} comidas planificadas`}
          ${a.withoutPrice>0?` \xB7 ${a.withoutPrice} sin precio`:""}</span>
      </div>
      ${a.toBuy.length===0&&l`<div class="empty small"><${be} name="done" /><h2>Tienes todo lo necesario</h2>
        <p class="muted">Con el plan y lo que soléis gastar, no hace falta comprar nada esta semana.</p></div>`}
      ${a.toBuy.length>0&&l`<h3 class="section-label">Hay que comprar</h3>`}
      ${a.toBuy.map((i,c)=>l`<div class="need enter" style=${`--i:${c}`}>
        <div class="grow min0">
          <strong>${i.name}</strong> ${i.isUrgent&&l`<span class="tag danger">No llega</span>`}
          <span class="muted small block">${Us[i.reason]} · plan ${j(i.planned)} · habitual ${j(i.habitual)} · tienes ${j(i.inStock)} ${i.unit}</span>
        </div>
        <div class="right">
          <strong class="primary-text">Comprar ${j(i.toBuy)} ${i.unit}</strong>
          <span class="muted small block">${i.estimatedCost!=null?ee(i.estimatedCost):"Sin precio"}</span>
        </div>
      </div>`)}
      ${o.length>0&&l`<h3 class="section-label">Ya cubierto</h3>
        ${o.map(i=>l`<div class="need covered"><span class="grow">${i.name}</span><span class="muted small">tienes ${j(i.inStock)} ${i.unit}</span></div>`)}`}
      ${a.toBuy.length>0&&l`<button class="btn primary wide" onClick=${s}><${$} name="cart" size=${20} /> Añadir todo a la compra (${a.toBuy.length})</button>`}
    `}
  </div>`}function On({active:e,onLogout:t,onNoHouse:a,openSettingsRequest:n}){let[s,o]=C(null),[i,c]=C([]),[p,m]=C(null),[h,r]=C({}),f=async(d=!1)=>{await B(async()=>{let b=await J.current(),[S,P,D]=await Promise.all([J.mine(),ve.me(!0),ve.many(b.memberIds,!0)]);o(b),c(S),m(P),r(D)},{loading:!1,onError:d?()=>{}:ie})};O(()=>{e&&f()},[e]),_e(d=>d==="changed"&&e&&f(!0)),O(()=>{e&&n&&_()},[n]);let u=async()=>{await navigator.clipboard?.writeText(s.inviteCode).catch(()=>{}),T("pop"),F("C\xF3digo copiado")},g=()=>{let d=`\xA1\xDAnete a \xAB${s.name}\xBB en Stock Casa! C\xF3digo: ${s.inviteCode}
${location.origin}${location.pathname}`;navigator.share?navigator.share({text:d}).catch(()=>{}):u()},v=d=>{J.switchTo(d),T("pop"),F(`Ahora est\xE1s en \xAB${d.name}\xBB`),G.emit("changed"),f(!0)},y=async()=>{let d=await se({title:"Unirse con c\xF3digo",label:"C\xF3digo de 6 caracteres",maxLength:6,confirm:"Unirme"});d&&await B(async()=>{let b=await J.join(d);Ke(),T("success"),F(`Ahora est\xE1s en \xAB${b.name}\xBB`),G.emit("changed"),f(!0)})},w=async()=>{let d=await se({title:"Crear otra casa",label:"Nombre",confirm:"Crear"});d&&await B(async()=>{let b=await J.create(d);T("success"),F(`Casa \xAB${b.name}\xBB creada`),G.emit("changed"),f(!0)})},A=async()=>{let d=await se({title:"Cambiar nombre",label:"Nombre de la casa",value:s.name});d&&await B(async()=>{await J.rename(s,d),f(!0)})},N=async()=>{let d=s.memberIds.length<=1,b=i.length<=1?`

Es tu \xFAnica casa: despu\xE9s podr\xE1s crear otra o unirte a una con su c\xF3digo.`:"";await ye({title:d?"Eliminar casa":"Salir de la casa",message:(d?`Eres el \xFAnico miembro de \xAB${s.name}\xBB. Se borrar\xE1n sus productos y su lista de la compra.`:`Dejar\xE1s de ver \xAB${s.name}\xBB. Los dem\xE1s miembros la seguir\xE1n teniendo.`)+b,confirm:d?"Eliminar":"Salir",danger:!0})&&await B(async()=>{await J.leave(s),F("Has salido de la casa"),(await J.mine()).length?(G.emit("changed"),f(!0)):a()})},L=async()=>{await ye({title:"Cerrar sesi\xF3n",message:"\xBFSeguro que quieres cerrar sesi\xF3n en este dispositivo?",confirm:"Cerrar sesi\xF3n"})&&(await B(Me.logout),t())},I=async(d="profile")=>{await K(Qs,{profile:p,section:d}),f(!0)};async function _(){let d=s||await J.current().catch(()=>null);await K(Xs,{house:d})==="preferences"?I("preferences"):f(!0)}let k=()=>K(Ks,{}),x=async()=>{let d=await Vs(s.inviteCode);T("pop"),navigator.share?navigator.share({text:d}).catch(()=>{}):(await navigator.clipboard?.writeText(d).catch(()=>{}),F("Mensaje copiado: p\xE9galo en WhatsApp o donde quieras"))};if(!s)return l`<section class="tab"><header class="tab-header"><h1 class="brand">Casa</h1></header>
    <div class="skeleton-list"><div class="skeleton tall"></div><div class="skeleton"></div></div></section>`;let q=H.current()?.userId,E=re.get();return l`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Casa</h1></header>

    <div class="card hero enter" style="--i:0">
      <span class="hero-icon"><${$} name="home" size=${30} /></span>
      <div class="grow min0">
        <h2 class="ellipsis">${s.name}</h2>
        <p class="muted small">${s.memberIds.length===1?"Solo t\xFA":`${s.memberIds.length} miembros`} · ${Ye(s.shoppingDay)}</p>
      </div>
      <button class="icon-btn" onClick=${A} aria-label="Cambiar nombre"><${$} name="edit" /></button>
    </div>

    ${p&&l`<button class="card profile-card enter" style="--i:1" onClick=${()=>I()}>
      <${Be} profile=${p} size=${56} />
      <span class="grow min0 left">
        <strong class="ellipsis block big-text">${fe(p)}</strong>
        <span class="muted small ellipsis block">${p.email}</span>
        <span class="primary-text small strong">Tu perfil, apariencia y preferencias</span>
      </span>
      <${$} name="chevron_right" />
    </button>`}

    <div class="card enter" style="--i:2">
      <h3>Invitar a alguien</h3>
      <p class="muted small">Comparte este código: quien lo introduzca verá y editará esta misma casa.</p>
      <div class="invite-code" onClick=${u}>${s.inviteCode}</div>
      <div class="row-2">
        <button class="btn tonal" onClick=${u}><${$} name="copy" size=${18} /> Copiar</button>
        <button class="btn tonal" onClick=${g}><${$} name="share" size=${18} /> Compartir</button>
      </div>
    </div>

    <div class="card enter" style="--i:3">
      <h3>Miembros</h3>
      ${s.memberIds.map((d,b)=>{let S=h[d]||{id:d,email:s.memberEmails[b]||"",avatarColor:Qe[b%Qe.length]};return l`<div class="member">
          <${Be} profile=${S} size=${40} />
          <div class="grow min0">
            <strong class="ellipsis block">${fe(S)}${d===q?" (t\xFA)":""}</strong>
            <span class="muted small ellipsis block">${S.email}</span>
          </div>
          ${d===s.ownerId&&l`<span class="tag primary">Creador</span>`}
        </div>`})}
    </div>

    <div class="card menu enter" style="--i:4">
      <h3>Ajustes</h3>
      <button class="menu-row" onClick=${_}>
        <span class="menu-icon"><${$} name="calendar" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Día de compra</strong><span class="muted small ellipsis block">${Ye(s.shoppingDay)}</span></span>
        <${$} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>I("appearance")}>
        <span class="menu-icon"><${$} name="palette" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Apariencia</strong><span class="muted small ellipsis block">${Rs(E)}</span></span>
        <${$} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>I("preferences")}>
        <span class="menu-icon"><${$} name="store" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Supermercados y caducidad</strong><span class="muted small ellipsis block">${E.stores.map(d=>Pe.find(b=>b.key===d)?.label).filter(Boolean).join(", ")} · ${Ba(E.defaultExpiry)}</span></span>
        <${$} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${x}>
        <span class="menu-icon"><${$} name="share" size=${20} /></span>
        <span class="grow left"><strong>Compartir Stock Casa</strong></span>
        <${$} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${k}>
        <span class="menu-icon"><${$} name="home" size=${20} /></span>
        <span class="grow left"><strong>Instalar en el móvil</strong></span>
        <${$} name="chevron_right" size=${20} />
      </button>
    </div>

    <div class="card enter" style="--i:5">
      <h3>Mis casas</h3>
      ${i.map(d=>l`<button class="house-row" onClick=${()=>d.id!==s.id&&v(d)}>
        <span class="grow left ellipsis">${d.name}</span>
        ${d.id===s.id?l`<span class="tag success">Abierta</span>`:l`<span class="muted small">Abrir</span>`}
      </button>`)}
      <div class="row-2">
        <button class="btn tonal" onClick=${y}><${$} name="login" size=${18} /> Unirme</button>
        <button class="btn tonal" onClick=${w}><${$} name="add" size=${18} /> Crear</button>
      </div>
    </div>

    <div class="row-2 enter" style="--i:6">
      <button class="btn text" onClick=${L}><${$} name="logout" size=${20} /> Cerrar sesión</button>
      <button class="btn danger" onClick=${N}><${$} name="logout" size=${20} /> ${s.memberIds.length<=1?"Eliminar casa":"Salir de la casa"}</button>
    </div>
    <p class="muted tiny center">Stock Casa web · mismos datos que la app de Android</p>
  </section>`}var Rs=e=>[xt,pt,ta].map((t,a)=>t.find(n=>n.key===[e.style,e.theme,e.mode][a])?.label).join(" \xB7 "),js=`\xA1Prueba Stock Casa! La despensa y la lista de la compra de casa, compartidas.

Si tienes Android, descarga la app: {apk}
Si tienes iPhone, abre este enlace en Safari y elige Compartir \u2192 \xABA\xF1adir a pantalla de inicio\xBB: {web}

Despu\xE9s crea tu cuenta y \xFAnete a nuestra casa con el c\xF3digo {codigo}.`;async function Vs(e){let t=`${location.origin}${location.pathname.replace(/[^/]*$/,"")}`,a=js;try{let n=await fetch(`compartir.txt?v=${Date.now()}`,{cache:"no-store"});n.ok&&(a=(await n.text()).trim()||a)}catch{}return a.replaceAll("{apk}",`${t}StockCasa.apk`).replaceAll("{web}",t).replaceAll("{codigo}",e||"que te pase")}var Gs=[{key:"profile",label:"Perfil",icon:"person"},{key:"appearance",label:"Apariencia",icon:"palette"},{key:"preferences",label:"Preferencias",icon:"settings"}];function Qs({profile:e,section:t="profile",close:a}){let[n,s]=C(t),[o,i]=C(e);return l`<div class="sheet-body profile-sheet">
    <div class="sheet-title">
      <${Be} profile=${o} size=${44} />
      <div class="grow min0"><h2 class="ellipsis">${fe(o)}</h2><p class="muted small ellipsis">${o.email}</p></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${$} name="close" /></button>
    </div>
    <div class="segmented tabs">
      ${Gs.map(c=>l`<button class=${n===c.key?"on":""} onClick=${()=>{s(c.key),T("tap")}}>
        <${$} name=${c.icon} size=${16} /> ${c.label}</button>`)}
    </div>
    <div class="section-body" key=${n}>
      ${n==="profile"&&l`<${Ws} profile=${o} onSaved=${i} />`}
      ${n==="appearance"&&l`<${Ys} />`}
      ${n==="preferences"&&l`<${Js} />`}
    </div>
  </div>`}function Ws({profile:e,onSaved:t}){let[a,n]=C(e.nickname),[s,o]=C(e.avatarColor),[i,c]=C(void 0),[p,m]=C(null),h=R(),r={...e,nickname:a||e.nickname,avatarColor:s,avatar:i===null?null:p?{url:p}:e.avatar},f=a!==e.nickname||s!==e.avatarColor||i!==void 0,u=async v=>{let y=v.target.files?.[0];if(v.target.value="",!y)return;let w=await Ze(y,600);c(w),m(URL.createObjectURL(w))};return l`<form class="stack" onSubmit=${async v=>{v.preventDefault();let y=await B(()=>ve.save({nickname:a,avatarColor:s,photo:i}));y&&(T("success"),F("Perfil guardado"),c(void 0),t(y),G.emit("changed"))}}>
    <div class="card center-col">
      <button type="button" class="plain avatar-edit" onClick=${()=>h.current.click()}>
        <${Be} profile=${r} size=${104} />
        <span class="avatar-cam"><${$} name="camera" size=${18} /></span>
      </button>
      ${r.avatar&&l`<button type="button" class="btn text small" onClick=${()=>{c(null),m(null)}}>Quitar foto</button>`}
      <input ref=${h} type="file" accept="image/*" hidden onChange=${u} />
    </div>
    <div class="card stack">
      <label class="field"><span>Apodo</span><input maxlength="24" value=${a} onInput=${v=>n(v.target.value)} /></label>
      <span class="field-label">Color del avatar</span>
      <div class="color-row">
        ${Qe.map(v=>l`<button type="button" class=${`color-dot ${v===s?"selected":""}`} style=${`background:${v}`}
          aria-label="Color" onClick=${()=>{o(v),T("tap")}}></button>`)}
      </div>
    </div>
    <button class="btn primary wide" type="submit" disabled=${!f}><${$} name="check" size=${20} /> Guardar perfil</button>
  </form>`}function Ys(){let[e,t]=C(re.get()),a=(n,s)=>{t(re.set(n)),Ue(s),T("pop")};return l`<div class="stack appearance">
    <div class="card stack">
      <h3>Estilo</h3>
      <div class="style-list">
        ${xt.map(n=>l`<button type="button" class=${`style-choice ${e.style===n.key?"selected":""}`}
          onClick=${s=>a({style:n.key},s.currentTarget.querySelector(".style-preview"))}>
          <span class=${`style-preview ${n.key}`}><i></i><i></i><b></b></span>
          <span class="grow left"><strong class="block">${n.label}</strong><span class="muted small block">${n.description}</span></span>
          ${e.style===n.key&&l`<${$} name="check" size=${22} class="primary-text" />`}
        </button>`)}
      </div>
    </div>

    <div class="card stack">
      <h3>Color</h3>
      <div class="theme-row">
        ${pt.map(n=>l`<button type="button" class=${`theme-choice ${e.theme===n.key?"selected":""}`}
          onClick=${s=>a({theme:n.key},s.currentTarget.firstChild)}>
          <span class="swatch" style=${`background:${n.color};border-color:${n.soft}`}>${e.theme===n.key&&l`<${$} name="check" size=${22} />`}</span>
          <span>${n.label}</span>
        </button>`)}
      </div>
    </div>

    <div class="card stack">
      <h3>Modo</h3>
      <div class="segmented">
        ${ta.map(n=>l`<button type="button" class=${e.mode===n.key?"on":""}
          onClick=${s=>a({mode:n.key},s.currentTarget)}>${n.label}</button>`)}
      </div>
    </div>
    <p class="muted small center">La apariencia solo cambia en este dispositivo</p>
  </div>`}function Js(){let[e,t]=C(re.get()),a=s=>t(re.set(s)),n=s=>{let o=e.stores.includes(s);if(o&&e.stores.length===1)return F("Elige al menos un supermercado");let i=o?e.stores.filter(c=>c!==s):Pe.map(c=>c.key).filter(c=>c===s||e.stores.includes(c));a({stores:i}),T(o?"tap":"pop")};return l`<div class="stack">
    <div class="card stack">
      <h3>Supermercados que frecuentáis</h3>
      <p class="muted small">Al buscar un producto solo aparecerá lo de estos supermercados, y saldrán primero al guardar un ticket.</p>
      <div class="store-list">
        ${Pe.map(s=>{let o=e.stores.includes(s.key);return l`<button class=${`store-choice ${o?"on":""}`} style=${`--store:${s.color}`} onClick=${()=>n(s.key)}>
            <span class="store-mark">${s.label.charAt(0)}</span>
            <span class="grow left"><strong class="block">${s.label}</strong><span class="muted tiny block">${s.prices?"Con precios":"Sin precios (fichas de Open Food Facts)"}</span></span>
            <span class=${`check ${o?"on":""}`}>${o&&l`<${$} name="check" size=${16} />`}</span>
          </button>`})}
      </div>
    </div>

    <div class="card stack">
      <h3>Caducidad por defecto</h3>
      <p class="muted small">La fecha que se propone al añadir un producto nuevo. Siempre se puede cambiar en su ficha.</p>
      <div class="chips wrap">
        ${ct.map(s=>l`<button class=${`chip ${e.defaultExpiry===s.days?"checked":""}`} onClick=${()=>{a({defaultExpiry:s.days}),T("tap")}}>${s.label}</button>`)}
      </div>
    </div>

    <div class="card">
      <h3>Sonidos y vibración</h3>
      <label class="switch-row"><span>Sonidos</span>
        <input type="checkbox" class="switch" checked=${e.sounds} onChange=${s=>{a({sounds:s.target.checked}),s.target.checked&&T("check")}} /></label>
      <label class="switch-row"><span>Vibración (Android)</span>
        <input type="checkbox" class="switch" checked=${e.vibration} onChange=${s=>a({vibration:s.target.checked})} /></label>
    </div>
    <p class="muted small center">Estas preferencias se guardan en este dispositivo</p>
  </div>`}function Xs({house:e,close:t}){let[a,n]=C(e),s=R(),o=async i=>{if(!a||i===a.shoppingDay)return;let c=await B(()=>J.setShoppingDay(a,i),{loading:!1});c&&(n(c),T("pop"),Ue(s.current),G.emit("changed"))};return l`<div class="sheet-body">
    <div class="sheet-title"><h2 class="grow">Día de compra</h2>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${$} name="close" /></button></div>

    ${a&&l`<div class="card">
      <h3>Día de compra semanal</h3>
      <p class="muted small">Lo comparten todos los de «${a.name}»</p>
      <div class="chips wrap">
        ${[0,1,2,3,4,5,6,7].map(i=>l`<button class=${`chip ${a.shoppingDay===i?"checked":""}`} onClick=${()=>o(i)}>
          ${i===0?"Ninguno":Ua(i)}
        </button>`)}
      </div>
      <p class="primary-text strong" ref=${s}>${Ye(a.shoppingDay)}</p>
      <p class="muted small">En el iPhone la web no puede mandar avisos como la app de Android; verás el día de compra en la pestaña Compra.</p>
    </div>`}
    <button class="btn tonal wide" onClick=${()=>t("preferences")}><${$} name="store" size=${18} /> Supermercados y otras preferencias</button>
  </div>`}function Ks({close:e}){let t=/iPhone|iPad|iPod/.test(navigator.userAgent);return l`<div class="sheet-body">
    <div class="sheet-title"><h2 class="grow">Instalar Stock Casa</h2>
      <button class="icon-btn" onClick=${()=>e()} aria-label="Cerrar"><${$} name="close" /></button></div>
    <p class="muted">Así tendrás Stock Casa en la pantalla de inicio, a pantalla completa, como una app más.</p>
    <ol class="steps-list">
      ${t?l`
        <li>Abre esta página en <strong>Safari</strong>.</li>
        <li>Toca el botón <strong>Compartir</strong> (el cuadrado con la flecha hacia arriba).</li>
        <li>Elige <strong>«Añadir a pantalla de inicio»</strong> y pulsa <strong>Añadir</strong>.</li>
      `:l`
        <li>Abre esta página en <strong>Chrome</strong>.</li>
        <li>Toca el menú <strong>⋮</strong> de arriba a la derecha.</li>
        <li>Elige <strong>«Añadir a pantalla de inicio»</strong> o <strong>«Instalar aplicación»</strong>.</li>
      `}
    </ol>
    <p class="muted small">Si tienes Android, también puedes usar la app nativa (con avisos del día de compra).</p>
  </div>`}var Zs=[{key:"pantry",label:"Despensa",icon:"pantry"},{key:"shopping",label:"Compra",icon:"cart"},{key:"recipes",label:"Recetas",icon:"recipe"},{key:"plan",label:"Semana",icon:"calendar"},{key:"house",label:"Casa",icon:"home"}];function eo(){let[e,t]=C(()=>Me.isLoggedIn()?"home":"login"),[a,n]=C(()=>location.hash==="#compra"?"shopping":"pantry"),[s,o]=C(()=>new Set([a])),[i,c]=C(0),[p,m]=C(0);O(()=>{an(u=>{u.noHouse?t("setup"):(H.clear(),t("login"))})},[]);let h=(u,g)=>{u!==a&&T("tap"),n(u),o(new Set([...s,u])),g==="settings"&&m(Date.now()),window.scrollTo({top:0})},r=async()=>{try{let u=await J.mine();t(u.length?"home":"setup")}catch{t("home")}};if(e==="login")return l`<${In} onLoggedIn=${r} onRegister=${()=>t("register")} />`;if(e==="register")return l`<${Sn} onRegistered=${()=>t("setup")} onBack=${()=>t("login")} />`;if(e==="setup")return l`<${xn} onReady=${()=>{n("pantry"),t("home")}}
      onLogout=${async()=>{await Me.logout(),t("login")}} />`;let f={goTo:h,setBadge:c};return l`<div class="app">
    <div class="tabs-content">
      ${s.has("pantry")&&l`<div class=${`tab-page ${a==="pantry"?"active":""}`}><${En} active=${a==="pantry"} ...${f} /></div>`}
      ${s.has("shopping")&&l`<div class=${`tab-page ${a==="shopping"?"active":""}`}><${An} active=${a==="shopping"} ...${f} /></div>`}
      ${s.has("recipes")&&l`<div class=${`tab-page ${a==="recipes"?"active":""}`}><${Bn} active=${a==="recipes"} ...${f} /></div>`}
      ${s.has("plan")&&l`<div class=${`tab-page ${a==="plan"?"active":""}`}><${Un} active=${a==="plan"} ...${f} /></div>`}
      ${s.has("house")&&l`<div class=${`tab-page ${a==="house"?"active":""}`}><${On} active=${a==="house"}
        openSettingsRequest=${p} onLogout=${()=>t("login")} onNoHouse=${()=>t("setup")} /></div>`}
    </div>
    <nav class="bottom-nav">
      ${Zs.map(u=>l`<button class=${`nav-item ${a===u.key?"active":""}`} onClick=${()=>h(u.key)} aria-label=${u.label}>
        <span class="nav-icon" key=${a===u.key?"on":"off"}><${$} name=${u.icon} size=${24} />
          ${u.key==="shopping"&&i>0&&l`<span class="badge">${i>99?"99+":i}</span>`}
        </span>
        <span class="nav-label">${u.label}</span>
      </button>`)}
    </nav>
  </div>`}Mt();var Rn=document.getElementById("app");Rn.textContent="";qe(l`<${eo} />`,Rn);"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});
