import { CreateChampionshipDto } from './dto/create-championship.dto';
import { Championship } from './entities/championship.entity';
import { Repository } from 'typeorm';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { Registration } from 'src/registrations/entities/registration.entity';
export declare class ChampionshipsService {
    private readonly championshipsRepository;
    private readonly registrationsRepository;
    constructor(championshipsRepository: Repository<Championship>, registrationsRepository: Repository<Registration>);
    createChampionship(createChampionshipDto: CreateChampionshipDto): Promise<Championship>;
    updateChampionship(id: string, updateChampionshipDto: UpdateChampionshipDto): Promise<Championship>;
    deleteChampionship(id: string): Promise<Championship>;
    findAllChampionships(): Promise<Championship[]>;
    findAllRegistrations(id: string): Promise<Registration[]>;
    findChampionshipByName(name: string): Promise<Championship | null>;
    findChampionshipById(id: string): Promise<Championship>;
}
