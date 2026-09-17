import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.page.html',
  styleUrls: ['./canchas.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CanchasPage implements OnInit {

  constructor() { 
   
  }
  canchas = { nombre: 'Cancha 1', imagen: 'assets/canchas/cancha1.png', descripcion: 'Cancha de fútbol con césped natural.', ubicacion: 'cipolletti brasil 746', precio: 4000 };

  reviews = [
    {
      nombre: 'Matias Gonzalez',
      imagen: 'assets/canchas/cancha2.png',
      estrellas: 5,
      estrellasVisuales: '★★★★★',
      comentario: 'La cancha está impecable y el proceso de reserva fue muy rápido.',
    },
    {
      nombre: 'Sofia Martinez',
      imagen: 'assets/canchas/cancha3.png',
      estrellas: 5,
      estrellasVisuales: '★★★★★',
      comentario: 'Muy buen espacio para jugar con amigos. Volveremos la próxima semana.',
    },
    {
      nombre: 'Lucas Fernandez',
      imagen: 'assets/canchas/cancha4.png',
      estrellas: 4,
      estrellasVisuales: '★★★★☆',
      comentario: 'Buena ubicación, atención amable y una cancha en muy buenas condiciones.',
    },
  ];
   


  }

}
