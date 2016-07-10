/**
 * Created by Milan Gallas on 6.7.2016.
 */
import {Injectable} from "angular2/core";
import {CONTACS} from "./mock-contact";
import {Contact} from "./contact";

@Injectable()
export class ContactService{
    getContacts(){
        return Promise.resolve(CONTACS);
    }

    insertContact(contact: Contact){
        //then kolekce kontaktů => přidej kontakt
        Promise.resolve(CONTACS).then((contacts: Contact[]) => contacts.push(contact));
    }
}