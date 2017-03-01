import { Injectable } from '@angular/core';
import {VM} from './vm';
import {VMS} from '../mock/vms-mock';

let vmPromise = Promise.resolve(VMS);
@Injectable()
export class VMService {
    getVMs():Promise<VM[]> {
        return vmPromise;
    }

    getVM(id:number | string) {
        return vmPromise
            // (+) converts string 'id' to a number
            .then(vms => vms.find(vm => vm.id === +id));
    }
}
