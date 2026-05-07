import { PhaseFindService } from "src/phases/use-cases/find-phase/find-phase.service";
import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";
export declare class PlayerFindService {
    private readonly playerRepository;
    private readonly phaseFindService;
    constructor(playerRepository: Repository<Player>, phaseFindService: PhaseFindService);
    byId(id: string): Promise<Player>;
    All(): Promise<Player[]>;
    ByPhase(phaseId: string): Promise<Player[]>;
}
