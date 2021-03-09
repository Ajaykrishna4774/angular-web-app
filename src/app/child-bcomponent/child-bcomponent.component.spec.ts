import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBComponentComponent } from './child-bcomponent.component';

describe('ChildBComponentComponent', () => {
  let component: ChildBComponentComponent;
  let fixture: ComponentFixture<ChildBComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
