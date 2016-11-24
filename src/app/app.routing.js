"use strict";
var router_1 = require('@angular/router');
var app_routes = [
    { path: 'customers/:id', loadChildren: 'app/customer/customer.module#CustomerModule' },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map