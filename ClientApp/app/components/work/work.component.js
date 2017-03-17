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
var http_1 = require("@angular/http");
var status_service_1 = require("../../services/status.service");
var WorkComponent = (function () {
    function WorkComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        http.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
            _this.forecasts = result.json();
        });
        //service.getStatus().subscribe(res => this.apiStatus = res);
        //service.getEnvironment().subscribe(res => this.apiEnvironment = res);
        //service.getLoggedIn().subscribe(res => this.apiLoggedIn = res);
    }
    return WorkComponent;
}());
WorkComponent = __decorate([
    core_1.Component({
        selector: 'work',
        providers: [status_service_1.StatusService],
        template: require('./work.component.html')
    }),
    __metadata("design:paramtypes", [http_1.Http, status_service_1.StatusService])
], WorkComponent);
exports.WorkComponent = WorkComponent;
//# sourceMappingURL=work.component.js.map