"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[578],{8766:(e,a,s)=>{s.r(a),s.d(a,{default:()=>R});var n=s(9835);const t={class:"row fit"},r=(0,n._)("div",{class:"col-12 text-center q-py-sm text-grey-8 text-uppercase"},"Registrar Persona",-1),o={class:"fit"};function c(e,a,s,c,l,i){const u=(0,n.up)("CrearPersona"),p=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(p,{class:"flex flex-center fit"},{default:(0,n.w5)((()=>[(0,n._)("div",t,[r,(0,n._)("div",o,[(0,n.Wm)(u)])])])),_:1})}const l={key:0,class:"row q-gutter-y-md"},i={class:"col-12 row q-px-xl q-mb-md q-mt-xl text-center"};function u(e,a,s,t,r,o){const c=(0,n.up)("PersonaInputs"),u=(0,n.up)("q-btn"),p=(0,n.up)("q-space"),d=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(d,{class:"q-ma-sm"},{default:(0,n.w5)((()=>[e.isReady?((0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(c,{persona:e.persona,class:"col-12"},null,8,["persona"]),(0,n._)("div",i,[(0,n.Wm)(u,{label:"Reset",color:"grey-8",flat:"",class:"q-ml-sm",onClick:e.onResetClick},null,8,["onClick"]),(0,n.Wm)(p),(0,n.Wm)(u,{label:"Grabar",color:"green-5",onClick:e.onGrabarClick},null,8,["onClick"])])])):(0,n.kq)("",!0)])),_:1})}var p=s(499),d=s(9302),m=s(9744),v=s(2850),g=s(389);const w=(0,n.aZ)({name:"Persona_Crear",components:{PersonaInputs:m.Z},props:{},setup(){(0,d.Z)();const e=(0,p.iH)(!1),a=(0,p.iH)(new v.Z);function s(){a.value.reset()}async function t(){if(a.value.validated()){const e=await a.value.storePersona();e&&(a.value.id=await e.data.data.id,await a.value.uploadImageFireBase(),await a.value.storeImagen(),(0,g.St)("Registrado exitosamente!"),s())}}return(0,n.bv)((async()=>{e.value=!0})),{isReady:e,persona:a,onResetClick:s,onGrabarClick:t}}});var f=s(1639),k=s(9885),q=s(8879),b=s(136),C=s(9984),Z=s.n(C);const _=(0,f.Z)(w,[["render",u],["__scopeId","data-v-d834eb4c"]]),x=_;Z()(w,"components",{QPage:k.Z,QBtn:q.Z,QSpace:b.Z});const P=(0,n.aZ)({name:"PersonaStore",components:{CrearPersona:x}}),y=(0,f.Z)(P,[["render",c]]),R=y;Z()(P,"components",{QPage:k.Z})}}]);