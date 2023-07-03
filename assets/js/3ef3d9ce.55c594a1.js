"use strict";(self.webpackChunknavigator_documentation=self.webpackChunknavigator_documentation||[]).push([[4770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||p;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const p={},o=void 0,i={unversionedId:"Tutorials-Navigator/manual_prueba",id:"Tutorials-Navigator/manual_prueba",title:"manual_prueba",description:"# apt install apt-transport-https",source:"@site/docs/Tutorials-Navigator/manual_prueba.md",sourceDirName:"Tutorials-Navigator",slug:"/Tutorials-Navigator/manual_prueba",permalink:"/navigator-documentation/docs/Tutorials-Navigator/manual_prueba",draft:!1,editUrl:"https://github.com/Oslan17/navigator-documentation/tree/main/docs/docs/Tutorials-Navigator/manual_prueba.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manuals VPN",permalink:"/navigator-documentation/docs/Tutorials-Navigator/Manuals VPN"},next:{title:"Tutorial - Basics",permalink:"/navigator-documentation/docs/category/tutorial---basics"}},s={},l=[],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## Instalaci\xf3n de OpenVPN 3\n\n### Debian / Ubuntu\n\n1. Aseg\xfarate de que tu sistema admite el transporte HTTPS:\n")),(0,a.kt)("h1",{id:"apt-install-apt-transport-https"},"apt install apt-transport-https"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n2. Instala la clave del repositorio de OpenVPN utilizada por los paquetes de OpenVPN 3 para Linux:\n")),(0,a.kt)("h1",{id:"curl--fssl-httpsswupdateopenvpnnetreposopenvpn-repo-pkg-keypub--gpg---dearmor--etcapttrustedgpgdopenvpn-repo-pkg-keyringgpg"},"curl -fsSL ",(0,a.kt)("a",{parentName:"h1",href:"https://swupdate.openvpn.net/repos/openvpn-repo-pkg-key.pub"},"https://swupdate.openvpn.net/repos/openvpn-repo-pkg-key.pub")," | gpg --dearmor > /etc/apt/trusted.gpg.d/openvpn-repo-pkg-keyring.gpg"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n3. Instala el repositorio correspondiente. Reemplaza `$DISTRO` con el nombre de la versi\xf3n de tu distribuci\xf3n Debian/Ubuntu:\n")),(0,a.kt)("h1",{id:"curl--fssl-httpsswupdateopenvpnnetcommunityopenvpn3reposopenvpn3-distrolist--etcaptsourceslistdopenvpn3list"},"curl -fsSL ",(0,a.kt)("a",{parentName:"h1",href:"https://swupdate.openvpn.net/community/openvpn3/repos/openvpn3-$DISTRO.list"},"https://swupdate.openvpn.net/community/openvpn3/repos/openvpn3-$DISTRO.list")," > /etc/apt/sources.list.d/openvpn3.list"),(0,a.kt)("h1",{id:"apt-update"},"apt update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n4. Instala el paquete `openvpn3`:\n")),(0,a.kt)("h1",{id:"apt-install-openvpn3"},"apt install openvpn3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n### Fedora, Red Hat Enterprise Linux, CentOS\n\n1. Agrega el repositorio Copr de Fedora para obtener los paquetes:\n")),(0,a.kt)("h1",{id:"dnf-copr-enable-openvpnopenvpn3"},"dnf copr enable openvpn/openvpn3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n2. Instala el paquete `openvpn3`:\n")),(0,a.kt)("h1",{id:"dnf-install-openvpn3"},"dnf install openvpn3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n**Nota:** Estas instrucciones pueden variar dependiendo de tu sistema operativo y la versi\xf3n espec\xedfica. Aseg\xfarate de revisar la documentaci\xf3n oficial del sistema operativo para obtener instrucciones actualizadas.\n\n")))}d.isMDXComponent=!0}}]);