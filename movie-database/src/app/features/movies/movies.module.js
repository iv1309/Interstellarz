"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MoviesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var movies_routing_module_1 = require("./movies-routing.module");
var search_movie_component_1 = require("./search-movie/search-movie.component");
var movie_details_component_1 = require("./movie-details/movie-details.component");
var movie_component_1 = require("./movie/movie.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var collections_component_1 = require("./collections/collections.component");
var collection_component_1 = require("./collection/collection.component");
var MoviesModule = /** @class */ (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                movie_component_1.MovieComponent,
                movie_details_component_1.MovieDetailsComponent,
                search_movie_component_1.SearchMovieComponent,
                collections_component_1.CollectionsComponent,
                collection_component_1.CollectionComponent
            ],
            imports: [
                common_1.CommonModule,
                movies_routing_module_1.MoviesRoutingModule,
                router_1.RouterModule,
                forms_1.FormsModule
            ],
            exports: [
                search_movie_component_1.SearchMovieComponent,
                collections_component_1.CollectionsComponent
            ]
        })
    ], MoviesModule);
    return MoviesModule;
}());
exports.MoviesModule = MoviesModule;
