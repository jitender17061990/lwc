import { LightningElement, api, track } from 'lwc';
export default class ContactForm extends LightningElement {
    @api recordID;
    @api objectApiName;
    @track fields = ['name','title','phone','email'];

}