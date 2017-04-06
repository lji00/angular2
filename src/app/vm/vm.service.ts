import { Injectable, Inject} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {VM} from './vm';
import 'rxjs/add/operator/toPromise';
//import {AppSettings} from '../constants';
import {VMS_URL} from '../constants';
//import { APP_CONFIG, IAppConfig } from '../app.config';


//let vmPromise = Promise.resolve(VMS);
@Injectable()
export class VMService {
    vmurl= VMS_URL;
    constructor(private http: Http) {}
    getVMs():Promise<VM[]> {
        return this.http.get(this.vmurl)
            .toPromise()
            .then(response => response.json().data as VM[])
            .catch(this.handleError);
    }

    getVM(id:number | string) {
        const url = `${this.vmurl}/${id}`;
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
