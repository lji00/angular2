import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {VMService }  from './vm.service';
import {VM} from './vm';
@Component({
    selector: 'vm-detail',
    templateUrl: './vm-detail.component.html',
    styleUrls: ['./vm.scss']
})




export class VMDetailComponent implements OnInit {
    vm:VM;
    constructor(private vmService:VMService, private router:Router, private route:ActivatedRoute) {}
    ngOnInit() {
        this.route.params
            // (+) converts string 'id' to a number
            .switchMap((params:Params) => this.vmService.getVM(+params['id']))
            .subscribe((vm:VM) => this.vm = vm);

    }

    gotoListView() {
        let vmId = this.vm ? this.vm.id : null;
        this.router.navigate(['/vms', {id: vmId}]);
    }

}