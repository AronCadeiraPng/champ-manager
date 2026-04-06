import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { Repository } from "typeorm";
import { ChampionshipSoloFindService } from "../find-championship/find-championship-solo.service";
export declare class ChampionshipSoloDeleteService {
    private readonly championshipsRepository;
    private readonly championshipSoloFindService;
    constructor(championshipsRepository: Repository<ChampionshipSolo>, championshipSoloFindService: ChampionshipSoloFindService);
    deleteChampionship(id: string): Promise<ChampionshipSolo>;
}
