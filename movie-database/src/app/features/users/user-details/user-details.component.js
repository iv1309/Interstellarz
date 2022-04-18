"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDetailsComponent = void 0;
var core_1 = require("@angular/core");
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(route, usersService, location) {
        this.route = route;
        this.usersService = usersService;
        this.location = location;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserDetailsComponent.prototype.getUser = function () {
        var _this = this;
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.usersService.getUser(id)
            .subscribe(function (user) { return _this.user = user; });
    };
    UserDetailsComponent.prototype.save = function () {
        if (this.user) {
            this.usersService.updateUser(this.user);
        }
    };
    UserDetailsComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.css']
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;
