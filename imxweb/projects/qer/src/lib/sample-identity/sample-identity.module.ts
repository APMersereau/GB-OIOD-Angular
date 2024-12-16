import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleIdentityComponent } from './sample-identity/sample-identity.component';



@NgModule({
  declarations: [
    SampleIdentityComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ SampleIdentityComponent]
})
export class SampleIdentityModule { }
