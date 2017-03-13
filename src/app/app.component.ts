
import { Component } from '@angular/core';
import '../../public/css/publicStyles.css';
import '../../public/css/bootstrap.min.css';
import './app.component.html';
@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    //use require with webpack with styles attribute to load styles from external files at build time
    styles: [require('./app.component.scss')]
})
export class AppComponent { }
