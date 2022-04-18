"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BoardUserComponent = void 0;
var core_1 = require("@angular/core");
var BoardUserComponent = /** @class */ (function () {
    function BoardUserComponent(userService) {
        this.userService = userService;
    }
    BoardUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserBoard().subscribe({
            next: function (data) {
                _this.content = data;
            },
            error: function (err) {
                _this.content = JSON.parse(err.error).message;
            }
        });
    };
    BoardUserComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-board-user',
            templateUrl: './board-user.component.html',
            styleUrls: ['./board-user.component.css']
        })
    ], BoardUserComponent);
    return BoardUserComponent;
}());
exports.BoardUserComponent = BoardUserComponent;
