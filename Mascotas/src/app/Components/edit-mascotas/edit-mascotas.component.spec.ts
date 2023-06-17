import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMascotasComponent } from './edit-mascotas.component';

describe('EditMascotasComponent', () => {
  let component: EditMascotasComponent;
  let fixture: ComponentFixture<EditMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMascotasComponent]
    });
    fixture = TestBed.createComponent(EditMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
