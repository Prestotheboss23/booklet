!function(a){function b(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa=b,qa=c,ra=!1,sa=!1,ta=!1,ua=!1,va=!1,wa=!1,xa={empty:'<div class="b-page-empty" title=""></div>',blank:'<div class="b-page-blank" title=""></div>',sF:'<div class="b-shadow-f"></div>',sB:'<div class="b-shadow-b"></div>'},ya={leftToRight:"LTR",rightToLeft:"RTL"},za={},Aa={},Ba=[],Ca="",Da="/page/",Ea={create:"bookletcreate",start:"bookletstart",change:"bookletchange",add:"bookletadd",remove:"bookletremove"},Fa=function(a,b,c){var d,e="",f="";return a.attr("rel")&&(e=a.attr("rel")),a.attr("title")&&(f=a.attr("title")),a.hasClass("b-page-empty")?a.wrap('<div class="b-page"><div class="b-wrap"></div></div>'):c.closed&&c.covers&&(1==b||b==c.pageTotal-2)?a.wrap('<div class="b-page"><div class="b-wrap b-page-cover"></div></div>'):b%2!=0?a.wrap('<div class="b-page"><div class="b-wrap b-wrap-right"></div></div>'):a.wrap('<div class="b-page"><div class="b-wrap b-wrap-left"></div></div>'),d=a.parents(".b-page").addClass("b-page-"+b),c.pageNumbers&&!a.hasClass("b-page-empty")&&(!c.closed||c.closed&&!c.covers||c.closed&&c.covers&&1!=b&&b!=c.pageTotal-2)&&(c.direction==ya.leftToRight&&n++,a.parent().append('<div class="b-counter">'+n+"</div>"),c.direction==ya.rightToLeft&&n--),{index:b,contentNode:a[0],pageNode:d[0],chapter:e,title:f}},Ga=function(){pa.find(".b-load").children().unwrap(),pa.addClass("booklet"),pa.data("booklet",this),m=pa.children().length,qa.currentIndex=0,Ka(),Pa(),La(),Sa(),Ta(),ra=!0,wa=!1,oa={options:a.extend({},qa),index:qa.currentIndex,pages:[Ba[qa.currentIndex].contentNode,Ba[qa.currentIndex+1].contentNode]},qa.create&&pa.off(Ea.create+".booklet").on(Ea.create+".booklet",qa.create),pa.trigger(Ea.create,oa)},Ha=function(){wa=!1},Ia=function(){wa=!0},Ja=function(){Za(),Oa(),pa.removeClass("booklet"),pa.removeData("booklet"),ra=!1},Ka=function(){Ba=[],pa.children().length%2!=0&&(qa.closed&&qa.covers?pa.children().last().before(xa.blank):pa.children().last().after(xa.blank)),qa.closed&&(a(xa.empty).attr({title:qa.closedFrontTitle||"",rel:qa.closedFrontChapter||""}).prependTo(pa),pa.children().last().attr({title:qa.closedBackTitle||"",rel:qa.closedBackChapter||""}),pa.append(xa.empty)),qa.pageTotal=pa.children().length,n=0,qa.direction==ya.rightToLeft&&(n=qa.pageTotal,qa.closed&&(n-=2),qa.covers&&(n-=2),a(pa.children().get().reverse()).each(function(){a(this).appendTo(pa)})),ra||(qa.direction==ya.leftToRight?qa.currentIndex=0:qa.direction==ya.rightToLeft&&(qa.currentIndex=qa.pageTotal-2),!isNaN(qa.startingPage)&&qa.startingPage<=qa.pageTotal&&qa.startingPage>0&&(qa.startingPage%2!=0&&qa.startingPage--,qa.currentIndex=qa.startingPage)),pa.children().each(function(b){var c=new Fa(a(this),b,qa);Ba.push(c)})},La=function(){Ma(),Na(),Ua()},Ma=function(){pa.find(".b-page").removeClass("b-pN b-p0 b-p1 b-p2 b-p3 b-p4").hide(),qa.currentIndex-2>=0&&(pa.find(".b-page-"+(qa.currentIndex-2)).addClass("b-pN").show(),pa.find(".b-page-"+(qa.currentIndex-1)).addClass("b-p0").show()),pa.find(".b-page-"+qa.currentIndex).addClass("b-p1").show(),pa.find(".b-page-"+(qa.currentIndex+1)).addClass("b-p2").show(),qa.currentIndex+3<=qa.pageTotal&&(pa.find(".b-page-"+(qa.currentIndex+2)).addClass("b-p3").show(),pa.find(".b-page-"+(qa.currentIndex+3)).addClass("b-p4").show()),o=pa.find(".b-pN"),p=pa.find(".b-p0"),q=pa.find(".b-p1"),r=pa.find(".b-p2"),s=pa.find(".b-p3"),t=pa.find(".b-p4"),u=pa.find(".b-pN .b-wrap"),v=pa.find(".b-p0 .b-wrap"),w=pa.find(".b-p1 .b-wrap"),x=pa.find(".b-p2 .b-wrap"),y=pa.find(".b-p3 .b-wrap"),z=pa.find(".b-p4 .b-wrap"),A=pa.find(".b-wrap"),qa.shadows&&(pa.find(".b-shadow-f, .b-shadow-b").remove(),B=a(xa.sF).css(za.sF).appendTo(s),C=a(xa.sB).appendTo(p).css(za.sB))},Na=function(){pa.find(".b-shadow-f, .b-shadow-b, .b-p0, .b-p3").css({filter:"",zoom:""}),pa.find(".b-page").removeAttr("style"),A.removeAttr("style"),A.css(za.wrap),v.css(za.p0wrap),q.css(za.p1),r.css(za.p2),qa.closed&&qa.autoCenter&&qa.currentIndex>=qa.pageTotal-2&&r.hide(),o.css(za.pN),p.css(za.p0),s.stop().css(za.p3),t.css(za.p4),qa.closed&&qa.autoCenter&&0==qa.currentIndex&&(o.css({left:0}),q.css({left:ka}),r.css({left:0}),s.css({left:ja}),t.css({left:0})),qa.closed&&qa.autoCenter&&(0==qa.currentIndex||qa.currentIndex>=qa.pageTotal-2)?(qa.overlays&&G.width("100%"),pa.width(ja)):(qa.overlays&&G.width("50%"),pa.width(qa.width)),pa.find(".b-page").css({filter:"",zoom:""})},Oa=function(){pa.find(".b-wrap").unwrap(),pa.find(".b-wrap").children().unwrap(),pa.find(".b-counter, .b-page-blank, .b-page-empty, .b-shadow-f, .b-shadow-b").remove(),qa.direction==ya.rightToLeft&&a(pa.children().get().reverse()).each(function(){a(this).appendTo(pa)})},Pa=function(b){var c=!1;if(null!=b&&"undefined"!=typeof b&&(Oa(),Za(),qa=a.extend({},qa,b),c=!0,Ka()),qa.width?"string"==typeof qa.width&&-1!=qa.width.indexOf("px")?qa.width=qa.width.replace("px",""):"string"==typeof qa.width&&-1!=qa.width.indexOf("%")&&(fa=!0,ga=qa.width,qa.width=qa.width.replace("%","")/100*parseFloat(pa.parent().css("width"))):qa.width=pa.width(),qa.height?"string"==typeof qa.height&&-1!=qa.height.indexOf("px")?qa.height=qa.height.replace("px",""):"string"==typeof qa.height&&-1!=qa.height.indexOf("%")&&(ha=!0,ia=qa.height,qa.height=qa.height.replace("%","")/100*parseFloat(pa.parent().css("height"))):qa.height=pa.height(),pa.width(qa.width),pa.height(qa.height),ja=qa.width/2,ka="-"+ja+"px",la=ja/2,ma=qa.height,na=qa.speed/2,qa.closed&&qa.autoCenter&&(0==qa.currentIndex?pa.width(ja):qa.currentIndex>=qa.pageTotal-2&&pa.width(ja)),qa.shadows&&(qa.shadowTopFwdWidth="-"+qa.shadowTopFwdWidth+"px",qa.shadowTopBackWidth="-"+qa.shadowTopBackWidth+"px"),qa.pageTotal=pa.children(".b-page").length,qa.name?document.title=qa.name:qa.name=document.title,Qa(),ra&&La(),qa.menu&&a(qa.menu).length>0){if(T=a(qa.menu),T.hasClass("b-menu")||T.addClass("b-menu"),qa.pageSelector&&0==T.find(".b-selector-page").length){for(W=a('<div class="b-selector b-selector-page"><span class="b-current">'+(qa.currentIndex+1)+" - "+(qa.currentIndex+2)+"</span></div>").appendTo(T),X=a("<ul></ul>").appendTo(W).empty().css("height","auto"),h=0;h<qa.pageTotal;h+=2)i=h,Y=i+1+"-"+(i+2),qa.closed&&(i--,Y=0==h?"1":h==qa.pageTotal-2?qa.pageTotal-2:i+1+"-"+(i+2),qa.covers&&(i--,Y=0==h?"":h==qa.pageTotal-2?"":i+1+"-"+(i+2))),0==h&&W.find(".b-current").text(Y),Z=Ba[h].title,""==Z&&(Z=Ba[h+1].title),qa.direction==ya.rightToLeft&&(Z=Ba[Math.abs(h-qa.pageTotal)-1].title,""==Z&&(Z=Ba[Math.abs(h-qa.pageTotal)-2].title)),$=a('<li><a href="#'+Da+(h+1)+'" id="selector-page-'+h+'"><span class="b-text">'+Z+'</span><span class="b-num">'+Y+"</span></a></li>").appendTo(X),qa.hash||$.find("a").on("click.booklet",function(b){b.preventDefault(),sa||wa||(qa.direction==ya.rightToLeft?(W.find(".b-current").text(a(this).find(".b-num").text()),db(Math.abs(parseInt(a(this).attr("id").replace("selector-page-",""))-qa.pageTotal)-2)):db(parseInt(a(this).attr("id").replace("selector-page-",""))))});_=X.height(),X.css({height:0,"padding-bottom":0}),W.on("mouseenter.booklet",function(){X.stop().animate({height:_,paddingBottom:10},500)}).on("mouseleave.booklet",function(){X.stop().animate({height:0,paddingBottom:0},500)})}else qa.pageSelector||(T.find(".b-selector-page").remove(),W=X=Y=Z=$=_=null);if(qa.chapterSelector&&0==T.find(".b-selector-chapter").length){for(aa=Ba[qa.currentIndex].chapter,""==aa&&(aa=Ba[qa.currentIndex+1].chapter),ba=a('<div class="b-selector b-selector-chapter"><span class="b-current">'+aa+"</span></div>").appendTo(T),ca=a("<ul></ul>").appendTo(ba).empty().css("height","auto"),h=0;h<qa.pageTotal;h+=1)""!=Ba[h].chapter&&"undefined"!=typeof Ba[h].chapter&&(qa.direction==ya.rightToLeft?(i=h,i%2!=0&&i--,ba.find(".b-current").text(Ba[h].chapter),da=a('<li><a href="#'+Da+(i+1)+'" id="selector-page-'+i+'"><span class="b-text">'+Ba[h].chapter+"</span></a></li>").prependTo(ca)):da=a('<li><a href="#'+Da+(h+1)+'" id="selector-page-'+h+'"><span class="b-text">'+Ba[h].chapter+"</span></a></li>").appendTo(ca),qa.hash||da.find("a").on("click.booklet",function(b){b.preventDefault();var c;sa||wa||(qa.direction==ya.rightToLeft?(ba.find(".b-current").text(a(this).find(".b-text").text()),c=Math.abs(parseInt(a(this).attr("id").replace("selector-page-",""))-qa.pageTotal)-2):c=parseInt(a(this).attr("id").replace("selector-page-","")),c%2!=0&&(c-=1),db(c))}));ea=ca.height(),ca.css({height:0,"padding-bottom":0}),ba.on("mouseenter.booklet",function(){ca.stop().animate({height:ea,paddingBottom:10},500)}).on("mouseleave.booklet",function(){ca.stop().animate({height:0,paddingBottom:0},500)})}else qa.chapterSelector||(T.find(".b-selector-chapter").remove(),aa=ba=ca=da=ea=null)}else T=null,qa.menu&&a(qa.menu).removeClass("b-menu"),pa.find(".b-selector").remove();F=pa.find(".b-controls"),0==F.length&&(F=a('<div class="b-controls"></div>').appendTo(pa)),qa.manual&&a.ui&&(qa.overlays=!1),P&&(P.off("click.booklet"),P=null),Q&&(Q.off("click.booklet"),Q=null),G=pa.find(".b-overlay"),qa.overlays&&0==G.length?(I=a('<div class="b-overlay b-overlay-prev b-prev" title="'+qa.previousControlTitle+'"></div>').appendTo(F),H=a('<div class="b-overlay b-overlay-next b-next" title="'+qa.nextControlTitle+'"></div>').appendTo(F),G=pa.find(".b-overlay")):qa.overlays||(G.remove(),G=null),J=pa.find(".b-tab"),qa.tabs&&0==J.length?(L=a('<div class="b-tab b-tab-prev b-prev" title="'+qa.previousControlTitle+'">'+qa.previousControlText+"</div>").appendTo(F),K=a('<div class="b-tab b-tab-next b-next" title="'+qa.nextControlTitle+'">'+qa.nextControlText+"</div>").appendTo(F),J=pa.find(".b-tab")):qa.tabs||(pa.css({marginTop:0}),J.remove(),J=null),qa.tabs&&J.length>0&&(qa.tabWidth&&J.width(qa.tabWidth),qa.tabHeight&&J.height(qa.tabHeight),J.css({top:"-"+K.outerHeight()+"px"}),pa.css({marginTop:K.outerHeight()}),qa.direction==ya.rightToLeft&&(K.html(qa.previousControlText).attr("title",qa.previousControlTitle),L.html(qa.nextControlText).attr("title",qa.nextControlTitle))),M=pa.find(".b-arrow"),qa.arrows&&0==M.length?(O=a('<div class="b-arrow b-arrow-prev b-prev" title="'+qa.previousControlTitle+'"><div>'+qa.previousControlText+"</div></div>").appendTo(F),N=a('<div class="b-arrow b-arrow-next b-next" title="'+qa.nextControlTitle+'"><div>'+qa.nextControlText+"</div></div>").appendTo(F),M=pa.find(".b-arrow"),qa.direction==ya.rightToLeft&&(N.html("<div>"+qa.previousControlText+"</div>").attr("title",qa.previousControlTitle),O.html("<div>"+qa.nextControlText+"</div>").attr("title",qa.nextControlTitle))):qa.arrows||(M.remove(),M=null),R=F.find(".b-next"),S=F.find(".b-prev"),R.off(".booklet"),S.off(".booklet"),R.on("click.booklet",function(a){a.preventDefault(),bb()}),S.on("click.booklet",function(a){a.preventDefault(),cb()}),qa.next&&a(qa.next).length>0&&(P=a(qa.next),P.on("click.booklet",function(a){a.preventDefault(),bb()})),qa.prev&&a(qa.prev).length>0&&(Q=a(qa.prev),Q.on("click.booklet",function(a){a.preventDefault(),cb()})),qa.overlays&&qa.hovers&&(R.on("mouseover.booklet",function(){eb(!0)}).on("mouseout.booklet",function(){fb(!0)}),S.on("mouseover.booklet",function(){eb(!1)}).on("mouseout.booklet",function(){fb(!1)})),qa.arrows&&(qa.arrowsHide?a.support.opacity?(R.on("mouseover.booklet",function(){N.find("div").stop().fadeTo("fast",1)}).on("mouseout.booklet",function(){N.find("div").stop().fadeTo("fast",0)}),S.on("mouseover.booklet",function(){O.find("div").stop().fadeTo("fast",1)}).on("mouseout.booklet",function(){O.find("div").stop().fadeTo("fast",0)})):(R.on("mouseover.booklet",function(){N.find("div").show()}).on("mouseout.booklet",function(){N.find("div").hide()}),S.on("mouseover.booklet",function(){O.find("div").show()}).on("mouseout.booklet",function(){O.find("div").hide()})):(N.find("div").show(),O.find("div").show())),a(document).on("keyup.booklet",function(a){37==a.keyCode&&qa.keyboard?cb():39==a.keyCode&&qa.keyboard&&bb()}),clearInterval(j),j=null,qa.hash&&(Va(),clearInterval(j),j=setInterval(function(){Wa()},250)),a(window).on("resize.booklet",function(){(fa||ha)&&Ra()}),qa.auto&&qa.delay?(clearInterval(k),k=setInterval(function(){qa.direction==ya.leftToRight?bb():cb()},qa.delay),ta=!0,qa.pause&&a(qa.pause).length>0&&(U=a(qa.pause),U.off("click.booklet").on("click.booklet",function(a){a.preventDefault(),ta&&(clearInterval(k),ta=!1)})),qa.play&&a(qa.play).length>0&&(V=a(qa.play),V.off("click.booklet").on("click.booklet",function(a){a.preventDefault(),ta||(clearInterval(k),k=setInterval(function(){qa.direction==ya.leftToRight?bb():cb()},qa.delay),ta=!0)}))):(clearInterval(k),k=null,qa.pause&&a(qa.pause).length>0&&a(qa.pause).off("click.booklet"),U=null,qa.play&&a(qa.play).length>0&&a(qa.play).off("click.booklet"),V=null,ta=!1),c&&(La(),Sa(),Ta())},Qa=function(){za={wrap:{left:0,width:ja-2*qa.pagePadding-2*qa.pageBorder,height:ma-2*qa.pagePadding-2*qa.pageBorder,padding:qa.pagePadding},p0wrap:{right:0,left:"auto"},p1:{left:0,width:ja,height:ma},p2:{left:ja,width:ja,opacity:1,height:ma},pN:{left:0,width:ja,height:ma},p0:{left:0,width:0,height:ma},p3:{left:2*ja,width:0,height:ma,paddingLeft:0},p4:{left:ja,width:ja,height:ma},sF:{right:0,width:ja,height:ma},sB:{left:0,width:ja,height:ma}},d=10,e=qa.hoverWidth+d,f=qa.hoverWidth/2+d,Aa={hover:{speed:qa.hoverSpeed,size:qa.hoverWidth,p2:{width:ja-f},p3:{left:qa.width-e,width:f},p3closed:{left:ja-qa.hoverWidth,width:f},p3wrap:{left:d},p2end:{width:ja},p2closedEnd:{width:ja,left:0},p3end:{left:qa.width,width:0},p3closedEnd:{left:ja,width:0},p3wrapEnd:{left:10},p1:{left:f,width:ja-f},p1wrap:{left:"-"+f+"px"},p0:{left:f,width:f},p0wrap:{right:d},p1end:{left:0,width:ja},p1wrapEnd:{left:0},p0end:{left:0,width:0},p0wrapEnd:{right:0}},p2:{width:0},p2closed:{width:0,left:ja},p4closed:{left:ja},p3in:{left:la,width:la,paddingLeft:qa.shadowBtmWidth},p3inDrag:{left:ja/4,width:.75*ja,paddingLeft:qa.shadowBtmWidth},p3out:{left:0,width:ja,paddingLeft:0},p3wrapIn:{left:qa.shadowBtmWidth},p3wrapOut:{left:0},p1:{left:ja,width:0},p1wrap:{left:ka},p0:{left:ja,width:ja},p0in:{left:la,width:la},p0out:{left:ja,width:ja},p0outClosed:{left:0,width:ja},p2back:{left:0},p0wrapDrag:{right:0},p0wrapIn:{right:qa.shadowBtmWidth},p0wrapOut:{right:0}}},Ra=function(){wa||(fa&&(qa.width=ga.replace("%","")/100*parseFloat(pa.parent().css("width")),pa.width(qa.width),ja=qa.width/2,ka="-"+ja+"px",la=ja/2),ha&&(qa.height=ia.replace("%","")/100*parseFloat(pa.parent().css("height")),pa.height(qa.height),ma=qa.height),Qa(),Na())},Sa=function(){(qa.overlays||qa.tabs||qa.arrows)&&(a.support.opacity?(qa.currentIndex>=2&&0!=qa.currentIndex?S.fadeIn("fast").css("cursor",qa.cursor):S.fadeOut("fast").css("cursor","default"),qa.currentIndex<qa.pageTotal-2?R.fadeIn("fast").css("cursor",qa.cursor):R.fadeOut("fast").css("cursor","default")):(qa.currentIndex>=2&&0!=qa.currentIndex?S.show().css("cursor",qa.cursor):S.hide().css("cursor","default"),qa.currentIndex<qa.pageTotal-2?R.show().css("cursor",qa.cursor):R.hide().css("cursor","default")))},Ta=function(){if(qa.pageSelector){var b="";qa.direction==ya.rightToLeft?(b=Math.abs(qa.currentIndex-qa.pageTotal)-1+" - "+Math.abs(qa.currentIndex-qa.pageTotal),qa.closed&&(b=qa.currentIndex==qa.pageTotal-2?"1":0==qa.currentIndex?qa.pageTotal-2:Math.abs(qa.currentIndex-qa.pageTotal)-2+" - "+(Math.abs(qa.currentIndex-qa.pageTotal)-1),qa.covers&&(b=qa.currentIndex==qa.pageTotal-2?"":0==qa.currentIndex?"":Math.abs(qa.currentIndex-qa.pageTotal)-3+" - "+(Math.abs(qa.currentIndex-qa.pageTotal)-2)))):(b=qa.currentIndex+1+" - "+(qa.currentIndex+2),qa.closed&&(b=0==qa.currentIndex?"1":qa.currentIndex==qa.pageTotal-2?qa.pageTotal-2:qa.currentIndex+"-"+(qa.currentIndex+1),qa.covers&&(b=0==qa.currentIndex?"":qa.currentIndex==qa.pageTotal-2?"":qa.currentIndex-1+"-"+qa.currentIndex))),a(qa.menu+" .b-selector-page .b-current").text(b)}qa.chapterSelector&&(""!=Ba[qa.currentIndex].chapter?a(qa.menu+" .b-selector-chapter .b-current").text(Ba[qa.currentIndex].chapter):""!=Ba[qa.currentIndex+1].chapter&&a(qa.menu+" .b-selector-chapter .b-current").text(Ba[qa.currentIndex+1].chapter),qa.direction==ya.rightToLeft&&""!=Ba[qa.currentIndex+1].chapter?a(qa.menu+" .b-selector-chapter .b-current").text(Ba[qa.currentIndex+1].chapter):""!=Ba[qa.currentIndex]&&a(qa.menu+" .b-selector-chapter .b-current").text(Ba[qa.currentIndex].chapter))},Ua=function(){var b,c,g,h,i,j,k,l,m,n,u;ua=va=D=E=!1,a.ui&&(pa.find(".b-page").draggable()&&pa.find(".b-page").draggable("destroy").removeClass("b-grab b-grabbing"),qa.manual&&(s.draggable({axis:"x",containment:[pa.offset().left,0,r.offset().left+ja-e,ma],drag:function(e,n){D=!0,s.removeClass("b-grab").addClass("b-grabbing"),b=n.originalPosition.left,c=n.position.left,g=b-c,h=g/b,i=.5>h?h:1-h,j=i*qa.shadowBtmWidth*2+d,j=g/b>=.5?j-=d:j,qa.shadows&&(B.css({right:"-"+qa.shadowTopFwdWidth*i*2+"px"}),a.support.opacity?B.css({opacity:2*i}):B.css({right:"auto",left:.1*s.width()})),k=f+g/2,k=k>ja?ja:k,l=ja-k,qa.closed&&qa.autoCenter&&(0==qa.currentIndex?(m=.5+.5*h,k=f+f*h+g,k=k>ja?ja:k,l=ja-k,r.css({left:ja*h}),t.css({left:ja*h}),pa.width(qa.width*m)):qa.currentIndex==qa.pageTotal-4?(m=1-h+.5*h,l=ja-k,t.hide(),pa.width(qa.width*m)):pa.width(qa.width)),s.width(k),y.css({left:j}),r.width(l)},stop:function(){fb(!1),h>qa.hoverThreshold?(qa.shadows&&!a.support.opacity&&B.css({left:"auto",opacity:0}),bb(),s.removeClass("b-grab b-grabbing")):(D=!1,s.removeClass("b-grabbing").addClass("b-grab"),B.animate({left:"auto",opacity:0},Aa.hover.speed,qa.easing).css(za.sF),qa.closed&&qa.autoCenter&&(0==qa.currentIndex?(r.animate({left:0},Aa.hover.speed,qa.easing),t.animate({left:0},Aa.hover.speed,qa.easing),pa.animate({width:.5*qa.width},Aa.hover.speed,qa.easing)):pa.animate({width:qa.width},Aa.hover.speed,qa.easing)))}}),p.draggable({axis:"x",containment:[pa.offset().left+f,0,pa.offset().left+qa.width,ma],drag:function(e,l){E=!0,p.removeClass("b-grab").addClass("b-grabbing"),b=l.originalPosition.left,c=l.position.left,g=c-b,h=g/(qa.width-b),qa.closed&&qa.autoCenter&&2==qa.currentIndex&&(h=g/(ja-b)),h>1&&(h=1),i=.5>h?h:1-h,j=i*qa.shadowBtmWidth*2+d,j=g/b>=.5?j-=d:j,qa.shadows&&(a.support.opacity?C.css({opacity:2*i}):C.css({left:qa.shadowTopBackWidth*i*2})),k=h*(ja-f)+f+j,n=k-j,u=-n,qa.closed&&qa.autoCenter&&(2==qa.currentIndex?(m=1-h+.5*h,n=(1-h)*n,u=-n-(qa.width-qa.width*m),o.hide(),r.css({left:ja*(1-h)}),t.css({left:ja*(1-h)}),pa.width(qa.width*m)):qa.currentIndex==qa.pageTotal-2?(m=.5+.5*h,pa.width(qa.width*m)):pa.width(qa.width)),l.position.left=n,p.css({width:k}),v.css({right:j}),q.css({left:n,width:ja-n}),w.css({left:u})},stop:function(){fb(!0),h>qa.hoverThreshold?(cb(),p.removeClass("b-grab b-grabbing")):(C.animate({opacity:0},Aa.hover.speed,qa.easing).css(za.sB),E=!1,p.removeClass("b-grabbing").addClass("b-grab"),qa.closed&&qa.autoCenter&&(2==qa.currentIndex?(r.animate({left:ja},2*Aa.hover.speed,qa.easing),t.animate({left:ja},2*Aa.hover.speed,qa.easing),pa.animate({width:qa.width},2*Aa.hover.speed,qa.easing)):qa.currentIndex==qa.pageTotal-2&&pa.animate({width:.5*qa.width},Aa.hover.speed,qa.easing)))}}),pa.find(".b-page").off("click.booklet"),qa.hoverClick&&(pa.find(".b-pN, .b-p0").on("click.booklet",cb).css({cursor:"pointer"}),pa.find(".b-p3, .b-p4").on("click.booklet",bb).css({cursor:"pointer"})),pa.off("mousemove.booklet").on("mousemove.booklet",function(a){g=a.pageX-pa.offset().left,g<Aa.hover.size?eb(!1):g>ja-Aa.hover.size&&0==qa.currentIndex&&qa.autoCenter&&qa.closed?eb(!0):g>Aa.hover.size&&g<=qa.width-Aa.hover.size?(fb(!1),fb(!0)):g>qa.width-Aa.hover.size&&eb(!0)}).off("mouseleave.booklet").on("mouseleave.booklet",function(){fb(!1),fb(!0)})))},Va=function(){g=Xa(),!isNaN(g)&&g<=qa.pageTotal-1&&g>=0&&""!=g?(g%2!=0&&g--,qa.currentIndex=g):Ya(qa.currentIndex+1,qa),Ca=g},Wa=function(){g=Xa(),!isNaN(g)&&g<=qa.pageTotal-1&&g>=0&&g!=qa.currentIndex&&g.toString()!=Ca&&(g%2!=0&&g--,document.title=qa.name+qa.hashTitleText+(g+1),sa||(db(g),Ca=g))},Xa=function(){var a,b;return a=window.location.hash.split("/"),a.length>1?(b=parseInt(a[2])-1,qa.direction==ya.rightToLeft&&(b=Math.abs(b+1-qa.pageTotal)),b):""},Ya=function(a,b){b.hash&&(b.direction==ya.rightToLeft&&(a=Math.abs(a-b.pageTotal)),window.location.hash=Da+a)},Za=function(){qa.menu&&(a(qa.menu).removeClass("b-menu"),qa.pageSelector&&(T.find(".b-selector-page").remove(),W=X=Y=Z=$=_=null),qa.chapterSelector&&(T.find(".b-selector-chapter").remove(),aa=ba=ca=da=ea=null)),T=null,P&&(P.off("click.booklet"),P=null),Q&&(Q.off("click.booklet"),Q=null),R&&(R.off(".booklet"),R=null),S&&(S.off(".booklet"),S=null),pa.find(".b-selector, .b-controls").remove(),clearInterval(j),j=null,clearInterval(k),k=null,qa.pause&&a(qa.pause).length>0&&a(qa.pause).off("click.booklet"),U=null,qa.play&&a(qa.play).length>0&&a(qa.play).off("click.booklet"),V=null,$a()},$a=function(){a.ui&&pa.find(".b-page").draggable()&&pa.find(".b-page").draggable("destroy").removeClass("b-grab b-grabbing"),pa.off(".booklet")},_a=function(b,c){if("start"==b)b=0;else if("end"==b)b=m;else if("number"==typeof b){if(0>b||b>m)return}else if("undefined"==typeof b)return;"undefined"!=typeof c&&""!=c&&(Oa(),Za(),qa.closed&&qa.covers&&b==m?pa.children(":eq("+(b-1)+")").before(c):qa.closed&&qa.covers&&0==b?pa.children(":eq("+b+")").after(c):b==m?pa.children(":eq("+(b-1)+")").after(c):pa.children(":eq("+b+")").before(c),m=pa.children().length,oa={options:a.extend({},qa),index:b,page:pa.children(":eq("+b+")")[0]},qa.add&&pa.off(Ea.add+".booklet").on(Ea.add+".booklet",qa.add),pa.trigger(Ea.add,oa),Ka(),Pa(),La(),Sa(),Ta())},ab=function(b){if("start"==b)b=0;else if("end"==b)b=m;else if("number"==typeof b){if(0>b||b>m)return}else if("undefined"==typeof b)return;if(!(2==pa.children(".b-page").length&&pa.find(".b-page-blank").length>0)){Oa(),Za(),b>=qa.currentIndex&&(b>0&&b%2!=0&&(qa.currentIndex-=2),qa.currentIndex<0&&(qa.currentIndex=0));var c;c=qa.closed&&qa.covers&&b==m?pa.children(":eq("+(b-1)+")").remove():qa.closed&&qa.covers&&0==b?pa.children(":eq("+b+")").remove():b==m?pa.children(":eq("+(b-1)+")").remove():pa.children(":eq("+b+")").remove(),m=pa.children().length,oa={options:a.extend({},qa),index:b,page:c[0]},qa.remove&&pa.off(Ea.remove+".booklet").on(Ea.remove+".booklet",qa.remove),pa.trigger(Ea.remove,oa),c=null,Ka(),La(),Pa(),Sa(),Ta()}},bb=function(){sa||wa||db(ta&&qa.currentIndex+2>=qa.pageTotal?0:qa.currentIndex+2)},cb=function(){sa||wa||db(ta&&qa.currentIndex-2<0?qa.pageTotal-2:qa.currentIndex-2)},db=function(b){var c;b<qa.pageTotal&&b>=0&&!sa&&!wa&&(b>qa.currentIndex?(sa=!0,l=b-qa.currentIndex,qa.currentIndex=b,qa.movingForward=!0,oa={options:a.extend({},qa),index:b,pages:[Ba[b].contentNode,Ba[b+1].contentNode]},qa.start&&pa.off(Ea.start+".booklet").on(Ea.start+".booklet",qa.start),pa.trigger(Ea.start,oa),Ta(),b==qa.pageTotal-2&&Sa(),Ya(qa.currentIndex+1,qa),c=D===!0?qa.speed*(s.width()/ja):na,gb(l,!0,B,c),qa.closed&&qa.autoCenter&&b-l==0?(r.stop().animate(Aa.p2closed,D===!0?c:2*c,qa.easing),t.stop().animate(Aa.p4closed,D===!0?c:2*c,qa.easing)):r.stop().animate(Aa.p2,c,D===!0?qa.easeOut:qa.easeIn),D?(s.animate(Aa.p3out,c,qa.easeOut),y.animate(Aa.p3wrapOut,c,qa.easeOut,function(){hb()})):(s.stop().animate(Aa.p3in,c,qa.easeIn).animate(Aa.p3out,c,qa.easeOut),y.animate(Aa.p3wrapIn,c,qa.easeIn).animate(Aa.p3wrapOut,c,qa.easeOut,function(){hb()}))):b<qa.currentIndex&&(sa=!0,l=qa.currentIndex-b,qa.currentIndex=b,qa.movingForward=!1,oa={options:a.extend({},qa),index:b,pages:[Ba[b].contentNode,Ba[b+1].contentNode]},qa.start&&pa.off(Ea.start+".booklet").on(Ea.start+".booklet",qa.start),pa.trigger(Ea.start,oa),Ta(),0==b&&Sa(),Ya(qa.currentIndex+1,qa),c=E===!0?qa.speed*(p.width()/ja):na,gb(l,!1,C,c),E?(q.animate(Aa.p1,c,qa.easeOut),w.animate(Aa.p1wrap,c,qa.easeOut),qa.closed&&qa.autoCenter&&0==qa.currentIndex?(p.animate(Aa.p0outClosed,c,qa.easeOut),r.stop().animate(Aa.p2back,c,qa.easeOut)):p.animate(Aa.p0,c,qa.easeOut),v.animate(Aa.p0wrapDrag,c,qa.easeOut,function(){hb()})):(q.animate(Aa.p1,2*c,qa.easing),w.animate(Aa.p1wrap,2*c,qa.easing),qa.closed&&qa.autoCenter&&0==qa.currentIndex?(p.animate(Aa.p0in,c,qa.easeIn).animate(Aa.p0outClosed,c,qa.easeOut),r.stop().animate(Aa.p2back,2*c,qa.easing)):p.animate(Aa.p0in,c,qa.easeIn).animate(Aa.p0out,c,qa.easeOut),v.animate(Aa.p0wrapIn,c,qa.easeIn).animate(Aa.p0wrapOut,c,qa.easeOut,function(){hb()}))))},eb=function(b){!wa&&(qa.hovers&&qa.overlays||qa.manual)&&(b?sa||ua||va||D||!(qa.currentIndex+2<=qa.pageTotal-2)||(r.stop().animate(Aa.hover.p2,Aa.hover.speed,qa.easing),s.addClass("b-grab"),qa.closed&&qa.autoCenter&&0==qa.currentIndex?s.stop().animate(Aa.hover.p3closed,Aa.hover.speed,qa.easing):s.stop().animate(Aa.hover.p3,Aa.hover.speed,qa.easing),y.stop().animate(Aa.hover.p3wrap,Aa.hover.speed,qa.easing),qa.shadows&&!a.support.opacity&&B.css({right:"auto",left:"-40%"}),ua=!0):sa||va||ua||E||!(qa.currentIndex-2>=0)||(q.stop().animate(Aa.hover.p1,Aa.hover.speed,qa.easing),p.addClass("b-grab"),w.stop().animate(Aa.hover.p1wrap,Aa.hover.speed,qa.easing),p.stop().animate(Aa.hover.p0,Aa.hover.speed,qa.easing),v.stop().animate(Aa.hover.p0wrap,Aa.hover.speed,qa.easing),qa.shadows&&!a.support.opacity&&C.css({left:-.38*ja}),va=!0))},fb=function(b){!wa&&(qa.hovers&&qa.overlays||qa.manual)&&(b?!sa&&ua&&!D&&qa.currentIndex+2<=qa.pageTotal-2&&(qa.closed&&qa.autoCenter&&0==qa.currentIndex?(r.stop().animate(Aa.hover.p2closedEnd,Aa.hover.speed,qa.easing),s.stop().animate(Aa.hover.p3closedEnd,Aa.hover.speed,qa.easing)):(r.stop().animate(Aa.hover.p2end,Aa.hover.speed,qa.easing),s.stop().animate(Aa.hover.p3end,Aa.hover.speed,qa.easing)),y.stop().animate(Aa.hover.p3wrapEnd,Aa.hover.speed,qa.easing),qa.shadows&&!a.support.opacity&&B.css({left:"auto"}),ua=!1):!sa&&va&&!E&&qa.currentIndex-2>=0&&(q.stop().animate(Aa.hover.p1end,Aa.hover.speed,qa.easing),w.stop().animate(Aa.hover.p1wrapEnd,Aa.hover.speed,qa.easing),p.stop().animate(Aa.hover.p0end,Aa.hover.speed,qa.easing),v.stop().animate(Aa.hover.p0wrapEnd,Aa.hover.speed,qa.easing),va=!1))},gb=function(b,c,d,e){c&&b>2?(pa.find(".b-p3, .b-p4").removeClass("b-p3 b-p4").hide(),pa.find(".b-page-"+qa.currentIndex).addClass("b-p3").show().stop().css(za.p3),pa.find(".b-page-"+(qa.currentIndex+1)).addClass("b-p4").show().css(za.p4),pa.find(".b-page-"+qa.currentIndex+" .b-wrap").show().css(za.wrap),pa.find(".b-page-"+(qa.currentIndex+1)+" .b-wrap").show().css(za.wrap),s=pa.find(".b-p3"),t=pa.find(".b-p4"),y=pa.find(".b-p3 .b-wrap"),z=pa.find(".b-p4 .b-wrap"),qa.closed&&qa.autoCenter&&qa.currentIndex-b==0&&(s.css({left:ja}),t.css({left:0})),ua&&s.css({left:qa.width-40,width:20,"padding-left":10}),qa.shadows&&(pa.find(".b-shadow-f").remove(),B=a(xa.sF).css(za.sF).appendTo(s),d=B)):!c&&b>2&&(pa.find(".b-pN, .b-p0").removeClass("b-pN b-p0").hide(),pa.find(".b-page-"+qa.currentIndex).addClass("b-pN").show().css(za.pN),pa.find(".b-page-"+(qa.currentIndex+1)).addClass("b-p0").show().css(za.p0),pa.find(".b-page-"+qa.currentIndex+" .b-wrap").show().css(za.wrap),pa.find(".b-page-"+(qa.currentIndex+1)+" .b-wrap").show().css(za.wrap),o=pa.find(".b-pN"),p=pa.find(".b-p0"),u=pa.find(".b-pN .b-wrap"),v=pa.find(".b-p0 .b-wrap"),qa.closed&&qa.autoCenter&&o.css({left:0}),v.css(za.p0wrap),va&&(p.css({left:10,width:40}),v.css({right:10})),qa.shadows&&(pa.find(".b-shadow-b, .b-shadow-f").remove(),C=a(xa.sB).appendTo(p).css(za.sB),d=C)),qa.closed&&(c||0!=qa.currentIndex?c||o.show():o.hide(),c&&qa.currentIndex>=qa.pageTotal-2?t.hide():c&&t.show()),qa.shadows&&(a.support.opacity?(D||E||d.animate({opacity:1},e,qa.easeIn),d.animate({opacity:0},e,qa.easeOut)):c?d.animate({right:qa.shadowTopFwdWidth},2*e,qa.easeIn):d.animate({left:qa.shadowTopBackWidth},2*e,qa.easeIn)),qa.closed&&qa.autoCenter&&(0==qa.currentIndex?(s.hide(),t.hide(),pa.animate({width:ja},D||E?e:2*e,qa.easing)):qa.currentIndex>=qa.pageTotal-2?(p.hide(),o.hide(),pa.animate({width:ja},2*e,qa.easing)):pa.animate({width:qa.width},2*e,qa.easing))},hb=function(){La(),Ta(),Sa(),sa=!1,oa={options:a.extend({},qa),index:qa.currentIndex,pages:[Ba[qa.currentIndex].contentNode,Ba[qa.currentIndex+1].contentNode]},qa.change&&pa.off(Ea.change+".booklet").on(Ea.change+".booklet",qa.change),pa.trigger(Ea.change,oa)};return{init:Ga,enable:Ha,disable:Ia,destroy:Ja,next:bb,prev:cb,gotopage:function(a){if("string"==typeof a)"start"==a?a=0:"end"==a?a=qa.pageTotal-2:this.gotopage(parseInt(a));else if("number"==typeof a){if(0>a||a>=qa.pageTotal)return}else if("undefined"==typeof a)return;a%2!=0&&(a-=1),qa.direction==ya.rightToLeft&&(a=Math.abs(a-qa.pageTotal)-2),db(a)},add:_a,remove:ab,option:function(b,c){if("string"==typeof b)if("undefined"!=typeof qa[b]){if("undefined"==typeof c)return qa[b];qa[b]=c,Pa()}else a.error('Option "'+b+'" does not exist on jQuery.booklet.');else if("object"==typeof b)Pa(b);else if("undefined"==typeof b||!b)return a.extend({},qa)}}}a.fn.booklet=function(c,d,e){var f,g,h,i,j,k,l;return"string"==typeof c?(j=[],a(this).each(function(){f=a(this).data("booklet"),f?(g=c,h=[],"undefined"!=typeof d&&h.push(d),"undefined"!=typeof e&&h.push(e),f[g]?(i=f[g].apply(f,h),("undefined"!=typeof i||i)&&j.push(f[g].apply(f,h))):a.error('Method "'+g+'" does not exist on jQuery.booklet.')):a.error('jQuery.booklet has not been initialized. Method "'+c+'" cannot be called.')}),1==j.length?j[0]:j.length>0?j:a(this)):"number"==typeof c?a(this).each(function(){f=a(this).data("booklet"),f?(l=c,f.gotopage(l)):a.error("jQuery.booklet has not been initialized.")}):"object"!=typeof g&&g?void 0:a(this).each(function(){return k=a.extend({},a.fn.booklet.defaults,c),f=a(this).data("booklet"),f&&f.destroy(),f=new b(a(this),k),f.init(),this})},a.fn.booklet.defaults={name:null,width:600,height:400,speed:1e3,direction:"LTR",startingPage:0,easing:"easeInOutQuad",easeIn:"easeInQuad",easeOut:"easeOutQuad",closed:!1,closedFrontTitle:"Beginning",closedFrontChapter:"Beginning of Book",closedBackTitle:"End",closedBackChapter:"End of Book",covers:!1,autoCenter:!1,pagePadding:10,pageNumbers:!0,pageBorder:0,manual:!0,hovers:!0,hoverWidth:50,hoverSpeed:500,hoverThreshold:.25,hoverClick:!0,overlays:!1,tabs:!1,tabWidth:60,tabHeight:20,nextControlText:"Next",previousControlText:"Previous",nextControlTitle:"Next Page",previousControlTitle:"Previous Page",arrows:!1,arrowsHide:!1,cursor:"pointer",hash:!1,hashTitleText:" - Page ",keyboard:!0,next:null,prev:null,auto:!1,delay:5e3,pause:null,play:null,menu:null,pageSelector:!1,chapterSelector:!1,shadows:!0,shadowTopFwdWidth:166,shadowTopBackWidth:166,shadowBtmWidth:50,create:null,start:null,change:null,add:null,remove:null}}(jQuery),function(){"use strict";angular.module("app",["shared.config"])}(),function(){"use strict";angular.module("shared.constants",[])}(),function(){"use strict";angular.module("shared.constants").constant("toastr",toastr)}(),function(){"use strict";angular.module("shared.logger",[])}(),function(){"use strict";function a(a,b){function c(b,c,d){a.debug("Debug: "+b,c)}function d(c,d,e){"undefined"==typeof a.error()&&b.error(c,e),a.error("Error: "+c,d)}function e(c,d,e){"undefined"==typeof a.info()&&b.info(c,e),a.info("Info: "+c,d)}function f(c,d,e){"undefined"==typeof a.info()&&b.success(c,e),a.info("Success: "+c,d)}function g(c,d,e){"undefined"==typeof a.error()&&b.warning(c,e),a.warn("Warning: "+c,d)}var h={error:d,info:e,success:f,warning:g,debug:c};return h}angular.module("shared.logger").factory("logger",a),a.$inject=["$log","toastr"]}(),function(){"use strict";angular.module("shared.exception",["shared.logger"])}(),function(){"use strict";function a(){this.config={appErrorPrefix:void 0},this.configure=function(a){this.config.appErrorPrefix=a},this.$get=function(){return{config:this.config}}}function b(a){a.decorator("$exceptionHandler",c)}function c(a,b,c){return function(a,d){var e=b.config.appErrorPrefix||"",f=e+a,g={exception:a,cause:d};c.error(f,g)}}angular.module("shared.exception").provider("exceptionHandler",a).config(b),b.$inject=["$provide"],c.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";angular.module("shared.directives",[]);
}(),function(){"use strict";function a(a){function b(b,c,d){c.bind("click",function(){var c=d.ngReallyMessage;c&&a.confirm(c)&&b.$apply(d.ngReallyClick)})}var c={link:b,restrict:"A"};return c}angular.module("shared.directives").directive("ngReallyClick",a),a.$inject=["$window"]}(),function(){"use strict";angular.module("shared.filters",[])}(),function(){"use strict";function a(){return function(a){return a.slice().reverse()}}angular.module("shared.filters").filter("mpReverse",a)}(),function(){"use strict";angular.module("shared.route",["ngRoute","shared.logger"])}(),function(){"use strict";function a(){this.config={},this.$get=function(){return{config:this.config}}}function b(a,b,c,d,e,f){function g(){i(),k(),l()}function h(a){a.forEach(function(a){a.config.resolve=angular.extend(a.config.resolve||{},f.config.resolveAlways),p.when(a.url,a.config)}),p.otherwise({redirectTo:"/"})}function i(){b.$on("$routeChangeError",function(b,c,d,f){if(!m){n.errors++,m=!0;var g=c&&(c.title||c.name||c.loadedTemplateUrl)||"unknown target",h="Error routing to "+g+". "+(f.msg||"");e.warning(h,[c]),a.path("/")}})}function j(){for(var a in c.routes)if(c.routes.hasOwnProperty(a)){var b=c.routes[a],d=!!b.title;d&&o.push(b)}return o}function k(){b.$on("$routeChangeSuccess",function(a,c,d){n.changes++,m=!1,b.title=f.config.docTitle+" "+(c.title||"")})}function l(){"function"==typeof d.ga&&b.$on("$routeChangeSuccess",function(){d.ga("send","pageview",{page:'/booklet'+a.path()})})}var m=!1,n={errors:0,changes:0},o=[],p=f.config.$routeProvider,q={configureRoutes:h,getRoutes:j,routeCounts:n};return g(),q}angular.module("shared.route").provider("routeHelperConfig",a).factory("routeHelper",b),b.$inject=["$location","$rootScope","$route","$window","logger","routeHelperConfig"]}(),function(){"use strict";angular.module("shared.config",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","mgcrea.ngStrap","hljs","shared.constants","shared.logger","shared.exception","shared.directives","shared.filters","shared.route"])}(),function(){"use strict";function a(a,b,c,d,f,g,h,i){e.debug||(b.debugEnabled(!1),a.decorator("$log",["$delegate",function(a){var b=function(){return!1};return a.info=b,a.warn=b,a.error=b,a}])),g.config.$routeProvider=d,g.config.docTitle=e.name+" - ";var j={ready:function(){return!0}};g.config.resolveAlways=j,h.configure(e.appErrorPrefix),i.setOptions({tabReplace:"    "})}function b(a){a.options.timeOut=4e3,a.options.positionClass="toast-bottom-right"}function c(a,b,c){}var d=angular.module("shared.config"),e={name:"Booklet - jQuery Plugin",version:"1.4.4",debug:-1!=="false".indexOf("@@")};e.appErrorPrefix="["+e.name+" Error] ",d.value("config",e),a.$inject=["$provide","$logProvider","$locationProvider","$routeProvider","$httpProvider","routeHelperConfigProvider","exceptionHandlerProvider","hljsServiceProvider"],d.config(a),b.$inject=["toastr"],d.config(b),d.run(c),c.$inject=["$rootScope","$window","$timeout"]}(),function(){"use strict";function a(a){a.configureRoutes(b())}function b(){return[{url:"/",config:{templateUrl:"gh-pages-src/app/pages/home.html",title:"Home"}},{url:"/installation",config:{templateUrl:"gh-pages-src/app/pages/installation.html",title:"Installation"}},{url:"/documentation",config:{templateUrl:"gh-pages-src/app/pages/documentation.html",title:"Documentation"}},{url:"/demos",config:{templateUrl:"gh-pages-src/app/pages/demos.html",title:"Demos"}},{url:"/changelog",config:{templateUrl:"gh-pages-src/app/pages/changelog.html",title:"Change Log"}},{url:"/demos/arrows",config:{templateUrl:"gh-pages-src/app/pages/arrows.html",title:"Arrows"}},{url:"/demos/auto",config:{templateUrl:"gh-pages-src/app/pages/auto.html",title:"Auto Play"}},{url:"/demos/buttons",config:{templateUrl:"gh-pages-src/app/pages/buttons.html",title:"Custom Next & Prev Links"}},{url:"/demos/chapterselect",config:{templateUrl:"gh-pages-src/app/pages/chapterselect.html",title:"Chapter Selector"}},{url:"/demos/closed",config:{templateUrl:"gh-pages-src/app/pages/closed.html",title:"Closed Book & Covers"}},{url:"/demos/cursors",config:{templateUrl:"gh-pages-src/app/pages/cursors.html",title:"Controls Cursor"}},{url:"/demos/direction",config:{templateUrl:"gh-pages-src/app/pages/direction.html",title:"Reading Direction"}},{url:"/demos/easing",config:{templateUrl:"gh-pages-src/app/pages/easing.html",title:"Easing"}},{url:"/demos/events",config:{templateUrl:"gh-pages-src/app/pages/events.html",title:"Using Events"}},{url:"/demos/hash",config:{templateUrl:"gh-pages-src/app/pages/hash.html",title:"Hash Tag Control"}},{url:"/demos/hovers",config:{templateUrl:"gh-pages-src/app/pages/hovers.html",title:"Hover Effect"}},{url:"/demos/keyboard",config:{templateUrl:"gh-pages-src/app/pages/keyboard.html",title:"Keyboard Controls"}},{url:"/demos/manual",config:{templateUrl:"gh-pages-src/app/pages/manual.html",title:"Manual Control"}},{url:"/demos/methods",config:{templateUrl:"gh-pages-src/app/pages/methods.html",title:"Using Methods"}},{url:"/demos/overlays",config:{templateUrl:"gh-pages-src/app/pages/overlays.html",title:"Overlays"}},{url:"/demos/padding",config:{templateUrl:"gh-pages-src/app/pages/padding.html",title:"Page Padding"}},{url:"/demos/pagenums",config:{templateUrl:"gh-pages-src/app/pages/pagenums.html",title:"Page Numbers"}},{url:"/demos/pageselect",config:{templateUrl:"gh-pages-src/app/pages/pageselect.html",title:"Page Selector"}},{url:"/demos/shadows",config:{templateUrl:"gh-pages-src/app/pages/shadows.html",title:"Shadows"}},{url:"/demos/size",config:{templateUrl:"gh-pages-src/app/pages/size.html",title:"Width/Height"}},{url:"/demos/speed",config:{templateUrl:"gh-pages-src/app/pages/speed.html",title:"Speed"}},{url:"/demos/starting",config:{templateUrl:"gh-pages-src/app/pages/starting.html",title:"Starting Page"}},{url:"/demos/tabs",config:{templateUrl:"gh-pages-src/app/pages/tabs.html",title:"Tabs"}}]}angular.module("app").run(a),a.$inject=["routeHelper"]}();
//# sourceMappingURL=scripts.map