import { CreateChampionshipDto } from './dto/create-championship.dto';
import { Championship } from './entities/championship.entity';
import { Repository } from 'typeorm';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
export declare class ChampionshipsService {
    private readonly championshipsRepository;
    constructor(championshipsRepository: Repository<Championship>);
    createChampionship(createChampionshipDto: CreateChampionshipDto): Promise<Championship>;
    updateChampionship(id: string, updateChampionshipDto: UpdateChampionshipDto): Promise<Championship>;
    deleteChampionship(id: string): Promise<Championship>;
    findAllChampionships(): Promise<Championship[]>;
    findChampionshipByName(name: string): Promise<Championship | null>;
    findChampionshipById(id: string): Promise<Championship>;
}
