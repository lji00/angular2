import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router}     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import   './dashboard.component.html';
import 'rxjs/add/operator/map';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {VM_LIST_ROUTER} from '../constants';

@Component({
    selector: 'dashboard',
    //templateUrl: './dashboard.component.html',
    template: require('./dashboard.component.html'),
    styles: [require('./dashboard.scss')]

})
export class DashboardComponent implements  OnInit{
    sessionId: Observable<string>;
    token: Observable<string>;
    subRouters: string [] = ['vm','disks'];
    VM_ROUTER = VM_LIST_ROUTER;


    constructor(private route: ActivatedRoute, private router:Router) {}
    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParams
            .map(params => params['session_id'] || 'None'
        );

        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map(fragment => fragment || 'None');
    }
    public beforeChange($event: NgbTabChangeEvent) {
        if ($event.nextId === 'vm') {
            console.log('tab event');
            //$event.preventDefault();
            this.router.navigate([]);
        }
    }
}
