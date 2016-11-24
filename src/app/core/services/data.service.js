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
var http_1 = require('@angular/http');
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.customersBaseUrl = '/api/customers';
        this.ordersBaseUrl = '/api/orders';
    }
    DataService.prototype.getCustomers = function () {
        var _this = this;
        return this.http.get(this.customersBaseUrl)
            .map(function (res) {
            _this.customers = res.json();
            return _this.customers;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getCustomer = function (id) {
        return this.http.get(this.customersBaseUrl + '/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getOrders = function (id) {
        return this.http.get(this.ordersBaseUrl + '/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.updateCustomer = function (customer) {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getStates = function () {
        return this.http.get('/api/states')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof http_1.Response) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return Observable_1.Observable.throw(errMessage);
        }
        return Observable_1.Observable.throw(error || 'Node.js server error');
    };
    //Not using now but leaving since they show how to create
    //and work with custom observables
    DataService.prototype.findCustomerObservable = function (id) {
        return this.createObservable(this.filterCustomers(id));
    };
    DataService.prototype.filterCustomers = function (id) {
        var custs = this.customers.filter(function (cust) { return cust.id === id; });
        return (custs.length) ? custs[0] : null;
    };
    DataService.prototype.createObservable = function (data) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    DataService.prototype.filterStates = function (stateAbbreviation) {
        var filteredStates = this.states.filter(function (state) { return state.abbreviation === stateAbbreviation; });
        return (filteredStates.length) ? filteredStates[0] : null;
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map