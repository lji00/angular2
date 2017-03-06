import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VMListComponent} from './vmlist.component';
import {VMDetailComponent} from './vm-detail.component';
const vmRoutes: Routes = [
    { path: 'vms',  component: VMListComponent },
    //the detail router has to be at same level of list router if
    // we want detail view replacing the list view not added inside the list view,
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
