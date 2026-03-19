import { CreateChampionshipDto } from './dto/create-championship.dto';
import { Championship } from './entities/championship.entity';
import { Repository } from 'typeorm';
export declare class ChampionshipsService {
    private readonly championshipsRepository;
    constructor(championshipsRepository: Repository<Championship>);
    createChampionship(createChampionshipDto: CreateChampionshipDto): Promise<void>;
}
