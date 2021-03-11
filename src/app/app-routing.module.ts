import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sam',
    pathMatch: 'full'
  },
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
  {
    path: 'cv',
    loadChildren: () => import('./layouts/cv/cv.module').then(cv => cv.CVModule)
  },{
    path: 'sam',
    loadChildren: () => import('./layouts/sam/sam.module').then(sam => sam.SamModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
