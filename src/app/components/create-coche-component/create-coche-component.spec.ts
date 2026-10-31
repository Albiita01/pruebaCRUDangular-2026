import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCocheComponent } from './create-coche-component';

describe('CreateCocheComponent', () => {
  let component: CreateCocheComponent;
  let fixture: ComponentFixture<CreateCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCocheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCocheComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
