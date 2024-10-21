import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListElementComponent } from './employee-list-element.component';

describe('EmployeeListElementComponent', () => {
  let component: EmployeeListElementComponent;
  let fixture: ComponentFixture<EmployeeListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
