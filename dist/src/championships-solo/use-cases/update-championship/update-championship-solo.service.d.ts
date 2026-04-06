import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { Repository } from "typeorm";
import { UpdateChampionshipSoloDto } from "src/championships-solo/models/dtos/update-championship-solo.dto";
import { ChampionshipSoloFindService } from "../find-championship/find-championship-solo.service";
export declare class ChampionshipSoloUpdateService {
    private readonly championshipSoloRepository;
    private readonly championshipSoloFindService;
    constructor(championshipSoloRepository: Repository<ChampionshipSolo>, championshipSoloFindService: ChampionshipSoloFindService);
    updateChampionship(id: string, updateChampionshipSoloDto: UpdateChampionshipSoloDto): Promise<ChampionshipSolo>;
}
