import { ChampionshipsService } from './championships.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';
export declare class ChampionshipsController {
    private readonly championshipsService;
    constructor(championshipsService: ChampionshipsService);
    createChampionship(createChampionshipDto: CreateChampionshipDto): Promise<void>;
}
