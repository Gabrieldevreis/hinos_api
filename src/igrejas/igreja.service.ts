import { Injectable } from '@nestjs/common';
import { Igreja } from './interfaces/igreja.interface';

@Injectable()
export class IgrejaService {
  private igrejas: Igreja[] = [];

  criar(nome: string) {
    const igreja = {
      id: this.igrejas.length + 1,
      nome,
    };

    this.igrejas.push(igreja);
    return igreja;
  }

  listar() {
    return this.igrejas;
  }
}
