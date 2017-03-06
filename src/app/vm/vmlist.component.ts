import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


import {VM} from './vm';
import {VMService} from './vm.service';

@Component({
    selector: 'vm',
    templateUrl: './vmlist.component.html',
    styleUrls: ['./vm.scss']

})
export class VMListComponent implements OnInit {
    vms:Observable<VM[]>;
    private selectedId:number;

    constructor(private vmService:VMService, private router:Router, private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.vms = this.route.params
            .switchMap((params:Params) => {
                this.selectedId = +params['id'];
                console.log('nginit');
                return this.vmService.getVMs();
            });

    }

    onSelect(vm:VM):void {
        //absolute route path
        //this.router.navigate(['/vms', vm.id]);
        this.router.navigate([vm.id],{ relativeTo: this.route });

    }

    isSelected(vm:VM) {
        return vm.id === this.selectedId;
    }

}
