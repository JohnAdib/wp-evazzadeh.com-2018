(function(a){function b(a){var b=["transform","WebkitTransform","msTransform","MozTransform","OTransform"],c;while(c=b.shift())if(typeof a.style[c]!="undefined")return c;return"transform"}var c=null,d=a.fn.css;a.fn.css=function(e,f){c===null&&(typeof a.cssProps!="undefined"?c=a.cssProps:typeof a.props!="undefined"?c=a.props:c={}),typeof c.transform=="undefined"&&(e=="transform"||typeof e=="object"&&typeof e.transform!="undefined")&&(c.transform=b(this.get(0)));if(c.transform!="transform")if(e=="transform"){e=c.transform;if(typeof f=="undefined"&&jQuery.style)return jQuery.style(this.get(0),e)}else typeof e=="object"&&typeof e.transform!="undefined"&&(e[c.transform]=e.transform,delete e.transform);return d.apply(this,arguments)}})(jQuery);(function(a){var b="deg";a.fn.rotate=function(c){var d=a(this).css("transform")||"none";if(typeof c=="undefined"){if(d){var e=d.match(/rotate\(([^)]+)\)/);if(e&&e[1])return e[1]}return 0}var e=c.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/);e&&(e[3]&&(b=e[3]),a(this).css("transform",d.replace(/none|rotate\([^)]*\)/,"")+"rotate("+e[1]+b+")"));return this},a.fn.scale=function(b,c,d){var e=a(this).css("transform");if(typeof b=="undefined"){if(e){var f=e.match(/scale\(([^)]+)\)/);if(f&&f[1])return f[1]}return 1}a(this).css("transform",e.replace(/none|scale\([^)]*\)/,"")+"scale("+b+")");return this};var c=a.fx.prototype.cur;a.fx.prototype.cur=function(){if(this.prop=="rotate")return parseFloat(a(this.elem).rotate());if(this.prop=="scale")return parseFloat(a(this.elem).scale());return c.apply(this,arguments)},a.fx.step.rotate=function(c){a(c.elem).rotate(c.now+b)},a.fx.step.scale=function(b){a(b.elem).scale(b.now)};var d=a.fn.animate;a.fn.animate=function(a){if(typeof a.rotate!="undefined"){var c=a.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);c&&c[5]&&(b=c[5]),a.rotate=c[1]}return d.apply(this,arguments)}})(jQuery);(function(a){a.fn.quicksand=function(b,c){var e={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",useScaling:!0,enhancement:function(a){},selector:"> *",dx:0,dy:0};a.extend(e,c);if(a.browser.msie||typeof a.fn.scale=="undefined")e.useScaling=!1;var f;if(typeof arguments[1]=="function")var f=arguments[1];else if(typeof (arguments[2]=="function"))var f=arguments[2];return this.each(function(c){var g,h=[],i=a(b).clone(),j=a(this),k=a(this).css("height"),l,m=!1,n=a(j).offset(),o=[],p=a(this).find(e.selector);if(a.browser.msie&&a.browser.version.substr(0,1)<7)j.html("").append(i);else{var q=0,r=function(){q||(q=1,$toDelete=j.find("> *"),j.prepend(w.find("> *")),$toDelete.remove(),m&&j.css("height",l),e.enhancement(j),typeof f=="function"&&f.call(this))},s=j.offsetParent(),t=s.offset();s.css("position")=="relative"?s.get(0).nodeName.toLowerCase()!="body"&&(t.top+=parseFloat(s.css("border-top-width"))||0,t.left+=parseFloat(s.css("border-left-width"))||0):(t.top-=parseFloat(s.css("border-top-width"))||0,t.left-=parseFloat(s.css("border-left-width"))||0,t.top-=parseFloat(s.css("margin-top"))||0,t.left-=parseFloat(s.css("margin-left"))||0),isNaN(t.left)&&(t.left=0),isNaN(t.top)&&(t.top=0),t.left-=e.dx,t.top-=e.dy,j.css("height",a(this).height()),p.each(function(b){o[b]=a(this).offset()}),a(this).stop();var u=0,v=0;p.each(function(b){a(this).stop();var c=a(this).get(0);c.style.position=="absolute"?(u=-e.dx,v=-e.dy):(u=e.dx,v=e.dy),c.style.position="absolute",c.style.margin="0",c.style.top=o[b].top-parseFloat(c.style.marginTop)-t.top+v+"px",c.style.left=o[b].left-parseFloat(c.style.marginLeft)-t.left+u+"px"});var w=a(j).clone(),x=w.get(0);x.innerHTML="",x.setAttribute("id",""),x.style.height="auto",x.style.width=j.width()+"px",w.append(i),w.insertBefore(j),w.css("opacity",0),x.style.zIndex=-1,x.style.margin="0",x.style.position="absolute",x.style.top=n.top-t.top+"px",x.style.left=n.left-t.left+"px",e.adjustHeight==="dynamic"?j.animate({height:w.height()},e.duration,e.easing):e.adjustHeight==="auto"&&(l=w.height(),parseFloat(k)<parseFloat(l)?j.css("height",l):m=!0),p.each(function(b){var c=[];typeof e.attribute=="function"?(g=e.attribute(a(this)),i.each(function(){if(e.attribute(this)==g){c=a(this);return!1}})):c=i.filter("["+e.attribute+"="+a(this).attr(e.attribute)+"]"),c.length?e.useScaling?h.push({element:a(this),animation:{top:c.offset().top-t.top,left:c.offset().left-t.left,opacity:1,scale:"1.0"}}):h.push({element:a(this),animation:{top:c.offset().top-t.top,left:c.offset().left-t.left,opacity:1}}):e.useScaling?h.push({element:a(this),animation:{opacity:"0.0",scale:"0.0"}}):h.push({element:a(this),animation:{opacity:"0.0"}})}),i.each(function(b){var c=[],f=[];typeof e.attribute=="function"?(g=e.attribute(a(this)),p.each(function(){if(e.attribute(this)==g){c=a(this);return!1}}),i.each(function(){if(e.attribute(this)==g){f=a(this);return!1}})):(c=p.filter("["+e.attribute+"="+a(this).attr(e.attribute)+"]"),f=i.filter("["+e.attribute+"="+a(this).attr(e.attribute)+"]"));var k;if(c.length===0){e.useScaling?k={opacity:"1.0",scale:"1.0"}:k={opacity:"1.0"},d=f.clone();var l=d.get(0);l.style.position="absolute",l.style.margin="0",l.style.top=f.offset().top-t.top+"px",l.style.left=f.offset().left-t.left+"px",d.css("opacity",0),e.useScaling&&d.css("transform","scale(0.0)"),d.appendTo(j),h.push({element:a(d),animation:k})}}),w.remove(),e.enhancement(j);for(c=0;c<h.length;c++)h[c].element.animate(h[c].animation,e.duration,e.easing,r)}})}})(jQuery);Modernizr.interactivevalidation=function(){if(!Modernizr.input.required)return!1;var a=document.createElement("form");a.onsubmit=function(a){a.preventDefault()},a.innerHTML="<input required><button></button>",a.style.position="absolute",a.style.top="-99999em",document.body.appendChild(a);var b=a.getElementsByTagName("input")[0],c=!1;b.oninvalid=function(){c=!0};var d=a.getElementsByTagName("button")[0];d.click(),document.body.removeChild(a);return c}();(function(a,b){function c(b,c,d){var e=this.$slider=a(b),f=this.$container=a(c),g=f.children();this.length=0,Array.prototype.push.apply(this,g.get());var h=g.outerWidth(!0),i=e.width(),j=h-g.width(),k=this.span=Math.floor((i+j)/h);this.active=0,this.end=Math.max(0,k*(Math.ceil(g.length/k)-1)),this.pages=Math.ceil(this.length/k),this.activate(d,!1)}a.extend(c.prototype,{scrollTo:function(c,d){c<0?c=0:c>this.length-1&&(c=this.end);if(c!=this.active){this.active=c,this.activePage=Math.floor(c/this.span);var e=this.$slider;e.trigger("scrollstart"),this.$container.animate({left:-a(this[c]).position().left},d?b:0,function(){e.trigger("scrollend")})}},activate:function(a,b){this.scrollTo(Math.floor(a/this.span)*this.span,b)}});var d={container:".container",pagination:".pagination",prev:".prev",next:".next",num:".num",disabledClass:"disabled",activeClass:"active",active:0};a.fn.slider=function(b){var e=arguments;return this.each(function(f,g){var h=a(g),g;if(g=h.data("slider")){e=Array.prototype.slice.call(e,1);switch(b){case"activate":g[b].apply(g,e)}}else{if(typeof b!="object")return;var i=a.extend({},d,b);g=new c(h,a(i.container,h),i.active),h.data("slider",g);var j=a(i.pagination,h);g.end==0&&j.addClass(i.disabledClass);var k=a(i.prev,j).addClass(i.disabledClass),l=a(i.next,j);a.each([k,l],function(a,b){b.click(function(){g.scrollTo(g.active+(a==0?-1:1)*g.span,!0)})});var m=a(i.num,j),n=m.eq(0),o=Math.floor(i.active/g.span),p=Math.ceil(g.length/g.span);for(var f=0,q=p-m.length;f<q;++f){var r=n.clone();m.eq(n.length-1).after(r),m=m.add(r)}m.eq(o).addClass(i.activeClass),m.click(function(){g.scrollTo(m.index(this)*g.span,!0)}),h.bind("scrollstart",function(){g.active<g.span?k.addClass(i.disabledClass):k.removeClass(i.disabledClass),g.active>=g.end?l.addClass(i.disabledClass):l.removeClass(i.disabledClass),m.filter("."+i.activeClass).removeClass(i.activeClass).end().eq(g.activePage).addClass(i.activeClass)})}})}})(jQuery);(function(a,b){var c={thumb:".thumb",slot:"li"};a.fn.lava=function(b){var d=a.extend({},c,b);return this.each(function(b,c){var e=a(c),f=a(d.thumb,c),g=a(d.slot,c);f.width(g.filter(".active").width()+32),g.click(function(){var b=a(this);if(!b.hasClass("active")){var c=g.filter(".active");c.add(b).toggleClass("active"),f.animate({width:b.width()+32,left:b.position().left+parseInt(b.css("margin-left"))-19})}})})}})(jQuery);(function(a){function g(b,c){var d=new google.maps.Geocoder;d.geocode({address:c.address},function(d,e){if(e==google.maps.GeocoderStatus.OK){var f=d[0].geometry.location;a.each(b,function(a,b){var d=new google.maps.Map(b,{zoom:c.zoom,center:f,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:c.scrollwheel,mapTypeControl:c.mapTypeControl}),e=new google.maps.Marker({map:d,position:f})})}})}var b="__jquerygmaps__",c="http://maps.google.com/maps/api/js?v=3.3&sensor=false&callback="+b,d=!1,e=a(document);window[b]=function(){d=!0,e.trigger("gmapsloaded")},a.getScript(c);var f={zoom:13,scrollwheel:!1,mapTypeControl:!1};a.fn.gmaps=function(b){var c=a.extend({},f,b),h=this;d?g(h,c):e.bind("gmapsloaded",function(){g(h,c)});return this}})(jQuery);(function(a,b){a.attrHooks.required={},a.fn.h5f=function(){return this.each(function(c,d){var e=a(d),f=a("input, textarea",e);Modernizr.interactivevalidation||e.bind("submit",function(c){f.each(function(d,e){var f=a(e);if(f.attr("required")!==b&&!f.val()||f.attr("type")==="email"&&!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(f.val()))c.preventDefault(),c.stopPropagation(),c.stopImmediatePropagation(),f.trigger("invalid")})}),f.bind("invalid",function(b){var c=a(b.target).closest("p");c.addClass("invalid");var d=a("p.invalid",e);c[0]===d[0]&&a("input, textarea",c).focus()}).bind("keyup",function(b){a(b.target).closest("p").removeClass("invalid")})})}})(jQuery);$(function(){var a=Backbone.Model.extend(),b=Backbone.Collection.extend({model:a}),c=Backbone.Model.extend({initialize:function(){this.pages=new b},validate:function(a){if(!this.pages.get(a.activePage))return"Can't find page "+a.activePage+" in section "+this.id}}),d=Backbone.Collection.extend({model:c}),e=Backbone.Model.extend({initialize:function(){this.sects=new d}},{title:document.title,txt2name:function(a){return $.trim(a).toLowerCase().replace(/\s+/g,"-")}}),f=Backbone.Router.extend({routes:{"*path":"match"},redirects:{"":"/"},match:function(a){a in this.redirects&&(a=this.redirects[a]);var b={activePage:a};D.sects.some(function(a){if(!a.validate(b)){a.set(b,{silent:!0}),D.set({activeSect:a.id},{silent:!0}),D.change(),a.change();return!0}})}}),g=function(){},h=$(document),i=[].slice,j=Backbone.View.extend({initialize:function(a){D.bind("change",_.bind(this.changeSect,this))},changeSect:function(){var a=D.sects.get(D.get("activeSect")),b=a.view;if(!D.hasChanged("activeSect"))b.activate(null,a);else{var c=D.sects.get(D.previous("activeSect")),d=c.view;b.activate(c,a),d.deactivate(c,a)}}}),k=Backbone.View.extend({initialize:function(a){this.model&&(this.model.view=this);if(this.init!==g){var b=this.init;this.init=function(){var a=_.toArray(arguments),c=a.pop();b.apply(this,a),this.init=g,c()}}this.queue("init","show","hide")},queue:function(){_.each(arguments,function(a){var b=this[a];b!==g&&(this[a]=function(){var a=[b,this].concat(_.toArray(arguments));h.queue(_.bind.apply(_,a))})},this)},init:g,show:g,hide:g}),l=k.extend({activate:function(a,b){this.init();var c=b.pages.get(b.get("activePage")),d=c.view,e={sectChanged:!!a};if(!b.hasChanged("activePage"))d.activate(null,c,e);else{var f=b.pages.get(b.previous("activePage")),g=f.view;g.deactivate(f,c,e),d.activate(f,c,e)}a&&this.show()},deactivate:function(a,b){var c=a.pages.get(a.get("activePage")),d=c.view;this.hide(),d.deactivate(c,null)},show:function(a){$("#page").animate({top:-this.model.id*100+"%"},a)}}),m=k.extend({initialize:function(a){k.prototype.initialize.apply(this,arguments),this.container=a.container||this.el,this.queue("setTitle","loadImages","scrollToTop")},events:{"mouseover .back":"showTooltip","mouseout .back":"hideTooltip","mouseup .back":"hideTooltip","click .back-to-top":"scrollToTopHandler"},scrollToTopHandler:function(){this.scrollToTop(!0)},activate:function(a,b,c){this.setTitle(),this.loadImages(),this.init(),a&&this.show(!c.sectChanged&&D.inited)},deactivate:function(a,b,c){b&&this.hide(!c.sectChanged&&D.inited),this.scrollToTop(!1)},setTitle:function(a){document.title=this.$("h1.title").text()+" - "+e.title,a()},loadImages:function(a){$("img",this.el).each(function(a,b){var c=$(b);c.attr("src",c.data("src"))}),this.loadImages=g,a()},show:function(a,b){this.fadeIn(a,b)},hide:function(a,b){this.fadeOut(a,b)},fadeIn:function(a,b){var c=$(this.el);a?c.fadeIn(_.after(c.length,b)):(c.show(),b())},fadeOut:function(a,b){var c=$(this.el);a?c.fadeOut("fast",_.after(c.length,b)):(c.hide(),b())},scrollToTop:function(a,b){var c=$(this.container);a?c.animate({scrollTop:0},b):(c.scrollTop(0),b())},showTooltip:function(){var a=this.$(".tooltip");if(!a.length){var b=this.$(".back"),c=_.template($("#tooltip-tpl").html(),{text:b.text()});a=$(c).insertAfter(b)}a.is(":visible")||a.animate({opacity:"show",marginRight:"-=5"},"fast")},hideTooltip:function(){var a=this.$(".tooltip");a.is(":visible")&&a.animate({opacity:"hide",marginRight:"+=5"},"fast")}}),n=l.extend({hide:function(a){$("#nav .portfolio-back a, #nav .contact-back a").attr("href","#"+this.model.get("activePage")),a()}}),o=m.extend({setTitle:function(a){document.title=e.title,a()}}),p=m.extend({init:function(){var a=$(this.el);a.css("visibility","hidden").show(),this.$(".skills dd").each(function(a,b){var c=$(b);c.width(c.width()*$(b).text()/100)}),a.hide().css("visibility","visible")}}),q=l.extend({init:function(){$("#nav .about").clone().toggleClass("about portfolio-back").show().appendTo("#nav ul");var a=$("#portfolio .thumbnails");a.clone().toggleClass("thumbnails thumbnail-list").insertAfter(a)},hide:function(a){$("#nav .portfolio a").attr("href","#"+A.get("activePage")),a()}}),r=m.extend({initialize:function(){m.prototype.initialize.apply(this,arguments),this.queue("changeClass")},init:function(){var a=this.$(".thumbnails"),b=_.template($("#filter-tpl").html(),{});$(b).insertBefore(a);var c=$(this.el),d=c.css("display")=="none";d&&c.css("visibility","hidden").show();var f=this.$(".filter").lava();d&&c.hide().css("visibility","visible");var g=a.clone();$("li",f).click(function(){var b=$(this),c="."+e.txt2name(b.text()),d=g.children(b.index()==0?"":c);a.quicksand(d,{adjustHeight:"dynamic",attribute:function(a){return $("a",a).attr("href")}})})},activate:function(){this.changeClass(),m.prototype.activate.apply(this,arguments)},changeClass:function(a){$(this.el).filter("header").removeClass("list-mode").addClass("overview-mode"),a()}}),s=m.extend({activate:function(a,b,c){this.setTitle(),this.loadImages(),this.init();if(a){var d=!c.sectChanged&&D.inited;if(a.view instanceof r)this.show("fadeIn",d),M.activate(a,b,c);else{M.activate(a,b,c);var e=this._side(a,b);this.show("slideIn",e,d)}}},deactivate:function(a,b,c){M.deactivate(a,b,c);if(b){var d=!c.sectChanged&&D.inited;if(b.view instanceof r)this.hide("fadeOut",d);else{var e=this._side(a,b);this.hide("slideOut",e,d)}}this.scrollToTop(!1)},_side:function(a,b){return a.get("index")<b.get("index")?"left":"right"},show:function(a){var b=i.call(arguments,1);this[a].apply(this,b)},hide:function(a){var b=i.call(arguments,1);this[a].apply(this,b)},slideIn:function(a,b,c){var d=$(this.el);if(b){var e=d.width(),f={position:"absolute",top:$(M.el).outerHeight(!0)};f[a]="50%",f["margin-"+a]=e*.5;var g={opacity:"show"};g["margin-"+a]=-e*.5;var h={position:"static",marginLeft:"auto",marginRight:"auto",top:"auto"};h[a]="auto",d.css(f).animate(g,function(){d.css(h),c()})}else d.show(),c()},slideOut:function(a,b,c){var d=$(this.el);if(b){var e=d.width(),f={position:"relative"};f[a]=0;var g={opacity:"hide"};g[a]=-e;var h={position:"static"};h[a]="auto",d.css(f).animate(g,function(){d.css(h)}),c()}else d.hide(),c()}}),t=m.extend({initialize:function(){m.prototype.initialize.apply(this,arguments),this.queue("changeClass")},init:function(a){var b=$(this.el),c=_.template($("#pagination-tpl").html(),{});$(c).insertAfter($(".thumbnail-list",b)),b.css("visibility","hidden").show(),$(".proj-nav",b).slider({container:".thumbnail-list",active:a}),b.hide().css("visibility","visible")},activate:function(a,b,c){this.loadImages();var d=b.get("index");if(a){var e=!c.sectChanged&&D.inited;a.view instanceof r?(this.changeClass(),this.init(d),this.show("slideIn",d,e)):this.show("activateThumbnail",d,e)}},deactivate:function(a,b,c){if(b&&b.view instanceof r){var d=!c.sectChanged&&D.inited;this.hide("slideOut",d)}},changeClass:function(a){$(this.el).removeClass("overview-mode").addClass("list-mode"),a()},show:function(a,b,c,d){a==="activateThumbnail"?(this[a](b,c),d()):this[a](b,c,d)},hide:function(a,b,c){this[a](b,c)},activateThumbnail:function(a,b){var c=$(this.el);c.find(".proj-nav").slider("activate",a,b).find(".thumbnail-list .image").filter(".active").removeClass("active").end().eq(a).addClass("active")},slideIn:function(a,b,c){var d=$(this.el);b?($(".thumbnail-list",d).show(),d.css({marginTop:-d.outerHeight()}).show(),this.activateThumbnail(a),d.animate({marginTop:0},c)):(d.show(),this.activateThumbnail(a),c())},slideOut:function(a,b){var c=$(this.el);a?c.animate({marginTop:-c.outerHeight()},function(){$(".thumbnail-list",c).hide(),c.hide().css({marginTop:0}),b()}):(c.hide(),b())}}),u=l.extend({init:function(){$("#nav .about").clone().toggleClass("about contact-back").show().appendTo("#nav ul")}}),v=m.extend({events:{"mouseover .social li":"showTooltip","mouseout .social li":"hideTooltip","click .back-to-top":"scrollToTopHandler"},init:function(){this.$(".map figure").gmaps({address:this.$("dd.address").text()});var a=_.template($("#indicators-tpl").html(),{});this.$("form").append(a).h5f().submit(function(a){a.preventDefault();var b=$(this);if(!b.data("sending")){b.data("sending",!0);var c=$(".indicators .progress",b),d=$(".indicators .success",b),e=$(".indicators .error",b);d.stop(!0,!0).hide(),e.stop(!0,!0).hide(),c.stop(!0,!0).hide().fadeIn(),$.ajax({url:b.attr("action"),type:b.attr("method"),data:b.serialize(),success:function(){c.fadeOut("fast",function(){d.fadeIn().delay(5e3).fadeOut()})},error:function(){c.fadeOut("fast",function(){e.fadeIn().delay(5e3).fadeOut()})},complete:function(){b.data("sending",!1)}})}})},showTooltip:function(a){var b=this.$(".tooltip"),c=$(a.target).closest("li");if(!b.length){var d=_.template($("#tooltip-tpl").html(),{text:c.text()});b=$(d).appendTo(this.$(".social")),b.css({marginBottom:parseInt(b.css("marginBottom"))+5})}else $(".content",b).text(c.text());var e=$(".arrow",b);b.css({right:0});var f=c.position().top-b.outerHeight()-e.height(),g=c.position().left+c.width()/2,h=c.parent().width()-parseInt(c.css("marginLeft")),i=h-g,j=b.outerWidth();b.css({top:f}),j/2>i?(b.css({right:0}),e.css({right:i})):j/2>g?(b.css({right:h-j}),e.css({right:j-g})):(b.css({right:i-j/2}),e.css({right:"50%"})),b.stop(!0,!0).animate({opacity:"show",marginTop:"+=5"},"fast")},hideTooltip:function(a){var b=this.$(".tooltip");b.animate({opacity:"hide",marginTop:"-=5"},"fast")}});$("#footer").remove().removeAttr("id").find(".back-to-top").removeAttr("href").end().addClass("footer").appendTo(".page, .project");var w=new a({id:"/portfolio"}),x=new a({id:"/"}),y=new a({id:"/about-me"}),z=new a({id:"/contact-me"}),A=new c({id:0,activePage:w.id}),B=new c({id:1,activePage:x.id}),C=new c({id:2,activePage:z.id});A.pages.add(w),B.pages.add([x,y]),C.pages.add(z);var D=new e({activeSect:B.id});D.sects.add([A,B,C]);var E=new f,F=new j,G=new n({model:B}),H=new o({model:x,container:$("#header"),el:$("#logo, #nav .about")}),I=new p({model:y,el:$("#about")}),J=new q({model:A}),K=$("#portfolio"),L=new r({model:w,container:K,el:$(">header, >footer",K)}),M=new t({el:$(">header",K)});$(".project").each(function(b,c){var d=w.id+"/"+e.txt2name($(">header h1",c).text()),f=new a({id:d,index:b});A.pages.add(f),new s({model:f,container:K,el:c})});var N=new u({model:C}),O=new v({model:z,el:$("#contact")});Backbone.history.start(),D.inited=!0})