import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Id1PageRoutingModule } from './id1-routing.module';

import { Id1Page } from './id1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Id1PageRoutingModule
  ],
  declarations: [Id1Page]
})
export class Id1PageModule {}
