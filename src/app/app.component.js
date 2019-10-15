"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // pageHeader : string = "Employee Details";
        // imagePath : string = '20180518/sm_5aff6089d3e02.png';
        this.isDisabled = false;
        // badHtml: String = 'hello <script>alert("Hacked");</script> World'
        // firstName : string = 'Tom';
        // lastName : string = 'Sammy';
        // getFullName(): string{
        //     return this.firstName + " " + this.lastName;
        // }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n             <div>\n                <!-- <h1> {{'Page Header ' + pageHeader}} </h1> -->\n                <!-- <h1> {{10+20+30}} </h1> -->\n                \n                <!-- using ternary operator\n                <h1> {{ pageHeader ? pageHeader : 'No header'}} </h1> \n                <img src='https://png.pngtree.com/element_our/sm/{{imagePath}}' />\n                <h1> {{ getFullName()}} </h1> \n                <my-employee></my-employee>\n                <button [disabled]='isDisabled'>Click Me</button>\n                <button disabled='{{isDisabled}}'>Click Me</button>\n                <span bind-innerHtml='pageHeader'></span>\n                <div [innerHtml]='badHtml'>{{badHtml}}</div>-->\n\n                 <input id='inputId' type='text' value='Tom'>\n\n\n             </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map