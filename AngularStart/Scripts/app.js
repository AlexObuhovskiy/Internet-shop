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
var core_1 = require("@angular/core");
var RedditApp = (function () {
    function RedditApp() {
        this.name = "";
    }
    RedditApp.prototype.onClick = function () {
        debugger;
        console.log('Do import with ' + this.name);
    };
    return RedditApp;
}());
RedditApp = __decorate([
    core_1.Component({
        selector: 'reddit',
        template: "\n<input type=\"text\" class=\"form-control\" name=\"documents\" [(ngModel)]=\"name\">\n<h2>{{name}}</h2>\n<button (click)=\"onClick()\">gas</button>\n"
    }),
    __metadata("design:paramtypes", [])
], RedditApp);
exports.RedditApp = RedditApp;

//# sourceMappingURL=Scripts/app.js.map
