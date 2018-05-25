import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {Camera , CameraOptions} from '@ionic-native/camera'
import { storage } from 'firebase'
import {File} from '@ionic-native/file'
import {FileChooser} from '@ionic-native/file-chooser'
import { Provider } from '../../providers/provider/provider';
//import { AjoutPage } from '../../pages/ajout/ajout';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
  /*template: `
  <h3>{{hero.name}} says:</h3>`*/
})

export class PhotoPage {
  
  
  loading;
  selectedPhoto;
  currentImage;
 item:string;
 photo;
 randomId;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera:Camera, private file:File,private fileChooser: FileChooser,public loadingCtrl: LoadingController,public requettes_service:Provider) {
    let item = this.navParams.get('item');
    this.item=item;
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }
  dataURItoBlob(dataURI) {
    // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };
  async takePhoto(item){
    //this.randomId = Math.random().toString(36).substring(2);
    
   // this.requettes_service.modifier_photo(this.item,this.randomId)
    const options: CameraOptions= {
quality:50,
targetHeight:600,
targetWidth:600,
destinationType:this.camera.DestinationType.DATA_URL,
encodingType:this.camera.EncodingType.JPEG,
mediaType:this.camera.MediaType.PICTURE,
correctOrientation:true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.loading.present();

      this.selectedPhoto  = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
      console.log(this.selectedPhoto)
      
     
      this.upload();
    }, (err) => {
      console.log('error', err);
    });
   
  }
  upload() {
    if (this.selectedPhoto) {
     this.randomId = Math.random().toString(36).substring(2);
    // this.item["photo"] ='images/'+randomId+'.png'
      var uploadTask =storage().ref().child('images/'+this.randomId+'.jpg').put(this.selectedPhoto);
      uploadTask.then(this.onSuccess, this.onError); 
    }
    
  }
  onSuccess = (snapshot) => {
    this.currentImage = snapshot.downloadURL;
   console.log(this.currentImage)
    this.loading.dismiss();
   this.requettes_service.modifier_photo(this.item,this.currentImage)
   
  }

  onError = (error) => {
    console.log('error', error);
    this.loading.dismiss();
  }
    /*const result = await this.camera.getPicture(options)
const image = 'data:image/jpeg;base64,${result}';
const pictures = storage().ref('pictures/photos');
//old pictures.putString(image,'data_url');
pictures.putString(image)


    }catch(e){
      console.error(e)
    }
  }*/
//-------------fin take photo

  Choisir_image(){//-------debut fonction choisir_image
    
    this.fileChooser.open().then((uri)=>{
    
      alert (uri)
      this.file.resolveLocalFilesystemUrl(uri).then((newUrl)=>{
        alert(JSON.stringify(newUrl));
    
        let dirPath = newUrl.nativeURL;
        let dirPathSegments = dirPath.split('/')  //casse la chaine de caractère dans un tableau
        dirPathSegments.pop() //supprime le dernier élément
        dirPath = dirPathSegments.join('/')
    
        this.file.readAsArrayBuffer(dirPath, newUrl.name).then(async (buffer)=>{
    
          await this.upload_fc(buffer, newUrl.name)
        })
    
    
      })
}
    )
  }//----------------fin cfonction choisir image
  async upload_fc(buffer, name) {//------------debut fonction upload
let blob = new Blob([buffer], {type: "image/jpeg"});
let storage=firebase.storage();
storage.ref('images/'+name).put(blob).then((d)=>{
  alert("image tranférée");
}).catch((error)=>{

  alert(JSON.stringify(error))
})

 }//-----------------fin fonction upload
}

 



