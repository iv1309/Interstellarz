"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var AUTH_API = 'http://localhost:8080/api/auth/';
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authenticated = false;
        this.username = '';
        this.password = '';
        this.usersUrl = 'http://localhost:8080/users';
    }
    AuthService.prototype.authenticate = function (username, password) {
        /**
        return this.http.get(`http://localhost:8080/users/basicauth`,
          { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
            this.username = username;
            this.password = password;
            this.registerSuccessfulLogin(username, password);
          }));
    
           */
        if (username === "JohnSmith" && password === "password") {
            sessionStorage.setItem('username', username);
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.createBasicAuthToken = function (username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);
    };
    AuthService.prototype.registerSuccessfulLogin = function (username, password) {
        sessionStorage.setItem('username', username);
    };
    AuthService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
    };
    AuthService.prototype.logOut = function () {
        sessionStorage.removeItem('username');
        this.username = '';
        this.password = '';
    };
    AuthService.prototype.getLoggedInUserName = function () {
        var user = sessionStorage.getItem('username');
        if (user === null)
            return '';
        return user;
    };
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return (0, rxjs_1.of)(result);
        };
    };
    AuthService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
