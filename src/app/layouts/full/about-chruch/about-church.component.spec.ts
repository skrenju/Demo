import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChurchComponent } from './about-church.component';

describe('AboutChurchComponent', () => {
  let component: AboutChurchComponent;
  let fixture: ComponentFixture<AboutChurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutChurchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
