import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCocheComponent } from './delete-coche-component';

describe('DeleteCocheComponent', () => {
  let component: DeleteCocheComponent;
  let fixture: ComponentFixture<DeleteCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCocheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCocheComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
