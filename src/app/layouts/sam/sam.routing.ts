import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamComponent } from './sam.component';

const routes: Routes = [
  {
    path: '',
    component: SamComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamRoutingModule { }
