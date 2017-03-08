import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot } from '@angular/router';
import { VMService } from './vm.service';
import {VM} from './vm';
@Injectable()
export class VMDetailResolver implements Resolve<VM> {
    constructor(private vmService: VMService, private router: Router) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<VM> {
        let id = route.params['id'];
        return this.vmService.getVM(id).then(vm => {
            if (vm) {
                return vm;
            } else { // id not found
                this.router.navigate(['/vms']);
                return null;
            }
        });
    }
}
