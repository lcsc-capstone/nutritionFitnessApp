import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule} from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { RecordPage } from './record.page';

const routes: Routes = [
  {
    path: '',
    component: RecordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecordPage]
})
export class RecordPageModule {}
