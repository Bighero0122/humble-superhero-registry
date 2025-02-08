import { Injectable } from '@nestjs/common';
import { Superhero } from './interfaces/superhero.interface';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    const superhero: Superhero = {
      id: uuidv4(),
      ...createSuperheroDto,
      createdAt: new Date(),
    };
    this.superheroes.push(superhero);
    return superhero;
  }

  findAll(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
} 