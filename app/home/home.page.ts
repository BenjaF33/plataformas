import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor(private router: Router) { }

  canchas = [
    { nombre: 'Cancha 1', imagen: 'assets/canchas/cancha1.png', descripcion: 'Cancha de fútbol con césped natural.', ubicacion: 'Cipolletti, Brasil 746', precio: 4000 },
    { nombre: 'Cancha 2', imagen: 'assets/canchas/cancha2.png', descripcion: 'Cancha de baloncesto con superficie de madera.', ubicacion: 'Cipolletti, Belgrano 520', precio: 3500 },
    { nombre: 'Cancha 3', imagen: 'assets/canchas/cancha3.png', descripcion: 'Cancha de tenis con superficie de arcilla.', ubicacion: 'Cipolletti, Roca 115', precio: 3000 },
    { nombre: 'Cancha 4', imagen: 'assets/canchas/cancha4.png', descripcion: 'Cancha de voleibol con arena fina.', ubicacion: 'Cipolletti, Italia 830', precio: 2800 },
  ];


}
