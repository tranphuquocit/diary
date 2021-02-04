import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DiaryTabletComponent } from './tablet.component';
import { DiaryTabletRoutingModule } from './tablet.routing';

@NgModule({
  declarations: [
    DiaryTabletComponent
  ],
  imports: [
    BrowserModule,
    DiaryTabletRoutingModule
  ],
  providers: [],
  bootstrap: [DiaryTabletComponent]
})
export class DiaryTabletModule { }
