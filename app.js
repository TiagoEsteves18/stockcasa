var Tt,te,Qa,Us,je,Va,Ka,fa,ba,$a,va,js,ht={},Xa=[],Vs=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ya=Array.isArray;function De(e,t){for(var a in t)e[a]=t[a];return e}function Ja(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function wa(e,t,a){var n,s,o,l={};for(o in t)o=="key"?n=t[o]:o=="ref"?s=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?Tt.call(arguments,2):a),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return Lt(e,l,n,s,null)}function Lt(e,t,a,n,s){var o={type:e,props:t,key:a,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++Qa,__i:-1,__u:0};return s==null&&te.vnode!=null&&te.vnode(o),o}function Nt(e){return e.children}function Pt(e,t){this.props=e,this.context=t}function tt(e,t){if(t==null)return e.__?tt(e.__,e.__i+1):null;for(var a;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null)return a.__e;return typeof e.type=="function"?tt(e):null}function Za(e){var t,a;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null){e.__e=e.__c.base=a.__e;break}return Za(e)}}function Ga(e){(!e.__d&&(e.__d=!0)&&je.push(e)&&!qt.__r++||Va!==te.debounceRendering)&&((Va=te.debounceRendering)||Ka)(qt)}function qt(){var e,t,a,n,s,o,l,r;for(je.sort(fa);e=je.shift();)e.__d&&(t=je.length,n=void 0,o=(s=(a=e).__v).__e,l=[],r=[],a.__P&&((n=De({},s)).__v=s.__v+1,te.vnode&&te.vnode(n),_a(a.__P,n,s,a.__n,a.__P.namespaceURI,32&s.__u?[o]:null,l,o??tt(s),!!(32&s.__u),r),n.__v=s.__v,n.__.__k[n.__i]=n,an(l,n,r),n.__e!=o&&Za(n)),je.length>t&&je.sort(fa));qt.__r=0}function en(e,t,a,n,s,o,l,r,u,h,g){var i,p,d,m,$,b=n&&n.__k||Xa,k=t.length;for(a.__d=u,Gs(a,t,b),u=a.__d,i=0;i<k;i++)(d=a.__k[i])!=null&&(p=d.__i===-1?ht:b[d.__i]||ht,d.__i=i,_a(e,d,p,s,o,l,r,u,h,g),m=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&ka(p.ref,null,d),g.push(d.ref,d.__c||m,d)),$==null&&m!=null&&($=m),65536&d.__u||p.__k===d.__k?u=tn(d,u,e):typeof d.type=="function"&&d.__d!==void 0?u=d.__d:m&&(u=m.nextSibling),d.__d=void 0,d.__u&=-196609);a.__d=u,a.__e=$}function Gs(e,t,a){var n,s,o,l,r,u=t.length,h=a.length,g=h,i=0;for(e.__k=[],n=0;n<u;n++)(s=t[n])!=null&&typeof s!="boolean"&&typeof s!="function"?(l=n+i,(s=e.__k[n]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?Lt(null,s,null,null,null):ya(s)?Lt(Nt,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?Lt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,o=null,(r=s.__i=Ws(s,a,l,g))!==-1&&(g--,(o=a[r])&&(o.__u|=131072)),o==null||o.__v===null?(r==-1&&i--,typeof s.type!="function"&&(s.__u|=65536)):r!==l&&(r==l-1?i--:r==l+1?i++:(r>l?i--:i++,s.__u|=65536))):s=e.__k[n]=null;if(g)for(n=0;n<h;n++)(o=a[n])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=tt(o)),nn(o,o))}function tn(e,t,a){var n,s;if(typeof e.type=="function"){for(n=e.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=e,t=tn(n[s],t,a));return t}e.__e!=t&&(t&&e.type&&!a.contains(t)&&(t=tt(e)),a.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Ws(e,t,a,n){var s=e.key,o=e.type,l=a-1,r=a+1,u=t[a];if(u===null||u&&s==u.key&&o===u.type&&!(131072&u.__u))return a;if(n>(u!=null&&!(131072&u.__u)?1:0))for(;l>=0||r<t.length;){if(l>=0){if((u=t[l])&&!(131072&u.__u)&&s==u.key&&o===u.type)return l;l--}if(r<t.length){if((u=t[r])&&!(131072&u.__u)&&s==u.key&&o===u.type)return r;r++}}return-1}function Wa(e,t,a){t[0]==="-"?e.setProperty(t,a??""):e[t]=a==null?"":typeof a!="number"||Vs.test(t)?a:a+"px"}function At(e,t,a,n,s){var o;e:if(t==="style")if(typeof a=="string")e.style.cssText=a;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)a&&t in a||Wa(e.style,t,"");if(a)for(t in a)n&&a[t]===n[t]||Wa(e.style,t,a[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=a,a?n?a.u=n.u:(a.u=ba,e.addEventListener(t,o?va:$a,o)):e.removeEventListener(t,o?va:$a,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=a??"";break e}catch{}typeof a=="function"||(a==null||a===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&a==1?"":a))}}function Ya(e){return function(t){if(this.l){var a=this.l[t.type+e];if(t.t==null)t.t=ba++;else if(t.t<a.u)return;return a(te.event?te.event(t):t)}}}function _a(e,t,a,n,s,o,l,r,u,h){var g,i,p,d,m,$,b,k,z,M,N,F,D,C,L,S,T=t.type;if(t.constructor!==void 0)return null;128&a.__u&&(u=!!(32&a.__u),o=[r=t.__e=a.__e]),(g=te.__b)&&g(t);e:if(typeof T=="function")try{if(k=t.props,z="prototype"in T&&T.prototype.render,M=(g=T.contextType)&&n[g.__c],N=g?M?M.props.value:g.__:n,a.__c?b=(i=t.__c=a.__c).__=i.__E:(z?t.__c=i=new T(k,N):(t.__c=i=new Pt(k,N),i.constructor=T,i.render=Qs),M&&M.sub(i),i.props=k,i.state||(i.state={}),i.context=N,i.__n=n,p=i.__d=!0,i.__h=[],i._sb=[]),z&&i.__s==null&&(i.__s=i.state),z&&T.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=De({},i.__s)),De(i.__s,T.getDerivedStateFromProps(k,i.__s))),d=i.props,m=i.state,i.__v=t,p)z&&T.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),z&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(z&&T.getDerivedStateFromProps==null&&k!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(k,N),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(k,i.__s,N)===!1||t.__v===a.__v)){for(t.__v!==a.__v&&(i.props=k,i.state=i.__s,i.__d=!1),t.__e=a.__e,t.__k=a.__k,t.__k.some(function(I){I&&(I.__=t)}),F=0;F<i._sb.length;F++)i.__h.push(i._sb[F]);i._sb=[],i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(k,i.__s,N),z&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,m,$)})}if(i.context=N,i.props=k,i.__P=e,i.__e=!1,D=te.__r,C=0,z){for(i.state=i.__s,i.__d=!1,D&&D(t),g=i.render(i.props,i.state,i.context),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[]}else do i.__d=!1,D&&D(t),g=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++C<25);i.state=i.__s,i.getChildContext!=null&&(n=De(De({},n),i.getChildContext())),z&&!p&&i.getSnapshotBeforeUpdate!=null&&($=i.getSnapshotBeforeUpdate(d,m)),en(e,ya(S=g!=null&&g.type===Nt&&g.key==null?g.props.children:g)?S:[S],t,a,n,s,o,l,r,u,h),i.base=t.__e,t.__u&=-161,i.__h.length&&l.push(i),b&&(i.__E=i.__=null)}catch(I){if(t.__v=null,u||o!=null){for(t.__u|=u?160:128;r&&r.nodeType===8&&r.nextSibling;)r=r.nextSibling;o[o.indexOf(r)]=null,t.__e=r}else t.__e=a.__e,t.__k=a.__k;te.__e(I,t,a)}else o==null&&t.__v===a.__v?(t.__k=a.__k,t.__e=a.__e):t.__e=Ys(a.__e,t,a,n,s,o,l,u,h);(g=te.diffed)&&g(t)}function an(e,t,a){t.__d=void 0;for(var n=0;n<a.length;n++)ka(a[n],a[++n],a[++n]);te.__c&&te.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){te.__e(o,s.__v)}})}function Ys(e,t,a,n,s,o,l,r,u){var h,g,i,p,d,m,$,b=a.props,k=t.props,z=t.type;if(z==="svg"?s="http://www.w3.org/2000/svg":z==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(h=0;h<o.length;h++)if((d=o[h])&&"setAttribute"in d==!!z&&(z?d.localName===z:d.nodeType===3)){e=d,o[h]=null;break}}if(e==null){if(z===null)return document.createTextNode(k);e=document.createElementNS(s,z,k.is&&k),r&&(te.__m&&te.__m(t,o),r=!1),o=null}if(z===null)b===k||r&&e.data===k||(e.data=k);else{if(o=o&&Tt.call(e.childNodes),b=a.props||ht,!r&&o!=null)for(b={},h=0;h<e.attributes.length;h++)b[(d=e.attributes[h]).name]=d.value;for(h in b)if(d=b[h],h!="children"){if(h=="dangerouslySetInnerHTML")i=d;else if(!(h in k)){if(h=="value"&&"defaultValue"in k||h=="checked"&&"defaultChecked"in k)continue;At(e,h,null,d,s)}}for(h in k)d=k[h],h=="children"?p=d:h=="dangerouslySetInnerHTML"?g=d:h=="value"?m=d:h=="checked"?$=d:r&&typeof d!="function"||b[h]===d||At(e,h,d,b[h],s);if(g)r||i&&(g.__html===i.__html||g.__html===e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(i&&(e.innerHTML=""),en(e,ya(p)?p:[p],t,a,n,z==="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,l,o?o[0]:a.__k&&tt(a,0),r,u),o!=null)for(h=o.length;h--;)Ja(o[h]);r||(h="value",z==="progress"&&m==null?e.removeAttribute("value"):m!==void 0&&(m!==e[h]||z==="progress"&&!m||z==="option"&&m!==b[h])&&At(e,h,m,b[h],s),h="checked",$!==void 0&&$!==e[h]&&At(e,h,$,b[h],s))}return e}function ka(e,t,a){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(s){te.__e(s,a)}}function nn(e,t,a){var n,s;if(te.unmount&&te.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||ka(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){te.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&nn(n[s],t,a||typeof e.type!="function");a||Ja(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Qs(e,t,a){return this.constructor(e,a)}function Ve(e,t,a){var n,s,o,l;te.__&&te.__(e,t),s=(n=typeof a=="function")?null:a&&a.__k||t.__k,o=[],l=[],_a(t,e=(!n&&a||t).__k=wa(Nt,null,[e]),s||ht,ht,t.namespaceURI,!n&&a?[a]:s?null:t.firstChild?Tt.call(t.childNodes):null,o,!n&&a?a:s?s.__e:t.firstChild,n,l),an(o,e,l)}Tt=Xa.slice,te={__e:function(e,t,a,n){for(var s,o,l;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),l=s.__d),l)return s.__E=s}catch(r){e=r}throw e}},Qa=0,Us=function(e){return e!=null&&e.constructor==null},Pt.prototype.setState=function(e,t){var a;a=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=De({},this.state),typeof e=="function"&&(e=e(De({},a),this.props)),e&&De(a,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ga(this))},Pt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ga(this))},Pt.prototype.render=Nt,je=[],Ka=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fa=function(e,t){return e.__v.__b-t.__v.__b},qt.__r=0,ba=0,$a=Ya(!1),va=Ya(!0),js=0;var gt,ie,Ca,sn,Dt=0,mn=[],le=te,on=le.__b,rn=le.__r,ln=le.diffed,cn=le.__c,un=le.unmount,dn=le.__;function Ia(e,t){le.__h&&le.__h(ie,e,Dt||t),Dt=0;var a=ie.__H||(ie.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function _(e){return Dt=1,Ks(gn,e)}function Ks(e,t,a){var n=Ia(gt++,2);if(n.t=e,!n.__c&&(n.__=[a?a(t):gn(void 0,t),function(r){var u=n.__N?n.__N[0]:n.__[0],h=n.t(u,r);u!==h&&(n.__N=[h,n.__[1]],n.__c.setState({}))}],n.__c=ie,!ie.u)){var s=function(r,u,h){if(!n.__c.__H)return!0;var g=n.__c.__H.__.filter(function(p){return!!p.__c});if(g.every(function(p){return!p.__N}))return!o||o.call(this,r,u,h);var i=!1;return g.forEach(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(i=!0)}}),!(!i&&n.__c.props===r)&&(!o||o.call(this,r,u,h))};ie.u=!0;var o=ie.shouldComponentUpdate,l=ie.componentWillUpdate;ie.componentWillUpdate=function(r,u,h){if(this.__e){var g=o;o=void 0,s(r,u,h),o=g}l&&l.call(this,r,u,h)},ie.shouldComponentUpdate=s}return n.__N||n.__}function V(e,t){var a=Ia(gt++,3);!le.__s&&hn(a.__H,t)&&(a.__=e,a.i=t,ie.__H.__h.push(a))}function W(e){return Dt=5,Ge(function(){return{current:e}},[])}function Ge(e,t){var a=Ia(gt++,7);return hn(a.__H,t)&&(a.__=e(),a.__H=t,a.__h=e),a.__}function Xs(){for(var e;e=mn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ht),e.__H.__h.forEach(Sa),e.__H.__h=[]}catch(t){e.__H.__h=[],le.__e(t,e.__v)}}le.__b=function(e){ie=null,on&&on(e)},le.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),dn&&dn(e,t)},le.__r=function(e){rn&&rn(e),gt=0;var t=(ie=e.__c).__H;t&&(Ca===ie?(t.__h=[],ie.__h=[],t.__.forEach(function(a){a.__N&&(a.__=a.__N),a.i=a.__N=void 0})):(t.__h.forEach(Ht),t.__h.forEach(Sa),t.__h=[],gt=0)),Ca=ie},le.diffed=function(e){ln&&ln(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(mn.push(t)!==1&&sn===le.requestAnimationFrame||((sn=le.requestAnimationFrame)||Js)(Xs)),t.__H.__.forEach(function(a){a.i&&(a.__H=a.i),a.i=void 0})),Ca=ie=null},le.__c=function(e,t){t.some(function(a){try{a.__h.forEach(Ht),a.__h=a.__h.filter(function(n){return!n.__||Sa(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],le.__e(n,a.__v)}}),cn&&cn(e,t)},le.unmount=function(e){un&&un(e);var t,a=e.__c;a&&a.__H&&(a.__H.__.forEach(function(n){try{Ht(n)}catch(s){t=s}}),a.__H=void 0,t&&le.__e(t,a.__v))};var pn=typeof requestAnimationFrame=="function";function Js(e){var t,a=function(){clearTimeout(n),pn&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);pn&&(t=requestAnimationFrame(a))}function Ht(e){var t=ie,a=e.__c;typeof a=="function"&&(e.__c=void 0,a()),ie=t}function Sa(e){var t=ie;e.__c=e.__(),ie=t}function hn(e,t){return!e||e.length!==t.length||t.some(function(a,n){return a!==e[n]})}function gn(e,t){return typeof t=="function"?t(e):t}var $n=function(e,t,a,n){var s;t[0]=0;for(var o=1;o<t.length;o++){var l=t[o++],r=t[o]?(t[0]|=l?1:2,a[t[o++]]):t[++o];l===3?n[0]=r:l===4?n[1]=Object.assign(n[1]||{},r):l===5?(n[1]=n[1]||{})[t[++o]]=r:l===6?n[1][t[++o]]+=r+"":l?(s=e.apply(r,$n(e,r,a,["",null])),n.push(s),r[0]?t[0]|=2:(t[o-2]=0,t[o]=s)):n.push(r)}return n},fn=new Map;function vn(e){var t=fn.get(this);return t||(t=new Map,fn.set(this,t)),(t=$n(this,t.get(e)||(t.set(e,t=function(a){for(var n,s,o=1,l="",r="",u=[0],h=function(p){o===1&&(p||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,p,l):o===3&&(p||l)?(u.push(3,p,l),o=2):o===2&&l==="..."&&p?u.push(4,p,0):o===2&&l&&!p?u.push(5,0,!0,l):o>=5&&((l||!p&&o===5)&&(u.push(o,0,l,s),o=6),p&&(u.push(o,p,0,s),o=6)),l=""},g=0;g<a.length;g++){g&&(o===1&&h(),h(g));for(var i=0;i<a[g].length;i++)n=a[g][i],o===1?n==="<"?(h(),u=[u],o=3):l+=n:o===4?l==="--"&&n===">"?(o=1,l=""):l=n+l[0]:r?n===r?r="":l+=n:n==='"'||n==="'"?r=n:n===">"?(h(),o=1):o&&(n==="="?(o=5,s=l,l=""):n==="/"&&(o<5||a[g][i+1]===">")?(h(),o===3&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(h(),o=2):l+=n),o===3&&l==="!--"&&(o=4,u=u[0])}return h(),u}(e)),t),arguments,[])).length>1?t:t[0]}var za={clock:{d:["M11.99,2C6.47,2 2,6.48 2,12s4.47,10 9.99,10C17.52,22 22,17.52 22,12S17.52,2 11.99,2zM12,20c-4.42,0 -8,-3.58 -8,-8s3.58,-8 8,-8 8,3.58 8,8 -3.58,8 -8,8zM12.5,7H11v6l5.25,3.15 0.75,-1.23 -4.5,-2.67z"],vb:"24"},chevron_right:{d:["M10,6L8.59,7.41 13.17,12l-4.58,4.59L10,18l6,-6z"],vb:"24"},remove:{d:["M19,13H5v-2h14v2z"],vb:"24"},calendar:{d:["M19,4h-1V2h-2v2H8V2H6v2H5c-1.11,0 -1.99,0.9 -1.99,2L3,20c0,1.1 0.89,2 2,2h14c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM9,14H7v-2h2v2zM13,14h-2v-2h2v2zM17,14h-2v-2h2v2zM9,18H7v-2h2v2zM13,18h-2v-2h2v2zM17,18h-2v-2h2v2z"],vb:"24"},lock:{d:["M18,8h-1V6c0,-2.76 -2.24,-5 -5,-5S7,3.24 7,6v2H6c-1.1,0 -2,0.9 -2,2v10c0,1.1 0.9,2 2,2h12c1.1,0 2,-0.9 2,-2V10c0,-1.1 -0.9,-2 -2,-2zM12,17c-1.1,0 -2,-0.9 -2,-2s0.9,-2 2,-2 2,0.9 2,2 -0.9,2 -2,2zM15.1,8H8.9V6c0,-1.71 1.39,-3.1 3.1,-3.1 1.71,0 3.1,1.39 3.1,3.1v2z"],vb:"24"},cook:{d:["M13.5,0.67s0.74,2.65 0.74,4.8c0,2.06 -1.35,3.73 -3.41,3.73 -2.07,0 -3.63,-1.67 -3.63,-3.73l0.03,-0.36C5.21,7.51 4,10.62 4,14c0,4.42 3.58,8 8,8s8,-3.58 8,-8C20,8.61 17.41,3.8 13.5,0.67zM11.71,19c-1.78,0 -3.22,-1.4 -3.22,-3.14 0,-1.62 1.05,-2.76 2.81,-3.12 1.77,-0.36 3.6,-1.21 4.62,-2.58 0.39,1.29 0.59,2.65 0.59,4.04 0,2.65 -2.15,4.8 -4.8,4.8z"],vb:"24"},mail:{d:["M20,4H4c-1.1,0 -1.99,0.9 -1.99,2L2,18c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2zM20,8l-8,5 -8,-5V6l8,5 8,-5v2z"],vb:"24"},search:{d:["M15.5,14h-0.79l-0.28,-0.27C15.41,12.59 16,11.11 16,9.5 16,5.91 13.09,3 9.5,3S3,5.91 3,9.5 5.91,16 9.5,16c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99L20.49,19l-4.99,-5zM9.5,14C7.01,14 5,11.99 5,9.5S7.01,5 9.5,5 14,7.01 14,9.5 11.99,14 9.5,14z"],vb:"24"},store:{d:["M20,4H4v2h16V4zM21,14v-2l-1,-5H4l-1,5v2h1v6h10v-6h4v6h2v-6H21zM12,18H6v-4h6V18z"],vb:"24"},bell:{d:["M12,22c1.1,0 2,-0.9 2,-2h-4c0,1.1 0.89,2 2,2zM18,16v-5c0,-3.07 -1.64,-5.64 -4.5,-6.32L13.5,4c0,-0.83 -0.67,-1.5 -1.5,-1.5s-1.5,0.67 -1.5,1.5v0.68C7.63,5.36 6,7.92 6,11v5l-2,2v1h16v-1l-2,-2z"],vb:"24"},share:{d:["M18,16.08c-0.76,0 -1.44,0.3 -1.96,0.77L8.91,12.7c0.05,-0.23 0.09,-0.46 0.09,-0.7s-0.04,-0.47 -0.09,-0.7l7.05,-4.11c0.54,0.5 1.25,0.81 2.04,0.81 1.66,0 3,-1.34 3,-3s-1.34,-3 -3,-3 -3,1.34 -3,3c0,0.24 0.04,0.47 0.09,0.7L8.04,9.81C7.5,9.31 6.79,9 6,9c-1.66,0 -3,1.34 -3,3s1.34,3 3,3c0.79,0 1.5,-0.31 2.04,-0.81l7.12,4.16c-0.05,0.21 -0.08,0.43 -0.08,0.65 0,1.61 1.31,2.92 2.92,2.92 1.61,0 2.92,-1.31 2.92,-2.92s-1.31,-2.92 -2.92,-2.92z"],vb:"24"},login:{d:["M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5,-5L11,7zM20,19h-8v2h8c1.1,0 2,-0.9 2,-2V5c0,-1.1 -0.9,-2 -2,-2h-8v2h8V19z"],vb:"24"},cart:{d:["M7,18c-1.1,0 -1.99,0.9 -1.99,2S5.9,22 7,22s2,-0.9 2,-2 -0.9,-2 -2,-2zM1,2v2h2l3.6,7.59 -1.35,2.45c-0.16,0.28 -0.25,0.61 -0.25,0.96 0,1.1 0.9,2 2,2h12v-2H7.42c-0.14,0 -0.25,-0.11 -0.25,-0.25l0.03,-0.12 0.9,-1.63h7.45c0.75,0 1.41,-0.41 1.75,-1.03l3.58,-6.49c0.08,-0.14 0.12,-0.31 0.12,-0.48 0,-0.55 -0.45,-1 -1,-1H5.21l-0.94,-2H1zM17,18c-1.1,0 -1.99,0.9 -1.99,2s0.89,2 1.99,2 2,-0.9 2,-2 -0.9,-2 -2,-2z"],vb:"24"},insights:{d:["M21,8c-1.45,0 -2.26,1.44 -1.93,2.51l-3.55,3.56c-0.3,-0.09 -0.74,-0.09 -1.04,0l-2.55,-2.55C12.27,10.45 11.46,9 10,9c-1.45,0 -2.27,1.44 -1.93,2.52l-4.56,4.55C2.44,15.74 1,16.55 1,18c0,1.1 0.9,2 2,2c1.45,0 2.26,-1.44 1.93,-2.51l4.55,-4.56c0.3,0.09 0.74,0.09 1.04,0l2.55,2.55C12.73,16.55 13.54,18 15,18c1.45,0 2.27,-1.44 1.93,-2.52l3.56,-3.55C21.56,12.26 23,11.45 23,10C23,8.9 22.1,8 21,8z"],vb:"24"},image:{d:["M21,19V5c0,-1.1 -0.9,-2 -2,-2H5c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2zM8.5,13.5l2.5,3.01L14.5,12l4.5,6H5l3.5,-4.5z"],vb:"24"},close:{d:["M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"],vb:"24"},people:{d:["M16,11c1.66,0 2.99,-1.34 2.99,-3S17.66,5 16,5c-1.66,0 -3,1.34 -3,3s1.34,3 3,3zM8,11c1.66,0 2.99,-1.34 2.99,-3S9.66,5 8,5C6.34,5 5,6.34 5,8s1.34,3 3,3zM8,13c-2.33,0 -7,1.17 -7,3.5V19h14v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5zM16,13c-0.29,0 -0.62,0.02 -0.97,0.05 1.16,0.84 1.97,1.97 1.97,3.45V19h6v-2.5c0,-2.33 -4.67,-3.5 -7,-3.5z"],vb:"24"},add:{d:["M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],vb:"24"},arrow_back:{d:["M20,11H7.83l5.59,-5.59L12,4l-8,8 8,8 1.41,-1.41L7.83,13H20v-2z"],vb:"24"},camera:{d:["M12,12m-3.2,0a3.2,3.2 0,1 1,6.4 0a3.2,3.2 0,1 1,-6.4 0M9,2L7.17,4H4c-1.1,0 -2,0.9 -2,2v12c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6c0,-1.1 -0.9,-2 -2,-2h-3.17L15,2H9zM12,17c-2.76,0 -5,-2.24 -5,-5s2.24,-5 5,-5 5,2.24 5,5 -2.24,5 -5,5z"],vb:"24"},delete:{d:["M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2V7H6v12zM19,4h-3.5l-1,-1h-5l-1,1H5v2h14V4z"],vb:"24"},recipe:{d:["M8.1,13.34l2.83,-2.83L3.91,3.5c-1.56,1.56 -1.56,4.09 0,5.66l4.19,4.18zM14.88,11.53c1.53,0.71 3.68,0.21 5.27,-1.38 1.91,-1.91 2.28,-4.65 0.81,-6.12 -1.46,-1.46 -4.2,-1.1 -6.12,0.81 -1.59,1.59 -2.09,3.74 -1.38,5.27L3.7,19.87l1.41,1.41L12,14.41l6.88,6.88 1.41,-1.41L13.41,13l1.47,-1.47z"],vb:"24"},check:{d:["M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41,-1.41z"],vb:"24"},barcode:{d:["M9.5,6.5v3h-3v-3H9.5M11,5H5v6h6V5L11,5zM9.5,14.5v3h-3v-3H9.5M11,13H5v6h6V13L11,13zM17.5,6.5v3h-3v-3H17.5M19,5h-6v6h6V5L19,5zM13,13h1.5v1.5H13V13zM14.5,14.5H16V16h-1.5V14.5zM16,13h1.5v1.5H16V13zM13,16h1.5v1.5H13V16zM14.5,17.5H16V19h-1.5V17.5zM16,16h1.5v1.5H16V16zM17.5,14.5H19V16h-1.5V14.5zM17.5,17.5H19V19h-1.5V17.5zM22,7h-2V4h-3V2h5V7zM22,22v-5h-2v3h-3v2H22zM2,22h5v-2H4v-3H2V22zM2,2v5h2V4h3V2H2z"],vb:"24"},swap:{d:["M6.99,11L3,15l3.99,4v-3H14v-2H6.99v-3zM21,9l-3.99,-4v3H10v2h7.01v3L21,9z"],vb:"24"},pantry:{d:["M20,2H4c-1.1,0 -2,0.9 -2,2v4c0,0.74 0.4,1.38 1,1.73V20c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2V9.73c0.6,-0.35 1,-0.99 1,-1.73V4c0,-1.1 -0.9,-2 -2,-2zM19,20H5V10h14v10zM20,8H4V4h16v4zM9,12h6v2H9z"],vb:"24"},logout:{d:["M17,7l-1.41,1.41L18.17,11H8v2h10.17l-2.58,2.58L17,17l5,-5zM4,5h8V3H4c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h8v-2H4V5z"],vb:"24"},edit:{d:["M3,17.25V21h3.75L17.81,9.94l-3.75,-3.75L3,17.25zM20.71,7.04c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34c-0.39,-0.39 -1.02,-0.39 -1.41,0l-1.83,1.83 3.75,3.75 1.83,-1.83z"],vb:"24"},settings:{d:["M19.14,12.94c0.04,-0.3 0.06,-0.61 0.06,-0.94c0,-0.32 -0.02,-0.64 -0.07,-0.94l2.03,-1.58c0.18,-0.14 0.23,-0.41 0.12,-0.61l-1.92,-3.32c-0.12,-0.22 -0.37,-0.29 -0.59,-0.22l-2.39,0.96c-0.5,-0.38 -1.03,-0.7 -1.62,-0.94L14.4,2.81c-0.04,-0.24 -0.24,-0.41 -0.48,-0.41h-3.84c-0.24,0 -0.43,0.17 -0.47,0.41L9.25,5.35C8.66,5.59 8.12,5.92 7.63,6.29L5.24,5.33c-0.22,-0.08 -0.47,0 -0.59,0.22L2.74,8.87C2.62,9.08 2.66,9.34 2.86,9.48l2.03,1.58C4.84,11.36 4.8,11.69 4.8,12s0.02,0.64 0.07,0.94l-2.03,1.58c-0.18,0.14 -0.23,0.41 -0.12,0.61l1.92,3.32c0.12,0.22 0.37,0.29 0.59,0.22l2.39,-0.96c0.5,0.38 1.03,0.7 1.62,0.94l0.36,2.54c0.05,0.24 0.24,0.41 0.48,0.41h3.84c0.24,0 0.44,-0.17 0.47,-0.41l0.36,-2.54c0.59,-0.24 1.13,-0.56 1.62,-0.94l2.39,0.96c0.22,0.08 0.47,0 0.59,-0.22l1.92,-3.32c0.12,-0.22 0.07,-0.47 -0.12,-0.61L19.14,12.94zM12,15.6c-1.98,0 -3.6,-1.62 -3.6,-3.6s1.62,-3.6 3.6,-3.6s3.6,1.62 3.6,3.6S13.98,15.6 12,15.6z"],vb:"24"},copy:{d:["M16,1H4c-1.1,0 -2,0.9 -2,2v14h2V3h12V1zM19,5H8c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h11c1.1,0 2,-0.9 2,-2V7c0,-1.1 -0.9,-2 -2,-2zM19,21H8V7h11v14z"],vb:"24"},undo:{d:["M12.5,8c-2.65,0 -5.05,0.99 -6.9,2.6L2,7v9h9l-3.62,-3.62c1.39,-1.16 3.16,-1.88 5.12,-1.88 3.54,0 6.55,2.31 7.6,5.5l2.37,-0.78C21.08,11.03 17.15,8 12.5,8z"],vb:"24"},chevron_left:{d:["M15.41,7.41L14,6l-6,6 6,6 1.41,-1.41L10.83,12z"],vb:"24"},home:{d:["M10,20v-6h4v6h5v-8h3L12,3 2,12h3v8z"],vb:"24"}};Object.assign(za,{sun:{vb:"24",d:["M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zM11 20h2v3h-2zM1 11h3v2H1zM20 11h3v2h-3zM4.22 5.64l1.42-1.42 2.12 2.12-1.42 1.42zM16.24 17.66l1.42-1.42 2.12 2.12-1.42 1.42zM4.22 18.36l2.12-2.12 1.42 1.42-2.12 2.12zM16.24 6.34l2.12-2.12 1.42 1.42-2.12 2.12z"]},moon:{vb:"24",d:["M12.3 2.05A10 10 0 1 0 21.95 11.7 7.5 7.5 0 0 1 12.3 2.05z"]},restaurant:{vb:"24",d:["M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"]},receipt:{vb:"24",rule:"evenodd",d:["M5 2h14v20l-2.33-1.5L14.33 22 12 20.5 9.67 22l-2.34-1.5L5 22V2zm2 2v14.4l.33-.2 2.34 1.5L12 18.2l2.33 1.5 2.34-1.5.33.2V4H7zm2 3h6v2H9V7zm0 4h6v2H9v-2z"]},play:{vb:"24",d:["M8 5v14l11-7z"]},sparkle:{vb:"24",d:["M12 2C12.8 7.6 16.4 11.2 22 12 16.4 12.8 12.8 16.4 12 22 11.2 16.4 7.6 12.8 2 12 7.6 11.2 11.2 7.6 12 2z"]},euro:{vb:"24",d:["M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"]},bookmark:{vb:"24",d:["M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"]},arrow_forward:{vb:"24",d:["M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"]},palette:{vb:"24",d:["M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"]},person:{vb:"24",d:["M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"]},volume:{vb:"24",d:["M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"]},hourglass:{vb:"24",d:["M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"]},leaf:{vb:"24",d:["M6.05 8.05a7.007 7.007 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 0 0 8.4 19.94c2.6 1.23 5.8.78 7.95-1.37C19.83 15.09 20 5 20 5S9.91 5.17 6.05 8.05z"]},snow:{vb:"24",d:["M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"]},warning:{vb:"24",d:["M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"]},heart:{vb:"24",d:["M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"]},heart_outline:{vb:"24",d:["M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"]},chat:{vb:"24",d:["M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"]},help:{vb:"24",d:["M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"]},new:{vb:"24",d:["M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"]},trend:{vb:"24",d:["M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"]},shield:{vb:"24",d:["M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"]},send:{vb:"24",d:["M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"]},cloud_off:{vb:"24",d:["M19.35 10.04A7.49 7.49 0 0 0 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46A5.497 5.497 0 0 1 17.5 10.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 17.16 24 15.68 24 14c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"]},scan:{vb:"24",d:["M7 3H4c-.55 0-1 .45-1 1v3h2V5h2V3zm12 0h-3v2h2v2h2V4c0-.55-.45-1-1-1zM5 17H3v3c0 .55.45 1 1 1h3v-2H5v-2zm14 2h-2v2h3c.55 0 1-.45 1-1v-3h-2v2zM7 7h10v2H7zm0 4h10v2H7zm0 4h6v2H7z"]},globe:{vb:"24",d:["M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"]}});var Zs="https://parseapi.back4app.com/",eo="peyCaKkG6IbflEpErk7t1iEH1fngfxgwUwv17qyI",to="ejB6EBANvzAfnp5Mh6QOIkPtliBJBC1AVTspICfB",Ma="stockcasa.session",Rt="stockcasa.houseId",H={current(){try{return JSON.parse(localStorage.getItem(Ma))||null}catch{return null}},save(e){localStorage.setItem(Ma,JSON.stringify(e))},clear(){localStorage.removeItem(Ma),localStorage.removeItem(Rt)},token(){return this.current()?.sessionToken||null},email(){return this.current()?.email||""},requireUserId(){let e=this.current()?.userId;if(!e)throw be.sessionExpired();return e},houseId(){return localStorage.getItem(Rt)},requireHouseId(){let e=this.houseId();if(!e)throw new ft;return e},saveHouseId(e){e?localStorage.setItem(Rt,e):localStorage.removeItem(Rt)}},be=class e extends Error{constructor(t,a){super(a),this.code=t}get isSessionExpired(){return this.code===209}static fromServer(t,a){let s={100:"No se ha podido conectar con el servidor",101:"No se ha encontrado el elemento. Actualiza la lista",125:"El correo no es v\xE1lido",202:"Ya existe una cuenta con ese correo",203:"Ya existe una cuenta con ese correo",205:"No hay ninguna cuenta con ese correo",209:"Tu sesi\xF3n ha caducado. Vuelve a iniciar sesi\xF3n"}[t];return!s&&t===119&&(s=a?.includes("addField")?"Back4App no deja crear una columna nueva. A\xF1\xE1dela en el panel de Back4App":"Back4App no permite esta operaci\xF3n. Revisa los permisos de la clase"),new e(t,s||a||"Error inesperado del servidor")}static sessionExpired(){return e.fromServer(209)}},ft=class extends Error{constructor(){super("Todav\xEDa no tienes ninguna casa"),this.noHouse=!0}},$t=class extends Error{};function Q(e,t){if(!e)throw new $t(t)}async function at(e,t,{body:a,query:n,authenticated:s=!0,raw:o}={}){let l=new URL(t,Zs);n&&Object.entries(n).forEach(([d,m])=>l.searchParams.set(d,m));let r={"X-Parse-Application-Id":eo,"X-Parse-REST-API-Key":to,"X-Parse-Revocable-Session":"1"},u=H.token();s&&u&&(r["X-Parse-Session-Token"]=u);let h;o?(h=o.data,r["Content-Type"]=o.contentType):a!==void 0&&(h=JSON.stringify(a),r["Content-Type"]="application/json");let g;try{g=await fetch(l,{method:e,headers:r,body:h})}catch{throw new be(100,"Sin conexi\xF3n. Comprueba tu acceso a internet")}let i={},p=await g.text();try{i=p?JSON.parse(p):{}}catch{i={error:p}}if(!g.ok)throw be.fromServer(i.code??-1,i.error||`Error HTTP ${g.status}`);return i}var A={get:(e,t)=>at("GET",e,{query:t}),post:(e,t={},a={})=>at("POST",e,{body:t,...a}),put:(e,t)=>at("PUT",e,{body:t}),async delete(e){try{await at("DELETE",e)}catch(t){if(t.code!==101)throw t}},async query(e,t,{limit:a=1e3,order:n}={}){let s={where:JSON.stringify(t),limit:String(a)};return n&&(s.order=n),(await at("GET",`classes/${e}`,{query:s})).results||[]},uploadFile(e,t,a){return at("POST",`files/${e}`,{raw:{data:t,contentType:a}})}},ee={userPointer:e=>({__type:"Pointer",className:"_User",objectId:e}),publicAcl:()=>({"*":{read:!0,write:!0}}),fileRef:(e,t)=>({__type:"File",name:e,url:t}),date:e=>({__type:"Date",iso:`${e}T12:00:00.000Z`}),instant:e=>({__type:"Date",iso:e.toISOString()}),readDate:e=>e?.iso&&e.iso.length>=10?e.iso.slice(0,10):null,addUnique:(...e)=>({__op:"AddUnique",objects:e}),remove:(...e)=>({__op:"Remove",objects:e})};function ge(e,t=0){let a=typeof e=="number"?e:parseFloat(e);return Number.isFinite(a)?a:t}function nt(e){return typeof e=="string"&&e.trim()&&e!=="null"?e:null}var Me="uds";var Ft="\u{1F372}";var Be=["#2D8CF0","#5B6CF0","#8E5CF0","#E0569B","#EF5A5A","#F08A2D","#1FA971","#14A3B8"];var st=[{key:"BREAKFAST",label:"Desayuno",emoji:"\u{1F373}",icon:"sun"},{key:"LUNCH",label:"Comida",emoji:"\u{1F37D}\uFE0F",icon:"restaurant"},{key:"DINNER",label:"Cena",emoji:"\u{1F319}",icon:"moon"}],Ie=[{key:"mercadona",label:"Mercadona",color:"#1C8B4B",prices:!0},{key:"dia",label:"Dia",color:"#D62B2B",prices:!0,cloud:!0},{key:"lidl",label:"Lidl",color:"#1D5BBF",prices:!1,cloud:!0},{key:"eroski",label:"Eroski",color:"#C8102E",prices:!1,cloud:!0}],Le=e=>Ie.find(t=>t.key===e)||null,Ut=e=>Ie.find(t=>t.label.toLowerCase()===String(e||"").toLowerCase())||null,vt=[{days:null,label:"Sin caducidad"},{days:3,label:"3 d\xEDas"},{days:7,label:"1 semana"},{days:14,label:"2 semanas"},{days:30,label:"1 mes"},{days:90,label:"3 meses"},{days:180,label:"6 meses"},{days:365,label:"1 a\xF1o"}],yn=e=>vt.find(t=>t.days===e)?.label||`${e} d\xEDas`,de=e=>Math.round(e*1e3)/1e3,j={isLow:e=>e.quantity<=e.criticalLimit,amountToBuy:e=>de(Math.max(e.criticalLimit-e.quantity+1,1)),level:e=>Math.min(Math.max(e.quantity/Math.max(e.criticalLimit*2,1),0),1),image:e=>e.photo?.url||e.imageUrl||null,daysUntilExpiry:e=>e.expiresAt?Ye(X(),e.expiresAt):null,expiryStatus(e){let t=j.daysUntilExpiry(e);return t===null?"NONE":t<0?"EXPIRED":t<=3?"SOON":"OK"},needsExpiryAttention:e=>["EXPIRED","SOON"].includes(j.expiryStatus(e)),withQuantity:(e,t)=>({...e,quantity:de(Math.max(t,0))})};function wn(e){let t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${n}`}function Re(e){let[t,a,n]=e.split("-").map(Number);return new Date(t,a-1,n)}var X=()=>wn(new Date);function ce(e,t){let a=Re(e);return a.setDate(a.getDate()+t),wn(a)}function Ye(e,t){return Math.round((e&&t?Re(t)-Re(e):0)/864e5)}var Qe=e=>(Re(e).getDay()+6)%7+1,bt=e=>ce(e,1-Qe(e)),ao=["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"],no=["Lun","Mar","Mi\xE9","Jue","Vie","S\xE1b","Dom"],so=["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],We=e=>ao[e-1],_n=e=>no[e-1],yt=e=>e&&e[0].toUpperCase()+e.slice(1);function fe(e){let t=Re(e);return`${t.getDate()} ${so[t.getMonth()]}`}function Ot(e,t=X()){return ce(t,(e-Qe(t)+7)%7)}function ot(e){if(!(e>=1&&e<=7))return"Sin d\xEDa de compra fijo \xB7 toca para elegir uno";let t=Ye(X(),Ot(e));return t===0?"\xA1Hoy es d\xEDa de compra!":t===1?`Ma\xF1ana (${We(e)}) toca compra`:`Pr\xF3xima compra: ${We(e)} ${fe(Ot(e))} \xB7 dentro de ${t} d\xEDas`}var oo=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}),ro=new Intl.NumberFormat("es-ES",{maximumFractionDigits:2,useGrouping:!1}),ae=e=>oo.format(e||0),K=e=>ro.format(e||0);function we(e){let t=parseFloat(String(e??"").trim().replace(",","."));return Number.isFinite(t)&&t>=0?t:null}var wt=e=>(e||"").split("@")[0]||e;function Ke(e){let t=String(e||"").trim().toLowerCase(),a=0;for(let n=0;n<t.length;n++)a=a*31+t.charCodeAt(n)>>>0;return a%8}function kn(e){let t=String(e||"").trim().split(/\s+/).filter(Boolean);if(!t.length)return"?";let a=t[0];return a.charAt(0).toUpperCase()+(a.charAt(1)||"").toLowerCase()}var ve=e=>e?.nickname?.trim()||wt(e?.email||"")||"?",Cn=e=>ve(e).charAt(0).toUpperCase()||"?",io=[{key:"dry",label:"Secos y despensa",icon:"pantry"},{key:"fresh",label:"Frescos",icon:"leaf"},{key:"frozen",label:"Congelados",icon:"snow"}],Bt=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),lo=["congelad","ultracongel","helado","hielo","polo "],co=["fruta","verdura","hortaliza","ensalada","lechuga","tomate","patata","cebolla","zanahoria","pimiento","pepino","calabac","platano","manzana","naranja","limon","fresa","uva","pera","aguacate","ajo","carne","pollo","pavo","cerdo","ternera","cordero","hamburguesa","salchicha","chorizo","jamon","charcut","fiambre","embutido","pescado","marisco","merluza","salmon","gamba","atun fresco","leche","lacteo","yogur","queso","mantequilla","nata","huevo","kefir","postre","refrigerad","fresco","pan","panaderia","bolleria","masa","tortilla refrigerada","pizza refrigerada","hummus","gazpacho"],uo=["tomate frito","tomate triturado","pan de molde","pan rallado","pan tostado","leche en polvo","patatas fritas","atun en","conserva","lata","en polvo","chips","uht"];function po(e,t=""){let a=`${Bt(e)} ${Bt(t)}`;if(lo.some(s=>a.includes(s)))return"frozen";let n=Bt(t);return uo.some(s=>n.includes(s))?"dry":co.some(s=>new RegExp(`(^|[^a-z])${s}`).test(a))?"fresh":"dry"}var mo=[[["fruta","verdura","lechuga","tomate","patata","cebolla","zanahoria","pimiento","pepino","calabac","platano","manzana","naranja","limon","fresa","aguacate","ajo"],"Fruta y verdura"],[["leche","yogur","queso","mantequilla","nata","huevo"],"L\xE1cteos y huevos"],[["pollo","carne","pavo","cerdo","ternera","hamburguesa","salchicha","jamon","chorizo","fiambre"],"Carne y charcuter\xEDa"],[["pescado","merluza","salmon","gamba","marisco"],"Pescado"],[["pan","bolleria","galleta","cereal"],"Panader\xEDa y desayuno"],[["agua","refresco","zumo","cerveza","vino","cafe","cacao","infusion"],"Bebidas"],[["arroz","pasta","macarr","espagueti","lenteja","garbanzo","alubia","harina","azucar","aceite","sal","vinagre","especia","conserva","atun","tomate frito"],"Despensa"],[["congelad","helado","hielo"],"Congelados"],[["detergente","lejia","suavizante","limpia","friegasuelos","bayeta","estropajo","papel higienico","servilleta","bolsa de basura","pilas"],"Limpieza y hogar"],[["champu","gel","pasta de dientes","desodorante","compresa","cepillo","crema"],"Higiene"]];function ho(e){let t=Bt(e),a=mo.find(([n])=>n.some(s=>new RegExp(`(^|[^a-z])${s}`).test(t)));return a?a[1]:"Otros"}function Sn(e){let t={dry:0,fresh:1,frozen:2},a=new Map;e.forEach(s=>{let o=s.category?.trim()||ho(s.name);a.has(o)||a.set(o,{key:o,items:[],votes:{dry:0,fresh:0,frozen:0}});let l=a.get(o);l.items.push(s),l.votes[po(o,s.name)]++});let n=[...a.values()].map(s=>({key:s.key,items:s.items.sort((o,l)=>o.name.localeCompare(l.name,"es")),storage:Object.entries(s.votes).sort((o,l)=>l[1]-o[1]||t[o[0]]-t[l[0]])[0][0]}));return io.map(s=>({storage:s,groups:n.filter(o=>o.storage===s.key).sort((o,l)=>(o.key==="Otros")-(l.key==="Otros")||o.key.localeCompare(l.key,"es"))})).filter(s=>s.groups.length)}var go=3,bn=e=>{let t=e.map(a=>a.name);return t.length<=1?t.join(""):`${t.slice(0,-1).join(", ")} y ${t[t.length-1]}`};function jt(e){let t=e.filter(r=>r.quantity>0&&r.expiresAt).map(r=>({p:r,days:j.daysUntilExpiry(r)})).filter(r=>r.days>=0&&r.days<=go).sort((r,u)=>r.days-u.days);if(!t.length)return null;let a=t.filter(r=>r.days===0).map(r=>r.p),n=t.filter(r=>r.days===1).map(r=>r.p),s=t.length-a.length-n.length,o=r=>{let u=t.length-r;return u>0?` (y ${u===1?"otro producto caduca":`otros ${u} caducan`} pronto)`:""},l=a.length?a:n;if(l.length){let r=a.length?"hoy":"ma\xF1ana",u=l.length===1;return{level:a.length?"danger":"warning",title:u?`${l[0].name} caduca ${r}`:`${l.length} productos caducan ${r}`,message:`Tienes ${bn(l)} que ${u?"caduca":"caducan"} ${r}, haz algo con ${u?"\xE9l":"ellos"} para no desaprovechar${u?"lo":"los"}${o(l.length)}.`,products:t.map(h=>h.p)}}return{level:"warning",title:s===1?"1 producto caduca pronto":`${s} productos caducan pronto`,message:`Tienes ${s===1?"1 producto que caduca":`${s} productos que caducan`} pronto: ${bn(t.map(r=>r.p))}.`,products:t.map(r=>r.p)}}var c=vn.bind(wa),In="stockcasa.settings",zn={theme:"blue",mode:"light",style:"minimal",sounds:!0,vibration:!0,stores:["mercadona"],defaultExpiry:null,allergens:[]},_t=[{key:"blue",label:"Azul",color:"#2D8CF0",soft:"#E6F2FF"},{key:"red",label:"Rojo",color:"#E5484D",soft:"#FDE8E8"},{key:"green",label:"Verde",color:"#22A06B",soft:"#E2F6EC"},{key:"pink",label:"Rosa",color:"#E8589B",soft:"#FDE7F1"},{key:"purple",label:"Morado",color:"#8B5CF6",soft:"#EEE7FF"}],Ea=[{key:"system",label:"Autom\xE1tico"},{key:"light",label:"Claro"},{key:"dark",label:"Oscuro"}],Wt=[{key:"minimal",label:"Minimalista",description:"Tarjetas blancas que flotan con sombra suave"},{key:"fantasy",label:"Fantas\xEDa",description:"Burbujas de colores y un cielo de estrellitas que flotan"},{key:"paper",label:"Papel",description:"Hoja de libreta escrita a boli"},{key:"brutal",label:"Neo-Brutalismo",description:"Bordes gruesos, sombras duras y colores planos"},{key:"pixel",label:"Pixel art",description:"Como un videojuego de 8 bits: p\xEDxeles y letra retro"}],ne={get(){try{return{...zn,...JSON.parse(localStorage.getItem(In))}}catch{return{...zn}}},set(e){let t={...ne.get(),...e};try{localStorage.setItem(In,JSON.stringify(t))}catch{}return Yt(t),t}},Pn=window.matchMedia?.("(prefers-color-scheme: dark)");function Yt(e=ne.get()){let t=_t.find(o=>o.key===e.theme)||_t[0],a=e.mode==="dark"||e.mode==="system"&&Pn?.matches,n=document.documentElement;n.dataset.theme=t.key,n.dataset.mode=a?"dark":"light";let s=Wt.some(o=>o.key===e.style)?e.style:"minimal";n.dataset.style=s,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a?s==="pixel"?"#141726":"#0E141D":s==="paper"?"#FFFDF6":s==="brutal"?"#FFF3DC":s==="pixel"?"#F3EFD9":t.soft),s==="fantasy"?Mn.start():Mn.stop()}var Mn=(()=>{let e=null,t=null,a=0,n=[],s=[],o=0,l=0,r=0,u=window.matchMedia?.("(prefers-reduced-motion: reduce)");function h(b,k,z,M){let N=document.createElement("canvas"),F=z*1.6;N.width=N.height=Math.ceil(F*2);let D=N.getContext("2d"),C=F,L=D.createRadialGradient(C,C,0,C,C,F);if(L.addColorStop(0,b),L.addColorStop(.25,`${b}88`),L.addColorStop(1,`${b}00`),D.fillStyle=L,D.beginPath(),D.arc(C,C,F,0,Math.PI*2),D.fill(),k==="star"){D.fillStyle=M,D.beginPath();let S=z,T=z*.18;D.moveTo(C,C-S),D.quadraticCurveTo(C+T,C-T,C+S,C),D.quadraticCurveTo(C+T,C+T,C,C+S),D.quadraticCurveTo(C-T,C+T,C-S,C),D.quadraticCurveTo(C-T,C-T,C,C-S),D.fill()}return N}function g(){let b=getComputedStyle(document.documentElement),k=document.documentElement.dataset.mode==="dark",z=[b.getPropertyValue("--primary").trim(),b.getPropertyValue("--primary-light").trim(),"#FFC94D",k?"#FFFFFF":"#FF9CC8"].filter(M=>/^#[0-9a-f]{6}$/i.test(M));z.length<2&&z.push("#8B5CF6","#FFC94D"),s=z.flatMap(M=>[{kind:"dot",img:h(M,"dot",k?3:3.6)},{kind:"star",img:h(M,"star",k?7:8,k?"#FFFFFF":M)}])}function i(b){s.length||g();let k=s[Math.floor(Math.random()*s.length)],z=k.kind==="star";return{sprite:k,x:Math.random()*l,y:b?Math.random()*r:r+20,speed:z?7+Math.random()*9:10+Math.random()*16,sway:6+Math.random()*18,swaySpeed:.2+Math.random()*.5,phase:Math.random()*Math.PI*2,twinkle:.6+Math.random()*1.6,scale:z?.45+Math.random()*.75:.5+Math.random()*.9,spin:z?(Math.random()-.5)*.6:0,angle:Math.random()*Math.PI,alpha:z?.6+Math.random()*.4:.4+Math.random()*.45}}function p(){if(!e)return;let b=Math.min(window.devicePixelRatio||1,2);l=innerWidth,r=innerHeight,e.width=Math.round(l*b),e.height=Math.round(r*b),t.setTransform(b,0,0,b,0,0);let k=Math.round(Math.min(70,Math.max(28,l*r/11e3)));n=Array.from({length:k},()=>i(!0)),d(performance.now(),0)}function d(b,k){let z=b/1e3;t.clearRect(0,0,l,r),n.forEach((M,N)=>{M.y-=M.speed*k,M.angle+=M.spin*k,M.y<-30&&(n[N]=i(!1));let F=M.x+Math.sin(z*M.swaySpeed+M.phase)*M.sway,D=M.sprite.img,C=D.width*M.scale;t.globalAlpha=M.alpha*(.55+.45*Math.sin(z*M.twinkle+M.phase)),M.spin?(t.save(),t.translate(F,M.y),t.rotate(M.angle),t.drawImage(D,-C/2,-C/2,C,C),t.restore()):t.drawImage(D,F-C/2,M.y-C/2,C,C)}),t.globalAlpha=1}function m(b){let k=Math.min((b-o)/1e3,.05);o=b,d(b,k),a=requestAnimationFrame(m)}function $(){cancelAnimationFrame(a),!(!e||document.hidden||u?.matches)&&(o=performance.now(),a=requestAnimationFrame(m))}return document.addEventListener("visibilitychange",()=>document.hidden?cancelAnimationFrame(a):$()),window.addEventListener("resize",()=>e&&p()),{start(){e||(e=document.createElement("canvas"),e.className="sky",e.setAttribute("aria-hidden","true"),document.body.prepend(e),t=e.getContext("2d")),requestAnimationFrame(()=>{g(),p(),$()})},stop(){cancelAnimationFrame(a),e?.remove(),e=null}}})();Pn?.addEventListener?.("change",()=>Yt());var qn={tap:.3,pop:.6,up:.45,down:.45,check:.55,swipe:.5,success:.6,error:.5},fo={tap:8,pop:15,up:6,down:6,check:[10,40,18],swipe:15,success:[12,50,25],error:[30,60,30]},Vt=null,Tn={};function Nn(){if(!Vt){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;Vt=new e,Object.keys(qn).forEach(async t=>{try{let a=await(await fetch(`sounds/sfx_${t}.wav`)).arrayBuffer();Tn[t]=await Vt.decodeAudioData(a)}catch{}})}return Vt}document.addEventListener("pointerdown",()=>Nn()?.resume?.(),{capture:!0});function P(e){let{sounds:t,vibration:a}=ne.get();if(t){let n=Nn(),s=Tn[e];if(n&&s){let o=n.createBufferSource(),l=n.createGain();l.gain.value=qn[e]??.5,o.buffer=s,o.connect(l).connect(n.destination),o.start()}}a&&navigator.vibrate&&navigator.vibrate(fo[e]??10)}function f({name:e,size:t=22,class:a=""}){let n=za[e];return n?c`<svg class=${`icon ${a}`} width=${t} height=${t} viewBox=${`0 0 ${n.vb} ${n.vb}`} aria-hidden="true">
    ${n.d.map(s=>c`<path d=${s} fill="currentColor" fill-rule=${n.rule||"nonzero"} />`)}
  </svg>`:null}function Je({profile:e,size:t=40}){let a=`width:${t}px;height:${t}px;font-size:${Math.round(t*.42)}px;background:${e?.avatarColor||"#2D8CF0"}`;return c`<span class="avatar" style=${a} title=${ve(e)}>
    ${e?.avatar?.url?c`<img src=${e.avatar.url} alt="" loading="lazy" />`:Cn(e)}
  </span>`}function re({url:e,name:t="",size:a=52,icon:n}){let[s,o]=_(!1);V(()=>o(!1),[e]);let l=e&&!s;return c`<span class=${`thumb ${l?"":`mono tone-${Ke(t)}`}`} style=${`width:${a}px;height:${a}px;font-size:${Math.round(a*.36)}px`}>
    ${l?c`<img src=${e} alt="" loading="lazy" onError=${()=>o(!0)} />`:n?c`<${f} name=${n} size=${Math.round(a*.46)} />`:kn(t)}
  </span>`}var xn={pantry:c`<g><rect x="22" y="70" width="76" height="6" rx="3" class="art-line" /><rect x="30" y="34" width="22" height="36" rx="6" class="art-fill" /><rect x="33" y="28" width="16" height="7" rx="2" class="art-line" /><rect x="58" y="44" width="16" height="26" rx="5" class="art-soft" /><circle cx="86" cy="60" r="10" class="art-fill2" /><path d="M86 50c2-5 6-6 8-6" class="art-stroke" /></g>`,cart:c`<g><path d="M18 26h12l10 38h46l8-28H36" class="art-stroke" /><circle cx="46" cy="76" r="6" class="art-fill" /><circle cx="80" cy="76" r="6" class="art-fill" /><path d="M52 44l8 8 16-16" class="art-stroke accent" /></g>`,recipes:c`<g><path d="M26 48h68v10a22 22 0 0 1-22 22H48a22 22 0 0 1-22-22z" class="art-fill" /><rect x="20" y="44" width="80" height="8" rx="4" class="art-line" /><path d="M48 34c0-6 6-6 6-12M62 34c0-6 6-6 6-12" class="art-stroke accent" /></g>`,search:c`<g><circle cx="54" cy="46" r="20" class="art-soft" /><circle cx="54" cy="46" r="20" class="art-stroke" /><path d="M69 61l16 16" class="art-stroke thick" /></g>`,done:c`<g><circle cx="60" cy="50" r="28" class="art-fill" /><path d="M47 51l9 9 18-19" class="art-stroke white thick" /><path d="M24 22l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM96 66l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" class="art-spark" /></g>`,receipt:c`<g><path d="M36 18h48v66l-8-5-8 5-8-5-8 5-8-5-8 5z" class="art-soft" /><path d="M36 18h48v66l-8-5-8 5-8-5-8 5-8-5-8 5z" class="art-stroke" /><path d="M46 36h28M46 48h28M46 60h16" class="art-stroke accent" /></g>`};function _e({name:e}){return c`<svg class="empty-art" viewBox="0 0 120 96" aria-hidden="true">${xn[e]||xn.search}</svg>`}var Xe=null,En=null;function O(e,t){Xe||(Xe=document.createElement("div"),Xe.className="toast-host",document.body.appendChild(Xe)),clearTimeout(En),Ve(c`<div class="toast" key=${Date.now()}>
    <span>${e}</span>
    ${t&&c`<button class="toast-action" onClick=${()=>{Ve(null,Xe),t.run()}}>${t.label}</button>`}
  </div>`,Xe),En=setTimeout(()=>Ve(null,Xe),t?4500:2600)}var Hn=null;function Dn(e){Hn=e}function pe(e){if((e?.noHouse||e instanceof be&&e.isSessionExpired)&&(Hn?.(e),e.noHouse))return;P("error");let t=e instanceof be||e instanceof $t;t||console.error(e),O(t?e.message:"Ha ocurrido un error inesperado. Int\xE9ntalo de nuevo")}async function B(e,{loading:t=!0,onError:a=pe}={}){t&&An.show();try{return await e()}catch(n){a(n);return}finally{t&&An.hide()}}var An={count:0,el:null,show(){this.count++,this.el||(this.el=document.createElement("div"),this.el.className="loading",this.el.innerHTML='<div class="spinner"></div>',document.body.appendChild(this.el)),clearTimeout(this.timer),this.timer=setTimeout(()=>this.el.classList.add("visible"),180)},hide(){this.count=Math.max(0,this.count-1),this.count===0&&this.el&&(clearTimeout(this.timer),this.el.classList.remove("visible"))}},Gt=null,rt=[];function Rn(){Gt||(Gt=document.createElement("div"),document.body.appendChild(Gt)),Ve(c`${rt.map(e=>c`<${$o} key=${e.id} layer=${e} />`)}`,Gt),document.body.classList.toggle("has-layer",rt.length>0)}function $o({layer:e}){let[t,a]=_(!1);e.setClosing=a;let n=e.component;return c`<div class=${`layer ${e.kind} ${t?"closing":""}`}>
    <div class="scrim" onClick=${()=>e.dismissible&&Ln(e)}></div>
    <div class="panel" role="dialog" aria-modal="true">
      ${e.kind==="sheet"&&c`<div class="handle"></div>`}
      <${n} ...${e.props} close=${s=>Ln(e,s)} />
    </div>
  </div>`}var vo=1;function Qt(e,t,a={},n=!0){return new Promise(s=>{let o={id:vo++,kind:e,component:t,props:a,dismissible:n,resolve:s};rt.push(o),Rn()})}function Ln(e,t){rt.includes(e)&&(e.setClosing?.(!0),setTimeout(()=>{let a=rt.indexOf(e);a>=0&&rt.splice(a,1),Rn(),e.resolve(t)},220))}var G=(e,t)=>Qt("sheet",e,t);function bo({title:e,message:t,confirm:a="Aceptar",cancel:n="Cancelar",danger:s,close:o}){return c`<div class="dialog-body">
    <h2>${e}</h2>
    ${t&&c`<p class="muted pre">${t}</p>`}
    <div class="dialog-actions">
      ${n&&c`<button class="btn text" onClick=${()=>o(!1)}>${n}</button>`}
      <button class=${`btn ${s?"danger":"primary"}`} onClick=${()=>o(!0)}>${a}</button>
    </div>
  </div>`}var $e=e=>Qt("dialog",bo,e);function yo({title:e,message:t,label:a,value:n="",type:s="text",inputMode:o,confirm:l="Guardar",suffix:r,maxLength:u,close:h}){let[g,i]=_(String(n)),p=W();return V(()=>{setTimeout(()=>{p.current?.focus(),p.current?.select()},250)},[]),c`<form class="dialog-body" onSubmit=${m=>{m.preventDefault(),h(g)}}>
    <h2>${e}</h2>
    ${t&&c`<p class="muted">${t}</p>`}
    <label class="field">
      <span>${a}</span>
      <div class="field-row">
        <input ref=${p} type=${s} inputmode=${o} value=${g} maxlength=${u}
          onInput=${m=>i(m.target.value)} />
        ${r&&c`<span class="suffix">${r}</span>`}
      </div>
    </label>
    <div class="dialog-actions">
      <button type="button" class="btn text" onClick=${()=>h(null)}>Cancelar</button>
      <button type="submit" class="btn primary">${l}</button>
    </div>
  </form>`}var ue=e=>Qt("dialog",yo,e);function wo({title:e,options:t,close:a}){return c`<div class="dialog-body">
    <h2>${e}</h2>
    <div class="choices">
      ${t.map((n,s)=>c`<button class=${`choice ${n.danger?"danger-text":""}`} onClick=${()=>a(s)}>
        ${n.icon&&c`<span class="choice-icon"><${f} name=${n.icon} size=${20} /></span>`}
        <span class="grow min0">${n.label}${n.hint&&c`<span class="muted small block">${n.hint}</span>`}</span>
      </button>`)}
    </div>
    <div class="dialog-actions"><button class="btn text" onClick=${()=>a(null)}>Cancelar</button></div>
  </div>`}var Ze=(e,t)=>Qt("dialog",wo,{title:e,options:t});function it(){let e=document.createElement("canvas");e.className="confetti",document.body.appendChild(e);let t=e.getContext("2d"),a=window.devicePixelRatio||1;e.width=innerWidth*a,e.height=innerHeight*a,t.scale(a,a);let n=[getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#2D8CF0","#7CC0FF","#FFC94D","#FF7A90","#38D39F"],s=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.35,vx:(Math.random()-.5)*13,vy:-Math.random()*14-4,size:5+Math.random()*6,rotation:Math.random()*Math.PI,spin:(Math.random()-.5)*.3,color:n[Math.floor(Math.random()*n.length)],star:document.documentElement.dataset.style==="fantasy"&&Math.random()<.4})),o=performance.now();(function l(r){let u=r-o;t.clearRect(0,0,innerWidth,innerHeight),s.forEach(h=>{if(h.vy+=.35,h.vx*=.99,h.x+=h.vx,h.y+=h.vy,h.rotation+=h.spin,t.save(),t.globalAlpha=Math.max(0,1-u/2600),t.translate(h.x,h.y),t.rotate(h.rotation),t.fillStyle=h.color,h.star){let g=h.size*1.3,i=g*.22;t.beginPath(),t.moveTo(0,-g),t.quadraticCurveTo(i,-i,g,0),t.quadraticCurveTo(i,i,0,g),t.quadraticCurveTo(-i,i,-g,0),t.quadraticCurveTo(-i,-i,0,-g),t.fill()}else t.fillRect(-h.size/2,-h.size/3,h.size,h.size*.66);t.restore()}),u<2600?requestAnimationFrame(l):e.remove()})(o)}function Pe(e){e?.animate?.([{transform:"scale(1)"},{transform:"scale(1.25)"},{transform:"scale(1)"}],{duration:320,easing:"cubic-bezier(.3,1.6,.5,1)"})}function Bn(e){e?.animate?.([0,-10,10,-7,7,-3,0].map(t=>({transform:`translateX(${t}px)`})),{duration:420})}async function lt(e,t=1080){let n=await createImageBitmap(e,{imageOrientation:"from-image"}).catch(()=>null)||await new Promise((u,h)=>{let g=new Image;g.onload=()=>u(g),g.onerror=h,g.src=URL.createObjectURL(e)}),s=n.width,o=n.height,l=Math.min(1,t/Math.max(s,o)),r=document.createElement("canvas");return r.width=Math.round(s*l),r.height=Math.round(o*l),r.getContext("2d").drawImage(n,0,0,r.width,r.height),new Promise(u=>r.toBlob(u,"image/jpeg",.82))}function ct({onDelete:e,label:t="Eliminar",children:a,class:n="",style:s}){let o=W(),l=W(),r=W(null),u=W(!1),h=(d,m)=>{let $=l.current;if(!$)return;$.style.transition=m?"transform .28s cubic-bezier(.2,.8,.2,1)":"none",$.style.transform=d?`translateX(${d}px)`:"",o.current.dataset.side=d>0?"right":d<0?"left":"";let b=Math.min(Math.abs(d)/(o.current.offsetWidth*.4),1);o.current.style.setProperty("--swipe",b.toFixed(3))},g=d=>{d.button>0||(r.current={x:d.clientX,y:d.clientY,t:performance.now(),dx:0,active:!1,id:d.pointerId})},i=d=>{let m=r.current;if(!m||m.id!==d.pointerId)return;let $=d.clientX-m.x,b=d.clientY-m.y;if(!m.active){if(Math.abs(b)>10&&Math.abs(b)>Math.abs($)){r.current=null;return}if(Math.abs($)<12)return;m.active=!0,o.current.setPointerCapture?.(d.pointerId),o.current.dispatchEvent(new CustomEvent("swipestart",{bubbles:!1}))}m.dx=$,h($,!1)},p=d=>{let m=r.current;if(r.current=null,!m||!m.active)return;if(d.type==="pointercancel"){h(0,!0);return}u.current=!0,setTimeout(()=>u.current=!1,50);let $=o.current.offsetWidth,b=Math.abs(m.dx)/Math.max(performance.now()-m.t,1);Math.abs(m.dx)>$*.4||b>.6&&Math.abs(m.dx)>60?(P("swipe"),h(Math.sign(m.dx)*$*1.1,!0),o.current.classList.add("collapsing"),setTimeout(()=>e(),260)):h(0,!0)};return c`<div ref=${o} class=${`swipe ${n}`} style=${s}
    onPointerDown=${g} onPointerMove=${i} onPointerUp=${p} onPointerCancel=${p}
    onClickCapture=${d=>{u.current&&(d.stopPropagation(),d.preventDefault())}}>
    <div class="swipe-bg" aria-hidden="true">
      <span class="swipe-label left"><${f} name="delete" size=${20} /> ${t}</span>
      <span class="swipe-label right">${t} <${f} name="delete" size=${20} /></span>
    </div>
    <div ref=${l} class="swipe-content">${a}</div>
  </div>`}var xa=new Set,Y={emit:e=>xa.forEach(t=>t(e)),on(e){return xa.add(e),()=>xa.delete(e)}};function xe(e){let t=W(e);t.current=e,V(()=>Y.on(a=>t.current(a)),[])}var _o=e=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(e.replace(/ /g,"_"))}?width=800`,ko=e=>`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(e.replace(/ /g,"_"))}`,q=(e,t,a,...n)=>({name:e,quantity:t,unit:a,keywords:n.length?n:[e.toLowerCase()]}),Co=[{id:"tortilla",name:"Tortilla de patatas",meal:"Comida",minutes:40,servings:4,file:"Tortilla de patata - San Sebasti\xE1n.jpg",ingredients:[q("Huevos",6,"uds","huevo"),q("Patatas",.7,"kg","patata"),q("Cebolla",1,"uds","cebolla"),q("Aceite de oliva",.2,"L","aceite"),q("Sal",1,"pizca","sal")],steps:["Pela las patatas y la cebolla. Corta las patatas en l\xE1minas finas y la cebolla en juliana.","Pocha las patatas y la cebolla en abundante aceite a fuego medio-bajo unos 20 minutos, sin que se doren.","Esc\xFArrelas bien y guarda el aceite para otra vez.","Bate los huevos con sal, mezcla con las patatas y deja reposar 5 minutos.","Cuaja la mezcla en una sart\xE9n con un poco de aceite, 3 minutos por cada lado. Ay\xFAdate de un plato para darle la vuelta."]},{id:"macarrones",name:"Macarrones con tomate",meal:"Comida",minutes:25,servings:4,file:"Macarrones con salsa de tomate frito (Espa\xF1a).jpg",ingredients:[q("Macarrones",400,"g","macarr","pasta"),q("Tomate frito",400,"g","tomate frito"),q("Cebolla",1,"uds","cebolla"),q("Chorizo",100,"g","chorizo"),q("Queso rallado",80,"g","queso rallado","rallado")],steps:["Cuece los macarrones en agua con sal el tiempo que diga el paquete.","Mientras, sofr\xEDe la cebolla picada y el chorizo en dados durante 5 minutos.","A\xF1ade el tomate frito y deja que se haga a fuego suave 5 minutos m\xE1s.","Escurre la pasta, m\xE9zclala con la salsa y sirve con el queso rallado por encima."]},{id:"lentejas",name:"Lentejas estofadas",meal:"Comida",minutes:60,servings:4,file:"Lentejas estilo de la abuela.jpg",ingredients:[q("Lentejas",400,"g","lenteja"),q("Chorizo",150,"g","chorizo"),q("Zanahoria",2,"uds","zanahoria"),q("Patatas",.3,"kg","patata"),q("Cebolla",1,"uds","cebolla"),q("Piment\xF3n",1,"cucharadita","piment\xF3n","pimenton")],steps:["Pon las lentejas en remojo 1 hora si no son de cocci\xF3n r\xE1pida.","Sofr\xEDe la cebolla y la zanahoria picadas. A\xF1ade el chorizo en rodajas y el piment\xF3n.","Echa las lentejas escurridas y cubre con agua fr\xEDa.","Cuando hierva, baja el fuego y cuece 30 minutos.","A\xF1ade la patata cascada y cuece 15 minutos m\xE1s. Prueba de sal y deja reposar 5 minutos."]},{id:"gazpacho",name:"Gazpacho",meal:"Comida",minutes:15,servings:4,file:"Gazpacho Cazuela Barro.jpg",ingredients:[q("Tomates maduros",1,"kg","tomate"),q("Pepino",1,"uds","pepino"),q("Pimiento verde",1,"uds","pimiento"),q("Ajo",1,"diente","ajo"),q("Aceite de oliva",.08,"L","aceite"),q("Vinagre",2,"cucharadas","vinagre"),q("Pan del d\xEDa anterior",50,"g","pan")],steps:["Lava y trocea los tomates, el pepino pelado, el pimiento y el ajo.","Tritura todo con el pan remojado, el vinagre y sal hasta que quede fino.","A\xF1ade el aceite poco a poco mientras sigues triturando para que emulsione.","Cuela si lo quieres m\xE1s fino y enfr\xEDalo en la nevera al menos 1 hora."]},{id:"pollo-horno",name:"Pollo al horno con patatas",meal:"Comida",minutes:75,servings:4,file:"Roasted chicken and potatoes.JPG",ingredients:[q("Pollo troceado",1.2,"kg","pollo"),q("Patatas",.8,"kg","patata"),q("Cebolla",1,"uds","cebolla"),q("Lim\xF3n",1,"uds","lim\xF3n","limon"),q("Ajo",4,"dientes","ajo"),q("Aceite de oliva",.05,"L","aceite")],steps:["Precalienta el horno a 200 \xB0C.","Corta las patatas en rodajas gruesas y la cebolla en tiras. Ponlas en la bandeja con sal y un chorro de aceite.","Coloca el pollo encima con sal, pimienta, los ajos machacados y el zumo del lim\xF3n.","Hornea 60 minutos, dando la vuelta al pollo a mitad de tiempo y reg\xE1ndolo con su jugo."]},{id:"arroz-cubana",name:"Arroz a la cubana",meal:"Comida",minutes:25,servings:2,file:"Arroz a la cubana.jpg",ingredients:[q("Arroz",200,"g","arroz"),q("Huevos",2,"uds","huevo"),q("Tomate frito",200,"g","tomate frito"),q("Pl\xE1tano",2,"uds","pl\xE1tano","platano"),q("Aceite de oliva",.1,"L","aceite")],steps:["Cuece el arroz en agua con sal unos 18 minutos y esc\xFArrelo.","Calienta el tomate frito.","Fr\xEDe los pl\xE1tanos partidos a lo largo y despu\xE9s los huevos.","Sirve el arroz con un molde o una taza, con el tomate, el huevo y el pl\xE1tano al lado."]},{id:"crema-calabacin",name:"Crema de calabac\xEDn",meal:"Cena",minutes:30,servings:4,file:"Crema de calabac\xEDn con tropezones.jpg",ingredients:[q("Calabacines",3,"uds","calabac"),q("Patata",1,"uds","patata"),q("Cebolla",1,"uds","cebolla"),q("Quesitos",4,"uds","quesito"),q("Aceite de oliva",.03,"L","aceite")],steps:["Pocha la cebolla picada en una olla con un poco de aceite.","A\xF1ade el calabac\xEDn y la patata troceados, cubre justo con agua y sal.","Cuece 20 minutos a fuego medio.","Tritura con los quesitos hasta que quede una crema fina. Corrige de sal."]},{id:"ensalada",name:"Ensalada mixta",meal:"Cena",minutes:15,servings:2,file:"Ensalada mixta.jpg",ingredients:[q("Lechuga",1,"uds","lechuga"),q("Tomates",2,"uds","tomate"),q("At\xFAn",2,"latas","at\xFAn","atun"),q("Huevos",2,"uds","huevo"),q("Cebolla",.5,"uds","cebolla"),q("Aceite de oliva",.03,"L","aceite")],steps:["Cuece los huevos 10 minutos, enfr\xEDalos y p\xE9lalos.","Lava y corta la lechuga, los tomates en gajos y la cebolla en aros finos.","Monta la ensalada y a\xF1ade el at\xFAn escurrido y los huevos en cuartos.","Ali\xF1a con aceite, vinagre y sal justo antes de servir."]},{id:"huevos-rotos",name:"Huevos rotos con jam\xF3n",meal:"Cena",minutes:30,servings:2,file:"Huevos rotos con jam\xF3n.jpg",ingredients:[q("Patatas",.5,"kg","patata"),q("Huevos",4,"uds","huevo"),q("Jam\xF3n serrano",100,"g","jam\xF3n","jamon"),q("Aceite de oliva",.3,"L","aceite")],steps:["Corta las patatas en bastones y fr\xEDelas en aceite abundante hasta que est\xE9n doradas.","Esc\xFArrelas, ponlas en una fuente y s\xE1lalas.","Fr\xEDe los huevos dejando la yema l\xEDquida.","Pon los huevos y el jam\xF3n sobre las patatas y r\xF3mpelos en la mesa."]},{id:"carbonara",name:"Espaguetis a la carbonara",meal:"Comida",minutes:20,servings:2,file:"Espaguetis carbonara.jpg",ingredients:[q("Espaguetis",200,"g","espagueti","spaghetti","pasta"),q("Bacon",100,"g","bacon","panceta"),q("Huevos",2,"uds","huevo"),q("Queso parmesano",50,"g","parmesano","queso")],steps:["Cuece la pasta en agua con sal.","Dora el bacon en tiras en una sart\xE9n sin aceite.","Bate los huevos con el queso rallado y pimienta.","Escurre la pasta (guarda un poco de agua) y m\xE9zclala fuera del fuego con el bacon y el huevo, a\xF1adiendo agua de cocci\xF3n hasta que quede cremosa."]},{id:"pan-tomate",name:"Tostadas con tomate",meal:"Desayuno",minutes:10,servings:2,file:"Pan tostado con tomate de colgar, aceite de oliva y sal.jpg",ingredients:[q("Pan",4,"rebanadas","pan"),q("Tomate",2,"uds","tomate"),q("Aceite de oliva",.02,"L","aceite")],steps:["Tuesta el pan.","Ralla los tomates y desecha la piel.","Unta el tomate sobre el pan, a\xF1ade un chorrito de aceite y una pizca de sal."]},{id:"yogur-muesli",name:"Yogur con muesli y pl\xE1tano",meal:"Desayuno",minutes:5,servings:1,file:"Muesli.jpg",ingredients:[q("Yogur natural",2,"uds","yogur"),q("Muesli",40,"g","muesli","cereal","avena"),q("Pl\xE1tano",1,"uds","pl\xE1tano","platano")],steps:["Pon el yogur en un bol.","A\xF1ade el muesli por encima.","Corta el pl\xE1tano en rodajas y rep\xE1rtelo por el bol."]},{id:"pisto",name:"Pisto",meal:"Cena",minutes:45,servings:4,file:"Pisto manchego.jpg",ingredients:[q("Calabac\xEDn",1,"uds","calabac"),q("Pimiento rojo",1,"uds","pimiento"),q("Pimiento verde",1,"uds","pimiento"),q("Cebolla",1,"uds","cebolla"),q("Tomate triturado",400,"g","tomate triturado","tomate"),q("Aceite de oliva",.05,"L","aceite")],steps:["Pica la cebolla y los pimientos en dados y p\xF3chalos a fuego suave 15 minutos.","A\xF1ade el calabac\xEDn en dados y cocina 10 minutos m\xE1s.","Echa el tomate triturado, sal y una pizca de az\xFAcar.","Deja que se haga 15 minutos removiendo de vez en cuando. Est\xE1 muy rico con un huevo frito."]},{id:"merluza-verde",name:"Merluza en salsa verde",meal:"Cena",minutes:25,servings:4,file:"Merluza (salsa verde).jpg",ingredients:[q("Merluza en rodajas",.8,"kg","merluza"),q("Ajo",3,"dientes","ajo"),q("Perejil",1,"manojo","perejil"),q("Harina",1,"cucharada","harina"),q("Aceite de oliva",.06,"L","aceite")],steps:["Dora los ajos picados en una cazuela con el aceite, sin que se quemen.","A\xF1ade la harina, remueve 1 minuto y vierte un vaso de agua o caldo de pescado.","Coloca la merluza salada y mueve la cazuela en vaiv\xE9n para que la salsa ligue.","Cuece 5 minutos por cada lado y termina con mucho perejil picado."]}],Kt=Co.map(e=>({...e,photoUrl:_o(e.file),photoSource:ko(e.file)})),So={uds:"uds",ud:"uds",unidad:"uds",unidades:"uds",u:"uds",g:"g",gr:"g",gramos:"g",kg:"kg",kilo:"kg",kilos:"kg",l:"L",litro:"L",litros:"L",ml:"ml"},On=e=>So[String(e||"").trim().toLowerCase()]||String(e||"").trim().toLowerCase();function Xt(e,t,a){let n=On(t),s=On(a);return n===s?e:n==="g"&&s==="kg"?e/1e3:n==="kg"&&s==="g"?e*1e3:n==="ml"&&s==="L"?e/1e3:n==="L"&&s==="ml"?e*1e3:null}var Io=["frito","frita","triturado","rallado","rallada","salsa","zumo","polvo","concentrado","mermelada","caldo","sopa","crema","helado","chips"],Aa=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");function La(e,t){let a=e.keywords.map(Aa),n=Aa(e.name),s=t.filter(o=>{let l=Aa(o.name).split(/[^a-z0-9ñ]+/).filter(Boolean),r=l.join(" ");return Io.some(u=>l.includes(u)&&!n.includes(u))?!1:a.some(u=>u.includes(" ")?` ${r} `.includes(` ${u}`):l.some(h=>h.startsWith(u)&&(u.length>=4||h.length<=u.length+1)))});return s.find(o=>Xt(e.quantity,e.unit,o.unit)!==null)||s[0]||null}var et=[{key:"gluten",label:"Gluten",off:["en:gluten"],words:["pan","harina","pasta","macarr","espagueti","fideo","galleta","cereal","trigo","cebada","centeno","avena","cerveza","bizcocho","magdalena","croissant","pizza","empanad","rebozad","empanado","cuscus","seitan","bolleria","tostada","lasana","canelon","masa"],free:["sin gluten","gluten free"]},{key:"milk",label:"Lactosa / leche",off:["en:milk"],words:["leche","lacteo","queso","yogur","nata","mantequilla","kefir","batido","flan","natillas","cuajada","helado","bechamel","mozzarella","parmesano","requeson"],free:["sin lactosa","vegetal","de avena","de soja","de almendra","de coco","de arroz"]},{key:"eggs",label:"Huevo",off:["en:eggs"],words:["huevo","tortilla","mayonesa","merengue","flan","bizcocho","magdalena"],free:["sin huevo"]},{key:"fish",label:"Pescado",off:["en:fish"],words:["pescado","atun","merluza","salmon","bacalao","sardina","anchoa","boqueron","lubina","dorada","surimi","caballa","bonito"],free:[]},{key:"crustaceans",label:"Crust\xE1ceos",off:["en:crustaceans"],words:["gamba","langostino","cigala","cangrejo","bogavante","marisco","carabinero"],free:[]},{key:"molluscs",label:"Moluscos",off:["en:molluscs"],words:["mejillon","almeja","calamar","sepia","pulpo","berberecho","chipiron","navaja","ostra","marisco"],free:[]},{key:"peanuts",label:"Cacahuete",off:["en:peanuts"],words:["cacahuete","mani"],free:[]},{key:"nuts",label:"Frutos de c\xE1scara",off:["en:nuts"],words:["almendra","nuez","nueces","avellana","anacardo","pistacho","pinon","macadamia","turron","frutos secos","nocilla","praline"],free:[]},{key:"soy",label:"Soja",off:["en:soybeans"],words:["soja","tofu","edamame","tempeh","miso"],free:[]},{key:"sesame",label:"S\xE9samo",off:["en:sesame-seeds"],words:["sesamo","tahini","hummus"],free:[]},{key:"celery",label:"Apio",off:["en:celery"],words:["apio"],free:[]},{key:"mustard",label:"Mostaza",off:["en:mustard"],words:["mostaza"],free:[]},{key:"sulphites",label:"Sulfitos",off:["en:sulphur-dioxide-and-sulphites"],words:["vino","vinagre","sidra","cava"],free:[]},{key:"lupin",label:"Altramuces",off:["en:lupin"],words:["altramuz","altramuces"],free:[]}],zo=e=>et.find(t=>t.key===e)||null,Fn=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Mo=(e,t)=>new RegExp(t.length<=4?`(^|[^a-z])${t}(e?s)?([^a-z]|$)`:`(^|[^a-z])${t}`).test(e),xo=["dientes","champu","detergente","suavizante","lejia","jabon","gel de","crema de manos","colonia","pienso","mascota"];function kt(e,t=""){let a=Fn(e),n=Fn(t);if(xo.some(l=>`${a} ${n}`.includes(l)))return[];let s=l=>et.filter(r=>!r.free.some(u=>a.includes(u))&&r.words.some(u=>Mo(l,u))).map(r=>r.key),o=s(a);return o.length||!n||/\sy\s|,/.test(n)?o:s(n)}var Un=(e=[])=>et.filter(t=>t.off.some(a=>e.includes(a))).map(t=>t.key);function Ct(e){return Array.isArray(e?.allergens)&&e.allergens.length?e.allergens.filter(t=>t!=="none"):kt(e?.name,e?.category)}var Oe=(e,t)=>t?.length?e.filter(a=>t.includes(a)):[],Ee=e=>e.map(t=>zo(t)?.label||t);function St(e){if(e.product)return Ct(e.product);let t=e.ingredient?.option,a=kt(e.ingredient?.name||"");return t?[...new Set([...a,...kt(t.name,t.category)])]:a}var Zt=28;function Jt(e){return String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\b\d+([.,]\d+)?\s*(kg|g|gr|l|ml|cl|uds?|u|x)\b/g," ").replace(/[^a-z0-9ñ ]/g," ").replace(/\s+/g," ").trim()}var Eo=e=>{let t=[...e].sort((a,n)=>a-n);return t.length?t[Math.floor(t.length/2)]:0};function jn({tickets:e,consumed:t=new Map,prods:a=[],pending:n=[],today:s}){let o=new Map;e.forEach(i=>i.items.forEach(p=>{let d=Jt(p.name);if(!d)return;o.has(d)||o.set(d,{key:d,name:p.name,unit:p.unit,buys:[]}),o.get(d).buys.push({date:i.date,quantity:p.quantity,cost:p.price!=null?p.price*p.quantity:null})}));let l=new Map(a.map(i=>[Jt(i.name),i])),r=new Set(n.map(i=>i.productId).filter(Boolean)),u=new Set(n.map(i=>Jt(i.name))),h=[...o.values()].map(i=>{let p=[...new Set(i.buys.map(k=>k.date))].sort(),d=p.slice(1).map((k,z)=>Ye(p[z],k)).filter(k=>k>0),m=l.get(i.key)||null,$=m?(t.get(m.id)||0)/Zt:0,b=p[p.length-1];return{key:i.key,name:m?.name||i.name,unit:m?.unit||i.unit,times:p.length,dates:p,lastDate:b,daysSince:Ye(b,s),every:d.length?Math.max(1,Math.round(d.reduce((k,z)=>k+z,0)/d.length)):null,typical:de(Eo(i.buys.map(k=>k.quantity))||1),spent:i.buys.reduce((k,z)=>k+(z.cost||0),0),product:m,rate:$,daysLeft:m&&$>0?Math.floor(m.quantity/$):null}}).sort((i,p)=>p.times-i.times||p.spent-i.spent||i.name.localeCompare(p.name,"es"));a.forEach(i=>{let p=Jt(i.name);if(o.has(p))return;let d=(t.get(i.id)||0)/Zt;d<=0||h.push({key:p,name:i.name,unit:i.unit,times:0,dates:[],lastDate:null,daysSince:null,every:null,typical:j.amountToBuy(i),spent:0,product:i,rate:d,daysLeft:Math.floor(i.quantity/d)})});let g=[];return h.forEach(i=>{let p=i.product;if(p?j.isLow(p)||r.has(p.id):u.has(i.key))return;let d=null,m=0;i.daysLeft!==null&&i.daysLeft<=4?(d=i.daysLeft<=0?"Se acaba hoy a este ritmo":i.daysLeft===1?"Se acabar\xE1 ma\xF1ana a este ritmo":`Se acabar\xE1 en unos ${i.daysLeft} d\xEDas`,m=10-i.daysLeft):i.every&&i.times>=2&&i.daysSince>=i.every-1&&(d=`Sueles comprarlo cada ${i.every===1?"d\xEDa":`${i.every} d\xEDas`} (\xFAltima vez hace ${i.daysSince===0?"hoy":i.daysSince===1?"1 d\xEDa":`${i.daysSince} d\xEDas`})`,m=5+(i.daysSince-i.every)/i.every),d&&g.push({entry:i,product:p,quantity:i.typical||1,unit:i.unit,reason:d,urgency:m})}),g.sort((i,p)=>p.urgency-i.urgency),{entries:h,suggestions:g}}function Ra(){let e=Promise.resolve();return t=>{let a=e.then(t,t);return e=a.catch(()=>{}),a}}var Pa=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Ne=6;function Vn(e,t){return{userId:e.objectId,email:e.email||t,sessionToken:e.sessionToken}}var He={isLoggedIn:()=>!!H.current(),async login(e,t){e=e.trim(),Q(Pa.test(e),"Introduce un correo v\xE1lido"),Q(t.length>=Ne,`La contrase\xF1a debe tener al menos ${Ne} caracteres`);let a;try{a=await A.post("login",{username:e,password:t},{authenticated:!1})}catch(n){throw n.code===101?new be(101,"Correo o contrase\xF1a incorrectos"):n}H.save(Vn(a,e))},async register(e,t,a,n){e=e.trim(),t=t.trim(),Q(e,"Escribe c\xF3mo quieres que te llamen"),Q(e.length<=24,`El apodo no puede superar ${24} caracteres`),Q(Pa.test(t),"Introduce un correo v\xE1lido"),Q(a.length>=Ne,`La contrase\xF1a debe tener al menos ${Ne} caracteres`),Q(a===n,"Las contrase\xF1as no coinciden");let s=await A.post("users",{username:t,email:t,password:a,nickname:e},{authenticated:!1});H.save(Vn(s,t))},async resetPassword(e){e=e.trim(),Q(Pa.test(e),"Introduce un correo v\xE1lido"),await A.post("requestPasswordReset",{email:e},{authenticated:!1})},async logout(){try{await A.post("logout")}catch{}H.clear(),ke.clearCache()}};function Gn(e){return{id:e.objectId,email:e.email||e.username||"",nickname:nt(e.nickname)||"",avatar:e.avatar?.url?{name:e.avatar.name,url:e.avatar.url}:null,avatarColor:typeof e.avatarColor=="string"&&e.avatarColor.startsWith("#")?e.avatarColor:Be[0]}}var qe=new Map,ke={async me(e=!1){let t=H.requireUserId();if(!e&&qe.has(t))return qe.get(t);let a=Gn(await A.get("users/me"));return qe.set(a.id,a),a},async many(e,t=!1){let a=t?e:e.filter(n=>!qe.has(n));if(a.length)try{((await A.get("users",{where:JSON.stringify({objectId:{$in:a}}),limit:String(a.length)})).results||[]).map(Gn).forEach(s=>qe.set(s.id,s))}catch{}return Object.fromEntries(e.filter(n=>qe.has(n)).map(n=>[n,qe.get(n)]))},async save({nickname:e,avatarColor:t,photo:a}){e=e.trim(),Q(e.length<=24,`El apodo no puede superar ${24} caracteres`);let n=await ke.me(),s=n.avatar;a===null?s=null:a instanceof Blob&&(s=await oa(a)),await A.put(`users/${n.id}`,{nickname:e,avatarColor:t,avatar:s?ee.fileRef(s.name,s.url):null});let o={...n,nickname:e,avatarColor:t,avatar:s};return qe.set(o.id,o),o},clearCache:()=>qe.clear()};async function oa(e){let t=await A.uploadFile("image.jpg",e,"image/jpeg");return{name:t.name,url:t.url}}var Wn="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function Yn(e){return{id:e.objectId,name:e.name||"",inviteCode:e.inviteCode||"",ownerId:e.ownerId||"",memberIds:e.members||[],memberEmails:e.memberEmails||[],shoppingDay:ge(e.shoppingDay,0)}}var Ao=Ra(),J={async mine(){return(await A.query("House",{members:H.requireUserId()})).map(Yn).sort((t,a)=>t.name.localeCompare(a.name,"es"))},current(){return Ao(async()=>{let e=await J.mine(),t=e.find(a=>a.id===H.houseId())||e[0];if(!t)throw H.saveHouseId(null),new ft;return H.saveHouseId(t.id),t})},switchTo(e){H.saveHouseId(e.id)},async create(e){e=e.trim(),Q(e,"Escribe un nombre para la casa");let t=H.requireUserId(),a=await Lo(),n=await A.post("classes/House",{name:e,inviteCode:a,ownerId:t,members:[t],memberEmails:[H.email()],shoppingDay:0,ACL:ee.publicAcl()});return H.saveHouseId(n.objectId),{id:n.objectId,name:e,inviteCode:a}},async join(e){e=e.trim().toUpperCase(),Q(e.length===6,`El c\xF3digo tiene ${6} caracteres`);let[t]=await A.query("House",{inviteCode:e},{limit:1});if(!t)throw new be(101,"No existe ninguna casa con ese c\xF3digo");let a=Yn(t),n=H.requireUserId();return a.memberIds.includes(n)||await A.put(`classes/House/${a.id}`,{members:ee.addUnique(n),memberEmails:ee.addUnique(H.email())}),H.saveHouseId(a.id),a},async rename(e,t){t=t.trim(),Q(t,"Escribe un nombre para la casa"),await A.put(`classes/House/${e.id}`,{name:t})},async setShoppingDay(e,t){return Q(t===0||t>=1&&t<=7,"D\xEDa no v\xE1lido"),await A.put(`classes/House/${e.id}`,{shoppingDay:t}),{...e,shoppingDay:t}},async leave(e){if(e.memberIds.length<=1){let[t,a]=await Promise.all([A.query("ShoppingItem",{houseId:e.id}),A.query("Product",{houseId:e.id})]);for(let n of t)await A.delete(`classes/ShoppingItem/${n.objectId}`);for(let n of a)await A.delete(`classes/Product/${n.objectId}`);await A.delete(`classes/House/${e.id}`)}else await A.put(`classes/House/${e.id}`,{members:ee.remove(H.requireUserId()),memberEmails:ee.remove(H.email())});H.houseId()===e.id&&H.saveHouseId(null)}};async function Lo(){for(let e=0;e<5;e++){let t=Array.from({length:6},()=>Wn[Math.floor(Math.random()*Wn.length)]).join("");if(!(await A.query("House",{inviteCode:t},{limit:1})).length)return t}throw new be(-1,"No se ha podido generar un c\xF3digo de invitaci\xF3n. Int\xE9ntalo de nuevo")}function Da(e){return{id:e.objectId,name:e.name||"",category:e.category||"",quantity:ge(e.quantity),criticalLimit:ge(e.criticalLimit),unit:e.unit||Me,location:e.location||"",notes:e.notes||"",expiresAt:ee.readDate(e.expiresAt),photo:e.photo?.url?{name:e.photo.name,url:e.photo.url}:null,imageUrl:nt(e.imageUrl),price:e.price===null||e.price===void 0?null:ge(e.price,null),mercadonaId:nt(e.mercadonaId),updatedBy:e.updatedBy||"",allergens:Array.isArray(e.allergens)?e.allergens.filter(t=>typeof t=="string"):[]}}function It(e){return{name:e.name,category:e.category,quantity:e.quantity,criticalLimit:e.criticalLimit,unit:e.unit,location:e.location,notes:e.notes,updatedBy:e.updatedBy,expiresAt:e.expiresAt?ee.date(e.expiresAt):null,photo:e.photo?ee.fileRef(e.photo.name,e.photo.url):null,imageUrl:e.imageUrl||null,mercadonaId:e.mercadonaId||null,price:e.price??null,allergens:e.allergens||[]}}var ea=Ra(),Qn=60,me={async all(){return(await A.query("Product",{houseId:H.requireHouseId()})).map(Da).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e,t){Q(e.name.trim(),"El nombre es obligatorio"),Q(e.name.trim().length<=Qn,`El nombre no puede superar ${Qn} caracteres`),Q(e.quantity>=0&&e.criticalLimit>=0,"Las cantidades no pueden ser negativas");let a=e.photo;t===null?a=null:t instanceof Blob&&(a=await oa(t));let n={...e,name:e.name.trim(),category:e.category.trim(),unit:e.unit.trim()||Me,location:e.location.trim(),notes:e.notes.trim(),photo:a,updatedBy:H.email()};return ea(async()=>{let s=n;if(n.id)await A.put(`classes/Product/${n.id}`,It(n));else{let o=await A.post("classes/Product",{...It(n),houseId:H.requireHouseId(),owner:ee.userPointer(H.requireUserId()),ACL:ee.publicAcl()});s={...n,id:o.objectId}}return await se.syncProduct(s),s})},async updateQuantity(e,t){let a={...e,updatedBy:H.email()};await ea(async()=>{await A.put(`classes/Product/${a.id}`,It(a)),await se.syncProduct(a)}),a.quantity<t&&Kn(a,t-a.quantity)},async consume(e,t){if(t<=0)return e;let a={...j.withQuantity(e,e.quantity-t),updatedBy:H.email()};return await ea(async()=>{await A.put(`classes/Product/${a.id}`,It(a)),await se.syncProduct(a)}),Kn(a,e.quantity-a.quantity),a},async remove(e){await ea(async()=>{await A.delete(`classes/Product/${e.id}`),await se.removeForProduct(e.id)})}};function Kn(e,t){!e.id||t<=0||A.post("classes/StockMovement",{houseId:H.requireHouseId(),productId:e.id,amount:de(t),ACL:ee.publicAcl()}).catch(()=>{})}function Po(e){return{id:e.objectId,productId:e.productId||"",name:e.name||"",quantity:ge(e.quantity,1),unit:e.unit||Me,category:e.category||"",photoUrl:nt(e.photoUrl),checked:!!e.checked,dismissed:!!e.dismissed,manual:!!e.manual,addedBy:nt(e.addedBy)||"",price:e.price===null||e.price===void 0?null:ge(e.price,null)}}function Te(e){return{productId:e.productId,name:e.name,quantity:e.quantity,unit:e.unit,category:e.category,photoUrl:e.photoUrl||null,checked:e.checked,dismissed:e.dismissed,manual:e.manual,addedBy:e.addedBy,price:e.price??null}}var pt=e=>e.price===null||e.price===void 0?null:e.price*e.quantity;function as(e){return{productId:e.id,name:e.name,quantity:j.amountToBuy(e),unit:e.unit,category:e.category,photoUrl:j.image(e),checked:!1,dismissed:!1,manual:!1,addedBy:"",price:e.price}}function ns(e,t){return{...e,name:t.name,quantity:e.manual?e.quantity:j.amountToBuy(t),unit:t.unit,category:t.category,photoUrl:j.image(t),price:t.price}}var qo=(e,t)=>JSON.stringify(Te(e))===JSON.stringify(Te(t)),Ae=Ra(),ut=async e=>(await A.query("ShoppingItem",e)).map(Po).sort((t,a)=>t.name.localeCompare(a.name,"es"));async function aa(e,t){await A.post("classes/ShoppingItem",{...Te(e),houseId:t,ACL:ee.publicAcl()})}async function Xn(e,t,a){if(!t)j.isLow(e)&&await aa(as(e),a);else if(!j.isLow(e)&&(!t.manual||t.dismissed))await A.delete(`classes/ShoppingItem/${t.id}`);else if(!t.checked&&!t.dismissed){let n=ns(t,e);qo(n,t)||await A.put(`classes/ShoppingItem/${t.id}`,Te(n))}}function qa(e){Q(e>0&&Number.isFinite(e),"La cantidad tiene que ser mayor que 0")}var se={async refresh(){let e=H.requireHouseId();return await Ae(async()=>{let t=(await A.query("Product",{houseId:e})).map(Da),a=new Set(t.map(s=>s.id)),n=new Map;(await ut({houseId:e})).filter(s=>s.productId).forEach(s=>{n.has(s.productId)||n.set(s.productId,[]),n.get(s.productId).push(s)});for(let[s,o]of n){let l=a.has(s)?o.slice(1):o;for(let r of l)await A.delete(`classes/ShoppingItem/${r.id}`)}for(let s of t)await Xn(s,n.get(s.id)?.[0],e)}),(await ut({houseId:e})).filter(t=>!t.dismissed)},syncProduct(e){let t=H.requireHouseId();return Ae(async()=>{let a=await ut({houseId:t,productId:e.id});for(let n of a.slice(1))await A.delete(`classes/ShoppingItem/${n.id}`);await Xn(e,a[0],t)})},removeForProduct(e){let t=H.requireHouseId();return Ae(async()=>{for(let a of await ut({houseId:t,productId:e}))await A.delete(`classes/ShoppingItem/${a.id}`)})},addProduct(e,t){qa(t);let a=H.requireHouseId();return Ae(async()=>{let[n]=await ut({houseId:a,productId:e.id}),s={...ns(n||as(e),e),quantity:de(t),manual:!0,dismissed:!1,addedBy:H.email()};n?await A.put(`classes/ShoppingItem/${n.id}`,Te(s)):await aa(s,a)})},addFreeItem(e,t,a,{price:n=null,photoUrl:s=null,category:o=""}={}){e=e.trim(),Q(e,"Escribe qu\xE9 quieres comprar"),qa(t);let l={productId:"",name:e,quantity:de(t),unit:a.trim()||Me,category:o||"",photoUrl:s||null,checked:!1,dismissed:!1,manual:!0,addedBy:H.email(),price:n??null},r=H.requireHouseId();return Ae(()=>aa(l,r))},changeQuantity(e,t){return qa(t),Ae(()=>A.put(`classes/ShoppingItem/${e.id}`,Te({...e,quantity:de(t),manual:!0})))},setChecked(e,t){return Ae(()=>A.put(`classes/ShoppingItem/${e.id}`,Te({...e,checked:t})))},dismiss(e){return Ae(()=>e.manual?A.delete(`classes/ShoppingItem/${e.id}`):A.put(`classes/ShoppingItem/${e.id}`,Te({...e,dismissed:!0,checked:!1})))},restore(e){let t=H.requireHouseId();return Ae(()=>e.manual?aa({...e,dismissed:!1},t):A.put(`classes/ShoppingItem/${e.id}`,Te({...e,dismissed:!1})))},completePurchase(){let e=H.requireHouseId();return Ae(async()=>{let t=(await ut({houseId:e})).filter(n=>n.checked&&!n.dismissed),a=new Map((await A.query("Product",{houseId:e})).map(Da).map(n=>[n.id,n]));for(let n of t){let s=a.get(n.productId);if(s){let o={...j.withQuantity(s,s.quantity+n.quantity),updatedBy:H.email()};await A.put(`classes/Product/${s.id}`,It(o))}await A.delete(`classes/ShoppingItem/${n.id}`)}return t})}};function To(e){return{id:e.objectId,name:e.name||"",servings:ge(e.servings,2),ingredients:(e.ingredients||[]).filter(Boolean).map(t=>({productId:t.productId||"",name:t.name||"",quantity:ge(t.quantity,1),unit:t.unit||Me,option:ss(t.storeOption)})),steps:e.steps||"",emoji:e.emoji||Ft,photo:typeof e.photoUrl=="string"&&e.photoUrl.startsWith("http")?{name:e.photoName||"",url:e.photoUrl}:null,createdBy:e.createdBy||""}}function Jn(e){return{name:e.name,servings:e.servings,steps:e.steps,emoji:e.emoji,photoName:e.photo?.name||"",photoUrl:e.photo?.url||"",createdBy:e.createdBy,ingredients:e.ingredients.map(({productId:t,name:a,quantity:n,unit:s,option:o})=>({productId:t,name:a,quantity:n,unit:s,storeOption:os(o)}))}}function ss(e){if(!e||typeof e!="object"||!e.name)return null;let t=String(e.source||"").toLowerCase(),a=Ie.find(n=>n.key===t)||null;return{store:a?.key||null,source:a?.label||"Open Food Facts",externalId:String(e.externalId||""),name:e.name,brand:e.brand||"",category:"",price:typeof e.price=="number"?e.price:null,imageUrl:typeof e.imageUrl=="string"&&e.imageUrl.startsWith("http")?e.imageUrl:null,packageInfo:e.packageInfo||""}}function os(e){return e?{source:e.store?e.store.toUpperCase():"OPEN_FOOD_FACTS",externalId:e.externalId||"",name:e.name,brand:e.brand||"",price:e.price??null,imageUrl:e.imageUrl||null,packageInfo:e.packageInfo||""}:null}var No=(e,t)=>!!e&&!!t&&e.externalId===t.externalId&&e.store===t.store,Ta=new Map;function rs(e,t){return t>e.criticalLimit?0:de(e.criticalLimit-t+1)}var Ho=10,oe={async all(){return(await A.query("Recipe",{houseId:H.requireHouseId()})).map(To).sort((t,a)=>t.name.localeCompare(a.name,"es"))},async save(e){Q(e.name.trim(),"Ponle un nombre a la receta"),Q(e.ingredients.length,"A\xF1ade al menos un ingrediente"),Q(e.servings>=1&&e.servings<=20,"Las raciones deben estar entre 1 y 20");let t={...e,name:e.name.trim(),steps:e.steps.trim(),createdBy:e.createdBy||H.email()};if(!t.id){let a=await A.post("classes/Recipe",{...Jn(t),houseId:H.requireHouseId(),ACL:ee.publicAcl()});return{...t,id:a.objectId}}return await A.put(`classes/Recipe/${t.id}`,Jn(t)),t},remove:e=>A.delete(`classes/Recipe/${e.id}`),fromLibrary(e,t){return{id:null,name:e.name,servings:e.servings,steps:e.steps.join(`
`),emoji:Ft,photo:{name:"",url:e.photoUrl},createdBy:"",libraryId:e.id,ingredients:e.ingredients.map(a=>{let n=La(a,t),s=n?Xt(a.quantity,a.unit,n.unit):null;return n&&s!==null?{productId:n.id,name:n.name,quantity:de(s),unit:n.unit}:{productId:"",name:a.name,quantity:a.quantity,unit:a.unit}})}},check(e,t){let a=new Map(t.map(l=>[l.id,l])),n=e.ingredients.map(l=>{let r=a.get(l.productId);if(!r)return{ingredient:l,product:null,inStock:0,after:-l.quantity,status:"NOT_IN_PANTRY",toBuy:l.quantity};let u=de(r.quantity-l.quantity),h=u<0?"NOT_ENOUGH":u<=r.criticalLimit?"BELOW_MINIMUM":"OK";return{ingredient:l,product:r,inStock:r.quantity,after:u,status:h,toBuy:rs(r,u)}}),s=n.filter(l=>l.status==="NOT_ENOUGH"||l.status==="NOT_IN_PANTRY"),o=n.filter(l=>l.toBuy>0);return{recipe:e,items:n,canCook:s.length===0,missing:s,toBuy:o,estimatedCost:o.reduce((l,r)=>l+(r.product?.price!=null?r.product.price*r.toBuy:!r.product&&r.ingredient.option?.price!=null?r.ingredient.option.price:0),0)}},async storeOptions(e,t){let a=e.name.trim(),n=`${[...t].sort().join(",")}|${a.toLowerCase()}`;if(Ta.has(n))return Ta.get(n);let{results:s}=await zt.search(a,t),o=a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").split(/\s+/).filter(g=>g.length>2),l=g=>{let i=g.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return o.filter(p=>i.includes(p.slice(0,Math.max(3,p.length-1)))).length+(g.price!=null?.5:0)},r=s.map((g,i)=>({c:g,s:l(g),index:i})).sort((g,i)=>i.s-g.s||g.index-i.index),h=(r.some(g=>g.s>=1)?r.filter(g=>g.s>=1):r.slice(0,3)).map(g=>g.c).slice(0,Ho);return Ta.set(n,h),h},sameOption:No,suggest(e,t,a=8,n=[]){let s=new Set(e.map(l=>l.name.trim().toLowerCase()));return[...e.map(l=>({recipe:l,library:null})),...Kt.filter(l=>!s.has(l.name.toLowerCase())).map(l=>({recipe:oe.fromLibrary(l,t),library:l}))].map(({recipe:l,library:r})=>{let u=oe.check(l,t),h=u.items.filter($=>$.product&&$.status!=="NOT_ENOUGH").length,g=u.items.length||1,i=u.items.filter($=>$.product?.expiresAt&&$.product.quantity>0).map($=>({product:$.product,days:j.daysUntilExpiry($.product)})).filter($=>$.days>=0&&$.days<=5).sort(($,b)=>$.days-b.days),p=i.reduce(($,b)=>$+(6-b.days),0),d=[...new Set(u.items.flatMap($=>Oe(St($),n)))],m=p*2+h/g*10+(u.canCook?4:0)-d.length*30;return{recipe:l,library:r,check:u,expiring:i,have:h,total:g,score:m,allergens:d}}).filter(l=>l.have>0&&(l.expiring.length>0||l.have/l.total>=.5)).sort((l,r)=>r.score-l.score||l.recipe.name.localeCompare(r.recipe.name,"es")).slice(0,a)},async addMissingToShopping(e){for(let t of e.toBuy)if(t.product)await se.addProduct(t.product,t.toBuy);else if(t.ingredient.option){let a=t.ingredient.option;await se.addFreeItem(a.name,1,"uds",{price:a.price,photoUrl:a.imageUrl,category:a.category})}else await se.addFreeItem(t.ingredient.name,t.toBuy,t.ingredient.unit);return e.toBuy.length},async cook(e){for(let t of e.items)t.product&&await me.consume(t.product,t.ingredient.quantity)}};function Do(e){let t=ee.readDate(e.date);return!t||!["BREAKFAST","LUNCH","DINNER"].includes(e.slot)?null:{id:e.objectId,date:t,slot:e.slot,recipeId:e.recipeId||"",title:e.title||""}}var Zn=28;async function Na(e,t,a){return(await A.query("MealPlanEntry",{houseId:e,date:{$gte:ee.date(t),$lte:ee.date(a)}})).map(Do).filter(Boolean)}var ze={week:e=>Na(H.requireHouseId(),e,ce(e,6)),async set(e,t,a,n=""){let s=a?.name||n.trim();Q(s,"Elige una receta o escribe qu\xE9 vas a comer");let o=H.requireHouseId(),l=(await Na(o,e,e)).find(u=>u.slot===t),r={date:ee.date(e),slot:t,recipeId:a?.id||"",title:s};l?await A.put(`classes/MealPlanEntry/${l.id}`,r):await A.post("classes/MealPlanEntry",{...r,houseId:o,ACL:ee.publicAcl()})},clear:e=>A.delete(`classes/MealPlanEntry/${e.id}`),async copyPreviousWeek(e){let t=H.requireHouseId(),a=new Set((await ze.week(e)).map(o=>`${o.date}|${o.slot}`)),s=(await Na(t,ce(e,-7),ce(e,-1))).map(o=>({...o,date:ce(o.date,7)})).filter(o=>!a.has(`${o.date}|${o.slot}`));for(let o of s)await A.post("classes/MealPlanEntry",{date:ee.date(o.date),slot:o.slot,recipeId:o.recipeId,title:o.title,houseId:t,ACL:ee.publicAcl()});return s.length},async analyze(e){let t=H.requireHouseId(),[a,n,s]=await Promise.all([me.all(),oe.all(),ze.week(e)]),o=new Map(n.map(d=>[d.id,d])),l=s.filter(d=>d.date>=X()),r=new Map,u=new Map;l.map(d=>o.get(d.recipeId)).filter(Boolean).forEach(d=>{d.ingredients.forEach(m=>{if(m.productId&&a.some($=>$.id===m.productId))r.set(m.productId,(r.get(m.productId)||0)+m.quantity);else{let $=`${m.name.trim().toLowerCase()}|${m.unit}`;u.set($,(u.get($)||0)+m.quantity)}})});let h=new Map;try{let d=new Date(Date.now()-Zn*864e5);(await A.query("StockMovement",{houseId:t,createdAt:{$gte:ee.instant(d)}})).forEach($=>h.set($.productId,(h.get($.productId)||0)+ge($.amount)))}catch{}let g=Zn/7,i=[];a.forEach(d=>{let m=r.get(d.id)||0,$=de((h.get(d.id)||0)/g),b=Math.max(m,$),k=rs(d,d.quantity-b);b===0&&k===0||i.push({product:d,name:d.name,unit:d.unit,planned:m,habitual:$,inStock:d.quantity,toBuy:k,reason:m>0&&m>=$?"RECIPES":$>0?"HABITUAL":"BELOW_MINIMUM"})}),u.forEach((d,m)=>{let[$,b]=m.split("|");i.push({product:null,name:$.charAt(0).toUpperCase()+$.slice(1),unit:b,planned:d,habitual:0,inStock:0,toBuy:de(d),reason:"RECIPES"})}),i.forEach(d=>{d.isUrgent=d.planned>d.inStock,d.estimatedCost=d.product?.price!=null?d.product.price*d.toBuy:null}),i.sort((d,m)=>m.isUrgent-d.isUrgent||d.name.localeCompare(m.name,"es"));let p=i.filter(d=>d.toBuy>0);return{weekStart:e,needs:i,toBuy:p,plannedMeals:l.length,estimatedCost:p.reduce((d,m)=>d+(m.estimatedCost||0),0),withoutPrice:p.filter(d=>d.estimatedCost===null).length}},async addToShopping(e){for(let t of e.toBuy)t.product?await se.addProduct(t.product,t.toBuy):await se.addFreeItem(t.name,t.toBuy,t.unit);return e.toBuy.length},weekStartOf:bt},es="7UZJKL1DJ0",Ro="9d8f2e39e90df472b4f2e559a116fe17";function Bo(e,t){let a=ge(t?.unit_size,NaN),n=t?.size_format||"",s="";return Number.isFinite(a)&&a>0&&n&&(n==="kg"&&a<1?s=`${Math.round(a*1e3)} g`:n==="l"&&a<1?s=`${Math.round(a*1e3)} ml`:s=`${String(a).replace(".",",")} ${n==="kg"?"kg":n.toUpperCase()}`),[e&&e!=="null"?e:"",s].filter(Boolean).join(" ")}async function Oo(e){let t=await fetch(`https://${es}-dsn.algolia.net/1/indexes/products_prod_mad1_es/query`,{method:"POST",headers:{"X-Algolia-Application-Id":es,"X-Algolia-API-Key":Ro,"Content-Type":"application/json"},body:JSON.stringify({params:`query=${encodeURIComponent(e)}&hitsPerPage=30`})});if(!t.ok)throw new Error("Mercadona no responde");return((await t.json()).hits||[]).map(n=>{let s=n.id||n.objectID;if(!s||!n.display_name)return null;let o=parseFloat(n.price_instructions?.unit_price);return{source:"Mercadona",externalId:String(s),name:n.display_name,brand:"",category:n.categories?.[0]?.name||"",price:Number.isFinite(o)?o:null,imageUrl:typeof n.thumbnail=="string"&&n.thumbnail.startsWith("http")?n.thumbnail:null,packageInfo:Bo(n.packaging,n.price_instructions)}}).filter(Boolean)}async function Fo(e){let a=`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(e)}&search_simple=1&action=process&json=1&page_size=20&lc=es&fields=code,product_name,product_name_es,brands,categories,quantity,image_front_small_url,image_url,allergens_tags`;return((await(await fetch(a)).json()).products||[]).map(s=>{let o=(s.product_name_es||s.product_name||"").trim();if(!o)return null;let l=s.image_front_small_url||s.image_url||"";return{source:"Open Food Facts",store:null,externalId:s.code||"",name:o,brand:(s.brands||"").split(",")[0].trim(),category:(s.categories||"").split(",")[0].trim(),price:null,imageUrl:l.startsWith("http")?l:null,packageInfo:(s.quantity||"").trim(),allergens:Un(s.allergens_tags||[])}}).filter(Boolean)}async function is(e,t){return((await A.post("functions/storeSearch",{store:e,q:t})).result||[]).map(n=>({source:n.store||"Open Food Facts",store:e==="off"?null:e,externalId:String(n.externalId||""),name:n.name||"",brand:n.brand||"",category:n.category||"",price:typeof n.price=="number"?n.price:null,imageUrl:typeof n.imageUrl=="string"&&n.imageUrl.startsWith("http")?n.imageUrl:null,packageInfo:n.packageInfo||""})).filter(n=>n.name)}var Uo=(e,t)=>e==="mercadona"?Oo(t).then(a=>a.map(n=>({...n,store:"mercadona"}))):is(e,t),zt={async search(e,t=["mercadona"]){if(e=e.trim(),e.length<2)return{results:[],failed:[]};let a=t.length?t:["mercadona"],n=await Promise.allSettled(a.map(r=>Uo(r,e))),s=a.filter((r,u)=>n[u].status==="rejected"),o=n.map(r=>r.status==="fulfilled"?r.value:[]),l=[];for(let r=0;o.some(u=>u.length>r);r++)o.forEach(u=>u[r]&&l.push(u[r]));if(l.length)return{results:l,failed:s};try{let r=await is("off",e);if(r.length)return{results:r,failed:s}}catch{}try{return{results:await Fo(e),failed:s}}catch{if(s.length===a.length)throw new be(100,"No se ha podido buscar en los supermercados");return{results:[],failed:s}}},toProduct:e=>({id:null,name:e.name,category:e.category,quantity:1,criticalLimit:1,unit:Me,location:"",notes:[e.store?e.source:"",e.brand,e.packageInfo].filter(Boolean).join(" \xB7 "),expiresAt:null,photo:null,imageUrl:e.imageUrl,price:e.price,mercadonaId:e.store==="mercadona"?e.externalId:null,updatedBy:"",allergens:e.allergens||[]})};function jo(e){return{id:e.objectId,date:ee.readDate(e.date)||(e.createdAt||"").slice(0,10),store:e.store||"",total:ge(e.total),items:(e.items||[]).filter(Boolean).map(t=>({name:t.name||"",quantity:ge(t.quantity,1),unit:t.unit||Me,price:t.price===null||t.price===void 0?null:ge(t.price,null)})),note:e.note||"",createdBy:e.createdBy||""}}var ra=30,Fe={async all(){return(await A.query("Ticket",{houseId:H.requireHouseId()})).map(jo).sort((t,a)=>a.date.localeCompare(t.date)||a.id.localeCompare(t.id))},async save(e){Q(e.total>=0&&Number.isFinite(e.total),"El total no es v\xE1lido"),Q(e.date,"Elige la fecha del ticket"),Q(e.date<=X(),"La fecha no puede ser futura");let t={date:ee.date(e.date),store:(e.store||"").trim(),total:Math.round(e.total*100)/100,items:(e.items||[]).map(({name:a,quantity:n,unit:s,price:o})=>({name:a,quantity:n,unit:s,price:o??null})),note:(e.note||"").trim()};if(!e.id){let a=await A.post("classes/Ticket",{...t,houseId:H.requireHouseId(),createdBy:H.email(),ACL:ee.publicAcl()});return{...e,...t,date:e.date,id:a.objectId,createdBy:H.email()}}return await A.put(`classes/Ticket/${e.id}`,t),{...e,...t,date:e.date}},remove:e=>A.delete(`classes/Ticket/${e.id}`),summary(e){let t=ce(X(),-(ra-1)),a=e.filter(n=>n.date>=t&&n.date<=X());return{total:a.reduce((n,s)=>n+s.total,0),count:a.length,from:t}}},sa=400,Vo=e=>{let t=String(e).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").split(/\s+/)[0]||"",a=t.replace(/(es|s)$/,"");return a.length>=3?a:t},Ha=()=>({"*":{read:!0},[H.requireUserId()]:{read:!0,write:!0}});function ta(e){return{id:e.objectId,name:e.name||"",servings:ge(e.servings,2),steps:e.steps||"",photo:typeof e.photoUrl=="string"&&e.photoUrl.startsWith("http")?{name:e.photoName||"",url:e.photoUrl}:null,ingredients:(e.ingredients||[]).filter(Boolean).map(t=>({productId:"",name:t.name||"",quantity:ge(t.quantity,1),unit:t.unit||Me,option:ss(t.storeOption)})),authorId:e.authorId||"",authorName:e.authorName||"Alguien",authorColor:typeof e.authorColor=="string"&&e.authorColor.startsWith("#")?e.authorColor:Be[0],authorPhoto:typeof e.authorPhotoUrl=="string"&&e.authorPhotoUrl.startsWith("http")?e.authorPhotoUrl:null,sourceRecipeId:e.sourceRecipeId||"",createdAt:e.createdAt||"",likes:0,liked:!1,comments:0}}function ts(e){return{id:e.objectId,recipeId:e.recipeId,userId:e.userId||"",authorName:e.authorName||"Alguien",authorColor:typeof e.authorColor=="string"&&e.authorColor.startsWith("#")?e.authorColor:Be[0],text:e.text||"",createdAt:e.createdAt||""}}var ye={async all(e="popular"){let t=(await A.query("SharedRecipe",{},{limit:200,order:"-createdAt"})).map(ta);if(!t.length)return t;let a=t.map(r=>r.id),n=H.requireUserId(),[s,o]=await Promise.all([A.query("RecipeLike",{recipeId:{$in:a}}).catch(()=>[]),A.query("RecipeComment",{recipeId:{$in:a}}).catch(()=>[])]),l=new Map(t.map(r=>[r.id,r]));return s.forEach(r=>{let u=l.get(r.recipeId);u&&(u.likes++,r.userId===n&&(u.liked=!0))}),o.forEach(r=>l.get(r.recipeId)&&l.get(r.recipeId).comments++),t.sort(e==="recent"?(r,u)=>u.createdAt.localeCompare(r.createdAt):(r,u)=>u.likes-r.likes||u.comments-r.comments||u.createdAt.localeCompare(r.createdAt))},async sharedFrom(e){if(!e?.id)return null;let[t]=await A.query("SharedRecipe",{sourceRecipeId:e.id,authorId:H.requireUserId()},{limit:1});return t?ta(t):null},async share(e){Q(e.name.trim(),"Ponle un nombre a la receta"),Q(e.ingredients.length,"A\xF1ade al menos un ingrediente");let t=await ke.me(),a={name:e.name.trim(),servings:e.servings,steps:e.steps,photoUrl:e.photo?.url||"",photoName:e.photo?.name||"",ingredients:e.ingredients.map(({name:o,quantity:l,unit:r,option:u})=>({name:o,quantity:l,unit:r,storeOption:os(u)})),authorId:t.id,authorName:ve(t),authorColor:t.avatarColor,authorPhotoUrl:t.avatar?.url||"",sourceRecipeId:e.id||""},n=await ye.sharedFrom(e);if(n)return await A.put(`classes/SharedRecipe/${n.id}`,a),{...n,...ta({...a,objectId:n.id,createdAt:n.createdAt})};let s=await A.post("classes/SharedRecipe",{...a,ACL:Ha()});return ta({...a,objectId:s.objectId,createdAt:s.createdAt})},async unshare(e){await A.delete(`classes/SharedRecipe/${e.id}`)},async toggleLike(e){let t=H.requireUserId(),a=await A.query("RecipeLike",{recipeId:e.id,userId:t});return a.length?(await Promise.all(a.map(n=>A.delete(`classes/RecipeLike/${n.objectId}`))),{...e,liked:!1,likes:Math.max(0,e.likes-1)}):(await A.post("classes/RecipeLike",{recipeId:e.id,userId:t,ACL:Ha()}),{...e,liked:!0,likes:e.likes+1})},async comments(e){return(await A.query("RecipeComment",{recipeId:e.id})).map(ts).sort((a,n)=>a.createdAt.localeCompare(n.createdAt))},async comment(e,t){t=t.trim(),Q(t,"Escribe un comentario"),Q(t.length<=sa,`M\xE1ximo ${sa} caracteres`);let a=await ke.me(),n={recipeId:e.id,userId:a.id,authorName:ve(a),authorColor:a.avatarColor,text:t},s=await A.post("classes/RecipeComment",{...n,ACL:Ha()});return ts({...n,objectId:s.objectId,createdAt:s.createdAt||new Date().toISOString()})},removeComment:e=>A.delete(`classes/RecipeComment/${e.id}`),async saveToMine(e,t){let a={id:null,name:e.name,servings:e.servings,steps:e.steps,emoji:Ft,photo:e.photo,createdBy:"",ingredients:e.ingredients.map(n=>{let s=La({...n,keywords:[Vo(n.name)]},t),o=s?Xt(n.quantity,n.unit,s.unit):null;return s&&o!==null?{productId:s.id,name:s.name,quantity:de(o),unit:s.unit,option:n.option}:{...n,productId:""}})};return oe.save(a)},isMine:e=>e.authorId===H.current()?.userId||e.userId===H.current()?.userId},ls={async analyze(e=[]){let t=H.requireHouseId(),a=new Date(Date.now()-Zt*864e5),[n,s,o]=await Promise.all([Fe.all(),me.all(),A.query("StockMovement",{houseId:t,createdAt:{$gte:ee.instant(a)}}).catch(()=>[])]),l=new Map;return o.forEach(r=>l.set(r.productId,(l.get(r.productId)||0)+ge(r.amount))),jn({tickets:n,consumed:l,prods:s,pending:e,today:X()})}},cs=()=>({id:null,name:"",category:"",quantity:1,criticalLimit:1,unit:Me,location:"",notes:"",expiresAt:null,photo:null,imageUrl:null,price:null,mercadonaId:null,updatedBy:"",allergens:[]});var us=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function Ue({label:e,icon:t,error:a,inputRef:n,...s}){return c`<label class=${`field ${a?"has-error":""}`}>
    <span>${e}</span>
    <div class="field-row">
      ${t&&c`<${f} name=${t} size=${20} class="field-icon" />`}
      <input ref=${n} ...${s} />
    </div>
    ${a&&c`<small class="error-text">${a}</small>`}
  </label>`}function Ba(){let[e,t]=_({}),a=W({});return{errors:e,setErrors:t,refs:a,fail:(s,o)=>(t({[s]:o}),Bn(a.current[s]?.closest(".field")),P("error"),!1)}}function Go({size:e=96}){return c`<svg class="logo" width=${e} height=${e} viewBox="0 0 108 108" aria-hidden="true">
    <defs><linearGradient id="lg" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--primary-light)" /><stop offset="1" stop-color="var(--primary)" />
    </linearGradient></defs>
    <circle cx="54" cy="54" r="54" fill="url(#lg)" />
    <g transform="translate(27.6 28.7) scale(2.2)">
      <path d="M12,3L2,12h3v8h14v-8h3L12,3z" fill="#fff" />
      <path d="M8.5,12.5h7v5.5h-7z" fill="var(--primary)" />
      <path d="M8.5,14.2h7v0.8h-7z" fill="#fff" />
    </g>
  </svg>`}function ds({onLoggedIn:e,onRegister:t}){let[a,n]=_(""),[s,o]=_(""),{errors:l,setErrors:r,refs:u,fail:h}=Ba(),g=async p=>{if(p.preventDefault(),r({}),!us.test(a.trim()))return h("email","Introduce un correo v\xE1lido");if(s.length<Ne)return h("password",`M\xEDnimo ${Ne} caracteres`);await B(async()=>{await He.login(a,s),P("success"),e()})},i=async()=>{let p=await ue({title:"Restablecer contrase\xF1a",message:"Te mandaremos un correo con un enlace para elegir una contrase\xF1a nueva.",label:"Correo electr\xF3nico",type:"email",value:a,confirm:"Enviar"});p!==null&&await B(async()=>{await He.resetPassword(p),O(`Correo enviado a ${p.trim()}. Revisa tambi\xE9n el spam.`)})};return c`<main class="auth-screen">
    <div class="float stagger" style="--i:0"><${Go} /></div>
    <h1 class="brand stagger" style="--i:1">Stock Casa</h1>
    <p class="welcome stagger" style="--i:2">Tu despensa, siempre al día</p>
    <p class="muted center stagger" style="--i:3">Controla lo que tienes en casa y compártelo con quien vive contigo</p>

    <form class="card form-card stagger" style="--i:4" onSubmit=${g} novalidate>
      <${Ue} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a}
        error=${l.email} inputRef=${p=>u.current.email=p} onInput=${p=>n(p.target.value)} />
      <${Ue} label="Contraseña" icon="lock" type="password" autocomplete="current-password" value=${s}
        error=${l.password} inputRef=${p=>u.current.password=p} onInput=${p=>o(p.target.value)} />
      <button class="btn primary wide" type="submit"><${f} name="login" size=${20} /> Iniciar sesión</button>
      <button class="btn text center-self" type="button" onClick=${i}>¿Has olvidado la contraseña?</button>
    </form>

    <p class="center stagger" style="--i:5">
      <span class="muted">¿Aún no tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Crear una</button>
    </p>
  </main>`}function ps({onRegistered:e,onBack:t}){let[a,n]=_({nickname:"",email:"",password:"",repeat:""}),{errors:s,setErrors:o,refs:l,fail:r}=Ba(),u=i=>p=>n({...a,[i]:p.target.value}),h=async i=>{if(i.preventDefault(),o({}),!a.nickname.trim())return r("nickname","Escribe un nombre o apodo");if(!us.test(a.email.trim()))return r("email","Introduce un correo v\xE1lido");if(a.password.length<Ne)return r("password",`M\xEDnimo ${Ne} caracteres`);if(a.password!==a.repeat)return r("repeat","Las contrase\xF1as no coinciden");await B(async()=>{await He.register(a.nickname,a.email,a.password,a.repeat),P("success"),O(`\xA1Bienvenido/a, ${a.nickname.trim()}!`),e()})},g=i=>p=>l.current[i]=p;return c`<main class="auth-screen">
    <button class="icon-btn light self-start" onClick=${t} aria-label="Volver"><${f} name="arrow_back" /></button>
    <div class="auth-badge pop-in"><${f} name="person" size=${40} /></div>
    <h1 class="screen-title center stagger" style="--i:1">Crea tu cuenta</h1>
    <p class="muted center stagger" style="--i:2">En un minuto estás organizando tu despensa</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${h} novalidate>
      <${Ue} label="¿Cómo te llamamos?" icon="people" maxlength="24" autocomplete="nickname" value=${a.nickname}
        error=${s.nickname} inputRef=${g("nickname")} onInput=${u("nickname")} />
      <${Ue} label="Correo electrónico" icon="mail" type="email" autocomplete="email" value=${a.email}
        error=${s.email} inputRef=${g("email")} onInput=${u("email")} />
      <${Ue} label="Contraseña (mínimo 6 caracteres)" icon="lock" type="password" autocomplete="new-password" value=${a.password}
        error=${s.password} inputRef=${g("password")} onInput=${u("password")} />
      <${Ue} label="Repite la contraseña" icon="lock" type="password" autocomplete="new-password" value=${a.repeat}
        error=${s.repeat} inputRef=${g("repeat")} onInput=${u("repeat")} />
      <button class="btn primary wide" type="submit"><${f} name="check" size=${20} /> Crear cuenta</button>
    </form>

    <p class="center stagger" style="--i:4">
      <span class="muted">¿Ya tienes cuenta?</span>
      <button class="btn text inline" onClick=${t}>Iniciar sesión</button>
    </p>
  </main>`}function ms({onReady:e,onLogout:t}){let[a,n]=_("Mi casa"),[s,o]=_(""),[l,r]=_("\xA1Hola!"),{errors:u,setErrors:h,refs:g,fail:i}=Ba();V(()=>{ke.me().then($=>r(`\xA1Hola, ${ve($)}!`)).catch(()=>{})},[]);let p=$=>{P("success"),O($),it(),e()},d=async $=>{if($.preventDefault(),h({}),s.trim().length!==6)return i("code",`El c\xF3digo tiene ${6} caracteres`);await B(async()=>{let b=await J.join(s);p(`Ahora est\xE1s en \xAB${b.name}\xBB`)},{onError:b=>b instanceof be&&b.isSessionExpired?t():i("code",b.message)})},m=async $=>{if($.preventDefault(),h({}),!a.trim())return i("name","Este campo es obligatorio");await B(async()=>{let b=await J.create(a);p(`Casa \xAB${b.name}\xBB creada`)})};return c`<main class="auth-screen">
    <div class="auth-badge pop-in"><${f} name="home" size=${40} /></div>
    <h1 class="screen-title center stagger" style="--i:1">${l}</h1>
    <p class="muted center stagger" style="--i:2">Para empezar, únete a la casa de alguien o crea la tuya</p>

    <form class="card form-card stagger" style="--i:3" onSubmit=${d} novalidate>
      <h2>Unirme a una casa</h2>
      <p class="muted">Pide el código de 6 caracteres a alguien de la casa (lo tiene en la pestaña Casa).</p>
      <${Ue} label="Código de 6 caracteres" icon="people" class="code-input" maxlength="6" autocapitalize="characters"
        autocomplete="off" value=${s} error=${u.code} inputRef=${$=>g.current.code=$}
        onInput=${$=>o($.target.value.toUpperCase())} />
      <button class="btn primary wide" type="submit"><${f} name="login" size=${20} /> Unirme</button>
    </form>

    <p class="muted center stagger" style="--i:4">— o —</p>

    <form class="card form-card stagger" style="--i:5" onSubmit=${m} novalidate>
      <h2>Crear una casa nueva</h2>
      <p class="muted">Serás el primer miembro y podrás invitar a quien quieras con su código.</p>
      <${Ue} label="Nombre de la casa" icon="home" maxlength="40" value=${a} error=${u.name}
        inputRef=${$=>g.current.name=$} onInput=${$=>n($.target.value)} />
      <button class="btn tonal wide" type="submit"><${f} name="add" size=${20} /> Crear casa</button>
    </form>

    <button class="btn text center-self stagger" style="--i:6" onClick=${t}><${f} name="logout" size=${20} /> Cerrar sesión</button>
  </main>`}var hs=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function ia({title:e,products:t,marked:a=[],markedLabel:n="Ya est\xE1",freeLabel:s="No est\xE1 en la despensa",close:o}){let[l,r]=_(""),u=W(),h=new Set(a);V(()=>{window.matchMedia?.("(pointer: fine)").matches&&setTimeout(()=>u.current?.focus(),250)},[]);let g=Ge(()=>{let p=hs(l.trim());return[...p?t.filter(m=>hs(`${m.name} ${m.category} ${m.location}`).includes(p)):t].sort((m,$)=>j.isLow($)-j.isLow(m)||m.name.localeCompare($.name,"es"))},[t,l]),i=l.trim();return c`<div class="sheet-body picker">
    <div class="sheet-title">
      <h2 class="grow">${e}</h2>
      <button class="icon-btn" onClick=${()=>o(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <label class="search">
      <${f} name="search" size=${20} />
      <input ref=${u} type="search" placeholder="Buscar en la despensa" value=${l} onInput=${p=>r(p.target.value)} />
    </label>

    <button class="free-item" onClick=${()=>o({free:i})}>
      <span class="thumb mono tone-free" style="width:48px;height:48px"><${f} name="edit" size=${22} /></span>
      <span class="grow min0 left">
        <strong class="ellipsis block">${i?`A\xF1adir \xAB${i}\xBB`:"Escribir otra cosa"}</strong>
        <span class="muted small">${s}</span>
      </span>
      <${f} name="chevron_right" />
    </button>

    ${t.length===0&&c`<p class="muted center small">Aún no hay productos en la despensa.</p>`}
    ${t.length>0&&g.length===0&&c`<p class="muted center small">Ningún producto coincide con «${i}».</p>`}

    <div class="picker-grid">
      ${g.map((p,d)=>c`<button key=${p.id} class=${`pick-tile enter ${h.has(p.id)?"marked":""}`}
        style=${`--i:${Math.min(d,14)}`} onClick=${()=>o({product:p})}>
        <span class="pick-photo">
          <${re} url=${j.image(p)} name=${p.name} size=${84} />
          ${h.has(p.id)&&c`<span class="pick-badge"><${f} name="check" size=${14} /></span>`}
          ${j.isLow(p)&&!h.has(p.id)&&c`<span class="pick-low"></span>`}
        </span>
        <span class="pick-name ellipsis2">${p.name}</span>
        <span class="muted tiny">${h.has(p.id)?n:`${K(p.quantity)} ${p.unit}`}</span>
      </button>`)}
    </div>
  </div>`}var gs={OK:{label:"Hay de sobra",tone:"success"},BELOW_MINIMUM:{label:"Quedar\xE1 bajo m\xEDnimo",tone:"warning"},NOT_ENOUGH:{label:"No llega",tone:"danger"},NOT_IN_PANTRY:{label:"Hay que comprarlo",tone:"primary"}},Wo=["Todas","Desayuno","Comida","Cena"];function $s(e){return e.canCook?e.items.some(t=>t.status==="BELOW_MINIMUM")?{text:"Puedes cocinarla (algo quedar\xE1 bajo m\xEDnimo)",tone:"warning"}:{text:"Puedes cocinarla",tone:"success"}:{text:e.missing.length===1?"Falta 1 ingrediente":`Faltan ${e.missing.length} ingredientes`,tone:"danger"}}var ca=e=>String(e.steps||"").split(`
`).map(t=>t.replace(/^\s*\d+[.)-]\s*/,"").trim()).filter(Boolean),fs=e=>String(e||"").trim().toLowerCase();function vs({active:e}){let[t,a]=_(null),[n,s]=_([]),[o,l]=_("Todas"),r=async(m=!1)=>{await B(async()=>{await J.current();let[$,b]=await Promise.all([oe.all(),me.all()]);a($),s(b)},{loading:!1,onError:m?()=>{}:pe})};V(()=>{e&&r()},[e]),xe(m=>m==="changed"&&e&&r(!0));let u=async m=>{await G(la,{recipe:m,prods:n}),r(!0)},h=async m=>{await G(la,{recipe:oe.fromLibrary(m,n),prods:n,library:m}),r(!0)},g=async()=>{await G(ys,{initial:null,prods:n})&&r(!0)},i=new Set((t||[]).map(m=>fs(m.name))),p=t?oe.suggest(t,n,6,ne.get().allergens||[]):[],d=Kt.filter(m=>!i.has(fs(m.name))&&(o==="Todas"||m.meal===o));return c`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Recetas</h1>
      <button class="icon-btn" onClick=${g} aria-label="Nueva receta"><${f} name="add" /></button>
    </header>

    ${!t&&c`<div class="skeleton-list">${[0,1].map(()=>c`<div class="skeleton tall"></div>`)}</div>`}

    ${p.length>0&&c`<div class="row section-row">
      <h2 class="section-title grow">Con lo que tienes</h2>
      <button class="btn text small" onClick=${()=>Mt()}>Ver todo</button>
    </div>
    <div class="suggest-strip">
      ${p.map((m,$)=>c`<button key=${m.recipe.name} class="suggest-card enter" style=${`--i:${$}`}
        onClick=${async()=>{await G(la,{recipe:m.recipe,prods:n,library:m.library}),r(!0)}}>
        <${re} url=${m.recipe.photo?.url} name=${m.recipe.name} size=${54} />
        <strong class="ellipsis2">${m.recipe.name}</strong>
        ${m.expiring.length>0?c`<span class="tag warning tiny-tag"><${f} name="hourglass" size=${12} /> Usa ${m.expiring[0].product.name.split(" ")[0].toLowerCase()} · ${bs(m.expiring[0].days)}</span>`:c`<span class=${`tiny strong ${m.check.canCook?"success-text":"muted"}`}>${m.check.canCook?"Puedes hacerla ya":`Tienes ${m.have} de ${m.total}`}</span>`}
      </button>`)}
    </div>`}

    ${t&&c`<h2 class="section-title">Mis recetas</h2>`}
    ${t&&t.length===0&&c`<div class="card empty-card compact">
      <${_e} name="recipes" />
      <div class="grow min0">
        <p class="muted small">Guarda una de las ideas de abajo o crea la tuya: verás si puedes cocinarla con lo que tienes y qué falta.</p>
        <button class="btn primary small" onClick=${g}><${f} name="add" size=${18} /> Nueva receta</button>
      </div>
    </div>`}

    <div class="list">
      ${(t||[]).map((m,$)=>{let b=oe.check(m,n),k=$s(b),z=[...new Set(b.items.flatMap(M=>Oe(St(M),ne.get().allergens||[])))];return c`<button key=${m.id} class="card recipe-card enter" style=${`--i:${Math.min($,12)}`} onClick=${()=>u(m)}>
          <${re} url=${m.photo?.url} name=${m.name} size=${64} />
          <span class="grow min0 left">
            <h3 class="ellipsis">${m.name}</h3>
            <span class="muted small">${m.ingredients.length} ingredientes · ${m.servings} raciones</span>
            <span class=${`tag ${k.tone}`}>${k.text}</span>
            ${z.length>0&&c`<span class="allergen-line"><${f} name="warning" size=${13} /> ${Ee(z).join(", ")}</span>`}
          </span>
          <${f} name="chevron_right" />
        </button>`})}
    </div>

    ${t&&c`<button class="card community-card enter" onClick=${async()=>{await G(Xo,{prods:n}),r(!0)}}>
      <span class="community-icon"><${f} name="globe" size=${26} /></span>
      <span class="grow min0 left"><strong class="block">Comunidad</strong><span class="muted small">Recetas que comparten otros usuarios: dales «me gusta», coméntalas y guárdalas</span></span>
      <${f} name="chevron_right" />
    </button>`}

    ${t&&c`<div class="row section-row">
      <h2 class="section-title grow">Ideas para cocinar</h2>
    </div>
    <div class="chips">
      ${Wo.map(m=>c`<button class=${`chip ${o===m?"checked":""}`} onClick=${()=>{l(m),P("tap")}}>${m}</button>`)}
    </div>
    <div class="idea-grid">
      ${d.map((m,$)=>{let b=oe.check(oe.fromLibrary(m,n),n),k=b.items.filter(z=>z.product&&z.status!=="NOT_ENOUGH").length;return c`<button key=${m.id} class="idea-card enter" style=${`--i:${Math.min($,12)}`} onClick=${()=>h(m)}>
          <span class="idea-photo"><img src=${m.photoUrl} alt="" loading="lazy" /></span>
          <span class="idea-body">
            <strong class="ellipsis2">${m.name}</strong>
            <span class="muted tiny"><${f} name="clock" size=${12} /> ${m.minutes} min · ${m.meal}</span>
            <span class=${`tiny strong ${k===b.items.length?"success-text":"muted"}`}>Tienes ${k} de ${b.items.length}</span>
          </span>
        </button>`})}
    </div>
    ${d.length===0&&c`<p class="muted small center">Ya has guardado todas las ideas de este tipo.</p>`}`}

    ${t&&t.length>0&&c`<button class="fab" onClick=${g} aria-label="Nueva receta"><${f} name="add" size=${28} /></button>`}
  </section>`}var bs=e=>e===0?"hoy":e===1?"ma\xF1ana":`en ${e} d\xEDas`;async function Mt(){let e=await B(async()=>{await J.current();let[t,a]=await Promise.all([oe.all(),me.all()]);return{saved:t,prods:a}});e&&(await G(Yo,e),Y.emit("changed"))}function Yo({saved:e,prods:t,close:a}){let n=oe.suggest(e,t,12,ne.get().allergens||[]),s=o=>G(la,{recipe:o.recipe,prods:t,library:o.library});return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">Con lo que tienes en casa</p><h2>¿Qué puedo cocinar?</h2></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <p class="muted small">Primero las que aprovechan lo que está a punto de caducar.</p>
    ${n.length===0&&c`<div class="empty"><${_e} name="recipes" /><p class="muted">Añade productos a la despensa para ver qué puedes cocinar.</p></div>`}
    <div class="list">
      ${n.map((o,l)=>c`<button class="card recipe-card enter" style=${`--i:${l}`} onClick=${()=>s(o)}>
        <${re} url=${o.recipe.photo?.url} name=${o.recipe.name} size=${64} />
        <span class="grow min0 left">
          <h3 class="ellipsis">${o.recipe.name}</h3>
          <span class=${`small strong ${o.check.canCook?"success-text":"muted"}`}>${o.check.canCook?"Tienes todo":`Tienes ${o.have} de ${o.total} ingredientes`}${o.library?" \xB7 idea":""}</span>
          ${o.expiring.length>0&&c`<span class="expiring-chips">${o.expiring.slice(0,3).map(r=>c`<span class=${`tag ${r.days<=1?"danger":"warning"}`}>${r.product.name} · ${bs(r.days)}</span>`)}</span>`}
          ${o.allergens.length>0&&c`<span class="allergen-line"><${f} name="warning" size=${13} /> Lleva ${Ee(o.allergens).join(", ").toLowerCase()}</span>`}
        </span>
        <${f} name="chevron_right" />
      </button>`)}
    </div>
  </div>`}function la({recipe:e,prods:t,library:a=null,close:n}){let[s,o]=_(e),[l,r]=_(t),[u,h]=_({});V(()=>{let y=!0,U=ne.get().stores;return s.ingredients.forEach(Z=>{u[Z.name]===void 0&&oe.storeOptions(Z,U).catch(()=>[]).then(Ce=>y&&h(Se=>({...Se,[Z.name]:Ce})))}),()=>{y=!1}},[s.ingredients.map(y=>y.name).join("|")]);let g={...s,ingredients:s.ingredients.map(y=>y.option?y:{...y,option:u[y.name]?.[0]||null})},i=oe.check(g,l),p=$s(i),d=ca(g),m=!!g.id,$=ne.get().allergens||[],b=y=>Oe(St(y),$),k=[...new Set(i.items.flatMap(b))],z=async()=>r(await me.all()),M=async(y=s)=>{if(y.id)return y;let U=await B(()=>oe.save(y));return U&&(o(U),Y.emit("changed")),U},N=async()=>{await M(g)&&(P("success"),O("Guardada en tus recetas"))},F=async()=>{if(!i.toBuy.length)return O("No hace falta comprar nada");await B(async()=>{let y=await oe.addMissingToShopping(i);P("pop"),O(y===1?"1 art\xEDculo a\xF1adido a la compra":`${y} art\xEDculos a\xF1adidos a la compra`),Y.emit("changed")})},D=async()=>{await B(async()=>{await oe.cook(i),P("success"),O("\xA1Que aproveche! Despensa actualizada"),Y.emit("changed"),await z()})},C=async()=>{let y=i.canCook?"Se descontar\xE1n los ingredientes de la despensa.":"Hay ingredientes que no llegan: se descontar\xE1 lo que haya y quedar\xE1n a 0.";await $e({title:`Cocinar \xAB${g.name}\xBB`,message:y,confirm:"Descontar"})&&await D()},L=async()=>{await G(Zo,{recipe:g,check:i})==="discount"&&await D()},S=async()=>{let y=Array.from({length:7},(Se,he)=>ce(X(),he)),U=await Ze("\xBFQu\xE9 d\xEDa?",y.map((Se,he)=>({label:`${he===0?"Hoy":he===1?"Ma\xF1ana":yt(We(Qe(Se)))} \xB7 ${fe(Se)}`,icon:"calendar"})));if(U===null)return;let Z=await Ze("\xBFPara cu\xE1ndo?",st.map(Se=>({label:Se.label,icon:Se.icon})));if(Z===null)return;let Ce=await M();Ce&&await B(async()=>{await ze.set(y[U],st[Z].key,Ce),P("pop"),O(`Planificada: ${fe(y[U])} \xB7 ${st[Z].label}`),Y.emit("changed")})},T=async y=>{let U=u[y.name]||[];if(U.length<2)return;let Z=await G(Ko,{ingredient:y,options:U});if(!Z)return;let Ce={...s,ingredients:s.ingredients.map(Se=>Se.name===y.name?{...Se,option:Z}:Se)};o(Ce),P("pop"),O(`Usar\xE1s \xAB${Z.name}\xBB`),Ce.id&&(await B(()=>oe.save(Ce),{loading:!1}),Y.emit("changed"))},[I,v]=_(void 0);V(()=>{s.id&&ye.sharedFrom(s).then(v).catch(()=>v(null))},[s.id]);let E=async()=>{if(!await $e({title:I?"Actualizar en la comunidad":"Compartir con la comunidad",message:I?"Se cambiar\xE1 la versi\xF3n compartida por la de ahora.":"Todos los usuarios de Stock Casa podr\xE1n verla, darle \xABme gusta\xBB, comentarla y guardarla. Se ver\xE1 tu apodo.",confirm:I?"Actualizar":"Compartir"}))return;let U=await B(()=>ye.share(g));U&&(v(U),P("success"),O(I?"Receta actualizada en la comunidad":"\xA1Receta compartida con la comunidad!"))},w=async()=>{await $e({title:"Dejar de compartir",message:"Se quitar\xE1 de la comunidad con sus \xABme gusta\xBB y comentarios.",confirm:"Dejar de compartir",danger:!0})&&await B(async()=>{await ye.unshare(I),v(null),O("Ya no est\xE1 en la comunidad")})},x=async()=>{let y=await G(ys,{initial:s,prods:l});y==="deleted"?n():y&&o(y)},R=g.photo?.url;return c`<div class="sheet-body recipe-detail">
    ${R?c`<div class="recipe-hero">
      <img src=${R} alt="" />
      <div class="recipe-hero-actions">
        ${m&&c`<button class="icon-btn light" onClick=${x} aria-label="Editar"><${f} name="edit" /></button>`}
        <button class="icon-btn light" onClick=${()=>n()} aria-label="Cerrar"><${f} name="close" /></button>
      </div>
      <div class="recipe-hero-text">
        <h2>${g.name}</h2>
        <p>${g.servings} raciones${a?` \xB7 ${a.minutes} min \xB7 ${a.meal}`:""}</p>
      </div>
    </div>`:c`<div class="sheet-title">
      <${re} name=${g.name} size=${52} />
      <div class="grow min0"><h2>${g.name}</h2><p class="muted small">${g.servings} raciones</p></div>
      ${m&&c`<button class="icon-btn" onClick=${x} aria-label="Editar"><${f} name="edit" /></button>`}
      <button class="icon-btn" onClick=${()=>n()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>`}

    <div class=${`status-banner ${p.tone}`}>${p.text}</div>
    ${k.length>0&&c`<div class="status-banner danger allergen-banner"><${f} name="warning" size=${18} /> Lleva ${Ee(k).join(", ").toLowerCase()} (tus alergias)</div>`}

    <h3 class="section-label">Ingredientes</h3>
    <div class="ingredients">
      ${i.items.map(y=>c`<div class="ingredient">
        <${re} url=${y.product?y.product.photo?.url||y.product.imageUrl:null} name=${y.ingredient.name} size=${42} />
        <div class="grow min0">
          <strong class="ellipsis">${y.ingredient.name}</strong>
          <span class="muted small">
            ${y.product?`Usa ${K(y.ingredient.quantity)} ${y.ingredient.unit} \xB7 tienes ${K(y.inStock)} \xB7 quedar\xE1n ${K(Math.max(y.after,0))}`:`${K(y.ingredient.quantity)} ${y.ingredient.unit} \xB7 no est\xE1 en la despensa`}
          </span>
        </div>
        <span class=${`tag ${gs[y.status].tone}`}>${y.status==="NOT_IN_PANTRY"?"Comprar":gs[y.status].label}</span>
        ${b(y).length>0&&c`<span class="allergen-line"><${f} name="warning" size=${13} /> ${Ee(b(y)).join(", ")}</span>`}
        <${Qo} option=${y.ingredient.option} options=${u[y.ingredient.name]} onPick=${()=>T(y.ingredient)} />
      </div>`)}
    </div>

    ${i.toBuy.length>0&&c`<p class="muted small">Para cocinarla y seguir por encima de los mínimos hay que comprar ${i.toBuy.length} ${i.toBuy.length===1?"cosa":"cosas"}${i.estimatedCost>0?` (\u2248 ${ae(i.estimatedCost)})`:""}.</p>`}

    ${d.length>0&&c`<h3 class="section-label">Preparación</h3>
      <ol class="step-list">${d.map((y,U)=>c`<li><span class="step-num">${U+1}</span><p>${y}</p></li>`)}</ol>`}
    ${a&&c`<p class="muted tiny">Foto: <a href=${a.photoSource} target="_blank" rel="noopener">Wikimedia Commons</a> (autor y licencia en su página)</p>`}

    <div class="stack">
      ${d.length>0&&c`<button class="btn primary wide" onClick=${L}><${f} name="play" size=${20} /> Cocinar paso a paso</button>`}
      ${!m&&c`<button class="btn tonal wide" onClick=${N}><${f} name="bookmark" size=${20} /> Guardar en mis recetas</button>`}
      ${m&&c`<button class=${`btn wide ${d.length?"tonal":"primary"}`} onClick=${C}><${f} name="cook" size=${20} /> Ya la he cocinado: descontar</button>`}
      <button class="btn tonal wide" onClick=${F}><${f} name="cart" size=${20} /> Añadir lo necesario a la compra</button>
      <button class="btn text wide" onClick=${S}><${f} name="calendar" size=${20} /> Añadir al plan semanal</button>
      ${m&&I!==void 0&&c`<button class="btn text wide" onClick=${E}><${f} name="globe" size=${20} /> ${I?"Actualizar en la comunidad":"Compartir con la comunidad"}</button>`}
      ${I&&c`<p class="muted small center">Compartida en la comunidad · ${I.likes||0} «me gusta» <button class="btn text inline" onClick=${w}>Dejar de compartir</button></p>`}
    </div>
  </div>`}function Qo({option:e,options:t,onPick:a}){if(t===void 0&&!e)return c`<div class="store-line muted"><span class="mini-spinner"></span> Buscando en tus supermercados…</div>`;if(!e)return c`<div class="store-line muted">No está en tus supermercados</div>`;let n=Ie.find(l=>l.key===e.store),s=t?.length||0,o=c`<span class="store-dot" style=${`background:${n?.color||"#F2A93B"}`}></span>
    <span class="grow min0 ellipsis">${e.source} · ${e.name}${e.price!=null?` \xB7 ${ae(e.price)}`:""}</span>
    ${s>1&&c`<span class="options-pill">${s} opciones <${f} name="chevron_right" size=${14} /></span>`}`;return s>1?c`<button type="button" class="store-line" onClick=${a} aria-label=${`Elegir entre ${s} opciones`}>${o}</button>`:c`<div class="store-line">${o}</div>`}function Ko({ingredient:e,options:t,close:a}){return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">${t.length} opciones en tus supermercados</p><h2 class="ellipsis">${e.name}</h2></div>
      <button class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <div class="list">
      ${t.map(n=>{let s=Ie.find(r=>r.key===n.store),o=oe.sameOption(n,e.option),l=Oe(kt(n.name,n.category),ne.get().allergens||[]);return c`<button class=${`card option-row ${o?"chosen":""}`} onClick=${()=>a(n)}>
          <${re} url=${n.imageUrl} name=${n.name} size=${52} />
          <span class="grow min0 left">
            <strong class="ellipsis2">${n.name}</strong>
            <span class="muted small block">${[n.brand,n.packageInfo].filter(Boolean).join(" \xB7 ")}</span>
            <span class="store-badge" style=${`--store:${s?.color||"#F2A93B"}`}>${n.source}</span>
            ${l.length>0&&c`<span class="tag danger allergen-tag"><${f} name="warning" size=${11} /> ${Ee(l).join(", ")}</span>`}
          </span>
          <span class="price">${n.price!=null?ae(n.price):c`<span class="muted small">Sin precio</span>`}</span>
          ${o&&c`<${f} name="check" size=${20} />`}
        </button>`})}
    </div>
  </div>`}function Oa({name:e,color:t,photo:a,size:n=26}){return c`<span class="author-badge" style=${`width:${n}px;height:${n}px;background:${t};font-size:${Math.round(n*.45)}px`}>
    ${a?c`<img src=${a} alt="" />`:(e||"?").charAt(0).toUpperCase()}
  </span>`}function Xo({prods:e,close:t}){let[a,n]=_("popular"),[s,o]=_(null),[l,r]=_(""),u=()=>ye.all(a).then(o).catch(p=>{o([]),pe(p)});V(()=>{o(null),u()},[a]);let h=async p=>{let d=await G(Jo,{item:p,prods:e});d==="deleted"?o(s.filter(m=>m.id!==p.id)):d&&o(s.map(m=>m.id===p.id?d:m))},g=l.trim().toLowerCase(),i=(s||[]).filter(p=>!g||p.name.toLowerCase().includes(g)||p.ingredients.some(d=>d.name.toLowerCase().includes(g)));return c`<div class="sheet-body">
    <div class="sheet-title">
      <span class="community-icon small"><${f} name="globe" size=${22} /></span>
      <div class="grow min0"><p class="muted small">Recetas de todos los usuarios</p><h2>Comunidad</h2></div>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <label class="search"><${f} name="search" size=${20} /><input type="search" placeholder="Buscar receta o ingrediente" value=${l} onInput=${p=>r(p.target.value)} /></label>
    <div class="segmented">
      <button type="button" class=${a==="popular"?"on":""} onClick=${()=>{n("popular"),P("tap")}}>Más gustadas</button>
      <button type="button" class=${a==="recent"?"on":""} onClick=${()=>{n("recent"),P("tap")}}>Recientes</button>
    </div>
    ${!s&&c`<div class="skeleton-list">${[0,1,2].map(()=>c`<div class="skeleton tall"></div>`)}</div>`}
    ${s&&i.length===0&&c`<div class="empty"><${_e} name="recipes" />
      <h2>${g?"Nada por aqu\xED":"A\xFAn no hay recetas"}</h2>
      <p class="muted">${g?"Prueba con otra b\xFAsqueda.":"S\xE9 el primero: abre una de tus recetas y pulsa \xABCompartir con la comunidad\xBB."}</p></div>`}
    <div class="list">
      ${i.map((p,d)=>c`<button key=${p.id} class="card community-row enter" style=${`--i:${Math.min(d,12)}`} onClick=${()=>h(p)}>
        <${re} url=${p.photo?.url} name=${p.name} size=${68} />
        <span class="grow min0 left">
          <h3 class="ellipsis2">${p.name}</h3>
          <span class="author-line"><${Oa} name=${p.authorName} color=${p.authorColor} photo=${p.authorPhoto} size=${20} /> ${p.authorName}${ye.isMine(p)?" (t\xFA)":""}</span>
          <span class="community-stats">
            <span class=${p.liked?"liked":""}><${f} name=${p.liked?"heart":"heart_outline"} size=${16} /> ${p.likes}</span>
            <span><${f} name="chat" size=${15} /> ${p.comments}</span>
            <span class="muted">${p.ingredients.length} ingredientes</span>
          </span>
        </span>
      </button>`)}
    </div>
  </div>`}function Jo({item:e,prods:t,close:a}){let[n,s]=_(e),[o,l]=_(null),[r,u]=_(""),[h,g]=_(!1),i=ca(n),p=ye.isMine(n),d=W();V(()=>{ye.comments(n).then(l).catch(()=>l([]))},[n.id]);let m=async()=>{let M=n,N={...n,liked:!n.liked,likes:n.likes+(n.liked?-1:1)};s(N),P(N.liked?"pop":"tap"),N.liked&&Pe(d.current);try{s(await ye.toggleLike(M))}catch(F){s(M),pe(F)}},$=async M=>{if(M.preventDefault(),!r.trim()||h)return;g(!0);let N=await B(()=>ye.comment(n,r),{loading:!1});g(!1),N&&(l([...o||[],N]),s({...n,comments:n.comments+1}),u(""),P("pop"))},b=async M=>{await $e({title:"Borrar comentario",message:"\xBFSeguro que quieres borrarlo?",confirm:"Borrar",danger:!0})&&await B(async()=>{await ye.removeComment(M),l(o.filter(N=>N.id!==M.id)),s({...n,comments:Math.max(0,n.comments-1)})})},k=async()=>{await B(()=>ye.saveToMine(n,t))&&(P("success"),O("Guardada en tus recetas"),Y.emit("changed"))},z=async()=>{await $e({title:"Dejar de compartir",message:"Se quitar\xE1 de la comunidad con sus \xABme gusta\xBB y comentarios.",confirm:"Dejar de compartir",danger:!0})&&await B(async()=>{await ye.unshare(n),O("Ya no est\xE1 en la comunidad"),a("deleted")})};return c`<div class="sheet-body recipe-detail">
    ${n.photo?c`<div class="recipe-hero">
      <img src=${n.photo.url} alt="" />
      <div class="recipe-hero-actions"><button class="icon-btn light" onClick=${()=>a(n)} aria-label="Cerrar"><${f} name="close" /></button></div>
      <div class="recipe-hero-text"><h2>${n.name}</h2><p>${n.servings} raciones</p></div>
    </div>`:c`<div class="sheet-title">
      <${re} name=${n.name} size=${52} />
      <div class="grow min0"><h2>${n.name}</h2><p class="muted small">${n.servings} raciones</p></div>
      <button class="icon-btn" onClick=${()=>a(n)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>`}

    <div class="row community-head">
      <${Oa} name=${n.authorName} color=${n.authorColor} photo=${n.authorPhoto} size=${36} />
      <div class="grow min0"><strong class="block">${n.authorName}${p?" (t\xFA)":""}</strong><span class="muted small">Compartida ${n.createdAt?fe(n.createdAt.slice(0,10)):""}</span></div>
      <button ref=${d} class=${`like-btn ${n.liked?"on":""}`} onClick=${m} aria-label=${n.liked?"Quitar me gusta":"Me gusta"}>
        <${f} name=${n.liked?"heart":"heart_outline"} size=${22} /> ${n.likes}
      </button>
    </div>

    <h3 class="section-label">Ingredientes</h3>
    <ul class="cook-ingredients">
      ${n.ingredients.map(M=>c`<li><span class="grow">${M.name}</span><strong>${K(M.quantity)} ${M.unit}</strong></li>`)}
    </ul>
    ${i.length>0&&c`<h3 class="section-label">Preparación</h3>
      <ol class="step-list">${i.map((M,N)=>c`<li><span class="step-num">${N+1}</span><p>${M}</p></li>`)}</ol>`}

    <div class="stack">
      <button class="btn primary wide" onClick=${k}><${f} name="bookmark" size=${20} /> Guardar en mis recetas</button>
      ${p&&c`<button class="btn text wide" onClick=${z}>Dejar de compartir</button>`}
    </div>

    <h3 class="section-label">Comentarios${n.comments?` (${n.comments})`:""}</h3>
    ${o===null&&c`<div class="skeleton"></div>`}
    ${o?.length===0&&c`<p class="muted small">Nadie ha comentado todavía. ¿La has probado?</p>`}
    <div class="comments">
      ${(o||[]).map(M=>c`<div class="comment enter" key=${M.id}>
        <${Oa} name=${M.authorName} color=${M.authorColor} size=${30} />
        <div class="grow min0 bubble">
          <strong class="small">${M.authorName}</strong>
          <p>${M.text}</p>
        </div>
        ${ye.isMine(M)&&c`<button class="icon-btn small" aria-label="Borrar comentario" onClick=${()=>b(M)}><${f} name="delete" size=${16} /></button>`}
      </div>`)}
    </div>
    <form class="comment-form" onSubmit=${$}>
      <input value=${r} maxlength=${sa} placeholder="Escribe un comentario…" onInput=${M=>u(M.target.value)} aria-label="Comentario" />
      <button class="icon-btn" type="submit" disabled=${!r.trim()||h} aria-label="Enviar"><${f} name="send" size=${20} /></button>
    </form>
  </div>`}function Zo({recipe:e,check:t,close:a}){let n=ca(e),[s,o]=_(-1),[l,r]=_(1),u=W(null);V(()=>(navigator.wakeLock?.request("screen").then(i=>u.current=i).catch(()=>{}),()=>u.current?.release?.().catch?.(()=>{})),[]);let h=i=>{r(i),o(Math.max(-1,Math.min(n.length,s+i))),P("tap")},g=s===n.length;return c`<div class="sheet-body cooking">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">Modo cocina</p><h2 class="ellipsis">${e.name}</h2></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <div class="cook-progress">
      ${[-1,...n.map((i,p)=>p)].map(i=>c`<span class=${i<s?"done":i===s?"now":""}></span>`)}
    </div>

    <div class="cook-stage" key=${s} style=${`--dir:${l}`}>
      ${s===-1&&c`<div>
        <p class="cook-kicker">Antes de empezar, ten a mano</p>
        <ul class="cook-ingredients">
          ${e.ingredients.map(i=>c`<li><span class="grow">${i.name}</span><strong>${K(i.quantity)} ${i.unit}</strong></li>`)}
        </ul>
      </div>`}
      ${s>=0&&!g&&c`<div>
        <p class="cook-kicker">Paso ${s+1} de ${n.length}</p>
        <p class="cook-text">${n[s]}</p>
      </div>`}
      ${g&&c`<div class="center-col">
        <${_e} name="done" />
        <p class="cook-text center">¡Listo! Que aproveche.</p>
        ${t.items.some(i=>i.product)&&c`<p class="muted center">¿Quitamos de la despensa lo que has usado?</p>`}
      </div>`}
    </div>

    ${!g&&c`<div class="row-2">
      <button class="btn tonal" disabled=${s===-1} onClick=${()=>h(-1)}><${f} name="chevron_left" size=${20} /> Anterior</button>
      <button class="btn primary" onClick=${()=>h(1)}>${s===-1?"Empezar":s===n.length-1?"Terminar":"Siguiente"} <${f} name="chevron_right" size=${20} /></button>
    </div>`}
    ${g&&c`<div class="stack">
      ${t.items.some(i=>i.product)&&c`<button class="btn primary wide" onClick=${()=>a("discount")}><${f} name="check" size=${20} /> Sí, descontar ingredientes</button>`}
      <button class="btn text wide" onClick=${()=>a()}>Cerrar</button>
    </div>`}
  </div>`}function ys({initial:e,prods:t,close:a}){let[n,s]=_(e?.name||""),[o,l]=_(String(e?.servings||2)),[r,u]=_(()=>{let C=e?ca(e):[];return C.length?C:[""]}),[h,g]=_(e?.ingredients||[]),[i,p]=_(void 0),[d,m]=_(null),$=W(),b=i===null?null:d||e?.photo?.url||null,k=async C=>{let L=C.target.files?.[0];if(C.target.value="",!L)return;let S=await lt(L);p(S),m(URL.createObjectURL(S))},z=async()=>{let C=await G(ia,{title:"A\xF1adir ingrediente",products:t,marked:h.map(L=>L.productId).filter(Boolean),markedLabel:"Ya en la receta",freeLabel:"Se comprar\xE1 cuando haga falta"});if(C){if(C.free!==void 0){let L=C.free.trim()||(await ue({title:"Ingrediente",label:"Nombre",confirm:"Siguiente"}))?.trim();if(!L)return;let S=await ue({title:L,label:"Cantidad",inputMode:"decimal",value:"1",suffix:"uds",confirm:"A\xF1adir"}),T=we(S);if(!T)return;g([...h,{productId:"",name:L,quantity:de(T),unit:"uds"}])}else{let L=C.product,S=h.find(E=>E.productId===L.id),T=await ue({title:L.name,label:"\xBFCu\xE1nto usa la receta?",inputMode:"decimal",value:S?K(S.quantity):"1",suffix:L.unit,confirm:S?"Cambiar":"A\xF1adir"}),I=we(T);if(!I)return;let v={productId:L.id,name:L.name,quantity:de(I),unit:L.unit};g(S?h.map(E=>E.productId===L.id?v:E):[...h,v])}P("pop")}},M=(C,L)=>u(r.map((S,T)=>T===C?L:S)),N=C=>u(r.length===1?[""]:r.filter((L,S)=>S!==C)),F=async C=>{C.preventDefault();let L=await B(async()=>{let S=e?.photo||null;i===null?S=null:i instanceof Blob&&(S=await oa(i));let T={...e||{createdBy:"",emoji:void 0},name:n,servings:parseInt(o,10)||2,steps:r.map(I=>I.trim()).filter(Boolean).join(`
`),emoji:e?.emoji||"\u{1F372}",ingredients:h,photo:S};return oe.save(T)});L&&(P("success"),O("Receta guardada"),Y.emit("changed"),a(L))},D=async()=>{await $e({title:"Eliminar receta",message:`\xBFSeguro que quieres eliminar \xAB${e.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await B(async()=>{await oe.remove(e),O("Receta eliminada"),Y.emit("changed"),a("deleted")})};return c`<form class="sheet-body" onSubmit=${F}>
    <div class="sheet-title">
      <h2 class="grow">${e?.id?"Editar receta":"Nueva receta"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>

    <button type="button" class=${`photo-drop ${b?"has-photo":""}`} onClick=${()=>$.current.click()}>
      ${b?c`<img src=${b} alt="" />`:c`<span><${f} name="camera" size=${28} /><span class="block">Añadir una foto del plato</span></span>`}
    </button>
    ${b&&c`<button type="button" class="btn text small center-self" onClick=${()=>{p(null),m(null)}}>Quitar foto</button>`}
    <input ref=${$} type="file" accept="image/*" hidden onChange=${k} />

    <label class="field"><span>Nombre</span><input required maxlength="60" value=${n} onInput=${C=>s(C.target.value)} placeholder="Macarrones con tomate" /></label>
    <label class="field"><span>Raciones</span><input inputmode="numeric" value=${o} onInput=${C=>l(C.target.value)} /></label>

    <h3 class="section-label">Ingredientes</h3>
    ${h.length===0&&c`<p class="muted small">Elige lo que gasta la receta. Lo que esté en la despensa se descontará al cocinarla.</p>`}
    <div class="ingredients">
      ${h.map((C,L)=>{let S=t.find(T=>T.id===C.productId);return c`<div class="ingredient">
          <${re} url=${S?S.photo?.url||S.imageUrl:null} name=${C.name} size=${40} />
          <div class="grow min0"><strong class="ellipsis">${C.name}</strong>
            <span class="muted small">${K(C.quantity)} ${C.unit}${S?"":" \xB7 no est\xE1 en la despensa"}</span></div>
          <button type="button" class="icon-btn small" aria-label="Quitar" onClick=${()=>g(h.filter((T,I)=>I!==L))}><${f} name="close" size=${18} /></button>
        </div>`})}
    </div>
    <button type="button" class="btn tonal wide" onClick=${z}><${f} name="add" size=${20} /> Añadir ingrediente</button>

    <h3 class="section-label">Preparación</h3>
    <ol class="step-editor">
      ${r.map((C,L)=>c`<li>
        <span class="step-num">${L+1}</span>
        <textarea rows="2" value=${C} placeholder=${L===0?"Cuece la pasta\u2026":"Siguiente paso\u2026"} onInput=${S=>M(L,S.target.value)}></textarea>
        <button type="button" class="icon-btn small" aria-label="Quitar paso" onClick=${()=>N(L)}><${f} name="close" size=${16} /></button>
      </li>`)}
    </ol>
    <button type="button" class="btn text" onClick=${()=>u([...r,""])}><${f} name="add" size=${18} /> Añadir paso</button>

    <button class="btn primary wide" type="submit"><${f} name="check" size=${20} /> Guardar receta</button>
    ${e?.id&&c`<button type="button" class="btn danger wide" onClick=${D}><${f} name="delete" size=${20} /> Eliminar receta</button>`}
  </form>`}function Fa(e=ne.get().stores){let t=e.map(a=>Le(a)?.label).filter(Boolean);return t.length<=1?t[0]||"Mercadona":`${t.slice(0,-1).join(", ")} y ${t[t.length-1]}`}var ws="stockcasa.collapsedGroups",ua="Sin categor\xEDa";function er(){let e=new Date().getHours();return e<6||e>=21?"Buenas noches":e<13?"Buenos d\xEDas":"Buenas tardes"}function tr(){try{return new Set(JSON.parse(localStorage.getItem(ws))||[])}catch{return new Set}}function ar({value:e}){let[t,a]=_(e),n=W(e);return V(()=>{let s=performance.now(),o=n.current,l,r=u=>{let h=Math.min(1,(u-s)/450),g=1-(1-h)**3;a(Math.round(o+(e-o)*g)),h<1?l=requestAnimationFrame(r):n.current=e};return l=requestAnimationFrame(r),()=>cancelAnimationFrame(l)},[e]),t}function _s({active:e,goTo:t,setBadge:a}){let[n,s]=_(null),[o,l]=_(null),[r,u]=_(null),[h,g]=_(""),[i,p]=_("all"),[d,m]=_(tr),$=W(0),b=W(new Map),k=async(v=!1)=>{await B(async()=>{let E=await J.current();l(E);let[w,x]=await Promise.all([me.all(),ke.me().catch(()=>null)]);$.current===0&&s(w.filter(R=>!b.current.has(R.id))),u(x),se.refresh().then(R=>a(R.filter(y=>!y.checked).length)).catch(()=>{})},{loading:!1,onError:v?()=>{}:pe})};V(()=>{e&&k()},[e]),xe(v=>v==="changed"&&e&&k(!0)),V(()=>{let v=()=>b.current.forEach(({p:E,timer:w})=>{clearTimeout(w),me.remove(E).catch(()=>{})});return window.addEventListener("pagehide",v),()=>window.removeEventListener("pagehide",v)},[]);let z=v=>{s(x=>x.filter(R=>R.id!==v.id));let w=setTimeout(async()=>{b.current.delete(v.id);try{await me.remove(v),Y.emit("changed")}catch(x){pe(x),k(!0)}},4700);b.current.set(v.id,{p:v,timer:w}),O(`\xAB${v.name}\xBB eliminado`,{label:"Deshacer",run:()=>{clearTimeout(w),b.current.delete(v.id),s(x=>[...x,v].sort((R,y)=>R.name.localeCompare(y.name,"es"))),P("pop")}})};V(()=>{if(!e||!o||o.memberIds.length<2)return;let v=setInterval(()=>document.visibilityState==="visible"&&k(!0),2e4);return()=>clearInterval(v)},[e,o?.id,o?.memberIds.length]);let M=Ge(()=>({total:n?.length||0,low:n?.filter(j.isLow).length||0,expiring:n?.filter(j.needsExpiryAttention).length||0}),[n]),N=Ge(()=>n?jt(n):null,[n]),F=Ge(()=>{let v=h.trim().toLowerCase(),E=(n||[]).filter(x=>!v||[x.name,x.category,x.location].some(y=>y.toLowerCase().includes(v))?i==="low"?j.isLow(x):i==="expiring"?j.needsExpiryAttention(x):!0:!1),w=new Map;return E.forEach(x=>{let R=x.category.trim()||ua;w.has(R)||w.set(R,[]),w.get(R).push(x)}),[...w.entries()].sort(([x],[R])=>(x===ua)-(R===ua)||x.localeCompare(R,"es"))},[n,h,i]),D=v=>{let E=new Set(d);E.has(v)?E.delete(v):E.add(v),m(E),localStorage.setItem(ws,JSON.stringify([...E]))},C=async(v,E,w)=>{let x=n.find(y=>y.id===v.id),R=j.withQuantity(x,x.quantity+E);if(R.quantity!==x.quantity){s(n.map(y=>y.id===v.id?R:y)),P(E>0?"up":"down"),Pe(w),$.current++;try{await me.updateQuantity(R,x.quantity)}catch(y){pe(y)}finally{$.current--}$.current===0&&k(!0)}},L=async v=>{let E=await ue({title:`A\xF1adir \xAB${v.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:K(j.amountToBuy(v)),suffix:v.unit,confirm:"A\xF1adir"});E!==null&&await B(async()=>{await se.addProduct(v,we(E)??0),P("pop"),O(`\xAB${v.name}\xBB a\xF1adido a la compra`),Y.emit("changed")})},S=async v=>{await G(sr,{initial:v,categories:[...new Set((n||[]).map(w=>w.category).filter(Boolean))]})&&k(!0)},T=async()=>{let v=await Ze("A\xF1adir producto",[{label:"Buscar en el s\xFAper",hint:`Foto, categor\xEDa y precio de ${Fa()}`,icon:"store"},{label:"Escribirlo a mano",icon:"edit"}]);if(v!==null)if(v===0){let E=await G(ks,{});if(!E)return;let w=(n||[]).find(x=>x.mercadonaId&&x.mercadonaId===E.externalId);S(w||zt.toProduct(E))}else S(cs())},I=n&&n.length===0;return c`<section class="tab">
    <header class="tab-header">
      <div class="grow">
        <p class="muted small">${er()}${r?`, ${ve(r)}`:""}</p>
        <h1 class="brand">Despensa</h1>
      </div>
      ${o&&c`<button class="house-pill" onClick=${()=>t("house")}><${f} name="home" size=${16} /> ${o.name}</button>`}
    </header>

    <div class="stats">
      ${[["all","Productos",M.total,""],["low","Por reponer",M.low,"danger"],["expiring","Caducan pronto",M.expiring,"warning"]].map(([v,E,w,x])=>c`<button class=${`stat ${x} ${i===v?"selected":""}`} onClick=${()=>p(i===v?"all":v)}>
          <strong><${ar} value=${w} /></strong><span>${E}</span>
        </button>`)}
    </div>

    ${N&&c`<div class=${`card expiry-alert ${N.level}`}>
      <span class="expiry-alert-icon"><${f} name="hourglass" size=${22} /></span>
      <div class="grow min0">
        <strong class="block">${N.title}</strong>
        <p class="small">${N.message}</p>
        <div class="row-actions">
          <button class="btn small primary" onClick=${()=>Mt()}><${f} name="cook" size=${16} /> ¿Qué cocino?</button>
          <button class="btn small text" onClick=${()=>p("expiring")}>Ver productos</button>
        </div>
      </div>
    </div>`}

    <label class="search">
      <${f} name="search" size=${20} />
      <input type="search" placeholder="Buscar por nombre, categoría o sitio" value=${h} onInput=${v=>g(v.target.value)} />
    </label>

    <div class="chips">
      ${[["all","Todos"],["low","Por reponer"],["expiring","Caducan pronto"]].map(([v,E])=>c`
        <button class=${`chip ${i===v?"checked":""}`} onClick=${()=>p(v)}>${E}</button>`)}
    </div>

    ${!n&&c`<div class="skeleton-list">${[0,1,2].map(()=>c`<div class="skeleton"></div>`)}</div>`}

    ${I&&c`<div class="empty">
      <${_e} name="pantry" />
      <h2>Tu despensa está vacía</h2>
      <p class="muted">Añade lo que tienes en casa con el botón +. Puedes buscarlo en ${Fa()} para no escribir.</p>
    </div>`}

    ${n&&!I&&F.length===0&&c`<div class="empty"><${_e} name="search" /><h2>Nada por aquí</h2><p class="muted">Prueba con otra búsqueda o filtro.</p></div>`}

    ${n&&!I&&!localStorage.getItem("stockcasa.swipeHint")&&c`<p class="hint" onClick=${v=>{localStorage.setItem("stockcasa.swipeHint","1"),v.currentTarget.remove()}}>
      <${f} name="swap" size=${16} /> Desliza un producto hacia un lado para eliminarlo
    </p>`}

    <div class="groups">
      ${F.map(([v,E],w)=>c`<div class="group" key=${v}>
        <button class="group-header" onClick=${()=>D(v)}>
          <span class=${`group-dot tone-${v===ua?"free":Ke(v)}`}></span>
          <span class="grow">${v}</span>
          <span class="count">${E.length}</span>
          ${E.some(j.isLow)&&c`<span class="dot danger"></span>`}
          <span class=${`chevron ${d.has(v)?"":"open"}`}><${f} name="chevron_right" size=${20} /></span>
        </button>
        ${!d.has(v)&&E.map((x,R)=>c`<${ct} key=${x.id} class="enter" style=${`--i:${Math.min(w*3+R,12)}`}
          onDelete=${()=>z(x)}>
          <${nr} p=${x} onOpen=${()=>S(x)} onLongPress=${()=>L(x)} onChange=${C} />
        </${ct}>`)}
      </div>`)}
    </div>

    <button class="fab" onClick=${T} aria-label="Añadir producto"><${f} name="add" size=${28} /></button>
  </section>`}function nr({p:e,onOpen:t,onLongPress:a,onChange:n}){let s=W(),o=W(),l=W(null),r=W(!1),u=j.isLow(e),h=j.expiryStatus(e),g=j.daysUntilExpiry(e),i=j.level(e),p=u?"danger":e.quantity<=e.criticalLimit*1.5?"warning":"primary",d=Oe(Ct(e),ne.get().allergens),m=z=>{l.current={x:z.clientX,y:z.clientY},r.current=!1,o.current=setTimeout(()=>{r.current=!0,P("pop"),a()},550)},$=()=>clearTimeout(o.current);return c`<article class="card product-card"
    onPointerDown=${m} onPointerMove=${z=>{l.current&&Math.hypot(z.clientX-l.current.x,z.clientY-l.current.y)>8&&$()}} onPointerUp=${$} onPointerLeave=${$} onPointerCancel=${$}
    onContextMenu=${z=>z.preventDefault()} onClick=${()=>{r.current||t()}}>
    <${re} url=${j.image(e)} name=${e.name} />
    <div class="grow min0">
      <h3 class="ellipsis">${e.name}</h3>
      <p class="muted small ellipsis">${[e.location,e.price!=null?`${ae(e.price)}/${e.unit}`:""].filter(Boolean).join(" \xB7 ")||`M\xEDnimo ${K(e.criticalLimit)} ${e.unit}`}</p>
      <div class="tags">
        ${u&&c`<span class="tag danger">Por reponer</span>`}
        ${h==="EXPIRED"&&c`<span class="tag danger">Caducado</span>`}
        ${h==="SOON"&&c`<span class="tag warning">${g===0?"Caduca hoy":`Caduca en ${g} d`}</span>`}
        ${d.length>0&&c`<span class="tag danger allergen-tag" title="Tus alergias"><${f} name="warning" size=${11} /> ${Ee(d).join(", ")}</span>`}
      </div>
      <div class="level"><span class=${p} style=${`width:${Math.round(i*100)}%`}></span></div>
    </div>
    <div class="stepper" onClick=${z=>z.stopPropagation()} onPointerDown=${z=>z.stopPropagation()}>
      <button class="round" aria-label="Quitar uno" onClick=${()=>n(e,-1,s.current)}><${f} name="remove" size=${18} /></button>
      <div class="qty"><strong ref=${s} class=${u?"danger-text":""}>${K(e.quantity)}</strong><small>${e.unit}</small></div>
      <button class="round primary" aria-label="Añadir uno" onClick=${()=>n(e,1,s.current)}><${f} name="add" size=${18} /></button>
    </div>
  </article>`}function sr({initial:e,categories:t,close:a}){let n=!e.id,s=ne.get().defaultExpiry,[o,l]=_(()=>n&&!e.expiresAt&&s?{...e,expiresAt:ce(X(),s)}:e),[r,u]=_(void 0),[h,g]=_(null),[i,p]=_(!!e.expiresAt||n&&!!s),[d,m]=_(K(e.quantity)),[$,b]=_(K(e.criticalLimit)),[k,z]=_(e.price!=null?String(e.price).replace(".",","):""),M=W(),N=v=>E=>l({...o,[v]:E.target.value}),F=v=>{p(!0),l({...o,expiresAt:ce(X(),v)}),P("tap")},D=r===null?o.imageUrl||null:h||j.image(o),C=async v=>{let E=v.target.files?.[0];if(v.target.value="",!E)return;let w=await lt(E);u(w),g(URL.createObjectURL(w))},L=async()=>{let v=await G(ks,{initialQuery:o.name});if(!v)return;let E=zt.toProduct(v);l({...o,name:E.name,category:E.category||o.category,imageUrl:E.imageUrl,price:E.price??o.price,mercadonaId:E.mercadonaId,notes:o.notes||E.notes,allergens:E.allergens?.length?E.allergens:o.allergens}),E.price!=null&&z(String(E.price).replace(".",",")),P("pop"),O(`Datos importados de ${v.source}`)},S=async v=>{v.preventDefault();let E=we(d),w=we($),x=k.trim()?we(k):null;if(E===null||w===null)return O("Revisa las cantidades");if(k.trim()&&x===null)return O("El precio no es v\xE1lido");if(i&&!o.expiresAt)return O("Elige la fecha de caducidad");let R={...o,quantity:E,criticalLimit:w,price:x,expiresAt:i?o.expiresAt:null},y=await B(()=>me.save(R,r));y&&(P("success"),O(n?"Producto a\xF1adido":"Cambios guardados"),Y.emit("changed"),a(y))},T=async()=>{await $e({title:"Eliminar producto",message:`\xBFSeguro que quieres eliminar \xAB${o.name}\xBB?`,confirm:"Eliminar",danger:!0})&&await B(async()=>{await me.remove(o),P("swipe"),O("Producto eliminado"),Y.emit("changed"),a(!0)})},I=async()=>{let v=await ue({title:`A\xF1adir \xAB${o.name}\xBB a la compra`,label:"Cantidad",inputMode:"decimal",value:K(j.amountToBuy(o)),suffix:o.unit,confirm:"A\xF1adir"});v!==null&&await B(async()=>{await se.addProduct(o,we(v)??0),P("pop"),O(`\xAB${o.name}\xBB a\xF1adido a la compra`),Y.emit("changed")})};return c`<form class="sheet-body" onSubmit=${S}>
    <div class="sheet-title">
      <h2>${n?"Nuevo producto":"Editar producto"}</h2>
      <button type="button" class="icon-btn" onClick=${()=>a(!1)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>

    <div class="photo-box">
      <${re} url=${D} name=${o.name||"?"} size=${96} />
      <div class="photo-actions">
        <button type="button" class="btn tonal small" onClick=${()=>M.current.click()}><${f} name="camera" size=${18} /> Foto</button>
        ${(r instanceof Blob||r!==null&&o.photo)&&c`<button type="button" class="btn text small" onClick=${()=>{u(null),g(null)}}>Quitar foto</button>`}
        <button type="button" class="btn tonal small" onClick=${L}><${f} name="store" size=${18} /> Buscar en el súper</button>
      </div>
      <input ref=${M} type="file" accept="image/*" hidden onChange=${C} />
    </div>

    <label class="field"><span>Nombre</span><input required maxlength="60" value=${o.name} onInput=${N("name")} /></label>
    <label class="field"><span>Categoría</span>
      <input list="categories" value=${o.category} onInput=${N("category")} placeholder="Lácteos, Limpieza…" />
      <datalist id="categories">${t.map(v=>c`<option value=${v} />`)}</datalist>
    </label>
    <div class="row-2">
      <label class="field"><span>Cantidad</span><input inputmode="decimal" value=${d} onInput=${v=>m(v.target.value)} /></label>
      <label class="field"><span>Mínimo (avisar)</span><input inputmode="decimal" value=${$} onInput=${v=>b(v.target.value)} /></label>
    </div>
    <div class="row-2">
      <label class="field"><span>Unidad</span><input value=${o.unit} onInput=${N("unit")} placeholder="uds, kg, L…" /></label>
      <label class="field"><span>Precio por unidad (€)</span><input inputmode="decimal" value=${k} onInput=${v=>z(v.target.value)} placeholder="Opcional" /></label>
    </div>
    <label class="field"><span>Dónde está</span><input value=${o.location} onInput=${N("location")} placeholder="Nevera, despensa…" /></label>

    <div class="field">
      <span>Caducidad</span>
      <div class="segmented">
        <button type="button" class=${i?"":"on"} onClick=${()=>{p(!1),P("tap")}}><${f} name="hourglass" size=${16} /> Sin caducidad</button>
        <button type="button" class=${i?"on":""} onClick=${()=>{p(!0),o.expiresAt||F(s||7)}}><${f} name="calendar" size=${16} /> Con fecha</button>
      </div>
    </div>
    ${i&&c`<div class="expiry-box">
      <label class="field"><span>Caduca el</span><input type="date" value=${o.expiresAt||""} onInput=${N("expiresAt")} /></label>
      <div class="chips wrap">
        ${vt.filter(v=>v.days).slice(0,6).map(v=>c`<button type="button" class="chip small" onClick=${()=>F(v.days)}>+${v.label}</button>`)}
      </div>
      ${o.expiresAt&&c`<p class="muted small">${j.daysUntilExpiry(o)<0?"Ya ha caducado":j.daysUntilExpiry(o)===0?"Caduca hoy":`Caduca dentro de ${j.daysUntilExpiry(o)} d\xEDas (${fe(o.expiresAt)})`}</p>`}
    </div>`}

    <div class="field">
      <span>Alérgenos ${(o.allergens||[]).length?"":c`<span class="muted tiny">· deducidos del nombre, toca para corregir</span>`}</span>
      <div class="chips wrap allergen-chips">
        ${et.map(v=>{let E=Ct(o).includes(v.key),w=(ne.get().allergens||[]).includes(v.key);return c`<button type="button" class=${`chip ${E?"checked":""} ${E&&w?"alert":""}`} onClick=${()=>{let x=Ct(o),R=E?x.filter(y=>y!==v.key):[...x,v.key];l({...o,allergens:R.length?R:["none"]}),P("tap")}}>${E&&w?c`<${f} name="warning" size=${14} /> `:""}${v.label}</button>`})}
      </div>
    </div>
    <label class="field"><span>Notas</span><textarea rows="2" value=${o.notes} onInput=${N("notes")}></textarea></label>
    ${o.updatedBy&&c`<p class="muted small">Última modificación: ${wt(o.updatedBy)}</p>`}

    <button class="btn primary wide" type="submit"><${f} name="check" size=${20} /> Guardar</button>
    ${!n&&c`<div class="row-2">
      <button type="button" class="btn tonal" onClick=${I}><${f} name="cart" size=${18} /> A la compra</button>
      <button type="button" class="btn danger" onClick=${T}><${f} name="delete" size=${18} /> Eliminar</button>
    </div>`}
  </form>`}function ks({initialQuery:e="",close:t}){let a=ne.get().stores,[n,s]=_(e),[o,l]=_(null),[r,u]=_(!1),[h,g]=_("all"),i=W();V(()=>{setTimeout(()=>i.current?.focus(),250)},[]),V(()=>{if(n.trim().length<2){l(null);return}let m=!1;u(!0);let $=setTimeout(async()=>{try{let b=await zt.search(n,a);m||l(b)}catch(b){m||pe(b)}finally{m||u(!1)}},400);return()=>{m=!0,clearTimeout($)}},[n]);let p=(o?.results||[]).filter(m=>h==="all"||m.store===h),d=a.filter(m=>(o?.results||[]).some($=>$.store===m));return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow min0"><h2>Buscar en el súper</h2><p class="muted small ellipsis">${Fa(a)} · cámbialos en tu perfil</p></div>
      <button class="icon-btn" onClick=${()=>t(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <label class="search">
      <${f} name="search" size=${20} />
      <input ref=${i} type="search" placeholder="Leche, arroz, detergente…" value=${n} onInput=${m=>s(m.target.value)} />
      ${r&&c`<span class="mini-spinner"></span>`}
    </label>
    ${d.length>1&&c`<div class="chips">
      <button class=${`chip ${h==="all"?"checked":""}`} onClick=${()=>g("all")}>Todos</button>
      ${d.map(m=>c`<button class=${`chip ${h===m?"checked":""}`} onClick=${()=>g(m)}>
        <span class="store-dot" style=${`background:${Le(m).color}`}></span>${Le(m).label}</button>`)}
    </div>`}
    ${o&&o.failed.length>0&&c`<p class="muted small note">${o.failed.map(m=>Le(m)?.label).join(", ")} no responde ahora mismo. Se muestra lo demás.</p>`}
    ${o&&p.length===0&&c`<p class="muted center">No se ha encontrado nada. Prueba con otras palabras.</p>`}
    ${!o&&c`<p class="muted center small">Escribe al menos 2 letras. Se rellenan solos el nombre, la categoría, la foto y el precio (si el súper lo publica).</p>`}
    <div class="catalog-list">
      ${p.map((m,$)=>{let b=Le(m.store);return c`<button key=${`${m.store}-${m.externalId}-${$}`} class="catalog-item enter" style=${`--i:${Math.min($,10)}`} onClick=${()=>t(m)}>
          <${re} url=${m.imageUrl} name=${m.name} size=${56} />
          <span class="grow min0 left">
            <strong class="ellipsis2">${m.name}</strong>
            <span class="muted small ellipsis">${[m.brand,m.packageInfo].filter(Boolean).join(" \xB7 ")||m.category}</span>
            <span class="store-badge" style=${`--store:${b?.color||"var(--muted)"}`}>${b?.label||m.source}</span>
          </span>
          <span class=${`price ${m.price==null?"muted":""}`}>${m.price!=null?ae(m.price):"Sin precio"}</span>
        </button>`})}
    </div>
  </div>`}var or=["Mercadona","Dia","Lidl","Eroski","Carrefour","Alcampo","Consum","Aldi","Caprabo","Hipercor","El Corte Ingl\xE9s","Simply","BM","Ahorramas","Covir\xE1n","Spar"],rr=["total","subtotal","iva","base imponible","cuota","tarjeta","efectivo","cambio","entregado","entrega","importe","factura","nif","cif","telefono","tel ","tlf","www","http","gracias","ticket","op:","operacion","autoriz","visa","mastercard","contactless","aid","arc","tpv","caja","cajero","devolucion","avda","calle","s.a.","s.l.","c/","cp ","descripcion","p. unit","p.unit","precio","cant","uds.","puntos","ahorro","socio","cliente","n.i.f","fecha","hora","pago","saldo","redondeo"],ir=rr.map(e=>/^[a-z ]+$/.test(e)?new RegExp(`(^|[^a-z])${e.trim()}([^a-z]|$)`):{test:t=>t.includes(e)}),da="(\\d{1,4}[.,]\\d{2})";var mt=e=>parseFloat(String(e).replace(",",".")),pa=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Cs(e){let t=e.replace(/\s+/g," ").replace(/^[\s.*·-]+|[\s.*·-]+$/g,"").trim();if(!t)return"";let a=t.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}function lr(e){for(let t of e){let a=t.match(/\b(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})\b/);if(!a)continue;let n=parseInt(a[1],10),s=parseInt(a[2],10),o=parseInt(a[3],10);if(o<100&&(o+=2e3),!(n<1||n>31||s<1||s>12||o<2e3||o>2100))return`${o}-${String(s).padStart(2,"0")}-${String(n).padStart(2,"0")}`}return null}function Ss(e){let t=pa(e);return or.find(n=>new RegExp(`(^|[^a-z])${pa(n)}([^a-z]|$)`).test(t))||""}function cr(e){let t=null;return e.forEach((a,n)=>{let s=pa(a);if(!/\btotal\b/.test(s)||/subtotal|total iva|base|ahorro|total art|articulos/.test(s))return;let o=[...a.matchAll(new RegExp(da,"g"))].map(u=>mt(u[1])),l=!o.length&&e[n+1]?[...e[n+1].matchAll(new RegExp(da,"g"))].map(u=>mt(u[1])):[],r=(o.length?o:l).pop();r!=null&&r>0&&(t=r)}),t}function Is(e){let t=String(e||"").split(/\r?\n/).map(o=>o.replace(/\s+/g," ").trim()).filter(Boolean),a=[],n=null;for(let o of t){let l=pa(o);if(ir.some(h=>h.test(l))){n=null;continue}let r=o.match(/^(\d+[.,]\d{1,3})\s*(kg|g|l)\b.*?(\d+[.,]\d{2})\s*(€|eur)?\s*\/\s*(kg|l)\b.*?(\d+[.,]\d{2})\s*[a-z€]?$/i);if(r){let h=mt(r[6]),g=mt(r[1]),i=n||a.pop()?.name;i&&a.push({name:i,quantity:Math.round(g*1e3)/1e3,unit:r[2].toLowerCase()==="l"?"L":"kg",price:Math.round(h/g*100)/100}),n=null;continue}let u=o.match(new RegExp(`^(?:(\\d{1,3})\\s*(?:x\\s*)?)?(.*?[A-Za-z\xC1\xC9\xCD\xD3\xDA\xD1\xE1\xE9\xED\xF3\xFA\xF1].*?)\\s+${da}(?:\\s*\u20AC)?(?:\\s+${da})?(?:\\s*\u20AC)?\\s*[A-Z*]?$`));if(u){let h=Cs(u[2]);if(h.length<2||!/[a-zñ]{2}/i.test(h)){n=null;continue}let g=u[1]?parseInt(u[1],10):1,i=mt(u[3]),p=u[4]!=null?mt(u[4]):null,d;p!=null?(d=i,!u[1]&&i>0&&(g=Math.max(1,Math.round(p/i)))):d=g>0?i/g:i,(g<=0||g>99)&&(g=1),a.push({name:h,quantity:g,unit:"uds",price:Math.round(d*100)/100}),n=null;continue}n=/[a-zñ]{3}/i.test(l)&&!/\d{3,}/.test(l)?Cs(o.replace(/^\d+\s+/,"")):null}let s=cr(t);return{store:Ss(t.slice(0,8).join(`
`))||Ss(t.join(`
`)),date:lr(t),total:s??(a.length?Math.round(a.reduce((o,l)=>o+l.price*l.quantity,0)*100)/100:null),items:a}}var ur="https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js",Ua=null;function dr(){return window.Tesseract?Promise.resolve(window.Tesseract):(Ua||=new Promise((e,t)=>{let a=document.createElement("script");a.src=ur,a.onload=()=>window.Tesseract?e(window.Tesseract):t(new Error("OCR no disponible")),a.onerror=()=>{Ua=null,t(new Error("No se ha podido cargar el lector de tickets (\xBFsin conexi\xF3n?)"))},document.head.appendChild(a)}),Ua)}async function zs(e,t=()=>{}){let a=await dr(),{data:n}=await a.recognize(e,"spa",{logger:s=>s.status==="recognizing text"&&t(s.progress||0)});return n.text||""}function xs({active:e,setBadge:t,goTo:a}){let[n,s]=_(null),[o,l]=_(null),[r,u]=_({}),[h,g]=_(null),[i,p]=_(null),d=async(w=!1)=>{await B(async()=>{let x=await J.current();l(x);let R=await se.refresh();s(R),t(R.filter(U=>!U.checked).length),Fe.all().then(g).catch(()=>g([])),ls.analyze(R.filter(U=>!U.checked)).then(p).catch(()=>p(null));let y=await ke.many(x.memberIds);u(Object.fromEntries(Object.values(y).map(U=>[U.email,U])))},{loading:!1,onError:w?()=>{}:pe})};V(()=>{e&&d()},[e]),xe(w=>w==="changed"&&e&&d(!0)),V(()=>{if(!e||!o||o.memberIds.length<2)return;let w=setInterval(()=>document.visibilityState==="visible"&&d(!0),2e4);return()=>clearInterval(w)},[e,o?.id]);let m=async w=>{await B(async()=>{w.product?await se.addProduct(w.product,w.quantity):await se.addFreeItem(w.entry.name,w.quantity,w.unit||"uds"),P("pop"),O(`\xAB${w.entry.name}\xBB a\xF1adido a la compra`),await d(!0)})},$=w=>{s(w),t(w.filter(x=>!x.checked).length)},b=async(w,x)=>{let R=!w.checked;$(n.map(y=>y.id===w.id?{...y,checked:R}:y)),P(R?"check":"tap"),Pe(x);try{await se.setChecked(w,R)}catch(y){pe(y),d(!0)}},k=async w=>{$(n.filter(x=>x.id!==w.id));try{await se.dismiss(w)}catch(x){pe(x),d(!0);return}O(`\xAB${w.name}\xBB quitado de la lista`,{label:"Deshacer",run:async()=>{await B(()=>se.restore(w),{loading:!1}),d(!0)}})},z=async w=>{let x=await ue({title:`\xBFCu\xE1nto \xAB${w.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:K(w.quantity),suffix:w.unit});x!==null&&await B(async()=>{await se.changeQuantity(w,we(x)??0),P("pop"),d(!0)})},M=async()=>{let w=await B(()=>me.all());if(!w)return;let x=await G(ia,{title:"A\xF1adir a la compra",products:w,marked:(n||[]).map(Z=>Z.productId).filter(Boolean),markedLabel:"Ya en la lista",freeLabel:"Pilas, regalo\u2026 algo que no guard\xE1is en la despensa"});if(!x)return;if(x.free!==void 0){let Z=x.free.trim()||(await ue({title:"Otra cosa",label:"\xBFQu\xE9 hay que comprar?",confirm:"Siguiente"}))?.trim();if(!Z)return;let Ce=await ue({title:Z,label:"Cantidad",inputMode:"decimal",value:"1",suffix:"uds",confirm:"A\xF1adir"});if(Ce===null)return;await B(async()=>{await se.addFreeItem(Z,we(Ce)??0,"uds"),P("pop"),O(`\xAB${Z}\xBB a\xF1adido a la compra`),d(!0)});return}let R=x.product,y=(n||[]).find(Z=>Z.productId===R.id),U=await ue({title:`\xBFCu\xE1nto \xAB${R.name}\xBB?`,label:"Cantidad",inputMode:"decimal",value:K(y?.quantity??j.amountToBuy(R)),suffix:R.unit,confirm:"A\xF1adir"});U!==null&&await B(async()=>{await se.addProduct(R,we(U)??0),P("pop"),O(`\xAB${R.name}\xBB a\xF1adido a la compra`),d(!0)})},N=async()=>{let w=(n||[]).filter(he=>!he.checked),x=(n||[]).filter(he=>he.checked),R=w.length?`${w.length===1?"Te falta 1 producto":`Te faltan ${w.length} productos`}:
${w.slice(0,8).map(he=>`\xB7 ${he.name}`).join(`
`)}${w.length>8?`
\xB7 y ${w.length-8} m\xE1s`:""}

Se quedar\xE1n en la lista para la pr\xF3xima vez. Lo marcado se sumar\xE1 a la despensa.`:"Lo marcado se sumar\xE1 al stock de la despensa y saldr\xE1 de la lista.";if(!await $e({title:w.length?"Faltan cosas por comprar":"Terminar la compra",message:R,confirm:w.length?"Terminar igualmente":"Terminar",cancel:w.length?"Seguir comprando":"Cancelar"}))return;let U=await B(()=>se.completePurchase());if(!U)return;it(),P("success"),O(U.length===1?"1 producto repuesto":`${U.length} productos repuestos`),Y.emit("changed"),d(!0);let Z=(U.length?U:x).map(he=>({name:he.name,quantity:he.quantity,unit:he.unit,price:he.price})),Ce=Z.reduce((he,ga)=>he+(ga.price!=null?ga.price*ga.quantity:0),0);await G(As,{initial:{id:null,date:X(),store:Es(),total:Math.round(Ce*100)/100,items:Z,note:""},fromPurchase:!0})&&d(!0)},F=async()=>{await G(mr,{}),d(!0)},D=async()=>{let w=(n||[]).filter(U=>!U.checked),x=w.length?w:n||[];if(!x.length)return O("La lista est\xE1 vac\xEDa");let R=x.reduce((U,Z)=>U+(pt(Z)||0),0),y=[`Lista de la compra \xB7 ${o?.name||""}`,"",...x.map(U=>`- ${U.name}: ${K(U.quantity)} ${U.unit}`),...R>0?["",`Total estimado: ${ae(R)}`]:[]].join(`
`);navigator.share?navigator.share({text:y}).catch(()=>{}):(await navigator.clipboard?.writeText(y),O("Lista copiada"))},C=n?.length||0,L=n?.filter(w=>w.checked).length||0,S=(n||[]).filter(w=>!w.checked),T=S.reduce((w,x)=>w+(pt(x)||0),0),I=S.filter(w=>pt(w)===null).length,v=o?.shoppingDay>=1&&Ye(X(),Ot(o.shoppingDay))===0,E=h?Fe.summary(h):null;return c`<section class="tab">
    <header class="tab-header">
      <h1 class="brand grow">Compra</h1>
      <button class="icon-btn" onClick=${M} aria-label="Añadir"><${f} name="add" /></button>
      <button class="icon-btn" onClick=${D} aria-label="Compartir lista"><${f} name="share" /></button>
    </header>

    ${o&&c`<button class=${`day-banner ${v?"pulse":""}`} onClick=${()=>a("house","settings")}>
      <${f} name="calendar" size=${16} /> ${ot(o.shoppingDay)}
    </button>`}

    <button class="card spend-card enter" onClick=${F}>
      <span class="spend-icon"><${f} name="receipt" size=${24} /></span>
      <span class="grow min0 left">
        <span class="muted small block">Gastado en los últimos ${ra} días</span>
        <strong class="spend-total">${E?ae(E.total):"\u2026"}</strong>
        <span class="muted small block">${E?E.count===0?"A\xFAn no hay tickets \xB7 toca para a\xF1adir":`${E.count===1?"1 ticket":`${E.count} tickets`} \xB7 toca para verlos o corregirlos`:"Cargando tickets"}</span>
      </span>
      <${f} name="chevron_right" />
    </button>

    ${i?.suggestions.length>0&&c`<div class="card forecast-card enter">
      <div class="row">
        <span class="menu-icon"><${f} name="trend" size=${20} /></span>
        <div class="grow min0"><h3>Toca reponer</h3><p class="muted small">Según lo que compráis y gastáis</p></div>
        <button class="btn text small" onClick=${()=>G(Ms,{analysis:i,onAdd:m})}>Historial</button>
      </div>
      ${i.suggestions.slice(0,4).map(w=>c`<div class="forecast-row" key=${w.entry.key}>
        <${re} url=${w.product?w.product.photo?.url||w.product.imageUrl:null} name=${w.entry.name} size=${40} />
        <div class="grow min0"><strong class="ellipsis block">${w.entry.name}</strong><span class="muted small">${w.reason}</span></div>
        <button class="icon-btn small tonal" aria-label=${`A\xF1adir ${w.entry.name}`} onClick=${()=>m(w)}><${f} name="add" size=${20} /></button>
      </div>`)}
    </div>`}

    ${!i?.suggestions.length&&h?.length>0&&i&&c`<button class="btn text small center-self" onClick=${()=>G(Ms,{analysis:i,onAdd:m})}><${f} name="trend" size=${18} /> Historial de compras</button>`}

    ${C>0&&c`<div class="card soft progress-card">
      <div class="row">
        <span class="grow">${L===0?"Marca lo que metas en el carro":`${L} de ${C} en el carro`}</span>
        <strong>${I===0?`Falta: ${ae(T)}`:`\u2248 ${ae(T)} (+${I} sin precio)`}</strong>
      </div>
      <div class="level big"><span class="primary" style=${`width:${C?Math.round(L*100/C):0}%`}></span></div>
    </div>`}

    ${!n&&c`<div class="skeleton-list">${[0,1,2].map(()=>c`<div class="skeleton"></div>`)}</div>`}
    ${n&&C===0&&c`<div class="empty">
      <${_e} name="done" />
      <h2>¡No falta nada!</h2>
      <p class="muted">Cuando algo baje de su mínimo aparecerá aquí solo. También puedes añadir cosas con el +.</p>
    </div>`}

    ${(()=>{let w=0;return Sn(n||[]).map(x=>c`<div class="shop-section" key=${x.storage.key}>
        <h2 class=${`storage-title storage-${x.storage.key}`}><${f} name=${x.storage.icon} size=${18} /> ${x.storage.label}</h2>
        ${x.groups.map(R=>c`<div class="group" key=${R.key}>
          <div class="group-header static">
            <span class=${`group-dot tone-${R.key==="Otros"?"free":Ke(R.key)}`}></span>
            <span class="grow">${R.key}</span>
            <span class="count">${R.items.filter(y=>!y.checked).length||c`<${f} name="check" size=${16} />`}</span>
          </div>
          <div class="list">
            ${R.items.map(y=>{let U=r[y.addedBy];return c`<${ct} key=${y.id} class="enter" style=${`--i:${Math.min(w++,12)}`} label="Quitar" onDelete=${()=>k(y)}>
                <article class=${`card shop-item ${y.checked?"checked":""}`}>
                  <button class=${`check ${y.checked?"on":""}`} aria-label=${y.checked?"Desmarcar":"Marcar"} onClick=${Z=>b(y,Z.currentTarget)}>
                    ${y.checked&&c`<${f} name="check" size=${18} />`}
                  </button>
                  <${re} url=${y.photoUrl} name=${y.name} size=${46} icon=${y.productId?null:"cart"} />
                  <button class="grow min0 left plain" onClick=${()=>z(y)}>
                    <span class="min0">
                      <h3 class="ellipsis name">${y.name}</h3>
                      <p class="muted small ellipsis">
                        ${K(y.quantity)} ${y.unit}${pt(y)!==null?` \xB7 ${ae(pt(y))}`:""}
                        ${y.manual&&y.addedBy&&` \xB7 a\xF1adido por ${U?ve(U):wt(y.addedBy)}`}
                      </p>
                    </span>
                  </button>
                  ${U&&c`<${Je} profile=${U} size=${26} />`}
                  <button class="icon-btn small" aria-label="Quitar" onClick=${()=>k(y)}><${f} name="close" size=${18} /></button>
                  <span class="strike" aria-hidden="true"></span>
                </article>
              </${ct}>`})}
          </div>
        </div>`)}
      </div>`)})()}

    ${C>0&&c`<div class="bottom-action">
      <button class="btn primary wide" disabled=${L===0} onClick=${N}>
        <${f} name="check" size=${20} /> ${L===0?"Marca lo que hayas comprado":L<C?`Terminar compra (${L} de ${C})`:`Terminar compra (${L})`}
      </button>
    </div>`}
  </section>`}function Es(){return Le(ne.get().stores[0])?.label||""}var pr=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function Ms({analysis:e,onAdd:t,close:a}){let[n,s]=_(new Set),o=new Map(e.suggestions.map(r=>[r.entry.key,r])),l=async r=>{await t(r),s(new Set([...n,r.entry.key]))};return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">Tickets y consumo de la despensa</p><h2>Historial de compras</h2></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    ${e.entries.length===0&&c`<div class="empty"><${_e} name="receipt" /><p class="muted">Guarda tickets al terminar la compra y aquí verás cada cuánto compráis cada cosa.</p></div>`}
    <div class="list">
      ${e.entries.map(r=>{let u=o.get(r.key);return c`<div class=${`card history-row ${u?"due":""}`} key=${r.key}>
          <${re} url=${r.product?r.product.photo?.url||r.product.imageUrl:null} name=${r.name} size=${44} />
          <div class="grow min0">
            <strong class="ellipsis block">${r.name}</strong>
            <span class="muted small block">${[r.times?`${r.times===1?"1 compra":`${r.times} compras`}`:"Sin tickets",r.every?`cada ~${r.every} d\xEDas`:"",r.spent?ae(r.spent):"",r.daysLeft!==null?`queda para ~${r.daysLeft} d\xEDas`:""].filter(Boolean).join(" \xB7 ")}</span>
            ${u&&c`<span class="tag warning">${u.reason}</span>`}
          </div>
          ${u&&(n.has(r.key)?c`<span class="tag success">Añadido</span>`:c`<button class="icon-btn small tonal" aria-label=${`A\xF1adir ${r.name}`} onClick=${()=>l(u)}><${f} name="add" size=${20} /></button>`)}
        </div>`})}
    </div>
  </div>`}function mr({close:e}){let[t,a]=_(null),n=()=>B(async()=>a(await Fe.all()),{loading:!1});V(()=>{n()},[]);let s=async u=>{await G(As,{initial:u})&&(n(),Y.emit("changed"))},o=()=>s({id:null,date:X(),store:Es(),total:0,items:[],note:""}),l=t?Fe.summary(t):null,r=new Map;return(t||[]).forEach(u=>{let h=Re(u.date),g=`${pr[h.getMonth()]} ${h.getFullYear()}`;r.has(g)||r.set(g,[]),r.get(g).push(u)}),c`<div class="sheet-body">
    <div class="sheet-title">
      <h2 class="grow">Tickets y gasto</h2>
      <button class="icon-btn" onClick=${()=>e()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>

    <div class="card soft total-card">
      <span class="muted small">Últimos ${ra} días</span>
      <strong class="total">${l?ae(l.total):"\u2026"}</strong>
      <span class="muted small">${l?`${l.count===1?"1 ticket":`${l.count} tickets`} desde el ${fe(l.from)}`:""}</span>
    </div>
    <button class="btn tonal wide" onClick=${o}><${f} name="add" size=${20} /> Añadir un ticket</button>

    ${!t&&c`<div class="skeleton"></div>`}
    ${t&&t.length===0&&c`<div class="empty small">
      <${_e} name="receipt" />
      <h2>Sin tickets todavía</h2>
      <p class="muted">Al terminar una compra podrás guardar su ticket con el total. También puedes añadirlos a mano.</p>
    </div>`}

    ${[...r.entries()].map(([u,h])=>c`<div class="ticket-group">
      <div class="row"><h3 class="section-label grow">${u}</h3><span class="muted small">${ae(h.reduce((g,i)=>g+i.total,0))}</span></div>
      ${h.map(g=>{let i=Ut(g.store);return c`<button class="ticket-row" onClick=${()=>s(g)}>
          <span class="ticket-date"><strong>${Re(g.date).getDate()}</strong><small>${fe(g.date).split(" ")[1]}</small></span>
          <span class="grow min0 left">
            <strong class="ellipsis block">${g.store||"Compra"}</strong>
            <span class="muted small ellipsis block">${g.items.length?`${g.items.length} ${g.items.length===1?"producto":"productos"}`:"Sin detalle"}${g.note?` \xB7 ${g.note}`:""}</span>
          </span>
          ${i&&c`<span class="store-dot" style=${`background:${i.color}`}></span>`}
          <strong class="price">${ae(g.total)}</strong>
        </button>`})}
    </div>`)}
  </div>`}function As({initial:e,fromPurchase:t=!1,close:a}){let[n,s]=_(e.date),[o,l]=_(e.store),[r,u]=_(e.total?String(e.total).replace(".",","):""),[h,g]=_(e.note),[i,p]=_(e.items),[d,m]=_(!1),[$,b]=_(null),k=W(),z=async S=>{let T=S.target.files?.[0];if(S.target.value="",!!T){b(0);try{let I=await zs(T,E=>b(E)),v=Is(I);if(!v.items.length&&v.total==null){P("error"),O("No se ha podido leer el ticket. Prueba con m\xE1s luz y el ticket estirado");return}v.total!=null&&u(String(v.total).replace(".",",")),v.store&&l(Ut(v.store)?.label||v.store),v.date&&v.date<=X()&&s(v.date),v.items.length&&(p(v.items),m(!0)),P("success"),O(`Ticket le\xEDdo: ${v.items.length===1?"1 producto":`${v.items.length} productos`}${v.total!=null?` \xB7 ${ae(v.total)}`:""}. Rev\xEDsalo antes de guardar`)}catch(I){P("error"),O(I.message||"No se ha podido leer el ticket")}finally{b(null)}}},M=ne.get().stores.map(S=>Le(S)?.label).filter(Boolean),N=[...new Set([...M,...Ie.map(S=>S.label)])],F=!e.id,D=i.reduce((S,T)=>S+(T.price!=null?T.price*T.quantity:0),0),C=async S=>{S.preventDefault();let T=we(r);if(T===null)return O("Escribe el total del ticket");let I=await B(()=>Fe.save({...e,date:n,store:o,total:T,note:h,items:i}));I&&(P("success"),O(F?"Ticket guardado":"Ticket actualizado"),Y.emit("changed"),a(I))},L=async()=>{await $e({title:"Eliminar ticket",message:`Se quitar\xE1 del gasto ${ae(e.total)} del ${fe(e.date)}.`,confirm:"Eliminar",danger:!0})&&await B(async()=>{await Fe.remove(e),P("swipe"),O("Ticket eliminado"),Y.emit("changed"),a(!0)})};return c`<form class="sheet-body" onSubmit=${C}>
    <div class="sheet-title">
      <span class="spend-icon"><${f} name="receipt" size=${24} /></span>
      <div class="grow min0"><h2>${F?t?"Guardar el ticket":"Nuevo ticket":"Editar ticket"}</h2>
        ${t&&c`<p class="muted small">Corrige el total con el del ticket del súper para llevar bien la cuenta</p>`}</div>
      <button type="button" class="icon-btn" onClick=${()=>a(null)} aria-label="Cerrar"><${f} name="close" /></button>
    </div>

    <button type="button" class="btn tonal wide ocr-button" disabled=${$!==null} onClick=${()=>k.current.click()}>
      ${$===null?c`<${f} name="scan" size=${20} /> Leer el ticket con una foto`:c`<span class="mini-spinner"></span> Leyendo el ticket… ${Math.round($*100)} %`}
    </button>
    <input ref=${k} type="file" accept="image/*" capture="environment" hidden onChange=${z} />
    ${$!==null&&c`<div class="level"><span class="primary" style=${`width:${Math.round($*100)}%`}></span></div>`}

    <label class="field"><span>Total pagado (€)</span>
      <div class="field-row"><input class="big-input" inputmode="decimal" value=${r} placeholder="0,00" onInput=${S=>u(S.target.value)} /><span class="suffix">€</span></div>
    </label>
    ${D>0&&c`<p class="muted small">Estimado con los precios guardados: ${ae(D)}
      <button type="button" class="btn text inline" onClick=${()=>u(String(Math.round(D*100)/100).replace(".",","))}>Usar</button></p>`}

    <div class="field">
      <span>Supermercado</span>
      <div class="chips wrap">
        ${N.map(S=>c`<button type="button" class=${`chip ${o===S?"checked":""}`} onClick=${()=>{l(o===S?"":S),P("tap")}}>
          <span class="store-dot" style=${`background:${Ut(S)?.color||"var(--muted)"}`}></span>${S}</button>`)}
      </div>
      <input class="plain-input" placeholder="Otro (escríbelo)" value=${N.includes(o)?"":o} onInput=${S=>l(S.target.value)} />
    </div>

    <label class="field"><span>Fecha</span><input type="date" max=${X()} value=${n} onInput=${S=>s(S.target.value)} /></label>
    <label class="field"><span>Nota</span><input value=${h} maxlength="80" placeholder="Opcional" onInput=${S=>g(S.target.value)} /></label>

    ${i.length>0&&c`<div class="card soft">
      <button type="button" class="plain" onClick=${()=>m(!d)}>
        <strong class="grow left">${i.length===1?"1 producto":`${i.length} productos`}</strong>
        <span class=${`chevron ${d?"open":""}`}><${f} name="chevron_right" size=${20} /></span>
      </button>
      ${d&&i.map((S,T)=>c`<div class="ticket-line">
        <span class=${`group-dot tone-${Ke(S.name)}`}></span>
        <span class="grow min0 ellipsis">${S.name}</span>
        <span class="muted small">${K(S.quantity)} ${S.unit}${S.price!=null?` \xB7 ${ae(S.price*S.quantity)}`:""}</span>
        <button type="button" class="icon-btn small" aria-label="Quitar" onClick=${()=>p(i.filter((I,v)=>v!==T))}><${f} name="close" size=${16} /></button>
      </div>`)}
    </div>`}

    <button class="btn primary wide" type="submit"><${f} name="check" size=${20} /> ${F?"Guardar ticket":"Guardar cambios"}</button>
    ${t&&c`<button type="button" class="btn text wide" onClick=${()=>a(null)}>Ahora no</button>`}
    ${!F&&c`<button type="button" class="btn danger wide" onClick=${L}><${f} name="delete" size=${20} /> Eliminar ticket</button>`}
  </form>`}function Ls({active:e}){let[t,a]=_(()=>bt(X())),[n,s]=_(null),[o,l]=_([]),[r,u]=_(null),[h,g]=_(0),i=W(0),p=async(N=!1)=>{let F=++i.current;await B(async()=>{await J.current();let[D,C]=await Promise.all([oe.all(),ze.week(t)]);if(F!==i.current)return;l(D),s(C),u(null);let L=await ze.analyze(t).catch(()=>null);F===i.current&&u(L||"error")},{loading:!1,onError:N?()=>{}:pe})};V(()=>{e&&p()},[e,t]),xe(N=>N==="changed"&&e&&p(!0));let d=N=>{a(ce(t,N*7)),g(h+1),s(null)},m=async(N,F,D,C)=>{let L=[];C&&L.push({label:"Ver / cocinar la receta",action:"view",icon:"cook"}),D&&L.push({label:"Quitar",action:"clear",danger:!0,icon:"delete"}),L.push({label:"Escribir otra cosa",action:"free",icon:"edit"}),o.forEach(v=>L.push({label:v.name,action:"recipe",recipe:v,icon:"recipe"}));let S=await Ze(`${yt(We(Qe(N)))} \xB7 ${F.label}`,L);if(S===null)return;let T=L[S];if(T.action==="view"){O("Abre la pesta\xF1a Recetas para cocinarla");return}if(T.action==="clear"){await B(async()=>{await ze.clear(D),p(!0)});return}let I="";T.action==="free"&&(I=await ue({title:F.label,label:"\xBFQu\xE9 vas a comer?",value:D&&!D.recipeId?D.title:""}),!I?.trim())||await B(async()=>{await ze.set(N,F.key,T.recipe||null,I),P("pop"),p(!0)})},$=async()=>{await B(async()=>{let N=await ze.copyPreviousWeek(t);P(N?"pop":"tap"),O(N===0?"No hab\xEDa nada nuevo que copiar":N===1?"1 comida copiada":`${N} comidas copiadas`),p(!0)})},b=async()=>{await G(gr,{weekStart:t}),p(!0)},k=bt(X()),z=t===k?"Esta semana":t===ce(k,-7)?"Semana pasada":t===ce(k,7)?"Semana que viene":"",M=r&&r!=="error"?r.toBuy.length:0;return c`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Semana</h1></header>

    <div class="week-nav card soft">
      <button class="icon-btn" onClick=${()=>d(-1)} aria-label="Semana anterior"><${f} name="chevron_left" /></button>
      <button class="grow plain center" onClick=${()=>a(k)}>
        <strong>${fe(t)} – ${fe(ce(t,6))}</strong>
        <span class="muted small block">${z}</span>
      </button>
      <button class="icon-btn" onClick=${()=>d(1)} aria-label="Semana siguiente"><${f} name="chevron_right" /></button>
    </div>

    <button class="card forecast" onClick=${b}>
      <${f} name="insights" size=${28} />
      <span class="grow left">
        <strong>Previsión de la compra</strong>
        <span class="muted small block">
          ${r?r==="error"?"No se ha podido calcular":r.plannedMeals===0&&M===0?"Planifica comidas para ver qu\xE9 hay que comprar":`\u2248 ${ae(r.estimatedCost)} \xB7 ${M===1?"1 producto":`${M} productos`}`:"Calculando\u2026"}
        </span>
      </span>
      <${f} name="chevron_right" />
    </button>
    <button class="btn text" onClick=${$}><${f} name="copy" size=${18} /> Copiar la semana anterior</button>

    <div class="days" key=${h}>
      ${Array.from({length:7},(N,F)=>{let D=ce(t,F),C=D<X();return c`<div class=${`card day enter ${C?"past":""}`} style=${`--i:${F}`}>
          <div class="day-header">
            <strong>${yt(We(Qe(D)))}</strong>
            <span class="muted small">${fe(D)}</span>
            ${D===X()&&c`<span class="tag primary">Hoy</span>`}
          </div>
          ${st.map(L=>{let S=(n||[]).find(I=>I.date===D&&I.slot===L.key),T=S?.recipeId?o.find(I=>I.id===S.recipeId):null;return c`<button class="slot" onClick=${()=>m(D,L,S,T)}>
              ${T?.photo?.url?c`<${re} url=${T.photo.url} name=${T.name} size=${32} />`:c`<span class="slot-icon"><${f} name=${L.icon} size=${18} /></span>`}
              <span class="grow left min0">
                <span class="muted tiny block">${L.label}</span>
                <span class=${`ellipsis block ${S?"":"muted"}`}>${S?S.title:"+ A\xF1adir"}</span>
              </span>
              ${T&&c`<span class="tag primary">Receta</span>`}
            </button>`})}
        </div>`})}
    </div>
  </section>`}var hr={RECIPES:"Por las recetas del plan",HABITUAL:"Por lo que sol\xE9is gastar",BELOW_MINIMUM:"Est\xE1 bajo m\xEDnimo"};function gr({weekStart:e,close:t}){let[a,n]=_(null);V(()=>{B(async()=>n(await ze.analyze(e)),{loading:!1})},[]);let s=async()=>{await B(async()=>{let l=await ze.addToShopping(a);P("pop"),O(l===1?"1 producto a\xF1adido a la compra":`${l} productos a\xF1adidos a la compra`),Y.emit("changed"),t()})},o=a?.needs.filter(l=>l.toBuy<=0)||[];return c`<div class="sheet-body">
    <div class="sheet-title">
      <div class="grow"><h2>Previsión de la compra</h2><p class="muted small">${fe(e)} – ${fe(ce(e,6))}</p></div>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    ${!a&&c`<div class="skeleton"></div><div class="skeleton"></div>`}
    ${a&&c`
      <div class="card soft total-card">
        <span class="muted small">Coste estimado de la semana</span>
        <strong class="total">${ae(a.estimatedCost)}</strong>
        <span class="muted small">${a.plannedMeals===1?"1 comida planificada":`${a.plannedMeals} comidas planificadas`}
          ${a.withoutPrice>0?` \xB7 ${a.withoutPrice} sin precio`:""}</span>
      </div>
      ${a.toBuy.length===0&&c`<div class="empty small"><${_e} name="done" /><h2>Tienes todo lo necesario</h2>
        <p class="muted">Con el plan y lo que soléis gastar, no hace falta comprar nada esta semana.</p></div>`}
      ${a.toBuy.length>0&&c`<h3 class="section-label">Hay que comprar</h3>`}
      ${a.toBuy.map((l,r)=>c`<div class="need enter" style=${`--i:${r}`}>
        <div class="grow min0">
          <strong>${l.name}</strong> ${l.isUrgent&&c`<span class="tag danger">No llega</span>`}
          <span class="muted small block">${hr[l.reason]} · plan ${K(l.planned)} · habitual ${K(l.habitual)} · tienes ${K(l.inStock)} ${l.unit}</span>
        </div>
        <div class="right">
          <strong class="primary-text">Comprar ${K(l.toBuy)} ${l.unit}</strong>
          <span class="muted small block">${l.estimatedCost!=null?ae(l.estimatedCost):"Sin precio"}</span>
        </div>
      </div>`)}
      ${o.length>0&&c`<h3 class="section-label">Ya cubierto</h3>
        ${o.map(l=>c`<div class="need covered"><span class="grow">${l.name}</span><span class="muted small">tienes ${K(l.inStock)} ${l.unit}</span></div>`)}`}
      ${a.toBuy.length>0&&c`<button class="btn primary wide" onClick=${s}><${f} name="cart" size=${20} /> Añadir todo a la compra (${a.toBuy.length})</button>`}
    `}
  </div>`}var Et="6.0",Ns=[{version:"6.0",date:"octubre 2026",items:[{icon:"store",title:"Recetas con productos del s\xFAper",text:"Cada ingrediente se busca en tus supermercados con su precio. Si hay varias opciones te lo indica y eliges cu\xE1l usar."},{icon:"cart",title:"Compra ordenada por pasillos",text:"La lista va por categor\xEDas: primero lo seco, despu\xE9s los frescos y al final los congelados."},{icon:"hourglass",title:"Avisos de caducidad",text:"\xABTienes 3 productos que caducan pronto\xBB y, si algo caduca ma\xF1ana, te lo dice por su nombre."},{icon:"cook",title:"\xBFQu\xE9 puedo cocinar?",text:"Recetas con lo que tienes en casa, empezando por las que aprovechan lo que est\xE1 a punto de caducar."},{icon:"shield",title:"Al\xE9rgenos e intolerancias",text:"Marca tus alergias (gluten, lactosa\u2026) y ver\xE1s avisos en productos y recetas."},{icon:"trend",title:"Historial inteligente",text:"Aprende cada cu\xE1nto compras cada cosa y te sugiere reponerla antes de que se acabe."},{icon:"scan",title:"Tickets desde una foto",text:"Haz una foto al ticket y se leen solas las l\xEDneas y el total."},{icon:"globe",title:"Comunidad de recetas",text:"Comparte tus recetas con el resto de usuarios, dales \xABme gusta\xBB y com\xE9ntalas."},{icon:"palette",title:"Estilos Neo-Brutalismo y Pixel art",text:"Dos estilos nuevos en Perfil \u2192 Apariencia."},{icon:"help",title:"Tutorial",text:"Una gu\xEDa de todas las funciones, en Casa \u2192 Tutorial."}]}],xt=[{icon:"pantry",title:"Tu despensa",points:["Todo lo que hay en casa, agrupado por categor\xEDas. Toca un producto para editarlo.","Los botones \u2212 y + cambian la cantidad. Cuando baja de su m\xEDnimo pasa solo a la lista de la compra.","Desliza un producto hacia un lado para borrarlo (tienes unos segundos para deshacer).","Mant\xE9n pulsado un producto para a\xF1adirlo a la compra aunque no est\xE9 bajo m\xEDnimo."]},{icon:"store",title:"A\xF1adir productos",points:["Con el + busca en tus supermercados (Mercadona, Dia, Lidl, Eroski): se rellenan foto, categor\xEDa y precio.","En la app de Android tambi\xE9n puedes escanear el c\xF3digo de barras.","Puedes poner fecha de caducidad o marcarlo como \xABsin caducidad\xBB. En Perfil eliges la caducidad por defecto.","Si tienes alergias configuradas, ver\xE1s un aviso en los productos que las contienen."]},{icon:"hourglass",title:"Caducidad",points:["Arriba de la despensa ver\xE1s \xABTienes x productos que caducan pronto\xBB (en los pr\xF3ximos 3 d\xEDas).","Si algo caduca ma\xF1ana te avisa por su nombre para que no se desaproveche.","Pulsa \xAB\xBFQu\xE9 cocino?\xBB para ver recetas que lo aprovechan."]},{icon:"cart",title:"Lista de la compra",points:["Ordenada como en el s\xFAper: secos, luego frescos y al final congelados, cada cosa en su categor\xEDa.","Marca lo que metes en el carro: se pone gris y tachado. Toca la cantidad para cambiarla.","\xABTerminar compra\xBB suma lo comprado a la despensa y te deja guardar el ticket. Si falta algo, te avisa.","El historial aprende cada cu\xE1nto compras cada cosa y te sugiere lo que toca reponer."]},{icon:"receipt",title:"Tickets y gasto",points:["Arriba de la compra ves lo gastado en los \xFAltimos 30 d\xEDas.","Haz una foto a un ticket de papel y se leen las l\xEDneas y el total; revisa y guarda.","Los tickets se pueden corregir o borrar cuando quieras."]},{icon:"recipe",title:"Recetas",points:["Guarda las ideas de serie o crea las tuyas con foto y pasos.","Cada ingrediente muestra el producto del s\xFAper y su precio; si pone \xAB4 opciones\xBB, t\xF3calo para elegir.","\xABA\xF1adir lo necesario a la compra\xBB mete lo que falta. \xABCocinar paso a paso\xBB abre el modo cocina.","Al terminar se descuentan los ingredientes de la despensa."]},{icon:"globe",title:"Comunidad",points:["Comparte una receta tuya desde su detalle: la ver\xE1n todos los usuarios de Stock Casa.","En Recetas \u2192 Comunidad puedes darles \xABme gusta\xBB, comentarlas y guardarlas en tus recetas."]},{icon:"calendar",title:"Plan semanal",points:["Planifica desayuno, comida y cena de cada d\xEDa.","El an\xE1lisis de la semana calcula lo que hay que comprar para el plan y lo a\xF1ade a la lista.","Puedes copiar la semana anterior con un toque."]},{icon:"home",title:"Casa compartida",points:["Invita a tu familia o compa\xF1eros con el c\xF3digo de la casa: todos veis la misma despensa y lista.","Elige el d\xEDa de compra y recibe recordatorios.","En Perfil cambias tu foto, el estilo (Minimalista, Fantas\xEDa, Papel, Neo-Brutalismo o Pixel art), tus supermercados y alergias."]}];function fr({close:e,intro:t=!1}){let[a,n]=_(t?-1:0),s=xt[a],o=a===xt.length-1,l=r=>{P("tap"),n(Math.max(t?-1:0,Math.min(xt.length-1,a+r)))};return c`<div class="sheet-body tutorial">
    <div class="sheet-title">
      <div class="grow min0"><p class="muted small">Tutorial${a>=0?` \xB7 ${a+1} de ${xt.length}`:""}</p><h2>${a===-1?"\xA1Bienvenido a Stock Casa!":s.title}</h2></div>
      <button class="icon-btn" onClick=${()=>e()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <div class="cook-progress">${xt.map((r,u)=>c`<span class=${u<a?"done":u===a?"now":""}></span>`)}</div>
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
      ${a===-1?c`<button class="btn tonal" onClick=${()=>e()}>Ahora no</button>`:c`<button class="btn tonal" disabled=${a===0} onClick=${()=>l(-1)}><${f} name="chevron_left" size=${20} /> Anterior</button>`}
      <button class="btn primary" onClick=${()=>o?e():l(1)}>${a===-1?"Empezar":o?"\xA1Entendido!":"Siguiente"} ${!o&&c`<${f} name="chevron_right" size=${20} />`}</button>
    </div>
  </div>`}var ha=(e=!1)=>G(fr,{intro:e});function ja({close:e,releases:t=Ns.slice(0,1),reload:a=!1}){return c`<div class="sheet-body">
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
      ${!a&&c`<button class="btn text wide" onClick=${()=>{e(!1),ha()}}><${f} name="help" size=${20} /> Ver el tutorial</button>`}
    </div>
  </div>`}var Hs=()=>G(ja,{releases:Ns}),ma=e=>{try{return localStorage.getItem(e)}catch{return null}},Ds=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},Ps="stockcasa.seenVersion",qs="stockcasa.expiryNotice",Rs=(e,t)=>{let a=String(e).split(".").map(Number),n=String(t).split(".").map(Number);for(let s=0;s<Math.max(a.length,n.length);s++)if((a[s]||0)!==(n[s]||0))return(a[s]||0)>(n[s]||0);return!1},Ts=!1;async function Bs(){if(Ts)return;Ts=!0;let e=ma(Ps);Ds(Ps,Et);let t=!!(ma("stockcasa.settings")||ma("stockcasa.swipeHint"));!e&&!t?await ha(!0):(!e||Rs(Et,e))&&await G(ja,{}),await $r(),br()}async function $r(){if(ma(qs)!==X())try{await J.current();let e=jt(await me.all());if(Ds(qs,X()),!e)return;vr(e),await $e({title:e.title,message:e.message,confirm:"\xBFQu\xE9 cocino?",cancel:"Vale"})&&await Mt()}catch{}}function vr(e){try{if(!("Notification"in window)||Notification.permission!=="granted")return;let t={body:e.message,icon:"icons/icon-192.png",tag:"stockcasa-expiry"};navigator.serviceWorker?.getRegistration?.().then(a=>a?a.showNotification(e.title,t):new Notification(e.title,t)).catch(()=>{})}catch{}}function br(){let e=!1,t=async()=>{if(!(e||document.visibilityState!=="visible"))try{let a=await fetch(`version.json?t=${Date.now()}`,{cache:"no-store"});if(!a.ok)return;let{version:n}=await a.json();if(!n||!Rs(n,Et))return;e=!0,await G(ja,{reload:!0,releases:[{version:n,date:"",items:[{icon:"new",title:`Stock Casa ${n}`,text:"Actualiza para ver lo nuevo. No perder\xE1s nada: tus datos est\xE1n en la nube."}]}]})&&location.reload()}catch{}};setInterval(t,30*60*1e3),document.addEventListener("visibilitychange",t)}function Os({active:e,onLogout:t,onNoHouse:a,openSettingsRequest:n}){let[s,o]=_(null),[l,r]=_([]),[u,h]=_(null),[g,i]=_({}),p=async(I=!1)=>{await B(async()=>{let v=await J.current(),[E,w,x]=await Promise.all([J.mine(),ke.me(!0),ke.many(v.memberIds,!0)]);o(v),r(E),h(w),i(x)},{loading:!1,onError:I?()=>{}:pe})};V(()=>{e&&p()},[e]),xe(I=>I==="changed"&&e&&p(!0)),V(()=>{e&&n&&D()},[n]);let d=async()=>{await navigator.clipboard?.writeText(s.inviteCode).catch(()=>{}),P("pop"),O("C\xF3digo copiado")},m=()=>{let I=`\xA1\xDAnete a \xAB${s.name}\xBB en Stock Casa! C\xF3digo: ${s.inviteCode}
${location.origin}${location.pathname}`;navigator.share?navigator.share({text:I}).catch(()=>{}):d()},$=I=>{J.switchTo(I),P("pop"),O(`Ahora est\xE1s en \xAB${I.name}\xBB`),Y.emit("changed"),p(!0)},b=async()=>{let I=await ue({title:"Unirse con c\xF3digo",label:"C\xF3digo de 6 caracteres",maxLength:6,confirm:"Unirme"});I&&await B(async()=>{let v=await J.join(I);it(),P("success"),O(`Ahora est\xE1s en \xAB${v.name}\xBB`),Y.emit("changed"),p(!0)})},k=async()=>{let I=await ue({title:"Crear otra casa",label:"Nombre",confirm:"Crear"});I&&await B(async()=>{let v=await J.create(I);P("success"),O(`Casa \xAB${v.name}\xBB creada`),Y.emit("changed"),p(!0)})},z=async()=>{let I=await ue({title:"Cambiar nombre",label:"Nombre de la casa",value:s.name});I&&await B(async()=>{await J.rename(s,I),p(!0)})},M=async()=>{let I=s.memberIds.length<=1,v=l.length<=1?`

Es tu \xFAnica casa: despu\xE9s podr\xE1s crear otra o unirte a una con su c\xF3digo.`:"";await $e({title:I?"Eliminar casa":"Salir de la casa",message:(I?`Eres el \xFAnico miembro de \xAB${s.name}\xBB. Se borrar\xE1n sus productos y su lista de la compra.`:`Dejar\xE1s de ver \xAB${s.name}\xBB. Los dem\xE1s miembros la seguir\xE1n teniendo.`)+v,confirm:I?"Eliminar":"Salir",danger:!0})&&await B(async()=>{await J.leave(s),O("Has salido de la casa"),(await J.mine()).length?(Y.emit("changed"),p(!0)):a()})},N=async()=>{await $e({title:"Cerrar sesi\xF3n",message:"\xBFSeguro que quieres cerrar sesi\xF3n en este dispositivo?",confirm:"Cerrar sesi\xF3n"})&&(await B(He.logout),t())},F=async(I="profile")=>{await G(Cr,{profile:u,section:I}),p(!0)};async function D(){let I=s||await J.current().catch(()=>null);await G(Mr,{house:I})==="preferences"?F("preferences"):p(!0)}let C=()=>G(xr,{}),L=async()=>{let I=await _r(s.inviteCode);P("pop"),navigator.share?navigator.share({text:I}).catch(()=>{}):(await navigator.clipboard?.writeText(I).catch(()=>{}),O("Mensaje copiado: p\xE9galo en WhatsApp o donde quieras"))};if(!s)return c`<section class="tab"><header class="tab-header"><h1 class="brand">Casa</h1></header>
    <div class="skeleton-list"><div class="skeleton tall"></div><div class="skeleton"></div></div></section>`;let S=H.current()?.userId,T=ne.get();return c`<section class="tab">
    <header class="tab-header"><h1 class="brand grow">Casa</h1></header>

    <div class="card hero enter" style="--i:0">
      <span class="hero-icon"><${f} name="home" size=${30} /></span>
      <div class="grow min0">
        <h2 class="ellipsis">${s.name}</h2>
        <p class="muted small">${s.memberIds.length===1?"Solo t\xFA":`${s.memberIds.length} miembros`} · ${ot(s.shoppingDay)}</p>
      </div>
      <button class="icon-btn" onClick=${z} aria-label="Cambiar nombre"><${f} name="edit" /></button>
    </div>

    ${u&&c`<button class="card profile-card enter" style="--i:1" onClick=${()=>F()}>
      <${Je} profile=${u} size=${56} />
      <span class="grow min0 left">
        <strong class="ellipsis block big-text">${ve(u)}</strong>
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
        <button class="btn tonal" onClick=${m}><${f} name="share" size=${18} /> Compartir</button>
      </div>
    </div>

    <div class="card enter" style="--i:3">
      <h3>Miembros</h3>
      ${s.memberIds.map((I,v)=>{let E=g[I]||{id:I,email:s.memberEmails[v]||"",avatarColor:Be[v%Be.length]};return c`<div class="member">
          <${Je} profile=${E} size=${40} />
          <div class="grow min0">
            <strong class="ellipsis block">${ve(E)}${I===S?" (t\xFA)":""}</strong>
            <span class="muted small ellipsis block">${E.email}</span>
          </div>
          ${I===s.ownerId&&c`<span class="tag primary">Creador</span>`}
        </div>`})}
    </div>

    <div class="card menu enter" style="--i:4">
      <h3>Ajustes</h3>
      <button class="menu-row" onClick=${D}>
        <span class="menu-icon"><${f} name="calendar" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Día de compra</strong><span class="muted small ellipsis block">${ot(s.shoppingDay)}</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>F("appearance")}>
        <span class="menu-icon"><${f} name="palette" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Apariencia</strong><span class="muted small ellipsis block">${yr(T)}</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>F("preferences")}>
        <span class="menu-icon"><${f} name="store" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Supermercados, caducidad y alergias</strong><span class="muted small ellipsis block">${T.stores.map(I=>Ie.find(v=>v.key===I)?.label).filter(Boolean).join(", ")} · ${yn(T.defaultExpiry)}${T.allergens?.length?` \xB7 ${Ee(T.allergens).join(", ")}`:""}</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>ha()}>
        <span class="menu-icon"><${f} name="help" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Tutorial</strong><span class="muted small ellipsis block">Todo lo que puedes hacer, paso a paso</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${()=>Hs()}>
        <span class="menu-icon"><${f} name="new" size=${20} /></span>
        <span class="grow min0 left"><strong class="block">Novedades</strong><span class="muted small ellipsis block">Versión ${Et}</span></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${L}>
        <span class="menu-icon"><${f} name="share" size=${20} /></span>
        <span class="grow left"><strong>Compartir Stock Casa</strong></span>
        <${f} name="chevron_right" size=${20} />
      </button>
      <button class="menu-row" onClick=${C}>
        <span class="menu-icon"><${f} name="home" size=${20} /></span>
        <span class="grow left"><strong>Instalar en el móvil</strong></span>
        <${f} name="chevron_right" size=${20} />
      </button>
    </div>

    <div class="card enter" style="--i:5">
      <h3>Mis casas</h3>
      ${l.map(I=>c`<button class="house-row" onClick=${()=>I.id!==s.id&&$(I)}>
        <span class="grow left ellipsis">${I.name}</span>
        ${I.id===s.id?c`<span class="tag success">Abierta</span>`:c`<span class="muted small">Abrir</span>`}
      </button>`)}
      <div class="row-2">
        <button class="btn tonal" onClick=${b}><${f} name="login" size=${18} /> Unirme</button>
        <button class="btn tonal" onClick=${k}><${f} name="add" size=${18} /> Crear</button>
      </div>
    </div>

    <div class="row-2 enter" style="--i:6">
      <button class="btn text" onClick=${N}><${f} name="logout" size=${20} /> Cerrar sesión</button>
      <button class="btn danger" onClick=${M}><${f} name="logout" size=${20} /> ${s.memberIds.length<=1?"Eliminar casa":"Salir de la casa"}</button>
    </div>
    <p class="muted tiny center">Stock Casa web · mismos datos que la app de Android</p>
  </section>`}var yr=e=>[Wt,_t,Ea].map((t,a)=>t.find(n=>n.key===[e.style,e.theme,e.mode][a])?.label).join(" \xB7 "),wr=`\xA1Prueba Stock Casa! La despensa y la lista de la compra de casa, compartidas.

Si tienes Android, descarga la app: {apk}
Si tienes iPhone, abre este enlace en Safari y elige Compartir \u2192 \xABA\xF1adir a pantalla de inicio\xBB: {web}

Despu\xE9s crea tu cuenta y \xFAnete a nuestra casa con el c\xF3digo {codigo}.`;async function _r(e){let t=`${location.origin}${location.pathname.replace(/[^/]*$/,"")}`,a=wr;try{let n=await fetch(`compartir.txt?v=${Date.now()}`,{cache:"no-store"});n.ok&&(a=(await n.text()).trim()||a)}catch{}return a.replaceAll("{apk}",`${t}StockCasa.apk`).replaceAll("{web}",t).replaceAll("{codigo}",e||"que te pase")}var kr=[{key:"profile",label:"Perfil",icon:"person"},{key:"appearance",label:"Apariencia",icon:"palette"},{key:"preferences",label:"Preferencias",icon:"settings"}];function Cr({profile:e,section:t="profile",close:a}){let[n,s]=_(t),[o,l]=_(e);return c`<div class="sheet-body profile-sheet">
    <div class="sheet-title">
      <${Je} profile=${o} size=${44} />
      <div class="grow min0"><h2 class="ellipsis">${ve(o)}</h2><p class="muted small ellipsis">${o.email}</p></div>
      <button class="icon-btn" onClick=${()=>a()} aria-label="Cerrar"><${f} name="close" /></button>
    </div>
    <div class="segmented tabs">
      ${kr.map(r=>c`<button class=${n===r.key?"on":""} onClick=${()=>{s(r.key),P("tap")}}>
        <${f} name=${r.icon} size=${16} /> ${r.label}</button>`)}
    </div>
    <div class="section-body" key=${n}>
      ${n==="profile"&&c`<${Sr} profile=${o} onSaved=${l} />`}
      ${n==="appearance"&&c`<${Ir} />`}
      ${n==="preferences"&&c`<${zr} />`}
    </div>
  </div>`}function Sr({profile:e,onSaved:t}){let[a,n]=_(e.nickname),[s,o]=_(e.avatarColor),[l,r]=_(void 0),[u,h]=_(null),g=W(),i={...e,nickname:a||e.nickname,avatarColor:s,avatar:l===null?null:u?{url:u}:e.avatar},p=a!==e.nickname||s!==e.avatarColor||l!==void 0,d=async $=>{let b=$.target.files?.[0];if($.target.value="",!b)return;let k=await lt(b,600);r(k),h(URL.createObjectURL(k))};return c`<form class="stack" onSubmit=${async $=>{$.preventDefault();let b=await B(()=>ke.save({nickname:a,avatarColor:s,photo:l}));b&&(P("success"),O("Perfil guardado"),r(void 0),t(b),Y.emit("changed"))}}>
    <div class="card center-col">
      <button type="button" class="plain avatar-edit" onClick=${()=>g.current.click()}>
        <${Je} profile=${i} size=${104} />
        <span class="avatar-cam"><${f} name="camera" size=${18} /></span>
      </button>
      ${i.avatar&&c`<button type="button" class="btn text small" onClick=${()=>{r(null),h(null)}}>Quitar foto</button>`}
      <input ref=${g} type="file" accept="image/*" hidden onChange=${d} />
    </div>
    <div class="card stack">
      <label class="field"><span>Apodo</span><input maxlength="24" value=${a} onInput=${$=>n($.target.value)} /></label>
      <span class="field-label">Color del avatar</span>
      <div class="color-row">
        ${Be.map($=>c`<button type="button" class=${`color-dot ${$===s?"selected":""}`} style=${`background:${$}`}
          aria-label="Color" onClick=${()=>{o($),P("tap")}}></button>`)}
      </div>
    </div>
    <button class="btn primary wide" type="submit" disabled=${!p}><${f} name="check" size=${20} /> Guardar perfil</button>
  </form>`}function Ir(){let[e,t]=_(ne.get()),a=(n,s)=>{t(ne.set(n)),Pe(s),P("pop")};return c`<div class="stack appearance">
    <div class="card stack">
      <h3>Estilo</h3>
      <div class="style-list">
        ${Wt.map(n=>c`<button type="button" class=${`style-choice ${e.style===n.key?"selected":""}`}
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
        ${_t.map(n=>c`<button type="button" class=${`theme-choice ${e.theme===n.key?"selected":""}`}
          onClick=${s=>a({theme:n.key},s.currentTarget.firstChild)}>
          <span class="swatch" style=${`background:${n.color};border-color:${n.soft}`}>${e.theme===n.key&&c`<${f} name="check" size=${22} />`}</span>
          <span>${n.label}</span>
        </button>`)}
      </div>
    </div>

    <div class="card stack">
      <h3>Modo</h3>
      <div class="segmented">
        ${Ea.map(n=>c`<button type="button" class=${e.mode===n.key?"on":""}
          onClick=${s=>a({mode:n.key},s.currentTarget)}>${n.label}</button>`)}
      </div>
    </div>
    <p class="muted small center">La apariencia solo cambia en este dispositivo</p>
  </div>`}function zr(){let[e,t]=_(ne.get()),a=s=>t(ne.set(s)),n=s=>{let o=e.stores.includes(s);if(o&&e.stores.length===1)return O("Elige al menos un supermercado");let l=o?e.stores.filter(r=>r!==s):Ie.map(r=>r.key).filter(r=>r===s||e.stores.includes(r));a({stores:l}),P(o?"tap":"pop")};return c`<div class="stack">
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
        ${et.map(s=>{let o=(e.allergens||[]).includes(s.key);return c`<button class=${`chip ${o?"checked":""}`} onClick=${()=>{a({allergens:o?e.allergens.filter(l=>l!==s.key):[...e.allergens||[],s.key]}),P(o?"tap":"pop")}}>${s.label}</button>`})}
      </div>
    </div>

    <div class="card stack">
      <h3>Caducidad por defecto</h3>
      <p class="muted small">La fecha que se propone al añadir un producto nuevo. Siempre se puede cambiar en su ficha.</p>
      <div class="chips wrap">
        ${vt.map(s=>c`<button class=${`chip ${e.defaultExpiry===s.days?"checked":""}`} onClick=${()=>{a({defaultExpiry:s.days}),P("tap")}}>${s.label}</button>`)}
      </div>
    </div>

    <div class="card">
      <h3>Sonidos y vibración</h3>
      <label class="switch-row"><span>Sonidos</span>
        <input type="checkbox" class="switch" checked=${e.sounds} onChange=${s=>{a({sounds:s.target.checked}),s.target.checked&&P("check")}} /></label>
      <label class="switch-row"><span>Vibración (Android)</span>
        <input type="checkbox" class="switch" checked=${e.vibration} onChange=${s=>a({vibration:s.target.checked})} /></label>
    </div>
    <p class="muted small center">Estas preferencias se guardan en este dispositivo</p>
  </div>`}function Mr({house:e,close:t}){let[a,n]=_(e),s=W(),o=async l=>{if(!a||l===a.shoppingDay)return;let r=await B(()=>J.setShoppingDay(a,l),{loading:!1});r&&(n(r),P("pop"),Pe(s.current),Y.emit("changed"))};return c`<div class="sheet-body">
    <div class="sheet-title"><h2 class="grow">Día de compra</h2>
      <button class="icon-btn" onClick=${()=>t()} aria-label="Cerrar"><${f} name="close" /></button></div>

    ${a&&c`<div class="card">
      <h3>Día de compra semanal</h3>
      <p class="muted small">Lo comparten todos los de «${a.name}»</p>
      <div class="chips wrap">
        ${[0,1,2,3,4,5,6,7].map(l=>c`<button class=${`chip ${a.shoppingDay===l?"checked":""}`} onClick=${()=>o(l)}>
          ${l===0?"Ninguno":_n(l)}
        </button>`)}
      </div>
      <p class="primary-text strong" ref=${s}>${ot(a.shoppingDay)}</p>
      <p class="muted small">En el iPhone la web no puede mandar avisos como la app de Android; verás el día de compra en la pestaña Compra.</p>
    </div>`}
    <button class="btn tonal wide" onClick=${()=>t("preferences")}><${f} name="store" size=${18} /> Supermercados y otras preferencias</button>
  </div>`}function xr({close:e}){let t=/iPhone|iPad|iPod/.test(navigator.userAgent);return c`<div class="sheet-body">
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
  </div>`}var Er=[{key:"pantry",label:"Despensa",icon:"pantry"},{key:"shopping",label:"Compra",icon:"cart"},{key:"recipes",label:"Recetas",icon:"recipe"},{key:"plan",label:"Semana",icon:"calendar"},{key:"house",label:"Casa",icon:"home"}];function Ar(){let[e,t]=_(()=>He.isLoggedIn()?"home":"login"),[a,n]=_(()=>location.hash==="#compra"?"shopping":"pantry"),[s,o]=_(()=>new Set([a])),[l,r]=_(0),[u,h]=_(0);V(()=>{Dn(d=>{d.noHouse?t("setup"):(H.clear(),t("login"))})},[]),V(()=>{e==="home"&&setTimeout(()=>Bs(),600)},[e]);let g=(d,m)=>{d!==a&&P("tap"),n(d),o(new Set([...s,d])),m==="settings"&&h(Date.now()),window.scrollTo({top:0})},i=async()=>{try{let d=await J.mine();t(d.length?"home":"setup")}catch{t("home")}};if(e==="login")return c`<${ds} onLoggedIn=${i} onRegister=${()=>t("register")} />`;if(e==="register")return c`<${ps} onRegistered=${()=>t("setup")} onBack=${()=>t("login")} />`;if(e==="setup")return c`<${ms} onReady=${()=>{n("pantry"),t("home")}}
      onLogout=${async()=>{await He.logout(),t("login")}} />`;let p={goTo:g,setBadge:r};return c`<div class="app">
    <div class="tabs-content">
      ${s.has("pantry")&&c`<div class=${`tab-page ${a==="pantry"?"active":""}`}><${_s} active=${a==="pantry"} ...${p} /></div>`}
      ${s.has("shopping")&&c`<div class=${`tab-page ${a==="shopping"?"active":""}`}><${xs} active=${a==="shopping"} ...${p} /></div>`}
      ${s.has("recipes")&&c`<div class=${`tab-page ${a==="recipes"?"active":""}`}><${vs} active=${a==="recipes"} ...${p} /></div>`}
      ${s.has("plan")&&c`<div class=${`tab-page ${a==="plan"?"active":""}`}><${Ls} active=${a==="plan"} ...${p} /></div>`}
      ${s.has("house")&&c`<div class=${`tab-page ${a==="house"?"active":""}`}><${Os} active=${a==="house"}
        openSettingsRequest=${u} onLogout=${()=>t("login")} onNoHouse=${()=>t("setup")} /></div>`}
    </div>
    <nav class="bottom-nav">
      ${Er.map(d=>c`<button class=${`nav-item ${a===d.key?"active":""}`} onClick=${()=>g(d.key)} aria-label=${d.label}>
        <span class="nav-icon" key=${a===d.key?"on":"off"}><${f} name=${d.icon} size=${24} />
          ${d.key==="shopping"&&l>0&&c`<span class="badge">${l>99?"99+":l}</span>`}
        </span>
        <span class="nav-label">${d.label}</span>
      </button>`)}
    </nav>
  </div>`}Yt();var Fs=document.getElementById("app");Fs.textContent="";Ve(c`<${Ar} />`,Fs);"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});
