"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent() {
        this.welcome = "Pagination in Angular 2";
        this.games = [{
                game: "Deus Ex: Mankind Divided",
                platform: "	Xbox One, PS4, PC",
                release: "August 23"
            },
            {
                game: "Hue",
                platform: "	Xbox One, PS4, Vita, PC",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            },
            {
                game: "Deus Ex: Mankind Divided",
                platform: "	Xbox One, PS4, PC",
                release: "August 23"
            },
            {
                game: "Hue",
                platform: "	Xbox One, PS4, Vita, PC",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            },
            {
                game: "Deus Ex: Mankind Divided",
                platform: "	Xbox One, PS4, PC",
                release: "August 23"
            },
            {
                game: "Hue",
                platform: "	Xbox One, PS4, Vita, PC",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            },
            {
                game: "Deus Ex: Mankind Divided",
                platform: "	Xbox One, PS4, PC",
                release: "August 23"
            },
            {
                game: "Hue",
                platform: "	Xbox One, PS4, Vita, PC",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            },
            {
                game: "Deus Ex: Mankind Divided",
                platform: "	Xbox One, PS4, PC",
                release: "August 23"
            },
            {
                game: "Hue",
                platform: "	Xbox One, PS4, Vita, PC",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            },
            {
                game: "The Huntsman: Winter's Curse",
                platform: "PS4",
                release: "August 23"
            }];
    }
    ;
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: "<h1>{{welcome}}</h1>\n                <table class=\"table\">\n                    <tr>\n                        <th>#</th>\n                        <th>Game</th>\n                        <th>Platform</th> \n                        <th>Release</th>\n                    </tr>\n                    <tr *ngFor=\"let game of games | paginate: {itemsPerPage: 5, currentPage:page, id: '1'}; let i = index\">\n                        <td>{{i + 1}}</td>\n                        <td>{{game.game}}</td>\n                        <td>{{game.platform}}</td>\n                        <td>{{game.release}}</td>\n                    </tr>\n                </table>\n                <pagination-controls (pageChange)=\"page = $event\" id=\"1\"\n                      maxSize=\"5\"\n                      directionLinks=\"true\"\n                      autoHide=\"true\">\n                </pagination-controls>"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
;
//# sourceMappingURL=home.component.js.map