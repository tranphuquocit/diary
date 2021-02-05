import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CVRoutingModule } from './cv.routing';
import { CVComponent } from './cv.component';
@NgModule({
  declarations: [
    CVComponent
  ],
  imports: [
    CommonModule,
    CVRoutingModule
  ],
  providers: [],
  bootstrap: [CVComponent]
})
export class CVModule { }
