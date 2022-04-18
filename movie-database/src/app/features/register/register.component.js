"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, usersService) {
        this.router = router;
        this.authService = authService;
        this.usersService = usersService;
        this.form = {
            username: null,
            firstName: null,
            lastName: null,
            password: null
        };
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
        this.users = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    RegisterComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    RegisterComponent.prototype.add = function () {
        var _this = this;
        this.form.username = this.form.username.trim();
        if (!this.form.username) {
            return;
        }
        var username = this.form.username;
        var password = this.form.password;
        var firstName = this.form.firstName;
        var lastName = this.form.lastName;
        this.usersService.addUser({ username: username, password: password, firstName: firstName, lastName: lastName })
            .subscribe(function (user) {
            _this.users.push(user);
        });
        this.router.navigate(['user']);
    };
    RegisterComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
