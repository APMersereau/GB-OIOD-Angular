import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleIdentityComponent } from './sample-identity.component';

describe('SampleIdentityComponent', () => {
  let component: SampleIdentityComponent;
  let fixture: ComponentFixture<SampleIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleIdentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
