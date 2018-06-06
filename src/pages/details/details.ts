import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';
import { ModifierPage } from './../modifier/modifier';
import {HomePage} from "../home/home";
import { AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
 item:string;
 constructor(public navCtrl: NavController, public navParams: NavParams,public requettes_service:Provider,public alerCtrl: AlertController,private callNumber: CallNumber) {
    let item = this.navParams.get('item');
    console.log("ok page tranfere "+item.title)
    this.item=item;

  }

  supprimer(item,num){
    console.log("suppression"+item.id)
    this.requettes_service.supprimer_global(item)
    //this.requette.supprimer_global(item)
    console.log("home"+num)
    this.navCtrl.push(HomePage,{num:num});

    }

  modifier(item){
    console.log("modif"+item)
    this.navCtrl.push(ModifierPage,{item:item});
    }

    doConfirm(item,num) {
        let confirm = this.alerCtrl.create({
            title: 'Supprimer cette annonce ?',
            message: 'Voulez-vous vraiment supprimer cette annonce ?',
            buttons: [
                {
                    text: 'Non',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Oui',
                    handler: () => {
                        console.log('Agree clicked');
                        this.supprimer(item, num);
                    }
                }
            ]
        });
        confirm.present()
    }

    call(number){
        this.callNumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }


    ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage')
  }

}
