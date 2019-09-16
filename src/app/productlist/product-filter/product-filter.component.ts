import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as _ from 'underscore';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit, AfterViewInit {

  public filterData: any = {};  

  public categories: any = [];
  public subcategories: any = [];
  public filterSubcategories: any = [];
  public viewloaded: boolean = false;
  public priceValue: any = {};
  // @Output()
  // public updateFilter = new EventEmitter();

  constructor(
    private modalController: ModalController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    public storage: Storage) { }

  ngOnInit() {
    this.viewloaded = false;
    this.subcategories = [];
    this.categories = [];
    // this.filterData = { 'title':'', 'category':'', 'subcategory':'', 'availability': [], 'city': '' };
    this.filterData = this.navParams.data.post;
    this.priceValue = {'lower': this.filterData.price_from,'upper': this.filterData.price_to};
    this.storage.get('product_cateogies').then((val) => {
      this.categories = val;
      _.each(this.categories, (cats: any) => {
        _.each(cats.subcategory, (subcats) => {
          this.subcategories.push(subcats);
        });
      });
      this.updateSubcategory();
    });
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
      this.filterData.cat = data.target.value;
      this.updateSubcategory();
    } else if(field == 'subcategory') {
      this.filterData.subcat = data.target.value;
    } else if(field == 'price') {
      this.filterData.price_from = data.target.value.lower;
      this.filterData.price_to  = data.target.value.upper;
    }
  }

  updateSubcategory() {
    this.filterSubcategories = [];
    if(this.filterData.cat) {
      _.each(this.subcategories, (subcats: any) => {
        if(subcats.pro_subcate_category_primary_id == this.filterData.cat) {
          this.filterSubcategories.push(subcats);
          this.ref.detectChanges();
        }
      });
    } else {
      this.filterSubcategories = this.subcategories;
    }
    this.ref.detectChanges();
  }

  clearFilter() {
    this.filterData = { 'title':'', 'cat':'', 'subcat':'', 'price_from': '', 'price_to': '' };
    this.closeModalPopup(this.filterData);
  }

  applyFilter() {
    this.closeModalPopup(this.filterData);
  }

  closeModalPopup(data = '') {
    this.modalController.dismiss(data);
  }

}
