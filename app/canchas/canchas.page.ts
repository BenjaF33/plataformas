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
   canchas ={ nombre: 'Cancha 1', imagen: 'assets/canchas/cancha1.png', descripcion: 'Cancha de fútbol con césped natural.', ubicacion:"cipolletti brasil 746", precio:4000 }
   

  ngOnInit() {
    
  }

}
