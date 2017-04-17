import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../auth/auth-guard.service';


const dashboardRoutes: Routes = [
    //add canActivate here instead of in app.routing '' path to redirect to login page
    //if canActivate is only added in '' path of app.routing which redirect to 'dashboard',
    // the AuthGuard is not checked as no AuthGuard here
    { path: 'dashboard',  component: DashboardComponent , canActivate: [AuthGuard],
        children: [
            { path:'', redirectTo:'vms',  pathMatch: 'full'},
            {path: 'vms', loadChildren: '../vm/vm.module#VMModule', canLoad:[AuthGuard]}
        ]

    }
];
@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
