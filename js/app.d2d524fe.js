(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/WYSFIYAU/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("85ec"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("4160"),i("d81d"),i("fb6a"),i("ac1f"),i("1276"),i("159b"),i("e260"),i("e6cf"),i("cca6"),i("a79d");for(var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h2",[t._v("WYSFIYAU Editor")]),i("p",[t._v("Why You Steal Flowers Is You Are Ugly Editor (for Animal Crossing)")]),i("Splitter",{on:{splited:t.splited}}),t._l(t.editors,(function(t,e){return i("Editor",{key:t.key,attrs:{idx:e,init:t}})})),t._m(0)],2)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-container"},[i("a",{staticClass:"with-icon",attrs:{href:"https://github.com/aligo/WYSFIYAU",target:"_blank",rel:"noopener"}},[i("i",{staticClass:"nes-icon github"}),i("span",[t._v("aligo/WYSFIYAU")])])])}],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"nes-container with-title"},[i("h3",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"canvas-container"},[i("canvas",{ref:"canvas"})])]),i("div",{ref:"qrcode",staticClass:"col"})]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"nes-field"},[i("label",[t._v("Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"nes-input",domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),i("div",{staticClass:"col tooltip"},[i("div",{staticClass:"tooltiptext"},[t._v("blank for transparency")]),i("div",{staticClass:"nes-field"},[i("label",[t._v("Background")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bg,expression:"bg"}],staticClass:"nes-input",domProps:{value:t.bg},on:{input:function(e){e.target.composing||(t.bg=e.target.value)}}})])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"nes-field"},[i("label",[t._v("Creator")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.creator,expression:"creator"}],staticClass:"nes-input",domProps:{value:t.creator},on:{input:function(e){e.target.composing||(t.creator=e.target.value)}}})])])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"nes-field"},[i("label",[t._v("Town")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.town,expression:"town"}],staticClass:"nes-input",domProps:{value:t.town},on:{input:function(e){e.target.composing||(t.town=e.target.value)}}})])])])])]),i("div",{staticClass:"nes-table-responsive"},[i("table",{staticClass:"nes-table is-bordered"},[t._m(0),i("tbody",[t._l(t.items,(function(e,s){return i("tr",{key:s},[e.i?[i("td",[i("img",{staticClass:"preview-img",attrs:{src:e.i.src}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.width,expression:"item.width"}],staticClass:"nes-input",domProps:{value:e.width},on:{input:function(i){i.target.composing||t.$set(e,"width",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.height,expression:"item.height"}],staticClass:"nes-input",domProps:{value:e.height},on:{input:function(i){i.target.composing||t.$set(e,"height",i.target.value)}}})])]:[i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.t,expression:"item.t"}],staticClass:"nes-input",domProps:{value:e.t},on:{input:function(i){i.target.composing||t.$set(e,"t",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.fs,expression:"item.fs"}],staticClass:"nes-input",domProps:{value:e.fs},on:{input:function(i){i.target.composing||t.$set(e,"fs",i.target.value)}}})]),i("td",[i("div",{staticClass:"tooltip"},[i("div",{staticClass:"tooltiptext"},[t._v("blank for transparency")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.c,expression:"item.c"}],staticClass:"nes-input",domProps:{value:e.c},on:{input:function(i){i.target.composing||t.$set(e,"c",i.target.value)}}})])])],i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.x,expression:"item.x"}],staticClass:"nes-input",domProps:{value:e.x},on:{input:function(i){i.target.composing||t.$set(e,"x",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.y,expression:"item.y"}],staticClass:"nes-input",domProps:{value:e.y},on:{input:function(i){i.target.composing||t.$set(e,"y",i.target.value)}}})]),i("td",[i("button",{staticClass:"nes-btn",on:{click:function(e){return t.moveDown(s)}}},[i("span",{staticClass:"rz90"},[t._v(">")])])]),i("td",[i("button",{staticClass:"nes-btn is-error",on:{click:function(e){return t.remove(s)}}},[t._v("X")])])],2)})),i("tr",[i("td",[i("div",{staticClass:"row mb-0"},[i("div",{staticClass:"col nes-field"},[i("label",{staticClass:"nes-btn is-success",on:{click:t.addText}},[t._v("Txt")])]),i("div",{staticClass:"col nes-field"},[i("label",{staticClass:"nes-btn is-success",attrs:{for:"add-img-"+t.idx}},[t._v("Img")]),i("input",{staticClass:"hide",attrs:{accept:".jpg,.png",type:"file",id:"add-img-"+t.idx},on:{change:t.addImage}})])])]),i("td",{attrs:{colspan:"6"}},[i("div",{staticClass:"nes-field is-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.autoText,expression:"autoText"}],staticClass:"nes-input",attrs:{placeholder:"...auto fit text..."},domProps:{value:t.autoText},on:{input:function(e){e.target.composing||(t.autoText=e.target.value)}}}),i("button",{staticClass:"nes-btn is-primary lt-input",on:{click:t.autoFitText}},[t._v("Fit")])])])])],2)])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("td",[t._v("Text/Image")]),i("td",{attrs:{width:"18%"}},[i("small",[t._v("Size/Width")])]),i("td",{attrs:{width:"18%"}},[i("small",[t._v("Color/Height")])]),i("td",{attrs:{width:"12%"}},[t._v("x")]),i("td",{attrs:{width:"12%"}},[t._v("y")]),i("td",{attrs:{width:"6%"}},[t._v("z")]),i("td",{attrs:{width:"6%"}})])])}],c=(i("99af"),i("a434"),i("a9e3"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0"),i("2b3d"),i("e0d3")),l=i.n(c),d=(i("ace4"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),i("d4ec")),u=i("bee2"),p=i("2caf"),h=i("262e"),v=i("9072"),f=function(t){Object(h["a"])(i,t);var e=Object(p["a"])(i);function i(){var t;Object(d["a"])(this,i);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return t=e.call.apply(e,[this].concat(a)),t.initDefaults(),t}return Object(u["a"])(i,[{key:"initDefaults",value:function(){this.setUint16(86,12569),this[103]=204,this[104]=10,this[105]=9}},{key:"setUint16",value:function(t,e){this[t]=255&e,this[t+1]=e>>8}},{key:"setStr",value:function(t,e,i){for(var s=0;s<i/2;s++)s>=e.length?this.setUint16(t+2*s,0,!0):this.setUint16(t+2*s,e.charCodeAt(s),!0)}},{key:"title",set:function(t){this.setStr(0,t,40),this[40]=0,this[41]=0}},{key:"creatorId",set:function(t){this.setUint16(42,t)}},{key:"creator",set:function(t){this.setStr(44,t,20),this[62]=0,this[63]=0}},{key:"townId",set:function(t){this.setUint16(64,t)}},{key:"town",set:function(t){this.setStr(66,t,20),this[84]=0,this[85]=0}},{key:"palettes",set:function(t){for(var e=0;e<t.length;e++)this[88+e]=t[e]}},{key:"pixels",set:function(t){for(var e=108,i=0,s=e;i<t.length;s++)this[s]=(15&t[i])+((15&t[i+1])<<4),i+=2}}]),i}(Object(v["a"])(Uint8Array)),m=(i("c975"),i("771e")),g=i.n(m),C=["#FFEEFF","#FF99AA","#EE5599","#FF66AA","#FF0066","#BB4477","#CC0055","#990033","#552233","","","","","","","#FFFFFF","#FFBBCC","#FF7777","#DD3210","#FF5544","#FF0000","#CC6666","#BB4444","#BB0000","#882222","","","","","","","#EEEEEE","#DDCDBB","#FFCD66","#DD6622","#FFAA22","#FF6600","#BB8855","#DD4400","#BB4400","#663210","","","","","","","#DDDDDD","#FFEEDD","#FFDDCC","#FFCDAA","#FFBB88","#FFAA88","#DD8866","#BB6644","#995533","#884422","","","","","","","#CCCDCC","#FFCDFF","#EE88FF","#CC66DD","#BB88CC","#CC00FF","#996699","#8800AA","#550077","#330044","","","","","","","#BBBBBB","#FFBBFF","#FF99FF","#DD22BB","#FF55EE","#FF00CC","#885577","#BB0099","#880066","#550044","","","","","","","#AAAAAA","#DDBB99","#CCAA77","#774433","#AA7744","#993200","#773222","#552200","#331000","#221000","","","","","","","#999999","#FFFFCC","#FFFF77","#DDDD22","#FFFF00","#FFDD00","#CCAA00","#999900","#887700","#555500","","","","","","","#888888","#DDBBFF","#BB99EE","#6632CC","#9955FF","#6600FF","#554488","#440099","#220066","#221033","","","","","","","#777777","#BBBBFF","#8899FF","#3332AA","#3355EE","#0000FF","#333288","#0000AA","#101066","#000022","","","","","","","#666666","#99EEBB","#66CD77","#226610","#44AA33","#008833","#557755","#225500","#103222","#002210","","","","","","","#555555","#DDFFBB","#CCFF88","#88AA55","#AADD88","#88FF00","#AABB99","#66BB00","#559900","#336600","","","","","","","#444444","#BBDDFF","#77CDFF","#335599","#6699FF","#1077FF","#4477AA","#224477","#002277","#001044","","","","","","","#333233","#AAFFFF","#55FFFF","#0088BB","#55BBCC","#00CDFF","#4499AA","#006688","#004455","#002233","","","","","","","#222222","#CCFFEE","#AAEEDD","#33CDAA","#55EEBB","#00FFCC","#77AAAA","#00AA99","#008877","#004433","","","","","","","#000000","#AAFFAA","#77FF77","#66DD44","#00FF00","#22DD22","#55BB55","#00BB00","#008800","#224422","","","","","","",""],F=[],b=0;b<256;b++){var w=C[b];if(w.length<7)F.push(null);else{var x=[parseInt(w.substr(1,2),16),parseInt(w.substr(3,2),16),parseInt(w.substr(5,2),16)];F.push(x)}}var A=function(t){for(var e=195075,i=0,s=0;s<256;s++){var a=F[s];if(null!==a){var n=a[0]-t[0],r=a[1]-t[1],o=a[2]-t[2],c=n*n+r*r+o*o;if(c<e){if(!c)return s;e=c,i=s}}}return i},y=function(){function t(e,i){Object(d["a"])(this,t),this.ctx=e,this.edge=i}return Object(u["a"])(t,[{key:"autoFitText",value:function(t,e){for(var i=[],s=Math.ceil(Math.sqrt(t.length)),a=Math.floor((this.edge-2)/s),n=Math.ceil((this.edge-s*a)/2),r=0;r<s;r++){var o=t.slice(r*s,(r+1)*s);o.length>0&&i.push({t:o,c:e,fs:a,x:n,y:n+2+r*a})}return i}},{key:"renderContext",value:function(t){t.bg&&t.bg.length>0?(this.ctx.fillStyle=t.bg,this.ctx.fillRect(0,0,this.edge,this.edge)):this.ctx.clearRect(0,0,this.edge,this.edge);var e=this.ctx.font.split(" ");this.ctx.textBaseline="top";for(var i=0;i<t.items.length;i++){var s=t.items[i];s.i?this.ctx.drawImage(s.i,s.x,s.y,s.width,s.height):(s.c&&s.c.length>0?this.ctx.globalCompositeOperation="source-over":this.ctx.globalCompositeOperation="destination-out",this.ctx.font=s.fs+"px "+e[e.length-1],this.ctx.fillStyle=s.c,this.ctx.fillText(s.t,s.x,s.y))}}},{key:"readContext",value:function(){for(var t=[],e=0;e<this.edge;e++)for(var i=0;i<this.edge;i++){var s=this.ctx.getImageData(i,e,1,1).data;s[3]<100?t.push(-1):t.push([s[0],s[1],s[2]])}var a=g()(t,16),n=a.palette();this.palettes=n.map((function(t){return A(t)})),this.pixels=t.map((function(t){return-1==t?15:n.indexOf(a.map(t))}))}}]),t}();l.a.stringToBytes=function(t){return t};var B={props:{idx:Number,init:Object,edge:{type:Number,default:32},previewRatio:{type:Number,default:6}},data:function(){return{bg:this.init.bg,items:this.init.items,title:this.init.title||"no title",creator:"aligo",creatorId:60598,town:"大岛",townId:50500,autoText:""}},methods:{autoFitText:function(){if(this.autoText.length>0){var t=this.items[0].c;this.items=this.acCanvas.autoFitText(this.autoText,t)}},addText:function(){this.items.push({})},addImage:function(t){var e=t.target.files[0],i=window.URL||window.webkitURL,s=i.createObjectURL(e),a=new Image,n=this;a.src=s,a.onload=function(){var t=a.naturalWidth,e=a.naturalHeight,i={i:a,x:0,y:0};t>e?(i.width=n.edge,i.height=Math.floor(n.edge*e/t)):(i.height=n.edge,i.width=Math.floor(n.edge*t/e)),n.items.push(i)}},remove:function(t){this.items.splice(t,1)},moveDown:function(t){this.items=this.items.concat(this.items.splice(t,1))},renderCanvas:function(){this.acCanvas.renderContext(this)},renderQR:function(){var t=this,e=new f(620);["title","creator","creatorId","town","townId"].forEach((function(i){e[i]=t[i]})),this.acCanvas.readContext(),e.palettes=this.acCanvas.palettes,e.pixels=this.acCanvas.pixels;var i=l()(0,"M");i.addData(e),i.make(),this.$refs.qrcode.innerHTML=i.createImgTag()},renderAll:function(){this.renderCanvas(),this.renderQR()}},mounted:function(){var t=this.$refs.canvas;t.width=this.edge,t.height=this.edge,t.style.width=(this.edge*this.previewRatio).toString()+"px",t.style.height=(this.edge*this.previewRatio).toString()+"px",this.ctx=t.getContext("2d"),this.acCanvas=new y(this.ctx,this.edge),this.renderAll()},updated:function(){this.renderAll()}},D=B,_=i("2877"),E=Object(_["a"])(D,r,o,!1,null,null,null),k=E.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"nes-container with-title"},[i("h3",{staticClass:"title"},[t._v("Tiles Splitter")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"nes-field mb-1"},[i("label",{staticClass:"nes-btn is-primary",attrs:{for:"select-img"}},[t._v("Select an Image")]),i("input",{staticClass:"hide",attrs:{accept:".jpg,.png",type:"file",id:"select-img"},on:{change:t.selectImage}})]),t.img?i("div",{staticClass:"nes-container is-rounded"},[i("img",{staticClass:"preview-img",attrs:{src:t.img.src}})]):t._e()]),i("div",{staticClass:"col"},[t.img?[i("div",{staticClass:"nes-field"},[i("label",{attrs:{for:"split-pieces"}},[t._v("Split horizontally into")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pieces,expression:"pieces"}],staticClass:"nes-input",attrs:{id:"split-pieces"},domProps:{value:t.pieces},on:{change:t.updatePieces,input:function(e){e.target.composing||(t.pieces=e.target.value)}}})]),i("div",{staticClass:"nes-field mt-1"},[i("label",{staticClass:"nes-btn is-success lt-input",on:{click:t.split}},[t._v("Split into "+t._s(this.pieces)+" x "+t._s(this.vPieces)+"!")])])]:t._e()],2)])])},O=[],P={props:{edge:{type:Number,default:32}},data:function(){return{img:!1,pieces:2,vPieces:2}},methods:{selectImage:function(t){var e=t.target.files[0],i=window.URL||window.webkitURL,s=i.createObjectURL(e),a=new Image,n=this;a.src=s,a.onload=function(){n.img=a,n.updatePieces()}},updatePieces:function(){this.piecesWidth=this.edge*this.pieces,this.piecesHeight=Math.ceil(this.piecesWidth*this.img.naturalHeight/this.img.naturalWidth),this.vPieces=Math.ceil(this.piecesHeight/this.edge)},split:function(){for(var t=[],e=0;e<this.vPieces;e++)for(var i=0;i<this.pieces;i++){var s={i:this.img,width:this.piecesWidth,height:this.piecesHeight};s.x=-i*this.edge,s.y=-e*this.edge,t.push({key:Math.random(),title:"tile"+i+","+e,items:[s]})}this.$emit("splited",t)}}},S=P,T=Object(_["a"])(S,I,O,!1,null,null,null),j=T.exports,U="#ff0000",N="#ffffff",M={name:"WYSFIYAU",components:{Editor:k,Splitter:j},data:function(){return{editors:[{key:Math.random(),bg:U,items:[{t:"你丑",fs:12,x:4,y:5,c:N},{t:"你偷花",fs:11,x:0,y:18,c:N}]}]}},methods:{splited:function(t){while(this.editors.shift());this.editors=t}}},R=M,$=(i("034f"),Object(_["a"])(R,a,n,!1,null,null,null)),W=$.exports,Y={},H=(window.location.href+"?").split("?");if(H[1].split("&").forEach((function(t){t=(t+"=").split("=").map(decodeURIComponent),t[0].length&&(Y[t[0]]=t[1])})),!Y.t||Y.t<Date.now()-6e5){Y.t=Date.now();var L=H[0]+"?";for(var z in Y)L=L+encodeURIComponent(z)+"="+encodeURIComponent(Y[z])+"&";window.location.href=L.slice(0,-1)}else s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(W)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.d2d524fe.js.map