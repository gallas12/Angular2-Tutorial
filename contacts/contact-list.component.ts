///<reference path="../../node_modules/angular2/src/core/linker/interfaces.d.ts"/>
/**
 * Created by Milan Gallas on 6.7.2016.
 */
import {Component} from 'angular2/core';
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact-services";
import {Contact} from "./contact";
import {OnInit} from "angular2/core";

@Component({
   template: `
        <ul>
            <li *ngFor="#contact of contacts"
                (click)="selectContact(contact)"
                [class.clicked]="selectedContact === contact">
                Hello World! Click to show datails of {{contact.name}}
            </li>
        </ul>
        <contact *ngIf="selectedContact !== null" [contact]="selectedContact"></contact>
        <!-- předám do vnořené komponenty contact do importované proměnné contact vybrený kontact z selectedContact-->
   `,
    providers: [ContactService], //new Line
    directives: [ContactComponent]
})
export class ContactListComponent implements OnInit{

    //objekt se kterým budu pracovat. Definujeme datvoý typ na rozhraní Contact.
    public contacts: Contact[];

    //vybraný object
    public selectedContact = null;

    constructor(private _contactService: ContactService){}

    //vrátím všechny kontakty
    getContacts(){
        //vrátím všechny kontakty z servisy a po jednom je přiřadím do interní kolekce, která je v této třídě!
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
    }

    //nastavím aktuální kontakt
    selectContact(contact){
        this.selectedContact = contact;
    }

    //metoda rozhraní OnInit. Zavolá se po inicializaci objectu
    ngOnInit():any {
        this.getContacts();
    }
}
