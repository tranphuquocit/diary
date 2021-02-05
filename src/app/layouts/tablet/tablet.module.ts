import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryTabletComponent } from './tablet.component';
import { DiaryTabletRoutingModule } from './tablet.routing';

@NgModule({
  declarations: [
    DiaryTabletComponent
  ],
  imports: [
    CommonModule,
    DiaryTabletRoutingModule
  ],
  providers: [],
  bootstrap: [DiaryTabletComponent]
})
export class DiaryTabletModule { }
