import { Component } from "@angular/core";
import { AdalService } from "ng2-adal/core";

@Component({
    selector: "home",
    template: `
            <h2>{{title}}</h2>
            <div>UserName: {{authMessage}}</div>
            `
})
export class HomeComponent {
    public authMessage:string;
    constructor(adalService: AdalService) {
        this.authMessage = adalService.userInfo.userName;
    }
    title = "Home";
}