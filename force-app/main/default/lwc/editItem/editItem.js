import {LightningElement, api} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Item__c.Name';
import DESCRIPTION_FIELD from '@salesforce/schema/Item__c.Description__c';
import CREATIONDATE_FIELD from '@salesforce/schema/Item__c.Creation_Date__c';
import CATEGORY_FIELD from '@salesforce/schema/Item__c.Category__c';
import PRIORITY_FIELD from '@salesforce/schema/Item__c.Priority__c';
import ISDONE_FIELD from '@salesforce/schema/Item__c.IsDone__c';
import PICTURE_FIELD from '@salesforce/schema/Item__c.Picture__c';

export default class EditItem extends LightningElement {

    @api isOpen; // for lightning-record-form
    @api item; // for lightning-record-form

    fields = [NAME_FIELD, DESCRIPTION_FIELD, CREATIONDATE_FIELD, CATEGORY_FIELD, // for lightning-record-form
              PRIORITY_FIELD, ISDONE_FIELD, PICTURE_FIELD];

    handleSave(){
        this.dispatchEvent(new CustomEvent('closemodal')); // send event for update list
    }

    handleCancel(){
        this.dispatchEvent(new CustomEvent('closemodal')); // send event for update list
    }
}