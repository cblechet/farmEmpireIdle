import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenCoopComponent } from './chicken-coop.component';

describe('ChickenCoopComponent', () => {
  let component: ChickenCoopComponent;
  let fixture: ComponentFixture<ChickenCoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChickenCoopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChickenCoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
