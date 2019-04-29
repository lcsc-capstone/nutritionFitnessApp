import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgCalendarModule  } from 'ionic2-calendar';


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
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NutritionHistoryPage]
})
export class NutritionHistoryPageModule {}
