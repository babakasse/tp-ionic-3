import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Provider } from '../../providers/provider/provider';

/**
 * Generated class for the AjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html',
})
export class AjoutPage {
//item:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public requettes_service:Provider) {
// let item = this.navParams.get('item');
// console.log(item)
// this.item=item;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutPage');
  }
  todo = {}

  logForm() {
    /*
    console.log(this.todo.category);
    console.log(this.todo.title);
    console.log(this.todo.description);
    console.log(this.todo.author); */
   this.requettes_service.ajouter_global(this.todo)
  }

}
