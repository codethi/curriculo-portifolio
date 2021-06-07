import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasComponent } from './tecnologias.component';

describe('TecnologiasComponent', () => {
  let component: TecnologiasComponent;
  let fixture: ComponentFixture<TecnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
