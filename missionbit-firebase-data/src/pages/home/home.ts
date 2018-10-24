import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseStoreProvider } from '../../providers/firebase-store/firebase-store'
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/rx';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: Observable<any[]>;
  constructor(public navCtrl: NavController, 
    public firebaseProvider: FirebaseStoreProvider, 
    public alertCtrl: AlertController) {               //Add this AlertController parameter
  
      this.movies = firebaseProvider.listMovies();     //This is the code we should already have
  }
  updateMovie(item){
    let prompt = this.alertCtrl.create({
      title: 'Edit movie',
      message: "Edit movie data",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: item.title
        },
        {
          name: 'genre',  
          placeholder: 'Genre',
          value: item.genre
        },
        {
          name: 'year',
          placeholder: 'Year',
          type: 'number', 
          value: item.year
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.firebaseProvider.updateMovie(item.id, data);
          }
        }
      ]
    });
    prompt.present();
  }
  deleteMovie(title, id){
    const confirm = this.alertCtrl.create({
      title: 'Delete this movie?',
      message: 'Do you really want to delete "' + title + '"?',
      buttons: [
        {
          text: 'Cancel', 
        },
        {
          text: 'Delete',
          handler: () => {
            this.firebaseProvider.deleteMovie(id); 
          }
        }
      ]
    });
    confirm.present();
  }
  addMovie(){
    let prompt = this.alertCtrl.create({
      title: 'Add Movie',
      message: "Add a new movie",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'genre',
          placeholder: 'Genre'
        },
        {
          name: 'year',
          placeholder: 'Year',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.firebaseProvider.addMovie(data);  //Call our function from the first part
          }
        }
      ]
    });
    prompt.present();
  }

}