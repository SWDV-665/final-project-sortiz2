import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Recipe } from './recipe/recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  recipes: Recipe[] = [
    {
      id:'id1',
      title: 'Spaghetti',
      imageURL: 'img/spaghetti.jpg',
      ingredients: ['Olive oil', 'spaghetti', 'cheese'],
      instructions: ['Bring a large pot of lightly salted water to a boil. Cook spaghetti in the boiling water, stirring occasionally until cooked through but firm to the bite, about 12 minutes. Drain and transfer to a pasta bowl.']
    },
    {
      id:'id2',
      title: 'French Toast',
      imageURL: '',
      ingredients: ['bread', 'egg', 'milk'],
      instructions: ['awoiejfoiajwefojawef']
    }
  ];

  constructor() {
    console.log("Hello RecipeService Service");
  }
  getItems(){
    return this.recipes;
  }
  addItem(recipe){
    this.recipes.push(recipe);
  }

}
