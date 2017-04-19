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
var phone_1 = require("./phone");
var log_service_1 = require("./log.service");
var DataService = (function () {
    function DataService(logService) {
        this.logService = logService;
        this.data = [
            { name: "Apple iPhone 7", price: 56000 },
            { name: "HP Elite x3", price: 56000 },
            { name: "Alcatel Idol S4", price: 25000 }
        ];
    }
    DataService.prototype.getData = function () {
        this.logService.write("операция получения данных");
        return this.data;
    };
    DataService.prototype.addData = function (name, price) {
        this.data.push(new phone_1.Phone(name, price));
        this.logService.write("операция добавления данных");
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [log_service_1.LogService])
], DataService);
exports.DataService = DataService;

//# sourceMappingURL=Scripts/data.service.js.map
