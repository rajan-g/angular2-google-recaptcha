Angular2 Google Recaptcha
=========

The sources for this package are in (https://github.com/rajan-g/angular2-google-recaptcha) repo. Please file issues and pull requests against that repo.

##Usage
###1.In index.html page include following script 
    
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
               async defer>

###2.component file use like below
   
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
            public siteKey: string = "sitekey";//example: 6LdEnxQTfkdldc-Wa6iKZSelks823exsdcjX7A-N
            public theme: string = "light";//you can give any google themes light or dark
            setVerified(data) {
                console.log(data) // data will return true while successfully verified 
            }
        }
       
