import { Injectable } from '@angular/core';
//import {VM} from './vm';
//import {VMS} from '../mock/vms-mock';
export class VM {
    constructor(public id: number, public name: string, public desc: string) { }
}
let VMS = [
    new VM(11, 'CentralOS', 'test'),
    new VM(12, 'Windows', 'test'),
    new VM(13, 'OSX', 'test')
    //{id: 11, name:'CentralOS', desc: 'test'},
    //{id: 12, name: 'Windows', desc: 'test'},
    //{id: 13, name: 'OSX', desc: 'test'}

];
let vmPromise = Promise.resolve(VMS);
@Injectable()
export class VMService {
    getVMs():Promise<VM[]> {
        return vmPromise;
    }

    getVM(id:number | string) {
        console.log('getVm called');
        return vmPromise
            // (+) converts string 'id' to a number
            .then(vms => vms.find(vm => vm.id === +id));
    }
}
