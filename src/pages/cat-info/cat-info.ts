import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CatInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat-info',
  templateUrl: 'cat-info.html',
})
export class CatInfoPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

      this.items = [
        "Bread",
        "Milk",
        "Eggs",
        "Coffee",
        "Cat Food"
      ];
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CatInfoPage');
  }

  addItem(){
    let prompt = this.alertCtrl.create({ //Set up our alert code
      title: 'Add Item',
      inputs: [{
        name: 'name'
      }],
      buttons:[{                         //Define two buttons for add and cancel
        text: "Cancel"
      },
      {
        text: "Add",
        handler: data => {
          this.items.push(data.name);    //If we use the add button, add the data from
       }                                 // our "name" input to our "items" list.
      }
      ]
    });
    prompt.present();                    //Actually show the alert
  }
  deleteItem(item){
    let index = this.items.indexOf(item);  //Search for the item in our list
    if(index > -1){                        //If the item is there
      this.items.splice(index, 1);         //then remove it
    }
  }
  editItem(item){ 
    let prompt = this.alertCtrl.create({
      title: 'Edit Item',
      inputs: [{
        name: 'name'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
            handler: data => {
              let index = this.items.indexOf(item);
   
              if(index > -1){
                this.items[index] = data.name;
              }
          }
         }
       ]
     });
   
     prompt.present();      
  }  
}

