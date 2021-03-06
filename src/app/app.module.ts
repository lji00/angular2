import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Router } from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
//import  {VMModule} from './vm/vm.module';
import {AppRoutingModule}  from './app.routing.module';
import {AuthModule} from './auth/auth.module';
import { DialogService }           from './dialog.service';

//imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';
import { APP_CONFIG, AppConfig } from './app.config';


@NgModule({
    imports: [
        BrowserModule, DashboardModule, AppRoutingModule, HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AuthModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        DialogService,{ provide: APP_CONFIG, useValue: AppConfig }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router:Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }

}
