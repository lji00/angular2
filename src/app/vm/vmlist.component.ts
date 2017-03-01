import { Component,  OnInit } from '@angular/core';
import {VM} from './vm';
import {VMService} from './vm.service';
@Component({
    selector: 'vm',
    templateUrl: './vmlist.component.html',
    providers: [VMService]
    //styleUrls: ['./dashboard.scss']

})
export class VMListComponent implements OnInit {
    vms:VM[];
    selectedVM:VM;

    constructor(private vmService:VMService) {
    }

    ngOnInit():void {
        this.vmService.getVMs().then(vmlist => {
            this.vms = vmlist;
        });
    }

    onSelect(vm:VM):void {
        this.selectedVM = vm;
    }
}
