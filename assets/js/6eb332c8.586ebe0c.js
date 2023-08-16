"use strict";(self.webpackChunknavigator_documentation=self.webpackChunknavigator_documentation||[]).push([[1380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),v=a,m=u["".concat(i,".").concat(v)]||u[v]||d[v]||p;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=v;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const p={},o=void 0,s={unversionedId:"Base de Datos/Manuals VPN copy",id:"Base de Datos/Manuals VPN copy",title:"Manuals VPN copy",description:"# apt install apt-transport-https",source:"@site/docs/Base de Datos/Manuals VPN copy.md",sourceDirName:"Base de Datos",slug:"/Base de Datos/Manuals VPN copy",permalink:"/navigator-documentation/docs/Base de Datos/Manuals VPN copy",draft:!1,editUrl:"https://github.com/Oslan17/navigator-documentation/tree/main/docs/docs/Base de Datos/Manuals VPN copy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install Navigator",permalink:"/navigator-documentation/docs/Base de Datos/Install Navigator"},next:{title:"Manuals VPN",permalink:"/navigator-documentation/docs/Base de Datos/Manuals VPN"}},i={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## Instalaci\xf3n de OpenVPN 3\n\n### Debian / Ubuntu\n\n1. Aseg\xfarate de que tu sistema admite el transporte HTTPS:\n")),(0,a.kt)("h1",{id:"apt-install-apt-transport-https"},"apt install apt-transport-https"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n2. Instala la clave del repositorio de OpenVPN utilizada por los paquetes de OpenVPN 3 para Linux:\n")),(0,a.kt)("h1",{id:"curl--fssl-httpsswupdateopenvpnnetreposopenvpn-repo-pkg-keypub--gpg---dearmor--etcapttrustedgpgdopenvpn-repo-pkg-keyringgpg"},"curl -fsSL ",(0,a.kt)("a",{parentName:"h1",href:"https://swupdate.openvpn.net/repos/openvpn-repo-pkg-key.pub"},"https://swupdate.openvpn.net/repos/openvpn-repo-pkg-key.pub")," | gpg --dearmor > /etc/apt/trusted.gpg.d/openvpn-repo-pkg-keyring.gpg"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n3. Instala el repositorio correspondiente. Reemplaza `$DISTRO` con el nombre de la versi\xf3n de tu distribuci\xf3n Debian/Ubuntu:\n")),(0,a.kt)("h1",{id:"curl--fssl-httpsswupdateopenvpnnetcommunityopenvpn3reposopenvpn3-distrolist--etcaptsourceslistdopenvpn3list"},"curl -fsSL ",(0,a.kt)("a",{parentName:"h1",href:"https://swupdate.openvpn.net/community/openvpn3/repos/openvpn3-$DISTRO.list"},"https://swupdate.openvpn.net/community/openvpn3/repos/openvpn3-$DISTRO.list")," > /etc/apt/sources.list.d/openvpn3.list"),(0,a.kt)("h1",{id:"apt-update"},"apt update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n4. Instala el paquete `openvpn3`:\n")),(0,a.kt)("h1",{id:"apt-install-openvpn3"},"apt install openvpn3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n### Fedora, Red Hat Enterprise Linux, CentOS\n\n1. Agrega el repositorio Copr de Fedora para obtener los paquetes:\n")),(0,a.kt)("h1",{id:"dnf-copr-enable-openvpnopenvpn3"},"dnf copr enable openvpn/openvpn3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n2. Instala el paquete `openvpn3`:\n")),(0,a.kt)("h1",{id:"dnf-install-openvpn3"},"dnf install openvpn3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n**Nota:** Estas instrucciones pueden variar dependiendo de tu sistema operativo y la versi\xf3n espec\xedfica. Aseg\xfarate de revisar la documentaci\xf3n oficial del sistema operativo para obtener instrucciones actualizadas.\n\n")))}d.isMDXComponent=!0}}]);