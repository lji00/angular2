import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
@NgModule({
    imports: [
        CommonModule, DashboardRoutingModule, NgbModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }
