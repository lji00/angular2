import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import  {VMModule} from './vm/vm.module';
import {AppRoutingModule}  from './app.routing.module';
@NgModule({
    imports: [
        BrowserModule, DashboardModule, VMModule, AppRoutingModule, NgbModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
