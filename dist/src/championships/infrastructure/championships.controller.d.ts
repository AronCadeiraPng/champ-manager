import { ChampionshipStartService } from '../use-cases/start-championship/start-championship.service';
import { CreateChampionshipDto } from '../models/dtos/create-championship.dto';
import { ChampionshipCreateService } from '../use-cases/create-championship/create-championship.service';
import { ChampionshipFindService } from '../use-cases/find-championship/find-championship.service';
import { ChampionshipDeleteService } from '../use-cases/delete-championship/delete-championship-solo.service';
import { ChampionshipUpdateService } from '../use-cases/update-championship/update-championship.service';
import { Championship } from '../models/entity/championship.entity';
import { UpdateChampionshipDto } from '../models/dtos/update-championship.dto';
import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { RegistrationTeam } from 'src/registrations-team/models/entity/registration-team.entity';
import { RegistrationSoloFindService } from 'src/registrations-solo/use-cases/find-registration/find-registration.service';
export declare class ChampionshipsController {
    private readonly championshipCreateService;
    private readonly championshipFindService;
    private readonly championshipDeleteService;
    private readonly championshipUpdateService;
    private readonly championshipStartService;
    private readonly registrationSoloFindService;
    constructor(championshipCreateService: ChampionshipCreateService, championshipFindService: ChampionshipFindService, championshipDeleteService: ChampionshipDeleteService, championshipUpdateService: ChampionshipUpdateService, championshipStartService: ChampionshipStartService, registrationSoloFindService: RegistrationSoloFindService);
    createChampionship(createChampionshipDto: CreateChampionshipDto): Promise<Championship>;
    getAllChampionships(): Promise<Championship[]>;
    findChampionshipById(id: string): Promise<Championship>;
    getAllRegistrationsByChampionship(championshipId: string): Promise<RegistrationSolo[] | RegistrationTeam[]>;
    deleteChampionship(id: string): Promise<Championship>;
    updateChampionship(id: string, updateChampionshipDto: UpdateChampionshipDto): Promise<Championship>;
    convertRegistrations(championshipId: string): Promise<import("../../participant/models/entity/participant.entity").Participant[] | undefined>;
}
