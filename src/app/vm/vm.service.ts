import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {VM} from './vm';
import 'rxjs/add/operator/toPromise';

//let vmPromise = Promise.resolve(VMS);
@Injectable()
export class VMService {
    private vmsUrl = 'api/vms';
    constructor(private http: Http) {}
    getVMs():Promise<VM[]> {

        return this.http.get(this.vmsUrl)
            .toPromise()
            .then(response => response.json().data as VM[])
            .catch(this.handleError);
    }

    getVM(id:number | string) {
        const url = `${this.vmsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as VM)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
