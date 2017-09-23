"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var menu_component_component_1 = require("./menu-component/menu-component.component");
var cabecalho_component_1 = require("./cabecalho/cabecalho.component");
var sobre_min_component_1 = require("./sobre-min/sobre-min.component");
var conhecimento_component_1 = require("./conhecimento/conhecimento.component");
var formacao_component_1 = require("./formacao/formacao.component");
var contactos_component_1 = require("./contactos/contactos.component");
var rodape_component_1 = require("./rodape/rodape.component");
var ngx_scroll_event_1 = require("ngx-scroll-event");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            menu_component_component_1.MenuComponentComponent,
            cabecalho_component_1.CabecalhoComponent,
            sobre_min_component_1.SobreMinComponent,
            conhecimento_component_1.ConhecimentoComponent,
            formacao_component_1.FormacaoComponent,
            contactos_component_1.ContactosComponent,
            rodape_component_1.RodapeComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            ngx_scroll_event_1.ScrollEventModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
