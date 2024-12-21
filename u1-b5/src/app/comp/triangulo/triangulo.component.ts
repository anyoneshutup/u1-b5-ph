import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonInput, IonList, IonButton, IonImg, IonCard, 
  IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle} from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonCardSubtitle, IonButton, IonList, CommonModule, IonItem, IonLabel, IonInput, 
    IonImg, FormsModule, IonCard, 
    IonCardContent, IonCardHeader, IonCardTitle]
})

export class TrianguloComponent implements OnInit {

  constructor() { }

  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  resultado: number | null = null;

  ngOnInit() {}

  calcular() {
    if (this.ladoA && this.ladoB && this.ladoC) {
      this.resultado = this.ladoA + this.ladoB + this.ladoC;
    } else {
      this.resultado = null;
    }
  }

}
