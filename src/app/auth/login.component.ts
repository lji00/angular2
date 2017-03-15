import { Component }   from '@angular/core';
import { Router, NavigationExtras}      from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>`
})
export class LoginComponent {
    message:string;

    constructor(public authService:AuthService, public router:Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
                // Redirect the user
                // Set our navigation extras object
                // that passes on our global query params and fragment

                let navigationExtras:NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                console.log('redirecturl', redirect);
                console.log('navextra', navigationExtras);
                // Redirect the user without navigationExtras
                //with navigationExtras the dashboard router url(from RouterStateSnapshot.url)  has query prams
                //this causes error: Cannot match any routes. URL Segment: 'dashboard%3Fsession_id%3D123456789%23anchor'
                this.router.navigate([redirect], navigationExtras);
                //this.router.navigate([redirect]);


            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}
