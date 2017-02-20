import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {AppRoutingModule}  from './app.routing.module';
@NgModule({
    imports: [
        BrowserModule, DashboardModule, AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
