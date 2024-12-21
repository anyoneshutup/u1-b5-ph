import { FiguraGeometrica } from './figura-geometrica';

export class Circulo extends FiguraGeometrica {
  radio: number

  constructor(nombre: string, radio: number)  {
    super(nombre);
    this.radio = radio
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}