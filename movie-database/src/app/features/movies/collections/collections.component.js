"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CollectionsComponent = void 0;
var core_1 = require("@angular/core");
var CollectionsComponent = /** @class */ (function () {
    function CollectionsComponent(collectionService) {
        this.collectionService = collectionService;
        this.collections = [];
    }
    CollectionsComponent.prototype.ngOnInit = function () {
        this.getCollections();
    };
    CollectionsComponent.prototype.onSelect = function (collection) {
        this.getCollections();
    };
    //TO DO
    CollectionsComponent.prototype.getCollections = function () {
        var _this = this;
        this.collectionService.getCollections()
            .subscribe(function (collections) { return _this.collections = collections.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; }); });
    };
    CollectionsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.collectionService.addCollection({ name: name })
            .subscribe(function (collection) {
            _this.collections.push(collection);
        });
    };
    CollectionsComponent.prototype["delete"] = function (collection) {
        this.collections = this.collections.filter(function (m) { return m !== collection; });
        this.collectionService.deleteCollection(collection.id).subscribe();
    };
    CollectionsComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-collections',
            templateUrl: './collections.component.html',
            styleUrls: ['./collections.component.css']
        })
    ], CollectionsComponent);
    return CollectionsComponent;
}());
exports.CollectionsComponent = CollectionsComponent;
