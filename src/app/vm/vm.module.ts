import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }    from '@angular/forms';
import {VMListComponent } from './vmlist.component';
import {VMDetailComponent} from './vm-detail.component';
import {VMRoutingModule} from './vm.routing.module';
import {VMService} from './vm.service';

@NgModule({
    imports: [
        CommonModule, VMRoutingModule, NgbModule, FormsModule
    ],
    declarations: [
        VMListComponent, VMDetailComponent
    ],
    providers: [VMService],
    exports: [
        VMListComponent
    ]
})
export class VMModule { }
