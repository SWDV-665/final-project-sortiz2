import { Component, Input} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Url } from 'url';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent {
  @Input() title: string;
  @Input() ingredients: string;
  @Input() imageURL: string;
  @Input() instructions: string;

  

  constructor(private modalCtrl: ModalController,public socialSharing: SocialSharing, public toastCtrl: ToastController) { }

  dismissModal(){
    this.modalCtrl.dismiss();
  }
  async shareItem(recipe, index){
    console.log("Sharing Recipe -", this.title, index);
    const toast =await this.toastCtrl.create({
      message: "Sharing Recipe -" + index + "...",
      duration: 2000
    });
    toast.present();


    let message= "Grocery Item - Name: " + this.title + " - Quantity: " + this.ingredients + this.instructions;
    let subject = "Shared Via Recipes app";
    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("shared successfully")
    }).catch((error) => {
      // Sharing via email is not possible
      console.error("error while sharing", error);
    });

 
  }
  }

