!function(e){
	function o(o){
		for(var i,a,d=o[0],s=o[1],w=o[2],c=0,u=[];c<d.length;c++)
			a=d[c], n[a] && u.push(n[a][0]), n[a]=0;
		for(i in s)
			Object.prototype.hasOwnProperty.call(s,i) && (e[i]=s[i]);
		for(l && l(o); u.length;)
			u.shift()();
		return r.push.apply(r, w || []), t()
	}
	function t(){
		for(var e, o=0; o < r.length; o++){
			for(var t = r[o], i= !0, d=1; d < t.length; d++){
				var s=t[d];
				0 !== n[s] && (i=!1)
			}
			i && (r.splice(o--,1), e = a(a.s=t[0]))
		}
		return e
	}

	var i = {}, n = {
		"web/common_web": 0
	}, r = [];

	function a(o){
		if(i[o])
			return i[o].exports;
		var t= i[o] = {i:o, l:!1, exports:{}};
		return e[o].call(t.exports, t, t.exports, a), t.l = !0, t.exports
	}
	a.m = e, a.c = i, a.d = function(e,o,t){
		a.o(e, o) || Object.defineProperty(e, o, {
			enumerable: !0, 
			get: t
		})}, 
		a.r = function(e){
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), 
			Object.defineProperty(e, "__esModule", {
				value: !0
			})}, 
			a.t = function(e,o){
				if (1 & o && (e = a(e)), 8 & o)
					return e;
				if(4 & o && "object" == typeof e && e && e.__esModule)
					return e;
				var t=Object.create(null);
				if (a.r(t), Object.defineProperty(t, "default", {
					enumerable: !0,
					value:e
				}), 2 & o && "string" != typeof e)
					for(var i in e)
						a.d(t, i, function(o){
							return e[o]
						}
						.bind(null, i));
					return t
				}, 
				a.n = function(e){
					var o = e && e.__esModule ? function() {
						return e.default
					} : function() {
						return e
					};
					return a.d(o,"a",o), o
				}, a.o = function(e, o){
					return Object.prototype.hasOwnProperty.call(e, o)
				}, a.p = "/js/cmodules/";
				var d = window.webpackJsonp = window.webpackJsonp || [], s = d.push.bind(d);
				d.push = o, d = d.slice();
				for(var w=0; w < d.length; w++)
					o(d[w]);
				var l = s;
				r.push([109, "bundles/audioplayer", "bundles/common"]), 
				t()
			}
			({
				109: function(e,o,t){
					e.exports = t("g42W")
				},
				g42W: function(e,o,t){
					"use strict";
					t.r(o);
					var i, n, r, a, d, s, w;
					t("OG14"),
					t("pIFo"),
					t("SRfc"),
					t("NO8f");
					i = window, 
					n = i.HTMLCanvasElement && i.HTMLCanvasElement.prototype,
					r = i.Blob && function(){
						try{
							return Boolean(new Blob)
						}
						catch(e){
							return !1
						}
					}(),
					a = r && i.Uint8Array && function(){
						try{
							return 100 === new Blob([new Uint8Array(100)]).size
						}
						catch(e){
							return !1
						}
					}(),
					d = i.BlobBuilder || i.WebKitBlobBuilder || i.MozBlobBuilder || i.MSBlobBuilder,
					s = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
					w = (r || d)  && i.atob && i.ArrayBuffer && i.Uint8Array && function(e){
						var o, t, i, n, w, l, c, u, h;
						if (!(o = e.match(s)))
							throw new Error("invalid data URI");
						for(t=o[2] ? o[1]: "text/plain" + (o[3] || ";charset=US-ASCII"), 
							i = !!o[4], 
							n = e.slice(o[0].length), 
							w = i ? atob(n): decodeURIComponent(n), 
							l = new ArrayBuffer(w.length),
							c = new Uint8Array(l),
							u = 0;
							u < w.length;
							u += 1)
							c[u] = w.charCodeAt(u);
						return r ? new Blob([a?c:l], {type: t}) : ((h=new d).append(l), h.getBlob(t))
					}, 
					i.HTMLCanvasElement && !n.toBlob && (n.mozGetAsFile ? n.toBlob = function(e,o,t){
						e(t && n.toDataURL && w ? w(this.toDataURL(o, t)) : this.mozGetAsFile("blob", o))
					} : n.toDataURL && w && (n.toBlob = function(e,o,t){
						e(w(this.toDataURL(o,t)))
					})),
					"function" == typeof define && define.amd ? define(function(){
						return w
					}) : "object" == typeof module && module.exports ? module.exports = w: i.dataURLtoBlob = w;
					t("uQjJ"),
					t("rGqo"),
					t("Btvt");
					function l(e){
						e && !e.prototype.forEach && (Array.prototype.forEach ? e.prototype.forEach = Array.prototype.forEach: e.prototype.forEach = function(e,o){
							o = o || window;
							for(var t=0; t<this.length; t++)
								e.call(o, this[t], t, this)
						})
					}
					Function.prototype.pbind = function(){
						var e=Array.prototype.slice.call(arguments);
						return e.unshift(window), this.bind.apply(this,e)
					},
					Function.prototype.rpbind = function(){
						var e=Array.prototype.slice.call(arguments);
						return e.unshift(window), this.rbind.apply(this,e)
					},
					Function.prototype.rbind = function(){
						var e=this, o=Array.prototype.slice.call(arguments), t=o.shift(), i=o.shift();
						return function(){
							var n=Array.prototype.slice.call(arguments);
							return e.apply(t,o.concat(n)),i
						}
					},
					Function.prototype.bind || (Function.prototype.bind = function(){
						var e=this, o=Array.prototype.slice.call(arguments), t=o.shift();
						return function(){
							var i=Array.prototype.slice.call(arguments);
							return e.apply(t,o.concat(i))
						}
					}),
					Object.keys || (Object.keys = function(e){
						var o=[];
						for(var t in e)
							e.hasOwnProperty(t) && o.push(t);
						return o
					}),
					l(window.NodeList), 
					l(window.HTMLCollection);
					var c=t("ryw6"), 
					u=t("J8bf"), 
					h=t("3oLO"), 
					p=t("eQf/"), 
					f=t("cGUQ"), 
					m=t("gdug"),
					b=t("k487"),
					g=t("zxIV");
					function v(e,o){
						if(window.icoNode && (e = e + "?" + ((stVersions || {}).favicon || ""), icoNode.getAttribute("href") !== e || o)){
							var t= Object(g.ce)(
								"link", 
								{
									rel: "shortcut icon",
									type: "image/gif",
									href: e
								});
							headNode.replaceChild(t,icoNode), icoNode=t
						}
					}
					var y=t("HhI8"),
					k=t("7jxN"),
					O=(t("rE2o"),
						t("ioFf"),
						t("a1Th"),
						t("KKXr"),
						t("Egk5")),
					j=t("t7n3");
					function _(e,o){
						return function(e){
							if(Array.isArray(e))
								return e
						}(e) || function(e,o){
							if(!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)))
								return;
							var t=[],
							i=!0,
							n=!1,
							r=void 0;
							try{
								for(var a, d=e[Symbol.iterator](); !(i=(a=d.next()).done) && (t.push(a.value), !o || t.length !== o); i=!0);
							}
						catch(e){
							n = !0,
							r=e
						}
						finally{
							try{
								i || null == d.return || d.return()
							}
							finally{
								if(n)
									throw r
							}
						}
						return t
					}(e,o) || function(){
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}()
				}
				function S(e){
					var o, t = function(e){
						var o= _(e.split("#"), 2), t=o[0], i=o[1], n=_(t.split("?"),2), r=n[0], a=n[1];
						return r + (a?"?" + Object(f.toQueryString)(Object(f.fromQueryString)(a)) : "") + (i?"#"+i:"")
					},
					i = Object(j.extend)({
						onLocChange: () => {}
					}, e),
					n = function(){
						var e="";
						return 3 == vk.al ? e = (location.pathname || "") + 
						(location.search || "") + 
						(location.hash || "") : (e = (location.toString().match(/#(.*)/) || {})[1] || "").substr(0,1) != vk.navPrefix && (e=(location.pathname || "")+
							(location.search || "") +
							(location.hash || "")),
						!e&&vk.al > 1 && (e=(location.pathname || "") +
							(location.search||"")),
						t(e.replace(/^(\/|!)/,""))
					},
					r = n(),
					a = function(e){
						var o=n();
						o === r && !0 !== e || (i.onLocChange(o),r=o)
					};
					return {
						setLoc: function(e){
							r=t(e);
							var o=(location.toString().match(/#(.*)/) || {})[1] || "";
							if(!o && vk.al > 1 && (o=(location.pathname||"")+(location.search||"")),(o=(o=t(o)).replace(/^(\/|!)/,""))!==r){if(3==vk.al)try{return window.saveScrollTopOnBack&&(delete window.saveScrollTopOnBack,history.replaceState({scrollTop:window.lastScrollTop,preventScroll:window.preventLocationScroll},"",`/${o}`),window.preventLocationScroll&&delete window.preventLocationScroll),void history.pushState({},"",`/${r}`)}catch(e){}window.chHashFlag=!0,location.hash="#"+vk.navPrefix+r}},getLoc:n,init:function(){1==vk.al&&a(!0),3==vk.al?(Object(O.addEvent)(window,"popstate",a),m.browser.safari&&Object(O.addEvent)(window,"hashchange",a)):"onhashchange"in window?Object(O.addEvent)(window,"hashchange",function(){window.chHashFlag?window.chHashFlag=!1:a()}):o=setInterval(a,200)},setOptions:function(e){i=Object(j.extend)(i,e)},checker:a,stop:function(){vk.al<3?clearInterval(o):3==vk.al&&Object(O.removeEvent)(window,"popstate",a)}}}var C=t("4+be"),T=t("lXE5"),x=t("Ia1d"),E=t("XuKo"),L=t("ErRf"),B=t("/PiP"),P={sh:function(e,o){Object(g.show)(e),Object(j.isFunction)(o)&&o()},hd:function(e,o){Object(g.hide)(e),Object(j.isFunction)(o)&&o()},visible:!1,_show:function(e,o,t,i){var n="layers"+(boxQueue.count()+1);Object(L.cancelStackPush)(n,function(){}),Object(g.setStyle)(e,{opacity:t||"",backgroundColor:i||""}),P.visible||(Object(y.toggleFlash)(),Object(T.disableBodyScroll)()),P.visible||Object(x.pauseLastInlineVideo)(),P.visible=!0,Object(g.addClass)(bodyNode,"layers_shown"),o.visibilityHide?Object(g.removeClass)(o,"box_layer_hidden"):Object(g.show)(o),P.sh(e),window.updateWndVScroll&&updateWndVScroll()},_hide:function(e,o){P.hd(e,function(){var e="layers"+(boxQueue.count()+1);Object(L.cancelStackFilter)(e),o&&o.visibilityHide?Object(g.addClass)(o,"box_layer_hidden"):Object(g.hide)(o),Object(g.isVisible)(layerWrap)||cur._inLayer||Object(g.isVisible)(boxLayerWrap)&&!boxLayerWrap.visibilityHide||!(window.mvcur&&mvcur.minimized||!Object(g.isVisible)(window.mvLayerWrap))||Object(g.isVisible)(window.wkLayerWrap)||(P.visible=!1,Object(g.removeClass)(bodyNode,"layers_shown"),Object(y.toggleFlash)(!0),Object(T.enableBodyScroll)()),window.updateWndVScroll&&updateWndVScroll()}),P.visible||Object(x.playLastInlineVideo)()}},A={push:function(e){var o,t=!!A.count()&&A._layers[A._layers.length-1];if(cur.pvShown&&"temp"!=cur.pvListId)o=["photo",cur.pvData[cur.pvListId][cur.pvIndex].id,cur.pvListId,{onHide:cur.pvOptions.onHide,scroll:cur.pvNarrowScrollbar?cur.pvNarrowScrollbar.data.scrollTop:0,onShow:e,noHistory:!!cur.pvNoHistory,histLen:cur.pvHistoryLength}];else if(window.mvcur&&mvcur.mvShown&&!mvcur.minimized){var i=mvcur.options&&(mvcur.options.autoplay||mvcur.options.focusPlay),n={scroll:mvLayerWrap.scrollTop,noHistory:!!mvcur.noHistory,nomin:1,autoplay:i,prevLoc:mvcur.mvPrevLoc};VideoPlaylist.getCurListId()&&(n=Object(j.extend)(n,{playlistId:VideoPlaylist.getCurListId(),module:Videoview.getVideoModule(),addParams:{force_no_repeat:1,show_next:1}})),o=["video",mvcur.videoRaw,mvcur.listId,n]}else if(window.wkcur&&wkcur.shown)o=["wiki",wkcur.wkRaw,!1,{toScroll:wkLayerWrap.scrollTop,prevLoc:wkcur.prevLoc,myLoc:wkcur.myLoc,onHide:wkcur.onHide}];else if(cur.storyLayer)o=["stories",cur.storyLayer.getList()];else{if(!cur.podcastEpisode||!cur.podcastEpisode.shown)return!1;o=["podcast",cur.podcastEpisode.getEpisodeId()]}return t&&o[0]==t[0]&&o[1]==t[1]&&o[2]==t[2]||A._layers.push(o),A.skipVideo=!1,!0},noHistory:function(){for(var e=A._layers,o=e.length;o>0;--o)"photo"===e[o-1][0]?e[o-1][3].noHistory=1:"video"===e[o-1][0]&&(e[o-1][3].noHistory=1)},hide:function(){A._bl=!0,window.WkView&&P.fullhide==WkView.hide?(Object(g.hide)(wkLayerWrap),clearTimeout(wkcur.showT)):P.fullhide&&P.fullhide(!0,!0),setTimeout(A.unblock,5)},unblock:function(){A._bl=!1},pop:function(){if(A.count()&&!A._bl){var e=A._layers.pop();if(A.skipVideo&&(A.skipVideo=!1,"video"==e[0]))return A._layers.push(e),void(A.skipVideo=!1);"photo"===e[0]?(Object(j.extend)(e[3],{fromQueue:!0}),Object(B.showPhoto)(e[1],e[2],e[3],!1)):"video"===e[0]?(Object(j.extend)(e[3],{fromQueue:!0}),Object(x.showVideo)(e[1],e[2],e[3],!1)):"wiki"===e[0]?Object(B.showWiki)({w:e[1]},!1,!1,e[3]):"stories"===e[0]?Object(E.showStory)(e[1]):"podcast"===e[0]&&Object(B.showPodcast)(null,e[1],null,"layer_back")}},back:function(e,o,t,i){for(var n=A._layers,r=n.length;r>0;--r)if(n[r-1][0]==e&&n[r-1][1]==o||n[r-1][0]==t&&n[r-1][1]==i)return A._layers=n.slice(0,r),A.pop(),!0;return!1},count:function(){return A._layers.length},clear:function(){A._layers=[]},_layers:[]};var N=t("Xrg9");function D(){var e={};Object(j.each)(Object(g.geByClass)("_short_currency"),function(){var o=Object(g.domData)(this,"short")||"";if(!o)return!0;var t=this.innerHTML,i=Object(j.winToUtf)(t).length,n=Object(g.getStyle)(this,"fontFamily")||"tahoma,arial,sans-serif";if(void 0===e[n]){for(var r="",a=i-1;a>=0;a--)r+="&#8399;";var d=Object(g.ce)("div",{innerHTML:`<b>${t}</b><b>${r}</b>`},{fontFamily:n,fontSize:"24px"});Object(g.ge)("utils").appendChild(d),e[n]=Math.abs(d.firstChild.offsetWidth-d.lastChild.offsetWidth)>=2*i,Object(g.re)(d)}!1===e[n]&&Object(g.val)(this,o)})}t("hhXQ"),t("Oyvg"),t("VRzm");var I=t("HLtZ");var F={},M=12e4;function V(){__debugMode&&(M=3e3)}var H=e=>"cmodules/"+e,R=e=>/\.js$/.test(e),W=e=>/\.css$/.test(e);function z(e){var o="";return stTypes.fromLib[e]?o+="lib/":stTypes.fromCompiled&&stTypes.fromCompiled[e]?o+=H("web/"):/^lang\d/i.test(e)||stTypes.fromRoot[e]||-1!==e.indexOf("/")||(o+="al/"),o}function U(e){var o=window.stDeps;return!!(void 0===o?[]:o)[`/js/${z(e)}${e}`]}function q(e,o){Object(I.logError)(o,{environment:"static_manager"}),Object(c.topMsg)(`Some problems with loading <b>${e}</b>...`,5),F[e]&&F[e]()}function Q(e){return!R(e)&&!W(e)||function(e){for(var o=0;o<vk.stExcludedMasks.length;o++)if(-1!==e.indexOf(vk.stExcludedMasks[o]))return!0;return!1}(e)?"":0===`${z(o=e)}${o}`.indexOf("cmodules/")&&vk.stDomain||"";var o}function G(e){var o=e.fileName,t=e.fileFullName,i=e.domainPrefix+("https://vk.com/css/"+(vk.css_dir||"")+(stTypes.fromRoot[o]||-1!==o.indexOf("/")?"":"al/"))+t,n=function(e){return new Promise((o,t)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.href=e,i.onload=()=>o(i),i.onerror=()=>t(new Error(`Stylesheet load error for ${e}`)),document.head.appendChild(i)})}(i).catch(e=>q(o,e));return StaticFiles[o].t="css",StaticFiles[o].isLoading=n,StaticFiles[o].src=i,n}function $(e){var o=e.fileName,t=e.fileFullName,i=e.domainPrefix,n="/js/"+z(o);if(StaticFiles[o].t="js",o!==H("web/common_web.js")){var r=i+n+t;StaticFiles[o].src=r;var a=new Promise((e,t)=>{if(function(e,o){var t=document.createElement("script");t.src=e,t.onload=()=>o(null,t),t.onerror=()=>o(new Error(`Script load error for ${e}`)),document.head.appendChild(t)}(r,e=>{e&&(StaticFiles[o]=null,t(e))}),r.includes("cmodules/bundles/"))e();else{var i=setTimeout(()=>q(o,new Error(`timeout error of loading ${o}`)),M);F[o]=()=>{clearTimeout(i),e(),F[o]=null}}}).catch(e=>(q(o,e),Promise.resolve()));return StaticFiles[o].isLoading=a,a}setTimeout(()=>Y.done(H("web/common_web.js")),0)}var Y={_addCss:function(e,o){var t=Object(g.ce)("style",{type:"text/css",media:"screen"}),i=Object(g.domNS)(o);return i?headNode.insertBefore(t,i):headNode.appendChild(t),t.sheet?t.sheet.insertRule(e,0):t.styleSheet&&(t.styleSheet.cssText=e),t},_srcPrefix:Q,_add:function(e){if(StaticFiles[e]&&StaticFiles[e].isLoading)return StaticFiles[e].isLoading;var o=e.replace(/[\/\.]/g,"_"),t=stVersions[e],i=e+"?"+t,n=Q(e);return StaticFiles[e]={v:t,n:o,l:0,c:0},R(e)?$({fileName:e,fileFullName:i,domainPrefix:n}):W(e)?G({fileName:e,fileFullName:i,domainPrefix:n}):void 0},add:function(e,o){var t=[];for(var i in Object(j.isArray)(e)||(e=[e]),e)if(e.hasOwnProperty(i)){var n=e[i];if(n){n.includes("?")&&(n=n.split("?")[0]);var r="";R(n)&&(r=z(n)),/^lang\d/i.test(n)?stVersions[n]=stVersions.lang:stVersions[r+n]||(stVersions[r+n]=1);var a="/js/"+r+n;if(window.stDeps&&window.stDeps[a]&&window.stDeps[a].forEach(e=>{t.push(Y._add(e))}),__debugMode&&!m.browser.iphone&&!m.browser.ipad&&n!==H("web/common_web.js")&&"common.css"!==n&&stVersions[n]>0&&stVersions[n]<1e9&&(stVersions[n]+=Object(j.irand)(1e9,2e9)),!U(n)){var d=StaticFiles[n];d&&d.v==stVersions[n]?t.push(d.isLoading):t.push(Y._add(n,d))}}}return Promise.all(t).then(e=>(isFunction(o)&&o(e),e))},done:function(e){var o,t,i,n=e;if(U(e))o=e,t=window.stDeps,n=(i=(void 0===t?[]:t)[`/js/${z(o)}${o}`])[i.length-1];else if(function(e){return!!~e.indexOf("cmodules/internal/")}(e)&&(!StaticFiles[n]||1===StaticFiles[n].l)){var r=new RegExp(n.replace(/.js$/,".[0-9a-f]{20}.js")),a=!1;Object.keys(StaticFiles).forEach(e=>{r.test(e)&&!StaticFiles[e].l&&(a=e)}),a&&(n=a)}F[n]&&F[n](),StaticFiles[n]&&(StaticFiles[n].l=1)}};function K(){window.addEventListener("load",V),window.jsc=H,window.stQueue=F,window.stVersions||(window.stVersions={},window.stTypes={fromLib:{},fromRoot:{}},window.navMap={}),window.StaticFiles||(window.StaticFiles={}),function(){for(var e=0,o=Object.values(window.StaticFiles);e<o.length;e++){o[e].isLoading=Promise.resolve()}}(),window.stManager||(window.stManager=Y)}var X=t("XzvV"),J=t("v+DW"),Z=t("lkNA");var ee=class{constructor(){var e=window.CallHub;this.on=0,this.hub=new e(()=>{this.onShow&&this.onShow()},2),this.hintsHub=new e(()=>this.showStartHints(),2)}load(){Object(g.ge)("quick_search")&&!this.loading&&(this.loading=!0,stManager.add("qsearch.js",()=>this.hub.done()),ajax.post("hints.php",{act:"a_start_hints"},{onDone:e=>{this.startHintsText=Object(j.trim)(e),this.hintsHub.done()}}))}show(e){var o=window.placeholderSetup;if(Object(g.ge)("quick_search")&&!this.on)return this.on=1,Object(g.show)(this.sCont),o("search_input"),Object(g.ge)("search_input").setAttribute("autocomplete","off"),Object(g.addClass)(Object(g.ge)("qsearch_link"),"active"),this.prev_content=Object(g.ge)("content"),this.qsearch_cont||(this.qsearch_cont=Object(g.ce)("div",{id:"content",innerHTML:'<div style="padding: 200px; text-align: center;"><img src="https://vk.com/images/progress7.gif"/></div>'})),this.prev_content.parentNode.replaceChild(this.qsearch_cont,this.prev_content),this.loading||this.load(),this.hub.done(),this.hintsHub.done(),e?Object(O.cancelEvent)(e):void 0}go(e){var o="https://vk.com/gsearch.php?section="+(this.last_section||"people")+"&q="+Object(j.trim)(Object(g.ge)("search_input").value)+"&name=1";return Object(O.cancelEvent)(e||window.event),location.href=o,!1}init(e){this.sCont=Object(g.ge)("quick_search"),this.opt=e||{}}hide(e,o){if(Object(g.ge)("quick_search")&&(!this.active||o)&&this.on){var t=window.toggleFlash;if(this.on=0,t(),this.beforeHide&&this.beforeHide())return!0;Object(g.ge)("search_input").setValue?Object(g.ge)("search_input").setValue(""):Object(g.ge)("search_input").value="",Object(g.hide)(this.sCont),Object(g.removeClass)(Object(g.ge)("qsearch_link"),"active"),this.qsearch_cont.parentNode.replaceChild(this.prev_content,this.qsearch_cont)}}preload(){}},oe=t("Bszp"),te=t("MSYF"),ie=t("kHqu");function ne(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],i=!0,n=!1,r=void 0;try{for(var a,d=e[Symbol.iterator]();!(i=(a=d.next()).done)&&(t.push(a.value),!o||t.length!==o);i=!0);}catch(e){n=!0,r=e}finally{try{i||null==d.return||d.return()}finally{if(n)throw r}}return t}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var re=()=>{};var ae=[],de=!1;function se(){if(de){var e=window.performance,o=ae[ae.length-1];if(!o)return de=!1,void le(-1);var t=o.startTime+o.duration;e.now()-t>=3e3?le(t,"TTI"):setTimeout(se,3e3)}}var we=[];function le(e,o){var t=Math.floor(e);if(-1!==e&&(we.push([t,o]),!(de?"TTI"===o:we.length>2)))return;var i="unknown",n=navigator.connection;n&&n.effectiveType&&(i=n.effectiveType);var r={id:(isNaN(vk.id)?0:vk.id+Date.now()+Math.random()).toString(36),loc:location.href,events:[]};we.forEach(e=>{var o=ne(e,2),t=o[0],n=o[1];return r.events.push([n,t,cur.module,i,window.vk.rv])}),re(r)}function ce(){var e;(e=window.performance)&&e.getEntriesByType&&e.getEntriesByType("paint").forEach(e=>{"first-contentful-paint"===e.name&&le(e.startTime,"TTFCP")}),function(){var e=window.performance;e&&e.getEntriesByType&&e.getEntriesByType("navigation").forEach(e=>{if("navigation"===e.initiatorType){var o=e.domComplete,t=e.domContentLoadedEventEnd,i=e.loadEventEnd;le(o,"domComplete"),le(t,"domContentLoadedEventEnd"),le(i,"loadEventEnd")}})}(),se()}function ue(e){re=e,window.PerformanceLongTaskTiming&&(new PerformanceObserver(e=>{ae=ae.concat(e.getEntries())}).observe({entryTypes:["longtask"]}),de=!0),"complete"!==document.readyState?window.addEventListener("load",function(){setTimeout(ce,0)}):ce()}var he="remixjsp";var pe=t("nqXl"),fe=t("1BRX"),me=t("W9Tc"),be=t("98sY"),ge=t("El3O"),ve=t("EasH"),ye=t("kcIO"),ke=t("MiCK"),Oe=t("Ieup"),je=t("FWc3"),_e=t("t/FQ"),Se=t("aong"),Ce=.5,Te=.25,xe=300,Ee=1e3,Le=3e5,Be=2500,Pe=5e3,Ae=6e3,Ne=2e4,De=1e3,Ie=36e4,Fe="_longViewType",Me="_longViewIdled",Ve="_longViewModule",He="_longViewStarted",Re="_longViewProcessed",We="_longViewCached",ze="_longViewHeight",Ue="_longViewTop",qe="_longViewBottom",Qe="REGULAR",Ge="AUTOPLAY_AD",$e="LongView.viewed",Ye="LongView.idled",Ke=vk.longViewTestGroup,Xe=[],Je=[],Ze=[],eo=Date.now(),oo=0,to=0,io=!1,no=null,ro=null,ao=null,so=null,wo={};function lo(){var e=Eo();e.length&&(So(e),Lo())}function co(){Xe.forEach(function(e){e[We]=!1})}function uo(e,o){"im"===o&&!e[Fe]&&function(e){if(Object(g.hasClass)(e,"im-mess--post"))return!0;var o=e&&Object(g.domFC)(e);return!(!o||"ads_feed_placeholder"===o.getAttribute("id")||Object(g.hasClass)(e,"no_posts"))}(e)&&(e[Fe]=function(e){var o=e&&Object(g.domFC)(e);return o&&o.hasAttribute("data-ad-video-autoplay")?Ge:Qe}(e),e[Ve]=o,Xe.push(e))}function ho(e,o){var t=ho;!function(e,o){var t=[];Xe.forEach(function(i){Io(i)?t.push(i):!function(e,o,t){return!e[He]&&Po(e,Ce,o,t)}(i,e,o)?function(e,o,t){return e[He]&&!Po(e,Te,o,t)}(i,e,o)&&(i[Me]?delete i[Me]:(Fo(Je,i),Ze=Ze.concat(Do(i))),delete i[He]):(i[He]=Date.now(),Je.push(i))}),t.forEach(function(e){Fo(Xe,e)})}(e||Object(T.scrollGetY)(),o||window.innerHeight),io?(clearTimeout(t.timer),t.timer=setTimeout(po,150)):(io=!0,vo(),function(){if("/im"===location.pathname){var e=Object(g.geByClass1)("im-page--chat-header"),o=Object(g.geByClass1)("im-page--chat-input");oo=e.getBoundingClientRect().top+e.offsetHeight,to=window.innerHeight-o.getBoundingClientRect().top}else oo=Object(g.ge)("page_header").offsetHeight,to=0}())}function po(){vo(),go(),io=!1}function fo(){vo(),_o()}function mo(){Ze=[],Je.forEach(e=>e[He]=Date.now()),Co(null),To(null),go()}function bo(){vo(),_o(),Ze=[],Je=[],Co(null),To(null)}function go(){no=setTimeout(yo,Be),ro=setTimeout(ko,Pe),ao=setTimeout(Oo,Ae),so=setTimeout(jo,Ne)}function vo(){clearTimeout(no),clearTimeout(ro),clearTimeout(ao),clearTimeout(so)}function yo(){Ze.length&&Co(Ze)}function ko(){So(Ze),Ze=[],Co(null)}function Oo(){Je.length&&(To(No(Je,!0,!0)),ao=setTimeout(Oo,De))}function jo(){clearTimeout(ao),So(No(Je)),Je.forEach(e=>e[Me]=!0),Je=[],To(null)}function _o(){So(Ze.concat(No(Je)))}function So(e){e&&e.length&&ajax.post("/al_page.php",{act:"seen",data:Ao(e),long_view:1})}function Co(e){xo($e,e)}function To(e){xo(Ye,e)}function xo(e,o){var t=N.default.get(e)||{};o?t[eo]=o:delete t[eo],N.default.set(e,t)}function Eo(){var e=Eo,o=[],t=N.default.get($e)||{},i=N.default.get(Ye)||{};return e.iterator||(e.iterator=e=>t=>{Bo(t)&&(o=o.concat(e[t]))}),Object.keys(t).forEach(e.iterator(t)),Object.keys(i).forEach(e.iterator(i)),o}function Lo(){var e=Lo,o=N.default.get($e)||{},t=N.default.get(Ye)||{};e.iterator||(e.iterator=e=>o=>{Bo(o)&&delete e[o]}),Object.keys(o).forEach(e.iterator(o)),Object.keys(t).forEach(e.iterator(t)),N.default.set($e,o),N.default.set(Ye,t)}function Bo(e){var o=Number(e);return o!==eo&&Date.now()-o>=Ie}function Po(e,o,t,i){if(!e)return!1;e[We]||(e[We]=!0,e[ze]=e.offsetHeight,e[Ue]=t+e.getBoundingClientRect().top,e[qe]=e[Ue]+e[ze]);var n=i-oo-to,r=t+oo,a=t+i-to,d=e[ze],s=e[Ue],w=e[qe];return(w>r&&s<a?Math.min(a,w)-Math.max(r,s):0)>=Math.min(n*o,d*o)}function Ao(e){var o={};e.forEach(function(e){var t=e.ownerId,i="ad"===t?"":":"+e.duration+":"+e.index;o[t]||(o[t]=[]),o[t].push(e.module+e.postId+i+(e.sessionId?":"+e.sessionId:"")+(e.q?":"+e.q:"")+":"+e.viewIndex)});var t=[];return Object(j.each)(o,(e,o)=>t.push(e+"_"+o.join(","))),t.join(";")}function No(e,o,t){return e.map(e=>Do(e,o,t))}function Do(e,o,t){if(Io(e))return[];var i=Math.min(Le,Date.now()-e[He]);if(e[Fe]===Qe&&i<xe||e[Fe]===Ge&&i<Ee)return[];t||(e[Re]=!0);var n,r=function(e){var o=e[Ve];if("im"===o){var t=Object(g.attr)(e,"data-post-id"),i=Object(g.attr)(e,"data-copy"),n={index:-1,module:"im"};return t&&(n[t]=-1),i&&(n[i]=-1),n}try{return window[o].postsGetRaws(e)}catch(o){return console.error("Unable to extract data from elem",e),[]}}(e),a={feed:"f",public:"c",groups:"c",profile:"p",im:"m",feed_search:"s",feed_news_recent:"r",feed_news:"r",feed_news_top:"t",feed_recommended:"d",feed_recommended_recent:"d",feed_recommended_top:"e",feed_photos:"h",feed_videos:"v",feed_friends:"n",feed_likes:"k",feed_list:"z",feed_other:"o"}["feed_other"===(n=r.module)?`feed_${cur.section}`:n]||"u",d=cur.feed_session_id||"na",s=[];for(var w in r)if("index"!==w&&"module"!==w&&"q"!==w){var l=w.split("_"),c=l[0],u=l[1];"ads"===c&&(u=l[3]),/^post\d+$/.test(c)&&(c=l[1],u=l[2]);var h=void 0;o||(wo[h=c+"_"+u]||(wo[h]=0),wo[h]++),s.push("ad"===c?{ownerId:"ad",postId:u,module:a,viewIndex:wo[h]}:"ads"===c?{ownerId:"ads",postId:u,module:a,index:r.index,duration:i,sessionId:d,viewIndex:wo[h]}:{ownerId:c,postId:(1===r[w]?"":"-")+u,module:a,index:r.index,duration:i,sessionId:d,q:r.q||null,viewIndex:wo[h]})}return s}function Io(e){return"page_view"===Ke&&e[Re]||!document.body.contains(e)}function Fo(e,o){var t=e.indexOf(o);t>=0&&e.splice(t,1)}var Mo=t("QGEU"),Vo=t("eNQP"),Ho=t("o7bv"),Ro=t("wetz"),Wo=t("BJj/"),zo=t("i6oL"),Uo=t("m0N1"),qo=t("4tce"),Qo="sw";function Go(e){return{type:Qo,data:e}}function $o(e){return(""===e.origin||e.origin.match(/^https:\/\/([a-zA-Z0-9\-\.]+\.)?vk\.com$/))&&e.data&&e.data.data&&e.data.type===Qo}function Yo(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],i=!0,n=!1,r=void 0;try{for(var a,d=e[Symbol.iterator]();!(i=(a=d.next()).done)&&(t.push(a.value),!o||t.length!==o);i=!0);}catch(e){n=!0,r=e}finally{try{i||null==d.return||d.return()}finally{if(n)throw r}}return t}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Ko="https://vk.com/js/cmodules/sw/sw.js",Xo="/";class Jo{constructor(){this.registration=null,this._handlers=[]}static addVersion(e){return vk&&vk.sw_version?e+"?v="+vk.sw_version:e}static isSupported(){return"serviceWorker"in navigator}register(){return Jo.isSupported()?this.registration?Promise.resolve(this.registration):navigator.serviceWorker.register(Jo.addVersion(Ko),{scope:Xo}).then(this._onactive.bind(this)).then(e=>(this.registration||(this.registration=e,this._addEventListener(navigator.serviceWorker,"message",this._onmessage.bind(this),!1)),e)):Promise.reject("serviceWorker is unavailable")}unregister(){this.registration&&this.registration.unregister(),this._handlers.forEach(e=>e[0].removeEventListener(e[1],e[2])),this._handlers=[]}update(){this.registration&&this.registration.update()}_addEventListener(e,o,t){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=!1;this._handlers.forEach(function(i){i[0]===e&&i[1]===o&&i[2]===t&&(n=!0)}),n&&!i||(this._handlers.push([e,o,t]),e.addEventListener(o,t))}_onactive(e){return e.active?Promise.resolve(e):new Promise(o=>{this._addEventListener(e.installing,"statechange",t=>{"activated"===t.currentTarget.state&&o(e)})})}action_devicePixelRatio(){return window.devicePixelRatio}action(e,o){var t=Array.isArray(e)?e:[[e,o]];return this._message({actions:t}).then(e=>e.answers?Promise.resolve(1===t.length?e.answers[0]:e.answers):Promise.reject(new Error("ServiceWorker answer is incorrect")))}_message(e){return this.register().then(()=>new Promise((o,t)=>{var i=new MessageChannel;i.port1.onmessage=function(e){$o(e)?o(e.data.data):t(new Error("ServiceWorker message is incorrect"))},this.registration.active.postMessage(Go(e),[i.port2])}))}_onmessage(e){if($o(e)){var o=e.data.data;if(o.actions&&Array.isArray(o.actions)){var t=[];o.actions.forEach(o=>{var i=Yo(o,2),n=i[0],r=i[1],a="action_"+n;t.push(Promise.resolve(this[a]?this[a](r,e):void 0))}),Promise.all(t).then(function(o){var t={};o.forEach((e,o)=>{void 0!==e&&(t[o]=e)}),Object.keys(t).length&&e.ports[0].postMessage(Go({answers:t}))})}}}}var Zo=t("DM2o");function et(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],i=!0,n=!1,r=void 0;try{for(var a,d=e[Symbol.iterator]();!(i=(a=d.next()).done)&&(t.push(a.value),!o||t.length!==o);i=!0);}catch(e){n=!0,r=e}finally{try{i||null==d.return||d.return()}finally{if(n)throw r}}return t}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ot={start:function(e,o){if(o.stopPropagation(),o.preventDefault(),this.id=window.domData(e,"id"),this.id&&(Object(Zo.statlogsValueEvent)("special_event","click",this.platform,this.id),!this.timeoutHandle)){var t=Number(window.domData(e,"v"))||0;this.duration||(this.duration=Number(window.domData(e,"duration"))||0),this.duration&&(!this.animationData||!this.animationData.v||"number"==typeof this.v&&this.v!==t?(this.v=t,Promise.all([this._getAnimation(),this._loadAnimator()]).then(e=>{var o=et(e,2),t=o[0],i=o[1];this.animationData=JSON.parse(t),this.animator=i,this._play()})):this._play())}},_getAnimation:function(){return new Promise(e=>{var o=new XMLHttpRequest;o.open("GET",`/images/stickers/special/${this.id}/animation.json?v=${this.v}`,!0),o.send(),o.onreadystatechange=()=>{4===o.readyState&&e(o.responseText)}})},_play:function(){if(this.animator){this.frame||(this.frame=document.createElement("div"),this.frame.className="special_event_frame",document.body.appendChild(this.frame)),this.frame.style.display="block";var e=this.animator.loadAnimation({container:this.frame,renderer:"svg",loop:!0,autoplay:!0,animationData:this.animationData});this.timeoutHandle=setTimeout(()=>{e.stop(),e.destroy(),this.frame.style.display="none",this.timeoutHandle=null,Object(Zo.statlogsValueEvent)("special_event","showed",this.platform,this.id)},this.duration)}},init(e){var o=e.platform,t=e.animatorLoader;this.platform=o,this._loadAnimator=t}},tt=t("Jph1");ot.init({platform:"web",animatorLoader:()=>Promise.resolve(tt.default)});var it=ot,nt=t("B3ia");t.d(o,"initAjax",function(){return at});var rt=window.vk;function at(){window.ajaxCache={},window.globalAjaxCache={},window.ajax=h.ajax,window.ajax.enabled||m.browser.search_bot||location.replace("/badbrowser.php")}function dt(){window.NextPageID=1,window.__debugMode=!0,window.__dev=/[a-z0-9_\-]+\.[a-z0-9_\-]+\.[a-z0-9_\-]+\.[a-z0-9_\-]+/i.test(locHost)&&!/[a-z0-9_\-]+\.tau\.[a-z0-9_\-]+\.[a-z0-9_\-]+/i.test(locHost),window.__dev||(window.__debugMode=!1),window._wf=0,window.cur={destroy:[],nav:[]},rt.width=960,rt.started=Object(j.vkNow)(),rt.counts={},m.browser.android&&(Object(u.setCookie)("remixscreen_width",window.screen.width,365),Object(u.setCookie)("remixscreen_height",window.screen.height,365),Object(u.setCookie)("remixscreen_dpr",window.devicePixelRatio||1,365)),Object(u.setCookie)("remixscreen_depth",screen.pixelDepth?screen.pixelDepth:screen.colorDepth,365),Object(u.setCookie)("remixscreen_orient",Number(window.screen.width>=window.screen.height),7),Object(ie.initNavCounters)(),Object(j.each)(StaticFiles,(e,o)=>{o.t=W(e)?"css":"js",o.n=e.replace(/[\/\.]/g,"_"),o.l=0,o.c=0}),function(){Object(O.addEvent)(window,"unload",function(){for(var e in vkCache)vkCache[e].handle&&vkCache[e].handle.elem!==window&&Object(O.removeEvent)(vkCache[e].handle.elem)}),Object(O.addEvent)(window,"DOMContentLoaded load",function(){rt.loaded||(rt.loaded=!0,Object(J.updSideTopLink)()),Object(ge.checkPageBlocks)()}),Object(O.addEvent)(document,"mousedown",function(e){window._wf=1,cur.__mdEvent=e}),window.browser.mobile||Object(O.addEvent)(document,"keydown",Ro.handleGlobalEsc);window.hideCookiesPolicy=Ro.hideCookiesPolicy}()}var st=0;function wt(){if(window.headNode=Object(g.geByTag1)("head"),window.icoNode=Object(g.geByTag1)("link",headNode),window.bodyNode=Object(g.geByTag1)("body"),window.htmlNode=Object(g.geByTag1)("html"),window.utilsNode=Object(g.ge)("utils"),window._fixedNav=!1,window._tbLink={},Object(O.addEvent)(bodyNode,"resize",ge.onBodyResize.pbind(!1)),utilsNode){m.browser.mozilla?Object(g.addClass)(bodyNode,"firefox"):m.browser.mobile&&Object(g.addClass)(bodyNode,"mobfixed"),Object(_e.initLegacyBrowserDetectionInAttribute)();var e=Object(g.ge)("layer_bg"),o=e.nextSibling,t=Object(g.ge)("box_layer_bg"),i=t.nextSibling;window.layerBG=e,window.boxLayerBG=t,window.layerWrap=o,window.layer=o.firstChild,window.boxLayerWrap=i,window.boxLayer=i.firstChild,window.boxLoader=i.firstChild.firstChild,window._stlSide=Object(g.ge)("stl_side"),window._stlLeft=Object(g.ge)("stl_left"),window._stlShown=0,window._stlWas=0,window._stlWasSet=0,window._stlBack=0,window._regBar=0,window.__afterFocus=!1,m.browser.mobile||Object(zo.initStl)(),Object(O.addEvent)(i,"click",boxQueue.hideLastCheck),window.LazyLoad&&LazyLoad.watch(i),window.layers=function(e,o,t,i){return window.layerQueue=A,Object(j.extend)(P,{show:P._show.pbind(e,o),boxshow:P._show.pbind(t,i),wrapshow:P._show.pbind(e),hide:P._hide.pbind(e,o),boxhide:P._hide.pbind(t,i),wraphide:P._hide.pbind(e)}),P}(e,o,t,i),hab.init(),window._retinaInit?window._retinaInit():st=1,rt.disableSW||(window.PushNotifier=qo.default,window.sw=new Jo,window.sw.register().then(()=>{window.pushNotifier=new qo.default(window.sw,Jo)}))}}function lt(){if(utilsNode){window.AppUseTime&&(window.appUseTime=new window.AppUseTime({getModule:()=>cur.module,getOID:()=>cur.oid,doesScrollTriggerIdle:!0})),Object(zo.updateSTL)();var e=Object(g.ge)("side_bar");if(window.pageNode=Object(g.ge)("page_wrap"),window._fixedNav=e&&"fixed"===Object(g.getStyle)(e,"position"),window._tbLink=Object(g.ge)("top_back_link"),m.browser.chrome||m.browser.msie_edge?window.scrollNode=document.scrollingElement||bodyNode:window.scrollNode=m.browser.safari?bodyNode:htmlNode,Object(ge.onBodyResize)(),rt.dt=Object(me.calculateTimeOffsets)(),setTimeout(ge.onBodyResize.pbind(!1),0),Object(Mo.updateAriaElements)(),window.addEventListener("scroll",ge.onBodyScroll,{passive:!0}),window.debuglogInit&&debuglogInit(),!rt.id&&N.default.checkVersion()&&N.default.get("last_reloaded"))try{var o={};Object(j.each)(["sound_notify_off","im_ui_notify_off"],(e,t)=>{var i=N.default.get(t);null!==i&&(o[t]=i)}),window.localStorage.clear(),Object(j.each)(o,(e,o)=>N.default.set(e,o))}catch(e){}}}class ct{constructor(e,o){this.count=o||1,this.func=e}done(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.count-=e,this.count<=0&&this.func()}}function ut(e){rt.loaded?e():Object(O.addEvent)(window,"load",e)}function ht(){window.showWriteMessageBox=Oe.showWriteMessageBox,window.giftsBox=Oe.giftsBox,window.moneyTransferBox=Oe.moneyTransferBox,window.reportAd=Oe.reportAd,window.mobilePromo=Oe.mobilePromo,window.showAudioClaimWarning=Oe.showAudioClaimWarning,window.menuSettings=Oe.menuSettings,window.sureDeleteAll=Oe.sureDeleteAll,window.TopNotifier=Object(B.initTopNotifier)(),window.showPhoto=B.showPhoto,window.showManyPhoto=B.showManyPhoto,window.showAlbums=B.showAlbums,window.showAlbum=B.showAlbum,window.showPhotoTags=B.showPhotoTags,window.isPhotoeditor3Available=B.isPhotoeditor3Available,window.AudioMessagePlayer=B.AudioMessagePlayer,window.showVideoTags=B.showVideoTags,window.videoCallback=B.videoCallback,window.showWiki=B.showWiki,window.showApp=B.showApp,window.showPodcast=B.showPodcast,window.podcastStartFrom=B.podcastStartFrom,window.showAttachProductBox=B.showAttachProductBox,window.articlePrepare=B.articlePrepare,window.isArticleLayerOpen=B.isArticleLayerOpen,window.isArticleEditorAvailable=B.isArticleEditorAvailable,window.openArticleEditor=B.openArticleEditor,window.mentionOver=ke.mentionOver,window.mentionClick=B.mentionClick,window.mobileOnlineTip=ke.mobileOnlineTip,window.pageVerifiedTip=ke.pageVerifiedTip,window.audioShowActionTooltip=ke.audioShowActionTooltip,window.shareAudioPlaylist=B.shareAudioPlaylist,window.getAudioPlayer=B.getAudioPlayer,window.deleteAudioOnClaim=B.deleteAudioOnClaim,window.initTopAudioPlayer=B.initTopAudioPlayer,window.bookmark=B.bookmark,window.bookmarkPost=B.bookmarkPost,window.bookmarkArticle=B.bookmarkArticle,window.bookmarkLink=B.bookmarkLink,window.bookmarkPodcast=B.bookmarkPodcast,window.bookmarkNarrative=B.bookmarkNarrative,window.bookmarkEvent=B.bookmarkEvent,window.bookmarkTooltip=ke.bookmarkTooltip,window.showStory=E.showStory,window.showNarrative=E.showNarrative,window.storiesPreloadStatic=E.storiesPreloadStatic,window.sendMask=E.sendMask}window.constants={Groups:pe.default},window.partConfigEnabled=me.partConfigEnabled,Object(g.initDomScripts)(),window.ge=g.ge,window.geByTag=g.geByTag,window.geByTag1=g.geByTag1,window.geByClass=g.geByClass,window.geByClass1=g.geByClass1,window.gpeByClass=g.gpeByClass,window.domQuery=g.domQuery,window.domQuery1=g.domQuery1,window.domClosest=g.domClosest,window.ce=g.ce,window.cf=g.cf,window.re=g.re,window.se=g.se,window.sech=g.sech,window.rs=g.rs,window.psr=g.psr,window.domReplaceEl=g.domReplaceEl,window.domEL=g.domEL,window.domNS=g.domNS,window.domPS=g.domPS,window.domFC=g.domFC,window.domLC=g.domLC,window.domPN=g.domPN,window.domChildren=g.domChildren,window.domInsertBefore=g.domInsertBefore,window.domInsertAfter=g.domInsertAfter,window.domByClass=g.domByClass,window.domData=g.domData,window.domChildIndex=g.domChildIndex,window.domCA=g.domCA,window.domClosestSibling=g.domClosestSibling,window.matchesSelector=g.matchesSelector,window.isHover=g.isHover,window.isAncestor=g.isAncestor,window.getScroll=g.getScroll,window.domClosestPositioned=g.domClosestPositioned,window.domClosestOverflowHidden=g.domClosestOverflowHidden,window.show=g.show,window.hide=g.hide,window.isVisible=g.isVisible,window.clientHeight=g.clientHeight,window.getClientRectOffsetY=g.getClientRectOffsetY,window.toggle=g.toggle,window.boundingRectEnabled=g.boundingRectEnabled,window.getXYRect=g.getXYRect,window.getXY=g.getXY,window.isWindow=g.isWindow,window.getSize=g.getSize,window.hasClass=g.hasClass,window.addClass=g.addClass,window.addClassDelayed=g.addClassDelayed,window.removeClass=g.removeClass,window.removeClassDelayed=g.removeClassDelayed,window.toggleClass=g.toggleClass,window.toggleClassDelayed=g.toggleClassDelayed,window.replaceClass=g.replaceClass,window.getStyle=g.getStyle,window.setStyle=g.setStyle,window.setStyleDelayed=g.setStyleDelayed,window.setPseudoStyle=g.setPseudoStyle,window.data=g.data,window.attr=g.attr,window.removeAttr=g.removeAttr,window.removeData=g.removeData,window.cleanElems=g.cleanElems,window.setTitle=g.setTitle,window.getZoom=g.getZoom,window.val=g.val,window.elfocus=g.elfocus,window.traverseParent=g.traverseParent,window.getH=g.getH,window.getW=g.getW,window.domClosestByTag=g.domClosestByTag,window.setDocumentTitle=g.setDocumentTitle,window.lockDocumentTitle=g.lockDocumentTitle,window.KEY=O.KEY,window.addEvent=O.addEvent,window.removeEvent=O.removeEvent,window.triggerEvent=O.triggerEvent,window.cancelEvent=O.cancelEvent,window.stopEvent=O.stopEvent,window.normEvent=O.normEvent,window.checkEvent=O.checkEvent,window.checkKeyboardEvent=O.checkKeyboardEvent,window.checkOver=O.checkOver,Object(j.initUtilsCommon)(),window.isRetina=j.isRetina,window.extractUrls=j.extractUrls,window.serializeForm=j.serializeForm,window.addTemplates=j.addTemplates,window.getTemplate=j.getTemplate,window.rand=j.rand,window.irand=j.irand,window.isUndefined=j.isUndefined,window.isFunction=j.isFunction,window.isArray=j.isArray,window.isString=j.isString,window.isObject=j.isObject,window.isEmpty=j.isEmpty,window.vkNow=j.vkNow,window.vkImage=j.vkImage,window.trim=j.trim,window.stripHTML=j.stripHTML,window.escapeRE=j.escapeRE,window.intval=j.intval,window.floatval=j.floatval,window.positive=j.positive,window.isNumeric=j.isNumeric,window.winToUtf=j.winToUtf,window.replaceEntities=j.replaceEntities,window.clean=j.clean,window.unclean=j.unclean,window.each=j.each,window.indexOf=j.indexOf,window.inArray=j.inArray,window.clone=j.clone,window.arrayKeyDiff=j.arrayKeyDiff,window.extend=j.extend,window.vkLocal=j.vkLocal,window.lTimeout=j.lTimeout,window.getCaretCharacterOffsetWithin=j.getCaretCharacterOffsetWithin,window.formatCount=j.formatCount,window.encodeHtml=j.encodeHtml,window.decodeHtml=j.decodeHtml,at(),window.AjaxConvert=f,window.ajx2q=f.toQueryString,window.q2ajx=f.fromQueryString,window.requestBox=p.requestBox,window.activateMobileBox=p.activateMobileBox,window.validateMobileBox=p.validateMobileBox,window.validatePassBox=p.validatePassBox,Object(u.initCookies)(),window.getCookie=u.getCookie,window.setCookie=u.setCookie,Object(be.initDebugTools)(),window.debugLog=be.debugLog,window.debugEl=be.debugEl,window.isToday=fe.isToday,window.isYesterday=fe.isYesterday,window.isTomorrow=fe.isTomorrow,window.isSameDate=fe.isSameDate,window.leadingZero=fe.leadingZero,window.formatTime=fe.formatTime,window.getServerTime=fe.getServerTime,window.parseLatin=C.parseLatin,window.parseCyr=C.parseCyr,window.parseLatKeys=C.parseLatKeys,window.langNumeric=C.langNumeric,window.langSex=C.langSex,window.langStr=C.langStr,window.addLangKeys=C.addLangKeys,window.getLang=C.getLang,window.langDate=C.langDate,window.getShortDate=C.getShortDate,window.getShortDateOrTime=C.getShortDateOrTime,window.langWordNumeric=C.langWordNumeric,window.getDateText=C.getDateText,window.getBigDateNew=C.getBigDateNew,window.getSmDate=C.getSmDate,window.scrollToY=T.scrollToY,window.scrollToTop=T.scrollToTop,window.scrollGetX=T.scrollGetX,window.scrollGetY=T.scrollGetY,window.disableBodyScroll=T.disableBodyScroll,window.enableBodyScroll=T.enableBodyScroll,window.Chat=_e.Chat,window.__qlTimer=null,window.__qlClear=_e.__qlClear,window.onLoginDone=_e.onLoginDone,window.onLoginFailed=_e.onLoginFailed,window.onLoginCaptcha=_e.onLoginCaptcha,window.onLoginReCaptcha=_e.onLoginReCaptcha,window.storePasswordCredential=_e.storePasswordCredential,window.cssAnim=_e.cssAnim,window.imagesLoader=_e.imagesLoader,window.nodeUpdated=_e.nodeUpdated,window.hideNewsAnnounce=_e.hideNewsAnnounce,window.leftAdBlockClose=_e.leftAdBlockClose,window.leftBlockToggleFriend=_e.leftBlockToggleFriend,window.leftBlockFriendTooltip=_e.leftBlockFriendTooltip,window.placeholderSetup=Ho.placeholderSetup,window.placeholderInit=Ho.placeholderInit,window.isInputActive=Ho.isInputActive,window.showTooltip=je.showTooltip,window.showTitle=je.showTitle,window.showHint=je.showHint,window.topMsg=c.topMsg,window.showMsg=c.showMsg,window.topError=c.topError,window.showGlobalPrg=c.showGlobalPrg,window.checkTextLength=Se.checkTextLength,window.getSelectionText=Se.getSelectionText,window.goAway=Se.goAway,window.debounce=Wo.debounce,window.hashCode=Se.hashCode,window.isFullScreen=Se.isFullScreen,window.parallel=Se.parallel,window.parseJSON=Se.parseJSON,window.shuffle=Se.shuffle,window.throttle=Se.throttle,window.toggleOnline=Se.toggleOnline,window.updateMoney=Se.updateMoney,window.onlinePlatformClass=Se.onlinePlatformClass,window.Fx=k.Fx,window.fx=k.Fx,window.animate=k.animate,window.cubicBezier=k.cubicBezier,window.fadeTo=k.fadeTo,window.genFx=k.genFx,window.getRGB=k.getRGB,window.getColor=k.getColor,window.slideDown=k.slideDown,window.slideUp=k.slideUp,window.slideToggle=k.slideToggle,window.fadeIn=k.fadeIn,window.fadeOut=k.fadeOut,window.fadeToggle=k.fadeToggle,window.animateCount=k.animateCount,window.updateAriaElements=Mo.updateAriaElements,window.updateAriaCheckboxes=Mo.updateAriaCheckboxes,window.hasAccessibilityMode=Mo.hasAccessibilityMode,window.cancelStackFilter=L.cancelStackFilter,window.cancelStackPush=L.cancelStackPush,window.cancelStackPop=L.cancelStackPop,Object(nt.init)(),window.ElementTooltip=b.default,window._iconAdd=window.devicePixelRatio>=2?"_2x":"",window.setFavIcon=v,1===rt.al?(location.search||"/"!==location.pathname)&&location.replace("/"):(3!==rt.al||history.pushState||(rt.al=2),location.search||"/index.php"!==location.pathname||location.replace("/"),rt.version=!1),K(),Object(m.initBrowserUtils)(),window.browser=m.browser,window.mobPlatforms=m.mobPlatforms,window.browserFeatures=m.browserFeatures,Object(y.initFlashUtils)(),window.toggleFlash=y.toggleFlash,window.renderFlash=y.renderFlash,dt(),window.updateHeaderStyles=ie.updateHeaderStyles,window.updateNarrow=ge.updateNarrow,window.checkPageBlocks=ge.checkPageBlocks,window.redraw=ge.redraw,window.onBodyResize=ge.onBodyResize,window.onBodyScroll=ge.onBodyScroll,window.leftBlockOver=ge.leftBlockOver,window.leftBlockOut=ge.leftBlockOut,window.leftBlockHide=ge.leftBlockHide,window.onDocumentClick=Ro.onDocumentClick,window.onEnter=Ro.onEnter,window.onCtrlEnter=Ro.onCtrlEnter,window.logLeftMenuClicks=X.logLeftMenuClicks,window.autosizeSetup=ge.autosizeSetup,window.getProgressBarEl=ge.getProgressBarEl,window.getProgressHtml=ge.getProgressHtml,Object(Uo.initAds)(),ue(e=>Object(u.setCookie)(he,JSON.stringify(e),.01,!0,"Strict")),window.onDomReady=e=>e(),window.currentModule=()=>cur.currentModule?cur.currentModule():cur.module,window.hab=new S({onLocChange:function(e){var o={back:!0,hist:!0};3===vk.al&&history.state&&Object(j.isObject)(history.state)&&(o.scrollTop=Object(j.intval)(history.state.scrollTop)),nav.go("/"+e,void 0,o)}}),window.ls=N.default,window.shortCurrency=D,window.statlogsValueEvent=X.statlogsValueEvent,window.saveSearchAttemptStats=X.saveSearchAttemptStats,window.removeSearchPositionTracker=X.removeSearchPositionTracker,window.callHub=ct,window.CallHub=ct,window.gSearch=new ee,window.zNav=ie.zNav,window.handlePageView=ie.handlePageView,window.handlePageParams=ie.handlePageParams,window.handlePageCount=ie.handlePageCount,window.updateOtherCounters=ie.updateOtherCounters,window.processDestroy=ie.processDestroy,window.globalHistoryDestroy=ie.globalHistoryDestroy,window.showBackLink=ie.showBackLink,window.nav=te.default,nav.init(),setTimeout(function(){var e=Object(j.intval)(Object(u.getCookie)("remixrt"));window.devicePixelRatio>=2&&(!m.browser.iphone||Object(u.getCookie)("remixme"))?1&e||(Object(u.setCookie)("remixrt",1|e,365),window._retinaInit=function(){stManager.add(["retina.css"]),Object(g.addClass)(document.body,"is_2x")},st&&window._retinaInit()):1&e&&Object(u.setCookie)("remixrt",1^e,365)},0),window.boxQueue=Object(ye.getBoxQueue)(),window.__bq=boxQueue,window.curBox=ye.curBox,Object(ye.initBoxQueue)(),window.boxRefreshCoords=ye.boxRefreshCoords,window.MessageBox=ve.MessageBox,window.showBox=ve.showBox,window.showTabbedBox=ve.showTabbedBox,window.showFastBox=ve.showFastBox,window.showCaptchaBox=ve.showCaptchaBox,window.showReCaptchaBox=ve.showReCaptchaBox,window.showDoneBox=ye.showDoneBox,window.TopMenu=ge.TopMenu,window.TopSearch=oe.default,window.handleScroll=Se.handleScroll,window.loadScript=Z.loadScript,window.SpecialEvent=it,Object(J.initUiHelpers)(),window.notaBene=J.notaBene,window.updSideTopLink=J.updSideTopLink,window.createButton=J.createButton,window.actionsMenuItemLocked=J.actionsMenuItemLocked,window.lockActionsMenuItem=J.lockActionsMenuItem,window.unlockActionsMenuItem=J.unlockActionsMenuItem,window.linkLocked=J.linkLocked,window.lockLink=J.lockLink,window.unlockLink=J.unlockLink,window.lockButton=J.lockButton,window.unlockButton=J.unlockButton,window.buttonLocked=J.buttonLocked,window.isButtonLocked=J.isButtonLocked,window.disableButton=J.disableButton,window.sbWidth=J.sbWidth,window.isChecked=J.isChecked,window.checkbox=J.checkbox,window.disable=J.disable,window.radioval=J.radioval,window.radiobtn=J.radiobtn,window.showProgress=J.showProgress,window.hideProgress=J.hideProgress,window.disableEl=J.disableEl,window.enableEl=J.enableEl,Object(x.initVideo)(),window.VideoConstants=x.VideoConstants,window.showVideo=x.showVideo,window.showInlineVideo=x.showInlineVideo,window.loadInlineVideo=x.loadInlineVideo,window.revertLastInlineVideo=x.revertLastInlineVideo,window.pauseLastInlineVideo=x.pauseLastInlineVideo,window.playLastInlineVideo=x.playLastInlineVideo,window.checkMp4=x.checkMp4,window.performance&&window.performance.memory&&Object(j.rand)(0,100)<5&&Object(Vo.collectMemoryStats)(),Ke?(Object(O.addEvent)(window,"blur",fo),Object(O.addEvent)(window,"focus",mo),onDomReady(()=>setTimeout(lo,500)),window.LongView={register:uo,onScroll:Object(Se.throttle)(ho,50),onBeforePageChange:bo,clearElemsCache:co,_debug:function(){return{started:Je,tracking:Xe,viewedData:Ze,viewIndexes:wo,blindTop:oo,blindBottom:to}}}):window.LongView={register:()=>{},onScroll:()=>{},onBeforePageChange:()=>{},clearElemsCache:()=>{}},Object(_e.initPostsLegacyVars)(),ht(),window.onLoaded=ut,window.domStarted=wt,window.domReady=lt,Object(be.debugLog)("common module enabled"),stManager.done(jsc("web/common_web.js"))}}); 