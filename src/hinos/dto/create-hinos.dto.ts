import { Optional } from '@nestjs/common';
import { IsInt, IsUUID, Min } from 'class-validator';

export class CreateHinosDto {
  @IsUUID()
  igreja_id: string;

  @IsInt()
  @Min(1)
  hino_numero: number;

  @IsInt()
  @Min(0)
  vezes_chamado: number;
}

