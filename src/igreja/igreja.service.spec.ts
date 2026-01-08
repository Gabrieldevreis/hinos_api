import { Test, TestingModule } from '@nestjs/testing';
import { IgrejaService } from './igreja.service';

describe('IgrejaService', () => {
  let service: IgrejaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IgrejaService],
    }).compile();

    service = module.get<IgrejaService>(IgrejaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
