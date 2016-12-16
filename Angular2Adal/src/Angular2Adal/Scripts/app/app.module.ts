/// <reference path="../../typings/index.d.ts" />
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { AdalService } from 'ng2-adal/core';
import { SecretService } from './services/secret.service';
import { HomeComponent } from "./home.component";
import { AppRouting } from "./app.routing";
import "rxjs/Rx";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
        HomeComponent
    ],
    // modules
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        AppRouting
    ],
    // providers
    providers: [
        AdalService,
        SecretService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }