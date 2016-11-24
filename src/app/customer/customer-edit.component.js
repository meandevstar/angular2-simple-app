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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var data_service_1 = require('../core/services/data.service');
var dialog_service_1 = require('../core/services/dialog.service');
var CustomerEditComponent = (function () {
    function CustomerEditComponent(router, route, dataService, dialogService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.dialogService = dialogService;
        this.customer = {
            id: 0,
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            city: '',
            state: {
                abbreviation: '',
                name: ''
            }
        };
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to params so if it changes we pick it up. Don't technically need that here
        //since param won't be changing while component is alive. 
        //Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            _this.dataService.getCustomer(id).subscribe(function (customer) {
                //Quick and dirty clone used in case user cancels out of form
                var cust = JSON.stringify(customer);
                _this.customer = JSON.parse(cust);
            });
        });
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    CustomerEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.updateCustomer(this.customer)
            .subscribe(function (status) {
            if (status) {
                //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                _this.customerForm.form.markAsPristine();
                _this.router.navigate(['/']);
            }
            else {
                _this.errorMessage = 'Unable to save customer';
            }
        });
    };
    CustomerEditComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
        //Route guard will take care of dialog service so this isn't needed now
        // this.dialogService.confirm('Lose unsaved changes?').then((leave: boolean) => {
        //   if (leave) {
        //     this.router.navigate(['/']);
        //   }
        // });
    };
    CustomerEditComponent.prototype.canDeactivate = function () {
        if (!this.customerForm.dirty) {
            return true;
        }
        return this.dialogService.confirm('Discard form changes?');
    };
    __decorate([
        core_1.ViewChild('customerForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], CustomerEditComponent.prototype, "customerForm", void 0);
    CustomerEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-edit',
            templateUrl: 'customer-edit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, data_service_1.DataService, dialog_service_1.DialogService])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());
exports.CustomerEditComponent = CustomerEditComponent;
//# sourceMappingURL=customer-edit.component.js.map