"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var data_service_1 = require('./services/data.service');
var sorter_1 = require('./services/sorter');
var trackby_service_1 = require('./services/trackby.service');
var dialog_service_1 = require('./services/dialog.service');
var ensureModuleLoadedOnceGuard_1 = require('../shared/ensureModuleLoadedOnceGuard');
var CoreModule = (function (_super) {
    __extends(CoreModule, _super);
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function CoreModule(parentModule) {
        _super.call(this, parentModule);
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [],
            exports: [common_1.CommonModule],
            providers: [data_service_1.DataService, sorter_1.Sorter, trackby_service_1.TrackByService, dialog_service_1.DialogService] // these should be singleton
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [CoreModule])
    ], CoreModule);
    return CoreModule;
}(ensureModuleLoadedOnceGuard_1.EnsureModuleLoadedOnceGuard));
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map