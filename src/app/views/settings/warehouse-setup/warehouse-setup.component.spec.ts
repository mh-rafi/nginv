import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseSetupComponent } from './warehouse-setup.component';

describe('WarehouseSetupComponent', () => {
  let component: WarehouseSetupComponent;
  let fixture: ComponentFixture<WarehouseSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
