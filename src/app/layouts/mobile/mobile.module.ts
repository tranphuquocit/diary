import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryMobileComponent } from './mobile.component';
import { DiaryMobileRoutingModule } from './mobile.routing';

@NgModule({
  declarations: [
    DiaryMobileComponent
  ],
  imports: [
    CommonModule,
    DiaryMobileRoutingModule
  ],
  providers: [],
  bootstrap: [DiaryMobileComponent]
})
export class DiaryMobileModule { }
