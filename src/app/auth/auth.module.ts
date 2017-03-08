import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import { CanDeactivateGuard }      from './can-deactivate-guard.service';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
@NgModule({
    imports: [
        CommonModule, LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        CanDeactivateGuard
    ]
})
export class AuthModule { }
