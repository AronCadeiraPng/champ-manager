import { Repository } from "typeorm";
import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { CreateChampionshipSoloDto } from "src/championships-solo/models/dtos/create-championship-solo.dto";
import { ChampionshipSoloFindService } from "../find-championship/find-championship-solo.service";
export declare class ChampionshipSoloCreateService {
    private readonly championshipSoloRepository;
    private readonly championshipFindService;
    constructor(championshipSoloRepository: Repository<ChampionshipSolo>, championshipFindService: ChampionshipSoloFindService);
    createChampionship(createChampionshipDto: CreateChampionshipSoloDto): Promise<ChampionshipSolo>;
}
