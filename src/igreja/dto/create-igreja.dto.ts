import { IsNotEmpty, IsString, MinLength  } from "class-validator";
import { UUID } from "crypto";

export class CreateIgrejaDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string;
}