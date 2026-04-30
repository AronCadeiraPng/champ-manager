import { Phase } from '../entity/phase.entity';
import { CreatePhaseDto } from '../dtos/create-phase.dto';
import { PhaseCreateService } from '../use-cases/create-phase/create-phase.service';
export declare class PhasesController {
    private readonly phaseCreateService;
    constructor(phaseCreateService: PhaseCreateService);
    createPhase(createPhaseDto: CreatePhaseDto): Promise<Phase>;
}
