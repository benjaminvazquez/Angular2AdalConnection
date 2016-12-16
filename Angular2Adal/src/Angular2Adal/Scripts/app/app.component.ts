import { Component } from "@angular/core";
import { AdalService } from 'ng2-adal/core';
import { SecretService } from './services/secret.service';

@Component({
    selector: "app",
    template: `
    <h1>{{title}}</h1>
    <div class="menu">
    <a class="home" [routerLink]="['']">Home</a>
    <span  [hidden]="logedin">| <a href="#" (click)="login()">Login</a></span>
    <span  [hidden]="!logedin">| <a href="#" (click)="logout()">Logout</a></span>
    </div>
    <div>{{loginmessage}}</div>
    <router-outlet></router-outlet>
`
})

export class AppComponent {
    public title: string = "Angular2-Adal Login";
    public loginmessage: string;
    public logedin: boolean;
    constructor(private adalService: AdalService, private secretService: SecretService) {
        this.adalService.init(this.secretService.adalConfig);
        this.adalService.handleWindowCallback();
        if (this.adalService.userInfo.isAuthenticated) {
            this.loginmessage = "Usuario autenticado. . ."
            this.logedin = true;
        } else {
            this.loginmessage = "Usuario no autenticado";
            this.logedin = false;
        }
        console.log(adalService.userInfo);
    }

    public login() {
        this.adalService.login();
    }

    public logout() {
        this.adalService.logOut();
    }
}