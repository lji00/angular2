import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {VMListComponent } from './vmlist.component';
import {VMRoutingModule} from './vm.routing.module';
@NgModule({
    imports: [
        BrowserModule, VMRoutingModule, NgbModule
    ],
    declarations: [
        VMListComponent
    ],
    exports: [
        VMListComponent
    ]
})
export class VMModule { }
