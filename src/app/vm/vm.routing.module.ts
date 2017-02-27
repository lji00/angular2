import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VMListComponent} from './vmlist.component';
const vmRoutes: Routes = [
    { path: 'vm',  component: VMListComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(vmRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class VMRoutingModule { }
