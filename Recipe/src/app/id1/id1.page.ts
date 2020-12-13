import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Recipe } from '../recipe/recipe.module';
import { RecipePage } from '../recipe/recipe.page';
@Component({
  selector: 'app-id1',
  templateUrl: './id1.page.html',
  styleUrls: ['./id1.page.scss'],
})
export class Id1Page implements OnInit{
  constructor(private activatedRoute:ActivatedRoute) { }

  

  ngOnInit() {
  }
}
