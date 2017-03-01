import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: '/app/login.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    res: string;
    a: any;

    constructor(private router: Router) {

     }

    CheckLogIn(name: string, password: number): void {
        if (name == "wh" && password == 1) {
            this.router.navigate(['success'])
            // this.res = 'Авторизован';
        } else {
            this.router.navigate(['success'])
            // this.res = "Не авторизован";
        }
    }

}