"use strict";(self["webpackChunkgamesoft"]=self["webpackChunkgamesoft"]||[]).push([[664],{9538:function(e,t,s){s.r(t),s.d(t,{default:function(){return We}});var r=s(3396),a=s(7139);const n={class:"container"},l={class:"row justify-content-center bg-dark bg-opacity-75 p-4"},o={class:"container text-center border border-light rounded"};function i(e,t,s,i,u,m){const c=(0,r.up)("HeaderComponent"),d=(0,r.up)("AdminDashboard"),p=(0,r.up)("FooterComponent");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r._)("div",n,[(0,r._)("div",l,[(0,r._)("header",o,[(0,r._)("h3",null,[(0,r.Uk)(" Bienvenue "),(0,r._)("strong",null,(0,a.zw)(m.currentUser.username),1),(0,r.Uk)(" ! ")])])]),m.showAdminBoard?((0,r.wg)(),(0,r.j4)(d,{key:0})):(0,r.kq)("",!0)]),(0,r.Wm)(p)],64)}s(7658);var u=s(6999),m=s(5016);const c={class:"container"},d={class:"row d-flex justify-content-center mb-4"},p={class:"card col-6"},g=(0,r._)("strong",null,"Token:",-1),h=(0,r._)("strong",null,"Id:",-1),f=(0,r._)("strong",null,"Email:",-1),b=(0,r._)("strong",null,"Authorities:",-1);function _(e,t,s,n,l,o){const i=(0,r.up)("GamesList"),u=(0,r.up)("AddGame");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",d,[(0,r._)("div",p,[(0,r._)("p",null,[g,(0,r.Uk)(" "+(0,a.zw)(o.currentUser.accessToken.substring(0,20))+" ... "+(0,a.zw)(o.currentUser.accessToken.substr(o.currentUser.accessToken.length-20)),1)]),(0,r._)("p",null,[h,(0,r.Uk)(" "+(0,a.zw)(o.currentUser.id),1)]),(0,r._)("p",null,[f,(0,r.Uk)(" "+(0,a.zw)(o.currentUser.email),1)]),b,(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.currentUser.roles,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t},(0,a.zw)(e),1)))),128))])])]),(0,r.Wm)(i),(0,r.Wm)(u)])}const y={class:"container border-top"},v={class:"row mt-2"},w={class:"table table-striped"},G=(0,r._)("thead",{class:"table-dark border-light"},[(0,r._)("tr",null,[(0,r._)("th",null,"Nom du jeu"),(0,r._)("th",null,"Date de production"),(0,r._)("th",null,"Score d'intérêt"),(0,r._)("th")])],-1);function D(e,t,s,a,n,l){const o=(0,r.up)("AddGame"),i=(0,r.up)("GamesListElement");return(0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("div",v,[(0,r.Wm)(o)]),(0,r._)("table",w,[G,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.elements,(e=>((0,r.wg)(),(0,r.j4)(i,{key:e.name,title:e.title,releaseDate:e.releaseDate,score:e.score},null,8,["title","releaseDate","score"])))),128))])])])}const x=(0,r._)("td",null,[(0,r._)("button",{class:"btn btn-warning",type:"button"},"Modifier")],-1);function O(e,t,s,n,l,o){return(0,r.wg)(),(0,r.iD)("tr",null,[(0,r._)("td",null,(0,a.zw)(s.title),1),(0,r._)("td",null,(0,a.zw)(s.releaseDate),1),(0,r._)("td",null,(0,a.zw)(s.score),1),x])}var j={props:["title","releaseDate","score"]},U=s(89);const W=(0,U.Z)(j,[["render",O]]);var k=W,E=s(4161);const z="http://localhost:8080/api/game/";class A{addGame(e){return E.Z.post(z+"addgame",{title:e.title,description:e.description,studioName:e.studioName,pictures:e.title+" 001",plateforms:e.plateforms,priority:e.priority,score:e.score,gameEngine:e.gameEngine,releaseDate:e.releaseDate,budget:e.budget,status:e.status,typeOfGame:e.typeOfGame,numberOfPlayers:e.numberOfPlayers}).then((e=>e.data))}getGamesList(){return E.Z.get(z+"gameslist").then((e=>e))}}var P=new A,Z=s(9242);const L={class:"container"},I=(0,r._)("div",{class:"row d-flex justify-content-between mb-2"},[(0,r._)("h2",{class:"w-50"},"Liste des jeux"),(0,r._)("button",{id:"btnAddGame",class:"btn btn-outline-light col-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne"},"Ajouter un jeu")],-1),q={class:"accordion accordion-flush",id:"addGame"},M={class:"accordion-item bg-transparent"},C={id:"collapseOne",class:"accordion-collapse collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#addGame"},T={class:"accordion-body text-white p-0"},V={class:"d-flex justify-content-center"},F=(0,r._)("h2",{class:"text-center mb-4"},"Ajouter un jeu",-1),N={class:"form-group mb-4"},B=(0,r._)("label",{for:"title"},"Nom du jeu :",-1),H={class:"form-group mb-4"},S=(0,r._)("label",{for:"description"},"Description :",-1),$={class:"form-group mb-4"},R=(0,r._)("label",{for:"plateforms"},"Plateforme (PC et/ou Xboite) :",-1),Y={class:"form-group mb-4"},K=(0,r._)("label",{for:"priority"},"Priorité de développement :",-1),X={class:"form-group mb-4"},J=(0,r._)("label",{for:"gameEngine"},"Moteur du jeu (Unreal Engine, Unity ou CryEngine) :",-1),Q={class:"form-group mb-4"},ee=(0,r._)("label",{for:"releaseDate"},"Date de sortie estimée du jeu :",-1),te={class:"form-group mb-4"},se=(0,r._)("label",{for:"budget"},"Budget alloué au jeu (en €) :",-1),re={class:"form-group mb-4"},ae=(0,r._)("label",{for:"status"},"Statut du jeu (en production ou en développement) :",-1),ne={class:"form-group mb-4"},le=(0,r._)("label",{for:"typeOfGame"},"Type de jeu (RPG, MMO, Aventure...) :",-1),oe={class:"form-group mb-4"},ie=(0,r._)("label",{for:"numberOfPlayers"},"Nombre de joueurs :",-1),ue={class:"d-flex justify-content-center mb-4"},me=["disabled"],ce={class:"spinner-border spinner-border-sm"},de={class:"container d-flex justify-content-center"},pe={class:"row col-6 position-fixed"};function ge(e,t,s,n,l,o){const i=(0,r.up)("Field"),u=(0,r.up)("ErrorMessage"),m=(0,r.up)("Form");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",L,[I,(0,r._)("div",q,[(0,r._)("div",M,[(0,r._)("div",C,[(0,r._)("div",T,[(0,r._)("div",V,[(0,r.Wm)(m,{id:"addgameform",class:"bg-light text-dark col-10 col-md-8 p-4 rounded",name:"form",onSubmit:o.addGame,"validation-schema":l.schema},{default:(0,r.w5)((()=>[F,(0,r._)("div",N,[B,(0,r.Wm)(i,{name:"title",id:"titleInput",type:"text",class:"form-control",placeholder:"Titre"}),(0,r.Wm)(u,{name:"title",class:"text-danger"})]),(0,r._)("div",H,[S,(0,r.Wm)(i,{name:"description",id:"descriptionInput",type:"text",class:"form-control",placeholder:"Description"}),(0,r.Wm)(u,{name:"description",class:"text-danger"})]),(0,r._)("div",$,[R,(0,r.Wm)(i,{name:"plateforms",id:"plateformsInput",type:"text",class:"form-control",placeholder:"Supports (Xboite et/ou PC)"}),(0,r.Wm)(u,{name:"plateforms",class:"text-danger"})]),(0,r._)("div",Y,[K,(0,r.Wm)(i,{name:"priority",id:"priorityInput",type:"number",class:"form-control",placeholder:"Priorité de développement (1-5)"}),(0,r.Wm)(u,{name:"priority",class:"text-danger"})]),(0,r._)("div",X,[J,(0,r.Wm)(i,{name:"gameEngine",id:"gameEngineInput",type:"text",class:"form-control",placeholder:"Moteur du jeu (Unity, Unreal ou CryEngine)"}),(0,r.Wm)(u,{name:"gameEngine",class:"text-danger"})]),(0,r._)("div",Q,[ee,(0,r.Wm)(i,{name:"releaseDate",id:"releaseDateInput",type:"date",class:"form-control",placeholder:"Date de sortie du jeu (estimée)"}),(0,r.Wm)(u,{name:"releaseDate",class:"text-danger"})]),(0,r._)("div",te,[se,(0,r.Wm)(i,{name:"budget",id:"budgetInput",type:"number",class:"form-control",placeholder:"Budget (en€)"}),(0,r.Wm)(u,{name:"budget",class:"text-danger"})]),(0,r._)("div",re,[ae,(0,r.Wm)(i,{name:"status",id:"statusInput",type:"text",class:"form-control",placeholder:"Statut (en production ou en cours de développement)"}),(0,r.Wm)(u,{name:"status",class:"text-danger"})]),(0,r._)("div",ne,[le,(0,r.Wm)(i,{name:"typeOfGame",id:"typeOfGameInput",type:"text",class:"form-control",placeholder:"Type de jeu (RPG, MMO, Aventure...)"}),(0,r.Wm)(u,{name:"typeOfGame",class:"text-danger"})]),(0,r._)("div",oe,[ie,(0,r.Wm)(i,{name:"numberOfPlayers",id:"numberOfPlayersInput",type:"text",class:"form-control",placeholder:"Nombre de joueurs"}),(0,r.Wm)(u,{name:"numberOfPlayers",class:"text-danger"})]),(0,r._)("div",ue,[(0,r._)("button",{class:"btn btn-outline-dark",disabled:e.loading,type:"submit","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne"},[(0,r.wy)((0,r._)("span",ce,null,512),[[Z.F8,e.loading]]),(0,r.Uk)(" Ajouter ")],8,me)])])),_:1},8,["onSubmit","validation-schema"])])])])])])]),(0,r._)("div",de,[(0,r._)("div",pe,[l.message?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,a.C_)(["alert",l.successful?"alert-success":"alert-danger"])},(0,a.zw)(l.message),3)):(0,r.kq)("",!0)])])],64)}var he=s(5708),fe=s(7629),be={name:"AddGame",components:{Form:he.l0,Field:he.gN,ErrorMessage:he.Bc},data(){const e=fe.Ry().shape({title:fe.Z_().required("Veuillez entrer un titre !"),description:fe.Z_().required("Veuillez remplir ce champ !"),plateforms:fe.Z_().required("Veuillez remplir ce champ !"),priority:fe.Rx().required("Veuillez remplir ce champ !"),gameEngine:fe.Z_().required("Veuillez remplir ce champ !"),releaseDate:fe.Z_().required("Veuillez remplir ce champ !"),budget:fe.Rx().required("Veuillez remplir ce champ !"),status:fe.Z_().required("Veuillez remplir ce champ !"),typeOfGame:fe.Z_().required("Veuillez remplir ce champ !"),numberOfPlayers:fe.Z_().required("Veuillez remplir ce champ !")});return{submitted:!1,successful:!1,message:"",schema:e}},computed:{currentUser(){return this.$store.state.auth.user}},mounted(){this.currentUser||this.$router.push("/signin")},methods:{addGame(e){this.message="",this.successful=!1,this.loading=!0,P.addGame(e).then((e=>{this.submitted=!0,this.successful=!0,this.loading=!1,this.message=e.message,this.title=e.title,this.description=e.description,this.studioName="Gamesoft",this.plateforms=e.plateforms,this.priority=e.priority,this.gameEngine=e.gameEngine,this.budget=e.budget,this.status=e.status,this.typeOfGame=e.typeOfGame,this.numberOfPlayers=e.numberOfPlayers;const t=document.getElementById("addgameform");HTMLFormElement.prototype.reset.call(t),this.$parent.refreshGamesList(),setTimeout((()=>{this.message=""}),5e3)}),(e=>{this.message=e.response&&e.response.data||e.message||e.toString(),this.successful=!1,this.loading=!1;const t=document.getElementById("addgameform");HTMLFormElement.prototype.reset.call(t),setTimeout((()=>{this.message=""}),5e3)}))}}};const _e=(0,U.Z)(be,[["render",ge]]);var ye=_e,ve={name:"GamesList",props:["title","releaseDate","score"],components:{GamesListElement:k,AddGame:ye},data(){return{elements:[]}},methods:{getGamesList(){P.getGamesList().then((e=>{for(let t of e.data.games)this.elements.push({title:t.title,releaseDate:t.releaseDate,score:t.score})})).catch((e=>{console.log(e)}))},refreshGamesList(){this.elements=[],this.getGamesList()}},mounted(){this.getGamesList()}};const we=(0,U.Z)(ve,[["render",D]]);var Ge=we,De={name:"AdminDashboard",components:{GamesList:Ge},computed:{currentUser(){return this.$store.state.auth.user}},mounted(){this.currentUser||this.$router.push("/signin")}};const xe=(0,U.Z)(De,[["render",_]]);var Oe=xe,je={name:"AccountPage",components:{HeaderComponent:u.Z,FooterComponent:m.Z,AdminDashboard:Oe},computed:{currentUser(){return this.$store.state.auth.user},showAdminBoard(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")}},mounted(){this.currentUser||this.$router.push("/signin")}};const Ue=(0,U.Z)(je,[["render",i]]);var We=Ue}}]);
//# sourceMappingURL=664.c8a17dfb.js.map