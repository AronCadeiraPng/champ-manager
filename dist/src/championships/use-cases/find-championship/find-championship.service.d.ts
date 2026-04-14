import { Championship } from "src/championships/models/entity/championship.entity";
import { Repository } from "typeorm";
export declare class ChampionshipFindService {
    private readonly championshipRepository;
    constructor(championshipRepository: Repository<Championship>);
    findAllChampionships(): Promise<Championship[]>;
    findChampionshipByName(name: string): Promise<Championship | null>;
    findChampionshipById(id: string): Promise<Championship>;
}
