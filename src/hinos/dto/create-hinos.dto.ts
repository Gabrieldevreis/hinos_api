import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateHinosDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsInt()
  @Min(1)
  igrejaId: number;
}
