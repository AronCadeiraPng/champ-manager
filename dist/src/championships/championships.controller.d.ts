import { ChampionshipsService } from './championships.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { Championship } from './entities/championship.entity';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { Registration } from 'src/registrations/entities/registration.entity';
export declare class ChampionshipsController {
    private readonly championshipsService;
    constructor(championshipsService: ChampionshipsService);
    createChampionship(createChampionshipDto: CreateChampionshipDto): Promise<Championship>;
    deleteChampionship(id: string): Promise<Championship>;
    updateChampionship(id: string, updateChampionshipDto: UpdateChampionshipDto): Promise<Championship>;
    findAllRegistrations(id: string): Promise<Registration[]>;
    findChampionshipById(id: string): Promise<Championship>;
    getAllChampionships(): Promise<Championship[]>;
}
