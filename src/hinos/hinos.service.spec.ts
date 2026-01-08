import { Test, TestingModule } from '@nestjs/testing';
import { HinosService } from './hinos.service';

describe('HinosService', () => {
  let service: HinosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HinosService],
    }).compile();

    service = module.get<HinosService>(HinosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
