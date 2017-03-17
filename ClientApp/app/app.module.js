"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular2_universal_1 = require("angular2-universal");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
var approach_component_1 = require("./components/approach/approach.component");
var services_component_1 = require("./components/services/services.component");
var careers_component_1 = require("./components/careers/careers.component");
var contact_component_1 = require("./components/contact/contact.component");
var angular2_jwt_1 = require("angular2-jwt");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            navmenu_component_1.NavMenuComponent,
            approach_component_1.ApproachComponent,
            careers_component_1.CareersComponent,
            contact_component_1.ContactComponent,
            services_component_1.ServicesComponent,
            home_component_1.HomeComponent
        ],
        providers: [
            angular2_jwt_1.AUTH_PROVIDERS
        ],
        imports: [
            angular2_universal_1.UniversalModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'services', component: services_component_1.ServicesComponent },
                { path: 'approach', component: approach_component_1.ApproachComponent },
                { path: 'careers', component: approach_component_1.ApproachComponent },
                { path: 'contact', component: approach_component_1.ApproachComponent },
                { path: '**', redirectTo: 'home' }
            ])
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map