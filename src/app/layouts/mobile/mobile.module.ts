import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DiaryMobileComponent } from './mobile.component';
import { DiaryMobileRoutingModule } from './mobile.routing';

@NgModule({
  declarations: [
    DiaryMobileComponent
  ],
  imports: [
    BrowserModule,
    DiaryMobileRoutingModule
  ],
  providers: [],
  bootstrap: [DiaryMobileComponent]
})
export class DiaryMobileModule { }
