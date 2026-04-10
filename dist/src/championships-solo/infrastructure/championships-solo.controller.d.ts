import { ChampionshipSoloFindService } from '../use-cases/find-championship/find-championship-solo.service';
import { ChampionshipSoloDeleteService } from '../use-cases/delete-championship/delete-championship-solo.service';
import { ChampionshipSoloCreateService } from '../use-cases/create-championship/create-championship-solo.service';
import { ChampionshipSoloUpdateService } from '../use-cases/update-championship/update-championship-solo.service';
import { ChampionshipSolo } from '../models/entity/championship-solo.entity';
import { UpdateChampionshipSoloDto } from '../models/dtos/update-championship-solo.dto';
import { CreateChampionshipSoloDto } from '../models/dtos/create-championship-solo.dto';
import { ChampionshipStartService } from '../use-cases/start-championship/start-championship.service';
export declare class ChampionshipsController {
    private readonly championshipCreateService;
    private readonly championshipFindService;
    private readonly championshipDeleteService;
    private readonly championshipUpdateService;
    private readonly championshipStartService;
    constructor(championshipCreateService: ChampionshipSoloCreateService, championshipFindService: ChampionshipSoloFindService, championshipDeleteService: ChampionshipSoloDeleteService, championshipUpdateService: ChampionshipSoloUpdateService, championshipStartService: ChampionshipStartService);
    createChampionship(createChampionshipDto: CreateChampionshipSoloDto): Promise<ChampionshipSolo>;
    getAllChampionships(): Promise<ChampionshipSolo[]>;
    deleteChampionship(id: string): Promise<ChampionshipSolo>;
    updateChampionship(id: string, updateChampionshipDto: UpdateChampionshipSoloDto): Promise<ChampionshipSolo>;
    findChampionshipById(id: string): Promise<ChampionshipSolo>;
    convertRegistrations(championshipId: string): Promise<import("../../players/models/entity/player.entity").Player[]>;
}
