import { Body, Controller, Get, Param, Post ,Put } from '@nestjs/common';
import { HinosService } from './hinos.service';
import { CreateHinosDto } from './dto/create-hinos.dto';

@Controller('hinos')
export class HinosController {
    constructor(private readonly hinosService: HinosService){}

    @Post()
    create(@Body() body:CreateHinosDto){
        return this.hinosService.create(body)
    }

    @Put(':id')
  update(@Param('id') id: string) {
    return this.hinosService.update(id);
  }
}
