import { LightningElement, api} from 'lwc';
export default class Paginator extends LightningElement {
    
    totalItems;
    totalPage = 0;
    currentPage = 1;
    itemSize = 5;

    get itemspaginator() {
        return this.visibleItems;
    }

    @api set itemspaginator(data) {
        if(data) { 
            this.totalItems = data;
            this.totalPage = Math.ceil(data.length / this.itemSize);
            this.updateItemsPaginator();
        }
    }

    get disablePrevious() { 
        return this.currentPage <= 1;
    }

    get disableNext() { 
        return this.currentPage >= this.totalPage;
    }

    handlePrevious() { 
        if(this.currentPage > 1) {
            this.currentPage = this.currentPage - 1;
            this.updateItemsPaginator();
        }
    }

    handleNext() {
        if(this.currentPage < this.totalPage){
            this.currentPage = this.currentPage + 1;
            this.updateItemsPaginator();
        }
    }

    updateItemsPaginator() { 
        const startItem = (this.currentPage - 1) * this.itemSize;
        const endItem = this.itemSize * this.currentPage;
        this.visibleItems = this.totalItems.slice(startItem, endItem);

        this.dispatchEvent(new CustomEvent('update', { // send event for update list visible items
            detail:{ 
                itemspaginator:this.visibleItems
            }
        }));
    }
}