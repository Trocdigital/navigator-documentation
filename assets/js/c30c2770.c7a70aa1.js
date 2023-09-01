"use strict";(self.webpackChunknavigator_documentation=self.webpackChunknavigator_documentation||[]).push([[8527],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>b});var o=a(7294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d=o.createContext({}),i=function(e){var r=o.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},u=function(e){var r=i(e.components);return o.createElement(d.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var a=e.components,t=e.mdxType,n=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(a),m=t,b=p["".concat(d,".").concat(m)]||p[m]||c[m]||n;return a?o.createElement(b,l(l({ref:r},u),{},{components:a})):o.createElement(b,l({ref:r},u))}));function b(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=a.length,l=new Array(n);l[0]=m;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[p]="string"==typeof e?e:t,l[1]=s;for(var i=2;i<n;i++)l[i]=a[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6738:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var o=a(7462),t=(a(7294),a(3905));const n={},l=void 0,s={unversionedId:"Navigator Database/Dashboard",id:"Navigator Database/Dashboard",title:"Dashboard",description:"Resumen",source:"@site/docs/Navigator Database/Dashboard.md",sourceDirName:"Navigator Database",slug:"/Navigator Database/Dashboard",permalink:"/navigator-documentation/docs/Navigator Database/Dashboard",draft:!1,editUrl:"https://github.com/Oslan17/navigator-documentation/tree/main/docs/docs/Navigator Database/Dashboard.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Como realizar consultas en SQL",permalink:"/navigator-documentation/docs/Navigator Database/Consultas"},next:{title:"Navigator Training Frontend",permalink:"/navigator-documentation/docs/Navigator Database/Frontend"}},d={},i=[{value:"Resumen",id:"resumen",level:2},{value:"1. Temas desarrollados",id:"1-temas-desarrollados",level:2},{value:"2. Preguntas m\xe1s frecuentes",id:"2-preguntas-m\xe1s-frecuentes",level:2}],u={toc:i},p="wrapper";function c(e){let{components:r,...a}=e;return(0,t.kt)(p,(0,o.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"resumen"},"Resumen"),(0,t.kt)("p",null,"En esta sesi\xf3n se habl\xf3 sobre c\xf3mo crear y editar dashboards y widgets en navigator.",(0,t.kt)("br",null),"\nSe explic\xf3 la diferencia entre dashboards y widgets, y c\xf3mo se pueden configurar los par\xe1metros y atributos de los widgets.",(0,t.kt)("br",null),"\nTambi\xe9n se habl\xf3 sobre los drilldowns y c\xf3mo se pueden utilizar para mostrar informaci\xf3n adicional sobre los datos.",(0,t.kt)("br",null),"\nFinalmente, se present\xf3 el tipo de widget de tendencia y c\xf3mo se puede utilizar para comparar datos de diferentes per\xedodos de tiempo."),(0,t.kt)("h2",{id:"1-temas-desarrollados"},"1. Temas desarrollados"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Creaci\xf3n de dashboards y widgets en navigator",(0,t.kt)("br",null)),"\nPara crear un dashboard en navigator debemos ir a la secci\xf3n de dashboards y dar clic en el bot\xf3n de crear un nuevo dashboard. Dentro de un dashboard podemos a\xf1adir widgets que son elementos visuales que muestran informaci\xf3n de los datos.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los widgets pueden ser de tipo card, trend card o goal. Los widgets de tipo card muestran informaci\xf3n de un solo valor. Los widgets de tipo trend card muestran la evoluci\xf3n de un valor en el tiempo.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los widgets de tipo goal muestran la diferencia entre un valor actual y un valor objetivo. Para a\xf1adir un widget a un dashboard debemos seleccionar el tipo de widget y el query que queremos que muestre.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Podemos modificar el t\xedtulo, el icono, el color y el formato de los datos de un widget. Podemos a\xf1adir drilldowns a un widget para que al hacer clic en \xe9l se despliegue un widget con m\xe1s informaci\xf3n.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Podemos ordenar los widgets de un dashboard cambiando el orden del par\xe1metro order. Podemos a\xf1adir un subt\xedtulo a un widget para a\xf1adir m\xe1s informaci\xf3n sobre el mismo. Los widgets de tipo trend card comparan el valor actual con el valor del periodo anterior.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"El periodo anterior se calcula en base a los filtros del dashboard. Podemos comparar widgets de tipo trend card contra valores fijos."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Tipos de widgets: cards, trend cards y drilldowns"),(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los tipos de widgets que existen en navigator son:",(0,t.kt)("br",null),"\n\u2022\tCards",(0,t.kt)("br",null),"\n\u2022\tTrend cards",(0,t.kt)("br",null),"\n\u2022\tDrilldowns"),(0,t.kt)("p",null,"Las cards son widgets que muestran informaci\xf3n en forma de tarjetas.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Las trend cards son widgets que muestran informaci\xf3n en forma de tarjetas y permiten comparar dos momentos en el tiempo.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los drilldowns son widgets que permiten desplegar informaci\xf3n adicional en forma de tabla.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los ",(0,t.kt)("em",{parentName:"p"},"drilldowns")," se definen en el c\xf3digo del widget.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los ",(0,t.kt)("em",{parentName:"p"},"t\xedtulos")," de las tarjetas se pueden modificar en el c\xf3digo del widget.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los ",(0,t.kt)("em",{parentName:"p"},"colores")," de las tarjetas se pueden modificar en el c\xf3digo del widget.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Configuraci\xf3n de los widgets: par\xe1metros, atributos, formato de n\xfamero, iconos, sufijos y prefijos",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los par\xe1metros de un widget me dicen dentro del comportamiento del widget qu\xe9 cosas va a hacer y qu\xe9 cosas no va a hacer.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los atributos de los widgets permiten modificar su apariencia, por ejemplo, qu\xe9 icono tiene, cu\xe1l es el color del texto, si est\xe1 disponible para ser usado en un data explorer y el color del fondo del texto.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los widgets pueden tener diferentes formatos de n\xfamero, por ejemplo, formato n\xfamero, formato n\xfamero con un decimal, formato porcentaje con un decimal.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los widgets pueden tener diferentes iconos, se utilizan las librer\xedas de iconos de fonson 4 y fonson 5.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los widgets pueden tener diferentes t\xedtulos, se pueden modificar los t\xedtulos y los sufijos y prefijos de las tarjetas.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Los iconos de las tarjetas se pueden modificar en el c\xf3digo del widget.",(0,t.kt)("br",null),"\nLos widgets pueden tener drilldowns.",(0,t.kt)("br",null),"\nLos widgets pueden tener formato de n\xfamero o formato de texto.",(0,t.kt)("br",null),"\nLos widgets pueden tener sufijos y prefijos.",(0,t.kt)("br",null),"\nLos widgets pueden tener orden.",(0,t.kt)("br",null),"\nLos widgets pueden tener subt\xedtulos.",(0,t.kt)("br",null)),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Creaci\xf3n de filtros en los widgets",(0,t.kt)("br",null)),"\nLos filtros en los widgets se crean en la secci\xf3n de filtros del widget.",(0,t.kt)("br",null),"\nLos filtros se pueden crear utilizando los campos del query que se est\xe1 utilizando en el widget.",(0,t.kt)("br",null),"\nLos filtros se pueden crear utilizando operadores l\xf3gicos como AND, OR y NOT.",(0,t.kt)("br",null),"\nLos filtros se pueden crear utilizando valores fijos.",(0,t.kt)("br",null),"\nLos filtros se pueden crear utilizando funciones.",(0,t.kt)("br",null),"\nLos filtros se pueden crear utilizando variables.",(0,t.kt)("br",null),"\nLos filtros se pueden crear utilizando par\xe1metros.",(0,t.kt)("br",null)),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Comparaci\xf3n con widgets tipo card",(0,t.kt)("br",null)),"\nLas tarjetas de tendencia son un tipo de widget que permite comparar dos momentos en el tiempo. La comparaci\xf3n de widgets se realiza con el par\xe1metro type trendcard y haciendo comparison true. El widget hace dos consultas, la primera para el mes actual y la segunda para el periodo anterior. El periodo anterior se calcula en base a los periodos de filtrado del dashboard.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Para crear una tarjeta de tendencia, se debe utilizar el par\xe1metro type trendcard y el par\xe1metro comparison true.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"El widget de tendencia hace dos consultas: una para el per\xedodo actual y otra para el per\xedodo anterior.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"El per\xedodo anterior se calcula en base a los valores de filtrado del dashboard.\nSe puede cambiar el tipo de filtrado del dashboard para comparar con un periodo diferente.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"En la pr\xf3xima sesi\xf3n, veremos c\xf3mo hacer que las tarjetas de comparaci\xf3n comparen contra valores fijos."),(0,t.kt)("h2",{id:"2-preguntas-m\xe1s-frecuentes"},"2. Preguntas m\xe1s frecuentes"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfPuedo poner una variable o el resultado de una query en el t\xedtulo de la tarjeta?"),"\nNo, los t\xedtulos son fijos y no se pueden modificar.",(0,t.kt)("br",null)),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfPuedo asignar un dashboard a otro usuario?",(0,t.kt)("br",null)),"\nS\xed, pero el usuario que lo edita debe ser el due\xf1o del dashboard."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfPuedo crear un dashboard con dos personas al mismo tiempo?",(0,t.kt)("br",null)),"\nS\xed, pero dos personas no pueden editar el mismo widget al mismo tiempo."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfC\xf3mo puedo comparar con un periodo anterior?",(0,t.kt)("br",null)),"\nEl widget de comparaci\xf3n hace dos consultas, una para el periodo actual y otra para el periodo anterior. El periodo anterior se calcula en base a los filtros del dashboard."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfPuedo comparar con un periodo que no sea el inmediatamente anterior?",(0,t.kt)("br",null)),"\nS\xed, pero para ello hay que duplicar temporalmente el widget y filtrar el duplicado por el periodo que se quiera comparar."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfPuedo poner un t\xedtulo din\xe1mico en el widget?",(0,t.kt)("br",null)),"\nNo, los t\xedtulos son fijos."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfPuedo compartir un dashboard con otro usuario?",(0,t.kt)("br",null)),"\nS\xed, pero el usuario debe ser asignado como due\xf1o del dashboard."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfPuedo comparar dos dashboards al mismo tiempo?",(0,t.kt)("br",null)),"\nNo, pero se pueden duplicar temporalmente los widgets para compararlos."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfC\xf3mo puedo cambiar el orden de los widgets en un dashboard?",(0,t.kt)("br",null)),'\nSe puede hacer cambiando el par\xe1metro "order" en cada widget.'),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\xbfC\xf3mo puedo a\xf1adir un subt\xedtulo a una tarjeta?",(0,t.kt)("br",null)),'\nSe puede a\xf1adir un subt\xedtulo en el par\xe1metro "footer" de la tarjeta.'))}c.isMDXComponent=!0}}]);