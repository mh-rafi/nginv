import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcFormComponent } from './vc-form.component';

describe('VcFormComponent', () => {
  let component: VcFormComponent;
  let fixture: ComponentFixture<VcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
