import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamRoutingModule } from './sam.routing';
import { SamComponent } from './sam.component';
@NgModule({
  declarations: [
    SamComponent
  ],
  imports: [
    CommonModule,
    SamRoutingModule
  ],
  providers: [],
  bootstrap: [SamComponent]
})
export class SamModule { }
