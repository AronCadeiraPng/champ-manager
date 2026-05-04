import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
import { CreatePhaseDto } from 'src/phases/dtos/create-phase.dto';
import { Phase } from 'src/phases/entity/phase.entity';
import { Repository } from 'typeorm';
export declare class PhaseBuildOctaveService {
    private readonly phaseRepository;
    private readonly championshipFindService;
    constructor(phaseRepository: Repository<Phase>, championshipFindService: ChampionshipFindService);
    execute(createPhaseDto: CreatePhaseDto): Promise<void>;
}
