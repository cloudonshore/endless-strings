webpackJsonp([0],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n,i){var a={};return"all"!=t&&(a.harmonic_key_type=t),"all"!=n&&(a.orchestral_preset=n),"all"!=i&&(a.tempo_classification=i),u["default"].isEmpty(a)?e:u["default"].filter(e,a)}n(2);var o=n(6),r=i(o),s=n(163),f=i(s),c=n(164),u=i(c),d=n(166),p=i(d),g=n(176),h=i(g),m=n(168),y=i(m);window._=u["default"];var v=r["default"].createClass({displayName:"Header",render:function(){return r["default"].createElement("div",{className:"header"},r["default"].createElement("div",{className:"header-left"},r["default"].createElement("img",{className:"title-image",src:n(174)})),r["default"].createElement("div",{className:"header-right"},r["default"].createElement("img",{src:n(175)})))}}),b=100,x=0,w=!1,E={mood:[{all:"All"},{Major:"😊"},{Minor:"😔"}],orcestration:[{all:"All"},{"Strings Concertino":"Strings Concertino"},{"Strings Tutti":"Strings Tutti"},{"Strings Pizzicato":"Strings Pizzicato"}],tempo:[{all:"All"},{Allegro:"Slow"},{Lento:"Medium"},{Presto:"Fast"}]},k=r["default"].createClass({displayName:"App",getInitialState:function(){return{songs:[],mood:"all",orcestration:"all",tempo:"all"}},componentDidMount:function(){var e=this;this.fetchSongs(),window.onscroll=u["default"].throttle(function(){var t=document.documentElement,n=(window.pageYOffset||t.scrollTop)-(t.clientTop||0),i=void 0!==document.height?document.height:document.body.offsetHeight;2e3>i-n&&(x+=b,w||e.fetchSongs())},100)},fetchSongs:function(){var e=this;y["default"].get("http://endless-strings.com/data/songs").query({limit:b,offset:x}).end(function(t,n){var i=n.body.map(function(e){return e.playing=!1,e});0==i.length?w=!0:e.setState({songs:e.state.songs.concat(i)})})},playSong:function(e){var t=this.state.songs,n=u["default"].find(t,{_id:e});n.playing?n.playing=!1:(u["default"].each(t,function(e){e.playing=!1}),n.playing=!0),this.forceUpdate()},changeFilter:function(e,t){this.setState(a({},e,t))},playNext:function(e){var t=this.state.songs,n=u["default"].findIndex(t,{_id:e});this.playSong(t[n+1]._id)},playPrevious:function(e){var t=this.state.songs,n=u["default"].findIndex(t,{_id:e});0!=n&&this.playSong(t[n-1]._id)},render:function(){var e=this.playNext,t=this.playSong,n=this.playPrevious,i=this.changeFilter,a=this.state,o=a.songs,s=a.mood,f=a.orcestration,c=a.tempo,d=l(o,s,f,c),g=u["default"].find(o,{playing:!0});window.songs=o;var m=null;return r["default"].createElement("div",null,r["default"].createElement(v,null),r["default"].createElement(p["default"],{playNext:e,playSong:t,songs:d}),r["default"].createElement(h["default"],{playNext:e,playPrevious:n,currentlyPlaying:m,playSong:t,mood:s,orcestration:f,tempo:c,changeFilter:i,playingSong:g,filters:E}))}}),S=document.getElementById("container"),N=r["default"].createElement(k,null);f["default"].render(N,S)},2:function(e,t,n){var i=n(3);"string"==typeof i&&(i=[[e.id,i,""]]);n(5)(i,{});i.locals&&(e.exports=i.locals)},3:function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Tangerine);",""]),t.push([e.id,'.header{margin:30px}.header>div{display:inline-block}.header img{width:100%}.title-image{opacity:.7;margin-top:20px}.header-left{max-width:60%;width:600px}.header-right{max-width:35%;width:400px;float:right}.playlist{margin:130px auto;max-width:800px}.download-link,.download-link:active,download-link:visited{color:#333;cursor:pointer}.download-link:hover{color:#777}.song{margin:5px;padding:10px;border-bottom:1px solid #ccc}.song .info{cursor:pointer}.song .info .icon{font-size:18px;margin:0 7px;color:#555}.song .info .song-title{color:#555;font-family:Tangerine;font-size:45px;vertical-align:middle}.song .p-bar{cursor:pointer;-webkit-transition:all .7s linear;-moz-transition:all .7s linear;-ms-transition:all .7s linear;-o-transition:all .7s linear;width:99%;height:0;background-color:#ddd;margin:0 auto}.song .p-bar .inner-p-bar{width:0;-webkit-transition:all .1s linear;-moz-transition:all .1s linear;-ms-transition:all .1s linear;-o-transition:all .1s linear;background-color:#555;height:100%}.song .p-bar.playing{height:12px;margin:8px auto 14px}.footer{position:fixed;bottom:0;width:100%;background-color:#fff;border-top:1px solid #ccc}.footer .global-info{-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;height:0;overflow:hidden}.footer .global-info.playing{height:75px}.footer .global-info .controls-title{color:#555;font-family:Tangerine;font-size:39px;display:inline-block}.footer .global-info .play-controls{font-size:30px;display:inline-block;margin:30px}.footer .global-info .play-controls span{margin:0 10px;cursor:pointer}.footer .global-info .play-controls span:hover{color:#777}.footer .global-info .play-controls span:active{color:#333}.footer .filters{max-width:1100px;width:100%;margin:20px}.footer .filters .filter{font-weight:500;font-family:Tangerine;display:inline-block;margin:0 10px}.footer .filters .filter .filter-title{display:inline-block;font-size:40px}.footer .filters .filter .filter-values{display:inline-block}.footer .filters .filter .filter-values .filter-value{display:inline-block;font-size:23px;margin:0 7px;cursor:pointer;position:relative}.footer .filters .filter .filter-values .filter-value:before{content:"";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:#777;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s}.footer .filters .filter .filter-values .filter-value:hover:before{background-color:#777;visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}.footer .filters .filter .filter-values .filter-value.active:before{background-color:#000;visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}',""])},4:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var l=this[a][0];"number"==typeof l&&(i[l]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},5:function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],a=p[i.id];if(a){a.refs++;for(var l=0;l<a.parts.length;l++)a.parts[l](i.parts[l]);for(;l<i.parts.length;l++)a.parts.push(f(i.parts[l],t))}else{for(var o=[],l=0;l<i.parts.length;l++)o.push(f(i.parts[l],t));p[i.id]={id:i.id,refs:1,parts:o}}}}function a(e){for(var t=[],n={},i=0;i<e.length;i++){var a=e[i],l=a[0],o=a[1],r=a[2],s=a[3],f={css:o,media:r,sourceMap:s};n[l]?n[l].parts.push(f):t.push(n[l]={id:l,parts:[f]})}return t}function l(e,t){var n=m(),i=b[b.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function r(e){var t=document.createElement("style");return t.type="text/css",l(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",l(e,t),t}function f(e,t){var n,i,a;if(t.singleton){var l=v++;n=y||(y=r(t)),i=c.bind(null,n,l,!1),a=c.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),i=d.bind(null,n),a=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=r(t),i=u.bind(null,n),a=function(){o(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}function c(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var l=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(l,o[t]):e.appendChild(l)}}function u(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([n],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}var p={},g=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=g(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=g(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=a(e);return i(n,t),function(e){for(var l=[],o=0;o<n.length;o++){var r=n[o],s=p[r.id];s.refs--,l.push(s)}if(e){var f=a(e);i(f,t)}for(var o=0;o<l.length;o++){var s=l[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete p[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},163:function(e,t,n){"use strict";e.exports=n(8)},166:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(6),o=i(l),r=n(163),s=(i(r),n(164)),f=(i(s),n(167)),c=i(f),u=o["default"].createClass({displayName:"Playlist",render:function(){var e=this.props,t=e.playSong,n=e.playNext,i=e.songs,l=i.map(function(e){return o["default"].createElement(c["default"],a({},e,{key:e._id,playSong:t,onEnd:n}))});return o["default"].createElement("div",{className:"playlist"},l)}});t["default"]=u},167:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),l=i(a),o=n(163),r=i(o),s=n(164),f=(i(s),l["default"].createClass({displayName:"AudioPlayer",componentDidMount:function(){var e=this,t=this.props,n=t.playing,i=t.onProgress,a=t.onEnd;this.el=r["default"].findDOMNode(this.refs.audio_tag),n&&this.play(),this.el.ontimeupdate=function(){i(e.el.currentTime/e.el.duration)},this.el.onended=function(){e.el.currentTime=0,a()}},componentWillReceiveProps:function(e){var t=this.props.playing;e.playing&&!t?this.play():!e.playing&&t&&this.stop()},play:function(){this.el.play()},stop:function(){this.el.pause()},seekPercent:function(e){this.el.currentTime=this.el.duration*e},render:function(){var e=this.props.url;return l["default"].createElement("audio",{ref:"audio_tag",src:e})}})),c=l["default"].createClass({displayName:"Song",getInitialState:function(){return{progress:0}},onProgress:function(e){this.setState({progress:e})},seekProgress:function(e){e.stopPropagation(),e.preventDefault();var t=e.clientX,n=this.refs.p_bar;this.refs.player.seekPercent((t-n.offsetLeft)/n.offsetWidth)},onEnd:function u(){var e=this.props,u=e.onEnd,t=e._id;u(t)},render:function(){var e=this.state.progress,t=this.props,n=t._id,i=t.title,a=t.url,o=t.playing,r=t.playSong,s={width:100*e+"%"},c=o?{}:{height:"0px",border:"0px solid #aaa"};return l["default"].createElement("div",{className:"song",key:n},l["default"].createElement("div",{className:"info",onClick:r.bind(null,n)},l["default"].createElement("span",{className:"icon"},l["default"].createElement("span",{className:"glyphicon glyphicon-"+(o?"pause":"play")})),l["default"].createElement("span",{className:"song-title"},i)),l["default"].createElement("div",{className:"p-bar "+(o?"playing":""),style:c,onClick:this.seekProgress,ref:"p_bar"},l["default"].createElement("div",{className:"inner-p-bar",style:s})),o?l["default"].createElement(f,{playing:o,url:a,onProgress:this.onProgress,ref:"player",onEnd:this.onEnd}):null)}});t["default"]=c},174:function(e,t,n){e.exports=n.p+"fdfe98cf151845e35b0059acca1e77da.png"},175:function(e,t,n){e.exports=n.p+"8f3b3d300d52b80b4182650a74c56710.png"},176:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n=document.createElement("a");n.href=e,n.target="_blank",n.download=t;var i=document.createEvent("Event");i.initEvent("click",!0,!0),n.dispatchEvent(i),window.URL.revokeObjectURL(n.href)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(6),o=i(l),r=n(163),s=(i(r),n(164)),f=i(s),c=o["default"].createClass({displayName:"Footer",getInitialState:function(){return{playingSong:void 0}},componentWillReceiveProps:function(e){if(e.playingSong)this.setState({playingSong:e.playingSong});else if(this.state.playingSong){var t=f["default"].extend({},this.state.playingSong);t.playing=!1,this.setState({playingSong:t})}},renderFilters:function(){var e=this.props,t=e.mood,n=e.orcestration,i=e.tempo,a=e.changeFilter,l=(e.playNext,e.playPrevious,e.playSong,e.filters),r={mood:t,orcestration:n,tempo:i};return f["default"].map(l,function(e,t){var n=f["default"].map(e,function(e){var n=f["default"].first(f["default"].keys(e));return o["default"].createElement("div",{className:"filter-value "+(r[t]==n?"active":""),onClick:a.bind(null,t,n),key:n},f["default"].first(f["default"].values(e)))});return o["default"].createElement("div",{className:"filter",key:t},o["default"].createElement("div",{className:"filter-title"},f["default"].capitalize(t),":"),o["default"].createElement("div",{className:"filter-values"},n))})},download:function(e,t){a(e,t)},render:function(){var e=this.props,t=(e.mood,e.orcestration,e.tempo,e.changeFilter,e.playNext),n=e.playPrevious,i=e.playSong,a=(e.filters,this.state.playingSong),l=a?a._id:null,r=a?a.title:null,s=a?a.url:null;return o["default"].createElement("div",{className:"footer"},o["default"].createElement("div",{className:"global-info "+(a?"playing":"")},o["default"].createElement("div",{className:"play-controls"},o["default"].createElement("span",{className:"glyphicon glyphicon-backward",onClick:n.bind(null,l)}),o["default"].createElement("span",{className:"glyphicon glyphicon-"+(f["default"].get(a,"playing")?"pause":"play"),onClick:i.bind(null,l)}),o["default"].createElement("span",{className:"glyphicon glyphicon-forward",onClick:t.bind(null,l)})),o["default"].createElement("div",{className:"controls-title"},r,o["default"].createElement("span",{className:"download-link glyphicon glyphicon-download",style:{fontSize:"30px",marginLeft:"30px"},onClick:this.download.bind(null,s,r)}))),o["default"].createElement("div",{className:"filters"},this.renderFilters()))}});t["default"]=c}});
//# sourceMappingURL=app.a79e8f5.js.map