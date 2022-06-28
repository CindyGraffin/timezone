import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorlogeContainerComponent } from './horloge-container.component';

describe('HorlogeContainerComponent', () => {
  let component: HorlogeContainerComponent;
  let fixture: ComponentFixture<HorlogeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorlogeContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorlogeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
