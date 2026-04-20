import { RegistrationSolo } from "src/registrations-solo/models/entity/registration.entity";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";
import { RegistrationTeamFindService } from "src/registrations-team/use-cases/find-registration/find-registration.service";
import { ChampionshipFindService } from "../find-championship/find-championship.service";
export declare class ChampionshipFindRegistrationsService {
    private readonly championshipFindService;
    private readonly registrationSoloFindService;
    private readonly registrationTeamFindService;
    constructor(championshipFindService: ChampionshipFindService, registrationSoloFindService: RegistrationSoloFindService, registrationTeamFindService: RegistrationTeamFindService);
    findRegistrations(championshipId: string): Promise<RegistrationSolo[] | undefined>;
}
