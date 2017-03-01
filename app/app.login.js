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
// import { Router } from '@angular/router';
var LogIn = (function () {
    function LogIn() {
    }
    // constructor(private router: Router){}
    LogIn.prototype.CheckLogIn = function (name, password) {
        if (name == "wh" && password == 1) {
            window.location.href = "app.menu.html";
        }
        else {
            window.location.href = "index.html";
        }
        // document.body.style.color = (this.res == 'Авторизован') ? 'green' : 'red';
    };
    LogIn = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: "./app/login.html",
            styleUrls: ['./bootstrap/css/bootstrap.theme.min.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LogIn);
    return LogIn;
}());
exports.LogIn = LogIn;
//# sourceMappingURL=app.login.js.map