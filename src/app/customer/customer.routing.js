"use strict";
var router_1 = require('@angular/router');
var customer_component_1 = require('./customer.component');
var customer_orders_component_1 = require('./customer-orders.component');
var customer_details_component_1 = require('./customer-details.component');
var customer_edit_component_1 = require('./customer-edit.component');
var can_deactivate_guard_1 = require('./can-deactivate.guard');
var routes = [
    {
        path: '',
        component: customer_component_1.CustomerComponent,
        children: [
            { path: 'orders', component: customer_orders_component_1.CustomerOrdersComponent },
            { path: 'details', component: customer_details_component_1.CustomerDetailsComponent },
            { path: 'edit', component: customer_edit_component_1.CustomerEditComponent, canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard] }
        ]
    }
];
exports.customerRouting = {
    routes: router_1.RouterModule.forChild(routes),
    components: [customer_component_1.CustomerComponent, customer_orders_component_1.CustomerOrdersComponent, customer_details_component_1.CustomerDetailsComponent, customer_edit_component_1.CustomerEditComponent]
};
//# sourceMappingURL=customer.routing.js.map