import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInitiativeComponent } from './add-initiative.component';

describe('AddInitiativeComponent', () => {
  let component: AddInitiativeComponent;
  let fixture: ComponentFixture<AddInitiativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInitiativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
