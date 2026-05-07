import { Phase } from '../entity/phase.entity';
import { CreatePhaseDto } from '../dtos/create-phase.dto';
import { PhaseCreateService } from '../use-cases/create-phase/create-phase.service';
import { PhaseFindService } from '../use-cases/find-phase/find-phase.service';
import { PhaseBuildOctaveService } from '../use-cases/build-octave-phase/build-octave-phase.service';
export declare class PhasesController {
    private readonly phaseCreateService;
    private readonly phaseFindService;
    private readonly phaseBuildOctaveService;
    constructor(phaseCreateService: PhaseCreateService, phaseFindService: PhaseFindService, phaseBuildOctaveService: PhaseBuildOctaveService);
    startOctave(championshipId: string): Promise<void>;
    createPhase(createPhaseDto: CreatePhaseDto): Promise<Phase>;
    findByChampionship(championshipId: string): Promise<Phase[]>;
}
