"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var core_module_1 = require("./core/core.module");
var features_module_1 = require("./features/features.module");
var forms_1 = require("@angular/forms");
var auth_interceptor_1 = require("./core/helpers/auth.interceptor");
var profile_component_1 = require("./features/profile/profile.component");
var board_admin_component_1 = require("./features/board-admin/board-admin.component");
var register_component_1 = require("./features/register/register.component");
var board_moderator_component_1 = require("./features/board-moderator/board-moderator.component");
var board_user_component_1 = require("./features/board-user/board-user.component");
var login_component_1 = require("./features/login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                profile_component_1.ProfileComponent,
                board_admin_component_1.BoardAdminComponent,
                board_moderator_component_1.BoardModeratorComponent,
                board_user_component_1.BoardUserComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule,
                features_module_1.FeaturesModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false })
            ],
            providers: [auth_interceptor_1.authInterceptorProviders],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
