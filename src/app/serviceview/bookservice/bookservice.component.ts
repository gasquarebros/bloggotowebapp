import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import * as _ from 'underscore';
import { BookingData } from './booking-data.model';
import * as moment from 'moment';
import { RestApiService } from './../../rest-api.service';

@Component({
  selector: 'app-bookservice',
  templateUrl: './bookservice.component.html',
  styleUrls: ['./bookservice.component.scss'],
})
export class BookserviceComponent implements OnInit, AfterViewInit {
  public minDate: any = new Date();
  public endMinDate: any = new Date();
  public viewloaded: boolean = false;
  public posts: any;
  public states: any = [];
  public cities: any = [];
  public overallCities: any = [];
  public timeRange: any = [];
  public timeEndRange: any = [];

  public modelData: BookingData;

  public formError: string;
  validations_form: FormGroup;
  validation_messages = {
    'startDate': [
      { type: 'required', message: 'Start Date is required.' },
    ],
    'endDate': [
      { type: 'required', message: 'End Date is required.' },
    ],
    'startTime': [
      { type: 'required', message: 'Start Time is required.' }
    ],
    'endTime': [
      { type: 'required', message: 'End Time is required.' }
    ],
    'address1': [
      { type: 'required', message: 'Address is required.' }
    ],
    'state': [
      { type: 'required', message: 'State is required.' },
    ],
    'city': [
      { type: 'required', message: 'City is required.' },
    ],
    'zipcode': [
      { type: 'required', message: 'Zipcode is required.' },
    ],
  };

  constructor(private modalController: ModalController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    private api: RestApiService,
    public storage: Storage) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      startDate: new FormControl('', Validators.compose([
        Validators.required
      ])),
      address1: new FormControl('', Validators.compose([
        Validators.required
      ])),
      state: new FormControl('', Validators.compose([
        Validators.required
      ])),
      city: new FormControl('', Validators.compose([
        Validators.required
      ])),
      zipcode: new FormControl('', Validators.compose([
        Validators.required
      ])),
      endDate: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      address2: new FormControl( ''),
      landmark: new FormControl( ''),
      additional: new FormControl( ''),
    });

    this.minDate = moment().add(1, 'days').format('YYYY-MM-DD');
    this.endMinDate = this.minDate;
    this.modelData = new BookingData();
    this.viewloaded = false;
    this.posts = this.navParams.data.posts;
    if(this.posts.ser_service_start_time !='' && this.posts.ser_service_start_time != '00:00') {
      
      const startHourMins = this.posts.ser_service_start_time.split(':');
      const endHourMins = this.posts.ser_service_end_time.split(':');
      const startHour = parseInt(startHourMins[0]);
      const startMin = parseInt(startHourMins[1]);
      const endHour = parseInt(endHourMins[0]);
      const endMin = parseInt(endHourMins[1]);
      this.timeRange = this.calculateTimeRange(startHour, startMin, endHour, endMin);
      this.timeEndRange = this.calculateTimeRange(startHour, startMin, endHour, endMin);
    }
    this.storage.get('state').then((val) => {
      this.states = val;
    });
    this.storage.get('city').then((val) => {
      this.overallCities = val;
    });

    if(this.posts.ser_pricet_type == 'day' || this.posts.ser_pricet_type == 'hour') {
      const endDate = this.validations_form.get('endDate');
      endDate.setValidators([Validators.required]);
      if(this.posts.ser_pricet_type == 'hour') {
        const startTime = this.validations_form.get('startTime');
        startTime.setValidators([Validators.required]);
        const endTime = this.validations_form.get('endTime');
        endTime.setValidators([Validators.required]);
        
      }
    }
  }

  calculateTimeRange(startHour, startMin, endHour, endMin) {
    const timeRanges = [];
    for (let i = startHour; i <= endHour; i++) {
      const st = moment(i+':00', 'HH:mm').format('h:mm A');
      const et = moment(i+':30', 'HH:mm').format('h:mm A');
      if(startMin == 30 && i == startHour) {
        timeRanges.push({'value' : i + ':' + '30', 'label': et});
      } else if(i == endHour && endMin == 0) {
        timeRanges.push({'value' : i + ':' + '00', 'label': st});
      } else {
        timeRanges.push({'value' : i + ':' + '00', 'label': st});
        timeRanges.push({'value' : i + ':' + '30', 'label': et});
      }
    }
    return timeRanges;
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
    if(field == 'startDate') {
      this.endMinDate = moment(this.modelData.startDate).format('YYYY-MM-DD');
    }
    if(field == 'startTime') {
      if(moment(this.modelData.startDate).format('YYYY-MM-DD') == moment(this.modelData.endDate).format('YYYY-MM-DD')) {
        const startHourMins = data.target.value.split(':');
        const endHourMins = this.posts.ser_service_end_time.split(':');
        const startHour = parseInt(startHourMins[0])+1;
        const startMin = parseInt(startHourMins[1]);
        const endHour = parseInt(endHourMins[0]);
        const endMin = parseInt(endHourMins[1]);
        this.timeEndRange = this.calculateTimeRange(startHour, startMin, endHour, endMin);
      } else {
        this.timeEndRange = this.timeRange;
      }
    }
    if(field == 'state') {
      this.filterCities(parseInt(data.target.value));
    }
  }

  filterCities(state) {
    this.cities = [];
    if(state) {
      _.each(this.overallCities, (city: any) => {
        if(city.city_state == state) {
          this.cities.push(city);
        }
      });
      
    }
  }

  processForm(data) {
    this.api.postData('restservices/bookservice', this.modelData).subscribe(result => {
      const res: any = result;
      if (res !== undefined) {
        console.log(res.status);
        if (res.status === 'success') {
        } else {
          this.formError = res[0].message;
        }
      }
    }, err => {
      console.log(err);
    });
  }

  closeModalPopup() {
    this.modalController.dismiss();
  }

}
