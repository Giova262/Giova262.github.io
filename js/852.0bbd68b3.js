"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[852],{8732:(e,t,s)=>{s.r(t),s.d(t,{default:()=>G});var a=s(9835);const o={class:"fit"};function l(e,t,s,l,n,r){const i=(0,a.up)("PersonasListRevision"),c=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(c,null,{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a.Wm)(i)])])),_:1})}var n=s(6970),r=s(9742),i=s.n(r);const c={class:"row justify-between"},u={class:"q-py-sm"},d={class:"row items-center"},m={class:"row items-center"},w={class:"row items-center full-width"},p={class:"col q-pr-md"},g={class:"col-9 q-px-none"},f=(0,a._)("span",{class:"text-grey-7 q-pr-sm"},"Estado:",-1),h={class:"col text-yellow-9 text-bold"},_={class:"col text-right"},v={class:"text-weight-medium q-pr-sm"},q={class:"text-grey-6 q-pr-xs"},b={class:"text-grey-6"};function x(e,t,s,o,l,r){const x=(0,a.up)("q-badge"),L=(0,a.up)("q-tooltip"),y=(0,a.up)("q-icon"),C=(0,a.up)("q-item-label"),Z=(0,a.up)("q-input"),k=(0,a.up)("q-img"),W=(0,a.up)("q-item-section"),z=(0,a.up)("q-item"),S=(0,a.up)("q-slide-item"),I=(0,a.up)("q-virtual-scroll"),R=(0,a.up)("q-page");return e.isReady?((0,a.wg)(),(0,a.j4)(R,{key:0,class:"q-pa-sm bg-grey-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{overline:"",class:"text-uppercase bg-blue-1 text-blue-grey-8 text-weight-medium q-px-md"},{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a._)("div",u,[(0,a.Uk)(" Miembros "),(0,a.Wm)(x,{color:"primary",class:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.personasList.length),1)])),_:1}),e.searchText?((0,a.wg)(),(0,a.j4)(x,{key:0,color:"secondary",class:"q-ml-xs"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.personasFilteredOut.length),1)])),_:1})):(0,a.kq)("",!0)]),(0,a._)("div",null,[(0,a.Wm)(y,{name:"refresh",onClick:e.onRefreshList,class:"cursor-pointer q-py-sm",color:"blue-9",size:"sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Refrescar")])),_:1})])),_:1},8,["onClick"])])])])),_:1}),(0,a.Wm)(C,{class:"q-pt-xs q-px-xs"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{modelValue:e.searchText,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchText=t),rounded:"",dense:"",flat:"",clearable:"",placeholder:"Buscar..",class:"full-width",standout:"bg-blue-4 text-grey-8"},{append:(0,a.w5)((()=>[(0,a.Wm)(y,{name:"search"})])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(I,{separator:"",items:e.personasFilteredOut,"virtual-scroll-slice-size":15,style:{"max-height":"80vh"},class:"q-mt-none"},{default:(0,a.w5)((({item:t})=>[((0,a.wg)(),(0,a.j4)(S,{key:t.id,onLeft:s=>e.onLeft(s,t),onRight:s=>e.onRight(s,t),onClick:s=>e.onItemClick(t)},{left:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a.Wm)(y,{left:"",name:"visibility"}),(0,a.Uk)(" Mostrar ")])])),right:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a.Uk)(" Modificar "),(0,a.Wm)(y,{right:"",name:"edit"})])])),default:(0,a.w5)((()=>[(0,a.Wm)(z,{class:"bg-white jg-border-radius q-mt-sm"},{default:(0,a.w5)((()=>[(0,a._)("div",w,[(0,a._)("div",p,[(0,a.Wm)(k,{alt:"Foto",src:t.foto_url,contain:!0,"spinner-color":"green",class:"text-grey-3 q-mr-sm","placeholder-src":i()},null,8,["src"])]),(0,a._)("div",g,[(0,a.Wm)(W,{class:""},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{class:"text-grey-5 row items-center no-wrap q-mt-xs"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[f,(0,a._)("span",h,(0,n.zw)(t.estado),1)]),(0,a._)("span",_,(0,n.zw)(t.iglesia),1)])),_:2},1024),(0,a.Wm)(C,{class:"row items-center text-uppercase no-wrap q-mt-xs"},{default:(0,a.w5)((()=>[(0,a._)("span",v,(0,n.zw)(t.nombre)+" "+(0,n.zw)(t.apellido),1),(0,a._)("span",q,"("+(0,n.zw)(t.edad||"?")+")",1),(0,a._)("span",b," ("+(0,n.zw)(t.sexo.codigo)+")",1)])),_:2},1024),(0,a.Wm)(C,{caption:"",class:"row justify-between items-center"},{default:(0,a.w5)((()=>[(0,a._)("span",null,[(0,a.Wm)(y,{name:"place",class:"q-mr-none"}),(0,a.Uk)(" "+(0,n.zw)(t.direccion||"No ingresada"),1)])])),_:2},1024),(0,a.Wm)(C,{class:"row justify-between items-center text-grey-6"},{default:(0,a.w5)((()=>[(0,a._)("span",null,"Telf: "+(0,n.zw)(t.telefono),1),(0,a._)("span",null,"Ingreso: "+(0,n.zw)(t.fecha_ingreso),1)])),_:2},1024),(0,a.Wm)(C,{class:"row justify-between items-center text-grey-6"},{default:(0,a.w5)((()=>[(0,a._)("span",null,"Correo: "+(0,n.zw)(t.email),1)])),_:2},1024)])),_:2},1024)])])])),_:2},1024)])),_:2},1032,["onLeft","onRight","onClick"]))])),_:1},8,["items"])])),_:1})):(0,a.kq)("",!0)}s(9665);var L=s(499),y=s(9302),C=s(8339),Z=s(7941),k=s(1033),W=s(2850),z=s(3331);const S=(0,a.aZ)({name:"Persona_List",components:{PersonaInputs:Z.Z},props:{},setup(){(0,y.Z)();const e=(0,L.iH)(!1),t=(0,C.tv)();let s;const o=(0,L.iH)([]),l=(0,L.iH)(null),n=(0,a.Fl)((()=>{let e=l.value?r():o.value;return e}));function r(){return o.value.filter((e=>e.nombre&&e.nombre.toLowerCase().includes(l.value.toString().toLowerCase())||e.apellido&&e.apellido.toLowerCase().includes(l.value.toString().toLowerCase())||e.edad&&e.edad.toLowerCase().includes(l.value.toString().toLowerCase())||e.email&&e.email.toLowerCase().includes(l.value.toString().toLowerCase())||e.bautizado&&e.bautizado.toLowerCase().includes(l.value.toString().toLowerCase())||e.iglesia&&e.iglesia.toLowerCase().includes(l.value.toString().toLowerCase())||e.estado&&e.estado.toLowerCase().includes(l.value.toString().toLowerCase())||e.telefono&&e.telefono.toString().toLowerCase().includes(l.value.toString().toLowerCase())))}function i(e){s=setTimeout((()=>{e()}),1e3)}function c({reset:e},s){s.saveLocalStorage(),i(e),t.push({name:"details"}).catch((()=>{}))}function u({reset:e},s){s.saveLocalStorage(),i(e),t.push({name:"edit"}).catch((()=>{}))}function d(e){e.saveLocalStorage(),t.push({name:"details"}).catch((()=>{}))}async function m(){await k.Z.setAuthEncabezado();const e=await k.Z.getAll();e&&(await z.Z.migrar(e.data),await w())}async function w(){const e=await z.Z.getAllWhereEstado("EN REVISION");o.value=[];for(let t=0;t<e.length;t++){let s=e[t];s.id=s.id_persona;const a=new W.Z;await a.cargarDatos(s),o.value.push(a)}}async function p(){await m()}return(0,a.bv)((async()=>{await w(),e.value=!0})),(0,a.Jd)((()=>{clearTimeout(s)})),{onLeft:c,onRight:u,onItemClick:d,onRefreshList:p,isReady:e,personasList:o,personasFilteredOut:n,searchText:l}}});var I=s(1639),R=s(9885),Q=s(3115),j=s(990),T=s(2857),U=s(6858),P=s(3119),E=s(8978),F=s(8713),V=s(490),O=s(335),A=s(1233),H=s(9984),M=s.n(H);const N=(0,I.Z)(S,[["render",x]]),B=N;M()(S,"components",{QPage:R.Z,QItemLabel:Q.Z,QBadge:j.Z,QIcon:T.Z,QTooltip:U.Z,QInput:P.Z,QVirtualScroll:E.Z,QSlideItem:F.Z,QItem:V.Z,QImg:O.Z,QItemSection:A.Z});const D=(0,a.aZ)({name:"PersonaShowRevision",components:{PersonasListRevision:B}}),J=(0,I.Z)(D,[["render",l]]),G=J;M()(D,"components",{QPage:R.Z})}}]);