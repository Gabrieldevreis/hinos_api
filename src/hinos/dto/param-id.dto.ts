import { IsInt, Min } from 'class-validator';

export class ParamIdDto {
  @IsInt()
  @Min(1)
  id: number;
}
