import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelClientesComponent } from './painel-clientes.component';

describe('PainelClientesComponent', () => {
  let component: PainelClientesComponent;
  let fixture: ComponentFixture<PainelClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
