/**
 * Created by Milan Gallas on 6.7.2016.
 */
import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {Contact} from "./contact";

@Component({
    selector : "contact",
    template: `

        <ul *ngIf="contact">
            <li>Name:  <input [(ngModel)]="contact.name" type="text" /></li>
            <li>Surname:  <input [(ngModel)]="contact.surname" type="text" /></li>
            <li>Phone: <input [(ngModel)]="contact.phone" type="text" /></li>
        </ul>
        <button (click)="onCreateNew()">create conctact from contact</button>
   `,
    inputs: ["contact"],
    styleUrls: ["../../src/css/contact.css"]
})
export class ContactComponent{
    public contact: Contact = null;

    constructor(private _router: Router){}

    onCreateNew(){
        this._router.navigate(["NewContactFromContact", {surname: this.contact.surname}]);
        //parametr surname je pevně definován v app.component.ts hranatá závorka končí až za {} !!
        //kdybych místo NewContactFromContact přesměrovat normálně na NewContact, tak by to také přošlo, jenom by se změnila url
        //prošlo by to, protože v new-contact.component.ts volám this._routeParams.get('surname');
    }
}
