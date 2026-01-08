import { Test, TestingModule } from '@nestjs/testing';
import { IgrejaController } from './igreja.controller';

describe('IgrejaController', () => {
  let controller: IgrejaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IgrejaController],
    }).compile();

    controller = module.get<IgrejaController>(IgrejaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
