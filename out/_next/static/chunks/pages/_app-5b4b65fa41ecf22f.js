(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1802)}])},1802:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893);n(1163),n(3814);var a=n(7294);let l=["light","dark"],s="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=(0,a.createContext)(void 0),c=e=>(0,a.useContext)(i)?a.createElement(a.Fragment,null,e.children):a.createElement(d,e),m=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:o="theme",themes:c=m,defaultTheme:d=n?"system":"light",attribute:v="data-theme",value:$,children:g,nonce:b})=>{let[w,p]=(0,a.useState)(()=>h(o,d)),[S,E]=(0,a.useState)(()=>h(o)),T=$?Object.values($):c,k=(0,a.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&n&&(a=y());let s=$?$[a]:a,o=t?f():null,i=document.documentElement;if("class"===v?(i.classList.remove(...T),s&&i.classList.add(s)):s?i.setAttribute(v,s):i.removeAttribute(v),r){let e=l.includes(d)?d:null,t=l.includes(a)?a:e;i.style.colorScheme=t}null==o||o()},[]),C=(0,a.useCallback)(e=>{p(e);try{localStorage.setItem(o,e)}catch(e){}},[e]),_=(0,a.useCallback)(t=>{let r=y(t);E(r),"system"===w&&n&&!e&&k("system")},[w,e]);(0,a.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),(0,a.useEffect)(()=>{let e=e=>{e.key===o&&C(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,a.useEffect)(()=>{k(null!=e?e:w)},[e,w]);let x=(0,a.useMemo)(()=>({theme:w,setTheme:C,forcedTheme:e,resolvedTheme:"system"===w?S:w,themes:n?[...c,"system"]:c,systemTheme:n?S:void 0}),[w,C,e,S,n,c]);return a.createElement(i.Provider,{value:x},a.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:o,themes:c,defaultTheme:d,attribute:v,value:$,children:g,attrs:T,nonce:b}),g)},u=(0,a.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:i,value:c,attrs:m,nonce:d})=>{let u="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?l.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let a=c?c[e]:e,s=t?e+"|| ''":`'${a}'`,i="";return o&&r&&!t&&l.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||a?`c.add(${s})`:"null":a&&(i+=`d[s](n,${s})`),i},v=e?`!function(){${h}${y(e)}}()`:r?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${u?"":"else{"+y(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${f}}catch(t){}}();`;return a.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),h=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light");var v=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(c,{enableSystem:!0,attribute:"class",children:(0,r.jsx)(t,{...n})})}},3814:function(){},1163:function(e,t,n){e.exports=n(6885)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);