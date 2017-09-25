import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGeneratorComponent } from './users-generator.component';

describe('UsersGeneratorComponent', () => {
  let component: UsersGeneratorComponent;
  let fixture: ComponentFixture<UsersGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
