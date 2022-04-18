"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieDetailsComponent = void 0;
var core_1 = require("@angular/core");
var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(route, moviesService, location) {
        this.route = route;
        this.moviesService = moviesService;
        this.location = location;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        this.getMovie();
    };
    MovieDetailsComponent.prototype.getMovie = function () {
        var _this = this;
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.moviesService.getMovie(id)
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    MovieDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    MovieDetailsComponent.prototype.save = function () {
        var _this = this;
        if (this.movie) {
            this.moviesService.updateMovie(this.movie)
                .subscribe(function () { return _this.goBack(); });
        }
    };
    MovieDetailsComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-movie-details',
            templateUrl: './movie-details.component.html',
            styleUrls: ['./movie-details.component.css']
        })
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());
exports.MovieDetailsComponent = MovieDetailsComponent;
