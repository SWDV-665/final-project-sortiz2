import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecipePageRoutingModule } from './recipe-routing.module';
import { RecipePage } from './recipe.page';
import { HttpClientModule } from '@angular/common/http';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [RecipePage, DepositModalComponent],
  entryComponents: [DepositModalComponent]
})
export class RecipePageModule {}
export interface Recipe {
  id: string;
  title: string;
  imageURL: string;
  ingredients: string[];
  instructions: string[];

}



