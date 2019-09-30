import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as _ from 'underscore';
@Component({
  selector: 'app-filtercomponent',
  templateUrl: './filtercomponent.component.html',
  styleUrls: ['./filtercomponent.component.scss'],
})
export class FiltercomponentComponent implements OnInit, AfterViewInit {

  public filterData: any = {};  

  public categories: any = {};
  public subcategories: any = {};
  public countries: any = {};
  public states: any = {};
  public cities: any = {};
  public viewloaded: boolean = false;

  // @Output()
  // public updateFilter = new EventEmitter();

  constructor(
    private modalController: ModalController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    public storage: Storage) { }

  ngOnInit() {
    this.viewloaded = false;
    // this.filterData = { 'title':'', 'category':'', 'subcategory':'', 'availability': [], 'city': '' };
    this.filterData = this.navParams.data.post;
    this.categories = this.navParams.data.categories;
    this.subcategories = this.navParams.data.subcategories;
    this.countries = this.navParams.data.countries;
    this.states = this.navParams.data.states;
    this.cities = this.navParams.data.cities;
    this.updateSubcategory();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewloaded = true;  
    }, 200);
    
  }

  ionViewWillEnter () {
    this.loadingController.dismiss();
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 500);
  }

  handleinput(data, field) {
    if(field == 'title') {
      this.filterData.title = data.target.value;
    } else if(field == 'category') {
      this.filterData.category = data.target.value;
      this.updateSubcategory();
    } else if(field == 'subcategory') {
      this.filterData.subcategory = data.target.value;
    } else if(field == 'availability') {
      this.filterData.availability = data.target.value;
    } else if(field == 'city') {
      this.filterData.city = data.target.value;
    }
  }

  updateSubcategory() {
    this.subcategories = [];
    if(this.filterData.category) {
      _.each(this.navParams.data.subcategories, (subcats: any) => {
        if(subcats.pro_subcate_category_primary_id == this.filterData.category) {
          this.subcategories.push(subcats);
        }
      });
    } else {
      this.subcategories = this.navParams.data.subcategories;
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
