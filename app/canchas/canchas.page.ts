import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.page.html',
  styleUrls: ['./canchas.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CanchasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
