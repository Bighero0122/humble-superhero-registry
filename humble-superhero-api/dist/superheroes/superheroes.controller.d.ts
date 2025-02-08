import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Superhero } from './interfaces/superhero.interface';
export declare class SuperheroesController {
    private readonly superheroesService;
    constructor(superheroesService: SuperheroesService);
    create(createSuperheroDto: CreateSuperheroDto): Superhero;
    findAll(): Superhero[];
}
