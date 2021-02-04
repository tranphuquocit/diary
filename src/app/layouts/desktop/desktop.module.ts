import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DiaryDesktopRoutingModule } from './desktop.routing';
import { DiaryDesktopComponent } from './desktop.component';
@NgModule({
  declarations: [
    DiaryDesktopComponent
  ],
  imports: [
    BrowserModule,
    DiaryDesktopRoutingModule
  ],
  providers: [],
  bootstrap: [DiaryDesktopComponent]
})
export class DiaryDesktopModule { }
