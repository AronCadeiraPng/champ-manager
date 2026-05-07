import { Phase } from "src/phases/entity/phase.entity";
export declare class PhaseFindService {
    private readonly phaseRepository;
    ById(id: string): Promise<Phase>;
    ByChampionship(championshipId: string): Promise<Phase[]>;
}
