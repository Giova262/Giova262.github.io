(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[64],{2850:(e,a,o)=>{"use strict";o.d(a,{Z:()=>h});var t=o(389),s=o(7322),n=o(1033),l=o(7141),i=o(147);const r={apiKey:"AIzaSyBT4FSQ9L5komcMJxsxlLQpSksgopmmz8c",authDomain:"ismm-224c4.firebaseapp.com",projectId:"ismm-224c4",storageBucket:"ismm-224c4.appspot.com",messagingSenderId:"808316359624",appId:"1:808316359624:web:c677c18d61012805b926fd"},c=(0,l.ZF)(r),d=(0,i.cF)(c);async function u(e,a){const o=(0,i.iH)(d,`personas/${a}`);return await(0,i.KV)(o,e),await(0,i.Jt)(o)}var m=o(3833);o(1820);class p{constructor(){this.id=null,this.nombre=null,this.apellido=null,this.sexo=null,this.fecha_nacimiento=null,this.fecha_ingreso=null,this.telefono="+54911",this.email=null,this.comentario=null,this.testimonio=null,this.bautizado=null,this.edad=null,this.foto_url=null,this.foto_data=null,this.iglesia=null,this.direccion=null,this.estado={descripcion:"ACTIVO"}}reset(){this.id=null,this.nombre=null,this.apellido=null,this.sexo=null,this.fecha_nacimiento=null,this.fecha_ingreso=null,this.telefono=null,this.email=null,this.comentario=null,this.testimonio=null,this.bautizado=null,this.edad=null,this.foto_url=null,this.foto_data=null,this.iglesia=null,this.direccion=null,this.estado=null}fakeData(){this.id=150,this.nombre="nombre Persona",this.apellido="apellido Persona",this.sexo="M",this.fecha_nacimiento="15/02/1500",this.fecha_ingreso="15/02/1510",this.telefono="+541126029026",this.email="masterpat45@gmail.com",this.comentario="masterpat45@gmail.com",this.testimonio="masterpat45@gmail.com",this.bautizado=!0,this.edad=15,this.estado="ACTIVO"}validated(){return(0,s.x)(this.nombre)||!(0,s.q)(this.nombre,200)?((0,t.Y8)("El Nombre es un dato requerido"),!1):(0,s.x)(this.apellido)?((0,t.Y8)("El Apellido es un dato requerido"),!1):(0,s.x)(this.telefono)?((0,t.Y8)("El Telefono es un dato requerido"),!1):!(0,s.x)(this.sexo)||((0,t.Y8)("El Sexo es un dato requerido"),!1)}getPayload(){let e=null;this.sexo&&(e=this.sexo.codigo?String(this.sexo.codigo):this.sexo);let a=null;return this.estado&&(a=this.estado.descripcion?String(this.estado.descripcion):this.estado),{id:this.id,nombre:this.nombre,apellido:this.apellido,sexo:e,fecha_nacimiento:this.fecha_nacimiento,fecha_ingreso:this.fecha_ingreso,telefono:this.telefono,email:this.email,comentario:this.comentario,testimonio:this.testimonio,bautizado:this.bautizado,edad:this.edad,iglesia:this.iglesia,direccion:this.direccion,foto_url:this.foto_url,estado:a}}getPayloadImage(){return{id_persona:this.id,url:this.foto_url}}saveLocalStorage(){m.Z.set("itemActual",JSON.stringify(this.getPayload()))}async loadLocalStorage(){const e=JSON.parse(m.Z.getItem("itemActual"));await this.cargarDatos(e)}async storePersona(){return await n.Z.setAuthEncabezado(),await n.Z.store(this.getPayload())}async uploadImageFireBase(){this.foto_url=await u(this.foto_data,this.id)}async storeImagen(){const e=this.getPayloadImage();return await n.Z.setAuthEncabezado(),await n.Z.storeImage(e)}async update(){return await n.Z.setAuthEncabezado(),await n.Z.update(this.getPayload(),this.id)}async cargarDatos(e){this.id=e.id,this.nombre=e.nombre,this.apellido=e.apellido,this.fecha_nacimiento=e.fecha_nacimiento,this.fecha_ingreso=e.fecha_ingreso,this.telefono=e.telefono,this.email=e.email,this.comentario=e.comentario,this.testimonio=e.testimonio,this.bautizado=e.bautizado,this.edad=e.edad,this.iglesia=e.iglesia,this.foto_url=e.foto_url,this.direccion=e.direccion,this.estado=e.estado,"M"===e.sexo&&(this.sexo={descripcion:"Hombre",codigo:"M"}),"F"===e.sexo&&(this.sexo={descripcion:"Mujer",codigo:"F"})}}const h=p},389:(e,a,o)=>{"use strict";o.d(a,{St:()=>n,Y8:()=>s,au:()=>i});o(6950);var t=o(4328);o(8126);function s(e,a="Ocurrió un error"){t.Z.create({message:e,color:"negative",multiLine:!0,progress:!0,timeout:8e3,caption:a})}function n(e,a="Success"){t.Z.create({message:e,color:"green-5",multiLine:!0,progress:!0,timeout:2e3,caption:a})}function l(e,a="Alerta"){t.Z.create({message:e,color:"yellow-8",multiLine:!0,progress:!0,timeout:8e3,caption:a})}function i(e){if(e.response)switch(e.response.status){case 400:for(let a=0;a<e.response.data.errores.length;a++){const o=e.response.data.errores[a];switch(o.type){case"warning":l(o.message);break;default:s(o.message);break}}break;case 404:s("Request failed with status code 404",`Not Found -> /${e.response.config.url}`);break;case 413:s("La imagen es muy grande, por favor reduzca el tamaño de la misma","Entity Too Large");break;case 422:e.response.data.message&&s(e.response.data.message),Object.entries(e.response.data.errors).forEach((([e,a])=>{a.forEach((a=>{s(a,e)}))}));break;default:console.error(e.response),s(e.response.statusText,e.response.data.message);break}else s(e.message)}},7322:(e,a,o)=>{"use strict";o.d(a,{q:()=>s,x:()=>t});o(6950),o(4328),o(8126);function t(e){return(!e||""===e||void 0==e)&&(console.error("La variable es nula o indefinida"),!0)}function s(e,a){return!(e.length>a)||(console.error("La variable excede la cantidad de caracteres"),!1)}},1033:(e,a,o)=>{"use strict";o.d(a,{Z:()=>c});var t=o(6950),s=(o(4328),o(8126),o(3833)),n=o(389),l=o(7524);class i{constructor(){this.urlAPiExterna=""}async setAuthEncabezado(){const e=JSON.parse(s.Z.getItem("usuario"));let a=!0;try{l.Z.defaults.headers.common.authorization=`Bearer ${e.accessToken}`}catch(o){console.error(o.message),(0,n.Y8)(o.message),a=!1}return a}async store(e){let a=null;try{t.Z.show({message:"Enviando..",messageColor:"info"}),a=await l.Z.post("persona",e)}catch(o){console.error(o.message),(0,n.au)(o)}finally{t.Z.hide()}return a}async storeImage(e){let a=null;try{t.Z.show({message:"Guardando foto..",messageColor:"info"}),a=await l.Z.post("foto/persona",e)}catch(o){console.error(o.message),(0,n.au)(o)}finally{t.Z.hide()}return a}async getAll(){let e=null;try{t.Z.show({message:"Cargando mienbros..",messageColor:"info"}),e=await l.Z.get("persona")}catch(a){console.error(a.message),(0,n.au)(a)}finally{t.Z.hide()}return e}async showImageByIdPersona(e){let a=null;try{t.Z.show({message:"Cargando foto..",messageColor:"info"}),a=await l.Z.get(`foto/persona/${e}`)}catch(o){console.error(o.message),(0,n.au)(o)}finally{t.Z.hide()}return a}async update(e,a){let o=null;try{t.Z.show({message:"Enviando...",messageColor:"info"}),o=await l.Z.put(`persona/${a}`,e)}catch(s){console.error(s.message),(0,n.au)(s)}finally{t.Z.hide()}return o}async destroy(e){let a=null;try{t.Z.show({message:"Eliminando...",messageColor:"info"}),a=await l.Z["delete"](`evento/${e}`),(0,n.St)(a.data.mensaje,a.statusText)}catch(o){console.error(o.message),(0,n.au)(o)}finally{t.Z.hide()}return a}async vincular(e,a){let o=null;try{t.Z.show({message:"Vinculando...",messageColor:"info"}),o=await l.Z.post(`vincular/evento/${a}`,e),(0,n.St)(o.data.mensaje,o.statusText)}catch(s){console.error(s.message),(0,n.au)(s)}finally{t.Z.hide()}return o}async updateVinculoPersona(e,a){let o=null;try{t.Z.show({message:"Vinculando...",messageColor:"info"}),o=await l.Z.put(`vincular/evento/persona/${a}`,e),(0,n.St)(o.data.mensaje,o.statusText)}catch(s){console.error(s.message),(0,n.au)(s)}finally{t.Z.hide()}return o}async getEventosCompletos(){let e=null;try{t.Z.show({message:"Cargando eventos...",messageColor:"info"}),e=await l.Z.get("eventos/completos")}catch(a){console.error(a.message),(0,n.au)(a)}finally{t.Z.hide()}return e}async getEventosByPersona(e){let a=null;try{t.Z.show({message:"Cargando eventos...",messageColor:"info"}),a=await l.Z.get(`eventos/persona/${e}`)}catch(o){console.error(o.message),(0,n.au)(o)}finally{t.Z.hide()}return a}async getEventos(){let e=null;try{t.Z.show({message:"Cargando eventos...",messageColor:"info"}),e=await l.Z.get("evento"),(0,n.St)(e.data.mensaje,e.statusText)}catch(a){console.error(a.message),(0,n.au)(a)}finally{t.Z.hide()}return e}async getEvento(e){let a=null;try{t.Z.show({message:"Cargando eventos...",messageColor:"info"}),a=await l.Z.get(`evento/${e}`),(0,n.St)(a.data.mensaje,a.statusText)}catch(o){console.error(o.message),(0,n.au)(o)}finally{t.Z.hide()}return a}async getTiempoByEventoID(e){let a=null;try{t.Z.show({message:"Cargando tiempo...",messageColor:"info"}),a=await l.Z.get(`evento/${e}/tiempo`),(0,n.St)(a.data.mensaje,a.statusText)}catch(o){console.error(o.message),(0,n.au)(o)}finally{t.Z.hide()}return a}async getUbicacionByEventoID(e){let a=null;try{t.Z.show({message:"Cargando ubicacion...",messageColor:"info"}),a=await l.Z.get(`evento/${e}/ubicacion`),(0,n.St)(a.data.mensaje,a.statusText)}catch(o){console.error(o.message),(0,n.au)(o)}finally{t.Z.hide()}return a}async getPersonaByEventoID(e){let a=null;try{t.Z.show({message:"Cargando persona...",messageColor:"info"}),a=await l.Z.get(`evento/${e}/persona`),(0,n.St)(a.data.mensaje,a.statusText)}catch(o){console.error(o.message),(0,n.au)(o)}finally{t.Z.hide()}return a}}const r=new i,c=r},4482:(e,a,o)=>{"use strict";o.d(a,{q:()=>t});const t="v 0.6"},1820:(e,a,o)=>{"use strict";o.d(a,{Z:()=>u});var t=o(4476);async function s(e){await t.Z.estados.clear().then((function(){console.log("Tabla estados borrada exitosamente")})).catch(alert);for await(let a of e)n(a)}async function n(e){return await t.Z.estados.add({descripcion:e})}async function l(){return await t.Z.estados.toArray()}async function i(e){return await t.Z.estados.where("descripcion").notEqual(e).toArray()}async function r(e){return await t.Z.estados.get({descripcion:e}).toArray()}async function c(e,a){const o=await r(e);return o.descripcion!=a&&(await t.Z.estados.where({descripcion:e}).modify({descripcion:a}).then((function(e){console.log("Updated "+e+" items")})),!0)}async function d(e){let a=null;return await t.Z.estados.where({descripcion:e}).delete().then((function(e){console.log("Deleted "+e+" objects"),a=!0})),a}const u={migrar:s,getAll:l,getByDesc:r,deleteByID:d,updateEstadoByID:c,getAllFiltrado:i}},3331:(e,a,o)=>{"use strict";o.d(a,{Z:()=>p});var t=o(4476);async function s(e){await t.Z.personas.clear().then((function(){console.log("Tabla personas borrada exitosamente")})).catch(alert);for await(let a of e)i(a)}async function n(e){for await(let a of e)i(a)}async function l(){await t.Z.personas.clear().then((function(){console.log("Tabla personas borrada exitosamente")})).catch(alert)}async function i(e){return await t.Z.personas.add({id_persona:e.id,nombre:e.nombre,apellido:e.apellido,sexo:e.sexo,fecha_nacimiento:e.fecha_nacimiento,fecha_ingreso:e.fecha_ingreso,telefono:e.telefono,email:e.email,comentario:e.comentario,testimonio:e.testimonio,bautizado:e.bautizado,edad:e.edad,foto_url:e.foto_url,foto_data:e.foto_data,iglesia:e.iglesia,direccion:e.direccion,estado:e.estado})}async function r(){return await t.Z.personas.toArray()}async function c(e){return await t.Z.personas.where("estado").notEqual(e).toArray()}async function d(e){return await t.Z.personas.where({estado:e}).toArray()}async function u(e){return await t.Z.personas.get({id_persona:e})}async function m(e){let a=null;return await t.Z.personas.where({id_persona:e}).delete().then((function(e){console.log("Deleted "+e+" objects"),a=!0})),a}const p={clear:l,migrar:s,getAll:r,getByID:u,deleteByID:m,migrarLista:n,getAllFiltrado:c,getAllWhereEstado:d}},4476:(e,a,o)=>{"use strict";o.d(a,{Z:()=>l});var t=o(9387),s=o(389),n=new t.ZP("DBISMM");n.version(1).stores({personas:"++id,\n    id_persona,\n    nombre,\n    apellido,\n    sexo,\n    fecha_nacimiento,\n    fecha_ingreso,\n    telefono,\n    email,\n    comentario,\n    testimonio,\n    bautizado,\n    edad,\n    foto_url,\n    foto_data,\n    iglesia,\n    direccion,\n    estado",estados:"++id,descripcion"}),n.open().catch((function(e){console.error("Falló al abrir la base de Dexie: "+e),(0,s.Y8)("Falló al abrir la base de Dexie: "+e)}));const l=n},5962:(e,a,o)=>{"use strict";o.d(a,{Z:()=>R});var t=o(9835),s=o(6970),n=o(9742),l=o.n(n);const i={class:""},r={key:0,class:"row q-gutter-y-sm bg-white q-pa-xs"},c={class:"col-12 q-mb-sm"},d=(0,t._)("span",{class:"q-mr-sm"},"Datos de la persona",-1),u={class:"col-12 text-center"},m={class:"col-12 text-center q-py-sm q-ma-none"},p={"text-color":"grey-8",class:"q-ma-none q-py-sm"},h={"text-color":"grey-8",class:"q-ma-none q-py-sm"},g={key:0,class:"col-12 q-mt-lg"},f=(0,t._)("span",{class:"q-mr-sm"},"Datos adicioneles opcionales",-1),y=[f],w={class:"row items-center justify-end"},b={class:"row items-center justify-end"},Z={class:"row items-center justify-end"},_={class:"row items-center justify-end"};function v(e,a,o,n,f,v){const x=(0,t.up)("q-icon"),q=(0,t.up)("q-img"),V=(0,t.up)("q-btn"),C=(0,t.up)("q-file"),k=(0,t.up)("q-input"),E=(0,t.up)("q-item-section"),j=(0,t.up)("q-item"),S=(0,t.up)("q-item-label"),I=(0,t.up)("q-select"),W=(0,t.up)("q-date"),D=(0,t.up)("q-popup-proxy"),M=(0,t.up)("q-time"),A=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",i,[e.isReady?((0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",c,[d,e.verMas?((0,t.wg)(),(0,t.j4)(x,{key:0,name:"add",rounded:"",size:"xs",class:"bg-green-3",onClick:a[0]||(a[0]=a=>e.verMas=!1)})):((0,t.wg)(),(0,t.j4)(x,{key:1,rounded:"",name:"add",size:"xs",class:"",onClick:a[1]||(a[1]=a=>e.verMas=!0)}))]),(0,t._)("div",u,[(0,t.Wm)(q,{alt:"Foto",src:e.getURLImagen,contain:!1,ref:e.ImagenRef,"spinner-color":"green",class:"text-grey-3",style:{height:"200px",width:"200px"},"placeholder-src":l(),onClick:a[2]||(a[2]=a=>e.onSeleccionarArchivoClick())},null,8,["src"]),(0,t._)("div",m,[(0,t.Wm)(V,{onClick:a[3]||(a[3]=a=>e.onSeleccionarArchivoClick()),dense:"",class:"q-px-sm no-caps text-center",label:"Seleccionar foto / Tomar foto"}),(0,t.Wm)(C,{ref:e.ImagenDataRef,class:"q-mt-sm fotoRef1",modelValue:e.persona.foto_data,"onUpdate:modelValue":a[4]||(a[4]=a=>e.persona.foto_data=a),accept:".jpg, image/*"},null,8,["modelValue"])])]),(0,t.Wm)(k,{filled:"",dense:"",clearable:"",disable:e.modoVista,modelValue:e.persona.nombre,"onUpdate:modelValue":a[5]||(a[5]=a=>e.persona.nombre=a),label:"Nombre*",class:"col-sm-6 col-12 q-pr-sm",type:"text",maxlength:"200",hint:"Ej: Fulanito","hide-bottom-space":""},null,8,["disable","modelValue"]),(0,t.Wm)(k,{filled:"",dense:"",clearable:"",disable:e.modoVista,modelValue:e.persona.apellido,"onUpdate:modelValue":a[6]||(a[6]=a=>e.persona.apellido=a),label:"Apellido*",class:"col-sm-6 col-12 q-pr-sm",type:"text",maxlength:"200",hint:"Ej: Perez","hide-bottom-space":""},null,8,["disable","modelValue"]),(0,t.Wm)(k,{filled:"",dense:"",clearable:"",disable:e.modoVista,modelValue:e.persona.telefono,"onUpdate:modelValue":a[7]||(a[7]=a=>e.persona.telefono=a),label:"Telefono*",class:"col-sm-6 col-12 q-pr-sm",type:"text",maxlength:"200",hint:"Ej: +5491123456789","hide-bottom-space":""},null,8,["disable","modelValue"]),(0,t.Wm)(I,{modelValue:e.persona.sexo,"onUpdate:modelValue":a[8]||(a[8]=a=>e.persona.sexo=a),label:"Sexo*","virtual-scroll-slice-size":"60","use-chips":"",filled:"",dense:"",hint:"Ej: Mujer",clearable:"",class:"col-sm-6 col-12 q-pr-sm","options-selected-class":"text-grey",options:[{descripcion:"Hombre",codigo:"M"},{descripcion:"Mujer",codigo:"F"}]},{"selected-item":(0,t.w5)((e=>[(0,t._)("span",p,(0,s.zw)(e.opt.descripcion),1)])),"no-option":(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Wm)(E,{class:"text-italic text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Sin opciones ")])),_:1})])),_:1})])),option:(0,t.w5)((e=>[(0,t.Wm)(j,(0,s.vs)((0,t.F4)(e.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.opt.descripcion),1)])),_:2},1024),(0,t.Wm)(S,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.opt.codigo),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue"]),(0,t.Wm)(I,{modelValue:e.persona.estado,"onUpdate:modelValue":a[9]||(a[9]=a=>e.persona.estado=a),label:"Estado*","virtual-scroll-slice-size":"60","use-chips":"",filled:"",dense:"",hint:"Ej: ACTIVO",clearable:"",class:"col-sm-6 col-12 q-pr-sm","options-selected-class":"text-grey",options:e.opcionesEstados},{"selected-item":(0,t.w5)((e=>[(0,t._)("span",h,(0,s.zw)(e.opt.descripcion),1)])),option:(0,t.w5)((e=>[(0,t.Wm)(j,(0,s.vs)((0,t.F4)(e.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.opt.descripcion),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"]),e.verMas?((0,t.wg)(),(0,t.iD)("div",g,y)):(0,t.kq)("",!0),e.verMas?((0,t.wg)(),(0,t.j4)(k,{key:1,dense:"",clearable:"",disable:e.modoVista,modelValue:e.persona.direccion,"onUpdate:modelValue":a[10]||(a[10]=a=>e.persona.direccion=a),label:"Direccion",class:"col-sm-6 col-12 q-pr-sm",type:"text",hint:"Ej: Calle falsa 123","hide-bottom-space":""},null,8,["disable","modelValue"])):(0,t.kq)("",!0),e.verMas?((0,t.wg)(),(0,t.j4)(k,{key:2,dense:"",clearable:"",disable:e.modoVista,modelValue:e.persona.email,"onUpdate:modelValue":a[11]||(a[11]=a=>e.persona.email=a),label:"Correo electronico / Email",class:"col-sm-6 col-12 q-pr-sm",type:"text",maxlength:"200",hint:"Ej: prz@gmail.com","hide-bottom-space":""},null,8,["disable","modelValue"])):(0,t.kq)("",!0),e.verMas?((0,t.wg)(),(0,t.j4)(k,{key:3,dense:"",clearable:"",disable:e.modoVista,modelValue:e.persona.iglesia,"onUpdate:modelValue":a[12]||(a[12]=a=>e.persona.iglesia=a),label:"Iglesia Cede",class:"col-sm-6 col-12 q-pr-sm",type:"text",maxlength:"200",hint:"Ej: Madero","hide-bottom-space":""},null,8,["disable","modelValue"])):(0,t.kq)("",!0),e.verMas?((0,t.wg)(),(0,t.j4)(k,{key:4,dense:"",clearable:"",disable:e.modoVista,modelValue:e.persona.comentario,"onUpdate:modelValue":a[13]||(a[13]=a=>e.persona.comentario=a),label:"Comentario",autogrow:"",class:"col-sm-6 col-12 q-pr-sm",type:"text",maxlength:"200",hint:"Ej: Tiene pelo rojo","hide-bottom-space":""},null,8,["disable","modelValue"])):(0,t.kq)("",!0),e.verMas?((0,t.wg)(),(0,t.j4)(k,{key:5,dense:"",clearable:"",disable:e.modoVista,modelValue:e.persona.testimonio,"onUpdate:modelValue":a[14]||(a[14]=a=>e.persona.testimonio=a),label:"Testimonio",autogrow:"",class:"col-sm-6 col-12 q-pr-sm",type:"text",maxlength:"200",hint:"Ej: Supero la depresion","hide-bottom-space":""},null,8,["disable","modelValue"])):(0,t.kq)("",!0),e.verMas?((0,t.wg)(),(0,t.j4)(k,{key:6,dense:"",clearable:"",disable:e.modoVista,modelValue:e.persona.edad,"onUpdate:modelValue":a[15]||(a[15]=a=>e.persona.edad=a),label:"Edad",class:"col-sm-6 col-12 q-pr-sm",type:"number",hint:"Ej: 45","hide-bottom-space":""},null,8,["disable","modelValue"])):(0,t.kq)("",!0),e.verMas?((0,t.wg)(),(0,t.j4)(k,{key:7,label:"Fecha de Nacimiento",dense:"",clearable:"",hint:"Ej: 26-02-1800",modelValue:e.persona.fecha_nacimiento,"onUpdate:modelValue":a[18]||(a[18]=a=>e.persona.fecha_nacimiento=a),class:"col-sm-6 col-12 q-pr-sm"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(x,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{modelValue:e.persona.fecha_nacimiento,"onUpdate:modelValue":a[16]||(a[16]=a=>e.persona.fecha_nacimiento=a),mask:"YYYY-MM-DD HH:mm"},{default:(0,t.w5)((()=>[(0,t._)("div",w,[(0,t.wy)((0,t.Wm)(V,{label:"Close",color:"primary",flat:""},null,512),[[A]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,t.w5)((()=>[(0,t.Wm)(x,{name:"access_time",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{modelValue:e.persona.fecha_nacimiento,"onUpdate:modelValue":a[17]||(a[17]=a=>e.persona.fecha_nacimiento=a),mask:"YYYY-MM-DD HH:mm",format24h:""},{default:(0,t.w5)((()=>[(0,t._)("div",b,[(0,t.wy)((0,t.Wm)(V,{label:"Close",color:"primary",flat:""},null,512),[[A]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])):(0,t.kq)("",!0),e.verMas?((0,t.wg)(),(0,t.j4)(k,{key:8,label:"Fecha de Ingreso",dense:"",clearable:"",hint:"Ej: 06-02-1830",modelValue:e.persona.fecha_ingreso,"onUpdate:modelValue":a[21]||(a[21]=a=>e.persona.fecha_ingreso=a),class:"col-sm-6 col-12 q-pr-sm"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(x,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{modelValue:e.persona.fecha_ingreso,"onUpdate:modelValue":a[19]||(a[19]=a=>e.persona.fecha_ingreso=a),mask:"YYYY-MM-DD HH:mm"},{default:(0,t.w5)((()=>[(0,t._)("div",Z,[(0,t.wy)((0,t.Wm)(V,{label:"Close",color:"primary",flat:""},null,512),[[A]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,t.w5)((()=>[(0,t.Wm)(x,{name:"access_time",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{modelValue:e.persona.fecha_ingreso,"onUpdate:modelValue":a[20]||(a[20]=a=>e.persona.fecha_ingreso=a),mask:"YYYY-MM-DD HH:mm",format24h:""},{default:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t.wy)((0,t.Wm)(V,{label:"Close",color:"primary",flat:""},null,512),[[A]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])}var x=o(9302),q=o(499),V=o(2850),C=o(1820),k=o(1154);const E=(0,t.aZ)({name:"EventoCrearAbm",components:{CustomSelect:k.Z},props:{persona:{type:V.Z,required:!0},modoVista:{type:Boolean,required:!1,default:!1},estaEditando:{type:Boolean,required:!1,default:!1}},setup({persona:e,estaEditando:a}){(0,x.Z)();const o=(0,q.iH)(!1),s=(0,q.iH)(!1),n=(0,q.iH)(),l=(0,q.iH)(),i=(0,q.iH)([]),r=(0,t.Fl)((()=>{if(!e.foto_data)return e.foto_url;const a=window.URL.createObjectURL(e.foto_data);return e.foto_url=a,a}));function c(){e=new V.Z}function d(){e.validacionParaCrear()&&e.crear()}function u(e,a){return e.id&&e.id.toLowerCase().includes(a)||e.articulo&&e.articulo.toLowerCase().includes(a)||e.descripcion&&e.descripcion.toLowerCase().includes(a)||e.Descripcion&&e.Descripcion.toLowerCase().includes(a)||e.rubro&&e.rubro.toLowerCase().includes(a)||e.marca&&e.marca.toLowerCase().includes(a)||e.precio&&e.precio.toLowerCase().includes(a)||e.stock&&e.stock.toLowerCase().includes(a)||e.modelo&&e.modelo.toLowerCase().includes(a)}function m(){const e=document.getElementsByClassName("fotoRef1");e[0].click()}async function p(){i.value=await C.Z.getAll()}return(0,t.bv)((async()=>{await p(),a&&(e.estado=i.value.find((a=>String(a.descripcion)===String(e.estado)))),o.value=!0})),{ImagenDataRef:l,ImagenRef:n,isReady:o,verMas:s,getURLImagen:r,opcionesEstados:i,onResetClick:c,onGrabarClick:d,customFilterFunction:u,onSeleccionarArchivoClick:m}}});var j=o(1639),S=o(2857),I=o(335),W=o(8879),D=o(9420),M=o(3119),A=o(2259),L=o(490),F=o(1233),z=o(3115),U=o(2765),T=o(4351),P=o(6770),Y=o(2146),B=o(9984),H=o.n(B);const Q=(0,j.Z)(E,[["render",v]]),R=Q;H()(E,"components",{QIcon:S.Z,QImg:I.Z,QBtn:W.Z,QFile:D.Z,QInput:M.Z,QSelect:A.Z,QItem:L.Z,QItemSection:F.Z,QItemLabel:z.Z,QPopupProxy:U.Z,QDate:T.Z,QTime:P.Z}),H()(E,"directives",{ClosePopup:Y.Z})},1154:(e,a,o)=>{"use strict";o.d(a,{Z:()=>w});var t=o(9835),s=o(6970);const n={class:"text-light"};function l(e,a,o,l,i,r){const c=(0,t.up)("q-item-section"),d=(0,t.up)("q-item"),u=(0,t.up)("q-item-label"),m=(0,t.up)("q-select");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(m,{dense:"",label:o.label,value:o.value,onInput:a[0]||(a[0]=a=>e.$emit("input",a)),"use-input":"","input-debounce":"0",options:l.opcionesItemsFiltrados,onFilter:l.filterFn,"option-label":o.optionLabel,"emit-value":"","map-options":"",clearable:"",filled:"","hide-bottom-space":"",class:"ellipsis",disabled:o.disabled},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)(" No hay resultados ")])),_:1})])),_:1})])),option:(0,t.w5)((e=>[(0,t.Wm)(d,(0,t.dG)(e.itemProps,(0,t.mx)(e.itemEvents)),{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t._)("span",n,(0,s.zw)(e.opt[o.labelMostrar]),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["label","value","options","onFilter","option-label","disabled"])])}o(9665);var i=o(499),r=o(9028);const c={name:"CustomSelectPublicaciones",props:{value:{type:Object,required:!1},modo:{type:String,default:"default"},label:{type:String,required:!0,default:"Desc"},labelMostrar:{type:String,required:!1,default:"descripcion"},opciones:{type:Array,required:!0,default:[]},keys:{type:Array,required:!0,default:[]},funcionFilter:{type:Function,required:!1,default:()=>{}},optionLabel:{type:String,required:!1,default:"descripcion"},disabled:{type:Boolean,required:!1,default:!1}},setup(e){const a=(0,i.iH)([]),o=(0,i.iH)(null),s=(0,i.iH)({isCaseSensitive:!1,includeScore:!1,includeMatches:!1,minMatchCharLength:2,shouldSort:!0,findAllMatches:!1,threshold:.3,location:0,distance:100,ignoreLocation:!1,useExtendedSearch:!0,ignoreFieldNorm:!1,keys:[]});function n(t,n){n(""!==t?()=>{const n=t.toLowerCase();e.opciones.length>0&&(s.value.keys=e.keys),o.value=new r.Z(e.opciones,s.value);let l=[];o.value.search(n).forEach((e=>{l.push(e.item)})),a.value=[...l]}:()=>{a.value=e.opciones})}return(0,t.bv)((async()=>{})),{opcionesItemsFiltrados:a,filterFn:n}}};var d=o(1639),u=o(2259),m=o(490),p=o(1233),h=o(3115),g=o(9984),f=o.n(g);const y=(0,d.Z)(c,[["render",l]]),w=y;f()(c,"components",{QSelect:u.Z,QItem:m.Z,QItemSection:p.Z,QItemLabel:h.Z})},9742:(e,a,o)=>{e.exports=o.p+"img/imagenDefecto.472461e6.png"},213:(e,a,o)=>{e.exports=o.p+"img/logo.6e577b05.jpeg"}}]);