import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CVComponent } from './cv.component';

const routes: Routes = [
  {
    path: '',
    component: CVComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CVRoutingModule { }
