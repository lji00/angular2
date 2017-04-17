import { Injectable }       from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    NavigationExtras,
    CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';
import {BASE_ROUTER} from '../constants';


@Injectable()
export class AuthGuard implements CanActivate , CanLoad{
    base_router = BASE_ROUTER;

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
console.log('state url', state.url);
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) { return true; }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        console.log('not loged in redirect url', url);
        // Create a dummy session id
        let sessionId = 123456789;
        // Set our navigation extras object
        // that contains our global query params and fragment
        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };
        // Navigate to the login page with extras
        this.router.navigate(['/login'],navigationExtras);
        return false;
    }
    canLoad(route: Route): boolean {
        //lazy load for child route, the path doesn't contain parent path,
        // so it is not full url in browser address bar
        let url = `${this.base_router}/${route.path}`;

        return this.checkLogin(url);
    }

}
