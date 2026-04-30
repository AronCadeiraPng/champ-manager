import { BuildGroupPhaseService } from 'src/phases/use-cases/build-group-phase/build-group-phase.service';
import { ChampionshipFindService } from '../find-championship/find-championship.service';
import { CreatePhaseDto } from 'src/phases/dtos/create-phase.dto';
export declare class StartGroupPhaseService {
    private readonly buildGroupPhaseService;
    private readonly championshipFindService;
    constructor(buildGroupPhaseService: BuildGroupPhaseService, championshipFindService: ChampionshipFindService);
    execute(createPhaseDto: CreatePhaseDto): Promise<CreatePhaseDto & import("../../../phases/entity/phase.entity").Phase>;
}
