import { Module } from '@nestjs/common';
import { IgrejaController } from './igreja.controller';
import { IgrejaService } from './igreja.service';

@Module({
  controllers: [IgrejaController],
  providers: [IgrejaService]
})
export class IgrejaModule {}
