import { Repository } from "typeorm";
import { Championship } from "src/championships/models/entity/championship.entity";
import { ChampionshipFindService } from "../find-championship/find-championship.service";
import { UpdateChampionshipDto } from "src/championships/models/dtos/update-championship.dto";
export declare class ChampionshipUpdateService {
    private readonly championshipSoloRepository;
    private readonly championshipFindService;
    constructor(championshipSoloRepository: Repository<Championship>, championshipFindService: ChampionshipFindService);
    updateChampionship(id: string, updateChampionshipSoloDto: UpdateChampionshipDto): Promise<Championship>;
}
