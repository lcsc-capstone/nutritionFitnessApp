import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NutritionHistoryPage } from './nutrition-history.page';

const routes: Routes = [
  {
    path: '',
    component: NutritionHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NutritionHistoryPage]
})
export class NutritionHistoryPageModule {}
