"use strict";(self.webpackChunkmaradona_doc=self.webpackChunkmaradona_doc||[]).push([[2222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2},l="Instalaci\xf3n y ejecuci\xf3n",i={unversionedId:"Backend/instalacion",id:"Backend/instalacion",title:"Instalaci\xf3n y ejecuci\xf3n",description:"Requisitos",source:"@site/docs/Backend/instalacion.md",sourceDirName:"Backend",slug:"/Backend/instalacion",permalink:"/maradona-doc/docs/Backend/instalacion",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Organizaci\xf3n",permalink:"/maradona-doc/docs/Backend/links-utiles"},next:{title:"Arquitectura",permalink:"/maradona-doc/docs/category/arquitectura"}},s={},c=[{value:"Requisitos",id:"requisitos",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"Linter",id:"linter",level:3},{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"Corriendo el proyecto",id:"corriendo-el-proyecto",level:2},{value:"License",id:"license",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instalaci\xf3n-y-ejecuci\xf3n"},"Instalaci\xf3n y ejecuci\xf3n"),(0,r.kt)("h2",{id:"requisitos"},"Requisitos"),(0,r.kt)("h3",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,"Usar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," para instalar ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"lts/fermium (v14.x)")," o superior."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install lts/fermium\nnvm use lts/fermium\n")),(0,r.kt)("h3",{id:"mongodb"},"MongoDB"),(0,r.kt)("p",null,"Descargar ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/installation/"},"MongoDB v4.0")," o superior."),(0,r.kt)("h3",{id:"linter"},"Linter"),(0,r.kt)("p",null,"Utilizamos tanto ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/"},"eslint")," como tambi\xe9n ",(0,r.kt)("a",{parentName:"p",href:"https://prettier.io/"},"prettier"),"."),(0,r.kt)("p",null,"Por favor revisar los plugins de ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code")," instalados en las dev dependencies del package.json."),(0,r.kt)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,r.kt)("p",null,"Crear los siguientes archivos en la ",(0,r.kt)("inlineCode",{parentName:"p"},"ra\xedz")," del proyecto:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.test"))),(0,r.kt)("p",null,"Por favor revisar las variables de entorno en el archivo ",(0,r.kt)("inlineCode",{parentName:"p"},".env.example"),"."),(0,r.kt)("p",null,"Instalar paquetes npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("h2",{id:"corriendo-el-proyecto"},"Corriendo el proyecto"),(0,r.kt)("p",null,"Para levantar el proyecto en modo desarrollo ejecutar el comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,r.kt)("p",null,"En el caso de que se desee levantar el build, primero se deber\xe1 ejecutar el comando"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,r.kt)("p",null,"y una vez ya buildeado (hacia carpeta dist) se podr\xe1 ejecutar con"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://choosealicense.com/licenses/mit/"},"MIT")))}u.isMDXComponent=!0}}]);