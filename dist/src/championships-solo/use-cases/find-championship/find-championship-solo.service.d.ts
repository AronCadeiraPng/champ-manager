import { ChampionshipSolo } from "src/championships-solo/models/entity/championship-solo.entity";
import { Repository } from "typeorm";
export declare class ChampionshipSoloFindService {
    private readonly championshipSoloRepository;
    constructor(championshipSoloRepository: Repository<ChampionshipSolo>);
    findAllChampionshipsSolo(): Promise<ChampionshipSolo[]>;
    findChampionshipSoloByName(name: string): Promise<ChampionshipSolo | null>;
    findChampionshipSoloById(id: string): Promise<ChampionshipSolo>;
}
