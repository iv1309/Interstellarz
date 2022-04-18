"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchMovieComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var SearchMovieComponent = /** @class */ (function () {
    function SearchMovieComponent(movieService) {
        this.movieService = movieService;
        this.searchTerms = new rxjs_1.Subject();
    }
    // Push a search term into the observable stream.
    SearchMovieComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movies$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        (0, rxjs_1.debounceTime)(300), 
        // ignore new term if same as previous term
        (0, rxjs_1.distinctUntilChanged)(), 
        // switch to new search observable each time the term changes
        (0, rxjs_1.switchMap)(function (term) { return _this.movieService.searchMovies(term); }));
    };
    SearchMovieComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-search-movie',
            templateUrl: './search-movie.component.html',
            styleUrls: ['./search-movie.component.css']
        })
    ], SearchMovieComponent);
    return SearchMovieComponent;
}());
exports.SearchMovieComponent = SearchMovieComponent;
