import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() { }

  canchas = [
    { nombre: 'Cancha 1', imagen: 'assets/canchas/cancha1.png', descripcion: 'Cancha de fútbol con césped natural.', },
    { nombre: 'Cancha 2', imagen: 'assets/canchas/cancha2.png', descripcion: 'Cancha de baloncesto con superficie de madera.', },
    { nombre: 'Cancha 3', imagen: 'assets/canchas/cancha3.png', descripcion: 'Cancha de tenis con superficie de arcilla.', },
    { nombre: 'Cancha 4', imagen: 'assets/canchas/cancha4.png', descripcion: 'Cancha de voleibol con arena fina.', },
  ];




}
