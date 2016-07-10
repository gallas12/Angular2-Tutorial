///<reference path="../../node_modules/angular2/src/core/linker/interfaces.d.ts"/>
/**
 * Created by Milan Gallas on 6.7.2016.
 */
import {Component} from 'angular2/core';
import {ContactService} from "./contact-services";
import {Contact} from "./contact";
import {Router} from "angular2/router";
import {$t} from "angular2/src/compiler/chars";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";

@Component({
    template: `
         <form #myForm="ngForm" (ngSubmit)="onSubmit">
            <div>
            <!-- *ngControlGroup="controlGroup"> --> <!-- POKUD BYCH CHTĚL HROMADNOU VALIDACI-->
                <label for="name">Name:</label>
                <input type="text" id="name"
                    *ngControl="name"
                    [(ngModel)]="newContact.name"
                    required
                >
            </div>
            <div>
                <label for="surname">Surname:</label>
                <input type="text" id="surname"
                    *ngControl="surname"
                    [(ngModel)]="newContact.surname"
                    required
                >
            </div>
            <div>
                <label for="phone">Phone:</label>
                <input type="text" id="phone"
                    *ngControl="phone"
                    [(ngModel)]="newContact.phone"
                    required
                >
            </div>
            <button type="submit">Create contact</button>
        </form>
   `,
    providers: [ContactService]
})
export class NewContactComponent implements OnInit{

    constructor(private _contactService: ContactService, private _router: Router,
    private _routeParams: RouteParams){}

    onAddContact(name, surname, phone){
        let contact: Contact = {name: name, surname: surname, phone: phone};
        this._contactService.insertContact(contact);
        this._router.navigate(["Contacts"])
    }

    newContact: Contact;

    onSubmit(){
        this._contactService.insertContact(this.newContact);
        this._router.navigate(['Contact']);
    }

    ngOnInit():any {
        this.newContact = { name: '', surname: this._routeParams.get('surname'), phone: ''};
    }
}
