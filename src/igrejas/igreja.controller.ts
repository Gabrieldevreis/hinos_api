import { Controller, Post, Get, Body } from '@nestjs/common';
import { IgrejaService } from './igreja.service';
import { CreateIgrejaDto } from './dto/create-igreja.dto';

@Controller('igrejas')
export class IgrejaController {
  constructor(private readonly igrejaService: IgrejaService) {}

  @Post()
  criar(@Body() dto: CreateIgrejaDto) {
    return this.igrejaService.criar(dto.nome);
  }

  @Get()
  listar() {
    return this.igrejaService.listar();
  }
}
