import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCocheComponent } from './update-coche-component';

describe('UpdateCocheComponent', () => {
  let component: UpdateCocheComponent;
  let fixture: ComponentFixture<UpdateCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCocheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCocheComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
