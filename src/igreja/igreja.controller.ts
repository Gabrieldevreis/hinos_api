import { Body, Controller, Headers, Post, UnauthorizedException } from '@nestjs/common';
import { IgrejaService } from './igreja.service';
import { CreateIgrejaDto } from './dto/create-igreja.dto';

@Controller('igreja')
export class IgrejaController {
    constructor(private readonly igrejaService: IgrejaService){}

    @Post()
    create(@Body() body:CreateIgrejaDto){
        return this.igrejaService.create(body)
    }

}
