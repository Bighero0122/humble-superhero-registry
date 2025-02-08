import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Superheroes (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  describe('POST /superheroes', () => {
    it('should create a superhero with valid data', () => {
      return request(app.getHttpServer())
        .post('/superheroes')
        .send({
          name: 'Test Hero',
          superpower: 'Testing',
          humilityScore: 8,
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body.name).toBe('Test Hero');
          expect(res.body.superpower).toBe('Testing');
          expect(res.body.humilityScore).toBe(8);
        });
    });

    it('should reject superhero with invalid humility score', () => {
      return request(app.getHttpServer())
        .post('/superheroes')
        .send({
          name: 'Test Hero',
          superpower: 'Testing',
          humilityScore: 11, // Invalid score > 10
        })
        .expect(400);
    });

    it('should reject superhero with missing required fields', () => {
      return request(app.getHttpServer())
        .post('/superheroes')
        .send({
          name: 'Test Hero',
          // missing superpower and humilityScore
        })
        .expect(400);
    });
  });

  describe('GET /superheroes', () => {
    it('should return superheroes sorted by humility score', async () => {
      // Create test heroes
      await request(app.getHttpServer())
        .post('/superheroes')
        .send({
          name: 'Less Humble Hero',
          superpower: 'Power 1',
          humilityScore: 5,
        });

      await request(app.getHttpServer())
        .post('/superheroes')
        .send({
          name: 'Most Humble Hero',
          superpower: 'Power 2',
          humilityScore: 9,
        });

      // Test sorting
      return request(app.getHttpServer())
        .get('/superheroes')
        .expect(200)
        .expect((res) => {
          expect(res.body.length).toBe(2);
          expect(res.body[0].humilityScore).toBe(9);
          expect(res.body[1].humilityScore).toBe(5);
        });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
