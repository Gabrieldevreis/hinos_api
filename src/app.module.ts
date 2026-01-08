import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { IgrejaModule } from './igreja/igreja.module';
import { HinosModule } from './hinos/hinos.module';

@Module({
  imports: [AuthModule, IgrejaModule, HinosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
