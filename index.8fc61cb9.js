function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequire94c2;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){o[n]=e},e.parcelRequire94c2=i),i.register("27Lyk",(function(e,t){var o,i;n(e.exports,"register",(()=>o),(n=>o=n)),n(e.exports,"resolve",(()=>i),(n=>i=n));var a={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)a[e[t]]=n[e[t]]},i=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i("27Lyk").register(JSON.parse('{"fKftx":"index.8fc61cb9.js","8z5EP":"fondohorizontal.6d37039e.png","enlfu":"papel.42107435.svg","dbZ4Z":"piedra.90fc831a.svg","721dc":"tijera.2e3a9bd6.svg","gNuu6":"StarGreen.1eea6986.svg","j4Qve":"StarRed.cd7200a4.svg","9rtAH":"StarGray.0e2e26fc.svg"}'));var a;a=new URL(i("27Lyk").resolve("8z5EP"),import.meta.url).toString();const r={data:{myMove:"",pcMove:"",currentGame:"none",history:{victorias:0,perdidas:0}},liseners:[],timer:"open",init(){const n=JSON.parse(localStorage.getItem("puntajes"));n?this.setData(n):this.setData(this.data)},getData(){return this.data},setData(n){this.data=n;for(const n of this.liseners)n();if(n.history){const e={history:n.history,currentGame:n.currentGame,myMove:n.myMove,pcMove:n.pcMove};localStorage.setItem("puntajes",JSON.stringify(e))}},setMyMove(n){const e=this.getData();this.setData({...e,myMove:n})},setPcMove(){const n=this.getData(),e=["piedra","papel","tijera"][Math.floor(3*Math.random())];"open"==this.timer&&this.setData({...n,pcMove:e})},result(n){this.init();const e=this.getData(),t="piedra"==n.myMove&&"tijera"==n.pcMove,o="papel"==n.myMove&&"piedra"==n.pcMove,i="tijera"==n.myMove&&"papel"==n.pcMove,a="piedra"==n.myMove&&"papel"==n.pcMove,r=[o,t,i,"papel"==n.myMove&&"tijera"==n.pcMove,a,"tijera"==n.myMove&&"piedra"==n.pcMove,n.myMove==n.pcMove];for(let n=0;n<r.length;n++){const t=r[n];1!=t||0!=n&&1!=n&&2!=n?1!=t||3!=n&&4!=n&&5!=n?1==t&&6==n&&(e.currentGame="empate",this.setData(e)):(e.currentGame="perdiste",e.history.perdidas++,this.setData(e)):(e.currentGame="victoria",e.history.victorias++,this.setData(e))}},subscribe(n){this.liseners.push(n)}};const s=[{path:/pageA/,component:function(n){const e=document.createElement("div"),t=document.createElement("style"),o=new URL(a);return t.innerHTML=`\n  .root {\n  background-image: url(${o});\n  margin: 0px;\n}\n  .container{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    justify-content: center;\n}\n  .hands{\n        position: absolute;\n        bottom: -37px;\n  }\n   .text{\n     margin-top:74px;\n     width: 300px;\n   }\n   .boton{\n     margin-top:74px;\n     margin-bottom:86px;\n   }\n   @media (min-width:769px){\n    .boton{\n      margin-top:41px;\n    }\n}\n\n  `,e.classList.add(".root"),e.innerHTML='\n      <text-comp class="text" type="root">Piedra Papel o Tijera</text-comp>\n      <button-comp class="boton" >Empezar</button-comp>\n      <div class="hands">\n       <manos-comp ></manos-comp>\n      </div>\n  ',e.classList.add("container"),e.appendChild(t),e.querySelector(".boton").addEventListener("click",(e=>{e.preventDefault(),n.goTo("/pageB")})),e}},{path:/pageB/,component:function(n){const e=document.createElement("div"),t=document.createElement("style"),o=new URL(a);return t.innerHTML=`\n    .root {\n  background-image: url(${o});\n  margin: 0px;\n}\n  .rootb{\n    width:100%;\n  }\n  .container{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    justify-content: center;\n   }\n   .text{\n    margin-bottom: 45px;\n    width: 300px;\n   }\n   .hands{\n    position: absolute;\n    bottom: -37px;\n  }\n  .boton{\n    margin-bottom: 171px;\n  }\n  `,e.innerHTML='\n  \n     <text-comp class="text" type="rootb">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos</text-comp>\n     <button-comp class="boton">Jugar</button-comp>\n      <div class="hands">\n       <manos-comp ></manos-comp>\n      </div>\n  ',e.classList.add("container"),e.appendChild(t),e.querySelector(".boton").addEventListener("click",(e=>{e.preventDefault(),n.goTo("/pageC")})),e}},{path:/pageC/,component:function(n){const e=document.createElement("div"),t=document.createElement("style"),o=new URL(a);t.innerHTML=`\n   .root {\n  background-image: url(${o});\n  margin: 0px;\n}\n  .rootC{\n    width:100%;\n  }\n  .center{\n        padding: 125px 0px;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n  }\n   .container{\n     width: 100%;\n     display: flex;\n     justify-content: space-evenly;\n   }\n   .text{\n     margin-botton:74px;\n   }\n     .hands{\n       width: 100%;\n       height:200px;\n       position: absolute;\n       bottom: -37px;\n  }\n  `,e.innerHTML='\n  <timer-comp></timer-comp>\n  <div class="hands">\n   <div class="container">\n   <manos-comp size="med" type="tijera"></manos-comp>\n   <manos-comp size="med" type="piedra"></manos-comp>\n   <manos-comp size="med" type="papel"></manos-comp>\n   </div> \n  </div>\n  ',r.setMyMove("");const i=e.getElementsByTagName("manos-comp"),s=e.getElementsByTagName("timer-comp");for(const e of i)e.addEventListener("click",(e=>{let t=e.target.getAttribute("type")||"";r.setMyMove(t),r.setPcMove(),"closed"==r.timer&&n.goTo("/pageD")}));return s[0].addEventListener("timer",(e=>{"closed"==e.detail.timer&&""==r.data.myMove?n.goTo("/pageB"):("closed"==e.detail.timer&&r.data.myMove,n.goTo("/pageD"))})),e.appendChild(t),e}},{path:/pageD/,component:function(n){const e=document.createElement("div"),t=document.createElement("style"),o=new URL(a),i=r.getData(),s=i.myMove,c=i.pcMove;return r.result(i),t.innerHTML=`\n    .root {\n  background-image: url(${o});\n  margin: 0px;\n}\n  .container{\n    height: 100vh;\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n  }\n  .pcPlay{\n    position: absolute;\n    top: -14px;\n    transform: rotate(180deg);\n  }\n  .myPlay{\n    position: absolute;\n    bottom: -6px;\n    \n  }\n  `,e.innerHTML=`\n \n  \n   <div class="container" >\n      <manos-comp class="pcPlay" size="big" type="${c}"></manos-comp>\n      <manos-comp class="myPlay" size="big" type="${s}" ></manos-comp>\n   </div>\n \n \n  `,setTimeout((()=>{n.goTo("/pageE")}),2e3),e.appendChild(t),e}},{path:/pageE/,component:function(n){const e=document.createElement("div"),t=document.createElement("style"),o=(new URL(a),r.getData());return t.innerHTML="\n  .root {\n  \n}\n.rootWin{\n      background-color: #888949E5;\n}\n.rootLose{\n      background-color:#894949E5;\n}\n.rootTie{\n      background-color:rgba(127,127,127,0.9);\n}\n  .rootE{\n    height:100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n} \n   .text{\n     margin-botton:74px;\n   }\n   .boton{\n     margin-top:21px;\n   }\n     .container{\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n  \n  }\n  .pcPlay{\n    position: absolute;\n    top: -14px;\n     transform: rotate(180deg);\n      z-index:-1;\n     \n  }\n  .myPlay{\n    position: absolute;\n    bottom: -6px;\n    z-index:-1;\n   \n}\n\n\n  }\n  ",e.classList.add("root"),e.innerHTML=`\n  \n  <div class="rootE">\n   <star-comp type="${r.data.currentGame}"></star-comp>\n   <score-comp myScore="${r.data.history.victorias}" pcScore="${r.data.history.perdidas}"></score-comp>\n   <button-comp class="boton">Volver a jugar</button-comp>\n  </div> \n  <div class="container" >\n     <manos-comp class="pcPlay" size="big" type="${r.data.pcMove}"></manos-comp>\n     <manos-comp class="myPlay" size="big" type="${r.data.myMove}"></manos-comp>\n  </div>\n  `,e.querySelector(".boton").addEventListener("click",(()=>{n.goTo("/pageB")})),e.appendChild(t),"victoria"==o.currentGame?e.classList.replace("root","rootWin"):"perdiste"==o.currentGame?e.classList.replace("root","rootLose"):"empate"==o.currentGame&&e.classList.replace("root","rootTie"),e}}];function c(){return location.host.includes("github.io")}var d;d=new URL(i("27Lyk").resolve("enlfu"),import.meta.url).toString();var p;p=new URL(i("27Lyk").resolve("dbZ4Z"),import.meta.url).toString();var l;l=new URL(i("27Lyk").resolve("721dc"),import.meta.url).toString();var m;m=new URL(i("27Lyk").resolve("gNuu6"),import.meta.url).toString();var h;h=new URL(i("27Lyk").resolve("j4Qve"),import.meta.url).toString();var u;u=new URL(i("27Lyk").resolve("9rtAH"),import.meta.url).toString(),function(){const n=document.querySelector(".root");r.init(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const n=document.createElement("div"),e=document.createElement("style"),t=this.getAttribute("type");e.innerHTML="\n      .root{\n          font-family: 'American Typewriter', cursive;\n          font-size:80px;\n          color: #009048;\n          margin: 0;\n          line-height: 88.1%\n      }\n      .rootb{   \n          font-family: 'American Typewriter', cursive;\n          font-size:40px;\n          color: #000000;\n          font-weight:200;\n          margin: 0;\n      }\n      .secondary{\n        font-family: 'Odibee Sans', cursive;\n        font-variant: small-caps;\n        font-size:45px;\n        margin: 0;\n      }\n      .score{\n        font-family: 'Odibee Sans', cursive;\n        font-size:55px;\n        margin: 0;\n        font-weight: 400;\n      }\n      \n      ";const o=this.innerText;n.innerHTML=`\n      <h1>${o}</h1>\n      `;const i=n.querySelector("h1");"root"==t?i.classList.add("root"):"secondary"==t?i.classList.add("secondary"):"rootb"==t?i.classList.add("rootb"):"score"==t&&i.classList.add("score"),this.shadow.appendChild(n),this.shadow.appendChild(e)}}customElements.define("text-comp",n)}(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const n=document.createElement("button"),e=document.createElement("style");e.innerHTML="\n      .root{\n             width: 311px;\n             height:87px;\n             border:solid 10px;\n             border-radius:10px;\n             border-color: #001997;\n             font-size:45px;\n             color: #D8FCFC;\n             background:#006CFC ;\n             font-family: 'Odibee Sans', cursive;\n         }\n      ",n.textContent=this.innerText,n.classList.add("root"),this.shadow.appendChild(n),this.shadow.appendChild(e)}}customElements.define("button-comp",n)}(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const n=document.createElement("div"),e=document.createElement("style"),t=this.getAttribute("type"),o=this.getAttribute("size"),i=new URL(d),a=new URL(p),r=new URL(l);e.innerHTML="\n      .root{\n          width:100%;         \n      }\n      .small{\n        width:70px;\n      }\n      @media (min-width:769px){\n    .small{\n      width:79px;\n    }\n  }\n    .med{\n      width:121px;\n  }\n  .big{\n    width:150px;\n  }\n      .papel  {\n        width:78px;\n      }\n       @media (min-width:769px){\n         .papel{\n            width:93px;\n      }\n    }\n    \n    \n      .container{\n               width: 100%;\n               height: 137px;\n               display: flex;\n               justify-content: space-evenly;\n               gap: 20px;\n      }\n     #tijera:hover{\n             animation: moveHand 0.3s 0.1s both;\n     }  \n     \n     #papel:hover{\n             animation: moveHand 0.3s 0.1s both;\n     }  \n     #piedra:hover{\n             animation: moveHand 0.3s 0.1s both;\n     }      \n    @keyframes moveHand {\n     0% {\n       margin-top: -10px;\n     }\n     100% {\n       margin-top: -50px;\n     }\n    }\n      ",n.classList.add("root"),n.innerHTML=`\n      <div class="container">\n      <img class="small" src="${r.href}"><img>\n      <img class="small" src="${a.href}"><img>\n      <img class="small" src="${i.href}"><img>\n      </div>     \n      `,"tijera"==t?n.innerHTML=`\n          <img id="tijera" class="${o}" src="${r.href}"><img>`:"piedra"==t?n.innerHTML=`\n          <img id="piedra"  class="${o}" src="${a.href}"><img>`:"papel"==t?n.innerHTML=`\n          <img id="papel" class="${o}" src="${i.href}"><img>`:""==t&&(n.innerHTML=""),this.shadow.appendChild(n),this.shadow.appendChild(e)}}customElements.define("manos-comp",n)}(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render()}render(){const n=document.createElement("div"),e=document.createElement("style");e.innerHTML="\n      .root{\n            width: 243px;\n            height: 243px;\n            font-family: 'American Typewriter', cursive;\n            font-weight: 600;\n            font-size: 100px;\n            border: 25px solid black;\n            border-radius: 50%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n       }\n      ";var t=4;const o=setInterval((()=>{if(t--,n.innerText=`${t}`,0==t){clearInterval(o);const n=new CustomEvent("timer",{detail:{timer:"closed"}});this.dispatchEvent(n)}}),1e3);n.classList.add("root"),this.classList.add("center"),this.shadow.appendChild(e),this.shadow.appendChild(n)}}customElements.define("timer-comp",n)}(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super();const n=document.createElement("div"),e=document.createElement("style"),t=this.getAttribute("myScore"),o=this.getAttribute("pcScore");e.innerHTML="\n    .root{\n       width: 259px;\n       height: 217px;\n       border: solid 10px black;\n       border-radius: 10px;\n       background:white;\n    }\n    .score{\n        text-align:center;\n        padding-top:13px;\n    }\n    .font{\n           text-align: end;\n           padding-right: 30px;\n           padding-top: 11px;\n    }\n    .results{\n        display:flex;\n        flex-direction: column;\n}\n    }\n    ",n.classList.add("root"),n.innerHTML=`\n      <text-comp class="score" type="score">Score</text-comp>\n      <div class="results">\n      <text-comp  class="font" type="score">Vos: ${t}</text-comp>\n      <text-comp  class="font" type="score">Maquina: ${o}</text-comp>\n      </div>\n      `,this.shadow.appendChild(n),this.shadow.appendChild(e)}}customElements.define("score-comp",n)}(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const n=document.createElement("div"),e=document.createElement("style"),t=this.getAttribute("type"),o=new URL(m),i=new URL(h),a=new URL(u);e.innerHTML="\n      \n      .text{         \n           position: relative;\n           top: -173px;\n           left: 68px;\n           color: white;\n     } \n      ",n.style.height="272px","perdiste"==t?n.innerHTML=`\n        <img src=${i.href}><text-comp type="score" class="text">Perdiste</text-comp></img>`:"victoria"==t?n.innerHTML=`\n        <img src=${o.href}> <text-comp type="score" class="text">Ganaste</text-comp></img> `:"empate"==t&&(n.innerHTML=`\n        <img src=${a.href}> <text-comp type="score" class="text">Empate</text-comp></img> `),this.shadow.appendChild(e),this.shadow.appendChild(n)}}customElements.define("star-comp",n)}(),function(n){function e(n){const e=c()?"/Desafio-M5"+n:n;history.pushState({},"",e),t(e)}function t(t){console.log("El handleRoute recibió una nueva ruta",t);const o=c()?t.replace("/Desafio-M5",""):t;for(const t of s)if(t.path.test(o)){const o=t.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(o)}}"/Desafio-M5/"==location.pathname||"/"==location.pathname?e("/pageA"):t(location.pathname)}(n)}();
//# sourceMappingURL=index.8fc61cb9.js.map
