import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should create a superhero', () => {
    const superhero = {
      name: 'Test Hero',
      superpower: 'Testing',
      humilityScore: 8,
    };

    const result = controller.create(superhero);
    expect(result.name).toBe(superhero.name);
    expect(result.superpower).toBe(superhero.superpower);
    expect(result.humilityScore).toBe(superhero.humilityScore);
    expect(result.id).toBeDefined();
    expect(result.createdAt).toBeDefined();
  });

  it('should return sorted superheroes', () => {
    const superhero1 = {
      name: 'Hero 1',
      superpower: 'Power 1',
      humilityScore: 5,
    };
    const superhero2 = {
      name: 'Hero 2',
      superpower: 'Power 2',
      humilityScore: 8,
    };

    controller.create(superhero1);
    controller.create(superhero2);

    const result = controller.findAll();
    expect(result[0].humilityScore).toBe(8);
    expect(result[1].humilityScore).toBe(5);
  });
});