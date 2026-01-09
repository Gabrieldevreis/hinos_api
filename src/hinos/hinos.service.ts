import { Injectable } from '@nestjs/common';
import { Hino } from './interfaces/hinos.interface';

@Injectable()
export class HinosService {
  private hinos: Hino[] = [];

  criar(nome: string, igrejaId: number) {
    const hino = {
      id: this.hinos.length + 1,
      nome,
      igrejaId,
      chamadas: 0,
    };

    this.hinos.push(hino);
    return hino;
  }

  listar() {
    return this.hinos;
  }

  chamarHino(id: number) {
    const hino = this.hinos.find(h => h.id === id);

    if (!hino) {
      return { erro: 'Hino não encontrado' };
    }

    hino.chamadas += 1;
    return hino;
  }
}
