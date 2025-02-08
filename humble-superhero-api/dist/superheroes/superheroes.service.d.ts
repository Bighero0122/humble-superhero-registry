import { Superhero } from './interfaces/superhero.interface';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
export declare class SuperheroesService {
    private superheroes;
    create(createSuperheroDto: CreateSuperheroDto): Superhero;
    findAll(): Superhero[];
}
