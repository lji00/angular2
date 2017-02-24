import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
@NgModule({
    imports: [
        BrowserModule, DashboardRoutingModule, NgbModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }
