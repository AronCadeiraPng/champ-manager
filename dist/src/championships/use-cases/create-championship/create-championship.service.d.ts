import { Repository } from "typeorm";
import { SportFindService } from "src/sports/use-cases/find-sport/find-sport.service";
import { Championship } from "src/championships/models/entity/championship.entity";
import { CreateChampionshipDto } from "src/championships/models/dtos/create-championship.dto";
import { ChampionshipFindService } from "../find-championship/find-championship.service";
export declare class ChampionshipCreateService {
    private readonly championshipRepository;
    private readonly championshipFindService;
    private readonly sportFindService;
    constructor(championshipRepository: Repository<Championship>, championshipFindService: ChampionshipFindService, sportFindService: SportFindService);
    createChampionship(createChampionshipDto: CreateChampionshipDto): Promise<Championship>;
}
