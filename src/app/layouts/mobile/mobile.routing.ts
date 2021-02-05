import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryMobileComponent } from './mobile.component';


const routes: Routes = [
  {
    path: '',
    component: DiaryMobileComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryMobileRoutingModule { }
