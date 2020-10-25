import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverLayCardComponent } from './over-lay-card.component';

describe('OverLayCardComponent', () => {
  let component: OverLayCardComponent;
  let fixture: ComponentFixture<OverLayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverLayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverLayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
