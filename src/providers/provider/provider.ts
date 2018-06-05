import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

interface Items {

   }
@Injectable()
export class Provider {

	 items: Observable<Items[]>; // read collection
  itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection
  requettesProvider:any=[];

  constructor(public db: AngularFirestore) {
this.itemsCollection = db.collection<Items>('advertisements'); //ref()
console.log('Hello Requettes Provider Provider');
}

  ajouter_global(item){
    console.log("ajout de la page requette "+item.id)
    this.db.collection("advertisements").add({
      category: item.category,
      title: item.title,
      description:item.description,
      author:item.author
    })
      .then( (docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch( (error) => {
        console.error("Error adding document: ", error);
      });
  }

  supprimer_global(item){
    console.log("de la page requette"+item.id)
    this.db.collection('advertisements').doc(item.id).delete();
    }

    modifier_global(item){
      console.log("modificatoin de la page requette"+item.id)
      console.log("ajout de la page requette"+item.id)
      this.db.collection("advertisements").doc(item.id).update({
      category: item.category,
      title: item.title,
      description:item.description,
      author:item.author
      })
      .then( (docRef) => {
      console.log("Document written with ID: ", docRef);
      })
      .catch( (error) => {
      console.error("Error adding document: ", error);
      });
      }

      modifier_photo(item, nom_photo){
        console.log("modificatoin photo"+item.id)
        console.log("ajout de la page requette"+item.id)
        console.log("nom photo "+nom_photo);
        this.db.collection("advertisements").doc(item.id).update({
        photo: nom_photo
        })
        .then( (docRef) => {
        console.log("Document written with ID: ", docRef);
        console.log("Photo ajoutée")
        })
        .catch( (error) => {
        console.error("Error adding document: ", error);
        });
        }

}
