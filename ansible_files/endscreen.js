(function(g){var window=this;var Jya=function(a,b){a.oa("onAutonavCoundownStarted",b)},S4=function(a,b,c){var d=b.Ba();
g.J(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Mc(c?c:"mqdefault.jpg");var f=b instanceof g.rB&&b.lengthSeconds?g.VL(b.lengthSeconds):null,h=!!e;e=h&&"RD"===(new g.nC(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.rB?b.wa:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.mm||g.UL("Ver $TITLE",{TITLE:b.title}),duration:f,url:b.ki(),is_live:l,is_list:h,is_mix:e,background:c?"background-image: url("+
c+")":""};b instanceof g.oC&&(d.playlist_length=b.getLength());a.update(d)},T4=function(a,b){g.U.call(this,{D:"div",
W:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},V4=function(a){g.U.call(this,{D:"div",
W:["ytp-upnext","ytp-player-content"],P:{"aria-label":"{{aria_label}}"},K:[{D:"div",J:"ytp-cued-thumbnail-overlay-image",P:{style:"{{background}}"}},{D:"span",J:"ytp-upnext-top",K:[{D:"span",J:"ytp-upnext-header",V:"Siguiente"},{D:"span",J:"ytp-upnext-title",V:"{{title}}"},{D:"span",J:"ytp-upnext-author",V:"{{author}}"}]},{D:"a",J:"ytp-upnext-autoplay-icon",P:{role:"button",href:"{{url}}","aria-label":"Reproducir siguiente v\u00eddeo"},K:[{D:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},K:[{D:"circle",J:"ytp-svg-autoplay-circle",P:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",J:"ytp-svg-autoplay-ring",P:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",J:"ytp-svg-fill",P:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",J:"ytp-upnext-bottom",K:[{D:"span",J:"ytp-upnext-cancel"},{D:"span",J:"ytp-upnext-paused",
V:"La reproducci\u00f3n autom\u00e1tica est\u00e1 en pausa"}]}]});this.api=a;this.cancelButton=null;this.C=this.ca("ytp-svg-autoplay-ring");this.u=this.notification=this.o=this.suggestion=null;this.A=new g.G(this.pp,5E3,this);this.B=0;var b=this.ca("ytp-upnext-cancel");this.cancelButton=new g.U({D:"button",W:["ytp-upnext-cancel-button","ytp-button"],P:{tabindex:"0","aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},V:"Cancelar"});g.C(this,this.cancelButton);this.cancelButton.ma("click",this.GJ,
this);this.cancelButton.ba(b);g.C(this,this.A);g.KN(this.api,this.element,this,18788);b=this.ca("ytp-upnext-autoplay-icon");this.L(b,"click",this.xM);this.TB();this.L(a,"autonavvisibility",this.TB);this.L(a,"mdxnowautoplaying",this.UL);this.L(a,"mdxautoplaycanceled",this.VL);this.L(a,"mdxautoplayupnext",this.uE);U4(this)&&(a=(a=g.sN(g.mN(this.api)))?a.KG():null)&&this.uE(a);g.J(this.element,"ytp-upnext-mobile",this.api.O().o)},X4=function(a,b){a.o||(g.To("a11y-announce","Siguiente "+a.suggestion.title),
a.B=(0,g.N)(),a.o=new g.G(function(){W4(a,b)},25),W4(a,b),Jya(a.api,b||g.P(a.api.O().experiments,"autoplay_time")||1E4));
g.In(a.element,"ytp-upnext-autoplay-paused")},U4=function(a){return 3===a.api.getPresentingPlayerType()},W4=function(a,b){var c=b||g.P(a.api.O().experiments,"autoplay_time")||1E4,d=Math.min(Kya(a),c);
c=Math.min(d/c,1);a.C.setAttribute("stroke-dashoffset",""+-211*(c+1));1<=c&&!U4(a)?a.select(!0):a.o&&a.o.start()},Kya=function(a){return(0,g.N)()-a.B},Z4=function(a){Y4(a);
a.B=(0,g.N)();W4(a);g.I(a.element,"ytp-upnext-autoplay-paused")},Y4=function(a){a.o&&(a.o.dispose(),a.o=null)},Lya=function(a){T4.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.o=new g.U({D:"div",J:"ytp-subscribe-card",K:[{D:"img",J:"ytp-author-image",P:{src:b.yd}},{D:"div",J:"ytp-subscribe-card-right",K:[{D:"div",J:"ytp-author-name",V:b.author},{D:"div",J:"html5-subscribe-button-container"}]}]});g.C(this,this.o);this.o.ba(this.element);this.subscribeButton=new g.zP("Suscribirse",null,"Cancelar suscripci\u00f3n",null,!0,!1,b.sf,b.subscribed,"trailer-endscreen",null,null,a);g.C(this,this.subscribeButton);this.subscribeButton.ba(this.o.ca("html5-subscribe-button-container"));
this.hide()},$4=function(a){var b=a.O(),c=g.Xw||g.Dh?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.o&&e.push("ytp-videowall-show-text");g.U.call(this,{D:"a",W:e,P:{href:"{{url}}",target:d?b.F:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},K:[{D:"div",J:"ytp-videowall-still-image",P:{style:"{{background}}"}},{D:"span",J:"ytp-videowall-still-info",K:[{D:"span",J:"ytp-videowall-still-info-bg",K:[{D:"span",J:"ytp-videowall-still-info-content",P:c,K:[{D:"span",J:"ytp-videowall-still-info-title",V:"{{title}}"},{D:"span",J:"ytp-videowall-still-info-author",
V:"{{author_and_views}}"},{D:"span",J:"ytp-videowall-still-info-live",V:"En directo"},{D:"span",J:"ytp-videowall-still-info-duration",V:"{{duration}}"}]}]}]},{D:"span",W:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],K:[{D:"span",J:"ytp-videowall-still-listlabel-icon"},"Lista de reproducci\u00f3n",{D:"span",J:"ytp-videowall-still-listlabel-length",K:[" (",{D:"span",V:"{{playlist_length}}"},")"]}]},{D:"span",W:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
K:[{D:"span",J:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",J:"ytp-videowall-still-listlabel-length",V:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.o=new g.is(this);g.C(this,this.o);this.ma("click",this.onClick);this.ma("keypress",this.A);this.o.L(a,"videodatachange",this.Na);g.LN(a,this.element,this);this.Na()},a5=function(a){T4.call(this,a,"videowall-endscreen");
var b=this;this.H=a;this.A=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.I=!1;this.G=null;this.u=new g.EP(this);g.C(this,this.u);this.F=new g.G(function(){g.I(b.element,"ytp-show-tiles")},0);
g.C(this,this.F);var c=new g.U({D:"button",W:["ytp-button","ytp-endscreen-previous"],P:{"aria-label":"Anterior"},K:[g.vM()]});g.C(this,c);c.ba(this.element);c.ma("click",this.JI,this);this.table=new g.dM({D:"div",J:"ytp-endscreen-content"});g.C(this,this.table);this.table.ba(this.element);c=new g.U({D:"button",W:["ytp-button","ytp-endscreen-next"],P:{"aria-label":"Siguiente"},K:[g.wM()]});g.C(this,c);c.ba(this.element);c.ma("click",this.II,this);this.o=new V4(a);g.C(this,this.o);g.IN(this.player,
this.o.element,4);this.hide()},b5=function(a){return g.JN(a.player)&&a.sy()&&!a.B},Mya=function(a,b){return(0,g.Ic)(b.suggestions,function(c){c=g.XL(a.H.O(),c);
g.C(a,c);return c})},c5=function(a){var b=a.gv();
b!==a.I&&(a.I=b,a.player.S("autonavvisibility"))},d5=function(a){g.WN.call(this,a);
this.endScreen=null;this.listeners=new g.is(this);g.C(this,this.listeners);this.o=a.O();Nya(a)?this.endScreen=new a5(this.player):this.o.Wa?this.endScreen=new Lya(this.player):this.endScreen=new T4(this.player);g.C(this,this.endScreen);g.IN(this.player,this.endScreen.element,4);this.CD();this.listeners.L(a,"videodatachange",this.CD,this);this.listeners.L(a,g.dz("endscreen"),this.FI,this);this.listeners.L(a,"crx_endscreen",this.GI,this)},Nya=function(a){a=a.O();
return a.Fa&&!a.Wa};g.t(T4,g.U);g.k=T4.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.sy=function(){return!1};
g.k.gv=function(){return!1};
g.k.wA=function(){return!1};g.t(V4,g.U);g.k=V4.prototype;g.k.pp=function(){this.notification&&(this.A.stop(),this.rb(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.TB=function(){g.gM(this,g.nN(this.api));g.ON(this.api,this.element,g.nN(this.api))};
g.k.oM=function(){window.focus();this.pp()};
g.k.hide=function(){g.U.prototype.hide.call(this)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.Q(this.api.O().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.Ba(),this.pp(),this.notification=new Notification("Siguiente",{body:b.title,icon:b.Mc()}),this.u=this.L(this.notification,"click",this.oM),this.A.start())}Y4(this);this.api.nextVideo(!1,a)};
g.k.xM=function(a){!g.Be(this.cancelButton.element,g.ip(a))&&g.zO(a,this.api)&&this.select()};
g.k.GJ=function(){g.pN(this.api,!0)};
g.k.UL=function(a){U4(this);this.show();X4(this,a)};
g.k.uE=function(a){U4(this);this.suggestion&&this.suggestion.Ba().videoId===a.Ba().videoId||(this.suggestion=a,S4(this,a,"hqdefault.jpg"))};
g.k.VL=function(){U4(this);Y4(this);this.hide()};
g.k.X=function(){Y4(this);this.pp();g.U.prototype.X.call(this)};g.t(Lya,T4);g.t($4,g.U);$4.prototype.select=function(){var a=this.suggestion.Ba().videoId,b=this.suggestion.getPlaylistId();(g.DU(this.api.app,a,this.suggestion.Cc,b,void 0,this.suggestion.mG||void 0)||this.api.da("web_player_endscreen_double_log_fix_killswitch"))&&g.NN(this.api,this.element)};
$4.prototype.onClick=function(a){g.zO(a,this.api,this.u,this.suggestion.Cc||void 0)&&this.select()};
$4.prototype.A=function(a){switch(a.keyCode){case 13:case 32:g.np(a)||(this.select(),g.mp(a))}};
$4.prototype.Na=function(){var a=this.api.getVideoData(),b=this.api.O();this.u=a.fc?!1:b.u};g.t(a5,T4);g.k=a5.prototype;g.k.create=function(){T4.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=Mya(this,a),this.videoData=a);this.Jh();this.u.L(this.player,"appresize",this.Jh);this.u.L(this.player,"onVideoAreaChange",this.Jh);this.u.L(this.player,"videodatachange",this.Na);this.u.L(this.player,"autonavchange",this.hv);this.u.L(this.player,"autonavcancel",this.HI);a=this.videoData.autonavState;a!==this.G&&this.hv(a);this.u.L(this.element,"transitionend",this.GN)};
g.k.destroy=function(){g.ks(this.u);g.Me(this.stills);this.stills=[];this.suggestions=null;T4.prototype.destroy.call(this);g.In(this.element,"ytp-show-tiles");this.F.stop();this.G=this.videoData.autonavState};
g.k.sy=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){T4.prototype.show.call(this);g.In(this.element,"ytp-show-tiles");this.player.O().o?g.Cn(this.F):this.F.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.pN(this.player,!1);b5(this)?(c5(this),2===this.videoData.autonavState?this.player.O().da("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.o.select(!0):X4(this.o):3===this.videoData.autonavState&&Z4(this.o)):(g.pN(this.player,!0),c5(this))};
g.k.hide=function(){T4.prototype.hide.call(this);Z4(this.o);c5(this)};
g.k.GN=function(a){g.ip(a)===this.element&&this.Jh()};
g.k.Jh=function(){if(this.suggestions&&this.suggestions.length){g.I(this.element,"ytp-endscreen-paginate");var a=this.H.Wk(!0,this.H.isFullscreen()),b=g.iN(this.H);b&&(b=b.Nc()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var q=b/2,r=e/2,u=b<=f-2&&n>=r*m,w=e<=h-2&&n>=q*m;if((q+1)/r*d/c>c/(q/(r+1)*d)&&w)n-=q*m,e+=2;else if(u)n-=
r*m,b+=2;else if(w)n-=q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Sh(a,m,n);g.Ah(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.o;f=this.suggestions[0];c.suggestion=f;S4(c,f,"hqdefault.jpg");g.J(this.element,"ytp-endscreen-takeover",b5(this));c5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(q=c,r=0,d&&f>=b-2&&h>=
e-2?r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),q=g.Sd(q+this.A,l),0!==r){u=this.stills[c];u||(u=new $4(this.player),this.stills[c]=u,a.appendChild(u.element));w=Math.floor(n*h/e);var B=Math.floor(m*f/b),z=Math.floor(n*(h+r)/e)-w-4,D=Math.floor(m*(f+r)/b)-B-4;g.Ih(u.element,B,w);g.Sh(u.element,D,z);g.Ah(u.element,"transitionDelay",(h+f)/20+"s");g.J(u.element,"ytp-videowall-still-mini",1===r);g.J(u.element,"ytp-videowall-still-large",2<r);r=u;q=this.suggestions[q];r.suggestion!==q&&(r.suggestion=
q,u=r.api.O(),w=g.Gn(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",S4(r,q,w),g.ny(u)&&(u=q.ki(),u=g.Bd(u,g.MI({},"emb_rel_end")),r.la("url",u)),(q=(q=q.Cc)&&q.itct)&&g.MN(r.api,r.element,q));c++}g.J(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.ye(e.element),g.Le(e);this.stills.length=c}};
g.k.Na=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.A=0,this.suggestions=Mya(this,a),this.videoData=a,this.Jh())};
g.k.II=function(){this.A+=this.stills.length;this.Jh()};
g.k.JI=function(){this.A-=this.stills.length;this.Jh()};
g.k.wA=function(){return!!this.o.o};
g.k.hv=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,Y4(this.o),this.La()&&this.Jh()):(this.C=!0,this.La()&&b5(this)&&(2===a?X4(this.o):3===a&&Z4(this.o)))};
g.k.HI=function(a){if(a){for(a=0;a<this.stills.length;a++)g.ON(this.H,this.stills[a].element,!0);this.hv(1)}else this.B=null,this.C=!1;this.Jh()};
g.k.gv=function(){return this.La()&&b5(this)};g.t(d5,g.WN);g.k=d5.prototype;g.k.UA=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!Nya(this.player)||b;var c=a.yk||g.wy(a.Ya),d=g.EU(this.player.app);a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.TA=function(){return this.endScreen.gv()};
g.k.BH=function(){return this.TA()?this.endScreen.wA():!1};
g.k.X=function(){g.AQ(this.player.app,"endscreen",void 0);g.WN.prototype.X.call(this)};
g.k.load=function(){g.WN.prototype.load.call(this);this.endScreen.show()};
g.k.unload=function(){g.WN.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.FI=function(a){this.UA()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.GI=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.CD=function(){g.AQ(this.player.app,"endscreen",void 0);var a=this.player.getVideoData();a=new g.az(Math.max(1E3*(a.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var b=new g.az(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.EN(this.player,[a,b])};g.gO.endscreen=d5;})(_yt_player);
