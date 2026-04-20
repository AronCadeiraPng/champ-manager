import { ParticipantCreateService } from "src/participant/use-cases/create-participant/create-participant.service";
import { RegistrationSoloFindService } from "src/registrations-solo/use-cases/find-registration/find-registration.service";
import { ChampionshipFindService } from "../find-championship/find-championship.service";
import { RegistrationTeamFindService } from "src/registrations-team/use-cases/find-registration/find-registration.service";
export declare class ChampionshipStartService {
    private readonly participantCreateService;
    private readonly registrationSoloFindService;
    private readonly registrationTeamFindService;
    private readonly championshipFindService;
    constructor(participantCreateService: ParticipantCreateService, registrationSoloFindService: RegistrationSoloFindService, registrationTeamFindService: RegistrationTeamFindService, championshipFindService: ChampionshipFindService);
    start(championshipId: string): Promise<import("../../../participant/models/entity/participant.entity").Participant[] | undefined>;
}
