import { Component } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: `./app/login.html`,
    styleUrls: ['./bootstrap/css/bootstrap.theme.min.css']
})

export class LogIn {
    res: string;

    // constructor(private router: Router){}
    
    CheckLogIn(name: string, password: number): void {
        if (name == "wh" && password == 1) {
             window.location.href="app.menu.html";
            // this.res = 'Авторизован';
        } else {
            window.location.href="index.html";
            // this.router.navigate(['global1']);
            // this.res = "Не авторизован";
        }
        // document.body.style.color = (this.res == 'Авторизован') ? 'green' : 'red';
    }
}
