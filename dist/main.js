!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"h1 {\n  text-align: center;\n  font-size: 40px;\n}\n\n#main {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: flex-start;\n  align-content: flex-start;\n}\n\n#playerBoard,\n#computerBoard {\n  width: 500px;\n  height: 500px;\n  display: grid;\n  margin-bottom: 50px;\n  grid-template-columns: repeat(10, 1fr);\n  box-sizing: border-box;\n  border: 1px solid black;\n  position: relative;\n}\n\ndiv.playerBoard,\ndiv.computerBoard {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.playerBoard.ship {\n  background-color: blue;\n}\n\n.playerBoard.ship.horizontal {\n  border-top: 2px solid green;\n  border-bottom: 2px solid green;\n}\n\n.playerBoard.ship.vertical {\n  border-right: 2px solid green;\n  border-left: 2px solid green;\n}\n\n.playerBoard.ship.first-cell.horizontal {\n  border-left: 2px solid green;\n}\n\n.playerBoard.ship.last-cell.horizontal {\n  border-right: 2px solid green;\n}\n\n.playerBoard.ship.first-cell.vertical {\n  border-top: 2px solid green;\n}\n\n.playerBoard.ship.last-cell.vertical {\n  border-bottom: 2px solid green;\n}\n\n.hit,\n.miss {\n  pointer-events: none;\n}\n\n.hit {\n  background-color: red;\n}\n\n.miss {\n  background-color: lightblue;\n}\n\n.playerBoard.hit {\n  background-color: brown;\n}\n\n#message {\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n#play {\n  padding: 20px;\n  width: 200px;\n  position: absolute;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(i).concat([o]).join("\n")}var a,s,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,c=0,u=[],d=n(4);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;n=l||(l=m(e)),r=B.bind(null,n,a,!1),o=B.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return f(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&f(p(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function B(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";n.r(e);var r=(t,e,n)=>({active:t,board:e,pastMoves:n});var o=(t,e)=>{const n=[];n.length=t,n.fill(0);return{length:t,cells:n,isSunk:()=>n.every(t=>"X"===t),hit:t=>(n[t]="X",n),isHorizontal:e}};const i=()=>{return[Math.round(9*Math.random()),Math.round(9*Math.random())]},a=()=>Math.random()>.5;var s=i;var l=()=>{let t=[];t.length=10;for(let e=0;e<10;e++)t[e]=new Array(10).fill(" ");const e=(e,n,r)=>{if(!((e,n,r)=>{if(" "!==t[r[0]][r[1]]||n&&r[1]+e>10||!n&&r[0]+e>10)return!1;const o=r[0],i=r[1];let a=o-1;0===o&&(a=0);let s,l,c=i-1;0===i&&(c=0),n?(s=o+2,9===o&&(s=10),l=i+e+1,i+e===10&&(l=10)):(s=o+e+1,o+e===10&&(s=10),l=i+2,9===i&&(l=10));for(let e=a;e<s;e++)for(let n=c;n<l;n++)if(" "!==t[e][n])return!1;return!0})(e,n,r))return-1;const i=o(e,n);if(n){let n=r[0];for(let o=r[1],a=0;o<r[1]+e;o++,a++)i.cells[a]=[n,o],t[n][o]=i}else{let n=r[1];for(let o=r[0],a=0;o<r[0]+e;o++,a++)i.cells[a]=[o,n],t[o][n]=i}return i};return{matrix:t,placeShip:e,receiveAttack:(e,n)=>{if(" "===t[e][n])return t[e][n]="M",!1;{const r=t[e][n],o=r.cells.findIndex(t=>t[0]===e&&t[1]===n);return r.hit(o),!0}},allSunk:()=>{for(let e=0;e<t.length;e++)for(let n=0;n<t.length;n++)if("object"==typeof t[e][n]&&!t[e][n].isSunk())return!1;return!0},initializeBoard:()=>{let t=0,n=0,r=0,o=0,s=[];for(;t<4;){const n=e(1,!0,i());-1!==n&&(t++,s.push(n))}for(;n<3;){const t=e(2,a(),i());-1!==t&&(n++,s.push(t))}for(;r<2;){const t=e(3,a(),i());-1!==t&&(r++,s.push(t))}for(;o<1;){const t=e(4,a(),i());-1!==t&&(o++,s.push(t))}return s}}};var c={displayBoard:(t,e)=>{for(let n=0;n<10;n++)for(let r=0;r<10;r++){const o=document.createElement("div");null===e?(o.setAttribute("data-index",`${n}${r}`),o.classList.add("computerBoard")):(o.setAttribute("id",`${n}${r}`),o.classList.add("playerBoard")," "!==e[n][r]&&"M"!==e[n][r]&&o.classList.add("ship")),t.appendChild(o)}},displayShips:t=>{t.forEach(t=>{for(let e=0;e<t.cells.length;e++){const n=document.getElementById(`${t.cells[e][0]}${t.cells[e][1]}`);0===e&&n.classList.add("first-cell"),e===t.cells.length-1&&n.classList.add("last-cell"),t.isHorizontal?n.classList.add("horizontal"):n.classList.add("vertical")}})},addClassToDiv:(t,e)=>{t.classList.add(e)}};n(0);(()=>{const t=(t,e)=>{if(t.board.allSunk()||e.board.allSunk()){t.active=!1,e.active=!1;const n=document.getElementById("message");return e.board.allSunk?n.textContent="Human Player Wins!":n.textContent="Computer Wins!",!0}return!1},e=(t,e,n,r,o)=>{if(!t.active)return;const i=e.board.receiveAttack(n,r)?"hit":"miss";return c.addClassToDiv(o,i),"miss"===i&&(t.active=!1,e.active=!0),i},n=(n,r)=>{let o,i,a=!1;for(;!a;){const t=s();o=t[0],i=t[1],-1===r.pastMoves.findIndex(t=>t[0]===o&&t[1]===i)&&(a=!0)}r.pastMoves.push([o,i]);const l=document.getElementById(`${o}${i}`);e(r,n,o,i,l),t(n,r)},o=(t,e)=>{const n=document.querySelectorAll(t),r=document.getElementById(e);[...n].forEach(t=>{r.removeChild(t)})},i=()=>{const o=document.getElementById("playerBoard"),i=document.getElementById("computerBoard"),a=l(),s=l(),u=a.initializeBoard(),d=(s.initializeBoard(),r(!0,a,null)),f=r(!1,s,[]);c.displayBoard(o,d.board.matrix),c.displayBoard(i,null),c.displayShips(u);const p=document.querySelectorAll(".computerBoard"),h=r=>{const o=r.target.getAttribute("data-index")[0],i=r.target.getAttribute("data-index")[1];if(e(d,f,+o,+i,r.target),!t(d,f))for(;f.active;)n(d,f)};[...p].forEach(t=>{t.addEventListener("click",h,!1)})};return document.getElementById("randomize").addEventListener("click",()=>{o(".playerBoard","playerBoard"),o(".computerBoard","computerBoard"),i()},!1),{startGame:i}})().startGame()}]);