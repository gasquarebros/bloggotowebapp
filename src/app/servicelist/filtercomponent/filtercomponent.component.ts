import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-filtercomponent',
  templateUrl: './filtercomponent.component.html',
  styleUrls: ['./filtercomponent.component.scss'],
})
export class FiltercomponentComponent implements OnInit {

  public filterData: any = {};  

  public categories: any = {};

  // @Output()
  // public updateFilter = new EventEmitter();

  constructor(
    private modalController: ModalController,
    public navParams: NavParams,
    public storage: Storage) { }

  ngOnInit() {
    // this.filterData = { 'title':'', 'category':'', 'subcategory':'', 'availability': [], 'city': '' };
    this.filterData = this.navParams.data.post;
    this.categories = this.navParams.data.categories;
  }

  handleinput(data, field) {
    if(field == 'title') {
      this.filterData.title = data.target.value;
    } else if(field == 'category') {
      this.filterData.category = data.target.value;
    } else if(field == 'subcategory') {
      this.filterData.subcategory = data.target.value;
    } else if(field == 'availability') {
      this.filterData.availability = data.target.value;
    } else if(field == 'city') {
      this.filterData.city = data.target.value;
    }
  }

  clearFilter() {
    this.filterData = { 'title':'', 'category':'', 'subcategory':'', 'availability': [], 'city': '' };
    // this.updateFilter.emit(this.filterData);
    this.closeModalPopup(this.filterData);
  }

  applyFilter() {
    // this.updateFilter.emit(this.filterData);
    this.closeModalPopup(this.filterData);
  }

  closeModalPopup(data = '') {
    this.modalController.dismiss(data);
  }

}
