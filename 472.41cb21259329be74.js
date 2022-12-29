"use strict";(self.webpackChunkgameOver=self.webpackChunkgameOver||[]).push([[472],{472:(I,d,s)=>{s.r(d),s.d(d,{GamesRoutingModule:()=>j});var t=s(1571),m=s(1675),r=s(9427),g=s(6895),u=s(3965),p=s(5394);function N(o,i){1&o&&t._UZ(0,"i",17)}function T(o,i){1&o&&t._UZ(0,"i",18)}const x=function(o){return["/game-details",o]};let C=(()=>{class o{constructor(){this.item=""}on(n){n.muted=!0,n.play().catch(e=>{console.log("No Video...")})}off(n){n.muted=!0,n.pause()}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-game-card"]],inputs:{item:"item"},decls:25,vars:19,consts:[[1,"content","shadow",3,"routerLink","mouseenter","mouseleave"],[1,"image","position-relative","rounded-top"],["loop","","muted","","preload","none",1,"w-100","h-100","rounded-top","position-absolute","start-0","top-0","bottom-0"],["vid",""],["type","video/webm",3,"src"],["alt","",1,"w-100","rounded-top",3,"src"],[1,"desc","p-3","rounded-bottom"],[1,"text-capitalize","h4"],[1,"d-block","text-uppercase","fw-bold","text-white","free","rounded-2"],[1,"icons","d-flex","justify-content-between"],[1,"left"],[1,"plus"],[1,"fa-solid","fa-plus","fa-xs"],[1,"right","d-flex"],[1,"badge","d-block","text-capitalize","me-2"],["class","fa-brands fa-windows",4,"ngIf"],["class","fa-solid fa-window-maximize",4,"ngIf"],[1,"fa-brands","fa-windows"],[1,"fa-solid","fa-window-maximize"]],template:function(n,e){if(1&n){const a=t.EpF();t.TgZ(0,"div",0),t.NdJ("mouseenter",function(){t.CHM(a);const M=t.MAs(3);return t.KtG(e.on(M))})("mouseleave",function(){t.CHM(a);const M=t.MAs(3);return t.KtG(e.off(M))}),t.TgZ(1,"div",1)(2,"video",2,3),t._UZ(4,"source",4),t.qZA(),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6)(7,"h2",7),t._uU(8),t.ALo(9,"limitLetters"),t.ALo(10,"limitLetters"),t.qZA(),t.TgZ(11,"span",8),t._uU(12,"free"),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.ALo(15,"limitLetters"),t.qZA(),t.TgZ(16,"div",9)(17,"div",10)(18,"div",11),t._UZ(19,"i",12),t.qZA()(),t.TgZ(20,"div",13)(21,"span",14),t._uU(22),t.qZA(),t.YNc(23,N,1,0,"i",15),t.YNc(24,T,1,0,"i",16),t.qZA()()()()}2&n&&(t.Q6J("routerLink",t.VKq(17,x,e.item.id)),t.xp6(4),t.MGl("src","https://www.freetogame.com/g/",e.item.id,"/videoplayback.webm",t.LSH),t.xp6(1),t.Q6J("src",e.item.thumbnail,t.LSH),t.xp6(3),t.Oqu(e.item.title.length>16?t.xi3(9,8,e.item.title,12):t.xi3(10,11,e.item.title,20)),t.xp6(6),t.Oqu(t.xi3(15,14,e.item.short_description,25)),t.xp6(8),t.Oqu(e.item.genre),t.xp6(1),t.Q6J("ngIf","PC (Windows)"==e.item.platform),t.xp6(1),t.Q6J("ngIf","Web Browser"==e.item.platform))},dependencies:[g.O5,r.rH,p.Y],styles:[".toast-center-center[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%)}.toast-top-center[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-center[_ngcontent-%COMP%]{bottom:0;right:0;width:100%}.toast-top-full-width[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-full-width[_ngcontent-%COMP%]{bottom:0;right:0;width:100%}.toast-top-left[_ngcontent-%COMP%]{top:12px;left:12px}.toast-top-right[_ngcontent-%COMP%]{top:12px;right:12px}.toast-bottom-right[_ngcontent-%COMP%]{right:12px;bottom:12px}.toast-bottom-left[_ngcontent-%COMP%]{bottom:12px;left:12px}.toast-title[_ngcontent-%COMP%]{font-weight:700}.toast-message[_ngcontent-%COMP%]{word-wrap:break-word}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .toast-message[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ccc;text-decoration:none}.toast-close-button[_ngcontent-%COMP%]{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#fff;text-shadow:0 1px 0 #ffffff}.toast-close-button[_ngcontent-%COMP%]:hover, .toast-close-button[_ngcontent-%COMP%]:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.4}button.toast-close-button[_ngcontent-%COMP%]{padding:0;cursor:pointer;background:transparent;border:0}.toast-container[_ngcontent-%COMP%]{pointer-events:none;position:fixed;z-index:999999}.toast-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;background-size:24px;box-shadow:0 0 12px #999;color:#fff}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]:hover{box-shadow:0 0 12px #000;opacity:1;cursor:pointer}.toast-info[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8+PC9zdmc+)}.toast-error[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8+PC9zdmc+)}.toast-success[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvPjwvc3ZnPg==)}.toast-warning[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvPjwvc3ZnPg==)}.toast-container.toast-top-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:300px;margin-left:auto;margin-right:auto}.toast-container.toast-top-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:96%;margin-left:auto;margin-right:auto}.ngx-toastr[_ngcontent-%COMP%]{background-color:#030303;pointer-events:auto}.toast-success[_ngcontent-%COMP%]{background-color:#51a351}.toast-error[_ngcontent-%COMP%]{background-color:#bd362f}.toast-info[_ngcontent-%COMP%]{background-color:#2f96b4}.toast-warning[_ngcontent-%COMP%]{background-color:#f89406}.toast-progress[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}@media all and (max-width: 240px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:11em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width: 241px) and (max-width: 480px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:18em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width: 481px) and (max-width: 768px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:15px 15px 15px 50px;width:25em}}body[_ngcontent-%COMP%]{background-color:#272b30;color:#aaa}[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:#272b30;width:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#1983e6ce;border-radius:50px;-webkit-border-radius:50px;-moz-border-radius:50px;-ms-border-radius:50px;-o-border-radius:50px}.scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:40px;height:40px;color:#1983e6ce;background-color:#fff;border-radius:50%;display:flex;justify-content:center;align-items:center;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;transition:transform .3s;-webkit-transition:transform .3s;-moz-transition:transform .3s;-ms-transition:transform .3s;-o-transition:transform .3s}.scroll-to-top[_ngcontent-%COMP%]:hover{transform:scale(1.2);-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);-o-transform:scale(1.2)}.content[_ngcontent-%COMP%]{transition:transform .2s}.content[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{opacity:0;transition:opacity .7s;-webkit-transition:opacity .7s;-moz-transition:opacity .7s;-ms-transition:opacity .7s;-o-transition:opacity .7s}.content[_ngcontent-%COMP%]:hover{transform:scale(1.02);-webkit-transform:scale(1.02,1.02);-moz-transform:scale(1.02,1.02);-ms-transform:scale(1.02,1.02);-o-transform:scale(1.02,1.02)}.content[_ngcontent-%COMP%]:hover   video[_ngcontent-%COMP%]{opacity:1}.content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{background-color:#32383e;position:relative}.content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .free[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;padding:5px 8px;font-size:12px;position:absolute;top:20px;right:8px;background-color:#1983e6ce}.content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]{width:15px;height:15px;background-color:#aaa;display:flex;justify-content:center;align-items:center;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px}.content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#32383e}.content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{font-size:12px;color:#272b30;background-color:#aaa;width:-moz-fit-content;width:fit-content;padding:1px 10px}"]}),o})();const y=["scrollable"];function O(o,i){1&o&&t._UZ(0,"app-loading-screen")}function L(o,i){if(1&o&&(t.TgZ(0,"div",7),t._UZ(1,"app-game-card",8),t.qZA()),2&o){const n=i.$implicit;t.xp6(1),t.Q6J("item",n)}}function w(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.displayMoreGames())}),t._uU(1,"see more"),t.qZA()}}function b(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.scrollToTop())}),t._UZ(1,"i",11),t.qZA()}}let l=(()=>{class o{constructor(n,e,a){this._GamesService=n,this._ActivatedRoute=e,this._ViewportScroller=a,this.items=[],this.oldGames=[],this.newGames=[],this.show=!1,this.isLoading=!1}displayMoreGames(){this.oldGames=this.items.splice(0,20),this.newGames=this.newGames.concat(this.oldGames)}ngOnInit(){this.isLoading=!0,this._ActivatedRoute.paramMap.subscribe(n=>{let e=n.get("listBy"),a=n.get("type");"all"==e&&this._GamesService.getAllGame().subscribe({next:c=>{this.isLoading=!1,this.items=c,this.newGames=c.splice(0,20)}}),"platforms"==e&&this._GamesService.getGameByPlatform(a).subscribe({next:c=>{this.isLoading=!1,this.items=c,this.newGames=c.splice(0,20)}}),"categories"==e&&this._GamesService.getGameByCategory(a).subscribe({next:c=>{this.isLoading=!1,this.items=c,this.newGames=c.splice(0,20)}}),"sort-by"==e&&this._GamesService.getSortedGames(a).subscribe({next:c=>{this.isLoading=!1,this.items=c,this.newGames=c.splice(0,20)}})})}scrollToTop(){this._ViewportScroller.scrollToPosition([0,0])}onViewportScroll(){let[n,e]=this._ViewportScroller.getScrollPosition();this.show=e>=300}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(m.B),t.Y36(r.gz),t.Y36(g.EM))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],viewQuery:function(n,e){if(1&n&&t.Gf(y,5),2&n){let a;t.iGM(a=t.CRH())&&(e.scroll=a.first)}},hostBindings:function(n,e){1&n&&t.NdJ("scroll",function(c){return e.onViewportScroll(c)},!1,t.evT)},decls:8,vars:4,consts:[[4,"ngIf"],["scrollable",""],[1,"container","py-5"],[1,"row","my-5"],["class","col-lg-3 col-md-4 col-sm-6 mb-5",4,"ngFor","ngForOf"],["class","btn btn-outline-secondary text-capitalize mx-auto",3,"click",4,"ngIf"],["class","scroll-to-top",3,"click",4,"ngIf"],[1,"col-lg-3","col-md-4","col-sm-6","mb-5"],[3,"item"],[1,"btn","btn-outline-secondary","text-capitalize","mx-auto",3,"click"],[1,"scroll-to-top",3,"click"],[1,"fa-solid","fa-jet-fighter","fa-rotate-270","fa-xl"]],template:function(n,e){1&n&&(t.YNc(0,O,1,0,"app-loading-screen",0),t.TgZ(1,"section",null,1)(3,"div",2)(4,"div",3),t.YNc(5,L,2,1,"div",4),t.YNc(6,w,2,0,"button",5),t.qZA()()(),t.YNc(7,b,2,0,"div",6)),2&n&&(t.Q6J("ngIf",e.isLoading),t.xp6(5),t.Q6J("ngForOf",e.newGames),t.xp6(1),t.Q6J("ngIf",e.newGames.length>=20),t.xp6(1),t.Q6J("ngIf",e.show))},dependencies:[g.sg,g.O5,u.g,C],styles:[".toast-center-center[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%)}.toast-top-center[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-center[_ngcontent-%COMP%]{bottom:0;right:0;width:100%}.toast-top-full-width[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-full-width[_ngcontent-%COMP%]{bottom:0;right:0;width:100%}.toast-top-left[_ngcontent-%COMP%]{top:12px;left:12px}.toast-top-right[_ngcontent-%COMP%]{top:12px;right:12px}.toast-bottom-right[_ngcontent-%COMP%]{right:12px;bottom:12px}.toast-bottom-left[_ngcontent-%COMP%]{bottom:12px;left:12px}.toast-title[_ngcontent-%COMP%]{font-weight:700}.toast-message[_ngcontent-%COMP%]{word-wrap:break-word}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .toast-message[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ccc;text-decoration:none}.toast-close-button[_ngcontent-%COMP%]{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#fff;text-shadow:0 1px 0 #ffffff}.toast-close-button[_ngcontent-%COMP%]:hover, .toast-close-button[_ngcontent-%COMP%]:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.4}button.toast-close-button[_ngcontent-%COMP%]{padding:0;cursor:pointer;background:transparent;border:0}.toast-container[_ngcontent-%COMP%]{pointer-events:none;position:fixed;z-index:999999}.toast-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;background-size:24px;box-shadow:0 0 12px #999;color:#fff}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]:hover{box-shadow:0 0 12px #000;opacity:1;cursor:pointer}.toast-info[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8+PC9zdmc+)}.toast-error[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8+PC9zdmc+)}.toast-success[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvPjwvc3ZnPg==)}.toast-warning[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvPjwvc3ZnPg==)}.toast-container.toast-top-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:300px;margin-left:auto;margin-right:auto}.toast-container.toast-top-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:96%;margin-left:auto;margin-right:auto}.ngx-toastr[_ngcontent-%COMP%]{background-color:#030303;pointer-events:auto}.toast-success[_ngcontent-%COMP%]{background-color:#51a351}.toast-error[_ngcontent-%COMP%]{background-color:#bd362f}.toast-info[_ngcontent-%COMP%]{background-color:#2f96b4}.toast-warning[_ngcontent-%COMP%]{background-color:#f89406}.toast-progress[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}@media all and (max-width: 240px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:11em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width: 241px) and (max-width: 480px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:18em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width: 481px) and (max-width: 768px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:15px 15px 15px 50px;width:25em}}body[_ngcontent-%COMP%]{background-color:#272b30;color:#aaa}[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:#272b30;width:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#1983e6ce;border-radius:50px;-webkit-border-radius:50px;-moz-border-radius:50px;-ms-border-radius:50px;-o-border-radius:50px}.scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:40px;height:40px;color:#1983e6ce;background-color:#fff;border-radius:50%;display:flex;justify-content:center;align-items:center;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;transition:transform .3s;-webkit-transition:transform .3s;-moz-transition:transform .3s;-ms-transition:transform .3s;-o-transition:transform .3s}.scroll-to-top[_ngcontent-%COMP%]:hover{transform:scale(1.2);-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);-o-transform:scale(1.2)}button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}"]}),o})();const D=[{path:":listBy/:type",component:l,title:"games"},{path:":listBy",component:l,title:"games"}];let j=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.Bz.forChild(D),r.Bz]}),o})()}}]);