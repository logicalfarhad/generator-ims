"use strict";
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap/dist/css/bootstrap-theme.css");
var browser_1 = require('angular2/platform/browser');
var seed_app_1 = require('./app/seed-app');
browser_1.bootstrap(seed_app_1.SeedApp).catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map