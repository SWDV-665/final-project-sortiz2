import { Component} from '@angular/core';
import {Recipe} from './recipe.module'
import {Router} from '@angular/router';
import { NavController, PopoverController, ToastController } from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import { RecipeServiceService } from '../recipe-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';
import {ModalController} from '@ionic/angular';
import {DepositModalComponent} from '../deposit-modal/deposit-modal.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage{   


  constructor(public socialSharing: SocialSharing, private modalCtrl:ModalController, public inputDialogService: InputDialogServiceService, public dataService: RecipeServiceService ,private router:Router, public popoverController: PopoverController, public navCtrl: NavController,public toastCtrl: ToastController,public alertController: AlertController) { }

  loadItems(){
    return this.dataService.getItems();
  }
  

  addItem() {
    console.log("add item");
    this.inputDialogService.showPrompt();
  }

  async openModal(recipe){
    const modal = await this.modalCtrl.create({
      component: DepositModalComponent,
      componentProps: {title: recipe.title, ingredients: recipe.ingredients, instructions:recipe.instructions}
    });
      await modal.present();
  }

  
}




  