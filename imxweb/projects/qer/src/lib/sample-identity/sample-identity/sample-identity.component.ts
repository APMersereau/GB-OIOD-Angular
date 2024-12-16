import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imx-sample-identity',
  templateUrl: './sample-identity.component.html',
  styleUrls: ['./sample-identity.component.scss']
})
export class SampleIdentityComponent {
public description = 'get some user data and display it'
  constructor() { }

  public getuser(): void {
    alert('sampleusertileclicked');
  }
}
