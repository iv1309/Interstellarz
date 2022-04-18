"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InMemoryDataService = void 0;
var core_1 = require("@angular/core");
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var movies = [
            { id: 1, name: 'The Batman' },
            { id: 2, name: 'Interstellar' },
            { id: 3, name: 'Your Name' },
            { id: 4, name: 'Tangeled' },
            { id: 5, name: 'Harry Potter' },
            { id: 6, name: 'Die Hard' },
            { id: 7, name: 'The 5th Element' },
            { id: 8, name: 'The Sixth Sense' },
            { id: 9, name: 'Alien' },
            { id: 10, name: 'The Joker' }
        ];
        return { movies: movies };
    };
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    InMemoryDataService.prototype.genId = function (movies) {
        return movies.length > 0 ? Math.max.apply(Math, movies.map(function (movie) { return movie.id; })) + 1 : 11;
    };
    InMemoryDataService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], InMemoryDataService);
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
