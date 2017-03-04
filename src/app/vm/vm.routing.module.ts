import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VMListComponent} from './vmlist.component';
import {VMDetailComponent} from './vm-detail.component';
const vmRoutes: Routes = [
    { path: 'vms',  component: VMListComponent },
    {path:'vms/:id', component:VMDetailComponent}
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
