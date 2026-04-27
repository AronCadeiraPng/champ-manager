import { Phase } from "../entity/phase.entity";
import { Repository } from "typeorm";
import { CreatePhaseDto } from "../dtos/create-phase.dto";
export declare class PhaseCreateService {
    private readonly phaseRepository;
    constructor(phaseRepository: Repository<Phase>);
    execute(createPhaseDto: CreatePhaseDto): Promise<Phase>;
}
