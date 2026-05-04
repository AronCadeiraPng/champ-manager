import { CreatePhaseDto } from 'src/phases/dtos/create-phase.dto';
import { Phase } from 'src/phases/entity/phase.entity';
import { ChampionshipFindService } from '../find-championship/find-championship.service';
import { PhaseBuildOctaveService } from 'src/phases/use-cases/build-octave-phase/build-octave-phase.service';
export declare class ChampionshipOctavePhaseService {
    private readonly championshipFindService;
    private readonly buildOctavePhase;
    constructor(championshipFindService: ChampionshipFindService, buildOctavePhase: PhaseBuildOctaveService);
    execute(createPhaseDto: CreatePhaseDto): Promise<Phase>;
}
