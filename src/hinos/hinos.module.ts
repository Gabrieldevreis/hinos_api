import { Module } from '@nestjs/common';
import { HinosService } from './hinos.service';
import { HinosController } from './hinos.controller';

@Module({
  providers: [HinosService],
  controllers: [HinosController]
})
export class HinosModule {}
