import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonInput, IonList, IonButton, IonImg, IonCard, 
  IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonText} from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [IonCardSubtitle, IonButton, IonList, CommonModule, IonItem, IonLabel, IonInput, 
    IonImg, FormsModule, IonCard, 
    IonCardContent, IonCardHeader, IonCardTitle, IonText]
})
export class CirculoComponent implements OnInit {
  radio: number = 0; 
  resultado: number | null = null;

  constructor() { }

  ngOnInit() {}

  calcularPerimetro(): void {
    if (this.radio > 0) {
      this.resultado = 2 * Math.PI * this.radio;
    } else {
      this.resultado = null;
    }
  }
}
