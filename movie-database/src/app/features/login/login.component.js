"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, loginservice) {
        this.route = route;
        this.router = router;
        this.loginservice = loginservice;
        this.username = '';
        this.password = '';
        this.errorMessage = 'Invalid Credentials';
        this.successMessage = '';
        this.invalidLogin = false;
        this.loginSuccess = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkLogin = function () {
        /**
        this.loginservice.authenticate(this.username, this.password).subscribe((result)=> {
          this.invalidLogin = false;
          this.loginSuccess = true;
          this.successMessage = 'Login Successful.';
          this.router.navigate(['user']);
        }, () => {
          this.invalidLogin = true;
          this.loginSuccess = false;
        });
        */
        if (this.loginservice.authenticate(this.username, this.password)) {
            this.router.navigate(['profile']);
            this.invalidLogin = false;
            this.loginSuccess = true;
            this.successMessage = 'Login Successful.';
        }
        else {
            this.invalidLogin = true;
            this.loginSuccess = false;
        }
    };
    LoginComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
