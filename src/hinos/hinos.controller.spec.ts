import { Test, TestingModule } from '@nestjs/testing';
import { HinosController } from './hinos.controller';

describe('HinosController', () => {
  let controller: HinosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HinosController],
    }).compile();

    controller = module.get<HinosController>(HinosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
