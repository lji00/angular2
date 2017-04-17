import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
    //loadChildren path has to be relative path with angular2-router-loader in webpack
    // this is different than the angular doc which uses absolute path
    // https://angular.io/docs/ts/latest/guide/router.html#!#asynchronous-routing
    //{path: 'vms', loadChildren: './vm/vm.module#VMModule', canLoad:[AuthGuard]},
    { path: '', pathMatch: 'full', redirectTo: 'dashboard'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = {};