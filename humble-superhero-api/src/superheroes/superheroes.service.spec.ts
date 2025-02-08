import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a superhero with valid data', () => {
      const dto: CreateSuperheroDto = {
        name: 'Test Hero',
        superpower: 'Testing',
        humilityScore: 8,
      };

      const result = service.create(dto);

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('createdAt');
      expect(result.name).toBe(dto.name);
      expect(result.superpower).toBe(dto.superpower);
      expect(result.humilityScore).toBe(dto.humilityScore);
    });
  });

  describe('findAll', () => {
    it('should return superheroes sorted by humility score', () => {
      // Create test data
      const heroes = [
        { name: 'Hero 1', superpower: 'Power 1', humilityScore: 5 },
        { name: 'Hero 2', superpower: 'Power 2', humilityScore: 9 },
        { name: 'Hero 3', superpower: 'Power 3', humilityScore: 7 },
      ];

      // Add heroes to service
      heroes.forEach(hero => service.create(hero));

      // Get sorted results
      const result = service.findAll();

      // Verify sorting
      expect(result[0].humilityScore).toBe(9);
      expect(result[1].humilityScore).toBe(7);
      expect(result[2].humilityScore).toBe(5);
    });

    it('should return empty array when no superheroes exist', () => {
      const result = service.findAll();
      expect(result).toEqual([]);
    });
  });
}); 