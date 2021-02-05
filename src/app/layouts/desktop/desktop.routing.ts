import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryDesktopComponent } from './desktop.component';

const routes: Routes = [
  {
    path: '',
    component: DiaryDesktopComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryDesktopRoutingModule { }
