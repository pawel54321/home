(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/Candy_Gift_-_Screenshot.f1a94204.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/Candy_Gift_-_Screenshot_2.620873aa.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/Candy_Gift_-_Screenshot_3.fd7fed0c.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_2_-_Screenshot.dc88810d.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_2_-_Screenshot_2.7237071f.jpg"},317:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(15),o=a.n(l),r=(a(61),a(10)),g=a(11),c=a(14),i=a(12),v=a(13),u=(a(62),a(8)),m=a(318),p=a(320),d=a(321),h=a(333),E=a(322),b=a(323),f=a(324),_=a(319),w=a(54),y=(a(287),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).toggle=a.toggle.bind(Object(u.a)(a)),a.state={isOpen:!1},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"onSelectFlag",value:function(e){"pl"===e.toLowerCase()?(new ce)._onSetLanguagePL():"gb"===e.toLowerCase()&&(new ce)._onSetLanguageGB()}},{key:"render",value:function(){return s.a.createElement("nav",null,s.a.createElement("header",{className:"App-header"},s.a.createElement(m.a,{color:"light",light:!0,expand:"md"},s.a.createElement(_.a,{to:"/"},s.a.createElement(p.a,null,s.a.createElement("i",{className:"fa fa-home",style:{fontSize:"50px",color:"light"}}),s.a.createElement("p",{style:{float:"right",paddingTop:"12%",fontSize:"1rem"}}," - Portfolio Unity3D"))),s.a.createElement(d.a,{onClick:this.toggle}),s.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(E.a,{className:"ml-auto",navbar:!0},s.a.createElement(b.a,null,s.a.createElement(f.a,null,s.a.createElement(_.a,{to:"/apps"},ge.heading_Apps))),s.a.createElement(b.a,null,s.a.createElement(f.a,null,s.a.createElement(_.a,{to:"/social-media"},ge.heading_SocialMedia))),s.a.createElement(b.a,null,s.a.createElement(w.a,{countries:["GB","PL"],defaultCountry:ge.getLanguage().toUpperCase(),showSelectedLabel:!1,showOptionLabel:!1,selectedSize:18,optionsSize:14,onSelect:this.onSelectFlag})))))))}}]),t}(n.Component)),j=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",null,ge.datetime)}}]),t}(n.Component),O=a(335),k=a(334),S=a(332),x=a(325),C=a(326),T=a(327),L=a(328),I=a(329),z=a(330),N=a(331),M=a(27),B=a.n(M),A=a(28),P=a.n(A),R=a(29),G=a.n(R),q=a(30),F=a.n(q),U=a(31),D=a.n(U),H=a(32),K=a.n(H),W=a(33),Z=a.n(W),J=a(34),Y=a.n(J),$=a(35),Q=a.n($),V=a(36),X=a.n(V),ee=(a(295),a(21)),te=a(50),ae=(a(307),[B.a,P.a,G.a,F.a,D.a,K.a,Z.a,Y.a,Q.a,X.a]),ne=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={photoIndex:0,isOpen:!1},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen;return s.a.createElement("div",{style:{float:"left",paddingBottom:"30px"}},n&&s.a.createElement(te.a,{mainSrc:ae[a],nextSrc:ae[(a+1)%ae.length],prevSrc:ae[(a+ae.length-1)%ae.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+ae.length-1)%ae.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%ae.length})},discourageDownloads:!1,enableZoom:!1,clickOutsideToClose:!1}),s.a.createElement("h4",{style:{paddingLeft:"30px",paddingTop:"30px"}},ge.heading_Apps),s.a.createElement(x.a,{style:{paddingTop:"30px",float:"left"}},s.a.createElement(C.a,{className:"Card"},s.a.createElement(ee.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:3e3},s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:0})}},s.a.createElement("img",{src:B.a,alt:""})),s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:1})}},s.a.createElement("img",{src:P.a,alt:""})),s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:2})}},s.a.createElement("img",{src:G.a,alt:""}))),s.a.createElement(T.a,null,s.a.createElement(L.a,null,"'Candy Gift'"),s.a.createElement(I.a,null,"Android"),s.a.createElement(z.a,null),s.a.createElement(N.a,{color:"success",href:"https://play.google.com/store/apps/details?id=com.pawelwarcaba.candygift"},ge.button_read_more))),s.a.createElement(C.a,{className:"Card"},s.a.createElement(ee.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:6e3},s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:3})}},s.a.createElement("img",{src:F.a,alt:""})),s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:4})}},s.a.createElement("img",{src:D.a,alt:""})),s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:5})}},s.a.createElement("img",{src:K.a,alt:""})),s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:6})}},s.a.createElement("img",{src:Z.a,alt:""}))),s.a.createElement(T.a,null,s.a.createElement(L.a,null,"'The Escaping Balls' & 'The Escaping Balls 2'"),s.a.createElement(I.a,null,"Desktop | Multiplayer"),s.a.createElement(z.a,null),s.a.createElement(N.a,{color:"success",href:"https://github.com/pawel54321/The-Escaping-Balls---The-Escaping-Balls-2"},ge.button_read_more))),s.a.createElement(C.a,{className:"Card"},s.a.createElement(ee.Carousel,{showThumbs:!1,stopOnHover:!0,emulateTouch:!1,infiniteLoop:!0,autoPlay:!0,transitionTime:1500,interval:9e3},s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:7})}},s.a.createElement("img",{src:Y.a,alt:""})),s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:8})}},s.a.createElement("img",{src:Q.a,alt:""})),s.a.createElement("div",{onClick:function(){return e.setState({isOpen:!0,photoIndex:9})}},s.a.createElement("img",{src:X.a,alt:""}))),s.a.createElement(T.a,null,s.a.createElement(L.a,null,"'R\xf3wnanie Kwadratowe'"),s.a.createElement(I.a,null,"Android"),s.a.createElement(z.a,null),s.a.createElement(N.a,{color:"success",href:"https://play.google.com/store/apps/details?id=com.pawelwarcaba.rownaniekwadratowe"},ge.button_read_more)))))}}]),t}(n.Component),se=a(22),le=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{clear:"both"}},s.a.createElement("h4",{style:{paddingLeft:"30px",paddingTop:"30px"}},ge.heading_SocialMedia),s.a.createElement(x.a,{style:{padding:"30px",float:"middle"}},s.a.createElement(C.a,{className:"Card"},s.a.createElement("center",null,s.a.createElement(se.SocialIcon,{style:{marginTop:"25px",height:100,width:100},url:"https://play.google.com/store/apps/developer?id=Pawel+Warcaba"})),s.a.createElement(T.a,null,s.a.createElement(L.a,null,s.a.createElement("div",{style:{whiteSpace:"nowrap"}},"Google Play")),s.a.createElement(I.a,null,ge.type_subtitle_1),s.a.createElement(z.a,null))),s.a.createElement(C.a,{className:"Card"},s.a.createElement("center",null,s.a.createElement(se.SocialIcon,{style:{marginTop:"25px",height:100,width:100},url:"https://www.youtube.com/channel/UCEMiuxoZuphxWj7eDqh4hBA"})),s.a.createElement(T.a,null,s.a.createElement(L.a,null,"YouTube"),s.a.createElement(I.a,null,ge.type_subtitle_2),s.a.createElement(z.a,null))),s.a.createElement(C.a,{className:"Card"},s.a.createElement("center",null,s.a.createElement(se.SocialIcon,{style:{marginTop:"25px",height:100,width:100},url:"https://github.com/pawel54321?tab=repositories"})),s.a.createElement(T.a,null,s.a.createElement(L.a,null,"Github"),s.a.createElement(I.a,null,ge.type_subtitle_3),s.a.createElement(z.a,null)))))}}]),t}(n.Component),oe=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"NotFoundClass"},s.a.createElement("center",null,s.a.createElement("h2",null,"Not Found"),ge.subtitle_NotFound,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null)))}}]),t}(n.Component),re=a(52),ge=new(a.n(re).a)({gb:{heading_Home:"Home",heading_Apps:"Apps",button_read_more:"Read More",heading_SocialMedia:"Social Media",type_subtitle_1:"My Apps",type_subtitle_2:"My Channel",type_subtitle_3:"Other Team Projects",subtitle_NotFound:"The page with the given URL does not exist.",datetime:"Last update: 09/6/2019 20:35"},pl:{heading_Home:"Strona G\u0142\xf3wna",heading_Apps:"Aplikacje",button_read_more:"Czytaj Wi\u0119cej",heading_SocialMedia:"Media Spo\u0142eczno\u015bciowe",type_subtitle_1:"Moje Aplikacje",type_subtitle_2:"M\xf3j Kana\u0142",type_subtitle_3:"Inne Projekty Zespo\u0142owe",subtitle_NotFound:"Strona o podanym adresie URL nie istnieje.",datetime:"Ostatnia aktualizacja: 09.06.2019 20:35"}}),ce=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).Language=function(){"pl"===localStorage.getItem("language")?ge.setLanguage("pl"):ge.setLanguage("gb")},a.Routy=function(){return s.a.createElement(O.a,null,s.a.createElement(k.a,{exact:!0,path:"/",render:function(e){return s.a.createElement("div",null,s.a.createElement(ne,null),s.a.createElement(le,null))}}),s.a.createElement(k.a,{exact:!0,path:"/apps",component:ne}),s.a.createElement(k.a,{exact:!0,path:"/social-media",component:le}),s.a.createElement(k.a,{exact:!0,path:"/*",component:oe}))},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"_onSetLanguageGB",value:function(){"gb"!==ge.getLanguage()&&(localStorage.setItem("language","gb"),window.location.reload())}},{key:"_onSetLanguagePL",value:function(){"pl"!==ge.getLanguage()&&(localStorage.setItem("language","pl"),window.location.reload())}},{key:"render",value:function(){return s.a.createElement(S.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(y,null),s.a.createElement("main",null,this.Routy(),this.Language()),s.a.createElement(j,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(316);o.a.render(s.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_-_Screenshot.a0b36ca3.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/The_Escaping_Balls_-_Screenshot_2.1b480346.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/R\xf3wnanie_Kwadratowe_-_Screenshot.f0354150.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/R\xf3wnanie_Kwadratowe_-_Screenshot_2.4836e1bd.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/R\xf3wnanie_Kwadratowe_-_Screenshot_3.a622efa0.jpg"},39:function(e,t,a){var n={"./ad.svg":65,"./ae.svg":66,"./af.svg":67,"./ag.svg":68,"./ai.svg":69,"./al.svg":70,"./am.svg":71,"./ao.svg":72,"./ar.svg":73,"./as.svg":74,"./at.svg":75,"./au.svg":76,"./aw.svg":77,"./az.svg":78,"./ba.svg":79,"./bb.svg":80,"./bd.svg":81,"./be.svg":82,"./bf.svg":83,"./bg.svg":84,"./bh.svg":85,"./bi.svg":86,"./bj.svg":87,"./bm.svg":88,"./bo.svg":89,"./br.svg":90,"./bs.svg":91,"./bt.svg":92,"./bw.svg":93,"./by.svg":94,"./bz.svg":95,"./ca.svg":96,"./cd.svg":97,"./cf.svg":98,"./cg.svg":99,"./ch.svg":100,"./ci.svg":101,"./ck.svg":102,"./cl.svg":103,"./cm.svg":104,"./cn.svg":105,"./co.svg":106,"./cr.svg":107,"./cu.svg":108,"./cv.svg":109,"./cw.svg":110,"./cy.svg":111,"./cz.svg":112,"./de.svg":113,"./dj.svg":114,"./dk.svg":115,"./dm.svg":116,"./do.svg":117,"./dz.svg":118,"./ec.svg":119,"./ee.svg":120,"./eg.svg":121,"./er.svg":122,"./es.svg":123,"./et.svg":124,"./fi.svg":125,"./fj.svg":126,"./fk.svg":127,"./fm.svg":128,"./fo.svg":129,"./fr.svg":130,"./ga.svg":131,"./gb.svg":132,"./gd.svg":133,"./ge.svg":134,"./gg.svg":135,"./gh.svg":136,"./gi.svg":137,"./gl.svg":138,"./gm.svg":139,"./gn.svg":140,"./gq.svg":141,"./gr.svg":142,"./gt.svg":143,"./gu.svg":144,"./gw.svg":145,"./hk.svg":146,"./hn.svg":147,"./hr.svg":148,"./ht.svg":149,"./hu.svg":150,"./id.svg":151,"./ie.svg":152,"./il.svg":153,"./im.svg":154,"./in.svg":155,"./io.svg":156,"./iq.svg":157,"./ir.svg":158,"./is.svg":159,"./it.svg":160,"./je.svg":161,"./jm.svg":162,"./jo.svg":163,"./jp.svg":164,"./ke.svg":165,"./kg.svg":166,"./kh.svg":167,"./ki.svg":168,"./km.svg":169,"./kn.svg":170,"./kp.svg":171,"./kr.svg":172,"./kw.svg":173,"./ky.svg":174,"./kz.svg":175,"./la.svg":176,"./lb.svg":177,"./li.svg":178,"./lk.svg":179,"./lr.svg":180,"./ls.svg":181,"./lt.svg":182,"./lu.svg":183,"./lv.svg":184,"./ly.svg":185,"./ma.svg":186,"./mc.svg":187,"./md.svg":188,"./me.svg":189,"./mg.svg":190,"./mh.svg":191,"./mk.svg":192,"./ml.svg":193,"./mm.svg":194,"./mn.svg":195,"./mo.svg":196,"./mp.svg":197,"./mq.svg":198,"./mr.svg":199,"./ms.svg":200,"./mt.svg":201,"./mu.svg":202,"./mv.svg":203,"./mw.svg":204,"./mx.svg":205,"./my.svg":206,"./mz.svg":207,"./na.svg":208,"./nato.svg":209,"./ne.svg":210,"./nf.svg":211,"./ng.svg":212,"./ni.svg":213,"./nl.svg":214,"./no.svg":215,"./np.svg":216,"./nr.svg":217,"./nu.svg":218,"./nz.svg":219,"./om.svg":220,"./pa.svg":221,"./pe.svg":222,"./pf.svg":223,"./pg.svg":224,"./ph.svg":225,"./pk.svg":226,"./pl.svg":227,"./pn.svg":228,"./pr.svg":229,"./ps.svg":230,"./pt.svg":231,"./pw.svg":232,"./py.svg":233,"./qa.svg":234,"./ro.svg":235,"./rs.svg":236,"./ru.svg":237,"./rw.svg":238,"./sa.svg":239,"./sb.svg":240,"./sc.svg":241,"./sd.svg":242,"./se.svg":243,"./sg.svg":244,"./si.svg":245,"./sk.svg":246,"./sl.svg":247,"./sm.svg":248,"./sn.svg":249,"./so.svg":250,"./sr.svg":251,"./ss.svg":252,"./st.svg":253,"./sv.svg":254,"./sx.svg":255,"./sy.svg":256,"./sz.svg":257,"./tc.svg":258,"./td.svg":259,"./tg.svg":260,"./th.svg":261,"./tibet.svg":262,"./tj.svg":263,"./tk.svg":264,"./tm.svg":265,"./tn.svg":266,"./to.svg":267,"./tr.svg":268,"./tt.svg":269,"./tv.svg":270,"./tw.svg":271,"./tz.svg":272,"./ua.svg":273,"./ug.svg":274,"./us.svg":275,"./uy.svg":276,"./uz.svg":277,"./ve.svg":278,"./vi.svg":279,"./vn.svg":280,"./vu.svg":281,"./ws.svg":282,"./ye.svg":283,"./za.svg":284,"./zm.svg":285,"./zw.svg":286};function s(e){var t=l(e);return a(t)}function l(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=l,e.exports=s,s.id=39},56:function(e,t,a){e.exports=a(317)},61:function(e,t,a){},62:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.8e393d4b.chunk.js.map