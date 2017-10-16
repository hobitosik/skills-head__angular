import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTiketComponent } from './edit-tiket.component';

describe('EditTiketComponent', () => {
  let component: EditTiketComponent;
  let fixture: ComponentFixture<EditTiketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTiketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
