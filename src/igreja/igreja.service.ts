import { Injectable } from '@nestjs/common';
import { CreateIgrejaDto } from './dto/create-igreja.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class IgrejaService {
    create(dto: CreateIgrejaDto){
        return {
            id: randomUUID(),
            name: dto.name,
        }
    }
}
