import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/desktop/desktop.module').then(d => d.DiaryDesktopModule)
  },
  {
    path: 'm',
    loadChildren: () => import('./layouts/mobile/mobile.module').then(m => m.DiaryMobileModule)
  },
  {
    path: 't',
    loadChildren: () => import('./layouts/tablet/tablet.module').then(t => t.DiaryTabletModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
