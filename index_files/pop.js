function PopAds(e){var acidProt=!1,t=0,n=0,o=0,i="",r=!(!window.console||!window.console.log),d=function(e,t){function n(){if(g.chrome)try{var e=document.createElement("object");e.type="application/x-shockwave-flash",e.id="ppaco_hilfgt_overlay",document.body.appendChild(e),document.getElementById("ppaco_hilfgt_overlay").focus()}catch(t){}}
function o(){if(g.chrome)try{document.getElementById("ppaco_hilfgt_overlay").parentNode.removeChild(document.getElementById("ppaco_hilfgt_overlay"))}catch(e){}}
function i(ro){try{u.blur(),ro.window.focus(),window.self.window.focus(),window.focus(),g.firefox&&d(),g.webkit&&(n(),a(),o()),g.msie&&setTimeout(function(){u.blur(),ro.window.focus(),window.self.window.focus(),window.focus()},1e3)}catch(e){}}
function d(){var e=window.open("about:blank");e.focus(),e.close()}
function a(){var e=document.createElement("a");e.href="data:text/html,<script>window.close();</script>",document.getElementsByTagName("body")[0].appendChild(e);var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!1,!0,window,0,0,0,0,0,!0,!1,!1,!0,0,null),e.dispatchEvent(t),e.parentNode.removeChild(e)}
try{var s=top!=self&&"string"==typeof top.document.location.toString()?top:self}catch(c){s=self}
var u=null;t=t||{};var l=t.name||Math.floor(1e3*Math.random()+1),p=t.width||window.outerWidth||window.innerWidth,m=t.height||window.outerHeight-100||window.innerHeight,f="undefined"!=typeof t.left?t.left.toString():window.screenX,h="undefined"!=typeof t.top?t.top.toString():window.screenY,w=t.callback||function(){},y=t.dynurl||function(){return""},v=t.type||"popunder",g=function(){var e=navigator.userAgent.toLowerCase(),t={webkit:/webkit/.test(e),mozilla:/mozilla/.test(e)&&!/(compatible|webkit)/.test(e),chrome:/chrome/.test(e)&&!/(edge\/)/.test(e),msie:/msie|trident\//.test(e)&&!/opera/.test(e),firefox:/firefox/.test(e),safari:/safari/.test(e)&&!/chrome/.test(e),opera:/opera/.test(e)};return t.version=t.safari?(e.match(/.+(?:ri)[\/: ]([\d.]+)/)||[])[1]:(e.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/)||[])[1],t}();!function(e,t,d,a,c,l){var p="toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width="+d.toString()+",height="+a.toString()+",screenX="+c+",screenY="+l;if(d=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):(e["e"+t+n]=n,e[t+n]=function(){e["e"+t+n](window.event)},e.attachEvent("on"+t,e[t+n]))},a=g.chrome&&"popunder"==v&&!!navigator.mimeTypes["application/x-shockwave-flash"],g.chrome&&!a&&(v="tabunder"),a){document.getElementById("popads_topmost")&&(document.getElementById("popads_topmost").style.display="none"),r&&console.log("pntn_en");{var m=document,f=window;m.documentElement.clientWidth-2,m.documentElement.clientHeight-2}!function(){var t,n;f.cE||(f.cE=function(e){return m.createElement(e)});var o=y();f._pah={oclb:function(){var wox=window.open(e+o,"pa2117","width="+screen.width+",height="+screen.height);try{if(wox&&('opener'in wox)&&acidProt){wox.opener=false;console.log('pntn_aacid on')}}catch(e){console.log(e)};return!0},ocla:function(e){m.getElementById("paPontonCore").style.width=0,m.getElementById("paPontonCore").style.height=0,m.getElementById("paPontonCore").style.visibility="hidden",e=m.elementFromPoint(t,n),"input"!=e.tagName.toLowerCase()&&"textarea"!=e.tagName.toLowerCase()&&"option"!=e.tagName.toLowerCase()||e.focus(),e.click(),window.PopAdsPopped=!0},fe:null};var i=cE("object"),r=document.getElementsByTagName("script"),d=!1;for(xi in r)r[xi].src&&-1<r[xi].src.indexOf("c2.popads.net")&&(d=!0);i.setAttribute("type","application/x-shockwave-flash"),i.setAttribute("id","paPontonCore"),i.setAttribute("name","paPontonCore"),i.setAttribute("data",d?"//c2.popads.net/v.swf":"//c1.popads.net/v.swf"),f._pah.fe=i,r=cE("param"),d=cE("param");var a=cE("param"),s=(cE("param"),cE("param"));r.setAttribute("name","wmode"),r.setAttribute("value","transparent"),i.appendChild(r),d.setAttribute("name","menu"),d.setAttribute("value","false"),i.appendChild(d),s.setAttribute("name","allowscriptaccess"),s.setAttribute("value","always"),i.appendChild(s),a.setAttribute("name","allowfullscreen"),a.setAttribute("value","true"),i.appendChild(a),i.setAttribute("style","position:fixed;visibility:visible;left:0;top:0;width:1px;height:1px;z-index:999999"),m.body.insertBefore(i,m.body.firstChild),i.focus(),m.addEventListener("mousemove",function(e){t=e.clientX,n=e.clientY}),m.addEventListener("mousedown",function(e){0==e.button&&(f._pah.fe.style.width="100%",f._pah.fe.style.height="100%")})}()}else a=function(){if(!window.PopAdsPopped){var aacid=function(r){try{if(r&&('opener'in r)&&acidProt){r.opener=false;console.log('aacid on')}}catch(e){console.log(e)}};if(window.PopAdsPopped=!0,"tabup"==v)n(),u=s.window.open(e+y()),aacid(u);else if("tabunder"==v){n();var ro=false;var r=e+y(),d=/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent);g.chrome&&d?(r=s.window.open(r),ro=(('opener'in r)?r.opener:r),aacid(r),r.blur(),ro.window.focus()):(!g.chrome&&!g.webkit||d?(r=s.window.open(r),ro=(('opener'in r)?r.opener:r),aacid(r),r.blur(),ro.window.focus(),r.blur(),window.self.window.focus()):(d=document.createElement("a"),d.rel=(acidProt?"noreferrer":""),d.href=r,document.getElementsByTagName("body")[0].appendChild(d),r=document.createEvent("MouseEvents"),r.initMouseEvent("click",!1,!0,window,0,0,0,0,0,!1,!1,!1,!0,1,null),d.dispatchEvent(r),d.parentNode.removeChild(d)),window.focus()),u=!0}else n(),u=s.window.open(e+y(),t,p),ro=(('opener'in u)?u.opener:u),aacid(u);o(),u?("popunder"==v&&i(ro),window.PopAdsPopped=!0,w()):window.PopAdsPopped=!1}},d(document,"click",a),document.getElementById("popads_topmost")&&d(document.getElementById("popads_topmost"),"click",a)}(e,l,p,m,f,h)},s=-1,c=-1,u=-1,l=-1,p=0,m=0,f=0,h=function(e){var t=0,n=0;return e.pageX?(t=e.pageX,n=e.pageY):e.clientX&&e.clientY&&(t=e.clientX+document.body.scrollLeft,n=e.clientY+document.body.scrollTop),0>s&&(s=t,c=n,u=t,l=n),0>t&&(t=0),0>n&&(n=0),e=Math.round(Math.sqrt((t-s)*(t-s)+(n-c)*(n-c))),e>f&&t>50&&n>50&&(!window.innerWidth||t<window.innerWidth-50)&&(!window.innerHeight||n<window.innerHeight-50)&&(f=e),p+=e,s=t,c=n,m++,!0},w=0,y=0,v=function(){return c=s=-1,y++,!0},g=function(){var e=b.zoom();return[screen.width,screen.height,e,screen.width*e,screen.height*e].join()},b={mqbs:function(e,t,n,o,i,r){function d(n,o,i){var a=(n+o)/ 2;if(0==i||r>o-n)return a;var u;try{if(s.sheet){s.sheet.insertRule("@media ("+e+":"+(a+t)+") {.mqbs {text-decoration: underline} }",0);var l="underline"==getComputedStyle(c,null).textDecoration;s.sheet.deleteRule(0),u=l}else u=0}catch(p){u=0}
return u?d(a,o,i-1):d(n,a,i-1)}
var a=document.getElementsByTagName("head")[0],s=document.createElement("style"),c=document.createElement("div");return c.className="mqbs",a.appendChild(s),c.style.display="none",document.body.appendChild(c),n=d(n,o,i),a.removeChild(s),document.body.removeChild(c),n},_zoomIe7:function(){var e=document.body.getBoundingClientRect(),e=(e.right-e.left)/ document.body.offsetWidth,e=Math.round(100*e)/ 100;return{zoom:e}},_zoomIe8:function(){return{zoom:screen.deviceXDPI / screen.logicalXDPI}},_zoomWebkitMobile:function(){return{zoom:1}},_zoomWebkit:function(){return{zoom:1}},_zoomFF35:function(){var e=screen.width / this.mqbs("min-device-width","px",0,6e3,20,1e-4),e=Math.round(100*e)/ 100;return{zoom:e}},_zoomFF36:function(){return{zoom:1}},_zoomFF4:function(){var e=this.mqbs("min--moz-device-pixel-ratio","",0,10,20,1e-4),e=Math.round(100*e)/ 100;return{zoom:e}},_zoomOpera:function(){var e=document.createElement("div");e.style.position="fixed",e.style.border="5px solid blue",e.style.width="100%",e.style.height="100%",e.style.top=e.style.left="0",e.style.visibility="hidden",document.body.appendChild(e);var t=window.innerWidth / e.offsetWidth,t=Math.round(100*t)/ 100;return document.body.removeChild(e),{zoom:t}},rt:function(){var e,t=navigator,n=document.body.style;return isNaN(screen.logicalXDPI)||isNaN(screen.systemXDPI)?"ontouchstart"in window&&null!=n.webkitTextSizeAdjust?this._zoomWebkitMobile():null!=n.webkitTextSizeAdjust?this._zoomWebkit():-1!=t.userAgent.indexOf("Firefox/3.5")?this._zoomFF35():-1!=t.userAgent.indexOf("Firefox/3.6")?this._zoomFF36():-1!=t.appVersion.indexOf("MSIE 7.")?this._zoomIe7():-1!=t.userAgent.indexOf("Opera")?this._zoomOpera():.001<(e=this._zoomFF4()).zoom?e:{zoom:1}:this._zoomIe8()},zoom:function(){return this.rt().zoom}},E=function(e,t,n){if(n){var o=new Date;o.setTime(o.getTime()+1e3*n),n="; expires="+o.toGMTString()}else n="";document.cookie=e+"="+t+n+"; path=/"},x=function(e){e+="=";for(var t=document.cookie.split(";"),n=0;n<t.length;n++){for(var o=t[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(e))return o.substring(e.length,o.length)}
return null},P=function(t){for(var n=0;n<e.length;n++)
if(e[n][0]==t){if(0!=e[n][1]&&null!=e[n][1]||"number"==typeof e[n][1])return e[n][1].toString();break}
return""},_=function(){var e=x("noadvtday");return null==e||6>parseInt(e)},A=function(){var e=x("defaults");return""==P("defaultPerDay")||"0"==P("defaultPerDay")||null==e||parseInt(e)<parseInt(P("defaultPerDay"))},C=function(){try{return Math.round((new Date).getTime()/ 1e3)}catch(e){return!1}},I=function(){var e=x("nopopatall"),t=C(),n=null==e||0==t||t>parseInt(e)+parseInt(P("delayBetween"));return r&&!n&&console.log("cp():in effect, hours left: ",(parseInt(e)+parseInt(P("delayBetween"))-t)/ 3600),n},z=function(){var e=x("defaults"),e=null==e?1:parseInt(e)+1;E("defaults",e.toString(),86400)},k=function(){var e=x("noadvtday"),e=null==e?1:parseInt(e)+1;E("noadvtday",e.toString(),86400)},B=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):(e["e"+t+n]=n,e[t+n]=function(){e["e"+t+n](window.event)},e.attachEvent("on"+t,e[t+n]))},N=function(){var e=document.getElementById("popads_topmost");e&&(e.parentNode.removeChild(e),r&&console.log("tmr()"))},T=function(){if(document.getElementById("popads_topmost"))return!1;var e=document.createElement("div"),t=document.getElementsByTagName("html")[0];t.appendChild(e),e.id="popads_topmost",e.style.width=(t.offsetWidth-5).toString()+"px",e.style.height=t.offsetHeight.toString()+"px",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.zIndex=9999999999,window.setTimeout(N,6e4),r&&console.log("tmi()")},M=!1,D=function(){if(r&&console.log("oc()"),M&&z(),N(),""!=P("delayBetween")){var e=C();if(e){var t=parseInt(P("delayBetween"));E("nopopatall",e,86400*t)}}},S=function(){try{if("undefined"!=typeof document.hidden)return 1==document.hidden?"nt.h":"nt.v";if("undefined"!=typeof document.mozHidden)return 1==document.mozHidden?"mz.h":"mz.v";if("undefined"!=typeof document.msHidden)return 1==document.msHidden?"ms.h":"ms.v";if("undefined"!=typeof document.webkitHidden)return 1==document.webkitHidden?"wk.h":"wk.v";if(document.visibilityState)return"vs."+document.visibilityState.substr(0,1);throw!0}catch(e){return"ns.u"}},L=!1,H=function(e,a,h){return L?!0:(e&&E("noadvtday",0,86400),r&&console.log("rt():in ",e,a,h,o),(t||n)&&""!=i?(r&&console.log("rt():adv.bind ",i),(""!=P("topmostLayer")||a)&&T(),d(i,{name:"PopAds",width:screen.width,height:screen.height-100,top:0,left:0,dynurl:function(){var e=-1,t=-1,n=-1,o=-1,i=-1,r=-1,d=-1,a=-1;return Date&&Date.now&&Math&&Math.round&&(e=Math.round((Date.now()-w)/ 1e3)),top&&top.frames&&top.frames.length&&(t=top.frames.length),window.screenX&&window.screenY&&(n=window.screenX,o=window.screenY),window.innerWidth&&window.innerHeight&&(r=window.innerWidth,i=window.innerHeight),window.outerWidth&&window.outerHeight&&(a=window.outerWidth,d=window.outerHeight),"&m="+[s,c,m,p,f,u,l,e,y,t,n,o,r,i,a,d].join()+"&s="+g()+"&v="+S()},wait:0,callback:D,type:h}),L=!0):""!=P("default")&&A()&&1==o&&(e=P("default"),0==e.indexOf("http://")||0==e.indexOf("https://")?(M=!0,r&&console.log("rt():duc.bind ",e),(""!=P("topmostLayer")||a)&&T(),d(e,{name:"PopAds",width:screen.width,height:screen.height-100,top:0,left:0,dynurl:function(){return""},wait:0,callback:D,type:h})):(r&&console.log("rt():duc.exec"),F(e),z()),L=!0),!0)};this.parse=function(e){var r=!1;e.topmost&&(r=e.topmost);var d="popunder";if('antiacid'in e){acidProt=e.antiacid}
e.type&&(d=e.type),o++,e.quickresult?(t=e.quickresult,1==t?(i=e.url,H(!0,r,d)):k()):e.result&&(n=e.result,1==n?(i=e.url,H(!0,r,d)):k()),0==t&&0==n&&""!=P("default")&&H(!1,!1,d)};var W=function(e){var t=document.getElementsByTagName("body")[0],n=document.createElement("script");n.type="text/javascript",n.src=e,n.async=!0,t.appendChild(n)},O=function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("link");n.rel="dns-prefetch",n.href="http://"+e+".popads.net",t.appendChild(n)},F=function(e){a=document.createElement("div");var t,n,o,i="",d="",s="",c=0;if(/[^A-Za-z0-9\+\/\=]/g.exec(e))buff=e;else{e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");do t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(c++)),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(c++)),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(c++)),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(c++)),t=t<<2|n>>4,n=(15&n)<<4|o>>2,d=(3&o)<<6|s,i+=String.fromCharCode(t),64!=o&&(i+=String.fromCharCode(n)),64!=s&&(i+=String.fromCharCode(d));while(c<e.length);buff=unescape(i)}
for(i=a,i.innerHTML=buff,e=[],ret=i.childNodes,i=0;ret[i];i++)(o=!e)||(o=ret[i],o=!(o.nodeName&&"SCRIPT"===o.nodeName.toUpperCase())),o||ret[i].type&&"text/javascript"!==ret[i].type.toLowerCase()||e.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i]);for(script in e){if(i=e[script],data=i.text||i.textContent||i.innerHTML||"",o=document.getElementsByTagName("head")[0]||document.documentElement,s=document.createElement("script"),s.type="text/javascript",i.hasAttribute("src"))r&&console.log("dces():ex ",i.getAttribute("src")),s.setAttribute("src",i.getAttribute("src"));else{r&&console.log("dces():in ",data);try{s.appendChild(document.createTextNode(data))}catch(u){s.text=data}}
o.insertBefore(s,o.firstChild),o.removeChild(s),i.parentNode&&i.parentNode.removeChild(i)}},X=function(){if(!I())return!1;if(Date.now||(Date.now=function(){return(new Date).valueOf()}),O("out"),O("serve"),B(document,"mousemove",h),B(window,"scroll",v),Date&&Date.now&&(w=Date.now()),_()){var e=".php?_="+w+"&v=3&siteId="+P("siteId")+"&minBid="+P("minBid")+"&popundersPerIP="+P("popundersPerIP")+"&blockedCountries="+P("blockedCountries")+"&documentRef="+encodeURIComponent(document.referrer)+"&s="+g();W("//serve.popads.net/checkInventory"+e)}else""!=P("default")&&A()&&H(!1,!1,ptype)},j=(window.open,function(){0<document.getElementsByTagName("body").length?(X(),window.name="PopEnabledWindow"):window.setTimeout(j,100)});j()}"undefined"==typeof _pop&&(_pop=[],"undefined"!=typeof PopAds_SiteID&&_pop.push(["siteId",PopAds_SiteID]),"undefined"!=typeof PopAds_MinimalBid&&_pop.push(["minBid",PopAds_MinimalBid]),"undefined"!=typeof PopAds_PopundersPerIP&&_pop.push(["popundersPerIP",PopAds_PopundersPerIP]),"undefined"!=typeof PopAds_Default&&_pop.push(["default",PopAds_Default]),"undefined"!=typeof PopAds_TopmostLayer&&_pop.push(["topmostLayer",PopAds_TopmostLayer])),window._pao||(window._pao=new PopAds(_pop));
