import { Injectable } from '@angular/core';
import { RecipeServiceService } from './recipe-service.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public alertController: AlertController,public dataService: RecipeServiceService) { }

  async showPrompt(recipe?, index?) {
    const alert = await this.alertController.create({
      header: recipe? 'Edit item' : 'Add Recipe',
      message: recipe? 'Please edit item...': 'Please add title ingredients and instructions',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'title',
          value: recipe ? recipe.title: null
        },
        {
          name: 'ingredients',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Ingredients',
          value: recipe? recipe.ingredients:null
        },
        {
          name: 'Instruction',
          type: 'text',
          placeholder: 'Instructions',
          value: recipe? recipe.instructions:null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: recipe => {
            console.log('Confirm Save', recipe);
              this.dataService.addItem(recipe);
            }
          }
      ]
    });

    await alert.present();
  }

}
