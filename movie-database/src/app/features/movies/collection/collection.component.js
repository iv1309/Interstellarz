"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CollectionComponent = void 0;
var core_1 = require("@angular/core");
var CollectionComponent = /** @class */ (function () {
    //name: String = " ";
    function CollectionComponent(route, collectionService, location) {
        this.route = route;
        this.collectionService = collectionService;
        this.location = location;
        this.movies = [];
        this.length = 0;
    }
    CollectionComponent.prototype.ngOnInit = function () {
        this.getCollection();
    };
    CollectionComponent.prototype.getCollection = function () {
        var _this = this;
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.collectionService.getCollection(id)
            .subscribe(function (collection) { return _this.getMoviesInCollection(collection); });
    };
    CollectionComponent.prototype.getMoviesInCollection = function (collection) {
        this.collection = collection;
        this.movies = collection.array;
        this.length = collection.length;
    };
    //TO DO
    CollectionComponent.prototype.add = function (name) {
        this.movies.push({ name: name });
        /**
        name = name.trim();
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (!name) { return; }
        this.collectionService.addMovieToCollection({ name } as Movie, id)
          .subscribe((movie: Movie) => {
            this.collection?.array.push({ name } as Movie);
          });
        //search for movie
        //movies end up deleting themselves
        */
    };
    CollectionComponent.prototype.getTotalLength = function () {
        var _this = this;
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.collectionService.getTotalLength(id).subscribe(function (length) {
            return _this.length = length;
        });
    };
    CollectionComponent.prototype["delete"] = function (movie) {
        this.movies.splice(this.movies.indexOf(movie), 1);
    };
    CollectionComponent.prototype.goBack = function () {
        this.location.back();
    };
    CollectionComponent.prototype.save = function () {
        var _this = this;
        if (this.collection) {
            this.collectionService.updateCollection(this.collection)
                .subscribe(function () { return _this.goBack(); });
        }
    };
    CollectionComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-collection',
            templateUrl: './collection.component.html',
            styleUrls: ['./collection.component.css']
        })
    ], CollectionComponent);
    return CollectionComponent;
}());
exports.CollectionComponent = CollectionComponent;
