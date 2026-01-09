import { Controller, Post, Get, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { HinosService } from './hinos.service';
import { CreateHinosDto } from './dto/create-hinos.dto';
import { ParamIdDto } from './dto/param-id.dto';

@Controller('hinos')
export class HinosController {
  constructor(private readonly hinoService: HinosService) {}

  @Post()
  criar(@Body() dto: CreateHinosDto) {
    return this.hinoService.criar(dto.nome, dto.igrejaId);
  }

  @Get()
  listar() {
    return this.hinoService.listar();
  }

  @Patch(':id/chamar')
chamar(@Param('id', ParseIntPipe) id: number) {
  return this.hinoService.chamarHino(id);
}
}
