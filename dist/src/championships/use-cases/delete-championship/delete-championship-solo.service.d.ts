import { Repository } from "typeorm";
import { ChampionshipFindService } from "../find-championship/find-championship.service";
import { Championship } from "src/championships/models/entity/championship.entity";
export declare class ChampionshipDeleteService {
    private readonly championshipsRepository;
    private readonly championshipFindService;
    constructor(championshipsRepository: Repository<Championship>, championshipFindService: ChampionshipFindService);
    deleteChampionship(id: string): Promise<Championship>;
}
