import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reserve a court and keep the last reservation', () => {
    const alertSpy = spyOn(window, 'alert');

    component.reservarCancha(component.canchas[0]);

    expect(component.ultimaReserva).toBe('Cancha 1');
    expect(alertSpy).toHaveBeenCalledWith('Reservaste Cancha 1 (F5) en Cipolletti.');
  });
});
