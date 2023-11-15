"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var componentNames = ['login', 'register', 'footer', 'details', 'rating', 'profile', 'settings', 'notifications'];
componentNames.forEach(function (name) {
    var command = "ng g c ".concat(name, " --skip-tests");
    (0, child_process_1.exec)(command, function (error, stdout, stderr) {
        if (error) {
            console.error("Error generating component ".concat(name, ": ").concat(error.message));
            return;
        }
        console.log("Component ".concat(name, " generated successfully:\n").concat(stdout));
    });
});
