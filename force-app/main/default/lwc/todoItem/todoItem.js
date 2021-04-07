import {LightningElement, api} from 'lwc';

export default class todoItem extends LightningElement {
  @api item;

  isOpenWindow = false;

  handleClickEdit() { // open modal window
    this.isOpenWindow = true;
  }

  handleClickDelete() {
    console.log('Delete from list: ' + this.item.Id)
    const deleteEvent = new CustomEvent('deleteitem', {
      detail: this.item.Id
    });
    this.dispatchEvent(deleteEvent);
  }

  closeEditModal() { // close modal window and update list
    this.isOpenWindow = false;
    this.dispatchEvent(new CustomEvent('updatelist'));
  }
}