import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {VMService }  from './vm.service';
import {VM} from './vm';
import {DialogService} from '../dialog.service';
import './vm-detail.component.html';
@Component({
    selector: 'vm-detail',
    template: require('./vm-detail.component.html'),
    styles: ['./vm.scss']
})


export class VMDetailComponent implements OnInit {
    vm:VM;
    orgVm:VM;

    constructor(private vmService:VMService, private router:Router, private route:ActivatedRoute,
                private dialogService:DialogService) {
    }

    ngOnInit() {

        //this.route.params
        //    // (+) converts string 'id' to a number
        //    .switchMap((params:Params) => this.vmService.getVM(+params['id']))
        //.subscribe((vm:VM) => this.vm = vm);

        this.route.data.subscribe((data:{vm:VM}) => {
            console.log('nginitdetail');
            this.vm = data.vm;
        });

    }

    gotoListView() {
        let vmId = this.vm ? this.vm.id : null;
        this.router.navigate(['../', {id: vmId}], {relativeTo: this.route});
        //absolute route
        //this.router.navigate(['/vms', {id: vmId}]);

    }

    save() {
        //make rest call to save the vm
        this.gotoListView();
    }

    cancel() {
        this.gotoListView();
    }

    canDeactivate():Promise<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.vm || this.vm === this.orgVm) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    }


}