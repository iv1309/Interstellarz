"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoreModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var features_routing_module_1 = require("../features/features-routing.module");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("../app-routing.module");
var header_component_1 = require("./header/header.component");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        (0, core_1.NgModule)({
            imports: [
                common_1.CommonModule,
                features_routing_module_1.FeaturesRoutingModule,
                router_1.RouterModule,
                app_routing_module_1.AppRoutingModule
            ],
            exports: [
                header_component_1.HeaderComponent
            ],
            declarations: [header_component_1.HeaderComponent]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
