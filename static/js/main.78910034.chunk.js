(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/Coming_Soon.81ee1f96.jpg"},19:function(e,t,a){e.exports=a.p+"static/media/pl.42e6fe3d.svg"},24:function(e,t,a){e.exports=a.p+"static/media/gb.9a9297cf.svg"},30:function(e,t,a){e.exports=a.p+"static/media/Candy_Gift_-_Screenshot.f1a94204.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/Candy_Gift_-_Screenshot_2.620873aa.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/Candy_Gift_-_Screenshot_3.fd7fed0c.jpg"},325:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(17),r=a.n(s),i=(a(69),a(7)),c=a(8),o=a(11),g=a(9),m=a(10),u=(a(70),a(13)),p=a(326),v=a(327),d=a(329),h=a(341),E=a(330),f=a(331),b=a(332),_=a(328),y=a(62),w=(a(295),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(g.a)(t).call(this,e))).toggle=a.toggle.bind(Object(u.a)(a)),a.state={isOpen:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"onSelectFlag",value:function(e){"pl"===e.toLowerCase()?(new Ce)._onSetLanguagePL():"gb"===e.toLowerCase()&&(new Ce)._onSetLanguageGB()}},{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("header",{className:"App-header"},l.a.createElement(p.a,{color:"light",light:!0,expand:"md"},l.a.createElement(v.a,null,l.a.createElement(_.a,{to:"/",className:""},l.a.createElement("i",{className:"fa fa-home",style:{fontSize:"50px",color:"light"}}),l.a.createElement("p",{className:"text-home",style:{float:"right",paddingTop:"12%",fontSize:"1rem"}}," - Portfolio Unity3D"))),l.a.createElement(d.a,{onClick:this.toggle}),l.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(E.a,{className:"ml-auto",navbar:!0},l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(_.a,{to:"/apps"},ke.heading_Apps))),l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(_.a,{to:"/social-media"},ke.heading_SocialMedia))),l.a.createElement(f.a,null,l.a.createElement(y.a,{countries:["GB","PL"],defaultCountry:ke.getLanguage().toUpperCase(),showSelectedLabel:!1,showOptionLabel:!1,selectedSize:18,optionsSize:14,onSelect:this.onSelectFlag})))))))}}]),t}(n.Component)),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,ke.datetime)}}]),t}(n.Component),S=a(343),j=a(342),k=a(340),C=a(333),x=a(334),T=a(335),L=a(336),I=a(337),z=a(338),N=a(339),P=a(19),G=a.n(P),M=a(24),A=a.n(M),B=a(30),H=a.n(B),R=a(31),W=a.n(R),q=a(32),D=a.n(q),F=a(33),U=a.n(F),K=a(34),Z=a.n(K),J=a(35),V=a.n(J),Y=a(36),$=a.n(Y),Q=a(37),X=a.n(Q),ee=a(38),te=a.n(ee),ae=a(39),ne=a.n(ae),le=a(15),se=a.n(le),re=a(40),ie=a.n(re),ce=a(41),oe=a.n(ce),ge=a(42),me=a.n(ge),ue=a(43),pe=a.n(ue),ve=(a(303),a(16)),de=a(57),he=(a(315),[H.a,W.a,D.a,U.a,Z.a,V.a,$.a,X.a,te.a,ne.a,ie.a,oe.a,me.a,pe.a]),Ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(g.a)(t).call(this,e))).state={photoIndex:0,isOpen:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen;return l.a.createElement("div",{style:{float:"left",paddingBottom:"30px"}},n&&l.a.createElement(de.a,{mainSrc:he[a],nextSrc:he[(a+1)%he.length],prevSrc:he[(a+he.length-1)%he.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+he.length-1)%he.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%he.length})},discourageDownloads:!1,enableZoom:!1,clickOutsideToClose:!1}),l.a.createElement("h4",{style:{paddingLeft:"30px",paddingTop:"30px"}},ke.heading_Apps),l.a.createElement(C.a,{style:{paddingTop:"30px",float:"left"}},l.a.createElement(x.a,{className:"Card",style:{borderStyle:"none"}}),l.a.createElement(x.a,{className:"Card"},l.a.createElement(ve.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:10})}},l.a.createElement("img",{src:ie.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:11})}},l.a.createElement("img",{src:oe.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:12})}},l.a.createElement("img",{src:me.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:13})}},l.a.createElement("img",{src:pe.a,alt:""}))),l.a.createElement(T.a,null,l.a.createElement(L.a,null,"'Survive The Clash Of Spiders'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-android"}),l.a.createElement("i",{class:"fa fa-cardboard"})," Oculus/Cardboard (VR) | ",l.a.createElement("i",{class:"fa fa-user"})," Singleplayer | ",l.a.createElement("img",{src:A.a,alt:"gb",height:"20",width:"20"})," ",ke.english_version,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",null,ke.spiders_1,l.a.createElement("br",null),ke.spiders_2,l.a.createElement("br",null),l.a.createElement("b",null,ke.spiders_3))),l.a.createElement(z.a,null),l.a.createElement(N.a,{color:"success",href:"https://github.com/pawel54321/Survive-The-Clash-Of-Spiders"},l.a.createElement("i",{class:"fa fa-play-circle"})," ",ke.button_github)," ",l.a.createElement(N.a,{color:"info",disabled:!0,href:""},l.a.createElement("i",{class:"fa fa-info-circle"})," ",ke.button_github_2))),l.a.createElement(x.a,{className:"Card",style:{borderStyle:"none"}})),l.a.createElement(C.a,{style:{paddingTop:"30px",float:"left"}},l.a.createElement(x.a,{className:"Card"},l.a.createElement(ve.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:-1})}},l.a.createElement("img",{src:se.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:-1})}},l.a.createElement("img",{src:se.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:-1})}},l.a.createElement("img",{src:se.a,alt:""}))),l.a.createElement(T.a,null,l.a.createElement(L.a,null,"'?'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-globe"})," WebGL | ",l.a.createElement("i",{class:"fa fa-server"})," Multiplayer (Photon) | Only NETWORK (No LAN) | ",l.a.createElement("img",{src:G.a,alt:"pl",height:"20",width:"20"})," ",ke.polish_version),l.a.createElement(z.a,null),l.a.createElement(N.a,{disabled:!0,color:"primary",href:""},l.a.createElement("i",{class:"fa fa-gamepad"})," ",ke.button_play))),l.a.createElement(x.a,{className:"Card"},l.a.createElement(ve.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:-1})}},l.a.createElement("img",{src:se.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:-1})}},l.a.createElement("img",{src:se.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:-1})}},l.a.createElement("img",{src:se.a,alt:""}))),l.a.createElement(T.a,null,l.a.createElement(L.a,null,"'?'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-globe"})," WebGL | ",l.a.createElement("i",{class:"fa fa-comments"})," Multiplayer (Hot Seat) | ",l.a.createElement("img",{src:G.a,alt:"pl",height:"20",width:"20"})," ",ke.polish_version),l.a.createElement(z.a,null),l.a.createElement(N.a,{disabled:!0,color:"primary",href:""},l.a.createElement("i",{class:"fa fa-gamepad"})," ",ke.button_play))),l.a.createElement(x.a,{className:"Card"},l.a.createElement(ve.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:-1})}},l.a.createElement("img",{src:se.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:-1})}},l.a.createElement("img",{src:se.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:-1})}},l.a.createElement("img",{src:se.a,alt:""}))),l.a.createElement(T.a,null,l.a.createElement(L.a,null,"'?'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-globe"})," WebGL | ",l.a.createElement("i",{class:"fa fa-user"})," Singleplayer | ",l.a.createElement("img",{src:G.a,alt:"pl",height:"20",width:"20"})," ",ke.polish_version),l.a.createElement(z.a,null),l.a.createElement(N.a,{disabled:!0,color:"primary",href:""},l.a.createElement("i",{class:"fa fa-gamepad"})," ",ke.button_play)))),l.a.createElement(C.a,{style:{paddingTop:"30px",float:"left"}},l.a.createElement(x.a,{className:"Card"},l.a.createElement(ve.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:0})}},l.a.createElement("img",{src:H.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:1})}},l.a.createElement("img",{src:W.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:2})}},l.a.createElement("img",{src:D.a,alt:""}))),l.a.createElement(T.a,null,l.a.createElement(L.a,null,"'Candy Gift'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-android"})," Android | ",l.a.createElement("i",{class:"fa fa-user"})," Singleplayer | ",l.a.createElement("img",{src:A.a,alt:"gb",height:"20",width:"20"})," ",ke.english_version),l.a.createElement(z.a,null),l.a.createElement(N.a,{color:"success",href:"https://play.google.com/store/apps/details?id=com.pawelwarcaba.candygift"},l.a.createElement("i",{class:"fa fa-play-circle"})," ",ke.button_google_play))),l.a.createElement(x.a,{className:"Card"},l.a.createElement(ve.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:6e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:3})}},l.a.createElement("img",{src:U.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:4})}},l.a.createElement("img",{src:Z.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:5})}},l.a.createElement("img",{src:V.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:6})}},l.a.createElement("img",{src:$.a,alt:""}))),l.a.createElement(T.a,null,l.a.createElement(L.a,null,"'The Escaping Balls' & 'The Escaping Balls 2'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-desktop"})," Desktop | ",l.a.createElement("i",{class:"fa fa-home"})," Multiplayer (UNet) | Only LAN | ",l.a.createElement("img",{src:A.a,alt:"gb",height:"20",width:"20"})," ",ke.english_version),l.a.createElement(z.a,null),l.a.createElement(N.a,{color:"success",href:"https://github.com/pawel54321/The-Escaping-Balls---The-Escaping-Balls-2"},l.a.createElement("i",{class:"fa fa-play-circle"})," ",ke.button_github)," ",l.a.createElement(N.a,{color:"info",href:"https://github.com/pawel54321/The-Escaping-Balls---The-Escaping-Balls-2/blob/master/README.pdf"},l.a.createElement("i",{class:"fa fa-info-circle"})," ",ke.button_github_2))),l.a.createElement(x.a,{className:"Card"},l.a.createElement(ve.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:9e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:7})}},l.a.createElement("img",{src:X.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:8})}},l.a.createElement("img",{src:te.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:9})}},l.a.createElement("img",{src:ne.a,alt:""}))),l.a.createElement(T.a,null,l.a.createElement(L.a,null,"'R\xf3wnanie Kwadratowe'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-android"})," Android | ",l.a.createElement("img",{src:G.a,alt:"pl",height:"20",width:"20"})," ",ke.polish_version),l.a.createElement(z.a,null),l.a.createElement(N.a,{color:"success",href:"https://play.google.com/store/apps/details?id=com.pawelwarcaba.rownaniekwadratowe"},l.a.createElement("i",{class:"fa fa-play-circle"})," ",ke.button_google_play)))))}}]),t}(n.Component),fe=a(25),be=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{clear:"both"}},l.a.createElement("h4",{style:{paddingLeft:"30px",paddingTop:"30px"}},ke.heading_SocialMedia),l.a.createElement(C.a,{style:{padding:"30px",float:"middle"}},l.a.createElement(x.a,{className:"Card"},l.a.createElement("center",null,l.a.createElement(fe.SocialIcon,{style:{marginTop:"25px",height:100,width:100},url:"https://play.google.com/store/apps/developer?id=Pawel+Warcaba"})),l.a.createElement(T.a,null,l.a.createElement(L.a,null,l.a.createElement("div",{style:{whiteSpace:"nowrap"}},"Google Play")),l.a.createElement(I.a,null,ke.type_subtitle_1),l.a.createElement(z.a,null))),l.a.createElement(x.a,{className:"Card"},l.a.createElement("center",null,l.a.createElement(fe.SocialIcon,{style:{marginTop:"25px",height:100,width:100},url:"https://www.youtube.com/channel/UCEMiuxoZuphxWj7eDqh4hBA"})),l.a.createElement(T.a,null,l.a.createElement(L.a,null,"YouTube"),l.a.createElement(I.a,null,ke.type_subtitle_2),l.a.createElement(z.a,null))),l.a.createElement(x.a,{className:"Card"},l.a.createElement("center",null,l.a.createElement(fe.SocialIcon,{style:{marginTop:"25px",height:100,width:100},url:"https://github.com/pawel54321?tab=repositories"})),l.a.createElement(T.a,null,l.a.createElement(L.a,null,"GitHub"),l.a.createElement(I.a,null,ke.type_subtitle_3),l.a.createElement(z.a,null)))))}}]),t}(n.Component),_e=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.myCookie()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",{style:{paddingLeft:"30px",paddingTop:"30px"}},"Test"),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{id:"gameContainer",style:{width:"960px",height:"600px"}})),l.a.createElement("br",null))}}]),t}(n.Component),ye=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"NotFoundClass"},l.a.createElement("center",null,l.a.createElement("h2",null,"Not Found"),ke.subtitle_NotFound,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),we=a(59),Oe=a.n(we),Se=a(60),je=a.n(Se),ke=new Oe.a({gb:{spiders_1:"Oculus Support - move contoller to fight and tracking.",spiders_2:"Cardboard Support - automatic camera fight and tracking.",spiders_3:"I created the prototype 'game' in only one day (6h-12h).",heading_Home:"Home",heading_Apps:"Apps",button_read_more:"Read More",button_play:"Play Now!",button_google_play:"Go to Google Play",button_github:"Go to GitHub",button_github_2:"Read More on GitHub",heading_SocialMedia:"Social Media",type_subtitle_1:"My Apps",type_subtitle_2:"My Channel",type_subtitle_3:"Other Team Projects",subtitle_NotFound:"The page with the given URL does not exist.",polish_version:"Polska wersja",english_version:"Angielska wersja",datetime:"Last update: 18/03/2020 22:52"},pl:{spiders_1:"Wsparcie dla Oculus'a - poruszaj kontrolerem, aby walczy\u0107 i \u015bled\u017a wzrokiem otoczenie.",spiders_2:"Wsparcie dla Cardboard'a - automatyczna walka przy pomocy kamery, kt\xf3ra r\xf3wnie\u017c s\u0142u\u017cy do rozgl\u0105dania si\u0119.",spiders_3:"Stworzy\u0142em prototyp 'gr\u0119' w zaledwie jeden dzie\u0144 (6h-12h).",heading_Home:"Strona G\u0142\xf3wna",heading_Apps:"Aplikacje",button_read_more:"Czytaj Wi\u0119cej",button_play:"Zagraj Teraz!",button_google_play:"Przejd\u017a do Google Play",button_github:"Przejd\u017a do GitHub",button_github_2:"Czytaj Wi\u0119cej na GitHub",heading_SocialMedia:"Media Spo\u0142eczno\u015bciowe",type_subtitle_1:"Moje Aplikacje",type_subtitle_2:"M\xf3j Kana\u0142",type_subtitle_3:"Inne Projekty Zespo\u0142owe",subtitle_NotFound:"Strona o podanym adresie URL nie istnieje.",polish_version:"Polish version",english_version:"English version",datetime:"Ostatnia aktualizacja: 18.03.2020 22:52"}}),Ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).Language=function(){"pl"===localStorage.getItem("language")?ke.setLanguage("pl"):ke.setLanguage("gb")},a.Routy=function(){return l.a.createElement(S.a,null,l.a.createElement(j.a,{exact:!0,path:"/",render:function(e){return l.a.createElement("div",null,l.a.createElement(Ee,null),l.a.createElement(be,null))}}),l.a.createElement(j.a,{exact:!0,path:"/apps",component:Ee}),l.a.createElement(j.a,{exact:!0,path:"/social-media",component:be}),l.a.createElement(j.a,{exact:!0,path:"/my-test",component:_e}),l.a.createElement(j.a,{exact:!0,path:"/*",component:ye}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"_onSetLanguageGB",value:function(){"gb"!==ke.getLanguage()&&(localStorage.setItem("language","gb"),window.location.reload())}},{key:"_onSetLanguagePL",value:function(){"pl"!==ke.getLanguage()&&(localStorage.setItem("language","pl"),window.location.reload())}},{key:"render",value:function(){return new je.a({time:"0.5s",label:"\ud83c\udf13"}).showWidget(),l.a.createElement(k.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(w,null),l.a.createElement("main",null,this.Routy(),this.Language()),l.a.createElement(O,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(324);r.a.render(l.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_2_-_Screenshot.dc88810d.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_2_-_Screenshot_2.72b2ed50.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_-_Screenshot.a0b36ca3.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_-_Screenshot_2.1b480346.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/R\xf3wnanie_Kwadratowe_-_Screenshot.33bdf596.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/R\xf3wnanie_Kwadratowe_-_Screenshot_2.7b8a5518.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/R\xf3wnanie_Kwadratowe_-_Screenshot_3.1b485662.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/Survive_The_Clash_Of_Spiders_-_Screenshot_1.180dcf0f.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/Survive_The_Clash_Of_Spiders_-_Screenshot_2.522fb76b.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/Survive_The_Clash_Of_Spiders_-_Screenshot_3.ebd4e3ac.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/Survive_The_Clash_Of_Spiders_-_Screenshot_4.6115fb94.jpg"},46:function(e,t,a){var n={"./ad.svg":73,"./ae.svg":74,"./af.svg":75,"./ag.svg":76,"./ai.svg":77,"./al.svg":78,"./am.svg":79,"./ao.svg":80,"./ar.svg":81,"./as.svg":82,"./at.svg":83,"./au.svg":84,"./aw.svg":85,"./az.svg":86,"./ba.svg":87,"./bb.svg":88,"./bd.svg":89,"./be.svg":90,"./bf.svg":91,"./bg.svg":92,"./bh.svg":93,"./bi.svg":94,"./bj.svg":95,"./bm.svg":96,"./bo.svg":97,"./br.svg":98,"./bs.svg":99,"./bt.svg":100,"./bw.svg":101,"./by.svg":102,"./bz.svg":103,"./ca.svg":104,"./cd.svg":105,"./cf.svg":106,"./cg.svg":107,"./ch.svg":108,"./ci.svg":109,"./ck.svg":110,"./cl.svg":111,"./cm.svg":112,"./cn.svg":113,"./co.svg":114,"./cr.svg":115,"./cu.svg":116,"./cv.svg":117,"./cw.svg":118,"./cy.svg":119,"./cz.svg":120,"./de.svg":121,"./dj.svg":122,"./dk.svg":123,"./dm.svg":124,"./do.svg":125,"./dz.svg":126,"./ec.svg":127,"./ee.svg":128,"./eg.svg":129,"./er.svg":130,"./es.svg":131,"./et.svg":132,"./fi.svg":133,"./fj.svg":134,"./fk.svg":135,"./fm.svg":136,"./fo.svg":137,"./fr.svg":138,"./ga.svg":139,"./gb.svg":140,"./gd.svg":141,"./ge.svg":142,"./gg.svg":143,"./gh.svg":144,"./gi.svg":145,"./gl.svg":146,"./gm.svg":147,"./gn.svg":148,"./gq.svg":149,"./gr.svg":150,"./gt.svg":151,"./gu.svg":152,"./gw.svg":153,"./hk.svg":154,"./hn.svg":155,"./hr.svg":156,"./ht.svg":157,"./hu.svg":158,"./id.svg":159,"./ie.svg":160,"./il.svg":161,"./im.svg":162,"./in.svg":163,"./io.svg":164,"./iq.svg":165,"./ir.svg":166,"./is.svg":167,"./it.svg":168,"./je.svg":169,"./jm.svg":170,"./jo.svg":171,"./jp.svg":172,"./ke.svg":173,"./kg.svg":174,"./kh.svg":175,"./ki.svg":176,"./km.svg":177,"./kn.svg":178,"./kp.svg":179,"./kr.svg":180,"./kw.svg":181,"./ky.svg":182,"./kz.svg":183,"./la.svg":184,"./lb.svg":185,"./li.svg":186,"./lk.svg":187,"./lr.svg":188,"./ls.svg":189,"./lt.svg":190,"./lu.svg":191,"./lv.svg":192,"./ly.svg":193,"./ma.svg":194,"./mc.svg":195,"./md.svg":196,"./me.svg":197,"./mg.svg":198,"./mh.svg":199,"./mk.svg":200,"./ml.svg":201,"./mm.svg":202,"./mn.svg":203,"./mo.svg":204,"./mp.svg":205,"./mq.svg":206,"./mr.svg":207,"./ms.svg":208,"./mt.svg":209,"./mu.svg":210,"./mv.svg":211,"./mw.svg":212,"./mx.svg":213,"./my.svg":214,"./mz.svg":215,"./na.svg":216,"./nato.svg":217,"./ne.svg":218,"./nf.svg":219,"./ng.svg":220,"./ni.svg":221,"./nl.svg":222,"./no.svg":223,"./np.svg":224,"./nr.svg":225,"./nu.svg":226,"./nz.svg":227,"./om.svg":228,"./pa.svg":229,"./pe.svg":230,"./pf.svg":231,"./pg.svg":232,"./ph.svg":233,"./pk.svg":234,"./pl.svg":235,"./pn.svg":236,"./pr.svg":237,"./ps.svg":238,"./pt.svg":239,"./pw.svg":240,"./py.svg":241,"./qa.svg":242,"./ro.svg":243,"./rs.svg":244,"./ru.svg":245,"./rw.svg":246,"./sa.svg":247,"./sb.svg":248,"./sc.svg":249,"./sd.svg":250,"./se.svg":251,"./sg.svg":252,"./si.svg":253,"./sk.svg":254,"./sl.svg":255,"./sm.svg":256,"./sn.svg":257,"./so.svg":258,"./sr.svg":259,"./ss.svg":260,"./st.svg":261,"./sv.svg":262,"./sx.svg":263,"./sy.svg":264,"./sz.svg":265,"./tc.svg":266,"./td.svg":267,"./tg.svg":268,"./th.svg":269,"./tibet.svg":270,"./tj.svg":271,"./tk.svg":272,"./tm.svg":273,"./tn.svg":274,"./to.svg":275,"./tr.svg":276,"./tt.svg":277,"./tv.svg":278,"./tw.svg":279,"./tz.svg":280,"./ua.svg":281,"./ug.svg":282,"./us.svg":283,"./uy.svg":284,"./uz.svg":285,"./ve.svg":286,"./vi.svg":287,"./vn.svg":288,"./vu.svg":289,"./ws.svg":290,"./ye.svg":291,"./za.svg":292,"./zm.svg":293,"./zw.svg":294};function l(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(n)},l.resolve=s,e.exports=l,l.id=46},64:function(e,t,a){e.exports=a(325)},69:function(e,t,a){},70:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.78910034.chunk.js.map