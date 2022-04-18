"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeaturesRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_gaurd_service_1 = require("../core/services/auth-gaurd.service");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var logout_component_1 = require("./logout/logout.component");
var collection_component_1 = require("./movies/collection/collection.component");
var movie_details_component_1 = require("./movies/movie-details/movie-details.component");
var register_component_1 = require("./register/register.component");
var user_details_component_1 = require("./users/user-details/user-details.component");
var user_component_1 = require("./users/user/user.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'movies', loadChildren: function () { return Promise.resolve().then(function () { return require('./movies/movies.module'); }).then(function (x) { return x.MoviesModule; }); } },
    { path: 'users', loadChildren: function () { return Promise.resolve().then(function () { return require('./users/users.module'); }).then(function (x) { return x.UsersModule; }); } },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'detail/:id', component: movie_details_component_1.MovieDetailsComponent },
    { path: 'user/:id', component: user_details_component_1.UserDetailsComponent },
    { path: 'profile', component: user_component_1.UserComponent, canActivate: [auth_gaurd_service_1.AuthGaurdService] },
    { path: 'collections/:id', component: collection_component_1.CollectionComponent, canActivate: [auth_gaurd_service_1.AuthGaurdService] },
    { path: 'logout', component: logout_component_1.LogoutComponent }
];
var FeaturesRoutingModule = /** @class */ (function () {
    function FeaturesRoutingModule() {
    }
    FeaturesRoutingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], FeaturesRoutingModule);
    return FeaturesRoutingModule;
}());
exports.FeaturesRoutingModule = FeaturesRoutingModule;
