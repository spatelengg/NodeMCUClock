
/**
 * Wheel Color Picker 3.0.9
 * (c) 2011-2019 Fajar Chandra. Released under MIT License.
 * https://raffer.one/projects/jquery-wheelcolorpicker
 */
!function(G){G.fn.wheelColorPicker=function(){var i=this;if(0<arguments.length)var s="string"==typeof(a=[].shift.apply(arguments))?a.charAt(0).toUpperCase()+a.slice(1):a;else{var a=void 0;s=void 0}var o=arguments;return this.each(function(){var e=G(this).data("jQWCP.instance");if(null==e||null==e){var t={};"object"==typeof a&&(t=a),e=new h.ColorPicker(this,t),G(this).data("jQWCP.instance",e)}if(void 0!==a&&"object"!=typeof a)if("function"==typeof e[a]){if((r=e[a].apply(e,o))!==e)return i=r,!1}else if("function"==typeof e["set"+s]&&0<o.length){if((r=e["set"+s].apply(e,o))!==e)return i=r,!1}else if("function"==typeof e["get"+s]){var r;if((r=e["get"+s].apply(e,o))!==e)return i=r,!1}else if(void 0!==e.options[a]&&0<o.length)e.options[a]=o[0];else{if(void 0!==e.options[a])return i=e.options[a],!1;G.error("Method/option named "+a+" does not exist on jQuery.wheelColorPicker")}}),i};var h=G.fn.wheelColorPicker;h.defaults={format:"hex",preview:!1,live:!0,userinput:!0,validate:!0,autoResize:!0,autoFormat:!0,preserveWheel:null,cssClass:"",layout:"popup",animDuration:200,quality:1,sliders:null,rounding:2,mobile:!0,mobileWidth:480,hideKeyboard:!1,htmlOptions:!0,snap:!1,snapTolerance:.05},h.BUG_RELATIVE_PAGE_ORIGIN=!1,h.ORIGIN={left:0,top:0},h.colorToStr=function(e,t){var r="";switch(t){case"css":r="#";case"hex":1==(i=Math.round(255*e.r).toString(16)).length&&(i="0"+i),1==(s=Math.round(255*e.g).toString(16)).length&&(s="0"+s),1==(a=Math.round(255*e.b).toString(16)).length&&(a="0"+a),r+=i+s+a;break;case"cssa":r="#";case"hexa":var i,s,a;1==(i=Math.round(255*e.r).toString(16)).length&&(i="0"+i),1==(s=Math.round(255*e.g).toString(16)).length&&(s="0"+s),1==(a=Math.round(255*e.b).toString(16)).length&&(a="0"+a);var o=Math.round(255*e.a).toString(16);1==o.length&&(o="0"+o),r+=i+s+a+o;break;case"rgb":r="rgb("+Math.round(255*e.r)+","+Math.round(255*e.g)+","+Math.round(255*e.b)+")";break;case"rgb%":r="rgb("+100*e.r+"%,"+100*e.g+"%,"+100*e.b+"%)";break;case"rgba":r="rgba("+Math.round(255*e.r)+","+Math.round(255*e.g)+","+Math.round(255*e.b)+","+e.a+")";break;case"rgba%":r="rgba("+100*e.r+"%,"+100*e.g+"%,"+100*e.b+"%,"+100*e.a+"%)";break;case"hsv":r="hsv("+360*e.h+","+e.s+","+e.v+")";break;case"hsv%":r="hsv("+100*e.h+"%,"+100*e.s+"%,"+100*e.v+"%)";break;case"hsva":r="hsva("+360*e.h+","+e.s+","+e.v+","+e.a+")";break;case"hsva%":r="hsva("+100*e.h+"%,"+100*e.s+"%,"+100*e.v+"%,"+100*e.a+"%)";break;case"hsb":r="hsb("+e.h+","+e.s+","+e.v+")";break;case"hsb%":r="hsb("+100*e.h+"%,"+100*e.s+"%,"+100*e.v+"%)";break;case"hsba":r="hsba("+e.h+","+e.s+","+e.v+","+e.a+")";break;case"hsba%":r="hsba("+100*e.h+"%,"+100*e.s+"%,"+100*e.v+"%,"+100*e.a+"%)"}return r},h.strToColor=function(e){var t,r,i={a:1};if(null!=e.match(/^#[0-9a-f]{3}$/i)||e.match(/^#[0-9a-f]{4}$/i)){if(isNaN(i.r=17*parseInt(e.substr(1,1),16)/255))return!1;if(isNaN(i.g=17*parseInt(e.substr(2,1),16)/255))return!1;if(isNaN(i.b=17*parseInt(e.substr(3,1),16)/255))return!1;if(5==e.length&&isNaN(i.a=17*parseInt(e.substr(4,1),16)/255))return!1}else if(null!=e.match(/^[0-9a-f]{3}$/i)||null!=e.match(/^[0-9a-f]{4}$/i)){if(isNaN(i.r=17*parseInt(e.substr(0,1),16)/255))return!1;if(isNaN(i.g=17*parseInt(e.substr(1,1),16)/255))return!1;if(isNaN(i.b=17*parseInt(e.substr(2,1),16)/255))return!1;if(4==e.length&&isNaN(i.a=17*parseInt(e.substr(3,1),16)/255))return!1}else if(null!=e.match(/^#[0-9a-f]{6}$/i)||null!=e.match(/^#[0-9a-f]{8}$/i)){if(isNaN(i.r=parseInt(e.substr(1,2),16)/255))return!1;if(isNaN(i.g=parseInt(e.substr(3,2),16)/255))return!1;if(isNaN(i.b=parseInt(e.substr(5,2),16)/255))return!1;if(9==e.length&&isNaN(i.a=parseInt(e.substr(7,2),16)/255))return!1}else if(null!=e.match(/^[0-9a-f]{6}$/i)||null!=e.match(/^[0-9a-f]{8}$/i)){if(isNaN(i.r=parseInt(e.substr(0,2),16)/255))return!1;if(isNaN(i.g=parseInt(e.substr(2,2),16)/255))return!1;if(isNaN(i.b=parseInt(e.substr(4,2),16)/255))return!1;if(8==e.length&&isNaN(i.a=parseInt(e.substr(6,2),16)/255))return!1}else if(null!=e.match(/^rgba\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i)||null!=e.match(/^rgb\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i)){if(r=null!=e.match(/a/i),"%"==(t=e.substring(e.indexOf("(")+1,e.indexOf(","))).charAt(t.length-1)){if(isNaN(i.r=parseFloat(t)/100))return!1}else if(isNaN(i.r=parseInt(t)/255))return!1;if("%"==(t=e.substring(e.indexOf(",")+1,e.indexOf(",",e.indexOf(",")+1))).charAt(t.length-1)){if(isNaN(i.g=parseFloat(t)/100))return!1}else if(isNaN(i.g=parseInt(t)/255))return!1;if("%"==(t=r?e.substring(e.indexOf(",",e.indexOf(",")+1)+1,e.lastIndexOf(",")):e.substring(e.lastIndexOf(",")+1,e.lastIndexOf(")"))).charAt(t.length-1)){if(isNaN(i.b=parseFloat(t)/100))return!1}else if(isNaN(i.b=parseInt(t)/255))return!1;if(r)if("%"==(t=e.substring(e.lastIndexOf(",")+1,e.lastIndexOf(")"))).charAt(t.length-1)){if(isNaN(i.a=parseFloat(t)/100))return!1}else if(isNaN(i.a=parseFloat(t)))return!1}else{if(null==e.match(/^hsva\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i)&&null==e.match(/^hsv\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i)&&null==e.match(/^hsba\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i)&&null==e.match(/^hsb\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i))return!1;if(r=null!=e.match(/a/i),"%"==(t=e.substring(e.indexOf("(")+1,e.indexOf(","))).charAt(t.length-1)){if(isNaN(i.h=parseFloat(t)/100))return!1}else if(isNaN(i.h=parseFloat(t)/360))return!1;if("%"==(t=e.substring(e.indexOf(",")+1,e.indexOf(",",e.indexOf(",")+1))).charAt(t.length-1)){if(isNaN(i.s=parseFloat(t)/100))return!1}else if(isNaN(i.s=parseFloat(t)))return!1;if("%"==(t=r?e.substring(e.indexOf(",",e.indexOf(",")+1)+1,e.lastIndexOf(",")):e.substring(e.lastIndexOf(",")+1,e.lastIndexOf(")"))).charAt(t.length-1)){if(isNaN(i.v=parseFloat(t)/100))return!1}else if(isNaN(i.v=parseFloat(t)))return!1;if(r)if("%"==(t=e.substring(e.lastIndexOf(",")+1,e.lastIndexOf(")"))).charAt(t.length-1)){if(isNaN(i.a=parseFloat(t)/100))return!1}else if(isNaN(i.a=parseFloat(t)))return!1}return i},h.hsvToRgb=function(e,t,r){var i=e<=1/6||5/6<=e?1:e<1/3?1-6*(e-1/6):4/6<e?6*(e-4/6):0,s=1/6<=e&&e<=.5?1:e<1/6?6*e:e<4/6?1-6*(e-.5):0,a=.5<=e&&e<=5/6?1:2/6<e&&e<.5?6*(e-2/6):5/6<e?1-6*(e-5/6):0;return{r:(i+(1-i)*(1-t))*r,g:(s+(1-s)*(1-t))*r,b:(a+(1-a)*(1-t))*r}},h.rgbToHsv=function(e,t,r){var i,s=Math.max(e,t,r),a=s-Math.min(e,t,r);return i=0==a?0:e==s?(6+(t-r)/a)%6:t==s?2+(r-e)/a:r==s?4+(e-t)/a:0,{h:i/=6,s:0!=s?a/s:0,v:s}},h.ColorPicker=function(e,t){this.input=e,this.color={h:0,s:0,v:1,r:1,g:1,b:1,a:1},this.setValue(this.input.value),this.options=G.extend(!0,{},h.defaults),this.setOptions(t),null==this.options.sliders&&(this.options.sliders="wvp"+(0<=this.options.format.indexOf("a")?"a":"")),this.init()},h.ColorPicker.widget=null,h.ColorPicker.overlay=null,h.ColorPicker.init=function(){if(1!=h.ColorPicker.init.hasInit){h.ColorPicker.init.hasInit=!0;var e=G('<div class="jQWCP-overlay" style="display: none;"></div>');e.on("click",h.Handler.overlay_click),h.ColorPicker.overlay=e.get(0),G("body").append(e);var t=h.ColorPicker.getWheelDataUrl(200);G("head").append('<style type="text/css">.jQWCP-wWheel {background-image: url('+t+");}</style>"),G("html").on("mouseup.wheelColorPicker",h.Handler.html_mouseup),G("html").on("touchend.wheelColorPicker",h.Handler.html_mouseup),G("html").on("mousemove.wheelColorPicker",h.Handler.html_mousemove),G("html").on("touchmove.wheelColorPicker",h.Handler.html_mousemove),G(window).on("resize.wheelColorPicker",h.Handler.window_resize)}},h.ColorPicker.createWidget=function(){var e=G("<div class='jQWCP-wWidget'><div class='jQWCP-wWheel'><div class='jQWCP-wWheelOverlay'></div><span class='jQWCP-wWheelCursor'></span></div><div class='jQWCP-wHue jQWCP-slider-wrapper'><canvas class='jQWCP-wHueSlider jQWCP-slider' width='1' height='50' title='Hue'></canvas><span class='jQWCP-wHueCursor jQWCP-scursor'></span></div><div class='jQWCP-wSat jQWCP-slider-wrapper'><canvas class='jQWCP-wSatSlider jQWCP-slider' width='1' height='50' title='Saturation'></canvas><span class='jQWCP-wSatCursor jQWCP-scursor'></span></div><div class='jQWCP-wVal jQWCP-slider-wrapper'><canvas class='jQWCP-wValSlider jQWCP-slider' width='1' height='50' title='Value'></canvas><span class='jQWCP-wValCursor jQWCP-scursor'></span></div><div class='jQWCP-wRed jQWCP-slider-wrapper'><canvas class='jQWCP-wRedSlider jQWCP-slider' width='1' height='50' title='Red'></canvas><span class='jQWCP-wRedCursor jQWCP-scursor'></span></div><div class='jQWCP-wGreen jQWCP-slider-wrapper'><canvas class='jQWCP-wGreenSlider jQWCP-slider' width='1' height='50' title='Green'></canvas><span class='jQWCP-wGreenCursor jQWCP-scursor'></span></div><div class='jQWCP-wBlue jQWCP-slider-wrapper'><canvas class='jQWCP-wBlueSlider jQWCP-slider' width='1' height='50' title='Blue'></canvas><span class='jQWCP-wBlueCursor jQWCP-scursor'></span></div><div class='jQWCP-wAlpha jQWCP-slider-wrapper'><canvas class='jQWCP-wAlphaSlider jQWCP-slider' width='1' height='50' title='Alpha'></canvas><span class='jQWCP-wAlphaCursor jQWCP-scursor'></span></div><div class='jQWCP-wPreview'><canvas class='jQWCP-wPreviewBox' width='1' height='1' title='Selected Color'></canvas></div></div>");return e.find(".jQWCP-wWheel, .jQWCP-slider-wrapper, .jQWCP-scursor, .jQWCP-slider").attr("unselectable","on").css("-moz-user-select","none").css("-webkit-user-select","none").css("user-select","none").css("-webkit-touch-callout","none"),e.on("contextmenu.wheelColorPicker",function(){return!1}),e.on("mousedown.wheelColorPicker",".jQWCP-wWheel",h.Handler.wheel_mousedown),e.on("touchstart.wheelColorPicker",".jQWCP-wWheel",h.Handler.wheel_mousedown),e.on("mousedown.wheelColorPicker",".jQWCP-wWheelCursor",h.Handler.wheelCursor_mousedown),e.on("touchstart.wheelColorPicker",".jQWCP-wWheelCursor",h.Handler.wheelCursor_mousedown),e.on("mousedown.wheelColorPicker",".jQWCP-slider",h.Handler.slider_mousedown),e.on("touchstart.wheelColorPicker",".jQWCP-slider",h.Handler.slider_mousedown),e.on("mousedown.wheelColorPicker",".jQWCP-scursor",h.Handler.sliderCursor_mousedown),e.on("touchstart.wheelColorPicker",".jQWCP-scursor",h.Handler.sliderCursor_mousedown),e.get(0)},h.ColorPicker.getWheelDataUrl=function(e){var t=e/2,r=t,i=document.createElement("canvas");i.width=e,i.height=e;for(var s=i.getContext("2d"),a=0;a<e;a++)for(var o=0;o<e;o++){var n=Math.sqrt(Math.pow(o-r,2)+Math.pow(a-r,2));if(!(2+t<n)){var l=((o-r==0?a<r?90:270:Math.atan((r-a)/(o-r))/Math.PI*180)+(o<r?180:0)+360)%360,d=n/t,h=(Math.abs(360+l)+60)%360<120?1:240<l?(120-Math.abs(l-360))/60:l<120?(120-l)/60:0,u=Math.abs(l-120)<60?1:Math.abs(l-120)<120?(120-Math.abs(l-120))/60:0,c=Math.abs(l-240)<60?1:Math.abs(l-240)<120?(120-Math.abs(l-240))/60:0,p=Math.round(255*(h+(1-h)*(1-d))),C=Math.round(255*(u+(1-u)*(1-d))),f=Math.round(255*(c+(1-c)*(1-d)));s.fillStyle="rgb("+p+","+C+","+f+")",s.fillRect(o,a,1,1)}}return i.toDataURL()},h.ColorPicker.prototype.options=null,h.ColorPicker.prototype.input=null,h.ColorPicker.prototype.widget=null,h.ColorPicker.prototype.color=null,h.ColorPicker.prototype.lastValue=null,h.ColorPicker.prototype.setOptions=function(e){if(e=G.extend(!0,{},e),this.options.htmlOptions)for(var t in h.defaults)this.input.hasAttribute("data-wcp-"+t)&&void 0===e[t]&&(e[t]=this.input.getAttribute("data-wcp-"+t),"true"==e[t]?e[t]=!0:"false"==e[t]&&(e[t]=!1));for(var t in e)if(void 0!==this.options[t]){var r=t.charAt(0).toUpperCase()+t.slice(1);"function"==typeof this["set"+r]?this["set"+r](e[t]):this.options[t]=e[t]}return this},h.ColorPicker.prototype.init=function(){if(h.ColorPicker.init(),1!=this.hasInit){this.hasInit=!0;var e=G(this.input),t=null;"block"==this.options.layout?(this.widget=h.ColorPicker.createWidget(),(t=G(this.widget)).data("jQWCP.instance",this),t.insertAfter(this.input),"inline"==e.css("display")?t.css("display","inline-block"):t.css("display",e.css("display")),t.append(this.input),e.hide(),null!=e.attr("tabindex")?t.attr("tabindex",e.attr("tabindex")):t.attr("tabindex",0),this.refreshWidget(),this.redrawSliders(!0),this.updateSliders(),t.on("focus.wheelColorPicker",h.Handler.widget_focus_block),t.on("blur.wheelColorPicker",h.Handler.widget_blur_block)):(null==h.ColorPicker.widget&&(h.ColorPicker.widget=h.ColorPicker.createWidget(),(t=G(h.ColorPicker.widget)).attr("id","jQWCP-popup"),t.hide(),G("body").append(t),t.on("mousedown.wheelColorPicker",h.Handler.widget_mousedown_popup)),this.widget=h.ColorPicker.widget,e.on("focus.wheelColorPicker",h.Handler.input_focus_popup),e.on("blur.wheelColorPicker",h.Handler.input_blur_popup)),e.on("keyup.wheelColorPicker",h.Handler.input_keyup),e.on("change.wheelColorPicker",h.Handler.input_change),"object"==typeof this.options.color?(this.setColor(this.options.color),this.options.color=void 0):"string"==typeof this.options.color&&(this.setValue(this.options.color),this.options.color=void 0),this.options.userinput?e.removeAttr("readonly"):e.attr("readonly",!0)}},h.ColorPicker.prototype.destroy=function(){var e=G(this.widget),t=G(this.input);if("block"==this.options.layout){var r=G(G("body").data("jQWCP.activeControl"));if(r.length){var i=r.closest(".jQWCP-wWidget");e.is(i)&&G("body").data("jQWCP.activeControl",null)}e.before(this.input),e.remove(),t.show()}t.off("focus.wheelColorPicker"),t.off("blur.wheelColorPicker"),t.off("keyup.wheelColorPicker"),t.off("change.wheelColorPicker"),t.data("jQWCP.instance",null)},h.ColorPicker.prototype.refreshWidget=function(){var e=G(this.widget),t=this.options,r=!1;for(var i in e.attr("class","jQWCP-wWidget"),"block"==t.layout&&e.addClass("jQWCP-block"),e.addClass(t.cssClass),window.innerWidth<=t.mobileWidth&&"block"!=t.layout&&t.mobile&&(r=!0,e.addClass("jQWCP-mobile")),e.find(".jQWCP-wWheel, .jQWCP-slider-wrapper, .jQWCP-wPreview").hide().addClass("hidden"),t.sliders){var s=null;switch(this.options.sliders[i]){case"w":s=e.find(".jQWCP-wWheel");break;case"h":s=e.find(".jQWCP-wHue");break;case"s":s=e.find(".jQWCP-wSat");break;case"v":s=e.find(".jQWCP-wVal");break;case"r":s=e.find(".jQWCP-wRed");break;case"g":s=e.find(".jQWCP-wGreen");break;case"b":s=e.find(".jQWCP-wBlue");break;case"a":s=e.find(".jQWCP-wAlpha");break;case"p":s=e.find(".jQWCP-wPreview")}null!=s&&(s.appendTo(this.widget),s.show().removeClass("hidden"))}var a=50*t.quality;e.find(".jQWCP-slider").attr("height",a);var o=e.find(".jQWCP-wWheel, .jQWCP-slider-wrapper, .jQWCP-wPreview").not(".hidden");if(t.autoResize&&!r){var n=0;o.css({width:"",height:""}),o.each(function(e,t){var r=G(t);n+=parseFloat(r.css("margin-left").replace("px",""))+parseFloat(r.css("margin-right").replace("px",""))+r.outerWidth()}),e.css({width:n+"px"})}else{e.css({width:""});var l=e.find(".jQWCP-wWheel").not(".hidden"),d=e.find(".jQWCP-slider-wrapper, .jQWCP-wPreview").not(".hidden");if(l.css({height:e.height()+"px",width:e.height()}),0<l.length)var h=e.width()-l.outerWidth()-parseFloat(l.css("margin-left").replace("px",""))-parseFloat(l.css("margin-right").replace("px",""));else h=e.width();if(0<d.length){var u=parseFloat(d.css("margin-left").replace("px",""))+parseFloat(d.css("margin-right").replace("px",""));d.css({height:e.height()+"px",width:(h-(d.length-1)*u)/d.length+"px"})}}return this},h.ColorPicker.prototype.redrawSliders=function(e){if(null==this.widget)return this;var t=G(this.widget);if("string"==typeof e&&(e=arguments[1]),this!=t.data("jQWCP.instance"))return this;var r=this.options,i=this.color,s=50*r.quality,a=1,o=0,n=0,l=0,d=0,h=0,u=1;r.live&&(a=i.a,o=Math.round(255*i.r),n=Math.round(255*i.g),l=Math.round(255*i.b),d=i.h,h=i.s,u=i.v);var c=t.find(".jQWCP-wPreviewBox");if(!c.hasClass("hidden")){var p=c.get(0).getContext("2d");p.fillStyle="rgba("+o+","+n+","+l+","+a+")",p.clearRect(0,0,1,1),p.fillRect(0,0,1,1)}if(!this.options.live&&!e)return this;var C=t.find(".jQWCP-wAlphaSlider");if(!C.hasClass("hidden")||e){var f=C.get(0).getContext("2d"),g=f.createLinearGradient(0,0,0,s);g.addColorStop(0,"rgba("+o+","+n+","+l+",1)"),g.addColorStop(1,"rgba("+o+","+n+","+l+",0)"),f.fillStyle=g,f.clearRect(0,0,1,s),f.fillRect(0,0,1,s)}var v=t.find(".jQWCP-wRedSlider");if(!v.hasClass("hidden")||e){var P=v.get(0).getContext("2d"),w=P.createLinearGradient(0,0,0,s);w.addColorStop(0,"rgb(255,"+n+","+l+")"),w.addColorStop(1,"rgb(0,"+n+","+l+")"),P.fillStyle=w,P.fillRect(0,0,1,s)}var W=t.find(".jQWCP-wGreenSlider");if(!W.hasClass("hidden")||e){var b=W.get(0).getContext("2d"),j=b.createLinearGradient(0,0,0,s);j.addColorStop(0,"rgb("+o+",255,"+l+")"),j.addColorStop(1,"rgb("+o+",0,"+l+")"),b.fillStyle=j,b.fillRect(0,0,1,s)}var Q=t.find(".jQWCP-wBlueSlider");if(!Q.hasClass("hidden")||e){var k=Q.get(0).getContext("2d"),y=k.createLinearGradient(0,0,0,s);y.addColorStop(0,"rgb("+o+","+n+",255)"),y.addColorStop(1,"rgb("+o+","+n+",0)"),k.fillStyle=y,k.fillRect(0,0,1,s)}var m=t.find(".jQWCP-wHueSlider");if(!m.hasClass("hidden")||e){var S=m.get(0).getContext("2d"),N=S.createLinearGradient(0,0,0,s);N.addColorStop(0,"#f00"),N.addColorStop(.166666667,"#ff0"),N.addColorStop(.333333333,"#0f0"),N.addColorStop(.5,"#0ff"),N.addColorStop(.666666667,"#00f"),N.addColorStop(.833333333,"#f0f"),N.addColorStop(1,"#f00"),S.fillStyle=N,S.fillRect(0,0,1,s)}var I=t.find(".jQWCP-wSatSlider");if(!I.hasClass("hidden")||e){var x=G.fn.wheelColorPicker.hsvToRgb(d,1,u);x.r=Math.round(255*x.r),x.g=Math.round(255*x.g),x.b=Math.round(255*x.b);var H=I.get(0).getContext("2d"),_=H.createLinearGradient(0,0,0,s);_.addColorStop(0,"rgb("+x.r+","+x.g+","+x.b+")"),_.addColorStop(1,"rgb("+Math.round(255*u)+","+Math.round(255*u)+","+Math.round(255*u)+")"),H.fillStyle=_,H.fillRect(0,0,1,s)}var R=t.find(".jQWCP-wValSlider");if(!R.hasClass("hidden")||e){var M=G.fn.wheelColorPicker.hsvToRgb(d,h,1);M.r=Math.round(255*M.r),M.g=Math.round(255*M.g),M.b=Math.round(255*M.b);var O=R.get(0).getContext("2d"),A=O.createLinearGradient(0,0,0,s);A.addColorStop(0,"rgb("+M.r+","+M.g+","+M.b+")"),A.addColorStop(1,"#000"),O.fillStyle=A,O.fillRect(0,0,1,s)}return this},h.ColorPicker.prototype.updateSliders=function(){if(null==this.widget)return this;var e=G(this.widget),t=this.color;if(this!=e.data("jQWCP.instance"))return this;var r=e.find(".jQWCP-wWheel");if(!r.hasClass("hidden")){var i=e.find(".jQWCP-wWheelCursor"),s=e.find(".jQWCP-wWheelOverlay"),a=Math.cos(2*Math.PI*t.h)*t.s,o=Math.sin(2*Math.PI*t.h)*t.s,n=r.width()/2,l=r.height()/2;i.css("left",n+a*r.width()/2+"px"),i.css("top",l-o*r.height()/2+"px"),1==this.options.preserveWheel||null==this.options.preserveWheel&&0==this.options.live?s.css("opacity",0):s.css("opacity",1-(t.v<.2?.2:t.v))}var d=e.find(".jQWCP-wHueSlider");d.hasClass("hidden")||e.find(".jQWCP-wHueCursor").css("top",t.h*d.height()+"px");var h=e.find(".jQWCP-wSatSlider");h.hasClass("hidden")||e.find(".jQWCP-wSatCursor").css("top",(1-t.s)*h.height()+"px");var u=e.find(".jQWCP-wValSlider");u.hasClass("hidden")||e.find(".jQWCP-wValCursor").css("top",(1-t.v)*u.height()+"px");var c=e.find(".jQWCP-wRedSlider");c.hasClass("hidden")||e.find(".jQWCP-wRedCursor").css("top",(1-t.r)*c.height()+"px");var p=e.find(".jQWCP-wGreenSlider");p.hasClass("hidden")||e.find(".jQWCP-wGreenCursor").css("top",(1-t.g)*p.height()+"px");var C=e.find(".jQWCP-wBlueSlider");C.hasClass("hidden")||e.find(".jQWCP-wBlueCursor").css("top",(1-t.b)*C.height()+"px");var f=e.find(".jQWCP-wAlphaSlider");f.hasClass("hidden")||e.find(".jQWCP-wAlphaCursor").css("top",(1-t.a)*f.height()+"px");return this},h.ColorPicker.prototype.updateSelection=function(){return this.redrawSliders(),this.updateSliders(),this},h.ColorPicker.prototype.updateInput=function(){if(null==this.widget)return this;var e=G(this.input);this.input.value!=this.getValue()&&(e.attr("value",this.getValue()),this.input.value=this.getValue()),e.trigger("colorchange"),this.options.preview&&(e.css("background",h.colorToStr(this.color,"rgba")),.5<this.color.v?e.css("color","black"):e.css("color","white"))},h.ColorPicker.prototype.updateActiveControl=function(e){var t=G(G("body").data("jQWCP.activeControl"));if(0!=t.length){G(this.input);var r=this.options,i=this.color;if(e.originalEvent.touches&&0<e.originalEvent.touches.length&&(e.pageX=e.originalEvent.touches[0].pageX,e.pageY=e.originalEvent.touches[0].pageY),t.hasClass("jQWCP-wWheel")){var s=t.find(".jQWCP-wWheelCursor"),a=(t.find(".jQWCP-wWheelOverlay"),(e.pageX-t.offset().left-t.width()/2)/(t.width()/2)),o=-(e.pageY-t.offset().top-t.height()/2)/(t.height()/2);if(h.BUG_RELATIVE_PAGE_ORIGIN)a=(e.pageX-(t.get(0).getBoundingClientRect().left-h.ORIGIN.left)-t.width()/2)/(t.width()/2),o=-(e.pageY-(t.get(0).getBoundingClientRect().top-h.ORIGIN.top)-t.height()/2)/(t.height()/2);var n=Math.sqrt(Math.pow(a,2)+Math.pow(o,2));1<n&&(n=1),r.snap&&n<r.snapTolerance&&(n=0);var l=0==a&&0==o?0:Math.atan(o/a)/(2*Math.PI);a<0&&0==o&&(l=.5),l<0&&(l+=.5),o<0&&(l+=.5),this.setHsv(l,n,i.v)}else if(t.hasClass("jQWCP-slider-wrapper")){s=t.find(".jQWCP-scursor"),o=(e.pageY-t.offset().top)/t.height();if(h.BUG_RELATIVE_PAGE_ORIGIN)o=(e.pageY-(t.get(0).getBoundingClientRect().top-h.ORIGIN.top))/t.height();var d=o<0?0:1<o?1:o;r.snap&&d<r.snapTolerance?d=0:r.snap&&d>1-r.snapTolerance&&(d=1),r.snap&&d>.5-r.snapTolerance&&d<.5+r.snapTolerance&&(d=.5),s.css("top",d*t.height()+"px"),t.hasClass("jQWCP-wRed")&&this.setRgb(1-d,i.g,i.b),t.hasClass("jQWCP-wGreen")&&this.setRgb(i.r,1-d,i.b),t.hasClass("jQWCP-wBlue")&&this.setRgb(i.r,i.g,1-d),t.hasClass("jQWCP-wHue")&&this.setHsv(d,i.s,i.v),t.hasClass("jQWCP-wSat")&&this.setHsv(i.h,1-d,i.v),t.hasClass("jQWCP-wVal")&&this.setHsv(i.h,i.s,1-d),t.hasClass("jQWCP-wAlpha")&&this.setAlpha(1-d)}}},h.ColorPicker.prototype.getColor=function(){return this.color},h.ColorPicker.prototype.getValue=function(e){var t=this.options;return null==e&&(e=t.format),0<=t.rounding&&(this.color.a=Math.round(this.color.a*Math.pow(10,t.rounding))/Math.pow(10,t.rounding)),h.colorToStr(this.color,e)},h.ColorPicker.prototype.setValue=function(e,t){var r=h.strToColor(e);return r?this.setColor(r,t):this},h.ColorPicker.prototype.setColor=function(e,t){return"string"==typeof e?this.setValue(e,t):null!=e.r?this.setRgba(e.r,e.g,e.b,e.a,t):null!=e.h?this.setHsva(e.h,e.s,e.v,e.a,t):null!=e.a?this.setAlpha(e.a,t):this},h.ColorPicker.prototype.setRgba=function(e,t,r,i,s){void 0===s&&(s=!0);var a=this.color;a.r=e,a.g=t,a.b=r,null!=i&&(a.a=i);var o=h.rgbToHsv(e,t,r);return a.h=o.h,a.s=o.s,a.v=o.v,this.updateSliders(),this.redrawSliders(),s&&this.updateInput(),this},h.ColorPicker.prototype.setRgb=function(e,t,r,i){return this.setRgba(e,t,r,null,i)},h.ColorPicker.prototype.setHsva=function(e,t,r,i,s){void 0===s&&(s=!0);var a=this.color;a.h=e,a.s=t,a.v=r,null!=i&&(a.a=i);var o=h.hsvToRgb(e,t,r);return a.r=o.r,a.g=o.g,a.b=o.b,this.updateSliders(),this.redrawSliders(),s&&this.updateInput(),this},h.ColorPicker.prototype.setHsv=function(e,t,r,i){return this.setHsva(e,t,r,null,i)},h.ColorPicker.prototype.setAlpha=function(e,t){return void 0===t&&(t=!0),this.color.a=e,this.updateSliders(),this.redrawSliders(),t&&this.updateInput(),this},h.ColorPicker.prototype.show=function(){var e=this.input,t=G(e),r=G(this.widget),i=this.options;if("popup"==i.layout&&(r.data("jQWCP.instance",this),r.stop(!0,!0),r.css({top:e.getBoundingClientRect().top-h.ORIGIN.top+t.outerHeight()+"px",left:e.getBoundingClientRect().left-h.ORIGIN.left+"px"}),this.refreshWidget(),this.redrawSliders(),this.lastValue=e.value,r.fadeIn(i.animDuration),this.updateSliders(),i.hideKeyboard&&(t.blur(),G(h.ColorPicker.overlay).show()),r.hasClass("jQWCP-mobile"))){var s=G("html").scrollTop(),a=e.getBoundingClientRect().top-h.ORIGIN.top;a<s?G("html").animate({scrollTop:a}):a+t.outerHeight()>s+window.innerHeight-r.outerHeight()&&G("html").animate({scrollTop:a+t.outerHeight()-window.innerHeight+r.outerHeight()})}},h.ColorPicker.prototype.hide=function(){var e=G(this.widget);this==e.data("jQWCP.instance")&&(e.fadeOut(this.options.animDuration),G(h.ColorPicker.overlay).hide(),e.data("jQWCP.instance",null))},h.Handler={},h.Handler.input_focus_popup=function(e){var t=G(this).data("jQWCP.instance");t.show(),null==G(this).attr("readonly")&&(G(this).attr("readonly",!0),setTimeout(function(){G(t.input).removeAttr("readonly")}),null!=navigator.userAgent.match(/Android .* Firefox/)&&setTimeout(function(){G(t.input).attr("readonly",!0),G(t.input).one("blur",function(){G(t.input).removeAttr("readonly")})}))},h.Handler.input_blur_popup=function(e){var t=G(this).data("jQWCP.instance");t.options.hideKeyboard||(t.hide(),t.lastValue!=this.value&&G(this).trigger("change"))},h.Handler.input_keyup=function(e){var t=G(this).data("jQWCP.instance"),r=h.strToColor(this.value);r&&t.setColor(r,!1)},h.Handler.input_change=function(e){var t=G(this).data("jQWCP.instance"),r=h.strToColor(this.value);t.options.autoFormat&&r?t.setColor(r,!0):t.options.validate&&!r&&""!=this.value&&(this.value=t.getValue())},h.Handler.widget_focus_block=function(e){var t=G(this).data("jQWCP.instance"),r=G(t.input);t.lastValue=t.input.value,r.triggerHandler("focus")},h.Handler.widget_mousedown_popup=function(e){e.preventDefault();var t=G(this).data("jQWCP.instance"),r=G(t.input);if(r.off("focus.wheelColorPicker"),r.off("blur.wheelColorPicker"),null!=r.data("events"))var i=r.data("events").blur;else i=void 0;var s={blur:[]};if(null!=i)for(var a=0;a<i.length;a++)s.blur.push(i[a]);r.data("jQWCP.suspendedEvents",s)},h.Handler.widget_blur_block=function(e){var t=G(this).data("jQWCP.instance"),r=G(t.input);t.lastValue!=t.input.value&&r.trigger("change"),r.triggerHandler("blur")},h.Handler.wheelCursor_mousedown=function(e){e.preventDefault();var t=G(this),r=t.closest(".jQWCP-wWidget").data("jQWCP.instance"),i=G(r.input);G("body").data("jQWCP.activeControl",t.parent().get(0)),i.trigger("sliderdown")},h.Handler.wheel_mousedown=function(e){e.preventDefault();var t=G(this),r=t.closest(".jQWCP-wWidget").data("jQWCP.instance"),i=G(r.input);G("body").data("jQWCP.activeControl",t.get(0)),i.trigger("sliderdown"),r.updateActiveControl(e)},h.Handler.slider_mousedown=function(e){e.preventDefault();var t=G(this),r=t.closest(".jQWCP-wWidget").data("jQWCP.instance"),i=G(r.input);G("body").data("jQWCP.activeControl",t.parent().get(0)),i.trigger("sliderdown"),r.updateActiveControl(e)},h.Handler.sliderCursor_mousedown=function(e){e.preventDefault();var t=G(this),r=t.closest(".jQWCP-wWidget").data("jQWCP.instance"),i=G(r.input);G("body").data("jQWCP.activeControl",t.parent().get(0)),i.trigger("sliderdown")},h.Handler.html_mouseup=function(e){var t=G(G("body").data("jQWCP.activeControl"));if(t.length)var r=t.closest(".jQWCP-wWidget");else r=G("#jQWCP-popup");var i=r.data("jQWCP.instance");if(null!=i){var s=G(i.input);if("popup"==i.options.layout){i.options.hideKeyboard||s.trigger("focus.jQWCP_DONT_TRIGGER_EVENTS"),s.on("focus.wheelColorPicker",h.Handler.input_focus_popup),s.on("blur.wheelColorPicker",h.Handler.input_blur_popup);var a=s.data("jQWCP.suspendedEvents");if(null!=a)for(var o=a.blur,n=0;n<o.length;n++)s.on("blur"+(""==o[n].namespace?"":"."+o[n].namespace),o[n].handler)}0!=t.length&&("touchend"!=e.type&&i.updateActiveControl(e),G("body").data("jQWCP.activeControl",null),s.trigger("sliderup"))}},h.Handler.html_mousemove=function(e){var t=G(G("body").data("jQWCP.activeControl"));if(0!=t.length){e.preventDefault();var r=t.closest(".jQWCP-wWidget").data("jQWCP.instance"),i=G(r.input);return r.updateActiveControl(e),i.trigger("slidermove"),!1}},h.Handler.window_resize=function(e){G("body .jQWCP-wWidget.jQWCP-block").each(function(){var e=G(this).data("jQWCP.instance");e.refreshWidget(),e.redrawSliders()})},h.Handler.overlay_click=function(e){if(null!=h.ColorPicker.widget){var t=G(h.ColorPicker.widget).data("jQWCP.instance");if(null!=t){var r=G(t.input);t.lastValue!=t.input.value&&r.trigger("change"),t.hide()}}},G(document).ready(function(){G("[data-wheelcolorpicker]").wheelColorPicker({htmlOptions:!0})}),null!=G.browser&&G.browser.mozilla&&(G.fn.wheelColorPicker.defaults.quality=.2),G(document).ready(function(){G("body").append('<div id="jQWCP-PageOrigin" style="position: absolute; top: 0; left: 0; height: 0; width: 0;"></div>');var e=document.getElementById("jQWCP-PageOrigin").getBoundingClientRect();h.ORIGIN=e,G(window).on("scroll.jQWCP_RelativePageOriginBugFix",function(){var e=document.getElementById("jQWCP-PageOrigin").getBoundingClientRect();0==(h.ORIGIN=e).left&&0==e.top||(h.BUG_RELATIVE_PAGE_ORIGIN=!0)})})}(jQuery);

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,(function(t){"use strict";var e,r;function n(t){return"object"==typeof t&&"function"==typeof t.to}function i(t){t.parentElement.removeChild(t)}function o(t){return null!=t}function s(t){t.preventDefault()}function a(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function l(t,e,r){r>0&&(f(t,e),setTimeout((function(){d(t,e)}),r))}function u(t){return Math.max(Math.min(t,100),0)}function c(t){return Array.isArray(t)?t:[t]}function p(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function f(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function d(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function h(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function m(t,e){return 100/(e-t)}function g(t,e,r){return 100*e/(t[r+1]-t[r])}function v(t,e){for(var r=1;t>=e[r];)r+=1;return r}function b(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=v(r,t),i=t[n-1],o=t[n],s=e[n-1],a=e[n];return s+function(t,e){return g(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}([i,o],r)/m(s,a)}function S(t,e,r,n){if(100===n)return n;var i=v(n,t),o=t[i-1],s=t[i];return r?n-o>(s-o)/2?s:o:e[i-1]?t[i-1]+function(t,e){return Math.round(t/e)*e}(n-t[i-1],e[i-1]):n}t.PipsMode=void 0,(e=t.PipsMode||(t.PipsMode={})).Range="range",e.Steps="steps",e.Positions="positions",e.Count="count",e.Values="values",t.PipsType=void 0,(r=t.PipsType||(t.PipsType={}))[r.None=-1]="None",r[r.NoValue=0]="NoValue",r[r.LargeValue=1]="LargeValue",r[r.SmallValue=2]="SmallValue";var x=function(){function t(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=e;var i=[];for(Object.keys(t).forEach((function(e){i.push([c(t[e]),e])})),i.sort((function(t,e){return t[0][0]-e[0][0]})),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}return t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=g(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);r||t!==this.xPct[i+1]||i++,null===e&&(e=[]);var o=1,s=e[i],a=0,l=0,u=0,c=0;for(n=r?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);s>0;)a=this.xPct[i+1+c]-this.xPct[i+c],e[i+c]*o+100-100*n>100?(l=a*n,o=(s-100*n)/e[i+c],n=1):(l=e[i+c]*a/100*o,o=0),r?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),s=e[i+c]*o;return t+u},t.prototype.toStepping=function(t){return t=b(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(r>=100)return t.slice(-1)[0];var n=v(r,e),i=t[n-1],o=t[n],s=e[n-1];return function(t,e){return e*(t[1]-t[0])/100+t[0]}([i,o],(r-s)*m(s,e[n]))}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=S(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=v(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){var e=v(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(p);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var r;if(!a(r="min"===t?0:"max"===t?100:parseFloat(t))||!a(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(e[0]);var n=Number(e[1]);r?this.xSteps.push(!isNaN(n)&&n):isNaN(n)||(this.xSteps[0]=n),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=g([this.xVal[t],this.xVal[t+1]],e,0)/m(this.xPct[t],this.xPct[t+1]);var r=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],n=Math.ceil(Number(r.toFixed(3))-1),i=this.xVal[t]+this.xNumSteps[t]*n;this.xHighestCompleteStep[t]=i}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),y={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},w={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},E={tooltips:".__tooltips",aria:".__aria"};function P(t,e){if(!a(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function C(t,e){if(!a(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function N(t,e){if(!a(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function V(t,e){if(!a(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function A(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new x(e,t.snap||!1,t.singleStep)}function k(t,e){if(e=c(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function M(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function U(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function D(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function O(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function L(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function T(t,e){if(!a(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function j(t,e){if(!a(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function z(t,e){var r;if(!a(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!a(e[0])&&!a(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],i=t.spectrum.xVal[0];if(n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function H(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function F(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=e.indexOf("tap")>=0,n=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0,a=e.indexOf("unconstrained")>=0,l=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");T(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:l,smoothSteps:u,fixed:i,snap:o,hover:s,unconstrained:a}}function R(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=c(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function _(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function B(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function q(t,e){if(!function(t){return n(t)&&"function"==typeof t.from}(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function X(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function Y(t,e){t.documentElement=e}function I(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function W(t,e){if("object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(r){t.cssClasses[r]=t.cssPrefix+e[r]}))):t.cssClasses=e}function $(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:y,format:y},r={step:{r:!1,t:P},keyboardPageMultiplier:{r:!1,t:C},keyboardMultiplier:{r:!1,t:N},keyboardDefaultStep:{r:!1,t:V},start:{r:!0,t:k},connect:{r:!0,t:O},direction:{r:!0,t:H},snap:{r:!1,t:M},animate:{r:!1,t:U},animationDuration:{r:!1,t:D},range:{r:!0,t:A},orientation:{r:!1,t:L},margin:{r:!1,t:T},limit:{r:!1,t:j},padding:{r:!1,t:z},behaviour:{r:!0,t:F},ariaFormat:{r:!1,t:B},format:{r:!1,t:q},tooltips:{r:!1,t:R},keyboardSupport:{r:!0,t:X},documentElement:{r:!1,t:Y},cssPrefix:{r:!0,t:I},cssClasses:{r:!0,t:W},handleAttributes:{r:!1,t:_}},n={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:w,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(r).forEach((function(i){if(o(t[i])||void 0!==n[i])r[i].t(e,o(t[i])?t[i]:n[i]);else if(r[i].r)throw new Error("noUiSlider: '"+i+"' is required.")})),e.pips=t.pips;var i=document.createElement("div"),s=void 0!==i.style.msTransform,a=void 0!==i.style.transform;e.transformRule=a?"transform":s?"msTransform":"webkitTransform";return e.style=[["left","top"],["right","bottom"]][e.dir][e.ort],e}function G(e,r,n){var a,p,m,g,v,b,S,x=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},y=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),w=e,P=r.spectrum,C=[],N=[],V=[],A=0,k={},M=e.ownerDocument,U=r.documentElement||M.documentElement,D=M.body,O="rtl"===M.dir||1===r.ort?0:100;function L(t,e){var r=M.createElement("div");return e&&f(r,e),t.appendChild(r),r}function T(t,e){var n=L(t,r.cssClasses.origin),i=L(n,r.cssClasses.handle);if(L(i,r.cssClasses.touchArea),i.setAttribute("data-handle",String(e)),r.keyboardSupport&&(i.setAttribute("tabindex","0"),i.addEventListener("keydown",(function(t){return function(t,e){if(H()||F(e))return!1;var n=["Left","Right"],i=["Down","Up"],o=["PageDown","PageUp"],s=["Home","End"];r.dir&&!r.ort?n.reverse():r.ort&&!r.dir&&(i.reverse(),o.reverse());var a,l=t.key.replace("Arrow",""),u=l===o[0],c=l===o[1],p=l===i[0]||l===n[0]||u,f=l===i[1]||l===n[1]||c,d=l===s[0],h=l===s[1];if(!(p||f||d||h))return!0;if(t.preventDefault(),f||p){var m=p?0:1,g=gt(e)[m];if(null===g)return!1;!1===g&&(g=P.getDefaultStep(N[e],p,r.keyboardDefaultStep)),g*=c||u?r.keyboardPageMultiplier:r.keyboardMultiplier,g=Math.max(g,1e-7),g*=p?-1:1,a=C[e]+g}else a=h?r.spectrum.xVal[r.spectrum.xVal.length-1]:r.spectrum.xVal[0];return pt(e,P.toStepping(a),!0,!0),ot("slide",e),ot("update",e),ot("change",e),ot("set",e),!1}(t,e)}))),void 0!==r.handleAttributes){var o=r.handleAttributes[e];Object.keys(o).forEach((function(t){i.setAttribute(t,o[t])}))}return i.setAttribute("role","slider"),i.setAttribute("aria-orientation",r.ort?"vertical":"horizontal"),0===e?f(i,r.cssClasses.handleLower):e===r.handles-1&&f(i,r.cssClasses.handleUpper),n.handle=i,n}function j(t,e){return!!e&&L(t,r.cssClasses.connect)}function z(t,e){return!(!r.tooltips||!r.tooltips[e])&&L(t.firstChild,r.cssClasses.tooltip)}function H(){return w.hasAttribute("disabled")}function F(t){return p[t].hasAttribute("disabled")}function R(){v&&(it("update"+E.tooltips),v.forEach((function(t){t&&i(t)})),v=null)}function _(){R(),v=p.map(z),nt("update"+E.tooltips,(function(t,e,n){if(v&&r.tooltips&&!1!==v[e]){var i=t[e];!0!==r.tooltips[e]&&(i=r.tooltips[e].to(n[e])),v[e].innerHTML=i}}))}function B(t,e){return t.map((function(t){return P.fromStepping(e?P.getStep(t):t)}))}function q(e){var r,n=function(e){if(e.mode===t.PipsMode.Range||e.mode===t.PipsMode.Steps)return P.xVal;if(e.mode===t.PipsMode.Count){if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var r=e.values-1,n=100/r,i=[];r--;)i[r]=r*n;return i.push(100),B(i,e.stepped)}return e.mode===t.PipsMode.Positions?B(e.values,e.stepped):e.mode===t.PipsMode.Values?e.stepped?e.values.map((function(t){return P.fromStepping(P.getStep(P.toStepping(t)))})):e.values:[]}(e),i={},o=P.xVal[0],s=P.xVal[P.xVal.length-1],a=!1,l=!1,u=0;return r=n.slice().sort((function(t,e){return t-e})),(n=r.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==o&&(n.unshift(o),a=!0),n[n.length-1]!==s&&(n.push(s),l=!0),n.forEach((function(r,o){var s,c,p,f,d,h,m,g,v,b,S=r,x=n[o+1],y=e.mode===t.PipsMode.Steps;for(y&&(s=P.xNumSteps[o]),s||(s=x-S),void 0===x&&(x=S),s=Math.max(s,1e-7),c=S;c<=x;c=Number((c+s).toFixed(7))){for(g=(d=(f=P.toStepping(c))-u)/(e.density||1),b=d/(v=Math.round(g)),p=1;p<=v;p+=1)i[(h=u+p*b).toFixed(5)]=[P.fromStepping(h),0];m=n.indexOf(c)>-1?t.PipsType.LargeValue:y?t.PipsType.SmallValue:t.PipsType.NoValue,!o&&a&&c!==x&&(m=0),c===x&&l||(i[f.toFixed(5)]=[c,m]),u=f}})),i}function X(e,n,i){var o,s,a=M.createElement("div"),l=((o={})[t.PipsType.None]="",o[t.PipsType.NoValue]=r.cssClasses.valueNormal,o[t.PipsType.LargeValue]=r.cssClasses.valueLarge,o[t.PipsType.SmallValue]=r.cssClasses.valueSub,o),u=((s={})[t.PipsType.None]="",s[t.PipsType.NoValue]=r.cssClasses.markerNormal,s[t.PipsType.LargeValue]=r.cssClasses.markerLarge,s[t.PipsType.SmallValue]=r.cssClasses.markerSub,s),c=[r.cssClasses.valueHorizontal,r.cssClasses.valueVertical],p=[r.cssClasses.markerHorizontal,r.cssClasses.markerVertical];function d(t,e){var n=e===r.cssClasses.value,i=n?l:u;return e+" "+(n?c:p)[r.ort]+" "+i[t]}return f(a,r.cssClasses.pips),f(a,0===r.ort?r.cssClasses.pipsHorizontal:r.cssClasses.pipsVertical),Object.keys(e).forEach((function(o){!function(e,o,s){if((s=n?n(o,s):s)!==t.PipsType.None){var l=L(a,!1);l.className=d(s,r.cssClasses.marker),l.style[r.style]=e+"%",s>t.PipsType.NoValue&&((l=L(a,!1)).className=d(s,r.cssClasses.value),l.setAttribute("data-value",String(o)),l.style[r.style]=e+"%",l.innerHTML=String(i.to(o)))}}(o,e[o][0],e[o][1])})),a}function Y(){g&&(i(g),g=null)}function I(t){Y();var e=q(t),r=t.filter,n=t.format||{to:function(t){return String(Math.round(t))}};return g=w.appendChild(X(e,r,n))}function W(){var t=a.getBoundingClientRect(),e="offset"+["Width","Height"][r.ort];return 0===r.ort?t.width||a[e]:t.height||a[e]}function G(t,e,n,i){var o=function(o){var s,a,l=function(t,e,r){var n=0===t.type.indexOf("touch"),i=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),s=0,a=0;0===t.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(n){var l=function(e){var n=e.target;return n===r||r.contains(n)||t.composed&&t.composedPath().shift()===r};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;s=u[0].pageX,a=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;s=c.pageX,a=c.pageY}}e=e||h(M),(i||o)&&(s=t.clientX+e.x,a=t.clientY+e.y);return t.pageOffset=e,t.points=[s,a],t.cursor=i||o,t}(o,i.pageOffset,i.target||e);return!!l&&(!(H()&&!i.doNotReject)&&(s=w,a=r.cssClasses.tap,!((s.classList?s.classList.contains(a):new RegExp("\\b"+a+"\\b").test(s.className))&&!i.doNotReject)&&(!(t===x.start&&void 0!==l.buttons&&l.buttons>1)&&((!i.hover||!l.buttons)&&(y||l.preventDefault(),l.calcPoint=l.points[r.ort],void n(l,i))))))},s=[];return t.split(" ").forEach((function(t){e.addEventListener(t,o,!!y&&{passive:!0}),s.push([t,o])})),s}function J(t){var e,n,i,o,s,l,c=100*(t-(e=a,n=r.ort,i=e.getBoundingClientRect(),o=e.ownerDocument,s=o.documentElement,l=h(o),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),n?i.top+l.y-s.clientTop:i.left+l.x-s.clientLeft))/W();return c=u(c),r.dir?100-c:c}function K(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&Z(t,e)}function Q(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return Z(t,e);var n=(r.dir?-1:1)*(t.calcPoint-e.startCalcPoint);lt(n>0,100*n/e.baseSize,e.locations,e.handleNumbers,e.connect)}function Z(t,e){e.handle&&(d(e.handle,r.cssClasses.active),A-=1),e.listeners.forEach((function(t){U.removeEventListener(t[0],t[1])})),0===A&&(d(w,r.cssClasses.drag),ct(),t.cursor&&(D.style.cursor="",D.removeEventListener("selectstart",s))),r.events.smoothSteps&&(e.handleNumbers.forEach((function(t){pt(t,N[t],!0,!0,!1,!1)})),e.handleNumbers.forEach((function(t){ot("update",t)}))),e.handleNumbers.forEach((function(t){ot("change",t),ot("set",t),ot("end",t)}))}function tt(t,e){if(!e.handleNumbers.some(F)){var n;if(1===e.handleNumbers.length)n=p[e.handleNumbers[0]].children[0],A+=1,f(n,r.cssClasses.active);t.stopPropagation();var i=[],o=G(x.move,U,Q,{target:t.target,handle:n,connect:e.connect,listeners:i,startCalcPoint:t.calcPoint,baseSize:W(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:N.slice()}),a=G(x.end,U,Z,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers}),l=G("mouseout",U,K,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers});i.push.apply(i,o.concat(a,l)),t.cursor&&(D.style.cursor=getComputedStyle(t.target).cursor,p.length>1&&f(w,r.cssClasses.drag),D.addEventListener("selectstart",s,!1)),e.handleNumbers.forEach((function(t){ot("start",t)}))}}function et(t){t.stopPropagation();var e=J(t.calcPoint),n=function(t){var e=100,r=!1;return p.forEach((function(n,i){if(!F(i)){var o=N[i],s=Math.abs(o-t);(s<e||s<=e&&t>o||100===s&&100===e)&&(r=i,e=s)}})),r}(e);!1!==n&&(r.events.snap||l(w,r.cssClasses.tap,r.animationDuration),pt(n,e,!0,!0),ct(),ot("slide",n,!0),ot("update",n,!0),r.events.snap?tt(t,{handleNumbers:[n]}):(ot("change",n,!0),ot("set",n,!0)))}function rt(t){var e=J(t.calcPoint),r=P.getStep(e),n=P.fromStepping(r);Object.keys(k).forEach((function(t){"hover"===t.split(".")[0]&&k[t].forEach((function(t){t.call(vt,n)}))}))}function nt(t,e){k[t]=k[t]||[],k[t].push(e),"update"===t.split(".")[0]&&p.forEach((function(t,e){ot("update",e)}))}function it(t){var e=t&&t.split(".")[0],r=e?t.substring(e.length):t;Object.keys(k).forEach((function(t){var n=t.split(".")[0],i=t.substring(n.length);e&&e!==n||r&&r!==i||function(t){return t===E.aria||t===E.tooltips}(i)&&r!==i||delete k[t]}))}function ot(t,e,n){Object.keys(k).forEach((function(i){var o=i.split(".")[0];t===o&&k[i].forEach((function(t){t.call(vt,C.map(r.format.to),e,C.slice(),n||!1,N.slice(),vt)}))}))}function st(t,e,n,i,o,s,a){var l;return p.length>1&&!r.events.unconstrained&&(i&&e>0&&(l=P.getAbsoluteDistance(t[e-1],r.margin,!1),n=Math.max(n,l)),o&&e<p.length-1&&(l=P.getAbsoluteDistance(t[e+1],r.margin,!0),n=Math.min(n,l))),p.length>1&&r.limit&&(i&&e>0&&(l=P.getAbsoluteDistance(t[e-1],r.limit,!1),n=Math.min(n,l)),o&&e<p.length-1&&(l=P.getAbsoluteDistance(t[e+1],r.limit,!0),n=Math.max(n,l))),r.padding&&(0===e&&(l=P.getAbsoluteDistance(0,r.padding[0],!1),n=Math.max(n,l)),e===p.length-1&&(l=P.getAbsoluteDistance(100,r.padding[1],!0),n=Math.min(n,l))),a||(n=P.getStep(n)),!((n=u(n))===t[e]&&!s)&&n}function at(t,e){var n=r.ort;return(n?e:t)+", "+(n?t:e)}function lt(t,e,n,i,o){var s=n.slice(),a=i[0],l=r.events.smoothSteps,u=[!t,t],c=[t,!t];i=i.slice(),t&&i.reverse(),i.length>1?i.forEach((function(t,r){var n=st(s,t,s[t]+e,u[r],c[r],!1,l);!1===n?e=0:(e=n-s[t],s[t]=n)})):u=c=[!0];var p=!1;i.forEach((function(t,r){p=pt(t,n[t]+e,u[r],c[r],!1,l)||p})),p&&(i.forEach((function(t){ot("update",t),ot("slide",t)})),null!=o&&ot("drag",a))}function ut(t,e){return r.dir?100-t-e:t}function ct(){V.forEach((function(t){var e=N[t]>50?-1:1,r=3+(p.length+e*t);p[t].style.zIndex=String(r)}))}function pt(t,e,n,i,o,s){return o||(e=st(N,t,e,n,i,!1,s)),!1!==e&&(function(t,e){N[t]=e,C[t]=P.fromStepping(e);var n="translate("+at(ut(e,0)-O+"%","0")+")";p[t].style[r.transformRule]=n,ft(t),ft(t+1)}(t,e),!0)}function ft(t){if(m[t]){var e=0,n=100;0!==t&&(e=N[t-1]),t!==m.length-1&&(n=N[t]);var i=n-e,o="translate("+at(ut(e,i)+"%","0")+")",s="scale("+at(i/100,"1")+")";m[t].style[r.transformRule]=o+" "+s}}function dt(t,e){return null===t||!1===t||void 0===t?N[e]:("number"==typeof t&&(t=String(t)),!1!==(t=r.format.from(t))&&(t=P.toStepping(t)),!1===t||isNaN(t)?N[e]:t)}function ht(t,e,n){var i=c(t),o=void 0===N[0];e=void 0===e||e,r.animate&&!o&&l(w,r.cssClasses.tap,r.animationDuration),V.forEach((function(t){pt(t,dt(i[t],t),!0,!1,n)}));var s=1===V.length?0:1;if(o&&P.hasNoSize()&&(n=!0,N[0]=0,V.length>1)){var a=100/(V.length-1);V.forEach((function(t){N[t]=t*a}))}for(;s<V.length;++s)V.forEach((function(t){pt(t,N[t],!0,!0,n)}));ct(),V.forEach((function(t){ot("update",t),null!==i[t]&&e&&ot("set",t)}))}function mt(t){if(void 0===t&&(t=!1),t)return 1===C.length?C[0]:C.slice(0);var e=C.map(r.format.to);return 1===e.length?e[0]:e}function gt(t){var e=N[t],n=P.getNearbySteps(e),i=C[t],o=n.thisStep.step,s=null;if(r.snap)return[i-n.stepBefore.startValue||null,n.stepAfter.startValue-i||null];!1!==o&&i+o>n.stepAfter.startValue&&(o=n.stepAfter.startValue-i),s=i>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&i-n.stepBefore.highestStep,100===e?o=null:0===e&&(s=null);var a=P.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,o]}f(b=w,r.cssClasses.target),0===r.dir?f(b,r.cssClasses.ltr):f(b,r.cssClasses.rtl),0===r.ort?f(b,r.cssClasses.horizontal):f(b,r.cssClasses.vertical),f(b,"rtl"===getComputedStyle(b).direction?r.cssClasses.textDirectionRtl:r.cssClasses.textDirectionLtr),a=L(b,r.cssClasses.base),function(t,e){var n=L(e,r.cssClasses.connects);p=[],(m=[]).push(j(n,t[0]));for(var i=0;i<r.handles;i++)p.push(T(e,i)),V[i]=i,m.push(j(n,t[i+1]))}(r.connect,a),(S=r.events).fixed||p.forEach((function(t,e){G(x.start,t.children[0],tt,{handleNumbers:[e]})})),S.tap&&G(x.start,a,et,{}),S.hover&&G(x.move,a,rt,{hover:!0}),S.drag&&m.forEach((function(t,e){if(!1!==t&&0!==e&&e!==m.length-1){var n=p[e-1],i=p[e],o=[t],s=[n,i],a=[e-1,e];f(t,r.cssClasses.draggable),S.fixed&&(o.push(n.children[0]),o.push(i.children[0])),S.dragAll&&(s=p,a=V),o.forEach((function(e){G(x.start,e,tt,{handles:s,handleNumbers:a,connect:t})}))}})),ht(r.start),r.pips&&I(r.pips),r.tooltips&&_(),it("update"+E.aria),nt("update"+E.aria,(function(t,e,n,i,o){V.forEach((function(t){var e=p[t],i=st(N,t,0,!0,!0,!0),s=st(N,t,100,!0,!0,!0),a=o[t],l=String(r.ariaFormat.to(n[t]));i=P.fromStepping(i).toFixed(1),s=P.fromStepping(s).toFixed(1),a=P.fromStepping(a).toFixed(1),e.children[0].setAttribute("aria-valuemin",i),e.children[0].setAttribute("aria-valuemax",s),e.children[0].setAttribute("aria-valuenow",a),e.children[0].setAttribute("aria-valuetext",l)}))}));var vt={destroy:function(){for(it(E.aria),it(E.tooltips),Object.keys(r.cssClasses).forEach((function(t){d(w,r.cssClasses[t])}));w.firstChild;)w.removeChild(w.firstChild);delete w.noUiSlider},steps:function(){return V.map(gt)},on:nt,off:it,get:mt,set:ht,setHandle:function(t,e,r,n){if(!((t=Number(t))>=0&&t<V.length))throw new Error("noUiSlider: invalid handle number, got: "+t);pt(t,dt(e,t),!0,!0,n),ot("update",t),r&&ot("set",t)},reset:function(t){ht(r.start,t)},disable:function(t){null!=t?(p[t].setAttribute("disabled",""),p[t].handle.removeAttribute("tabindex")):(w.setAttribute("disabled",""),p.forEach((function(t){t.handle.removeAttribute("tabindex")})))},enable:function(t){null!=t?(p[t].removeAttribute("disabled"),p[t].handle.setAttribute("tabindex","0")):(w.removeAttribute("disabled"),p.forEach((function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")})))},__moveHandles:function(t,e,r){lt(t,e,N,r)},options:n,updateOptions:function(t,e){var i=mt(),s=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];s.forEach((function(e){void 0!==t[e]&&(n[e]=t[e])}));var a=$(n);s.forEach((function(e){void 0!==t[e]&&(r[e]=a[e])})),P=a.spectrum,r.margin=a.margin,r.limit=a.limit,r.padding=a.padding,r.pips?I(r.pips):Y(),r.tooltips?_():R(),N=[],ht(o(t.start)?t.start:i,e)},target:w,removePips:Y,removeTooltips:R,getPositions:function(){return N.slice()},getTooltips:function(){return v},getOrigins:function(){return p},pips:I};return vt}function J(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var r=G(t,$(e),e);return t.noUiSlider=r,r}var K={__spectrum:x,cssClasses:w,create:J};t.create=J,t.cssClasses=w,t.default=K,Object.defineProperty(t,"__esModule",{value:!0})}));



Colors = [];
var formatter = {
    to:function(input){
        return Math.trunc( input );
    }
};

$(document).ready(function() {

    var scriptBaseUrl = new URL($('head script')[1].src);
    $('head')
        //.append('<link rel="stylesheet" href="' + scriptBaseUrl.origin + '/wheelcolorpicker.css" type="text/css" />')
        //.append('<link rel="stylesheet" href="' + scriptBaseUrl.origin + '/nouislider.css" type="text/css" />')
        .append('<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" type="text/css" />');

    $.when(
        //$.getScript( scriptBaseUrl.origin + "/jquery.wheelcolorpicker.min.js" ),
        //$.getScript( scriptBaseUrl.origin + "/nouislider.js" ),
        $.getScript( "https://code.jquery.com/ui/1.13.2/jquery-ui.js" ),
         
        $.Deferred(function( deferred ){
            $( deferred.resolve );
        })
    ).done(function(){
        init();
        getConfig();
        
        //place your code here, the scripts are all loaded
        
    }); 
});


function initTabs (id){
    var el = $('#' + id);
    var ancs = el.find('> ul > li > a').on('click', function(){
        var lnk = $(this);
        ancs.removeClass('selected');
        lnk.addClass('selected');
        el.find('div').hide();
        el.find(lnk.attr('rel')).show();
    });

    $(ancs[0]).click();    
}

function init(){
    var body = $('body');
    body.empty();

    var elTabs = $('<div id="tabs"></div>')
                    .append('<ul>' + 
                        '<li><a rel="#tab-1">Time</a></li>' +
                        '<li><a rel="#tab-2">Colors</a></li>' +
                        '<li><a rel="#tab-3">Brightness</a></li>' +
                    '</ul>')
                    .append('<div id="tab-1">Time setting</div>')
                    .append('<div id="tab-2">Color setting</div>')
                    .append('<div id="tab-3">Brightness setting</div>');



    var elTime = $('<fieldset><legend>Time</legend></fieldset>')
            .append('<div>Clock Time: <span id="spnClockTime"></span><div>')
            .append('<div>New Time: <input type="datetime-local" id="newTime">') ;

    var elColor = $('<fieldset><legend>Colors</legend></fieldset>')
            .append('<div>Random Color: <input type="checkbox" id="chkRandomColor" ></div>')
            .append('<div id="divColors"></div>')            
            .append('<div id="divSelectedColors">Selected Colors: <div class="color"><input type="text" id="hourColor" ></div><div class="color"><input type="text" id="minColor" ></div></div>')
            .append('<div>Box Color: <div class="color"><input type="text" id="boxColor" ></div></div>')
            .append('<button id="btnSetColor">Set Color</button>');

    var elBrightness = $('<fieldset><legend>Brightness</legend></fieldset>')
            .append('<div>Sensor Value: <span id="spanSensorValue"></span></div>')
            .append('<div>Clock Brightness: <span id="spanClockBrightValue"></span></div>')
            .append('<div>Box Brightness: <span id="spanBoxBrightValue"></span><hr /></div>')
            .append('<div>Auto Brightness: <input type="checkbox" id="chkAutoBright" ><br /><br /></div>')
            .append('<div id="divAutoBright">' + 
                '<div>Sensor Range</div><div class="slider-range" id="sliderSensorRange"></div>' + 
                '<div>Clock Brightness</div><div class="slider-range" id="sliderClockRange"></div>' + 
                '<div>Box Brightness</div><div class="slider-range" id="sliderBoxRange"></div>' +                  
            '</div>')
            .append('<div id="divManualBright">' + 
                    //'<p>Clock Brightness</p><input id="sliderClock" type="range" min="1" max="200">' +
                    //'<p>Box Brightness</p><input id="sliderBox" type="range" min="1" max="200">' +
                    '<div>Clock Brightness</div><div><div class="slider-range" id="sliderClock"></div></div>' + 
                    '<div>Box Brightness</div><div><div class="slider-range" id="sliderBox"></div></div>' + 

                '</div>')
            .append('<br /><div>Blink Box: <input type="checkbox" id="chkBoxBlink" ></div>')
            .append('<button id="btnSetBrightness">Set Brightness</button>');


    var el1 = $('<div class="buttons"><button id="btnRefresh">Refresh</button> ' + 
                     '<button id="btnSaveCfg">Save Config</button></div>' + 
                '</div>');

    body.append(elTabs);
    body.append(elTime);
    body.append(elColor);
    body.append(elBrightness);
    body.append(el1);


    initTabs('tabs');

    elColor.find('.color input')
        .wheelColorPicker({preview :true});
 

    noUiSlider.create($('#sliderSensorRange')[0], {
        start:[200,700],
        tooltips:[formatter, formatter],
        connect:true,
        step: 1,
        range:{
            min:0,
            max: 1024
        }
    });

    noUiSlider.create($('#sliderClockRange')[0], {
        start:[10,50,150,190],
        tooltips:[formatter, formatter, formatter, formatter],
        connect:true,
        step: 1,
        range:{
            min:1,
            max: 200
        }
    });
    noUiSlider.create($('#sliderBoxRange')[0], {
        start:[10,50,150,190],
        tooltips:[formatter, formatter, formatter, formatter],
        connect:true,
        step: 1,
        range:{
            min:1,
            max: 200
        }
    });


    noUiSlider.create($('#sliderClock')[0], {
        start:[10],
        tooltips:[formatter],
        connect:'lower',
        step: 1,
        range:{
            min:1,
            max: 200
        }
    });

    noUiSlider.create($('#sliderBox')[0], {
        start:[10],
        tooltips:[formatter],
        connect:'lower',
        step: 1,
        range:{
            min:1,
            max: 200
        }
    });

    /*

    elBrightness.find('.slider-range').slider({
        range:true,
        min: 10,
        max: 200,
        values: [50,150]
    });
    elBrightness.find('#sliderSensorRange').slider('option', 'min', 0);
    elBrightness.find('#sliderSensorRange').slider('option', 'max', 1024);
*/
    // elBrightness.find('.slider').slider({       
    //     min: 0,
    //     max: 200 ,
    //     value: 50
    // });
    
    
    var sec = 0;
    $('#newTime').on('change', function(){
        var newTime = $('#newTime').val();
        if(!newTime)
            return;

        newTime = new Date(newTime);
        
        $.ajax({
            method:'GET',
            url:'/setTime',
            data:{
                year: newTime.getFullYear().toString().substr(-2),
                month: newTime.getMonth() + 1,
                day: newTime.getDate(),
                hour: newTime.getHours(),
                min: newTime.getMinutes(),
                sec: sec++
            }
         })
        .done(function(m){
            //alert(m);
            getConfig();
        });
    });
    

    $('#btnSetColor').on('click', function(){
        var data = {};
        data.cmr = $('#chkRandomColor').prop('checked');
        $('#divColors input').each(function(i,el){
            data['c' + i] = Number('0x' + el.value);
        });        
        data['cs0'] = Number('0x' + $('#hourColor').val());
        data['cs1'] = Number('0x' + $('#minColor').val());
        data.bc = Number('0x' + $('#boxColor').val());

        $.ajax({
            method:'GET',
            url:'/setColors',
            data:data
         })
        .done(function(m){
            //alert(m);
            getConfig();
        });
    });


    
    $("#btnSetBrightness").on('click', function(){
        var data = {};
        data.ba = $('#chkAutoBright').prop('checked');
        data.bb = $('#chkBoxBlink').prop('checked');
        data.bv = $('#sliderClock')[0].noUiSlider.get(true);
        data.bbv = $('#sliderBox')[0].noUiSlider.get(true);

   
        var svr = $('#sliderSensorRange')[0].noUiSlider.get(true);
        data['svr0'] = 0;
        data['svr1'] = svr[0];
        data['svr2'] = svr[1];
        data['svr3'] = 1024;
        

        //var bvr = $('#sliderClockRange').slider('values');
        var bvr = $('#sliderClockRange')[0].noUiSlider.get(true);
        data['bvr0'] = bvr[0];
        data['bvr1'] = bvr[1];
        data['bvr2'] = bvr[2];
        data['bvr3'] = bvr[3];

        var bbvr = $('#sliderBoxRange')[0].noUiSlider.get(true);
        data['bbvr0'] = bbvr[0];
        data['bbvr1'] = bbvr[1];
        data['bbvr2'] = bbvr[2];
        data['bbvr3'] = bbvr[3];
 
        $.ajax({
            method:'GET',
            url:'/setBrightness',
            data:data
         })
        .done(function(m){
            //getConfig();
        });
    });

    $('#chkRandomColor').on('change', function(c){
        var checked = $(this).prop('checked');
        if(checked){
            $('#divSelectedColors').hide();
            $('#divColors').show();
        }
        else{
            $('#divSelectedColors').show();
            $('#divColors').hide();
        }
    });

    $('#chkAutoBright').on('change', function(c){
        var checked = $(this).prop('checked');
        if(checked){
            $('#divAutoBright').show();
            $('#divManualBright').hide();
            
        }
        else{
            $('#divAutoBright').hide();
            $('#divManualBright').show();
        }
    });

    $('#btnRefresh').on('click',function(){
        getConfig();
    });

    $('#btnSaveCfg').on('click',function(){
        $.ajax({
            method:'GET',
            url:'/saveConfig' 
        });
    });
 
}

function getConfig(){
    $.ajax({
        method:'GET',
        url:'/getDetails' 
    })
    .done(updateConfig);
}

function updateConfig(msg) {  
    msg = {
        "sensorValue":msg.asv,
        "clockTime":msg.ct,
        "brightnessAuto":msg.ba,
        "sensorValueRange":msg.svr,
        "brightnessValueRange":msg.bvr,
        "boxBrightnessValueRange":msg.bbvr,
        "brightnessValue":msg.bv,
        "boxBrightnessValue":msg.bbv,
        "boxBlink":msg.bb,
        "boxColor" : msg.bc,
        "colorModeRandom":msg.cmr,
        "colors":msg.c,
        "colorSelection":msg.cs
    };

    
    $('#spnClockTime').text(msg.clockTime);
     
    $('#chkRandomColor').prop('checked', msg.colorModeRandom).change();
    
    $('#hourColor').wheelColorPicker('setValue',getColorString(msg.colorSelection[0]));
    $('#minColor').wheelColorPicker('setValue',getColorString(msg.colorSelection[1]));
    $('#boxColor').wheelColorPicker('setValue',getColorString(msg.boxColor));
    
    $('#chkAutoBright').prop('checked', msg.brightnessAuto).change();
    $('#chkBoxBlink').prop('checked', msg.boxBlink).change();
    
    $( "#sliderSensorRange" )[0].noUiSlider.set([msg.sensorValueRange[1], msg.sensorValueRange[2]]);
    $( "#sliderClockRange" )[0].noUiSlider.set(msg.brightnessValueRange);
    $( "#sliderBoxRange" )[0].noUiSlider.set(msg.boxBrightnessValueRange);
    
    $('#spanSensorValue').text(msg.sensorValue);
    $('#spanClockBrightValue').text(msg.brightnessValue);
    $('#spanBoxBrightValue').text(msg.boxBrightnessValue);
    
    //$( "#sliderClock" ).val(  msg.brightnessValue);
    //$( "#sliderBox" ).val(  msg.boxBrightnessValue);

    $( "#sliderClock" )[0].noUiSlider.set(  msg.brightnessValue);
    $( "#sliderBox" )[0].noUiSlider.set(  msg.boxBrightnessValue);

    Colors = msg.colors;
    var divColor = $("#divColors");
    divColor.empty();
    for(var c in Colors){
        var clr = getColorString(Colors[c]);
        var el = $('<div class="color"><input type="text" ></div>');
        divColor.append(el);
        el.find('input')
            .wheelColorPicker({preview :true})
            .wheelColorPicker('setValue',  clr );         
    } 
    
}

function getColorString(num){
    num = num || 0;
    return ("000000" + num.toString(16)).slice(-6);
}
 
