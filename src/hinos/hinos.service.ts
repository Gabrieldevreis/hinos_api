import { Injectable } from '@nestjs/common';
import { CreateHinosDto } from './dto/create-hinos.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class HinosService {
    findAll() {
        throw new Error('Method not implemented.');
    }
    create(dto: CreateHinosDto){
        return{
            id:randomUUID(),
            igreja_id: dto.igreja_id,
            hino_numero: dto.hino_numero,
            vezes_chamado: dto.vezes_chamado
        }
    }

    update(id:string,){
        let update_number = 10
        return{
            vezes_chamado:update_number +=1
        }
    }
}
