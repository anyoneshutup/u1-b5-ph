import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonSelectOption, IonSelect} from "@ionic/angular/standalone";
import { CirculoComponent } from "../comp/circulo/circulo.component";
import { TrianguloComponent } from "../comp/triangulo/triangulo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,   
    IonItem, IonSelectOption, IonSelect, CommonModule, 
    FormsModule, CirculoComponent, TrianguloComponent],
})
export class HomePage {
  figura: string = ""; // Variable para almacenar la figura seleccionada.

  constructor() {}

  figuraSeleccionada(event: any): void {
    this.figura = event.detail.value; // Actualiza la figura seleccionada.
  }
}