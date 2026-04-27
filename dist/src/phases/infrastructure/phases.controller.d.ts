import { PhaseCreateService } from '../use-cases/create-phase.service';
import { Phase } from '../entity/phase.entity';
import { CreatePhaseDto } from '../dtos/create-phase.dto';
export declare class PhasesController {
    private readonly phaseCreateService;
    constructor(phaseCreateService: PhaseCreateService);
    createPhase(createPhaseDto: CreatePhaseDto): Promise<Phase>;
}
