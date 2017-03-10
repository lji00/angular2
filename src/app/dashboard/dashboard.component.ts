import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import   './dashboard.component.html';
import 'rxjs/add/operator/map';
@Component({
    selector: 'dashboard',
    //templateUrl: './dashboard.component.html',
    template: require('./dashboard.component.html'),
    styleUrls: ['./dashboard.scss']

})
export class DashboardComponent implements  OnInit{
    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(private route: ActivatedRoute) {}
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
}
