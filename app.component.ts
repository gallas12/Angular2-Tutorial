import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {NewContactComponent} from "./contacts/new-contact.coponent";

//hlavní komponenta aplikace
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <header>
            <nav>
                <ul>
                    <a [routerLink]="['Contacts']"><li>Contacts</li></a>
                    <a [routerLink]="['NewContacts']"><li>New Contacts</li></a>
                </ul>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ContactListComponent, ROUTER_DIRECTIVES] //zaregistruji vnořenou komponentu
})
@RouteConfig([
    {path: '/contact', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
    {path: '/newcontact', name: 'NewContacts', component: NewContactComponent},
    {path: '/newcontact/:surname', name: 'NewContactFromContact', component: NewContactComponent},
    //bacha na to před parametr se dává znak :
])
export class AppComponent {

}