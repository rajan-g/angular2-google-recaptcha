/* 
 * @author RAJAN G
 */

import {Component} from 'angular2/core';
import {GoogleRecaptchaDirective} from '../directives/googlerecaptcha.directive';

@Component({
    selector : 'my-app',
    directives: [GoogleRecaptchaDirective],
    template:  `
        <div  (setVerified) = "setVerified($event)" googlerecaptcha [siteKey] = "siteKey" [theme] = 'theme' ></div>
`    
})
export class AppComponent {
    public verified : any;   
    public siteKey: string = "6LdEnxQTAAAAAH-Wa6iKZS3yWBkniZNMdv5X7A-N";
    public theme: string = "light";//you can give any google themes light or dark
    setVerified(data) {
        console.log(data)
    }
}
