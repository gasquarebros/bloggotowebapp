import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, ToastController, PopoverController, NavParams, ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RestApiService } from '../../rest-api.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import * as _ from 'underscore';
// import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';
//import { File } from '@ionic-native/file';

@Component({
  selector: 'app-model-post',
  templateUrl: './model-post.component.html',
  styleUrls: ['./model-post.component.scss'],
  providers: [FileChooser,
    FileTransfer
    //VideoCapturePlus
  ]
})
export class ModelPostComponent implements OnInit {

  public commentsData = [];
  public count = 0;
  public reqOpts;
  public userInfo: any = {};
  public postInfo: any = {};
  public modalType: string;
  public base64Image: any = '';
  public postCategory: any = [];
  public postType: any = [];
  public followers: any = [];
  public postCategorySelect: string;
  public postTypeSelected: string;
  public postTags: any = [];
  public formError: string;
  validations_form: FormGroup;
  validations_postform: FormGroup;
  public imageData;
  validation_messages = {
    'postcomments': [
      { type: 'required', message: 'Comments is required.' },
    ],
    'title': [
      { type: 'required', message: 'Title is required.' },
    ],
    'description': [
      { type: 'required', message: 'Description is required.' },
    ]
  };

  @ViewChild('fileInput') fileInput;

  public imageURL: any = [];
  public uploadPDF: any = '';
  constructor(public navParams: NavParams,
    public modalController: ModalController,
    private api: RestApiService,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public formBuilder: FormBuilder,
    private transfer: FileTransfer,
    // private videoCapturePlus: VideoCapturePlus,
   // private file: File,
    private fileChooser: FileChooser,
    public toastCtrl: ToastController) {
  }

  ngOnInit() {
    this.postCategorySelect = '';
    this.userInfo = this.navParams.data.userInfo;
    this.postInfo = this.navParams.data.post;
    this.modalType = this.navParams.data.type;
    console.log(this.userInfo);
    if (this.modalType === 'comment') {
      this.validations_form = this.formBuilder.group({
        postcomments: new FormControl('', Validators.compose([
          Validators.required
        ])),
      });
      this.fetchComments();
    }
    if (this.modalType === 'post') {
      
      this.postCategory = this.navParams.data.postCategories;
      this.postType = this.navParams.data.postTypes;
      this.followers = this.navParams.data.followers;

      if (this.postInfo  != '') {
        console.log(this.postInfo);
        this.postCategorySelect = this.postInfo.blog_cat_name.toLowerCase();
        this.postTypeSelected = this.postInfo.post_type;
        if (this.postInfo.post_photo.length > 0) {
          const postPhotos: any = [];
          _.each(this.postInfo.post_photo, function(postPhoto: any) {
            postPhotos.push(postPhoto);
          });
          this.imageURL = postPhotos;
        }
        this.postTags = [];
        if (this.postInfo.post_tag_names.length > 0) {
          const postTaggging: any = [];
          _.each(this.postInfo.post_tag_names, function(postTag: any) {
            postTaggging.push(postTag.username);
          });
          this.postTags = postTaggging;
        }
      } else {
        this.postCategorySelect = 'general';
        this.postTypeSelected = 'blog';
        this.postTags = [];
      }
      this.validations_postform = this.formBuilder.group({
        title: new FormControl(this.postInfo.post_title, Validators.compose([
          Validators.required
        ])),
        description: new FormControl(this.postInfo.post_full_description, Validators.compose([
          Validators.required
        ])),
        tagging: new FormControl(),
        youtubeurl: new FormControl()
      });
    }
  }

  fetchComments() {
    this.api.getStaticData('post/comments?post_slug=' + this.postInfo.post_slug, this.reqOpts).subscribe(result => {
      const res: any = result;
      if (res.body !== undefined) {
        const response = res.body;
        if (response.status === 'success') {
          this.commentsData = response.html.records;
          this.count = this.commentsData.length;
        } else {
          this.presentToast(response.message);
        }
      }
    }, err => {
      console.log(err);
    });
  }

  shoePostTime(data) {
    const currentDate = new Date();
    const createdDate = new Date(data.post_comment_created_on);
    const diff: any = (currentDate.getTime() - createdDate.getTime());
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    const month = Math.floor(hrs / 720);
    const days = Math.floor(hrs / 24);
    const yrs = Math.floor(days / 365);
    let result_display: any = '';
    if (yrs > 1) {
      result_display += yrs + ' years';
    } else if (month > 1) {
      result_display += month + ' months';
    } else if (days > 1) {
      result_display += days + ' days';
    } else if (hrs > 1) {
      result_display += hrs + ' hours';
    } else if (mins > 1) {
      if (mins >= 1 && mins <= 5) {
        result_display += 'few minutes';
      }	else {
        result_display += mins + ' minutes';
      }
    } else {
      return result_display += 'just now';
    }
    return result_display += ' ago';
  }

  close() {
    // this.presentToast();
    this.modalController.dismiss();
  }

  deleteComment(data) {
    const body = new FormData();
    body.append('post_id', this.postInfo.post_id);
    body.append('comment_id', data.post_comment_id);
    this.api.postData('post/deletecomment', body).subscribe(result => {
      const res: any = result;
      if (res !== undefined) {
        if (res[0].status === 'success') {

          let deleteIndex: any = '';
          _.each(this.commentsData, function(comments: any, index) {
            if(comments.post_comment_id == data.post_comment_id) {
              deleteIndex = index;
            }
          });
          if(deleteIndex != '') {
            this.commentsData.splice(deleteIndex, 1);
          }
          this.presentToast(res[0].message);
        } else {
          this.presentToast(res[0].message);
        }
      }
    }, err => {
      console.log(err);
    });
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });
    toast.present();
  }

  postComment(form) {
    console.log(form);
    const body = new FormData();
    body.append('post_record', this.postInfo.post_id);
    body.append('user_id', this.userInfo.bg_user_id);
    body.append('action', 'comment');
    body.append('comments', form.postcomments);
    this.api.postData('post/post_addcomments', body).subscribe(result => {
      const res: any = result;
      if (res !== undefined) {
        if (res[0].status === 'success') {
          let records = {customer_first_name : this.userInfo.bg_first_name, customer_last_name: this.userInfo.bg_last_name, customer_photo: this.userInfo.bg_user_profile_picture, post_comment_message: form.postcomments, post_comment_user_id: this.userInfo.bg_user_id};
          // this.commentsData.push(records);
          this.fetchComments();
          this.presentToast(res[0].message);
        } else {
          this.presentToast(res[0].message);
        }
      }
    }, err => {
      console.log(err);
    });
  }
  async presentVideoActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      // title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.openVideoGallery();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takeVideo();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  uploadPdf() {
    this.fileChooser.open().then(uri => {
      const body = new FormData();
      const reader = new FileReader();
      const imgBlob = new Blob([reader.result]);
      body.append('file', imgBlob, 'name.pdf');
      this.api.postData('post/pdfupload', body).subscribe(result => {
        const res: any = result;
        if (res !== undefined) {
          if (res[0].status === 'success') {
            this.uploadPDF = res[0].message;
          } else {
            this.presentToast(res[0].message);
          }
        }
        alert(JSON.stringify(res));
      }, err => {
        alert(JSON.stringify(err));
        console.log(err);
      });

    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      // title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  openVideoGallery() {

    const options = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.VIDEO
    };
    if (Camera['installed']) {
      this.camera.getPicture(options).then((videoData) => {
        console.log(videoData);
      }, err => {
        console.log(err);
      });
    }
  }

  takeVideo() {
    /*
    const options: VideoCapturePlusOptions = {
      limit: 1,
      highquality: true,
      portraitOverlay: 'assets/img/camera/overlay/portrait.png',
      landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
    };
    this.videoCapturePlus.captureVideo(options)
      .then((mediafile: MediaFile[]) =>  {
        console.log(mediafile);
        const videodata: any = mediafile;
        const body = new FormData();
        body.append('userid', this.userInfo.bg_user_id);
        body.append('base64', videodata);
        const ApiUrl = 'post/testupload';
        this.api.postData(ApiUrl, body).subscribe(result => {
          const res: any = result;
          if (res !== undefined) {
            if (res[0].status === 'success') {
              // this.imageURL.push(res[0].img);
            } else {
              this.formError = res[0].message;
            }
          }
        }, err => {
          console.log(err);
        });
      }, error =>  {
        console.log('Something went wrong');
      });
      */
  }

  takePicture(sourceType) {
    // Create options for the Camera Dialog
    const options: CameraOptions = {
      sourceType: sourceType,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 600,
      targetHeight: 600,
      saveToPhotoAlbum: false
    };

    if (Camera['installed']) {
      this.camera.getPicture(options).then((imageData) => {
        this.imageData = imageData;
      this.base64Image = 'data:image/jpeg;base64,' + imageData;

      const body = new FormData();
      body.append('userid', this.userInfo.bg_user_id);
      body.append('base64', imageData);
      body.append('type', this.postCategorySelect);
      const ApiUrl = 'post/uploadphoto';
      this.api.postData(ApiUrl, body).subscribe(result => {
        const res: any = result;
        if (res !== undefined) {
          if (res[0].status === 'success') {
            this.imageURL.push(res[0].img);
          } else {
            this.formError = res[0].message;
          }
        }
      }, err => {
        console.log(err);
      });
    }, (err) => {
      try {
        this.fileInput.nativeElement.click();
      } catch (err) {
        console.log(err);
        // this.presentToast('Sorry!! Something went wrong.');
      }
    });
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  clickCategory(category) {
    console.log(category);
    this.postCategorySelect = category;
  }

  clickType(type) {
    this.postTypeSelected = type;
  }

  newPost(form) {
    const body = new FormData();
    body.append('post_title', form.title);
    body.append('post_description', form.description);
    body.append('post_category', this.postCategorySelect);
    body.append('post_type', this.postTypeSelected);
    body.append('post_video', '');
    body.append('post_photo', this.imageURL);
    body.append('post_pdf', this.uploadPDF);
    body.append('post_embed_video_url', form.youtubeurl);
    body.append('post_tags[]', form.tagging);
    body.append('user_id', this.userInfo.bg_user_id);
    let ApiUrl = 'post/post_add';
    if (this.postInfo.post_id !== undefined && this.postInfo.post_id !== '') {
      ApiUrl = 'post/post_update';
      body.append('post_id', this.postInfo.post_id);
    }
    console.log(body);
    this.api.postData(ApiUrl, body).subscribe(result => {
      console.log('innn');
      const res: any = result;
      if (res !== undefined) {
        console.log(res.status);
        if (res.status === 'success') {
          this.presentToast(res.message);
          // this.router.navigateByUrl('/login');
        } else {
          this.formError = res[0].message;
          console.log(this.formError);
        }
      }
    }, err => {
      console.log(err);
    });
  }

}
