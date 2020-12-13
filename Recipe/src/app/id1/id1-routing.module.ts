import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipePage } from '../recipe/recipe.page';

import { Id1Page } from './id1.page';

const routes: Routes = [
  {
    path: '',
    component: Id1Page
  },
  {
    path: '',
    component: RecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Id1PageRoutingModule {}
