import {InMemoryDbService} from 'angular-in-memory-web-api';
import {VM} from '../vm/vm';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let vms = [
            new VM(11, 'CentralOS', 'test'),
            new VM(12, 'Windows', 'test'),
            new VM(13, 'OSX', 'test')
            //{id: 11, name:'CentralOS', desc: 'test'},
            //{id: 12, name: 'Windows', desc: 'test'},
            //{id: 13, name: 'OSX', desc: 'test'}
        ];
        return {vms};
    }
}
