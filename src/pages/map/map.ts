import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
/**
* Generated class for the MapPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on

* Ionic pages and navigation.
*/
@IonicPage()
@Component({
selector: 'page-map',
templateUrl: 'map.html',
})

export class MapPage {
@ViewChild('map') mapElement: ElementRef;
map: any;

constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
}
ionViewDidLoad() {
console.log('ionViewDidLoad MapPage');
this.carte();
}

carte(){
  this.geolocation.getCurrentPosition().then((position) => {
  let latLng = new google.maps.LatLng(position.coords.latitude,
  position.coords.longitude);
  console.log("lattitude"+position.coords.latitude+"longitude"+position.coords.longitude)
  let mapOptions = {
  center: latLng,
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }, (err) => {
  console.log(err);
  });
  }
  addMarker(){
    console.log(this.map);
  let marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.map.getCenter()
  });
  let content = "<h4>Information!</h4>";
  this.addInfoWindow(marker, content);
  }
  addInfoWindow(marker, content){
  let infoWindow = new google.maps.InfoWindow({
  content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
    });
    }
    /* const subscription = this.geolocation.watchPosition()
    .filter((p) => p.coords !== undefined) //Filter Out Errors
    .subscribe(position => {
    console.log(position.coords.longitude + ' ' + position.coords.latitude);
    });*/
    // To stop notifications
  }
  
