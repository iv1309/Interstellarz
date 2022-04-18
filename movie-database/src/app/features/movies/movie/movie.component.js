"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieComponent = void 0;
var core_1 = require("@angular/core");
var MovieComponent = /** @class */ (function () {
    function MovieComponent(moviesService) {
        this.moviesService = moviesService;
        this.movies = [];
        this.filters = {
            keyword: ''
        };
    }
    MovieComponent.prototype.ngOnInit = function () {
        this.getMoviesByName();
    };
    MovieComponent.prototype.onSelect = function (movie) {
        this.getMoviesByName();
    };
    MovieComponent.prototype.getMoviesByName = function () {
        var _this = this;
        this.moviesService.getMovies()
            .subscribe(function (movies) { return _this.movies = _this.filterMovies(movies.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; })); });
    };
    MovieComponent.prototype.getMoviesByReleaseDate = function () {
        var _this = this;
        this.moviesService.getMovies()
            .subscribe(function (movies) { return _this.movies = _this.filterMovies(movies.sort(function (a, b) { return (a.releaseDate > b.releaseDate) ? 1 : -1; })); });
    };
    MovieComponent.prototype.getMoviesByCastMembers = function () {
        var _this = this;
        this.moviesService.getMovies()
            .subscribe(function (movies) { return _this.movies = _this.filterMovies(movies.sort(function (a, b) { return (a.castMembers > b.castMembers) ? 1 : -1; })); });
    };
    MovieComponent.prototype.getMoviesByGenre = function () {
        var _this = this;
        this.moviesService.getMovies()
            .subscribe(function (movies) { return _this.movies = _this.filterMovies(movies.sort(function (a, b) { return (a.genre > b.genre) ? 1 : -1; })); });
    };
    MovieComponent.prototype.getMoviesByStudio = function () {
        var _this = this;
        this.moviesService.getMovies()
            .subscribe(function (movies) { return _this.movies = _this.filterMovies(movies.sort(function (a, b) { return (a.studio > b.studio) ? 1 : -1; })); });
    };
    MovieComponent.prototype.listMovies = function () {
        var _this = this;
        this.moviesService.getMovies().subscribe(function (data) { return _this.movies = _this.filterMovies(data); });
    };
    MovieComponent.prototype.filterMovies = function (movies) {
        var _this = this;
        return movies.filter(function (e) {
            return e.name.toLowerCase().includes(_this.filters.keyword.toLowerCase());
        });
    };
    MovieComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.moviesService.addMovie({ name: name })
            .subscribe(function (movie) {
            _this.movies.push(movie);
        });
    };
    MovieComponent.prototype["delete"] = function (movie) {
        this.movies = this.movies.filter(function (m) { return m !== movie; });
        this.moviesService.deleteMovie(movie.id).subscribe();
    };
    MovieComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-movie',
            templateUrl: './movie.component.html',
            styleUrls: ['./movie.component.css']
        })
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
