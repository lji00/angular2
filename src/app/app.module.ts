import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import  {VMModule} from './vm/vm.module';
import {AppRoutingModule}  from './app.routing.module';
import {AuthModule} from './auth/auth.module';
import { DialogService }           from './dialog.service';
@NgModule({
    imports: [
        BrowserModule, DashboardModule, VMModule, AppRoutingModule,
        AuthModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
