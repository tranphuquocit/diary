import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamRoutingModule } from './sam.routing';
import { SamComponent } from './sam.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SamRoutingModule
  ],
  providers: [],
  bootstrap: [SamComponent]
})
export class SamModule { }
