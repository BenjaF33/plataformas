import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

type TipoCancha = 'F5' | 'F7' | 'F8' | 'F11';

interface Cancha {
  nombre: string;
  imagen: string;
  descripcion: string;
  tipo: TipoCancha;
  ubicacion: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  searchTerm = '';
  activeFilter: TipoCancha | 'Todos' = 'Todos';
  ultimaReserva = '';

  filtros: Array<TipoCancha | 'Todos'> = ['Todos', 'F5', 'F7', 'F8', 'F11'];

  canchas: Cancha[] = [
    {
      nombre: 'Cancha 1',
      imagen: 'assets/canchas/cancha1.png',
      descripcion: 'Cancha de fútbol con césped natural.',
      tipo: 'F5',
      ubicacion: 'Cipolletti',
    },
    {
      nombre: 'Cancha 2',
      imagen: 'assets/canchas/cancha2.png',
      descripcion: 'Cancha de baloncesto con superficie de madera.',
      tipo: 'F7',
      ubicacion: 'Cipolletti',
    },
    {
      nombre: 'Cancha 3',
      imagen: 'assets/canchas/cancha3.png',
      descripcion: 'Cancha de tenis con superficie de arcilla.',
      tipo: 'F8',
      ubicacion: 'Cipolletti',
    },
    {
      nombre: 'Cancha 4',
      imagen: 'assets/canchas/cancha4.png',
      descripcion: 'Cancha de voleibol con arena fina.',
      tipo: 'F11',
      ubicacion: 'Cipolletti',
    },
  ];

  get filteredCanchas(): Cancha[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.canchas.filter((cancha) => {
      const matchesFilter = this.activeFilter === 'Todos' || cancha.tipo === this.activeFilter;
      const matchesSearch =
        !term ||
        cancha.nombre.toLowerCase().includes(term) ||
        cancha.descripcion.toLowerCase().includes(term) ||
        cancha.tipo.toLowerCase().includes(term);

      return matchesFilter && matchesSearch;
    });
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    this.searchTerm = input?.value ?? '';
  }

  setFilter(filter: TipoCancha | 'Todos'): void {
    this.activeFilter = filter;
  }

  reservarCancha(cancha: Cancha): void {
    this.ultimaReserva = cancha.nombre;
    window.alert(`Reservaste ${cancha.nombre} (${cancha.tipo}) en ${cancha.ubicacion}.`);
  }
}
