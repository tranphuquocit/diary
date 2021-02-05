import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryDesktopRoutingModule } from './desktop.routing';
import { DiaryDesktopComponent } from './desktop.component';
@NgModule({
  declarations: [
    DiaryDesktopComponent
  ],
  imports: [
    CommonModule,
    DiaryDesktopRoutingModule
  ],
  providers: [],
  bootstrap: [DiaryDesktopComponent]
})
export class DiaryDesktopModule { }
