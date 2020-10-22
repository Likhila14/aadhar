import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptComponent } from './descript.component';

describe('DescriptComponent', () => {
  let component: DescriptComponent;
  let fixture: ComponentFixture<DescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
