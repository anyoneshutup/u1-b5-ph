import { TrianguloEscaleno } from "./triangulo-escaleno";

export class TrianguloEquilatero extends TrianguloEscaleno {

  constructor(ladoA: number) {
    super("Triangulo Equilatero", ladoA, ladoA, ladoA);
  }

  override calcularPerimetro(): number {
    return this.ladoA * 3;
  }
}