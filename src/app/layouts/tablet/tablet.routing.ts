import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryTabletComponent } from './tablet.component';

const routes: Routes = [
  {
    path: '',
    component: DiaryTabletComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryTabletRoutingModule { }
