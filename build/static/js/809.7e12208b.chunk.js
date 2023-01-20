"use strict";(self.webpackChunksussy=self.webpackChunksussy||[]).push([[809],{8809:function(e,t,r){r.d(t,{ZP:function(){return V}});var n=r(9439),a=r(7762),s=r(4165),o=r(5861),c=r(3144),i=r(5671),u=r(7326),h=r(136),d=r(7277),f=r(8737),l=r(4942),p=globalThis.fetch,v=globalThis.WebSocket,w=globalThis.Request,b=globalThis.Response,x=[101,204,205,304],Z=[301,302,303,307,308],g=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(e,n){var a;return(0,i.Z)(this,r),a=t.call(this,n.message||n.code),(0,l.Z)((0,u.Z)(a),"status",void 0),(0,l.Z)((0,u.Z)(a),"body",void 0),a.status=e,a.body=n,a}return(0,c.Z)(r)}((0,f.Z)(Error)),k=(0,c.Z)((function e(t,r){(0,i.Z)(this,e),(0,l.Z)(this,"base",void 0),this.base=new URL("./v".concat(t,"/"),r)})),y="!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~";function m(e){for(var t=0;t<e.length;t++){var r=e[t];if(!y.includes(r))return!1}return!0}function R(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(y.includes(n)&&"%"!==n)t+=n;else t+="%"+n.charCodeAt(0).toString(16).padStart(2,"0")}return t}var H=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,1,e),(0,l.Z)((0,u.Z)(n),"ws",void 0),(0,l.Z)((0,u.Z)(n),"http",void 0),(0,l.Z)((0,u.Z)(n),"newMeta",void 0),(0,l.Z)((0,u.Z)(n),"getMeta",void 0),n.ws=new URL(n.base),n.http=new URL(n.base),n.newMeta=new URL("ws-new-meta",n.base),n.getMeta=new URL("ws-meta",n.base),"https:"===n.ws.protocol?n.ws.protocol="wss:":n.ws.protocol="ws:",n}return(0,c.Z)(r,[{key:"connect",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r,n,a,c){var i,u,h,d=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(this.newMeta,{method:"GET"});case 2:if((i=e.sent).ok){e.next=10;break}return e.t0=g,e.t1=i.status,e.next=8,i.json();case 8:throw e.t2=e.sent,new e.t0(e.t1,e.t2);case 10:return e.next=12,i.text();case 12:return u=e.sent,(h=new v(this.ws,["bare",R(JSON.stringify({remote:{protocol:r,host:n,port:a,path:c},headers:t,forward_headers:["accept-encoding","accept-language","sec-websocket-extensions","sec-websocket-key","sec-websocket-version"],id:u}))])).meta=new Promise((function(e,t){h.addEventListener("open",(0,o.Z)((0,s.Z)().mark((function r(){var n;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p(d.getMeta,{headers:{"x-bare-id":u},method:"GET"});case 2:if((n=r.sent).ok){r.next=12;break}return r.t0=t,r.t1=g,r.t2=n.status,r.next=9,n.json();case 9:r.t3=r.sent,r.t4=new r.t1(r.t2,r.t3),(0,r.t0)(r.t4);case 12:return r.t5=e,r.next=15,n.json();case 15:r.t6=r.sent,(0,r.t5)(r.t6);case 17:case"end":return r.stop()}}),r)})))),h.addEventListener("error",t)})),e.abrupt("return",h);case 16:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a,s){return e.apply(this,arguments)}}()},{key:"request",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r,o,c,i,u,h,d,f){var l,v,Z,g,k,y,m,R,H,S,E,L,U,T,M,j;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.startsWith("blob:")){e.next=8;break}return e.next=3,p("blob:".concat(location.origin).concat(h));case 3:return v=e.sent,(Z=new b(v.body,v)).rawHeaders=Object.fromEntries(v.headers),Z.rawResponse=v,e.abrupt("return",Z);case 8:if(g={},r instanceof Headers){k=(0,a.Z)(r);try{for(k.s();!(y=k.n()).done;)m=(0,n.Z)(y.value,2),R=m[0],H=m[1],g[R]=H}catch(s){k.e(s)}finally{k.f()}}else for(S in r)g[S]=r[S];return E=["accept-encoding","accept-language"],L={credentials:"omit",method:t,signal:f},void 0!==o&&(L.body=o),U=new w(this.http,L),this.writeBareRequest(U,c,i,h,u,g,E),e.next=17,p(U);case 17:return T=e.sent,e.next=20,this.readBareResponse(T);case 20:return M=e.sent,(j=new b(x.includes(M.status)?void 0:T.body,{status:M.status,statusText:null!==(l=M.statusText)&&void 0!==l?l:void 0,headers:M.headers})).rawHeaders=M.rawHeaders,j.rawResponse=T,e.abrupt("return",j);case 25:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a,s,o,c,i,u){return e.apply(this,arguments)}}()},{key:"readBareResponse",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){var r,n,a,o,c,i,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=7;break}return e.t0=g,e.t1=t.status,e.next=5,t.json();case 5:throw e.t2=e.sent,new e.t0(e.t1,e.t2);case 7:r=0,n=["x-bare-status","x-bare-status-text","x-bare-headers"];case 9:if(!(r<n.length)){e.next=16;break}if(a=n[r],t.headers.has(a)){e.next=13;break}throw new g(500,{code:"IMPL_MISSING_BARE_HEADER",id:"response.headers.".concat(a)});case 13:r++,e.next=9;break;case 16:return o=parseInt(t.headers.get("x-bare-status")),c=t.headers.get("x-bare-status-text"),i=JSON.parse(t.headers.get("x-bare-headers")),u=new Headers(i),e.abrupt("return",{status:o,statusText:c,rawHeaders:i,headers:u});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"writeBareRequest",value:function(e,t,r,n,a,s,o){e.headers.set("x-bare-protocol",t),e.headers.set("x-bare-host",r),e.headers.set("x-bare-path",n),e.headers.set("x-bare-port",a.toString()),e.headers.set("x-bare-headers",JSON.stringify(s)),e.headers.set("x-bare-forward-headers",JSON.stringify(o))}}]),r}(k);function S(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function E(e,t,r,n,a,s){return S((o=S(S(t,e),S(n,s)))<<(c=a)|o>>>32-c,r);var o,c}function L(e,t,r,n,a,s,o){return E(t&r|~t&n,e,t,a,s,o)}function U(e,t,r,n,a,s,o){return E(t&n|r&~n,e,t,a,s,o)}function T(e,t,r,n,a,s,o){return E(t^r^n,e,t,a,s,o)}function M(e,t,r,n,a,s,o){return E(r^(t|~n),e,t,a,s,o)}function j(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,n=-271733879,a=-1732584194,s=271733878,o=0;o<e.length;o+=16){var c=r,i=n,u=a,h=s;r=L(r,n,a,s,e[o],7,-680876936),s=L(s,r,n,a,e[o+1],12,-389564586),a=L(a,s,r,n,e[o+2],17,606105819),n=L(n,a,s,r,e[o+3],22,-1044525330),r=L(r,n,a,s,e[o+4],7,-176418897),s=L(s,r,n,a,e[o+5],12,1200080426),a=L(a,s,r,n,e[o+6],17,-1473231341),n=L(n,a,s,r,e[o+7],22,-45705983),r=L(r,n,a,s,e[o+8],7,1770035416),s=L(s,r,n,a,e[o+9],12,-1958414417),a=L(a,s,r,n,e[o+10],17,-42063),n=L(n,a,s,r,e[o+11],22,-1990404162),r=L(r,n,a,s,e[o+12],7,1804603682),s=L(s,r,n,a,e[o+13],12,-40341101),a=L(a,s,r,n,e[o+14],17,-1502002290),r=U(r,n=L(n,a,s,r,e[o+15],22,1236535329),a,s,e[o+1],5,-165796510),s=U(s,r,n,a,e[o+6],9,-1069501632),a=U(a,s,r,n,e[o+11],14,643717713),n=U(n,a,s,r,e[o],20,-373897302),r=U(r,n,a,s,e[o+5],5,-701558691),s=U(s,r,n,a,e[o+10],9,38016083),a=U(a,s,r,n,e[o+15],14,-660478335),n=U(n,a,s,r,e[o+4],20,-405537848),r=U(r,n,a,s,e[o+9],5,568446438),s=U(s,r,n,a,e[o+14],9,-1019803690),a=U(a,s,r,n,e[o+3],14,-187363961),n=U(n,a,s,r,e[o+8],20,1163531501),r=U(r,n,a,s,e[o+13],5,-1444681467),s=U(s,r,n,a,e[o+2],9,-51403784),a=U(a,s,r,n,e[o+7],14,1735328473),r=T(r,n=U(n,a,s,r,e[o+12],20,-1926607734),a,s,e[o+5],4,-378558),s=T(s,r,n,a,e[o+8],11,-2022574463),a=T(a,s,r,n,e[o+11],16,1839030562),n=T(n,a,s,r,e[o+14],23,-35309556),r=T(r,n,a,s,e[o+1],4,-1530992060),s=T(s,r,n,a,e[o+4],11,1272893353),a=T(a,s,r,n,e[o+7],16,-155497632),n=T(n,a,s,r,e[o+10],23,-1094730640),r=T(r,n,a,s,e[o+13],4,681279174),s=T(s,r,n,a,e[o],11,-358537222),a=T(a,s,r,n,e[o+3],16,-722521979),n=T(n,a,s,r,e[o+6],23,76029189),r=T(r,n,a,s,e[o+9],4,-640364487),s=T(s,r,n,a,e[o+12],11,-421815835),a=T(a,s,r,n,e[o+15],16,530742520),r=M(r,n=T(n,a,s,r,e[o+2],23,-995338651),a,s,e[o],6,-198630844),s=M(s,r,n,a,e[o+7],10,1126891415),a=M(a,s,r,n,e[o+14],15,-1416354905),n=M(n,a,s,r,e[o+5],21,-57434055),r=M(r,n,a,s,e[o+12],6,1700485571),s=M(s,r,n,a,e[o+3],10,-1894986606),a=M(a,s,r,n,e[o+10],15,-1051523),n=M(n,a,s,r,e[o+1],21,-2054922799),r=M(r,n,a,s,e[o+8],6,1873313359),s=M(s,r,n,a,e[o+15],10,-30611744),a=M(a,s,r,n,e[o+6],15,-1560198380),n=M(n,a,s,r,e[o+13],21,1309151649),r=M(r,n,a,s,e[o+4],6,-145523070),s=M(s,r,n,a,e[o+11],10,-1120210379),a=M(a,s,r,n,e[o+2],15,718787259),n=M(n,a,s,r,e[o+9],21,-343485551),r=S(r,c),n=S(n,i),a=S(a,u),s=S(s,h)}return[r,n,a,s]}function C(e){for(var t="",r=32*e.length,n=0;n<r;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function B(e){for(var t=[],r=e.length>>2,n=0;n<r;n+=1)t[n]=0;for(var a=8*e.length,s=0;s<a;s+=8)t[s>>5]|=(255&e.charCodeAt(s/8))<<s%32;return t}function A(e){for(var t="0123456789abcdef",r="",n=0;n<e.length;n+=1){var a=e.charCodeAt(n);r+=t.charAt(a>>>4&15)+t.charAt(15&a)}return r}function D(e){return unescape(encodeURIComponent(e))}function O(e){return function(e){return C(j(B(e),8*e.length))}(D(e))}function q(e,t){return function(e,t){var r=B(e),n=[],a=[];r.length>16&&(r=j(r,8*e.length));for(var s=0;s<16;s+=1)n[s]=909522486^r[s],a[s]=1549556828^r[s];var o=j(n.concat(B(t)),512+8*t.length);return C(j(a.concat(o),640))}(D(e),D(t))}function I(e,t,r){return t?r?q(t,e):A(q(t,e)):r?O(e):A(O(e))}var N=3072;function W(e){var t=new Headers(e);if(e.has("x-bare-headers")){var r=e.get("x-bare-headers");if(r.length>N){t.delete("x-bare-headers");for(var n=0,a=0;a<r.length;a+=N){var s=r.slice(a,a+N),o=n++;t.set("x-bare-headers-".concat(o),";".concat(s))}}}return t}function J(e){var t=new Headers(e),r="x-bare-headers";if(e.has("".concat(r,"-0"))){var s,o=[],c=(0,a.Z)(e);try{for(c.s();!(s=c.n()).done;){var i=(0,n.Z)(s.value,2),u=i[0],h=i[1];if(u.startsWith(r)){if(!h.startsWith(";"))throw new g(400,{code:"INVALID_BARE_HEADER",id:"request.headers.".concat(u),message:"Value didn't begin with semi-colon."});o[parseInt(u.slice(r.length+1))]=h.slice(1),t.delete(u)}}}catch(d){c.e(d)}finally{c.f()}t.set(r,o.join(""))}return t}var P=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,i.Z)(this,r),n=t.call(this,2,e),(0,l.Z)((0,u.Z)(n),"ws",void 0),(0,l.Z)((0,u.Z)(n),"http",void 0),(0,l.Z)((0,u.Z)(n),"newMeta",void 0),(0,l.Z)((0,u.Z)(n),"getMeta",void 0),n.ws=new URL(n.base),n.http=new URL(n.base),n.newMeta=new URL("./ws-new-meta",n.base),n.getMeta=new URL("./ws-meta",n.base),"https:"===n.ws.protocol?n.ws.protocol="wss:":n.ws.protocol="ws:",n}return(0,c.Z)(r,[{key:"connect",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r,n,a,c){var i,u,h,d,f=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new w(this.newMeta,{headers:this.createBareHeaders(r,n,c,a,t)}),e.next=3,p(i);case 3:if((u=e.sent).ok){e.next=11;break}return e.t0=g,e.t1=u.status,e.next=9,u.json();case 9:throw e.t2=e.sent,new e.t0(e.t1,e.t2);case 11:return e.next=13,u.text();case 13:return h=e.sent,(d=new v(this.ws,[h])).meta=new Promise((function(e,t){d.addEventListener("open",(0,o.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(f.getMeta,{headers:{"x-bare-id":h},method:"GET"});case 2:return r=t.sent,t.t0=e,t.next=6,f.readBareResponse(r);case 6:return t.next=8,t.sent;case 8:t.t1=t.sent,(0,t.t0)(t.t1);case 10:case"end":return t.stop()}}),t)})))),d.addEventListener("error",t)})),e.abrupt("return",d);case 17:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a,s){return e.apply(this,arguments)}}()},{key:"request",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r,o,c,i,u,h,d,f){var l,v,Z,g,k,y,m,R,H,S,E,L,U,T,M;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.startsWith("blob:")){e.next=8;break}return e.next=3,p("blob:".concat(location.origin).concat(h));case 3:return v=e.sent,(Z=new b(v.body,v)).rawHeaders=Object.fromEntries(v.headers),Z.rawResponse=v,e.abrupt("return",Z);case 8:if(g={},r instanceof Headers){k=(0,a.Z)(r);try{for(k.s();!(y=k.n()).done;)m=(0,n.Z)(y.value,2),R=m[0],H=m[1],g[R]=H}catch(s){k.e(s)}finally{k.f()}}else for(S in r)g[S]=r[S];return E={credentials:"omit",method:t,signal:f},"only-if-cached"!==d&&(E.cache=d),void 0!==o&&(E.body=o),E.headers=this.createBareHeaders(c,i,h,u,g),L=new w(this.http+"?cache="+I("".concat(c).concat(i).concat(u).concat(h)),E),e.next=17,p(L);case 17:return U=e.sent,e.next=20,this.readBareResponse(U);case 20:return T=e.sent,(M=new b(x.includes(T.status)?void 0:U.body,{status:T.status,statusText:null!==(l=T.statusText)&&void 0!==l?l:void 0,headers:T.headers})).rawHeaders=T.rawHeaders,M.rawResponse=U,e.abrupt("return",M);case 25:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a,s,o,c,i,u){return e.apply(this,arguments)}}()},{key:"readBareResponse",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){var r,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=7;break}return e.t0=g,e.t1=t.status,e.next=5,t.json();case 5:throw e.t2=e.sent,new e.t0(e.t1,e.t2);case 7:return r=J(t.headers),n={},r.has("x-bare-status")&&(n.status=parseInt(r.get("x-bare-status"))),r.has("x-bare-status-text")&&(n.statusText=r.get("x-bare-status-text")),r.has("x-bare-headers")&&(n.rawHeaders=JSON.parse(r.get("x-bare-headers")),n.headers=new Headers(n.rawHeaders)),e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createBareHeaders",value:function(e,t,r,n,s){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[],i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],u=new Headers;u.set("x-bare-protocol",e),u.set("x-bare-host",t),u.set("x-bare-path",r),u.set("x-bare-port",n.toString()),u.set("x-bare-headers",JSON.stringify(s));var h,d=(0,a.Z)(o);try{for(d.s();!(h=d.n()).done;){var f=h.value;u.append("x-bare-forward-headers",f)}}catch(Z){d.e(Z)}finally{d.f()}var l,p=(0,a.Z)(c);try{for(p.s();!(l=p.n()).done;){var v=l.value;u.append("x-bare-pass-headers",v)}}catch(Z){p.e(Z)}finally{p.f()}var w,b=(0,a.Z)(i);try{for(b.s();!(w=b.n()).done;){var x=w.value;u.append("x-bare-pass-status",x.toString())}}catch(Z){b.e(Z)}finally{b.f()}return W(u),u}}]),r}(k),_=[["v2",P],["v1",H]];function G(e,t){return F.apply(this,arguments)}function F(){return(F=(0,o.Z)((0,s.Z)().mark((function e(t,r){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,{signal:r});case 2:if((n=e.sent).ok){e.next=11;break}return e.t0=Error,e.t1="Unable to fetch Bare meta: ".concat(n.status," "),e.next=8,n.text();case 8:throw e.t2=e.sent,e.t3=e.t1.concat.call(e.t1,e.t2),new e.t0(e.t3);case 11:return e.next=13,n.json();case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(){function e(t,r){(0,i.Z)(this,e),(0,l.Z)(this,"manfiest",void 0),(0,l.Z)(this,"client",void 0),(0,l.Z)(this,"server",void 0),(0,l.Z)(this,"working",void 0),(0,l.Z)(this,"onDemand",void 0),(0,l.Z)(this,"onDemandSignal",void 0),this.server=new URL(t),!r||r instanceof AbortSignal?(this.onDemand=!0,this.onDemandSignal=r):(this.onDemand=!1,this.manfiest=r,this.getClient())}return(0,c.Z)(e,[{key:"data",get:function(){return this.manfiest}},{key:"demand",value:function(){var e=this;if(this.onDemand)return this.working||(this.working=G(this.server,this.onDemandSignal).then((function(t){e.manfiest=t,e.getClient()}))),this.working}},{key:"getClient",value:function(){for(var e=0,t=_;e<t.length;e++){var r=(0,n.Z)(t[e],2),a=r[0],s=r[1];if(this.data.versions.includes(a))return void(this.client=new s(this.server))}throw new Error("Unable to find compatible client version.")}},{key:"request",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r,n,a,o,c,i,u,h){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.demand();case 2:return e.next=4,this.client.request(t,r,n,a,o,c,i,u,h);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a,s,o,c,i,u){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r,n,a,o){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.demand();case 2:return e.abrupt("return",this.client.connect(t,r,n,a,o));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a,s){return e.apply(this,arguments)}}()},{key:"createWebSocket",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=t instanceof Headers?Object.fromEntries(t):t;e=new URL(e),n.Host=e.host,n.Pragma="no-cache",n["Cache-Control"]="no-cache",n.Upgrade="websocket",n.Connection="Upgrade","string"===typeof r&&(r=[r]);var s,o=(0,a.Z)(r);try{for(o.s();!(s=o.n()).done;){var c=s.value;if(!m(c))throw new DOMException("Failed to construct 'WebSocket': The subprotocol '".concat(c,"' is invalid."))}}catch(i){o.e(i)}finally{o.f()}return r.length&&(n["Sec-Websocket-Protocol"]=r.join(", ")),this.connect(n,e.protocol,e.hostname,e.port,e.pathname+e.search)}},{key:"fetch",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){var r,n,a,o,c,i,u,h,d,f=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=f.length>1&&void 0!==f[1]?f[1]:{},t instanceof w?(r||(r=t),t=new URL(t.url)):t=new URL(t),n="string"===typeof r.method?r.method:"GET",void 0!==r.body&&null!==r.body&&(a=r.body),o="object"===typeof r.headers&&null!==r.headers?r.headers instanceof Headers?Object.fromEntries(r.headers):r.headers:{},c="string"===typeof r.cache?r.cache:"default",r.signal instanceof AbortSignal&&(i=r.signal),u=0;case 8:return h=void 0,h=""===t.port?"https:"===t.protocol?"443":"80":t.port,o.host=t.host,e.next=13,this.request(n,o,a,t.protocol,t.hostname,h,t.pathname+t.search,c,i);case 13:if((d=e.sent).finalURL=t.toString(),!Z.includes(d.status)){e.next=29;break}e.t0=r.redirect,e.next="follow"===e.t0?19:"error"===e.t0?25:"manual"===e.t0?26:19;break;case 19:if(!(20>u&&d.headers.has("location"))){e.next=24;break}return t=new URL(d.headers.get("location"),t),e.abrupt("continue",30);case 24:case 25:throw new TypeError("Failed to fetch");case 26:return e.abrupt("return",d);case 27:e.next=30;break;case 29:return e.abrupt("return",d);case 30:u++,e.next=8;break;case 33:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=809.7e12208b.chunk.js.map