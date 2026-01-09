import { IsString, IsNotEmpty } from 'class-validator';

export class CreateIgrejaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
