import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' ,    canActivate: [AuthGuard],
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = {};