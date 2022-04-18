"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var users_routing_module_1 = require("./users-routing.module");
var movies_module_1 = require("../movies/movies.module");
var search_users_component_1 = require("./search-users/search-users.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var user_details_component_1 = require("./user-details/user-details.component");
var user_component_1 = require("./user/user.component");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                user_component_1.UserComponent,
                search_users_component_1.SearchUsersComponent,
                user_details_component_1.UserDetailsComponent
            ],
            imports: [
                common_1.CommonModule,
                movies_module_1.MoviesModule,
                users_routing_module_1.UsersRoutingModule,
                router_1.RouterModule,
                forms_1.FormsModule
            ],
            exports: [
                search_users_component_1.SearchUsersComponent
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
