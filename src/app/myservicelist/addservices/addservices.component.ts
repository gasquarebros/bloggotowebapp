import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { MenuController, PopoverController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../auth/auth.service';
import { RestApiService } from '../../rest-api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.component.html',
  styleUrls: ['./addservices.component.scss'],
})
export class AddservicesComponent implements OnInit {

  public appid: string;
  public isEdit: boolean = false;
  public editId: any = '';

  public categories: any = {};

  public subcategories: any = {};

  public filterData: any = {};  

  public cities: any = [];

  public formError: string;
  validations_form: FormGroup;
  validation_messages = {
    'category': [
      { type: 'required', message: 'Category is required.' }
    ],
    'subcategory': [
      { type: 'required', message: 'Subcategory is required.' }
    ],
    'title': [
      { type: 'required', message: 'Title is required.' }
    ],
    'description': [
      { type: 'required', message: 'Description is required.' }
    ],
    'priceType': [
      { type: 'required', message: 'Price Type is required.' }
    ],
    'startTime': [
      { type: 'required', message: 'StartTime is required.' }
    ],
    'endTime': [
      { type: 'required', message: 'EndTime is required.' }
    ],
    'price': [
      { type: 'required', message: 'Price is required.' }
    ],
    'availability': [
      { type: 'required', message: 'Availability is required.' }
    ],
    'city': [
      { type: 'required', message: 'City is required.' }
    ],
    'status': [
      { type: 'required', message: 'Status is required.' }
    ]
  };

  constructor(private route: ActivatedRoute,
    public popoverController: PopoverController,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private toastCtrl: ToastController,
    public router: Router,
    public formBuilder: FormBuilder,
    public api: RestApiService,
    private authService: AuthService,
    private storage: Storage) { }

  ngOnInit() {
    this.appid = 'BloggotoApp';

    this.filterData = {
      title: '',
      category: '',
      subcategory: '',
      description: '',
      priceType: '',
      numberBookings: '',
      startTime: '',
      endTime: '',
      price: '',
      discountprice: '',
      discountFromDate: '',
      discountToDate: '',
      availability: [],
      city: [],
      status: ''
    };

    this.validations_form = this.formBuilder.group({
      category: new FormControl('', Validators.compose([
        Validators.required
      ])),
      subcategory: new FormControl('', Validators.compose([
        Validators.required
      ])),
      title: new FormControl('', Validators.compose([
        Validators.required
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required
      ])),
      priceType: new FormControl('', Validators.compose([
        Validators.required
      ])),
      startTime: new FormControl('', Validators.compose([
        Validators.required
      ])),
      endTime: new FormControl('', Validators.compose([
        Validators.required
      ])),
      price: new FormControl('', Validators.compose([
        Validators.required
      ])),
      availability: new FormControl('', Validators.compose([
        Validators.required
      ])),
      city: new FormControl('', Validators.compose([
        Validators.required
      ])),
      status: new FormControl('', Validators.compose([
        Validators.required
      ])),
      numberBookings: new FormControl(),
      discountprice: new FormControl(),

    });

    this.storage.get('service_category').then((val) => {
      this.categories = val;
      if(val == null) {
        this.fetchCategories();
      }
    });
    this.storage.get('service_subcategory').then((val) => {
      this.subcategories = val;
      if(val == null) {
        this.fetchsubcategories();
      }
    });

    const queryParams = this.route.snapshot.queryParams;
    if (queryParams !== undefined && queryParams.id != undefined && queryParams.id != '') {
      this.isEdit = true;
      this.editId = queryParams.id;
      this.setFilterData();
    } else {
      this.editId = '';
      this.isEdit = false;
    }
    console.log(this.isEdit);
    console.log(this.editId);
  }

  setFilterData() {
    this.validations_form.get('priceType').setValue('day');
    this.filterData.priceType = 'day';

    const body = new FormData();
    body.append('serviceID', this.editId);
    this.api.postData('restservices/fetchService', body).subscribe(result => {
      const res: any = result;
      if (res !== undefined) {
        if (res[0].status === 'success') {
        }
      }
    });
  }

  fetchCategories() {
    this.api.getStaticData('restservices/categories?app_id=' + this.appid, []).subscribe(result => {
      const res: any = result;
      if (res.body !== undefined) {
        const response = res.body;
        if (response.status === 'success') {
          this.categories = response.html;
          this.storage.set('service_category', this.categories);
        }
        this.loadingController.dismiss();
      }
    }, err => {
      console.log(err);
    });
  }

  fetchsubcategories() {
    this.api.getStaticData('restservices/subcategories?app_id=' + this.appid, []).subscribe(result => {
      const res: any = result;
      if (res.body !== undefined) {
        const response = res.body;
        if (response.status === 'success') {
          this.subcategories = response.html;
          this.storage.set('service_subcategory', response.html);
        }
      }
    }, err => {
      console.log(err);
    });
  }

  fetchMasterData() {
    const cdata = '/countries?type=city';
    this.storage.get('city').then((val) => {
      if(val == null) {
        this.authService.fetchMasterData(cdata);
        this.storage.get('city').then((val) => {
          this.cities = val;
        });
      }
    });
  }

  addService(values) {
    console.log(values);

  }

  goBack() {
    this.router.navigate(['/myservicelist']);
  }

}
