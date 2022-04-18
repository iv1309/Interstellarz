"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeaturesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var features_routing_module_1 = require("./features-routing.module");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var forms_1 = require("@angular/forms");
var movies_module_1 = require("./movies/movies.module");
var http_1 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("../in-memory-data.service");
var core_module_1 = require("../core/core.module");
var logout_component_1 = require("./logout/logout.component");
var users_module_1 = require("./users/users.module");
var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                home_component_1.HomeComponent,
                logout_component_1.LogoutComponent
            ],
            imports: [
                common_1.CommonModule,
                movies_module_1.MoviesModule,
                users_module_1.UsersModule,
                core_module_1.CoreModule,
                features_routing_module_1.FeaturesRoutingModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false })
            ],
            providers: []
        })
    ], FeaturesModule);
    return FeaturesModule;
}());
exports.FeaturesModule = FeaturesModule;
