import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeedentifyComponent } from './beedentify.component';

describe('BeedentifyComponent', () => {
  let component: BeedentifyComponent;
  let fixture: ComponentFixture<BeedentifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeedentifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeedentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
