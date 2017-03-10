import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VMListComponent} from './vmlist.component';
import {VMDetailComponent} from './vm-detail.component';
import { CanDeactivateGuard }    from '../auth/can-deactivate-guard.service';
import {VMDetailResolver} from './vm-detail-resolver.service';

const vmRoutes:Routes = [
    {path: '', component: VMListComponent},
    //the detail router has to be at same level of list router if
    // we want detail view replacing the list view not added inside the list view,
    {
        path: 'vms/:id', component: VMDetailComponent, canDeactivate: [CanDeactivateGuard],
        resolve: {
            vm: VMDetailResolver

        }
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(vmRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        VMDetailResolver
    ]
})
export class VMRoutingModule {
}
