(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/pl.42e6fe3d.svg"},23:function(e,t,a){e.exports=a.p+"static/media/gb.9a9297cf.svg"},29:function(e,t,a){e.exports=a.p+"static/media/Candy_Gift_-_Screenshot.f1a94204.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/Candy_Gift_-_Screenshot_2.620873aa.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/Candy_Gift_-_Screenshot_3.fd7fed0c.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_2_-_Screenshot.dc88810d.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_2_-_Screenshot_2.72b2ed50.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_-_Screenshot.a0b36ca3.jpg"},346:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),s=a.n(r),o=(a(82),a(6)),i=a(7),c=a(9),m=a(8),u=a(10),g=(a(84),a(17)),p=a(348),h=a(349),d=a(351),v=a(363),E=a(352),f=a(353),b=a(354),y=a(350),_=a(75),w=(a(308),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(g.a)(Object(g.a)(a))),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"onSelectFlag",value:function(e){"pl"===e.toLowerCase()?(new Je)._onSetLanguagePL():"gb"===e.toLowerCase()&&(new Je)._onSetLanguageGB()}},{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("header",{className:"App-header"},l.a.createElement(p.a,{color:"light",light:!0,expand:"md"},l.a.createElement(h.a,null,l.a.createElement(y.a,{to:"/",className:""},l.a.createElement("i",{className:"fa fa-home",style:{fontSize:"50px",color:"light"}}),l.a.createElement("p",{className:"text-home",style:{float:"right",paddingTop:"12%",fontSize:"1rem"}}," - Portfolio Unity3D"))),l.a.createElement(d.a,{onClick:this.toggle}),l.a.createElement(v.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(E.a,{className:"ml-auto",navbar:!0},l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(y.a,{to:"/apps"},Ze.heading_Apps))),l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(y.a,{to:"/social-media"},Ze.heading_SocialMedia))),l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(y.a,{to:"/privacy-policy"},Ze.heading_PrivacyPolicy))),l.a.createElement(f.a,null,l.a.createElement(_.a,{countries:["GB","PL"],defaultCountry:Ze.getLanguage().toUpperCase(),showSelectedLabel:!1,showOptionLabel:!1,selectedSize:18,optionsSize:14,onSelect:this.onSelectFlag})))))))}}]),t}(n.Component)),S=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,Ze.datetime)}}]),t}(n.Component),k=a(364),O=a(365),C=a(362),j=a(355),x=a(356),P=a(357),T=a(358),I=a(359),z=a(360),L=a(361),N=a(18),G=a.n(N),M=a(23),A=a.n(M),B=a(29),H=a.n(B),R=a(30),W=a.n(R),q=a(31),D=a.n(q),F=a(32),U=a.n(F),K=a(33),Z=a.n(K),J=a(34),V=a.n(J),Y=a(35),$=a.n(Y),Q=a(36),X=a.n(Q),ee=a(37),te=a.n(ee),ae=a(38),ne=a.n(ae),le=a(39),re=a.n(le),se=a(40),oe=a.n(se),ie=a(41),ce=a.n(ie),me=a(42),ue=a.n(me),ge=a(43),pe=a.n(ge),he=a(44),de=a.n(he),ve=a(45),Ee=a.n(ve),fe=a(46),be=a.n(fe),ye=a(47),_e=a.n(ye),we=a(48),Se=a.n(we),ke=a(49),Oe=a.n(ke),Ce=a(50),je=a.n(Ce),xe=a(51),Pe=a.n(xe),Te=a(52),Ie=a.n(Te),ze=a(53),Le=a.n(ze),Ne=(a(319),a(14)),Ge=a(70),Me=(a(334),[H.a,W.a,D.a,U.a,Z.a,V.a,$.a,X.a,te.a,ne.a,re.a,oe.a,ce.a,ue.a,pe.a,de.a,Ee.a,be.a,_e.a,Se.a,Oe.a,je.a,Pe.a,Ie.a,Le.a]),Ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={photoIndex:0,isOpen:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen;return l.a.createElement("div",{style:{float:"left",paddingBottom:"30px"}},n&&l.a.createElement(Ge.a,{mainSrc:Me[a],nextSrc:Me[(a+1)%Me.length],prevSrc:Me[(a+Me.length-1)%Me.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+Me.length-1)%Me.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%Me.length})},discourageDownloads:!1,enableZoom:!1,clickOutsideToClose:!1}),l.a.createElement("h4",{style:{paddingLeft:"30px",paddingTop:"30px"}},Ze.heading_Apps),l.a.createElement(j.a,{style:{paddingTop:"30px",float:"left"}},l.a.createElement(x.a,{className:"Card",style:{borderStyle:"none"}}),l.a.createElement(x.a,{className:"Card"},l.a.createElement(Ne.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:10})}},l.a.createElement("img",{src:re.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:11})}},l.a.createElement("img",{src:oe.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:12})}},l.a.createElement("img",{src:ce.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:13})}},l.a.createElement("img",{src:ue.a,alt:""}))),l.a.createElement(P.a,null,l.a.createElement(T.a,null,"'Survive The Clash Of Spiders'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-android"}),l.a.createElement("i",{class:"fa fa-cardboard"})," Oculus/Cardboard (VR) | ",l.a.createElement("i",{class:"fa fa-user"})," Singleplayer | ",l.a.createElement("img",{src:A.a,alt:"gb",height:"20",width:"20"})," ",Ze.english_version,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",null,Ze.spiders_1,l.a.createElement("br",null),Ze.spiders_2,l.a.createElement("br",null),l.a.createElement("b",null,Ze.spiders_3))),l.a.createElement(z.a,null),l.a.createElement(L.a,{color:"success",href:"https://github.com/pawel54321/Survive-The-Clash-Of-Spiders"},l.a.createElement("i",{class:"fa fa-play-circle"})," ",Ze.button_github)," ",l.a.createElement(L.a,{color:"info",disabled:!0,href:""},l.a.createElement("i",{class:"fa fa-info-circle"})," ",Ze.button_github_2))),l.a.createElement(x.a,{className:"Card",style:{borderStyle:"none"}})),l.a.createElement(j.a,{style:{paddingTop:"30px",float:"left"}},l.a.createElement(x.a,{className:"Card"},l.a.createElement(Ne.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:14})}},l.a.createElement("img",{src:pe.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:15})}},l.a.createElement("img",{src:de.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:16})}},l.a.createElement("img",{src:Ee.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:17})}},l.a.createElement("img",{src:be.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:18})}},l.a.createElement("img",{src:_e.a,alt:""}))),l.a.createElement(P.a,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(T.a,null,"'",Ze.game_card,"'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-globe"})," WebGL | ",l.a.createElement("i",{class:"fa fa-server"})," Multiplayer (Photon) | Only NETWORK (No LAN) | ",l.a.createElement("img",{src:G.a,alt:"pl",height:"20",width:"20"})," ",Ze.polish_version),l.a.createElement(z.a,null),l.a.createElement(L.a,{color:"success",href:"https://pawel54321.itch.io/card-game-pan"},l.a.createElement("i",{class:"fa fa-gamepad"})," ",Ze.button_play))),l.a.createElement(x.a,{className:"Card"},l.a.createElement(Ne.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:19})}},l.a.createElement("img",{src:Se.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:20})}},l.a.createElement("img",{src:Oe.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:21})}},l.a.createElement("img",{src:je.a,alt:""}))),l.a.createElement(P.a,null,l.a.createElement(T.a,null,"'",Ze.game_checkers,"'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-globe"})," WebGL | ",l.a.createElement("i",{class:"fa fa-comments"})," Multiplayer (Hot Seat) | ",l.a.createElement("img",{src:G.a,alt:"pl",height:"20",width:"20"})," ",Ze.polish_version),l.a.createElement(z.a,null),l.a.createElement(L.a,{color:"success",href:"https://pawel54321.itch.io/english-checkers"},l.a.createElement("i",{class:"fa fa-gamepad"})," ",Ze.button_play))),l.a.createElement(x.a,{className:"Card"},l.a.createElement(Ne.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:22})}},l.a.createElement("img",{src:Pe.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:23})}},l.a.createElement("img",{src:Ie.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:24})}},l.a.createElement("img",{src:Le.a,alt:""}))),l.a.createElement(P.a,null,l.a.createElement(T.a,null,"'",Ze.game_memory,"'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-globe"})," WebGL | ",l.a.createElement("i",{class:"fa fa-user"})," Singleplayer | ",l.a.createElement("img",{src:G.a,alt:"pl",height:"20",width:"20"})," ",Ze.polish_version),l.a.createElement(z.a,null),l.a.createElement(L.a,{color:"success",href:"https://pawel54321.itch.io/memory-game"},l.a.createElement("i",{class:"fa fa-gamepad"})," ",Ze.button_play)))),l.a.createElement(j.a,{style:{paddingTop:"30px",float:"left"}},l.a.createElement(x.a,{className:"Card"},l.a.createElement(Ne.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:0})}},l.a.createElement("img",{src:H.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:1})}},l.a.createElement("img",{src:W.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:2})}},l.a.createElement("img",{src:D.a,alt:""}))),l.a.createElement(P.a,null,l.a.createElement(T.a,null,"'Candy Gift'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-android"})," Android | ",l.a.createElement("i",{class:"fa fa-user"})," Singleplayer | ",l.a.createElement("img",{src:A.a,alt:"gb",height:"20",width:"20"})," ",Ze.english_version),l.a.createElement(z.a,null),l.a.createElement(L.a,{color:"success",href:"https://play.google.com/store/apps/details?id=com.pawelwarcaba.candygift"},l.a.createElement("i",{class:"fa fa-play-circle"})," ",Ze.button_google_play))),l.a.createElement(x.a,{className:"Card"},l.a.createElement(Ne.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:6e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:3})}},l.a.createElement("img",{src:U.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:4})}},l.a.createElement("img",{src:Z.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:5})}},l.a.createElement("img",{src:V.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:6})}},l.a.createElement("img",{src:$.a,alt:""}))),l.a.createElement(P.a,null,l.a.createElement(T.a,null,"'The Escaping Balls' & 'The Escaping Balls 2'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-desktop"})," Desktop | ",l.a.createElement("i",{class:"fa fa-home"})," Multiplayer (UNet) | Only LAN | ",l.a.createElement("img",{src:A.a,alt:"gb",height:"20",width:"20"})," ",Ze.english_version),l.a.createElement(z.a,null),l.a.createElement(L.a,{color:"success",href:"https://github.com/pawel54321/The-Escaping-Balls---The-Escaping-Balls-2"},l.a.createElement("i",{class:"fa fa-play-circle"})," ",Ze.button_github)," ",l.a.createElement(L.a,{color:"info",href:"https://github.com/pawel54321/The-Escaping-Balls---The-Escaping-Balls-2/blob/master/README.pdf"},l.a.createElement("i",{class:"fa fa-info-circle"})," ",Ze.button_github_2))),l.a.createElement(x.a,{className:"Card"},l.a.createElement(Ne.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:9e3},l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:7})}},l.a.createElement("img",{src:X.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:8})}},l.a.createElement("img",{src:te.a,alt:""})),l.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:9})}},l.a.createElement("img",{src:ne.a,alt:""}))),l.a.createElement(P.a,null,l.a.createElement(T.a,null,"'R\xf3wnanie Kwadratowe'"),l.a.createElement(I.a,null,l.a.createElement("i",{class:"fa fa-android"})," Android | ",l.a.createElement("img",{src:G.a,alt:"pl",height:"20",width:"20"})," ",Ze.polish_version),l.a.createElement(z.a,null),l.a.createElement(L.a,{color:"success",href:"https://play.google.com/store/apps/details?id=com.pawelwarcaba.rownaniekwadratowe"},l.a.createElement("i",{class:"fa fa-play-circle"})," ",Ze.button_google_play)))))}}]),t}(n.Component),Be=a(24),He=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{clear:"both"}},l.a.createElement("h4",{style:{paddingLeft:"30px",paddingTop:"30px"}},Ze.heading_SocialMedia),l.a.createElement(j.a,{style:{padding:"30px",float:"middle"}},l.a.createElement(x.a,{className:"Card"},l.a.createElement("center",null,l.a.createElement(Be.SocialIcon,{style:{marginTop:"25px",height:100,width:100},url:"https://play.google.com/store/apps/developer?id=Pawel+Warcaba"})),l.a.createElement(P.a,null,l.a.createElement(T.a,null,l.a.createElement("div",{style:{whiteSpace:"nowrap"}},"Google Play")),l.a.createElement(I.a,null,Ze.type_subtitle_1),l.a.createElement(z.a,null))),l.a.createElement(x.a,{className:"Card"},l.a.createElement("center",null,l.a.createElement(Be.SocialIcon,{style:{marginTop:"25px",height:100,width:100},url:"https://www.youtube.com/channel/UCEMiuxoZuphxWj7eDqh4hBA"})),l.a.createElement(P.a,null,l.a.createElement(T.a,null,"YouTube"),l.a.createElement(I.a,null,Ze.type_subtitle_2),l.a.createElement(z.a,null))),l.a.createElement(x.a,{className:"Card"},l.a.createElement("center",null,l.a.createElement(Be.SocialIcon,{style:{marginTop:"25px",height:100,width:100},url:"https://github.com/pawel54321?tab=repositories"})),l.a.createElement(P.a,null,l.a.createElement(T.a,null,"GitHub"),l.a.createElement(I.a,null,Ze.type_subtitle_3),l.a.createElement(z.a,null)))))}}]),t}(n.Component),Re=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.myCookie()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",{style:{paddingLeft:"30px",paddingTop:"30px"}},"Test"),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{id:"gameContainer",style:{width:"960px",height:"600px"}})),l.a.createElement("br",null))}}]),t}(n.Component),We=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"NotFoundClass"},l.a.createElement("center",null,l.a.createElement("h2",null,"Not Found"),Ze.subtitle_NotFound,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),qe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"PrivacyPolicyClass"},l.a.createElement("center",null,l.a.createElement("h1",null,l.a.createElement("strong",null,"Privacy Policy"))),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Privacy Policy of my Google Play Store apps")),l.a.createElement("br",null),"Pawe\u0142 Warcaba built the game as a Free game. This SERVICE is provided by Pawe\u0142 Warcaba at no cost and is intended for use as is.",l.a.createElement("br",null),"This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.",l.a.createElement("br",null),"If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.",l.a.createElement("br",null),"The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at game unless otherwise defined in this Privacy Policy.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Information Collection and Use")),l.a.createElement("br",null),"For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Log Data")),l.a.createElement("br",null),"I want to inform you that whenever you use my Service, in a case of an error in the game I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201cIP\u201d) address, device name, operating system version, the configuration of the game when utilizing my Service, the time and date of your use of the Service, and other statistics.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Cookies")),l.a.createElement("br",null),"Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.",l.a.createElement("br",null),"This Service does not use these \u201ccookies\u201d explicitly. However, the game may use third party code and libraries that use \u201ccookies\u201d to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Service Providers")),l.a.createElement("br",null),"I may employ third-party companies and individuals due to the following reasons:",l.a.createElement("br",null),"*\xa0\xa0\xa0To facilitate our Service;",l.a.createElement("br",null),"*\xa0\xa0\xa0To provide the Service on our behalf;",l.a.createElement("br",null),"*\xa0\xa0\xa0To perform Service-related services; or",l.a.createElement("br",null),"*\xa0\xa0\xa0To assist us in analyzing how our Service is used.",l.a.createElement("br",null),l.a.createElement("br",null),"I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Security")),l.a.createElement("br",null),"I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Links to Other Sites")),l.a.createElement("br",null),"This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Children\u2019s Privacy")),l.a.createElement("br",null),"These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13\\. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Changes to This Privacy Policy")),l.a.createElement("br",null),"I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",null,"Contact Us")),l.a.createElement("br",null),"If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at pawcio.pw36@gmail.com.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),De=a(72),Fe=a.n(De),Ue=a(73),Ke=a.n(Ue),Ze=new Fe.a({gb:{spiders_1:"Oculus Support - move contoller to fight and tracking.",spiders_2:"Cardboard Support - automatic camera fight and tracking.",spiders_3:"I created the prototype 'game' in only one day (6h-12h).",heading_Home:"Home",heading_Apps:"Apps",button_read_more:"Read More",button_play:"Play Now on itch.io!",button_google_play:"Go to Google Play",button_github:"Go to GitHub",button_github_2:"Read More on GitHub",heading_SocialMedia:"Social Media",type_subtitle_1:"My Apps",type_subtitle_2:"My Channel",type_subtitle_3:"Other Team Projects and Prototype (look screenshots in repositories)",subtitle_NotFound:"The page with the given URL does not exist.",polish_version:"Polish version",english_version:"English version",game_card:'Card game "Pan"',game_checkers:"English checkers",game_memory:"Memory game",heading_PrivacyPolicy:"Privacy Policy",datetime:"Last update: 07/16/2022 19:36"},pl:{spiders_1:"Wsparcie dla Oculus'a - poruszaj kontrolerem, aby walczy\u0107 i \u015bled\u017a wzrokiem otoczenie.",spiders_2:"Wsparcie dla Cardboard'a - automatyczna walka przy pomocy kamery, kt\xf3ra r\xf3wnie\u017c s\u0142u\u017cy do rozgl\u0105dania si\u0119.",spiders_3:"Stworzy\u0142em prototyp 'gr\u0119' w zaledwie jeden dzie\u0144 (6h-12h).",heading_Home:"Strona G\u0142\xf3wna",heading_Apps:"Aplikacje",button_read_more:"Czytaj Wi\u0119cej",button_play:"Zagraj Teraz na itch.io!",button_google_play:"Przejd\u017a do Google Play",button_github:"Przejd\u017a do GitHub",button_github_2:"Czytaj Wi\u0119cej na GitHub",heading_SocialMedia:"Media Spo\u0142eczno\u015bciowe",type_subtitle_1:"Moje Aplikacje",type_subtitle_2:"M\xf3j Kana\u0142",type_subtitle_3:"Inne Projekty Zespo\u0142owe i Prototypy (zobacz zrzuty ekranu w repozytoriach)",subtitle_NotFound:"Strona o podanym adresie URL nie istnieje.",polish_version:"Polska wersja",english_version:"Angielska wersja",game_card:'Gra karciana "Pan"',game_checkers:"Warcaby angielskie",game_memory:"Gra pami\u0119ciowa",heading_PrivacyPolicy:"Polityka Prywatno\u015bci",datetime:"Ostatnia aktualizacja: 16.07.2022 19:36"}}),Je=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).Language=function(){"pl"===localStorage.getItem("language")?Ze.setLanguage("pl"):Ze.setLanguage("gb")},a.Routy=function(){return l.a.createElement(k.a,null,l.a.createElement(O.a,{exact:!0,path:"/",render:function(e){return l.a.createElement("div",null,l.a.createElement(Ae,null),l.a.createElement(He,null))}}),l.a.createElement(O.a,{exact:!0,path:"/apps",component:Ae}),l.a.createElement(O.a,{exact:!0,path:"/social-media",component:He}),l.a.createElement(O.a,{exact:!0,path:"/my-test",component:Re}),l.a.createElement(O.a,{exact:!0,path:"/privacy-policy",component:qe}),l.a.createElement(O.a,{exact:!0,path:"/*",component:We}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"_onSetLanguageGB",value:function(){"gb"!==Ze.getLanguage()&&(localStorage.setItem("language","gb"),window.location.reload())}},{key:"_onSetLanguagePL",value:function(){"pl"!==Ze.getLanguage()&&(localStorage.setItem("language","pl"),window.location.reload())}},{key:"componentDidMount",value:function(){new Ke.a({time:"0.5s",label:"\ud83c\udf13"}).showWidget()}},{key:"render",value:function(){return l.a.createElement(C.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(w,null),l.a.createElement("main",null,this.Routy(),this.Language()),l.a.createElement(S,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(344);s.a.render(l.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_-_Screenshot_2.1b480346.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/R\xf3wnanie_Kwadratowe_-_Screenshot.33bdf596.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/R\xf3wnanie_Kwadratowe_-_Screenshot_2.7b8a5518.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/R\xf3wnanie_Kwadratowe_-_Screenshot_3.1b485662.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/Survive_The_Clash_Of_Spiders_-_Screenshot_1.180dcf0f.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/Survive_The_Clash_Of_Spiders_-_Screenshot_2.522fb76b.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/Survive_The_Clash_Of_Spiders_-_Screenshot_3.ebd4e3ac.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/Survive_The_Clash_Of_Spiders_-_Screenshot_4.6115fb94.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/Card_Game_Pan_-_Screenshot.92b48edf.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/Card_Game_Pan_-_Screenshot_2.39ee4566.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/Card_Game_Pan_-_Screenshot_3.16df9694.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/Card_Game_Pan_-_Screenshot_4.53412725.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/Card_Game_Pan_-_Screenshot_5.a6446e6e.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/English_Checkers_-_Screenshot.9680205a.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/English_Checkers_2_-_Screenshot.db576576.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/English_Checkers_3_-_Screenshot.ab6dc0a6.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/Memory_Game_-_Screenshot.cf2ff0f4.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/Memory_Game_2_-_Screenshot.7efa4f0b.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/Memory_Game_3_-_Screenshot.08e830e1.jpg"},56:function(e,t,a){var n={"./ad.svg":86,"./ae.svg":87,"./af.svg":88,"./ag.svg":89,"./ai.svg":90,"./al.svg":91,"./am.svg":92,"./ao.svg":93,"./ar.svg":94,"./as.svg":95,"./at.svg":96,"./au.svg":97,"./aw.svg":98,"./az.svg":99,"./ba.svg":100,"./bb.svg":101,"./bd.svg":102,"./be.svg":103,"./bf.svg":104,"./bg.svg":105,"./bh.svg":106,"./bi.svg":107,"./bj.svg":108,"./bm.svg":109,"./bo.svg":110,"./br.svg":111,"./bs.svg":112,"./bt.svg":113,"./bw.svg":114,"./by.svg":115,"./bz.svg":116,"./ca.svg":117,"./cd.svg":118,"./cf.svg":119,"./cg.svg":120,"./ch.svg":121,"./ci.svg":122,"./ck.svg":123,"./cl.svg":124,"./cm.svg":125,"./cn.svg":126,"./co.svg":127,"./cr.svg":128,"./cu.svg":129,"./cv.svg":130,"./cw.svg":131,"./cy.svg":132,"./cz.svg":133,"./de.svg":134,"./dj.svg":135,"./dk.svg":136,"./dm.svg":137,"./do.svg":138,"./dz.svg":139,"./ec.svg":140,"./ee.svg":141,"./eg.svg":142,"./er.svg":143,"./es.svg":144,"./et.svg":145,"./fi.svg":146,"./fj.svg":147,"./fk.svg":148,"./fm.svg":149,"./fo.svg":150,"./fr.svg":151,"./ga.svg":152,"./gb.svg":153,"./gd.svg":154,"./ge.svg":155,"./gg.svg":156,"./gh.svg":157,"./gi.svg":158,"./gl.svg":159,"./gm.svg":160,"./gn.svg":161,"./gq.svg":162,"./gr.svg":163,"./gt.svg":164,"./gu.svg":165,"./gw.svg":166,"./hk.svg":167,"./hn.svg":168,"./hr.svg":169,"./ht.svg":170,"./hu.svg":171,"./id.svg":172,"./ie.svg":173,"./il.svg":174,"./im.svg":175,"./in.svg":176,"./io.svg":177,"./iq.svg":178,"./ir.svg":179,"./is.svg":180,"./it.svg":181,"./je.svg":182,"./jm.svg":183,"./jo.svg":184,"./jp.svg":185,"./ke.svg":186,"./kg.svg":187,"./kh.svg":188,"./ki.svg":189,"./km.svg":190,"./kn.svg":191,"./kp.svg":192,"./kr.svg":193,"./kw.svg":194,"./ky.svg":195,"./kz.svg":196,"./la.svg":197,"./lb.svg":198,"./li.svg":199,"./lk.svg":200,"./lr.svg":201,"./ls.svg":202,"./lt.svg":203,"./lu.svg":204,"./lv.svg":205,"./ly.svg":206,"./ma.svg":207,"./mc.svg":208,"./md.svg":209,"./me.svg":210,"./mg.svg":211,"./mh.svg":212,"./mk.svg":213,"./ml.svg":214,"./mm.svg":215,"./mn.svg":216,"./mo.svg":217,"./mp.svg":218,"./mq.svg":219,"./mr.svg":220,"./ms.svg":221,"./mt.svg":222,"./mu.svg":223,"./mv.svg":224,"./mw.svg":225,"./mx.svg":226,"./my.svg":227,"./mz.svg":228,"./na.svg":229,"./nato.svg":230,"./ne.svg":231,"./nf.svg":232,"./ng.svg":233,"./ni.svg":234,"./nl.svg":235,"./no.svg":236,"./np.svg":237,"./nr.svg":238,"./nu.svg":239,"./nz.svg":240,"./om.svg":241,"./pa.svg":242,"./pe.svg":243,"./pf.svg":244,"./pg.svg":245,"./ph.svg":246,"./pk.svg":247,"./pl.svg":248,"./pn.svg":249,"./pr.svg":250,"./ps.svg":251,"./pt.svg":252,"./pw.svg":253,"./py.svg":254,"./qa.svg":255,"./ro.svg":256,"./rs.svg":257,"./ru.svg":258,"./rw.svg":259,"./sa.svg":260,"./sb.svg":261,"./sc.svg":262,"./sd.svg":263,"./se.svg":264,"./sg.svg":265,"./si.svg":266,"./sk.svg":267,"./sl.svg":268,"./sm.svg":269,"./sn.svg":270,"./so.svg":271,"./sr.svg":272,"./ss.svg":273,"./st.svg":274,"./sv.svg":275,"./sx.svg":276,"./sy.svg":277,"./sz.svg":278,"./tc.svg":279,"./td.svg":280,"./tg.svg":281,"./th.svg":282,"./tibet.svg":283,"./tj.svg":284,"./tk.svg":285,"./tm.svg":286,"./tn.svg":287,"./to.svg":288,"./tr.svg":289,"./tt.svg":290,"./tv.svg":291,"./tw.svg":292,"./tz.svg":293,"./ua.svg":294,"./ug.svg":295,"./us.svg":296,"./uy.svg":297,"./uz.svg":298,"./ve.svg":299,"./vi.svg":300,"./vn.svg":301,"./vu.svg":302,"./ws.svg":303,"./ye.svg":304,"./za.svg":305,"./zm.svg":306,"./zw.svg":307};function l(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=56},77:function(e,t,a){e.exports=a(346)},82:function(e,t,a){},84:function(e,t,a){}},[[77,2,1]]]);
//# sourceMappingURL=main.07400740.chunk.js.map