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
var router_1 = require("@angular/router");
var ItemComponent = (function () {
    function ItemComponent(route) {
        var _this = this;
        this.route = route;
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.querySubscription = route.queryParams.subscribe(function (queryParam) {
            _this.product = queryParam['product'];
            _this.price = queryParam['price'];
        });
    }
    ItemComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
        this.querySubscription.unsubscribe();
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        selector: 'item-info',
        template: "<h3>\u041C\u043E\u0434\u0435\u043B\u044C {{id}}</h3>\n                <div>\u0422\u043E\u0432\u0430\u0440: {{product}}</div>\n                <div>\u0426\u0435\u043D\u0430: {{price}}</div>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ItemComponent);
exports.ItemComponent = ItemComponent;

//# sourceMappingURL=Scripts/item.js.map
