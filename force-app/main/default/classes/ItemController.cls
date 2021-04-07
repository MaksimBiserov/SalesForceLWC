public with sharing class ItemController {
    @AuraEnabled(Cacheable=true)
    public static List<Item__c> getItems() {
        return [
            SELECT Id, Name, Description__c, Creation_Date__c, Category__c, Priority__c, IsDone__c, Picture__c
            FROM Item__c
            ORDER BY Category__c
            LIMIT 50
        ];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Item__c> searchItems(string searchKey) {
        return [
            SELECT Id, Name, Description__c, Creation_Date__c, Category__c, Priority__c, IsDone__c, Picture__c
            FROM Item__c
            WHERE Name LIKE : '%' + searchKey + '%'
            ORDER BY Category__c
        ];
    }
}